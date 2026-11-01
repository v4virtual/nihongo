import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { load, ALL_DATA, makeRng, humanize } from "../helpers/load.mjs";

const NH = load(ALL_DATA);
const T0 = new Date(2026, 9, 1, 9).getTime();
const { GOOD } = NH.SRS;
const set = new Set(NH.KANJI.map((x) => x.k));

describe("kanji data", () => {
  test("306 kanji in four sets, each with stroke data matching its stroke count", () => {
    assert.equal(NH.KANJI.length, 306);
    assert.equal(set.size, 306);
    const inPack = (p) => NH.KANJI.filter((x) => NH.Kanji.packOf(x) === p).length;
    assert.equal(inPack("n5"), 133, "the 80 of JLPT N5, plus 29 for nature and 24 for things");
    assert.equal(inPack("station"), 41);
    assert.equal(inPack("town"), 40);
    assert.equal(inPack("clinic"), 92);
    // The first 80 still come first, so Today's order for them is unchanged.
    assert.equal(NH.KANJI[79].k, "聞");
    assert.equal(NH.KANJI.filter((x) => x.group === "nature").length, 34);
    assert.equal(NH.KANJI.filter((x) => x.group === "things").length, 32);
    for (const x of NH.KANJI) {
      assert.equal(NH.STROKES[x.k]?.length, x.strokes, x.k);
      assert.ok(NH.Kanji.GROUPS.some((g) => g[0] === x.group), `${x.k}: group ${x.group}`);
    }
    // The pack covers the hospital sign it was built from.
    for (const c of "駐車場利用方会計時必券提示処理受出庫分料金請求注意京都府歯科医師当館移動下保護者願問診台倒危険性上子様乗遊等決") assert.ok(set.has(c), c);
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

describe("signs to read", () => {
  test("every sign word is writable, has a meaning, and its furigana fits", () => {
    const ids = new Set();
    for (const sg of NH.SIGNS) {
      assert.ok(!ids.has(sg.id) && /^[a-z0-9-]+$/.test(sg.id), sg.id);
      ids.add(sg.id);
      assert.equal(sg.en.length, sg.lines.length, `${sg.id}: one translation per line`);
      for (const line of sg.lines) for (const t of line.t) {
        if (typeof t === "string") { assert.ok(!/[㐀-鿿]/.test(t), `${sg.id}: kanji outside a word: ${t}`); continue; }
        const [text, reading, meaning] = t;
        assert.ok(meaning, `${sg.id}: ${text} has no meaning`);
        for (const c of text) if (/[㐀-鿿]/.test(c)) assert.ok(set.has(c), `${sg.id}: ${c} in ${text} isn't taught`);
        if (/[㐀-鿿]/.test(text)) {
          assert.match(reading, /^[ぁ-ゔ]+$/, `${sg.id}: ${text} needs a hiragana reading`);
          // Kana around the kanji must match the reading, so furigana sits on the kanji.
          const runs = text.match(/[㐀-鿿々]+|[^㐀-鿿々]+/g);
          if (!/[0-9]/.test(text)) assert.ok(new RegExp(`^${runs.map((r) => (/[㐀-鿿]/.test(r) ? "(.+?)" : r)).join("")}$`).test(reading), `${sg.id}: ${text} / ${reading}`);
        } else assert.equal(reading, "", `${sg.id}: ${text} is kana, no reading needed`);
      }
    }
  });

  test("signs are read aloud from their readings", () => {
    const sg = NH.SIGNS.find((x) => x.id === "parking-ticket");
    assert.ok(sg, "the car park sign from the user's photo");
    assert.equal(NH.Signs.lineSpeech(sg.lines[0]), "ちゅうしゃじょうをごりようのかたへ");
    assert.equal(NH.Signs.lineSpeech(NH.SIGNS.find((x) => x.id === "visiting-hours").lines[1]), "ごごさんじからはちじ");
  });
});

describe("signs in Today", () => {
  const fresh = () => load(ALL_DATA);
  const seen = { s: 9, d: 5, reps: 1, last: T0, due: T0 + 9 * NH.SRS.DAY };

  test("each line is a card, and lines that only make sense together share one", () => {
    const ids = NH.Signs.cardIds();
    assert.equal(ids.length, NH.SIGNS.reduce((n, sg) => n + (sg.cards || sg.lines).length, 0));
    assert.deepEqual([...ids.filter((id) => id.startsWith("s:questionnaire-desk."))], ["s:questionnaire-desk.0", "s:questionnaire-desk.1", "s:questionnaire-desk.2"]);
    for (const id of ids) {
      const c = NH.Signs.cardOf(id);
      assert.ok(c.text && c.en && c.say, id);
    }
    const fever = NH.Signs.cardOf("s:fever.0");
    assert.equal(fever.text, "熱がある方は、受付におしらせください。");
    assert.equal(fever.en, "If you have a fever, please tell reception.");
    // Every sign is used whole: each line in exactly one card.
    for (const sg of NH.SIGNS) assert.deepEqual([...(sg.cards || sg.lines.map((_, i) => [i])).flat()].sort((a, b) => a - b), [...sg.lines.map((_, i) => i)], sg.id);
  });

  test("a sign line waits until its kanji and kana are started, then joins Today", () => {
    const N = fresh();
    // Nothing else can be ready, so the queue shows what the signs do.
    N.WORDS.length = 0; N.PHRASES.length = 0; N.READING.length = 0; N.KANJI_WORDS.length = 0;
    const cards = N.store.srs().cards;
    for (const c of "があるはにおしらせください") cards["k:" + c] = { ...seen };
    for (const c of "たか") cards["k:" + c] = { ...seen };
    N.store.set("dailyKanji", 0);
    assert.equal(N.SRS.ready("s:fever.0"), false, "熱, 方, 受 and 付 not started yet");
    for (const c of "熱方受") cards["j:" + c] = { ...seen };
    assert.equal(N.SRS.ready("s:fever.0"), false, "付 still missing");
    cards["j:付"] = { ...seen };
    assert.equal(N.SRS.ready("s:fever.0"), true);
    assert.equal(N.SRS.itemText("s:fever.0"), "熱がある方は、受付におしらせください。");
    assert.ok(N.SRS.today(T0).fresh.includes("s:fever.0"));
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

  test("every set can come first, and each set's words carry its name", () => {
    const N = fresh();
    startHiragana(N);
    for (const [pack, first] of [["station", ["j:駅", "j:線"]], ["town", ["j:店", "j:売"]]]) {
      N.store.set("kanjiFirst", pack);
      assert.deepEqual(newKanji(N), first, pack);
    }
    const packs = new Set(N.Kanji.PACKS.map((P) => P.id));
    for (const w of N.KANJI_WORDS) assert.ok(packs.has(w.pack || "n5"), w.id);
    for (const P of N.Kanji.PACKS) assert.ok(N.KANJI_WORDS.filter((w) => (w.pack || "n5") === P.id).length >= 20, `${P.id} has words`);
  });

  test("the clinic pack can come first", () => {
    const N = fresh();
    startHiragana(N);
    N.store.set("kanjiFirst", "clinic");
    assert.deepEqual(newKanji(N), ["j:病", "j:院"]);
    N.store.set("kanjiFirst", "n5");
    assert.deepEqual(newKanji(N), ["j:一", "j:二"]);
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

describe("how kanji strokes end", () => {
  const ends = (ch) => [...NH.Geo.strokesOf(ch).map((s) => s.ending)];
  test("KanjiVG's stroke types give stop, sweep or hook", () => {
    assert.deepEqual(ends("人"), ["harai", "harai"]);
    assert.deepEqual(ends("水"), ["hane", "harai", "harai", "harai"]);
    assert.deepEqual(ends("一"), ["tome"]);
    assert.deepEqual(ends("七"), ["tome", "tome"], "七 doesn't flick");
  });

  test("九's hook is checked now; hooks the check can't see are taught, not graded", () => {
    assert.equal(NH.Geo.strokesOf("九")[1].hane, true);
    const ko = NH.Geo.strokesOf("子")[0];
    assert.equal(ko.ending, "hane");
    assert.equal(ko.hane, false, "子's first hook turns down-left, which the flick check can't see");
    for (const k of NH.KANJI) NH.Geo.strokesOf(k.k).forEach((s, i) => {
      if (s.hane) assert.ok(NH.Geo.hookOk(s.raw, s), `${k.k} stroke ${i + 1} is graded but its own model fails the check`);
    });
  });

  test("every stroke type in the data is understood", () => {
    for (const [ch, types] of Object.entries(NH.STROKE_TYPES)) types.forEach((t, i) => {
      if (t && !t.includes("/")) assert.ok(NH.Geo.endingOf(t), `${ch} stroke ${i + 1}: unknown type ${t}`);
    });
  });

  test("descriptions say when a stroke sweeps out", () => {
    assert.match(NH.Geo.describe(NH.Geo.strokesOf("人")[0]), /ends with a sweep \(harai\)$/);
    assert.match(NH.Geo.describe(NH.Geo.strokesOf("九")[1]), /ends with a flick \(hane\)$/);
  });

  test("kana are unchanged: no stroke types, hooks found from their shape", () => {
    assert.equal(NH.Geo.strokesOf("い")[0].hane, true);
    assert.equal(NH.Geo.strokesOf("あ")[0].ending, null);
  });
});

describe("hooks that turn sideways or down", () => {
  const G = NH.Geo;
  const trim = (raw, cut) => { const p = G.resample(raw, 200); return p.slice(0, Math.round(200 * (1 - cut / G.length(p)))); };
  const sideways = [["学", 4], ["飲", 9], ["読", 11]];

  test("are checked in the model's direction: 学's 冖 hook, 飲 and 読", () => {
    for (const [c, i] of sideways) {
      const s = G.strokesOf(c)[i];
      assert.equal(s.hane, true, `${c} stroke ${i + 1}`);
      assert.ok(s.hookDir != null, `${c} stroke ${i + 1} has a direction`);
    }
  });

  test("a hand-written stroke with the hook passes; the same stroke stopped short doesn't", () => {
    const rnd = makeRng(17);
    for (const [c, i] of sideways) {
      const s = G.strokesOf(c)[i];
      let ok = 0;
      for (let k = 0; k < 30; k++) ok += G.hookOk(humanize(NH, s, rnd, { jitter: 1.5, shift: 6 }), s);
      assert.ok(ok >= 27, `${c} stroke ${i + 1}: ${ok}/30 hooks recognised`);
      assert.equal(G.hookOk(trim(s.raw, 14), s), false, `${c} stroke ${i + 1} without its hook`);
    }
  });

  test("hooks the model doesn't show distinctly stay taught, not checked", () => {
    for (const [c, i] of [["子", 0], ["長", 5]]) {
      const s = G.strokesOf(c)[i];
      assert.equal(s.ending, "hane");
      assert.equal(s.hane, false, `${c} stroke ${i + 1}`);
    }
  });
});
