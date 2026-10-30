/* Screens and routing. Routes live in the hash (#hiragana, #k-3042, #w-3042,
 * #word-mizu …) so Android's back button and bookmarks work. */
window.NH = window.NH || {};

(function () {
  const { h, s, store, Audio, TTS, Backdrop, hex, unhex, shuffle } = NH;
  const app = document.getElementById("app");
  let cleanup = [];

  // ── icons (inline vector) ────────────────────────────────
  const ICONS = {
    back: "M15 5 8 12l7 7",
    speaker: "M4 9v6h4l5 4V5L8 9H4Zm12.5-1.5a5 5 0 0 1 0 9M19 5a8.5 8.5 0 0 1 0 14",
    gear: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm8 3.5-2.1-.6-.5-1.3 1-1.9-1.6-1.6-1.9 1-1.3-.5L13 4h-2l-.6 2.1-1.3.5-1.9-1L5.6 7.2l1 1.9-.5 1.3L4 11v2l2.1.6.5 1.3-1 1.9 1.6 1.6 1.9-1 1.3.5L11 20h2l.6-2.1 1.3-.5 1.9 1 1.6-1.6-1-1.9.5-1.3L20 13Z",
    play: "M8 5v14l11-7Z",
    redo: "M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4",
    next: "M9 5l7 7-7 7",
    prev: "M15 5l-7 7 7 7",
    pen: "M4 20l4-1 11-11-3-3L5 16l-1 4Zm10-13 3 3",
    book: "M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Zm0 14a2 2 0 0 1 2-2h13",
    close: "M6 6l12 12M18 6 6 18",
  };
  const icon = (name) => s("svg.ic", { viewBox: "0 0 24 24", "aria-hidden": "true" }, s("path", { d: ICONS[name] }));

  const btn = (label, onclick, cls = "", ic) =>
    h("button", { type: "button", class: "btn " + cls, onclick: (e) => { Audio.tap(); onclick(e); } }, ic ? icon(ic) : null, label ? h("span", label) : null);
  const iconBtn = (name, label, onclick, cls = "") =>
    h("button", { type: "button", class: "icon-btn " + cls, "aria-label": label, title: label, onclick: (e) => { Audio.tap(); onclick(e); } }, icon(name));
  const speakBtn = (text, cls = "") => iconBtn("speaker", `Listen: ${text}`, () => say(text), cls);

  let warnedVoice = false;
  function say(text, { quiet = false } = {}) {
    if ((!TTS.supported || !TTS.hasJapanese) && !warnedVoice && !quiet && (warnedVoice = true)) toast(TTS.supported ? "No Japanese voice installed. See Settings → Voice." : "This browser can't speak. Try Chrome or Safari.");
    TTS.speak(text);
  }

  function toast(msg) {
    const t = h("div.toast", { role: "status" }, msg);
    document.body.append(t);
    setTimeout(() => t.classList.add("out"), 2600);
    setTimeout(() => t.remove(), 3100);
  }

  const go = (route) => { if (location.hash.slice(1) === route) render(); else location.hash = route; };
  const info = (ch) => (NH.KANA_INFO && NH.KANA_INFO[ch]) || {};
  const romaji = (ch) => NH.romajiOf(ch);

  // ── router ───────────────────────────────────────────────
  function render() {
    cleanup.forEach((fn) => fn());
    cleanup = [];
    document.body.className = "";
    const r = location.hash.slice(1) || "home";
    let m;
    window.scrollTo(0, 0);
    if (r === "home") return home();
    if (r === "hiragana" || r === "symbols") return hub("symbols");
    if (r === "words" || r === "phrases" || r === "quiz") return hub(r);
    if ((m = r.match(/^k-([0-9a-f-]+)$/))) return explain(unhex(m[1]));
    if ((m = r.match(/^w-([0-9a-f-]+)$/))) return writeScreen({ chars: [...unhex(m[1])], key: unhex(m[1]), back: `k-${m[1]}` });
    if ((m = r.match(/^(word|phrase)-([a-z0-9-]+)$/))) {
      const list = m[1] === "word" ? NH.WORDS : NH.PHRASES;
      const item = list.find((x) => x.id === m[2]);
      if (item) return writeScreen({ chars: [...item.kana], item, key: item.kana, back: m[1] === "word" ? "words" : "phrases" });
    }
    if ((m = r.match(/^p-([0-9a-f-]+)$/))) {
      const kana = unhex(m[1]);
      return writeScreen({ chars: [...kana], item: { kana, romaji: "", meaning: "" }, key: kana, back: "hiragana" });
    }
    return home();
  }
  window.addEventListener("hashchange", render);

  // ── home: station signs ──────────────────────────────────
  function home() {
    document.body.classList.add("scr-home");
    const sign = (o) =>
      h("a.eki", { href: o.soon ? null : "#hiragana", class: o.soon ? "soon" : "", style: `--line:${o.color}`, "aria-disabled": o.soon ? "true" : null, onclick: o.soon ? (e) => { e.preventDefault(); toast(`${o.en} is coming soon.`); } : null },
        h("div.eki-num", h("b", o.code), h("span", o.num)),
        h("div.eki-name", o.jp),
        h("div.eki-romaji", o.en),
        h("div.eki-band", h("span.prev", o.prev ? `← ${o.prev}` : ""), h("span.next", o.next ? `${o.next} →` : "")),
        o.soon ? h("div.eki-tape", "工事中 · coming soon") : h("div.eki-go", o.count)
      );
    const studied = Object.keys(NH.KANA_INFO || {}).filter((c) => store.progress(c)?.best >= 60).length;
    app.replaceChildren(
      h("header.home-head",
        h("div.brand", h("span.brand-kana", "書く"), h("span.brand-name", "Kaku")),
        iconBtn("gear", "Settings", settings)),
      h("main.home",
        h("p.lede", "Learn Japanese the way kids in Japan do: one script at a time, writing every stroke by hand."),
        h("div.ekis",
          sign({ code: "H", num: "01", jp: "ひらがな", en: "Hiragana", color: "var(--line-h)", next: "カタカナ", count: studied ? `${studied} of 71 kana written well →` : "Start here →" }),
          sign({ code: "K", num: "02", jp: "カタカナ", en: "Katakana", color: "var(--line-k)", prev: "ひらがな", next: "漢字", soon: true }),
          sign({ code: "J", num: "03", jp: "漢字", en: "Kanji", color: "var(--line-j)", prev: "カタカナ", soon: true })),
        h("section.how",
          h("h2", "How it works"),
          h("ol",
            h("li", h("b", "Explain. "), "Each kana with its stroke order, the kanji it grew from, a memory hook and its quirks."),
            h("li", h("b", "Write. "), "Draw it with your finger or a stylus. Every stroke is checked for shape, direction and order."),
            h("li", h("b", "Words & phrases. "), "Write real words you'll see around you, from えき to ありがとう."),
            h("li", h("b", "Quiz. "), "Quick multiple choice that leans on the kana you miss most."))),
        h("p.credit", "Stroke data: ", h("a", { href: "https://kanjivg.tagaini.net", target: "_blank", rel: "noopener" }, "KanjiVG"), " (CC BY-SA 3.0)."))
    );
  }

  // ── hiragana hub ─────────────────────────────────────────
  function hub(tab) {
    document.body.classList.add("scr-hub");
    const tabs = [["symbols", "文字", "Symbols"], ["words", "言葉", "Words"], ["phrases", "文", "Phrases"], ["quiz", "試験", "Quiz"]];
    const body = h("main.hub-body");
    app.replaceChildren(
      h("header.bar",
        iconBtn("back", "Home", () => go("home")),
        h("div.bar-title", h("span.line-dot", { style: "--line:var(--line-h)" }, "H"), h("b", "ひらがな"), h("small", "Hiragana")),
        iconBtn("gear", "Settings", settings)),
      h("nav.tabs", { role: "tablist" }, tabs.map(([id, jp, en]) =>
        h("a.tab", { href: `#${id === "symbols" ? "hiragana" : id}`, role: "tab", "aria-selected": String(tab === id), class: tab === id ? "on" : "" }, h("span.tab-jp", jp), h("span", en)))),
      body
    );
    if (tab === "symbols") symbols(body);
    else if (tab === "quiz") quizSetup(body);
    else wordList(body, tab);
  }

  function symbols(body) {
    for (const key of ["basic", "voiced", "combos"]) {
      const T = NH.TABLES[key];
      const grid = h("div.kgrid", { style: `--cols:${T.cols.length}` });
      grid.append(h("span.kh"), ...T.cols.map((c) => h("span.kh", c)));
      for (const row of T.rows) {
        grid.append(h("span.kh.row", row.label || "·"));
        for (const c of row.cells) {
          if (!c) { grid.append(h("span.kcell.empty")); continue; }
          const p = [...c].length === 1 ? store.progress(c) : null;
          grid.append(h("a.kcell", { href: `#k-${hex(c)}`, style: p ? `--best:${p.best}%` : null, class: p ? "seen" : "" },
            h("span.kc", c), h("span.kr", romaji(c))));
        }
      }
      const sec = h("section.ksec", h("div.ksec-head", h("h2", T.title, h("span.jp", T.jp)), h("p", T.blurb)), grid);
      if (T.extras) {
        sec.append(h("div.extras", h("span.extras-label", "Small kana"), T.extras.map((c) => h("a.kcell.mini", { href: `#k-${hex(c)}` }, h("span.kc", c), h("span.kr", romaji(c).replace(" (small)", ""))))));
      }
      body.append(sec);
    }
  }

  function wordList(body, kind) {
    const list = kind === "words" ? NH.WORDS : NH.PHRASES;
    const levels = [[0, "All"], [1, "初級 Beginner"], [2, "中級 Intermediate"], [3, "上級 Advanced"]];
    let level = 0;
    const out = h("div.wlist");
    const chips = h("div.chips", { role: "group", "aria-label": "Difficulty" });
    const draw = () => {
      chips.replaceChildren(...levels.map(([lv, label]) =>
        h("button.chip", { type: "button", "aria-pressed": String(level === lv), onclick: () => { level = lv; draw(); } }, label)));
      out.replaceChildren(...list.filter((w) => !level || w.level === level).map((w) => {
        const sc = w.scene && w.scene[0] && Backdrop.art(w.scene[0], "wicon");
        return h("article.wcard",
          h("a.wcard-main", { href: `#${kind === "words" ? "word" : "phrase"}-${w.id}` },
            sc ? h("span.wicon-wrap", sc) : null,
            h("span.wk", { class: [...w.kana].length > 8 ? "long" : "" }, w.kana),
            h("span.wm", h("b", w.meaning), h("span", w.romaji, w.kanji ? h("span.wkanji", w.kanji) : null)),
            h("span.wlv", { title: `Level ${w.level}` }, "●".repeat(w.level) + "○".repeat(3 - w.level))),
          speakBtn(w.kana, "small"));
      }));
    };
    draw();
    body.append(h("p.intro", kind === "words" ? "Write each word kana by kana. The background follows the word: waves for the sea, Skytree for Oshiage." : "Everyday phrases for life in Japan, written the way you'll see them."), chips, out);
  }

  // ── explain ──────────────────────────────────────────────
  function explain(ch) {
    document.body.classList.add("scr-explain");
    const I = info(ch);
    const isCombo = [...ch].length > 1;
    const idx = NH.ORDER.indexOf(ch);
    const prev = NH.ORDER[idx - 1], next = NH.ORDER[idx + 1];
    const svg = strokeOrderSvg(ch);
    const parts = isCombo ? [...ch] : I.base ? [I.base, I.mark === "handakuten" ? "゜" : I.mark === "dakuten" ? "゛" : "small"] : null;

    const notes = [...(isCombo ? comboNotes(ch) : I.notes || []), ...haneNotes(ch)];
    app.replaceChildren(
      h("header.bar",
        iconBtn("back", "All hiragana", () => go("hiragana")),
        h("div.bar-title", h("b", ch), h("small", romaji(ch))),
        iconBtn("gear", "Settings", settings)),
      h("div.modes", h("a.mode.on", { href: `#k-${hex(ch)}`, "aria-current": "page" }, icon("book"), "Explain"), h("a.mode", { href: `#w-${hex(ch)}` }, icon("pen"), "Write")),
      h("main.explain",
        h("section.hero-card",
          h("div.so-wrap", svg, h("div.so-tools", iconBtn("play", "Replay stroke order", () => replay(svg)), speakBtn(ch))),
          h("div.hero-meta",
            h("div.big-romaji", romaji(ch)),
            h("div.meta-row", h("span", `${strokeCount(ch)} stroke${strokeCount(ch) === 1 ? "" : "s"}`), I.mark ? h("span.tag", I.mark) : isCombo ? h("span.tag", "yōon") : null),
            parts && parts[1] !== "small" ? h("div.equation", parts.map((p, i) => [i ? h("span.op", "+") : null, h("a.eq", { href: p.length === 1 && NH.STROKES[p] ? `#k-${hex(p)}` : null }, p)]), h("span.op", "="), h("b.eq", ch)) : null,
            I.origin ? h("div.origin", h("span.origin-k", I.origin), h("span.origin-arrow", "→"), h("span.origin-h", ch), h("p", "Grew from the kanji ", h("b", I.origin), I.originMeaning ? ` (“${I.originMeaning}”)` : "", ", written fast in cursive until it became ", ch, ".")) : null)),
        I.mnemonic ? h("section.card.mnemonic", h("h3", "Remember it"), h("p", I.mnemonic)) : null,
        notes.length ? h("section.card", h("h3", "Good to know"), h("ul.notes", notes.map((n) => h("li", n)))) : null,
        I.lookalikes && I.lookalikes.length ? h("section.card", h("h3", "Don't mix it up with"), h("div.looks", I.lookalikes.map((c) => h("a.look", { href: NH.KANA_INFO[c] ? `#k-${hex(c)}` : null }, h("span.kc", c), h("span.kr", romaji(c)))))) : null,
        examplesCard(ch, I),
        h("div.cta-row", btn("Practice writing", () => go(`w-${hex(ch)}`), "primary", "pen")),
        h("nav.pager",
          prev ? h("a.pg", { href: `#k-${hex(prev)}` }, icon("prev"), h("span", prev)) : h("span"),
          next ? h("a.pg", { href: `#k-${hex(next)}` }, h("span", next), icon("next")) : h("span")))
    );
    requestAnimationFrame(() => replay(svg));
  }

  // Which strokes end in a hane (flick), from the stroke data.
  function haneNotes(ch) {
    return [...ch].flatMap((c) => {
      const ns = NH.Geo.strokesOf(c).map((st, i) => (st.hane ? i + 1 : 0)).filter(Boolean);
      if (!ns.length) return [];
      const which = ns.length === 1 ? `Stroke ${ns[0]}` : `Strokes ${ns.join(" and ")}`;
      return [`${[...ch].length > 1 ? c + ": " : ""}${which} end${ns.length === 1 ? "s" : ""} with a hane (跳ね), a quick flick up and away as you lift the pen. It's marked with a red arrow above.`];
    });
  }

  function comboNotes(ch) {
    const [a, b] = [...ch];
    return [
      `${a} (${romaji(a)}) + small ${b} becomes one syllable: ${romaji(ch)}. Say it in one beat, not ${romaji(a)}-${romaji(b).replace(" (small)", "")}.`,
      `Write the small ${b} about half size, sitting in the lower left of its square.`,
    ];
  }

  function examplesCard(ch, I) {
    let ex = (I.examples || []).slice();
    // Add matching words from the word list.
    for (const w of NH.WORDS) if (ex.length < 4 && w.kana.includes(ch) && !ex.some((e) => e.w === w.kana)) ex.push({ w: w.kana, r: w.romaji, m: w.meaning, id: w.id });
    if (!ex.length) return null;
    return h("section.card", h("h3", "In words"), h("ul.examples", ex.map((e) => {
      const known = e.id || (NH.WORDS.find((w) => w.kana === e.w) || {}).id;
      return h("li",
        h("a.ex-w", { href: known ? `#word-${known}` : `#p-${hex(e.w)}`, title: "Practice writing this word" }, highlight(e.w, ch)),
        h("span.ex-r", e.r), h("span.ex-m", e.m), speakBtn(e.w, "small"));
    })));
  }

  function highlight(word, ch) {
    const parts = word.split(ch);
    return parts.flatMap((p, i) => (i ? [h("mark", ch), p] : [p]));
  }

  const strokeCount = (ch) => [...ch].reduce((n, c) => n + (NH.STROKES[c] || []).length, 0);

  // Stroke order diagram: strokes draw themselves in order, numbered.
  function strokeOrderSvg(ch) {
    const cs = [...ch];
    const W = 109 * cs.length;
    const svg = s("svg.so", { viewBox: `0 0 ${W} 109`, role: "img", "aria-label": `Stroke order of ${ch}` });
    svg.append(s("g.so-grid", s("rect", { x: 1, y: 1, width: W - 2, height: 107, rx: 6 }), ...cs.map((_, i) => [s("line", { x1: i * 109 + 54.5, y1: 4, x2: i * 109 + 54.5, y2: 105 }), s("line", { x1: i * 109 + 4, y1: 54.5, x2: i * 109 + 105, y2: 54.5 })]).flat()));
    let n = 0;
    cs.forEach((c, ci) => {
      const I = info(c);
      const baseCount = I.base && NH.STROKES[I.base] ? NH.STROKES[I.base].length : Infinity;
      const g = s("g", { transform: `translate(${ci * 109} 0)` });
      NH.Geo.strokesOf(c).forEach((st, i) => {
        g.append(s("path.so-bg", { d: st.d }));
        g.append(s("path.so-st", { d: st.d, pathLength: "1", class: i >= baseCount ? "mark" : "", style: `--i:${n}` }));
        const p = NH.Geo.labelPos(st);
        g.append(s("text.so-n", { x: p.x, y: p.y + 2, "text-anchor": "middle", style: `--i:${n}` }, String(i + 1)));
        if (st.hane) {
          const e = st.pts[st.pts.length - 1], q = st.pts[st.pts.length - 4];
          const ang = (Math.atan2(e.y - q.y, e.x - q.x) * 180) / Math.PI;
          g.append(s("path.so-hane", { d: "M-3.2,-3.2 L1.6,0 L-3.2,3.2", transform: `translate(${e.x.toFixed(1)} ${e.y.toFixed(1)}) rotate(${ang.toFixed(0)}) translate(4 0)`, style: `--i:${n}` }));
        }
        n++;
      });
      svg.append(g);
    });
    svg.style.setProperty("--n", n);
    return svg;
  }

  function replay(svg) {
    svg.classList.remove("play");
    void svg.getBoundingClientRect();
    svg.classList.add("play");
  }

  // ── write ────────────────────────────────────────────────
  const STYLES = [["accuracy", "Accuracy", "ノート"], ["neon", "Neon", "ネオン"], ["calligraphy", "Calligraphy", "書道"]];
  const ASSISTS = [["trace", "Trace", "Full guide, animated stroke"], ["guide", "Guide", "Faint guide, start points"], ["memory", "Memory", "Blank square"]];

  function writeScreen({ chars, item, key, back }) {
    const st = store.settings;
    let style = st.style, assist = st.assist, pos = 0;
    const results = [];
    const isWord = !!item;
    const single = !isWord && chars.length === 1;
    const scenes = (item && item.scene) || [];

    document.body.classList.add("scr-write");
    const stage = h("div.stage");
    const backdrop = h("div.backdrop");
    const seq = h("div.seq", { "aria-label": "Characters" });
    const cell = h("div.cell");
    const cellWrap = h("div.cell-wrap", cell);
    const feedback = h("p.feedback", { "aria-live": "polite" });
    const result = h("div.result", { hidden: true });

    const writer = new NH.Writer(cell, { style, assist, onEvent });
    cleanup.push(() => writer.destroy());

    const styleSeg = h("div.seg.styles", { role: "radiogroup", "aria-label": "Style" });
    const assistSeg = h("div.seg.assists", { role: "radiogroup", "aria-label": "Help level" });

    const title = isWord
      ? h("div.bar-title.word-title", h("b", item.kana), h("small", [item.romaji, item.meaning].filter(Boolean).join(" · ")))
      : h("div.bar-title", h("b", key), h("small", romaji(key)));

    stage.append(
      backdrop,
      h("header.bar.stage-bar", iconBtn("back", "Back", () => go(back)), title, speakBtn(key), iconBtn("gear", "Settings", settings)),
      !isWord && single ? h("div.modes", h("a.mode", { href: `#k-${hex(key)}` }, icon("book"), "Explain"), h("a.mode.on", { href: location.hash, "aria-current": "page" }, icon("pen"), "Write")) : null,
      h("div.switches", styleSeg, assistSeg),
      chars.length > 1 ? seq : null,
      cellWrap,
      feedback,
      h("div.actions",
        btn("Watch", () => { feedback.textContent = "Watch the stroke order…"; writer.demo(); }, "ghost", "play"),
        btn("Redo", () => restartChar(), "ghost", "redo")),
      result
    );
    app.replaceChildren(stage);

    function drawSwitches() {
      styleSeg.replaceChildren(...STYLES.map(([id, en, jp]) =>
        h("button.seg-b", { type: "button", role: "radio", "aria-checked": String(style === id), onclick: () => setStyle(id) }, h("span.seg-jp", jp), h("span", en))));
      assistSeg.replaceChildren(...ASSISTS.map(([id, en, tip]) =>
        h("button.seg-b", { type: "button", role: "radio", title: tip, "aria-checked": String(assist === id), onclick: () => setAssist(id) }, en)));
    }

    function setStyle(id) {
      style = id;
      store.set("style", id);
      stage.dataset.style = id;
      document.body.dataset.style = id;
      Backdrop.render(backdrop, id, scenes, [...key].reduce((a, c) => a + c.codePointAt(0), 0));
      writer.setStyle(id);
      drawSwitches();
    }
    function setAssist(id) {
      assist = id;
      store.set("assist", id);
      writer.setAssist(id);
      drawSwitches();
    }

    function drawSeq() {
      seq.replaceChildren(...chars.map((c, i) =>
        h("button.seq-c", { type: "button", class: [i === pos ? "on" : "", results[i] != null ? "done" : "", NH.SMALL.has(c) ? "small" : ""].join(" "), onclick: () => loadChar(i), "aria-label": `${c} ${romaji(c)}` },
          h("span", c), results[i] != null ? h("i", `${results[i]}`) : null)));
    }

    function loadChar(i) {
      pos = i;
      result.hidden = true;
      writer.setChar(chars[i], i);
      feedback.textContent = startMessage();
      drawSeq();
    }
    function restartChar() { writer.stopDemo(); loadChar(pos); }

    function startMessage() {
      const c = chars[pos];
      const n = (NH.STROKES[c] || []).length;
      const lead = chars.length > 1 ? `${c} (${romaji(c)}), ` : "";
      return `${lead}${n} stroke${n === 1 ? "" : "s"}. ${assist === "memory" ? "From memory: start with stroke 1." : "Start at the dot and follow the arrow."}`;
    }

    function onEvent(e) {
      if (e.type === "stroke") {
        if (e.ok) {
          const n = e.index + 1;
          if (e.hane === "missing") feedback.textContent = `Stroke ${n} ✓, but it ends with a hane: flick up as you lift the pen.`;
          else if (e.hane === "ok") feedback.textContent = `Stroke ${n} ✓ with a clean hane flick.${n < e.total ? ` Next: stroke ${n + 1}.` : ""}`;
          else feedback.textContent = n < e.total ? `Stroke ${n} ✓ ${style === "accuracy" ? e.accuracy + "% " : ""}· next: stroke ${n + 1} of ${e.total}` : "";
          feedback.className = e.hane === "missing" ? "feedback tip" : "feedback ok";
        } else {
          feedback.textContent = e.message;
          feedback.className = "feedback no";
        }
      } else if (e.type === "done") {
        const c = chars[pos];
        results[pos] = e.score;
        store.recordWrite(c, e.score);
        feedback.className = "feedback ok";
        feedback.textContent = `${e.label} · ${e.score}%${e.misses ? ` · ${e.misses} retr${e.misses === 1 ? "y" : "ies"}` : ""}${e.haneMissed ? " · remember the hane flick" : ""}`;
        setTimeout(() => say(c, { quiet: true }), style === "calligraphy" ? 1300 : 500);
        drawSeq();
        const nextIdx = results.findIndex((r, i) => r == null && i > pos);
        const firstOpen = nextIdx >= 0 ? nextIdx : chars.findIndex((_, i) => results[i] == null);
        if (firstOpen >= 0) setTimeout(() => { if (writer.finished) loadChar(firstOpen); }, 1700);
        else setTimeout(() => showResult(e), 900);
      } else if (e.type === "demo-end") {
        feedback.textContent = startMessage();
        feedback.className = "feedback";
      }
    }

    function showResult(e) {
      const avg = Math.round(results.reduce((a, b) => a + b, 0) / results.length);
      const idx = NH.ORDER.indexOf(key);
      const nextKana = single && idx >= 0 ? NH.ORDER[idx + 1] : null;
      let nextItem = null;
      if (isWord && item.id) {
        const list = back === "words" ? NH.WORDS : NH.PHRASES;
        const i = list.findIndex((x) => x.id === item.id);
        nextItem = list[i + 1];
      }
      const grade = NH.GRADES[style].find(([min]) => avg >= min);
      result.replaceChildren(
        h("div.result-card",
          h("div.result-score", h("b", `${avg}`), h("span", "%")),
          h("div.result-label", chars.length > 1 ? grade[2] : e.label),
          isWord ? h("p.result-word", item.kana, " — ", item.meaning) : null,
          h("div.result-actions",
            btn("Again", () => { results.length = 0; loadChar(0); }, "ghost", "redo"),
            nextKana ? btn(`Next: ${nextKana}`, () => go(`w-${hex(nextKana)}`), "primary", "next") : null,
            nextItem ? btn(`Next: ${nextItem.kana}`, () => go(`${back === "words" ? "word" : "phrase"}-${nextItem.id}`), "primary", "next") : null,
            !nextKana && !nextItem ? btn("Done", () => go(back), "primary") : null)));
      result.hidden = false;
      if (isWord) say(item.kana, { quiet: true });
    }

    stage.dataset.style = style;
    document.body.dataset.style = style;
    Backdrop.render(backdrop, style, scenes, [...key].reduce((a, c) => a + c.codePointAt(0), 0));
    drawSwitches();
    requestAnimationFrame(() => loadChar(0));
  }

  // ── quiz ─────────────────────────────────────────────────
  const QTYPES = [["k2r", "Kana → romaji"], ["r2k", "Romaji → kana"], ["listen", "Listen → kana"], ["w2m", "Word → meaning"]];

  function quizSetup(body) {
    const pools = { basic: true, voiced: false, combos: false };
    const types = { k2r: true, r2k: true, listen: TTS.supported, w2m: false };
    let len = 10;
    const toggle = (obj, k, label) => h("button.chip", { type: "button", "aria-pressed": String(!!obj[k]), onclick: (e) => { obj[k] = !obj[k]; e.currentTarget.setAttribute("aria-pressed", String(obj[k])); } }, label);
    const lens = h("div.chips", [10, 20, 30].map((n) =>
      h("button.chip", { type: "button", "aria-pressed": String(n === len), onclick: (e) => { len = n; lens.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === e.currentTarget))); } }, `${n} questions`)));
    body.append(
      h("section.card.quiz-setup",
        h("h3", "Kana to quiz"), h("div.chips", toggle(pools, "basic", "Basic 46"), toggle(pools, "voiced", "Dakuten 25"), toggle(pools, "combos", "Combos 33")),
        h("h3", "Question types"), h("div.chips", QTYPES.map(([k, l]) => toggle(types, k, l))),
        h("h3", "Length"), lens,
        h("p.muted", "Questions favour the kana you've missed before."),
        btn("Start quiz", () => {
          const pool = [];
          if (pools.basic) NH.TABLES.basic.rows.forEach((r) => r.cells.forEach((c) => c && pool.push(c)));
          if (pools.voiced) NH.TABLES.voiced.rows.forEach((r) => r.cells.forEach((c) => c && pool.push(c)));
          if (pools.combos) NH.TABLES.combos.rows.forEach((r) => pool.push(...r.cells));
          const ts = Object.keys(types).filter((k) => types[k]);
          if (!pool.length && !types.w2m) return toast("Pick at least one set of kana.");
          if (!ts.length) return toast("Pick at least one question type.");
          quizRun(body, pool, ts, len);
        }, "primary", "play"))
    );
  }

  function weighted(pool, n) {
    const w = pool.map((c) => {
      const p = store.progress(c);
      return Math.max(0.3, 1 + (p ? p.wrong * 1.5 - p.right * 0.25 : 0.5));
    });
    const out = [];
    const used = new Set();
    while (out.length < n && used.size < pool.length) {
      let r = Math.random() * w.reduce((a, b, i) => a + (used.has(i) ? 0 : b), 0);
      for (let i = 0; i < pool.length; i++) {
        if (used.has(i)) continue;
        r -= w[i];
        if (r <= 0) { used.add(i); out.push(pool[i]); break; }
      }
    }
    while (out.length < n) out.push(pool[(Math.random() * pool.length) | 0]);
    return out;
  }

  function quizRun(body, pool, types, len) {
    const qs = [];
    const kanaTypes = types.filter((t) => t !== "w2m");
    const picks = pool.length && kanaTypes.length ? weighted(pool, len) : [];
    for (let i = 0; i < len; i++) {
      const t = types[(Math.random() * types.length) | 0];
      if (t === "w2m" || !picks.length) {
        const w = NH.WORDS[(Math.random() * NH.WORDS.length) | 0];
        const wrong = shuffle(NH.WORDS.filter((x) => x.meaning !== w.meaning)).slice(0, 3);
        qs.push({ type: "w2m", key: w.kana, prompt: w.kana, answer: w.meaning, options: shuffle([w.meaning, ...wrong.map((x) => x.meaning)]), speak: w.kana });
      } else {
        const c = picks[i];
        const same = pool.filter((x) => x !== c && [...x].length === [...c].length);
        // Distractors: lookalikes first, then the rest.
        const looks = (info(c).lookalikes || []).filter((x) => same.includes(x));
        const wrong = [...new Set([...shuffle(looks), ...shuffle(same)])].filter((x) => romaji(x) !== romaji(c)).slice(0, 3);
        const tt = kanaTypes[(Math.random() * kanaTypes.length) | 0];
        if (tt === "k2r") qs.push({ type: tt, key: c, prompt: c, answer: romaji(c), options: shuffle([c, ...wrong].map(romaji)), speak: c });
        else qs.push({ type: tt, key: c, prompt: tt === "listen" ? null : romaji(c), answer: c, options: shuffle([c, ...wrong]), speak: c });
      }
    }
    let i = 0, right = 0;
    const missed = [];
    const wrap = h("section.quiz");
    body.replaceChildren(wrap);

    const show = () => {
      if (i >= qs.length) return summary();
      const q = qs[i];
      let answered = false;
      const opts = h("div.qopts", { class: q.type === "k2r" || q.type === "w2m" ? "latin" : "kana" }, q.options.map((o) =>
        h("button.qopt", { type: "button", onclick: (e) => choose(o, e.currentTarget) }, o)));
      const prompt = q.type === "listen"
        ? h("button.qprompt.listen", { type: "button", onclick: () => say(q.speak), "aria-label": "Play the sound again" }, icon("speaker"), h("span", "Tap to listen"))
        : h("div.qprompt", { class: q.type === "r2k" ? "latin" : "" }, q.prompt);
      wrap.replaceChildren(
        h("div.qhead", h("span", `${i + 1} / ${qs.length}`), h("div.qbar", h("i", { style: { width: `${(i / qs.length) * 100}%` } })), h("span", `${right} ✓`)),
        h("p.qask", { k2r: "How do you read this?", r2k: "Which kana is this?", listen: "Which kana did you hear?", w2m: "What does this word mean?" }[q.type]),
        prompt, opts, h("div.qfoot"));
      if (q.type === "listen") setTimeout(() => say(q.speak), 250);

      function choose(o, el) {
        if (answered) return;
        answered = true;
        const ok = o === q.answer;
        if (q.type !== "w2m") store.recordQuiz(q.key, ok);
        const style = store.settings.style;
        ok ? Audio.accept(style, 3, 5) : Audio.reject(style);
        opts.querySelectorAll("button").forEach((b) => {
          if (b.textContent === q.answer) b.classList.add("right");
          else if (b === el) b.classList.add("wrong");
          b.disabled = true;
        });
        if (ok) right++;
        else missed.push(q);
        say(q.speak);
        const foot = wrap.querySelector(".qfoot");
        if (ok) setTimeout(() => { i++; show(); }, 900);
        else foot.append(
          h("p", h("b", q.key), ` is “${q.type === "w2m" ? q.answer : romaji(q.key)}”.`),
          btn("Next", () => { i++; show(); }, "primary", "next"));
      }
    };

    const summary = () => {
      Audio.complete(store.settings.style, (right / qs.length) * 100);
      const uniq = [...new Map(missed.map((q) => [q.key, q])).values()];
      wrap.replaceChildren(
        h("div.qsum",
          h("div.result-score", h("b", String(right)), h("span", ` / ${qs.length}`)),
          h("p", right === qs.length ? "Every one right." : `${qs.length - right} to review.`),
          uniq.length ? h("div.looks", uniq.map((q) => {
            const w = q.type === "w2m" ? NH.WORDS.find((x) => x.kana === q.key) : null;
            return h("a.look", { href: w ? `#word-${w.id}` : `#k-${hex(q.key)}` }, h("span.kc", q.key), h("span.kr", w ? w.meaning : romaji(q.key)));
          })) : null,
          h("div.result-actions", btn("New quiz", () => { body.replaceChildren(); quizSetup(body); }, "primary", "redo"))));
    };
    show();
  }

  // ── settings ─────────────────────────────────────────────
  function settings() {
    const st = store.settings;
    const dlg = h("div.sheet-bg", { onclick: (e) => e.target === dlg && close() });
    const close = () => { dlg.remove(); document.removeEventListener("keydown", esc); };
    const esc = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", esc);

    const voiceSel = h("select#voice", { onchange: (e) => store.set("voice", e.target.value) });
    const fillVoices = () => {
      const vs = TTS.voices;
      voiceSel.replaceChildren(...(vs.length ? vs.map((v) => h("option", { value: v.name, selected: v.name === st.voice ? true : null }, `${v.name}${v.localService ? "" : " (online)"}`)) : [h("option", { value: "" }, "No Japanese voice found")]));
    };
    fillVoices();
    const off = TTS.onVoices(fillVoices);
    const confirmRow = h("div.confirm", { hidden: true },
      h("span", "Erase all writing scores and quiz history?"),
      btn("Erase", () => { store.reset(); confirmRow.hidden = true; toast("Progress erased."); }, "danger"),
      btn("Keep", () => (confirmRow.hidden = true), "ghost"));

    dlg.append(h("div.sheet", { role: "dialog", "aria-modal": "true", "aria-label": "Settings" },
      h("div.sheet-head", h("h2", "Settings"), iconBtn("close", "Close", () => { off(); close(); })),
      h("label.row", h("span", "Sound effects"), h("input#sound", { type: "checkbox", checked: st.sound ? true : null, onchange: (e) => store.set("sound", e.target.checked) })),
      h("div.row.col", h("label", { for: "volume" }, "Effects volume"),
        h("input#volume", { type: "range", min: "0", max: "1", step: "0.05", value: String(st.volume ?? 0.8), oninput: (e) => Audio.setVolume(parseFloat(e.target.value)), onchange: () => Audio.accept(store.settings.style, 2, 5) })),
      "vibrate" in navigator ? h("label.row", h("span", "Vibrate on each stroke"), h("input#vibrate", { type: "checkbox", checked: st.vibrate ? true : null, onchange: (e) => { store.set("vibrate", e.target.checked); Audio.vibrate("accept"); } })) : null,
      h("div.row.col", h("label", { for: "voice" }, "Japanese voice"), h("div.inline", voiceSel, btn("Test", () => say("こんにちは、ひらがなを かきましょう"), "ghost", "speaker")),
        h("p.muted", TTS.hasJapanese ? "Uses your device's built-in speech, which works offline." : "Your device has no Japanese voice yet. Android: Settings → System → Text-to-speech → Google → install Japanese. iPhone: Settings → Accessibility → Spoken Content → Voices → Japanese.")),
      h("div.row.col", h("label", { for: "rate" }, "Speaking speed"),
        h("input#rate", { type: "range", min: "0.5", max: "1.2", step: "0.05", value: String(st.rate), oninput: (e) => store.set("rate", parseFloat(e.target.value)) })),
      h("div.row", h("span", "Progress"), btn("Erase…", () => (confirmRow.hidden = false), "ghost")),
      confirmRow,
      h("p.muted.small", "Stroke order data from KanjiVG by Ulrich Apel, CC BY-SA 3.0. Kaku v0.1.")));
    document.body.append(dlg);
  }

  // Unlock audio on the first touch anywhere (browsers require a gesture).
  window.addEventListener("pointerdown", () => Audio.unlock(), { once: true });

  // Installable PWA when served over http(s) (ignored inside sandboxes).
  if ("serviceWorker" in navigator && location.protocol.startsWith("http") && document.querySelector('link[rel="manifest"]')) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  render();
})();
