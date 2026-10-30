import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { load, ALL_DATA } from "../helpers/load.mjs";

const NH = load(ALL_DATA);
const HIRAGANA = /^[ぁ-ゔ]+$/;
const KATAKANA = /^[ァ-ヶー]+$/;
const KANA = /^[ぁ-ゔァ-ヶー]$/;
const cellsOf = (T) => T.rows.flatMap((r) => r.cells).filter(Boolean);
const tableCells = (key, S = NH.SCRIPTS.hiragana) => (S.tables[key] ? cellsOf(S.tables[key]) : []);
const K = NH.SCRIPTS.katakana;

describe("kana tables", () => {
  test("chart sizes", () => {
    assert.equal(tableCells("basic").length, 46);
    assert.equal(tableCells("voiced").length, 25);
    assert.equal(tableCells("combos").length, 33);
  });

  test("every chart cell has stroke data and a reading", () => {
    for (const key of ["basic", "voiced", "combos"]) {
      for (const cell of tableCells(key)) {
        for (const c of cell) assert.ok(NH.STROKES[c]?.length, `${c} has no strokes`);
        const r = NH.romajiOf(cell);
        assert.ok(r && r !== cell && /^[a-z]/.test(r), `${cell} has no romaji (${r})`);
      }
    }
  });

  test("study order covers every chart cell once", () => {
    const all = [...tableCells("basic"), ...tableCells("voiced"), ...tableCells("combos"), ...NH.TABLES.combos.extras];
    assert.equal(NH.ORDER.length, all.length);
    assert.equal(new Set(NH.ORDER).size, NH.ORDER.length);
  });

  test("katakana mirrors the hiragana chart and adds loanword sounds", () => {
    for (const key of ["basic", "voiced", "combos"]) assert.deepEqual(tableCells(key, K), tableCells(key).map(NH.toKata), key);
    for (const cell of [...tableCells("extended", K), ...K.tables.combos.extras]) {
      for (const c of cell) assert.ok(NH.STROKES[c]?.length, `${c} has no strokes`);
      assert.match(NH.romajiOf(cell), /^[a-z]/, cell);
    }
    assert.equal(new Set(K.order).size, K.order.length);
    assert.equal(NH.scriptOf("ラーメン"), K);
    assert.equal(NH.scriptOf("らーめん"), K, "ー counts as katakana");
    assert.equal(NH.scriptOf("すし"), NH.SCRIPTS.hiragana);
  });

  test("well-known irregular readings", () => {
    const want = { し: "shi", ち: "chi", つ: "tsu", ふ: "fu", ん: "n", じ: "ji", きゃ: "kya", しょ: "sho", ちゅ: "chu", じゃ: "ja",
      シ: "shi", ツ: "tsu", フ: "fu", ン: "n", ジャ: "ja", ファ: "fa", ティ: "ti", ヴ: "vu", ウィ: "wi" };
    for (const [k, v] of Object.entries(want)) assert.equal(NH.romajiOf(k), v, k);
  });
});

describe("kana info", () => {
  const info = NH.KANA_INFO;

  test("covers every character with stroke data", () => {
    assert.deepEqual([...Object.keys(info)].sort(), [...Object.keys(NH.STROKES)].sort());
  });

  test("basic kana have an origin kanji and a mnemonic", () => {
    for (const c of [...tableCells("basic"), ...tableCells("basic", K)]) {
      // Only ン's source is unknown; its notes say so.
      if (c !== "ン") assert.ok(info[c].origin, `${c} origin`);
      assert.ok(info[c].mnemonic, `${c} mnemonic`);
    }
  });

  test("voiced kana point at their base and mark", () => {
    for (const c of [...tableCells("voiced"), ...tableCells("voiced", K), "ヴ"]) {
      assert.ok(info[c].base && NH.STROKES[info[c].base], `${c} base`);
      assert.ok(["dakuten", "handakuten"].includes(info[c].mark), `${c} mark`);
      assert.equal(NH.STROKES[c].length, NH.STROKES[info[c].base].length + (info[c].mark === "dakuten" ? 2 : 1), `${c} stroke count`);
    }
  });

  test("lookalikes are kana; examples are written in the kana's own script", () => {
    for (const [c, i] of Object.entries(info)) {
      for (const l of i.lookalikes || []) assert.ok(info[l] && KANA.test(l), `${c} lookalike ${l} unknown`);
      for (const e of i.examples || []) {
        assert.match(e.w, NH.scriptOf(c) === K ? KATAKANA : HIRAGANA, `${c} example ${e.w}`);
        assert.ok(e.r && e.m, `${c} example ${e.w} needs romaji and meaning`);
      }
    }
  });

  test("text stays short enough for the cards", () => {
    for (const [c, i] of Object.entries(info)) {
      if (i.mnemonic) assert.ok(i.mnemonic.length <= 160, `${c} mnemonic too long`);
      for (const n of i.notes || []) assert.ok(n.length <= 180, `${c} note too long`);
    }
  });
});

describe("words and phrases", () => {
  const all = [...NH.WORDS, ...NH.PHRASES];

  test("there are enough to practise at each level", () => {
    const kata = NH.WORDS.filter((w) => NH.scriptOf(w.kana) === K);
    for (const lv of [1, 2, 3]) assert.ok(kata.filter((w) => w.level === lv).length >= 8, `katakana level ${lv}`);
    for (const list of [NH.WORDS, NH.PHRASES]) {
      for (const lv of [1, 2, 3]) assert.ok(list.filter((w) => w.level === lv).length >= 8, `level ${lv}`);
    }
  });

  test("ids are unique and URL-safe", () => {
    assert.equal(new Set(all.map((w) => w.id)).size, all.length);
    for (const w of all) assert.match(w.id, /^[a-z0-9-]+$/);
  });

  test("kana is all hiragana or all katakana and every character is writable", () => {
    for (const w of all) {
      assert.match(w.kana, NH.scriptOf(w.kana) === K ? KATAKANA : HIRAGANA, w.id);
      for (const c of w.kana) assert.ok(NH.STROKES[c], `${w.id}: no strokes for ${c}`);
      assert.ok(w.romaji && w.meaning, `${w.id} needs romaji and meaning`);
    }
  });

  test("level 1 words use only basic kana", () => {
    const basic = new Set([...tableCells("basic"), ...tableCells("basic", K)]);
    for (const w of NH.WORDS.filter((x) => x.level === 1)) {
      for (const c of w.kana) assert.ok(basic.has(c), `${w.id} uses ${c}`);
    }
  });

  test("every scene has art and every art piece is used", () => {
    const used = new Set();
    for (const w of all) {
      assert.ok(w.scene?.length >= 1 && w.scene.length <= 2, `${w.id} scene count`);
      for (const s of w.scene) { assert.ok(NH.SCENE_ART[s], `${w.id}: no art for ${s}`); used.add(s); }
    }
    const decorative = new Set(["seigaiha", "petal", "ginkgo"]);
    for (const id of Object.keys(NH.SCENE_ART)) if (!decorative.has(id)) assert.ok(used.has(id), `${id} unused`);
  });
});

describe("scene art", () => {
  test("uses only themeable classes and no inline styling", () => {
    for (const [id, a] of Object.entries(NH.SCENE_ART)) {
      assert.match(a.vb, /^0 0 \d+(\.\d+)? \d+(\.\d+)?$/, `${id} viewBox`);
      assert.doesNotMatch(a.svg, /\s(style|fill|stroke|id)=/, `${id} has inline styling`);
      for (const m of a.svg.matchAll(/class="([^"]+)"/g)) {
        for (const c of m[1].split(/\s+/)) assert.ok(["ln", "fl", "ac"].includes(c), `${id} class ${c}`);
      }
    }
  });
});

describe("settings storage", () => {
  test("records best and last writing scores and quiz tallies", () => {
    const N = load(["util.js"]);
    N.store.recordWrite("あ", 70);
    N.store.recordWrite("あ", 90);
    N.store.recordWrite("あ", 80);
    N.store.recordQuiz("あ", true);
    N.store.recordQuiz("あ", false);
    const p = N.store.progress("あ");
    assert.deepEqual({ best: p.best, last: p.last, tries: p.tries, right: p.right, wrong: p.wrong }, { best: 90, last: 80, tries: 3, right: 1, wrong: 1 });
    N.store.reset();
    assert.equal(N.store.progress("あ"), null);
  });

  test("hex route ids round-trip, including combos", () => {
    const N = load(["util.js"]);
    for (const s of ["あ", "きゃ", "ゔ"]) assert.equal(N.unhex(N.hex(s)), s);
    assert.match(N.hex("きゃ"), /^[0-9a-f-]+$/);
  });
});
