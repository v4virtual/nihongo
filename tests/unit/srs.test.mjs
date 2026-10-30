import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { load, ALL_DATA } from "../helpers/load.mjs";

const fresh = () => load(ALL_DATA);
const { DAY, AGAIN, HARD, GOOD, EASY } = fresh().SRS;
const T0 = new Date(2026, 9, 1, 9).getTime();

describe("FSRS scheduling", () => {
  const NH = fresh();
  const { schedule, interval, retrievability } = NH.SRS;

  test("the interval equals stability at 90% recall", () => {
    for (const s of [1, 3.7, 20, 100]) assert.ok(Math.abs(interval(s) - s) < 1e-9);
    assert.ok(Math.abs(retrievability(10, 10) - 0.9) < 1e-9);
  });

  test("first reviews: better answers wait longer", () => {
    const days = [AGAIN, HARD, GOOD, EASY].map((g) => (schedule({}, g, T0).due - T0) / DAY);
    assert.ok(days[0] < 0.01, "Again comes back within minutes");
    assert.ok(days[1] < days[2] && days[2] < days[3], JSON.stringify(days));
    assert.equal(Math.round(days[2]), 4); // FSRS-4.5 default S0(Good) ≈ 3.7 days
  });

  test("repeated Good reviews on time stretch the interval out", () => {
    let c = schedule({}, GOOD, T0), now = T0;
    const gaps = [];
    for (let i = 0; i < 5; i++) { now = c.due; const next = schedule(c, GOOD, now); gaps.push(Math.round((next.due - now) / DAY)); c = next; }
    for (let i = 1; i < gaps.length; i++) assert.ok(gaps[i] > gaps[i - 1], JSON.stringify(gaps));
    assert.ok(gaps[gaps.length - 1] > 60, `after 6 good reviews the gap is ${gaps.at(-1)} days`);
  });

  test("forgetting shrinks stability and counts a lapse", () => {
    let c = schedule(schedule({}, GOOD, T0), GOOD, T0 + 4 * DAY);
    const before = c.s;
    c = schedule(c, AGAIN, c.due);
    assert.ok(c.s < before);
    assert.equal(c.lapses, 1);
    assert.ok(c.due - c.last <= 10 * 60 * 1000);
  });

  test("difficulty stays within 1–10 and rises after Again", () => {
    let c = schedule({}, GOOD, T0);
    const d0 = c.d;
    for (let i = 0; i < 20; i++) c = schedule(c, AGAIN, c.due);
    assert.ok(c.d > d0 && c.d <= 10);
    for (let i = 0; i < 40; i++) c = schedule(c, EASY, c.due);
    assert.ok(c.d >= 1);
  });
});

describe("grades from activities", () => {
  const { gradeWriting, gradeChoice } = fresh().SRS;
  test("tracing can't count as remembering", () => {
    assert.equal(gradeWriting({ score: 100, assist: "trace" }), HARD);
    assert.equal(gradeWriting({ score: 100, assist: "guide" }), GOOD);
    assert.equal(gradeWriting({ score: 100, assist: "memory" }), EASY);
  });
  test("scores and retries map to grades", () => {
    assert.equal(gradeWriting({ score: 50 }), AGAIN);
    assert.equal(gradeWriting({ score: 70 }), HARD);
    assert.equal(gradeWriting({ score: 85 }), GOOD);
    assert.equal(gradeWriting({ score: 95, misses: 1 }), GOOD);
    assert.equal(gradeWriting({ score: 95, misses: 3 }), HARD);
  });
  test("multiple choice: wrong is Again, fast and right is Easy", () => {
    assert.equal(gradeChoice(false), AGAIN);
    assert.equal(gradeChoice(true, 1200), EASY);
    assert.equal(gradeChoice(true, 6000), GOOD);
  });
});

describe("the daily queue", () => {
  test("a new learner starts with the first five kana, in chart order", () => {
    const NH = fresh();
    const { due, fresh: fresh5 } = NH.SRS.today(T0);
    assert.equal(due.length, 0);
    assert.deepEqual([...fresh5], ["k:あ", "k:い", "k:う", "k:え", "k:お"]);
  });

  test("new items respect the daily limit and the next day brings more", () => {
    const NH = fresh();
    for (const id of NH.SRS.today(T0).fresh) NH.SRS.review(id, GOOD, T0);
    assert.equal(NH.SRS.today(T0 + 3600e3).fresh.filter((id) => id.startsWith("k:")).length, 0);
    const tomorrow = NH.SRS.today(T0 + DAY);
    assert.deepEqual([...tomorrow.fresh.filter((id) => id.startsWith("k:"))], ["k:か", "k:き", "k:く", "k:け", "k:こ"]);
  });

  test("due cards come back, most-forgotten first", () => {
    const NH = fresh();
    NH.SRS.review("k:あ", GOOD, T0);
    NH.SRS.review("k:い", HARD, T0);
    const later = NH.SRS.today(T0 + 10 * DAY).due;
    assert.deepEqual([...later], ["k:い", "k:あ"]);
  });

  test("voiced kana and combos wait for their parts; words wait for their kana", () => {
    const NH = fresh();
    const { ready } = NH.SRS;
    assert.equal(ready("k:が"), false);
    NH.SRS.review("k:か", GOOD, T0);
    assert.equal(ready("k:が"), true);
    assert.equal(ready("k:きゃ"), false);
    NH.SRS.review("k:き", GOOD, T0);
    NH.SRS.review("k:や", GOOD, T0);
    assert.equal(ready("k:きゃ"), true);
    const umi = NH.WORDS.find((w) => w.kana === "うみ");
    assert.equal(ready("w:" + umi.id), false);
    NH.SRS.review("k:う", GOOD, T0);
    NH.SRS.review("k:み", GOOD, T0);
    assert.equal(ready("w:" + umi.id), true);
  });

  test("practice outside the queue only updates cards already started", () => {
    const NH = fresh();
    assert.equal(NH.SRS.practice("k:あ", GOOD, T0), null);
    NH.SRS.review("k:あ", HARD, T0);
    assert.ok(NH.SRS.practice("k:あ", GOOD, T0 + DAY));
  });

  test("strength labels for the progress view", () => {
    const NH = fresh();
    assert.equal(NH.SRS.strength("k:あ", T0), "new");
    NH.SRS.review("k:あ", GOOD, T0);
    assert.equal(NH.SRS.strength("k:あ", T0 + 1000), "learning");
    assert.equal(NH.SRS.strength("k:あ", T0 + 30 * DAY), "due");
    let c = NH.SRS.card("k:あ");
    for (let i = 0; i < 3; i++) c = NH.SRS.review("k:あ", EASY, c.due);
    assert.equal(NH.SRS.strength("k:あ", c.last + 1000), "strong");
  });

  test("the deck is saved with the rest of the progress", () => {
    const NH = fresh();
    NH.SRS.review("k:あ", GOOD, T0);
    const NH2 = load(ALL_DATA);
    assert.equal(NH2.store.srs().cards["k:あ"], undefined, "a fresh sandbox starts empty");
    assert.ok(NH.store.srs().cards["k:あ"].s > 0);
  });
});
