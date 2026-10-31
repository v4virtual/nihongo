/* Narrated lessons: each kana and kanji gets a short animated lesson built
 * from its data (what it is, where it came from, a memory hook, every stroke
 * drawn and described, an example word), spoken in English with the Japanese
 * in a Japanese voice. The same narration can talk you through writing. */
window.NH = window.NH || {};

(function () {
  const { h, s } = NH;
  const UI = NH.UI;
  const en = (text) => ({ text, lang: "en" });
  const ja = (text) => ({ text, lang: "ja" });
  const say = (text) => NH.TTS.segments(text);
  const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;

  // Stroke i of a word or character, counted across all its characters.
  function strokeList(text) {
    return [...text].flatMap((c, ci) => NH.Geo.strokesOf(c).map((st, i) => ({ c, ci, i, st })));
  }
  function strokeLine(text, k) {
    const all = strokeList(text);
    const t = all[k];
    if (!t) return "";
    const lead = [...text].length > 1 && t.i === 0 && t.ci > 0 ? `Then ${NH.SMALL.has(t.c) ? "the small " : ""}${t.c}. ` : "";
    const part = (NH.PARTS?.[t.c] || []).find((p) => p.strokes[0] === t.i);
    const partLead = part && NH.PARTS[t.c].length > 1 ? `Now ${part.el}${NH.COMPONENT_NAMES?.[part.el] ? `, ${NH.COMPONENT_NAMES[part.el].replace(/\s*\(.*\)/, "")}` : ""}. ` : "";
    // が, ぱ: the voicing mark's strokes come after the base kana's.
    const I = NH.KANA_INFO?.[t.c];
    const markLead = I?.base && (I.mark === "dakuten" || I.mark === "handakuten") && t.i === NH.STROKES[I.base].length ? (I.mark === "dakuten" ? "Now the ten-ten. " : "Now the maru. ") : "";
    return `${lead}${partLead}${markLead}Stroke ${t.i + 1} ${NH.Geo.describe(t.st)}.`;
  }

  /* The lesson as steps: { caption, say, scene }. `say` is the narration
   * (segments for TTS.narrate), `caption` what's shown, `scene` what's drawn. */
  function steps(ch) {
    const K = NH.KANJI_INFO?.[ch];
    const out = [];
    const add = (caption, scene, spoken) => out.push({ caption, scene, say: spoken || say(caption) });
    if (K) {
      add(`This kanji means “${K.meaning}”.`, { kind: "char", sub: K.meaning });
      const rd = [];
      if (K.on.length) rd.push(en("On reading:"), ja(K.on.join("、")));
      if (K.kun.length) rd.push(en("Kun reading:"), ja(K.kun.map((k) => k.replace(".", "")).join("、")));
      add([K.on.length ? `On reading: ${K.on.join("・")}.` : "", K.kun.length ? `Kun reading: ${K.kun.map((k) => k.replace(".", "")).join("・")}.` : ""].filter(Boolean).join(" "), { kind: "char", sub: [...K.on, ...K.kun.map((k) => k.replace(".", ""))].join("・") }, rd);
      const parts = NH.PARTS?.[ch] || [];
      if (parts.length > 1) add(`It's made of ${parts.map((p) => `${p.el}${NH.COMPONENT_NAMES?.[p.el] ? ` (${NH.COMPONENT_NAMES[p.el].replace(/\s*\(.*\)/, "")})` : ""}`).join(" and ")}.`, { kind: "parts" });
      if (K.mnemonic) add(K.mnemonic, { kind: "char" });
    } else {
      const I = UI.info(ch);
      const r = UI.romaji(ch);
      const script = NH.scriptOf(ch).id;
      const chars = [...ch];
      if (chars.length > 1) {
        add(`This is ${ch}, read “${r}”: ${chars[0]} with a small ${chars[1]}, said as one sound.`, { kind: "char", sub: r },
          [en("This is"), ja(ch), en(". It's"), ja(chars[0]), en("with a small"), ja(chars[1]), en(", said as one sound.")]);
      } else {
        add(`This is the ${script} ${ch}, read “${r}”.`, { kind: "char", sub: r }, [en(`This is the ${script}`), ja(ch), en(".")]);
        if (I.origin) {
          const mean = I.originMeaning ? `, meaning “${I.originMeaning}”` : "";
          add(script === "katakana" ? `It was cut from part of the kanji ${I.origin}${mean}: ${I.originPart || "a piece of it"}.` : `It grew from the kanji ${I.origin}${mean}, written quickly in cursive.`, { kind: "origin", from: I.origin });
        } else if (I.mark === "dakuten" || I.mark === "handakuten") {
          add(`It's ${I.base} with ${I.mark === "handakuten" ? "a small circle, maru, which turns h into p" : "two small ticks, ten-ten, which make the sound voiced"}.`, { kind: "equation", base: I.base, mark: I.mark === "handakuten" ? "゜" : "゛" });
        } else if (I.notes?.length) {
          add(I.notes[0], { kind: "char" });
        }
        if (I.mnemonic) add(I.mnemonic, { kind: "char" });
      }
    }
    const n = strokeList(ch).length;
    add(`${plural(n, "stroke")}. Watch the order.`, { kind: "strokes", cur: -1 });
    for (let k = 0; k < n; k++) add(strokeLine(ch, k), { kind: "strokes", cur: k });
    const ex = K ? K.examples?.[0] : UI.info(ch).examples?.[0];
    if (ex) {
      add(`As in ${ex.w}${K ? ` (${ex.r})` : ""}, “${ex.m}”.`, { kind: "word", w: ex.w, r: ex.r, m: ex.m }, [en("As in"), ja(K ? ex.r : ex.w), en(`, ${ex.m}.`)]);
    }
    add("Now try writing it yourself.", { kind: "char" });
    return out;
  }

  // What to say when a character comes up on the writing screen.
  function writeIntro(ch, { full = false } = {}) {
    if (!full) {
      const n = NH.STROKES[ch]?.length || 0;
      return [ja(ch), ...say(`${plural(n, "stroke")}. ${strokeLine(ch, 0)}`)];
    }
    const all = steps(ch);
    const first = all.findIndex((st) => st.scene.kind === "strokes");
    return [...all.slice(0, first + 1).flatMap((st) => st.say), ...say(strokeLine(ch, 0))];
  }

  // ── scenes ──────────────────────────────────────────────
  function strokesSvg(text, cur) {
    const cs = [...text];
    const all = strokeList(text);
    const svg = s("svg.ls-strokes", { viewBox: `0 0 ${109 * cs.length} 109`, "aria-hidden": "true" });
    svg.append(s("g.so-grid", s("rect", { x: 1, y: 1, width: 109 * cs.length - 2, height: 107, rx: 6 })));
    all.forEach((t, k) => {
      const part = (NH.PARTS?.[t.c] || []).findIndex((p) => p.strokes.includes(t.i));
      const g = s("g", { transform: `translate(${t.ci * 109} 0)` });
      g.append(s("path.ls-bg", { d: t.st.d }));
      if (k <= cur) g.append(s("path.ls-st", { d: t.st.d, pathLength: "1", class: [k === cur ? "now" : "", part >= 0 ? `part p${part % 4}` : ""].join(" ") }));
      if (k <= cur) { const p = NH.Geo.labelPos(t.st); g.append(s("text.so-n", { x: p.x, y: p.y + 2, "text-anchor": "middle" }, String(t.i + 1))); }
      svg.append(g);
    });
    return svg;
  }

  function scene(ch, sc) {
    const big = (t, cls = "") => h("span.ls-big", { class: cls }, t);
    switch (sc.kind) {
      case "origin": return h("div.ls-row.ls-origin", big(sc.from, "brush"), h("span.ls-arrow", "→"), big(ch));
      case "equation": return h("div.ls-row", big(sc.base), h("span.ls-op", "+"), big(sc.mark), h("span.ls-op", "="), big(ch));
      case "parts": return h("div.ls-row", big(ch), h("span.ls-op", "="), (NH.PARTS[ch] || []).map((p, i) => [i ? h("span.ls-op", "+") : null, big(p.el, `part p${i % 4}`)]));
      case "strokes": return h("div.ls-svg", strokesSvg(ch, sc.cur));
      case "word": return h("div.ls-col", big(/[㐀-鿿]/.test(sc.w) ? UI.ruby(sc.w, sc.r) : sc.w, "word"), h("span.ls-sub", sc.m));
      default: return h("div.ls-col", big(ch), sc.sub ? h("span.ls-sub", sc.sub) : null);
    }
  }

  // ── the player ──────────────────────────────────────────
  function player(ch) {
    const list = steps(ch);
    let i = 0, playing = false, token = 0, handle = null;
    const stage = h("div.ls-stage");
    const caption = h("p.ls-caption");
    const playBtn = UI.iconBtn("play", "Play lesson", () => (playing ? pause() : play()));
    const marks = h("div.ls-marks", list.map((st, k) =>
      h("button.ls-mark", { type: "button", "aria-label": `Go to step ${k + 1} of ${list.length}`, onclick: () => seek(k) })));
    const card = h("section.card.lesson", { "aria-label": `Lesson: ${ch}` },
      h("div.card-head", h("h2", "Lesson"), h("span.muted.ls-len", `${list.length} steps · narrated`)),
      h("div.ls-screen", stage, h("button.ls-big-play", { type: "button", "aria-label": "Play lesson", onclick: () => play() }, UI.icon("play"))),
      caption,
      h("div.ls-controls", playBtn, UI.iconBtn("redo", "Start the lesson again", () => { seek(0); play(); }), marks));
    UI.onLeave(() => { token++; handle?.cancel(); });

    function show(k) {
      i = k;
      const st = list[k];
      stage.replaceChildren(scene(ch, st.scene));
      caption.textContent = st.caption;
      marks.querySelectorAll(".ls-mark").forEach((m, n) => { m.classList.toggle("done", n < k); m.classList.toggle("on", n === k); m.toggleAttribute("aria-current", n === k); });
      card.dataset.step = String(k);
    }
    function setPlaying(p) {
      playing = p;
      card.classList.toggle("playing", p);
      playBtn.replaceChildren(UI.icon(p ? "pause" : "play"));
      playBtn.setAttribute("aria-label", p ? "Pause lesson" : "Play lesson");
      playBtn.title = playBtn.getAttribute("aria-label");
    }
    async function play() {
      if (i >= list.length - 1 && card.classList.contains("ended")) i = 0;
      card.classList.remove("ended");
      setPlaying(true);
      const my = ++token;
      for (let k = i; k < list.length; k++) {
        show(k);
        handle = NH.TTS.narrate(list[k].say);
        const min = new Promise((r) => setTimeout(r, list[k].scene.kind === "strokes" && list[k].scene.cur >= 0 ? 1300 : 1000));
        await Promise.all([handle.done, min]);
        if (my !== token) return;
        await new Promise((r) => setTimeout(r, 350));
        if (my !== token) return;
      }
      setPlaying(false);
      card.classList.add("ended");
    }
    function pause() { token++; handle?.cancel(); setPlaying(false); }
    function seek(k) { const was = playing; pause(); show(k); if (was) play(); }
    show(0);
    return card;
  }

  NH.Lesson = { steps, player, writeIntro, strokeLine };
})();
