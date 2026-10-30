import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { load, ALL_DATA } from "../helpers/load.mjs";

const NH = load([...ALL_DATA, "read.js", "speak.js"]);
const PUNCT = new Set([" ", "。", "、"]);
const YOON = /[ゃゅょぁぃぅぇぉっ]/;
const VOICED = /[がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ]/;

describe("reading data", () => {
  test("ids are unique and URL-safe; every item has a reading and meaning", () => {
    const ids = NH.READING.map((r) => r.id);
    assert.equal(new Set(ids).size, ids.length);
    for (const r of NH.READING) {
      assert.match(r.id, /^[a-z0-9-]+$/, r.id);
      assert.ok(r.romaji && r.meaning, r.id);
      assert.ok(["station", "sign", "menu", "sentence"].includes(r.kind), r.id);
      assert.ok(["station", "noren", "road", "notice", "warning", "tag", "shop", "label", "book"].includes(r.look), `${r.id} look ${r.look}`);
    }
  });

  test("kana is hiragana only and every character is writable", () => {
    for (const r of NH.READING) {
      for (const c of r.kana) assert.ok(PUNCT.has(c) || NH.STROKES[c], `${r.id}: ${c}`);
    }
  });

  test("levels match the kana used", () => {
    for (const r of NH.READING) {
      const expect = YOON.test(r.kana) ? 3 : VOICED.test(r.kana) ? 2 : 1;
      assert.equal(r.level, expect, r.id);
    }
  });

  test("meanings are distinct, so a multiple-choice answer is never ambiguous", () => {
    const m = NH.READING.map((r) => r.meaning);
    assert.equal(new Set(m).size, m.length);
  });

  test("station boards show their neighbours in hiragana", () => {
    for (const r of NH.READING.filter((x) => x.look === "station")) {
      for (const n of [r.prev, r.next].filter(Boolean)) for (const c of n) assert.ok(NH.STROKES[c], `${r.id} neighbour ${n}`);
    }
  });
});

describe("tap-a-kana units", () => {
  test("small ya/yu/yo join the kana before them; small tsu stands alone", () => {
    assert.deepEqual(JSON.parse(JSON.stringify(NH.Read.units("しんじゅく"))), [["し", "ん", "じゅ", "く"]]);
    assert.deepEqual(JSON.parse(JSON.stringify(NH.Read.units("いらっしゃいませ"))), [["い", "ら", "っ", "しゃ", "い", "ま", "せ"]]);
  });
  test("spaces split words and punctuation is kept", () => {
    assert.deepEqual(JSON.parse(JSON.stringify(NH.Read.units("えきは どこですか。"))), [["え", "き", "は"], ["ど", "こ", "で", "す", "か", "。"]]);
  });
});

describe("pronunciation matching", () => {
  const { match, normalize, sounds } = NH.Speak;

  test("normalises katakana, spaces and punctuation", () => {
    assert.equal(normalize("ネコ が、います。"), "ねこがいます");
    assert.equal(normalize("ラーメン!"), "らめん");
  });

  test("particles are matched the way they sound", () => {
    assert.equal(sounds("えきは どこですか"), "えきわどこですか");
    assert.equal(sounds("これを ください"), "これおください");
    assert.ok(match("こんにちは", ["こんにちわ"]).ok);
    assert.ok(match("こんにちは", ["こんにちは"]).ok);
  });

  test("accepts the word in kanji", () => {
    assert.ok(match("やま", ["山"], "山").ok);
    assert.ok(match("しぶや", ["渋谷"], "渋谷").ok);
  });

  test("accepts sentences the recogniser wrote with kanji, when the kana around them line up", () => {
    assert.ok(match("えきは どこですか。", ["駅はどこですか"]).ok);
    assert.ok(match("わたしは にほんに すんで います。", ["私は日本に住んでいます"]).ok);
    assert.ok(!match("えきは どこですか。", ["駅はどれですか"]).ok);
  });

  test("any alternative counts", () => {
    assert.ok(match("さくら", ["桜色", "サクラ"]).ok);
  });

  test("near misses are close; other words are not", () => {
    const near = match("ありがとう", ["ありがと"]);
    assert.ok(!near.ok && near.close);
    assert.equal(near.heard, "ありがと");
    const far = match("ありがとう", ["さようなら"]);
    assert.ok(!far.ok && !far.close);
    assert.deepEqual({ ...match("ありがとう", []) }, { ok: false, close: false, heard: null });
  });

  test("a mostly-kanji answer to a long kana target is not waved through", () => {
    assert.ok(!match("おみずを ください。", ["御水下"]).ok);
  });

  test("is off where there's no recogniser", () => {
    assert.equal(NH.Speak.supported, false);
    assert.equal(NH.Speak.button({ kana: "やま" }), null);
  });
});

describe("reading in the daily queue", () => {
  test("a sign opens up once all its kana are learned", () => {
    const N = load(ALL_DATA);
    assert.equal(N.SRS.ready("r:yu"), false);
    N.SRS.review("k:ゆ", N.SRS.GOOD);
    assert.equal(N.SRS.ready("r:yu"), true);
    assert.equal(N.SRS.itemText("r:eki-wa-doko"), "えきはどこですか。");
  });
});
