/* Kaku — the first 80 kanji (JLPT N5): meanings, readings, parts, memory hooks, example words. */
window.NH = window.NH || {};

NH.KANJI = [
  /* ---------- numbers ---------- */
  {
    k: "一", meaning: "one", on: ["イチ", "イツ"], kun: ["ひと", "ひと.つ"], group: "numbers", strokes: 1, radical: "一",
    mnemonic: "One finger laid flat on the table: a single line for the number one.",
    notes: [
      "Native counting goes ひとつ, ふたつ, みっつ...; いち, に, さん is used with counters, prices and maths.",
      "一日 has two readings: いちにち (one day, all day) and ついたち (the 1st of the month). 一人 is ひとり.",
      "Before k, s, t or p sounds it often shortens to いっ: 一回 (いっかい), 一本 (いっぽん)."
    ],
    lookalikes: ["二", "三"],
    examples: [
      { w: "一つ", r: "ひとつ", m: "one (thing)" },
      { w: "一人", r: "ひとり", m: "one person, alone" },
      { w: "一日", r: "ついたち", m: "the 1st of the month" }
    ]
  },
  {
    k: "二", meaning: "two", on: ["ニ"], kun: ["ふた", "ふた.つ"], group: "numbers", strokes: 2, radical: "二",
    mnemonic: "Two chopsticks resting one above the other: the short one on top, the long one below.",
    notes: [
      "Two strokes: the top line is shorter than the bottom one.",
      "二人 is ふたり (two people) and 二日 is ふつか (the 2nd, or two days)."
    ],
    lookalikes: ["一", "三"],
    examples: [
      { w: "二つ", r: "ふたつ", m: "two (things)" },
      { w: "二人", r: "ふたり", m: "two people" },
      { w: "二月", r: "にがつ", m: "February" }
    ]
  },
  {
    k: "三", meaning: "three", on: ["サン"], kun: ["み", "み.つ", "みっ.つ"], group: "numbers", strokes: 3, radical: "一",
    mnemonic: "Three lines stacked like a short ladder: one more rung than 二.",
    notes: [
      "The middle line is the shortest and the bottom line the longest.",
      "三日 is みっか (the 3rd, or three days). Sound changes: 三百 (さんびゃく), 三千 (さんぜん)."
    ],
    lookalikes: ["二", "川"],
    examples: [
      { w: "三つ", r: "みっつ", m: "three (things)" },
      { w: "三月", r: "さんがつ", m: "March" },
      { w: "三日", r: "みっか", m: "the 3rd; three days" }
    ]
  },
  {
    k: "四", meaning: "four", on: ["シ"], kun: ["よ", "よ.つ", "よっ.つ", "よん"], group: "numbers", strokes: 5, radical: "囗",
    mnemonic: "A box with four walls and a pair of little legs tucked inside: four corners, four of everything.",
    notes: [
      "Usually said よん, because し sounds like 死 (death). し survives in 四月 (しがつ, April).",
      "四人 is よにん, 四時 is よじ and 四日 is よっか.",
      "The bottom line closing the box is the last of the five strokes."
    ],
    lookalikes: ["西"],
    examples: [
      { w: "四つ", r: "よっつ", m: "four (things)" },
      { w: "四月", r: "しがつ", m: "April" },
      { w: "四人", r: "よにん", m: "four people" }
    ]
  },
  {
    k: "五", meaning: "five", on: ["ゴ"], kun: ["いつ", "いつ.つ"], group: "numbers", strokes: 4, radical: "二",
    mnemonic: "A lid, a bent post and a floor: a little table you could fit five cups on.",
    notes: [
      "Four strokes; the long bottom line comes last.",
      "五日 is いつか (the 5th, or five days)."
    ],
    lookalikes: [],
    examples: [
      { w: "五つ", r: "いつつ", m: "five (things)" },
      { w: "五日", r: "いつか", m: "the 5th; five days" },
      { w: "五円", r: "ごえん", m: "five yen" }
    ]
  },
  {
    k: "六", meaning: "six", on: ["ロク"], kun: ["む", "む.つ", "むっ.つ"], group: "numbers", strokes: 4, radical: "八",
    mnemonic: "A little person in a pointed hat 亠 standing with legs apart 八, juggling six balls.",
    notes: [
      "Sound changes before some counters: 六百 (ろっぴゃく), 六本 (ろっぽん).",
      "六日 is むいか (the 6th, or six days)."
    ],
    lookalikes: [],
    examples: [
      { w: "六つ", r: "むっつ", m: "six (things)" },
      { w: "六月", r: "ろくがつ", m: "June" },
      { w: "六百", r: "ろっぴゃく", m: "six hundred" }
    ]
  },
  {
    k: "七", meaning: "seven", on: ["シチ"], kun: ["なな", "なな.つ", "なの"], group: "numbers", strokes: 2, radical: "一",
    mnemonic: "An upside-down 7 with a line through it: flip it over and you can almost see the seven.",
    notes: [
      "Read なな or しち. なな is often preferred where しち could be misheard as いち, such as on the phone.",
      "七日 is なのか (the 7th). 七月 (July) is usually しちがつ. 七夕 (たなばた) is the star festival on 7 July."
    ],
    lookalikes: ["十"],
    examples: [
      { w: "七つ", r: "ななつ", m: "seven (things)" },
      { w: "七月", r: "しちがつ", m: "July" },
      { w: "七日", r: "なのか", m: "the 7th; seven days" }
    ]
  },
  {
    k: "八", meaning: "eight", on: ["ハチ"], kun: ["や", "や.つ", "やっ.つ", "よう"], group: "numbers", strokes: 2, radical: "八",
    mnemonic: "Two strokes spreading apart like a mountain path widening downhill: eight lanes opening out.",
    notes: [
      "Sound changes before some counters: 八百 (はっぴゃく), 八本 (はっぽん).",
      "八日 is ようか (the 8th, or eight days).",
      "Thought lucky because it widens toward the bottom, like a future that opens out (すえひろがり)."
    ],
    lookalikes: ["人", "入"],
    examples: [
      { w: "八つ", r: "やっつ", m: "eight (things)" },
      { w: "八月", r: "はちがつ", m: "August" },
      { w: "八百", r: "はっぴゃく", m: "eight hundred" }
    ]
  },
  {
    k: "九", meaning: "nine", on: ["キュウ", "ク"], kun: ["ここの", "ここの.つ"], group: "numbers", strokes: 2, radical: "乙",
    mnemonic: "A runner leaning forward with a long kicking leg: nearly at the finish line, nine out of ten.",
    notes: [
      "Read きゅう or く. く is used in 九月 (くがつ, September) and 九時 (くじ, nine o'clock).",
      "九日 is ここのか (the 9th, or nine days)."
    ],
    lookalikes: [],
    examples: [
      { w: "九つ", r: "ここのつ", m: "nine (things)" },
      { w: "九月", r: "くがつ", m: "September" },
      { w: "九時", r: "くじ", m: "nine o'clock" }
    ]
  },
  {
    k: "十", meaning: "ten", on: ["ジュウ", "ジッ"], kun: ["とお", "と"], group: "numbers", strokes: 2, radical: "十",
    mnemonic: "Two hands crossed with all ten fingers out: a plus sign that adds up to ten.",
    notes: [
      "Before some counters it becomes じゅっ or じっ: 十本 (じゅっぽん), 十分 (じゅっぷん, ten minutes).",
      "十日 is とおか (the 10th) and 二十日 is はつか (the 20th). Age twenty, 二十歳, is はたち.",
      "Don't confuse it with 千, which adds a slanting stroke on top."
    ],
    lookalikes: ["千", "七"],
    examples: [
      { w: "十月", r: "じゅうがつ", m: "October" },
      { w: "十日", r: "とおか", m: "the 10th; ten days" },
      { w: "二十日", r: "はつか", m: "the 20th; twenty days" }
    ]
  },
  {
    k: "百", meaning: "hundred", on: ["ヒャク"], kun: [], group: "numbers", strokes: 6, radical: "白",
    mnemonic: "One 一 line drawn over 白 (white): one blank page, waiting for a hundred words.",
    notes: [
      "Sound changes: 三百 (さんびゃく), 六百 (ろっぴゃく), 八百 (はっぴゃく).",
      "It is 白 with 一 on top. 百円ショップ, the 100-yen shop, is a great place to spot it."
    ],
    lookalikes: ["白"],
    examples: [
      { w: "百", r: "ひゃく", m: "one hundred" },
      { w: "三百", r: "さんびゃく", m: "three hundred" },
      { w: "百円ショップ", r: "ひゃくえんショップ", m: "100-yen shop" }
    ]
  },
  {
    k: "千", meaning: "thousand", on: ["セン"], kun: ["ち"], group: "numbers", strokes: 3, radical: "十",
    mnemonic: "Ten 十 with a little hat tilted on top: ten has grown up into a thousand.",
    notes: [
      "Sound changes: 三千 (さんぜん), 八千 (はっせん).",
      "The 1,000-yen note (千円札) is the smallest banknote; most ticket and vending machines take it.",
      "Compare 十 (no hat) and 午 (two horizontal lines)."
    ],
    lookalikes: ["十", "午"],
    examples: [
      { w: "千", r: "せん", m: "one thousand" },
      { w: "三千", r: "さんぜん", m: "three thousand" },
      { w: "千円", r: "せんえん", m: "1,000 yen" }
    ]
  },
  {
    k: "万", meaning: "ten thousand", on: ["マン", "バン"], kun: [], group: "numbers", strokes: 3, radical: "一",
    mnemonic: "A long flag pole with a banner hooked on it: wave it when the bill hits ten thousand yen.",
    notes: [
      "Japanese counts big numbers in units of 万 (10,000): 10万 is 100,000 and 100万 is a million.",
      "一万円 (10,000 yen) is the largest banknote. ばん appears in 万歳 (ばんざい, hooray)."
    ],
    lookalikes: [],
    examples: [
      { w: "一万", r: "いちまん", m: "ten thousand" },
      { w: "一万円", r: "いちまんえん", m: "10,000 yen" },
      { w: "百万", r: "ひゃくまん", m: "one million" }
    ]
  },
  {
    k: "円", meaning: "yen, circle", on: ["エン"], kun: ["まる.い"], group: "numbers", strokes: 4, radical: "冂",
    mnemonic: "A cash register drawer, open at the bottom, with a divider inside where the yen coins go.",
    notes: [
      "Japan's currency: prices are written 500円 and said ごひゃくえん. The English 'yen' is an old spelling; the reading is えん.",
      "It also means circle. 円い (まるい, round) exists, but 丸い is more common."
    ],
    lookalikes: [],
    examples: [
      { w: "円", r: "えん", m: "yen" },
      { w: "五百円", r: "ごひゃくえん", m: "500 yen" },
      { w: "円い", r: "まるい", m: "round" }
    ]
  },

  /* ---------- time ---------- */
  {
    k: "日", meaning: "sun, day", on: ["ニチ", "ジツ"], kun: ["ひ", "か"], group: "time", strokes: 4, radical: "日",
    mnemonic: "A window with the sun shining through it, a line across the middle: the sun marks each day.",
    notes: [
      "ニチ in 日本 and 毎日; ジツ in 休日 (holiday) and 本日 (today, formal).",
      "Dates use か: 三日 (みっか), 十日 (とおか); but 一日 is ついたち and 二十日 is はつか.",
      "Days of the week end in 曜日 (ようび): 日曜日 is Sunday."
    ],
    lookalikes: ["白", "月"],
    examples: [
      { w: "日本", r: "にほん", m: "Japan" },
      { w: "今日", r: "きょう", m: "today" },
      { w: "毎日", r: "まいにち", m: "every day" }
    ]
  },
  {
    k: "月", meaning: "moon, month", on: ["ゲツ", "ガツ"], kun: ["つき"], group: "time", strokes: 4, radical: "月",
    mnemonic: "A crescent moon in a tall frame, with two clouds drifting across it.",
    notes: [
      "Month names are number + がつ: 一月 (いちがつ). A count of months uses げつ: 一か月 (いっかげつ).",
      "月曜日 (げつようび) is Monday.",
      "Unlike 日, 月 has two inner lines and its left leg sweeps out."
    ],
    lookalikes: ["日"],
    examples: [
      { w: "月", r: "つき", m: "moon" },
      { w: "今月", r: "こんげつ", m: "this month" },
      { w: "毎月", r: "まいつき", m: "every month" }
    ]
  },
  {
    k: "火", meaning: "fire", on: ["カ"], kun: ["ひ", "ほ"], group: "time", strokes: 4, radical: "火",
    mnemonic: "A campfire: two sparks jump off either side while the flame leaps up the middle.",
    notes: [
      "火曜日 (かようび) is Tuesday.",
      "ひ is fire; it becomes び in 花火 (はなび, fireworks).",
      "Stroke order: the two short side strokes first, then the long left and right sweeps."
    ],
    lookalikes: [],
    examples: [
      { w: "火", r: "ひ", m: "fire" },
      { w: "火山", r: "かざん", m: "volcano" },
      { w: "火よう日", r: "かようび", m: "Tuesday (曜 in kana)" }
    ]
  },
  {
    k: "水", meaning: "water", on: ["スイ"], kun: ["みず"], group: "time", strokes: 4, radical: "水",
    mnemonic: "A stream down the middle with splashes flying off to both sides.",
    notes: [
      "水曜日 (すいようび) is Wednesday.",
      "Tap water is safe to drink across Japan, and restaurants usually bring free お水 or お茶.",
      "Start with the central hooked vertical."
    ],
    lookalikes: [],
    examples: [
      { w: "水", r: "みず", m: "water" },
      { w: "雨水", r: "あまみず", m: "rainwater" },
      { w: "水中", r: "すいちゅう", m: "underwater" }
    ]
  },
  {
    k: "木", meaning: "tree, wood", on: ["ボク", "モク"], kun: ["き", "こ"], group: "time", strokes: 4, radical: "木",
    mnemonic: "A tree: a trunk, one branch stretched across, and roots spreading at the bottom.",
    notes: [
      "木曜日 (もくようび) is Thursday.",
      "As a radical on the left (きへん) it is narrower and its last stroke becomes a dot, as in 校."
    ],
    lookalikes: ["本", "来"],
    examples: [
      { w: "木", r: "き", m: "tree" },
      { w: "大木", r: "たいぼく", m: "big tree" },
      { w: "木の下", r: "きのした", m: "under the tree" }
    ]
  },
  {
    k: "金", meaning: "gold, money", on: ["キン", "コン"], kun: ["かね", "かな"], group: "time", strokes: 8, radical: "金",
    mnemonic: "A roof over a pile of earth with two gold nuggets glinting in it: a gold mine.",
    notes: [
      "金曜日 (きんようび) is Friday.",
      "かね is money, usually said politely as お金 (おかね); きん is gold."
    ],
    lookalikes: [],
    examples: [
      { w: "お金", r: "おかね", m: "money" },
      { w: "金", r: "きん", m: "gold" },
      { w: "年金", r: "ねんきん", m: "pension" }
    ]
  },
  {
    k: "土", meaning: "earth, soil", on: ["ド", "ト"], kun: ["つち"], group: "time", strokes: 3, radical: "土",
    mnemonic: "A sprout pushing up out of the wide flat ground.",
    notes: [
      "土曜日 (どようび) is Saturday, and 土日 (どにち) means the weekend.",
      "Not 士 (samurai, gentleman): 土 has the longer bottom line, 士 the longer top line."
    ],
    lookalikes: [],
    examples: [
      { w: "土", r: "つち", m: "soil, earth" },
      { w: "土日", r: "どにち", m: "Saturday and Sunday" },
      { w: "土木", r: "どぼく", m: "civil engineering" }
    ]
  },
  {
    k: "年", meaning: "year", on: ["ネン"], kun: ["とし"], group: "time", strokes: 6, radical: "干",
    mnemonic: "A farmer with a hat on, carrying a pole 干 of rice: the harvest that comes once a year.",
    notes: [
      "ねん for years: 2026年. 今年 (ことし, this year) is an irregular reading.",
      "Japan also counts years by era: 2026 is 令和8年 (れいわはちねん).",
      "Don't confuse it with 午, which has no vertical leg on the left."
    ],
    lookalikes: ["午"],
    examples: [
      { w: "今年", r: "ことし", m: "this year" },
      { w: "毎年", r: "まいとし", m: "every year" },
      { w: "一年生", r: "いちねんせい", m: "first-year student" }
    ]
  },
  {
    k: "時", meaning: "time, hour", on: ["ジ"], kun: ["とき"], group: "time", strokes: 10, radical: "日",
    mnemonic: "The sun 日 beside a temple 寺: the temple bell rings out the hours of the day.",
    notes: [
      "Clock time: 三時 (さんじ, 3 o'clock). Watch 四時 (よじ), 七時 (しちじ) and 九時 (くじ).",
      "時間 (じかん) is time or hours: 二時間 (two hours). とき means 'when': 子どもの時."
    ],
    lookalikes: [],
    examples: [
      { w: "時間", r: "じかん", m: "time; hours" },
      { w: "何時", r: "なんじ", m: "what time" },
      { w: "一時", r: "いちじ", m: "one o'clock" }
    ]
  },
  {
    k: "午", meaning: "noon", on: ["ゴ"], kun: [], group: "time", strokes: 4, radical: "十",
    mnemonic: "A sundial post standing straight up at noon, casting no shadow at all.",
    notes: [
      "Almost always in 午前 (a.m.) and 午後 (p.m.), which go before the time: 午後三時 is 3 p.m.",
      "Not 牛 (cow), whose vertical pokes through the top, and not 千. 午 is also the horse of the zodiac."
    ],
    lookalikes: ["年", "千"],
    examples: [
      { w: "午前", r: "ごぜん", m: "morning, a.m." },
      { w: "午後", r: "ごご", m: "afternoon, p.m." },
      { w: "午前中", r: "ごぜんちゅう", m: "all morning" }
    ]
  },
  {
    k: "前", meaning: "before, in front", on: ["ゼン"], kun: ["まえ"], group: "time", strokes: 9, radical: "刂",
    mnemonic: "Two horns on top, a moon and a knife 刂 below: the bull out in front, before everyone else.",
    notes: [
      "まえ means in front or before: 駅の前 (in front of the station), 三年前 (three years ago).",
      "ぜん in compounds like 午前 (a.m.). 名前 (なまえ) means name."
    ],
    lookalikes: [],
    examples: [
      { w: "前", r: "まえ", m: "front; before" },
      { w: "午前", r: "ごぜん", m: "morning, a.m." },
      { w: "名前", r: "なまえ", m: "name" }
    ]
  },
  {
    k: "後", meaning: "after, behind", on: ["ゴ", "コウ"], kun: ["のち", "うし.ろ", "あと", "おく.れる"], group: "time", strokes: 9, radical: "彳",
    mnemonic: "Someone trudging along the road 彳 with a heavy pack, always lagging behind.",
    notes: [
      "Three readings to know first: うしろ (behind), あと (after, later), ご in 午後 (p.m.).",
      "後で (あとで) means later. The left side is 彳 (going), not 亻 (person)."
    ],
    lookalikes: [],
    examples: [
      { w: "後ろ", r: "うしろ", m: "behind, the back" },
      { w: "午後", r: "ごご", m: "afternoon, p.m." },
      { w: "後で", r: "あとで", m: "later" }
    ]
  },
  {
    k: "今", meaning: "now", on: ["コン", "キン"], kun: ["いま"], group: "time", strokes: 4, radical: "人",
    mnemonic: "A roof slammed down over a ticking clock hand: this moment, right now.",
    notes: [
      "今日 (きょう), 今年 (ことし) and 今朝 (けさ) are irregular readings.",
      "こん in 今月 (this month), 今週 (this week) and 今晩 (こんばん, tonight)."
    ],
    lookalikes: [],
    examples: [
      { w: "今", r: "いま", m: "now" },
      { w: "今日", r: "きょう", m: "today" },
      { w: "今年", r: "ことし", m: "this year" }
    ]
  },
  {
    k: "毎", meaning: "every", on: ["マイ"], kun: [], group: "time", strokes: 6, radical: "毋",
    mnemonic: "A mother 母 in a hat, heading out the door the same way every single morning.",
    notes: [
      "Goes before time words: 毎日 (every day), 毎朝 (まいあさ), 毎月 (まいつき), 毎年 (まいとし or まいねん).",
      "Unlike 母, 毎 has a hat on top and its two dots are joined into one line."
    ],
    lookalikes: ["母"],
    examples: [
      { w: "毎日", r: "まいにち", m: "every day" },
      { w: "毎年", r: "まいとし", m: "every year" },
      { w: "毎月", r: "まいつき", m: "every month" }
    ]
  },
  {
    k: "半", meaning: "half", on: ["ハン"], kun: ["なか.ば"], group: "time", strokes: 5, radical: "十",
    mnemonic: "A cake with two crumbs on top, sliced straight down the middle into two halves.",
    notes: [
      "After a time it means half past: 三時半 (さんじはん) is 3:30. 半分 (はんぶん) is half.",
      "Stroke order: the two top dots, the two horizontals, then the long vertical last."
    ],
    lookalikes: [],
    examples: [
      { w: "三時半", r: "さんじはん", m: "half past three" },
      { w: "半年", r: "はんとし", m: "half a year" },
      { w: "半日", r: "はんにち", m: "half a day" }
    ]
  },
  {
    k: "間", meaning: "interval, between", on: ["カン", "ケン"], kun: ["あいだ", "ま"], group: "time", strokes: 12, radical: "門",
    mnemonic: "Sunlight 日 shining through the gap between the doors of a gate 門.",
    notes: [
      "あいだ means between or during; ま is a space or pause.",
      "かん in 時間 (time) and 一週間 (one week); ケン becomes げん in 人間 (にんげん, human).",
      "Don't confuse it with 聞 (hear), which has an ear 耳 inside the gate."
    ],
    lookalikes: ["聞"],
    examples: [
      { w: "時間", r: "じかん", m: "time; hours" },
      { w: "間", r: "あいだ", m: "between; during" },
      { w: "人間", r: "にんげん", m: "human being" }
    ]
  },

  /* ---------- people ---------- */
  {
    k: "人", meaning: "person", on: ["ジン", "ニン"], kun: ["ひと"], group: "people", strokes: 2, radical: "人",
    mnemonic: "A person striding along on two legs, seen from the side.",
    notes: [
      "じん for nationality: 日本人, アメリカ人. にん for counting: 三人 (さんにん). But 一人 is ひとり and 二人 ふたり.",
      "Not 入 (enter): in 人 the left stroke starts higher; in 入 the right stroke does."
    ],
    lookalikes: ["入", "八"],
    examples: [
      { w: "人", r: "ひと", m: "person" },
      { w: "一人", r: "ひとり", m: "one person, alone" },
      { w: "日本人", r: "にほんじん", m: "Japanese person" }
    ]
  },
  {
    k: "子", meaning: "child", on: ["シ", "ス"], kun: ["こ"], group: "people", strokes: 3, radical: "子",
    mnemonic: "A baby wrapped up tight, arms stretched out wide for a hug.",
    notes: [
      "子ども (こども) means child; it is also written 子供.",
      "Three strokes: the hooked top, the long vertical with a hook, then the horizontal arms."
    ],
    lookalikes: [],
    examples: [
      { w: "子ども", r: "こども", m: "child" },
      { w: "女の子", r: "おんなのこ", m: "girl" },
      { w: "男の子", r: "おとこのこ", m: "boy" }
    ]
  },
  {
    k: "女", meaning: "woman", on: ["ジョ", "ニョ"], kun: ["おんな", "め"], group: "people", strokes: 3, radical: "女",
    mnemonic: "A woman kneeling gracefully, legs folded under her, arms crossed in front.",
    notes: [
      "女の人 (おんなのひと) is the polite everyday word for woman.",
      "Toilets and onsen are marked 女 (women) and 男 (men); the 女 side is often red."
    ],
    lookalikes: [],
    examples: [
      { w: "女の人", r: "おんなのひと", m: "woman" },
      { w: "女の子", r: "おんなのこ", m: "girl" },
      { w: "女子", r: "じょし", m: "girls, women" }
    ]
  },
  {
    k: "男", meaning: "man", on: ["ダン", "ナン"], kun: ["おとこ"], group: "people", strokes: 7, radical: "田",
    mnemonic: "A rice field 田 over power 力: the one putting his strength into the field.",
    notes: [
      "On toilet and onsen signs, 男 is for men, often in blue.",
      "ナン in 長男 (ちょうなん, eldest son); だん in 男子 (boys, men)."
    ],
    lookalikes: [],
    examples: [
      { w: "男の人", r: "おとこのひと", m: "man" },
      { w: "男の子", r: "おとこのこ", m: "boy" },
      { w: "男子", r: "だんし", m: "boys, men" }
    ]
  },
  {
    k: "父", meaning: "father", on: ["フ"], kun: ["ちち"], group: "people", strokes: 4, radical: "父",
    mnemonic: "Dad's bushy eyebrows over a big crossed X: he's crossing his arms and saying no.",
    notes: [
      "Your own father, talking to others, is 父 (ちち). Someone else's, or yours when you address him, is お父さん (おとうさん)."
    ],
    lookalikes: [],
    examples: [
      { w: "父", r: "ちち", m: "(my) father" },
      { w: "お父さん", r: "おとうさん", m: "father, dad" },
      { w: "父母", r: "ふぼ", m: "father and mother" }
    ]
  },
  {
    k: "母", meaning: "mother", on: ["ボ"], kun: ["はは"], group: "people", strokes: 5, radical: "毋",
    mnemonic: "A mother holding her arms around two little ones, the two dots, keeping them safe inside.",
    notes: [
      "Your own mother, talking to others, is 母 (はは). Someone else's, or yours when you address her, is お母さん (おかあさん).",
      "Two separate dots inside; 毎 joins them into one line and adds a hat."
    ],
    lookalikes: ["毎"],
    examples: [
      { w: "母", r: "はは", m: "(my) mother" },
      { w: "お母さん", r: "おかあさん", m: "mother, mum" },
      { w: "母国", r: "ぼこく", m: "home country" }
    ]
  },
  {
    k: "友", meaning: "friend", on: ["ユウ"], kun: ["とも"], group: "people", strokes: 4, radical: "又",
    mnemonic: "Two hands, 𠂇 and 又, reaching out and clasping each other: friends.",
    notes: [
      "友だち (ともだち) is the everyday word for friend; 友人 (ゆうじん) is more formal.",
      "Stroke order like 左: the horizontal first, then the slanting stroke."
    ],
    lookalikes: ["右"],
    examples: [
      { w: "友だち", r: "ともだち", m: "friend" },
      { w: "友人", r: "ゆうじん", m: "friend (formal)" },
      { w: "学友", r: "がくゆう", m: "schoolmate" }
    ]
  },
  {
    k: "先", meaning: "ahead, previous", on: ["セン"], kun: ["さき"], group: "people", strokes: 6, radical: "儿",
    mnemonic: "A sprout on top of a pair of running legs 儿: the one who sprinted on ahead.",
    notes: [
      "先生 (せんせい) is used for teachers, doctors and other experts, also as a title: 田中先生.",
      "先月 (last month), 先週 (last week). さき is ahead or the tip; お先に (おさきに) means 'after you' or 'excuse me for going first'."
    ],
    lookalikes: [],
    examples: [
      { w: "先生", r: "せんせい", m: "teacher, doctor" },
      { w: "先月", r: "せんげつ", m: "last month" },
      { w: "先", r: "さき", m: "ahead, the tip" }
    ]
  },
  {
    k: "生", meaning: "life, birth", on: ["セイ", "ショウ"], kun: ["い.きる", "う.まれる", "う.む", "なま"], group: "people", strokes: 5, radical: "生",
    mnemonic: "A green shoot growing up out of the ground 土, leaves sprouting: new life being born.",
    notes: [
      "One of the kanji with the most readings, so learn it in words: 学生 (がくせい), 一生 (いっしょう), 生まれる (うまれる).",
      "なま means raw or live: 生ビール (なまビール, draft beer) is on every izakaya menu."
    ],
    lookalikes: [],
    examples: [
      { w: "先生", r: "せんせい", m: "teacher" },
      { w: "学生", r: "がくせい", m: "student" },
      { w: "生まれる", r: "うまれる", m: "to be born" }
    ]
  },
  {
    k: "名", meaning: "name", on: ["メイ", "ミョウ"], kun: ["な"], group: "people", strokes: 6, radical: "口",
    mnemonic: "In the dark of evening 夕, you can't see faces, so you open your mouth 口 and call out names.",
    notes: [
      "名前 (なまえ) is name; お名前は? politely asks someone's name.",
      "めい in 名人 (expert) and 有名 (ゆうめい, famous); みょう in 名字 (みょうじ, family name)."
    ],
    lookalikes: ["外"],
    examples: [
      { w: "名前", r: "なまえ", m: "name" },
      { w: "名人", r: "めいじん", m: "master, expert" },
      { w: "名月", r: "めいげつ", m: "harvest moon" }
    ]
  },

  /* ---------- places ---------- */
  {
    k: "上", meaning: "up, above", on: ["ジョウ", "ショウ"], kun: ["うえ", "かみ", "あ.がる", "のぼ.る"], group: "places", strokes: 3, radical: "一",
    mnemonic: "A flag 卜 planted on top of the ground line, pointing up.",
    notes: [
      "うえ means above or on: 机の上 (on the desk). 上手 (じょうず, skilful) is a common word.",
      "On train boards, 上り (のぼり) runs toward Tokyo or the main terminus and 下り (くだり) away from it."
    ],
    lookalikes: ["下", "土"],
    examples: [
      { w: "上", r: "うえ", m: "above, on top" },
      { w: "年上", r: "としうえ", m: "older (person)" },
      { w: "上がる", r: "あがる", m: "to go up, rise" }
    ]
  },
  {
    k: "下", meaning: "down, below", on: ["カ", "ゲ"], kun: ["した", "さ.がる", "お.りる", "くだ.さる"], group: "places", strokes: 3, radical: "一",
    mnemonic: "A line with a plumb weight 卜 hanging down beneath it: everything below.",
    notes: [
      "した is below. 下さい (ください, please) is often written in kana.",
      "下りる (おりる) is to get off a train; 地下鉄 (ちかてつ) is the subway. 下手 (へた) means unskilled."
    ],
    lookalikes: ["上"],
    examples: [
      { w: "下", r: "した", m: "below, under" },
      { w: "下さい", r: "ください", m: "please (give me)" },
      { w: "下車", r: "げしゃ", m: "getting off (a train)" }
    ]
  },
  {
    k: "中", meaning: "middle, inside", on: ["チュウ"], kun: ["なか"], group: "places", strokes: 4, radical: "丨",
    mnemonic: "An arrow shot straight through the middle of a box 口: dead centre.",
    notes: [
      "なか is inside; ちゅう in compounds, and じゅう for 'throughout': 一日中 (all day).",
      "Draw the box first and the vertical straight through it last. 中国 (ちゅうごく) is China."
    ],
    lookalikes: [],
    examples: [
      { w: "中", r: "なか", m: "inside, middle" },
      { w: "中国", r: "ちゅうごく", m: "China" },
      { w: "中学校", r: "ちゅうがっこう", m: "junior high school" }
    ]
  },
  {
    k: "左", meaning: "left", on: ["サ"], kun: ["ひだり"], group: "places", strokes: 5, radical: "工",
    mnemonic: "A left hand holding a carpenter's tool 工: the helper hand that steadies the work.",
    notes: [
      "Stroke order: 左 starts with the horizontal 一, then the slant ノ; 右 is the other way round.",
      "The bottom part is 工 (craft), not 口. Cars in Japan drive on the left."
    ],
    lookalikes: ["右", "友"],
    examples: [
      { w: "左", r: "ひだり", m: "left" },
      { w: "左右", r: "さゆう", m: "left and right" },
      { w: "左上", r: "ひだりうえ", m: "upper left" }
    ]
  },
  {
    k: "右", meaning: "right", on: ["ウ", "ユウ"], kun: ["みぎ"], group: "places", strokes: 5, radical: "口",
    mnemonic: "A right hand bringing food to the mouth 口: the hand you eat with.",
    notes: [
      "Stroke order: 右 starts with the slant ノ, then the horizontal 一; 左 starts with 一.",
      "The bottom part is 口 (mouth), unlike 左's 工. 右側 (みぎがわ) is the right side."
    ],
    lookalikes: ["左"],
    examples: [
      { w: "右", r: "みぎ", m: "right" },
      { w: "右上", r: "みぎうえ", m: "upper right" },
      { w: "左右", r: "さゆう", m: "left and right" }
    ]
  },
  {
    k: "外", meaning: "outside", on: ["ガイ", "ゲ"], kun: ["そと", "ほか", "はず.す"], group: "places", strokes: 5, radical: "夕",
    mnemonic: "Evening 夕 falls and a fortune-teller's stick 卜 points out the door: time to step outside.",
    notes: [
      "そと is outside; がい in 外国 (foreign country) and 外国人 (foreigner).",
      "At airport immigration, look for the 外国人 (foreign passports) lanes."
    ],
    lookalikes: ["名"],
    examples: [
      { w: "外", r: "そと", m: "outside" },
      { w: "外国", r: "がいこく", m: "foreign country" },
      { w: "外国人", r: "がいこくじん", m: "foreigner" }
    ]
  },
  {
    k: "東", meaning: "east", on: ["トウ"], kun: ["ひがし"], group: "places", strokes: 8, radical: "木",
    mnemonic: "The sun 日 rising behind a tree 木: you are looking east.",
    notes: [
      "Station exits are named by direction: 東口 (ひがしぐち) is the east exit.",
      "とう in compounds: 東京 (Tokyo, 'eastern capital') and 東北 (the northeast region)."
    ],
    lookalikes: ["車", "来"],
    examples: [
      { w: "東", r: "ひがし", m: "east" },
      { w: "東北", r: "とうほく", m: "Tōhoku, the northeast" },
      { w: "東西", r: "とうざい", m: "east and west" }
    ]
  },
  {
    k: "西", meaning: "west", on: ["セイ", "サイ"], kun: ["にし"], group: "places", strokes: 6, radical: "襾",
    mnemonic: "A bird settling into its nest in a box as the sun goes down in the west.",
    notes: [
      "西口 (にしぐち) is the west exit.",
      "さい in 関西 (かんさい, the Osaka-Kyoto region); ざい in 東西 (とうざい, east and west)."
    ],
    lookalikes: ["四"],
    examples: [
      { w: "西", r: "にし", m: "west" },
      { w: "東西", r: "とうざい", m: "east and west" },
      { w: "西日", r: "にしび", m: "the afternoon sun" }
    ]
  },
  {
    k: "南", meaning: "south", on: ["ナン"], kun: ["みなみ"], group: "places", strokes: 9, radical: "十",
    mnemonic: "A tent with a cross 十 on top, pitched to catch the warm wind from the south.",
    notes: [
      "南口 (みなみぐち) is the south exit.",
      "なん in compounds: 南米 (なんべい, South America), 東南アジア (Southeast Asia)."
    ],
    lookalikes: [],
    examples: [
      { w: "南", r: "みなみ", m: "south" },
      { w: "南国", r: "なんごく", m: "southern country, the tropics" },
      { w: "東南アジア", r: "とうなんアジア", m: "Southeast Asia" }
    ]
  },
  {
    k: "北", meaning: "north", on: ["ホク"], kun: ["きた"], group: "places", strokes: 5, radical: "匕",
    mnemonic: "Two people sitting back to back, turning away from the cold north wind.",
    notes: [
      "北口 (きたぐち) is the north exit.",
      "ほく in 東北 (とうほく) and 南北 (なんぼく); ほっ in 北海道 (ほっかいどう)."
    ],
    lookalikes: [],
    examples: [
      { w: "北", r: "きた", m: "north" },
      { w: "南北", r: "なんぼく", m: "north and south" },
      { w: "東北", r: "とうほく", m: "Tōhoku, the northeast" }
    ]
  },

  /* ---------- nature ---------- */
  {
    k: "山", meaning: "mountain", on: ["サン"], kun: ["やま"], group: "nature", strokes: 3, radical: "山",
    mnemonic: "Three peaks in a row, the tallest in the middle: a mountain range.",
    notes: [
      "さん after a mountain's name: 富士山 (ふじさん). It is not the honorific さん.",
      "Three strokes: the middle vertical, then the left side with the base, then the right side."
    ],
    lookalikes: ["出"],
    examples: [
      { w: "山", r: "やま", m: "mountain" },
      { w: "火山", r: "かざん", m: "volcano" },
      { w: "山の上", r: "やまのうえ", m: "on top of the mountain" }
    ]
  },
  {
    k: "川", meaning: "river", on: ["セン"], kun: ["かわ"], group: "nature", strokes: 3, radical: "巛",
    mnemonic: "Three lines of water flowing downhill side by side: a river.",
    notes: [
      "かわ often becomes がわ after another word: 小川 (おがわ, stream), 隅田川 (すみだがわ).",
      "Three strokes, left to right; the left one curves slightly and the right one is the longest."
    ],
    lookalikes: ["三"],
    examples: [
      { w: "川", r: "かわ", m: "river" },
      { w: "小川", r: "おがわ", m: "stream, brook" },
      { w: "川上", r: "かわかみ", m: "upstream" }
    ]
  },
  {
    k: "天", meaning: "heaven, sky", on: ["テン"], kun: ["あめ", "あま"], group: "nature", strokes: 4, radical: "大",
    mnemonic: "A big person 大 stretching up, with the sky as a line just above their head.",
    notes: [
      "天気 (てんき) is weather; 天気予報 (てんきよほう) is the forecast.",
      "あま in 天の川 (あまのがわ, the Milky Way). 天ぷら (てんぷら) is often written with this kanji."
    ],
    lookalikes: ["大"],
    examples: [
      { w: "天気", r: "てんき", m: "weather" },
      { w: "天国", r: "てんごく", m: "heaven, paradise" },
      { w: "天の川", r: "あまのがわ", m: "the Milky Way" }
    ]
  },
  {
    k: "気", meaning: "spirit, air", on: ["キ", "ケ"], kun: [], group: "nature", strokes: 6, radical: "气",
    mnemonic: "Steam 气 rising off a pot with an X 乂 underneath: the energy in the air.",
    notes: [
      "In many everyday words: 天気 (weather), 元気 (げんき, well), 電気 (electricity, lights), 人気 (にんき, popularity).",
      "気をつけて (きをつけて) means take care. The old form 氣 has 米 (rice) inside instead of 乂."
    ],
    lookalikes: [],
    examples: [
      { w: "天気", r: "てんき", m: "weather" },
      { w: "電気", r: "でんき", m: "electricity, lights" },
      { w: "人気", r: "にんき", m: "popularity" }
    ]
  },
  {
    k: "雨", meaning: "rain", on: ["ウ"], kun: ["あめ", "あま"], group: "nature", strokes: 8, radical: "雨",
    mnemonic: "Raindrops falling inside a window frame under the sky's top line.",
    notes: [
      "あめ on its own, あま in some compounds: 雨水 (あまみず). 小雨 (こさめ, drizzle) is irregular.",
      "As a top part it marks weather kanji, like 電 and 雪. 梅雨 (つゆ) is the rainy season in June and July."
    ],
    lookalikes: ["電"],
    examples: [
      { w: "雨", r: "あめ", m: "rain" },
      { w: "大雨", r: "おおあめ", m: "heavy rain" },
      { w: "小雨", r: "こさめ", m: "light rain, drizzle" }
    ]
  },

  /* ---------- qualities ---------- */
  {
    k: "大", meaning: "big", on: ["ダイ", "タイ"], kun: ["おお", "おお.きい"], group: "qualities", strokes: 3, radical: "大",
    mnemonic: "A person standing with arms stretched as wide as they can: 'It was THIS big!'",
    notes: [
      "おおきい is big; だい in 大学 (university) and 大好き (だいすき); たい in 大切 (たいせつ, important).",
      "大人 (おとな, adult) is irregular. Compare 犬 (dog, with a dot) and 天 (a line on top)."
    ],
    lookalikes: ["天"],
    examples: [
      { w: "大きい", r: "おおきい", m: "big" },
      { w: "大学", r: "だいがく", m: "university" },
      { w: "大人", r: "おとな", m: "adult" }
    ]
  },
  {
    k: "小", meaning: "small", on: ["ショウ"], kun: ["ちい.さい", "こ", "お"], group: "qualities", strokes: 3, radical: "小",
    mnemonic: "A thin stick in the middle with two tiny crumbs chipped off either side: small bits.",
    notes: [
      "ちいさい is small; しょう in 小学校 (elementary school); こ and お in 小雨 (こさめ) and 小川 (おがわ).",
      "Stroke order: the middle hook first, then left, then right."
    ],
    lookalikes: [],
    examples: [
      { w: "小さい", r: "ちいさい", m: "small" },
      { w: "小学校", r: "しょうがっこう", m: "elementary school" },
      { w: "小川", r: "おがわ", m: "stream, brook" }
    ]
  },
  {
    k: "長", meaning: "long, chief", on: ["チョウ"], kun: ["なが.い"], group: "qualities", strokes: 8, radical: "長",
    mnemonic: "An old village chief with long hair streaming in the wind, leaning on his stick.",
    notes: [
      "ながい is long; ちょう means chief or head: 校長 (school principal), 社長 (company president).",
      "長男 (ちょうなん) is the eldest son."
    ],
    lookalikes: [],
    examples: [
      { w: "長い", r: "ながい", m: "long" },
      { w: "校長先生", r: "こうちょうせんせい", m: "school principal" },
      { w: "長男", r: "ちょうなん", m: "eldest son" }
    ]
  },
  {
    k: "高", meaning: "tall, expensive", on: ["コウ"], kun: ["たか.い"], group: "qualities", strokes: 10, radical: "高",
    mnemonic: "A tall tower: a roof, a window 口, then a wider storey with another window below.",
    notes: [
      "たかい means tall or high, and also expensive: 高い! (That's pricey!).",
      "高校 (こうこう) is high school. The variant 髙 is often seen in family names."
    ],
    lookalikes: [],
    examples: [
      { w: "高い", r: "たかい", m: "tall; expensive" },
      { w: "高校", r: "こうこう", m: "high school" },
      { w: "高校生", r: "こうこうせい", m: "high-school student" }
    ]
  },
  {
    k: "白", meaning: "white", on: ["ハク", "ビャク"], kun: ["しろ", "しろ.い"], group: "qualities", strokes: 5, radical: "白",
    mnemonic: "The sun 日 with one ray shooting off the top: bright white light.",
    notes: [
      "しろ is white and しろい the adjective. 面白い (おもしろい) means interesting.",
      "Compare 日 (no top stroke) and 百 (hundred, a full line on top)."
    ],
    lookalikes: ["百", "日"],
    examples: [
      { w: "白い", r: "しろい", m: "white" },
      { w: "白", r: "しろ", m: "white (colour)" },
      { w: "白い車", r: "しろいくるま", m: "a white car" }
    ]
  },

  /* ---------- things ---------- */
  {
    k: "本", meaning: "book, origin", on: ["ホン"], kun: ["もと"], group: "things", strokes: 5, radical: "木",
    mnemonic: "A tree 木 with a line marking its root: the origin of things, and the wood that books are made from.",
    notes: [
      "ほん is book; it's also the counter for long thin things: 一本 (いっぽん), 二本 (にほん), 三本 (さんぼん).",
      "日本 (にほん or にっぽん) literally means 'sun origin'."
    ],
    lookalikes: ["木"],
    examples: [
      { w: "本", r: "ほん", m: "book" },
      { w: "日本", r: "にほん", m: "Japan" },
      { w: "一本", r: "いっぽん", m: "one (long thing)" }
    ]
  },
  {
    k: "学", meaning: "study, learning", on: ["ガク"], kun: ["まな.ぶ"], group: "things", strokes: 8, radical: "子",
    mnemonic: "A child 子 under a schoolhouse roof, with three sparks of ideas flying above.",
    notes: [
      "がく becomes がっ before こ: 学校 (がっこう). まなぶ is to learn.",
      "学生 usually means a university student; younger pupils are 生徒 (せいと)."
    ],
    lookalikes: [],
    examples: [
      { w: "学生", r: "がくせい", m: "student" },
      { w: "大学", r: "だいがく", m: "university" },
      { w: "学校", r: "がっこう", m: "school" }
    ]
  },
  {
    k: "校", meaning: "school", on: ["コウ"], kun: [], group: "things", strokes: 10, radical: "木",
    mnemonic: "Kids crossing paths 交 under a big tree 木 in the schoolyard.",
    notes: [
      "こう in 学校 (school), 高校 (high school) and 校長 (principal).",
      "Left side is 木 (tree), right side is 交 (cross, mix)."
    ],
    lookalikes: [],
    examples: [
      { w: "学校", r: "がっこう", m: "school" },
      { w: "高校", r: "こうこう", m: "high school" },
      { w: "校長", r: "こうちょう", m: "principal" }
    ]
  },
  {
    k: "語", meaning: "language, word", on: ["ゴ"], kun: ["かた.る"], group: "things", strokes: 14, radical: "言",
    mnemonic: "Words 言 coming from me 吾: the language I speak.",
    notes: [
      "Add ご to a country or region to name its language: 日本語, 中国語, 英語 (えいご, English).",
      "The left side is 言 (words), also in 読 and 話."
    ],
    lookalikes: ["話", "読"],
    examples: [
      { w: "日本語", r: "にほんご", m: "Japanese (language)" },
      { w: "中国語", r: "ちゅうごくご", m: "Chinese (language)" },
      { w: "外国語", r: "がいこくご", m: "foreign language" }
    ]
  },
  {
    k: "電", meaning: "electricity", on: ["デン"], kun: [], group: "things", strokes: 13, radical: "雨",
    mnemonic: "Rain clouds 雨 above with a bolt of lightning crackling out of the field below.",
    notes: [
      "でん in 電車 (train), 電気 (electricity) and 電話 (telephone).",
      "The 雨 on top is written flatter, and the last stroke curves round into an upward hook."
    ],
    lookalikes: ["雨"],
    examples: [
      { w: "電車", r: "でんしゃ", m: "train" },
      { w: "電気", r: "でんき", m: "electricity, lights" },
      { w: "電話", r: "でんわ", m: "telephone" }
    ]
  },
  {
    k: "車", meaning: "car, vehicle", on: ["シャ"], kun: ["くるま"], group: "things", strokes: 7, radical: "車",
    mnemonic: "A cart seen from above: the box in the middle and an axle running through it.",
    notes: [
      "くるま is a car; しゃ in compounds: 電車 (train), 自転車 (じてんしゃ, bicycle), 駐車場 (parking).",
      "Draw the long vertical through the middle last."
    ],
    lookalikes: ["東"],
    examples: [
      { w: "車", r: "くるま", m: "car" },
      { w: "電車", r: "でんしゃ", m: "train" },
      { w: "下車", r: "げしゃ", m: "getting off (a train)" }
    ]
  },
  {
    k: "国", meaning: "country", on: ["コク"], kun: ["くに"], group: "things", strokes: 8, radical: "囗",
    mnemonic: "A royal jewel 玉 kept safe inside the borders 囗 of a country.",
    notes: [
      "くに on its own; こく in compounds, becoming ごく in 中国 (ちゅうごく).",
      "The older form is 國. The enclosure is closed with its bottom line last."
    ],
    lookalikes: [],
    examples: [
      { w: "国", r: "くに", m: "country" },
      { w: "中国", r: "ちゅうごく", m: "China" },
      { w: "外国", r: "がいこく", m: "foreign country" }
    ]
  },
  {
    k: "何", meaning: "what", on: ["カ"], kun: ["なに", "なん"], group: "things", strokes: 7, radical: "亻",
    mnemonic: "A person 亻 next to 可 (possible), shrugging: 'What is possible? What?'",
    notes: [
      "なに on its own; なん before d, n and t sounds and counters: 何ですか, 何時 (なんじ), 何人 (なんにん)."
    ],
    lookalikes: [],
    examples: [
      { w: "何", r: "なに", m: "what" },
      { w: "何時", r: "なんじ", m: "what time" },
      { w: "何人", r: "なんにん", m: "how many people" }
    ]
  },

  /* ---------- actions ---------- */
  {
    k: "見", meaning: "see, look", on: ["ケン"], kun: ["み.る", "み.える", "み.せる"], group: "actions", strokes: 7, radical: "見",
    mnemonic: "A big eye 目 walking around on legs 儿, looking at everything.",
    notes: [
      "みる (to see, watch), みえる (to be visible), みせる (to show).",
      "けん in 見学 (study visit) and 意見 (いけん, opinion)."
    ],
    lookalikes: [],
    examples: [
      { w: "見る", r: "みる", m: "to see, watch" },
      { w: "見せる", r: "みせる", m: "to show" },
      { w: "見学", r: "けんがく", m: "study visit, tour" }
    ]
  },
  {
    k: "行", meaning: "go", on: ["コウ", "ギョウ", "アン"], kun: ["い.く", "ゆ.く", "おこな.う"], group: "actions", strokes: 6, radical: "行",
    mnemonic: "A crossroads seen from above: streets heading off every way you could go.",
    notes: [
      "いく is to go; its past tense is irregular: 行った (いった).",
      "こう in 銀行 (bank) and 旅行 (travel); ぎょう in 一行 (a line of text).",
      "〜行き (いき or ゆき) on trains means 'bound for'."
    ],
    lookalikes: [],
    examples: [
      { w: "行く", r: "いく", m: "to go" },
      { w: "行き先", r: "いきさき", m: "destination" },
      { w: "行う", r: "おこなう", m: "to carry out, hold" }
    ]
  },
  {
    k: "来", meaning: "come", on: ["ライ"], kun: ["く.る"], group: "actions", strokes: 7, radical: "木",
    mnemonic: "A tree 木 with ripe fruit hanging on both sides: the harvest has come.",
    notes: [
      "くる is irregular: 来ない (こない), 来ます (きます), 来て (きて).",
      "らい means next: 来年 (next year), 来月 (next month), 来週 (next week)."
    ],
    lookalikes: ["東"],
    examples: [
      { w: "来る", r: "くる", m: "to come" },
      { w: "来年", r: "らいねん", m: "next year" },
      { w: "来月", r: "らいげつ", m: "next month" }
    ]
  },
  {
    k: "出", meaning: "exit, go out", on: ["シュツ", "スイ"], kun: ["で.る", "だ.す"], group: "actions", strokes: 5, radical: "凵",
    mnemonic: "One mountain 山 stacked on another: climb over both and you're out.",
    notes: [
      "でる is to go out; だす is to take out or hand in.",
      "出口 (でぐち, exit) is on every station sign. しゅつ becomes しゅっ in 出発 (しゅっぱつ, departure)."
    ],
    lookalikes: ["山"],
    examples: [
      { w: "出る", r: "でる", m: "to go out, leave" },
      { w: "出す", r: "だす", m: "to take out, submit" },
      { w: "外出", r: "がいしゅつ", m: "going out" }
    ]
  },
  {
    k: "入", meaning: "enter", on: ["ニュウ"], kun: ["い.る", "はい.る", "い.れる"], group: "actions", strokes: 2, radical: "入",
    mnemonic: "A tent flap with someone ducking in through the doorway.",
    notes: [
      "はいる is to enter; いれる is to put in. 入口 (いりぐち, entrance) is also written 入り口.",
      "Not 人 (person): in 入 the right-hand stroke starts higher; in 人 the left one does."
    ],
    lookalikes: ["人", "八"],
    examples: [
      { w: "入る", r: "はいる", m: "to enter" },
      { w: "入れる", r: "いれる", m: "to put in" },
      { w: "入学", r: "にゅうがく", m: "starting school" }
    ]
  },
  {
    k: "休", meaning: "rest", on: ["キュウ"], kun: ["やす.む"], group: "actions", strokes: 6, radical: "亻",
    mnemonic: "A person 亻 resting against a tree 木 in the shade.",
    notes: [
      "やすむ is to rest or take a day off; 休み (やすみ) is a holiday or break.",
      "Shop signs: 定休日 (ていきゅうび) is the regular closing day; 本日休業 means closed today."
    ],
    lookalikes: [],
    examples: [
      { w: "休み", r: "やすみ", m: "holiday, break" },
      { w: "休む", r: "やすむ", m: "to rest" },
      { w: "休日", r: "きゅうじつ", m: "day off" }
    ]
  },
  {
    k: "食", meaning: "eat, food", on: ["ショク", "ジキ"], kun: ["た.べる", "く.う"], group: "actions", strokes: 9, radical: "食",
    mnemonic: "A lid 人 over a rice bowl heaped full: dinner is served.",
    notes: [
      "たべる is the everyday verb; しょく in 食事 (しょくじ, meal) and 和食 (わしょく, Japanese food).",
      "On the left of other kanji it is squeezed into 飠 (しょくへん), as in 飲."
    ],
    lookalikes: [],
    examples: [
      { w: "食べる", r: "たべる", m: "to eat" },
      { w: "外食", r: "がいしょく", m: "eating out" },
      { w: "食後", r: "しょくご", m: "after a meal" }
    ]
  },
  {
    k: "飲", meaning: "drink", on: ["イン"], kun: ["の.む"], group: "actions", strokes: 12, radical: "食",
    mnemonic: "Food 飠 on the left, a wide-open mouth 欠 on the right: gulping it all down.",
    notes: [
      "のむ is to drink, and also to take medicine: くすりを飲む.",
      "飲み物 (のみもの) means drinks; 飲み放題 (のみほうだい) is all-you-can-drink."
    ],
    lookalikes: [],
    examples: [
      { w: "飲む", r: "のむ", m: "to drink" },
      { w: "飲み水", r: "のみみず", m: "drinking water" },
      { w: "飲食", r: "いんしょく", m: "eating and drinking" }
    ]
  },
  {
    k: "書", meaning: "write", on: ["ショ"], kun: ["か.く"], group: "actions", strokes: 10, radical: "曰",
    mnemonic: "A hand gripping a brush 聿 over a speaking mouth 日: writing down what is said.",
    notes: [
      "かく is to write; しょ in 読書 (reading), 図書館 (としょかん, library) and 書道 (しょどう, calligraphy)."
    ],
    lookalikes: [],
    examples: [
      { w: "書く", r: "かく", m: "to write" },
      { w: "読書", r: "どくしょ", m: "reading (books)" },
      { w: "前書き", r: "まえがき", m: "preface" }
    ]
  },
  {
    k: "読", meaning: "read", on: ["ドク", "トク", "トウ"], kun: ["よ.む"], group: "actions", strokes: 14, radical: "言",
    mnemonic: "A market seller 売 shouting out the words 言 on his sign: reading it aloud.",
    notes: [
      "よむ is to read; どく in 読書 (どくしょ, reading).",
      "Left side is 言 (words), right side is 売 (sell)."
    ],
    lookalikes: ["語", "話"],
    examples: [
      { w: "読む", r: "よむ", m: "to read" },
      { w: "読書", r: "どくしょ", m: "reading (books)" },
      { w: "読み", r: "よみ", m: "reading (of a kanji)" }
    ]
  },
  {
    k: "話", meaning: "talk, story", on: ["ワ"], kun: ["はな.す", "はなし"], group: "actions", strokes: 13, radical: "言",
    mnemonic: "Words 言 rolling off the tongue 舌: having a good long talk.",
    notes: [
      "はなす is the verb; はなし (talk, story) is the noun, often written 話 with no okurigana.",
      "電話 (でんわ) is telephone; 会話 (かいわ) is conversation."
    ],
    lookalikes: ["語", "読"],
    examples: [
      { w: "話す", r: "はなす", m: "to speak, talk" },
      { w: "電話", r: "でんわ", m: "telephone" },
      { w: "話", r: "はなし", m: "talk, story" }
    ]
  },
  {
    k: "聞", meaning: "hear, ask", on: ["ブン", "モン"], kun: ["き.く", "き.こえる"], group: "actions", strokes: 14, radical: "耳",
    mnemonic: "An ear 耳 pressed to the gate 門, listening to every word.",
    notes: [
      "きく is to hear, listen, and ask: 道を聞く (to ask the way). 新聞 (しんぶん) is newspaper.",
      "Inside the gate is an ear 耳, not the 日 of 間 (interval)."
    ],
    lookalikes: ["間"],
    examples: [
      { w: "聞く", r: "きく", m: "to hear, listen, ask" },
      { w: "聞こえる", r: "きこえる", m: "to be audible" },
      { w: "見聞", r: "けんぶん", m: "experience, knowledge" }
    ]
  }
];

/* Short names for the parts listed in NH.PARTS. */
NH.COMPONENT_NAMES = {
  "囗": "enclosure (くにがまえ)",
  "儿": "legs (ひとあし)",
  "亠": "lid (なべぶた)",
  "八": "eight, dividing (はち)",
  "一": "one (いち)",
  "乙": "hooked stroke",
  "丿": "slanting stroke",
  "白": "white (しろ)",
  "十": "ten (じゅう)",
  "干": "dry (かん)",
  "日": "sun, day (ひ)",
  "寺": "temple (てら)",
  "𠂉": "slanting hat stroke",
  "毋": "do not (なかれ)",
  "丶": "dot (てん)",
  "二": "two (に)",
  "門": "gate (もんがまえ)",
  "田": "rice field (た)",
  "力": "power (ちから)",
  "𠂇": "hand (line and slant)",
  "又": "hand, again (また)",
  "夕": "evening (ゆうべ)",
  "口": "mouth (くち)",
  "卜": "divining rod (ぼく)",
  "丨": "vertical stroke",
  "丆": "line and slant",
  "木": "tree (き)",
  "大": "big (だい)",
  "气": "steam, air (きがまえ)",
  "乂": "cross mark",
  "交": "cross, mix",
  "言": "words (ごんべん)",
  "吾": "I, myself",
  "玉": "jewel (たま)",
  "亻": "person (にんべん)",
  "可": "possible",
  "目": "eye (め)",
  "山": "mountain (やま)",
  "凵": "open box (うけばこ)",
  "飠": "food (しょくへん)",
  "欠": "yawn, open mouth (あくび)",
  "聿": "brush (ふでづくり)",
  "売": "sell (うる)",
  "舌": "tongue (した)",
  "耳": "ear (みみ)"
};

/* Kanji-and-kana practice words.
   level: 1 = number/time kanji or 1-2 simple kanji, 2 = okurigana or 2-kanji compounds,
   3 = 3+ kanji or irregular readings. */
NH.KANJI_WORDS = [
  // ---- Level 1 ----
  { id: "kw-yama", text: "山", kana: "やま", romaji: "yama", meaning: "mountain", level: 1, scene: ["mountain"] },
  { id: "kw-kawa", text: "川", kana: "かわ", romaji: "kawa", meaning: "river", level: 1, scene: ["river"] },
  { id: "kw-hi", text: "日", kana: "ひ", romaji: "hi", meaning: "sun, day", level: 1, scene: ["sun"] },
  { id: "kw-tsuki", text: "月", kana: "つき", romaji: "tsuki", meaning: "moon", level: 1, scene: ["moon"] },
  { id: "kw-ki", text: "木", kana: "き", romaji: "ki", meaning: "tree", level: 1, scene: ["tree"] },
  { id: "kw-ame", text: "雨", kana: "あめ", romaji: "ame", meaning: "rain", level: 1, scene: ["rain", "umbrella"] },
  { id: "kw-mizu", text: "水", kana: "みず", romaji: "mizu", meaning: "water", level: 1, scene: ["river"] },
  { id: "kw-hon", text: "本", kana: "ほん", romaji: "hon", meaning: "book", level: 1, scene: ["book"] },
  { id: "kw-kuruma", text: "車", kana: "くるま", romaji: "kuruma", meaning: "car", level: 1, scene: ["city"] },
  { id: "kw-en", text: "円", kana: "えん", romaji: "en", meaning: "yen", level: 1, scene: ["konbini", "vending"], note: "Prices are written like 500円. In Japanese it is always said えん, never 'yen'." },
  { id: "kw-hyaku-en", text: "百円", kana: "ひゃくえん", romaji: "hyaku en", meaning: "100 yen", level: 1, scene: ["vending"] },
  { id: "kw-sen-en", text: "千円", kana: "せんえん", romaji: "sen en", meaning: "1,000 yen", level: 1, scene: ["konbini", "vending"], note: "The 1,000-yen note is the smallest banknote; ticket and vending machines take it." },
  { id: "kw-mainichi", text: "毎日", kana: "まいにち", romaji: "mainichi", meaning: "every day", level: 1, scene: ["sun"] },
  { id: "kw-jikan", text: "時間", kana: "じかん", romaji: "jikan", meaning: "time; hours", level: 1, scene: ["sun", "moon"] },
  { id: "kw-shigatsu", text: "四月", kana: "しがつ", romaji: "shigatsu", meaning: "April", level: 1, scene: ["sakura"], note: "四 is し here, not よん. The Japanese school and business year starts in April." },

  // ---- Level 2 ----
  { id: "kw-nihon", text: "日本", kana: "にほん", romaji: "Nihon", meaning: "Japan", level: 2, scene: ["fuji", "sun"], note: "Also read にっぽん, used on banknotes, stamps and at sports events." },
  { id: "kw-densha", text: "電車", kana: "でんしゃ", romaji: "densha", meaning: "train", level: 2, scene: ["train"] },
  { id: "kw-sensei", text: "先生", kana: "せんせい", romaji: "sensei", meaning: "teacher", level: 2, scene: ["book"] },
  { id: "kw-gakusei", text: "学生", kana: "がくせい", romaji: "gakusei", meaning: "student", level: 2, scene: ["book"] },
  { id: "kw-daigaku", text: "大学", kana: "だいがく", romaji: "daigaku", meaning: "university", level: 2, scene: ["book", "city"] },
  { id: "kw-gakkou", text: "学校", kana: "がっこう", romaji: "gakkō", meaning: "school", level: 2, scene: ["book", "house"] },
  { id: "kw-tenki", text: "天気", kana: "てんき", romaji: "tenki", meaning: "weather", level: 2, scene: ["sun", "rain"] },
  { id: "kw-deru", text: "出る", kana: "でる", romaji: "deru", meaning: "to go out, leave", level: 2, scene: ["train", "city"], note: "The station sign 出口 (でぐち, exit) adds 口 (mouth, opening); big stations have 東口, 西口, 南口 and 北口." },
  { id: "kw-hairu", text: "入る", kana: "はいる", romaji: "hairu", meaning: "to enter", level: 2, scene: ["house"], note: "Also used for baths: おふろに入る. The entrance sign 入口 (いりぐち) sits next to 出口 (でぐち, exit)." },
  { id: "kw-nanji", text: "何時", kana: "なんじ", romaji: "nanji", meaning: "what time", level: 2, scene: ["train"], note: "Answer with a number + 時: 三時 (さんじ). Watch 四時 (よじ), 七時 (しちじ), 九時 (くじ)." },
  { id: "kw-kazan", text: "火山", kana: "かざん", romaji: "kazan", meaning: "volcano", level: 2, scene: ["fuji", "mountain"], note: "Japan has over 100 active volcanoes, and Mount Fuji is one of them." },
  { id: "kw-yasumi", text: "休み", kana: "やすみ", romaji: "yasumi", meaning: "holiday, break", level: 2, scene: ["sea", "sun"], note: "Also a day off or absence: 今日は休みです." },
  { id: "kw-taberu", text: "食べる", kana: "たべる", romaji: "taberu", meaning: "to eat", level: 2, scene: ["food", "ramen"] },
  { id: "kw-nomu", text: "飲む", kana: "のむ", romaji: "nomu", meaning: "to drink", level: 2, scene: ["tea", "coffee"], note: "Also used for taking medicine." },
  { id: "kw-yomu", text: "読む", kana: "よむ", romaji: "yomu", meaning: "to read", level: 2, scene: ["book"] },
  { id: "kw-kaku", text: "書く", kana: "かく", romaji: "kaku", meaning: "to write", level: 2, scene: ["book"] },
  { id: "kw-hanasu", text: "話す", kana: "はなす", romaji: "hanasu", meaning: "to speak, talk", level: 2, scene: ["tea"] },
  { id: "kw-kiku", text: "聞く", kana: "きく", romaji: "kiku", meaning: "to listen, ask", level: 2, scene: ["bird"] },
  { id: "kw-miru", text: "見る", kana: "みる", romaji: "miru", meaning: "to see, watch", level: 2, scene: ["fuji"] },
  { id: "kw-iku", text: "行く", kana: "いく", romaji: "iku", meaning: "to go", level: 2, scene: ["train"], note: "Irregular past tense: 行った (いった)." },
  { id: "kw-takai", text: "高い", kana: "たかい", romaji: "takai", meaning: "tall; expensive", level: 2, scene: ["skytree", "tokyotower"] },
  { id: "kw-tomodachi", text: "友だち", kana: "ともだち", romaji: "tomodachi", meaning: "friend", level: 2, scene: ["heart"] },

  // ---- Level 3 ----
  { id: "kw-kyou", text: "今日", kana: "きょう", romaji: "kyō", meaning: "today", level: 3, scene: ["sun"], note: "Irregular: the kanji say 'this day' but it is read きょう. こんにち survives in こんにちは." },
  { id: "kw-kotoshi", text: "今年", kana: "ことし", romaji: "kotoshi", meaning: "this year", level: 3, scene: ["sun", "torii"], note: "Irregular reading. Compare 毎年 (まいとし) and 来年 (らいねん)." },
  { id: "kw-hitori", text: "一人", kana: "ひとり", romaji: "hitori", meaning: "one person, alone", level: 3, scene: ["house"], note: "一人 and 二人 are irregular; from three people on it is regular: 三人 (さんにん)." },
  { id: "kw-futari", text: "二人", kana: "ふたり", romaji: "futari", meaning: "two people", level: 3, scene: ["heart"] },
  { id: "kw-otona", text: "大人", kana: "おとな", romaji: "otona", meaning: "adult", level: 3, scene: ["city", "train"], note: "Irregular reading of 'big person'. Ticket machines show separate 大人 and 小人 (しょうにん, child) fares." },
  { id: "kw-tsuitachi", text: "一日", kana: "ついたち", romaji: "tsuitachi", meaning: "the 1st of the month", level: 3, scene: ["moon"], note: "Irregular. As 'one day' or 'all day' the same kanji are read いちにち." },
  { id: "kw-hatsuka", text: "二十日", kana: "はつか", romaji: "hatsuka", meaning: "the 20th; twenty days", level: 3, scene: ["moon"], note: "Irregular. Compare 二十歳 (はたち), age twenty." },
  { id: "kw-gaikokujin", text: "外国人", kana: "がいこくじん", romaji: "gaikokujin", meaning: "foreigner", level: 3, scene: ["city", "train"], note: "The shortened 外人 (がいじん) can sound blunt; 外国人 is the neutral word." },
  { id: "kw-nihongo", text: "日本語", kana: "にほんご", romaji: "nihongo", meaning: "Japanese (language)", level: 3, scene: ["book"] },
  { id: "kw-shougakkou", text: "小学校", kana: "しょうがっこう", romaji: "shōgakkō", meaning: "elementary school", level: 3, scene: ["book", "house"] },
  { id: "kw-koukousei", text: "高校生", kana: "こうこうせい", romaji: "kōkōsei", meaning: "high-school student", level: 3, scene: ["book"] },
  { id: "kw-gozen-juuji", text: "午前十時", kana: "ごぜんじゅうじ", romaji: "gozen jūji", meaning: "10 a.m.", level: 3, scene: ["sun"], note: "午前 (a.m.) and 午後 (p.m.) go before the time, not after." },
  { id: "kw-amanogawa", text: "天の川", kana: "あまのがわ", romaji: "Amanogawa", meaning: "the Milky Way", level: 3, scene: ["star"], note: "天 is read あま here. The Milky Way is at the heart of Tanabata (七夕), the star festival on 7 July." }
];
