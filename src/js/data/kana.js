/* Hiragana tables: layout of the gojūon chart, voiced rows and combos. */
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

  NH.SMALL = new Set(["ぁ", "ぃ", "ぅ", "ぇ", "ぉ", "っ", "ゃ", "ゅ", "ょ", "ゎ"]);

  // Romaji of any hiragana string, best effort (used for quizzes and labels).
  NH.romajiOf = function (s) {
    if (NH.COMBO_ROMAJI[s]) return NH.COMBO_ROMAJI[s];
    const info = NH.KANA_INFO && NH.KANA_INFO[s];
    return info ? info.romaji : s;
  };
})();
