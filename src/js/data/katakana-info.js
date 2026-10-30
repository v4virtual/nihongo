/* Kaku — per-kana learning info for katakana: source kanji fragments, mnemonics, notes, lookalikes, loanword examples. */
window.NH = window.NH || {};
Object.assign(window.NH.KANA_INFO, {
  /* ---------- a-row ---------- */
  "ア": {
    romaji: "a",
    hira: "あ",
    origin: "阿",
    originPart: "the 阝 on its left",
    originMeaning: "corner, nook; flatter",
    mnemonic: "An axe: a short handle at the top and a long blade sweeping down to the left. 'Ah!' as it swings.",
    notes: [
      "Two strokes: a horizontal that hooks down at the right end, then a long stroke that curves down to the left.",
      "Don't confuse it with マ: マ's second stroke is a short tick sitting inside the shape, while ア's sweeps right out of it.",
      "Like all katakana, it is used mainly for loanwords and foreign names."
    ],
    lookalikes: ["マ", "ァ"],
    examples: [
      { w: "アイス", r: "aisu", m: "ice cream" },
      { w: "アメリカ", r: "Amerika", m: "America, the USA" },
      { w: "アパート", r: "apāto", m: "apartment, flat" }
    ]
  },
  "イ": {
    romaji: "i",
    hira: "い",
    origin: "伊",
    originPart: "the 亻 (person) on its left",
    originMeaning: "that one; Italy (in names)",
    mnemonic: "A person leaning against an easel: a slanted head stroke and one straight leg. 'Eee, nice painting.'",
    notes: [
      "Two strokes: a short stroke falling to the lower left, then a straight vertical hanging from its middle.",
      "It is exactly the person radical 亻 seen on the left of kanji like 休 and 体.",
      "A long i is written イー in loanwords: チーズ (chīzu), but often just イ after another vowel: タイ (Thailand)."
    ],
    lookalikes: ["ト", "ィ"],
    examples: [
      { w: "イギリス", r: "Igirisu", m: "the UK, Britain" },
      { w: "インド", r: "Indo", m: "India" },
      { w: "イヤホン", r: "iyahon", m: "earphones" }
    ]
  },
  "ウ": {
    romaji: "u",
    hira: "う",
    origin: "宇",
    originPart: "the top (the 宀 roof)",
    originMeaning: "eaves, universe",
    mnemonic: "A little house with a chimney on its roof, the roof of 宇 itself. 'Ooh, cosy!'",
    notes: [
      "Three strokes: the short top dot, a short vertical on the left, then a horizontal that turns and sweeps down to the left.",
      "ウ, ワ and フ are built from the same hooked stroke: ウ has the dot and left post, ワ has only the left post, フ has neither.",
      "Before a small vowel it makes w-sounds in loanwords: ウィ (wi), ウェ (we), ウォ (wo)."
    ],
    lookalikes: ["ワ", "フ", "ラ", "ゥ"],
    examples: [
      { w: "ウイスキー", r: "uisukī", m: "whisky" },
      { w: "ウール", r: "ūru", m: "wool" },
      { w: "ハロウィン", r: "harowin", m: "Halloween" }
    ]
  },
  "エ": {
    romaji: "e",
    hira: "え",
    origin: "江",
    originPart: "the 工 on its right",
    originMeaning: "inlet, bay",
    mnemonic: "A steel I-beam on a building site, ready for the elevator to lift it. 'Eh, it's heavy!'",
    notes: [
      "Three strokes: top horizontal, the vertical, then a longer bottom horizontal.",
      "It looks just like the kanji 工 (craft, construction), so let context tell you which you're reading.",
      "Don't confuse it with ユ, whose vertical doesn't reach the top and whose top bar sticks out only to the left."
    ],
    lookalikes: ["ユ", "ェ"],
    examples: [
      { w: "エアコン", r: "eakon", m: "air conditioner" },
      { w: "エレベーター", r: "erebētā", m: "lift, elevator" },
      { w: "エビ", r: "ebi", m: "prawn, shrimp (often in katakana on menus)" }
    ]
  },
  "オ": {
    romaji: "o",
    hira: "お",
    origin: "於",
    originPart: "the left side (方), simplified",
    originMeaning: "at, in",
    mnemonic: "An opera singer, arms spread wide, belting out a big 'Oh!' with one leg kicked out to the side.",
    notes: [
      "Three strokes: a horizontal, a vertical with a hook at the bottom, then a stroke falling to the lower left.",
      "It resembles the kanji 才 (talent; years old), but the strokes and proportions differ slightly.",
      "Don't confuse it with ホ, which has two little legs instead of one sweeping stroke."
    ],
    lookalikes: ["ホ", "ォ"],
    examples: [
      { w: "オレンジ", r: "orenji", m: "orange" },
      { w: "オムライス", r: "omuraisu", m: "omelette rice" },
      { w: "オーケー", r: "ōkē", m: "OK" }
    ]
  },

  /* ---------- ka-row ---------- */
  "カ": {
    romaji: "ka",
    hira: "か",
    origin: "加",
    originPart: "the 力 on its left",
    originMeaning: "add",
    mnemonic: "A strong arm flexing, the 'power' kanji 力 itself. 'Ka-pow!'",
    notes: [
      "Two strokes. It's the hiragana か without the separate little tick on the right.",
      "Almost identical to the kanji 力 (chikara, power). カ is usually a little smaller and more angular, but context is the real clue.",
      "A small ヶ or ヵ in counters is read 'ka': 3ヵ月 (sankagetsu, three months)."
    ],
    lookalikes: ["か", "ガ"],
    examples: [
      { w: "カメラ", r: "kamera", m: "camera" },
      { w: "カレー", r: "karē", m: "curry" },
      { w: "カード", r: "kādo", m: "card (e.g. credit card)" }
    ]
  },
  "キ": {
    romaji: "ki",
    hira: "き",
    origin: "幾",
    originPart: "a simplified fragment of the kanji",
    originMeaning: "how many, some",
    mnemonic: "A key with two teeth: two crossbars pierced by the shaft. Just like き, but without the round grip.",
    notes: [
      "Three strokes: two horizontals that rise slightly to the right, then a vertical through both.",
      "Compared with hiragana き, katakana キ has no curved bottom stroke.",
      "Don't confuse it with モ: モ's vertical starts at the top bar and curves right at the bottom."
    ],
    lookalikes: ["き", "モ", "チ"],
    examples: [
      { w: "キロ", r: "kiro", m: "kilo (kilogram, kilometre)" },
      { w: "キッチン", r: "kitchin", m: "kitchen" },
      { w: "スキー", r: "sukī", m: "skiing" }
    ]
  },
  "ク": {
    romaji: "ku",
    hira: "く",
    origin: "久",
    originPart: "the first two strokes (top left)",
    originMeaning: "long time",
    mnemonic: "A cuckoo's beak and head in profile, about to 'coo-coo'.",
    notes: [
      "Two strokes: a short stroke falling left, then a horizontal that turns and sweeps down to the left.",
      "ク, ケ and タ are easy to mix up: ケ's top stroke doesn't join a hook, and タ adds a short stroke in the middle.",
      "Don't confuse it with ワ, which has a vertical on the left."
    ],
    lookalikes: ["ケ", "タ", "ワ"],
    examples: [
      { w: "クーポン", r: "kūpon", m: "coupon" },
      { w: "クラス", r: "kurasu", m: "class" },
      { w: "クッキー", r: "kukkī", m: "biscuit, cookie" }
    ]
  },
  "ケ": {
    romaji: "ke",
    hira: "け",
    origin: "介",
    originPart: "a simplified form of the kanji (via its variant 个)",
    originMeaning: "between, mediate",
    mnemonic: "A cake slice tipped on its side: the short top edge and a long knife cut falling away. 'Ke(-ki), please!'",
    notes: [
      "Three strokes: a short stroke falling left, a horizontal starting from its middle, then a long stroke down to the left from the horizontal.",
      "Unlike ク, the horizontal doesn't turn into the sweep; the third stroke is separate.",
      "A small ヶ in place names and counters is read 'ga' or 'ka': 霞ヶ関 (Kasumigaseki), 3ヶ月 (sankagetsu)."
    ],
    lookalikes: ["ク", "タ"],
    examples: [
      { w: "ケーキ", r: "kēki", m: "cake" },
      { w: "ケース", r: "kēsu", m: "case (for a phone, glasses)" },
      { w: "ケチャップ", r: "kechappu", m: "ketchup" }
    ]
  },
  "コ": {
    romaji: "ko",
    hira: "こ",
    origin: "己",
    originPart: "the top part",
    originMeaning: "self",
    mnemonic: "A coffee cup seen from the side: the open side is where you grab it. 'Coffee!'",
    notes: [
      "Two strokes: a horizontal that turns down, then a bottom horizontal. It opens to the left.",
      "コ, ユ and ロ are a trio: ユ's vertical doesn't reach the top, and ロ is closed all the way round.",
      "コーヒー and コンビニ are among the first katakana words you'll read in Japan."
    ],
    lookalikes: ["ユ", "ロ"],
    examples: [
      { w: "コーヒー", r: "kōhī", m: "coffee" },
      { w: "コンビニ", r: "konbini", m: "convenience store" },
      { w: "コピー", r: "kopī", m: "photocopy, copy" }
    ]
  },

  /* ---------- sa-row ---------- */
  "サ": {
    romaji: "sa",
    hira: "さ",
    origin: "散",
    originPart: "the top left part",
    originMeaning: "scatter",
    mnemonic: "A salad bowl balanced on two legs, one bent leg reaching for the dressing. 'Sa-lad!'",
    notes: [
      "Three strokes: a long horizontal, a short vertical, then a longer vertical that sweeps down to the left.",
      "It looks a little like hiragana さ, but comes from a different kanji (さ is from 左).",
      "Don't confuse it with セ, which has one horizontal that hooks and a vertical that curves along the bottom."
    ],
    lookalikes: ["さ", "セ", "ナ"],
    examples: [
      { w: "サラダ", r: "sarada", m: "salad" },
      { w: "サイズ", r: "saizu", m: "size" },
      { w: "サッカー", r: "sakkā", m: "football, soccer" }
    ]
  },
  "シ": {
    romaji: "shi",
    hira: "し",
    origin: "之",
    originPart: "the whole kanji, simplified",
    originMeaning: "this; of",
    mnemonic: "A smiling face looking sideways: two eyes stacked on the left and a grin rising up to the right. 'She smiles.'",
    notes: [
      "Three strokes. The two dots line up vertically on the left, and the last stroke sweeps UP from the bottom left.",
      "シ vs ツ is the classic katakana trap: ツ's dots sit across the top and its last stroke falls DOWN from the top right.",
      "Romanised 'shi', never 'si'. Japanese uses シー for English 'see/sea' sounds: シーフード (seafood)."
    ],
    lookalikes: ["ツ", "ン", "ミ"],
    examples: [
      { w: "シャツ", r: "shatsu", m: "shirt, T-shirt" },
      { w: "タクシー", r: "takushī", m: "taxi" },
      { w: "シール", r: "shīru", m: "sticker" }
    ]
  },
  "ス": {
    romaji: "su",
    hira: "す",
    origin: "須",
    originPart: "a simplified fragment (usually traced to its right-hand part)",
    originMeaning: "necessary; must",
    mnemonic: "A skier swooshing down the slope, legs splayed. 'Ski-ssssss!'",
    notes: [
      "Two strokes: a horizontal that turns and sweeps down to the left, then a short stroke falling to the right from its middle.",
      "Don't confuse it with ヌ: in ヌ the second stroke cuts right across the sweep, like a dot crossing it.",
      "The u is often almost silent, so スポーツ sounds like 'spōtsu'."
    ],
    lookalikes: ["ヌ", "フ"],
    examples: [
      { w: "スープ", r: "sūpu", m: "soup" },
      { w: "スマホ", r: "sumaho", m: "smartphone" },
      { w: "スーパー", r: "sūpā", m: "supermarket" }
    ]
  },
  "セ": {
    romaji: "se",
    hira: "せ",
    origin: "世",
    originPart: "the whole kanji, simplified",
    originMeaning: "world, generation",
    mnemonic: "A seal balancing a ball: a hooked flipper on top and its long body curving along the bottom. 'Say cheese!'",
    notes: [
      "Two strokes: a horizontal with a hook down at the right, then a vertical that curves along the bottom to the right.",
      "Hiragana せ, from the same kanji, has an extra short vertical (three strokes). セ has only two.",
      "You'll see セール (sale) in shop windows everywhere."
    ],
    lookalikes: ["せ", "ヒ", "サ"],
    examples: [
      { w: "セール", r: "sēru", m: "sale" },
      { w: "セーター", r: "sētā", m: "jumper, sweater" },
      { w: "セット", r: "setto", m: "set (meal); set" }
    ]
  },
  "ソ": {
    romaji: "so",
    hira: "そ",
    origin: "曽",
    originPart: "the top two strokes",
    originMeaning: "formerly, once",
    mnemonic: "A sewing needle and thread: a little tick and a long stitch pulled down from the top. 'Sew!'",
    notes: [
      "Two strokes: a short tick, then a long stroke that falls DOWN from the top right to the lower left.",
      "ソ vs ン: ン's long stroke sweeps UP from the bottom left, and its tick is more horizontal. Watch the direction.",
      "ソ is like ツ with one dot missing."
    ],
    lookalikes: ["ン", "ツ", "リ"],
    examples: [
      { w: "ソース", r: "sōsu", m: "sauce (esp. brown sauce)" },
      { w: "ソファ", r: "sofa", m: "sofa" },
      { w: "ソックス", r: "sokkusu", m: "socks" }
    ]
  },

  /* ---------- ta-row ---------- */
  "タ": {
    romaji: "ta",
    hira: "た",
    origin: "多",
    originPart: "the top 夕",
    originMeaning: "many",
    mnemonic: "A taco folded over with one bit of filling poking out in the middle. 'Ta-co!'",
    notes: [
      "Three strokes: like ク, plus a short third stroke inside falling to the right.",
      "Practically the same shape as the kanji 夕 (yū, evening).",
      "Don't confuse it with ケ, whose third stroke falls left from the horizontal instead of sitting inside."
    ],
    lookalikes: ["ク", "ケ", "ヌ"],
    examples: [
      { w: "タクシー", r: "takushī", m: "taxi" },
      { w: "タオル", r: "taoru", m: "towel" },
      { w: "バター", r: "batā", m: "butter" }
    ]
  },
  "チ": {
    romaji: "chi",
    hira: "ち",
    origin: "千",
    originPart: "the whole kanji, simplified",
    originMeaning: "thousand",
    mnemonic: "A cheerleader holding a pompom up high, arms out wide and one leg kicked left. 'Chee-r!'",
    notes: [
      "Three strokes: a short stroke slanting down to the left at the top, a long horizontal, then a vertical that sweeps left at the bottom.",
      "チ vs テ: テ has two flat horizontals at the top; チ's top stroke slants.",
      "It looks a lot like the kanji 千 (sen, thousand). Romanised 'chi', never 'ti'."
    ],
    lookalikes: ["テ", "キ"],
    examples: [
      { w: "チーズ", r: "chīzu", m: "cheese" },
      { w: "チケット", r: "chiketto", m: "ticket" },
      { w: "チキン", r: "chikin", m: "chicken (meat)" }
    ]
  },
  "ツ": {
    romaji: "tsu",
    hira: "つ",
    origin: "川",
    originPart: "the whole kanji, simplified",
    originMeaning: "river",
    mnemonic: "A tsunami: two splashes across the top and a giant wave crashing down from the upper right.",
    notes: [
      "Three strokes. The two dots sit side by side along the top, and the last stroke falls DOWN from the top right.",
      "ツ vs シ: シ's dots stack on the left and its last stroke rises UP. Face the dots: ツ looks down at you, シ looks to the side.",
      "Small ッ doubles the next consonant: ベッド (beddo, bed)."
    ],
    lookalikes: ["シ", "ソ", "ッ"],
    examples: [
      { w: "ツアー", r: "tsuā", m: "tour" },
      { w: "ツナ", r: "tsuna", m: "tuna (in sandwiches, onigiri)" },
      { w: "スーツ", r: "sūtsu", m: "suit" }
    ]
  },
  "テ": {
    romaji: "te",
    hira: "て",
    origin: "天",
    originPart: "a simplified form of the kanji",
    originMeaning: "heaven, sky",
    mnemonic: "A telly on a stand: two flat bars for the screen and an aerial-like leg slanting down. 'Te-lebi!'",
    notes: [
      "Three strokes: a short top horizontal, a longer horizontal, then a stroke falling down to the left from its middle.",
      "テ vs チ: テ's top stroke is flat, and the bottom stroke falls left without a vertical hook.",
      "Before small ィ it makes the loanword sound 'ti': パーティー (pātī)."
    ],
    lookalikes: ["チ", "ラ"],
    examples: [
      { w: "テレビ", r: "terebi", m: "TV" },
      { w: "テスト", r: "tesuto", m: "test, exam" },
      { w: "ホテル", r: "hoteru", m: "hotel" }
    ]
  },
  "ト": {
    romaji: "to",
    hira: "と",
    origin: "止",
    originPart: "the upper right part",
    originMeaning: "stop",
    mnemonic: "A totem pole with a single branch sticking out to the right. Or a toe-tag hanging off a post.",
    notes: [
      "Two strokes: a vertical, then a short stroke falling to the right from its middle.",
      "Looks the same as the rare kanji 卜 (divination).",
      "Romanised 'to', even when it stands in for English 'tu' or a final t: トマト (tomato), ポスト (posuto)."
    ],
    lookalikes: ["イ", "ド"],
    examples: [
      { w: "トイレ", r: "toire", m: "toilet" },
      { w: "トマト", r: "tomato", m: "tomato" },
      { w: "トースト", r: "tōsuto", m: "toast" }
    ]
  },

  /* ---------- na-row ---------- */
  "ナ": {
    romaji: "na",
    hira: "な",
    origin: "奈",
    originPart: "the top (大), simplified",
    originMeaning: "what; Nara (in names)",
    mnemonic: "A knife lying flat with its handle dropping away: 'Nai-fu!'",
    notes: [
      "Two strokes: a horizontal, then a long stroke falling to the lower left across it.",
      "ナ vs メ: メ has two diagonal strokes crossing like an X, with no flat horizontal.",
      "It looks like the kanji 十 (ten) with a bent tail."
    ],
    lookalikes: ["メ", "サ"],
    examples: [
      { w: "ナイフ", r: "naifu", m: "knife" },
      { w: "バナナ", r: "banana", m: "banana" },
      { w: "ナプキン", r: "napukin", m: "napkin, serviette" }
    ]
  },
  "ニ": {
    romaji: "ni",
    hira: "に",
    origin: "仁",
    originPart: "the 二 on its right",
    originMeaning: "benevolence",
    mnemonic: "Two knees bent at a right angle, seen from the side: one above the other. 'Knee, knee.'",
    notes: [
      "Two strokes: a short top horizontal, then a longer bottom one.",
      "Looks the same as the kanji 二 (ni, two), which even has the same sound.",
      "Hiragana に is just ニ with a vertical added on the left."
    ],
    lookalikes: ["に", "コ"],
    examples: [
      { w: "テニス", r: "tenisu", m: "tennis" },
      { w: "メニュー", r: "menyū", m: "menu" },
      { w: "ニュース", r: "nyūsu", m: "news" }
    ]
  },
  "ヌ": {
    romaji: "nu",
    hira: "ぬ",
    origin: "奴",
    originPart: "the 又 on its right",
    originMeaning: "servant, guy",
    mnemonic: "A pair of noodle chopsticks crossing a bowl's rim. 'Noo-dles!'",
    notes: [
      "Two strokes: a horizontal that turns and sweeps down to the left, then a short stroke crossing it from upper left to lower right.",
      "ヌ vs ス: in ス the second stroke starts from the sweep and only falls outwards; in ヌ it cuts right across.",
      "It's the kanji part 又 (again), simplified."
    ],
    lookalikes: ["ス", "メ"],
    examples: [
      { w: "ヌードル", r: "nūdoru", m: "noodles (esp. instant)" },
      { w: "カヌー", r: "kanū", m: "canoe" },
      { w: "ヌガー", r: "nugā", m: "nougat" }
    ]
  },
  "ネ": {
    romaji: "ne",
    hira: "ね",
    origin: "祢",
    originPart: "the 礻 on its left",
    originMeaning: "ancestral shrine (in names)",
    mnemonic: "A necktie with a knot on top and the two ends hanging down. 'Ne-kutai!'",
    notes: [
      "Four strokes: a dot, a stroke that bends and sweeps left, a vertical, then a short dot on the right.",
      "It's the 'altar' radical 礻 from kanji like 神 (god) and 社 (shrine).",
      "Don't confuse it with ホ, which has a full horizontal and a dot on each side."
    ],
    lookalikes: ["ホ", "ヌ"],
    examples: [
      { w: "ネクタイ", r: "nekutai", m: "necktie" },
      { w: "ネット", r: "netto", m: "the internet; net" },
      { w: "ネイル", r: "neiru", m: "nail art, manicure" }
    ]
  },
  "ノ": {
    romaji: "no",
    hira: "の",
    origin: "乃",
    originPart: "the first stroke",
    originMeaning: "from, thereupon",
    mnemonic: "A single slash, like crossing something out: 'No!'",
    notes: [
      "One stroke, falling from the upper right to the lower left.",
      "It's the same shape as the kanji radical 丿 found in many kanji.",
      "Compare ソ, which adds a short tick on the left, and ン."
    ],
    lookalikes: ["ソ", "ン"],
    examples: [
      { w: "ノート", r: "nōto", m: "notebook" },
      { w: "ピアノ", r: "piano", m: "piano" },
      { w: "ノック", r: "nokku", m: "knock (on a door)" }
    ]
  },

  /* ---------- ha-row ---------- */
  "ハ": {
    romaji: "ha",
    hira: "は",
    origin: "八",
    originPart: "the whole kanji",
    originMeaning: "eight",
    mnemonic: "Two people bursting out laughing and falling apart: 'Ha ha!'",
    notes: [
      "Two strokes that don't touch: one falling to the left, then one falling to the right.",
      "Looks like the kanji 八 (hachi, eight), which even starts with ha.",
      "ハ vs ヘ: ヘ is a single peaked stroke. ハ's two strokes spread apart downward."
    ],
    lookalikes: ["ヘ", "ル"],
    examples: [
      { w: "ハンバーガー", r: "hanbāgā", m: "hamburger" },
      { w: "ハム", r: "hamu", m: "ham" },
      { w: "ハンカチ", r: "hankachi", m: "handkerchief" }
    ]
  },
  "ヒ": {
    romaji: "hi",
    hira: "ひ",
    origin: "比",
    originPart: "the right half",
    originMeaning: "compare",
    mnemonic: "A person sitting with legs stretched out, arm raised to say 'Hi!'",
    notes: [
      "Two strokes: a short horizontal rising to the right, then a vertical that curves along the bottom to the right.",
      "Don't confuse it with セ, whose top horizontal is long and hooks downward.",
      "Hiragana ひ comes from the same kanji, but looks quite different."
    ],
    lookalikes: ["セ", "ビ"],
    examples: [
      { w: "コーヒー", r: "kōhī", m: "coffee" },
      { w: "ヒーター", r: "hītā", m: "heater" },
      { w: "ヒント", r: "hinto", m: "hint" }
    ]
  },
  "フ": {
    romaji: "fu",
    hira: "ふ",
    origin: "不",
    originPart: "the first two strokes (the top)",
    originMeaning: "not, un-",
    mnemonic: "A hook for hanging your hood: 'Fuu', blow on your cold hands after hanging up your coat.",
    notes: [
      "One stroke: a horizontal that turns and sweeps down to the left.",
      "フ, ウ and ワ share this stroke: ワ adds a post on the left, ウ adds the post and a dot on top.",
      "Said with lips nearly closed, between 'f' and 'h'. Before small vowels it writes loanword f-sounds: ファ, フィ, フェ, フォ."
    ],
    lookalikes: ["ワ", "ウ", "ラ", "ス"],
    examples: [
      { w: "フルーツ", r: "furūtsu", m: "fruit" },
      { w: "フランス", r: "Furansu", m: "France" },
      { w: "フライドポテト", r: "furaidopoteto", m: "chips, French fries" }
    ]
  },
  "ヘ": {
    romaji: "he",
    hira: "へ",
    origin: "部",
    originPart: "the 阝 on its right, simplified",
    originMeaning: "section, part",
    mnemonic: "A helmet seen from the side, sitting on top of a head. 'Hey, put your helmet on!'",
    notes: [
      "One stroke: a short rise up to the right, then a long slope down.",
      "Katakana ヘ and hiragana へ are almost identical. ヘ tends to be a little stiffer and more angular, but you usually tell them apart by the letters around them.",
      "ハ vs ヘ: ハ is two separate strokes spreading apart."
    ],
    lookalikes: ["へ", "ハ"],
    examples: [
      { w: "ヘルメット", r: "herumetto", m: "helmet" },
      { w: "ヘルシー", r: "herushī", m: "healthy (low-calorie)" },
      { w: "ヘリコプター", r: "herikoputā", m: "helicopter" }
    ]
  },
  "ホ": {
    romaji: "ho",
    hira: "ほ",
    origin: "保",
    originPart: "the bottom right (the 木 part), simplified",
    originMeaning: "protect, keep",
    mnemonic: "A cross with two dots, like a holy marker on a hillside. 'Ho-ly!'",
    notes: [
      "Four strokes: a horizontal, a vertical with a hook, then a dot on the left and a dot on the right.",
      "It looks like the kanji 木 (tree), but the bottom strokes are short, separate dots.",
      "Don't confuse it with ネ, which starts with a dot on top, or オ, which has one sweeping leg."
    ],
    lookalikes: ["ネ", "オ"],
    examples: [
      { w: "ホテル", r: "hoteru", m: "hotel" },
      { w: "ホーム", r: "hōmu", m: "(station) platform; home" },
      { w: "ホットケーキ", r: "hottokēki", m: "pancakes" }
    ]
  },

  /* ---------- ma-row ---------- */
  "マ": {
    romaji: "ma",
    hira: "ま",
    origin: "末",
    originPart: "the top, simplified",
    originMeaning: "end, tip",
    mnemonic: "A mask seen from the side, with a little nose sticking out. 'Mask on, Ma!'",
    notes: [
      "Two strokes: a horizontal that turns and falls down to the left, then a short stroke falling to the right from its middle.",
      "マ vs ア: ア's second stroke is a long sweep out of the shape, while マ's is a short tick tucked inside.",
      "マ vs ム: ム is a sharp, pointed shape with the tick on the right."
    ],
    lookalikes: ["ア", "ム"],
    examples: [
      { w: "マスク", r: "masuku", m: "face mask" },
      { w: "マンション", r: "manshon", m: "apartment block (not a mansion)" },
      { w: "マヨネーズ", r: "mayonēzu", m: "mayonnaise" }
    ]
  },
  "ミ": {
    romaji: "mi",
    hira: "み",
    origin: "三",
    originPart: "the whole kanji, strokes slanted",
    originMeaning: "three",
    mnemonic: "Three drops of milk falling at a slant from a jug. 'Mi-ruku!'",
    notes: [
      "Three short strokes, each slanting down to the right, written top to bottom.",
      "It's the kanji 三 (san, three) tilted. The kanji's lines are flat; ミ's are slanted.",
      "Don't confuse it with シ, whose strokes are two dots plus an upward sweep."
    ],
    lookalikes: ["シ", "ツ"],
    examples: [
      { w: "ミルク", r: "miruku", m: "milk (esp. for coffee)" },
      { w: "ミス", r: "misu", m: "mistake" },
      { w: "アルミ", r: "arumi", m: "aluminium (foil)" }
    ]
  },
  "ム": {
    romaji: "mu",
    hira: "む",
    origin: "牟",
    originPart: "the top (厶)",
    originMeaning: "moo of a cow; covet",
    mnemonic: "A cow's nose seen from the side, about to 'Moo!'",
    notes: [
      "Two strokes: a stroke that falls left and turns sharply right, then a short dot on the right.",
      "It's the kanji part 厶, the top of 牟, whose cow radical 牛 fits the 'moo' sound.",
      "ム vs マ: マ's top is a flat horizontal."
    ],
    lookalikes: ["マ", "ス"],
    examples: [
      { w: "ハム", r: "hamu", m: "ham" },
      { w: "ゲーム", r: "gēmu", m: "game, video game" },
      { w: "クリーム", r: "kurīmu", m: "cream" }
    ]
  },
  "メ": {
    romaji: "me",
    hira: "め",
    origin: "女",
    originPart: "the crossing strokes, simplified",
    originMeaning: "woman",
    mnemonic: "An X marking a spot on a map: 'Mark it here, mate!' Or two crossed chopsticks on the menu.",
    notes: [
      "Two strokes: a long stroke falling to the left, then a short one crossing it, falling to the right.",
      "メ vs ナ: ナ has a flat horizontal on top. メ is all diagonals.",
      "メ vs ヌ: ヌ starts with a horizontal that turns."
    ],
    lookalikes: ["ナ", "ヌ"],
    examples: [
      { w: "メニュー", r: "menyū", m: "menu" },
      { w: "メール", r: "mēru", m: "email" },
      { w: "カメラ", r: "kamera", m: "camera" }
    ]
  },
  "モ": {
    romaji: "mo",
    hira: "も",
    origin: "毛",
    originPart: "the whole kanji, simplified",
    originMeaning: "hair, fur",
    mnemonic: "A mop standing upright: the handle up top and the mop head curling along the floor. 'Mo(p)!'",
    notes: [
      "Three strokes: a short top horizontal, a longer horizontal, then a vertical from the top bar that curves to the right at the bottom.",
      "Hiragana も (from the same kanji) has its vertical poking up above the top bar and a curved hook; in モ the vertical starts at the top bar.",
      "Don't confuse it with キ, whose vertical runs straight through both bars."
    ],
    lookalikes: ["も", "キ", "テ"],
    examples: [
      { w: "モール", r: "mōru", m: "shopping mall" },
      { w: "メモ", r: "memo", m: "memo, note" },
      { w: "モデル", r: "moderu", m: "model" }
    ]
  },

  /* ---------- ya-row ---------- */
  "ヤ": {
    romaji: "ya",
    hira: "や",
    origin: "也",
    originPart: "the whole kanji, simplified",
    originMeaning: "to be (classical)",
    mnemonic: "A yak's horn and its long body, seen from the side. 'Yak!'",
    notes: [
      "Two strokes: a horizontal that rises and hooks down, then a long vertical crossing it.",
      "Hiragana や is very similar but has three strokes, with the extra dot on top.",
      "Small ャ combines with i-row kana: キャ (kya), シャ (sha)."
    ],
    lookalikes: ["や", "セ", "ャ"],
    examples: [
      { w: "タイヤ", r: "taiya", m: "tyre" },
      { w: "ダイヤ", r: "daiya", m: "(train) timetable; diamond" },
      { w: "ワイヤレス", r: "waiyaresu", m: "wireless" }
    ]
  },
  "ユ": {
    romaji: "yu",
    hira: "ゆ",
    origin: "由",
    originPart: "a simplified fragment of the outline",
    originMeaning: "reason, cause",
    mnemonic: "A U-boat periscope poking up from the sea. 'You there!'",
    notes: [
      "Two strokes: a stroke that runs right and turns down, then a long bottom horizontal.",
      "ユ vs コ: コ's top bar runs right across and closes the corner; in ユ the bottom bar sticks out past the vertical.",
      "Small ュ combines with i-row kana: シュ (shu), ニュ (nyu)."
    ],
    lookalikes: ["コ", "エ", "ュ"],
    examples: [
      { w: "ユニフォーム", r: "yunifōmu", m: "(sports) uniform, kit" },
      { w: "ユーロ", r: "yūro", m: "euro" },
      { w: "ユーモア", r: "yūmoa", m: "humour" }
    ]
  },
  "ヨ": {
    romaji: "yo",
    hira: "よ",
    origin: "與",
    originPart: "a simplified part (via its form 与)",
    originMeaning: "give; take part",
    mnemonic: "A yoga mat folded into three layers. 'Yo-ga!'",
    notes: [
      "Three strokes: a stroke that runs right and turns down, a short middle horizontal, then the bottom horizontal.",
      "It's コ with a bar across the middle. Don't confuse it with ヲ, which has a falling sweep instead of a vertical.",
      "Small ョ combines with i-row kana: ショ (sho), チョ (cho)."
    ],
    lookalikes: ["コ", "ヲ", "ョ"],
    examples: [
      { w: "ヨーグルト", r: "yōguruto", m: "yoghurt" },
      { w: "ヨガ", r: "yoga", m: "yoga" },
      { w: "ヨーロッパ", r: "Yōroppa", m: "Europe" }
    ]
  },

  /* ---------- ra-row ---------- */
  "ラ": {
    romaji: "ra",
    hira: "ら",
    origin: "良",
    originPart: "the top, simplified",
    originMeaning: "good",
    mnemonic: "A ramen bowl seen from the side: the lid on top and the noodles sloping down. 'Ra-men!'",
    notes: [
      "Two strokes: a short top horizontal, then a horizontal that turns and sweeps down to the left.",
      "ラ vs フ: ラ has the separate top bar. ラ vs ウ: ウ has a dot and a left post.",
      "Japanese r is a light tap, between English r, l and d."
    ],
    lookalikes: ["フ", "ウ", "テ"],
    examples: [
      { w: "ラーメン", r: "rāmen", m: "ramen" },
      { w: "ラジオ", r: "rajio", m: "radio" },
      { w: "ライス", r: "raisu", m: "rice (served on a plate, Western-style)" }
    ]
  },
  "リ": {
    romaji: "ri",
    hira: "り",
    origin: "利",
    originPart: "the 刂 (knife) on its right",
    originMeaning: "profit, benefit",
    mnemonic: "Two reeds standing by a river, the right one long and bending. 'Ree-ds.'",
    notes: [
      "Two strokes: a short vertical, then a long vertical that curves down to the left.",
      "Hiragana り comes from the same kanji. リ's strokes are straighter, and the right one is clearly longer.",
      "リ vs ソ: ソ's left stroke is a slanted tick, not a vertical."
    ],
    lookalikes: ["り", "ソ", "ル"],
    examples: [
      { w: "リモコン", r: "rimokon", m: "remote control" },
      { w: "リュック", r: "ryukku", m: "rucksack, backpack" },
      { w: "ゼリー", r: "zerī", m: "jelly" }
    ]
  },
  "ル": {
    romaji: "ru",
    hira: "る",
    origin: "流",
    originPart: "the bottom right, simplified",
    originMeaning: "flow, stream",
    mnemonic: "Two roots of a tree, the right one curling up as it hits a rock. 'Roo-ts.'",
    notes: [
      "Two strokes: a stroke falling to the lower left, then a vertical that kicks up sharply to the right at the bottom.",
      "ル vs レ: レ is just the right half of ル.",
      "ル ends a huge number of loanwords from English -l: ビール (beer), ホテル (hotel)."
    ],
    lookalikes: ["レ", "リ", "ハ"],
    examples: [
      { w: "ビール", r: "bīru", m: "beer" },
      { w: "ルール", r: "rūru", m: "rule" },
      { w: "ルーム", r: "rūmu", m: "room" }
    ]
  },
  "レ": {
    romaji: "re",
    hira: "れ",
    origin: "礼",
    originPart: "the right part (乚)",
    originMeaning: "bow, thanks",
    mnemonic: "A receipt being torn off the till: the strip comes down and flicks up at the end. 'Re-shīto!'",
    notes: [
      "One stroke: down, then a sharp turn up to the right.",
      "It's the right-hand part of ル on its own.",
      "Don't confuse it with hiragana し, which is a smooth curve with no sharp corner."
    ],
    lookalikes: ["ル", "し"],
    examples: [
      { w: "レシート", r: "reshīto", m: "receipt" },
      { w: "レジ", r: "reji", m: "checkout, till" },
      { w: "レストラン", r: "resutoran", m: "restaurant" }
    ]
  },
  "ロ": {
    romaji: "ro",
    hira: "ろ",
    origin: "呂",
    originPart: "the top 口",
    originMeaning: "spine; bath (風呂)",
    mnemonic: "A robot's square head. 'Ro-bot!'",
    notes: [
      "Three strokes: the left vertical, the top and right side in one stroke, then the bottom.",
      "Almost identical to the kanji 口 (kuchi, mouth). ロ is usually drawn a bit smaller.",
      "ロ vs コ: コ is open on the left."
    ],
    lookalikes: ["コ", "ヨ"],
    examples: [
      { w: "ロッカー", r: "rokkā", m: "locker (e.g. coin locker)" },
      { w: "ロビー", r: "robī", m: "lobby" },
      { w: "メロン", r: "meron", m: "melon" }
    ]
  },

  /* ---------- wa-row ---------- */
  "ワ": {
    romaji: "wa",
    hira: "わ",
    origin: "和",
    originPart: "the 口 on its right, simplified",
    originMeaning: "harmony; Japan",
    mnemonic: "A wine glass knocked over on its side, the bowl curving down. 'Wa! My wine!'",
    notes: [
      "Two strokes: a short vertical, then a horizontal that turns and sweeps down to the left.",
      "ワ vs ウ: ウ has an extra dot on top. ワ vs フ: フ has no left post. ワ vs ク: ク's first stroke slants.",
      "Before small ィ, ェ, ォ, the sound w- is usually written with ウ instead: ウィ (wi)."
    ],
    lookalikes: ["ウ", "フ", "ク", "ヮ"],
    examples: [
      { w: "ワイン", r: "wain", m: "wine" },
      { w: "ワイシャツ", r: "waishatsu", m: "dress shirt (white shirt)" },
      { w: "シャワー", r: "shawā", m: "shower" }
    ]
  },
  "ヲ": {
    romaji: "wo",
    hira: "を",
    origin: "乎",
    originPart: "the whole kanji, simplified",
    originMeaning: "question particle (classical)",
    mnemonic: "Two levels of a parking garage with a ramp sweeping down to the left. 'Whoa, steep!'",
    notes: [
      "Three strokes: two horizontals, the second turning down, then a long sweep down to the left.",
      "Romanised 'wo', but said 'o', just like オ. It's rare: modern katakana words use オ.",
      "You'll see it in telegram-style all-katakana text, old documents and for stylistic effect, as in ヲタク."
    ],
    lookalikes: ["ヨ", "ラ", "フ"],
    examples: [
      { w: "ヲタク", r: "wotaku", m: "otaku, geek (stylised spelling)" },
      { w: "ヲトメ", r: "wotome", m: "maiden (old-style spelling of otome)" },
      { w: "カネヲオクレ", r: "kane wo okure", m: "send money (classic telegram)" }
    ]
  },

  /* ---------- n ---------- */
  "ン": {
    romaji: "n",
    hira: "ん",
    origin: "",
    originPart: "uncertain; probably a scribe's mark for the n sound",
    originMeaning: "",
    mnemonic: "A nose with a single nostril breathing out: 'nnn'. The long stroke sweeps up like a hum rising.",
    notes: [
      "Two strokes: a short tick that's more horizontal, then a long stroke that sweeps UP from the lower left.",
      "ン vs ソ: ソ's long stroke falls DOWN from the top. Watch the direction and the angle of the tick.",
      "Its origin is uncertain. It probably began as a mark scribes used for nasal sounds; some trace it to kanji such as 尓 or 无."
    ],
    lookalikes: ["ソ", "シ", "ノ"],
    examples: [
      { w: "パン", r: "pan", m: "bread" },
      { w: "ペン", r: "pen", m: "pen" },
      { w: "レストラン", r: "resutoran", m: "restaurant" }
    ]
  },

  /* ---------- dakuten: g ---------- */
  "ガ": {
    romaji: "ga",
    hira: "が",
    base: "カ",
    mark: "dakuten",
    notes: [
      "Dakuten ('ten-ten') voices the consonant: カ (ka) → ガ (ga).",
      "The two dots go at the top right, clear of the hook."
    ],
    lookalikes: ["カ", "が"],
    examples: [
      { w: "ガム", r: "gamu", m: "chewing gum" },
      { w: "ガラス", r: "garasu", m: "glass (the material)" },
      { w: "ガイド", r: "gaido", m: "guide" }
    ]
  },
  "ギ": {
    romaji: "gi",
    hira: "ぎ",
    base: "キ",
    mark: "dakuten",
    notes: [
      "Dakuten voices キ (ki) into ギ (gi). The g is always hard, as in 'give'.",
      "Compared with hiragana ぎ, katakana ギ has no curved bottom stroke."
    ],
    lookalikes: ["キ", "ぎ"],
    examples: [
      { w: "ギター", r: "gitā", m: "guitar" },
      { w: "ギフト", r: "gifuto", m: "gift" },
      { w: "エネルギー", r: "enerugī", m: "energy" }
    ]
  },
  "グ": {
    romaji: "gu",
    hira: "ぐ",
    base: "ク",
    mark: "dakuten",
    notes: [
      "Dakuten voices ク (ku) into グ (gu).",
      "Often stands in for a final English g: ジョギング (jogingu), バッグ (baggu)."
    ],
    lookalikes: ["ク", "ゲ"],
    examples: [
      { w: "グラス", r: "gurasu", m: "(drinking) glass" },
      { w: "グループ", r: "gurūpu", m: "group" },
      { w: "バッグ", r: "baggu", m: "bag, handbag" }
    ]
  },
  "ゲ": {
    romaji: "ge",
    hira: "げ",
    base: "ケ",
    mark: "dakuten",
    notes: [
      "Dakuten voices ケ (ke) into ゲ (ge).",
      "Watch グ vs ゲ: the base shapes ク and ケ differ in whether the sweep is joined to the horizontal."
    ],
    lookalikes: ["ケ", "グ"],
    examples: [
      { w: "ゲーム", r: "gēmu", m: "game, video game" },
      { w: "ゲスト", r: "gesuto", m: "guest" },
      { w: "ゲート", r: "gēto", m: "gate (at an airport, station)" }
    ]
  },
  "ゴ": {
    romaji: "go",
    hira: "ご",
    base: "コ",
    mark: "dakuten",
    notes: [
      "Dakuten voices コ (ko) into ゴ (go).",
      "ゴミ (rubbish) is a native word, but it's very often written in katakana on bins and signs."
    ],
    lookalikes: ["コ", "ご"],
    examples: [
      { w: "ゴミ", r: "gomi", m: "rubbish, trash" },
      { w: "ゴルフ", r: "gorufu", m: "golf" },
      { w: "ゴム", r: "gomu", m: "rubber; elastic band" }
    ]
  },

  /* ---------- dakuten: z ---------- */
  "ザ": {
    romaji: "za",
    hira: "ざ",
    base: "サ",
    mark: "dakuten",
    notes: [
      "Dakuten voices サ (sa) into ザ (za).",
      "Fit the two dots in at the top right, beside サ's right vertical."
    ],
    lookalikes: ["サ", "ざ"],
    examples: [
      { w: "ピザ", r: "piza", m: "pizza" },
      { w: "デザート", r: "dezāto", m: "dessert" },
      { w: "デザイン", r: "dezain", m: "design" }
    ]
  },
  "ジ": {
    romaji: "ji",
    hira: "じ",
    base: "シ",
    mark: "dakuten",
    notes: [
      "Dakuten voices シ (shi) into ジ (ji). Romanised 'ji', not 'zi'.",
      "ジ and ツ's voiced form ヅ can look alike: in ジ the strokes still rise up from the bottom left like シ.",
      "With small vowels it writes loanword sounds: ジェ (je), as in ジェットコースター (roller coaster)."
    ],
    lookalikes: ["シ", "ヅ", "ヂ"],
    examples: [
      { w: "ジュース", r: "jūsu", m: "juice; soft drink" },
      { w: "レジ", r: "reji", m: "checkout, till" },
      { w: "ジム", r: "jimu", m: "gym" }
    ]
  },
  "ズ": {
    romaji: "zu",
    hira: "ず",
    base: "ス",
    mark: "dakuten",
    notes: [
      "Dakuten voices ス (su) into ズ (zu).",
      "ズ is the normal way to write 'zu'. ヅ sounds the same but is rare."
    ],
    lookalikes: ["ス", "ヅ", "ヌ"],
    examples: [
      { w: "チーズ", r: "chīzu", m: "cheese" },
      { w: "サイズ", r: "saizu", m: "size" },
      { w: "ズボン", r: "zubon", m: "trousers" }
    ]
  },
  "ゼ": {
    romaji: "ze",
    hira: "ぜ",
    base: "セ",
    mark: "dakuten",
    notes: [
      "Dakuten voices セ (se) into ゼ (ze).",
      "Hiragana ぜ has an extra vertical; katakana ゼ has only セ's two strokes plus the dots."
    ],
    lookalikes: ["セ", "ぜ"],
    examples: [
      { w: "ゼロ", r: "zero", m: "zero" },
      { w: "ゼリー", r: "zerī", m: "jelly" },
      { w: "プレゼント", r: "purezento", m: "present, gift" }
    ]
  },
  "ゾ": {
    romaji: "zo",
    hira: "ぞ",
    base: "ソ",
    mark: "dakuten",
    notes: [
      "Dakuten voices ソ (so) into ゾ (zo).",
      "Don't confuse it with ヅ (zu): ヅ has two dots across the top of ツ, ゾ has just ソ's single tick."
    ],
    lookalikes: ["ソ", "ヅ"],
    examples: [
      { w: "ゾーン", r: "zōn", m: "zone" },
      { w: "リゾート", r: "rizōto", m: "resort" },
      { w: "ゾンビ", r: "zonbi", m: "zombie" }
    ]
  },

  /* ---------- dakuten: d ---------- */
  "ダ": {
    romaji: "da",
    hira: "だ",
    base: "タ",
    mark: "dakuten",
    notes: [
      "Dakuten voices タ (ta) into ダ (da).",
      "Ending many loanwords from English -d or -der: サラダ (salad), カレンダー (calendar)."
    ],
    lookalikes: ["タ", "グ"],
    examples: [
      { w: "サラダ", r: "sarada", m: "salad" },
      { w: "ダンス", r: "dansu", m: "dance" },
      { w: "ダウンロード", r: "daunrōdo", m: "download" }
    ]
  },
  "ヂ": {
    romaji: "ji",
    hira: "ぢ",
    base: "チ",
    mark: "dakuten",
    notes: [
      "Dakuten on チ gives ヂ, said 'ji', exactly like ジ. It's rare: loanwords use ジ instead.",
      "You'll mainly see it in a few borrowed words and old-fashioned spellings such as ラヂオ (now ラジオ)."
    ],
    lookalikes: ["チ", "ジ"],
    examples: [
      { w: "チヂミ", r: "chijimi", m: "chijimi (Korean savoury pancake)" },
      { w: "ラヂオ", r: "rajio", m: "radio (old-fashioned spelling)" },
      { w: "ヂーゼル", r: "jīzeru", m: "diesel (old-fashioned spelling)" }
    ]
  },
  "ヅ": {
    romaji: "zu",
    hira: "づ",
    base: "ツ",
    mark: "dakuten",
    notes: [
      "Dakuten on ツ gives ヅ, said 'zu', exactly like ズ. It's rare: loanwords use ズ instead.",
      "It shows up mostly in native words written in katakana for effect, and in slang."
    ],
    lookalikes: ["ツ", "ズ", "ジ"],
    examples: [
      { w: "ヅラ", r: "zura", m: "wig (slang)" },
      { w: "ミカヅキ", r: "mikazuki", m: "crescent moon (often in names)" },
      { w: "ツヅク", r: "tsuzuku", m: "to be continued (end of a manga chapter)" }
    ]
  },
  "デ": {
    romaji: "de",
    hira: "で",
    base: "テ",
    mark: "dakuten",
    notes: [
      "Dakuten voices テ (te) into デ (de).",
      "With small ィ it makes 'di': ディナー (dinā, dinner)."
    ],
    lookalikes: ["テ", "ヂ"],
    examples: [
      { w: "デパート", r: "depāto", m: "department store" },
      { w: "デート", r: "dēto", m: "date (romantic)" },
      { w: "デジカメ", r: "dejikame", m: "digital camera" }
    ]
  },
  "ド": {
    romaji: "do",
    hira: "ど",
    base: "ト",
    mark: "dakuten",
    notes: [
      "Dakuten voices ト (to) into ド (do).",
      "Often stands in for a final English d: ベッド (bed), カード (card).",
      "With small ゥ it makes 'du': ヒンドゥー (Hindū)."
    ],
    lookalikes: ["ト", "ど"],
    examples: [
      { w: "ドア", r: "doa", m: "door" },
      { w: "ドラマ", r: "dorama", m: "TV drama" },
      { w: "ドル", r: "doru", m: "dollar" }
    ]
  },

  /* ---------- dakuten: b ---------- */
  "バ": {
    romaji: "ba",
    hira: "ば",
    base: "ハ",
    mark: "dakuten",
    notes: [
      "Dakuten voices ハ (ha) into バ (ba).",
      "バ vs パ: dots mean b, a small circle means p. Check closely in small print."
    ],
    lookalikes: ["ハ", "パ"],
    examples: [
      { w: "バス", r: "basu", m: "bus" },
      { w: "バナナ", r: "banana", m: "banana" },
      { w: "バイト", r: "baito", m: "part-time job" }
    ]
  },
  "ビ": {
    romaji: "bi",
    hira: "び",
    base: "ヒ",
    mark: "dakuten",
    notes: [
      "Dakuten voices ヒ (hi) into ビ (bi).",
      "English v often becomes b in katakana: ビデオ (video), テレビ (TV)."
    ],
    lookalikes: ["ヒ", "ピ"],
    examples: [
      { w: "ビール", r: "bīru", m: "beer" },
      { w: "テレビ", r: "terebi", m: "TV" },
      { w: "ビル", r: "biru", m: "building (office block)" }
    ]
  },
  "ブ": {
    romaji: "bu",
    hira: "ぶ",
    base: "フ",
    mark: "dakuten",
    notes: [
      "Dakuten voices フ (fu) into ブ (bu).",
      "ブ vs プ: dots mean b, a circle means p."
    ],
    lookalikes: ["フ", "プ"],
    examples: [
      { w: "テーブル", r: "tēburu", m: "table" },
      { w: "ブラシ", r: "burashi", m: "brush" },
      { w: "ブログ", r: "burogu", m: "blog" }
    ]
  },
  "ベ": {
    romaji: "be",
    hira: "べ",
    base: "ヘ",
    mark: "dakuten",
    notes: [
      "Dakuten voices ヘ (he) into ベ (be).",
      "Katakana ベ and hiragana べ are almost identical; the surrounding letters tell you which you're reading."
    ],
    lookalikes: ["べ", "ペ"],
    examples: [
      { w: "ベッド", r: "beddo", m: "bed" },
      { w: "ベンチ", r: "benchi", m: "bench" },
      { w: "ベル", r: "beru", m: "bell" }
    ]
  },
  "ボ": {
    romaji: "bo",
    hira: "ぼ",
    base: "ホ",
    mark: "dakuten",
    notes: [
      "Dakuten voices ホ (ho) into ボ (bo).",
      "The dots sit at the top right, beside the vertical."
    ],
    lookalikes: ["ホ", "ポ"],
    examples: [
      { w: "ボールペン", r: "bōrupen", m: "ballpoint pen" },
      { w: "ボタン", r: "botan", m: "button" },
      { w: "ボール", r: "bōru", m: "ball; bowl" }
    ]
  },

  /* ---------- handakuten: p ---------- */
  "パ": {
    romaji: "pa",
    hira: "ぱ",
    base: "ハ",
    mark: "handakuten",
    notes: [
      "Handakuten ('maru', circle) turns h into p: ハ (ha) → パ (pa). Only the h-row takes it.",
      "p-sounds are far more common in katakana than in native words."
    ],
    lookalikes: ["バ", "ハ"],
    examples: [
      { w: "パン", r: "pan", m: "bread" },
      { w: "パスポート", r: "pasupōto", m: "passport" },
      { w: "パソコン", r: "pasokon", m: "personal computer" }
    ]
  },
  "ピ": {
    romaji: "pi",
    hira: "ぴ",
    base: "ヒ",
    mark: "handakuten",
    notes: [
      "Handakuten ('maru') turns ヒ (hi) into ピ (pi).",
      "Also common in sound words: ピカピカ (sparkling), ピンポン (ding-dong)."
    ],
    lookalikes: ["ビ", "ヒ"],
    examples: [
      { w: "ピアノ", r: "piano", m: "piano" },
      { w: "ピザ", r: "piza", m: "pizza" },
      { w: "コピー", r: "kopī", m: "photocopy, copy" }
    ]
  },
  "プ": {
    romaji: "pu",
    hira: "ぷ",
    base: "フ",
    mark: "handakuten",
    notes: [
      "Handakuten ('maru') turns フ (fu) into プ (pu).",
      "Often stands in for a final English p: カップ (cup), ショップ (shop)."
    ],
    lookalikes: ["ブ", "フ"],
    examples: [
      { w: "プール", r: "pūru", m: "swimming pool" },
      { w: "スープ", r: "sūpu", m: "soup" },
      { w: "プリン", r: "purin", m: "custard pudding" }
    ]
  },
  "ペ": {
    romaji: "pe",
    hira: "ぺ",
    base: "ヘ",
    mark: "handakuten",
    notes: [
      "Handakuten ('maru') turns ヘ (he) into ペ (pe).",
      "Looks almost the same as hiragana ぺ."
    ],
    lookalikes: ["ぺ", "ベ"],
    examples: [
      { w: "ペン", r: "pen", m: "pen" },
      { w: "ページ", r: "pēji", m: "page" },
      { w: "ペット", r: "petto", m: "pet" }
    ]
  },
  "ポ": {
    romaji: "po",
    hira: "ぽ",
    base: "ホ",
    mark: "handakuten",
    notes: [
      "Handakuten ('maru') turns ホ (ho) into ポ (po).",
      "ポイント (points) is everywhere at shop tills: ポイントカード (points card)."
    ],
    lookalikes: ["ボ", "ホ"],
    examples: [
      { w: "ポスト", r: "posuto", m: "postbox" },
      { w: "ポイント", r: "pointo", m: "(loyalty) points; point" },
      { w: "ポケット", r: "poketto", m: "pocket" }
    ]
  },

  /* ---------- dakuten: v ---------- */
  "ヴ": {
    romaji: "vu",
    hira: "ゔ",
    base: "ウ",
    mark: "dakuten",
    notes: [
      "Dakuten on ウ gives ヴ, made to write the foreign v-sound. With small vowels: ヴァ (va), ヴィ (vi), ヴェ (ve), ヴォ (vo).",
      "It's optional: ヴァイオリン is usually written バイオリン, and many Japanese speakers just say it with a b."
    ],
    lookalikes: ["ウ", "ワ"],
    examples: [
      { w: "ヴァイオリン", r: "vaiorin", m: "violin (usually バイオリン)" },
      { w: "ヴィーガン", r: "vīgan", m: "vegan" },
      { w: "ヴェネツィア", r: "Venetsia", m: "Venice" }
    ]
  },

  /* ---------- small kana ---------- */
  "ァ": {
    romaji: "a (small)",
    hira: "ぁ",
    base: "ア",
    mark: "small",
    notes: [
      "Small ァ joins the kana before it into one loanword sound: フ+ァ = ファ (fa), ヴ+ァ = ヴァ (va).",
      "Size matters: ファン (fan) is two beats, フアン (fuan, anxiety) is three."
    ],
    lookalikes: ["ア", "マ"],
    examples: [
      { w: "ファン", r: "fan", m: "fan (supporter)" },
      { w: "ソファ", r: "sofa", m: "sofa" },
      { w: "ファイル", r: "fairu", m: "file, folder" }
    ]
  },
  "ィ": {
    romaji: "i (small)",
    hira: "ぃ",
    base: "イ",
    mark: "small",
    notes: [
      "Small ィ makes loanword sounds Japanese doesn't have natively: テ+ィ = ティ (ti), デ+ィ = ディ (di), ウ+ィ = ウィ (wi), フ+ィ = フィ (fi).",
      "Older spellings often avoid it: チーム (team), ビル (building)."
    ],
    lookalikes: ["イ"],
    examples: [
      { w: "パーティー", r: "pātī", m: "party" },
      { w: "ティッシュ", r: "tisshu", m: "tissue" },
      { w: "ディナー", r: "dinā", m: "dinner" }
    ]
  },
  "ゥ": {
    romaji: "u (small)",
    hira: "ぅ",
    base: "ウ",
    mark: "small",
    notes: [
      "Small ゥ makes 'tu' and 'du' sounds: ト+ゥ = トゥ (tu), ド+ゥ = ドゥ (du).",
      "It's the rarest of the small vowels; many words just use ツ or ズ instead."
    ],
    lookalikes: ["ウ", "ワ"],
    examples: [
      { w: "タトゥー", r: "tatū", m: "tattoo" },
      { w: "ヒンドゥー", r: "Hindū", m: "Hindu" },
      { w: "トゥクトゥク", r: "tukutuku", m: "tuk-tuk (auto rickshaw)" }
    ]
  },
  "ェ": {
    romaji: "e (small)",
    hira: "ぇ",
    base: "エ",
    mark: "small",
    notes: [
      "Small ェ makes loanword sounds: シ+ェ = シェ (she), チ+ェ = チェ (che), ジ+ェ = ジェ (je), フ+ェ = フェ (fe), ウ+ェ = ウェ (we).",
      "Keep it clearly smaller than エ, sitting low in the box."
    ],
    lookalikes: ["エ"],
    examples: [
      { w: "シェフ", r: "shefu", m: "chef" },
      { w: "チェック", r: "chekku", m: "check; checked pattern" },
      { w: "カフェ", r: "kafe", m: "café" }
    ]
  },
  "ォ": {
    romaji: "o (small)",
    hira: "ぉ",
    base: "オ",
    mark: "small",
    notes: [
      "Small ォ makes loanword sounds: フ+ォ = フォ (fo), ウ+ォ = ウォ (wo), ヴ+ォ = ヴォ (vo).",
      "フォーク (fōku) can mean a fork or folk music, depending on context."
    ],
    lookalikes: ["オ"],
    examples: [
      { w: "フォーク", r: "fōku", m: "fork" },
      { w: "ウォーター", r: "wōtā", m: "water (in drink names)" },
      { w: "カリフォルニア", r: "Kariforunia", m: "California" }
    ]
  },
  "ッ": {
    romaji: "tsu (small)",
    hira: "っ",
    base: "ツ",
    mark: "small",
    notes: [
      "Sokuon: small ッ makes a short pause that doubles the next consonant: ベッド (beddo), カップ (kappu).",
      "It's how katakana copies English short vowels before a hard consonant: チケット (chiketto, ticket).",
      "Write it smaller and lower than ツ, or ベッド turns into 'betsudo'."
    ],
    lookalikes: ["ツ", "シ"],
    examples: [
      { w: "ベッド", r: "beddo", m: "bed" },
      { w: "カップ", r: "kappu", m: "cup" },
      { w: "チケット", r: "chiketto", m: "ticket" }
    ]
  },
  "ャ": {
    romaji: "ya (small)",
    hira: "ゃ",
    base: "ヤ",
    mark: "small",
    notes: [
      "Yōon: small ャ merges with an i-row kana into one beat: キ+ャ = キャ (kya), シ+ャ = シャ (sha), ジ+ャ = ジャ (ja).",
      "Size matters: キャベツ (kyabetsu) would read 'kiyabetsu' with a full-size ヤ."
    ],
    lookalikes: ["ヤ", "や"],
    examples: [
      { w: "シャツ", r: "shatsu", m: "shirt, T-shirt" },
      { w: "ジャム", r: "jamu", m: "jam" },
      { w: "キャベツ", r: "kyabetsu", m: "cabbage" }
    ]
  },
  "ュ": {
    romaji: "yu (small)",
    hira: "ゅ",
    base: "ユ",
    mark: "small",
    notes: [
      "Yōon: small ュ merges with an i-row kana into one beat: シ+ュ = シュ (shu), ニ+ュ = ニュ (nyu), ジ+ュ = ジュ (ju).",
      "With テ and デ it makes 'tyu' and 'dyu' sounds: デュエット (dyuetto, duet)."
    ],
    lookalikes: ["ユ", "コ"],
    examples: [
      { w: "ジュース", r: "jūsu", m: "juice; soft drink" },
      { w: "メニュー", r: "menyū", m: "menu" },
      { w: "シュークリーム", r: "shūkurīmu", m: "cream puff" }
    ]
  },
  "ョ": {
    romaji: "yo (small)",
    hira: "ょ",
    base: "ヨ",
    mark: "small",
    notes: [
      "Yōon: small ョ merges with an i-row kana into one beat: シ+ョ = ショ (sho), チ+ョ = チョ (cho), ジ+ョ = ジョ (jo).",
      "Keep it small and low, or ショップ (shoppu) turns into 'shiyoppu'."
    ],
    lookalikes: ["ヨ", "コ"],
    examples: [
      { w: "ショッピング", r: "shoppingu", m: "shopping" },
      { w: "ジョギング", r: "jogingu", m: "jogging" },
      { w: "チョコレート", r: "chokorēto", m: "chocolate" }
    ]
  },
  "ヮ": {
    romaji: "wa (small)",
    hira: "ゎ",
    base: "ワ",
    mark: "small",
    notes: [
      "Rare and mostly historical: old spellings used クヮ (kwa) and グヮ (gwa), which merged into カ and ガ.",
      "Today you'll seldom see it, except in some spellings of dialect words and foreign names."
    ],
    lookalikes: ["ワ", "ゎ"],
    examples: [
      { w: "クヮシ", r: "kwashi (now kashi)", m: "sweets (old spelling)" },
      { w: "クヮジ", r: "kwaji (now kaji)", m: "fire, blaze (old spelling)" },
      { w: "グヮイコク", r: "gwaikoku (now gaikoku)", m: "foreign country (old spelling)" }
    ]
  },

  /* ---------- long-vowel mark ---------- */
  "ー": {
    romaji: "long vowel",
    mark: "long",
    notes: [
      "Chōonpu (長音符): ー lengthens the vowel before it: ラーメン (rāmen), コーヒー (kōhī). In romaji it becomes a macron.",
      "In vertical writing it's drawn as a vertical line. Don't confuse it with the kanji 一 (ichi, one) or a dash: ー only follows a kana.",
      "Hiragana normally lengthens with vowels instead (おかあさん, okāsan), though ー turns up in casual hiragana: すごーい!"
    ],
    lookalikes: [],
    examples: [
      { w: "ラーメン", r: "rāmen", m: "ramen" },
      { w: "コーヒー", r: "kōhī", m: "coffee" },
      { w: "ビール", r: "bīru", m: "beer" }
    ]
  },
  "ヰ": {
    romaji: "wi",
    hira: "ゐ",
    origin: "井",
    originPart: "the whole kanji, simplified",
    originMeaning: "well (for water)",
    mnemonic: "A well seen from above: the 井 frame squeezed into a little box. Long out of use, like an old well.",
    notes: [
      "Obsolete since the 1946 spelling reform, which replaced it with イ; it's said 'i' today.",
      "You'll still meet it on old-style labels, such as ウヰスキー (whisky) on some bottles."
    ],
    lookalikes: ["キ", "ヱ"],
    examples: [
      { w: "ウヰスキー", r: "uisukī (now ウイスキー)", m: "whisky (old-style spelling)" },
      { w: "ヰ", r: "wi (now イ i)", m: "the old kana itself" }
    ]
  },
  "ヱ": {
    romaji: "we",
    hira: "ゑ",
    origin: "恵",
    originPart: "a simplified fragment",
    originMeaning: "blessing, favour",
    mnemonic: "A table with a short leg in the middle, set for a guest who no longer visits.",
    notes: [
      "Obsolete since 1946, replaced by エ and said 'e' today.",
      "Kept for its old-fashioned feel: Yebisu beer (ヱビス) and the Evangelion films (ヱヴァンゲリヲン)."
    ],
    lookalikes: ["エ", "ヰ"],
    examples: [
      { w: "ヱビス", r: "Ebisu (Yebisu)", m: "Yebisu, a beer brand (old spelling)" },
      { w: "ヱヴァンゲリヲン", r: "Evangerion", m: "Evangelion (film titles)" }
    ]
  }
});
