/* Real signs with kanji, on the kanji line's Read tab: drawn as they look,
 * with furigana you can turn off, and every word tappable for its reading,
 * meaning and the kanji in it. The translation stays hidden until asked. */
window.NH = window.NH || {};

(function () {
  const { h, hex, store } = NH;
  const UI = NH.UI;
  const SIGNS = NH.SIGNS || [];
  const IS_KANJI = /[㐀-鿿々]/;
  const byId = (id) => SIGNS.find((x) => x.id === id);

  // What TTS should say for a line: each word's reading, so 方 is かた, not ほう.
  const SPOKEN = { "〜": "から", "●": "", "・": "、", "　": "、" };
  const lineSpeech = (line) => line.t.map((t) => (typeof t === "string" ? [...t].map((c) => SPOKEN[c] ?? c).join("") : t[1] || t[0])).join("");
  const speech = (sign) => sign.lines.map(lineSpeech).join("。");
  const kanjiOf = (sign) => [...new Set(sign.lines.flatMap((l) => l.t.flatMap((t) => [...(typeof t === "string" ? t : t[0])])).filter((c) => IS_KANJI.test(c)))];
  const started = (cs) => cs.filter((c) => NH.SRS.card("j:" + c)).length;

  // The sign, line by line; words are buttons when `onWord` is given.
  function render(sign, { onWord, mini = false } = {}) {
    const lines = mini ? sign.lines.slice(0, 2) : sign.lines;
    return h("figure.ksign", { class: `look-${sign.look}${mini ? " mini" : ""}` },
      lines.map((line) => h("p.ksl", { class: [line.head ? "head" : "", line.warn ? "warn" : ""].join(" ").trim() || null },
        line.t.map((t) => {
          if (typeof t === "string") return h("span.kp", t);
          const [text, reading] = t;
          const face = reading && IS_KANJI.test(text) ? UI.ruby(text, reading) : text;
          return onWord ? h("button.kw", { type: "button", onclick: (e) => onWord(t, e.currentTarget) }, face) : h("span.kw", face);
        }))));
  }

  // ── Read tab ─────────────────────────────────────────────
  function tab(body) {
    body.append(
      h("p.intro", "Real signs from a Japanese clinic, written the way you'll meet them. Tap any word for its reading and meaning; turn furigana off once you can read them."),
      h("div.word-tools", UI.furiganaToggle()));
    for (const P of NH.Kanji.PACKS) {
      const list = SIGNS.filter((x) => (x.pack || "n5") === P.id);
      if (!list.length) continue;
      body.append(h("section.rsec",
        h("div.ksec-head", h("h2", P.en, h("span.jp", P.jp)), h("p", `${list.length} signs`)),
        h("div.sgrid", list.map((x) => {
          const cs = kanjiOf(x);
          return h("a.scard", { href: `#ksign-${x.id}` },
            render(x, { mini: true }),
            h("span.rmeta", h("b", x.title), h("span.muted", `${started(cs)} of ${cs.length} kanji started`)));
        }))));
    }
  }

  // ── one sign, up close ───────────────────────────────────
  NH.Routes.push({ match: /^ksign-([a-z0-9-]+)$/, render: (m) => {
    const sign = byId(m[1]);
    if (!sign) return UI.go("kanji-read");
    view(sign);
  } });

  function view(sign) {
    const app = document.getElementById("app");
    document.body.classList.add("scr-read");
    const gloss = h("div.sgloss", { "aria-live": "polite" }, h("p.muted", "Tap a word to see its reading and meaning."));
    const fig = render(sign, { onWord: (t, el) => {
      fig.querySelectorAll(".kw.on").forEach((b) => b.classList.remove("on"));
      el.classList.add("on");
      showWord(t);
      UI.say(t[1] || t[0], { quiet: true });
    } });

    function showWord([text, reading, meaning]) {
      const kana = reading || text;
      const known = (NH.KANJI_WORDS || []).find((w) => w.text === text);
      const cs = [...new Set([...text].filter((c) => IS_KANJI.test(c)))];
      gloss.replaceChildren(
        h("div.sg-word",
          h("span.sg-face", reading && IS_KANJI.test(text) ? UI.ruby(text, reading) : text),
          h("span.sg-text", h("b", meaning), h("span", kana)),
          UI.speakBtn(kana, "small")),
        cs.length ? h("div.sg-kanji", { "aria-label": "Kanji in this word" }, cs.map((c) => {
          const K = NH.KANJI_INFO?.[c];
          return K ? h("a.look", { href: `#k-${hex(c)}` }, h("span.kc", c), h("span.kr", K.meaning.split(",")[0])) : h("span.look", h("span.kc", c));
        })) : null,
        known ? h("a.sg-write", { href: `#word-${known.id}` }, UI.icon("pen"), "Practice writing this word") : null);
    }

    const answer = h("section.card.read-answer", { hidden: true },
      h("ol.sg-en", sign.en.map((line, i) => h("li", h("span.sg-ja", sign.lines[i].t.map((t) => (typeof t === "string" ? t : t[0])).join("")), h("span", line)))),
      sign.where ? h("p", h("b", "Where: "), sign.where) : null,
      sign.note ? h("p", sign.note) : null);
    const revealBtn = UI.btn("Show translation", () => {
      const show = answer.hidden;
      answer.hidden = !show;
      revealBtn.querySelector("span").textContent = show ? "Hide translation" : "Show translation";
      revealBtn.setAttribute("aria-expanded", String(show));
    }, "ghost", "book");
    revealBtn.setAttribute("aria-expanded", "false");

    const i = SIGNS.indexOf(sign);
    const prev = SIGNS[i - 1], next = SIGNS[i + 1];
    app.replaceChildren(
      h("header.bar",
        UI.iconBtn("back", "All signs", () => UI.go("kanji-read")),
        h("h1.bar-title", h("b", "看板"), h("small", sign.title)),
        UI.iconBtn("gear", "Settings", () => UI.settings())),
      h("main.readview.signview",
        h("div.read-stage", fig),
        h("p.read-hint.muted", sign.where),
        h("div.word-tools", UI.furiganaToggle()),
        gloss,
        h("div.actions",
          UI.btn("Listen", () => UI.say(speech(sign)), "ghost", "speaker"),
          revealBtn),
        answer,
        h("nav.pager",
          prev ? h("a.pg", { href: `#ksign-${prev.id}`, "aria-label": `Previous: ${prev.title}` }, UI.icon("prev"), h("span", prev.title)) : h("span"),
          next ? h("a.pg", { href: `#ksign-${next.id}`, "aria-label": `Next: ${next.title}` }, h("span", next.title), UI.icon("next")) : h("span"))));
  }

  NH.Signs = { tab, view, render, lineSpeech, speech, kanjiOf, byId };
})();
