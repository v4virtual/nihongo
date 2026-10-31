import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { load, ALL_DATA } from "../helpers/load.mjs";

const NH = load([...ALL_DATA, "tts.js", "lesson.js"]);
// app.js normally supplies these two.
NH.UI.info = (c) => NH.KANA_INFO[c] || {};
NH.UI.romaji = (c) => NH.romajiOf(c);
const captions = (ch) => NH.Lesson.steps(ch).map((s) => s.caption);
const spoken = (ch) => NH.Lesson.steps(ch).map((s) => [...s.say]);

describe("lesson scripts", () => {
  test("a kana: what it is, where it came from, a hook, every stroke, an example", () => {
    const c = captions("あ");
    assert.equal(c[0], "This is the hiragana あ, read “a”.");
    assert.match(c[1], /grew from the kanji 安/);
    assert.match(c[2], /sword/);
    assert.equal(c[3], "3 strokes. Watch the order.");
    assert.deepEqual([...c.slice(4, 7).map((x) => x.slice(0, 9))], ["Stroke 1 ", "Stroke 2 ", "Stroke 3 "]);
    assert.match(c[7], /^As in あめ/);
    assert.equal(c.at(-1), "Now try writing it yourself.");
  });

  test("Japanese is spoken in a Japanese voice, the rest in English", () => {
    const first = JSON.parse(JSON.stringify(spoken("あ")[0]));
    assert.deepEqual(first, [{ text: "This is the hiragana", lang: "en" }, { text: "あ", lang: "ja" }, { text: ".", lang: "en" }]);
    const split = JSON.parse(JSON.stringify(NH.TTS.segments("A person 亻 resting against a tree 木.")));
    assert.deepEqual(split.map((x) => x.lang), ["en", "ja", "en", "ja"]);
    assert.ok(!split.some((x) => x.text === "."), "bare punctuation isn't spoken");
  });

  test("voiced kana explain the mark and announce its strokes", () => {
    const c = captions("が");
    assert.match(c[1], /^It's か with two small ticks, ten-ten/);
    assert.ok(c.some((x) => x.startsWith("Now the ten-ten. Stroke 4")));
    assert.ok(captions("ぱ").some((x) => x.startsWith("Now the maru.")));
  });

  test("combos are one sound, and the small kana's strokes are introduced", () => {
    const c = captions("きゃ");
    assert.match(c[0], /き with a small ゃ, said as one sound/);
    assert.ok(c.some((x) => x.startsWith("Then the small ゃ. Stroke 1")));
  });

  test("katakana say which piece of kanji they were cut from", () => {
    assert.match(captions("ア")[1], /cut from part of the kanji 阿.*阝/);
  });

  test("kanji: meaning, readings, parts, and strokes grouped by part", () => {
    const c = captions("休");
    assert.equal(c[0], "This kanji means “rest”.");
    assert.match(c[1], /On reading: キュウ\. Kun reading: やすむ\./);
    assert.equal(c[2], "It's made of 亻 (person) and 木 (tree).");
    assert.ok(c.includes("Now 亻, person. Stroke 1 starts at the top left, a line going down-left."));
    assert.ok(c.some((x) => x.startsWith("Now 木, tree. Stroke 3")));
    // Example words are spoken from their kana reading, so the voice can't misread the kanji.
    const ex = JSON.parse(JSON.stringify(spoken("休").at(-2)));
    assert.deepEqual(ex[1], { text: "やすみ", lang: "ja" });
  });

  test("every character with stroke data gets a lesson that walks through all its strokes", () => {
    for (const ch of [...NH.SCRIPTS.hiragana.order, ...NH.SCRIPTS.katakana.order, ...NH.KANJI.map((k) => k.k)]) {
      const st = NH.Lesson.steps(ch);
      const n = [...ch].reduce((a, c) => a + NH.STROKES[c].length, 0);
      assert.equal(st.filter((s) => s.scene.kind === "strokes" && s.scene.cur >= 0).length, n, ch);
      for (const s of st) assert.ok(s.caption && s.say.length, `${ch}: empty step`);
    }
  });

  test("writing narration: the lesson's opening, then the first stroke", () => {
    const full = JSON.parse(JSON.stringify(NH.Lesson.writeIntro("あ", { full: true })));
    assert.equal(full[1].text, "あ");
    assert.match(full.at(-1).text, /^Stroke 1 starts/);
    assert.ok(full.some((x) => /cursive/.test(x.text)));
    const short = JSON.parse(JSON.stringify(NH.Lesson.writeIntro("い")));
    assert.deepEqual(short[0], { text: "い", lang: "ja" });
    assert.match(short[1].text, /^2 strokes\. Stroke 1/);
  });
});
