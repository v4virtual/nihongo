/* Today: the spaced-repetition queue, the sessions that work through it, the
 * "hear it, write it" drill, and the progress-by-row view. Nothing here counts
 * streaks or points; the only number that matters is what's due. */
window.NH = window.NH || {};

(function () {
  const { h, store, SRS, Backdrop, hex, shuffle } = NH;
  const UI = NH.UI;

  // ── Today tab ────────────────────────────────────────────
  NH.Tabs.today = function (body) {
    const { due, fresh } = SRS.today();
    const total = due.length + fresh.length;
    const preview = [...due, ...fresh].slice(0, 12).map((id) => SRS.itemText(id));
    const limit = store.settings.dailyNew ?? 5;
    const limits = h("div.chips", { role: "radiogroup", "aria-label": "New kana per day" }, [3, 5, 10].map((n) =>
      h("button.chip", { type: "button", role: "radio", "aria-checked": String(n === limit), onclick: () => { store.set("dailyNew", n); UI.go("today"); } }, `${n} a day`)));

    body.append(
      h("section.card.today-card",
        h("h2", "Today"),
        total
          ? h("p.today-sum", h("b", `${due.length}`), ` to review · `, h("b", `${fresh.length}`), ` new`)
          : h("p.today-sum", "All caught up. ", nextDueText()),
        preview.length ? h("p.today-preview", { "aria-label": "Coming up" }, preview.map((t) => h("span", t))) : null,
        total ? UI.btn("Start", () => UI.go("session"), "primary", "play") : null,
        h("div.today-limit", h("span.muted", "New kana:"), limits)),
      h("section.card.today-card",
        h("h2", "Hear it, write it"),
        h("p", "Ten kana read aloud, no picture. Write each one from memory."),
        UI.btn("Start dictation", () => UI.go("dictation"), "ghost", "ear")),
      progressByRow());
  };

  function nextDueText() {
    const now = Date.now();
    const next = Object.values(store.srs().cards).map((c) => c.due).filter((t) => t > now).sort((a, b) => a - b)[0];
    if (!next) return "Start with the first kana whenever you like.";
    const hrs = (next - now) / 3600e3;
    return `Next review ${hrs < 1 ? "within the hour" : hrs < 20 ? `in about ${Math.round(hrs)} hours` : hrs < 44 ? "tomorrow" : `in ${Math.round(hrs / 24)} days`}.`;
  }

  // Each kana as a chip coloured by how well it's held; tap one to study it.
  function progressByRow() {
    const label = { new: "not started", learning: "learning", due: "due now", strong: "strong" };
    const chip = (c) => {
      const st = SRS.strength("k:" + c);
      return h("a.pchip", { href: `#k-${hex(c)}`, class: "s-" + st, title: `${c} ${UI.romaji(c)}: ${label[st]}`, "aria-label": `${c}, ${label[st]}` }, c);
    };
    const table = (key) => h("div.ptable", NH.TABLES[key].rows.map((row) => {
      const cells = row.cells.filter(Boolean);
      return h("div.prow", h("span.prow-name", `${cells[0]}-row`), h("span.prow-chips", cells.map(chip)));
    }));
    const combos = NH.TABLES.combos.rows.flatMap((r) => r.cells);
    const counts = { new: 0, learning: 0, due: 0, strong: 0 };
    combos.forEach((c) => counts[SRS.strength("k:" + c)]++);
    return h("section.card.progress",
      h("h2", "Progress by row"),
      h("p.legend", Object.entries(label).map(([k, v]) => h("span", h("i", { class: "s-" + k }), v))),
      h("h3.muted", "Gojūon"), table("basic"),
      h("h3.muted", "Dakuten & handakuten"), table("voiced"),
      h("p.muted", `Combos: ${counts.strong} strong, ${counts.learning + counts.due} learning, ${counts.new} not started.`));
  }

  // ── sessions ─────────────────────────────────────────────
  NH.Routes.push({ match: /^session$/, render: () => runSession(todayTasks(), { title: "今日 Today", back: "today" }) });
  NH.Routes.push({ match: /^dictation$/, render: () => runSession(dictationTasks(), { title: "Hear it, write it", back: "today", practiceOnly: true }) });

  function todayTasks() {
    const { due, fresh } = SRS.today();
    return [...due.slice(0, 40).map((id) => ({ id, type: reviewType(id) })), ...fresh.map((id) => ({ id, type: "intro" }))];
  }
  // Kana rotate through writing, recognising and dictation; words between writing and recognising.
  function reviewType(id) {
    const n = SRS.card(id)?.reps || 0;
    if (id[0] === "r") return "read";
    if (id[0] === "k") return ["write", "recognize", "hear"][n % 3];
    return ["write", "recognize"][n % 2];
  }
  // Dictation draws on the kana you've started, weakest first; a beginner gets the first rows.
  function dictationTasks() {
    const now = Date.now();
    let pool = Object.entries(store.srs().cards).filter(([id]) => id.startsWith("k:") && [...id.slice(2)].length === 1)
      .sort((a, b) => SRS.retrievability((now - a[1].last) / SRS.DAY, a[1].s) - SRS.retrievability((now - b[1].last) / SRS.DAY, b[1].s))
      .map(([id]) => id);
    if (pool.length < 5) pool = SRS.kanaOrder().slice(0, 10).map((c) => "k:" + c);
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
      const text = SRS.itemText(t.id);
      const isKana = t.id[0] === "k";
      if (t.id[0] === "r") return RENDER.read(t, done);
      const item = itemOf(t.id);
      const svg = UI.strokeOrderSvg(text);
      panel.append(
        prompt(isKana ? "New kana" : t.id[0] === "w" ? "New word" : "New phrase", text, isKana ? UI.romaji(text) : `${item.romaji} · ${item.meaning}`, text),
        isKana && UI.info(text).mnemonic ? h("p.task-note", UI.info(text).mnemonic) : item?.note ? h("p.task-note", item.note) : null,
        h("div.actions", UI.btn("Write it", () => writeTask(t, done, isKana ? "trace" : "guide"), "primary", "pen")));
      cellWrap.append(h("div.so-wrap.task-so", svg, h("div.so-tools", UI.iconBtn("play", "Replay stroke order", () => UI.replay(svg)))));
      requestAnimationFrame(() => UI.replay(svg));
      UI.say(text, { quiet: true });
    }

    function writeTask(t, done, assist, hearOnly = false) {
      panel.replaceChildren();
      cellWrap.replaceChildren();
      const text = SRS.itemText(t.id);
      const chars = [...text];
      const item = itemOf(t.id);
      const isKana = t.id[0] === "k";
      let pos = 0, scoreSum = 0, misses = 0, hinted = false;
      const fb = h("p.feedback", { "aria-live": "polite" });
      const seq = chars.length > 1 ? h("div.seq") : null;
      const drawSeq = () => seq?.replaceChildren(...chars.map((c, k) =>
        h("span.seq-c", { class: [k === pos ? "on" : "", k < pos ? "done" : ""].join(" ") }, h("span", k < pos ? c : "?"))));
      const main = hearOnly ? null : isKana ? UI.romaji(text) : item.meaning;
      const sub = hearOnly ? null : isKana ? null : item.romaji;
      panel.append(
        prompt(hearOnly ? "Hear it, write it" : assist === "memory" ? "Write it from memory" : "Write it", main, sub, null),
        h("div.actions",
          UI.btn("Listen", () => UI.say(text), "ghost", "speaker"),
          UI.btn("Show me", () => { hinted = true; writer.demo(); }, "ghost", "play")),
        seq, fb);
      const cell = h("div.cell");
      cellWrap.append(cell);
      writer = new NH.Writer(cell, { style, assist, onEvent });
      writer.setChar(chars[0], 0);
      drawSeq();
      fb.textContent = hearOnly ? "Listen, then write what you hear." : `${chars.length > 1 ? `${chars.length} kana. ` : ""}${assist === "memory" ? "Start whenever you're ready." : "Follow the guide."}`;
      later(() => UI.say(text, { quiet: true }), 250);

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
        const reading = isKana ? UI.romaji(text) : `${item.romaji} · ${item.meaning}`;
        // Tracing caps the grade, but a clean trace still counts as a pass.
        const pass = score >= 75 && misses < 3;
        fb.className = pass ? "feedback ok" : "feedback tip";
        fb.textContent = `${text} (${reading}) · ${score}%${hinted ? " · with a hint" : ""}`;
        UI.say(text, { quiet: true });
        finishTask(grade, done, pass);
      }
    }

    function recognize(t, done) {
      const text = SRS.itemText(t.id);
      const isKana = t.id[0] === "k";
      const item = itemOf(t.id);
      const answer = isKana ? UI.romaji(text) : item.meaning;
      const pool = isKana
        ? SRS.kanaOrder().filter((c) => [...c].length === [...text].length && UI.romaji(c) !== answer)
        : [...NH.WORDS, ...NH.PHRASES].filter((w) => w.meaning !== answer);
      const looks = isKana ? (UI.info(text).lookalikes || []).filter((c) => UI.romaji(c) !== answer) : [];
      const wrong = [...new Set([...shuffle(looks), ...shuffle(pool)].map((x) => (isKana ? UI.romaji(x) : x.meaning)))].filter((x) => x !== answer).slice(0, 3);
      const options = shuffle([answer, ...wrong]);
      const shownAt = performance.now();
      const fb = h("p.feedback", { "aria-live": "polite" });
      panel.append(prompt(isKana ? "How do you read this?" : "What does this mean?", null, null, null), fb);
      const opts = h("div.qopts", { class: "latin" }, options.map((o) => h("button.qopt", { type: "button", onclick: (e) => choose(o, e.currentTarget) }, o)));
      cellWrap.append(h("div.task-card", h("div.qprompt", { class: isKana ? "" : "word" }, text), opts));
      function choose(o, el) {
        if (opts.dataset.answered) return;
        opts.dataset.answered = "1";
        const ok = o === answer;
        opts.querySelectorAll("button").forEach((b) => { b.disabled = true; if (b.textContent === answer) b.classList.add("right"); else if (b === el) b.classList.add("wrong"); });
        ok ? NH.Audio.accept(style, 3, 5) : NH.Audio.reject(style);
        fb.className = ok ? "feedback ok" : "feedback no";
        fb.textContent = ok ? `Yes: ${text} is ${answer}.` : `${text} is ${answer}.`;
        UI.announce(fb.textContent);
        UI.say(text, { quiet: true });
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
        h("div.result-actions", UI.btn("Back to Today", () => UI.go("today"), "primary", "next"))));
      NH.Audio.complete(style, 100);
    }

    next();
  }

  function itemOf(id) {
    const key = id.slice(2);
    if (id[0] === "w") return NH.WORDS.find((w) => w.id === key);
    if (id[0] === "p") return NH.PHRASES.find((w) => w.id === key);
    if (id[0] === "r") return (NH.READING || []).find((r) => r.id === key);
    return null;
  }

  NH.Today = { todayTasks, dictationTasks, reviewType, itemOf, runSession };
})();
