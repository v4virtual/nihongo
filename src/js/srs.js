/* Spaced repetition with FSRS-4.5 (the open-source scheduler behind Anki's
 * FSRS option), using its published default parameters. Each item to learn is
 * a card; every review grades it Again / Hard / Good / Easy, and the scheduler
 * picks the next review for 90% recall. No streaks, no points: the only output
 * is "what's due today".
 *
 * Card ids: "k:か" (a kana or combo), "w:mizu" (word), "p:ohayou" (phrase),
 * "r:<id>" (reading item). Times are in days (ms / DAY). */
window.NH = window.NH || {};

(function () {
  const DAY = 86400000;
  const W = [0.4872, 1.4003, 3.7145, 13.8206, 5.1618, 1.2298, 0.8975, 0.031, 1.6474, 0.1367, 1.0461, 2.1072, 0.0793, 0.3246, 1.587, 0.2272, 2.8755];
  const DECAY = -0.5, FACTOR = 19 / 81, RETENTION = 0.9;
  const AGAIN = 1, HARD = 2, GOOD = 3, EASY = 4;
  const RELEARN_MS = 10 * 60 * 1000; // a forgotten card comes back after 10 minutes

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const retrievability = (elapsedDays, s) => Math.pow(1 + (FACTOR * elapsedDays) / s, DECAY);
  const interval = (s) => (s / FACTOR) * (Math.pow(RETENTION, 1 / DECAY) - 1); // = s at 90%
  const initStability = (g) => W[g - 1];
  const initDifficulty = (g) => clamp(W[4] - (g - 3) * W[5], 1, 10);
  const nextDifficulty = (d, g) => clamp(W[7] * initDifficulty(GOOD) + (1 - W[7]) * (d - W[6] * (g - 3)), 1, 10);
  function recallStability(d, s, r, g) {
    const hard = g === HARD ? W[15] : 1, easy = g === EASY ? W[16] : 1;
    return s * (Math.exp(W[8]) * (11 - d) * Math.pow(s, -W[9]) * (Math.exp(W[10] * (1 - r)) - 1) * hard * easy + 1);
  }
  const forgetStability = (d, s, r) => Math.min(s, W[11] * Math.pow(d, -W[12]) * (Math.pow(s + 1, W[13]) - 1) * Math.exp(W[14] * (1 - r)));

  /* Pure scheduling step: returns the updated card. A card is
   * { s, d, last, due, reps, lapses } with times in ms. */
  function schedule(card, grade, now) {
    const c = { ...card };
    if (!c.reps) {
      c.s = initStability(grade);
      c.d = initDifficulty(grade);
    } else {
      const r = retrievability(Math.max(0, now - c.last) / DAY, c.s);
      c.d = nextDifficulty(c.d, grade);
      c.s = grade === AGAIN ? forgetStability(c.d, c.s, r) : recallStability(c.d, c.s, r, grade);
    }
    if (grade === AGAIN) c.lapses = (c.lapses || 0) + 1;
    c.reps = (c.reps || 0) + 1;
    c.last = now;
    c.due = grade === AGAIN ? now + RELEARN_MS : now + Math.max(1, Math.round(interval(c.s))) * DAY;
    return c;
  }

  // ── grades from what the learner did ─────────────────────
  /* Writing: help level caps the grade, because tracing the model isn't
   * recalling it. Trace ≤ Hard, Guide ≤ Good, Memory can reach Easy. */
  function gradeWriting({ score, misses = 0, assist = "memory" }) {
    let g = score < 60 ? AGAIN : score < 75 ? HARD : score < 90 || misses > 0 ? GOOD : EASY;
    if (misses >= 3) g = Math.min(g, HARD);
    const cap = { trace: HARD, guide: GOOD, memory: EASY }[assist] ?? GOOD;
    return Math.min(g, cap);
  }
  // Choosing an answer: wrong is Again; a quick right answer is Easy.
  const gradeChoice = (ok, ms = 4000) => (!ok ? AGAIN : ms < 2500 ? EASY : GOOD);

  // ── the deck ─────────────────────────────────────────────
  const dayKey = (t) => { const d = new Date(t); return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; };

  /* Kana in the order they are taught: the chart, then voiced, then combos.
   * Katakana teaches ー right after the chart (loanwords need it early) and
   * ends with the loanword sounds. */
  function kanaOrder(script = "hiragana") {
    const S = NH.SCRIPTS[script];
    const out = [];
    for (const key of S.sections) {
      for (const row of S.tables[key].rows) for (const c of row.cells) if (c) out.push(c);
      if (key === "basic" && script === "katakana") out.push("ー");
    }
    return out;
  }
  // New kana come from one script after the other, or from both in turn.
  function learnOrder() {
    const h = kanaOrder("hiragana"), k = kanaOrder("katakana");
    const mode = NH.store.settings.learn || "hiragana";
    if (mode === "katakana") return [...k, ...h];
    if (mode === "both") return h.flatMap((c, i) => [c, k[i]]).concat(k.slice(h.length)).filter(Boolean);
    return [...h, ...k];
  }

  function deck() { return NH.store.srs(); }
  const card = (id) => deck().cards[id] || null;
  const isLearned = (ch) => !!card("k:" + ch);

  // Can this item be introduced yet? Kana need their base kana; words and
  // reading items need every kana in them.
  function ready(id) {
    const [kind, key] = [id[0], id.slice(2)];
    if (kind === "k") {
      const chars = [...key];
      if (chars.length > 1) return chars.every((c) => isLearned(NH.SMALL.has(c) ? baseOfSmall(c) : c));
      const base = NH.KANA_INFO[key]?.base;
      return !base || isLearned(base);
    }
    const text = itemText(id);
    return !!text && [...text].every((c) => isLearned(NH.SMALL.has(c) ? baseOfSmall(c) : c) || !NH.KANA_RE.test(c));
  }
  const baseOfSmall = (c) => NH.KANA_INFO[c]?.base || c;

  function itemText(id) {
    const key = id.slice(2);
    if (id[0] === "w") return NH.WORDS.find((w) => w.id === key)?.kana;
    if (id[0] === "p") return NH.PHRASES.find((w) => w.id === key)?.kana;
    if (id[0] === "r") return (NH.READING || []).find((r) => r.id === key)?.kana.replace(/\s/g, "");
    return key;
  }

  /* Today's work: due cards (most forgotten first), then new items up to the
   * daily limit. Kana come first; words, phrases and signs open up as their
   * kana are learned. */
  function today(now = Date.now()) {
    const dk = deck();
    const due = Object.entries(dk.cards).filter(([, c]) => c.due <= now)
      .sort((a, b) => retrievability((now - a[1].last) / DAY, a[1].s) - retrievability((now - b[1].last) / DAY, b[1].s))
      .map(([id]) => id);
    const day = dk.day && dk.day.key === dayKey(now) ? dk.day : { key: dayKey(now), kana: 0, other: 0 };
    const limit = NH.store.settings.dailyNew ?? 5;
    const fresh = [];
    let kanaLeft = Math.max(0, limit - day.kana);
    // Hold new kana back while a big review pile is waiting.
    if (due.length > 30) kanaLeft = 0;
    for (const ch of learnOrder()) {
      if (fresh.length >= kanaLeft) break;
      const id = "k:" + ch;
      // Combos and voiced kana wait until their parts have been reviewed once.
      if (!dk.cards[id] && ready(id)) fresh.push(id);
    }
    let otherLeft = Math.max(0, 2 - day.other);
    const others = [
      ...NH.WORDS.map((w) => "w:" + w.id),
      ...(NH.READING || []).map((r) => "r:" + r.id),
      ...NH.PHRASES.map((w) => "p:" + w.id),
    ].filter((id) => !dk.cards[id] && ready(id))
      .sort((a, b) => levelOf(a) - levelOf(b));
    for (const id of others) { if (otherLeft-- <= 0) break; fresh.push(id); }
    return { due, fresh };
  }
  function levelOf(id) {
    const key = id.slice(2);
    const item = id[0] === "w" ? NH.WORDS.find((w) => w.id === key) : id[0] === "p" ? NH.PHRASES.find((w) => w.id === key) : (NH.READING || []).find((r) => r.id === key);
    return item?.level || 2;
  }

  // Records a review (and introduces the card if new).
  function review(id, grade, now = Date.now()) {
    const dk = deck();
    const isNew = !dk.cards[id];
    dk.cards[id] = schedule(dk.cards[id] || {}, grade, now);
    if (isNew) {
      if (!dk.day || dk.day.key !== dayKey(now)) dk.day = { key: dayKey(now), kana: 0, other: 0 };
      id[0] === "k" ? dk.day.kana++ : dk.day.other++;
    }
    NH.store.saveSrs();
    return dk.cards[id];
  }

  // Practice outside the Today queue only updates cards already in the deck.
  function practice(id, grade, now = Date.now()) {
    if (!deck().cards[id]) return null;
    return review(id, grade, now);
  }

  /* How well an item is held right now, for the progress view:
   * "new" (not started), "learning" (seen, not yet stable), "due" (time to
   * review), or "strong" (stable for a week or more). */
  function strength(id, now = Date.now()) {
    const c = card(id);
    if (!c) return "new";
    if (c.due <= now) return "due";
    return c.s >= 7 ? "strong" : "learning";
  }

  NH.SRS = { DAY, AGAIN, HARD, GOOD, EASY, schedule, retrievability, interval, gradeWriting, gradeChoice, today, review, practice, strength, card, ready, itemText, kanaOrder, learnOrder, dayKey };
})();
