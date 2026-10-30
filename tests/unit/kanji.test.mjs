import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { load, ALL_DATA } from "../helpers/load.mjs";

const NH = load(ALL_DATA);
const T0 = new Date(2026, 9, 1, 9).getTime();
const { GOOD } = NH.SRS;
const set = new Set(NH.KANJI.map((x) => x.k));

describe("kanji data", () => {
  test("80 kanji, each with stroke data matching its stroke count", () => {
    assert.equal(NH.KANJI.length, 80);
    assert.equal(set.size, 80);
    for (const x of NH.KANJI) assert.equal(NH.STROKES[x.k]?.length, x.strokes, x.k);
  });

  test("readings: on'yomi in katakana, kun'yomi in hiragana", () => {
    for (const x of NH.KANJI) {
      assert.ok(x.on.length + x.kun.length > 0, x.k);
      for (const r of x.on) assert.match(r, /^[ァ-ヶー]+$/, `${x.k} on ${r}`);
      for (const r of x.kun) assert.match(r, /^[ぁ-ゔ]+(\.[ぁ-ゔ]+)?$/, `${x.k} kun ${r}`);
    }
  });

  test("parts cover real strokes, don't overlap, and all have names", () => {
    for (const [ch, parts] of Object.entries(NH.PARTS)) {
      const seen = new Set();
      for (const p of parts) {
        assert.ok(NH.COMPONENT_NAMES[p.el], `${ch}: no name for ${p.el}`);
        for (const i of p.strokes) {
          assert.ok(i >= 0 && i < NH.STROKES[ch].length, `${ch} stroke ${i}`);
          assert.ok(!seen.has(i), `${ch} stroke ${i} in two parts`);
          seen.add(i);
        }
      }
    }
    assert.deepEqual(JSON.parse(JSON.stringify(NH.PARTS["休"].map((p) => p.el))), ["亻", "木"]);
  });

  test("examples and kanji words only use kanji taught here, and are writable", () => {
    const writable = (s) => [...s].every((c) => NH.STROKES[c]);
    for (const x of NH.KANJI) for (const e of x.examples) {
      assert.ok(e.w.includes(x.k) && writable(e.w), `${x.k}: ${e.w}`);
      assert.match(e.r, /^[ぁ-ゔァ-ヶー]+$/, `${x.k}: ${e.r}`);
    }
    const ids = new Set();
    for (const w of NH.KANJI_WORDS) {
      assert.ok(!ids.has(w.id) && /^kw-[a-z0-9-]+$/.test(w.id), w.id);
      ids.add(w.id);
      assert.ok(writable(w.text) && [...w.text].some((c) => set.has(c)), w.text);
      for (const s of w.scene) assert.ok(NH.SCENE_ART[s], `${w.id} scene ${s}`);
    }
    for (const lv of [1, 2, 3]) assert.ok(NH.KANJI_WORDS.filter((w) => w.level === lv).length >= 10, `level ${lv}`);
  });

  test("lookalikes are other kanji in the set", () => {
    for (const x of NH.KANJI) for (const l of x.lookalikes) assert.ok(set.has(l) && l !== x.k, `${x.k}: ${l}`);
  });

  test("a word with any kanji belongs to the kanji line", () => {
    assert.equal(NH.scriptOf("日本").id, "kanji");
    assert.equal(NH.scriptOf("食べる").id, "kanji");
    assert.equal(NH.scriptOf("たべる").id, "hiragana");
  });
});

describe("kanji in the queue", () => {
  const fresh = () => load(ALL_DATA);
  const startHiragana = (N) => { for (const c of N.SRS.kanaOrder("hiragana").slice(0, 46)) N.store.srs().cards["k:" + c] = { s: 5, d: 5, reps: 1, last: T0, due: T0 + 9 * NH.SRS.DAY }; };
  const newKanji = (N, now = T0) => [...N.SRS.today(now).fresh].filter((id) => id.startsWith("j:"));

  test("kanji wait until all 46 basic hiragana are started, then come two a day", () => {
    const N = fresh();
    assert.deepEqual(newKanji(N), []);
    startHiragana(N);
    assert.deepEqual(newKanji(N), ["j:一", "j:二"]);
    for (const id of newKanji(N)) N.SRS.review(id, GOOD, T0);
    assert.deepEqual(newKanji(N, T0 + 3600e3), [], "today's two are done");
    assert.deepEqual(newKanji(N, T0 + NH.SRS.DAY), ["j:三", "j:四"]);
  });

  test("the daily kanji limit can be changed or turned off", () => {
    const N = fresh();
    startHiragana(N);
    N.store.set("dailyKanji", 5);
    assert.equal(newKanji(N).length, 5);
    N.store.set("dailyKanji", 0);
    assert.equal(newKanji(N).length, 0);
  });

  test("a kanji word needs its kanji and its kana", () => {
    const N = fresh();
    const w = N.KANJI_WORDS.find((x) => /[ぁ-ゔ]/.test(x.text) && [...x.text].some((c) => set.has(c)));
    assert.equal(N.SRS.ready("v:" + w.id), false);
    for (const c of w.text) N.SRS.review((set.has(c) ? "j:" : "k:") + c, GOOD, T0);
    assert.equal(N.SRS.ready("v:" + w.id), true, w.text);
    assert.equal(N.SRS.itemText("v:" + w.id), w.text);
  });
});
