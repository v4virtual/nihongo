/* The kanji line: the 80 kanji of JLPT N5 and the clinic & hospital pack,
 * grouped by theme with a stroke-count filter, explain pages (readings, parts,
 * radical), words that mix kanji and kana with a furigana toggle, real signs to
 * read, and a quiz. The writing screen, Today and the hub are shared with the
 * kana lines. */
window.NH = window.NH || {};

(function () {
  const { h, hex, shuffle, store } = NH;
  const UI = NH.UI;
  const KANJI = NH.KANJI || [];
  NH.KANJI_INFO = Object.fromEntries(KANJI.map((x) => [x.k, x]));
  // [id, jp, en, pack]
  const GROUPS = [
    ["numbers", "数", "Numbers", "n5"], ["time", "時", "Days and time", "n5"], ["people", "人", "People", "n5"], ["places", "方", "Places and directions", "n5"],
    ["nature", "自然", "Nature", "n5"], ["qualities", "形", "Size and colour", "n5"], ["things", "物", "Things", "n5"], ["actions", "動", "Actions", "n5"],
    ["c-staff", "科", "Clinics and staff", "clinic"], ["c-desk", "受付", "Reception and paying", "clinic"], ["c-body", "体", "Symptoms and tests", "clinic"],
    ["c-signs", "注意", "Signs and notices", "clinic"], ["c-parking", "駐車", "Parking and fees", "clinic"],
  ];
  const PACKS = [
    { id: "n5", jp: "基本", en: "Everyday kanji", blurb: "The 80 kanji of JLPT N5: numbers, time, people, places and the verbs you use every day." },
    { id: "clinic", jp: "病院", en: "Clinic & hospital", blurb: "What you need to find your way through a Japanese clinic: reception, departments, symptoms, warnings and the car park." },
  ];
  const packOf = (x) => GROUPS.find((g) => g[0] === x.group)?.[3] || "n5";
  // New kanji come pack by pack; the learner picks which pack goes first.
  function kanjiOrder() {
    const first = store.settings.kanjiFirst || "n5";
    return [...KANJI].sort((a, b) => (packOf(a) === first ? 0 : 1) - (packOf(b) === first ? 0 : 1));
  }
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
      out.replaceChildren(...PACKS.map((P) => {
        const secs = GROUPS.filter((g) => g[3] === P.id).map(([g, jp, en]) => {
        const items = KANJI.filter((x) => x.group === g && (!count || x.strokes === count));
        if (!items.length) return null;
        return h("section.ksec",
          h("div.ksec-head", h("h3", en, h("span.jp", jp))),
          h("div.jgrid", items.map((x) => {
            const st = NH.SRS.strength("j:" + x.k);
            return h("a.jcell", { href: `#k-${hex(x.k)}`, class: "s-" + st },
              h("span.jc", x.k), h("span.jm", x.meaning.split(",")[0]), h("span.jn", { "aria-hidden": "true" }, String(x.strokes)),
              h("span.vh", `, ${x.strokes} stroke${x.strokes === 1 ? "" : "s"}, ${label[st]}`));
          })));
        }).filter(Boolean);
        if (!secs.length) return null;
        const n = KANJI.filter((x) => packOf(x) === P.id).length;
        return h("section.kpack", { "data-pack": P.id },
          h("div.kpack-head", h("h2", P.en, h("span.jp", P.jp), h("span.kpack-n", `${n} kanji`)), h("p", P.blurb)),
          secs);
      }));
    };
    draw();
    body.append(
      h("p.intro", `${KANJI.length} kanji in two sets, grouped by theme. Filter by stroke count to find one you've seen; on each kanji's page its parts get their own colour.`),
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
        h("section.card", h("h2", "Good to know"), h("ul.notes", [...(x.notes || []), endingsNote(ch)].filter(Boolean).map((n) => h("li", n)))),
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

  // "Sweeps (harai): strokes 1 and 2. Hooks (hane): stroke 4. The others stop (tome)."
  function endingsNote(ch) {
    const st = NH.Geo.strokesOf(ch);
    const which = (kind) => st.map((s, i) => (s.ending === kind ? i + 1 : 0)).filter(Boolean);
    const list = (ns) => `stroke${ns.length > 1 ? "s" : ""} ${ns.length > 1 ? `${ns.slice(0, -1).join(", ")} and ${ns.at(-1)}` : ns[0]}`;
    const harai = which("harai"), hane = which("hane");
    if (!harai.length && !hane.length) return "Every stroke ends with a firm stop (tome).";
    const rest = st.length - harai.length - hane.length;
    return [harai.length ? `Sweeps out (harai): ${list(harai)}.` : "", hane.length ? `Hooks (hane): ${list(hane)}.` : "", rest ? `The other${rest > 1 ? "s stop" : " stops"} (tome).` : ""].filter(Boolean).join(" ");
  }

  // ── words ────────────────────────────────────────────────
  function wordsTab(body) {
    const levels = [[0, "All"], [1, "初級 Beginner"], [2, "中級 Intermediate"], [3, "上級 Advanced"]];
    const sets = [["", "All words"], ["n5", "基本 Everyday"], ["clinic", "病院 Clinic"]];
    let level = 0, set = "";
    const out = h("div.wlist");
    const chips = h("div.chips", { role: "group", "aria-label": "Difficulty" });
    const setChips = h("div.chips", { role: "group", "aria-label": "Set" });
    const draw = () => {
      chips.replaceChildren(...levels.map(([lv, label]) =>
        h("button.chip", { type: "button", "aria-pressed": String(level === lv), onclick: () => { level = lv; draw(); } }, label)));
      setChips.replaceChildren(...sets.map(([id, label]) =>
        h("button.chip", { type: "button", "aria-pressed": String(set === id), onclick: () => { set = id; draw(); } }, label)));
      out.replaceChildren(...(NH.KANJI_WORDS || []).filter((w) => (!level || w.level === level) && (!set || (w.pack || "n5") === set)).map((w) => {
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
      h("div.word-tools", setChips, chips, furiganaToggle()), out);
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
      h("h2", "Kanji to quiz"), PACKS.map((P) => h("div.chips", { role: "group", "aria-label": P.en }, h("span.muted", `${P.en}:`), GROUPS.filter((g) => g[3] === P.id).map(([g, , en]) => toggle(groups, g, en)))),
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
    screens: { symbols: chart, words: wordsTab, quiz, read: (body) => NH.Signs.tab(body) },
  };
  NH.Kanji = { explain, ruby, GROUPS, PACKS, packOf, kanjiOrder };
})();
