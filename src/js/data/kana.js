/* Kana tables for both scripts: the gojūon chart, voiced rows, combos and
 * (katakana only) the extra sounds used for loanwords. */
window.NH = window.NH || {};

(function () {
  // Each row: [label, romaji row name, cells a/i/u/e/o]. null = empty cell.
  const R = (label, cells) => ({ label, cells });

  NH.TABLES = {
    basic: {
      title: "Gojūon",
      jp: "五十音",
      blurb: "The 46 basic sounds. Read the chart top to bottom, right column first in Japan; we read it left to right here.",
      cols: ["a", "i", "u", "e", "o"],
      rows: [
        R("", ["あ", "い", "う", "え", "お"]),
        R("k", ["か", "き", "く", "け", "こ"]),
        R("s", ["さ", "し", "す", "せ", "そ"]),
        R("t", ["た", "ち", "つ", "て", "と"]),
        R("n", ["な", "に", "ぬ", "ね", "の"]),
        R("h", ["は", "ひ", "ふ", "へ", "ほ"]),
        R("m", ["ま", "み", "む", "め", "も"]),
        R("y", ["や", null, "ゆ", null, "よ"]),
        R("r", ["ら", "り", "る", "れ", "ろ"]),
        R("w", ["わ", null, null, null, "を"]),
        R("n", ["ん", null, null, null, null]),
      ],
    },
    voiced: {
      title: "Dakuten & handakuten",
      jp: "濁音・半濁音",
      blurb: "Two small ticks (゛ten-ten) voice a sound: k→g, s→z, t→d, h→b. A small circle (゜maru) turns h→p.",
      cols: ["a", "i", "u", "e", "o"],
      rows: [
        R("g", ["が", "ぎ", "ぐ", "げ", "ご"]),
        R("z", ["ざ", "じ", "ず", "ぜ", "ぞ"]),
        R("d", ["だ", "ぢ", "づ", "で", "ど"]),
        R("b", ["ば", "び", "ぶ", "べ", "ぼ"]),
        R("p", ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"]),
      ],
    },
    combos: {
      title: "Small kana & combos",
      jp: "拗音・促音",
      blurb: "A small ゃ ゅ ょ glues onto an i-sound to make one syllable (き+ゃ = きゃ kya). A small っ doubles the next consonant.",
      cols: ["ya", "yu", "yo"],
      rows: [
        R("k", ["きゃ", "きゅ", "きょ"]),
        R("s", ["しゃ", "しゅ", "しょ"]),
        R("c", ["ちゃ", "ちゅ", "ちょ"]),
        R("n", ["にゃ", "にゅ", "にょ"]),
        R("h", ["ひゃ", "ひゅ", "ひょ"]),
        R("m", ["みゃ", "みゅ", "みょ"]),
        R("r", ["りゃ", "りゅ", "りょ"]),
        R("g", ["ぎゃ", "ぎゅ", "ぎょ"]),
        R("j", ["じゃ", "じゅ", "じょ"]),
        R("b", ["びゃ", "びゅ", "びょ"]),
        R("p", ["ぴゃ", "ぴゅ", "ぴょ"]),
      ],
      extras: ["ゃ", "ゅ", "ょ", "っ"],
    },
  };

  // Romaji for combos (single kana romaji comes from KANA_INFO).
  NH.COMBO_ROMAJI = {
    "きゃ": "kya", "きゅ": "kyu", "きょ": "kyo", "しゃ": "sha", "しゅ": "shu", "しょ": "sho",
    "ちゃ": "cha", "ちゅ": "chu", "ちょ": "cho", "にゃ": "nya", "にゅ": "nyu", "にょ": "nyo",
    "ひゃ": "hya", "ひゅ": "hyu", "ひょ": "hyo", "みゃ": "mya", "みゅ": "myu", "みょ": "myo",
    "りゃ": "rya", "りゅ": "ryu", "りょ": "ryo", "ぎゃ": "gya", "ぎゅ": "gyu", "ぎょ": "gyo",
    "じゃ": "ja", "じゅ": "ju", "じょ": "jo", "びゃ": "bya", "びゅ": "byu", "びょ": "byo",
    "ぴゃ": "pya", "ぴゅ": "pyu", "ぴょ": "pyo",
  };

  // Flat study order used by prev/next navigation in the symbol view.
  NH.ORDER = [];
  for (const key of ["basic", "voiced"]) {
    for (const row of NH.TABLES[key].rows) for (const c of row.cells) if (c) NH.ORDER.push(c);
  }
  NH.ORDER.push(...NH.TABLES.combos.extras);
  for (const row of NH.TABLES.combos.rows) NH.ORDER.push(...row.cells);

  NH.SMALL = new Set(["ぁ", "ぃ", "ぅ", "ぇ", "ぉ", "っ", "ゃ", "ゅ", "ょ", "ゎ", "ァ", "ィ", "ゥ", "ェ", "ォ", "ッ", "ャ", "ュ", "ョ", "ヮ", "ヵ", "ヶ"]);

  // ── katakana ─────────────────────────────────────────────
  // Same sounds as hiragana, 0x60 code points further on.
  const shift = (s, d) => [...s].map((c) => String.fromCodePoint(c.codePointAt(0) + d)).join("");
  NH.toKata = (s) => [...s].map((c) => (/[ぁ-ゖ]/.test(c) ? shift(c, 0x60) : c)).join("");
  NH.toHira = (s) => [...s].map((c) => (/[ァ-ヶ]/.test(c) ? shift(c, -0x60) : c)).join("");
  const kataRows = (t) => t.rows.map((r) => R(r.label, r.cells.map((c) => c && NH.toKata(c))));
  const H = NH.TABLES;
  NH.KTABLES = {
    basic: { ...H.basic, rows: kataRows(H.basic), blurb: "The same 46 sounds as hiragana, in straight, angular strokes. Katakana write loanwords (コーヒー), foreign names, sound effects and words for emphasis." },
    voiced: { ...H.voiced, rows: kataRows(H.voiced), blurb: "The same marks as hiragana: ゛ten-ten voices k→g, s→z, t→d, h→b, and ゜maru turns h→p." },
    combos: {
      ...H.combos, rows: kataRows(H.combos), extras: ["ャ", "ュ", "ョ", "ッ", "ー"], extrasLabel: "Small kana and ー",
      blurb: "Small ャ ュ ョ make one syllable with an i-sound (キ+ャ = キャ kya), small ッ doubles the next consonant, and ー stretches the vowel before it (ラーメン rāmen).",
    },
    extended: {
      title: "Loanword sounds",
      jp: "外来語の音",
      blurb: "Sounds Japanese didn't have, made for foreign words with a small ァ ィ ゥ ェ ォ: ファ fa, ティ ti, ウィ wi, シェ she. ヴ writes v, though most people say b.",
      cols: ["a", "i", "u", "e", "o"],
      rows: [
        R("f", ["ファ", "フィ", null, "フェ", "フォ"]),
        R("v", ["ヴァ", "ヴィ", "ヴ", "ヴェ", "ヴォ"]),
        R("w", [null, "ウィ", null, "ウェ", "ウォ"]),
        R("t", [null, "ティ", "トゥ", null, null]),
        R("d", [null, "ディ", "ドゥ", null, null]),
        R("sh", [null, null, null, "シェ", null]),
        R("ch", [null, null, null, "チェ", null]),
        R("j", [null, null, null, "ジェ", null]),
      ],
      extras: ["ァ", "ィ", "ゥ", "ェ", "ォ"],
    },
  };
  for (const [h, r] of Object.entries({ ...NH.COMBO_ROMAJI })) NH.COMBO_ROMAJI[NH.toKata(h)] = r;
  Object.assign(NH.COMBO_ROMAJI, {
    "ファ": "fa", "フィ": "fi", "フェ": "fe", "フォ": "fo", "ヴァ": "va", "ヴィ": "vi", "ヴェ": "ve", "ヴォ": "vo",
    "ウィ": "wi", "ウェ": "we", "ウォ": "wo", "ティ": "ti", "トゥ": "tu", "ディ": "di", "ドゥ": "du",
    "シェ": "she", "チェ": "che", "ジェ": "je",
  });
  const order = (T, keys) => {
    const out = [];
    for (const key of keys.filter((k) => T[k])) {
      for (const row of T[key].rows) for (const c of row.cells) if (c) out.push(c);
      if (T[key].extras) out.push(...T[key].extras.filter((c) => !out.includes(c)));
    }
    return out;
  };

  /* The scripts, for screens that work on either. `order` is the chart order
   * used for prev/next; `learn` is the order new kana are taught in. */
  NH.SCRIPTS = {
    hiragana: { id: "hiragana", jp: "ひらがな", en: "Hiragana", code: "H", line: "var(--line-h)", tables: NH.TABLES, sections: ["basic", "voiced", "combos"], order: NH.ORDER },
    katakana: { id: "katakana", jp: "カタカナ", en: "Katakana", code: "K", line: "var(--line-k)", tables: NH.KTABLES, sections: ["basic", "voiced", "combos", "extended"], order: [] },
  };
  NH.SCRIPTS.katakana.order = order(NH.KTABLES, ["basic", "voiced", "combos", "extended"]);
  NH.KANA_RE = /[ぁ-ゔァ-ヶー]/;
  // Which line a character or word belongs to: kanji if it has any, else katakana if it has any.
  NH.scriptOf = (s) => (/[\u3400-\u9fff々]/.test(s || "") && NH.SCRIPTS.kanji ? NH.SCRIPTS.kanji : /[ァ-ヶー]/.test(s || "") ? NH.SCRIPTS.katakana : NH.SCRIPTS.hiragana);

  // Romaji of a kana or combo, best effort (used for quizzes and labels).
  NH.romajiOf = function (s) {
    if (NH.COMBO_ROMAJI[s]) return NH.COMBO_ROMAJI[s];
    const info = NH.KANA_INFO && NH.KANA_INFO[s];
    return info ? info.romaji : s;
  };
})();
