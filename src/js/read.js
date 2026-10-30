/* Reading mode: signs, menus and short sentences drawn the way you'd meet them
 * in Japan. Tap any kana for its sound; the reading and meaning stay hidden
 * until you ask, so you get to try first. */
window.NH = window.NH || {};

(function () {
  const { h, hex, shuffle } = NH;
  const UI = NH.UI;
  const COMBINE = new Set(["ゃ", "ゅ", "ょ", "ぁ", "ぃ", "ぅ", "ぇ", "ぉ", "ャ", "ュ", "ョ", "ァ", "ィ", "ゥ", "ェ", "ォ"]);
  const KINDS = [
    ["station", "駅", "Stations", "Name boards on the platform, with the stops either side."],
    ["sign", "看板", "Signs", "Curtains, road markings and notices around town."],
    ["menu", "食べ物", "Food", "Sushi menus, noodle shops, stalls and convenience-store labels."],
    ["sentence", "文", "Sentences", "Short sentences with a space between words, as in children's books."],
  ];

  const byId = (id) => NH.READING.find((r) => r.id === id);
  // Signs with any katakana live on the katakana line; the rest are hiragana.
  const itemsOf = (S) => NH.READING.filter((r) => NH.scriptOf(r.kana) === S);

  /* Splits text into readable units: a kana plus any small ゃ/ゅ/ょ after it,
   * so きょ is one tap. Spaces separate words; punctuation is kept. */
  function units(text) {
    return text.split(/\s+/).filter(Boolean).map((word) => {
      const out = [];
      for (const c of word) {
        if (COMBINE.has(c) && out.length && NH.KANA_RE.test(out[out.length - 1])) out[out.length - 1] += c;
        else out.push(c);
      }
      return out;
    });
  }

  function unitReading(u, { last = false, sentence = false } = {}) {
    if (u === "っ" || u === "ッ") return "small tsu: a short pause that doubles the next sound";
    if (u === "ー") return "long-vowel mark: stretch the sound before it";
    if (!NH.KANA_RE.test(u)) return u === "。" ? "full stop" : u === "、" ? "comma" : u;
    if (sentence && last && u === "は") return "ha, read wa when it's a particle";
    if (u === "を" || u === "ヲ") return "o (written wo, said o)";
    return UI.romaji(u);
  }

  // The sign itself, drawn in CSS. `reveal` shows the romaji under it.
  function sign(item, { reveal = false, mini = false } = {}) {
    const cls = `sign look-${item.look}${mini ? " mini" : ""}`;
    const romaji = h("figcaption.sign-romaji", { hidden: !reveal }, item.romaji);
    let art;
    if (item.look === "station") {
      art = h("div.eki.eki-sign", { style: `--line:${item.line || "var(--line-h)"};--line-ink:${item.lineInk || "#0f1a07"}` },
        item.kanji ? h("div.eki-kanji", item.kanji) : null,
        h("div.eki-name", item.kana),
        h("div.eki-band", h("span.prev", item.prev ? `← ${item.prev}` : ""), h("span.next", item.next ? `${item.next} →` : "")));
    } else if (item.look === "noren") {
      art = h("div.noren", h("span.noren-rod"), h("span.noren-cloth", h("span.noren-l"), h("span.noren-r")), h("span.noren-text", item.kana));
    } else if (item.look === "vend") {
      art = h("div.vend", { class: "tone-" + (item.tone || "cold") }, h("span.vend-can"), h("span.sign-text", item.kana), h("span.vend-price", "¥130"));
    } else if (item.look === "warning") {
      art = h("div.warning", h("span.warn-mark", { "aria-hidden": "true" }, "!"), h("span.sign-text", item.kana));
    } else {
      art = h("div.sign-art", h("span.sign-text", item.kana));
    }
    return h("figure", { class: cls }, art, romaji);
  }

  // ── Read tab ─────────────────────────────────────────────
  NH.Tabs.read = function (body, S = NH.SCRIPTS.hiragana) {
    body.append(
      h("p.intro", S.id === "katakana"
        ? "Katakana around you: menus, shop signs and station notices, often mixed with hiragana. Try reading each one before you peek."
        : "Things you'll see in Japan, in hiragana. Try reading each one before you peek."),
      h("div.cta-row.left", UI.btn("Practice reading", () => UI.go(S.id === "katakana" ? "katakana-readquiz" : "readquiz"), "primary", "play")));
    for (const [kind, jp, title, blurb] of KINDS) {
      const items = itemsOf(S).filter((r) => r.kind === kind);
      if (!items.length) continue;
      body.append(h("section.rsec",
        h("div.ksec-head", h("h2", title, h("span.jp", jp)), h("p", blurb)),
        h("div.rgrid", items.map((r) => h("a.rcard", { href: `#sign-${r.id}` },
          sign(r, { mini: true }),
          h("span.rmeta", h("b", r.meaning), h("span.wlv", { title: `Level ${r.level}` }, "●".repeat(r.level) + "○".repeat(3 - r.level))))))));
    }
  };

  // ── one sign, up close ───────────────────────────────────
  NH.Routes.push({ match: /^sign-([a-z0-9-]+)$/, render: (m) => {
    const item = byId(m[1]);
    if (!item) return UI.go("read");
    signView(item);
  } });

  function signView(item) {
    const app = document.getElementById("app");
    document.body.classList.add("scr-read");
    const text = item.kana.replace(/\s/g, "");
    const fig = sign(item, { reveal: false });
    const out = h("p.tk-out", { "aria-live": "polite" }, "Tap a kana to hear it.");
    const isSentence = item.kind === "sentence";
    const tapRow = h("div.tapkana", { role: "group", "aria-label": "Kana in this sign" }, units(item.kana).map((word) =>
      h("span.tk-word", word.map((u, k) => NH.KANA_RE.test(u)
        ? h("button.tk", { type: "button", onclick: (e) => {
            tapRow.querySelectorAll(".tk.on").forEach((b) => b.classList.remove("on"));
            e.currentTarget.classList.add("on");
            out.textContent = `${u}: ${unitReading(u, { last: k === word.length - 1 && word.length > 1, sentence: isSentence })}`;
            UI.say(u, { quiet: true });
          } }, u)
        : h("span.tk-punct", u)))));
    const answer = h("section.card.read-answer", { hidden: true },
      h("div.big-romaji", item.romaji),
      h("p.read-meaning", item.meaning),
      item.kanji ? h("p.muted", "Usually written ", h("b", item.kanji), item.look === "station" ? " on the board above the hiragana." : ".") : null,
      item.where ? h("p", h("b", "Where: "), item.where) : null,
      item.note ? h("p", item.note) : null);
    const revealBtn = UI.btn("Show reading", () => {
      const show = answer.hidden;
      answer.hidden = !show;
      fig.querySelector(".sign-romaji").hidden = !show;
      revealBtn.querySelector("span").textContent = show ? "Hide reading" : "Show reading";
      revealBtn.setAttribute("aria-expanded", String(show));
    }, "ghost", "book");
    revealBtn.setAttribute("aria-expanded", "false");

    const S = NH.scriptOf(item.kana);
    const list = itemsOf(S);
    const idx = list.indexOf(item);
    const prev = list[idx - 1], next = list[idx + 1];
    app.replaceChildren(
      h("header.bar",
        UI.iconBtn("back", "All reading", () => UI.go(UI.tabRoute("read", S))),
        h("h1.bar-title", h("b", "読む"), h("small", "Read")),
        UI.iconBtn("gear", "Settings", () => UI.settings())),
      h("main.readview",
        h("div.read-stage", fig),
        h("p.read-hint.muted", item.where || "Try reading it first."),
        tapRow, out,
        h("div.actions",
          UI.btn("Listen", () => UI.say(text), "ghost", "speaker"),
          revealBtn,
          NH.Speak?.button ? NH.Speak.button(item) : null),
        answer,
        h("nav.pager",
          prev ? h("a.pg", { href: `#sign-${prev.id}`, "aria-label": `Previous: ${prev.kana}` }, UI.icon("prev"), h("span", prev.kana.replace(/\s/g, ""))) : h("span"),
          next ? h("a.pg", { href: `#sign-${next.id}`, "aria-label": `Next: ${next.kana}` }, h("span", next.kana.replace(/\s/g, "")), UI.icon("next")) : h("span"))));
  }

  // ── practice: "what does this say?" ──────────────────────
  NH.Routes.push({ match: /^(katakana-)?readquiz$/, render: (m) => {
    const S = m[1] ? NH.SCRIPTS.katakana : NH.SCRIPTS.hiragana;
    // Signs whose kana you've started come first; the rest fill up to ten.
    const ids = itemsOf(S).map((r) => "r:" + r.id);
    const ready = shuffle(ids.filter((id) => NH.SRS.ready(id)));
    const rest = shuffle(ids.filter((id) => !NH.SRS.ready(id))).sort((a, b) => byId(a.slice(2)).level - byId(b.slice(2)).level);
    const tasks = [...ready, ...rest].slice(0, 10).map((id) => ({ id, type: "read" }));
    NH.Today.runSession(tasks, { title: "読む Read", back: UI.tabRoute("read", S), practiceOnly: true });
  } });

  // A session task: pick the meaning of a sign. Used by Today and by practice.
  NH.ReadTask = function (t, { panel, cellWrap, finish, style }, done) {
    const item = byId(t.id.slice(2));
    const isStation = item.kind === "station";
    const same = NH.READING.filter((r) => r !== item && r.kind === item.kind);
    const other = NH.READING.filter((r) => r !== item && r.kind !== item.kind);
    const wrong = [...new Set([...shuffle(same), ...shuffle(other)].map((r) => r.meaning))].filter((m) => m !== item.meaning).slice(0, 3);
    const options = shuffle([item.meaning, ...wrong]);
    const fig = sign(item, { reveal: false });
    const fb = h("p.feedback", { "aria-live": "polite" });
    const shownAt = performance.now();
    panel.append(h("div.task-prompt", h("span.task-label", isStation ? "Which station is this?" : item.kind === "sentence" ? "What does this sentence say?" : "What does this say?")), fb);
    const opts = h("div.qopts", { class: "latin" }, options.map((o) => h("button.qopt", { type: "button", onclick: (e) => choose(o, e.currentTarget) }, o)));
    cellWrap.append(h("div.task-card.read-task", fig, opts));
    function choose(o, el) {
      if (opts.dataset.answered) return;
      opts.dataset.answered = "1";
      const ok = o === item.meaning;
      opts.querySelectorAll("button").forEach((b) => { b.disabled = true; if (b.textContent === item.meaning) b.classList.add("right"); else if (b === el) b.classList.add("wrong"); });
      fig.querySelector(".sign-romaji").hidden = false;
      ok ? NH.Audio.accept(style, 3, 5) : NH.Audio.reject(style);
      fb.className = ok ? "feedback ok" : "feedback no";
      fb.textContent = `${item.kana.replace(/\s/g, "")} is ${item.romaji}: ${item.meaning}`;
      UI.announce(fb.textContent);
      UI.say(item.kana.replace(/\s/g, ""), { quiet: true });
      finish(NH.SRS.gradeChoice(ok, performance.now() - shownAt), done);
    }
  };

  NH.Read = { units, unitReading, sign, byId, itemsOf };
})();
