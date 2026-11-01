/* Kaku's kanji: the first 80 (JLPT N5), then the clinic & hospital pack. Meanings,
 * readings, parts, memory hooks and example words. */
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
  },
  /* ========== Clinic & hospital pack: departments and staff ========== */
  {
    k: "病", meaning: "illness, sick", on: ["ビョウ"], kun: ["やまい", "や.む"], group: "c-staff", strokes: 10, radical: "疒",
    mnemonic: "Under the sickbed roof 疒, with drops of sweat down its side, 丙 sits huddled in a little box with legs: too ill to get up.",
    notes: [
      "病院 (びょういん) is a hospital; a small local clinic usually calls itself a 医院 (いいん) or クリニック.",
      "Almost always びょう in compounds; やまい is a literary word for illness, and 病む (やむ) means to fall ill.",
      "The same 疒 roof sits on 痛 (pain), but 痛 has a different filling underneath."
    ],
    lookalikes: ["痛"],
    examples: [
      { w: "病院", r: "びょういん", m: "hospital" },
      { w: "病気", r: "びょうき", m: "illness" },
      { w: "病名", r: "びょうめい", m: "name of an illness, diagnosis" }
    ]
  },
  {
    k: "院", meaning: "institution, hospital", on: ["イン"], kun: [], group: "c-staff", strokes: 10, radical: "阝",
    mnemonic: "Hill-steps on the left lead up to 完, a finished building under a roof: a big, completed institution on the hill, such as a hospital.",
    notes: [
      "On signs: 入院 (にゅういん, admission to hospital) and 院内 (いんない, inside the hospital), as in 院内禁煙 (no smoking anywhere on the premises).",
      "Ends the names of institutions: 大学院 (だいがくいん, graduate school), 医院 (いいん, doctor's clinic).",
      "The left side is the three-stroke 'hill' radical, not the kanji 耳 (ear)."
    ],
    lookalikes: [],
    examples: [
      { w: "病院", r: "びょういん", m: "hospital" },
      { w: "入院", r: "にゅういん", m: "being admitted to hospital" },
      { w: "院内", r: "いんない", m: "inside the hospital" }
    ]
  },
  {
    k: "医", meaning: "medicine, doctor", on: ["イ"], kun: [], group: "c-staff", strokes: 7, radical: "匸",
    mnemonic: "An arrow 矢 locked away in a box 匸 that opens to the right: the doctor has pulled the arrow out of you and put it away safely.",
    notes: [
      "医者 (いしゃ) is the everyday word for a doctor; 医師 (いし) is the formal one on staff boards, forms and name badges.",
      "Read い in almost every word; the kun readings are rare.",
      "The box is open on the right; draw its top and the arrow 矢 first, and the bottom line last."
    ],
    lookalikes: [],
    examples: [
      { w: "医者", r: "いしゃ", m: "doctor" },
      { w: "医師", r: "いし", m: "physician (formal)" },
      { w: "医院", r: "いいん", m: "doctor's clinic" }
    ]
  },
  {
    k: "患", meaning: "patient, suffer", on: ["カン"], kun: ["わずら.う"], group: "c-staff", strokes: 11, radical: "心",
    mnemonic: "A skewer 串 driven straight down into the heart 心: a sufferer who feels every jab.",
    notes: [
      "On almost every hospital sign it appears as 患者 (かんじゃ, patient); staff often say 患者さん or 患者様 (かんじゃさま).",
      "急患 (きゅうかん) is an emergency patient; 外来患者 (がいらいかんじゃ) are outpatients. 患う (わずらう, to suffer from an illness) is mostly written.",
      "The top is 串: two boxes on one stick, not a single 中."
    ],
    lookalikes: [],
    examples: [
      { w: "患者", r: "かんじゃ", m: "patient" },
      { w: "急患", r: "きゅうかん", m: "emergency patient" },
      { w: "外来患者", r: "がいらいかんじゃ", m: "outpatient" }
    ]
  },
  {
    k: "者", meaning: "person, someone", on: ["シャ"], kun: ["もの"], group: "c-staff", strokes: 8, radical: "耂",
    mnemonic: "An old man 耂 with his walking stick, leaning over the sun 日: someone, a person sitting out in the daylight.",
    notes: [
      "Usually a suffix meaning 'a person who...': 患者 (かんじゃ, patient), 医者 (いしゃ, doctor), 利用者 (りようしゃ, user).",
      "On its own it is read もの, a humble word for a person: 受付の者 (うけつけのもの) 'someone from reception'.",
      "都 (capital) is 者 with an extra 'town' side on the right."
    ],
    lookalikes: ["都"],
    examples: [
      { w: "患者", r: "かんじゃ", m: "patient" },
      { w: "医者", r: "いしゃ", m: "doctor" },
      { w: "利用者", r: "りようしゃ", m: "user" }
    ]
  },
  {
    k: "科", meaning: "department, course", on: ["カ"], kun: [], group: "c-staff", strokes: 9, radical: "禾",
    mnemonic: "Grain 禾 scooped out with a measuring ladle 斗 and sorted into separate sacks: each sack is a department.",
    notes: [
      "On hospital floor guides 科 ends the department names: 内科 (ないか), 外科 (げか), 眼科 (がんか), 皮膚科 (ひふか).",
      "外科 is read げか, not がいか.",
      "Don't confuse with 料 (fee), which has the same ladle 斗 but a different grain plant on the left."
    ],
    lookalikes: ["料"],
    examples: [
      { w: "内科", r: "ないか", m: "internal medicine" },
      { w: "外科", r: "げか", m: "surgery (department)" },
      { w: "小児科", r: "しょうにか", m: "paediatrics" }
    ]
  },
  {
    k: "内", meaning: "inside, internal", on: ["ナイ"], kun: ["うち"], group: "c-staff", strokes: 4, radical: "入",
    mnemonic: "A person 人 stepping in under a doorframe 冂: now they are inside.",
    notes: [
      "内科 (ないか) is internal medicine, the department to try first for colds, fevers and stomach trouble.",
      "院内 (いんない) and 室内 (しつない) on notices mean 'inside the hospital' and 'indoors'. On its own it is read うち (inside, within).",
      "円 (yen) has the same frame, but with a short line and a floor inside instead of a person."
    ],
    lookalikes: ["円"],
    examples: [
      { w: "内科", r: "ないか", m: "internal medicine" },
      { w: "院内", r: "いんない", m: "inside the hospital" },
      { w: "室内", r: "しつない", m: "indoors, inside the room" }
    ]
  },
  {
    k: "歯", meaning: "tooth, teeth", on: ["シ"], kun: ["は"], group: "c-staff", strokes: 12, radical: "歯",
    mnemonic: "Stop 止 on top, and below it an open mouth packed with rows of teeth: stop, and open wide for the dentist.",
    notes: [
      "歯科 (しか) on signs means dentistry; a dental clinic is a 歯科医院 (しかいいん), but people just say 歯医者 (はいしゃ).",
      "On its own read は, which becomes ば in some compounds: 前歯 (まえば, front teeth), 入れ歯 (いれば, dentures)."
    ],
    lookalikes: [],
    examples: [
      { w: "歯医者", r: "はいしゃ", m: "dentist" },
      { w: "歯科", r: "しか", m: "dentistry" },
      { w: "前歯", r: "まえば", m: "front teeth" }
    ]
  },
  {
    k: "眼", meaning: "eye, eyeball", on: ["ガン"], kun: ["め", "まなこ"], group: "c-staff", strokes: 11, radical: "目",
    mnemonic: "An eye 目 beside 艮, a figure who turns round to stare back: the eyeball itself, under close examination.",
    notes: [
      "On signs, mostly 眼科 (がんか, eye clinic, ophthalmology); an eye doctor is a 眼科医 (がんかい).",
      "The everyday kanji for 'eye' is 目 (め); 眼 is the medical, technical eye.",
      "まなこ is old-fashioned, but survives in 血眼 (ちまなこ, bloodshot eyes; frantically)."
    ],
    lookalikes: [],
    examples: [
      { w: "眼科", r: "がんか", m: "ophthalmology, eye clinic" },
      { w: "眼科医", r: "がんかい", m: "eye doctor" },
      { w: "血眼", r: "ちまなこ", m: "bloodshot eyes; frantically" }
    ]
  },
  {
    k: "耳", meaning: "ear", on: ["ジ"], kun: ["みみ"], group: "c-staff", strokes: 6, radical: "耳",
    mnemonic: "An ear seen from the side: the tall outer rim, with lines across it for the folds inside.",
    notes: [
      "耳鼻科 (じびか) is the ear, nose and throat clinic.",
      "On its own read みみ; じ appears in medical words such as 耳鼻科 and 内耳 (ないじ, inner ear).",
      "It is the ear inside the gate in 聞 (hear)."
    ],
    lookalikes: [],
    examples: [
      { w: "耳", r: "みみ", m: "ear" },
      { w: "耳鼻科", r: "じびか", m: "ear, nose and throat clinic" },
      { w: "耳たぶ", r: "みみたぶ", m: "earlobe" }
    ]
  },
  {
    k: "鼻", meaning: "nose", on: ["ビ"], kun: ["はな"], group: "c-staff", strokes: 14, radical: "鼻",
    mnemonic: "自 is a nose pointing at itself, and 畀 below is a pair of hands holding a tissue under it.",
    notes: [
      "On its own read はな; in compounds び: 耳鼻科 (じびか, ear, nose and throat clinic).",
      "鼻血 (はなぢ, nosebleed): ち becomes ぢ after はな.",
      "Japanese people point at their own nose, not their chest, to mean 'me'."
    ],
    lookalikes: [],
    examples: [
      { w: "耳鼻科", r: "じびか", m: "ear, nose and throat clinic" },
      { w: "鼻水", r: "はなみず", m: "runny nose" },
      { w: "鼻血", r: "はなぢ", m: "nosebleed" }
    ]
  },
  {
    k: "皮", meaning: "skin, hide", on: ["ヒ"], kun: ["かわ"], group: "c-staff", strokes: 5, radical: "皮",
    mnemonic: "A hand peeling back a hide stretched on a frame: the hook at the top left is the corner it has just lifted.",
    notes: [
      "Mostly seen in 皮膚科 (ひふか, dermatology), the clinic for rashes and skin trouble.",
      "On its own かわ is skin, peel or leather; human skin is usually 皮膚 (ひふ).",
      "Same sound as 川 (かわ, river), a different word."
    ],
    lookalikes: [],
    examples: [
      { w: "皮膚", r: "ひふ", m: "skin" },
      { w: "皮膚科", r: "ひふか", m: "dermatology" },
      { w: "皮下", r: "ひか", m: "under the skin" }
    ]
  },
  {
    k: "膚", meaning: "skin", on: ["フ"], kun: ["はだ"], group: "c-staff", strokes: 15, radical: "月",
    mnemonic: "A tiger's head 虍 over a stomach 胃: smooth skin stretched over the belly, just where a tiger's claws would scratch.",
    notes: [
      "Practically only met in 皮膚 (ひふ, skin) and 皮膚科 (ひふか, dermatology).",
      "The kun reading はだ is normally written with a different kanji, so expect 膚 only as ふ in 皮膚.",
      "15 strokes: write the tiger top 虍 first, then 胃 tucked underneath."
    ],
    lookalikes: [],
    examples: [
      { w: "皮膚", r: "ひふ", m: "skin" },
      { w: "皮膚科", r: "ひふか", m: "dermatology" },
      { w: "皮膚病", r: "ひふびょう", m: "skin disease" }
    ]
  },
  {
    k: "児", meaning: "child", on: ["ジ", "ニ"], kun: [], group: "c-staff", strokes: 7, radical: "儿",
    mnemonic: "A big head 旧 on short little legs 儿: a toddler, all head and wobble.",
    notes: [
      "小児科 (しょうにか) is the children's clinic (paediatrics); note the unusual reading に.",
      "Otherwise read じ: 男児 (だんじ, boy) and 女児 (じょじ, girl), common in news and on forms."
    ],
    lookalikes: [],
    examples: [
      { w: "小児科", r: "しょうにか", m: "paediatrics" },
      { w: "男児", r: "だんじ", m: "boy" },
      { w: "女児", r: "じょじ", m: "girl" }
    ]
  },
  {
    k: "薬", meaning: "medicine, drug", on: ["ヤク"], kun: ["くすり"], group: "c-staff", strokes: 16, radical: "艹",
    mnemonic: "Grass 艹 on top of 楽 (comfort): herbs that make you feel comfortable again.",
    notes: [
      "After a clinic visit you usually take the prescription to a 薬局 (やっきょく, pharmacy) to collect your medicine.",
      "On its own くすり, which becomes ぐすり in compounds: 飲み薬 (のみぐすり, oral medicine).",
      "やく + きょく contracts to やっきょく."
    ],
    lookalikes: [],
    examples: [
      { w: "薬局", r: "やっきょく", m: "pharmacy" },
      { w: "飲み薬", r: "のみぐすり", m: "oral medicine" },
      { w: "薬用", r: "やくよう", m: "medicinal" }
    ]
  },
  {
    k: "局", meaning: "bureau, office", on: ["キョク"], kun: [], group: "c-staff", strokes: 7, radical: "尸",
    mnemonic: "A body bent over a desk 尸 wrapped around 句, a sentence in a box: a clerk in a bureau writing reports.",
    notes: [
      "In a hospital it is mostly 薬局 (やっきょく, pharmacy).",
      "Also used for offices and broadcasters: テレビ局 (テレビきょく, TV station), 局長 (きょくちょう, director)."
    ],
    lookalikes: [],
    examples: [
      { w: "薬局", r: "やっきょく", m: "pharmacy" },
      { w: "局長", r: "きょくちょう", m: "bureau director" },
      { w: "当局", r: "とうきょく", m: "the authorities" }
    ]
  },
  {
    k: "師", meaning: "expert, master", on: ["シ"], kun: [], group: "c-staff", strokes: 10, radical: "巾",
    mnemonic: "A pile of shields on the left and a banner on a pole on the right: the master who leads the troop and teaches them the craft.",
    notes: [
      "Ends the titles of licensed professionals: 医師 (いし, physician), 看護師 (かんごし, nurse).",
      "Staff boards and name badges use these formal titles rather than everyday words like 医者.",
      "In a hospital, 師長 (しちょう) is the head nurse of a ward."
    ],
    lookalikes: [],
    examples: [
      { w: "医師", r: "いし", m: "physician" },
      { w: "看護師", r: "かんごし", m: "nurse" },
      { w: "看護師長", r: "かんごしちょう", m: "head nurse" }
    ]
  },
  {
    k: "看", meaning: "watch over", on: ["カン"], kun: ["み.る"], group: "c-staff", strokes: 9, radical: "目",
    mnemonic: "A hand 手 held flat over an eye 目, shading it to keep watch: someone watching over a patient.",
    notes: [
      "Nearly always paired with 護 in 看護 (かんご, nursing) and 看護師 (かんごし, nurse).",
      "看病 (かんびょう) is caring for a sick family member, and 看る (みる) is to look after someone.",
      "The hand on top is squashed: its last stroke sweeps down to the left over the eye."
    ],
    lookalikes: [],
    examples: [
      { w: "看護", r: "かんご", m: "nursing" },
      { w: "看護師", r: "かんごし", m: "nurse" },
      { w: "看病", r: "かんびょう", m: "caring for the sick" }
    ]
  },
  {
    k: "護", meaning: "protect", on: ["ゴ"], kun: [], group: "c-staff", strokes: 20, radical: "言",
    mnemonic: "Words 言 beside 蒦, a hand holding a bird under the grass: speaking softly while keeping the bird safe.",
    notes: [
      "看護 (かんご, nursing): signs say 看護師 (かんごし) for nurses and ナースステーション for the nurses' station.",
      "救護 (きゅうご) is first aid; a 救護室 (きゅうごしつ) is a first-aid room at events.",
      "20 strokes: keep 言 narrow so the busy right side fits."
    ],
    lookalikes: [],
    examples: [
      { w: "看護師", r: "かんごし", m: "nurse" },
      { w: "保護", r: "ほご", m: "protection" },
      { w: "救護", r: "きゅうご", m: "first aid, relief" }
    ]
  },

  /* ========== Clinic & hospital pack: reception and paying ========== */
  {
    k: "受", meaning: "receive", on: ["ジュ"], kun: ["う.ける"], group: "c-desk", strokes: 8, radical: "又",
    mnemonic: "A clawed hand reaching down from above, a cover, and a hand 又 below: one hand passes something across, the other receives it.",
    notes: [
      "受付 (うけつけ) is the reception desk, usually the first sign you look for at a clinic.",
      "受診 (じゅしん) means seeing a doctor; forms ask for the 受診日 (じゅしんび, date of visit).",
      "The verb is 受ける (うける, to receive, to undergo), as in 検査を受ける (to have a test)."
    ],
    lookalikes: [],
    examples: [
      { w: "受付", r: "うけつけ", m: "reception" },
      { w: "受診", r: "じゅしん", m: "seeing a doctor" },
      { w: "受ける", r: "うける", m: "to receive, to undergo" }
    ]
  },
  {
    k: "付", meaning: "attach", on: ["フ"], kun: ["つ.ける", "つ.く"], group: "c-desk", strokes: 5, radical: "亻",
    mnemonic: "A person 亻 with a hand 寸 reaching out to stick something on: pinning on a name tag.",
    notes: [
      "In 受付 (うけつけ) the つける reading becomes つけ, and the okurigana is dropped on signs.",
      "Becomes づけ after another word: 日付 (ひづけ, date) on forms."
    ],
    lookalikes: [],
    examples: [
      { w: "受付", r: "うけつけ", m: "reception" },
      { w: "日付", r: "ひづけ", m: "date" },
      { w: "付ける", r: "つける", m: "to attach, to put on" }
    ]
  },
  {
    k: "予", meaning: "beforehand", on: ["ヨ"], kun: [], group: "c-desk", strokes: 4, radical: "亅",
    mnemonic: "マ hooked on top of 了 (finished): plan it beforehand and it's done before you start.",
    notes: [
      "予約 (よやく) is an appointment or booking; 予約の方 (よやくのかた) signs mark the line for people with appointments.",
      "Read よ in nearly every word: 予後 (よご) is a doctor's word for prognosis.",
      "The top looks like katakana マ; the bottom is one vertical with a hook."
    ],
    lookalikes: [],
    examples: [
      { w: "予約", r: "よやく", m: "appointment, booking" },
      { w: "予診", r: "よしん", m: "preliminary check before seeing the doctor" },
      { w: "予後", r: "よご", m: "prognosis" }
    ]
  },
  {
    k: "約", meaning: "promise, approximately", on: ["ヤク"], kun: [], group: "c-desk", strokes: 9, radical: "糸",
    mnemonic: "A thread 糸 tied round 勺, a ladle scooping a little: a knot to remind you of a promise.",
    notes: [
      "予約 (よやく) is an appointment; 先約 (せんやく) is an earlier engagement.",
      "Before a number it means 'about': 待ち時間 約30分 (まちじかん やくさんじゅっぷん, waiting time about 30 minutes)."
    ],
    lookalikes: [],
    examples: [
      { w: "予約", r: "よやく", m: "appointment, booking" },
      { w: "先約", r: "せんやく", m: "prior engagement" },
      { w: "約一時間", r: "やくいちじかん", m: "about an hour" }
    ]
  },
  {
    k: "番", meaning: "number, turn", on: ["バン"], kun: [], group: "c-desk", strokes: 12, radical: "田",
    mnemonic: "Seeds 釆 scattered by hand over a rice field 田: the plots are sown one by one, each taking its turn.",
    notes: [
      "番号 (ばんごう) is a number in a series; clinics hand you a 受付番号 (うけつけばんごう) and call it out or show it on a screen.",
      "After a number it means 'No.': 3番の方 (さんばんのかた, number three, please).",
      "一番 (いちばん) is 'number one', and so 'most'."
    ],
    lookalikes: [],
    examples: [
      { w: "番号", r: "ばんごう", m: "number" },
      { w: "一番", r: "いちばん", m: "number one; most" },
      { w: "当番", r: "とうばん", m: "(person) on duty" }
    ]
  },
  {
    k: "号", meaning: "number, sign", on: ["ゴウ"], kun: [], group: "c-desk", strokes: 5, radical: "口",
    mnemonic: "A mouth 口 opened wide over a bent line: calling out a number at the top of your voice.",
    notes: [
      "After a number it marks a room or item: 302号室 (さんびゃくにごうしつ, room 302).",
      "Forms ask for your 電話番号 (でんわばんごう, phone number).",
      "番 is your place in line and 号 the number itself; together they make 番号 (ばんごう)."
    ],
    lookalikes: [],
    examples: [
      { w: "番号", r: "ばんごう", m: "number" },
      { w: "電話番号", r: "でんわばんごう", m: "phone number" },
      { w: "号室", r: "ごうしつ", m: "room number" }
    ]
  },
  {
    k: "待", meaning: "wait", on: ["タイ"], kun: ["ま.つ"], group: "c-desk", strokes: 9, radical: "彳",
    mnemonic: "Footsteps 彳 stop outside a temple 寺 and stay there: waiting your turn.",
    notes: [
      "待合室 (まちあいしつ) is the waiting room; the sign drops the okurigana of 待ち合い.",
      "お待ちください (おまちください, please wait) is the phrase you hear at reception.",
      "Don't confuse with 時 (time), which has the sun on the left instead of footsteps."
    ],
    lookalikes: ["時"],
    examples: [
      { w: "待合室", r: "まちあいしつ", m: "waiting room" },
      { w: "待つ", r: "まつ", m: "to wait" },
      { w: "待ち時間", r: "まちじかん", m: "waiting time" }
    ]
  },
  {
    k: "合", meaning: "fit, join", on: ["ゴウ", "ガッ"], kun: ["あ.う", "あ.わせる"], group: "c-desk", strokes: 6, radical: "口",
    mnemonic: "A lid closing down over a mouth 口: the two fit together perfectly.",
    notes: [
      "In a clinic: 待合室 (まちあいしつ, waiting room) and 合計 (ごうけい, total) on the bill.",
      "Read あい in 場合 (ばあい, case): ...の場合 (in the case of...) on forms. Shortens to がっ in 合体 (がったい, merging).",
      "会 and 今 have the same roof on top; 合 has a line and a mouth underneath."
    ],
    lookalikes: ["会", "今"],
    examples: [
      { w: "待合室", r: "まちあいしつ", m: "waiting room" },
      { w: "合計", r: "ごうけい", m: "total" },
      { w: "場合", r: "ばあい", m: "case, situation" }
    ]
  },
  {
    k: "室", meaning: "room", on: ["シツ"], kun: [], group: "c-desk", strokes: 9, radical: "宀",
    mnemonic: "Under a roof 宀 stands 至, an arrow that has reached its target: the place you arrive at under the roof is a room.",
    notes: [
      "Ends room names on hospital doors: 診察室 (しんさつしつ, consultation room), 待合室 (まちあいしつ, waiting room), 化粧室 (けしょうしつ, toilets).",
      "Room numbers use 号室: 302号室 (さんびゃくにごうしつ)."
    ],
    lookalikes: [],
    examples: [
      { w: "待合室", r: "まちあいしつ", m: "waiting room" },
      { w: "診察室", r: "しんさつしつ", m: "consultation room" },
      { w: "室内", r: "しつない", m: "indoors" }
    ]
  },
  {
    k: "初", meaning: "first, beginning", on: ["ショ"], kun: ["はじ.め", "はじ.めて", "はつ"], group: "c-desk", strokes: 7, radical: "刀",
    mnemonic: "Clothing 衤 and a knife 刀: the first step in making a garment is the first cut of the cloth.",
    notes: [
      "初診 (しょしん) is your first visit to a clinic; there is often a separate 初診受付 desk and an extra 初診料 (しょしんりょう) fee.",
      "初めて (はじめて) is 'for the first time'. はつ is a prefix: 初日の出 (はつひので, first sunrise of the year).",
      "The left is the clothing radical 衤, with one more stroke than the shrine radical."
    ],
    lookalikes: [],
    examples: [
      { w: "初診", r: "しょしん", m: "first visit (to a clinic)" },
      { w: "初めて", r: "はじめて", m: "for the first time" },
      { w: "初日", r: "しょにち", m: "first day" }
    ]
  },
  {
    k: "再", meaning: "again", on: ["サイ", "サ"], kun: ["ふたた.び"], group: "c-desk", strokes: 6, radical: "冂",
    mnemonic: "A lid 一 laid on 冉, a frame with two crossbars: the same shelf built a second time, one layer on top of the other.",
    notes: [
      "再診 (さいしん) is a follow-up visit; returning patients use the 再来受付 (さいらいうけつけ) desk or machine.",
      "Read さ in 再来年 (さらいねん, the year after next).",
      "ふたたび (again) is formal written Japanese."
    ],
    lookalikes: [],
    examples: [
      { w: "再診", r: "さいしん", m: "follow-up visit" },
      { w: "再来", r: "さいらい", m: "return visit" },
      { w: "再来年", r: "さらいねん", m: "the year after next" }
    ]
  },
  {
    k: "診", meaning: "examine (a patient)", on: ["シン"], kun: ["み.る"], group: "c-desk", strokes: 12, radical: "言",
    mnemonic: "Words 言 on the left, and on the right a person with three strands of long hair: the doctor asks questions and looks you over from head to toe.",
    notes: [
      "休診 (きゅうしん) on a clinic door means closed for consultations, as in 本日休診 (ほんじつきゅうしん, closed today).",
      "A doctor 'sees' a patient with 診る (みる), not 見る.",
      "受診 (じゅしん) is going to see a doctor; 初診 and 再診 are first and follow-up visits."
    ],
    lookalikes: [],
    examples: [
      { w: "診察", r: "しんさつ", m: "medical examination" },
      { w: "休診", r: "きゅうしん", m: "closed (no consultations)" },
      { w: "受診", r: "じゅしん", m: "seeing a doctor" }
    ]
  },
  {
    k: "察", meaning: "observe, judge", on: ["サツ"], kun: [], group: "c-desk", strokes: 14, radical: "宀",
    mnemonic: "Under a roof 宀, a festival 祭 offering is laid out for close inspection: everything is carefully observed.",
    notes: [
      "In a clinic: 診察 (しんさつ, examination), 診察室 (しんさつしつ, consultation room), 診察券 (しんさつけん, patient card).",
      "察する (さっする) means to sense or guess what someone feels."
    ],
    lookalikes: [],
    examples: [
      { w: "診察", r: "しんさつ", m: "medical examination" },
      { w: "診察室", r: "しんさつしつ", m: "consultation room" },
      { w: "察する", r: "さっする", m: "to sense, to guess" }
    ]
  },
  {
    k: "券", meaning: "ticket", on: ["ケン"], kun: [], group: "c-desk", strokes: 8, radical: "刀",
    mnemonic: "Two hands rolling up a strip of paper, with a knife 刀 underneath: a ticket cut off the roll.",
    notes: [
      "診察券 (しんさつけん) is the patient card a clinic gives you; show it at the 受付 every visit.",
      "食券 (しょっけん) is a meal ticket from a vending machine: しょく shortens to しょっ.",
      "The bottom is 刀 (knife), with a hook, not a plain line."
    ],
    lookalikes: [],
    examples: [
      { w: "診察券", r: "しんさつけん", m: "patient card" },
      { w: "乗車券", r: "じょうしゃけん", m: "train ticket" },
      { w: "食券", r: "しょっけん", m: "meal ticket" }
    ]
  },
  {
    k: "保", meaning: "protect, keep", on: ["ホ"], kun: ["たも.つ"], group: "c-desk", strokes: 9, radical: "亻",
    mnemonic: "A person 亻 beside 呆, a baby wrapped in a blanket: someone holding a child and keeping it safe.",
    notes: [
      "Reception asks for your 保険証 (ほけんしょう, health insurance card): 保険証をお願いします (ほけんしょうをおねがいします).",
      "保つ (たもつ) is to keep or maintain.",
      "Don't confuse with 体 (body): 保 has a mouth 口 on top of the tree 木."
    ],
    lookalikes: ["体"],
    examples: [
      { w: "保険", r: "ほけん", m: "insurance" },
      { w: "保険証", r: "ほけんしょう", m: "health insurance card" },
      { w: "保護", r: "ほご", m: "protection" }
    ]
  },
  {
    k: "険", meaning: "steep, risky", on: ["ケン"], kun: ["けわ.しい"], group: "c-desk", strokes: 11, radical: "阝",
    mnemonic: "Hill-steps on the left and a steep peaked roof on the right: a steep, risky climb you'd want insurance for.",
    notes: [
      "保険 (ほけん, insurance) at the desk; 危険 (きけん, danger) on warning signs.",
      "険しい (けわしい) means steep or stern.",
      "Same right side as 検 (examine), which has 木 on the left; 険 has the hill."
    ],
    lookalikes: ["検"],
    examples: [
      { w: "保険", r: "ほけん", m: "insurance" },
      { w: "危険", r: "きけん", m: "danger" },
      { w: "保険料", r: "ほけんりょう", m: "insurance premium" }
    ]
  },
  {
    k: "証", meaning: "proof, certificate", on: ["ショウ"], kun: [], group: "c-desk", strokes: 12, radical: "言",
    mnemonic: "Words 言 that are correct 正: a statement you can prove, written down on a certificate.",
    notes: [
      "Ends the names of ID cards: 保険証 (ほけんしょう, insurance card), 学生証 (がくせいしょう, student ID).",
      "Read しょう; the kun reading is literary and rarely seen."
    ],
    lookalikes: [],
    examples: [
      { w: "保険証", r: "ほけんしょう", m: "health insurance card" },
      { w: "学生証", r: "がくせいしょう", m: "student ID card" },
      { w: "証人", r: "しょうにん", m: "witness" }
    ]
  },
  {
    k: "会", meaning: "meet, meeting", on: ["カイ"], kun: ["あ.う"], group: "c-desk", strokes: 6, radical: "人",
    mnemonic: "People 人 gathered under one roof over 云, clouds of talk: a meeting.",
    notes: [
      "In a hospital, 会計 (かいけい) is the cashier where you pay, and 面会 (めんかい) is visiting a patient: 面会時間 (めんかいじかん, visiting hours).",
      "会う (あう) is to meet a person.",
      "合 and 今 have the same roof; 会 has 云 underneath."
    ],
    lookalikes: ["合", "今"],
    examples: [
      { w: "会計", r: "かいけい", m: "payment, cashier" },
      { w: "面会", r: "めんかい", m: "visiting (a patient)" },
      { w: "会う", r: "あう", m: "to meet" }
    ]
  },
  {
    k: "計", meaning: "measure, total", on: ["ケイ"], kun: ["はか.る"], group: "c-desk", strokes: 9, radical: "言",
    mnemonic: "Words 言 and ten 十: counting out loud up to ten and adding everything up.",
    notes: [
      "会計 (かいけい) is the payment counter; you go there last, after seeing the doctor.",
      "-計 can mean a measuring device: 体温計 (たいおんけい, thermometer). 時計 (とけい, clock) has an irregular reading.",
      "計る (はかる) is to measure, especially time."
    ],
    lookalikes: [],
    examples: [
      { w: "会計", r: "かいけい", m: "payment, cashier" },
      { w: "体温計", r: "たいおんけい", m: "thermometer" },
      { w: "時計", r: "とけい", m: "clock, watch" }
    ]
  },
  {
    k: "様", meaning: "Mr., Ms. (polite), manner", on: ["ヨウ"], kun: ["さま"], group: "c-desk", strokes: 14, radical: "木",
    mnemonic: "A tree 木 beside a sheep standing over water: a calm, elegant scene, and the polite way to address someone.",
    notes: [
      "A polite suffix after names: reception calls you スミス様 (スミスさま), and signs say 患者様 (かんじゃさま) and お子様 (おこさま, children).",
      "Read よう in 様子 (ようす, condition): 様子を見ましょう (ようすをみましょう, let's wait and see)."
    ],
    lookalikes: [],
    examples: [
      { w: "患者様", r: "かんじゃさま", m: "patient (polite)" },
      { w: "お子様", r: "おこさま", m: "child (polite)" },
      { w: "様子", r: "ようす", m: "condition, state" }
    ]
  },

  /* ========== Clinic & hospital pack: symptoms and tests ========== */
  {
    k: "体", meaning: "body", on: ["タイ"], kun: ["からだ"], group: "c-body", strokes: 7, radical: "亻",
    mnemonic: "A person 亻 beside 本, a tree with its roots marked: your body is what you are rooted in.",
    notes: [
      "Forms and nurses ask for your 体温 (たいおん, body temperature).",
      "On its own read からだ: 体がだるい (からだがだるい, I feel sluggish).",
      "Don't confuse with 休 (rest), which has 木 without the extra line at the bottom."
    ],
    lookalikes: ["休", "保"],
    examples: [
      { w: "体温", r: "たいおん", m: "body temperature" },
      { w: "体内", r: "たいない", m: "inside the body" },
      { w: "大体", r: "だいたい", m: "roughly, mostly" }
    ]
  },
  {
    k: "熱", meaning: "fever, heat", on: ["ネツ"], kun: ["あつ.い"], group: "c-body", strokes: 15, radical: "灬",
    mnemonic: "埶, a gardener planting a seedling, with fire 灬 underneath: working in the blazing sun until you burn up with fever.",
    notes: [
      "熱 (ねつ) on its own is a fever: 熱があります (ねつがあります, I have a fever). 高熱 (こうねつ) is a high fever.",
      "熱い (あつい) is hot to the touch; hot weather is a different あつい with another kanji."
    ],
    lookalikes: [],
    examples: [
      { w: "熱", r: "ねつ", m: "fever, heat" },
      { w: "高熱", r: "こうねつ", m: "high fever" },
      { w: "熱い", r: "あつい", m: "hot (to the touch)" }
    ]
  },
  {
    k: "痛", meaning: "pain, hurt", on: ["ツウ"], kun: ["いた.い", "いた.む"], group: "c-body", strokes: 12, radical: "疒",
    mnemonic: "Under the sickbed roof 疒, 甬, a bucket going up and down a well: pain that throbs up and down.",
    notes: [
      "痛い (いたい) is 'it hurts'; doctors ask どこが痛いですか (where does it hurt?).",
      "In compounds read つう: 歯痛 (しつう, toothache).",
      "Same 疒 roof as 病 (illness)."
    ],
    lookalikes: ["病"],
    examples: [
      { w: "痛い", r: "いたい", m: "painful, it hurts" },
      { w: "痛み", r: "いたみ", m: "pain" },
      { w: "歯痛", r: "しつう", m: "toothache" }
    ]
  },
  {
    k: "血", meaning: "blood", on: ["ケツ"], kun: ["ち"], group: "c-body", strokes: 6, radical: "血",
    mnemonic: "A dish 皿 with a single drop on top: blood collected in a bowl.",
    notes: [
      "On its own read ち; in compounds けつ: 血液 (けつえき, blood).",
      "Sound changes: 出血 (しゅっけつ, bleeding) and 鼻血 (はなぢ, nosebleed).",
      "Don't confuse with 皿 (dish): 血 has an extra drop on top."
    ],
    lookalikes: [],
    examples: [
      { w: "血液", r: "けつえき", m: "blood" },
      { w: "出血", r: "しゅっけつ", m: "bleeding" },
      { w: "鼻血", r: "はなぢ", m: "nosebleed" }
    ]
  },
  {
    k: "液", meaning: "liquid, fluid", on: ["エキ"], kun: [], group: "c-body", strokes: 11, radical: "氵",
    mnemonic: "Water 氵 beside night 夜: dew that gathers in the night, a liquid.",
    notes: [
      "血液 (けつえき) is the medical word for blood; 血液検査 (けつえきけんさ) is a blood test.",
      "Only reading えき: 液体 (えきたい, liquid)."
    ],
    lookalikes: [],
    examples: [
      { w: "血液", r: "けつえき", m: "blood" },
      { w: "液体", r: "えきたい", m: "liquid" },
      { w: "血液検査", r: "けつえきけんさ", m: "blood test" }
    ]
  },
  {
    k: "温", meaning: "warm", on: ["オン"], kun: ["あたた.かい", "あたた.める"], group: "c-body", strokes: 12, radical: "氵",
    mnemonic: "Water 氵 next to 昷, a bowl warming in the sun: warm water.",
    notes: [
      "体温 (たいおん, body temperature): you may be asked to check it with a 体温計 (たいおんけい) at the entrance.",
      "温かい (あたたかい) is warm, for food, drinks and feelings; warm weather usually uses a different kanji.",
      "気温 (きおん) is the air temperature in weather reports."
    ],
    lookalikes: [],
    examples: [
      { w: "体温", r: "たいおん", m: "body temperature" },
      { w: "気温", r: "きおん", m: "air temperature" },
      { w: "温かい", r: "あたたかい", m: "warm" }
    ]
  },
  {
    k: "検", meaning: "examine, inspect", on: ["ケン"], kun: [], group: "c-body", strokes: 12, radical: "木",
    mnemonic: "A tree 木 beside a peaked roof gathering things together: inspectors checking every log one by one.",
    notes: [
      "検査 (けんさ) is a test or examination; 検診 (けんしん) is a health check-up.",
      "検温 (けんおん) on entrance signs asks you to take your temperature.",
      "Same right side as 険 (in 保険); 検 has 木 on the left."
    ],
    lookalikes: ["険"],
    examples: [
      { w: "検査", r: "けんさ", m: "test, examination" },
      { w: "検診", r: "けんしん", m: "health check-up" },
      { w: "検温", r: "けんおん", m: "taking one's temperature" }
    ]
  },
  {
    k: "査", meaning: "investigate", on: ["サ"], kun: [], group: "c-body", strokes: 9, radical: "木",
    mnemonic: "A tree 木 standing on 且, a stand of stacked boards: inspecting the timber pile carefully.",
    notes: [
      "Mostly seen in 検査 (けんさ, test) and 検査室 (けんさしつ, testing room, lab).",
      "査証 (さしょう) is the formal word for a visa."
    ],
    lookalikes: [],
    examples: [
      { w: "検査", r: "けんさ", m: "test, examination" },
      { w: "検査室", r: "けんさしつ", m: "testing room, lab" },
      { w: "査証", r: "さしょう", m: "visa" }
    ]
  },
  {
    k: "急", meaning: "hurry, emergency", on: ["キュウ"], kun: ["いそ.ぐ"], group: "c-body", strokes: 9, radical: "心",
    mnemonic: "A hand grabbing from above and a heart 心 below: your heart racing as someone pulls you along. Hurry!",
    notes: [
      "On hospital signs: 救急 (きゅうきゅう, emergency) and 救急外来 (きゅうきゅうがいらい, emergency outpatients).",
      "急病 (きゅうびょう) is a sudden illness; 急に (きゅうに) means suddenly.",
      "急ぐ (いそぐ) is to hurry."
    ],
    lookalikes: [],
    examples: [
      { w: "救急", r: "きゅうきゅう", m: "emergency (care)" },
      { w: "急病", r: "きゅうびょう", m: "sudden illness" },
      { w: "急ぐ", r: "いそぐ", m: "to hurry" }
    ]
  },
  {
    k: "救", meaning: "rescue, save", on: ["キュウ"], kun: ["すく.う"], group: "c-body", strokes: 11, radical: "攵",
    mnemonic: "求 (a request) and a hand with a stick 攵: answering a cry for help and setting off at once to the rescue.",
    notes: [
      "救急車 (きゅうきゅうしゃ) is an ambulance; in Japan, dial 119 for an ambulance or the fire brigade.",
      "Hospitals mark the 救急入口 (きゅうきゅういりぐち, emergency entrance).",
      "救う (すくう) is to save or rescue."
    ],
    lookalikes: [],
    examples: [
      { w: "救急車", r: "きゅうきゅうしゃ", m: "ambulance" },
      { w: "救護", r: "きゅうご", m: "first aid, relief" },
      { w: "救う", r: "すくう", m: "to save, to rescue" }
    ]
  },

  /* ========== Clinic & hospital pack: signs and notices ========== */
  {
    k: "口", meaning: "mouth, opening", on: ["コウ"], kun: ["くち"], group: "c-signs", strokes: 3, radical: "口",
    mnemonic: "An open mouth drawn as a square: say 'ah' for the doctor and this is the shape you make.",
    notes: [
      "On signs it means a way in or out: 入口 (いりぐち, entrance), 出口 (でぐち, exit), 非常口 (ひじょうぐち, emergency exit).",
      "くち becomes ぐち when it follows another word, as in 出口 and 入口. こう is the on reading, as in 人口 (じんこう, population).",
      "Don't confuse it with 日, which has a line across the middle."
    ],
    lookalikes: ["日"],
    examples: [
      { w: "入口", r: "いりぐち", m: "entrance" },
      { w: "出口", r: "でぐち", m: "exit" },
      { w: "非常口", r: "ひじょうぐち", m: "emergency exit" }
    ]
  },
  {
    k: "非", meaning: "non-, un-", on: ["ヒ"], kun: [], group: "c-signs", strokes: 8, radical: "非",
    mnemonic: "Two wings back to back, each beating the opposite way: they refuse to agree, so the answer is 'not'.",
    notes: [
      "A negative prefix like 'non-' or 'un-'. In hospitals you meet it in 非常口 (ひじょうぐち, emergency exit), marked with the green running figure.",
      "非常に (ひじょうに) means 'very, extremely', common in formal speech and writing.",
      "Like 北, it is two halves back to back; 非 has three short strokes on each side."
    ],
    lookalikes: ["北"],
    examples: [
      { w: "非常口", r: "ひじょうぐち", m: "emergency exit" },
      { w: "非常ベル", r: "ひじょうベル", m: "emergency alarm bell" },
      { w: "非常に", r: "ひじょうに", m: "very, extremely" }
    ]
  },
  {
    k: "常", meaning: "usual, always", on: ["ジョウ"], kun: ["つね"], group: "c-signs", strokes: 11, radical: "巾",
    mnemonic: "Under the 尚 eaves a towel hangs 吊 from the same hook it has always hung from: the usual way of things.",
    notes: [
      "On signs it nearly always comes in 非常 (ひじょう, emergency): 非常口 (emergency exit), 非常時 (ひじょうじ, in an emergency).",
      "日常 (にちじょう) is daily life; 常に (つねに, always) is a written-style word.",
      "It is 尚 on top with a hanging cloth at the bottom; that cloth is the radical."
    ],
    lookalikes: [],
    examples: [
      { w: "非常時", r: "ひじょうじ", m: "(time of) emergency" },
      { w: "日常", r: "にちじょう", m: "everyday life" },
      { w: "常に", r: "つねに", m: "always, constantly" }
    ]
  },
  {
    k: "階", meaning: "floor, storey", on: ["カイ"], kun: [], group: "c-signs", strokes: 12, radical: "阝",
    mnemonic: "Everyone 皆 climbing a hillside ⻖ step by step: a staircase going up, floor by floor.",
    notes: [
      "Floor numbers on lift panels and hospital directories: 一階 (いっかい) is the ground floor, 二階 (にかい) the floor above.",
      "Sound changes: 三階 is usually さんがい and 何階 is なんがい (which floor?).",
      "The hill side ⻖ on the left is the same as in 院 (hospital)."
    ],
    lookalikes: ["院"],
    examples: [
      { w: "一階", r: "いっかい", m: "first (ground) floor" },
      { w: "二階", r: "にかい", m: "second floor (one up)" },
      { w: "何階", r: "なんがい", m: "which floor?" }
    ]
  },
  {
    k: "化", meaning: "change, -ize", on: ["カ", "ケ"], kun: ["ば.ける"], group: "c-signs", strokes: 4, radical: "匕",
    mnemonic: "A person 亻 standing next to someone flipped upside down 匕: people changing shape before your eyes.",
    notes: [
      "On signs it's mostly in 化粧室 (けしょうしつ), a polite word for the toilets.",
      "Read け in 化粧 (けしょう, make-up); elsewhere か, as in 化学 (かがく, chemistry).",
      "お化け (おばけ) is a ghost: something that has changed its shape."
    ],
    lookalikes: [],
    examples: [
      { w: "化粧室", r: "けしょうしつ", m: "restroom, toilets" },
      { w: "化粧", r: "けしょう", m: "make-up" },
      { w: "化学", r: "かがく", m: "chemistry" }
    ]
  },
  {
    k: "粧", meaning: "make-up, adorn", on: ["ショウ"], kun: [], group: "c-signs", strokes: 12, radical: "米",
    mnemonic: "Rice 米 powder dabbed on the face in an old country house 庄: putting on make-up the traditional way.",
    notes: [
      "Almost only seen in 化粧 (けしょう, make-up) and 化粧室 (けしょうしつ), the polite toilet sign in hospitals, stations and shops.",
      "化粧室 and トイレ are the same place; 化粧室 just sounds more refined.",
      "料 also starts with 米; look at the right side to tell them apart."
    ],
    lookalikes: ["料"],
    examples: [
      { w: "化粧室", r: "けしょうしつ", m: "restroom, toilets" },
      { w: "化粧", r: "けしょう", m: "make-up" },
      { w: "化粧水", r: "けしょうすい", m: "skin toner, lotion" }
    ]
  },
  {
    k: "禁", meaning: "prohibition, ban", on: ["キン"], kun: [], group: "c-signs", strokes: 13, radical: "示",
    mnemonic: "A sacred altar 示 hidden behind a grove of trees 林: a holy spot where you are forbidden to go.",
    notes: [
      "The 'no' of Japanese signs: 禁煙 (きんえん, no smoking) is on almost every hospital door, and 院内禁煙 means no smoking anywhere on the premises.",
      "Signs ending in きんし mean 'prohibited'; the first kanji of that word is 禁.",
      "The altar 示 at the bottom is a full five-stroke 示, not squeezed."
    ],
    lookalikes: [],
    examples: [
      { w: "禁煙", r: "きんえん", m: "no smoking" },
      { w: "院内禁煙", r: "いんないきんえん", m: "no smoking on the premises" },
      { w: "禁じる", r: "きんじる", m: "to forbid" }
    ]
  },
  {
    k: "煙", meaning: "smoke", on: ["エン"], kun: ["けむり", "けむ.い"], group: "c-signs", strokes: 13, radical: "火",
    mnemonic: "Fire 火 on the left and a chimney stack 垔 on the right, puffing out clouds of smoke.",
    notes: [
      "On signs it's in 禁煙 (きんえん, no smoking). Hospitals are usually 禁煙 inside and out.",
      "The noun is けむり (smoke); 煙い (けむい) means smoky, stinging your eyes.",
      "えん is the on reading in compounds; on its own the word is always けむり."
    ],
    lookalikes: [],
    examples: [
      { w: "禁煙", r: "きんえん", m: "no smoking" },
      { w: "煙", r: "けむり", m: "smoke" },
      { w: "煙い", r: "けむい", m: "smoky" }
    ]
  },
  {
    k: "注", meaning: "pour, attention", on: ["チュウ"], kun: ["そそ.ぐ"], group: "c-signs", strokes: 8, radical: "氵",
    mnemonic: "Water 氵 poured carefully for the master 主: pay close attention or you'll spill it.",
    notes: [
      "注意 (ちゅうい, caution) is the warning word on yellow signs.",
      "In a clinic you'll hear ちゅうしゃ (injection); its first kanji is 注, as in pouring medicine in.",
      "Don't mix it up with 駐 (parking): also ちゅう with 主 on the right, but with a horse instead of water."
    ],
    lookalikes: ["駐"],
    examples: [
      { w: "注意", r: "ちゅうい", m: "caution, care" },
      { w: "注意書き", r: "ちゅういがき", m: "cautionary note, warning label" },
      { w: "注ぐ", r: "そそぐ", m: "to pour" }
    ]
  },
  {
    k: "意", meaning: "mind, intention", on: ["イ"], kun: [], group: "c-signs", strokes: 13, radical: "心",
    mnemonic: "A sound 音 rising up out of the heart 心: what your mind really means to say.",
    notes: [
      "On signs it's in 注意 (ちゅうい, caution). 意見 (いけん) is an opinion and 用意 (ようい) is getting ready.",
      "医 and 意 are both read い; in a clinic, 医 is the doctor one.",
      "It is 音 (sound) stacked on 心 (heart): thirteen strokes, but only two parts."
    ],
    lookalikes: [],
    examples: [
      { w: "注意", r: "ちゅうい", m: "caution, care" },
      { w: "意見", r: "いけん", m: "opinion" },
      { w: "用意", r: "ようい", m: "preparation" }
    ]
  },
  {
    k: "危", meaning: "danger", on: ["キ"], kun: ["あぶ.ない"], group: "c-signs", strokes: 6, radical: "卩",
    mnemonic: "A figure perched at the top, peering over a cliff edge 厄 where someone crouches below: dangerous!",
    notes: [
      "危険 (きけん, danger) is the big red word on warning signs.",
      "危ない (あぶない) is the everyday shout for 'Look out!' or 'That's dangerous'.",
      "危険性 (きけんせい) means risk, as in the risk of side effects a doctor explains."
    ],
    lookalikes: [],
    examples: [
      { w: "危ない", r: "あぶない", m: "dangerous; look out!" },
      { w: "危険", r: "きけん", m: "danger" },
      { w: "危険性", r: "きけんせい", m: "risk" }
    ]
  },
  {
    k: "性", meaning: "sex, nature", on: ["セイ"], kun: [], group: "c-signs", strokes: 8, radical: "忄",
    mnemonic: "A heart 忄 standing next to life 生: the nature you are born with.",
    notes: [
      "On forms the 'sex' box is せいべつ: tick 男性 (だんせい, male) or 女性 (じょせい, female).",
      "As a suffix it means '-type' or '-ness': 急性 (きゅうせい, acute), 危険性 (きけんせい, risk).",
      "It is 生 (life) with the standing heart 忄 on the left."
    ],
    lookalikes: [],
    examples: [
      { w: "女性", r: "じょせい", m: "woman, female" },
      { w: "男性", r: "だんせい", m: "man, male" },
      { w: "急性", r: "きゅうせい", m: "acute (illness)" }
    ]
  },
  {
    k: "示", meaning: "show, indicate", on: ["ジ", "シ"], kun: ["しめ.す"], group: "c-signs", strokes: 5, radical: "示",
    mnemonic: "An altar table with offerings dripping down its sides: the place where the gods show their will.",
    notes: [
      "Reception signs say 保険証をご提示ください (ほけんしょうをごていじください): please show your insurance card.",
      "Usually じ in compounds, as in 提示 (ていじ); 示す (しめす) is the verb 'to show, point out'.",
      "It is the bottom half of 禁 (prohibition)."
    ],
    lookalikes: [],
    examples: [
      { w: "提示", r: "ていじ", m: "showing, presenting (a card)" },
      { w: "示す", r: "しめす", m: "to show, indicate" },
      { w: "示し合わせる", r: "しめしあわせる", m: "to arrange beforehand" }
    ]
  },
  {
    k: "必", meaning: "certain, without fail", on: ["ヒツ"], kun: ["かなら.ず"], group: "c-signs", strokes: 5, radical: "心",
    mnemonic: "A heart 心 with a spear 丿 driven right through it: once it's hit, the outcome is certain.",
    notes: [
      "必ず (かならず) means 'without fail', as in reminders to bring your 保険証 every visit.",
      "Forms mark required boxes with ひっす (must fill in); its first kanji is 必.",
      "It looks like 心 (heart) with a slash through it, but the stroke order is different, so learn it on its own."
    ],
    lookalikes: [],
    examples: [
      { w: "必ず", r: "かならず", m: "without fail, always" },
      { w: "必見", r: "ひっけん", m: "must-see" },
      { w: "必読", r: "ひつどく", m: "must-read" }
    ]
  },
  {
    k: "面", meaning: "face, surface", on: ["メン"], kun: ["おもて"], group: "c-signs", strokes: 9, radical: "面",
    mnemonic: "A face in a frame with an eye peering out of the middle: a mask hanging on the wall.",
    notes: [
      "In hospitals: 面会 (めんかい, visiting a patient). Ward signs list 面会時間 (めんかいじかん, visiting hours).",
      "It also means a side or direction: 東京方面 (とうきょうほうめん, toward Tokyo) on road and station signs.",
      "めん in almost every compound; おもて (surface, front) is rarer."
    ],
    lookalikes: [],
    examples: [
      { w: "面会", r: "めんかい", m: "visit (to a patient)" },
      { w: "面会時間", r: "めんかいじかん", m: "visiting hours" },
      { w: "方面", r: "ほうめん", m: "direction, area" }
    ]
  },
  {
    k: "台", meaning: "stand, platform", on: ["ダイ", "タイ"], kun: [], group: "c-signs", strokes: 5, radical: "口",
    mnemonic: "A nose 厶 perched above a mouth 口: a statue's head sitting on its stand.",
    notes: [
      "A raised stand or table: 診察台 (しんさつだい) is the examination couch.",
      "Also the counter for machines and vehicles: 車一台 (くるまいちだい, one car).",
      "Read たい in a few words, such as たいふう (typhoon)."
    ],
    lookalikes: [],
    examples: [
      { w: "診察台", r: "しんさつだい", m: "examination table" },
      { w: "一台", r: "いちだい", m: "one (car, machine)" },
      { w: "台車", r: "だいしゃ", m: "hand cart, trolley" }
    ]
  },
  {
    k: "乗", meaning: "ride, board", on: ["ジョウ"], kun: ["の.る", "の.せる"], group: "c-signs", strokes: 9, radical: "丿",
    mnemonic: "A thousand 千 people piled on top of a tree 木: everybody climb aboard and ride.",
    notes: [
      "乗り場 (のりば) is the boarding point for taxis and buses at the hospital entrance.",
      "乗る (のる) takes に: タクシーに乗る (to take a taxi). 乗せる (のせる) is to give someone a ride.",
      "じょう in compounds such as 乗車 (じょうしゃ, boarding a vehicle)."
    ],
    lookalikes: [],
    examples: [
      { w: "乗る", r: "のる", m: "to ride, get on" },
      { w: "乗り場", r: "のりば", m: "boarding point, stand" },
      { w: "乗車", r: "じょうしゃ", m: "boarding (a vehicle)" }
    ]
  },
  {
    k: "倒", meaning: "fall, collapse", on: ["トウ"], kun: ["たお.れる", "たお.す"], group: "c-signs", strokes: 10, radical: "亻",
    mnemonic: "A person 亻 who has finally arrived 到 and collapses on the spot, exhausted.",
    notes: [
      "Warning signs reading てんとう注意 mean 'mind you don't fall'; the とう is 倒.",
      "倒れる (たおれる) is to fall over or collapse, also of a person fainting; 倒す (たおす) is to knock something over.",
      "面倒 (めんどう, bother, hassle) is a very common everyday word."
    ],
    lookalikes: [],
    examples: [
      { w: "倒れる", r: "たおれる", m: "to fall down, collapse" },
      { w: "倒す", r: "たおす", m: "to knock over" },
      { w: "面倒", r: "めんどう", m: "trouble, bother" }
    ]
  },
  {
    k: "遊", meaning: "play", on: ["ユウ"], kun: ["あそ.ぶ"], group: "c-signs", strokes: 12, radical: "辶",
    mnemonic: "A child under a fluttering flag 斿 dashing along the road ⻌: off to play.",
    notes: [
      "Waiting rooms may have a 遊び場 (あそびば, play area) for children.",
      "Signs say 危ないので遊ばないでください: it's dangerous, please don't play here.",
      "The road ⻌ is written last, sweeping under the rest."
    ],
    lookalikes: [],
    examples: [
      { w: "遊ぶ", r: "あそぶ", m: "to play" },
      { w: "遊び場", r: "あそびば", m: "play area" },
      { w: "外遊び", r: "そとあそび", m: "playing outdoors" }
    ]
  },
  {
    k: "等", meaning: "etc., equal, class", on: ["トウ"], kun: ["など", "ひと.しい"], group: "c-signs", strokes: 12, radical: "竹",
    mnemonic: "Bamboo 竹 tablets lined up at the temple 寺, all cut to equal length.",
    notes: [
      "On notices it means 'and so on' at the end of a list, read など or とう.",
      "Ranks and classes: 一等 (いっとう, first class, first prize), 上等 (じょうとう, top quality).",
      "待 has the same 寺 on the right; 等 has bamboo on top instead."
    ],
    lookalikes: ["待"],
    examples: [
      { w: "一等", r: "いっとう", m: "first class, first prize" },
      { w: "上等", r: "じょうとう", m: "superior, excellent" },
      { w: "等しい", r: "ひとしい", m: "equal" }
    ]
  },
  {
    k: "決", meaning: "decide", on: ["ケツ"], kun: ["き.める", "き.まる"], group: "c-signs", strokes: 7, radical: "氵",
    mnemonic: "Water 氵 bursting through a broken dam 夬: once it breaks, the matter is decided.",
    notes: [
      "決める (きめる) is to decide something; 決まる (きまる) is for it to be decided, as in 予約が決まる (the appointment is fixed).",
      "決まり (きまり) is a rule. 決して (けっして) + a negative means 'never'.",
      "The left side is water 氵, with three strokes."
    ],
    lookalikes: [],
    examples: [
      { w: "決める", r: "きめる", m: "to decide" },
      { w: "決まり", r: "きまり", m: "rule" },
      { w: "決して", r: "けっして", m: "never (with a negative)" }
    ]
  },
  {
    k: "願", meaning: "request, wish", on: ["ガン"], kun: ["ねが.う"], group: "c-signs", strokes: 19, radical: "頁",
    mnemonic: "A head 頁 bowed low at the spring 原 where the water rises, making a wish.",
    notes: [
      "お願いします (おねがいします, please) ends countless signs: 保険証の提示をお願いします (please show your insurance card).",
      "願う (ねがう) is to wish or hope; がん appears in 願書 (がんしょ, application form).",
      "Nineteen strokes: write the left half 原 completely before the head 頁."
    ],
    lookalikes: [],
    examples: [
      { w: "お願いします", r: "おねがいします", m: "please" },
      { w: "願う", r: "ねがう", m: "to wish, hope" },
      { w: "願書", r: "がんしょ", m: "application form" }
    ]
  },
  {
    k: "問", meaning: "question, ask", on: ["モン"], kun: ["と.う", "と.い"], group: "c-signs", strokes: 11, radical: "口",
    mnemonic: "A mouth 口 at the gate 門, calling out a question to whoever is inside.",
    notes: [
      "問診 (もんしん) is the doctor's questioning; the questionnaire you fill in first is the もんしんひょう.",
      "問い合わせ (といあわせ, enquiry): signs say お問い合わせは受付へ (enquiries at reception).",
      "間 (sun in the gate) and 聞 (ear in the gate) look alike; 問 has a mouth."
    ],
    lookalikes: ["間", "聞"],
    examples: [
      { w: "問診", r: "もんしん", m: "medical interview" },
      { w: "問い合わせ", r: "といあわせ", m: "enquiry" },
      { w: "問う", r: "とう", m: "to ask, question" }
    ]
  },
  {
    k: "当", meaning: "hit, this, right", on: ["トウ"], kun: ["あ.たる", "あ.てる"], group: "c-signs", strokes: 6, radical: "彐",
    mnemonic: "Three little sparks ⺌ falling into a waiting hand ⺕: caught, a direct hit.",
    notes: [
      "Formal 'this' or 'our' on signs: 当院 (とういん, this hospital/clinic). 当日 (とうじつ) is 'on the day', as in same-day appointments.",
      "本当 (ほんとう, true, really) is the everyday word.",
      "当たり (あたり) on a lottery or game means 'a win'; 当てる (あてる) is to hit or guess right."
    ],
    lookalikes: [],
    examples: [
      { w: "当院", r: "とういん", m: "this hospital, our clinic" },
      { w: "当日", r: "とうじつ", m: "the day itself, same day" },
      { w: "本当", r: "ほんとう", m: "truth; really" }
    ]
  },
  {
    k: "館", meaning: "building, hall", on: ["カン"], kun: [], group: "c-signs", strokes: 16, radical: "飠",
    mnemonic: "Food 飠 served at an official's 官 residence: a grand hall where guests are fed.",
    notes: [
      "Big hospitals have several buildings: 本館 (ほんかん) is the main one; others are named 東館, 西館 and so on.",
      "館内 (かんない) means inside the building, as in 館内禁煙 (no smoking inside).",
      "The left side is 食 squeezed narrow, as in 飲."
    ],
    lookalikes: ["飲"],
    examples: [
      { w: "本館", r: "ほんかん", m: "main building" },
      { w: "館内", r: "かんない", m: "inside the building" },
      { w: "会館", r: "かいかん", m: "hall, assembly hall" }
    ]
  },
  {
    k: "京", meaning: "capital", on: ["キョウ"], kun: [], group: "c-signs", strokes: 8, radical: "亠",
    mnemonic: "A lid 亠 over a window 口 on tall legs 小: the watchtower at the gate of the capital.",
    notes: [
      "Seen most in 東京 (とうきょう) and 京都 (きょうと).",
      "上京 (じょうきょう) is moving up to Tokyo from the regions.",
      "高 also has a lid 亠 and a 口, but 京 stands on 小."
    ],
    lookalikes: ["高"],
    examples: [
      { w: "東京", r: "とうきょう", m: "Tokyo" },
      { w: "京都", r: "きょうと", m: "Kyoto" },
      { w: "上京", r: "じょうきょう", m: "moving to Tokyo" }
    ]
  },
  {
    k: "都", meaning: "capital, metropolis", on: ["ト", "ツ"], kun: ["みやこ"], group: "c-signs", strokes: 11, radical: "阝",
    mnemonic: "People 者 crowding inside the city wall ⻏: a busy metropolis.",
    notes: [
      "東京都 (とうきょうと) is the Tokyo Metropolis, so Tokyo public hospitals carry 都 in their names.",
      "Read つ in 都合 (つごう, convenience): ご都合のよい日 is 'a day that suits you' when booking.",
      "The ⻏ here sits on the right; the same shape on the left, as in 院 and 階, is a different radical."
    ],
    lookalikes: [],
    examples: [
      { w: "京都", r: "きょうと", m: "Kyoto" },
      { w: "東京都", r: "とうきょうと", m: "Tokyo Metropolis" },
      { w: "都合", r: "つごう", m: "convenience, circumstances" }
    ]
  },
  {
    k: "府", meaning: "urban prefecture, office", on: ["フ"], kun: [], group: "c-signs", strokes: 8, radical: "广",
    mnemonic: "Under a big roof 广, officials attach 付 stamps to papers: a government office.",
    notes: [
      "Only two prefectures are 府: Kyoto (京都府, きょうとふ) and Osaka.",
      "On forms the address line may be labelled とどうふけん (prefecture); the ふ is 府.",
      "It is 付 under the 广 roof."
    ],
    lookalikes: ["付"],
    examples: [
      { w: "京都府", r: "きょうとふ", m: "Kyoto Prefecture" },
      { w: "府内", r: "ふない", m: "within the prefecture" },
      { w: "府中", r: "ふちゅう", m: "Fuchu (city name)" }
    ]
  },

  /* ========== Clinic & hospital pack: parking and fees ========== */
  {
    k: "駐", meaning: "park, stay", on: ["チュウ"], kun: [], group: "c-parking", strokes: 15, radical: "馬",
    mnemonic: "A horse 馬 tied up beside its master 主: parked and staying put.",
    notes: [
      "駐車場 (ちゅうしゃじょう, car park) is the word next to the big P sign at every hospital.",
      "Keep your 駐車券 (ちゅうしゃけん, parking ticket): many hospitals validate it at reception or the 会計 desk.",
      "注 (pour) also has 主 on the right and reads ちゅう; 駐 has a horse on the left."
    ],
    lookalikes: ["注"],
    examples: [
      { w: "駐車場", r: "ちゅうしゃじょう", m: "car park" },
      { w: "駐車券", r: "ちゅうしゃけん", m: "parking ticket" },
      { w: "駐車", r: "ちゅうしゃ", m: "parking" }
    ]
  },
  {
    k: "場", meaning: "place", on: ["ジョウ"], kun: ["ば"], group: "c-parking", strokes: 12, radical: "土",
    mnemonic: "Open earth 土 with the sun 昜 rising over it: a place where people gather.",
    notes: [
      "じょう after on readings, ば after kun ones: 駐車場 (ちゅうしゃじょう, car park) but 乗り場 (のりば, boarding point).",
      "場合 (ばあい, case): notices say 非常の場合 (in an emergency).",
      "The earth 土 on the left is written with the last stroke rising to the right."
    ],
    lookalikes: [],
    examples: [
      { w: "駐車場", r: "ちゅうしゃじょう", m: "car park" },
      { w: "乗り場", r: "のりば", m: "boarding point, stand" },
      { w: "場合", r: "ばあい", m: "case, occasion" }
    ]
  },
  {
    k: "利", meaning: "benefit, use", on: ["リ"], kun: ["き.く"], group: "c-parking", strokes: 7, radical: "刂",
    mnemonic: "A blade 刂 cutting ripe grain 禾: the harvest is your profit.",
    notes: [
      "利用 (りよう, use) is everywhere on notices: ご利用ください (please use), 駐車場をご利用の方 (car park users).",
      "利く (きく) means to work or be effective, but in everyday writing it is often in kana.",
      "科 also has grain 禾 on the left; 利 has a knife 刂, 科 a measure."
    ],
    lookalikes: ["科"],
    examples: [
      { w: "利用", r: "りよう", m: "use" },
      { w: "利用者", r: "りようしゃ", m: "user" },
      { w: "金利", r: "きんり", m: "interest rate" }
    ]
  },
  {
    k: "用", meaning: "use, business", on: ["ヨウ"], kun: ["もち.いる"], group: "c-parking", strokes: 5, radical: "用",
    mnemonic: "A wooden frame with a crossbar and a post through the middle: a handy tool, ready to use.",
    notes: [
      "~用 (よう) means 'for ~': 患者用 (かんじゃよう, for patients), 子ども用 (for children).",
      "利用 (りよう) is to use a service; 用意 (ようい) is to get ready.",
      "用 on its own (よう) is an errand or business: 何の用? (What do you need?)"
    ],
    lookalikes: [],
    examples: [
      { w: "利用", r: "りよう", m: "use" },
      { w: "用意", r: "ようい", m: "preparation" },
      { w: "患者用", r: "かんじゃよう", m: "for patients" }
    ]
  },
  {
    k: "方", meaning: "direction, person", on: ["ホウ"], kun: ["かた"], group: "c-parking", strokes: 4, radical: "方",
    mnemonic: "A signpost with a lid 亠 on top and a bent arm pointing out: go this direction.",
    notes: [
      "~方 (かた) is a polite 'person': reception signs say 初めての方 (first-time patients) and 患者の方 (patients).",
      "After a verb stem it means 'how to': 書き方 (かきかた, how to fill it in). ほう is direction: 方面 (ほうめん).",
      "万 (ten thousand) is similar but has no dot on top."
    ],
    lookalikes: ["万"],
    examples: [
      { w: "書き方", r: "かきかた", m: "how to write, fill in" },
      { w: "方面", r: "ほうめん", m: "direction, area" },
      { w: "あの方", r: "あのかた", m: "that person (polite)" }
    ]
  },
  {
    k: "分", meaning: "minute, part", on: ["フン", "ブン"], kun: ["わ.かる", "わ.ける"], group: "c-parking", strokes: 4, radical: "刀",
    mnemonic: "A knife 刀 slicing something into two halves 八: divide it up.",
    notes: [
      "Minutes: 五分 (ごふん), but 一分 (いっぷん), 三分 (さんぷん), 十分 (じゅっぷん). Car parks charge per 30分.",
      "On medicine bags: 三日分 (みっかぶん, three days' supply).",
      "分かる (わかる) is to understand; 分ける (わける) is to divide."
    ],
    lookalikes: [],
    examples: [
      { w: "五分", r: "ごふん", m: "five minutes" },
      { w: "三日分", r: "みっかぶん", m: "three days' supply" },
      { w: "分かる", r: "わかる", m: "to understand" }
    ]
  },
  {
    k: "料", meaning: "fee, materials", on: ["リョウ"], kun: [], group: "c-parking", strokes: 10, radical: "斗",
    mnemonic: "Rice 米 scooped out with a measuring ladle 斗: weigh it up, then pay the fee.",
    notes: [
      "料金 (りょうきん, fee): car park signs show 駐車料金 (ちゅうしゃりょうきん, parking charges).",
      "Signs saying むりょう mean free of charge; the りょう is 料. 料理 (りょうり) is cooking.",
      "粧 also starts with 米; 料 has the ladle 斗 on the right."
    ],
    lookalikes: ["粧"],
    examples: [
      { w: "料金", r: "りょうきん", m: "fee, charge" },
      { w: "駐車料金", r: "ちゅうしゃりょうきん", m: "parking fee" },
      { w: "料理", r: "りょうり", m: "cooking, dish" }
    ]
  },
  {
    k: "処", meaning: "deal with, prescribe", on: ["ショ"], kun: [], group: "c-parking", strokes: 5, radical: "几",
    mnemonic: "Feet 夂 walking up to a little bench 几, sitting down to deal with the matter.",
    notes: [
      "処方 (しょほう) is a prescription; you take the 処方せん (しょほうせん, prescription slip) to a pharmacy.",
      "処理 (しょり, processing, handling) appears on payment and parking notices.",
      "Only five strokes, but it is a high-frequency kanji on pharmacy signs."
    ],
    lookalikes: [],
    examples: [
      { w: "処方", r: "しょほう", m: "prescription" },
      { w: "処方せん", r: "しょほうせん", m: "prescription slip" },
      { w: "処理", r: "しょり", m: "processing, handling" }
    ]
  },
  {
    k: "理", meaning: "reason, logic", on: ["リ"], kun: [], group: "c-parking", strokes: 11, radical: "王",
    mnemonic: "A jewel 王 polished along the neat lines of a village 里 field: everything arranged by reason.",
    notes: [
      "Common words: 処理 (しょり, processing), 料理 (りょうり, cooking), 理科 (りか, science).",
      "Always read り in everyday words.",
      "The left side 王 is the jewel radical, and the last stroke rises to the right."
    ],
    lookalikes: [],
    examples: [
      { w: "処理", r: "しょり", m: "processing, handling" },
      { w: "料理", r: "りょうり", m: "cooking, dish" },
      { w: "理科", r: "りか", m: "science (school subject)" }
    ]
  },
  {
    k: "庫", meaning: "storehouse, garage", on: ["コ"], kun: [], group: "c-parking", strokes: 10, radical: "广",
    mnemonic: "A car 車 kept under a big roof 广: a garage or storehouse.",
    notes: [
      "車庫 (しゃこ) is a garage; signs reading 車庫前 mean 'garage entrance', so don't park there.",
      "金庫 (きんこ) is a safe and 書庫 (しょこ) an archive or stack room.",
      "府 has the same 广 roof, with 付 inside instead of 車."
    ],
    lookalikes: ["府"],
    examples: [
      { w: "車庫", r: "しゃこ", m: "garage" },
      { w: "金庫", r: "きんこ", m: "safe, strongbox" },
      { w: "書庫", r: "しょこ", m: "archive, stack room" }
    ]
  },
  {
    k: "移", meaning: "move, shift", on: ["イ"], kun: ["うつ.る", "うつ.す"], group: "c-parking", strokes: 11, radical: "禾",
    mnemonic: "Rice plants 禾 dug up again and again 多 and moved to a new field.",
    notes: [
      "移動 (いどう, moving): an announcement may say お車の移動をお願いします (please move your car).",
      "移る (うつる) is to move, and also for a cold to spread to someone: かぜがうつる.",
      "利 also has grain 禾 on the left; 移 has 多 (many) on the right."
    ],
    lookalikes: ["利"],
    examples: [
      { w: "移動", r: "いどう", m: "moving, transfer" },
      { w: "移る", r: "うつる", m: "to move; to spread (illness)" },
      { w: "移す", r: "うつす", m: "to move (something)" }
    ]
  },
  {
    k: "動", meaning: "move", on: ["ドウ"], kun: ["うご.く", "うご.かす"], group: "c-parking", strokes: 11, radical: "力",
    mnemonic: "Something heavy 重 shifted by sheer strength 力: it moves.",
    notes: [
      "動かないでください (please keep still) is what you hear during an X-ray or a blood test.",
      "移動 (いどう) is moving from place to place; 電動 (でんどう) means electric-powered, as in 電動車いす (electric wheelchair).",
      "うごく is to move by itself; うごかす is to move something."
    ],
    lookalikes: [],
    examples: [
      { w: "動く", r: "うごく", m: "to move" },
      { w: "移動", r: "いどう", m: "moving, transfer" },
      { w: "電動", r: "でんどう", m: "electric-powered" }
    ]
  },
  {
    k: "提", meaning: "present, submit", on: ["テイ"], kun: ["さ.げる"], group: "c-parking", strokes: 12, radical: "扌",
    mnemonic: "A hand 扌 holding something up just so 是: presenting it at the desk.",
    notes: [
      "提示 (ていじ, showing): 駐車券をご提示ください means please show your parking ticket.",
      "提出 (ていしゅつ) is handing in a form or document.",
      "提げる (さげる) is to carry something hanging from your hand, like a bag."
    ],
    lookalikes: [],
    examples: [
      { w: "提示", r: "ていじ", m: "showing, presenting" },
      { w: "提出", r: "ていしゅつ", m: "submission, handing in" },
      { w: "前提", r: "ぜんてい", m: "premise, assumption" }
    ]
  },
  {
    k: "請", meaning: "request, ask for", on: ["セイ"], kun: ["う.ける"], group: "c-parking", strokes: 15, radical: "言",
    mnemonic: "Words 言 spoken with clear blue 青 sincerity: politely asking for what you are owed.",
    notes: [
      "請求 (せいきゅう, billing): the bill from the 会計 desk is the 請求書 (せいきゅうしょ).",
      "う.ける appears mainly in 下請け (したうけ, subcontractor).",
      "The left side is 言 (words) and the right is 青 (blue)."
    ],
    lookalikes: [],
    examples: [
      { w: "請求", r: "せいきゅう", m: "billing, claim" },
      { w: "請求書", r: "せいきゅうしょ", m: "bill, invoice" },
      { w: "下請け", r: "したうけ", m: "subcontractor" }
    ]
  },
  {
    k: "求", meaning: "seek, request", on: ["キュウ"], kun: ["もと.める"], group: "c-parking", strokes: 7, radical: "氺",
    mnemonic: "A hand reaching down into the water 氺, with one drop 丶 flicked off the side: searching for what you want.",
    notes: [
      "請求 (せいきゅう, billing) and 請求書 (せいきゅうしょ, bill) on payment notices.",
      "求める (もとめる) is to seek or ask for; 求人 (きゅうじん) is a job vacancy.",
      "水 (water) is similar; 求 adds a line on top and a dot at the upper right."
    ],
    lookalikes: ["水"],
    examples: [
      { w: "請求", r: "せいきゅう", m: "billing, claim" },
      { w: "求める", r: "もとめる", m: "to seek, request" },
      { w: "求人", r: "きゅうじん", m: "job vacancy" }
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
  "耳": "ear (みみ)",
  // clinic & hospital pack
  "疒": "sickness (やまいだれ)",
  "丙": "third, C grade (へい)",
  "⻖": "hill, left side (こざとへん)",
  "完": "complete (かん)",
  "匸": "hiding box (かくしがまえ)",
  "矢": "arrow (や)",
  "串": "skewer (くし)",
  "心": "heart (こころ)",
  "耂": "old man (おいかんむり)",
  "禾": "grain (のぎへん)",
  "斗": "ladle, measure (と)",
  "冂": "down box (けいがまえ)",
  "人": "person (ひと)",
  "艮": "stopping (こん)",
  "自": "self, nose (じ)",
  "畀": "give (bottom of 鼻)",
  "虍": "tiger (とらかんむり)",
  "胃": "stomach (い)",
  "旧": "old (きゅう)",
  "艹": "grass (くさかんむり)",
  "楽": "music, ease (らく)",
  "尸": "body, flag (しかばね)",
  "句": "phrase (く)",
  "手": "hand (て)",
  "蒦": "grasp (right of 護)",
  "寸": "inch, hand (すん)",
  "マ": "ma shape",
  "了": "finish (りょう)",
  "糸": "thread (いとへん)",
  "勺": "ladle (しゃく)",
  "釆": "separate, sow (のごめ)",
  "彳": "going person (ぎょうにんべん)",
  "宀": "roof (うかんむり)",
  "至": "reach (し)",
  "衤": "clothing (ころもへん)",
  "刀": "sword (かたな)",
  "冉": "hanging (ぜん)",
  "祭": "festival (まつり)",
  "𠔉": "rolled hands (top of 券)",
  "呆": "stunned (ほう)",
  "㑒": "all, together (right of 険)",
  "正": "correct (せい)",
  "云": "say, cloud (うん)",
  "本": "book, root (ほん)",
  "埶": "plant (top of 熱)",
  "灬": "fire, four dots (れっか)",
  "甬": "tube (よう)",
  "氵": "water (さんずい)",
  "夜": "night (よる)",
  "昷": "warm (right of 温)",
  "且": "moreover (しょ)",
  "求": "request (きゅう)",
  "攵": "strike (のぶん)",
  "尚": "esteem (しょう)",
  "吊": "hang (bottom of 常)",
  "皆": "everyone (みな)",
  "匕": "spoon (さじ)",
  "米": "rice (こめへん)",
  "庄": "village (しょう)",
  "林": "woods (はやし)",
  "示": "show (しめす)",
  "火": "fire (ひへん)",
  "垔": "block (right of 煙)",
  "主": "master (しゅ)",
  "音": "sound (おと)",
  "𠂊": "crouching person (top of 危)",
  "厄": "misfortune (やく)",
  "忄": "heart, left side (りっしんべん)",
  "生": "life (せい)",
  "厶": "private (む)",
  "千": "thousand (せん)",
  "到": "arrive (とう)",
  "斿": "flag (left of 遊)",
  "⻌": "road, walking (しんにょう)",
  "竹": "bamboo (たけかんむり)",
  "夬": "cut (right of 決)",
  "原": "origin, plain (げん)",
  "頁": "page, head (おおがい)",
  "⺌": "small, on top (つ shape)",
  "⺕": "hand, snout (けいがしら)",
  "官": "official (かん)",
  "者": "person (しゃ)",
  "⻏": "village, right side (おおざと)",
  "广": "dotted cliff (まだれ)",
  "付": "attach (ふ)",
  "馬": "horse (うまへん)",
  "土": "earth (つちへん)",
  "昜": "rising sun (right of 場)",
  "刂": "knife (りっとう)",
  "夂": "walking legs (ふゆがしら)",
  "几": "table (き)",
  "王": "king, jewel (おうへん)",
  "里": "village (さと)",
  "車": "car (くるま)",
  "多": "many (た)",
  "重": "heavy (じゅう)",
  "扌": "hand (てへん)",
  "是": "right, just (ぜ)",
  "青": "blue (あお)",
  "氺": "water, at the bottom (したみず)"
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
  { id: "kw-amanogawa", text: "天の川", kana: "あまのがわ", romaji: "Amanogawa", meaning: "the Milky Way", level: 3, scene: ["star"], note: "天 is read あま here. The Milky Way is at the heart of Tanabata (七夕), the star festival on 7 July." },
  // ---- Clinic & hospital pack (pack: "clinic") ----
  { id: "kw-kusuri", text: "薬", kana: "くすり", romaji: "kusuri", meaning: "medicine", level: 1, pack: "clinic", scene: ["pill"], note: "You 'drink' medicine in Japanese: 薬を飲む (くすりをのむ), even tablets." },
  { id: "kw-netsu", text: "熱", kana: "ねつ", romaji: "netsu", meaning: "fever; heat", level: 1, pack: "clinic", scene: ["clinic"], note: "熱があります (ねつがあります): I have a fever. Clinics often ask feverish patients to tell reception first." },
  { id: "kw-chi", text: "血", kana: "ち", romaji: "chi", meaning: "blood", level: 1, pack: "clinic", scene: ["heart"] },
  { id: "kw-kuchi", text: "口", kana: "くち", romaji: "kuchi", meaning: "mouth; opening", level: 1, pack: "clinic", scene: ["tooth"], note: "As the second part of a word it often turns into ぐち: 入口 (いりぐち), 出口 (でぐち)." },
  { id: "kw-ha", text: "歯", kana: "は", romaji: "ha", meaning: "tooth", level: 1, pack: "clinic", scene: ["tooth"] },
  { id: "kw-mimi", text: "耳", kana: "みみ", romaji: "mimi", meaning: "ear", level: 1, pack: "clinic", scene: ["clinic"] },
  { id: "kw-hana", text: "鼻", kana: "はな", romaji: "hana", meaning: "nose", level: 1, pack: "clinic", scene: ["clinic"], note: "Same sound as 花 (はな, flower); the kanji tells them apart." },
  { id: "kw-karada", text: "体", kana: "からだ", romaji: "karada", meaning: "body", level: 1, pack: "clinic", scene: ["heart"], note: "お体に気をつけて: take care of yourself." },
  { id: "kw-iriguchi", text: "入口", kana: "いりぐち", romaji: "iriguchi", meaning: "entrance", level: 1, pack: "clinic", scene: ["clinic", "house"] },
  { id: "kw-deguchi", text: "出口", kana: "でぐち", romaji: "deguchi", meaning: "exit", level: 1, pack: "clinic", scene: ["clinic", "train"] },
  { id: "kw-byouin", text: "病院", kana: "びょういん", romaji: "byōin", meaning: "hospital", level: 2, pack: "clinic", scene: ["clinic"], note: "Watch the long vowel: びょういん (hospital) vs びよういん (美容院, hair salon)." },
  { id: "kw-uketsuke", text: "受付", kana: "うけつけ", romaji: "uketsuke", meaning: "reception (desk)", level: 2, pack: "clinic", scene: ["clinic"], note: "The first stop in any Japanese clinic: hand over your insurance card and patient card here." },
  { id: "kw-kaikei", text: "会計", kana: "かいけい", romaji: "kaikei", meaning: "paying; the cashier", level: 2, pack: "clinic", scene: ["clinic"], note: "In clinics you pay at the 会計 window after the doctor, once your name or number is called." },
  { id: "kw-yoyaku", text: "予約", kana: "よやく", romaji: "yoyaku", meaning: "appointment, booking", level: 2, pack: "clinic", scene: ["clinic"], note: "予約しています (よやくしています): I have an appointment." },
  { id: "kw-bangou", text: "番号", kana: "ばんごう", romaji: "bangō", meaning: "number", level: 2, pack: "clinic", scene: ["clinic"], note: "Many hospitals call you by the number on your ticket (番号札, ばんごうふだ) instead of your name." },
  { id: "kw-naika", text: "内科", kana: "ないか", romaji: "naika", meaning: "internal medicine", level: 2, pack: "clinic", scene: ["clinic"], note: "The place to go for colds, fevers and stomach trouble: Japan's general practice." },
  { id: "kw-geka", text: "外科", kana: "げか", romaji: "geka", meaning: "surgery (department)", level: 2, pack: "clinic", scene: ["clinic"], note: "外 is read げ here, not がい. Also the place for cuts and injuries." },
  { id: "kw-shika", text: "歯科", kana: "しか", romaji: "shika", meaning: "dentistry, dentist", level: 2, pack: "clinic", scene: ["tooth"], note: "Dental clinics often call themselves 歯医者 (はいしゃ) in speech." },
  { id: "kw-ganka", text: "眼科", kana: "がんか", romaji: "ganka", meaning: "eye clinic", level: 2, pack: "clinic", scene: ["clinic"] },
  { id: "kw-yakkyoku", text: "薬局", kana: "やっきょく", romaji: "yakkyoku", meaning: "pharmacy", level: 2, pack: "clinic", scene: ["pill"], note: "Clinics usually give you a prescription to take to a separate 薬局 nearby; look for 処方せん受付 on the door." },
  { id: "kw-isha", text: "医者", kana: "いしゃ", romaji: "isha", meaning: "doctor", level: 2, pack: "clinic", scene: ["clinic"], note: "Address the doctor as 先生 (せんせい). Signs and forms say 医師 (いし)." },
  { id: "kw-kanja", text: "患者", kana: "かんじゃ", romaji: "kanja", meaning: "patient", level: 2, pack: "clinic", scene: ["clinic"], note: "Signs say 患者様 (かんじゃさま): the polite さま." },
  { id: "kw-shoshin", text: "初診", kana: "しょしん", romaji: "shoshin", meaning: "first visit", level: 2, pack: "clinic", scene: ["clinic"], note: "On a first visit you fill in a questionnaire (問診票, もんしんひょう) about your symptoms." },
  { id: "kw-saishin", text: "再診", kana: "さいしん", romaji: "saishin", meaning: "follow-up visit", level: 2, pack: "clinic", scene: ["clinic"] },
  { id: "kw-shinsatsu", text: "診察", kana: "しんさつ", romaji: "shinsatsu", meaning: "medical examination", level: 2, pack: "clinic", scene: ["clinic"], note: "The doctor's room is the 診察室 (しんさつしつ)." },
  { id: "kw-kensa", text: "検査", kana: "けんさ", romaji: "kensa", meaning: "test, check-up", level: 2, pack: "clinic", scene: ["clinic"] },
  { id: "kw-ketsueki", text: "血液", kana: "けつえき", romaji: "ketsueki", meaning: "blood (medical)", level: 2, pack: "clinic", scene: ["heart"], note: "血液検査 (けつえきけんさ) is a blood test; 血液型 (けつえきがた) is blood type." },
  { id: "kw-taion", text: "体温", kana: "たいおん", romaji: "taion", meaning: "body temperature", level: 2, pack: "clinic", scene: ["clinic"], note: "Japan measures in Celsius: 37.5 degrees and up usually counts as a fever." },
  { id: "kw-itai", text: "痛い", kana: "いたい", romaji: "itai", meaning: "it hurts; painful", level: 2, pack: "clinic", scene: ["heart"], note: "Point and say ここが痛いです (ここがいたいです): it hurts here." },
  { id: "kw-chuui", text: "注意", kana: "ちゅうい", romaji: "chūi", meaning: "caution, care", level: 2, pack: "clinic", scene: ["clinic"], note: "Printed at the top of warnings, often in a red or yellow box." },
  { id: "kw-kiken", text: "危険", kana: "きけん", romaji: "kiken", meaning: "danger", level: 2, pack: "clinic", scene: ["clinic"], note: "The adjective is 危ない (あぶない), which children's signs spell in hiragana." },
  { id: "kw-kinen", text: "禁煙", kana: "きんえん", romaji: "kin'en", meaning: "no smoking", level: 2, pack: "clinic", scene: ["clinic"], note: "Hospitals post 院内禁煙 (いんないきんえん): no smoking anywhere inside." },
  { id: "kw-menkai", text: "面会", kana: "めんかい", romaji: "menkai", meaning: "visiting (a patient)", level: 2, pack: "clinic", scene: ["clinic"], note: "Visitors sign in at 面会受付 and keep to 面会時間 (visiting hours)." },
  { id: "kw-ryoukin", text: "料金", kana: "りょうきん", romaji: "ryōkin", meaning: "fee, charge", level: 2, pack: "clinic", scene: ["parking"] },
  { id: "kw-nikai", text: "二階", kana: "にかい", romaji: "nikai", meaning: "second floor", level: 2, pack: "clinic", scene: ["clinic"], note: "Floors count from the ground: 一階 (いっかい) is the ground floor. Boards often write 1階 or 1F." },
  { id: "kw-machiaishitsu", text: "待合室", kana: "まちあいしつ", romaji: "machiaishitsu", meaning: "waiting room", level: 3, pack: "clinic", scene: ["clinic"] },
  { id: "kw-shinsatsuken", text: "診察券", kana: "しんさつけん", romaji: "shinsatsuken", meaning: "patient card", level: 3, pack: "clinic", scene: ["clinic"], note: "Each clinic gives you its own card on the first visit; bring it every time after." },
  { id: "kw-hokenshou", text: "保険証", kana: "ほけんしょう", romaji: "hokenshō", meaning: "health insurance card", level: 3, pack: "clinic", scene: ["clinic"], note: "Reception asks for it on a first visit and at the start of each month. Now often a My Number card (マイナ保険証)." },
  { id: "kw-jibika", text: "耳鼻科", kana: "じびか", romaji: "jibika", meaning: "ear, nose and throat clinic", level: 3, pack: "clinic", scene: ["clinic"], note: "Ear 耳 + nose 鼻 + department 科. The full name is 耳鼻咽喉科 (じびいんこうか)." },
  { id: "kw-shounika", text: "小児科", kana: "しょうにか", romaji: "shōnika", meaning: "paediatrics", level: 3, pack: "clinic", scene: ["clinic"] },
  { id: "kw-hifuka", text: "皮膚科", kana: "ひふか", romaji: "hifuka", meaning: "dermatology (skin)", level: 3, pack: "clinic", scene: ["clinic"] },
  { id: "kw-kyuukyuusha", text: "救急車", kana: "きゅうきゅうしゃ", romaji: "kyūkyūsha", meaning: "ambulance", level: 3, pack: "clinic", scene: ["clinic"], note: "Call 119 for an ambulance or the fire brigade. Say 救急です (きゅうきゅうです) when they answer." },
  { id: "kw-hijouguchi", text: "非常口", kana: "ひじょうぐち", romaji: "hijōguchi", meaning: "emergency exit", level: 3, pack: "clinic", scene: ["clinic"], note: "The green running-figure sign. 口 turns into ぐち after 非常." },
  { id: "kw-keshoushitsu", text: "化粧室", kana: "けしょうしつ", romaji: "keshōshitsu", meaning: "restroom", level: 3, pack: "clinic", scene: ["clinic"], note: "A polite sign word for toilets, literally 'make-up room'. Speech uses トイレ or お手洗い." },
  { id: "kw-kangoshi", text: "看護師", kana: "かんごし", romaji: "kangoshi", meaning: "nurse", level: 3, pack: "clinic", scene: ["clinic"] },
  { id: "kw-chuushajou", text: "駐車場", kana: "ちゅうしゃじょう", romaji: "chūshajō", meaning: "car park", level: 3, pack: "clinic", scene: ["parking"], note: "Look for the big P. 場 is じょう here, though alone it is ば (place)." },
  { id: "kw-chuushaken", text: "駐車券", kana: "ちゅうしゃけん", romaji: "chūshaken", meaning: "parking ticket", level: 3, pack: "clinic", scene: ["parking"], note: "Hospital car parks are often free or cheap if you get the ticket stamped (処理) at the 会計 desk." },
  { id: "kw-sangai", text: "三階", kana: "さんがい", romaji: "sangai", meaning: "third floor", level: 3, pack: "clinic", scene: ["clinic"], note: "Irregular: 三階 is さんがい, with が. 何階 (なんがい) asks which floor." },
  { id: "kw-yoyaku-shiteimasu", text: "予約しています", kana: "よやくしています", romaji: "yoyaku shite imasu", meaning: "I have an appointment", level: 3, pack: "clinic", scene: ["clinic"], note: "Say it at reception, then your name." },
  { id: "kw-hajimete-desu", text: "初めてです", kana: "はじめてです", romaji: "hajimete desu", meaning: "it's my first time (here)", level: 3, pack: "clinic", scene: ["clinic"], note: "Tells reception you need a first-visit questionnaire and a new patient card." },
  { id: "kw-koko-ga-itai", text: "ここが痛いです", kana: "ここがいたいです", romaji: "koko ga itai desu", meaning: "it hurts here", level: 3, pack: "clinic", scene: ["heart"] },
  { id: "kw-netsu-ga-arimasu", text: "熱があります", kana: "ねつがあります", romaji: "netsu ga arimasu", meaning: "I have a fever", level: 3, pack: "clinic", scene: ["clinic"] },
  { id: "kw-hokenshou-onegai", text: "保険証をお願いします", kana: "ほけんしょうをおねがいします", romaji: "hokenshō o onegai shimasu", meaning: "your insurance card, please", level: 3, pack: "clinic", scene: ["clinic"], note: "What reception says to you. を is said お." }
];
