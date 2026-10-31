/* The kanji line: the first 80 kanji grouped by theme with a stroke-count
 * filter, explain pages (readings, parts, radical), words that mix kanji and
 * kana with a furigana toggle, and a quiz. The writing screen, Today and the
 * hub are shared with the kana lines. */
window.NH = window.NH || {};

(function () {
  const { h, hex, shuffle, store } = NH;
  const UI = NH.UI;
  const KANJI = NH.KANJI || [];
  NH.KANJI_INFO = Object.fromEntries(KANJI.map((x) => [x.k, x]));
  const GROUPS = [
    ["numbers", "数", "Numbers"], ["time", "時", "Days and time"], ["people", "人", "People"], ["places", "方", "Places and directions"],
    ["nature", "自然", "Nature"], ["qualities", "形", "Size and colour"], ["things", "物", "Things"], ["actions", "動", "Actions"],
  ];
  const IS_KANJI = /[㐀-鿿々]/;

  // ── furigana ─────────────────────────────────────────────
  /* Puts the reading over each run of kanji: 食べる + たべる → 食(た)べる.
   * The kana around the kanji must match the reading; if not, the whole word
   * gets one reading. Returns nodes for h(). */
  function ruby(text, kana) {
    const runs = text.match(/[㐀-鿿々]+|[^㐀-鿿々]+/g) || [];
    const re = new RegExp(`^${runs.map((r) => (IS_KANJI.test(r) ? "(.+?)" : r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))).join("")}$`, "u");
    const m = kana.match(re);
    if (!m) return [h("ruby", text, h("rt", kana))];
    let g = 1;
    return runs.map((r) => (IS_KANJI.test(r) ? h("ruby", r, h("rt", m[g++])) : r));
  }
  const furiganaOn = () => store.settings.furigana !== false;
  const applyFurigana = () => (document.documentElement.dataset.furigana = furiganaOn() ? "on" : "off");
  if (typeof document !== "undefined") applyFurigana();
  function furiganaToggle() {
    return h("div.chips.furigana-toggle", { role: "radiogroup", "aria-label": "Furigana (readings over kanji)" },
      h("span.muted", "Furigana:"),
      [[true, "On"], [false, "Off"]].map(([v, label]) => h("button.chip", { type: "button", role: "radio", "aria-checked": String(furiganaOn() === v), onclick: (e) => {
        store.set("furigana", v);
        if (typeof document !== "undefined") applyFurigana();
        e.currentTarget.parentElement.querySelectorAll("button").forEach((b) => b.setAttribute("aria-checked", String(b === e.currentTarget)));
      } }, label)));
  }
  Object.assign(NH.UI, { ruby, furiganaToggle });

  const kunText = (k) => (k.includes(".") ? k.replace(".", "(") + ")" : k);
  const partName = (el) => NH.COMPONENT_NAMES?.[el] || "";

  // ── chart ────────────────────────────────────────────────
  function chart(body) {
    const counts = [...new Set(KANJI.map((x) => x.strokes))].sort((a, b) => a - b);
    let count = 0;
    const chips = h("div.chips", { role: "group", "aria-label": "Filter by stroke count" });
    const out = h("div");
    const label = { new: "not started", learning: "learning", due: "due now", strong: "strong" };
    const draw = () => {
      chips.replaceChildren(
        h("button.chip", { type: "button", "aria-pressed": String(!count), onclick: () => { count = 0; draw(); } }, "All"),
        ...counts.map((n) => h("button.chip", { type: "button", "aria-pressed": String(count === n), "aria-label": `${n} stroke${n === 1 ? "" : "s"}`, onclick: () => { count = n; draw(); } }, String(n))));
      out.replaceChildren(...GROUPS.map(([g, jp, en]) => {
        const items = KANJI.filter((x) => x.group === g && (!count || x.strokes === count));
        if (!items.length) return null;
        return h("section.ksec",
          h("div.ksec-head", h("h2", en, h("span.jp", jp))),
          h("div.jgrid", items.map((x) => {
            const st = NH.SRS.strength("j:" + x.k);
            return h("a.jcell", { href: `#k-${hex(x.k)}`, class: "s-" + st },
              h("span.jc", x.k), h("span.jm", x.meaning.split(",")[0]), h("span.jn", { "aria-hidden": "true" }, String(x.strokes)),
              h("span.vh", `, ${x.strokes} stroke${x.strokes === 1 ? "" : "s"}, ${label[st]}`));
          })));
      }));
    };
    draw();
    body.append(
      h("p.intro", "The 80 kanji of JLPT N5, grouped by theme. Filter by stroke count to find one you've seen; on each kanji's page its parts get their own colour."),
      h("div.stroke-filter", h("span.muted", "Strokes:"), chips),
      out);
  }

  // ── explain ──────────────────────────────────────────────
  function explain(ch) {
    const app = document.getElementById("app");
    document.body.classList.add("scr-explain");
    const x = NH.KANJI_INFO[ch];
    const order = KANJI.map((y) => y.k);
    const i = order.indexOf(ch);
    const prev = order[i - 1], next = order[i + 1];
    const svg = UI.strokeOrderSvg(ch);
    const parts = NH.PARTS?.[ch] || [];
    const words = (NH.KANJI_WORDS || []).filter((w) => w.text.includes(ch));
    const examples = [...x.examples];
    for (const w of words) if (examples.length < 5 && !examples.some((e) => e.w === w.text)) examples.push({ w: w.text, r: w.kana, m: w.meaning });
    app.replaceChildren(
      h("header.bar",
        UI.iconBtn("back", "All kanji", () => UI.go("kanji")),
        h("h1.bar-title", h("b", ch), h("small", x.meaning)),
        UI.iconBtn("gear", "Settings", () => UI.settings())),
      h("nav.modes", { "aria-label": "Mode" }, h("a.mode.on", { href: `#k-${hex(ch)}`, "aria-current": "page" }, UI.icon("book"), "Explain"), h("a.mode", { href: `#w-${hex(ch)}` }, UI.icon("pen"), "Write")),
      h("main.explain",
        h("section.hero-card",
          h("div.so-wrap", svg, h("div.so-tools", UI.iconBtn("play", "Replay stroke order", () => UI.replay(svg))),
            h("ol.vh", { "aria-label": `How to write ${ch}` }, NH.Geo.strokesOf(ch).map((st, n) => h("li", `Stroke ${n + 1} ${NH.Geo.describe(st)}.`)))),
          h("div.hero-meta",
            h("div.big-meaning", x.meaning),
            h("div.meta-row", h("span", `${x.strokes} stroke${x.strokes === 1 ? "" : "s"}`), h("span.tag", `radical ${x.radical}`)),
            h("dl.readings",
              x.on.length ? [h("dt", "On"), h("dd", x.on.join("・"))] : null,
              x.kun.length ? [h("dt", "Kun"), h("dd", x.kun.map(kunText).join("・"))] : null),
            parts.length ? h("div.parts", { "aria-label": "Parts" },
              h("span.part-k", ch), h("span.op", "="),
              parts.map((p, n) => [n ? h("span.op", "+") : null, h("span.part", { class: `p${n % 4}` }, h("b", p.el), partName(p.el) ? h("small", partName(p.el)) : null)])) : null)),
        NH.Lesson.player(ch),
        h("section.card.mnemonic", h("h2", "Remember it"), h("p", x.mnemonic)),
        x.notes?.length ? h("section.card", h("h2", "Good to know"), h("ul.notes", x.notes.map((n) => h("li", n)))) : null,
        x.lookalikes?.length ? h("section.card", h("h2", "Don't mix it up with"), h("div.looks", x.lookalikes.map((c) =>
          h("a.look", { href: `#k-${hex(c)}` }, h("span.kc", c), h("span.kr", NH.KANJI_INFO[c]?.meaning.split(",")[0] || ""))))) : null,
        h("section.card",
          h("div.card-head", h("h2", "In words"), furiganaToggle()),
          h("ul.examples", examples.map((e) => {
            const known = (NH.KANJI_WORDS || []).find((w) => w.text === e.w);
            return h("li",
              h("a.ex-w", { href: known ? `#word-${known.id}` : `#p-${hex(e.w)}`, title: "Practice writing this word" }, ruby(e.w, e.r)),
              h("span.ex-r", e.r), h("span.ex-m", e.m), UI.speakBtn(e.r, "small"));
          }))),
        h("div.cta-row", UI.btn("Practice writing", () => UI.go(`w-${hex(ch)}`), "primary", "pen")),
        h("nav.pager",
          prev ? h("a.pg", { href: `#k-${hex(prev)}` }, UI.icon("prev"), h("span", prev)) : h("span"),
          next ? h("a.pg", { href: `#k-${hex(next)}` }, h("span", next), UI.icon("next")) : h("span"))));
    requestAnimationFrame(() => UI.replay(svg));
  }

  // ── words ────────────────────────────────────────────────
  function wordsTab(body) {
    const levels = [[0, "All"], [1, "初級 Beginner"], [2, "中級 Intermediate"], [3, "上級 Advanced"]];
    let level = 0;
    const out = h("div.wlist");
    const chips = h("div.chips", { role: "group", "aria-label": "Difficulty" });
    const draw = () => {
      chips.replaceChildren(...levels.map(([lv, label]) =>
        h("button.chip", { type: "button", "aria-pressed": String(level === lv), onclick: () => { level = lv; draw(); } }, label)));
      out.replaceChildren(...(NH.KANJI_WORDS || []).filter((w) => !level || w.level === level).map((w) => {
        const sc = w.scene?.[0] && NH.Backdrop.art(w.scene[0], "wicon");
        return h("article.wcard",
          h("a.wcard-main", { href: `#word-${w.id}` },
            sc ? h("span.wicon-wrap", sc) : null,
            h("span.wk", { class: [...w.text].length > 5 ? "long" : "" }, ruby(w.text, w.kana)),
            h("span.wm", h("b", w.meaning), h("span", w.romaji)),
            h("span.wlv", { title: `Level ${w.level}` }, "●".repeat(w.level) + "○".repeat(3 - w.level))),
          UI.speakBtn(w.kana, "small"));
      }));
    };
    draw();
    body.append(h("p.intro", "Words that mix kanji with kana, the way they're written in Japan. Write each one character by character; turn furigana off once you can read them."),
      h("div.word-tools", chips, furiganaToggle()), out);
  }

  // ── quiz ─────────────────────────────────────────────────
  const QTYPES = [["j2m", "Kanji → meaning"], ["m2j", "Meaning → kanji"], ["w2r", "Word → reading"], ["w2m", "Word → meaning"]];
  function quiz(body) {
    const groups = Object.fromEntries(GROUPS.map(([g], i) => [g, i < 2]));
    const types = { j2m: true, m2j: true, w2r: false, w2m: false };
    let len = 10;
    const toggle = (obj, k, label) => h("button.chip", { type: "button", "aria-pressed": String(!!obj[k]), onclick: (e) => { obj[k] = !obj[k]; e.currentTarget.setAttribute("aria-pressed", String(obj[k])); } }, label);
    const lens = h("div.chips", [10, 20].map((n) => h("button.chip", { type: "button", "aria-pressed": String(n === len), onclick: (e) => { len = n; lens.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === e.currentTarget))); } }, `${n} questions`)));
    body.append(h("section.card.quiz-setup",
      h("h2", "Kanji to quiz"), h("div.chips", GROUPS.map(([g, , en]) => toggle(groups, g, en))),
      h("h2", "Question types"), h("div.chips", QTYPES.map(([k, l]) => toggle(types, k, l))),
      h("h2", "Length"), lens,
      UI.btn("Start quiz", () => {
        const pool = KANJI.filter((x) => groups[x.group]);
        const ts = Object.keys(types).filter((k) => types[k]);
        const words = (NH.KANJI_WORDS || []).filter((w) => [...w.text].some((c) => pool.some((x) => x.k === c)));
        if (!ts.length) return UI.toast("Pick at least one question type.");
        if (pool.length < 4) return UI.toast("Pick a bigger set of kanji.");
        run(body, pool, words.length >= 4 ? words : NH.KANJI_WORDS, ts, len);
      }, "primary", "play")));
  }

  function run(body, pool, words, types, len) {
    const qs = [];
    for (let i = 0; i < len; i++) {
      const t = types[(Math.random() * types.length) | 0];
      if (t === "j2m" || t === "m2j") {
        const x = pool[(Math.random() * pool.length) | 0];
        const others = shuffle([...pool.filter((y) => y !== x && x.lookalikes.includes(y.k)), ...shuffle(pool.filter((y) => y !== x))]);
        const wrong = [...new Set(others)].slice(0, 3);
        qs.push(t === "j2m"
          ? { id: "j:" + x.k, ask: "What does this kanji mean?", prompt: x.k, answer: x.meaning, options: shuffle([x, ...wrong].map((y) => y.meaning)), latin: true, say: x.examples[0]?.r }
          : { id: "j:" + x.k, ask: "Which kanji means this?", prompt: x.meaning, promptLatin: true, answer: x.k, options: shuffle([x, ...wrong].map((y) => y.k)), say: x.examples[0]?.r });
      } else {
        const w = words[(Math.random() * words.length) | 0];
        const key = t === "w2r" ? "kana" : "meaning";
        const wrong = shuffle(NH.KANJI_WORDS.filter((y) => y !== w && y[key] !== w[key])).slice(0, 3);
        qs.push({ id: "v:" + w.id, ask: t === "w2r" ? "How is this word read?" : "What does this word mean?", prompt: w.text, answer: w[key], options: shuffle([w, ...wrong].map((y) => y[key])), latin: t === "w2m", say: w.kana });
      }
    }
    let i = 0, right = 0;
    const wrap = h("section.quiz");
    body.replaceChildren(wrap);
    const show = () => {
      if (i >= qs.length) return summary();
      const q = qs[i];
      let answered = false;
      const shownAt = performance.now();
      const opts = h("div.qopts", { class: q.latin ? "latin" : "kana" }, q.options.map((o) => h("button.qopt", { type: "button", onclick: (e) => choose(o, e.currentTarget) }, o)));
      wrap.replaceChildren(
        h("div.qhead", h("span", `${i + 1} / ${qs.length}`), h("div.qbar", h("i", { style: { width: `${(i / qs.length) * 100}%` } })), h("span", `${right} ✓`)),
        h("p.qask", q.ask), h("div.qprompt", { class: q.promptLatin ? "latin" : [...q.prompt].length > 1 ? "word" : "" }, q.prompt), opts, h("div.qfoot"));
      function choose(o, el) {
        if (answered) return;
        answered = true;
        const ok = o === q.answer;
        NH.SRS.practice(q.id, NH.SRS.gradeChoice(ok, performance.now() - shownAt));
        ok ? NH.Audio.accept(store.settings.style, 3, 5) : NH.Audio.reject(store.settings.style);
        opts.querySelectorAll("button").forEach((b) => { if (b.textContent === q.answer) b.classList.add("right"); else if (b === el) b.classList.add("wrong"); b.disabled = true; });
        if (ok) right++;
        UI.announce(ok ? `Correct: ${q.answer}.` : `Not quite. The answer is ${q.answer}.`);
        if (q.say) UI.say(q.say, { quiet: true });
        if (ok) setTimeout(() => { i++; show(); }, 900);
        else wrap.querySelector(".qfoot").append(h("p", h("b", q.prompt), ` → ${q.answer}`), UI.btn("Next", () => { i++; show(); }, "primary", "next"));
      }
    };
    const summary = () => {
      NH.Audio.complete(store.settings.style, (right / qs.length) * 100);
      wrap.replaceChildren(h("div.qsum",
        h("div.result-score", h("b", String(right)), h("span", ` / ${qs.length}`)),
        h("p", right === qs.length ? "Every one right." : `${qs.length - right} to review.`),
        h("div.result-actions", UI.btn("New quiz", () => { body.replaceChildren(); quiz(body); }, "primary", "redo"))));
    };
    show();
  }

  NH.SCRIPTS.kanji = {
    id: "kanji", jp: "漢字", en: "Kanji", code: "J", line: "var(--line-j)", order: KANJI.map((x) => x.k),
    screens: { symbols: chart, words: wordsTab, quiz },
  };
  NH.Kanji = { explain, ruby, GROUPS };
})();
