/* The writing engine: one practice cell where the learner writes a character
 * stroke by stroke. It draws the guides for the chosen assist level, grades
 * each stroke against KanjiVG's reference, renders ink in the chosen style,
 * and finishes with a style-specific mark (teacher's hanamaru, hanko seal or
 * neon sign). Coordinates are kept in the 109-unit box and scaled on render. */
window.NH = window.NH || {};

(function () {
  const { h, s, Geo, Ink, Audio, clamp, rand, lerp } = NH;
  const BOX = 109;

  const NEON = ["#ff3ea5", "#38f3ff", "#ffe14d", "#b46bff", "#5dff9e", "#ff8a3d"];
  const SHU = "#c8382e";

  // How much help each assist level gives.
  const ASSIST = {
    trace: { ghost: 1, numbers: "all", loopHint: true, startDot: true, hintAfter: 1 },
    guide: { ghost: 0.5, numbers: "next", loopHint: false, startDot: true, hintAfter: 2 },
    memory: { ghost: 0, numbers: "none", loopHint: false, startDot: false, hintAfter: 3 },
  };

  const GRADES = {
    accuracy: [[90, "hanamaru", "Hanamaru! 花丸"], [75, "double", "Excellent ◎"], [60, "single", "Good ○"], [0, "triangle", "Almost △"]],
    calligraphy: [[90, "秀", "秀 shū · outstanding"], [75, "優", "優 yū · excellent"], [60, "良", "良 ryō · good"], [0, "可", "可 ka · passing"]],
    neon: [[90, "完璧", "完璧 kanpeki · perfect"], [75, "上手", "上手 jōzu · skilful"], [60, "いいね", "いいね · nice"], [0, "もう一回", "もう一回 · once more"]],
  };
  const gradeFor = (style, score) => GRADES[style].find(([min]) => score >= min);

  let uid = 0;

  class Writer {
    constructor(host, opts = {}) {
      this.host = host;
      this.style = opts.style || "accuracy";
      this.assist = opts.assist || "trace";
      this.onEvent = opts.onEvent || (() => {});
      this.colorIndex = opts.colorIndex || 0;
      this.id = "w" + uid++;
      this.particles = [];
      this.anim = new Set(); // running tube animations (neon)
      this.build();
      this.ro = new ResizeObserver(() => this.layout());
      this.ro.observe(this.host);
    }

    build() {
      this.host.classList.add("cell");
      this.guides = s("svg.guides", { viewBox: `0 0 ${BOX} ${BOX}`, "aria-hidden": "true" });
      this.ghost = s("svg.ghost", { viewBox: `0 0 ${BOX} ${BOX}`, "aria-hidden": "true" });
      this.ink = h("canvas.ink");
      this.live = h("canvas.live");
      this.hints = s("svg.hints", { viewBox: `0 0 ${BOX} ${BOX}`, "aria-hidden": "true" });
      this.marks = s("svg.marks", { viewBox: `0 0 ${BOX} ${BOX}`, "aria-hidden": "true" });
      this.badges = h("div.badges");
      this.host.append(this.guides, this.ghost, this.ink, this.live, this.hints, this.marks, this.badges);
      this.fx = h("canvas.fx", { "aria-hidden": "true" });
      document.body.append(this.fx);
      this.live.setAttribute("role", "img");
      this.live.setAttribute("aria-label", "Writing area. Draw the character with your finger, pen or mouse.");
      // Screen readers get every stroke described in words.
      this.desc = h("div.vh", { id: `${this.id}-desc` });
      this.host.append(this.desc);
      this.live.setAttribute("aria-describedby", this.desc.id);
      this.bindPointer();
    }

    destroy() {
      this.ro.disconnect();
      cancelAnimationFrame(this.raf);
      cancelAnimationFrame(this.fxRaf);
      this.demoToken = null;
      Audio.drawEnd();
      this.fx.remove();
    }

    // ── setup ──────────────────────────────────────────────
    setChar(ch, colorIndex = this.colorIndex) {
      this.ch = ch;
      this.host.dataset.char = ch;
      this.colorIndex = colorIndex;
      this.color = NEON[colorIndex % NEON.length];
      this.strokes = Geo.strokesOf(ch);
      this.desc.textContent = `${ch}, ${this.strokes.length} stroke${this.strokes.length === 1 ? "" : "s"}. ` +
        this.strokes.map((st, i) => `Stroke ${i + 1} ${Geo.describe(st)}.`).join(" ");
      this.reset();
    }

    reset() {
      this.done = new Set();
      this.user = []; // accepted strokes: { pts (box units, with t/p), acc, idx }
      this.tubes = []; // neon: { idx, pts, born, from }
      this.misses = 0;
      this.missesHere = 0;
      this.finished = false;
      this.demoToken = null;
      this.marks.replaceChildren();
      this.badges.replaceChildren();
      this.layout();
    }

    setStyle(style) {
      this.style = style;
      // Strokes written in another style become lit tubes straight away.
      if (style === "neon" && this.tubes.length < this.user.length) {
        const born = performance.now() - 2000;
        this.tubes = this.user.map((u) => ({ idx: u.idx, from: this.strokes[u.idx].pts, to: this.strokes[u.idx].pts, born, color: this.color }));
      }
      this.layout();
      if (this.finished) this.finish(true);
    }

    setAssist(assist) {
      this.assist = assist;
      this.drawGhost();
      this.drawHints();
    }

    describeStroke(i) { return this.strokes[i] ? `Stroke ${i + 1} ${Geo.describe(this.strokes[i])}.` : ""; }

    get next() {
      if (!this.strokes) return -1;
      for (let i = 0; i < this.strokes.length; i++) if (!this.done.has(i)) return i;
      return -1;
    }

    layout() {
      const size = Math.floor(Math.min(this.host.clientWidth, this.host.clientHeight || this.host.clientWidth));
      if (!size) return;
      this.size = size;
      this.k = size / BOX;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      for (const c of [this.ink, this.live]) {
        c.width = Math.round(size * this.dpr);
        c.height = Math.round(size * this.dpr);
        c.getContext("2d").setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      }
      this.sizeFx();
      this.drawGuides();
      this.drawGhost();
      this.drawHints();
      this.renderInk();
    }

    sizeFx() {
      const d = this.dpr || 1;
      this.fx.width = Math.round(innerWidth * d);
      this.fx.height = Math.round(innerHeight * d);
      this.fx.getContext("2d").setTransform(d, 0, 0, d, 0, 0);
    }

    // Brush/pen width in px for the current cell.
    get w() {
      return this.size * (this.style === "calligraphy" ? 0.064 : this.style === "neon" ? 0.06 : 0.07);
    }

    toPx(p) { return { x: p.x * this.k, y: p.y * this.k, t: p.t, p: p.p }; }

    // ── static layers ──────────────────────────────────────
    drawGuides() {
      const g = this.guides;
      g.replaceChildren();
      const mid = BOX / 2;
      // The dashed cross of a Japanese practice notebook (十字リーダー).
      g.append(
        s("line.cross", { x1: mid, y1: 3, x2: mid, y2: BOX - 3 }),
        s("line.cross", { x1: 3, y1: mid, x2: BOX - 3, y2: mid })
      );
      if (this.style === "calligraphy") {
        // Fold marks on a sheet of hanshi.
        g.append(s("line.fold", { x1: 3, y1: 3, x2: BOX - 3, y2: BOX - 3 }), s("line.fold", { x1: BOX - 3, y1: 3, x2: 3, y2: BOX - 3 }));
      }
    }

    drawGhost() {
      const g = this.ghost;
      g.replaceChildren();
      if (!this.strokes) return;
      const a = ASSIST[this.assist];
      g.style.opacity = a.ghost;
      const next = this.next;
      if (a.ghost > 0 && this.style !== "neon") {
        this.strokes.forEach((st, i) => g.append(s("path.gs", { d: st.d, class: i === next && this.assist === "trace" ? "is-next" : "" })));
      }
      this.strokes.forEach((st, i) => {
        const show = a.numbers === "all" ? !this.done.has(i) : a.numbers === "next" ? i === next : false;
        if (!show) return;
        const p = Geo.labelPos(st);
        g.append(s("g.num", { class: i === next ? "is-next" : "", transform: `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})` },
          s("circle", { r: 4.6 }), s("text", { "text-anchor": "middle", dy: "1.9" }, String(i + 1))));
      });
      if (this.style === "neon") g.style.opacity = 1;
    }

    // Animated guidance for the next stroke.
    drawHints(force = false) {
      const g = this.hints;
      g.replaceChildren();
      const i = this.next;
      if (i < 0 || this.finished || !this.strokes) return;
      const a = ASSIST[this.assist];
      const st = this.strokes[i];
      const showLoop = a.loopHint || force;
      if (showLoop) {
        const id = `${this.id}-p${i}`;
        g.append(
          s("path.hint-path", { id, d: st.d, pathLength: "100", class: force && !a.loopHint ? "once" : "" }),
          s("circle.hint-pen", { r: 3.2 },
            s("animateMotion", { dur: `${(0.5 + st.len / 90).toFixed(2)}s`, repeatCount: force && !a.loopHint ? "2" : "indefinite", rotate: "auto", fill: "freeze" },
              s("mpath", { href: `#${id}` })))
        );
        // arrowhead at the stroke end
        const p = st.pts[st.pts.length - 1], q = st.pts[st.pts.length - 4];
        const ang = (Math.atan2(p.y - q.y, p.x - q.x) * 180) / Math.PI;
        g.append(s("path.hint-arrow", { d: "M-3,-3 L1.5,0 L-3,3", transform: `translate(${p.x} ${p.y}) rotate(${ang})` }));
      }
      if (a.startDot || force) {
        const p0 = st.pts[0];
        g.append(s("circle.hint-start", { cx: p0.x, cy: p0.y, r: 2.6 }));
      }
    }

    // ── ink ────────────────────────────────────────────────
    renderInk(now = performance.now()) {
      const c = this.ink.getContext("2d");
      c.clearRect(0, 0, this.size, this.size);
      if (!this.strokes) return;
      const w = this.w;
      if (this.style === "neon") {
        if (ASSIST[this.assist].ghost > 0 || this.finished) {
          this.strokes.forEach((st, i) => {
            if (!this.done.has(i)) Ink.tube(c, st.raw.map((p) => this.toPx(p)), { w });
          });
        }
        let animating = false;
        for (const tb of this.tubes) {
          const age = now - tb.born;
          const morph = clamp(age / 240, 0, 1);
          const e = 1 - Math.pow(1 - morph, 3);
          const pts = tb.to.map((p, j) => this.toPx({ x: lerp(tb.from[j].x, p.x, e), y: lerp(tb.from[j].y, p.y, e) }));
          let I = 1;
          if (age < 700) {
            animating = true;
            const f = age < 240 ? 0.55 : [0.1, 1, 0.3, 1, 0.6, 1, 1][Math.floor((age - 240) / 65)] ?? 1;
            I = f;
          }
          if (tb.surge) {
            const sa = now - tb.surge;
            if (sa < 1400) { animating = true; I *= 1 + 0.6 * Math.max(0, Math.sin(sa / 70)) * (1 - sa / 1400); }
          }
          Ink.neon(c, pts, { w, color: tb.color, intensity: I });
        }
        if (animating) {
          cancelAnimationFrame(this.raf);
          this.raf = requestAnimationFrame((t) => this.renderInk(t));
        }
      } else {
        for (const u of this.user) this.paint(c, u.pts.map((p) => this.toPx(p)), false);
      }
    }

    paint(ctx, pts, live) {
      const w = this.w;
      if (this.style === "calligraphy") Ink.brush(ctx, pts, { w, scale: 360 / this.size, live });
      else if (this.style === "neon") Ink.neon(ctx, pts, { w, color: this.color, intensity: live ? 0.85 : 1, live });
      else Ink.pencil(ctx, pts, { w });
    }

    renderLive() {
      const c = this.live.getContext("2d");
      c.clearRect(0, 0, this.size, this.size);
      if (this.cur && this.cur.length) this.paint(c, this.cur, true);
    }

    // ── input ──────────────────────────────────────────────
    bindPointer() {
      const el = this.live;
      const pos = (e) => {
        const r = el.getBoundingClientRect();
        return { x: e.clientX - r.left, y: e.clientY - r.top, t: e.timeStamp, p: e.pressure };
      };
      // Palm rejection: while a stylus is in use (touching, or lifted less than
      // PEN_GRACE ms ago) touches are a resting hand, not writing. A pen that
      // lands while a touch "stroke" is in progress replaces it.
      const PEN_GRACE = 1500;
      const penBusy = (t) => this.penDown || t - (this.lastPen || -Infinity) < PEN_GRACE;
      const isPalm = (e) => e.pointerType === "touch" && (penBusy(e.timeStamp) || (e.width > 40 && e.height > 40));
      const notePen = (e) => { if (e.pointerType === "pen") this.lastPen = e.timeStamp; };
      for (const type of ["pointermove", "pointerup"]) el.addEventListener(type, notePen);

      el.addEventListener("pointerdown", (e) => {
        if (this.finished || this.demoToken || this.next < 0) return;
        if (e.pointerType === "pen") {
          this.penDown = true;
          this.lastPen = e.timeStamp;
          if (this.pointer != null && this.pointerType === "touch") {
            // the palm got there first: drop its stroke and write with the pen
            Audio.drawEnd();
            this.pointer = null;
            this.cur = null;
            this.renderLive();
          }
        }
        if (isPalm(e)) { e.preventDefault(); return; }
        if (this.pointer != null) return;
        e.preventDefault();
        Audio.unlock();
        try { el.setPointerCapture(e.pointerId); } catch (_) {}
        this.pointer = e.pointerId;
        this.pointerType = e.pointerType;
        this.cur = [pos(e)];
        this.lastFx = 0;
        this.live.classList.remove("fade");
        Audio.drawStart(this.style);
        this.renderLive();
      });
      el.addEventListener("pointermove", (e) => {
        if (e.pointerId !== this.pointer) return;
        const evs = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
        for (const ev of evs.length ? evs : [e]) {
          const p = pos(ev);
          const l = this.cur[this.cur.length - 1];
          if (Math.hypot(p.x - l.x, p.y - l.y) < 0.8) continue;
          this.cur.push(p);
        }
        const n = this.cur.length;
        if (n > 2) {
          const a = this.cur[n - 1], b = this.cur[Math.max(0, n - 4)];
          const v = Math.hypot(a.x - b.x, a.y - b.y) / Math.max(8, a.t - b.t) * (360 / this.size);
          Audio.drawMove(v / 1.6);
          this.penFx(a, v);
        }
        if (!this.liveQueued) {
          this.liveQueued = true;
          requestAnimationFrame(() => { this.liveQueued = false; this.renderLive(); });
        }
      });
      const up = (e) => {
        if (e.pointerType === "pen") this.penDown = false;
        if (e.pointerId !== this.pointer) return;
        this.pointer = null;
        Audio.drawEnd();
        const pts = this.cur;
        this.cur = null;
        if (pts && pts.length) this.evaluate(pts);
      };
      el.addEventListener("pointerup", up);
      el.addEventListener("pointercancel", (e) => {
        if (e.pointerType === "pen") this.penDown = false;
        if (e.pointerId !== this.pointer) return;
        this.pointer = null;
        this.cur = null;
        Audio.drawEnd();
        this.renderLive();
      });
    }

    evaluate(pxPts) {
      const box = pxPts.map((p) => ({ x: p.x / this.k, y: p.y / this.k, t: p.t, p: p.p }));
      const expected = this.next;
      const res = Geo.judge(box, this.strokes, expected, this.done, this.assist);
      if (res.status === "ok") {
        // A hane stroke written without its flick still counts, with a tip and a small deduction.
        const ref = this.strokes[expected];
        const hane = ref.hane ? (Geo.hasHook(box) ? "ok" : "missing") : null;
        const acc = hane === "missing" ? Math.max(0, res.grade.accuracy - 8) : res.grade.accuracy;
        this.accept(expected, box, pxPts, acc, hane);
      }
      else this.reject(res, pxPts);
    }

    accept(idx, box, pxPts, acc, hane = null) {
      this.done.add(idx);
      this.user.push({ idx, pts: box, acc, hane });
      this.missesHere = 0;
      Audio.accept(this.style, this.done.size - 1, this.strokes.length);
      Audio.vibrate("accept");
      const ref = this.strokes[idx];
      const end = pxPts[pxPts.length - 1];
      if (this.style === "neon") {
        const N = ref.pts.length;
        this.tubes.push({ idx, from: Geo.resample(box, N), to: ref.pts, born: performance.now(), color: this.color });
        this.sparks(ref.pts.map((p) => this.toPx(p)), this.color, 22);
      } else if (this.style === "calligraphy") {
        const n = pxPts.length;
        const a = pxPts[n - 1], b = pxPts[Math.max(0, n - 5)];
        const v = Math.hypot(a.x - b.x, a.y - b.y) / Math.max(8, a.t - b.t) * (360 / this.size);
        if (v > 1.4) this.splatter(a, Math.atan2(a.y - b.y, a.x - b.x), v);
      } else {
        this.badge(end, acc);
        if (acc < 85 && hane !== "missing") this.showRef(idx);
      }
      if (hane === "missing") this.showHane(idx);
      this.clearLive(false);
      this.renderInk();
      this.drawGhost();
      this.drawHints();
      this.onEvent({ type: "stroke", ok: true, index: idx, total: this.strokes.length, accuracy: acc, hane });
      if (this.next < 0) setTimeout(() => this.finish(), this.style === "neon" ? 650 : 250);
    }

    reject(res, pxPts) {
      this.misses++;
      this.missesHere++;
      Audio.reject(this.style);
      Audio.vibrate("reject");
      const n = this.next + 1;
      let msg;
      if (res.status === "order") msg = `That's stroke ${res.actual + 1}. Stroke order matters: write stroke ${n} first.`;
      else if (res.status === "reversed") msg = `Right shape, wrong direction. Start stroke ${n} from the other end.`;
      else msg = this.assist === "memory" && this.missesHere < 3 ? `Not quite. Think about where stroke ${n} starts.` : `Not quite. Follow stroke ${n}${ASSIST[this.assist].startDot ? " from the dot" : ""}.`;
      if (this.style === "accuracy") this.dust(pxPts);
      this.clearLive(true);
      this.host.classList.remove("shake");
      void this.host.offsetWidth;
      this.host.classList.add("shake");
      if (this.missesHere >= ASSIST[this.assist].hintAfter) this.drawHints(true);
      this.onEvent({ type: "stroke", ok: false, status: res.status, message: msg, index: this.next, total: this.strokes.length });
    }

    clearLive(fade) {
      if (!fade) { this.renderLive(); return; }
      this.live.classList.add("fade");
      setTimeout(() => {
        this.live.classList.remove("fade");
        if (!this.cur) this.renderLive();
      }, 380);
    }

    // ── finishing ──────────────────────────────────────────
    get score() {
      if (!this.user.length) return 0;
      const mean = this.user.reduce((a, u) => a + u.acc, 0) / this.user.length;
      return Math.round(clamp(mean - this.misses * 4, 0, 100));
    }

    finish(redraw = false) {
      this.finished = true;
      const score = this.score;
      const [, mark, label] = gradeFor(this.style, score);
      this.drawHints();
      this.marks.replaceChildren();
      // Memory mode (and a shaky notebook attempt) gets the model laid over it to compare.
      if (this.assist === "memory" || (this.style === "accuracy" && score < 90)) this.overlayReference();
      if (this.style === "accuracy") this.teacherMark(mark, score);
      else if (this.style === "calligraphy") this.hanko(mark);
      else this.neonSign(mark, score);
      if (!redraw) {
        Audio.complete(this.style, score);
        Audio.vibrate("complete");
        if (this.style === "neon") {
          const t = performance.now();
          this.tubes.forEach((tb) => (tb.surge = t));
          this.renderInk();
          this.strokes.forEach((st, i) => setTimeout(() => this.sparks(st.pts.map((p) => this.toPx(p)), NEON[(this.colorIndex + i) % NEON.length], 18), i * 90));
        } else if (this.style === "calligraphy") {
          this.petals(26);
        }
        this.onEvent({ type: "done", score, misses: this.misses, label, strokes: this.user.map((u) => u.acc), haneMissed: this.user.filter((u) => u.hane === "missing").length });
      }
    }

    // Thin vermilion reference lines over the learner's strokes, for comparison.
    overlayReference() {
      const g = s("g.ref-overlay");
      this.strokes.forEach((st) => g.append(s("path", { d: st.d })));
      this.marks.append(g);
    }

    teacherMark(kind, score) {
      // Drawn around (0,0), then placed in the top-right corner like a teacher's mark.
      const g = s("g.teacher", { transform: "translate(86 23) scale(0.62)" });
      if (kind === "hanamaru") {
        // a spiral, then a ring of petals around it — the classic 花丸
        let d = "";
        for (let a = 0; a <= Math.PI * 2 * 2.3; a += 0.12) {
          const r = 3 + a * 1.4;
          d += `${d ? "L" : "M"}${(Math.cos(a) * r).toFixed(2)},${(Math.sin(a) * r * 0.9).toFixed(2)}`;
        }
        let f = "";
        for (let a = 0; a <= Math.PI * 2 + 0.05; a += 0.05) {
          const r = 21 + 6 * Math.abs(Math.sin(3.5 * a));
          f += `${f ? "L" : "M"}${(Math.cos(a - 1.2) * r).toFixed(2)},${(Math.sin(a - 1.2) * r * 0.9).toFixed(2)}`;
        }
        g.append(s("path.mark-line", { d, pathLength: "100" }), s("path.mark-line.late", { d: f, pathLength: "100" }));
      } else if (kind === "double") {
        g.append(s("path.mark-line", { d: ring(0, 0, 19, 1.08), pathLength: "100" }), s("path.mark-line.late", { d: ring(0, 0, 11, 1.05), pathLength: "100" }));
      } else if (kind === "single") {
        g.append(s("path.mark-line", { d: ring(0, 0, 18, 1.1), pathLength: "100" }));
      } else {
        g.append(s("path.mark-line", { d: "M0,-17 L17,12 L-17,12 Z", pathLength: "100" }));
      }
      g.append(s("text.mark-score", { x: 0, y: 46, "text-anchor": "middle", transform: "rotate(-8 0 46)" }, `${score}点`));
      this.marks.append(g);
    }

    hanko(kanji) {
      // A vermilion seal pressed into the lower-left corner, slightly uneven.
      const g = s("g.hanko", { transform: "translate(17 92) rotate(-5)" });
      const fid = `${this.id}-rough`;
      g.append(
        s("defs", s("filter", { id: fid, x: "-20%", y: "-20%", width: "140%", height: "140%" },
          s("feTurbulence", { type: "fractalNoise", baseFrequency: "0.35", numOctaves: "2", seed: String(this.ch.codePointAt(0) % 97), result: "n" }),
          s("feDisplacementMap", { in: "SourceGraphic", in2: "n", scale: "1.3" }))),
        s("g", { filter: `url(#${fid})` },
          s("rect", { x: -11, y: -11, width: 22, height: 22, rx: 2.5 }),
          s("rect.inner", { x: -9, y: -9, width: 18, height: 18, rx: 1.2 }),
          s("text", { "text-anchor": "middle", dy: kanji.length > 1 ? "2.4" : "5", class: kanji.length > 1 ? "small" : "" }, kanji))
      );
      this.marks.append(g);
    }

    neonSign(word, score) {
      const g = s("g.neon-sign", { style: `--c:${this.color}` });
      g.append(
        s("rect", { x: 8, y: 92, width: 93, height: 13, rx: 6.5 }),
        s("text", { x: 54.5, y: 101.6, "text-anchor": "middle" }, `${word} · ${score}`)
      );
      this.marks.append(g);
    }

    badge(at, acc) {
      const b = h("div.badge", { class: acc >= 90 ? "great" : acc >= 75 ? "good" : "meh", style: { left: `${at.x}px`, top: `${at.y}px` } }, `${acc}%`);
      this.badges.append(b);
      setTimeout(() => b.remove(), 1600);
    }

    showRef(idx) {
      const p = s("path.ref-flash", { d: this.strokes[idx].d });
      this.marks.append(p);
      setTimeout(() => p.remove(), 1300);
    }

    // Shows where the flick should go: the model's last stretch, with an arrow.
    showHane(idx) {
      const st = this.strokes[idx];
      const tail = st.pts.slice(-8);
      const p = tail[tail.length - 1], q = tail[tail.length - 3];
      const ang = (Math.atan2(p.y - q.y, p.x - q.x) * 180) / Math.PI;
      const g = s("g.hane-flash",
        s("polyline", { points: tail.map((t) => `${t.x.toFixed(1)},${t.y.toFixed(1)}`).join(" ") }),
        s("path", { d: "M-3,-3 L1.5,0 L-3,3", transform: `translate(${p.x} ${p.y}) rotate(${ang})` }));
      this.marks.append(g);
      setTimeout(() => g.remove(), 1800);
    }

    // ── demo ───────────────────────────────────────────────
    /* Plays the stroke order with the current style's ink, then restores the
     * learner's own strokes. Speed rises and falls like a real hand, which is
     * what makes the brush swell and thin. */
    async demo() {
      if (this.demoToken) return;
      const token = (this.demoToken = {});
      const savedFinished = this.finished;
      this.marks.replaceChildren();
      this.hints.replaceChildren();
      const c = this.ink.getContext("2d");
      c.clearRect(0, 0, this.size, this.size);
      const w = this.w;
      if (this.style === "neon") this.strokes.forEach((st) => Ink.tube(c, st.raw.map((p) => this.toPx(p)), { w }));
      const lc = this.live.getContext("2d");
      for (let i = 0; i < this.strokes.length; i++) {
        if (this.demoToken !== token) return;
        const st = this.strokes[i];
        const pts = timed(Geo.resample(st.raw, Math.max(12, Math.round(st.len * 0.9))).map((p) => this.toPx(p)), st.len, st.hane);
        Audio.drawStart(this.style);
        const t0 = performance.now();
        const dur = pts[pts.length - 1].t - pts[0].t;
        await new Promise((res) => {
          const step = (now) => {
            if (this.demoToken !== token) { Audio.drawEnd(); return res(); }
            const el = now - t0;
            const upto = pts.filter((p) => p.t - pts[0].t <= el);
            lc.clearRect(0, 0, this.size, this.size);
            if (upto.length) this.paint(lc, upto, true);
            const k = upto.length;
            if (k > 3) Audio.drawMove(Math.hypot(upto[k - 1].x - upto[k - 3].x, upto[k - 1].y - upto[k - 3].y) / Math.max(8, upto[k - 1].t - upto[k - 3].t) * (360 / this.size) / 1.6);
            if (el < dur) requestAnimationFrame(step);
            else res();
          };
          requestAnimationFrame(step);
        });
        Audio.drawEnd();
        if (this.demoToken !== token) return;
        lc.clearRect(0, 0, this.size, this.size);
        if (this.style === "neon") Ink.neon(c, pts, { w, color: NEON[(this.colorIndex + i) % NEON.length] });
        else this.paint(c, pts, false);
        Audio.accept(this.style, i, this.strokes.length);
        await wait(260);
      }
      await wait(900);
      if (this.demoToken !== token) return;
      this.demoToken = null;
      this.finished = savedFinished;
      this.renderInk();
      this.drawHints();
      if (this.finished) this.finish(true);
      this.onEvent({ type: "demo-end" });
    }

    stopDemo() {
      if (!this.demoToken) return;
      this.demoToken = null;
      Audio.drawEnd();
      this.live.getContext("2d").clearRect(0, 0, this.size, this.size);
      this.renderInk();
      this.drawHints();
    }

    // ── particles ──────────────────────────────────────────
    origin() {
      const r = this.host.getBoundingClientRect();
      return { x: r.left, y: r.top };
    }

    penFx(p, v) {
      if (this.style !== "neon" || NH.reducedMotion()) return;
      const now = performance.now();
      if (now - this.lastFx < 40) return;
      this.lastFx = now;
      const o = this.origin();
      for (let i = 0; i < 2; i++) {
        this.particles.push({ kind: "spark", x: o.x + p.x, y: o.y + p.y, vx: rand(-1, 1) * 1.5, vy: rand(-1.5, 0.5), life: 1, decay: rand(0.03, 0.06), color: this.color, size: rand(1, 2.2) });
      }
      this.runFx();
    }

    sparks(pts, color, n) {
      if (NH.reducedMotion()) return;
      const o = this.origin();
      for (let i = 0; i < n; i++) {
        const p = pts[(Math.random() * pts.length) | 0];
        const a = rand(0, Math.PI * 2), sp = rand(1, 4.5);
        this.particles.push({ kind: "spark", x: o.x + p.x, y: o.y + p.y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1, life: 1, decay: rand(0.015, 0.035), color, size: rand(1, 2.6) });
      }
      this.runFx();
    }

    splatter(p, ang, v) {
      if (NH.reducedMotion()) return;
      const o = this.origin();
      const n = Math.min(9, 3 + Math.round(v * 2));
      for (let i = 0; i < n; i++) {
        const a = ang + rand(-0.35, 0.35), sp = rand(2, 6) * Math.min(1.6, v / 1.4);
        this.particles.push({ kind: "ink", x: o.x + p.x, y: o.y + p.y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: 0.006, drag: 0.82, color: "#16120f", size: rand(0.8, 2.6) * (this.size / 360) });
      }
      this.runFx();
    }

    petals(n) {
      if (NH.reducedMotion()) return;
      for (let i = 0; i < n; i++) {
        this.particles.push({ kind: "petal", x: rand(-40, innerWidth * 0.6), y: rand(-80, -10), vx: rand(0.8, 2.2), vy: rand(0.8, 1.8), life: 1, decay: 0.0035, rot: rand(0, 6.28), vr: rand(-0.05, 0.05), size: rand(5, 9), sway: rand(0, 6.28) });
      }
      this.runFx();
    }

    dust(pts) {
      if (NH.reducedMotion()) return;
      const o = this.origin();
      for (let i = 0; i < 14; i++) {
        const p = pts[(Math.random() * pts.length) | 0];
        this.particles.push({ kind: "dust", x: o.x + p.x, y: o.y + p.y, vx: rand(-1, 1), vy: rand(-0.5, 1.5), life: 1, decay: rand(0.02, 0.04), color: "#8a8478", size: rand(1, 2.4) });
      }
      this.runFx();
    }

    runFx() {
      if (this.fxRunning) return;
      this.fxRunning = true;
      const ctx = this.fx.getContext("2d");
      const tick = () => {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        this.particles = this.particles.filter((q) => (q.life -= q.decay) > 0);
        for (const q of this.particles) {
          if (q.kind === "spark") {
            q.vy += 0.08; q.vx *= 0.97;
            // A soft wide streak under a bright thin one reads as a glowing spark.
            ctx.globalCompositeOperation = "lighter";
            ctx.strokeStyle = q.color;
            ctx.lineCap = "round";
            const x0 = q.x, y0 = q.y;
            q.x += q.vx; q.y += q.vy;
            for (const [width, alpha] of [[q.size * 4, 0.18], [q.size, 1]]) {
              ctx.globalAlpha = q.life * alpha;
              ctx.lineWidth = width;
              ctx.beginPath();
              ctx.moveTo(x0, y0);
              ctx.lineTo(q.x, q.y);
              ctx.stroke();
            }
          } else if (q.kind === "ink") {
            q.vx *= q.drag; q.vy *= q.drag;
            q.x += q.vx; q.y += q.vy;
            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = Math.min(1, q.life * 1.5) * 0.9;
            ctx.fillStyle = q.color;
            ctx.beginPath();
            ctx.arc(q.x, q.y, q.size, 0, Math.PI * 2);
            ctx.fill();
          } else if (q.kind === "petal") {
            q.sway += 0.04;
            q.x += q.vx + Math.sin(q.sway) * 0.8; q.y += q.vy; q.rot += q.vr;
            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = Math.min(1, q.life * 2) * 0.85;
            ctx.save();
            ctx.translate(q.x, q.y);
            ctx.rotate(q.rot);
            ctx.scale(1, 0.6 + 0.4 * Math.sin(q.sway * 2));
            ctx.fillStyle = "#f4b6c2";
            ctx.beginPath();
            ctx.ellipse(0, 0, q.size, q.size * 0.6, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          } else {
            q.vy += 0.1;
            q.x += q.vx; q.y += q.vy;
            ctx.globalCompositeOperation = "source-over";
            ctx.globalAlpha = q.life;
            ctx.fillStyle = q.color;
            ctx.fillRect(q.x, q.y, q.size, q.size);
          }
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = "source-over";
        if (this.particles.length) this.fxRaf = requestAnimationFrame(tick);
        else { this.fxRunning = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
      };
      this.fxRaf = requestAnimationFrame(tick);
    }
  }

  // A hand-drawn ring that overshoots its start a little, like a teacher's red pen.
  function ring(cx, cy, r, turns) {
    let d = "";
    for (let a = 0; a <= Math.PI * 2 * turns; a += 0.1) {
      const rr = r * (1 + 0.04 * Math.sin(a * 1.5));
      d += `${d ? "L" : "M"}${(cx + Math.cos(a - 2) * rr).toFixed(2)},${(cy + Math.sin(a - 2) * rr * 0.92).toFixed(2)}`;
    }
    return d;
  }

  // Gives demo points timestamps: ease in, cruise, ease out.
  function timed(pts, len, hane = false) {
    const dur = 160 + len * 3.4;
    const n = pts.length;
    const out = pts.map((p, i) => {
      const u = i / (n - 1);
      const e = 0.6 * u * u * (3 - 2 * u) + 0.4 * u; // press in, sweep, settle
      return { ...p, t: e * dur, p: 0 };
    });
    if (hane) {
      // Flick the last stretch quickly, so the brush tapers into the hook.
      const k = Math.floor(n * 0.86), t0 = out[k].t;
      for (let i = k + 1; i < n; i++) out[i].t = t0 + (out[i].t - t0) * 0.3;
    }
    return out;
  }

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  NH.Writer = Writer;
  NH.GRADES = GRADES;
  NH.NEON = NEON;
})();
