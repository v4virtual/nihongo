/* Today: the spaced-repetition queue, the sessions that work through it, the
 * "hear it, write it" drill, and the progress-by-row view. Nothing here counts
 * streaks or points; the only number that matters is what's due. */
window.NH = window.NH || {};

(function () {
  const { h, store, SRS, Backdrop, hex, shuffle } = NH;
  const UI = NH.UI;

  // ── Today tab ────────────────────────────────────────────
  const LEARN = [["hiragana", "Hiragana first"], ["katakana", "Katakana first"], ["both", "Both together"]];

  NH.Tabs.today = function (body, S = NH.SCRIPTS.hiragana) {
    const { due, fresh } = SRS.today();
    const here = UI.tabRoute("today", S);
    const prefix = S.id === "hiragana" ? "" : `${S.id}-`;
    const isKanji = S.id === "kanji";
    const total = due.length + fresh.length;
    const preview = [...due, ...fresh].slice(0, 12).map((id) => SRS.itemText(id));
    const limit = store.settings.dailyNew ?? 5;
    const limits = h("div.chips", { role: "radiogroup", "aria-label": "New kana per day" }, [3, 5, 10].map((n) =>
      h("button.chip", { type: "button", role: "radio", "aria-checked": String(n === limit), onclick: () => { store.set("dailyNew", n); UI.go(here); } }, `${n} a day`)));
    const mode = store.settings.learn || "hiragana";
    const order = h("div.chips", { role: "radiogroup", "aria-label": "Which kana to learn first" }, LEARN.map(([id, label]) =>
      h("button.chip", { type: "button", role: "radio", "aria-checked": String(id === mode), onclick: () => { store.set("learn", id); UI.go(here); } }, label)));
    // On the katakana line, say why no katakana are coming yet.
    const waiting = S.id === "katakana" && mode === "hiragana" && SRS.kanaOrder("hiragana").some((c) => !SRS.card("k:" + c));
    const kanjiLimit = store.settings.dailyKanji ?? 2;
    const kanjiLimits = h("div.chips", { role: "radiogroup", "aria-label": "New kanji per day" }, [[0, "Off"], [2, "2 a day"], [3, "3 a day"], [5, "5 a day"]].map(([n, label]) =>
      h("button.chip", { type: "button", role: "radio", "aria-checked": String(n === kanjiLimit), onclick: () => { store.set("dailyKanji", n); UI.go(here); } }, label)));
    const kanjiWaiting = isKanji && !SRS.ready("j:" + NH.KANJI[0].k);

    body.append(
      h("section.card.today-card",
        h("h2", "Today"),
        total
          ? h("p.today-sum", h("b", `${due.length}`), ` to review · `, h("b", `${fresh.length}`), ` new`)
          : h("p.today-sum", "All caught up. ", nextDueText()),
        preview.length ? h("p.today-preview", { "aria-label": "Coming up" }, preview.map((t) => h("span", t))) : null,
        total ? UI.btn("Start", () => UI.go(prefix + "session"), "primary", "play") : null,
        isKanji ? h("div.today-limit", h("span.muted", "New kanji:"), kanjiLimits) : h("div.today-limit", h("span.muted", "New kana:"), limits),
        isKanji ? null : h("div.today-limit", h("span.muted", "Learn:"), order),
        waiting ? h("p.muted.today-note", "New kana come from hiragana until you've started all of it. Pick Katakana first or Both together to begin katakana now.") : null,
        kanjiWaiting ? h("p.muted.today-note", "Kanji start once you've started all 46 basic hiragana, since their readings are written in kana.") : null),
      ...(isKanji ? [] : [h("section.card.today-card",
        h("h2", "Hear it, write it"),
        h("p", "Ten kana read aloud, no picture. Write each one from memory."),
        UI.btn("Start dictation", () => UI.go(prefix + "dictation"), "ghost", "ear"))]),
      isKanji ? kanjiProgress() : progressByRow(S));
  };

  function nextDueText() {
    const now = Date.now();
    const next = Object.values(store.srs().cards).map((c) => c.due).filter((t) => t > now).sort((a, b) => a - b)[0];
    if (!next) return "Start with the first kana whenever you like.";
    const hrs = (next - now) / 3600e3;
    return `Next review ${hrs < 1 ? "within the hour" : hrs < 20 ? `in about ${Math.round(hrs)} hours` : hrs < 44 ? "tomorrow" : `in ${Math.round(hrs / 24)} days`}.`;
  }

  // Each kana as a chip coloured by how well it's held; tap one to study it.
  function progressByRow(S) {
    const label = { new: "not started", learning: "learning", due: "due now", strong: "strong" };
    const chip = (c) => {
      const st = SRS.strength("k:" + c);
      return h("a.pchip", { href: `#k-${hex(c)}`, class: "s-" + st, title: `${c} ${UI.romaji(c)}: ${label[st]}`, "aria-label": `${c}, ${label[st]}` }, c);
    };
    const table = (key) => h("div.ptable", S.tables[key].rows.map((row) => {
      const cells = row.cells.filter(Boolean);
      return h("div.prow", h("span.prow-name", `${cells[0]}-row`), h("span.prow-chips", cells.map(chip)));
    }));
    const summary = (key, name) => {
      const counts = { new: 0, learning: 0, due: 0, strong: 0 };
      S.tables[key].rows.flatMap((r) => r.cells).filter(Boolean).forEach((c) => counts[SRS.strength("k:" + c)]++);
      return h("p.muted", `${name}: ${counts.strong} strong, ${counts.learning + counts.due} learning, ${counts.new} not started.`);
    };
    return h("section.card.progress",
      h("h2", `${S.en} by row`),
      h("p.legend", Object.entries(label).map(([k, v]) => h("span", h("i", { class: "s-" + k }), v))),
      h("h3.muted", "Gojūon"), table("basic"),
      S.id === "katakana" ? h("div.prow", h("span.prow-name", "long"), h("span.prow-chips", chip("ー"))) : null,
      h("h3.muted", "Dakuten & handakuten"), table("voiced"),
      summary("combos", "Combos"),
      S.tables.extended ? summary("extended", "Loanword sounds") : null);
  }

  // The 80 kanji in their theme groups, coloured like the kana rows.
  function kanjiProgress() {
    return h("section.card.progress",
      h("h2", "Kanji by theme"),
      h("div.ptable", NH.Kanji.GROUPS.map(([g, , en]) => h("div.prow", h("span.prow-name", en),
        h("span.prow-chips", NH.KANJI.filter((x) => x.group === g).map((x) => {
          const st = SRS.strength("j:" + x.k);
          return h("a.pchip", { href: `#k-${hex(x.k)}`, class: "s-" + st, title: `${x.k} ${x.meaning}`, "aria-label": `${x.k}, ${st === "new" ? "not started" : st === "due" ? "due now" : st}` }, x.k);
        }))))));
  }

  // ── sessions ─────────────────────────────────────────────
  // #session and #dictation; #katakana-session… come back to their own line.
  const backOf = (m) => (m[1] ? `${m[1]}today` : "today");
  NH.Routes.push({ match: /^(katakana-|kanji-)?session$/, render: (m) => runSession(todayTasks(), { title: "今日 Today", back: backOf(m) }) });
  NH.Routes.push({ match: /^(katakana-)?dictation$/, render: (m) => runSession(dictationTasks(m[1] ? "katakana" : "hiragana"), { title: "Hear it, write it", back: backOf(m), practiceOnly: true }) });

  function todayTasks() {
    const { due, fresh } = SRS.today();
    return [...due.slice(0, 40).map((id) => ({ id, type: reviewType(id) })), ...fresh.map((id) => ({ id, type: "intro" }))];
  }
  // Kana rotate through writing, recognising and dictation; words between writing and recognising.
  function reviewType(id) {
    const n = SRS.card(id)?.reps || 0;
    if (id[0] === "r") return "read";
    if (id === "k:ー") return "write"; // a mark has no sound of its own to hear or name
    if (id[0] === "k") return ["write", "recognize", "hear"][n % 3];
    return ["write", "recognize"][n % 2];
  }
  // Dictation draws on the kana you've started, weakest first; a beginner gets the first rows.
  function dictationTasks(script = "hiragana") {
    const now = Date.now();
    let pool = Object.entries(store.srs().cards).filter(([id]) => id.startsWith("k:") && [...id.slice(2)].length === 1 && id !== "k:ー" && NH.scriptOf(id.slice(2)).id === script)
      .sort((a, b) => SRS.retrievability((now - a[1].last) / SRS.DAY, a[1].s) - SRS.retrievability((now - b[1].last) / SRS.DAY, b[1].s))
      .map(([id]) => id);
    if (pool.length < 5) pool = SRS.kanaOrder(script).slice(0, 10).map((c) => "k:" + c);
    return shuffle(pool.slice(0, 10)).map((id) => ({ id, type: "hear" }));
  }

  function runSession(tasks, { title, back, practiceOnly = false }) {
    const app = document.getElementById("app");
    const st = store.settings;
    const style = st.style;
    let i = 0, writer = null, alive = true, reviewed = 0, introduced = 0;
    const retried = new Set();
    const timers = [];
    const later = (fn, ms) => timers.push(setTimeout(() => alive && fn(), ms));
    UI.onLeave(() => { alive = false; timers.forEach(clearTimeout); writer?.destroy(); });

    document.body.classList.add("scr-write");
    document.body.dataset.style = style;
    const stage = h("main.stage.session", { "data-style": style, "data-hand": st.hand || "right" });
    const backdrop = h("div.backdrop");
    const progress = h("span.session-count");
    const panel = h("div.panel");
    const cellWrap = h("div.cell-wrap");
    stage.append(backdrop,
      h("header.bar.stage-bar", UI.iconBtn("back", "Leave", () => UI.go(back)), h("h1.bar-title", h("b", title), h("small", progress)), UI.iconBtn("gear", "Settings", () => UI.settings())),
      panel, cellWrap);
    app.replaceChildren(stage);
    Backdrop.render(backdrop, style, [], 7);
    UI.syncBars();

    function next() {
      writer?.destroy();
      writer = null;
      panel.replaceChildren();
      cellWrap.replaceChildren();
      if (i >= tasks.length) return finish();
      progress.textContent = `${i + 1} of ${tasks.length}`;
      const t = tasks[i];
      const render = RENDER[t.type];
      if (!render || !SRS.itemText(t.id)) { i++; return next(); }
      render(t, (grade) => {
        if (practiceOnly) SRS.practice(t.id, grade);
        else {
          if (!SRS.card(t.id)) introduced++;
          else reviewed++;
          SRS.review(t.id, grade);
        }
        // Forgotten items come round once more before the session ends.
        if (grade === SRS.AGAIN && !retried.has(t.id)) {
          retried.add(t.id);
          tasks.push({ id: t.id, type: t.type === "intro" ? "write" : t.type });
        }
        i++;
        next();
      });
    }

    // ── task types ──
    const RENDER = { intro, write: (t, done) => writeTask(t, done, "memory"), hear: (t, done) => writeTask(t, done, "memory", true), recognize, read: (t, done) => NH.ReadTask(t, { panel, cellWrap, later, finish: finishTask, style }, done) };

    function prompt(label, main, sub, speakText) {
      return h("div.task-prompt",
        h("span.task-label", label),
        main ? h("div.task-main", main) : null,
        sub ? h("div.task-sub", sub) : null,
        speakText ? UI.speakBtn(speakText) : null);
    }

    function intro(t, done) {
      if (t.id[0] === "r") return RENDER.read(t, done);
      const d = describe(t.id);
      const svg = UI.strokeOrderSvg(d.text);
      panel.append(
        prompt(d.label, d.big, d.intro, d.speak),
        d.note ? h("p.task-note", d.note) : null,
        h("div.actions", UI.btn("Write it", () => writeTask(t, done, d.single ? "trace" : "guide"), "primary", "pen")));
      cellWrap.append(h("div.so-wrap.task-so", svg, h("div.so-tools", UI.iconBtn("play", "Replay stroke order", () => UI.replay(svg)))));
      requestAnimationFrame(() => UI.replay(svg));
      UI.say(d.speak, { quiet: true });
    }

    function writeTask(t, done, assist, hearOnly = false) {
      panel.replaceChildren();
      cellWrap.replaceChildren();
      const d = describe(t.id);
      const text = d.text;
      const chars = [...text];
      let pos = 0, scoreSum = 0, misses = 0, hinted = false;
      const fb = h("p.feedback", { "aria-live": "polite" });
      const seq = chars.length > 1 ? h("div.seq") : null;
      const drawSeq = () => seq?.replaceChildren(...chars.map((c, k) =>
        h("span.seq-c", { class: [k === pos ? "on" : "", k < pos ? "done" : ""].join(" ") }, h("span", k < pos ? c : "?"))));
      const main = hearOnly ? null : d.cue;
      const sub = hearOnly ? null : d.cueSub;
      panel.append(
        prompt(hearOnly ? "Hear it, write it" : assist === "memory" ? "Write it from memory" : "Write it", main, sub, null),
        h("div.actions",
          UI.btn("Listen", () => UI.say(d.speak), "ghost", "speaker"),
          UI.btn("Show me", () => { hinted = true; writer.demo(); }, "ghost", "play")),
        seq, fb);
      const cell = h("div.cell");
      cellWrap.append(cell);
      writer = new NH.Writer(cell, { style, assist, onEvent });
      writer.setChar(chars[0], 0);
      drawSeq();
      fb.textContent = hearOnly ? "Listen, then write what you hear." : `${chars.length > 1 ? `${chars.length} characters. ` : ""}${assist === "memory" ? "Start whenever you're ready." : "Follow the guide."}`;
      later(() => UI.say(d.speak, { quiet: true }), 250);

      function onEvent(e) {
        if (e.type === "stroke" && !e.ok) { fb.textContent = e.message; fb.className = "feedback no"; }
        if (e.type === "stroke" && e.ok) { fb.textContent = `Stroke ${e.index + 1} ✓`; fb.className = "feedback ok"; }
        if (e.type !== "done") return;
        scoreSum += e.score;
        misses += e.misses;
        pos++;
        drawSeq();
        if (pos < chars.length) return later(() => writer.setChar(chars[pos], pos), 900);
        const score = Math.round(scoreSum / chars.length);
        let grade = SRS.gradeWriting({ score, misses, assist });
        if (hinted) grade = Math.min(grade, SRS.HARD);
        // Tracing caps the grade, but a clean trace still counts as a pass.
        const pass = score >= 75 && misses < 3;
        fb.className = pass ? "feedback ok" : "feedback tip";
        fb.textContent = `${text} (${d.reading}) · ${score}%${hinted ? " · with a hint" : ""}`;
        UI.say(d.speak, { quiet: true });
        finishTask(grade, done, pass);
      }
    }

    function recognize(t, done) {
      const d = describe(t.id);
      const text = d.text;
      const kind = t.id[0], isKana = kind === "k";
      const item = itemOf(t.id);
      const answer = isKana ? UI.romaji(text) : item.meaning;
      const pool = isKana
        ? SRS.kanaOrder(NH.scriptOf(text).id).filter((c) => [...c].length === [...text].length && UI.romaji(c) !== answer)
        : kind === "j" ? NH.KANJI : kind === "v" ? NH.KANJI_WORDS : [...NH.WORDS, ...NH.PHRASES];
      const looks = isKana ? (UI.info(text).lookalikes || []).filter((c) => UI.romaji(c) !== answer)
        : kind === "j" ? item.lookalikes.map((c) => NH.KANJI_INFO[c]) : [];
      const wrong = [...new Set([...shuffle(looks), ...shuffle(pool)].map((x) => (isKana ? UI.romaji(x) : x.meaning)))].filter((x) => x !== answer).slice(0, 3);
      const options = shuffle([answer, ...wrong]);
      const shownAt = performance.now();
      const fb = h("p.feedback", { "aria-live": "polite" });
      panel.append(prompt(isKana ? "How do you read this?" : "What does this mean?", null, null, null), fb);
      const opts = h("div.qopts", { class: "latin" }, options.map((o) => h("button.qopt", { type: "button", onclick: (e) => choose(o, e.currentTarget) }, o)));
      cellWrap.append(h("div.task-card", h("div.qprompt", { class: chars1(text) ? "" : "word" }, text), opts));
      function choose(o, el) {
        if (opts.dataset.answered) return;
        opts.dataset.answered = "1";
        const ok = o === answer;
        opts.querySelectorAll("button").forEach((b) => { b.disabled = true; if (b.textContent === answer) b.classList.add("right"); else if (b === el) b.classList.add("wrong"); });
        ok ? NH.Audio.accept(style, 3, 5) : NH.Audio.reject(style);
        fb.className = ok ? "feedback ok" : "feedback no";
        fb.textContent = ok ? `Yes: ${text} is ${answer}.` : `${text} is ${answer}.`;
        UI.announce(fb.textContent);
        UI.say(d.speak, { quiet: true });
        finishTask(SRS.gradeChoice(ok, performance.now() - shownAt), done);
      }
    }

    // Good answers move on by themselves; otherwise wait so there's time to look.
    function finishTask(grade, done, pass = grade >= SRS.GOOD) {
      if (pass) return later(() => done(grade), 1300);
      panel.append(h("div.actions", UI.btn("Next", () => done(grade), "primary", "next")));
      panel.querySelector(".actions:last-child button")?.focus();
    }

    function finish() {
      progress.textContent = "";
      const now = Date.now();
      const upcoming = Object.values(store.srs().cards).filter((c) => c.due > now).sort((a, b) => a.due - b.due);
      panel.append(prompt(practiceOnly ? "Dictation done" : "That's today's practice", null, null, null));
      cellWrap.append(h("div.task-card.summary",
        practiceOnly ? h("p", `${tasks.length} kana written from sound.`) : h("p", h("b", reviewed), " reviewed · ", h("b", introduced), " new"),
        upcoming.length ? h("p.muted", nextDueText()) : null,
        h("div.result-actions", UI.btn("Back to Today", () => UI.go(back), "primary", "next"))));
      NH.Audio.complete(style, 100);
    }

    next();
  }

  function itemOf(id) {
    const key = id.slice(2);
    if (id[0] === "w") return NH.WORDS.find((w) => w.id === key);
    if (id[0] === "p") return NH.PHRASES.find((w) => w.id === key);
    if (id[0] === "r") return (NH.READING || []).find((r) => r.id === key);
    if (id[0] === "v") return (NH.KANJI_WORDS || []).find((w) => w.id === key);
    if (id[0] === "j") return NH.KANJI_INFO?.[key];
    return null;
  }
  const chars1 = (t) => [...t].length === 1;

  /* How a card is shown: its text, what to show when introducing it, the cue
   * for writing it from memory, and what to say aloud. */
  function describe(id) {
    const kind = id[0], text = SRS.itemText(id), item = itemOf(id);
    if (kind === "k") {
      const I = UI.info(text);
      return { text, single: true, label: "New kana", big: text, intro: UI.romaji(text), cue: UI.romaji(text), reading: UI.romaji(text), speak: text, note: I.mnemonic || I.notes?.[0] };
    }
    if (kind === "j") {
      const readings = [...item.on, ...item.kun.map((k) => k.replace(".", ""))].join("・");
      return { text, single: true, label: "New kanji", big: text, intro: `${item.meaning} · ${readings}`, cue: item.meaning, cueSub: readings, reading: item.meaning, speak: text, note: item.mnemonic };
    }
    if (kind === "v") {
      return { text, label: "New word", big: UI.ruby(text, item.kana), intro: `${item.kana} · ${item.meaning}`, cue: item.meaning, cueSub: item.kana, reading: `${item.kana} · ${item.meaning}`, speak: item.kana, note: item.note };
    }
    return { text, label: kind === "w" ? "New word" : "New phrase", big: text, intro: `${item.romaji} · ${item.meaning}`, cue: item.meaning, cueSub: item.romaji, reading: `${item.romaji} · ${item.meaning}`, speak: text, note: item.note };
  }

  NH.Today = { todayTasks, dictationTasks, reviewType, itemOf, describe, runSession };
})();
