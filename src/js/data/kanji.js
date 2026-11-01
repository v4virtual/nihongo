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
  /* ========== Everyday, more: nature ========== */
  {
    k: "花", meaning: "flower", on: ["カ"], kun: ["はな"], group: "nature", strokes: 7, radical: "艹",
    mnemonic: "Grass 艹 on top of 化 (change): a green bud that changes into a flower.",
    notes: [
      "花見 (はなみ) is picnicking under the cherry blossom in spring; 花火 (はなび) are the fireworks of summer.",
      "On its own はな, which becomes ばな in compounds: 生け花 (いけばな). The on'yomi か shows up in かふん (pollen) on spring allergy warnings.",
      "The lower half is 化, the same as in 化粧室 (けしょうしつ, restroom)."
    ],
    lookalikes: ["化", "草"],
    examples: [
      { w: "花見", r: "はなみ", m: "cherry-blossom viewing" },
      { w: "花火", r: "はなび", m: "fireworks" },
      { w: "生け花", r: "いけばな", m: "flower arranging" }
    ]
  },
  {
    k: "海", meaning: "sea, ocean", on: ["カイ"], kun: ["うみ"], group: "nature", strokes: 9, radical: "氵",
    mnemonic: "Water 氵 next to 毎 (every): water every way you look, as far as the horizon. That's the sea.",
    notes: [
      "Alone it is うみ; in compounds かい: 海外 (かいがい, overseas), as on airport and bank signs for foreign cards.",
      "海の日 (うみのひ, Marine Day) is a public holiday in July, the start of the beach season.",
      "The right side is 毎 (every); don't drop the water drops and write 毎."
    ],
    lookalikes: ["毎", "池"],
    examples: [
      { w: "海外", r: "かいがい", m: "overseas, abroad" },
      { w: "海の日", r: "うみのひ", m: "Marine Day (holiday)" },
      { w: "日本海", r: "にほんかい", m: "the Sea of Japan" }
    ]
  },
  {
    k: "空", meaning: "sky, empty", on: ["クウ"], kun: ["そら", "から", "あ.く"], group: "nature", strokes: 8, radical: "穴",
    mnemonic: "A hole 穴 dug above a carpenter's tool 工: break through the roof and all you see is open, empty sky.",
    notes: [
      "空車 (くうしゃ) glows on taxis and car park signs: vacant, space available. 空き (あき) on a sign means a free room or seat.",
      "Three common readings: そら (sky), から (empty, as in 空手, からて) and くう in compounds like 空気 (くうき, air). Airport is くうこう.",
      "The 穴 top also sits on 窓 (window)."
    ],
    lookalikes: ["窓"],
    examples: [
      { w: "空気", r: "くうき", m: "air" },
      { w: "空車", r: "くうしゃ", m: "vacant (taxi, car park)" },
      { w: "空手", r: "からて", m: "karate" }
    ]
  },
  {
    k: "石", meaning: "stone", on: ["セキ"], kun: ["いし"], group: "nature", strokes: 5, radical: "石",
    mnemonic: "A slanting cliff edge with a boulder 口 tumbled down to its foot: a stone.",
    notes: [
      "Soap is often written 石けん (せっけん) on bottles and dispensers; here 石 is read せっ.",
      "Common in names: 石川 (いしかわ) prefecture and the surname 石田 (いしだ).",
      "Don't confuse it with 右 (right), which also has 口 at the bottom but a crossed top."
    ],
    lookalikes: ["右"],
    examples: [
      { w: "石けん", r: "せっけん", m: "soap" },
      { w: "小石", r: "こいし", m: "pebble" },
      { w: "石川", r: "いしかわ", m: "Ishikawa (prefecture)" }
    ]
  },
  {
    k: "森", meaning: "forest", on: ["シン"], kun: ["もり"], group: "nature", strokes: 12, radical: "木",
    mnemonic: "Three trees 木 piled up: one more than 林, a thick, deep forest.",
    notes: [
      "Everyday word for a wood or forest is もり; しん is mostly in 森林 (しんりん, forest land).",
      "A common surname and place name: 森 (もり), 大森 (おおもり) in Tokyo.",
      "Count the trees: 木 is one tree, 林 two (a grove), 森 three (a forest)."
    ],
    lookalikes: ["林", "木"],
    examples: [
      { w: "森", r: "もり", m: "forest, woods" },
      { w: "森林", r: "しんりん", m: "forest" },
      { w: "大森", r: "おおもり", m: "Ōmori (place, surname)" }
    ]
  },
  {
    k: "林", meaning: "grove, woods", on: ["リン"], kun: ["はやし"], group: "nature", strokes: 8, radical: "木",
    mnemonic: "Two trees 木 standing side by side: a small grove, not yet a forest.",
    notes: [
      "林 (はやし) and 小林 (こばやし) are very common surnames; はやし becomes ばやし after another kanji.",
      "In compounds it is りん: 森林 (しんりん, forest), 竹林 (ちくりん, bamboo grove).",
      "The left 木 is narrower and its last stroke becomes a dot."
    ],
    lookalikes: ["森", "木"],
    examples: [
      { w: "森林", r: "しんりん", m: "forest" },
      { w: "竹林", r: "ちくりん", m: "bamboo grove" },
      { w: "小林", r: "こばやし", m: "Kobayashi (surname)" }
    ]
  },
  {
    k: "草", meaning: "grass, plants", on: ["ソウ"], kun: ["くさ"], group: "nature", strokes: 9, radical: "艹",
    mnemonic: "Grass 艹 on top of 早 (early): the first green shoots that come up early in spring.",
    notes: [
      "Asakusa (あさくさ) in Tokyo is written with 草, so you'll see it on Ginza Line station signs.",
      "Almost always くさ; そう is in written compounds. 草花 (くさばな) are flowering plants, as in a garden centre.",
      "Shares the 艹 grass top with 花 and 葉."
    ],
    lookalikes: ["花", "葉"],
    examples: [
      { w: "草", r: "くさ", m: "grass, weeds" },
      { w: "草花", r: "くさばな", m: "flowering plants" },
      { w: "草木", r: "くさき", m: "plants, vegetation" }
    ]
  },
  {
    k: "風", meaning: "wind, style", on: ["フウ", "フ"], kun: ["かぜ"], group: "nature", strokes: 9, radical: "風",
    mnemonic: "A billowing sail 几 with a tiny insect 虫 blown about inside it: the wind.",
    notes: [
      "台風 (たいふう, typhoon) is the word to watch in August and September: trains stop and shops close early.",
      "After a noun, ふう means 'style': わふう (Japanese style) on menus. The bath, おふろ, uses the reading ふ.",
      "かぜ also means 'a cold', but that is written with 風 plus another kanji."
    ],
    lookalikes: [],
    examples: [
      { w: "台風", r: "たいふう", m: "typhoon" },
      { w: "北風", r: "きたかぜ", m: "north wind" },
      { w: "風車", r: "ふうしゃ", m: "windmill" }
    ]
  },
  {
    k: "雪", meaning: "snow", on: ["セツ"], kun: ["ゆき"], group: "nature", strokes: 11, radical: "雨",
    mnemonic: "Rain 雨 on top and a hand ⺕ underneath sweeping it up: rain cold enough to sweep with a broom is snow.",
    notes: [
      "大雪 (おおゆき, heavy snow) warnings can stop trains and buses; the Sapporo snow festival is さっぽろ雪まつり.",
      "Almost always ゆき; せつ is mostly in written compounds.",
      "Snow 雪 and cloud 雲 both wear the 雨 rain top."
    ],
    lookalikes: ["雲", "雨"],
    examples: [
      { w: "大雪", r: "おおゆき", m: "heavy snow" },
      { w: "初雪", r: "はつゆき", m: "first snow of the year" },
      { w: "雪だるま", r: "ゆきだるま", m: "snowman" }
    ]
  },
  {
    k: "光", meaning: "light, shine", on: ["コウ"], kun: ["ひかり", "ひか.る"], group: "nature", strokes: 6, radical: "儿",
    mnemonic: "Little rays ⺌ shining out above 兀, a figure on two legs: someone holding up a torch and throwing out light.",
    notes: [
      "日光 (にっこう) means sunlight, and is also Nikkō, the shrine town north of Tokyo.",
      "ひかり is the light itself and ひかる is to shine; ひかり is also the name of a Shinkansen service.",
      "Sightseeing, かんこう, uses 光: look for it on tourist information signs."
    ],
    lookalikes: [],
    examples: [
      { w: "日光", r: "にっこう", m: "sunlight; Nikkō" },
      { w: "光る", r: "ひかる", m: "to shine" },
      { w: "月光", r: "げっこう", m: "moonlight" }
    ]
  },
  {
    k: "星", meaning: "star", on: ["セイ"], kun: ["ほし"], group: "nature", strokes: 9, radical: "日",
    mnemonic: "A bright sun 日 over 生 (to be born): a new little sun born in the night sky, a star.",
    notes: [
      "Review sites and restaurant guides rate in stars: 星5つ (ほしいつつ) is five stars.",
      "Planets use せい: 火星 (かせい, Mars), 金星 (きんせい, Venus). ほし becomes ぼし in compounds: 一番星 (いちばんぼし).",
      "The bottom is 生, the same as in 先生."
    ],
    lookalikes: [],
    examples: [
      { w: "星空", r: "ほしぞら", m: "starry sky" },
      { w: "火星", r: "かせい", m: "Mars" },
      { w: "一番星", r: "いちばんぼし", m: "the first star of the evening" }
    ]
  },
  {
    k: "春", meaning: "spring", on: ["シュン"], kun: ["はる"], group: "nature", strokes: 9, radical: "日",
    mnemonic: "A young plant with three leafy bars and spreading roots, with the sun 日 tucked underneath: spring is when everything grows towards the sun.",
    notes: [
      "春休み (はるやすみ) is the spring break between school years in March and April.",
      "しゅん in compounds: 春分の日 (しゅんぶんのひ), the spring equinox holiday in March.",
      "The top has three horizontal lines, then the two sweeping strokes."
    ],
    lookalikes: [],
    examples: [
      { w: "春休み", r: "はるやすみ", m: "spring break" },
      { w: "春分の日", r: "しゅんぶんのひ", m: "Spring Equinox Day" },
      { w: "春夏秋冬", r: "しゅんかしゅうとう", m: "the four seasons" }
    ]
  },
  {
    k: "夏", meaning: "summer", on: ["カ", "ゲ"], kun: ["なつ"], group: "nature", strokes: 10, radical: "夂",
    mnemonic: "A head in a big sunhat over slowly dragging feet 夂: everyone trudges along slowly in the summer heat.",
    notes: [
      "夏休み (なつやすみ) is the long summer holiday from late July; なつまつり (summer festivals) fill August.",
      "か in a few compounds: 初夏 (しょか, early summer). 真夏 (まなつ) is the height of summer.",
      "Both 夏 and 冬 have the 夂 'dragging feet' part, but 冬 is much shorter."
    ],
    lookalikes: ["冬"],
    examples: [
      { w: "夏休み", r: "なつやすみ", m: "summer holidays" },
      { w: "真夏", r: "まなつ", m: "midsummer" },
      { w: "初夏", r: "しょか", m: "early summer" }
    ]
  },
  {
    k: "秋", meaning: "autumn", on: ["シュウ"], kun: ["あき"], group: "nature", strokes: 9, radical: "禾",
    mnemonic: "Ripe grain 禾 next to fire 火: autumn is when the rice is harvested and the stubble burned in the fields.",
    notes: [
      "秋分の日 (しゅうぶんのひ) is the autumn equinox holiday in September; autumn is the season for red leaves (こうよう).",
      "Alone it is あき; しゅう in compounds. 秋田 (あきた) is a prefecture, home of the Akita dog.",
      "The grain 禾 on the left also starts 科, as in 内科."
    ],
    lookalikes: ["科"],
    examples: [
      { w: "秋田", r: "あきた", m: "Akita (prefecture)" },
      { w: "秋分の日", r: "しゅうぶんのひ", m: "Autumn Equinox Day" },
      { w: "春夏秋冬", r: "しゅんかしゅうとう", m: "the four seasons" }
    ]
  },
  {
    k: "冬", meaning: "winter", on: ["トウ"], kun: ["ふゆ"], group: "nature", strokes: 5, radical: "冫",
    mnemonic: "Feet 夂 trudging carefully over two drops of ice 冫: walking on a frozen winter path.",
    notes: [
      "冬休み (ふゆやすみ) is the winter break around New Year; shops may show 冬期休業 (とうききゅうぎょう, closed for winter).",
      "Alone it is ふゆ; とう in compounds such as 冬期 (とうき, winter season).",
      "Don't confuse it with 各 (each), which has 口 under the same top instead of two ice drops."
    ],
    lookalikes: ["夏", "各"],
    examples: [
      { w: "冬休み", r: "ふゆやすみ", m: "winter break" },
      { w: "真冬", r: "まふゆ", m: "midwinter" },
      { w: "冬期", r: "とうき", m: "winter season" }
    ]
  },
  {
    k: "犬", meaning: "dog", on: ["ケン"], kun: ["いぬ"], group: "nature", strokes: 4, radical: "犬",
    mnemonic: "A big 大 figure with one extra dot 丶 up by its ear: the dog trotting along beside its owner.",
    notes: [
      "Park and street signs often remind owners to pick up after their 犬 (いぬ).",
      "いぬ alone, but けん in compounds: 番犬 (ばんけん, guard dog). 子犬 (こいぬ) is a puppy.",
      "The dot goes top right; without it you have 大 (big)."
    ],
    lookalikes: ["大"],
    examples: [
      { w: "子犬", r: "こいぬ", m: "puppy" },
      { w: "番犬", r: "ばんけん", m: "guard dog" },
      { w: "秋田犬", r: "あきたいぬ", m: "Akita dog" }
    ]
  },
  {
    k: "猫", meaning: "cat", on: ["ビョウ"], kun: ["ねこ"], group: "nature", strokes: 11, radical: "犭",
    mnemonic: "An animal ⺨ next to 苗, grass 艹 over a rice field 田: the cat crouching in the field, waiting for mice.",
    notes: [
      "Look for 猫カフェ (ねこカフェ) signs, and the waving まねきねこ cat in shop windows, inviting customers in.",
      "Almost always ねこ; びょう is rare. 子猫 (こねこ) is a kitten.",
      "The left side is ⺨, the animal radical, not 氵 (water)."
    ],
    lookalikes: [],
    examples: [
      { w: "子猫", r: "こねこ", m: "kitten" },
      { w: "猫カフェ", r: "ねこカフェ", m: "cat café" },
      { w: "白猫", r: "しろねこ", m: "white cat" }
    ]
  },
  {
    k: "鳥", meaning: "bird, chicken", on: ["チョウ"], kun: ["とり"], group: "nature", strokes: 11, radical: "鳥",
    mnemonic: "A bird side-on: a beady eye at the top, the body in the middle, and four tail feathers 灬 fanned out at the bottom.",
    notes: [
      "とり also means chicken: やきとり (grilled chicken skewers) is written on izakaya lanterns and menus.",
      "ちょう in compounds: 白鳥 (はくちょう, swan), 一石二鳥 (いっせきにちょう, two birds with one stone).",
      "島 (island) has the same top but a mountain 山 instead of the tail feathers."
    ],
    lookalikes: ["島", "馬"],
    examples: [
      { w: "小鳥", r: "ことり", m: "little bird" },
      { w: "白鳥", r: "はくちょう", m: "swan" },
      { w: "一石二鳥", r: "いっせきにちょう", m: "two birds with one stone" }
    ]
  },
  {
    k: "魚", meaning: "fish", on: ["ギョ"], kun: ["さかな", "うお"], group: "nature", strokes: 11, radical: "魚",
    mnemonic: "A fish standing on its tail: the pointed head at the top, a scaly body 田 in the middle, and the tail fin 灬 splashing at the bottom.",
    notes: [
      "さかな is the everyday word; うお appears in 魚市場 (うおいちば, fish market).",
      "ぎょ in compounds: 金魚 (きんぎょ, goldfish), the prize at summer festival stalls. さかな becomes ざかな: 生魚 (なまざかな).",
      "The bottom four dots 灬 are the same as in 鳥 and 馬."
    ],
    lookalikes: ["鳥"],
    examples: [
      { w: "金魚", r: "きんぎょ", m: "goldfish" },
      { w: "生魚", r: "なまざかな", m: "raw fish" },
      { w: "魚市場", r: "うおいちば", m: "fish market" }
    ]
  },
  {
    k: "虫", meaning: "insect, bug", on: ["チュウ"], kun: ["むし"], group: "nature", strokes: 6, radical: "虫",
    mnemonic: "中 (middle) with a little tail curling out at the bottom: a bug wriggling through the middle of things.",
    notes: [
      "虫歯 (むしば) is a cavity, the word you'll hear at the dentist. Summer shelves are full of 虫よけ (むしよけ, insect repellent).",
      "Almost always むし; ちゅう is in written compounds.",
      "It is 中 with a base line and a dot added: don't stop at 中."
    ],
    lookalikes: ["中"],
    examples: [
      { w: "虫歯", r: "むしば", m: "tooth decay, cavity" },
      { w: "虫よけ", r: "むしよけ", m: "insect repellent" },
      { w: "虫めがね", r: "むしめがね", m: "magnifying glass" }
    ]
  },
  {
    k: "牛", meaning: "cow, beef", on: ["ギュウ"], kun: ["うし"], group: "nature", strokes: 4, radical: "牛",
    mnemonic: "A cow's face seen from the front: one horn poking up at the top left and a long line down its nose.",
    notes: [
      "On supermarket labels 牛肉 (ぎゅうにく) is beef; ぎゅうどん (beef bowl) shops are everywhere.",
      "The animal is うし; the food is ぎゅう: 牛タン (ぎゅうタン, beef tongue).",
      "Don't confuse it with 午 (noon, as in 午前): 牛 has its vertical stroke poking through the top."
    ],
    lookalikes: ["午"],
    examples: [
      { w: "牛肉", r: "ぎゅうにく", m: "beef" },
      { w: "牛タン", r: "ぎゅうタン", m: "beef tongue" },
      { w: "子牛", r: "こうし", m: "calf" }
    ]
  },
  {
    k: "馬", meaning: "horse", on: ["バ"], kun: ["うま"], group: "nature", strokes: 10, radical: "馬",
    mnemonic: "A horse side-on: its mane flying in the lines at the top, and four hooves 灬 drumming along the bottom.",
    notes: [
      "ば in compounds: 馬車 (ばしゃ, carriage), 乗馬 (じょうば, horse riding). Horse racing, けいば, also uses 馬.",
      "Alone it is うま; 子馬 (こうま) is a foal. 竹馬 (たけうま) are stilts.",
      "Same 灬 bottom as 鳥 and 魚, but the top has a mane of horizontal lines."
    ],
    lookalikes: ["鳥"],
    examples: [
      { w: "馬車", r: "ばしゃ", m: "horse-drawn carriage" },
      { w: "乗馬", r: "じょうば", m: "horse riding" },
      { w: "子馬", r: "こうま", m: "foal" }
    ]
  },
  {
    k: "島", meaning: "island", on: ["トウ"], kun: ["しま"], group: "nature", strokes: 10, radical: "山",
    mnemonic: "A bird 鳥, its tail feathers swapped for a mountain 山: a seabird perched on a rocky peak sticking out of the sea, an island.",
    notes: [
      "Hundreds of place names use it; しま often turns into じま after another kanji: 小島 (こじま).",
      "とう in compounds: 半島 (はんとう, peninsula). Japan calls itself a 島国 (しまぐに, island nation).",
      "The top is 鳥 without its four dots; the 山 slips in underneath."
    ],
    lookalikes: ["鳥"],
    examples: [
      { w: "島国", r: "しまぐに", m: "island nation" },
      { w: "半島", r: "はんとう", m: "peninsula" },
      { w: "小島", r: "こじま", m: "small island" }
    ]
  },
  {
    k: "池", meaning: "pond", on: ["チ"], kun: ["いけ"], group: "nature", strokes: 6, radical: "氵",
    mnemonic: "Water 氵 beside 也, a coiled snake shape: a snake curled up at the edge of a still pond.",
    notes: [
      "電池 (でんち, battery) is the word you'll actually see most: on shop shelves and on 電池切れ (でんちぎれ) warnings.",
      "Alone it is いけ; Ikebukuro (いけぶくろ) station in Tokyo starts with 池.",
      "Don't confuse it with 地 (ground), which has 土 instead of the water drops."
    ],
    lookalikes: ["地"],
    examples: [
      { w: "電池", r: "でんち", m: "battery" },
      { w: "池", r: "いけ", m: "pond" },
      { w: "電池切れ", r: "でんちぎれ", m: "dead battery" }
    ]
  },
  {
    k: "晴", meaning: "clear up, sunny", on: ["セイ"], kun: ["は.れる", "は.れ"], group: "nature", strokes: 12, radical: "日",
    mnemonic: "The sun 日 beside 青 (blue): the sun is out and the sky is blue. The weather has cleared up.",
    notes: [
      "晴れ (はれ, sunny) is the first word on every weather forecast; 晴れのち雨 means sunny, rain later.",
      "Kun はれ in daily speech, せい in compounds: 快晴 (かいせい, perfectly clear), 晴天 (せいてん, fine weather).",
      "The right side is the same as in 精 (in 精算), which has 米 on the left instead of 日."
    ],
    lookalikes: ["精"],
    examples: [
      { w: "晴れ", r: "はれ", m: "sunny, fine weather" },
      { w: "快晴", r: "かいせい", m: "clear, cloudless weather" },
      { w: "晴天", r: "せいてん", m: "fine weather, clear sky" }
    ]
  },
  {
    k: "雲", meaning: "cloud", on: ["ウン"], kun: ["くも"], group: "nature", strokes: 12, radical: "雨",
    mnemonic: "Rain 雨 sitting on top of 云, wisps of vapour curling upwards: the cloud the rain falls from.",
    notes: [
      "Weather apps show 雨雲 (あまぐも, rain cloud) radar maps. The 'cloudy' forecast word くもり uses a different kanji.",
      "くも becomes ぐも in compounds: 入道雲 (にゅうどうぐも), the towering summer thunderhead. うん in 雲海 (うんかい, sea of clouds).",
      "Same 雨 top as 雪 (snow); 雲 has 云 underneath."
    ],
    lookalikes: ["雪", "雨"],
    examples: [
      { w: "雨雲", r: "あまぐも", m: "rain cloud" },
      { w: "入道雲", r: "にゅうどうぐも", m: "thunderhead (summer cloud)" },
      { w: "雲海", r: "うんかい", m: "sea of clouds" }
    ]
  },
  {
    k: "竹", meaning: "bamboo", on: ["チク"], kun: ["たけ"], group: "nature", strokes: 6, radical: "竹",
    mnemonic: "Two bamboo stalks side by side, each with leaves drooping from a joint: a little bamboo grove.",
    notes: [
      "Spring bamboo shoots, たけのこ, are a seasonal food, often written 竹の子.",
      "たけ alone, ちく in compounds: 竹林 (ちくりん, bamboo grove).",
      "Squeezed on top of other kanji it becomes the 'bamboo hat' shape, as in 等 and the 符 of 切符."
    ],
    lookalikes: [],
    examples: [
      { w: "竹の子", r: "たけのこ", m: "bamboo shoot" },
      { w: "竹林", r: "ちくりん", m: "bamboo grove" },
      { w: "竹馬", r: "たけうま", m: "stilts" }
    ]
  },
  {
    k: "田", meaning: "rice field", on: ["デン"], kun: ["た"], group: "nature", strokes: 5, radical: "田",
    mnemonic: "A rice field seen from above, split into four paddies by raised paths.",
    notes: [
      "Very common in surnames and places: 田中 (たなか), 山田 (やまだ), 秋田 (あきた). た often becomes だ.",
      "The everyday word for a paddy is 田んぼ (たんぼ); でん is in compounds like 水田 (すいでん).",
      "Don't confuse it with 由 (in 自由) or 申, where the middle line pokes out."
    ],
    lookalikes: ["由", "申"],
    examples: [
      { w: "田んぼ", r: "たんぼ", m: "rice paddy" },
      { w: "田中", r: "たなか", m: "Tanaka (surname)" },
      { w: "水田", r: "すいでん", m: "paddy field" }
    ]
  },
  {
    k: "葉", meaning: "leaf", on: ["ヨウ"], kun: ["は"], group: "nature", strokes: 12, radical: "艹",
    mnemonic: "Grass 艹 on top of 枼, a tree 木 with layers of new growth on its branches: a tree covered in leaves.",
    notes: [
      "The word ことば (word, language) is written with 葉, and so is 千葉 (ちば), the prefecture next to Tokyo.",
      "は becomes ば in compounds; the everyday word for a leaf is 葉っぱ (はっぱ). よう is in written words like こうよう (autumn leaves).",
      "Shares the 艹 grass top with 草 and 花."
    ],
    lookalikes: ["草"],
    examples: [
      { w: "葉っぱ", r: "はっぱ", m: "leaf" },
      { w: "千葉", r: "ちば", m: "Chiba (prefecture)" },
      { w: "葉書", r: "はがき", m: "postcard" }
    ]
  },
  /* ========== Everyday, more: things ========== */
  {
    k: "物", meaning: "thing, object", on: ["ブツ", "モツ"], kun: ["もの"], group: "things", strokes: 8, radical: "牛",
    mnemonic: "A cow 牛 next to 勿, a flag with streamers flapping: a market stall with cows, flags and all sorts of things for sale.",
    notes: [
      "Menus and vending machines say 飲み物 (のみもの, drinks); food courts list 食べ物 (たべもの, food).",
      "Read もの in native words, ぶつ in 動物 (どうぶつ, animal) and もつ in 荷物 (にもつ, luggage).",
      "The cow on the left is squashed thin, just as in 特 (special)."
    ],
    lookalikes: ["特"],
    examples: [
      { w: "食べ物", r: "たべもの", m: "food" },
      { w: "買い物", r: "かいもの", m: "shopping" },
      { w: "荷物", r: "にもつ", m: "luggage, bags" }
    ]
  },
  {
    k: "家", meaning: "house, home, family", on: ["カ", "ケ"], kun: ["いえ", "うち", "や"], group: "things", strokes: 10, radical: "宀",
    mnemonic: "A roof 宀 over a pig 豕: in old farmhouses the family pig lived under the same roof, so roof plus pig means home.",
    notes: [
      "いえ is the building; うち is warmer and means 'my home, my family': うちに来ませんか.",
      "Your landlord is the 大家さん (おおやさん). Electronics shops advertise 家電 (かでん, home appliances).",
      "As a suffix it marks a profession (画家, がか, painter) or a family: 田中家 (たなかけ), the Tanaka family."
    ],
    lookalikes: ["室"],
    examples: [
      { w: "家", r: "いえ", m: "house, home" },
      { w: "大家さん", r: "おおやさん", m: "landlord" },
      { w: "家電", r: "かでん", m: "home appliances" }
    ]
  },
  {
    k: "茶", meaning: "tea", on: ["チャ", "サ"], kun: [], group: "things", strokes: 9, radical: "艹",
    mnemonic: "Grass 艹 on top, a person 人 under a little roof and a tree 木 below: someone sheltering under a tea bush, picking its leaves.",
    notes: [
      "Vending machines and konbini fridges are full of お茶 (おちゃ), usually unsweetened green tea.",
      "Read さ in 茶道 (さどう), the tea ceremony; nearly everywhere else it is ちゃ.",
      "Don't confuse with 草 (grass), which shares the grass top 艹."
    ],
    lookalikes: ["草"],
    examples: [
      { w: "お茶", r: "おちゃ", m: "tea, green tea" },
      { w: "茶道", r: "さどう", m: "the tea ceremony" },
      { w: "茶わん", r: "ちゃわん", m: "rice bowl, tea bowl" }
    ]
  },
  {
    k: "米", meaning: "rice", on: ["ベイ", "マイ"], kun: ["こめ"], group: "things", strokes: 6, radical: "米",
    mnemonic: "A rice stalk crossed by a line, with grains bursting out in four directions: the ripe head of the rice plant.",
    notes: [
      "Uncooked rice is (お)米 (おこめ); once cooked it becomes ごはん.",
      "In autumn supermarkets put 新米 (しんまい), the new harvest, on the rice bags. 新米 also means a newcomer at work.",
      "In the news it stands for America: 日米 (にちべい, Japan-US). Don't confuse it with 来 (come)."
    ],
    lookalikes: ["来", "木"],
    examples: [
      { w: "お米", r: "おこめ", m: "(uncooked) rice" },
      { w: "新米", r: "しんまい", m: "new-crop rice; newcomer" },
      { w: "米国", r: "べいこく", m: "the USA" }
    ]
  },
  {
    k: "肉", meaning: "meat", on: ["ニク"], kun: [], group: "things", strokes: 6, radical: "肉",
    mnemonic: "A cut of meat hanging in a frame, with the marbling showing as two little 人 inside.",
    notes: [
      "Supermarket labels: 牛肉 (ぎゅうにく, beef); pork and chicken are ぶたにく and とりにく.",
      "Used for 'meat' in general, but on menus 肉 alone often means beef.",
      "Don't confuse with 内 (inside), which has only one 人 inside the frame."
    ],
    lookalikes: ["内"],
    examples: [
      { w: "肉", r: "にく", m: "meat" },
      { w: "牛肉", r: "ぎゅうにく", m: "beef" },
      { w: "肉売り場", r: "にくうりば", m: "meat counter (in a shop)" }
    ]
  },
  {
    k: "酒", meaning: "alcohol, sake", on: ["シュ"], kun: ["さけ"], group: "things", strokes: 10, radical: "酉",
    mnemonic: "Water 氵 next to 酉, a jar with a narrow neck: liquid sealed in a jar until it ferments into sake.",
    notes: [
      "お酒 (おさけ) means any alcohol; the rice drink itself is 日本酒 (にほんしゅ).",
      "Becomes ざけ in compounds: 地酒 (じざけ) is local sake, a favourite souvenir.",
      "Konbini tills ask you to tap a button confirming you are 20 or over when you buy お酒."
    ],
    lookalikes: [],
    examples: [
      { w: "お酒", r: "おさけ", m: "alcohol, sake" },
      { w: "日本酒", r: "にほんしゅ", m: "sake (rice wine)" },
      { w: "地酒", r: "じざけ", m: "local sake" }
    ]
  },
  {
    k: "紙", meaning: "paper", on: ["シ"], kun: ["かみ"], group: "things", strokes: 10, radical: "糸",
    mnemonic: "Thread 糸 beside 氏, a family name: fibres pressed flat into a sheet so a family could write its name.",
    notes: [
      "Becomes がみ in compounds: 手紙 (てがみ) is a letter.",
      "Offices and city halls hand you a 申込用紙 (もうしこみようし, application form) to fill in.",
      "Recycling rules sort out 紙 (paper) from plastic and cans, so look for it on bins."
    ],
    lookalikes: ["絵"],
    examples: [
      { w: "紙", r: "かみ", m: "paper" },
      { w: "手紙", r: "てがみ", m: "letter" },
      { w: "用紙", r: "ようし", m: "form, sheet of paper" }
    ]
  },
  {
    k: "服", meaning: "clothes", on: ["フク"], kun: [], group: "things", strokes: 8, radical: "月",
    mnemonic: "A body 月 (the flesh form of moon) beside a kneeling figure with a hand on its back: someone being helped into their clothes.",
    notes: [
      "服 (ふく) is everyday clothing; department store floor guides list men's and women's wear as しんしふく and ふじんふく.",
      "On medicine packets 服用 (ふくよう) means taking a dose: 食後に服用 (しょくごにふくよう), take after meals.",
      "Sound change in 一服 (いっぷく), a short break."
    ],
    lookalikes: [],
    examples: [
      { w: "服", r: "ふく", m: "clothes" },
      { w: "服用", r: "ふくよう", m: "taking (medicine)" },
      { w: "子ども服", r: "こどもふく", m: "children's clothing" }
    ]
  },
  {
    k: "傘", meaning: "umbrella", on: ["サン"], kun: ["かさ"], group: "things", strokes: 12, radical: "人",
    mnemonic: "An umbrella seen from below: the big roof 人 spread over four little 人 huddled round the handle, out of the rain.",
    notes: [
      "The moment it rains, every konbini sells clear ビニール傘 (ビニールがさ, plastic umbrellas).",
      "Becomes がさ in compounds: 日傘 (ひがさ) is the parasol many people carry in summer.",
      "Shops often ask you to leave a wet 傘 in the stand at the door or put it in a plastic bag."
    ],
    lookalikes: [],
    examples: [
      { w: "傘", r: "かさ", m: "umbrella" },
      { w: "日傘", r: "ひがさ", m: "parasol" },
      { w: "ビニール傘", r: "ビニールがさ", m: "clear plastic umbrella" }
    ]
  },
  {
    k: "箱", meaning: "box", on: [], kun: ["はこ"], group: "things", strokes: 15, radical: "竹",
    mnemonic: "Bamboo 竹 on top of 相, a tree 木 and an eye 目 side by side: you eye up the wood and bamboo and build a box.",
    notes: [
      "Becomes ばこ in compounds: ゴミ箱 (ごみばこ) is a rubbish bin, though public ones are rare in Japan.",
      "The on reading そう is almost never met; everyday words use はこ.",
      "Has the bamboo top of 等 and 符, like many kanji for things once made of bamboo."
    ],
    lookalikes: ["等"],
    examples: [
      { w: "箱", r: "はこ", m: "box" },
      { w: "ゴミ箱", r: "ゴミばこ", m: "rubbish bin" },
      { w: "本箱", r: "ほんばこ", m: "bookcase" }
    ]
  },
  {
    k: "皿", meaning: "plate, dish", on: [], kun: ["さら"], group: "things", strokes: 5, radical: "皿",
    mnemonic: "A dish seen from the side: a wide flat base with little walls standing on it.",
    notes: [
      "At conveyor-belt sushi, plates are colour-coded by price and counted 一皿 (ひとさら), 二皿 (ふたさら).",
      "Becomes ざら in compounds: 小皿 (こざら) is the small dish for soy sauce.",
      "It is the bottom of 血 (blood), which adds one stroke on top, and of 温 (warm)."
    ],
    lookalikes: ["血"],
    examples: [
      { w: "お皿", r: "おさら", m: "plate, dish" },
      { w: "小皿", r: "こざら", m: "small plate" },
      { w: "大皿", r: "おおざら", m: "large serving plate" }
    ]
  },
  {
    k: "机", meaning: "desk", on: ["キ"], kun: ["つくえ"], group: "things", strokes: 6, radical: "木",
    mnemonic: "Wood 木 beside 几, a little table on legs: a wooden table you sit at to work, a desk.",
    notes: [
      "Everyday word for a desk at school or in the office; a dining table is テーブル.",
      "The on reading き is rare: 机上 (きじょう) means 'on paper, in theory'.",
      "Don't confuse with 札 (note, ticket), which has a hook in place of 几."
    ],
    lookalikes: ["札"],
    examples: [
      { w: "机", r: "つくえ", m: "desk" },
      { w: "長机", r: "ながづくえ", m: "long table" },
      { w: "机上", r: "きじょう", m: "on the desk; in theory" }
    ]
  },
  {
    k: "窓", meaning: "window", on: ["ソウ"], kun: ["まど"], group: "things", strokes: 11, radical: "穴",
    mnemonic: "A hole 穴 at the top with a heart below it: the hole in the wall your heart looks out of, a window.",
    notes: [
      "At banks, post offices and city halls the service counter is the 窓口 (まどぐち). JR ticket offices are みどりの窓口.",
      "Booking a seat? Choose 窓側 (まどがわ, window) or 通路側 (つうろがわ, aisle).",
      "Shares the hole top with 空 (sky)."
    ],
    lookalikes: ["空"],
    examples: [
      { w: "窓", r: "まど", m: "window" },
      { w: "窓口", r: "まどぐち", m: "service counter" },
      { w: "窓側", r: "まどがわ", m: "window side (seat)" }
    ]
  },
  {
    k: "門", meaning: "gate", on: ["モン"], kun: [], group: "things", strokes: 8, radical: "門",
    mnemonic: "A pair of swinging doors hung side by side between two posts: a gate.",
    notes: [
      "Temples, schools and big houses have a 門 (もん) at the entrance; a school gate is 校門 (こうもん).",
      "入門 (にゅうもん), 'entering the gate', is used on textbook titles to mean 'introduction'.",
      "It frames 間, 問, 聞, 開 and 閉: look at what is inside the gate to tell them apart."
    ],
    lookalikes: ["問", "間"],
    examples: [
      { w: "門", r: "もん", m: "gate" },
      { w: "校門", r: "こうもん", m: "school gate" },
      { w: "入門", r: "にゅうもん", m: "introduction, beginners' guide" }
    ]
  },
  {
    k: "手", meaning: "hand", on: ["シュ"], kun: ["て"], group: "things", strokes: 4, radical: "手",
    mnemonic: "An open hand: three lines for the fingers crossed by the hooked line of the wrist and arm.",
    notes: [
      "Post offices and konbini sell 切手 (きって, stamps), literally 'cut hand'.",
      "Irregular readings: 上手 (じょうず, good at) and 下手 (へた, bad at).",
      "Right and left hand are 右手 (みぎて) and 左手 (ひだりて)."
    ],
    lookalikes: [],
    examples: [
      { w: "手", r: "て", m: "hand" },
      { w: "切手", r: "きって", m: "postage stamp" },
      { w: "上手", r: "じょうず", m: "skilful, good at" }
    ]
  },
  {
    k: "足", meaning: "foot, leg, enough", on: ["ソク"], kun: ["あし", "た.りる", "た.す"], group: "things", strokes: 7, radical: "足",
    mnemonic: "A kneecap 口 on top of 龰, a foot taking a step: the leg from the knee down to the toes.",
    notes: [
      "あし covers both foot and leg.",
      "足りる (たりる) is 'to be enough': お金が足りない (not enough money). 足す (たす) is 'to add'.",
      "Counter for pairs of shoes and socks: 一足 (いっそく), 三足 (さんぞく)."
    ],
    lookalikes: ["定"],
    examples: [
      { w: "足", r: "あし", m: "foot, leg" },
      { w: "足りる", r: "たりる", m: "to be enough" },
      { w: "一足", r: "いっそく", m: "one pair (of shoes)" }
    ]
  },
  {
    k: "目", meaning: "eye", on: ["モク"], kun: ["め"], group: "things", strokes: 5, radical: "目",
    mnemonic: "An eye turned on its side: the tall frame is the eyelids and the two lines inside are the pupil.",
    notes: [
      "After numbers め makes ordinals: 二つ目の駅 (ふたつめのえき, the second station), 二番目 (にばんめ).",
      "Read もく in compounds such as 目次 (もくじ, table of contents).",
      "Don't confuse with 日 (one line inside) or 自 (an extra stroke on top)."
    ],
    lookalikes: ["日", "自"],
    examples: [
      { w: "目", r: "め", m: "eye" },
      { w: "二番目", r: "にばんめ", m: "second, number two" },
      { w: "目次", r: "もくじ", m: "table of contents" }
    ]
  },
  {
    k: "糸", meaning: "thread", on: ["シ"], kun: ["いと"], group: "things", strokes: 6, radical: "糸",
    mnemonic: "A twisted skein of silk: two loops wound tight at the top, tied off, with loose strands spreading at the bottom.",
    notes: [
      "On its own you meet it in sewing kits at 100-yen shops.",
      "On the left of a kanji it marks threads, cloth and tying: 紙, 絵, 線, 約.",
      "Sticky natto 'pulls threads': 糸を引く (いとをひく)."
    ],
    lookalikes: [],
    examples: [
      { w: "糸", r: "いと", m: "thread" },
      { w: "糸口", r: "いとぐち", m: "clue, starting point" },
      { w: "糸電話", r: "いとでんわ", m: "string telephone" }
    ]
  },
  {
    k: "玉", meaning: "ball, jewel", on: ["ギョク"], kun: ["たま"], group: "things", strokes: 5, radical: "玉",
    mnemonic: "A king 王 with a dot 丶 tucked beside him: the jewel he never lets go of.",
    notes: [
      "Coins are 玉 (だま): 十円玉 (じゅうえんだま), 百円玉, 五百円玉.",
      "Children get お年玉 (おとしだま), gift money, at New Year. On menus egg is often written 玉子 (たまご).",
      "Without the dot it is 王 (king)."
    ],
    lookalikes: [],
    examples: [
      { w: "百円玉", r: "ひゃくえんだま", m: "100-yen coin" },
      { w: "お年玉", r: "おとしだま", m: "New Year gift money" },
      { w: "目玉", r: "めだま", m: "eyeball; highlight" }
    ]
  },
  {
    k: "写", meaning: "copy, photograph", on: ["シャ"], kun: ["うつ.す", "うつ.る"], group: "things", strokes: 5, radical: "冖",
    mnemonic: "A cover 冖 laid over 与, a hand giving something: lay a thin sheet over the original and trace a copy.",
    notes: [
      "写真 (しゃしん) is a photo; museums and temples post 写真禁止 (しゃしんきんし): no photos.",
      "写す (うつす) is to copy or take a picture of; 写る (うつる) is to come out in a photo."
    ],
    lookalikes: [],
    examples: [
      { w: "写真", r: "しゃしん", m: "photograph" },
      { w: "写す", r: "うつす", m: "to copy; to photograph" },
      { w: "写る", r: "うつる", m: "to appear (in a photo)" }
    ]
  },
  {
    k: "真", meaning: "true, real", on: ["シン"], kun: ["ま"], group: "things", strokes: 10, radical: "目",
    mnemonic: "A 十 on top of 具, a tool on its stand: measure the tool ten times over and you get its true size.",
    notes: [
      "As the prefix ま it means right, pure, exactly: 真ん中 (まんなか, the very middle), 真夏 (まなつ, midsummer).",
      "It often doubles the next sound: 真っ白 (まっしろ, pure white), 真っ先 (まっさき, the very first).",
      "In 写真 (しゃしん, photo) it is read しん."
    ],
    lookalikes: [],
    examples: [
      { w: "写真", r: "しゃしん", m: "photograph" },
      { w: "真ん中", r: "まんなか", m: "the very middle" },
      { w: "真っ白", r: "まっしろ", m: "pure white" }
    ]
  },
  {
    k: "絵", meaning: "picture, painting", on: ["エ", "カイ"], kun: [], group: "things", strokes: 12, radical: "糸",
    mnemonic: "Thread 糸 next to 会, people meeting: coloured threads coming together to make a picture.",
    notes: [
      "え is the reading almost everywhere: 絵本 (えほん, picture book). The word emoji is え (picture) + もじ (character).",
      "Read かい in 絵画 (かいが), fine-art painting, the word on museum signs.",
      "Has the thread side of 紙 (paper) and 線 (line)."
    ],
    lookalikes: ["紙"],
    examples: [
      { w: "絵", r: "え", m: "picture, drawing" },
      { w: "絵本", r: "えほん", m: "picture book" },
      { w: "絵画", r: "かいが", m: "painting, fine art" }
    ]
  },
  {
    k: "画", meaning: "picture, stroke", on: ["ガ", "カク"], kun: [], group: "things", strokes: 8, radical: "田",
    mnemonic: "A line 一 on top, a field 由 in the middle and an open box 凵 round it: marking out a field's borders, the first picture ever drawn.",
    notes: [
      "Ticket machines and touch screens say 画面にタッチしてください (がめんにタッチしてください): touch the screen.",
      "Read かく for strokes and plans: kanji dictionaries count strokes as 8画 (はっかく), and 計画 (けいかく) is a plan.",
      "Don't confuse with 面 (face, surface), another boxed shape with a line on top."
    ],
    lookalikes: ["面"],
    examples: [
      { w: "画面", r: "がめん", m: "screen" },
      { w: "計画", r: "けいかく", m: "plan" },
      { w: "画家", r: "がか", m: "painter, artist" }
    ]
  },
  {
    k: "音", meaning: "sound", on: ["オン"], kun: ["おと", "ね"], group: "things", strokes: 9, radical: "音",
    mnemonic: "立, a person standing, over 日, the sun: someone standing and singing at sunrise, a sound carried on the morning air.",
    notes: [
      "おと is a sound or noise from things; a voice is こえ instead.",
      "Read ね in 本音 (ほんね), your real feelings, and おん in 発音 (はつおん, pronunciation).",
      "It sits on top of 意 (mind), which adds a heart underneath."
    ],
    lookalikes: ["意"],
    examples: [
      { w: "発音", r: "はつおん", m: "pronunciation" },
      { w: "足音", r: "あしおと", m: "footsteps" },
      { w: "本音", r: "ほんね", m: "true feelings" }
    ]
  },
  /* ========== Core essentials ========== */
  {
    k: "立", meaning: "stand", on: ["リツ"], kun: ["た.つ", "た.てる"], group: "co-verbs", strokes: 5, radical: "立",
    mnemonic: "A pointed lid 亠 for a head, two short legs and a long line of ground underneath: a person standing up straight on the floor.",
    notes: [
      "立ち入り禁止 (たちいりきんし), keep out, is on fences, building sites and staff-only doors.",
      "国立 (こくりつ) means national and 私立 (しりつ) private, for schools, museums and hospitals. 市立 (city-run) is also しりつ, so people often say いちりつ to tell them apart.",
      "立つ is a u-verb: 立ちます, 立って (たって). The same shape sits on top of 音 (sound) and on the right of 位 (rank)."
    ],
    lookalikes: ["位", "音"],
    examples: [
      { w: "立つ", r: "たつ", m: "to stand" },
      { w: "国立", r: "こくりつ", m: "national, state-run" },
      { w: "立ち入り禁止", r: "たちいりきんし", m: "no entry, keep out" }
    ]
  },
  {
    k: "知", meaning: "know", on: ["チ"], kun: ["し.る", "し.らせる"], group: "co-verbs", strokes: 8, radical: "矢",
    mnemonic: "An arrow 矢 flying straight into a mouth 口: knowledge that hits the target and comes right back out as an answer.",
    notes: [
      "'I know' is 知っています (しっています), but 'I don't know' is 知りません (しりません), never 知っていません.",
      "知る is a u-verb although it ends in -iru: 知って (しって). お知らせ (おしらせ), notice or announcement, heads posters, websites and letters from school.",
      "知事 (ちじ) is a prefectural governor, a word you will hear on the news."
    ],
    lookalikes: [],
    examples: [
      { w: "知る", r: "しる", m: "to know, find out" },
      { w: "お知らせ", r: "おしらせ", m: "notice, announcement" },
      { w: "知り合い", r: "しりあい", m: "acquaintance" }
    ]
  },
  {
    k: "作", meaning: "make", on: ["サク", "サ"], kun: ["つく.る"], group: "co-verbs", strokes: 7, radical: "亻",
    mnemonic: "A person 亻 beside a half-built frame 乍 with beams sticking out: a carpenter in the middle of making something.",
    notes: [
      "作る (つくる) is the everyday word for making, including cooking: 料理を作る (りょうりをつくる), to make a meal.",
      "Two on readings: さく in 作文 (さくぶん, essay) and 作品 (さくひん, a work), さ in 作業中 (さぎょうちゅう, work in progress) on roadworks signs and 動作 (どうさ, movement).",
      "Don't confuse it with 昨 (previous), which has 日 on the left, as in 昨日 (きのう, yesterday)."
    ],
    lookalikes: ["昨"],
    examples: [
      { w: "作る", r: "つくる", m: "to make, cook" },
      { w: "作文", r: "さくぶん", m: "essay, composition" },
      { w: "作業中", r: "さぎょうちゅう", m: "work in progress" }
    ]
  },
  {
    k: "集", meaning: "gather, collect", on: ["シュウ"], kun: ["あつ.まる", "あつ.める"], group: "co-verbs", strokes: 12, radical: "隹",
    mnemonic: "Little birds 隹 crowding onto the branches of a tree 木: a whole flock gathering at dusk.",
    notes: [
      "集まる (あつまる) is what people do by themselves (to gather); 集める (あつめる) is what you do to things (to collect). Many verb pairs follow this -aru / -eru pattern.",
      "集合 (しゅうごう) is a meeting point on tour and school-trip schedules: 9時集合 means 'meet at 9'.",
      "The same bird 隹 sits inside 進 (advance)."
    ],
    lookalikes: ["進"],
    examples: [
      { w: "集まる", r: "あつまる", m: "to gather, get together" },
      { w: "集める", r: "あつめる", m: "to collect" },
      { w: "集合", r: "しゅうごう", m: "meeting, assembly" }
    ]
  },
  {
    k: "言", meaning: "say, word", on: ["ゲン", "ゴン"], kun: ["い.う", "こと"], group: "co-verbs", strokes: 7, radical: "言",
    mnemonic: "Lines of speech rising above a mouth 口: words pouring off someone's lips.",
    notes: [
      "言う is pronounced ゆう in speech but always written いう in kana. 何と言いましたか (なんといいましたか) asks 'what did you say?'.",
      "言葉 (ことば) is a word or language; 伝言 (でんごん) is a message, uses the rarer ごん reading.",
      "As a left side it is the 'speech' radical, in 語, 話, 読 and 試."
    ],
    lookalikes: [],
    examples: [
      { w: "言う", r: "いう", m: "to say" },
      { w: "言葉", r: "ことば", m: "word, language" },
      { w: "伝言", r: "でんごん", m: "message" }
    ]
  },
  {
    k: "運", meaning: "carry, luck", on: ["ウン"], kun: ["はこ.ぶ"], group: "co-verbs", strokes: 12, radical: "辶",
    mnemonic: "An army 軍 on the move along the road ⻌: soldiers carrying supplies forward, and only luck decides whether they arrive.",
    notes: [
      "運転 (うんてん) is driving and 運転手 (うんてんしゅ) the driver. 運転見合わせ (うんてんみあわせ) on station boards means services are suspended.",
      "On its own 運 means luck: 運がいい (うんがいい), lucky. 運ぶ (はこぶ) is to carry, as in moving boxes. 運動会 (うんどうかい) is the school sports day.",
      "Same road ⻌ and cart 車 as 連 (link), but 運 has a lid over the cart."
    ],
    lookalikes: ["連", "軍"],
    examples: [
      { w: "運転", r: "うんてん", m: "driving; running (trains)" },
      { w: "運ぶ", r: "はこぶ", m: "to carry" },
      { w: "運動", r: "うんどう", m: "exercise" }
    ]
  },
  {
    k: "教", meaning: "teach", on: ["キョウ"], kun: ["おし.える", "おそ.わる"], group: "co-verbs", strokes: 11, radical: "攵",
    mnemonic: "On the left 孝, an old man with a child 子 beneath him; on the right a hand holding a stick 攵: the strict old teacher keeping pupils at their lessons.",
    notes: [
      "教える (おしえる) also means to tell or show: 道を教えてください, 'could you tell me the way?'. 電話番号を教えて asks for someone's number.",
      "教室 (きょうしつ) is a classroom, and also a class you sign up for: 料理教室 (cooking class), 英会話教室.",
      "教わる (おそわる) is the other side, to be taught. The top-left matches 考 (think), but 教 has 子 underneath."
    ],
    lookalikes: ["考"],
    examples: [
      { w: "教える", r: "おしえる", m: "to teach, tell" },
      { w: "教室", r: "きょうしつ", m: "classroom; class" },
      { w: "教会", r: "きょうかい", m: "church" }
    ]
  },
  {
    k: "使", meaning: "use", on: ["シ"], kun: ["つか.う"], group: "co-verbs", strokes: 8, radical: "亻",
    mnemonic: "A person 亻 next to an official 吏 holding a document: the messenger the official uses to carry his orders.",
    notes: [
      "使う (つかう) is the everyday word for using: カードは使えますか, 'can I use a card?', is a useful question at any till.",
      "使用中 (しようちゅう), in use or occupied, lights up on toilet doors on trains and planes; 使用禁止 (しようきんし) means do not use.",
      "大使館 (たいしかん) is an embassy. Don't mix it up with 便 (convenience), which also has 亻 on the left."
    ],
    lookalikes: ["便"],
    examples: [
      { w: "使う", r: "つかう", m: "to use" },
      { w: "使用中", r: "しようちゅう", m: "in use, occupied" },
      { w: "大使館", r: "たいしかん", m: "embassy" }
    ]
  },
  {
    k: "転", meaning: "turn, roll", on: ["テン"], kun: ["ころ.ぶ", "ころ.がる"], group: "co-verbs", strokes: 11, radical: "車",
    mnemonic: "A cart 車 beside 云, a puff of cloud: the wheel turns and turns until the cart rolls over in a cloud of dust.",
    notes: [
      "自転車 (じてんしゃ), bicycle, is literally a 'self-turning cart'; 運転 (うんてん) is driving.",
      "転ぶ (ころぶ) is to trip and fall. 転倒注意 (てんとうちゅうい), mind you don't slip, is on wet floors and stairs.",
      "The right side 云 also appears in 伝 (pass on), with a person on the left instead of 車."
    ],
    lookalikes: ["伝"],
    examples: [
      { w: "自転車", r: "じてんしゃ", m: "bicycle" },
      { w: "運転", r: "うんてん", m: "driving" },
      { w: "転ぶ", r: "ころぶ", m: "to fall over" }
    ]
  },
  {
    k: "試", meaning: "try, test", on: ["シ"], kun: ["ため.す", "こころ.みる"], group: "co-verbs", strokes: 13, radical: "言",
    mnemonic: "Words 言 beside a ceremony 式: an exam is a formal ceremony where your words are put to the test.",
    notes: [
      "試合 (しあい) is a match or game in sport; 試験 (しけん) is an exam.",
      "試着室 (しちゃくしつ) is the fitting room; ask 試着してもいいですか. 試食 (ししょく) is the free tasting at supermarkets.",
      "ためす (to try out) is the common kun reading; こころみる is formal. The right side is 式 on its own."
    ],
    lookalikes: ["式"],
    examples: [
      { w: "試合", r: "しあい", m: "match, game" },
      { w: "試験", r: "しけん", m: "exam" },
      { w: "試着", r: "しちゃく", m: "trying on clothes" }
    ]
  },
  {
    k: "思", meaning: "think", on: ["シ"], kun: ["おも.う"], group: "co-verbs", strokes: 9, radical: "心",
    mnemonic: "A rice field 田 over a heart 心: a farmer thinking about his crops with his whole heart.",
    notes: [
      "と思います (とおもいます), 'I think that', softens almost any opinion in polite Japanese.",
      "思い出 (おもいで) is a memory; 思い出す (おもいだす) is to remember or recall.",
      "思う is a feeling or opinion; 考える (かんがえる) is thinking something through. Don't confuse it with 患 (患者, patient), which also sits on 心."
    ],
    lookalikes: ["患"],
    examples: [
      { w: "思う", r: "おもう", m: "to think, feel" },
      { w: "思い出", r: "おもいで", m: "memory" },
      { w: "思い出す", r: "おもいだす", m: "to remember" }
    ]
  },
  {
    k: "考", meaning: "think, consider", on: ["コウ"], kun: ["かんが.える", "かんが.え"], group: "co-verbs", strokes: 6, radical: "耂",
    mnemonic: "An old man 耂 bent over a crooked cane 丂: thinking long and hard before he takes the next step.",
    notes: [
      "考える (かんがえる) is a ru-verb: 考えて. 考えておきます, 'I'll think about it', is often a polite no.",
      "参考 (さんこう) means reference: 参考書 (さんこうしょ) is a study guide.",
      "The top matches the left of 教 (teach); the bottom of 考 is a bent stroke, not 子."
    ],
    lookalikes: ["教"],
    examples: [
      { w: "考える", r: "かんがえる", m: "to think, consider" },
      { w: "考え", r: "かんがえ", m: "idea, opinion" },
      { w: "参考", r: "さんこう", m: "reference" }
    ]
  },
  {
    k: "起", meaning: "get up, happen", on: ["キ"], kun: ["お.きる", "お.こす", "お.こる"], group: "co-verbs", strokes: 10, radical: "走",
    mnemonic: "Running 走 wraps under the self 己: the moment you wake up, your self jumps out of bed and runs.",
    notes: [
      "起きる (おきる) is a ru-verb: 起きます, 起きて. You 起きる yourself; 起こす (おこす) is to wake someone else: 七時に起こしてください.",
      "For events: 地震が起きた / 起こった, an earthquake happened.",
      "起立 (きりつ), 'stand up', is the command at the start of a school lesson. The left is 走 (run), with its tail stretched under 己."
    ],
    lookalikes: ["走"],
    examples: [
      { w: "起きる", r: "おきる", m: "to get up, wake up" },
      { w: "起こす", r: "おこす", m: "to wake (someone)" },
      { w: "早起き", r: "はやおき", m: "getting up early" }
    ]
  },
  {
    k: "去", meaning: "leave, past", on: ["キョ", "コ"], kun: ["さ.る"], group: "co-verbs", strokes: 5, radical: "厶",
    mnemonic: "Earth 土 over a little pouch 厶: someone filling a bag with soil from home and leaving it all behind.",
    notes: [
      "去年 (きょねん), last year, is the everyday word; 昨年 (さくねん) is the formal one in letters and the news.",
      "過去 (かこ), the past, uses the rarer こ reading. 去る (さる), to leave, is mostly written.",
      "Add the three-dot water radical on the left and it becomes 法 (law)."
    ],
    lookalikes: ["法"],
    examples: [
      { w: "去年", r: "きょねん", m: "last year" },
      { w: "過去", r: "かこ", m: "the past" },
      { w: "去る", r: "さる", m: "to leave, go away" }
    ]
  },
  {
    k: "建", meaning: "build", on: ["ケン"], kun: ["た.てる", "た.つ"], group: "co-verbs", strokes: 9, radical: "廴",
    mnemonic: "A hand holding a brush 聿 sketching the plans, set on a long stride 廴: the architect drawing a building and pacing out the site.",
    notes: [
      "建物 (たてもの) is a building. 二階建て (にかいだて) means two-storey, and 一戸建て (いっこだて) is a detached house in property ads.",
      "建てる (たてる) is only for buildings; for standing other things up use 立てる, with the same reading.",
      "The stride 廴 is written last, after the 聿."
    ],
    lookalikes: [],
    examples: [
      { w: "建物", r: "たてもの", m: "building" },
      { w: "建てる", r: "たてる", m: "to build" },
      { w: "二階建て", r: "にかいだて", m: "two-storey (building)" }
    ]
  },
  {
    k: "映", meaning: "reflect, project", on: ["エイ"], kun: ["うつ.る", "うつ.す"], group: "co-verbs", strokes: 9, radical: "日",
    mnemonic: "The sun 日 beside 央, a figure standing in the centre: light thrown on the middle of a screen, a picture being projected.",
    notes: [
      "映画 (えいが) is a film and 映画館 (えいがかん) a cinema; 上映中 (じょうえいちゅう) means now showing.",
      "映る (うつる) is to be reflected or to appear on a screen; for photos it is 写る, with the same reading.",
      "The right side 央 is also the bottom of 英 (English)."
    ],
    lookalikes: ["英"],
    examples: [
      { w: "映画", r: "えいが", m: "film, movie" },
      { w: "映画館", r: "えいがかん", m: "cinema" },
      { w: "上映中", r: "じょうえいちゅう", m: "now showing" }
    ]
  },
  {
    k: "習", meaning: "learn", on: ["シュウ"], kun: ["なら.う"], group: "co-verbs", strokes: 11, radical: "羽",
    mnemonic: "Wings 羽 flapping over 白, white: a young white bird practising flight again and again until it learns.",
    notes: [
      "習う (ならう) is learning from a teacher: ピアノを習っています. 勉強する (べんきょうする) is studying in general.",
      "習い事 (ならいごと) are after-school lessons such as swimming or piano.",
      "予習 (よしゅう) is preparing before class and 復習 (ふくしゅう) is revising after it."
    ],
    lookalikes: [],
    examples: [
      { w: "習う", r: "ならう", m: "to learn (from someone)" },
      { w: "学習", r: "がくしゅう", m: "learning, study" },
      { w: "復習", r: "ふくしゅう", m: "review, revision" }
    ]
  },
  {
    k: "走", meaning: "run", on: ["ソウ"], kun: ["はし.る"], group: "co-verbs", strokes: 7, radical: "走",
    mnemonic: "Earth 土 above a striding foot 龰: feet pounding the ground as someone runs.",
    notes: [
      "走る (はしる) is a u-verb although it ends in -iru: 走ります, 走って (はしって).",
      "走らないでください, please don't run, is on station stairs and escalators. 走行中 (そうこうちゅう) means while the vehicle is moving.",
      "As a radical it wraps under the right side, as in 起 (get up)."
    ],
    lookalikes: ["起"],
    examples: [
      { w: "走る", r: "はしる", m: "to run" },
      { w: "走行中", r: "そうこうちゅう", m: "while moving" },
      { w: "競走", r: "きょうそう", m: "race" }
    ]
  },
  {
    k: "歩", meaning: "walk", on: ["ホ"], kun: ["ある.く"], group: "co-verbs", strokes: 8, radical: "止",
    mnemonic: "A foot that stops 止 on top and a few 少 small steps below: one foot planted, the other moving, walking along.",
    notes: [
      "歩く (あるく) is to walk. 歩いて5分 (あるいてごふん), five minutes on foot, is in every flat and hotel ad.",
      "歩道 (ほどう) is the pavement and 歩行者 (ほこうしゃ) a pedestrian, on crossing and road signs.",
      "After ん or っ the reading becomes ぽ: 一歩 (いっぽ, one step), 進歩 (しんぽ, progress)."
    ],
    lookalikes: [],
    examples: [
      { w: "歩く", r: "あるく", m: "to walk" },
      { w: "歩道", r: "ほどう", m: "pavement, footpath" },
      { w: "歩行者", r: "ほこうしゃ", m: "pedestrian" }
    ]
  },
  {
    k: "答", meaning: "answer", on: ["トウ"], kun: ["こた.える", "こた.え"], group: "co-verbs", strokes: 12, radical: "竹",
    mnemonic: "Bamboo 竹 slips on top and 合, fit together, below: matching a bamboo tally to its partner, the answer that fits.",
    notes: [
      "答え (こたえ) is an answer; 答える (こたえる) takes に: 質問に答える, to answer a question.",
      "回答 (かいとう) is a reply to a survey or enquiry, and 解答 (かいとう) the answer to a test question: same sound, different kanji.",
      "The bamboo top is shared with 等 (and so on); the bottom of 答 is 合."
    ],
    lookalikes: ["等"],
    examples: [
      { w: "答え", r: "こたえ", m: "answer" },
      { w: "答える", r: "こたえる", m: "to answer" },
      { w: "回答", r: "かいとう", m: "reply, response" }
    ]
  },
  {
    k: "借", meaning: "borrow, rent", on: ["シャク"], kun: ["か.りる"], group: "co-verbs", strokes: 10, radical: "亻",
    mnemonic: "A person 亻 next to 昔, long ago: someone who borrowed something long ago and still hasn't given it back.",
    notes: [
      "借りる (かりる) is borrow and 貸す (かす) is lend: 本を借りる, 本を貸す. Learners mix these two up all the time.",
      "借りる is a ru-verb: 借ります, 借りて. 借金 (しゃっきん) is debt.",
      "Renting a flat is also 借りる; the landlord 貸す it out."
    ],
    lookalikes: [],
    examples: [
      { w: "借りる", r: "かりる", m: "to borrow, rent" },
      { w: "借金", r: "しゃっきん", m: "debt" },
      { w: "借り物", r: "かりもの", m: "borrowed thing" }
    ]
  },
  {
    k: "貸", meaning: "lend, rent out", on: ["タイ"], kun: ["か.す"], group: "co-verbs", strokes: 12, radical: "貝",
    mnemonic: "A shell 貝, the old money, under 代, in place of: handing over shells in place of the real thing, lending them out.",
    notes: [
      "貸す (かす) is to lend: 貸してください, 'could you lend me...?', for pens, umbrellas and phone chargers.",
      "貸し出し中 (かしだしちゅう), on loan, is on library books and rental items. 貸切 (かしきり) on a bus or restaurant door means booked for a private group.",
      "The opposite is 借りる (かりる, borrow)."
    ],
    lookalikes: [],
    examples: [
      { w: "貸す", r: "かす", m: "to lend" },
      { w: "貸し出し", r: "かしだし", m: "lending, loan" },
      { w: "貸切", r: "かしきり", m: "reserved, private hire" }
    ]
  },
  {
    k: "勉", meaning: "effort, study", on: ["ベン"], kun: [], group: "co-verbs", strokes: 10, radical: "力",
    mnemonic: "免, a figure squeezing out of a tight spot, next to strength 力: straining with all your might, the hard effort of study.",
    notes: [
      "Almost only met in 勉強 (べんきょう), study: 日本語を勉強しています, I'm studying Japanese.",
      "In some shops, especially in Osaka, 勉強します means 'I'll give you a discount', an old merchant's phrase.",
      "勉強会 (べんきょうかい) is a study group or workshop, common at work."
    ],
    lookalikes: [],
    examples: [
      { w: "勉強", r: "べんきょう", m: "study" },
      { w: "勉強中", r: "べんきょうちゅう", m: "studying, still learning" },
      { w: "勉強会", r: "べんきょうかい", m: "study group" }
    ]
  },
  {
    k: "死", meaning: "death, die", on: ["シ"], kun: ["し.ぬ"], group: "co-verbs", strokes: 6, radical: "歹",
    mnemonic: "A bare bone 歹 on the left and a person 匕 slumped on the right: someone lying down for the last time.",
    notes: [
      "死ぬ (しぬ) is the only common verb ending in ぬ: 死にます, 死んで, 死んだ.",
      "Because し sounds like 死, four is usually read よん, and some hospitals and hotels skip room number 4.",
      "死亡 (しぼう) is the formal word in news and documents; 必死 (ひっし) means frantic, all-out."
    ],
    lookalikes: [],
    examples: [
      { w: "死ぬ", r: "しぬ", m: "to die" },
      { w: "死亡", r: "しぼう", m: "death (formal)" },
      { w: "必死", r: "ひっし", m: "desperate, all-out" }
    ]
  },
  {
    k: "強", meaning: "strong", on: ["キョウ"], kun: ["つよ.い"], group: "co-describe", strokes: 11, radical: "弓",
    mnemonic: "A bow 弓 on the left and a beetle 虫 under a little hook on the right: a bug strong enough to string a bow.",
    notes: [
      "強い (つよい) is strong. Weather warnings on TV and phones talk of 強い雨 and 強風 (きょうふう), strong wind.",
      "The word learners write most is 勉強 (べんきょう), study, where 強 is read きょう.",
      "On fans, hair dryers and air-con remotes, 強 marks the strongest setting."
    ],
    lookalikes: [],
    examples: [
      { w: "強い", r: "つよい", m: "strong" },
      { w: "勉強", r: "べんきょう", m: "study" },
      { w: "強風", r: "きょうふう", m: "strong wind" }
    ]
  },
  {
    k: "多", meaning: "many, much", on: ["タ"], kun: ["おお.い"], group: "co-describe", strokes: 6, radical: "夕",
    mnemonic: "Two evenings 夕 stacked one on top of the other: night after night after night, so many of them.",
    notes: [
      "多い (おおい) means many or a lot, but it rarely goes straight before a noun: say 人が多い or 多くの人 (おおくのひと), not 多い人.",
      "多分 (たぶん), probably, is one of the first words learners pick up. 多目的トイレ (たもくてきトイレ) is the multi-purpose, accessible toilet in stations.",
      "Don't mix it up with 夕 (evening) on its own or with 名 (name), which puts a mouth 口 under one 夕."
    ],
    lookalikes: ["夕", "名"],
    examples: [
      { w: "多い", r: "おおい", m: "many, a lot" },
      { w: "多分", r: "たぶん", m: "probably" },
      { w: "多少", r: "たしょう", m: "a little, somewhat" }
    ]
  },
  {
    k: "重", meaning: "heavy, important", on: ["ジュウ", "チョウ"], kun: ["おも.い", "かさ.ねる"], group: "co-describe", strokes: 9, radical: "里",
    mnemonic: "A thousand 千 sacks piled on top of a village 里: no wonder the whole thing is so heavy.",
    notes: [
      "重い (おもい) is heavy. At the clinic you step on the scales for 体重 (たいじゅう), body weight.",
      "重要 (じゅうよう), important, is printed on letters you must not throw away. The チョウ reading is in words like きちょうひん (valuables) and しんちょう (careful).",
      "The vertical stroke runs straight through from the top to the bottom line. Compare 動 (move), which adds 力 on the right."
    ],
    lookalikes: ["動", "黒"],
    examples: [
      { w: "重い", r: "おもい", m: "heavy" },
      { w: "体重", r: "たいじゅう", m: "body weight" },
      { w: "重要", r: "じゅうよう", m: "important" }
    ]
  },
  {
    k: "古", meaning: "old", on: ["コ"], kun: ["ふる.い"], group: "co-describe", strokes: 5, radical: "口",
    mnemonic: "Ten 十 mouths 口 retelling the same story down the generations: by now the tale is very old.",
    notes: [
      "古い (ふるい) is for things, not for a person's age; 古い友だち is a friend of many years, not an elderly one.",
      "中古 (ちゅうこ), second-hand, is on used-car lots, phone shops and game stores. 古本 (ふるほん) are second-hand books.",
      "Same 口 base as 右 (right), but 古 has a cross 十 on top instead of a slanting ナ."
    ],
    lookalikes: ["右"],
    examples: [
      { w: "古い", r: "ふるい", m: "old" },
      { w: "中古", r: "ちゅうこ", m: "second-hand, used" },
      { w: "古本", r: "ふるほん", m: "second-hand book" }
    ]
  },
  {
    k: "少", meaning: "a little, few", on: ["ショウ"], kun: ["すく.ない", "すこ.し"], group: "co-describe", strokes: 4, radical: "小",
    mnemonic: "Small 小 with an extra slice 丿 shaved off the bottom: even less than small, just a little.",
    notes: [
      "少し (すこし) is a little, said all day long: 少し待ってください. 少ない (すくない) means few: 人が少ない.",
      "Shop staff and phone operators say 少々お待ちください (しょうしょうおまちください): one moment, please.",
      "Don't confuse it with 小 (small); 少 adds the long slanting stroke at the bottom."
    ],
    lookalikes: ["小"],
    examples: [
      { w: "少し", r: "すこし", m: "a little" },
      { w: "少ない", r: "すくない", m: "few, not many" },
      { w: "少年", r: "しょうねん", m: "boy" }
    ]
  },
  {
    k: "早", meaning: "early, quick", on: ["ソウ", "サッ"], kun: ["はや.い"], group: "co-describe", strokes: 6, radical: "日",
    mnemonic: "The sun 日 coming up over a cross 十 on the horizon: up at dawn, nice and early.",
    notes: [
      "早い (はやい) is early; 早く (はやく) is 'quickly, hurry up'. Fast in speed is written 速い, as in 快速 trains, though it sounds the same.",
      "早速 (さっそく), right away, uses the rare サッ reading. 早朝 (そうちょう) is early morning, as in early-morning work or flights.",
      "Add grass on top and it becomes 草 (grass)."
    ],
    lookalikes: ["草"],
    examples: [
      { w: "早い", r: "はやい", m: "early" },
      { w: "早く", r: "はやく", m: "early; quickly" },
      { w: "早速", r: "さっそく", m: "right away" }
    ]
  },
  {
    k: "青", meaning: "blue, green", on: ["セイ"], kun: ["あお", "あお.い"], group: "co-describe", strokes: 8, radical: "青",
    mnemonic: "Fresh young shoots 龶 growing over the moon 月: the clear blue-green of a spring night.",
    notes: [
      "青 covers blue and some greens: the green traffic light is 青信号 (あおしんごう), and green apples are 青りんご.",
      "青い (あおい) is blue and 青空 (あおぞら) a blue sky. 青年 (せいねん), a young man, uses the on reading.",
      "It is the right half of 晴 (clear weather), where the sun 日 is added on the left."
    ],
    lookalikes: ["晴"],
    examples: [
      { w: "青い", r: "あおい", m: "blue" },
      { w: "青空", r: "あおぞら", m: "blue sky" },
      { w: "青信号", r: "あおしんごう", m: "green (traffic) light" }
    ]
  },
  {
    k: "黒", meaning: "black", on: ["コク"], kun: ["くろ", "くろ.い"], group: "co-describe", strokes: 11, radical: "黒",
    mnemonic: "A village 里 sitting over the four flames of a fire 灬: smoke and soot until everything turns black.",
    notes: [
      "黒 (くろ) is the colour and 黒い (くろい) the adjective. 白黒 (しろくろ) is black and white.",
      "黒字 (くろじ), black figures, means a profit; the opposite is 赤字 (あかじ), being in the red.",
      "The top is 里 (village) and the four dots of fire 灬 sit underneath, as in 魚 (fish) and 点 (point)."
    ],
    lookalikes: ["重", "魚"],
    examples: [
      { w: "黒い", r: "くろい", m: "black" },
      { w: "白黒", r: "しろくろ", m: "black and white" },
      { w: "黒字", r: "くろじ", m: "profit, in the black" }
    ]
  },
  {
    k: "赤", meaning: "red", on: ["セキ"], kun: ["あか", "あか.い"], group: "co-describe", strokes: 7, radical: "赤",
    mnemonic: "Earth 土 over a fire's flickering legs: clay baked in the kiln until it glows red.",
    notes: [
      "赤ちゃん (あかちゃん), a baby, is literally 'the little red one'.",
      "赤信号 (あかしんごう) is a red light. 赤字 (あかじ), red figures, means a loss.",
      "The on reading セキ shows up in 赤十字 (せきじゅうじ), the Red Cross."
    ],
    lookalikes: [],
    examples: [
      { w: "赤い", r: "あかい", m: "red" },
      { w: "赤ちゃん", r: "あかちゃん", m: "baby" },
      { w: "赤信号", r: "あかしんごう", m: "red (traffic) light" }
    ]
  },
  {
    k: "色", meaning: "colour", on: ["ショク", "シキ"], kun: ["いろ"], group: "co-describe", strokes: 6, radical: "色",
    mnemonic: "One person bending over another who is curled up 巴 below: the flush of colour that rises in their faces.",
    notes: [
      "色 (いろ) is colour; 何色 (なにいろ) asks 'what colour?' in shops. 色々 (いろいろ) means various, all sorts.",
      "Many colour words add 色 to a thing: 茶色 (ちゃいろ, brown, tea colour), 水色 (みずいろ, light blue, water colour).",
      "The on readings are rarer: 特色 (とくしょく), a special feature, and シキ in 色紙 (しきし), the square card for autographs."
    ],
    lookalikes: [],
    examples: [
      { w: "色", r: "いろ", m: "colour" },
      { w: "茶色", r: "ちゃいろ", m: "brown" },
      { w: "水色", r: "みずいろ", m: "light blue" }
    ]
  },
  {
    k: "悪", meaning: "bad", on: ["アク", "オ"], kun: ["わる.い"], group: "co-describe", strokes: 11, radical: "心",
    mnemonic: "A twisted, crooked frame 亜 pressing down on a heart 心: a heart weighed down by bad thoughts.",
    notes: [
      "悪い (わるい) is bad. 気分が悪い (きぶんがわるい) is 'I feel unwell', a key phrase at the clinic or on the train.",
      "最悪 (さいあく) is 'the worst'. オ appears in 悪寒 (おかん), the chills of a fever.",
      "The heart 心 at the bottom is shared with 思 (think) and 意 (mind)."
    ],
    lookalikes: ["思"],
    examples: [
      { w: "悪い", r: "わるい", m: "bad" },
      { w: "最悪", r: "さいあく", m: "the worst" },
      { w: "悪口", r: "わるぐち", m: "speaking ill of someone" }
    ]
  },
  {
    k: "楽", meaning: "fun, music, ease", on: ["ガク", "ラク"], kun: ["たの.しい", "たの.しむ"], group: "co-describe", strokes: 13, radical: "木",
    mnemonic: "A drum strung between two bells, set up on a wooden 木 stand: music that makes everything fun.",
    notes: [
      "楽しい (たのしい) is fun. 楽しみにしています (たのしみにしています), 'I'm looking forward to it', ends many messages.",
      "Three readings to know: たの in 楽しい, ガク in 音楽 (おんがく, music) and ラク in 楽 (らく), easy or comfortable: 楽になりました, I feel better.",
      "Add grass on top and it becomes 薬 (medicine)."
    ],
    lookalikes: ["薬"],
    examples: [
      { w: "楽しい", r: "たのしい", m: "fun, enjoyable" },
      { w: "音楽", r: "おんがく", m: "music" },
      { w: "楽しみ", r: "たのしみ", m: "something to look forward to" }
    ]
  },
  {
    k: "有", meaning: "have, exist", on: ["ユウ"], kun: ["あ.る"], group: "co-describe", strokes: 6, radical: "月",
    mnemonic: "A hand ナ reaching over a piece of meat 月: having something good to eat.",
    notes: [
      "有料 (ゆうりょう) means there is a charge: look for it on parking, toilets and lockers. The opposite is 無料 (むりょう), free.",
      "有名 (ゆうめい) is famous. The verb ある is almost always written in kana, as is ありがとう.",
      "The top is the same hand as in 右 (right), but with meat 月 underneath instead of a mouth 口."
    ],
    lookalikes: ["右"],
    examples: [
      { w: "有名", r: "ゆうめい", m: "famous" },
      { w: "有料", r: "ゆうりょう", m: "paid, with a charge" },
      { w: "有給", r: "ゆうきゅう", m: "paid leave" }
    ]
  },
  {
    k: "正", meaning: "correct, right", on: ["セイ", "ショウ"], kun: ["ただ.しい"], group: "co-describe", strokes: 5, radical: "止",
    mnemonic: "A line 一 drawn across the top of stop 止: stop exactly at the line, perfectly correct.",
    notes: [
      "正しい (ただしい) is correct. お正月 (おしょうがつ), New Year, is the biggest holiday of the year.",
      "正面 (しょうめん) is the front, as in 正面入口, the main entrance. Japanese count votes and scores in fives by drawing 正 stroke by stroke.",
      "Without the top line it is 止 (stop)."
    ],
    lookalikes: ["止"],
    examples: [
      { w: "正しい", r: "ただしい", m: "correct, right" },
      { w: "お正月", r: "おしょうがつ", m: "New Year" },
      { w: "正面", r: "しょうめん", m: "the front" }
    ]
  },
  {
    k: "近", meaning: "near", on: ["キン"], kun: ["ちか.い"], group: "co-describe", strokes: 7, radical: "辶",
    mnemonic: "An axe 斤 out on the road ⻌: the woodcutter only walks as far as the nearest trees.",
    notes: [
      "近い (ちかい) is near; 駅の近く (えきのちかく) is 'near the station', a phrase you will use all the time for directions.",
      "最近 (さいきん) is recently. 近所 (きんじょ) is the neighbourhood, and neighbours are 近所の人.",
      "The road ⻌ is written last, after the axe 斤."
    ],
    lookalikes: ["新"],
    examples: [
      { w: "近い", r: "ちかい", m: "near, close" },
      { w: "近く", r: "ちかく", m: "nearby" },
      { w: "最近", r: "さいきん", m: "recently" }
    ]
  },
  {
    k: "広", meaning: "wide, spacious", on: ["コウ"], kun: ["ひろ.い", "ひろ.がる"], group: "co-describe", strokes: 5, radical: "广",
    mnemonic: "A broad roof 广 over one small elbow 厶, with room to spare: wide open space.",
    notes: [
      "Rooms and flats are 広い (ひろい) or せまい, not big or small. 広場 (ひろば) is a public square.",
      "広告 (こうこく) is an advertisement, and 広島 (ひろしま) is Hiroshima.",
      "The roof 广 is shared with 店 (shop) and 庫 (storehouse)."
    ],
    lookalikes: ["店"],
    examples: [
      { w: "広い", r: "ひろい", m: "wide, spacious" },
      { w: "広場", r: "ひろば", m: "plaza, square" },
      { w: "広告", r: "こうこく", m: "advertisement" }
    ]
  },
  {
    k: "不", meaning: "not, un-", on: ["フ", "ブ"], kun: [], group: "co-describe", strokes: 4, radical: "一",
    mnemonic: "A ceiling 一 with roots 丿 丨 hanging down beneath it: the seed hits the ceiling and can not grow up.",
    notes: [
      "A prefix meaning 'not' or 'un-': 不便 (ふべん, inconvenient), 不安 (ふあん, uneasy), 不足 (ふそく, shortage).",
      "If a parcel comes while you are out, you get a 不在 (ふざい, absence) slip in the post box to arrange redelivery.",
      "Usually ふ; ぶ in a few words such as 不用心 (ぶようじん), unsafe. Don't confuse it with 下 (below)."
    ],
    lookalikes: ["下"],
    examples: [
      { w: "不便", r: "ふべん", m: "inconvenient" },
      { w: "不安", r: "ふあん", m: "anxiety, uneasy" },
      { w: "不在", r: "ふざい", m: "being out, absence" }
    ]
  },
  {
    k: "主", meaning: "main, master", on: ["シュ"], kun: ["おも", "ぬし"], group: "co-people", strokes: 5, radical: "丶",
    mnemonic: "The flame of a lamp 亠 above a king 王: the master of the house sitting by his lamp.",
    notes: [
      "主人 (しゅじん) is how some women say 'my husband'; ご主人 (ごしゅじん) is someone else's.",
      "主に (おもに) means mainly: 主に週末 (しゅうまつ), mostly at weekends. 持ち主 (もちぬし) is the owner of something.",
      "A dot on top of 王 makes 主; a dot inside makes 玉 (ball). 主 is also the right side of 住 (live)."
    ],
    lookalikes: ["王", "住"],
    examples: [
      { w: "主人", r: "しゅじん", m: "husband; master" },
      { w: "主に", r: "おもに", m: "mainly" },
      { w: "持ち主", r: "もちぬし", m: "owner" }
    ]
  },
  {
    k: "親", meaning: "parent, close", on: ["シン"], kun: ["おや", "した.しい"], group: "co-people", strokes: 16, radical: "見",
    mnemonic: "Standing 立 on a tree 木 to look 見 far down the road: a parent watching for their child to come home.",
    notes: [
      "親 (おや) is a parent; 両親 (りょうしん) is the polite word for your parents.",
      "親切 (しんせつ) means kind: ご親切にありがとうございます. 親しい (したしい) means close: 親しい友だち.",
      "The left half is the same as in 新 (new)."
    ],
    lookalikes: ["新"],
    examples: [
      { w: "親", r: "おや", m: "parent" },
      { w: "両親", r: "りょうしん", m: "parents" },
      { w: "親切", r: "しんせつ", m: "kind" }
    ]
  },
  {
    k: "族", meaning: "family, tribe", on: ["ゾク"], kun: [], group: "co-people", strokes: 11, radical: "方",
    mnemonic: "A banner 方 flapping on its pole with an arrow beneath it: a clan of archers gathered under one flag.",
    notes: [
      "家族 (かぞく) is family; ご家族 (ごかぞく) is someone else's family.",
      "水族館 (すいぞくかん), aquarium, is literally the 'water tribe hall'. 民族 (みんぞく) is an ethnic group.",
      "Don't confuse it with 旅 (travel), which has the same flag on the left."
    ],
    lookalikes: ["旅"],
    examples: [
      { w: "家族", r: "かぞく", m: "family" },
      { w: "水族館", r: "すいぞくかん", m: "aquarium" },
      { w: "家族旅行", r: "かぞくりょこう", m: "family trip" }
    ]
  },
  {
    k: "私", meaning: "I, private", on: ["シ"], kun: ["わたし", "わたくし"], group: "co-people", strokes: 7, radical: "禾",
    mnemonic: "A sheaf of grain 禾 with a little private pouch 厶 beside it: my own share, kept for me.",
    notes: [
      "私 (わたし) is the standard word for 'I'; わたくし, same kanji, is the very polite form in business.",
      "私立 (しりつ) means private, as in 私立大学; 私服 (しふく) is your own clothes rather than a uniform.",
      "和 (peace, Japanese) has 口 on the right instead of 厶."
    ],
    lookalikes: ["和"],
    examples: [
      { w: "私", r: "わたし", m: "I, me" },
      { w: "私たち", r: "わたしたち", m: "we, us" },
      { w: "私立", r: "しりつ", m: "private (school etc.)" }
    ]
  },
  {
    k: "兄", meaning: "older brother", on: ["キョウ"], kun: ["あに"], group: "co-people", strokes: 5, radical: "儿",
    mnemonic: "A big mouth 口 on a pair of legs 儿: the older brother, always giving orders.",
    notes: [
      "Your own older brother, when talking to others, is 兄 (あに); someone else's, or yours when you speak to him, is お兄さん (おにいさん), a special reading.",
      "兄弟 (きょうだい) means brothers, or siblings in general: 兄弟はいますか, do you have any brothers or sisters?",
      "Compare 元 (origin), which has 二 on top of the same legs."
    ],
    lookalikes: ["元"],
    examples: [
      { w: "兄", r: "あに", m: "(my) older brother" },
      { w: "お兄さん", r: "おにいさん", m: "older brother" },
      { w: "兄弟", r: "きょうだい", m: "siblings, brothers" }
    ]
  },
  {
    k: "弟", meaning: "younger brother", on: ["ダイ", "デ"], kun: ["おとうと"], group: "co-people", strokes: 7, radical: "弓",
    mnemonic: "Two little horns 八 on top and a cord wound round and round a stick: the little brother spinning his top.",
    notes: [
      "My younger brother is 弟 (おとうと); someone else's is 弟さん (おとうとさん).",
      "兄弟 (きょうだい) uses だい, and 弟子 (でし, apprentice, disciple) uses で.",
      "第 (number ..., as in 第一) is the same shape with bamboo on top."
    ],
    lookalikes: ["第"],
    examples: [
      { w: "弟", r: "おとうと", m: "younger brother" },
      { w: "兄弟", r: "きょうだい", m: "siblings, brothers" },
      { w: "弟子", r: "でし", m: "apprentice, disciple" }
    ]
  },
  {
    k: "姉", meaning: "older sister", on: ["シ"], kun: ["あね"], group: "co-people", strokes: 8, radical: "女",
    mnemonic: "A woman 女 heading off to the market 市: the big sister sent to do the shopping.",
    notes: [
      "My older sister is 姉 (あね); someone else's, or yours when you speak to her, is お姉さん (おねえさん). Shop staff also use お姉さん to call out to a young woman.",
      "姉妹 (しまい) means sisters; 姉妹都市 (しまいとし), sister city, is on welcome signs in many towns."
    ],
    lookalikes: ["妹"],
    examples: [
      { w: "姉", r: "あね", m: "(my) older sister" },
      { w: "お姉さん", r: "おねえさん", m: "older sister" },
      { w: "姉妹", r: "しまい", m: "sisters" }
    ]
  },
  {
    k: "妹", meaning: "younger sister", on: ["マイ"], kun: ["いもうと"], group: "co-people", strokes: 8, radical: "女",
    mnemonic: "A woman 女 who is not yet 未 grown up: the little sister.",
    notes: [
      "My younger sister is 妹 (いもうと); someone else's is 妹さん (いもうとさん).",
      "The right side is 未 (not yet), with the short line on top; 末 (end) has the long line on top.",
      "姉 and 妹 both start with 女; check the right side: market 市 for older, not-yet 未 for younger."
    ],
    lookalikes: ["姉", "末"],
    examples: [
      { w: "妹", r: "いもうと", m: "younger sister" },
      { w: "妹さん", r: "いもうとさん", m: "(your) younger sister" },
      { w: "姉妹", r: "しまい", m: "sisters" }
    ]
  },
  {
    k: "王", meaning: "king", on: ["オウ"], kun: [], group: "co-people", strokes: 4, radical: "王",
    mnemonic: "Three lines for heaven, people and earth, joined by one upright stroke: the king who links them all.",
    notes: [
      "王様 (おうさま) is the king of fairy tales; 女王 (じょおう), queen, is read じょおう, not じょうおう.",
      "As a left side it means jewel, as in 現 (present).",
      "Add a dot inside and it becomes 玉 (ball, jewel); add a dot on top and it becomes 主 (master)."
    ],
    lookalikes: ["玉", "主"],
    examples: [
      { w: "王様", r: "おうさま", m: "king" },
      { w: "女王", r: "じょおう", m: "queen" },
      { w: "王子", r: "おうじ", m: "prince" }
    ]
  },
  {
    k: "英", meaning: "English, brilliant", on: ["エイ"], kun: [], group: "co-people", strokes: 8, radical: "艹",
    mnemonic: "A flower 艹 at the very centre 央 of the garden: the finest bloom of all, brilliant and outstanding.",
    notes: [
      "英語 (えいご) is English; 英会話 (えいかいわ), English conversation, is the sign over countless language schools.",
      "英 also stands for Britain: 英国 (えいこく), the UK. Signs often show 英語 next to 日本語 for the English version.",
      "The bottom 央 is the same as the right side of 映 (reflect)."
    ],
    lookalikes: ["映"],
    examples: [
      { w: "英語", r: "えいご", m: "English (language)" },
      { w: "英会話", r: "えいかいわ", m: "English conversation" },
      { w: "英国", r: "えいこく", m: "Britain, the UK" }
    ]
  },
  {
    k: "研", meaning: "polish, study", on: ["ケン"], kun: ["と.ぐ"], group: "co-study", strokes: 9, radical: "石",
    mnemonic: "A stone 石 beside a frame 开: a whetstone for polishing blades, and minds.",
    notes: [
      "Almost always met in 研究 (けんきゅう), research. New shop staff wear けんしゅうちゅう (in training) badges, also written with 研.",
      "と.ぐ means to sharpen, and also to wash rice before cooking: お米を研ぐ (おこめをとぐ).",
      "The stone 石 on the left tells you it is about grinding."
    ],
    lookalikes: ["石"],
    examples: [
      { w: "研究", r: "けんきゅう", m: "research" },
      { w: "研究所", r: "けんきゅうじょ", m: "research institute" },
      { w: "研ぐ", r: "とぐ", m: "to sharpen; to wash rice" }
    ]
  },
  {
    k: "究", meaning: "research, investigate", on: ["キュウ"], kun: [], group: "co-study", strokes: 7, radical: "穴",
    mnemonic: "Nine 九 trips down into a hole 穴: digging until you reach the very bottom of a question.",
    notes: [
      "Nearly always in 研究 (けんきゅう), research: 研究者 (けんきゅうしゃ) is a researcher.",
      "At university, 研究室 (けんきゅうしつ) is a lab or a professor's office.",
      "The hole 穴 on top is also in 空 (sky), which has 工 underneath instead of 九."
    ],
    lookalikes: ["空"],
    examples: [
      { w: "研究", r: "けんきゅう", m: "research" },
      { w: "研究者", r: "けんきゅうしゃ", m: "researcher" },
      { w: "研究室", r: "けんきゅうしつ", m: "laboratory; professor's office" }
    ]
  },
  {
    k: "質", meaning: "quality, question", on: ["シツ", "シチ"], kun: [], group: "co-study", strokes: 15, radical: "貝",
    mnemonic: "Two axes resting on a shell 貝, the old coin: weighing up the real quality of the money.",
    notes: [
      "質問 (しつもん) is a question: 質問があります, I have a question. Forms often have a 質問 box.",
      "品質 (ひんしつ) is quality, on product labels. The rarer シチ is in 質屋 (しちや), a pawnshop.",
      "The shell 貝 at the bottom is shared with 貸 (lend) and 資 (funds)."
    ],
    lookalikes: ["貸", "資"],
    examples: [
      { w: "質問", r: "しつもん", m: "question" },
      { w: "品質", r: "ひんしつ", m: "quality" },
      { w: "質屋", r: "しちや", m: "pawnshop" }
    ]
  },
  {
    k: "験", meaning: "test, effect", on: ["ケン"], kun: [], group: "co-study", strokes: 18, radical: "馬",
    mnemonic: "A horse 馬 lined up for inspection beside a row of judges: testing its legs before you buy.",
    notes: [
      "試験 (しけん) is an exam; the JLPT is 日本語能力試験 (にほんごのうりょくしけん).",
      "体験 (たいけん), hands-on experience, is on tourist signs for kimono and cooking classes. 経験 (けいけん) is experience in general.",
      "Same right side as 険 (steep, risk) in 保険 and 危険; the horse 馬 on the left is shared with 駅 (station)."
    ],
    lookalikes: ["険", "駅"],
    examples: [
      { w: "試験", r: "しけん", m: "exam, test" },
      { w: "経験", r: "けいけん", m: "experience" },
      { w: "体験", r: "たいけん", m: "hands-on experience" }
    ]
  },
  {
    k: "字", meaning: "character, letter", on: ["ジ"], kun: [], group: "co-study", strokes: 6, radical: "子",
    mnemonic: "A child 子 under the family roof 宀, practising letters at the kitchen table.",
    notes: [
      "漢字 (かんじ) are kanji, and 数字 (すうじ) are digits. 字がきれい (じがきれい) means someone has neat handwriting.",
      "文字 (もじ), letters or script, is often read もじ rather than もんじ. ローマ字 (ローマじ) is romaji.",
      "Compare 学 (study): the same child 子 underneath, but three short strokes and a flat cover on top instead of the roof 宀."
    ],
    lookalikes: ["学", "子"],
    examples: [
      { w: "漢字", r: "かんじ", m: "kanji" },
      { w: "文字", r: "もじ", m: "letter, script" },
      { w: "数字", r: "すうじ", m: "number, digit" }
    ]
  },
  {
    k: "図", meaning: "drawing, map", on: ["ズ", "ト"], kun: [], group: "co-study", strokes: 7, radical: "囗",
    mnemonic: "A frame 囗 with marks and a big X 乂 drawn inside: a map where X marks the spot.",
    notes: [
      "地図 (ちず) is a map. Station exits and parks have an 案内図 (あんないず), a guide map, often with 現在地 (げんざいち), 'you are here'.",
      "Read と in 図書館 (としょかん), library.",
      "The frame 囗 is the same as in 国 (country); 区 (ward) is open on the right."
    ],
    lookalikes: ["国", "区"],
    examples: [
      { w: "地図", r: "ちず", m: "map" },
      { w: "図書館", r: "としょかん", m: "library" },
      { w: "案内図", r: "あんないず", m: "guide map" }
    ]
  },
  {
    k: "漢", meaning: "Chinese, Han", on: ["カン"], kun: [], group: "co-study", strokes: 13, radical: "氵",
    mnemonic: "Water 氵 beside dry grassland: the great river of the Han people, where Chinese characters began.",
    notes: [
      "Mostly met in 漢字 (かんじ), 'Han characters', the kanji you are learning now.",
      "In pharmacies, 漢方 (かんぽう) or 漢方薬 (かんぽうやく) is traditional Chinese herbal medicine.",
      "The right side is the same as in 難 (difficult), as in 避難 on evacuation signs."
    ],
    lookalikes: ["難"],
    examples: [
      { w: "漢字", r: "かんじ", m: "kanji" },
      { w: "漢方薬", r: "かんぽうやく", m: "herbal medicine" },
      { w: "漢文", r: "かんぶん", m: "classical Chinese texts" }
    ]
  },
  {
    k: "工", meaning: "craft, construction", on: ["コウ", "ク"], kun: [], group: "co-study", strokes: 3, radical: "工",
    mnemonic: "An I-beam on a building site: a top flange, a post and a wide base.",
    notes: [
      "工事中 (こうじちゅう), under construction, is on barriers and road works all over Japan.",
      "工場 (こうじょう) is a factory. ク is the reading in 大工 (だいく), carpenter.",
      "It looks just like katakana エ (e). Compare 土 (earth) and 王 (king)."
    ],
    lookalikes: ["土", "王"],
    examples: [
      { w: "工事", r: "こうじ", m: "construction work" },
      { w: "工場", r: "こうじょう", m: "factory" },
      { w: "大工", r: "だいく", m: "carpenter" }
    ]
  },
  {
    k: "以", meaning: "from (a point), by", on: ["イ"], kun: [], group: "co-basics", strokes: 5, radical: "人",
    mnemonic: "A plough on the left and a person 人 on the right: work measured from this point on.",
    notes: [
      "Marks a limit: 以上 (いじょう) 'or more', 以下 (いか) 'or less', 以内 (いない) 'within'. 18歳以上 means 18 and over.",
      "以上です (いじょうです) means 'that's all': it ends speeches, and staff ask 以上でよろしいですか after you order.",
      "以外 (いがい), other than, is on staff doors: 関係者以外立入禁止 (かんけいしゃいがいたちいりきんし), staff only."
    ],
    lookalikes: [],
    examples: [
      { w: "以上", r: "いじょう", m: "or more; that's all" },
      { w: "以下", r: "いか", m: "or less, below" },
      { w: "以外", r: "いがい", m: "other than, except" }
    ]
  },
  {
    k: "代", meaning: "fee, era, replace", on: ["ダイ", "タイ"], kun: ["か.わる", "か.える"], group: "co-basics", strokes: 5, radical: "亻",
    mnemonic: "A person 亻 beside a stake 弋: one guard hands the post on to the next, generation after generation.",
    notes: [
      "As a fee: 電気代 (でんきだい), electricity bill; 食事代 (しょくじだい), the cost of a meal.",
      "For decades of age: 二十代 (にじゅうだい), in one's twenties. 時代 (じだい) is an era.",
      "タイ in 交代 (こうたい), taking turns. Compare 式 (ceremony), which shares the stake 弋."
    ],
    lookalikes: ["式"],
    examples: [
      { w: "時代", r: "じだい", m: "era, period" },
      { w: "電気代", r: "でんきだい", m: "electricity bill" },
      { w: "二十代", r: "にじゅうだい", m: "one's twenties" }
    ]
  },
  {
    k: "力", meaning: "power, strength", on: ["リョク", "リキ"], kun: ["ちから"], group: "co-basics", strokes: 2, radical: "力",
    mnemonic: "A flexed arm with the fist bent down: a strongman showing off his power.",
    notes: [
      "力 (ちから) is strength. Notices end with ご協力お願いします (ごきょうりょくおねがいします), thank you for your cooperation.",
      "リキ is in 力士 (りきし), a sumo wrestler. It is also the bottom of 男 (man): a field 田 plus strength.",
      "It looks just like katakana カ (ka); in a word, the context tells you which it is."
    ],
    lookalikes: [],
    examples: [
      { w: "力", r: "ちから", m: "strength, power" },
      { w: "協力", r: "きょうりょく", m: "cooperation" },
      { w: "力士", r: "りきし", m: "sumo wrestler" }
    ]
  },
  {
    k: "心", meaning: "heart, mind", on: ["シン"], kun: ["こころ"], group: "co-basics", strokes: 4, radical: "心",
    mnemonic: "A heart drawn as one curved stroke with three drops of feeling around it.",
    notes: [
      "心 (こころ) is the heart as mind and feelings; the organ is しんぞう. 安心 (あんしん) is relief: 安心してください, don't worry.",
      "心配 (しんぱい) is worry, and 中心 (ちゅうしん) is the centre.",
      "At the bottom of other kanji it keeps its shape, as in 思 (think), 悪 (bad) and 意 (mind). Don't confuse it with 必 (must)."
    ],
    lookalikes: ["必"],
    examples: [
      { w: "心", r: "こころ", m: "heart, mind" },
      { w: "安心", r: "あんしん", m: "peace of mind, relief" },
      { w: "心配", r: "しんぱい", m: "worry" }
    ]
  },
  {
    k: "公", meaning: "public", on: ["コウ"], kun: [], group: "co-basics", strokes: 4, radical: "八",
    mnemonic: "A private parcel 厶 split open 八 for everyone to share: now it's public.",
    notes: [
      "公園 (こうえん) is a park, and every neighbourhood has one. 公共 (こうきょう) is public, as in public transport.",
      "公務員 (こうむいん) is a civil servant, and 公立 (こうりつ) a public school or hospital.",
      "The top 八 opens out over 厶; compare 分 (divide) and 松 (pine)."
    ],
    lookalikes: ["分", "松"],
    examples: [
      { w: "公園", r: "こうえん", m: "park" },
      { w: "公共", r: "こうきょう", m: "public" },
      { w: "公務員", r: "こうむいん", m: "civil servant" }
    ]
  },
  {
    k: "世", meaning: "world, generation", on: ["セ", "セイ"], kun: ["よ"], group: "co-basics", strokes: 5, radical: "一",
    mnemonic: "Twenty 廿 with one more ten tacked on: thirty years, a single generation of the world.",
    notes: [
      "世界 (せかい) is the world. お世話になります (おせわになります), 'thank you for your help', is said to neighbours, colleagues and clients.",
      "Usually せ; せい in 二世 (にせい), second generation. よ in 世の中 (よのなか), society, the way the world is.",
      "世代 (せだい) is a generation: 世 and 代 both carry the sense of an age."
    ],
    lookalikes: [],
    examples: [
      { w: "世界", r: "せかい", m: "the world" },
      { w: "世話", r: "せわ", m: "care, looking after" },
      { w: "世の中", r: "よのなか", m: "society, the world" }
    ]
  },
  {
    k: "界", meaning: "world, boundary", on: ["カイ"], kun: [], group: "co-basics", strokes: 9, radical: "田",
    mnemonic: "Rice fields 田 with someone standing guard 介 between them: the boundary where one world meets another.",
    notes: [
      "Mostly in 世界 (せかい), the world. 世界一 (せかいいち), the world's best, is a favourite claim on posters.",
      "As a suffix it means a field or circle: 業界 (ぎょうかい), the industry. 限界 (げんかい) is a limit.",
      "The field 田 on top is shared with 男 (man)."
    ],
    lookalikes: ["男"],
    examples: [
      { w: "世界", r: "せかい", m: "the world" },
      { w: "世界中", r: "せかいじゅう", m: "all over the world" },
      { w: "限界", r: "げんかい", m: "limit" }
    ]
  },
  {
    k: "元", meaning: "origin, former", on: ["ゲン", "ガン"], kun: ["もと"], group: "co-basics", strokes: 4, radical: "儿",
    mnemonic: "Two lines 二 for a head on a pair of legs 儿: a person standing at the very beginning.",
    notes: [
      "元気 (げんき) is healthy, lively: お元気ですか, how are you? 地元 (じもと), local or home town, is on 地元の野菜 in supermarkets.",
      "ガン in 元日 (がんじつ), New Year's Day. もと also means former: 元カレ (もとカレ), ex-boyfriend.",
      "Compare 兄 (older brother), which has a mouth 口 on the same legs."
    ],
    lookalikes: ["兄"],
    examples: [
      { w: "元気", r: "げんき", m: "healthy, lively" },
      { w: "地元", r: "じもと", m: "local area, home town" },
      { w: "元日", r: "がんじつ", m: "New Year's Day" }
    ]
  },
  {
    k: "屋", meaning: "shop, roof", on: ["オク"], kun: ["や"], group: "co-basics", strokes: 9, radical: "尸",
    mnemonic: "A body 尸 lying down under a roof once it has arrived 至 home: the house where you rest.",
    notes: [
      "屋 (や) after a thing names a shop: 本屋 (ほんや, bookshop), 花屋 (はなや, florist), パン屋 (パンや, bakery).",
      "部屋 (へや), a room, is an irregular reading. 屋上 (おくじょう) is the rooftop, shown as R on lift buttons.",
      "Compare 室 (room), which puts 至 under a roof, and 局 (office), with the same 尸 on top."
    ],
    lookalikes: ["室", "局"],
    examples: [
      { w: "部屋", r: "へや", m: "room" },
      { w: "本屋", r: "ほんや", m: "bookshop" },
      { w: "屋上", r: "おくじょう", m: "rooftop" }
    ]
  },
  {
    k: "朝", meaning: "morning", on: ["チョウ"], kun: ["あさ"], group: "co-basics", strokes: 12, radical: "月",
    mnemonic: "The sun 日 rising between the grass 十 above and below while the moon 月 is still out: early morning.",
    notes: [
      "朝 (あさ) is morning; 毎朝 (まいあさ) every morning. 朝ご飯 (あさごはん) is breakfast.",
      "今朝 (けさ), this morning, is irregular. Hotels list 朝食 (ちょうしょく): 朝食付き means breakfast included.",
      "Compare 明 (bright) and 期 (period), which also end in 月."
    ],
    lookalikes: ["明", "期"],
    examples: [
      { w: "朝", r: "あさ", m: "morning" },
      { w: "今朝", r: "けさ", m: "this morning" },
      { w: "朝食", r: "ちょうしょく", m: "breakfast" }
    ]
  },
  {
    k: "夜", meaning: "night", on: ["ヤ"], kun: ["よる", "よ"], group: "co-basics", strokes: 8, radical: "夕",
    mnemonic: "A person under a lid 亠, with the evening 夕 creeping in at the side: night is falling.",
    notes: [
      "夜 (よる) is night. 今夜 (こんや) is tonight, and 夜中 (よなか) the middle of the night.",
      "夜行バス (やこうバス), the overnight long-distance bus, is a cheap way to travel between cities.",
      "Compare 液 (liquid), which adds water on the left."
    ],
    lookalikes: ["液"],
    examples: [
      { w: "夜", r: "よる", m: "night" },
      { w: "今夜", r: "こんや", m: "tonight" },
      { w: "夜行バス", r: "やこうバス", m: "overnight bus" }
    ]
  },
  {
    k: "洋", meaning: "western, ocean", on: ["ヨウ"], kun: [], group: "co-basics", strokes: 9, radical: "氵",
    mnemonic: "Water 氵 next to a sheep 羊: flocks of white waves rolling across the wide ocean.",
    notes: [
      "洋 means Western-style: 洋服 (ようふく), clothes; 洋食 (ようしょく), Western food. Hotels offer 洋室 (ようしつ) or 和室 (わしつ), a tatami room.",
      "Toilets may be labelled 洋式 (ようしき), sit-down, or 和式 (わしき), the squat kind.",
      "The ocean sense is in 太平洋 (たいへいよう), the Pacific."
    ],
    lookalikes: ["様"],
    examples: [
      { w: "洋服", r: "ようふく", m: "clothes" },
      { w: "洋食", r: "ようしょく", m: "Western food" },
      { w: "太平洋", r: "たいへいよう", m: "the Pacific Ocean" }
    ]
  },
  {
    k: "歌", meaning: "song, sing", on: ["カ"], kun: ["うた", "うた.う"], group: "co-basics", strokes: 14, radical: "欠",
    mnemonic: "Two singing mouths 可 stacked on the left and a wide-open mouth 欠 on the right: a whole choir in full voice.",
    notes: [
      "歌 (うた) is a song and 歌う (うたう) to sing; カラオケで歌う is a classic night out.",
      "歌手 (かしゅ) is a singer, and 国歌 (こっか) a national anthem.",
      "The right side 欠 is a yawning mouth; it also appears in 次 (next)."
    ],
    lookalikes: [],
    examples: [
      { w: "歌", r: "うた", m: "song" },
      { w: "歌う", r: "うたう", m: "to sing" },
      { w: "歌手", r: "かしゅ", m: "singer" }
    ]
  },
  {
    k: "旅", meaning: "travel, trip", on: ["リョ"], kun: ["たび"], group: "co-basics", strokes: 10, radical: "方",
    mnemonic: "A flag 方 flying over a line of people marching off: a group on the road, travelling.",
    notes: [
      "旅行 (りょこう) is a trip; 旅行会社 (りょこうがいしゃ) is a travel agency.",
      "旅館 (りょかん) is a traditional Japanese inn with tatami rooms. 旅 (たび) alone is a journey, a word for adverts and songs: 一人旅 (ひとりたび), travelling solo.",
      "Compare 族 (family), with the same flag 方 on the left."
    ],
    lookalikes: ["族", "方"],
    examples: [
      { w: "旅行", r: "りょこう", m: "trip, travel" },
      { w: "旅館", r: "りょかん", m: "Japanese inn" },
      { w: "一人旅", r: "ひとりたび", m: "travelling alone" }
    ]
  },
  {
    k: "堂", meaning: "hall", on: ["ドウ"], kun: [], group: "co-basics", strokes: 11, radical: "土",
    mnemonic: "A fine roof 尚 raised on solid earth 土: a great hall where everyone gathers.",
    notes: [
      "食堂 (しょくどう) is a canteen or a small set-meal restaurant: look for 食堂 on old-fashioned shop curtains.",
      "公会堂 (こうかいどう) is a town's public hall, and 本堂 (ほんどう) the main hall of a temple.",
      "Same top as 常 (usual), as in 非常口, and 党 (party); the bottom tells them apart."
    ],
    lookalikes: ["常", "党"],
    examples: [
      { w: "食堂", r: "しょくどう", m: "canteen, dining hall" },
      { w: "公会堂", r: "こうかいどう", m: "public hall" },
      { w: "本堂", r: "ほんどう", m: "main hall of a temple" }
    ]
  },
  {
    k: "夕", meaning: "evening", on: ["セキ"], kun: ["ゆう"], group: "co-basics", strokes: 3, radical: "夕",
    mnemonic: "A crescent moon only half risen above the hills: it's evening.",
    notes: [
      "夕方 (ゆうがた) is early evening, and 夕日 (ゆうひ) the setting sun. 夕ご飯 (ゆうごはん) or 夕食 (ゆうしょく) is dinner.",
      "七夕 (たなばた), the star festival on 7 July, is an irregular reading. The on reading せき is rare.",
      "Very close to katakana タ (ta). Two of it make 多 (many)."
    ],
    lookalikes: ["多", "名"],
    examples: [
      { w: "夕方", r: "ゆうがた", m: "evening" },
      { w: "夕日", r: "ゆうひ", m: "setting sun" },
      { w: "夕食", r: "ゆうしょく", m: "dinner" }
    ]
  },
  {
    k: "昼", meaning: "noon, daytime", on: ["チュウ"], kun: ["ひる"], group: "co-basics", strokes: 9, radical: "日",
    mnemonic: "A measuring rod 尺 above the sun 日 standing over the horizon line 旦: the sun is at its height, midday.",
    notes: [
      "昼 (ひる) is noon or daytime; お昼 (おひる) and 昼ご飯 (ひるごはん) mean lunch.",
      "昼休み (ひるやすみ) is the lunch break: small shops and offices may close from 12 to 1. Menus offer 昼食 (ちゅうしょく) or ランチ.",
      "The top is shaped like the top of 屋 (shop)."
    ],
    lookalikes: ["屋"],
    examples: [
      { w: "昼", r: "ひる", m: "noon, daytime" },
      { w: "昼休み", r: "ひるやすみ", m: "lunch break" },
      { w: "昼食", r: "ちゅうしょく", m: "lunch" }
    ]
  },
  {
    k: "貝", meaning: "shellfish, shell", on: [], kun: ["かい"], group: "co-basics", strokes: 7, radical: "貝",
    mnemonic: "An eye 目 on two little legs 八: a clam peeking out of its shell.",
    notes: [
      "貝 (かい) is shellfish or a shell; on menus it becomes がい, as in ほたて貝 (ほたてがい), scallop.",
      "Shells were once used as money, so 貝 sits in money kanji: 買 (buy), 貸 (lend), 資 (funds).",
      "Compare 見 (see), with the same eye 目 but different legs."
    ],
    lookalikes: ["見"],
    examples: [
      { w: "貝", r: "かい", m: "shellfish, shell" },
      { w: "貝がら", r: "かいがら", m: "seashell" },
      { w: "ほたて貝", r: "ほたてがい", m: "scallop" }
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
  },
  /* ========== Stations & trains ========== */
  {
    k: "駅", meaning: "station", on: ["エキ"], kun: [], group: "st-lines", strokes: 14, radical: "馬",
    mnemonic: "A horse 馬 tied up beside a measuring rod 尺: the old post town where riders swapped horses, today's station.",
    notes: [
      "On every platform sign: the big name in the middle is this 駅, with the previous and next stations to either side.",
      "Always えき, often after a name: 東京駅 (とうきょうえき). 駅員 (えきいん) are the station staff.",
      "The horse 馬 on the left is the same as in 駐 (parking), as in 駐車場."
    ],
    lookalikes: ["駐"],
    examples: [
      { w: "駅前", r: "えきまえ", m: "in front of the station" },
      { w: "駅員", r: "えきいん", m: "station staff" },
      { w: "東京駅", r: "とうきょうえき", m: "Tokyo Station" }
    ]
  },
  {
    k: "線", meaning: "line, track", on: ["セン"], kun: [], group: "st-lines", strokes: 15, radical: "糸",
    mnemonic: "A thread 糸 running out of a spring 泉 and stretching far away: one long coloured line on the train map.",
    notes: [
      "Every railway line is a 線: 山手線 (やまのてせん). Signs pair the name with the line's colour and letter.",
      "Platforms are numbered 番線 (ばんせん): 3番線 is track 3. The board says which 番線 your train leaves from.",
      "Announcements ask you to wait behind the 白線 (はくせん), the white (or yellow) line at the platform edge."
    ],
    lookalikes: [],
    examples: [
      { w: "番線", r: "ばんせん", m: "track (number), platform" },
      { w: "山手線", r: "やまのてせん", m: "the Yamanote Line" },
      { w: "白線", r: "はくせん", m: "white line" }
    ]
  },
  {
    k: "路", meaning: "road, route", on: ["ロ"], kun: [], group: "st-lines", strokes: 13, radical: "足",
    mnemonic: "Feet 足 setting off, each 各 its own way: every foot finds its own road.",
    notes: [
      "線路 (せんろ) is the railway track itself: never go down onto it, press the platform's emergency button instead.",
      "通路 (つうろ) is an aisle or passageway; on seat maps 通路側 (つうろがわ) is the aisle seat.",
      "Almost always read ろ in compounds: 道路 (どうろ), road. 路線バス (ろせんバス) is the local route bus."
    ],
    lookalikes: [],
    examples: [
      { w: "線路", r: "せんろ", m: "railway track" },
      { w: "通路", r: "つうろ", m: "aisle, passage" },
      { w: "道路", r: "どうろ", m: "road" }
    ]
  },
  {
    k: "鉄", meaning: "iron, railway", on: ["テツ"], kun: [], group: "st-lines", strokes: 13, radical: "金",
    mnemonic: "Metal 金 that someone lost 失 along the line: the iron rails every railway is built on.",
    notes: [
      "On signs it usually stands for 'railway': 地下鉄 (ちかてつ) is the subway and 鉄道 (てつどう) the railway.",
      "Railway fans are 鉄道ファン, jokingly 鉄ちゃん (てっちゃん).",
      "The metal 金 on the left is the same as in 銀 (silver), as in 銀行 (ぎんこう, bank)."
    ],
    lookalikes: ["銀"],
    examples: [
      { w: "地下鉄", r: "ちかてつ", m: "subway, underground" },
      { w: "鉄道", r: "てつどう", m: "railway" },
      { w: "鉄", r: "てつ", m: "iron" }
    ]
  },
  {
    k: "道", meaning: "road, way", on: ["ドウ"], kun: ["みち"], group: "st-lines", strokes: 12, radical: "辶",
    mnemonic: "A head 首 moving along the walking road ⻌: the way you follow with your head up.",
    notes: [
      "みち on its own: 道を聞く (みちをきく) is asking the way, and station staff are used to it.",
      "どう in compounds: 鉄道 (てつどう, railway), 水道 (すいどう, tap water) and 北海道 (ほっかいどう).",
      "The walking road ⻌ also sits under 通 and 速, two other station kanji."
    ],
    lookalikes: ["通", "速"],
    examples: [
      { w: "道", r: "みち", m: "road, way" },
      { w: "鉄道", r: "てつどう", m: "railway" },
      { w: "北海道", r: "ほっかいどう", m: "Hokkaido" }
    ]
  },
  {
    k: "地", meaning: "ground, place", on: ["チ", "ジ"], kun: [], group: "st-lines", strokes: 6, radical: "土",
    mnemonic: "A curling 也 lying flat on the soil 土: the ground beneath your feet.",
    notes: [
      "地下 (ちか) means underground: 地下鉄 (subway) and the basement floors on lift panels, 地下一階 (B1).",
      "Read じ in a few words such as 地面 (じめん, the ground surface).",
      "Don't confuse it with 池 (いけ, pond): same right side, but water on the left instead of soil."
    ],
    lookalikes: ["池"],
    examples: [
      { w: "地下", r: "ちか", m: "underground, basement" },
      { w: "地下鉄", r: "ちかてつ", m: "subway" },
      { w: "土地", r: "とち", m: "land" }
    ]
  },
  {
    k: "発", meaning: "depart, emit", on: ["ハツ"], kun: [], group: "st-lines", strokes: 9, radical: "癶",
    mnemonic: "Two feet 癶 spread wide at the top, kicking off: the moment the train sets off.",
    notes: [
      "On departure boards 10:05発 means 'leaves at 10:05', and 東京発 means 'starting from Tokyo'.",
      "Sound changes: はっ in 発車 (はっしゃ, a train leaving) and ぱつ in 出発 (しゅっぱつ, departure).",
      "始発 (しはつ) is the first train of the day; the jingle before the doors close is the 発車メロディ."
    ],
    lookalikes: [],
    examples: [
      { w: "出発", r: "しゅっぱつ", m: "departure" },
      { w: "発車", r: "はっしゃ", m: "(train) departing" },
      { w: "始発", r: "しはつ", m: "first train of the day" }
    ]
  },
  {
    k: "着", meaning: "arrive, wear", on: ["チャク"], kun: ["つ.く", "き.る"], group: "st-lines", strokes: 12, radical: "目",
    mnemonic: "A woolly sheep-horn top pulled down over an eye 目: you put on your coat and arrive.",
    notes: [
      "On arrival boards 12:30着 means 'arrives 12:30'; timetables often show 発 and 着 side by side.",
      "Two everyday verbs: 着く (つく, to arrive), as in 駅に着く, and 着る (きる, to wear clothes).",
      "終着駅 (しゅうちゃくえき) is the end of the line. ちゃく also appears in 先着 (せんちゃく), first come first served."
    ],
    lookalikes: [],
    examples: [
      { w: "着く", r: "つく", m: "to arrive" },
      { w: "着る", r: "きる", m: "to wear" },
      { w: "終着駅", r: "しゅうちゃくえき", m: "terminus, last station" }
    ]
  },
  {
    k: "両", meaning: "both, (train) car", on: ["リョウ"], kun: [], group: "st-lines", strokes: 6, radical: "一",
    mnemonic: "A yoke 一 laid across a frame 冂 with two little mountains 山 inside: two loads balanced, one on each side.",
    notes: [
      "The counter for railway cars: platform signs say a train has 10両 (じゅうりょう), ten cars.",
      "車両 (しゃりょう) is a railway car; 両方 (りょうほう) means both.",
      "Always りょう. 両手 (りょうて) is both hands."
    ],
    lookalikes: [],
    examples: [
      { w: "両方", r: "りょうほう", m: "both" },
      { w: "車両", r: "しゃりょう", m: "railway car" },
      { w: "両手", r: "りょうて", m: "both hands" }
    ]
  },
  {
    k: "次", meaning: "next", on: ["ジ"], kun: ["つぎ"], group: "st-lines", strokes: 6, radical: "欠",
    mnemonic: "A cold 冫 shiver next to a yawning person 欠: one yawn after another, the next one always coming.",
    notes: [
      "The train display and announcement start 次は (つぎは): 'next stop'. 次の駅 (つぎのえき) is the next station.",
      "On departure boards 次発 (じはつ) is the train after the first one listed.",
      "Read じ in compounds: 目次 (もくじ, table of contents)."
    ],
    lookalikes: [],
    examples: [
      { w: "次", r: "つぎ", m: "next" },
      { w: "次発", r: "じはつ", m: "the following train" },
      { w: "目次", r: "もくじ", m: "table of contents" }
    ]
  },
  {
    k: "終", meaning: "end, finish", on: ["シュウ"], kun: ["お.わる", "お.える"], group: "st-lines", strokes: 11, radical: "糸",
    mnemonic: "The thread 糸 runs out in winter 冬: the end of the spool at the end of the year.",
    notes: [
      "終電 (しゅうでん) is the last train of the night, usually around midnight; timetables mark it so you can check.",
      "終わる (おわる) is 'to end' by itself; 終える (おえる) is 'to finish' something.",
      "Platforms post 終日禁煙 (しゅうじつきんえん): no smoking all day. Winter 冬 sits on the right."
    ],
    lookalikes: ["冬"],
    examples: [
      { w: "終わる", r: "おわる", m: "to end" },
      { w: "終電", r: "しゅうでん", m: "last train" },
      { w: "終日", r: "しゅうじつ", m: "all day" }
    ]
  },
  {
    k: "始", meaning: "begin, start", on: ["シ"], kun: ["はじ.める", "はじ.まる"], group: "st-lines", strokes: 8, radical: "女",
    mnemonic: "A woman 女 steps up onto the platform 台 to open the show: things begin.",
    notes: [
      "始発 (しはつ) is the first train of the morning; 当駅始発 (とうえきしはつ) on a board means the train starts here, so it is easier to get a seat.",
      "始まる (はじまる): something begins by itself; 始める (はじめる): you start something.",
      "Don't mix it up with 初 (はじ.め): 初 is the first time, 始 is starting something."
    ],
    lookalikes: [],
    examples: [
      { w: "始まる", r: "はじまる", m: "to begin" },
      { w: "始める", r: "はじめる", m: "to start (something)" },
      { w: "始発", r: "しはつ", m: "first train" }
    ]
  },
  {
    k: "切", meaning: "cut", on: ["セツ"], kun: ["き.る", "き.れる"], group: "st-tickets", strokes: 4, radical: "刀",
    mnemonic: "Seven 七 quick slashes with a sword 刀: cut clean through.",
    notes: [
      "切符 (きっぷ) is a ticket: き turns into きっ. Gate staff used to clip each paper ticket by hand.",
      "切れる (きれる) is to run out or expire, like a ticket's valid time or a card's charge.",
      "せつ in 大切 (たいせつ, precious, important)."
    ],
    lookalikes: [],
    examples: [
      { w: "切符", r: "きっぷ", m: "ticket" },
      { w: "切る", r: "きる", m: "to cut" },
      { w: "大切", r: "たいせつ", m: "important, precious" }
    ]
  },
  {
    k: "符", meaning: "token, mark", on: ["フ"], kun: [], group: "st-tickets", strokes: 11, radical: "竹",
    mnemonic: "Bamboo 竹 slips handed over 付 at the gate: an ancient tally, today's ticket.",
    notes: [
      "You meet it almost only in 切符 (きっぷ), the paper ticket from the machine. In 切符, ふ becomes ぷ.",
      "切符売り場 (きっぷうりば) is where the ticket machines are; IC cards can be charged there too.",
      "The lower part is 付 (つ.ける, attach), as in 受付 (うけつけ)."
    ],
    lookalikes: ["付"],
    examples: [
      { w: "切符", r: "きっぷ", m: "ticket" },
      { w: "切符売り場", r: "きっぷうりば", m: "ticket machines, ticket office" },
      { w: "音符", r: "おんぷ", m: "musical note" }
    ]
  },
  {
    k: "改", meaning: "change, inspect", on: ["カイ"], kun: ["あらた.める"], group: "st-tickets", strokes: 7, radical: "攵",
    mnemonic: "Oneself 己 struck with a stick 攵: knocking yourself into shape, a change for the better.",
    notes: [
      "改札 (かいさつ) is the ticket gate: signs point to 北改札, 南改札 and so on. Meet friends 'at the gate', 改札で.",
      "改札口 (かいさつぐち) is the same place; 口 becomes ぐち.",
      "改めて (あらためて) means 'again, afresh', a polite word in emails and speeches."
    ],
    lookalikes: [],
    examples: [
      { w: "改札", r: "かいさつ", m: "ticket gate" },
      { w: "改札口", r: "かいさつぐち", m: "ticket gate (exit)" },
      { w: "改める", r: "あらためる", m: "to change, revise" }
    ]
  },
  {
    k: "札", meaning: "note, tag", on: ["サツ"], kun: ["ふだ"], group: "st-tickets", strokes: 5, radical: "木",
    mnemonic: "A wooden 木 board hanging from a hook 乙: a tag on a peg, or a bill you hand over.",
    notes: [
      "Banknotes are お札 (おさつ): 千円札 (せんえんさつ). Ticket machines take 千円札 and up.",
      "ふだ for tags: 名札 (なふだ, name badge), 番号札 (ばんごうふだ, number ticket).",
      "In 改札 (かいさつ, ticket gate) it once meant checking the tickets."
    ],
    lookalikes: [],
    examples: [
      { w: "千円札", r: "せんえんさつ", m: "1,000-yen note" },
      { w: "名札", r: "なふだ", m: "name badge" },
      { w: "改札", r: "かいさつ", m: "ticket gate" }
    ]
  },
  {
    k: "精", meaning: "refined, precise", on: ["セイ"], kun: [], group: "st-tickets", strokes: 14, radical: "米",
    mnemonic: "Rice 米 polished until it gleams pure blue-white 青: refined down to the last grain.",
    notes: [
      "精算 (せいさん) is settling the fare: if your ticket or IC card is short, use the 精算 machine before the gates.",
      "精算所 (せいさんじょ) is the fare adjustment window, usually next to the gates.",
      "The right side 青 is the same as in 晴 (はれ, sunny)."
    ],
    lookalikes: ["晴"],
    examples: [
      { w: "精算", r: "せいさん", m: "fare adjustment" },
      { w: "精算所", r: "せいさんじょ", m: "fare adjustment office" },
      { w: "精米", r: "せいまい", m: "polished rice" }
    ]
  },
  {
    k: "算", meaning: "calculate", on: ["サン"], kun: [], group: "st-tickets", strokes: 14, radical: "竹",
    mnemonic: "Bamboo 竹 rods laid over a counting tray held up in two hands: an abacus adding it all up.",
    notes: [
      "At stations it comes in 精算 (せいさん), paying the difference at the gate.",
      "計算 (けいさん) is calculation; 予算 (よさん) is a budget.",
      "Always さん; watch the bamboo top, the same as in 符 and 等."
    ],
    lookalikes: [],
    examples: [
      { w: "精算", r: "せいさん", m: "fare adjustment" },
      { w: "計算", r: "けいさん", m: "calculation" },
      { w: "予算", r: "よさん", m: "budget" }
    ]
  },
  {
    k: "定", meaning: "fixed, decide", on: ["テイ", "ジョウ"], kun: [], group: "st-tickets", strokes: 8, radical: "宀",
    mnemonic: "A foot 疋 planted firmly under a roof 宀: settled in place, fixed.",
    notes: [
      "定期券 (ていきけん) is a commuter pass for a fixed route, often loaded onto an IC card; many employers pay for it.",
      "指定席 (していせき) is a reserved seat. Shops post 定休日 (ていきゅうび), their regular day off.",
      "Usually てい, as in 予定 (よてい, plan); じょう only in a few words such as じょうぎ (ruler)."
    ],
    lookalikes: [],
    examples: [
      { w: "予定", r: "よてい", m: "plan, schedule" },
      { w: "定期券", r: "ていきけん", m: "commuter pass" },
      { w: "定休日", r: "ていきゅうび", m: "regular closing day" }
    ]
  },
  {
    k: "期", meaning: "period, term", on: ["キ"], kun: [], group: "st-tickets", strokes: 12, radical: "月",
    mnemonic: "A basket 其 set out under the moon 月: counting moons to mark out each period.",
    notes: [
      "定期 (ていき) on its own usually means your commuter pass; a pass holder is a 定期入れ (ていきいれ).",
      "期間 (きかん) is a period of time, as on sale posters and pass validity.",
      "Sound change in 学期 (がっき, school term)."
    ],
    lookalikes: [],
    examples: [
      { w: "定期", r: "ていき", m: "commuter pass (short)" },
      { w: "期間", r: "きかん", m: "period, term" },
      { w: "学期", r: "がっき", m: "school term" }
    ]
  },
  {
    k: "指", meaning: "finger, point", on: ["シ"], kun: ["ゆび", "さ.す"], group: "st-tickets", strokes: 9, radical: "扌",
    mnemonic: "A hand 扌 reaching for something tasty 旨: you point at it with your finger.",
    notes: [
      "指定席 (していせき) is a reserved seat; 自由席 (じゆうせき) cars are first come, first seated.",
      "ゆび is a finger; 指す (さす) is to point. Station staff point and call out at each check.",
      "Same hand 扌 on the left as in 押 (push) and 換 (exchange)."
    ],
    lookalikes: [],
    examples: [
      { w: "指", r: "ゆび", m: "finger" },
      { w: "指定席", r: "していせき", m: "reserved seat" },
      { w: "指す", r: "さす", m: "to point" }
    ]
  },
  {
    k: "席", meaning: "seat", on: ["セキ"], kun: [], group: "st-tickets", strokes: 10, radical: "巾",
    mnemonic: "A cloth mat spread out under a shelter 广: your seat for the journey.",
    notes: [
      "Train seat types: 指定席 (reserved), 自由席 (unreserved) and 優先席 (ゆうせんせき, priority seats).",
      "空席 (くうせき) is a free seat; ticket screens show ○ for seats still available.",
      "Always せき. In restaurants: 禁煙席 (きんえんせき), a non-smoking seat."
    ],
    lookalikes: ["庫"],
    examples: [
      { w: "席", r: "せき", m: "seat" },
      { w: "空席", r: "くうせき", m: "vacant seat" },
      { w: "優先席", r: "ゆうせんせき", m: "priority seat" }
    ]
  },
  {
    k: "自", meaning: "self", on: ["ジ", "シ"], kun: ["みずか.ら"], group: "st-tickets", strokes: 6, radical: "自",
    mnemonic: "An eye 目 with a little nose tip on top: pointing at your own nose to say 'me, myself'.",
    notes: [
      "自動 (じどう) is automatic: 自動改札 (じどうかいさつ) gates and 自動ドア doors.",
      "自由席 (じゆうせき) is the unreserved car. 自分 (じぶん) means oneself.",
      "Lookalikes: 目 (eye) has no tick on top, 白 (white) has only one line inside."
    ],
    lookalikes: ["目", "白"],
    examples: [
      { w: "自分", r: "じぶん", m: "oneself" },
      { w: "自動", r: "じどう", m: "automatic" },
      { w: "自由", r: "じゆう", m: "freedom, free" }
    ]
  },
  {
    k: "由", meaning: "reason, via", on: ["ユウ", "ユ"], kun: [], group: "st-tickets", strokes: 5, radical: "田",
    mnemonic: "A field 日 with a sprout 丨 poking out the top: that's where it came from, the reason.",
    notes: [
      "自由 (じゆう, free): 自由席 (unreserved seats) and 自由通路 (じゆうつうろ), the free walkway through a station.",
      "Usually ゆう: 理由 (りゆう, reason). ゆ appears in けいゆ ('via'), seen on destination boards.",
      "Lookalikes: 田 (rice field) has no stroke sticking out, 申 sticks out top and bottom."
    ],
    lookalikes: ["田", "申"],
    examples: [
      { w: "自由", r: "じゆう", m: "freedom, free" },
      { w: "自由席", r: "じゆうせき", m: "unreserved seat" },
      { w: "理由", r: "りゆう", m: "reason" }
    ]
  },
  {
    k: "優", meaning: "gentle, superior", on: ["ユウ"], kun: ["やさ.しい"], group: "st-tickets", strokes: 17, radical: "亻",
    mnemonic: "A person 亻 standing beside someone's sorrow 憂: noticing it and giving way, gentle and kind.",
    notes: [
      "優先席 (ゆうせんせき) are priority seats near the doors for older people, pregnant women, people with disabilities and small children.",
      "優しい (やさしい) means kind; 'easy' is also やさしい but uses a different kanji.",
      "With 17 strokes it is the biggest kanji in this set: take the right side slowly."
    ],
    lookalikes: [],
    examples: [
      { w: "優先席", r: "ゆうせんせき", m: "priority seat" },
      { w: "優しい", r: "やさしい", m: "kind, gentle" },
      { w: "優先", r: "ゆうせん", m: "priority" }
    ]
  },
  {
    k: "快", meaning: "pleasant, rapid", on: ["カイ"], kun: ["こころよ.い"], group: "st-trains", strokes: 7, radical: "忄",
    mnemonic: "A heart 忄 that cuts loose 夬 from its worries: light, quick and pleasant.",
    notes: [
      "快速 (かいそく) is a rapid train: it skips the small stations that 各停 and 普通 trains stop at. Usually no extra fare.",
      "快晴 (かいせい) is a perfectly clear sky in weather forecasts.",
      "Don't confuse it with 決 (き.める, decide): same right side, but water on the left instead of a heart."
    ],
    lookalikes: ["決"],
    examples: [
      { w: "快速", r: "かいそく", m: "rapid train" },
      { w: "快晴", r: "かいせい", m: "clear, fine weather" },
      { w: "快い", r: "こころよい", m: "pleasant" }
    ]
  },
  {
    k: "速", meaning: "fast", on: ["ソク"], kun: ["はや.い"], group: "st-trains", strokes: 10, radical: "辶",
    mnemonic: "A bundle 束 strapped on, legs racing down the road ⻌: tie it up and go, fast.",
    notes: [
      "快速 (かいそく) is the rapid train on departure boards.",
      "速い (はやい) is fast in speed; 'early' is also はやい but written differently.",
      "高速 (こうそく) means high-speed: 高速道路 (expressway) and 高速バス (long-distance bus)."
    ],
    lookalikes: ["通"],
    examples: [
      { w: "速い", r: "はやい", m: "fast" },
      { w: "快速", r: "かいそく", m: "rapid train" },
      { w: "高速", r: "こうそく", m: "high speed; expressway" }
    ]
  },
  {
    k: "各", meaning: "each, every", on: ["カク"], kun: [], group: "st-trains", strokes: 6, radical: "口",
    mnemonic: "A foot 夂 stopping at every doorway 口: calling at each and every house.",
    notes: [
      "各駅停車 (かくえきていしゃ) is the local train that stops at every station; boards shorten it to 各停 (かくてい).",
      "各地 (かくち) means 'all over', as in weather forecasts. 各自 (かくじ) is each person.",
      "Don't confuse it with 名 (name): the top of 各 is a foot 夂 with a long sweep, while 名 has the shape for evening on top."
    ],
    lookalikes: ["名"],
    examples: [
      { w: "各駅停車", r: "かくえきていしゃ", m: "local train" },
      { w: "各停", r: "かくてい", m: "local train (short)" },
      { w: "各地", r: "かくち", m: "each region, all over" }
    ]
  },
  {
    k: "停", meaning: "stop, halt", on: ["テイ"], kun: [], group: "st-trains", strokes: 11, radical: "亻",
    mnemonic: "A person 亻 resting at a roadside pavilion 亭: a stop on the journey.",
    notes: [
      "バス停 (バスてい) is a bus stop. 停車 (ていしゃ) is a train or bus stopping: 各駅に停車します.",
      "停電 (ていでん) is a power cut, and lines may stop running during one.",
      "Part of 各停 (かくてい), the local train on departure boards."
    ],
    lookalikes: [],
    examples: [
      { w: "バス停", r: "バスてい", m: "bus stop" },
      { w: "停車", r: "ていしゃ", m: "(train) stopping" },
      { w: "停電", r: "ていでん", m: "power cut" }
    ]
  },
  {
    k: "普", meaning: "ordinary, general", on: ["フ"], kun: [], group: "st-trains", strokes: 12, radical: "日",
    mnemonic: "Two people standing side by side 並 under the sun 日: the sun shines on everyone alike.",
    notes: [
      "普通 (ふつう) means normal; on boards it is the local train that stops at every station.",
      "普通車 (ふつうしゃ) is a standard car, as opposed to the Green Car on JR trains.",
      "普段 (ふだん) means usually, everyday."
    ],
    lookalikes: [],
    examples: [
      { w: "普通", r: "ふつう", m: "normal; local train" },
      { w: "普通車", r: "ふつうしゃ", m: "standard car" },
      { w: "普段", r: "ふだん", m: "usually" }
    ]
  },
  {
    k: "通", meaning: "pass, commute", on: ["ツウ"], kun: ["とお.る", "とお.り", "かよ.う"], group: "st-trains", strokes: 10, radical: "辶",
    mnemonic: "A tube 甬 sliding along the road ⻌: something that passes all the way through.",
    notes: [
      "普通 (ふつう) on boards is the local train. On seat maps 通路側 (つうろがわ) is the aisle, 窓側 (まどがわ) the window.",
      "通る (とおる) is to go through; 通う (かよう) is to commute or go regularly, as to school.",
      "通り (とおり) is a street: after a name it becomes どおり, as in 駅前通り (えきまえどおり)."
    ],
    lookalikes: ["道", "速"],
    examples: [
      { w: "通る", r: "とおる", m: "to pass through" },
      { w: "通り", r: "とおり", m: "street, avenue" },
      { w: "通路", r: "つうろ", m: "aisle, passage" }
    ]
  },
  {
    k: "特", meaning: "special", on: ["トク"], kun: [], group: "st-trains", strokes: 10, radical: "牛",
    mnemonic: "A cow 牛 led into the temple 寺: a special offering.",
    notes: [
      "特急 (とっきゅう) is a limited express: the fastest regular train on most lines, and on JR it needs a 特急券 (とっきゅうけん) on top of the fare.",
      "とく becomes とっ in 特急. 特に (とくに) means especially.",
      "Don't confuse it with 待 (wait): the same 寺 on the right, but a cow on the left."
    ],
    lookalikes: ["待"],
    examples: [
      { w: "特急", r: "とっきゅう", m: "limited express" },
      { w: "特急券", r: "とっきゅうけん", m: "limited express ticket" },
      { w: "特に", r: "とくに", m: "especially" }
    ]
  },
  {
    k: "止", meaning: "stop", on: ["シ"], kun: ["と.まる", "と.める"], group: "st-trains", strokes: 4, radical: "止",
    mnemonic: "A foot planted firmly with one toe 卜 raised: stop right there.",
    notes: [
      "止まれ (とまれ), STOP, is on the red triangle signs at junctions and painted on the road.",
      "禁止 (きんし) means prohibited: 駐車禁止 (ちゅうしゃきんし), no parking. 中止 (ちゅうし) means cancelled.",
      "Don't confuse it with 上 (up): 止 has an extra short stroke on the left."
    ],
    lookalikes: ["上"],
    examples: [
      { w: "止まる", r: "とまる", m: "to stop" },
      { w: "禁止", r: "きんし", m: "prohibited" },
      { w: "中止", r: "ちゅうし", m: "cancellation" }
    ]
  },
  {
    k: "降", meaning: "get off, fall", on: ["コウ"], kun: ["お.りる", "ふ.る"], group: "st-moving", strokes: 10, radical: "阝",
    mnemonic: "Feet stepping down 夅 a hillside ⻖: coming down, getting off.",
    notes: [
      "降りる (おりる) is to get off: 次の駅で降ります. Announcements ask you to let people off first: 降りる方が先.",
      "降る (ふる) is for rain and snow: 雨が降る (あめがふる).",
      "乗降口 (じょうこうぐち) is a train or bus door. The hill ⻖ on the left is the same as in 階 and 院."
    ],
    lookalikes: ["階"],
    examples: [
      { w: "降りる", r: "おりる", m: "to get off" },
      { w: "降る", r: "ふる", m: "to fall (rain, snow)" },
      { w: "乗降口", r: "じょうこうぐち", m: "door (for getting on and off)" }
    ]
  },
  {
    k: "換", meaning: "exchange, change", on: ["カン"], kun: ["か.える", "か.わる"], group: "st-moving", strokes: 12, radical: "扌",
    mnemonic: "A hand 扌 swapping one grand 奐 parcel for another: an exchange.",
    notes: [
      "乗り換え (のりかえ) is changing trains: signs list each line to change to, with its colour.",
      "Signs often drop the kana and write 乗換 (のりかえ); 乗り換え and 乗換え are all the same word.",
      "かん in 換気 (かんき, ventilation): notices sometimes say the windows are open for 換気."
    ],
    lookalikes: [],
    examples: [
      { w: "乗り換え", r: "のりかえ", m: "transfer, change (trains)" },
      { w: "換える", r: "かえる", m: "to exchange" },
      { w: "換気", r: "かんき", m: "ventilation" }
    ]
  },
  {
    k: "段", meaning: "step, stairs", on: ["ダン"], kun: [], group: "st-moving", strokes: 9, radical: "殳",
    mnemonic: "A hand with a stick 殳 chipping steps into a cliff on the left: one step after another.",
    notes: [
      "階段 (かいだん) is stairs: station signs show 階段 next to the escalator and lift signs.",
      "値段 (ねだん) is a price, a word you hear in every shop. 普段 (ふだん) means usually.",
      "Painted on many station stairs: 足もと注意, mind your step."
    ],
    lookalikes: [],
    examples: [
      { w: "階段", r: "かいだん", m: "stairs" },
      { w: "値段", r: "ねだん", m: "price" },
      { w: "普段", r: "ふだん", m: "usually" }
    ]
  },
  {
    k: "側", meaning: "side", on: ["ソク"], kun: ["がわ", "かわ"], group: "st-moving", strokes: 11, radical: "亻",
    mnemonic: "A person 亻 standing beside the rules 則: keeping to the proper side.",
    notes: [
      "Announcements: 左側のドアが開きます (ひだりがわのドアがひらきます), the doors on the left will open.",
      "Seats: 窓側 (まどがわ) is the window and 通路側 (つうろがわ) the aisle. 内側 (うちがわ) is inside the line.",
      "Usually がわ after another word; そく appears in harder words."
    ],
    lookalikes: [],
    examples: [
      { w: "左側", r: "ひだりがわ", m: "left side" },
      { w: "窓側", r: "まどがわ", m: "window side" },
      { w: "内側", r: "うちがわ", m: "inside" }
    ]
  },
  {
    k: "戸", meaning: "door", on: ["コ"], kun: ["と"], group: "st-moving", strokes: 4, radical: "戸",
    mnemonic: "A single door hanging under a lintel: one half of a swinging gate.",
    notes: [
      "On trains you mostly read ドア, but 戸 (と) is the classic word for a door, especially a sliding one.",
      "Becomes ど in 雨戸 (あまど), the storm shutters on Japanese houses. 戸口 (とぐち) is a doorway.",
      "It is the left part of 所 (ところ, place)."
    ],
    lookalikes: ["所"],
    examples: [
      { w: "戸", r: "と", m: "door" },
      { w: "雨戸", r: "あまど", m: "storm shutter" },
      { w: "戸口", r: "とぐち", m: "doorway" }
    ]
  },
  {
    k: "開", meaning: "open", on: ["カイ"], kun: ["あ.く", "あ.ける", "ひら.く"], group: "st-moving", strokes: 12, radical: "門",
    mnemonic: "Two hands 开 lifting the bar from a gate 門: open up.",
    notes: [
      "Lift buttons show 開 (open) and 閉 (close). 開 has two posts 开 inside the gate.",
      "Train announcements say ドアが開きます, read ひらきます or あきます.",
      "開店 (かいてん) is a shop's opening time; museums show 開館 (かいかん) hours."
    ],
    lookalikes: ["閉", "間"],
    examples: [
      { w: "開く", r: "あく", m: "to open (by itself)" },
      { w: "開ける", r: "あける", m: "to open (something)" },
      { w: "開店", r: "かいてん", m: "shop opening" }
    ]
  },
  {
    k: "閉", meaning: "close, shut", on: ["ヘイ"], kun: ["し.まる", "し.める", "と.じる"], group: "st-moving", strokes: 11, radical: "門",
    mnemonic: "A bar 才 jammed across the gate 門: shut tight.",
    notes: [
      "ドアが閉まります (しまります): 'the doors are closing', just before the train leaves. Don't rush in.",
      "Lift button 閉 closes the doors; 開 opens them. Look at what is inside the gate.",
      "閉店 (へいてん) is closing time; 閉じる (とじる) is for closing a book, an app or your eyes."
    ],
    lookalikes: ["開", "間"],
    examples: [
      { w: "閉まる", r: "しまる", m: "to close (by itself)" },
      { w: "閉める", r: "しめる", m: "to close (something)" },
      { w: "閉店", r: "へいてん", m: "shop closing" }
    ]
  },
  {
    k: "押", meaning: "push, press", on: ["オウ"], kun: ["お.す", "お.さえる"], group: "st-moving", strokes: 8, radical: "扌",
    mnemonic: "A hand 扌 pressing down hard on a shell 甲: push.",
    notes: [
      "押 on a door means PUSH; 引 means PULL.",
      "On some local trains and buses you press the button to open the door yourself: 押しボタン (おしボタン).",
      "押し入れ (おしいれ) is the big sliding cupboard where futons are kept."
    ],
    lookalikes: [],
    examples: [
      { w: "押す", r: "おす", m: "to push, press" },
      { w: "押しボタン", r: "おしボタン", m: "push button" },
      { w: "押し入れ", r: "おしいれ", m: "futon cupboard" }
    ]
  },
  /* ========== Shops & offices ========== */
  {
    k: "店", meaning: "shop, store", on: ["テン"], kun: ["みせ"], group: "tw-shops", strokes: 8, radical: "广",
    mnemonic: "A lean-to roof 广 over a little stall 占 with goods laid out on the counter: a shop.",
    notes: [
      "Alone it is みせ; in compounds it is てん: 店員 (てんいん, shop staff), 本店 (ほんてん, main branch), 売店 (ばいてん, kiosk).",
      "Signs say 店内 (てんない, inside the shop), as in 店内禁煙 (no smoking inside).",
      "Chains add the branch after the name and 店: 東口店 (ひがしぐちてん) is the east-exit branch."
    ],
    lookalikes: ["庫"],
    examples: [
      { w: "店", r: "みせ", m: "shop, store" },
      { w: "店員", r: "てんいん", m: "shop assistant" },
      { w: "売店", r: "ばいてん", m: "kiosk, stall" }
    ]
  },
  {
    k: "売", meaning: "sell", on: ["バイ"], kun: ["う.る", "う.れる"], group: "tw-shops", strokes: 7, radical: "士",
    mnemonic: "A samurai 士 standing behind a covered counter on two little legs, calling out his prices: selling.",
    notes: [
      "売り切れ (うりきれ) means sold out: vending machines light up a red sign under the empty drink.",
      "Store directories list each 売り場 (うりば, sales floor): 食品売り場 is the food floor.",
      "Same sound バイ as 買 (buy), its opposite; 売買 (ばいばい) is buying and selling."
    ],
    lookalikes: ["買", "読"],
    examples: [
      { w: "売る", r: "うる", m: "to sell" },
      { w: "売り場", r: "うりば", m: "sales floor, counter" },
      { w: "売り切れ", r: "うりきれ", m: "sold out" }
    ]
  },
  {
    k: "買", meaning: "buy", on: ["バイ"], kun: ["か.う"], group: "tw-shops", strokes: 12, radical: "貝",
    mnemonic: "A net 罒 held over a pile of shells 貝, the money of old times: scoop up your coins and buy.",
    notes: [
      "買い物 (かいもの) is shopping; 買い物に行く (かいものにいく) is to go shopping.",
      "The polite form is 買います (かいます) and the past is 買った (かった).",
      "Don't mix it up with 売 (sell): 買 has the net 罒 on top and the shell 貝 below."
    ],
    lookalikes: ["売", "員"],
    examples: [
      { w: "買う", r: "かう", m: "to buy" },
      { w: "買い物", r: "かいもの", m: "shopping" },
      { w: "売買", r: "ばいばい", m: "buying and selling" }
    ]
  },
  {
    k: "品", meaning: "goods, item", on: ["ヒン"], kun: ["しな"], group: "tw-shops", strokes: 9, radical: "口",
    mnemonic: "Three boxes 口 stacked on a shop shelf: goods ready to sell.",
    notes: [
      "食品 (しょくひん, food products) labels the food floor of supermarkets and department stores.",
      "品切れ (しなぎれ) means out of stock; 切れ turns into ぎれ here.",
      "After ん, ひん often becomes ぴん: 新品 (しんぴん, brand new)."
    ],
    lookalikes: [],
    examples: [
      { w: "食品", r: "しょくひん", m: "food (products)" },
      { w: "品切れ", r: "しなぎれ", m: "out of stock" },
      { w: "新品", r: "しんぴん", m: "brand-new item" }
    ]
  },
  {
    k: "割", meaning: "divide, discount", on: ["カツ"], kun: ["わ.る", "わり", "わ.れる"], group: "tw-shops", strokes: 12, radical: "刂",
    mnemonic: "A knife 刂 slicing away the harmful part 害: cut it up, and cut the price too.",
    notes: [
      "割 counts tenths on sale signs: 3割引 (さんわりびき) is 30% off, 半額 is half price.",
      "Shops and cinemas offer 学割 (がくわり, student discount); bring your student card.",
      "Parcels marked 割れ物注意 (われものちゅうい) are fragile."
    ],
    lookalikes: [],
    examples: [
      { w: "割引", r: "わりびき", m: "discount" },
      { w: "学割", r: "がくわり", m: "student discount" },
      { w: "割れ物", r: "われもの", m: "fragile item" }
    ]
  },
  {
    k: "引", meaning: "pull", on: ["イン"], kun: ["ひ.く"], group: "tw-shops", strokes: 4, radical: "弓",
    mnemonic: "A bow 弓 with its string 丨 drawn back beside it: pull.",
    notes: [
      "On doors 引 means PULL and 押 means PUSH.",
      "In 割引 (わりびき, discount) ひき becomes びき.",
      "ATM screens say お引き出し (おひきだし) for taking cash out."
    ],
    lookalikes: [],
    examples: [
      { w: "引く", r: "ひく", m: "to pull" },
      { w: "割引", r: "わりびき", m: "discount" },
      { w: "引き出し", r: "ひきだし", m: "withdrawal; drawer" }
    ]
  },
  {
    k: "税", meaning: "tax", on: ["ゼイ"], kun: [], group: "tw-shops", strokes: 12, radical: "禾",
    mnemonic: "A sheaf of grain 禾 handed over by a person with arms raised 兌: long ago, tax was paid in rice.",
    notes: [
      "Price tags show 税込 (ぜいこみ, tax included) and often a smaller price without tax (ぜいぬき).",
      "Consumption tax is 10%, or 8% for most food and drink you take away.",
      "No kun'yomi: it is always ぜい."
    ],
    lookalikes: [],
    examples: [
      { w: "税込", r: "ぜいこみ", m: "tax included" },
      { w: "税金", r: "ぜいきん", m: "tax" },
      { w: "国税", r: "こくぜい", m: "national tax" }
    ]
  },
  {
    k: "込", meaning: "crowded, included", on: [], kun: ["こ.む", "こ.める"], group: "tw-shops", strokes: 5, radical: "辶",
    mnemonic: "Something entering 入 rides the moving road 辶 and gets packed in tight: crowded, included.",
    notes: [
      "Made in Japan, so it has no on'yomi; it is always こ or こみ.",
      "On price tags 税込 (ぜいこみ) means tax included.",
      "申し込み (もうしこみ) is an application; forms are often headed 申込書 (もうしこみしょ)."
    ],
    lookalikes: [],
    examples: [
      { w: "込む", r: "こむ", m: "to be crowded" },
      { w: "税込", r: "ぜいこみ", m: "tax included" },
      { w: "申し込み", r: "もうしこみ", m: "application" }
    ]
  },
  {
    k: "安", meaning: "cheap, peaceful", on: ["アン"], kun: ["やす.い"], group: "tw-shops", strokes: 6, radical: "宀",
    mnemonic: "A woman 女 sitting safe under a roof 宀: calm and at peace, and spending very little.",
    notes: [
      "安い (やすい) is cheap; the opposite is 高い (たかい, expensive).",
      "Sale signs shout 安売り (やすうり, bargain sale).",
      "In other words it means calm or safe, as in あんしん (peace of mind)."
    ],
    lookalikes: [],
    examples: [
      { w: "安い", r: "やすい", m: "cheap" },
      { w: "安売り", r: "やすうり", m: "bargain sale" },
      { w: "安物", r: "やすもの", m: "cheap stuff" }
    ]
  },
  {
    k: "値", meaning: "price, value", on: ["チ"], kun: ["ね"], group: "tw-shops", strokes: 10, radical: "亻",
    mnemonic: "A person 亻 looking straight 直 at the tag: what is it really worth?",
    notes: [
      "値段 (ねだん) is the everyday word for price: この値段は税込ですか?",
      "Supermarket stickers say 値引 (ねびき, marked down), often with a yen amount.",
      "値上げ (ねあげ) is a price rise; news and shop notices announce them."
    ],
    lookalikes: [],
    examples: [
      { w: "値段", r: "ねだん", m: "price" },
      { w: "値引き", r: "ねびき", m: "price reduction" },
      { w: "値上げ", r: "ねあげ", m: "price rise" }
    ]
  },
  {
    k: "額", meaning: "amount, frame", on: ["ガク"], kun: ["ひたい"], group: "tw-shops", strokes: 18, radical: "頁",
    mnemonic: "A guest 客 standing head 頁 to head with the shopkeeper over the bill: the amount right in front of his face.",
    notes: [
      "半額 (はんがく, half price) stickers appear on supermarket food late in the evening.",
      "金額 (きんがく) is the amount of money on receipts and forms.",
      "Alone, がく is also a picture frame, and ひたい is the forehead."
    ],
    lookalikes: ["類", "預"],
    examples: [
      { w: "半額", r: "はんがく", m: "half price" },
      { w: "金額", r: "きんがく", m: "amount of money" },
      { w: "定額", r: "ていがく", m: "fixed amount, flat rate" }
    ]
  },
  {
    k: "新", meaning: "new", on: ["シン"], kun: ["あたら.しい", "あら.た"], group: "tw-shops", strokes: 13, radical: "斤",
    mnemonic: "An axe 斤 chopping a fresh plank from a tree 木: newly cut, brand new.",
    notes: [
      "Packaging shouts 新発売 (しんはつばい, new on sale) or just 新.",
      "新聞 (しんぶん) is a newspaper; konbini sell them by the door.",
      "After ん, ひん becomes ぴん: 新品 (しんぴん, brand-new item)."
    ],
    lookalikes: [],
    examples: [
      { w: "新しい", r: "あたらしい", m: "new" },
      { w: "新聞", r: "しんぶん", m: "newspaper" },
      { w: "新発売", r: "しんはつばい", m: "newly on sale" }
    ]
  },
  {
    k: "無", meaning: "none, without", on: ["ム", "ブ"], kun: ["な.い"], group: "tw-shops", strokes: 12, radical: "灬",
    mnemonic: "A row of wooden posts burning over the fire 灬 until nothing at all is left.",
    notes: [
      "無料 (むりょう, free of charge) is everywhere: 無料Wi-Fi, 送料無料 (free shipping).",
      "Shop signs say 年中無休 (ねんじゅうむきゅう): open every day of the year.",
      "Usually む; ぶ in ぶじ (safe and sound). The verb ない is normally written in kana."
    ],
    lookalikes: [],
    examples: [
      { w: "無料", r: "むりょう", m: "free (of charge)" },
      { w: "無休", r: "むきゅう", m: "no days off, open daily" },
      { w: "無理", r: "むり", m: "impossible, too much" }
    ]
  },
  {
    k: "員", meaning: "member, staff", on: ["イン"], kun: [], group: "tw-shops", strokes: 10, radical: "口",
    mnemonic: "A mouth 口 above a shell 貝: the clerk who counts the money and calls out the total.",
    notes: [
      "A suffix for people in a role: 店員 (てんいん, shop staff), 駅員 (えきいん, station staff), 会員 (かいいん, member).",
      "Tills ask for your 会員カード (かいいんカード, membership or points card).",
      "Don't confuse it with 買 (buy), which has a net on top instead of 口."
    ],
    lookalikes: ["買"],
    examples: [
      { w: "店員", r: "てんいん", m: "shop assistant" },
      { w: "会員", r: "かいいん", m: "member" },
      { w: "駅員", r: "えきいん", m: "station staff" }
    ]
  },
  {
    k: "客", meaning: "guest, customer", on: ["キャク"], kun: [], group: "tw-shops", strokes: 9, radical: "宀",
    mnemonic: "Each 各 person who comes in under your roof 宀 is a guest.",
    notes: [
      "Shops and signs say お客様 (おきゃくさま), the very polite word for customers.",
      "Notices for passengers and visitors use it too: 乗客 (じょうきゃく, passenger).",
      "Watch 客 vs 各 (each): 客 adds the roof 宀 on top."
    ],
    lookalikes: ["各", "額"],
    examples: [
      { w: "お客様", r: "おきゃくさま", m: "customer (polite)" },
      { w: "客室", r: "きゃくしつ", m: "guest room" },
      { w: "乗客", r: "じょうきゃく", m: "passenger" }
    ]
  },
  {
    k: "営", meaning: "run (a business)", on: ["エイ"], kun: ["いとな.む"], group: "tw-shops", strokes: 12, radical: "口",
    mnemonic: "Two rooms 呂 under a roof with lights flickering on top: the shop is lit up and running.",
    notes: [
      "営業中 (えいぎょうちゅう) on a door sign means open for business.",
      "営業時間 (えいぎょうじかん) lists business hours on doors and websites.",
      "Same top as 常 (usual); the bottom tells them apart."
    ],
    lookalikes: ["常"],
    examples: [
      { w: "営業", r: "えいぎょう", m: "business, being open" },
      { w: "営業中", r: "えいぎょうちゅう", m: "open (for business)" },
      { w: "営業時間", r: "えいぎょうじかん", m: "business hours" }
    ]
  },
  {
    k: "業", meaning: "business, work", on: ["ギョウ"], kun: ["わざ"], group: "tw-shops", strokes: 13, radical: "木",
    mnemonic: "A wooden frame on a tree 木 trunk with rows of pegs 业 sticking up: a craftsman's rack, ready for work.",
    notes: [
      "Door signs: 営業中 (えいぎょうちゅう, open) and 本日休業 (ほんじつきゅうぎょう, closed today).",
      "業者 (ぎょうしゃ) is a trader or contractor, such as a removal firm.",
      "Usually ぎょう; the kun'yomi わざ is rare."
    ],
    lookalikes: [],
    examples: [
      { w: "営業中", r: "えいぎょうちゅう", m: "open (for business)" },
      { w: "休業", r: "きゅうぎょう", m: "closed (for business)" },
      { w: "業者", r: "ぎょうしゃ", m: "trader, contractor" }
    ]
  },
  {
    k: "準", meaning: "standard, semi-", on: ["ジュン"], kun: [], group: "tw-shops", strokes: 13, radical: "氵",
    mnemonic: "Water 氵 lying flat as a falcon 隼 flies level over a ten 十: the water level, the standard everything is set to.",
    notes: [
      "準備中 (じゅんびちゅう) on a restaurant door means not open yet, often between lunch and dinner.",
      "On private railways 準急 (じゅんきゅう) is a semi-express, stopping more than an express.",
      "Almost always ジュン; the kun'yomi are rare."
    ],
    lookalikes: [],
    examples: [
      { w: "準備", r: "じゅんび", m: "preparation" },
      { w: "準備中", r: "じゅんびちゅう", m: "getting ready (closed)" },
      { w: "準急", r: "じゅんきゅう", m: "semi-express train" }
    ]
  },
  {
    k: "備", meaning: "prepare, equip", on: ["ビ"], kun: ["そな.える"], group: "tw-shops", strokes: 12, radical: "亻",
    mnemonic: "A person 亻 standing beside a quiver packed with arrows: fully equipped and ready.",
    notes: [
      "準備中 (じゅんびちゅう) on a shop door means preparing, not open yet.",
      "備える (そなえる) is to prepare, especially for earthquakes and other disasters.",
      "予備 (よび) is a spare: 予備の電池 is a spare battery."
    ],
    lookalikes: [],
    examples: [
      { w: "準備", r: "じゅんび", m: "preparation" },
      { w: "予備", r: "よび", m: "spare, reserve" },
      { w: "備える", r: "そなえる", m: "to prepare (for)" }
    ]
  },
  {
    k: "銀", meaning: "silver", on: ["ギン"], kun: [], group: "tw-money", strokes: 14, radical: "金",
    mnemonic: "Metal 金 beside a stubborn glaring eye 艮: the pale metal that won't go rusty, silver.",
    notes: [
      "銀行 (ぎんこう) is a bank. Counters usually close at 3 p.m.; ATMs stay open later.",
      "Tokyo's ぎんざ district is named after an old silver mint.",
      "Same right side 艮 as 眼 (eye); the left side tells them apart."
    ],
    lookalikes: ["眼"],
    examples: [
      { w: "銀行", r: "ぎんこう", m: "bank" },
      { w: "銀", r: "ぎん", m: "silver" },
      { w: "銀行員", r: "ぎんこういん", m: "bank clerk" }
    ]
  },
  {
    k: "現", meaning: "present, actual", on: ["ゲン"], kun: ["あらわ.れる", "あらわ.す"], group: "tw-money", strokes: 11, radical: "王",
    mnemonic: "A jewel 王 that you see 見 with your own eyes: it's real, and it's right here now.",
    notes: [
      "現金 (げんきん) is cash. Small shops and restaurants may post 現金のみ (cash only).",
      "現れる (あらわれる) is to appear, to show up.",
      "Left side 王 as in 理; right side 見 (see)."
    ],
    lookalikes: ["理", "見"],
    examples: [
      { w: "現金", r: "げんきん", m: "cash" },
      { w: "現れる", r: "あらわれる", m: "to appear" },
      { w: "現地", r: "げんち", m: "on site, local" }
    ]
  },
  {
    k: "払", meaning: "pay", on: [], kun: ["はら.う"], group: "tw-money", strokes: 5, radical: "扌",
    mnemonic: "A hand 扌 sliding your own private 厶 coin across the counter: paying up.",
    notes: [
      "はらう after another word often becomes ばらい: 前払い (まえばらい, pay first), 後払い (あとばらい, pay later).",
      "Bills can be paid at the konbini till; the slip is a 払込 (はらいこみ) form.",
      "Its on'yomi ふつ is rare; learn it as はらう."
    ],
    lookalikes: [],
    examples: [
      { w: "払う", r: "はらう", m: "to pay" },
      { w: "前払い", r: "まえばらい", m: "payment in advance" },
      { w: "払い込み", r: "はらいこみ", m: "payment (into an account)" }
    ]
  },
  {
    k: "預", meaning: "deposit, leave with", on: ["ヨ"], kun: ["あず.ける", "あず.かる"], group: "tw-money", strokes: 13, radical: "頁",
    mnemonic: "Thinking ahead 予 with your head 頁: you leave your valuables with someone in advance.",
    notes: [
      "預ける (あずける) is to leave something with someone; 預かる (あずかる) is to take care of it.",
      "Cashiers say 千円お預かりします (せんえんおあずかりします) as they take your note.",
      "ATM screens say お預け入れ (おあずけいれ) for putting money in."
    ],
    lookalikes: ["額"],
    examples: [
      { w: "預ける", r: "あずける", m: "to leave with, deposit" },
      { w: "預金", r: "よきん", m: "savings, deposit" },
      { w: "預かる", r: "あずかる", m: "to look after, keep" }
    ]
  },
  {
    k: "郵", meaning: "mail, post", on: ["ユウ"], kun: [], group: "tw-money", strokes: 11, radical: "阝",
    mnemonic: "Something hanging down 垂 beside the town flag 阝: the post station at the edge of town.",
    notes: [
      "郵便局 (ゆうびんきょく) is the post office: look for the red sign shaped like a T with a bar on top.",
      "郵便番号 (ゆうびんばんごう) is the seven-digit postal code at the top of an address.",
      "Used almost only with 便 and 送: 郵送 (ゆうそう) is sending by post."
    ],
    lookalikes: [],
    examples: [
      { w: "郵便", r: "ゆうびん", m: "mail, post" },
      { w: "郵便局", r: "ゆうびんきょく", m: "post office" },
      { w: "郵送", r: "ゆうそう", m: "sending by post" }
    ]
  },
  {
    k: "便", meaning: "convenient, mail", on: ["ベン", "ビン"], kun: ["たよ.り"], group: "tw-money", strokes: 9, radical: "亻",
    mnemonic: "A person 亻 who changes 更 things round to make life easier: convenient.",
    notes: [
      "べん means convenient: 便利 (べんり). びん means a delivery or flight: 郵便 (ゆうびん).",
      "Airport boards give flight numbers with 便: 123便 (ひゃくにじゅうさんびん) is flight 123.",
      "便り (たより) is news or a letter from someone."
    ],
    lookalikes: [],
    examples: [
      { w: "便利", r: "べんり", m: "convenient" },
      { w: "郵便", r: "ゆうびん", m: "mail, post" },
      { w: "便", r: "びん", m: "flight; delivery" }
    ]
  },
  {
    k: "送", meaning: "send", on: ["ソウ"], kun: ["おく.る"], group: "tw-money", strokes: 9, radical: "辶",
    mnemonic: "Two hands lifting a parcel 关 onto the moving road 辶: sending it on its way.",
    notes: [
      "送料 (そうりょう) is postage or the delivery fee; 送料無料 means free shipping.",
      "送る (おくる) is to send, and also to see someone off or give them a lift.",
      "送り先 (おくりさき) is the address it goes to."
    ],
    lookalikes: [],
    examples: [
      { w: "送る", r: "おくる", m: "to send" },
      { w: "送料", r: "そうりょう", m: "postage, delivery fee" },
      { w: "送料無料", r: "そうりょうむりょう", m: "free shipping" }
    ]
  },
  {
    k: "荷", meaning: "load, luggage", on: ["カ"], kun: ["に"], group: "tw-money", strokes: 10, radical: "艹",
    mnemonic: "What 何 is under all that grass 艹? A bundle of hay strapped to someone's back: a load.",
    notes: [
      "荷物 (にもつ) is luggage or a parcel; couriers and the post office use it for packages.",
      "In shops 入荷 (にゅうか) means new stock has arrived; online orders show 出荷 (しゅっか, shipped).",
      "Looks like 何 (what) with grass 艹 on top."
    ],
    lookalikes: ["何", "花"],
    examples: [
      { w: "荷物", r: "にもつ", m: "luggage, parcel" },
      { w: "入荷", r: "にゅうか", m: "arrival of stock" },
      { w: "出荷", r: "しゅっか", m: "shipping, dispatch" }
    ]
  },
  {
    k: "役", meaning: "role, duty", on: ["ヤク"], kun: [], group: "tw-office", strokes: 7, radical: "彳",
    mnemonic: "A man on the road 彳 with a weapon in his hand 殳: out on patrol, doing his duty.",
    notes: [
      "市役所 (しやくしょ) is city hall and 区役所 (くやくしょ) a ward office: where you register your address.",
      "やくにたつ means to be useful; 役 is a role or part in a play too.",
      "役員 (やくいん) is a company officer or board member."
    ],
    lookalikes: [],
    examples: [
      { w: "市役所", r: "しやくしょ", m: "city hall" },
      { w: "区役所", r: "くやくしょ", m: "ward office" },
      { w: "役員", r: "やくいん", m: "officer, board member" }
    ]
  },
  {
    k: "所", meaning: "place", on: ["ショ"], kun: ["ところ"], group: "tw-office", strokes: 8, radical: "戸",
    mnemonic: "A door 戸 and an axe 斤: the woodcutter's hut, his own place.",
    notes: [
      "住所 (じゅうしょ, address) is the first thing every form asks for.",
      "場所 (ばしょ) is the everyday word for a place or location.",
      "Reading quirk: 台所 (だいどころ, kitchen) uses どころ."
    ],
    lookalikes: [],
    examples: [
      { w: "住所", r: "じゅうしょ", m: "address" },
      { w: "場所", r: "ばしょ", m: "place, location" },
      { w: "台所", r: "だいどころ", m: "kitchen" }
    ]
  },
  {
    k: "届", meaning: "deliver, notify", on: [], kun: ["とど.ける", "とど.く"], group: "tw-office", strokes: 8, radical: "尸",
    mnemonic: "A body bending 尸 over a counter to push a form 由 through the slot: the paper has been delivered.",
    notes: [
      "届く (とどく) is for things arriving: 荷物が届いた (the parcel came).",
      "City hall forms ending in 届 (とどけ) are notices you file, like the one due within 14 days of moving in.",
      "Its on'yomi is almost never used; read it とど."
    ],
    lookalikes: [],
    examples: [
      { w: "届く", r: "とどく", m: "to arrive, reach" },
      { w: "届ける", r: "とどける", m: "to deliver; to report" },
      { w: "届け出", r: "とどけで", m: "notification (to an office)" }
    ]
  },
  {
    k: "類", meaning: "kind, sort", on: ["ルイ"], kun: [], group: "tw-office", strokes: 18, radical: "頁",
    mnemonic: "Rice 米, a dog 犬 and a head 頁 all in one character: somebody sorting things into kinds.",
    notes: [
      "書類 (しょるい) is paperwork: offices ask you to bring the right documents.",
      "Rubbish rules explain the 分類 (ぶんるい, sorting) of burnable, plastic and cans.",
      "Same right side 頁 as 額 and 預."
    ],
    lookalikes: ["額"],
    examples: [
      { w: "書類", r: "しょるい", m: "documents" },
      { w: "分類", r: "ぶんるい", m: "classification, sorting" },
      { w: "人類", r: "じんるい", m: "humankind" }
    ]
  },
  {
    k: "申", meaning: "say (humble), apply", on: ["シン"], kun: ["もう.す"], group: "tw-office", strokes: 5, radical: "田",
    mnemonic: "A bolt of lightning 丨 striking straight down through the sun 日: a word sent up humbly to the heavens.",
    notes: [
      "申込書 (もうしこみしょ) is an application form; 申請 (しんせい) is an official application at an office.",
      "申す (もうす) is the humble 'say': 田中と申します (たなかともうします) means I'm Tanaka.",
      "Don't confuse it with 由 or 田: only 申 has its line poking out at both top and bottom."
    ],
    lookalikes: ["由", "田"],
    examples: [
      { w: "申す", r: "もうす", m: "to say (humble)" },
      { w: "申込書", r: "もうしこみしょ", m: "application form" },
      { w: "申請", r: "しんせい", m: "(official) application" }
    ]
  },
  {
    k: "記", meaning: "write down, record", on: ["キ"], kun: ["しる.す"], group: "tw-office", strokes: 10, radical: "言",
    mnemonic: "Words 言 that you write down for yourself 己: a record.",
    notes: [
      "Forms say ご記入ください (ごきにゅうください): please fill this in.",
      "日記 (にっき, diary) has a small っ: にち + き becomes にっき.",
      "記号 (きごう) is a symbol or mark, such as the ones on a map."
    ],
    lookalikes: [],
    examples: [
      { w: "記入", r: "きにゅう", m: "filling in (a form)" },
      { w: "日記", r: "にっき", m: "diary" },
      { w: "記号", r: "きごう", m: "symbol, mark" }
    ]
  },
  {
    k: "印", meaning: "seal, mark", on: ["イン"], kun: ["しるし"], group: "tw-office", strokes: 6, radical: "卩",
    mnemonic: "A hand pressing down hard beside a kneeling figure 卩: pushing a seal onto paper.",
    notes: [
      "Forms print 印 in a circle where your seal (はんこ) goes; many offices now accept a signature.",
      "印紙 (いんし) are revenue stamps, sold at post offices and some konbini.",
      "As a word it is しるし (mark); after another word it becomes じるし: 目印 (めじるし, landmark)."
    ],
    lookalikes: [],
    examples: [
      { w: "印", r: "しるし", m: "mark, sign" },
      { w: "目印", r: "めじるし", m: "landmark, marker" },
      { w: "印紙", r: "いんし", m: "revenue stamp" }
    ]
  },
  {
    k: "明", meaning: "bright, clear", on: ["メイ", "ミョウ"], kun: ["あか.るい", "あ.ける", "あき.らか"], group: "tw-office", strokes: 8, radical: "日",
    mnemonic: "The sun 日 and the moon 月 side by side: as bright as it gets.",
    notes: [
      "City hall issues all kinds of 証明書 (しょうめいしょ, certificates), often from a machine or the konbini.",
      "明日 (tomorrow) is usually read あした; みょうにち is the formal reading.",
      "明るい (あかるい) is bright or cheerful."
    ],
    lookalikes: [],
    examples: [
      { w: "明るい", r: "あかるい", m: "bright" },
      { w: "明日", r: "あした", m: "tomorrow" },
      { w: "証明書", r: "しょうめいしょ", m: "certificate" }
    ]
  },
  {
    k: "市", meaning: "city, market", on: ["シ"], kun: ["いち"], group: "tw-places", strokes: 5, radical: "巾",
    mnemonic: "A lid 亠 over a hanging cloth 巾: the banner over a market stall, and the city that grew up round it.",
    notes: [
      "Addresses add 市 (し) after the city name: 京都市 (きょうとし).",
      "市役所 (しやくしょ) is city hall, where you register as a resident.",
      "市場 is いちば (a market) in everyday use; しじょう is the market in economics."
    ],
    lookalikes: [],
    examples: [
      { w: "市役所", r: "しやくしょ", m: "city hall" },
      { w: "市場", r: "いちば", m: "market" },
      { w: "市内", r: "しない", m: "within the city" }
    ]
  },
  {
    k: "区", meaning: "ward, district", on: ["ク"], kun: [], group: "tw-places", strokes: 4, radical: "匸",
    mnemonic: "A box open on one side 匸 with an X 乂 marked inside: one section of the map.",
    notes: [
      "Tokyo has 23 区 (wards); big cities like Osaka are split into 区 too.",
      "In a ward you register at the 区役所 (くやくしょ, ward office) instead of city hall.",
      "Train fares and passes use 区間 (くかん, a section of the line)."
    ],
    lookalikes: [],
    examples: [
      { w: "区役所", r: "くやくしょ", m: "ward office" },
      { w: "区間", r: "くかん", m: "section (of a route)" },
      { w: "区内", r: "くない", m: "within the ward" }
    ]
  },
  {
    k: "町", meaning: "town, neighbourhood", on: ["チョウ"], kun: ["まち"], group: "tw-places", strokes: 7, radical: "田",
    mnemonic: "Rice fields 田 with a nail 丁 marking the path between them: a little town growing among the paddies.",
    notes: [
      "In place names 町 can be ちょう or まち; you have to learn each one.",
      "町内会 (ちょうないかい) is the neighbourhood association that posts rubbish rules and festival notices.",
      "下町 (したまち) is the old downtown, full of small shops."
    ],
    lookalikes: [],
    examples: [
      { w: "町", r: "まち", m: "town" },
      { w: "下町", r: "したまち", m: "old downtown" },
      { w: "町内会", r: "ちょうないかい", m: "neighbourhood association" }
    ]
  },
  {
    k: "村", meaning: "village", on: ["ソン"], kun: ["むら"], group: "tw-places", strokes: 7, radical: "木",
    mnemonic: "Trees 木 planted an inch 寸 apart in neat rows: the orchards of a village.",
    notes: [
      "Forms ask for your 市区町村 (しくちょうそん): your city, ward, town or village.",
      "In place names 村 can be むら or そん.",
      "Same tree 木 on the left as 林 (woods)."
    ],
    lookalikes: ["林"],
    examples: [
      { w: "村", r: "むら", m: "village" },
      { w: "市区町村", r: "しくちょうそん", m: "municipality" },
      { w: "村長", r: "そんちょう", m: "village mayor" }
    ]
  },
  {
    k: "住", meaning: "live, reside", on: ["ジュウ"], kun: ["す.む"], group: "tw-places", strokes: 7, radical: "亻",
    mnemonic: "A person 亻 who is master 主 of the house: the one who lives here.",
    notes: [
      "住所 (じゅうしょ) is your address; every form has a box for it.",
      "住む (すむ) is to live: 東京に住んでいます (I live in Tokyo).",
      "Don't confuse it with 注 (pour, note), which has three drops of water on the left."
    ],
    lookalikes: ["注"],
    examples: [
      { w: "住所", r: "じゅうしょ", m: "address" },
      { w: "住む", r: "すむ", m: "to live (somewhere)" },
      { w: "住まい", r: "すまい", m: "home, residence" }
    ]
  },
  /* ========== Restaurants & food ========== */
  {
    k: "丼", meaning: "bowl (of rice)", on: [], kun: ["どんぶり"], group: "rs-dishes", strokes: 5, radical: "丶",
    mnemonic: "Look down into a well 井 and spot one plump dot 丶 at the bottom: a deep bowl with the topping sitting on the rice.",
    notes: [
      "On menus and shop curtains it is usually a short どん after the topping: 牛丼 (ぎゅうどん), 天丼 (てんどん), カツ丼 (かつどん).",
      "Alone it is どんぶり, the deep bowl itself. Bowl chains offer 大盛り (おおもり), a large portion, for a little extra.",
      "Without the dot it is 井 (well), as in the common surname 井上 (いのうえ)."
    ],
    lookalikes: [],
    examples: [
      { w: "牛丼", r: "ぎゅうどん", m: "beef bowl" },
      { w: "カツ丼", r: "カツどん", m: "pork cutlet rice bowl" },
      { w: "丼", r: "どんぶり", m: "bowl; rice-bowl dish" }
    ]
  },
  {
    k: "麺", meaning: "noodles", on: ["メン"], kun: [], group: "rs-dishes", strokes: 16, radical: "麦",
    mnemonic: "Wheat 麦 pulled out flat until it is as wide as a face 面: hand-stretched noodles ready for the pot.",
    notes: [
      "Ramen and soba shops use it everywhere: つけ麺 (つけめん) are noodles served apart from the soup, for dipping.",
      "麺類 (めんるい), noodle dishes, is a heading on food court and cafeteria menus.",
      "The right side is 面 (face, surface), which gives the same めん sound."
    ],
    lookalikes: ["面"],
    examples: [
      { w: "麺類", r: "めんるい", m: "noodle dishes" },
      { w: "つけ麺", r: "つけめん", m: "dipping noodles" },
      { w: "冷麺", r: "れいめん", m: "cold noodles" }
    ]
  },
  {
    k: "寿", meaning: "long life, congratulations", on: ["ジュ", "ス"], kun: ["ことぶき"], group: "rs-dishes", strokes: 7, radical: "寸",
    mnemonic: "Three 三 long lines with a sweeping stroke 丿 through them and a hand 寸 below: a long, long life measured out year by year.",
    notes: [
      "Mostly met in 寿司 (すし): the kanji just spell the sound, and 寿 was chosen for its lucky meaning.",
      "Alone, 寿 (ことぶき) is printed on wedding gift envelopes and celebration packaging.",
      "ジュ appears in 長寿 (ちょうじゅ), long life."
    ],
    lookalikes: ["春"],
    examples: [
      { w: "寿司", r: "すし", m: "sushi" },
      { w: "長寿", r: "ちょうじゅ", m: "long life" },
      { w: "寿", r: "ことぶき", m: "congratulations (on gifts)" }
    ]
  },
  {
    k: "司", meaning: "official, administer", on: ["シ"], kun: [], group: "rs-dishes", strokes: 5, radical: "口",
    mnemonic: "A wall bending round a line 一 and a mouth 口: the official in the corner office, giving the orders.",
    notes: [
      "At restaurants it is the し of 寿司 (すし); on sushi shop curtains you will often see just すし in kana.",
      "At work, 上司 (じょうし) is your boss. 司会 (しかい) is the MC or host at a wedding or event."
    ],
    lookalikes: [],
    examples: [
      { w: "寿司", r: "すし", m: "sushi" },
      { w: "上司", r: "じょうし", m: "boss, superior" },
      { w: "司会", r: "しかい", m: "MC, host" }
    ]
  },
  {
    k: "刺", meaning: "pierce, stab", on: ["シ"], kun: ["さ.す", "さし"], group: "rs-dishes", strokes: 8, radical: "刂",
    mnemonic: "A thorny branch 朿 next to a knife 刂: two sharp things, both made for poking.",
    notes: [
      "On menus it is almost always 刺身 (さしみ), sliced raw fish; 刺身定食 (さしみていしょく) is the set meal with rice and soup.",
      "名刺 (めいし) is a business card: in Japan it is offered and received with both hands.",
      "虫に刺される (さされる) is to be bitten or stung by an insect."
    ],
    lookalikes: [],
    examples: [
      { w: "刺身", r: "さしみ", m: "sashimi, sliced raw fish" },
      { w: "名刺", r: "めいし", m: "business card" },
      { w: "刺す", r: "さす", m: "to pierce, to sting" }
    ]
  },
  {
    k: "身", meaning: "body, self", on: ["シン"], kun: ["み"], group: "rs-dishes", strokes: 7, radical: "身",
    mnemonic: "A person seen from the side with a big round belly and a line across it: a body carrying someone inside.",
    notes: [
      "On menus 身 is the flesh of a fish: 刺身 (さしみ), and 白身 (しろみ), white fish. 白身 is also egg white.",
      "Small talk and forms: 出身 (しゅっしん) is where you are from, and 身長 (しんちょう) is your height.",
      "Don't confuse it with 自 (self): 身 has the slanting tail and the long stroke across."
    ],
    lookalikes: ["自"],
    examples: [
      { w: "刺身", r: "さしみ", m: "sashimi, sliced raw fish" },
      { w: "白身", r: "しろみ", m: "white fish; egg white" },
      { w: "出身", r: "しゅっしん", m: "hometown, origin" }
    ]
  },
  {
    k: "餃", meaning: "dumpling, gyoza", on: ["ギョウ"], kun: [], group: "rs-dishes", strokes: 15, radical: "飠",
    mnemonic: "Food 飠 folded so its edges cross 交 and pinch together: a gyoza crimped shut before frying.",
    notes: [
      "Only really used in 餃子 (ぎょうざ), where 子 is read ざ, a Chinese-style reading you meet only here.",
      "On menus: 焼き餃子 (やきぎょうざ) are pan-fried, 水餃子 (すいぎょうざ) are boiled and served in soup.",
      "Ramen shops sell them as a side; one plate, 一人前 (いちにんまえ), is usually five or six pieces."
    ],
    lookalikes: ["飯"],
    examples: [
      { w: "餃子", r: "ぎょうざ", m: "gyoza, dumplings" },
      { w: "焼き餃子", r: "やきぎょうざ", m: "pan-fried gyoza" },
      { w: "水餃子", r: "すいぎょうざ", m: "boiled dumplings" }
    ]
  },
  {
    k: "鍋", meaning: "pot, hotpot", on: [], kun: ["なべ"], group: "rs-dishes", strokes: 17, radical: "金",
    mnemonic: "Metal 金 on the left and a deep pot with its lid on 咼 on the right: a heavy iron hotpot bubbling on the table.",
    notes: [
      "In winter 鍋 (なべ) also means the hotpot meal itself, cooked at the table and shared: 鍋料理 (なべりょうり).",
      "On izakaya menus it follows the main ingredient: もつ鍋 (もつなべ), キムチ鍋 (キムチなべ).",
      "The metal 金 on the left is the same as in 鉄 and 銀."
    ],
    lookalikes: [],
    examples: [
      { w: "鍋", r: "なべ", m: "pot; hotpot" },
      { w: "鍋料理", r: "なべりょうり", m: "hotpot dishes" },
      { w: "土鍋", r: "どなべ", m: "clay pot" }
    ]
  },
  {
    k: "豆", meaning: "bean", on: ["トウ", "ズ"], kun: ["まめ"], group: "rs-dishes", strokes: 7, radical: "豆",
    mnemonic: "A lid, a little bowl 口 and a stand with two feet: a tall dish heaped with beans.",
    notes: [
      "豆腐 (とうふ) uses トウ; 大豆 (だいず), soybeans, uses ズ: the beans behind tofu, miso and soy sauce.",
      "In coffee shops and supermarkets it is the coffee bean: コーヒー豆 (コーヒーまめ).",
      "えだまめ, boiled green soybeans, is the classic first order at an izakaya; menus write it with this 豆."
    ],
    lookalikes: [],
    examples: [
      { w: "豆腐", r: "とうふ", m: "tofu" },
      { w: "大豆", r: "だいず", m: "soybean" },
      { w: "コーヒー豆", r: "コーヒーまめ", m: "coffee beans" }
    ]
  },
  {
    k: "腐", meaning: "rot, go bad", on: ["フ"], kun: ["くさ.る"], group: "rs-dishes", strokes: 14, radical: "肉",
    mnemonic: "Meat 肉 left too long in the government office 府: by the time the paperwork is done, it has gone off.",
    notes: [
      "Everyday it is in 豆腐 (とうふ): here it describes soft, curdled bean curd, not food gone bad.",
      "After another word とうふ often becomes どうふ: 揚げ出し豆腐 (あげだしどうふ) is a classic izakaya dish.",
      "腐る (くさる) is to go off: milk or leftovers that have 腐った (くさった) smell sour."
    ],
    lookalikes: ["府"],
    examples: [
      { w: "豆腐", r: "とうふ", m: "tofu" },
      { w: "腐る", r: "くさる", m: "to go bad, to rot" },
      { w: "揚げ出し豆腐", r: "あげだしどうふ", m: "deep-fried tofu in broth" }
    ]
  },
  {
    k: "卵", meaning: "egg", on: ["ラン"], kun: ["たまご"], group: "rs-dishes", strokes: 7, radical: "卩",
    mnemonic: "A shell cracked into two halves 卯 with a little yolk 丶 in each: an egg broken open.",
    notes: [
      "Egg packs and menus write たまご as 卵, but sushi menus and some dishes use 玉子 for cooked egg.",
      "A raw egg, 生卵 (なまたまご), comes with sukiyaki and is a popular topping on 牛丼.",
      "卵かけご飯 (たまごかけごはん), a raw egg stirred into hot rice, is a classic Japanese breakfast."
    ],
    lookalikes: [],
    examples: [
      { w: "卵", r: "たまご", m: "egg" },
      { w: "生卵", r: "なまたまご", m: "raw egg" },
      { w: "卵焼き", r: "たまごやき", m: "rolled omelette" }
    ]
  },
  {
    k: "菓", meaning: "sweets, snacks", on: ["カ"], kun: [], group: "rs-dishes", strokes: 11, radical: "艹",
    mnemonic: "Grass 艹 over fruit 果: sweet things picked from plants, the oldest sweets of all.",
    notes: [
      "Mostly met in お菓子 (おかし), snacks and sweets: the konbini shelves of crisps and chocolate.",
      "菓子パン (かしパン), sweet buns, fill a whole shelf at bakeries and konbini. After another word か can become が: 茶菓子 (ちゃがし).",
      "Without the grass on top it is 果 (fruit)."
    ],
    lookalikes: ["果", "菜"],
    examples: [
      { w: "お菓子", r: "おかし", m: "sweets, snacks" },
      { w: "菓子パン", r: "かしパン", m: "sweet bun" },
      { w: "茶菓子", r: "ちゃがし", m: "sweets served with tea" }
    ]
  },
  {
    k: "飯", meaning: "cooked rice, meal", on: ["ハン"], kun: ["めし"], group: "rs-dishes", strokes: 12, radical: "飠",
    mnemonic: "Food 飠 you keep turning back 反 to for more: the bowl of rice that comes with every meal.",
    notes: [
      "ご飯 (ごはん) is both cooked rice and a whole meal. Set-meal shops often post ご飯大盛り無料: a large rice for free.",
      "めし is the casual reading, seen on cheap diner signs and in 焼き飯 (やきめし), fried rice.",
      "Same food side 飠 as 飲 (drink); the right side tells them apart."
    ],
    lookalikes: ["飲", "餃"],
    examples: [
      { w: "ご飯", r: "ごはん", m: "cooked rice; meal" },
      { w: "五目ご飯", r: "ごもくごはん", m: "mixed rice with vegetables" },
      { w: "焼き飯", r: "やきめし", m: "fried rice" }
    ]
  },
  {
    k: "野", meaning: "field, wild", on: ["ヤ"], kun: ["の"], group: "rs-dishes", strokes: 11, radical: "里",
    mnemonic: "A village 里 with a plan 予 to grow past its fences: the open fields around it, where the vegetables grow.",
    notes: [
      "Menus are full of 野菜 (やさい), vegetables: 野菜サラダ, 野菜カレー.",
      "As の it starts and ends many place names and surnames: 上野 (うえの), 中野 (なかの), 長野 (ながの).",
      "The right side 予 is the same as in 予約 (よやく), reservation."
    ],
    lookalikes: [],
    examples: [
      { w: "野菜", r: "やさい", m: "vegetables" },
      { w: "上野", r: "うえの", m: "Ueno (Tokyo)" },
      { w: "長野", r: "ながの", m: "Nagano" }
    ]
  },
  {
    k: "菜", meaning: "vegetable, greens", on: ["サイ"], kun: ["な"], group: "rs-dishes", strokes: 11, radical: "艹",
    mnemonic: "Grass 艹 above a hand picking from a tree 采: plucking fresh greens for dinner.",
    notes: [
      "サイ in 野菜 (やさい) and 山菜 (さんさい), wild mountain greens, a favourite topping on soba and in tempura.",
      "な for leafy greens: 菜の花 (なのはな) are the yellow rapeseed flowers of early spring, also eaten boiled.",
      "Don't confuse it with 茶 (tea): both have grass on top, but 菜 has 采 underneath."
    ],
    lookalikes: ["茶", "菓"],
    examples: [
      { w: "野菜", r: "やさい", m: "vegetables" },
      { w: "山菜", r: "さんさい", m: "wild mountain greens" },
      { w: "菜の花", r: "なのはな", m: "rapeseed blossoms" }
    ]
  },
  {
    k: "果", meaning: "fruit, result", on: ["カ"], kun: ["は.たす"], group: "rs-dishes", strokes: 8, radical: "木",
    mnemonic: "A field 田 of fruit hanging at the top of a tree 木: ripe and ready to pick.",
    notes: [
      "果物 (くだもの) is fruit: an irregular reading for the whole word, so learn it as one unit.",
      "On juice labels 果汁 (かじゅう) is fruit juice; 果汁100% means pure juice.",
      "Add grass on top and it becomes 菓 (sweets). Don't mix it up with 東 (east)."
    ],
    lookalikes: ["菓", "東"],
    examples: [
      { w: "果物", r: "くだもの", m: "fruit" },
      { w: "果汁", r: "かじゅう", m: "fruit juice" },
      { w: "果たす", r: "はたす", m: "to carry out, to fulfil" }
    ]
  },
  {
    k: "焼", meaning: "grill, bake", on: ["ショウ"], kun: ["や.く", "や.ける"], group: "rs-cooking", strokes: 12, radical: "火",
    mnemonic: "Fire 火 on the left and a tall heap 尭 on the right: food piled up over the flames to grill.",
    notes: [
      "All over menus and lanterns: 焼き鳥 (やきとり), 焼き魚 (やきざかな, grilled fish set) and 焼肉 (やきにく), where you grill the meat yourself at the table.",
      "In food words it is almost always や; しょう turns up in しょうちゅう, the distilled spirit sold in izakaya.",
      "日焼け (ひやけ) is a suntan: the sun 日 grilling you."
    ],
    lookalikes: [],
    examples: [
      { w: "焼き鳥", r: "やきとり", m: "grilled chicken skewers" },
      { w: "焼肉", r: "やきにく", m: "Korean-style grilled meat" },
      { w: "焼き魚", r: "やきざかな", m: "grilled fish" }
    ]
  },
  {
    k: "揚", meaning: "deep-fry, raise", on: ["ヨウ"], kun: ["あ.げる", "あ.がる"], group: "rs-cooking", strokes: 12, radical: "扌",
    mnemonic: "A hand 扌 lifting a basket out of the bubbling oil as the sun 昜 comes up over it: deep-fried food raised from the pan.",
    notes: [
      "On menus 揚げ means deep-fried: 唐揚げ (からあげ), 揚げ出し豆腐 (あげだしどうふ). Fried dishes as a group are 揚げ物 (あげもの).",
      "In food it is read あげ; same sound as 上げる (あげる, to raise, to give), but 揚 is the one for frying.",
      "The right side 昜 is the same as in 場 (place), as in 駐車場; 場 has earth 土 instead of the hand 扌."
    ],
    lookalikes: ["場"],
    examples: [
      { w: "唐揚げ", r: "からあげ", m: "Japanese fried chicken" },
      { w: "揚げ物", r: "あげもの", m: "fried food" },
      { w: "揚げ出し豆腐", r: "あげだしどうふ", m: "fried tofu in broth" }
    ]
  },
  {
    k: "唐", meaning: "Tang China, foreign", on: ["トウ"], kun: ["から"], group: "rs-cooking", strokes: 10, radical: "口",
    mnemonic: "Under a wide roof 广 a hand grinds with a pestle over a mouth 口: a kitchen making spicy food the far-off Tang Chinese way.",
    notes: [
      "In daily life it is almost only in 唐揚げ (からあげ), Japan's favourite fried chicken, and 唐辛子 (とうがらし), chilli pepper.",
      "The kun reading から once meant China, or anything foreign: からあげ was frying 'the foreign way'.",
      "The roof 广 at the top is the same one as in 店 (shop)."
    ],
    lookalikes: [],
    examples: [
      { w: "唐揚げ", r: "からあげ", m: "Japanese fried chicken" },
      { w: "唐辛子", r: "とうがらし", m: "chilli pepper" },
      { w: "唐揚げ定食", r: "からあげていしょく", m: "fried chicken set meal" }
    ]
  },
  {
    k: "煮", meaning: "simmer, boil", on: ["シャ"], kun: ["に.る", "に.える"], group: "rs-cooking", strokes: 12, radical: "灬",
    mnemonic: "A person 者 crouching over four little flames 灬: keeping the pot gently simmering.",
    notes: [
      "On menus 煮 means simmered in broth: 煮物 (にもの, simmered vegetables) and 煮魚 (にざかな, fish simmered in soy and sugar).",
      "Read に in everyday words; the on reading しゃ is rare.",
      "It is 者 (person) with the fire dots 灬 underneath, so don't read it as 者."
    ],
    lookalikes: ["者"],
    examples: [
      { w: "煮物", r: "にもの", m: "simmered dish" },
      { w: "煮魚", r: "にざかな", m: "simmered fish" },
      { w: "煮る", r: "にる", m: "to simmer, boil" }
    ]
  },
  {
    k: "汁", meaning: "soup, juice", on: ["ジュウ"], kun: ["しる", "つゆ"], group: "rs-cooking", strokes: 5, radical: "氵",
    mnemonic: "Water 氵 with ten 十 things simmered in it: a bowl of soup.",
    notes: [
      "Almost every set meal comes with 味噌汁 (みそしる). On ramen menus, 汁なし (しるなし) means noodles with sauce but no soup.",
      "On juice cartons 果汁 (かじゅう) shows the fruit content: 果汁100% is pure juice.",
      "Read つゆ for the dipping sauce served with soba and tempura."
    ],
    lookalikes: [],
    examples: [
      { w: "味噌汁", r: "みそしる", m: "miso soup" },
      { w: "果汁", r: "かじゅう", m: "fruit juice" },
      { w: "汁物", r: "しるもの", m: "soup (dish)" }
    ]
  },
  {
    k: "味", meaning: "taste, flavour", on: ["ミ"], kun: ["あじ", "あじ.わう"], group: "rs-cooking", strokes: 8, radical: "口",
    mnemonic: "A mouth 口 next to a young tree 未 whose fruit is not yet ripe: you have to taste it to find out.",
    notes: [
      "Flavours on ramen menus and snack packets end in 味 (あじ): 塩味 (しおあじ), しょうゆ味, カレー味.",
      "Read み in compounds: 味噌 (みそ), and outside food 意味 (いみ, meaning), as in どういう意味ですか?",
      "The right side 未 has a short top line and a longer second line."
    ],
    lookalikes: [],
    examples: [
      { w: "味噌", r: "みそ", m: "miso" },
      { w: "塩味", r: "しおあじ", m: "salt flavour" },
      { w: "意味", r: "いみ", m: "meaning" }
    ]
  },
  {
    k: "噌", meaning: "miso (in 味噌)", on: ["ソ"], kun: [], group: "rs-cooking", strokes: 15, radical: "口",
    mnemonic: "A mouth 口 beside a steamer 曽 stacked in layers: the fermented bean paste of every bowl of miso soup.",
    notes: [
      "Practically only used in 味噌 (みそ), so menus often just write みそ or みそ汁 in kana.",
      "Read そ here, a reading you will hardly meet anywhere else.",
      "味噌ラーメン is one of the four classic ramen flavours, with 塩, しょうゆ and とんこつ."
    ],
    lookalikes: [],
    examples: [
      { w: "味噌", r: "みそ", m: "miso" },
      { w: "味噌汁", r: "みそしる", m: "miso soup" },
      { w: "味噌ラーメン", r: "みそラーメン", m: "miso ramen" }
    ]
  },
  {
    k: "辛", meaning: "spicy, painful", on: ["シン"], kun: ["から.い", "つら.い"], group: "rs-cooking", strokes: 7, radical: "辛",
    mnemonic: "Standing 立 on top of a sharp cross 十: as painful as biting into the hottest curry.",
    notes: [
      "Curry comes 甘口 (あまくち, mild), 中辛 (ちゅうから, medium) and 辛口 (からくち, hot); many ramen shops let you choose the 辛さ (からさ), the heat level.",
      "For sake and beer 辛口 means dry, not spicy.",
      "辛い can be からい (spicy) or つらい (hard, painful); context tells you which."
    ],
    lookalikes: [],
    examples: [
      { w: "辛い", r: "からい", m: "spicy, hot" },
      { w: "辛口", r: "からくち", m: "hot (curry); dry (sake)" },
      { w: "中辛", r: "ちゅうから", m: "medium hot" }
    ]
  },
  {
    k: "甘", meaning: "sweet", on: ["カン"], kun: ["あま.い", "あま.える"], group: "rs-cooking", strokes: 5, radical: "甘",
    mnemonic: "An open mouth 廿 with a line across the inside: a sweet held on the tongue, too good to swallow yet.",
    notes: [
      "On packets 甘さひかえめ means 'not too sweet', a selling point for Japanese desserts. 甘口 (あまくち) is mild curry.",
      "A 甘味処 (かんみどころ) is a traditional teahouse serving Japanese sweets and green tea.",
      "甘える (あまえる) means to lean on someone's kindness, like a child with its parents."
    ],
    lookalikes: [],
    examples: [
      { w: "甘い", r: "あまい", m: "sweet" },
      { w: "甘口", r: "あまくち", m: "mild, sweet (flavour)" },
      { w: "甘味処", r: "かんみどころ", m: "Japanese sweets teahouse" }
    ]
  },
  {
    k: "塩", meaning: "salt", on: ["エン"], kun: ["しお"], group: "rs-cooking", strokes: 13, radical: "土",
    mnemonic: "Earth 土 on the left, and on the right a person bent over a dish 皿: scraping salt from the ground into a bowl.",
    notes: [
      "塩ラーメン (しおラーメン) is the clear, light ramen. At yakitori places you choose たれ (sweet sauce) or 塩 (salt).",
      "Read えん in compounds: 塩分 (えんぶん, salt content) on nutrition labels and 食塩 (しょくえん, table salt).",
      "The bottom of the right side is the dish 皿."
    ],
    lookalikes: [],
    examples: [
      { w: "塩ラーメン", r: "しおラーメン", m: "salt-flavoured ramen" },
      { w: "塩味", r: "しおあじ", m: "salt flavour" },
      { w: "塩分", r: "えんぶん", m: "salt content" }
    ]
  },
  {
    k: "油", meaning: "oil", on: ["ユ"], kun: ["あぶら"], group: "rs-cooking", strokes: 8, radical: "氵",
    mnemonic: "Liquid 氵 seeping out of a field 由 of crushed seeds: oil.",
    notes: [
      "ラー油 (ラーゆ), chilli oil, sits on the table in ramen and gyoza shops. Soy sauce, しょうゆ, also ends in this kanji.",
      "油揚げ (あぶらあげ) are fried tofu pouches, the sweet ones on きつねうどん and in いなり寿司.",
      "Take away the water 氵 and it is 由 (reason), as in 自由 (じゆう, free)."
    ],
    lookalikes: ["由"],
    examples: [
      { w: "油揚げ", r: "あぶらあげ", m: "fried tofu pouch" },
      { w: "ラー油", r: "ラーゆ", m: "chilli oil" },
      { w: "石油", r: "せきゆ", m: "oil, kerosene" }
    ]
  },
  {
    k: "冷", meaning: "cold, chill", on: ["レイ"], kun: ["つめ.たい", "ひ.える", "ひ.やす"], group: "rs-cooking", strokes: 7, radical: "冫",
    mnemonic: "Ice 冫 on the left and an order 令 on the right: 'serve it chilled!'",
    notes: [
      "お冷 (おひや) is the free glass of water restaurants bring: お冷ください asks for water.",
      "On menus 冷やし (ひやし) marks the cold summer version: ひやしちゅうか (cold ramen noodles), 冷やしうどん.",
      "冷たい (つめたい) is cold to the touch, like drinks; cold weather is さむい instead."
    ],
    lookalikes: ["次"],
    examples: [
      { w: "お冷", r: "おひや", m: "glass of cold water" },
      { w: "冷たい", r: "つめたい", m: "cold (to the touch)" },
      { w: "冷麺", r: "れいめん", m: "cold noodles" }
    ]
  },
  {
    k: "氷", meaning: "ice", on: ["ヒョウ"], kun: ["こおり"], group: "rs-cooking", strokes: 5, radical: "水",
    mnemonic: "Water 水 with one extra drop 丶 frozen on its shoulder: ice.",
    notes: [
      "In summer a flag with a big 氷 outside a shop means かき氷 (かきごおり), shaved ice with syrup.",
      "こおり becomes ごおり after another word. At drink counters you can ask for 氷なし (こおりなし, no ice).",
      "Only the extra dot 丶 tells it apart from 水 (water)."
    ],
    lookalikes: ["水"],
    examples: [
      { w: "かき氷", r: "かきごおり", m: "shaved ice" },
      { w: "氷水", r: "こおりみず", m: "ice water" },
      { w: "氷山", r: "ひょうざん", m: "iceberg" }
    ]
  },
  {
    k: "文", meaning: "writing, sentence", on: ["ブン", "モン"], kun: [], group: "rs-ordering", strokes: 4, radical: "文",
    mnemonic: "A figure in a hat 亠 with a pattern crossed 乂 on its chest: marks that turned into writing.",
    notes: [
      "In restaurants it is the 注文 (ちゅうもん), the order: staff ask ご注文はお決まりですか? (Are you ready to order?).",
      "Read もん in 注文 but ぶん in most other words: 文化 (ぶんか, culture), 文学 (ぶんがく).",
      "Don't confuse it with 父 (father), which has two short strokes on top instead of the dot and line."
    ],
    lookalikes: ["父"],
    examples: [
      { w: "注文", r: "ちゅうもん", m: "order" },
      { w: "文化", r: "ぶんか", m: "culture" },
      { w: "文学", r: "ぶんがく", m: "literature" }
    ]
  },
  {
    k: "杯", meaning: "cup, glass (counter)", on: ["ハイ"], kun: [], group: "rs-ordering", strokes: 8, radical: "木",
    mnemonic: "A wooden 木 cup turned upside down, not 不 a drop left in it: time to order another glass.",
    notes: [
      "The counter for glasses, cups and bowls: 一杯 (いっぱい), 二杯 (にはい), 三杯 (さんばい), 何杯 (なんばい).",
      "かんぱい (cheers!) is written with this kanji too. いっぱい also means 'full' or 'a lot', usually in kana.",
      "Reading changes with the number: はい, ばい or ぱい, like the counter 本."
    ],
    lookalikes: [],
    examples: [
      { w: "一杯", r: "いっぱい", m: "one glass, one bowl" },
      { w: "二杯", r: "にはい", m: "two glasses, two bowls" },
      { w: "何杯", r: "なんばい", m: "how many glasses" }
    ]
  },
  {
    k: "箸", meaning: "chopsticks", on: ["チョ"], kun: ["はし"], group: "rs-ordering", strokes: 15, radical: "竹",
    mnemonic: "Bamboo 竹 on top and a person 者 below: the bamboo sticks a person eats with.",
    notes: [
      "Usually said politely as お箸 (おはし). At a konbini you'll hear お箸はご利用ですか? (Do you need chopsticks?).",
      "割り箸 (わりばし) are the disposable ones you split apart; 菜箸 (さいばし) are long cooking chopsticks.",
      "Same sound as はし (bridge) but a different pitch."
    ],
    lookalikes: ["煮"],
    examples: [
      { w: "お箸", r: "おはし", m: "chopsticks" },
      { w: "割り箸", r: "わりばし", m: "disposable chopsticks" },
      { w: "菜箸", r: "さいばし", m: "cooking chopsticks" }
    ]
  },
  {
    k: "喫", meaning: "smoke, consume", on: ["キツ"], kun: [], group: "rs-ordering", strokes: 12, radical: "口",
    mnemonic: "A mouth 口 beside a carved tally 契: puffing on a pipe while the notches add up.",
    notes: [
      "Mostly seen in 喫煙 (きつえん, smoking): 喫煙席 (smoking seats), 喫煙所 (きつえんじょ, smoking area). Its opposite on signs is 禁煙 (きんえん).",
      "喫茶店 (きっさてん) is an old-style coffee shop; here きつ shortens to きっ.",
      "Indoor smoking is now banned in most restaurants, so smokers are sent to a 喫煙室 (きつえんしつ, smoking room) or an outdoor 喫煙所."
    ],
    lookalikes: [],
    examples: [
      { w: "喫煙", r: "きつえん", m: "smoking" },
      { w: "喫茶店", r: "きっさてん", m: "coffee shop" },
      { w: "喫煙所", r: "きつえんじょ", m: "smoking area" }
    ]
  },
  {
    k: "個", meaning: "piece, individual", on: ["コ"], kun: [], group: "rs-ordering", strokes: 10, radical: "亻",
    mnemonic: "A person 亻 standing firm 固 on their own: one individual, one piece.",
    notes: [
      "The general counter for small things: 一個, 二個 (にこ), 三個 (さんこ), as in 唐揚げ5個 on a menu.",
      "個室 (こしつ), a private room, is a big selling point on izakaya signs: 個室あり.",
      "Shortens to いっ, ろっ, はっ, じゅっ before it: 一個 (いっこ), 八個 (はっこ), 十個 (じゅっこ)."
    ],
    lookalikes: [],
    examples: [
      { w: "個室", r: "こしつ", m: "private room" },
      { w: "一個", r: "いっこ", m: "one (piece)" },
      { w: "個人", r: "こじん", m: "individual, personal" }
    ]
  },
  {
    k: "盛", meaning: "heap up, serve", on: ["セイ"], kun: ["も.る", "さか.ん"], group: "rs-ordering", strokes: 11, radical: "皿",
    mnemonic: "A dish 皿 with a finished 成 mountain of food on top: a heaped-up serving.",
    notes: [
      "Bowl and ramen shops sell sizes: 小盛り (こもり), regular, 大盛り (おおもり) and 特盛 (とくもり). 大盛り無料 means a large one at no extra cost.",
      "盛り合わせ (もりあわせ) is an assorted platter, such as 焼き鳥 or sashimi.",
      "盛ん (さかん) means thriving, popular."
    ],
    lookalikes: [],
    examples: [
      { w: "大盛り", r: "おおもり", m: "large serving" },
      { w: "盛り合わせ", r: "もりあわせ", m: "assorted platter" },
      { w: "特盛", r: "とくもり", m: "extra-large serving" }
    ]
  },
  {
    k: "放", meaning: "release, let go", on: ["ホウ"], kun: ["はな.す", "はな.つ"], group: "rs-ordering", strokes: 8, radical: "攵",
    mnemonic: "A direction 方 and a hand with a stick 攵: shooing the animals off every which way, set free.",
    notes: [
      "Restaurant key words: 食べ放題 (たべほうだい, all you can eat) and 飲み放題 (のみほうだい, all you can drink), usually with a time limit like 90分.",
      "放送 (ほうそう) is broadcasting, and the announcements in stations and shops.",
      "放す (はなす, to let go) sounds the same as 話す (はなす, to speak)."
    ],
    lookalikes: [],
    examples: [
      { w: "食べ放題", r: "たべほうだい", m: "all you can eat" },
      { w: "飲み放題", r: "のみほうだい", m: "all you can drink" },
      { w: "放送", r: "ほうそう", m: "broadcast, announcement" }
    ]
  },
  {
    k: "題", meaning: "topic, title", on: ["ダイ"], kun: [], group: "rs-ordering", strokes: 18, radical: "頁",
    mnemonic: "A head 頁 next to 'just so' 是: the heading at the top that says what it's all about.",
    notes: [
      "On restaurant signs it ends 食べ放題 and 飲み放題; ほうだい means 'as much as you like'.",
      "問題 (もんだい) is a problem or question: 問題ないです means 'no problem'.",
      "Always read だい. With 18 strokes, the head 頁 on the right takes 9 of them."
    ],
    lookalikes: [],
    examples: [
      { w: "問題", r: "もんだい", m: "problem, question" },
      { w: "話題", r: "わだい", m: "topic" },
      { w: "飲み放題", r: "のみほうだい", m: "all you can drink" }
    ]
  },
  {
    k: "別", meaning: "separate, another", on: ["ベツ"], kun: ["わか.れる"], group: "rs-ordering", strokes: 7, radical: "刂",
    mnemonic: "A chunk on the left being cut away by the knife 刂: pieces set apart.",
    notes: [
      "To split the bill, ask for 別会計 (べつかいけい, separate bills), or say べつべつでお願いします.",
      "On menus 税別 (ぜいべつ) means tax not included, the opposite of 税込 (ぜいこみ).",
      "特別 (とくべつ, special) is on limited menus and seasonal offers."
    ],
    lookalikes: [],
    examples: [
      { w: "別会計", r: "べつかいけい", m: "separate bills" },
      { w: "税別", r: "ぜいべつ", m: "before tax" },
      { w: "特別", r: "とくべつ", m: "special" }
    ]
  },
  {
    k: "持", meaning: "hold, have, carry", on: ["ジ"], kun: ["も.つ"], group: "rs-ordering", strokes: 9, radical: "扌",
    mnemonic: "A hand 扌 holding on to the temple 寺 bell: hold it and don't let go.",
    notes: [
      "お持ち帰り (おもちかえり) is takeout: counter staff ask 店内ですか、お持ち帰りですか? (eat in or take away?).",
      "持って (もって) keeps the small っ: 持っていく (to take along), 持っています (to have).",
      "Don't confuse it with 待 (wait), which has a 'going' radical in place of the hand 扌, or 特 (special) with a cow 牛."
    ],
    lookalikes: ["待", "特"],
    examples: [
      { w: "お持ち帰り", r: "おもちかえり", m: "takeout" },
      { w: "持つ", r: "もつ", m: "to hold, have" },
      { w: "気持ち", r: "きもち", m: "feeling" }
    ]
  },
  {
    k: "帰", meaning: "return home", on: ["キ"], kun: ["かえ.る", "かえ.す"], group: "rs-ordering", strokes: 10, radical: "巾",
    mnemonic: "A blade 刂 propped beside a broom 帚: sweeping up and heading back home.",
    notes: [
      "In shops and restaurants: お持ち帰り (おもちかえり), takeout. テイクアウト is also common on signs.",
      "帰る looks like an -eru ichidan verb but is godan: 帰ります, 帰らない, 帰って.",
      "日帰り (ひがえり) is a day trip; かえり becomes がえり after another word."
    ],
    lookalikes: [],
    examples: [
      { w: "帰る", r: "かえる", m: "to go home" },
      { w: "お持ち帰り", r: "おもちかえり", m: "takeout" },
      { w: "日帰り", r: "ひがえり", m: "day trip" }
    ]
  },
  /* ========== Weather & news ========== */
  {
    k: "曇", meaning: "cloudy", on: ["ドン"], kun: ["くも.る"], group: "wx-forecast", strokes: 16, radical: "日",
    mnemonic: "The sun 日 sitting on top of a cloud 雲, hidden behind it: the sky has clouded over.",
    notes: [
      "曇り (くもり, cloudy) is the grey cloud symbol on forecasts; 曇りのち晴れ means cloudy, clearing later.",
      "Kun くもる in daily life; the on どん is mostly in 曇天 (どんてん, overcast sky).",
      "Glasses that steam up also 曇る: メガネが曇る (my glasses fog up)."
    ],
    lookalikes: ["雲", "晴"],
    examples: [
      { w: "曇り", r: "くもり", m: "cloudy (weather)" },
      { w: "曇る", r: "くもる", m: "to cloud over, fog up" },
      { w: "曇り空", r: "くもりぞら", m: "cloudy sky" }
    ]
  },
  {
    k: "度", meaning: "degree, times", on: ["ド"], kun: ["たび"], group: "wx-forecast", strokes: 9, radical: "广",
    mnemonic: "Under a lean-to roof 广 hangs a thermometer, and a hand points at each mark on the scale: degrees, and how many times.",
    notes: [
      "Temperatures are read with 度: 30度 is さんじゅうど, and 何度 (なんど) asks 'how many degrees?' or 'how many times?'.",
      "As a counter for times: 一度 (いちど, once), もう一度 (もういちど, once more), 今度 (こんど, next time).",
      "Weather apps show 温度 (おんど, temperature) and 湿度 (しつど, humidity)."
    ],
    lookalikes: ["席"],
    examples: [
      { w: "温度", r: "おんど", m: "temperature" },
      { w: "今度", r: "こんど", m: "next time; this time" },
      { w: "もう一度", r: "もういちど", m: "once more" }
    ]
  },
  {
    k: "最", meaning: "most", on: ["サイ"], kun: ["もっと.も"], group: "wx-forecast", strokes: 12, radical: "曰",
    mnemonic: "The sun 日 over a hand that takes 取 the biggest prize: the very most, the best of all.",
    notes: [
      "Forecasts give 最高気温 (さいこうきおん, the high) in red and 最低気温 (さいていきおん, the low) in blue.",
      "最高 (さいこう) also means 'the best!' and 最低 (さいてい) 'the worst!' in everyday speech.",
      "最初 (さいしょ, first) and 最後 (さいご, last) are everyday words; station boards mark the last train 最終 (さいしゅう)."
    ],
    lookalikes: [],
    examples: [
      { w: "最高", r: "さいこう", m: "highest; the best" },
      { w: "最初", r: "さいしょ", m: "first, the beginning" },
      { w: "最後", r: "さいご", m: "last, the end" }
    ]
  },
  {
    k: "低", meaning: "low", on: ["テイ"], kun: ["ひく.い"], group: "wx-forecast", strokes: 7, radical: "亻",
    mnemonic: "A person 亻 crouching beside a short wall to touch the mark at its very foot: low.",
    notes: [
      "最低気温 (さいていきおん) is the day's low on the forecast, usually shown in blue.",
      "ひくい is low in height, temperature, price or voice; its opposite is 高い (たかい).",
      "On てい in compounds: 低温 (ていおん, low temperature), as on chilled food labels, and 最低 (さいてい, the lowest)."
    ],
    lookalikes: [],
    examples: [
      { w: "低い", r: "ひくい", m: "low" },
      { w: "最低", r: "さいてい", m: "lowest; the worst" },
      { w: "低温", r: "ていおん", m: "low temperature" }
    ]
  },
  {
    k: "報", meaning: "report, news", on: ["ホウ"], kun: [], group: "wx-forecast", strokes: 12, radical: "土",
    mnemonic: "Good fortune 幸 on the left, a kneeling messenger on the right, out of breath with the news to report.",
    notes: [
      "天気予報 (てんきよほう) is the weather forecast; 予報 alone means forecast.",
      "Weather alerts come in steps: 注意報 (ちゅういほう, advisory), then 警報 (けいほう, warning).",
      "Almost always read ほう; the kun むくいる (to repay) is literary."
    ],
    lookalikes: [],
    examples: [
      { w: "天気予報", r: "てんきよほう", m: "weather forecast" },
      { w: "警報", r: "けいほう", m: "warning, alert" },
      { w: "注意報", r: "ちゅういほう", m: "advisory (weather)" }
    ]
  },
  {
    k: "確", meaning: "certain, confirm", on: ["カク"], kun: ["たし.か", "たし.かめる"], group: "wx-forecast", strokes: 15, radical: "石",
    mnemonic: "A stone 石 beside a bird perched firmly under its roof 寉: as solid as rock, you can be sure of it.",
    notes: [
      "降水確率 (こうすいかくりつ) is the chance of rain, given in steps of 10% on every forecast.",
      "確認 (かくにん, check, confirm) is all over forms, apps and station announcements.",
      "たしか alone means 'if I remember rightly'; たしかめる is to make sure."
    ],
    lookalikes: [],
    examples: [
      { w: "確認", r: "かくにん", m: "check, confirmation" },
      { w: "確か", r: "たしか", m: "certain; if I recall" },
      { w: "確かめる", r: "たしかめる", m: "to make sure, check" }
    ]
  },
  {
    k: "率", meaning: "rate, ratio", on: ["リツ", "ソツ"], kun: [], group: "wx-forecast", strokes: 11, radical: "玄",
    mnemonic: "A twisted thread 玄 spinning in the middle, drops 冫 flying off both sides and a cross 十 below: it turns at a steady rate.",
    notes: [
      "降水確率 (こうすいかくりつ) of 30% means a 3 in 10 chance of rain where you are.",
      "As 'rate' it is りつ: 確率 (かくりつ, probability), 税率 (ぜいりつ, tax rate) on receipts. そつ appears in 引率 (いんそつ, leading a group).",
      "The drops go on both sides of the middle, and the bottom is a plain 十."
    ],
    lookalikes: [],
    examples: [
      { w: "確率", r: "かくりつ", m: "probability, chance" },
      { w: "降水確率", r: "こうすいかくりつ", m: "chance of rain" },
      { w: "税率", r: "ぜいりつ", m: "tax rate" }
    ]
  },
  {
    k: "湿", meaning: "damp, humid", on: ["シツ"], kun: ["しめ.る"], group: "wx-forecast", strokes: 12, radical: "氵",
    mnemonic: "Water 氵 beside the sun 日 hanging over dripping grass: the air is damp and sticky.",
    notes: [
      "湿度 (しつど, humidity) is shown as a percent on weather apps; summer days often pass 80%.",
      "湿気 (しっけ) is that heavy, damp feeling, and the reason futons get aired on sunny days.",
      "Looks like 温 (warm): both have water and 日, but 湿 has dripping grass below instead of a dish."
    ],
    lookalikes: ["温"],
    examples: [
      { w: "湿度", r: "しつど", m: "humidity" },
      { w: "湿気", r: "しっけ", m: "humidity, damp" },
      { w: "湿る", r: "しめる", m: "to get damp" }
    ]
  },
  {
    k: "霧", meaning: "fog, mist", on: ["ム"], kun: ["きり"], group: "wx-forecast", strokes: 19, radical: "雨",
    mnemonic: "Rain 雨 hanging so thick over someone at work 務 that they can't see their own hands: fog.",
    notes: [
      "Usually read きり. 霧雨 (きりさめ) is fine drizzle: 雨 turns into さめ.",
      "Fog closes expressways and delays flights and ferries; listen for 霧 in morning traffic news.",
      "Nineteen strokes: 雨 on top, 務 (as in 勤務) below."
    ],
    lookalikes: ["雷"],
    examples: [
      { w: "霧", r: "きり", m: "fog, mist" },
      { w: "霧雨", r: "きりさめ", m: "drizzle" },
      { w: "霧が出る", r: "きりがでる", m: "fog rolls in" }
    ]
  },
  {
    k: "雷", meaning: "thunder, lightning", on: ["ライ"], kun: ["かみなり"], group: "wx-forecast", strokes: 13, radical: "雨",
    mnemonic: "Rain 雨 pouring onto a rice field 田, then a flash and a bang overhead: thunder.",
    notes: [
      "雷注意報 (かみなりちゅういほう) is the thunder advisory issued on hot summer afternoons.",
      "Alone it is かみなり; on らい in compounds like 雷雨 (らいう, thunderstorm).",
      "Don't confuse it with 電 (electricity), whose 田 has a hooked tail."
    ],
    lookalikes: ["電", "雪"],
    examples: [
      { w: "雷", r: "かみなり", m: "thunder, lightning" },
      { w: "雷雨", r: "らいう", m: "thunderstorm" },
      { w: "雷注意報", r: "かみなりちゅういほう", m: "thunder advisory" }
    ]
  },
  {
    k: "象", meaning: "elephant, phenomenon", on: ["ショウ", "ゾウ"], kun: [], group: "wx-forecast", strokes: 12, radical: "豕",
    mnemonic: "An elephant drawn standing on end: the head and trunk at the top, a big round body, and four legs and a tail below.",
    notes: [
      "気象 (きしょう, weather, meteorology) is the word behind official forecasts and warnings on TV.",
      "ぞう is the animal at the zoo; しょう means image or phenomenon: 印象 (いんしょう, impression), 現象 (げんしょう, phenomenon)."
    ],
    lookalikes: [],
    examples: [
      { w: "象", r: "ぞう", m: "elephant" },
      { w: "気象", r: "きしょう", m: "weather, meteorology" },
      { w: "印象", r: "いんしょう", m: "impression" }
    ]
  },
  {
    k: "暑", meaning: "hot (weather)", on: ["ショ"], kun: ["あつ.い"], group: "wx-seasons", strokes: 12, radical: "日",
    mnemonic: "The sun 日 beating down on a person 者 out in the street: hot weather.",
    notes: [
      "暑い (あつい) is for hot weather or a hot room; a hot object or drink is 熱い, also read あつい.",
      "暑いですね (あついですね, hot, isn't it?) is the standard summer greeting.",
      "残暑 (ざんしょ) is the heat that lingers into September; 暑さ (あつさ) is the heat itself."
    ],
    lookalikes: ["者"],
    examples: [
      { w: "暑い", r: "あつい", m: "hot (weather)" },
      { w: "暑さ", r: "あつさ", m: "the heat" },
      { w: "残暑", r: "ざんしょ", m: "lingering summer heat" }
    ]
  },
  {
    k: "寒", meaning: "cold (weather)", on: ["カン"], kun: ["さむ.い"], group: "wx-seasons", strokes: 12, radical: "宀",
    mnemonic: "Under a roof 宀, logs stacked high for the fire and two icy drops on the floor: so cold that water freezes indoors.",
    notes: [
      "寒い (さむい) is for cold weather or a cold room; cold to the touch is 冷たい (つめたい).",
      "Winter forecasts warn of 寒波 (かんぱ, a cold wave) bringing snow to the Sea of Japan side.",
      "Opposite of 暑い (あつい, hot): both have twelve strokes."
    ],
    lookalikes: [],
    examples: [
      { w: "寒い", r: "さむい", m: "cold (weather)" },
      { w: "寒さ", r: "さむさ", m: "the cold" },
      { w: "寒波", r: "かんぱ", m: "cold wave" }
    ]
  },
  {
    k: "暖", meaning: "warm", on: ["ダン"], kun: ["あたた.か", "あたた.かい"], group: "wx-seasons", strokes: 13, radical: "日",
    mnemonic: "The sun 日 beside a hand reaching down to pull someone up out of the cold 爰: warm.",
    notes: [
      "暖かい (あたたかい) is for warm weather or rooms; warm food and water use 温かい, read the same.",
      "On the air-con remote, heating is だんぼう, written with 暖; cooling is れいぼう.",
      "暖冬 (だんとう) is a mild winter, a word forecasters use when snow is scarce."
    ],
    lookalikes: [],
    examples: [
      { w: "暖かい", r: "あたたかい", m: "warm" },
      { w: "暖冬", r: "だんとう", m: "mild winter" },
      { w: "温暖", r: "おんだん", m: "warm, mild (climate)" }
    ]
  },
  {
    k: "涼", meaning: "cool", on: ["リョウ"], kun: ["すず.しい", "すず.む"], group: "wx-seasons", strokes: 11, radical: "氵",
    mnemonic: "Water 氵 beside the capital 京: a breeze off the river cooling the city on a summer evening.",
    notes: [
      "涼しい (すずしい) is pleasantly cool, like an autumn evening; unpleasantly cold is 寒い (さむい).",
      "涼む (すずむ) is to cool off in the shade or by a river on a hot day.",
      "The right side is 京, the きょう of 東京."
    ],
    lookalikes: ["京"],
    examples: [
      { w: "涼しい", r: "すずしい", m: "cool (pleasantly)" },
      { w: "涼しさ", r: "すずしさ", m: "coolness" },
      { w: "涼む", r: "すずむ", m: "to cool off" }
    ]
  },
  {
    k: "季", meaning: "season", on: ["キ"], kun: [], group: "wx-seasons", strokes: 8, radical: "子",
    mnemonic: "A rice plant 禾 above a child 子: every harvest season the child grows a little taller.",
    notes: [
      "季節 (きせつ, season); Japan is proud of its four seasons, 四季 (しき).",
      "Shop signs say 夏季休業 (かききゅうぎょう, closed for the summer holidays).",
      "Cafes and konbini push seasonal items: look for 季節 on menus and posters."
    ],
    lookalikes: [],
    examples: [
      { w: "季節", r: "きせつ", m: "season" },
      { w: "四季", r: "しき", m: "the four seasons" },
      { w: "夏季", r: "かき", m: "summer (period)" }
    ]
  },
  {
    k: "節", meaning: "season, joint, section", on: ["セツ"], kun: ["ふし"], group: "wx-seasons", strokes: 13, radical: "竹",
    mnemonic: "Bamboo 竹 over 即: a bamboo stalk split into sections at each joint, the way the year splits into seasons.",
    notes: [
      "節分 (せつぶん, 3 February) marks the end of winter: people throw roasted beans, 豆まき (まめまき), to drive out demons.",
      "節約 (せつやく) is saving money or energy; summer posters ask for 節電 (せつでん, saving electricity).",
      "Kun ふし is a joint or knot, like the rings on a bamboo stalk."
    ],
    lookalikes: [],
    examples: [
      { w: "季節", r: "きせつ", m: "season" },
      { w: "節分", r: "せつぶん", m: "bean-throwing day (3 Feb)" },
      { w: "節約", r: "せつやく", m: "saving, economising" }
    ]
  },
  {
    k: "候", meaning: "weather, climate", on: ["コウ"], kun: [], group: "wx-seasons", strokes: 10, radical: "亻",
    mnemonic: "A person 亻 standing by a post with a sharp eye on the sky, waiting to see what the weather will do.",
    notes: [
      "天候 (てんこう) is the formal word for weather, heard on the news and at airports when flights are delayed.",
      "気候 (きこう) is climate: the weather of a place over the whole year.",
      "The thin vertical stroke between 亻 and the right side is easy to forget."
    ],
    lookalikes: [],
    examples: [
      { w: "天候", r: "てんこう", m: "weather (formal)" },
      { w: "気候", r: "きこう", m: "climate" },
      { w: "時候", r: "じこう", m: "the season, time of year" }
    ]
  },
  {
    k: "梅", meaning: "plum", on: ["バイ"], kun: ["うめ"], group: "wx-seasons", strokes: 10, radical: "木",
    mnemonic: "A tree 木 that blooms every 毎 year before all the others: the plum, the first flowers of late winter.",
    notes: [
      "梅雨 (つゆ, the rainy season) is an irregular reading: the plum-ripening rains of June and early July. Forecasters also say ばいう.",
      "梅の花 (うめのはな) bloom in February, before the cherry blossoms; rice balls with a sour pickled plum say 梅 on the label.",
      "The right side is 毎 (every), as in 毎日; compare 海 (sea), which has water on the left."
    ],
    lookalikes: ["毎", "海"],
    examples: [
      { w: "梅", r: "うめ", m: "plum, Japanese apricot" },
      { w: "梅雨", r: "つゆ", m: "the rainy season" },
      { w: "梅酒", r: "うめしゅ", m: "plum liqueur" }
    ]
  },
  {
    k: "紫", meaning: "purple", on: ["シ"], kun: ["むらさき"], group: "wx-seasons", strokes: 12, radical: "糸",
    mnemonic: "Thread 糸 under 此, dyed in the rarest, most noble colour of old Japan: purple.",
    notes: [
      "紫外線 (しがいせん, UV rays) is on UV forecasts and sunscreen bottles; it is already strong by May.",
      "Alone it is むらさき (purple); in compounds it is し.",
      "Sushi chefs sometimes call soy sauce むらさき."
    ],
    lookalikes: [],
    examples: [
      { w: "紫", r: "むらさき", m: "purple" },
      { w: "紫外線", r: "しがいせん", m: "ultraviolet rays" },
      { w: "紫いも", r: "むらさきいも", m: "purple sweet potato" }
    ]
  },
  {
    k: "粉", meaning: "powder, flour", on: ["フン"], kun: ["こな", "こ"], group: "wx-seasons", strokes: 10, radical: "米",
    mnemonic: "Rice 米 divided 分 into tinier and tinier bits: powder, flour.",
    notes: [
      "花粉 (かふん, pollen) dominates spring news: forecasts rate the day's pollen and 花粉症 (かふんしょう) is hay fever.",
      "Alone it is こな; it becomes こ in words like 米粉 (こめこ, rice flour) and パン粉 (パンこ, breadcrumbs).",
      "Clinics may give 粉薬 (こなぐすり, powdered medicine) instead of tablets."
    ],
    lookalikes: ["料"],
    examples: [
      { w: "花粉", r: "かふん", m: "pollen" },
      { w: "花粉症", r: "かふんしょう", m: "hay fever" },
      { w: "粉薬", r: "こなぐすり", m: "powdered medicine" }
    ]
  },
  {
    k: "症", meaning: "symptom, illness", on: ["ショウ"], kun: [], group: "wx-seasons", strokes: 10, radical: "疒",
    mnemonic: "A sickbed 疒 with 正 (correct) inside: the doctor writes down exactly what is wrong, the symptoms.",
    notes: [
      "熱中症 (ねっちゅうしょう, heatstroke): summer alerts tell you to drink water, rest in the shade and use the air-con.",
      "花粉症 (かふんしょう, hay fever) is why so many people wear masks in March.",
      "It shares the sickbed 疒 with 病 (illness) and 痛 (pain)."
    ],
    lookalikes: ["病", "痛"],
    examples: [
      { w: "熱中症", r: "ねっちゅうしょう", m: "heatstroke" },
      { w: "花粉症", r: "かふんしょう", m: "hay fever" },
      { w: "発症", r: "はっしょう", m: "onset (of an illness)" }
    ]
  },
  {
    k: "警", meaning: "warn, police", on: ["ケイ"], kun: [], group: "wx-disaster", strokes: 19, radical: "言",
    mnemonic: "Respect 敬 sitting over words 言: words you must respect, a warning, and the police who give it.",
    notes: [
      "警報 (けいほう, warning) is a step above 注意報 (ちゅういほう, advisory); a 大雨警報 often closes schools.",
      "The top level is 特別警報 (とくべつけいほう, emergency warning): act now to save your life.",
      "警察 (けいさつ) is the police; dial 110."
    ],
    lookalikes: [],
    examples: [
      { w: "警報", r: "けいほう", m: "warning, alert" },
      { w: "警察", r: "けいさつ", m: "police" },
      { w: "大雨警報", r: "おおあめけいほう", m: "heavy rain warning" }
    ]
  },
  {
    k: "震", meaning: "quake, tremble", on: ["シン"], kun: ["ふる.える"], group: "wx-disaster", strokes: 15, radical: "雨",
    mnemonic: "Rain 雨 above 辰, the dragon of the old calendar, stirring underground: the earth shakes.",
    notes: [
      "地震 (じしん, earthquake): phones blare an alarm seconds before strong shaking, so get under a table and hold on.",
      "The news reports 震度 (しんど), the shaking at each place on Japan's 0 to 7 scale; 5 and up is serious.",
      "ふるえる is to shiver or tremble: 寒くて震える (I'm shivering with cold)."
    ],
    lookalikes: ["雷"],
    examples: [
      { w: "地震", r: "じしん", m: "earthquake" },
      { w: "震度", r: "しんど", m: "seismic intensity" },
      { w: "震える", r: "ふるえる", m: "to shiver, tremble" }
    ]
  },
  {
    k: "災", meaning: "disaster", on: ["サイ"], kun: ["わざわ.い"], group: "wx-disaster", strokes: 7, radical: "火",
    mnemonic: "A flooding river 巛 above a fire 火: flood and fire, the two oldest disasters.",
    notes: [
      "災害 (さいがい, disaster) is the word on emergency notices; ぼうさい (disaster preparedness) kits and drills are written with 災.",
      "火災 (かさい) is the formal word for a fire, used on alarms and in building announcements.",
      "震災 (しんさい, earthquake disaster) refers to big quakes such as the one in March 2011."
    ],
    lookalikes: [],
    examples: [
      { w: "災害", r: "さいがい", m: "disaster" },
      { w: "火災", r: "かさい", m: "fire (formal)" },
      { w: "震災", r: "しんさい", m: "earthquake disaster" }
    ]
  },
  {
    k: "害", meaning: "harm, damage", on: ["ガイ"], kun: [], group: "wx-disaster", strokes: 10, radical: "宀",
    mnemonic: "Under a roof 宀, a stack of sharp lines slicing down into a mouth 口: harm and damage.",
    notes: [
      "災害 (さいがい, disaster) is a news staple after typhoons, floods and quakes.",
      "Bug sprays say 害虫 (がいちゅう, pest insects); 無害 (むがい) on a label means harmless.",
      "Don't confuse it with 割 (as in 割引), which adds a knife on the right."
    ],
    lookalikes: ["割"],
    examples: [
      { w: "災害", r: "さいがい", m: "disaster" },
      { w: "害虫", r: "がいちゅう", m: "pest insect" },
      { w: "無害", r: "むがい", m: "harmless" }
    ]
  },
  {
    k: "避", meaning: "avoid, evade", on: ["ヒ"], kun: ["さ.ける", "よ.ける"], group: "wx-disaster", strokes: 16, radical: "辶",
    mnemonic: "Running down the road 辶 away from 辟, a harsh punishment: get out of the way and avoid it.",
    notes: [
      "避難 (ひなん, evacuation): signs mark the local 避難所 (ひなんじょ, shelter) and 避難場所 (ひなんばしょ, evacuation area).",
      "さける is to avoid (a person, a time, a topic); よける is to dodge something physical, like a bike or a puddle.",
      "Check the nearest 避難場所 sign before an emergency; schools and parks are common ones."
    ],
    lookalikes: [],
    examples: [
      { w: "避難", r: "ひなん", m: "evacuation" },
      { w: "避ける", r: "さける", m: "to avoid" },
      { w: "避難所", r: "ひなんじょ", m: "evacuation shelter" }
    ]
  },
  {
    k: "難", meaning: "difficult, trouble", on: ["ナン"], kun: ["むずか.しい"], group: "wx-disaster", strokes: 18, radical: "隹",
    mnemonic: "A bird 隹 stuck in sticky clay on the left, flapping and flapping: getting free is difficult.",
    notes: [
      "難しい (むずかしい) is the everyday word for difficult.",
      "On なん it means trouble or danger: 避難 (ひなん) is fleeing from danger, evacuation, and 難問 (なんもん) is a tough question.",
      "The left side is the same as in 勤 (in 勤務)."
    ],
    lookalikes: ["勤"],
    examples: [
      { w: "難しい", r: "むずかしい", m: "difficult" },
      { w: "避難", r: "ひなん", m: "evacuation" },
      { w: "難問", r: "なんもん", m: "difficult problem" }
    ]
  },
  {
    k: "津", meaning: "harbour, port", on: ["シン"], kun: ["つ"], group: "wx-disaster", strokes: 9, radical: "氵",
    mnemonic: "Water 氵 beside a hand holding a brush 聿: the harbour master writing every boat into the logbook.",
    notes: [
      "津波 (つなみ, tsunami) is literally 'harbour wave'; English borrowed the word from Japanese.",
      "After a strong quake near the coast, head for high ground at once; 津波警報 (つなみけいほう) means evacuate.",
      "Read つ in place names, such as 大津 (おおつ) and 津 city in Mie."
    ],
    lookalikes: [],
    examples: [
      { w: "津波", r: "つなみ", m: "tsunami" },
      { w: "津波警報", r: "つなみけいほう", m: "tsunami warning" },
      { w: "津波注意報", r: "つなみちゅういほう", m: "tsunami advisory" }
    ]
  },
  {
    k: "波", meaning: "wave", on: ["ハ"], kun: ["なみ"], group: "wx-disaster", strokes: 8, radical: "氵",
    mnemonic: "Water 氵 next to skin 皮: the sea's skin rippling up into waves.",
    notes: [
      "Alone it is なみ; in compounds は or ぱ: 寒波 (かんぱ, cold wave), 電波 (でんぱ, radio waves).",
      "電波 is also your phone signal: 電波がない means no signal.",
      "Typhoon forecasts warn of 高波 (たかなみ, high waves); stay away from the shore."
    ],
    lookalikes: ["皮"],
    examples: [
      { w: "波", r: "なみ", m: "wave" },
      { w: "津波", r: "つなみ", m: "tsunami" },
      { w: "電波", r: "でんぱ", m: "radio waves; phone signal" }
    ]
  },
  /* ========== Work & office ========== */
  {
    k: "仕", meaning: "serve, do", on: ["シ"], kun: ["つか.える"], group: "wk-company", strokes: 5, radical: "亻",
    mnemonic: "A person 亻 standing beside a samurai 士: the loyal retainer who serves all day, the first office worker.",
    notes: [
      "Almost always met in 仕事 (しごと), work or a job. 仕事は何ですか asks what someone does for a living.",
      "仕方 (しかた) is a way of doing something; 仕方がない (しかたがない), 'it can't be helped', is a phrase you will hear at work every week.",
      "The right side is 士 with the long line on top; with the long line at the bottom it would be 土 (earth). Compare 住 (live), whose right side has a dot on top and three lines."
    ],
    lookalikes: ["住"],
    examples: [
      { w: "仕事", r: "しごと", m: "work, job" },
      { w: "仕方", r: "しかた", m: "way, method" },
      { w: "仕事中", r: "しごとちゅう", m: "at work, busy working" }
    ]
  },
  {
    k: "事", meaning: "thing, matter", on: ["ジ"], kun: ["こと"], group: "wk-company", strokes: 8, radical: "亅",
    mnemonic: "A mouth 口 on top and a hand ⺕ gripping a long hooked pole 亅 that runs right through: a clerk with a pen, getting things done.",
    notes: [
      "事務所 (じむしょ), office, is on the door of small firms, law offices and agencies; 事務 (じむ), office work, is a common job-ad category.",
      "The kun reading こと is voiced in 仕事 (しごと). 食事 (しょくじ) is a meal, and 大事 (だいじ) means important.",
      "The long vertical stroke goes through everything and is written last, with a hook at the bottom."
    ],
    lookalikes: [],
    examples: [
      { w: "仕事", r: "しごと", m: "work, job" },
      { w: "事務所", r: "じむしょ", m: "office" },
      { w: "食事", r: "しょくじ", m: "meal" }
    ]
  },
  {
    k: "社", meaning: "company, shrine", on: ["シャ"], kun: ["やしろ"], group: "wk-company", strokes: 7, radical: "礻",
    mnemonic: "An altar 礻 set on a mound of earth 土: the village shrine where people gathered, the first kind of company.",
    notes: [
      "会社 (かいしゃ) is a company and 会社員 (かいしゃいん) an office worker. People call their own workplace うちの会社.",
      "On business cards the top title is 社長 (しゃちょう), company president; 本社 (ほんしゃ) is head office.",
      "The older sense is shrine, still heard in the word for a Shinto shrine, じんじゃ, where しゃ is voiced to じゃ."
    ],
    lookalikes: ["礼"],
    examples: [
      { w: "会社", r: "かいしゃ", m: "company" },
      { w: "社長", r: "しゃちょう", m: "company president" },
      { w: "本社", r: "ほんしゃ", m: "head office" }
    ]
  },
  {
    k: "働", meaning: "work", on: ["ドウ"], kun: ["はたら.く"], group: "wk-company", strokes: 13, radical: "亻",
    mnemonic: "A person 亻 who keeps moving 動: someone always on the go is someone at work.",
    notes: [
      "はたらく is to work: 会社で働いています (はたらいています) is 'I work at a company'.",
      "Made in Japan rather than China; it has the on reading ドウ, but learners almost always meet the kun はたらく. 働き方 (はたらきかた), how people work, is a constant news topic.",
      "Without the person 亻 it is 動 (move), as on automatic doors: 自動ドア (じどうドア)."
    ],
    lookalikes: ["動"],
    examples: [
      { w: "働く", r: "はたらく", m: "to work" },
      { w: "働き方", r: "はたらきかた", m: "way of working" },
      { w: "働き者", r: "はたらきもの", m: "hard worker" }
    ]
  },
  {
    k: "勤", meaning: "work for, be employed", on: ["キン"], kun: ["つと.める"], group: "wk-company", strokes: 12, radical: "力",
    mnemonic: "A heavy, tightly packed load 菫 hauled with muscle 力: turning up and putting in your hours, day after day.",
    notes: [
      "通勤 (つうきん) is the commute and 出勤 (しゅっきん) arriving at work; job ads list 勤務地 (きんむち), place of work, and 勤務時間 (きんむじかん), working hours.",
      "会社に勤めています (つとめています) means 'I work for a company'. Note the particle に, where 働く takes で.",
      "Compare 動 (move): both end in 力, but 勤 has the 菫 load on the left."
    ],
    lookalikes: ["動", "難"],
    examples: [
      { w: "通勤", r: "つうきん", m: "commuting" },
      { w: "出勤", r: "しゅっきん", m: "going to work" },
      { w: "勤める", r: "つとめる", m: "to work for, be employed" }
    ]
  },
  {
    k: "務", meaning: "duty, task", on: ["ム"], kun: ["つと.める"], group: "wk-company", strokes: 11, radical: "力",
    mnemonic: "A spear 矛 on the left, and on the right a striking hand above a flexed arm: the guard on duty, doing the task he was given.",
    notes: [
      "事務 (じむ) is office or clerical work and 事務所 (じむしょ) an office; 勤務 (きんむ), duty or service, fills job ads.",
      "At a ward office, counters are named by section, such as the tax section 税務課 (ぜいむか).",
      "Also read つとめる, but for a role: 司会を務める (しかいをつとめる) is to act as MC. For holding a job, use 勤める."
    ],
    lookalikes: [],
    examples: [
      { w: "事務", r: "じむ", m: "office work" },
      { w: "事務所", r: "じむしょ", m: "office" },
      { w: "勤務", r: "きんむ", m: "duty, work" }
    ]
  },
  {
    k: "課", meaning: "section, lesson", on: ["カ"], kun: [], group: "wk-company", strokes: 15, radical: "言",
    mnemonic: "Words 言 that must bear fruit 果: the lesson you are set, and the office section that has to deliver results.",
    notes: [
      "In a company a 課 is a section inside a 部 (department): 課長 (かちょう), section chief, is one of the most common titles on business cards.",
      "City and ward offices are split into sections too, so you may be sent from one 課 counter to another.",
      "It also counts textbook lessons, and 課題 (かだい) is an assignment or an issue to solve. 放課後 (ほうかご) is after school."
    ],
    lookalikes: [],
    examples: [
      { w: "課長", r: "かちょう", m: "section chief" },
      { w: "課題", r: "かだい", m: "assignment, issue" },
      { w: "放課後", r: "ほうかご", m: "after school" }
    ]
  },
  {
    k: "部", meaning: "department, part", on: ["ブ"], kun: [], group: "wk-company", strokes: 11, radical: "阝",
    mnemonic: "On the left 咅, someone standing up to speak; on the right ⻏, a town: one speaker for every part of the town.",
    notes: [
      "In a company 部 is a department and 部長 (ぶちょう) its head, ranked above a 課長 (かちょう). 営業部 (えいぎょうぶ) is the sales department.",
      "At school 部 is a club: サッカー部 (サッカーぶ) is the football club.",
      "一部 (いちぶ) means 'a part' and also 'one copy' of a handout. ⻏ on the right means town, as in 都."
    ],
    lookalikes: ["都"],
    examples: [
      { w: "部長", r: "ぶちょう", m: "department head" },
      { w: "営業部", r: "えいぎょうぶ", m: "sales department" },
      { w: "一部", r: "いちぶ", m: "a part; one copy" }
    ]
  },
  {
    k: "給", meaning: "salary, supply", on: ["キュウ"], kun: [], group: "wk-company", strokes: 12, radical: "糸",
    mnemonic: "Threads 糸 joined together 合: tying the ends so the supply never runs out, like pay that arrives every month.",
    notes: [
      "給料 (きゅうりょう) is pay. Job ads show 時給 (じきゅう), hourly pay, for part-time work and 月給 (げっきゅう), monthly salary, for full-time posts.",
      "Payday, 給料日 (きゅうりょうび), is usually the 25th. 給食 (きゅうしょく) is school lunch.",
      "Don't confuse it with 絵 (picture): same thread radical 糸, but 会 on the right instead of 合."
    ],
    lookalikes: ["絵"],
    examples: [
      { w: "給料", r: "きゅうりょう", m: "pay, salary" },
      { w: "時給", r: "じきゅう", m: "hourly wage" },
      { w: "給食", r: "きゅうしょく", m: "school lunch" }
    ]
  },
  {
    k: "残", meaning: "remain, leftover", on: ["ザン"], kun: ["のこ.る", "のこ.す"], group: "wk-company", strokes: 10, radical: "歹",
    mnemonic: "Bare bones 歹 beside two clashing halberds 戋: after the battle, only what remains is left on the field.",
    notes: [
      "残業 (ざんぎょう) is overtime. Many companies have a ノー残業デー, a weekly day when everyone goes home on time.",
      "Ticket machines and convenience store tills show 残高 (ざんだか), the balance left on your IC card.",
      "残りわずか (のこりわずか), 'only a few left', is a common shop sign; 残す (のこす) is to leave food or leave something behind."
    ],
    lookalikes: [],
    examples: [
      { w: "残業", r: "ざんぎょう", m: "overtime work" },
      { w: "残高", r: "ざんだか", m: "balance (remaining)" },
      { w: "残る", r: "のこる", m: "to remain, stay behind" }
    ]
  },
  {
    k: "退", meaning: "retreat, leave", on: ["タイ"], kun: ["しりぞ.く"], group: "wk-company", strokes: 9, radical: "辶",
    mnemonic: "A stubborn figure 艮 on the road ⻌, walking backwards: stepping back out of the room, or out of the job.",
    notes: [
      "退社 (たいしゃ) is leaving the office for the day, or leaving the company for good; context tells you which.",
      "At the clinic, 入院 (にゅういん) is going into hospital and 退院 (たいいん) leaving it. 引退 (いんたい) is retiring from a sport or career.",
      "On the road radical ⻌ the inside is written first and the road last."
    ],
    lookalikes: [],
    examples: [
      { w: "退社", r: "たいしゃ", m: "leaving the office" },
      { w: "退院", r: "たいいん", m: "leaving hospital" },
      { w: "引退", r: "いんたい", m: "retirement" }
    ]
  },
  {
    k: "議", meaning: "discussion, meeting", on: ["ギ"], kun: [], group: "wk-tasks", strokes: 20, radical: "言",
    mnemonic: "Words 言 on the left and 義, doing what is right, on the right: people talking round the table until they agree on the right thing. That is a meeting.",
    notes: [
      "A door sign reading 会議中 (かいぎちゅう) means a meeting is in progress, so don't knock; 会議室 (かいぎしつ) is the meeting room you book.",
      "Always read ぎ. 議員 (ぎいん), a member of an assembly, is on every election poster.",
      "Twenty strokes, most of them in 義. Don't mix it up with 護 in 看護 (かんご, nursing), which also has 言 on the left."
    ],
    lookalikes: ["護"],
    examples: [
      { w: "会議", r: "かいぎ", m: "meeting" },
      { w: "会議室", r: "かいぎしつ", m: "meeting room" },
      { w: "会議中", r: "かいぎちゅう", m: "in a meeting" }
    ]
  },
  {
    k: "資", meaning: "resources, materials", on: ["シ"], kun: [], group: "wk-tasks", strokes: 13, radical: "貝",
    mnemonic: "次, 'next', sitting on a shell 貝, the old money: the next pile of shells you will need. Resources, funds, and the materials for the job.",
    notes: [
      "資料 (しりょう) is the handouts and documents for a meeting; emails say 資料を送ります (I'll send the documents).",
      "Always read し. In the news, 資金 (しきん) is funds, and 物資 (ぶっし) is supplies, such as relief goods after a disaster.",
      "The top is 次 (next), squeezed flat over the shell 貝."
    ],
    lookalikes: ["次"],
    examples: [
      { w: "資料", r: "しりょう", m: "documents, handouts" },
      { w: "資金", r: "しきん", m: "funds" },
      { w: "物資", r: "ぶっし", m: "supplies, goods" }
    ]
  },
  {
    k: "刷", meaning: "print", on: ["サツ"], kun: ["す.る"], group: "wk-tasks", strokes: 8, radical: "刂",
    mnemonic: "On the left a figure bent low with a cloth hanging down; on the right a knife 刂: carve the block, ink it with the cloth and press out a print.",
    notes: [
      "印刷 (いんさつ) is printing: it is the print button on office printers and on konbini copy machines, and 両面印刷 (りょうめんいんさつ) is double-sided.",
      "さつ in compounds. The verb 刷る (する, to print) sounds just like する (to do), so you mostly hear 印刷する instead.",
      "The left side starts with the same bent roof as 届 (deliver), but has a cloth under it, not 由."
    ],
    lookalikes: ["届"],
    examples: [
      { w: "印刷", r: "いんさつ", m: "printing" },
      { w: "両面印刷", r: "りょうめんいんさつ", m: "double-sided printing" },
      { w: "印刷物", r: "いんさつぶつ", m: "printed matter" }
    ]
  },
  {
    k: "連", meaning: "connect, take along", on: ["レン"], kun: ["つ.れる", "つら.なる"], group: "wk-tasks", strokes: 10, radical: "辶",
    mnemonic: "A cart 車 rolling along the walking road ⻌: carts joined one behind another, linked in a long line.",
    notes: [
      "連絡 (れんらく) is getting in touch: 後で連絡します (I'll contact you later). 連絡先 (れんらくさき) is the contact details box on every form.",
      "連休 (れんきゅう) is a run of days off, like Golden Week; offices and stations get very busy just before one.",
      "連れて行く (つれていく) is taking a person or a pet along; for things you use 持って行く (もっていく)."
    ],
    lookalikes: ["速"],
    examples: [
      { w: "連絡先", r: "れんらくさき", m: "contact details" },
      { w: "連休", r: "れんきゅう", m: "consecutive holidays" },
      { w: "連れて行く", r: "つれていく", m: "to take (someone) along" }
    ]
  },
  {
    k: "絡", meaning: "get tangled, connect", on: ["ラク"], kun: ["から.む", "から.まる"], group: "wk-tasks", strokes: 12, radical: "糸",
    mnemonic: "A thread 糸 tied to 各, each one: a thread running out to each person on the team, so everyone stays connected.",
    notes: [
      "You will meet it almost only in 連絡 (れんらく, contact): ご連絡ください (please get in touch) is on notices and in emails.",
      "らく in 連絡; the kun reading から.む is for things getting tangled, like cables behind a desk.",
      "Thread 糸 on the left, as in 給 (pay) and 終 (end); look at the right side to tell them apart."
    ],
    lookalikes: ["給", "終"],
    examples: [
      { w: "連絡", r: "れんらく", m: "contact, getting in touch" },
      { w: "連絡先", r: "れんらくさき", m: "contact details" },
      { w: "絡む", r: "からむ", m: "to get tangled" }
    ]
  },
  {
    k: "認", meaning: "recognise, approve", on: ["ニン"], kun: ["みと.める"], group: "wk-tasks", strokes: 14, radical: "言",
    mnemonic: "Words 言 beside 忍, a blade held over a heart: you hold your words back as long as you can, then finally admit it is true.",
    notes: [
      "確認 (かくにん, checking, confirming) is everywhere at work: ご確認ください (please check) ends countless emails and notices.",
      "At banks, phone shops and the city office, 本人確認 (ほんにんかくにん) means an ID check, so bring your residence card.",
      "にん in compounds; the verb is 認める (みとめる, to admit, to approve)."
    ],
    lookalikes: [],
    examples: [
      { w: "確認", r: "かくにん", m: "checking, confirmation" },
      { w: "本人確認", r: "ほんにんかくにん", m: "identity check" },
      { w: "認める", r: "みとめる", m: "to admit, approve" }
    ]
  },
  {
    k: "締", meaning: "tighten, close", on: ["テイ"], kun: ["し.める", "し.まる"], group: "wk-tasks", strokes: 15, radical: "糸",
    mnemonic: "Thread 糸 beside 帝, the emperor: the emperor pulls the drawstring tight, and when it closes, time is up.",
    notes: [
      "締め切り (しめきり) is a deadline; on forms and posters it is often written 締切, with no kana.",
      "Read し.める for tightening: ネクタイを締める (tie a tie), シートベルトを締める (fasten a seat belt). The on reading てい is rare.",
      "Same sound as 閉める (しめる, to close a door or window); 締める is for tightening and for closing a deadline or the accounts."
    ],
    lookalikes: [],
    examples: [
      { w: "締め切り", r: "しめきり", m: "deadline" },
      { w: "締切日", r: "しめきりび", m: "closing date" },
      { w: "締める", r: "しめる", m: "to tighten, fasten" }
    ]
  },
  {
    k: "担", meaning: "carry, be in charge", on: ["タン"], kun: ["かつ.ぐ", "にな.う"], group: "wk-tasks", strokes: 8, radical: "扌",
    mnemonic: "A hand 扌 next to 旦, the sun rising over the horizon: from dawn you carry the load on your shoulder. It's your job now.",
    notes: [
      "担当 (たんとう) is the person in charge: on the phone you'll hear 担当の田中です, and forms have a 担当者 (たんとうしゃ) box.",
      "たん in compounds; 担ぐ (かつぐ) is carrying on your shoulder, as people do with the portable shrine at a festival.",
      "Hand 扌 on the left, as in 押 (push); the right side here is a sun over a line."
    ],
    lookalikes: ["押"],
    examples: [
      { w: "担当", r: "たんとう", m: "in charge (of)" },
      { w: "担当者", r: "たんとうしゃ", m: "person in charge" },
      { w: "担ぐ", r: "かつぐ", m: "to carry on the shoulder" }
    ]
  },
  {
    k: "説", meaning: "explain, theory", on: ["セツ"], kun: ["と.く"], group: "wk-tasks", strokes: 14, radical: "言",
    mnemonic: "Words 言 beside 兌, a person with a wide open mouth and a big grin: talking happily until everything has been explained.",
    notes: [
      "説明 (せつめい) is an explanation: 説明書 (せつめいしょ) is the manual in the box, and a 説明会 (せつめいかい) is an information session.",
      "Read せつ; 小説 (しょうせつ) is a novel. The verb 説く (とく) is literary.",
      "Don't confuse it with 読 (read): both have 言 on the left, but 読 has 売 on the right."
    ],
    lookalikes: ["読"],
    examples: [
      { w: "説明", r: "せつめい", m: "explanation" },
      { w: "説明書", r: "せつめいしょ", m: "instruction manual" },
      { w: "説明会", r: "せつめいかい", m: "information session" }
    ]
  },
  {
    k: "相", meaning: "mutual, together", on: ["ソウ", "ショウ"], kun: ["あい"], group: "wk-tasks", strokes: 9, radical: "目",
    mnemonic: "A tree 木 and an eye 目 side by side: you look at the tree and the tree looks back. Face to face, each to the other.",
    notes: [
      "相談 (そうだん) is talking something over: ちょっと相談してもいいですか? is the polite way to ask a colleague for a word.",
      "あい in 相手 (あいて, the other person) and 相席 (あいせき): busy ramen shops ask 相席でもいいですか? (is sharing a table OK?).",
      "しょう is for ministers in the news, as in 外相 (がいしょう). 相 with bamboo on top makes 箱 (box)."
    ],
    lookalikes: ["箱"],
    examples: [
      { w: "相談", r: "そうだん", m: "consultation, talking over" },
      { w: "相手", r: "あいて", m: "the other person, partner" },
      { w: "相席", r: "あいせき", m: "sharing a table" }
    ]
  },
  {
    k: "談", meaning: "talk, discuss", on: ["ダン"], kun: [], group: "wk-tasks", strokes: 15, radical: "言",
    mnemonic: "Words 言 beside 炎, two fires stacked up: talking by the fireside late into the night.",
    notes: [
      "相談 (そうだん) is talking something over; city offices have a 相談窓口 (そうだんまどぐち) help desk, often one just for foreign residents.",
      "Read だん, which is also the 'dan' in じょうだん (a joke). 面談 (めんだん) is a one-to-one meeting with your boss or your child's teacher.",
      "In the news, 会談 (かいだん) is talks between leaders."
    ],
    lookalikes: [],
    examples: [
      { w: "相談", r: "そうだん", m: "consultation, talking over" },
      { w: "面談", r: "めんだん", m: "one-to-one meeting, interview" },
      { w: "会談", r: "かいだん", m: "talks (between leaders)" }
    ]
  },
  {
    k: "頼", meaning: "request, rely on", on: ["ライ"], kun: ["たの.む", "たよ.る", "たの.もしい"], group: "wk-tasks", strokes: 16, radical: "頁",
    mnemonic: "A bundle 束 of work on the left and a head 頁 on the right: you bow your head over the bundle and ask for help.",
    notes: [
      "頼む (たのむ) is to ask someone for something, or to order food in casual talk; at work, これ、お願いできますか? sounds politer.",
      "Kun readings たの.む and たよ.る (to rely on); the formal word for a request in business emails, いらい, uses the on reading らい.",
      "The head 頁 on the right also sits in 題 (topic)."
    ],
    lookalikes: ["題"],
    examples: [
      { w: "頼む", r: "たのむ", m: "to ask, request" },
      { w: "頼る", r: "たよる", m: "to rely on" },
      { w: "頼もしい", r: "たのもしい", m: "reliable, dependable" }
    ]
  },
  {
    k: "遅", meaning: "late, slow", on: ["チ"], kun: ["おく.れる", "おそ.い"], group: "wk-time", strokes: 12, radical: "辶",
    mnemonic: "A sheep shuffling out from under a low roof onto the road ⻌: so slow it is always late.",
    notes: [
      "遅刻 (ちこく) is being late. In Japanese workplaces even a few minutes calls for a phone call ahead and an apology.",
      "おそい is late or slow; おくれる is to be late or delayed. 遅くなってすみません (おそくなって) is 'sorry I'm late'.",
      "Station displays show 遅れ (おくれ), delay; if your train is late, staff can give you a delay certificate to show at work."
    ],
    lookalikes: [],
    examples: [
      { w: "遅刻", r: "ちこく", m: "being late" },
      { w: "遅れる", r: "おくれる", m: "to be late, delayed" },
      { w: "遅い", r: "おそい", m: "late, slow" }
    ]
  },
  {
    k: "刻", meaning: "time, carve", on: ["コク"], kun: ["きざ.む"], group: "wk-time", strokes: 8, radical: "刂",
    mnemonic: "A boar 亥 beside a knife 刂: carving notches into a post, one notch for every hour that passes.",
    notes: [
      "Mostly met in 遅刻 (ちこく), lateness, and 時刻 (じこく), clock time: train timetables give the 時刻 of each departure.",
      "きざむ is to chop finely or carve; recipes say 刻む for chopping onions or herbs.",
      "The knife 刂 sits on the right, as in 割 and 別."
    ],
    lookalikes: [],
    examples: [
      { w: "遅刻", r: "ちこく", m: "being late" },
      { w: "時刻", r: "じこく", m: "time (on the clock)" },
      { w: "刻む", r: "きざむ", m: "to chop, to carve" }
    ]
  },
  {
    k: "曜", meaning: "day of the week", on: ["ヨウ"], kun: [], group: "wk-time", strokes: 18, radical: "日",
    mnemonic: "The sun 日 beside a pheasant with bright wings 翟: the shining lights of the sky, each giving its name to a day.",
    notes: [
      "Every day name ends in 曜日 (ようび): 月曜日 (げつようび) Monday, 火曜日 Tuesday, through to 日曜日 (にちようび) Sunday.",
      "Calendars, emails and shop signs shorten days to one kanji: 11月3日(月) means Monday the 3rd, and 水曜定休 (すいようていきゅう) means closed on Wednesdays.",
      "At 18 strokes it is the most complex part of a date; handwritten notes often skip 曜日 and write just the day kanji."
    ],
    lookalikes: [],
    examples: [
      { w: "曜日", r: "ようび", m: "day of the week" },
      { w: "月曜日", r: "げつようび", m: "Monday" },
      { w: "日曜日", r: "にちようび", m: "Sunday" }
    ]
  },
  {
    k: "週", meaning: "week", on: ["シュウ"], kun: [], group: "wk-time", strokes: 11, radical: "辶",
    mnemonic: "Going round 周 and round on the road ⻌: the same loop of seven days, back to Monday again.",
    notes: [
      "先週 (せんしゅう) last week, 今週 (こんしゅう) this week, 来週 (らいしゅう) next week and 毎週 (まいしゅう) every week.",
      "週休二日 (しゅうきゅうふつか), two days off a week, is a standard line in job ads; 二日 is read ふつか here.",
      "Like 道, it has the road ⻌ wrapping a boxy inside."
    ],
    lookalikes: ["道"],
    examples: [
      { w: "毎週", r: "まいしゅう", m: "every week" },
      { w: "来週", r: "らいしゅう", m: "next week" },
      { w: "週休二日", r: "しゅうきゅうふつか", m: "two days off a week" }
    ]
  },
  {
    k: "礼", meaning: "thanks, bow", on: ["レイ"], kun: [], group: "wk-time", strokes: 5, radical: "礻",
    mnemonic: "Someone at the altar 礻 bending low like the hook 乙: a deep, polite bow.",
    notes: [
      "失礼します (しつれいします), 'excuse me', is said when entering or leaving a room, ending a phone call, or leaving work before others.",
      "お礼 (おれい) is thanks or a thank-you gift; business emails after a visit often carry the subject line お礼.",
      "In class the call 礼 (れい) means 'bow'. Same altar radical 礻 as 社."
    ],
    lookalikes: ["社"],
    examples: [
      { w: "失礼", r: "しつれい", m: "rudeness; excuse me" },
      { w: "お礼", r: "おれい", m: "thanks, thank-you gift" },
      { w: "無礼", r: "ぶれい", m: "rude" }
    ]
  },
  {
    k: "失", meaning: "lose, fault", on: ["シツ"], kun: ["うしな.う"], group: "wk-time", strokes: 5, radical: "大",
    mnemonic: "A man 夫 with something slipping out past his hand 丿: there it goes, lost.",
    notes: [
      "Most often met in 失礼 (しつれい): お先に失礼します (おさきにしつれいします) is the polite way to leave the office before your colleagues.",
      "失業 (しつぎょう), unemployment, is a news word; うしなう (to lose) is used for things like trust or a chance, not lost keys.",
      "Compare 夫 (husband) and 天 (heaven): 失 starts with an extra short slanting stroke at the top left."
    ],
    lookalikes: ["天"],
    examples: [
      { w: "失礼", r: "しつれい", m: "rudeness; excuse me" },
      { w: "失業", r: "しつぎょう", m: "unemployment" },
      { w: "失う", r: "うしなう", m: "to lose" }
    ]
  },
  {
    k: "同", meaning: "same", on: ["ドウ"], kun: ["おな.じ"], group: "wk-time", strokes: 6, radical: "口",
    mnemonic: "A frame 冂 with one 一 mouth 口 inside: everyone under the same roof, saying the same thing.",
    notes: [
      "おなじ takes no な before a noun: 同じ会社 (おなじかいしゃ), the same company.",
      "同期 (どうき) are the people who joined your company in the same year, usually the same April; 同時 (どうじ) is 'at the same time'.",
      "On forms 同上 (どうじょう) means 'same as above'. The frame 冂 is like 円, but with a line and a box inside."
    ],
    lookalikes: ["円"],
    examples: [
      { w: "同じ", r: "おなじ", m: "same" },
      { w: "同期", r: "どうき", m: "same intake (at work)" },
      { w: "同時", r: "どうじ", m: "same time" }
    ]
  },
  /* ========== Reading the news ========== */
  {
    k: "政", meaning: "politics, government", on: ["セイ"], kun: [], group: "nw-politics", strokes: 9, radical: "攵",
    mnemonic: "Setting things right 正 with a rod in hand 攵: governing means keeping everything in order, sometimes with a firm hand.",
    notes: [
      "政治 (せいじ), politics, and 政府 (せいふ), the government, are on the front page every single day.",
      "Read せい in almost every word you will meet; the しょう reading survives only in a few old words.",
      "The left side is 正 (correct) squeezed narrow. The same right side 攵 is in 数 (number) and 故 (as in 事故, accident), so don't mix them up."
    ],
    lookalikes: ["故"],
    examples: [
      { w: "政治", r: "せいじ", m: "politics" },
      { w: "政府", r: "せいふ", m: "government" },
      { w: "行政", r: "ぎょうせい", m: "administration" }
    ]
  },
  {
    k: "選", meaning: "choose, elect", on: ["セン"], kun: ["えら.ぶ"], group: "nw-politics", strokes: 15, radical: "辶",
    mnemonic: "Two kneeling figures up on a platform 巽 carried down the road ⻌: the candidates paraded through town so the voters can choose.",
    notes: [
      "選挙 (せんきょ), election, fills the news before every vote, and boards of candidate posters go up all over town.",
      "As a verb it is 選ぶ (えらぶ), to choose: すきなのを選んでください, pick the one you like.",
      "選手 (せんしゅ) is an athlete or player, a word you will see in every sports headline."
    ],
    lookalikes: [],
    examples: [
      { w: "選ぶ", r: "えらぶ", m: "to choose" },
      { w: "選挙", r: "せんきょ", m: "election" },
      { w: "選手", r: "せんしゅ", m: "athlete, player" }
    ]
  },
  {
    k: "党", meaning: "political party", on: ["トウ"], kun: [], group: "nw-politics", strokes: 10, radical: "儿",
    mnemonic: "A house with sparks flying off the roof 尚 and a big brother 兄 inside making speeches: party headquarters, buzzing before the vote.",
    notes: [
      "Party names end in 党: 自民党 (じみんとう) is the Liberal Democratic Party, the LDP.",
      "与党 (よとう) is the ruling party and 野党 (やとう) the opposition; newspapers use both words every day.",
      "Don't confuse it with 堂 (hall), which has the same top but 土 at the bottom instead of 兄."
    ],
    lookalikes: ["堂"],
    examples: [
      { w: "政党", r: "せいとう", m: "political party" },
      { w: "与党", r: "よとう", m: "ruling party" },
      { w: "野党", r: "やとう", m: "opposition party" }
    ]
  },
  {
    k: "権", meaning: "right, authority", on: ["ケン"], kun: [], group: "nw-politics", strokes: 15, radical: "木",
    mnemonic: "A tree 木 with a heron perched on the very top, watching everything below: whoever sits highest holds the power.",
    notes: [
      "権利 (けんり), a right, and 人権 (じんけん), human rights, are common in the news.",
      "政権 (せいけん) is the government in power, and 選挙権 (せんきょけん), the right to vote, starts at 18 in Japan.",
      "The right side is the same as in 観 (view), which has 見 on the right instead of 木 on the left."
    ],
    lookalikes: ["観"],
    examples: [
      { w: "権利", r: "けんり", m: "right (legal)" },
      { w: "人権", r: "じんけん", m: "human rights" },
      { w: "選挙権", r: "せんきょけん", m: "right to vote" }
    ]
  },
  {
    k: "民", meaning: "people, nation", on: ["ミン"], kun: ["たみ"], group: "nw-politics", strokes: 5, radical: "氏",
    mnemonic: "The clan sign 氏 with a lid pressed over its top: ordinary folk, many families living under one rule.",
    notes: [
      "国民 (こくみん), the people of a country, and 市民 (しみん), citizens, appear in headlines all the time; 住民 (じゅうみん) are the residents of a town.",
      "民主 (みんしゅ), democratic, turns up in party names, and 民間 (みんかん) means private, not run by the state.",
      "Compare 氏 (Mr, family name), which has no closed box at the top."
    ],
    lookalikes: ["氏"],
    examples: [
      { w: "国民", r: "こくみん", m: "the people, citizens of a country" },
      { w: "市民", r: "しみん", m: "citizen" },
      { w: "住民", r: "じゅうみん", m: "residents" }
    ]
  },
  {
    k: "法", meaning: "law, method", on: ["ホウ"], kun: [], group: "nw-politics", strokes: 8, radical: "氵",
    mnemonic: "Water 氵 that goes away 去 only along its proper channel: the law keeps everything flowing the way it should.",
    notes: [
      "In the news: 法案 (ほうあん) is a bill before parliament and 違法 (いほう) means illegal.",
      "方法 (ほうほう) is a method or way of doing something, and 法学部 (ほうがくぶ) is a university law faculty.",
      "Sound change after ん: 文法 (ぶんぽう), grammar."
    ],
    lookalikes: ["去"],
    examples: [
      { w: "方法", r: "ほうほう", m: "method, way" },
      { w: "文法", r: "ぶんぽう", m: "grammar" },
      { w: "違法", r: "いほう", m: "illegal" }
    ]
  },
  {
    k: "制", meaning: "system, control", on: ["セイ"], kun: [], group: "nw-politics", strokes: 8, radical: "刂",
    mnemonic: "An old tree with its branches pruned back by a knife 刂: control means cutting things into shape.",
    notes: [
      "制度 (せいど) is a system or scheme; 制限 (せいげん) is a limit, and 制限速度 (せいげんそくど) is the speed limit.",
      "制服 (せいふく), uniform, is worn by school students, station staff and the police.",
      "Read せい; it has no kun reading of its own."
    ],
    lookalikes: [],
    examples: [
      { w: "制度", r: "せいど", m: "system, scheme" },
      { w: "制服", r: "せいふく", m: "uniform" },
      { w: "制限", r: "せいげん", m: "limit, restriction" }
    ]
  },
  {
    k: "首", meaning: "neck, head, leader", on: ["シュ"], kun: ["くび"], group: "nw-politics", strokes: 9, radical: "首",
    mnemonic: "Two tufts of hair sticking up above a face 自: the head, held high on its neck.",
    notes: [
      "首相 (しゅしょう), prime minister, is in almost every political headline.",
      "首都 (しゅと) is a capital city, and 首都高 (しゅとこう) is Tokyo's Metropolitan Expressway.",
      "As くび it is the neck: 首が痛い, a stiff neck. 道 (road) has 首 inside it."
    ],
    lookalikes: ["道", "自"],
    examples: [
      { w: "首相", r: "しゅしょう", m: "prime minister" },
      { w: "首都", r: "しゅと", m: "capital city" },
      { w: "首", r: "くび", m: "neck" }
    ]
  },
  {
    k: "総", meaning: "total, general", on: ["ソウ"], kun: [], group: "nw-politics", strokes: 14, radical: "糸",
    mnemonic: "Threads 糸 all gathered into one bundle by a busy heart 忩: the whole lot, the grand total.",
    notes: [
      "総理 (そうり) is the usual spoken word for the prime minister; 総選挙 (そうせんきょ) is a general election.",
      "総合 (そうごう), general or all-round, is in the names of big hospitals: 総合病院 (そうごうびょういん).",
      "総額 (そうがく), the total amount, is on price tags and bills."
    ],
    lookalikes: ["統"],
    examples: [
      { w: "総理", r: "そうり", m: "prime minister" },
      { w: "総合", r: "そうごう", m: "general, comprehensive" },
      { w: "総選挙", r: "そうせんきょ", m: "general election" }
    ]
  },
  {
    k: "委", meaning: "entrust, committee", on: ["イ"], kun: ["ゆだ.ねる"], group: "nw-politics", strokes: 8, radical: "女",
    mnemonic: "A woman 女 carrying the grain harvest 禾 on her head: the whole field has been entrusted to her.",
    notes: [
      "委員 (いいん) is a committee member and 委員会 (いいんかい) a committee, from school class committees to parliament.",
      "委任状 (いにんじょう), a letter of proxy, is a form you meet at the city office and at company meetings.",
      "Lookalike 季 (season) has 子 at the bottom instead of 女."
    ],
    lookalikes: ["季"],
    examples: [
      { w: "委員", r: "いいん", m: "committee member" },
      { w: "委員会", r: "いいんかい", m: "committee" },
      { w: "委任", r: "いにん", m: "entrusting, delegation" }
    ]
  },
  {
    k: "省", meaning: "ministry, omit", on: ["ショウ", "セイ"], kun: ["はぶ.く"], group: "nw-politics", strokes: 9, radical: "目",
    mnemonic: "Eyes 目 peering closely at something small 少: looking back at your mistakes, and trimming off the little bits you don't need.",
    notes: [
      "Government ministries end in 省 (しょう): 外務省 (がいむしょう) is the Ministry of Foreign Affairs.",
      "Read せい in 反省 (はんせい), reflecting on what you did wrong, a word you will hear constantly in Japan.",
      "省エネ (しょうエネ), energy saving, is on appliance stickers; はぶく means to leave out or cut."
    ],
    lookalikes: [],
    examples: [
      { w: "反省", r: "はんせい", m: "reflection, regret" },
      { w: "省エネ", r: "しょうエネ", m: "energy saving" },
      { w: "外務省", r: "がいむしょう", m: "Ministry of Foreign Affairs" }
    ]
  },
  {
    k: "官", meaning: "government official", on: ["カン"], kun: [], group: "nw-politics", strokes: 8, radical: "宀",
    mnemonic: "Under a roof 宀 sit two tall stacks of files: an official's office, buried in paperwork.",
    notes: [
      "警察官 (けいさつかん) is a police officer, often shortened to 警官 (けいかん).",
      "In the news: 長官 (ちょうかん) is the head of a government agency, and 官庁 (かんちょう) are government offices.",
      "官 is the official; 館 (hall, building) adds 食 on the left, as in 図書館 (としょかん)."
    ],
    lookalikes: ["館"],
    examples: [
      { w: "警察官", r: "けいさつかん", m: "police officer" },
      { w: "長官", r: "ちょうかん", m: "agency head, director" },
      { w: "官庁", r: "かんちょう", m: "government offices" }
    ]
  },
  {
    k: "庁", meaning: "government office", on: ["チョウ"], kun: [], group: "nw-politics", strokes: 5, radical: "广",
    mnemonic: "A wide roof 广 over a single nail 丁: the big public hall where your papers get stamped.",
    notes: [
      "都庁 (とちょう), the Tokyo Metropolitan Government Building in Shinjuku, has a free observation deck.",
      "県庁 (けんちょう) is a prefectural office; 気象庁 (きしょうちょう), the Japan Meteorological Agency, issues weather warnings.",
      "Same roof as 広 (wide) and 庫 (store), but 庁 has only a short hooked post underneath."
    ],
    lookalikes: ["広"],
    examples: [
      { w: "都庁", r: "とちょう", m: "Tokyo Metropolitan Government office" },
      { w: "県庁", r: "けんちょう", m: "prefectural office" },
      { w: "気象庁", r: "きしょうちょう", m: "Japan Meteorological Agency" }
    ]
  },
  {
    k: "統", meaning: "unite, govern", on: ["トウ"], kun: [], group: "nw-politics", strokes: 12, radical: "糸",
    mnemonic: "Threads 糸 twisted together until they fill out 充 one strong rope: many strands united under one control.",
    notes: [
      "大統領 (だいとうりょう) is a president, as in the US president.",
      "伝統 (でんとう), tradition, is all over tourist writing; 統計 (とうけい), statistics, labels the graphs in news stories.",
      "Lookalike 総 (total) has the same thread on the left; the right sides differ."
    ],
    lookalikes: ["総"],
    examples: [
      { w: "大統領", r: "だいとうりょう", m: "president" },
      { w: "伝統", r: "でんとう", m: "tradition" },
      { w: "統計", r: "とうけい", m: "statistics" }
    ]
  },
  {
    k: "策", meaning: "plan, policy, measure", on: ["サク"], kun: [], group: "nw-politics", strokes: 12, radical: "竹",
    mnemonic: "Bamboo 竹 strips tied around a thorny branch 朿: a clever plan with a sharp edge.",
    notes: [
      "対策 (たいさく), measures or countermeasures, is a headline staple: 地震対策 (earthquake measures), 熱中症対策 (heatstroke measures).",
      "政策 (せいさく) is a policy, and 対策本部 (たいさくほんぶ) is the emergency task force set up after a disaster.",
      "The bamboo top is shared with 第 and 等; look at what sits underneath."
    ],
    lookalikes: ["第"],
    examples: [
      { w: "対策", r: "たいさく", m: "measures, countermeasures" },
      { w: "政策", r: "せいさく", m: "policy" },
      { w: "対策本部", r: "たいさくほんぶ", m: "task force headquarters" }
    ]
  },
  {
    k: "挙", meaning: "raise, hold (an event)", on: ["キョ"], kun: ["あ.げる"], group: "nw-politics", strokes: 10, radical: "手",
    mnemonic: "A crowd of hands raised up high above one more hand 手: voters lifting their hands, the picture behind 選挙 (election).",
    notes: [
      "Almost always met in 選挙 (せんきょ), election.",
      "挙げる (あげる) is to raise: 手を挙げる, to put your hand up. The everyday あげる (to give) is usually written in kana.",
      "Lookalike 学 (study) has a similar top but 子 at the bottom."
    ],
    lookalikes: ["学"],
    examples: [
      { w: "選挙", r: "せんきょ", m: "election" },
      { w: "挙げる", r: "あげる", m: "to raise (a hand)" },
      { w: "挙手", r: "きょしゅ", m: "show of hands" }
    ]
  },
  {
    k: "派", meaning: "faction, group, school", on: ["ハ"], kun: [], group: "nw-politics", strokes: 9, radical: "氵",
    mnemonic: "Water 氵 splitting into branching streams on the right: one river dividing, like a party splitting into factions.",
    notes: [
      "In political news 派 marks factions and camps: 主流派 (しゅりゅうは) is the mainstream group.",
      "立派 (りっぱ), splendid or impressive, changes は to ぱ after the small っ; 派手 (はで) means flashy.",
      "Lookalike 流 (flow) also has water on the left."
    ],
    lookalikes: ["流"],
    examples: [
      { w: "立派", r: "りっぱ", m: "splendid, impressive" },
      { w: "派手", r: "はで", m: "flashy, showy" },
      { w: "特派員", r: "とくはいん", m: "foreign correspondent" }
    ]
  },
  {
    k: "領", meaning: "territory, receive", on: ["リョウ"], kun: [], group: "nw-politics", strokes: 14, radical: "頁",
    mnemonic: "An order 令 handed to a head 頁: the leader who gives the commands over a whole territory.",
    notes: [
      "領収書 (りょうしゅうしょ), a receipt, is what you ask for at shops when work pays your expenses.",
      "In the news: 大統領 (だいとうりょう), president, and 領土 (りょうど), territory.",
      "The right side 頁 (head) is also in 頭 and 願."
    ],
    lookalikes: ["頭"],
    examples: [
      { w: "領収書", r: "りょうしゅうしょ", m: "receipt" },
      { w: "大統領", r: "だいとうりょう", m: "president" },
      { w: "領土", r: "りょうど", m: "territory" }
    ]
  },
  {
    k: "治", meaning: "govern, cure", on: ["ジ", "チ"], kun: ["なお.る", "なお.す", "おさ.める"], group: "nw-politics", strokes: 8, radical: "氵",
    mnemonic: "Water 氵 flowing calmly past a raised platform 台: a well-run land where the rivers are tamed and the sick get better.",
    notes: [
      "政治 (せいじ) is politics; 明治 (めいじ) is the Meiji era (1868-1912). 自治体 (じちたい), local government, signs city notices.",
      "治る (なおる) is used for getting well; the same sound written 直る is for things being fixed.",
      "Lookalike 始 (start) has the same right side but 女 on the left."
    ],
    lookalikes: ["始"],
    examples: [
      { w: "政治", r: "せいじ", m: "politics" },
      { w: "治る", r: "なおる", m: "to get better, heal" },
      { w: "自治体", r: "じちたい", m: "local government" }
    ]
  },
  {
    k: "任", meaning: "duty, entrust", on: ["ニン"], kun: ["まか.せる"], group: "nw-politics", strokes: 6, radical: "亻",
    mnemonic: "A person 亻 shouldering a heavy load 壬: the duty someone has trusted them with.",
    notes: [
      "任せる (まかせる) is to leave something to someone: 任せてください, leave it to me.",
      "担任 (たんにん) is a homeroom teacher; 主任 (しゅにん), chief or supervisor, is printed on staff badges.",
      "Compare 仕 (serve): the right side of 任 starts with a slanting stroke and its middle line is the longest."
    ],
    lookalikes: ["仕"],
    examples: [
      { w: "任せる", r: "まかせる", m: "to leave (it) to someone" },
      { w: "担任", r: "たんにん", m: "homeroom teacher" },
      { w: "主任", r: "しゅにん", m: "chief, supervisor" }
    ]
  },
  {
    k: "案", meaning: "plan, proposal", on: ["アン"], kun: [], group: "nw-politics", strokes: 10, radical: "木",
    mnemonic: "A calm 安 desk made of wood 木: where you sit quietly and draft your plan.",
    notes: [
      "案内 (あんない), guidance or information: 案内所 is the information desk at stations and tourist spots.",
      "In the news: 法案 (ほうあん), a bill, and 提案 (ていあん), a proposal.",
      "The top is 安 (cheap, calm); 案 adds a tree underneath."
    ],
    lookalikes: ["安"],
    examples: [
      { w: "案内", r: "あんない", m: "guidance, information" },
      { w: "提案", r: "ていあん", m: "proposal, suggestion" },
      { w: "法案", r: "ほうあん", m: "bill (law)" }
    ]
  },
  {
    k: "票", meaning: "vote, ballot, slip", on: ["ヒョウ"], kun: [], group: "nw-politics", strokes: 11, radical: "示",
    mnemonic: "A slip of paper held up high 覀 above an altar 示: your ballot, offered up on election day.",
    notes: [
      "投票 (とうひょう), voting: 投票所 (とうひょうじょ) signs appear at schools and community halls on election day.",
      "Sound change to ぴょう: 伝票 (でんぴょう) is the order slip or bill in a restaurant, and 一票 (いっぴょう) is one vote.",
      "Lookalike 要 (need) has the same top but 女 at the bottom."
    ],
    lookalikes: ["要"],
    examples: [
      { w: "投票", r: "とうひょう", m: "voting" },
      { w: "伝票", r: "でんぴょう", m: "order slip, bill" },
      { w: "一票", r: "いっぴょう", m: "one vote" }
    ]
  },
  {
    k: "参", meaning: "join, visit, go (humble)", on: ["サン"], kun: ["まい.る"], group: "nw-politics", strokes: 8, radical: "厶",
    mnemonic: "A private 厶 figure on top of a big person 大, with three strokes trailing behind like flying hair: rushing along to join in.",
    notes: [
      "参加 (さんか), taking part: 参加費 (さんかひ), the entry fee, is on every event flyer.",
      "参議院 (さんぎいん) is the House of Councillors, the upper house of parliament.",
      "まいる is the humble 'go, come': platform announcements say 電車が参ります, a train is coming."
    ],
    lookalikes: [],
    examples: [
      { w: "参加", r: "さんか", m: "taking part" },
      { w: "参考", r: "さんこう", m: "reference" },
      { w: "参ります", r: "まいります", m: "to go, come (humble)" }
    ]
  },
  {
    k: "判", meaning: "judgement, seal", on: ["ハン", "バン"], kun: [], group: "nw-law", strokes: 7, radical: "刂",
    mnemonic: "A knife 刂 slices the matter exactly in half 半: the judge cuts the case down the middle and decides.",
    notes: [
      "判断 (はんだん) is a judgement or decision; in headlines 判明 (はんめい) means 'it has come to light'.",
      "Read ばん in 裁判 (さいばん, trial). The personal seal you stamp on forms is a 判子 (はんこ), often written in kana.",
      "Without the knife on the right it is just 半 (half)."
    ],
    lookalikes: ["半"],
    examples: [
      { w: "判断", r: "はんだん", m: "judgement, decision" },
      { w: "裁判", r: "さいばん", m: "trial, court case" },
      { w: "判子", r: "はんこ", m: "personal seal, stamp" }
    ]
  },
  {
    k: "裁", meaning: "judge, cut out", on: ["サイ"], kun: ["さば.く", "た.つ"], group: "nw-law", strokes: 12, radical: "衣",
    mnemonic: "A halberd blade comes down through a length of cloth 衣: the tailor cuts the garment, and the judge cuts through the case.",
    notes: [
      "裁判 (さいばん, trial) and 裁判所 (さいばんしょ, courthouse) are in the news daily; headlines shorten courts to 地裁 (ちさい, district court) and 高裁 (こうさい, high court).",
      "裁く (さばく) is to judge a case; 裁つ (たつ) is the tailor's word for cutting cloth.",
      "The cloth 衣 is split: its top sits tucked under the blade, and its lower half spreads out at the bottom left."
    ],
    lookalikes: [],
    examples: [
      { w: "裁判", r: "さいばん", m: "trial, court case" },
      { w: "裁判所", r: "さいばんしょ", m: "court, courthouse" },
      { w: "裁判官", r: "さいばんかん", m: "judge" }
    ]
  },
  {
    k: "審", meaning: "examine, judge", on: ["シン"], kun: [], group: "nw-law", strokes: 15, radical: "宀",
    mnemonic: "Under one roof 宀, every case is given a number 番 and waits its turn: the panel examines them one by one.",
    notes: [
      "On signs at schools and stations, 不審者 (ふしんしゃ) is a suspicious person; 不審物 (ふしんぶつ) a suspicious package.",
      "In sport 審判 (しんぱん) is the referee or umpire; 審査 (しんさ) is screening, as for a visa, a loan or a contest.",
      "The lower part is the whole of 番 (number); 審 just puts a roof on it."
    ],
    lookalikes: ["番"],
    examples: [
      { w: "審判", r: "しんぱん", m: "referee, umpire" },
      { w: "審査", r: "しんさ", m: "screening, examination" },
      { w: "不審者", r: "ふしんしゃ", m: "suspicious person" }
    ]
  },
  {
    k: "訴", meaning: "sue, appeal", on: ["ソ"], kun: ["うった.える"], group: "nw-law", strokes: 12, radical: "言",
    mnemonic: "Words 言 sent out to push 斥 someone back: you take your complaint to court.",
    notes: [
      "Court news: 起訴 (きそ) is an indictment, 提訴 (ていそ) filing a lawsuit.",
      "訴える (うったえる) is to sue, but also to appeal to or complain of: doctors write that a patient 痛みを訴える (いたみをうったえる).",
      "Don't forget the small dot on the right part 斥."
    ],
    lookalikes: [],
    examples: [
      { w: "訴える", r: "うったえる", m: "to sue; to complain of" },
      { w: "起訴", r: "きそ", m: "indictment, prosecution" },
      { w: "提訴", r: "ていそ", m: "filing a lawsuit" }
    ]
  },
  {
    k: "疑", meaning: "doubt, suspect", on: ["ギ"], kun: ["うたが.う"], group: "nw-law", strokes: 14, radical: "疋",
    mnemonic: "On the left a man hunched over an arrow; on the right a figure frozen with one foot raised, unable to decide which way to step: pure doubt.",
    notes: [
      "容疑者 (ようぎしゃ) is the news word for a suspect, and 容疑 (ようぎ) the charge; headlines put 容疑者 straight after the name.",
      "疑う (うたがう) is to doubt or suspect; 疑問 (ぎもん) is a question or doubt.",
      "14 strokes; the bottom right ends with a long sweep, like the foot of 足."
    ],
    lookalikes: [],
    examples: [
      { w: "疑う", r: "うたがう", m: "to doubt, suspect" },
      { w: "疑問", r: "ぎもん", m: "question, doubt" },
      { w: "容疑者", r: "ようぎしゃ", m: "suspect" }
    ]
  },
  {
    k: "容", meaning: "contents, form", on: ["ヨウ"], kun: [], group: "nw-law", strokes: 10, radical: "宀",
    mnemonic: "A roof 宀 big enough to cover a whole valley 谷: room to contain anything.",
    notes: [
      "内容 (ないよう, contents) is on forms, labels and emails; 容量 (ようりょう) is capacity, such as your phone's storage.",
      "美容院 (びよういん) is a hair salon, and 美容 (びよう) beauty care. In crime news 容疑者 (ようぎしゃ) is a suspect.",
      "Compare 客 (guest): the same roof, but 各 underneath instead of 谷."
    ],
    lookalikes: ["客"],
    examples: [
      { w: "内容", r: "ないよう", m: "contents" },
      { w: "美容院", r: "びよういん", m: "hair salon" },
      { w: "容疑者", r: "ようぎしゃ", m: "suspect" }
    ]
  },
  {
    k: "捜", meaning: "search, investigate", on: ["ソウ"], kun: ["さが.す"], group: "nw-law", strokes: 10, radical: "扌",
    mnemonic: "A hand 扌 groping around beside an old man 叟 who has lost something: helping him search.",
    notes: [
      "捜査 (そうさ) is a police investigation, a word in nearly every crime report.",
      "捜す (さがす) is for searching for lost things and missing people; looking for a job or a flat is also さがす, but written with another kanji.",
      "The left side is the hand 扌, as in 捕 (catch); 捜 is read そう in every news compound."
    ],
    lookalikes: [],
    examples: [
      { w: "捜査", r: "そうさ", m: "(criminal) investigation" },
      { w: "捜す", r: "さがす", m: "to search for (the missing)" },
      { w: "捜査員", r: "そうさいん", m: "investigator" }
    ]
  },
  {
    k: "捕", meaning: "catch, arrest", on: ["ホ"], kun: ["つか.まえる", "つか.まる", "と.らえる"], group: "nw-law", strokes: 10, radical: "扌",
    mnemonic: "A hand 扌 shoots out and grabs a man running across the field 甫: caught!",
    notes: [
      "The headline word for an arrest is たいほ, with 捕 as its second kanji.",
      "捕まえる (つかまえる) is to catch someone; 捕まる (つかまる) is to be caught. In baseball 捕手 (ほしゅ) is the catcher.",
      "Compare 補 (supplement), which has the clothing radical on the left instead of a hand."
    ],
    lookalikes: ["補"],
    examples: [
      { w: "捕まえる", r: "つかまえる", m: "to catch, arrest" },
      { w: "捕まる", r: "つかまる", m: "to be caught" },
      { w: "捕手", r: "ほしゅ", m: "catcher (baseball)" }
    ]
  },
  {
    k: "被", meaning: "suffer, receive", on: ["ヒ"], kun: ["こうむ.る", "かぶ.る"], group: "nw-law", strokes: 10, radical: "衤",
    mnemonic: "Clothing 衤 pulled over your skin 皮: you are covered, or end up covered in whatever trouble comes.",
    notes: [
      "被害 (ひがい, damage, harm) fills disaster and crime news; 被害者 (ひがいしゃ) is the victim.",
      "被災 (ひさい) is being hit by a disaster, and 被災地 (ひさいち) the affected area. かぶる (to put on a hat) is usually written in kana.",
      "Same right side as 波 (wave); the left here is the five-stroke clothing radical."
    ],
    lookalikes: ["波", "皮"],
    examples: [
      { w: "被害", r: "ひがい", m: "damage, harm" },
      { w: "被害者", r: "ひがいしゃ", m: "victim" },
      { w: "被災地", r: "ひさいち", m: "disaster-hit area" }
    ]
  },
  {
    k: "件", meaning: "matter, case", on: ["ケン"], kun: [], group: "nw-law", strokes: 6, radical: "亻",
    mnemonic: "A person 亻 leading a cow 牛 down the high street: now that's a matter for the news.",
    notes: [
      "事件 (じけん) is an incident or criminal case; 件 also counts cases and items: 3件 (さんけん), and 1件 for one new email.",
      "件名 (けんめい) is the subject line of an email; on the phone, ご用件は? (ごようけんは) means 'what is it regarding?'.",
      "Compare 休 (rest): the same person, but leaning on a tree 木 instead of a cow."
    ],
    lookalikes: ["休"],
    examples: [
      { w: "事件", r: "じけん", m: "incident, case" },
      { w: "件名", r: "けんめい", m: "subject (of an email)" },
      { w: "用件", r: "ようけん", m: "business, matter" }
    ]
  },
  {
    k: "告", meaning: "announce, tell", on: ["コク"], kun: ["つ.げる"], group: "nw-law", strokes: 7, radical: "口",
    mnemonic: "A cow 牛 standing over a mouth 口: it moos the news out loud for everyone to hear.",
    notes: [
      "広告 (こうこく) is an advertisement, on every train; 報告 (ほうこく) is a report.",
      "In court news 被告 (ひこく) is the defendant and 原告 (げんこく) the plaintiff; 告白 (こくはく) is a confession, often of love.",
      "The cow's centre line stops at the top of 口; it does not poke through."
    ],
    lookalikes: [],
    examples: [
      { w: "広告", r: "こうこく", m: "advertisement" },
      { w: "報告", r: "ほうこく", m: "report" },
      { w: "被告", r: "ひこく", m: "defendant" }
    ]
  },
  {
    k: "殺", meaning: "kill", on: ["サツ"], kun: ["ころ.す"], group: "nw-law", strokes: 10, radical: "殳",
    mnemonic: "An X slashed above a tree 木, and beside it a hand swinging a club 殳: a deadly blow.",
    notes: [
      "殺人 (さつじん) is murder, and 殺人事件 (さつじんじけん) a murder case in the news.",
      "殺す (ころす) is to kill. Read さい in 相殺 (そうさい, cancelling out).",
      "The right side 殳 also appears in 役 and 投."
    ],
    lookalikes: ["役"],
    examples: [
      { w: "殺す", r: "ころす", m: "to kill" },
      { w: "殺人", r: "さつじん", m: "murder" },
      { w: "自殺", r: "じさつ", m: "suicide" }
    ]
  },
  {
    k: "故", meaning: "accident, the late", on: ["コ"], kun: ["ゆえ"], group: "nw-law", strokes: 9, radical: "攵",
    mnemonic: "Something old 古 takes a hit 攵: what has happened, and why it broke.",
    notes: [
      "事故 (じこ) is an accident. Station boards show 人身事故 (じんしんじこ) when a person has been hit by a train, and trains stop for a while.",
      "Before a name, 故 means 'the late'. ゆえ (reason) is literary, as in それゆえ.",
      "Compare 放 (release): the same right side, with 方 instead of 古."
    ],
    lookalikes: ["放", "古"],
    examples: [
      { w: "事故", r: "じこ", m: "accident" },
      { w: "交通事故", r: "こうつうじこ", m: "traffic accident" },
      { w: "人身事故", r: "じんしんじこ", m: "accident involving a person (on the railway)" }
    ]
  },
  {
    k: "監", meaning: "oversee, watch", on: ["カン"], kun: [], group: "nw-law", strokes: 15, radical: "皿",
    mnemonic: "An official with wide eyes bends low over a dish 皿 of water, watching his reflection: always watching over things.",
    notes: [
      "監督 (かんとく) is a film director or a team manager, all over the sports pages.",
      "監視カメラ (かんしカメラ) is a security camera; 監視 (かんし) is surveillance, and 監査 (かんさ) an audit.",
      "Read かん in every common word; the dish 皿 is at the bottom."
    ],
    lookalikes: [],
    examples: [
      { w: "監督", r: "かんとく", m: "director, team manager" },
      { w: "監視カメラ", r: "かんしカメラ", m: "security camera" },
      { w: "監査", r: "かんさ", m: "audit" }
    ]
  },
  {
    k: "違", meaning: "differ, violate", on: ["イ"], kun: ["ちが.う", "ちが.い", "ちが.える"], group: "nw-law", strokes: 13, radical: "辶",
    mnemonic: "Out on the road, the two feet in 韋 stride off in opposite directions: they go different ways.",
    notes: [
      "違う (ちがう) 'different, wrong' is one of the most used words in speech; 間違い (まちがい) is a mistake.",
      "違反 (いはん) is a violation: 駐車違反 (ちゅうしゃいはん) is a parking offence, and 交通違反 (こうつういはん) a traffic offence.",
      "The same 韋 sits in the middle of 衛 (defend)."
    ],
    lookalikes: ["衛"],
    examples: [
      { w: "違う", r: "ちがう", m: "to differ; to be wrong" },
      { w: "間違い", r: "まちがい", m: "mistake" },
      { w: "違反", r: "いはん", m: "violation, offence" }
    ]
  },
  {
    k: "防", meaning: "prevent, defend", on: ["ボウ"], kun: ["ふせ.ぐ"], group: "nw-law", strokes: 7, radical: "阝",
    mnemonic: "Piled-up earth on the hill-steps at the left, facing every direction 方: a bank to keep floods and enemies out.",
    notes: [
      "防災 (ぼうさい, disaster prevention) is on emergency kits and evacuation maps; 防水 (ぼうすい) means waterproof.",
      "消防 (しょうぼう) is firefighting: 消防車 (しょうぼうしゃ) is a fire engine. 防ぐ (ふせぐ) is to prevent.",
      "Compare 訪 (visit), with 言 on the left instead of the hill-steps."
    ],
    lookalikes: ["訪"],
    examples: [
      { w: "防災", r: "ぼうさい", m: "disaster prevention" },
      { w: "消防車", r: "しょうぼうしゃ", m: "fire engine" },
      { w: "防ぐ", r: "ふせぐ", m: "to prevent, protect against" }
    ]
  },
  {
    k: "衛", meaning: "defend, protect", on: ["エイ"], kun: [], group: "nw-law", strokes: 16, radical: "行",
    mnemonic: "Guards patrol the crossroads 行 on both sides of 韋, feet pacing round and round: protection all round.",
    notes: [
      "衛生 (えいせい) is hygiene; 衛星 (えいせい, satellite) sounds exactly the same.",
      "自衛隊 (じえいたい) is Japan's Self-Defense Forces, and 防衛 (ぼうえい) is defence, as in 防衛省 (ぼうえいしょう, Ministry of Defense).",
      "行 is split in two, left and right, with 韋 squeezed in the middle."
    ],
    lookalikes: ["違"],
    examples: [
      { w: "衛生", r: "えいせい", m: "hygiene" },
      { w: "衛星", r: "えいせい", m: "satellite" },
      { w: "自衛隊", r: "じえいたい", m: "Self-Defense Forces" }
    ]
  },
  {
    k: "軍", meaning: "army, military", on: ["グン"], kun: [], group: "nw-law", strokes: 9, radical: "車",
    mnemonic: "A cover 冖 thrown over a war chariot 車: an army camped with its wagons under canvas.",
    notes: [
      "In the news 軍 is used for foreign armed forces: 米軍 (べいぐん, US forces), ロシア軍 (ロシアぐん). Japan's own are the 自衛隊 (じえいたい).",
      "Home centres sell 軍手 (ぐんて), cheap white cotton work gloves. In baseball, 一軍 (いちぐん) is a team's first squad.",
      "Put 軍 on the road and you get 運 (carry, luck)."
    ],
    lookalikes: ["運", "車"],
    examples: [
      { w: "軍隊", r: "ぐんたい", m: "army, troops" },
      { w: "米軍", r: "べいぐん", m: "US military" },
      { w: "軍手", r: "ぐんて", m: "cotton work gloves" }
    ]
  },
  {
    k: "隊", meaning: "squad, corps", on: ["タイ"], kun: [], group: "nw-law", strokes: 12, radical: "阝",
    mnemonic: "Hill-steps on the left, and on the right a wild boar with two horns charging up them: a squad on the march.",
    notes: [
      "救急隊 (きゅうきゅうたい) is the ambulance crew; 自衛隊 (じえいたい) is Japan's Self-Defense Forces.",
      "隊員 (たいいん) is a member of a team or squad, and 部隊 (ぶたい) a military unit.",
      "Always たい; the hill-steps on the left are three strokes."
    ],
    lookalikes: [],
    examples: [
      { w: "自衛隊", r: "じえいたい", m: "Self-Defense Forces" },
      { w: "救急隊", r: "きゅうきゅうたい", m: "ambulance crew" },
      { w: "隊員", r: "たいいん", m: "squad member" }
    ]
  },
  {
    k: "武", meaning: "military, martial", on: ["ブ", "ム"], kun: [], group: "nw-law", strokes: 8, radical: "止",
    mnemonic: "A halberd held over a foot 止 that has stopped: the warrior's weapon is meant to stop the fight.",
    notes: [
      "武士 (ぶし) is a samurai warrior, and 武道 (ぶどう) the martial arts such as judo and kendo.",
      "In the news 武力 (ぶりょく) is military force. Read む in 武者 (むしゃ, warrior); also common in names like 武田 (たけだ).",
      "Compare 式 (ceremony), which has a similar sweeping hook."
    ],
    lookalikes: ["式"],
    examples: [
      { w: "武士", r: "ぶし", m: "samurai warrior" },
      { w: "武道", r: "ぶどう", m: "martial arts" },
      { w: "武力", r: "ぶりょく", m: "military force" }
    ]
  },
  {
    k: "撃", meaning: "attack, shoot", on: ["ゲキ"], kun: ["う.つ"], group: "nw-law", strokes: 15, radical: "手",
    mnemonic: "A chariot 車 and a club-swinging fist ride on top, slamming down on a hand 手: a direct hit.",
    notes: [
      "撃つ (うつ) is to shoot a gun; 打つ (うつ), with the same sound, is to hit with a bat or type on a keyboard.",
      "目撃 (もくげき) is witnessing, and 目撃者 (もくげきしゃ) the witness in crime reports; 打撃 (だげき) is a blow, or batting in baseball.",
      "15 strokes: the hand 手 at the bottom is drawn last."
    ],
    lookalikes: [],
    examples: [
      { w: "撃つ", r: "うつ", m: "to shoot" },
      { w: "目撃", r: "もくげき", m: "witnessing" },
      { w: "打撃", r: "だげき", m: "blow; batting" }
    ]
  },
  {
    k: "士", meaning: "samurai, professional", on: ["シ"], kun: [], group: "nw-law", strokes: 3, radical: "士",
    mnemonic: "A warrior standing tall: broad shoulders on the long top line, feet planted on the short bottom one.",
    notes: [
      "Ends job titles that need training: 運転士 (うんてんし, train driver) in station announcements, 消防士 (しょうぼうし, firefighter), 税理士 (ぜいりし, tax accountant).",
      "力士 (りきし) is a sumo wrestler. Mount Fuji, ふじさん, has 士 as its second kanji, for the sound.",
      "土 (earth) is the reverse: its bottom line is the long one."
    ],
    lookalikes: ["土"],
    examples: [
      { w: "力士", r: "りきし", m: "sumo wrestler" },
      { w: "消防士", r: "しょうぼうし", m: "firefighter" },
      { w: "運転士", r: "うんてんし", m: "(train) driver" }
    ]
  },
  {
    k: "経", meaning: "pass through, manage", on: ["ケイ", "キョウ"], kun: ["へ.る", "た.つ"], group: "nw-economy", strokes: 11, radical: "糸",
    mnemonic: "Threads 糸 stretched tight over a loom frame 圣: the warp threads that run through the whole cloth, just as the economy runs through every story.",
    notes: [
      "経済 (けいざい), the economy, heads its own section in every newspaper and news site; 経営 (けいえい) is running a business.",
      "Time passing is often written with it: 三年が経った (たった), three years have passed. キョウ is met in お経 (おきょう), a Buddhist sutra.",
      "The left side is thread 糸; the right side is a small hand over 土 (earth)."
    ],
    lookalikes: [],
    examples: [
      { w: "経済", r: "けいざい", m: "economy" },
      { w: "経験", r: "けいけん", m: "experience" },
      { w: "経営", r: "けいえい", m: "management, running a business" }
    ]
  },
  {
    k: "済", meaning: "finish, settle", on: ["サイ"], kun: ["す.む", "す.ます"], group: "nw-economy", strokes: 11, radical: "氵",
    mnemonic: "Water 氵 running beside everything lined up neatly 斉: once the river flows level, the matter is settled.",
    notes: [
      "Stamps and labels say 済 or 済み (ずみ), done: 支払済 (paid), 確認済み (checked). 使用済み (しようずみ) means used.",
      "決済 (けっさい) is payment; shop signs list the cashless options under キャッシュレス決済.",
      "すみません is sometimes written 済みません, but kana is far more common."
    ],
    lookalikes: [],
    examples: [
      { w: "経済", r: "けいざい", m: "economy" },
      { w: "決済", r: "けっさい", m: "payment, settlement" },
      { w: "済む", r: "すむ", m: "to be finished, settled" }
    ]
  },
  {
    k: "株", meaning: "shares, stock; stump", on: [], kun: ["かぶ"], group: "nw-economy", strokes: 10, radical: "木",
    mnemonic: "A tree 木 cut down to a vermilion 朱 stump: what's left is the 株, and owning a piece of the forest is owning shares.",
    notes: [
      "株価 (かぶか), share prices, are read out at the end of every news bulletin, along with the 日経平均 (にっけいへいきん) index.",
      "株式会社 (かぶしきがいしゃ) is a company limited by shares; receipts and signs shorten it to (株).",
      "Almost always read かぶ. It is also a counter for plants and roots."
    ],
    lookalikes: [],
    examples: [
      { w: "株", r: "かぶ", m: "shares, stock" },
      { w: "株価", r: "かぶか", m: "share price" },
      { w: "株式会社", r: "かぶしきがいしゃ", m: "company (Ltd.)" }
    ]
  },
  {
    k: "価", meaning: "price, value", on: ["カ"], kun: [], group: "nw-economy", strokes: 8, radical: "亻",
    mnemonic: "A person 亻 lifting the lid 覀 off a basket of goods to read the price tag inside.",
    notes: [
      "価格 (かかく), price, is on shop tags and adverts; 税込価格 (ぜいこみかかく) includes tax.",
      "物価 (ぶっか), the cost of living, is a headline word when prices rise; note the sound change ぶっ.",
      "定価 (ていか) is the list price, often crossed out above the sale price."
    ],
    lookalikes: ["西"],
    examples: [
      { w: "価格", r: "かかく", m: "price" },
      { w: "物価", r: "ぶっか", m: "prices, cost of living" },
      { w: "定価", r: "ていか", m: "list price" }
    ]
  },
  {
    k: "億", meaning: "hundred million", on: ["オク"], kun: [], group: "nw-economy", strokes: 15, radical: "亻",
    mnemonic: "A person 亻 with an idea 意 so big it is worth a hundred million yen.",
    notes: [
      "Japanese counts in steps of four zeros: 万 (10,000), then 億 (100,000,000). So 1億円 is 100 million yen, and 10億 is a billion.",
      "News figures for budgets, profits and population use it all the time: 日本の人口は約1億2千万人.",
      "The right side is 意 (mind, idea), which also gives the sound of the kanji."
    ],
    lookalikes: ["意"],
    examples: [
      { w: "一億", r: "いちおく", m: "one hundred million" },
      { w: "十億", r: "じゅうおく", m: "one billion" },
      { w: "億万長者", r: "おくまんちょうじゃ", m: "billionaire, very rich person" }
    ]
  },
  {
    k: "銭", meaning: "coin, sen (1/100 yen)", on: ["セン"], kun: ["ぜに"], group: "nw-economy", strokes: 14, radical: "金",
    mnemonic: "Metal 金 cut by two halberds 戋 into little pieces: small coins jangling in your pocket.",
    notes: [
      "小銭 (こぜに) is small change; coin lockers and some machines ask for it.",
      "The 銭 (せん) is 1/100 of a yen. You never pay in it, but exchange rates on the news use it: 1ドル150円20銭.",
      "The right side 戋 also appears in 残 (remain); 鉄 (iron) shares the metal side."
    ],
    lookalikes: ["残", "鉄"],
    examples: [
      { w: "小銭", r: "こぜに", m: "small change, coins" },
      { w: "金銭", r: "きんせん", m: "money, cash" },
      { w: "一銭", r: "いっせん", m: "one sen; a single penny" }
    ]
  },
  {
    k: "費", meaning: "cost, expense", on: ["ヒ"], kun: ["つい.やす"], group: "nw-economy", strokes: 12, radical: "貝",
    mnemonic: "Money 貝 (shells were once money) under a sign 弗 that says 'not': money that won't stay put, your expenses.",
    notes: [
      "As a suffix it means 'cost of': 交通費 (こうつうひ, travel costs, often paid by employers), 食費 (しょくひ, food), 光熱費 (こうねつひ, utility bills).",
      "費用 (ひよう) is the general word for cost; 会費 (かいひ) is a membership fee.",
      "The bottom 貝 is shared with 買 (buy) and 貸 (lend)."
    ],
    lookalikes: ["買"],
    examples: [
      { w: "費用", r: "ひよう", m: "cost, expenses" },
      { w: "交通費", r: "こうつうひ", m: "travel expenses" },
      { w: "光熱費", r: "こうねつひ", m: "utility bills" }
    ]
  },
  {
    k: "収", meaning: "income, obtain", on: ["シュウ"], kun: ["おさ.める", "おさ.まる"], group: "nw-economy", strokes: 4, radical: "又",
    mnemonic: "A hand 又 gathering a bundle tied with a cord: bringing in the harvest, your income.",
    notes: [
      "領収書 (りょうしゅうしょ) is a formal receipt; ask 領収書をください at a shop or taxi for one with a name on it.",
      "収入 (しゅうにゅう) is income and 年収 (ねんしゅう) yearly income, shown on job ads and in news about wages.",
      "Only four strokes. Don't confuse it with 取 (take), which also has 又 on the right."
    ],
    lookalikes: ["取"],
    examples: [
      { w: "収入", r: "しゅうにゅう", m: "income" },
      { w: "年収", r: "ねんしゅう", m: "annual income" },
      { w: "領収書", r: "りょうしゅうしょ", m: "receipt" }
    ]
  },
  {
    k: "産", meaning: "produce, give birth", on: ["サン"], kun: ["う.む", "う.まれる"], group: "nw-economy", strokes: 11, radical: "生",
    mnemonic: "A little shelter with a sign 立 on the roof, and new life 生 coming out underneath: where things are born and made.",
    notes: [
      "Food labels give the origin with 産: 国産 (こくさん, made in Japan), 北海道産, 外国産. Supermarkets show it on every pack of meat and fish.",
      "お土産 (おみやげ) is an irregular reading: a souvenir gift from a trip.",
      "産む (うむ) is to give birth; 出産 (しゅっさん) is childbirth. 産業 (さんぎょう), industry, is a news word."
    ],
    lookalikes: [],
    examples: [
      { w: "国産", r: "こくさん", m: "domestically produced" },
      { w: "産業", r: "さんぎょう", m: "industry" },
      { w: "お土産", r: "おみやげ", m: "souvenir gift" }
    ]
  },
  {
    k: "企", meaning: "plan, undertake", on: ["キ"], kun: ["くわだ.てる"], group: "nw-economy", strokes: 6, radical: "人",
    mnemonic: "A person 人 standing on tiptoe 止 to see far ahead: planning the next move.",
    notes: [
      "企業 (きぎょう) is the news word for a company or business; 大企業 (だいきぎょう) are big firms and 中小企業 (ちゅうしょうきぎょう) small and medium ones.",
      "企画 (きかく) is a plan or project at work; a proposal is a 企画書 (きかくしょ).",
      "The roof 人 sits on top of 止 (stop)."
    ],
    lookalikes: [],
    examples: [
      { w: "企業", r: "きぎょう", m: "company, enterprise" },
      { w: "大企業", r: "だいきぎょう", m: "large company" },
      { w: "企画", r: "きかく", m: "plan, project" }
    ]
  },
  {
    k: "減", meaning: "decrease", on: ["ゲン"], kun: ["へ.る", "へ.らす"], group: "nw-economy", strokes: 12, radical: "氵",
    mnemonic: "Water 氵 draining out of a big pot 咸: the level keeps going down.",
    notes: [
      "Headlines write a fall as a number plus 減: 前年比10%減 (down 10% on last year). 人口減少 (じんこうげんしょう) is population decline.",
      "減る is 'to go down', 減らす 'to cut'. おなかが減った means 'I'm hungry'.",
      "いい加減 (いいかげん) means sloppy or half-hearted. Don't confuse 減 with 感 (feeling), which has the same 咸 over 心."
    ],
    lookalikes: ["感"],
    examples: [
      { w: "減る", r: "へる", m: "to decrease" },
      { w: "減少", r: "げんしょう", m: "decrease, decline" },
      { w: "いい加減", r: "いいかげん", m: "sloppy, half-hearted" }
    ]
  },
  {
    k: "増", meaning: "increase", on: ["ゾウ"], kun: ["ふ.える", "ふ.やす", "ま.す"], group: "nw-economy", strokes: 14, radical: "土",
    mnemonic: "Earth 土 piled beside a stack of steaming pots 曽, layer on layer: the heap keeps growing.",
    notes: [
      "Headlines write a rise as a number plus 増: 売上高5%増. 増税 (ぞうぜい) is a tax rise.",
      "Snack packs shout 増量 (ぞうりょう): 'more inside'. 二割増し (にわりまし) is 20% extra.",
      "増える (to increase, by itself) vs 増やす (to increase something)."
    ],
    lookalikes: [],
    examples: [
      { w: "増える", r: "ふえる", m: "to increase" },
      { w: "増加", r: "ぞうか", m: "increase, rise" },
      { w: "増量", r: "ぞうりょう", m: "extra amount (on packs)" }
    ]
  },
  {
    k: "倍", meaning: "double, times", on: ["バイ"], kun: [], group: "nw-economy", strokes: 10, radical: "亻",
    mnemonic: "A person 亻 beside a speaker on a stand 咅, shouting the offer: double points today!",
    notes: [
      "Shops and apps advertise ポイント2倍 (double points) or ポイント5倍.",
      "倍 alone means double: 倍になる (to double). With a number it means 'times': 三倍 (さんばい).",
      "倍率 (ばいりつ) is the ratio of applicants to places, quoted in news about exams and housing lotteries. Compare 部 (part), with the same 咅 on the left."
    ],
    lookalikes: ["部"],
    examples: [
      { w: "二倍", r: "にばい", m: "twice, double" },
      { w: "三倍", r: "さんばい", m: "three times" },
      { w: "倍率", r: "ばいりつ", m: "ratio, competition rate" }
    ]
  },
  {
    k: "比", meaning: "compare, ratio", on: ["ヒ"], kun: ["くら.べる"], group: "nw-economy", strokes: 4, radical: "比",
    mnemonic: "Two spoons 匕 held up side by side to compare which holds more.",
    notes: [
      "News figures add 比 for 'compared with': 前年比 (ぜんねんひ, year on year), 前月比 (ぜんげつひ, month on month).",
      "Food shops offer 食べ比べ (たべくらべ), tasting several kinds side by side.",
      "Don't confuse it with 北 (north), whose two halves face away from each other."
    ],
    lookalikes: ["北"],
    examples: [
      { w: "比べる", r: "くらべる", m: "to compare" },
      { w: "前年比", r: "ぜんねんひ", m: "compared with last year" },
      { w: "比率", r: "ひりつ", m: "ratio, proportion" }
    ]
  },
  {
    k: "量", meaning: "amount, measure", on: ["リョウ"], kun: ["はか.る"], group: "nw-economy", strokes: 12, radical: "里",
    mnemonic: "The sun 旦 rising over a village 里 where every sack of rice is weighed: measuring the amount.",
    notes: [
      "容量 (ようりょう) is capacity, as in phone storage or a data plan; 大量 (たいりょう) is a large amount.",
      "Packs say 増量 (ぞうりょう, more inside) or 内容量 (ないようりょう, net contents).",
      "Don't confuse it with 重 (heavy): 量 has 日 on top and a shorter middle."
    ],
    lookalikes: ["重"],
    examples: [
      { w: "量", r: "りょう", m: "amount, quantity" },
      { w: "大量", r: "たいりょう", m: "large quantity" },
      { w: "容量", r: "ようりょう", m: "capacity, storage" }
    ]
  },
  {
    k: "均", meaning: "level, even, average", on: ["キン"], kun: [], group: "nw-economy", strokes: 7, radical: "土",
    mnemonic: "Earth 土 smoothed flat with a scoop 匀: everything levelled out to the average.",
    notes: [
      "平均 (へいきん), average, is everywhere in the news: 平均年収, 平均気温.",
      "均一 (きんいつ) means one flat price: 全品100円均一. The hundred-yen shops are nicknamed 百均 (ひゃっきん).",
      "The stock index 日経平均 (にっけいへいきん) is often just called 日経."
    ],
    lookalikes: [],
    examples: [
      { w: "平均", r: "へいきん", m: "average" },
      { w: "均一", r: "きんいつ", m: "uniform, flat (price)" },
      { w: "均等", r: "きんとう", m: "equal, even" }
    ]
  },
  {
    k: "差", meaning: "difference", on: ["サ"], kun: ["さ.す"], group: "nw-economy", strokes: 10, radical: "工",
    mnemonic: "A sheep 羊 whose fleece hangs lopsided over a carpenter's square 工: one side longer than the other, the difference.",
    notes: [
      "交差点 (こうさてん), crossroads, is on road signs and in directions: 次の交差点を右.",
      "Sports news gives the margin with 差: 3点差 (a three-point lead). 時差 (じさ) is a time difference, or jet lag as 時差ぼけ.",
      "傘を差す (かさをさす) is to put up an umbrella. Compare 着 (wear), with a similar sheep top."
    ],
    lookalikes: ["着"],
    examples: [
      { w: "交差点", r: "こうさてん", m: "crossroads, intersection" },
      { w: "時差", r: "じさ", m: "time difference" },
      { w: "差す", r: "さす", m: "to put up (an umbrella)" }
    ]
  },
  {
    k: "基", meaning: "base, foundation", on: ["キ"], kun: ["もと"], group: "nw-economy", strokes: 11, radical: "土",
    mnemonic: "A winnowing basket 其 resting on solid earth 土: everything starts from a firm base.",
    notes: [
      "基本 (きほん) means basics; 基本料金 (きほんりょうきん) is the base fee on phone and utility bills.",
      "News uses it as a counter for big installations: エレベーター2基, 原発1基.",
      "基準 (きじゅん) is a standard; 基づく (もとづく) means 'based on'. Compare 期 (period), with 其 on the left."
    ],
    lookalikes: ["期"],
    examples: [
      { w: "基本", r: "きほん", m: "basics, foundation" },
      { w: "基準", r: "きじゅん", m: "standard, criterion" },
      { w: "基地", r: "きち", m: "base (military)" }
    ]
  },
  {
    k: "源", meaning: "source, origin", on: ["ゲン"], kun: ["みなもと"], group: "nw-economy", strokes: 13, radical: "氵",
    mnemonic: "Water 氵 springing up in the meadow 原 at the foot of a cliff: the source of the river.",
    notes: [
      "電源 (でんげん) is a power supply: 電源を切る (switch off). Cafes and trains mark seats with sockets 電源あり.",
      "資源ごみ (しげんごみ) is the recycling collection day for cans, bottles and paper.",
      "Made from 原 (field, origin) plus water; don't mix it up with 願 (wish)."
    ],
    lookalikes: ["原", "願"],
    examples: [
      { w: "電源", r: "でんげん", m: "power supply, power switch" },
      { w: "資源", r: "しげん", m: "resources" },
      { w: "水源", r: "すいげん", m: "water source" }
    ]
  },
  {
    k: "材", meaning: "material, timber", on: ["ザイ"], kun: [], group: "nw-economy", strokes: 7, radical: "木",
    mnemonic: "A tree 木 plus talent 才: raw timber that a skilled hand turns into something useful.",
    notes: [
      "材料 (ざいりょう) is ingredients or materials, the first heading of every recipe; 食材 (しょくざい) is food ingredients.",
      "取材 (しゅざい) is news reporting: reporters gathering material. 人材 (じんざい) is staff or talent, as in job agencies.",
      "Compare 村 (village): the same tree, but a different shape on the right."
    ],
    lookalikes: ["村"],
    examples: [
      { w: "材料", r: "ざいりょう", m: "ingredients, materials" },
      { w: "食材", r: "しょくざい", m: "food ingredients" },
      { w: "取材", r: "しゅざい", m: "news coverage, reporting" }
    ]
  },
  {
    k: "労", meaning: "labour, toil", on: ["ロウ"], kun: [], group: "nw-economy", strokes: 7, radical: "力",
    mnemonic: "Sweat flying off the top of a head and strength 力 underneath: hard labour.",
    notes: [
      "労働 (ろうどう) is labour; 労働時間 (working hours) and 労働者 (workers) are frequent news words.",
      "過労 (かろう) is overwork; the news term for death from overwork is 過労死 (かろうし).",
      "The top is the same as in 学 (study) and 営 (run a business)."
    ],
    lookalikes: ["学", "営"],
    examples: [
      { w: "労働", r: "ろうどう", m: "labour, work" },
      { w: "労働者", r: "ろうどうしゃ", m: "worker" },
      { w: "過労", r: "かろう", m: "overwork" }
    ]
  },
  {
    k: "職", meaning: "job, post", on: ["ショク"], kun: [], group: "nw-economy", strokes: 18, radical: "耳",
    mnemonic: "An ear 耳 listening carefully beside a craftsman's rack of tools 戠: someone who knows their trade.",
    notes: [
      "職員 (しょくいん) is staff; 職員室 is the staff room at school and 職員用 marks staff-only doors.",
      "Forms ask for 職業 (しょくぎょう), occupation. News reports describe people as 無職 (むしょく), unemployed.",
      "18 strokes. Don't confuse it with 織 (weave), which has thread 糸 on the left instead of an ear."
    ],
    lookalikes: ["織"],
    examples: [
      { w: "職場", r: "しょくば", m: "workplace" },
      { w: "職員", r: "しょくいん", m: "staff member" },
      { w: "転職", r: "てんしょく", m: "changing jobs" }
    ]
  },
  {
    k: "格", meaning: "status, rank", on: ["カク"], kun: [], group: "nw-economy", strokes: 10, radical: "木",
    mnemonic: "Each 各 tree 木 in the orchard is graded and labelled: everything has its rank.",
    notes: [
      "価格 (かかく) is price, and 格安 (かくやす) means cut-price: 格安SIM, 格安航空 (budget airlines).",
      "合格 (ごうかく) is passing an exam; 資格 (しかく) is a qualification, often required in job ads.",
      "Built from 木 and 各 (each); compare 客 (guest), which puts 各 under a roof."
    ],
    lookalikes: ["各", "客"],
    examples: [
      { w: "価格", r: "かかく", m: "price" },
      { w: "合格", r: "ごうかく", m: "passing (an exam)" },
      { w: "資格", r: "しかく", m: "qualification" }
    ]
  },
  {
    k: "勝", meaning: "win", on: ["ショウ"], kun: ["か.つ"], group: "nw-sport", strokes: 12, radical: "力",
    mnemonic: "A body 月 on the left; on the right two arms thrown up over all your strength 力: arms raised, you've won!",
    notes: [
      "優勝 (ゆうしょう) is winning the championship; a headline 'X、優勝' means X took the title, and 決勝 (けっしょう) is the final.",
      "勝つ (かつ) is to win. 勝手 (かって) means 'as one pleases': 勝手に入らないで means 'do not enter without permission'.",
      "The top right looks like the top of 券 (ticket), but 勝 ends in 力, not a knife."
    ],
    lookalikes: ["券"],
    examples: [
      { w: "勝つ", r: "かつ", m: "to win" },
      { w: "優勝", r: "ゆうしょう", m: "championship win" },
      { w: "勝手", r: "かって", m: "as one pleases, without permission" }
    ]
  },
  {
    k: "敗", meaning: "defeat, lose", on: ["ハイ"], kun: ["やぶ.れる"], group: "nw-sport", strokes: 11, radical: "攵",
    mnemonic: "Someone keeps striking 攵 a precious shell 貝 until it cracks: smashed and defeated.",
    notes: [
      "失敗 (しっぱい) is a failure or mistake, an everyday word; note the sound change to ぱい.",
      "On the sports pages, 勝敗 (しょうはい) is win or loss, and a 3-1 record is 3勝1敗 (さんしょういっぱい); 敗れる (やぶれる) is to be beaten.",
      "The left is 貝 (shell, money), as in 買 and 賞."
    ],
    lookalikes: [],
    examples: [
      { w: "失敗", r: "しっぱい", m: "failure, mistake" },
      { w: "勝敗", r: "しょうはい", m: "victory or defeat" },
      { w: "敗れる", r: "やぶれる", m: "to be defeated" }
    ]
  },
  {
    k: "戦", meaning: "war, battle, match", on: ["セン"], kun: ["たたか.う", "いくさ"], group: "nw-sport", strokes: 13, radical: "戈",
    mnemonic: "A single 単 fighter raises a halberd 戈: ready for battle.",
    notes: [
      "On the sports pages 戦 is a match: 初戦 (しょせん, first match), 決勝戦 (けっしょうせん, the final), 日本戦 (にほんせん, the game against Japan).",
      "戦う (たたかう) is to fight; 作戦 (さくせん) is a plan or strategy. 戦後 (せんご) means 'after the war', meaning the Second World War.",
      "The halberd 戈 on the right ends with a dot at the top right, drawn last."
    ],
    lookalikes: [],
    examples: [
      { w: "戦う", r: "たたかう", m: "to fight" },
      { w: "決勝戦", r: "けっしょうせん", m: "final (match)" },
      { w: "作戦", r: "さくせん", m: "strategy, plan" }
    ]
  },
  {
    k: "打", meaning: "hit, strike", on: ["ダ"], kun: ["う.つ"], group: "nw-sport", strokes: 5, radical: "扌",
    mnemonic: "A hand 扌 bringing the hammer down on a nail 丁: hit it!",
    notes: [
      "打つ (うつ) is to hit, and also to type: メールを打つ. 打ち合わせ (うちあわせ) is a work meeting, heard daily in offices.",
      "In baseball 打者 (だしゃ) is the batter, 安打 (あんだ) a base hit and 打率 (だりつ) the batting average.",
      "Only five strokes: the right side is a crossbar with a hooked post."
    ],
    lookalikes: [],
    examples: [
      { w: "打つ", r: "うつ", m: "to hit; to type" },
      { w: "打ち合わせ", r: "うちあわせ", m: "(work) meeting" },
      { w: "打者", r: "だしゃ", m: "batter" }
    ]
  },
  {
    k: "投", meaning: "throw", on: ["トウ"], kun: ["な.げる"], group: "nw-sport", strokes: 7, radical: "扌",
    mnemonic: "A hand 扌 and an arm winding up with a club 殳: wind up and throw.",
    notes: [
      "投げる (なげる) is to throw; in baseball 投手 (とうしゅ) is the pitcher.",
      "投票 (とうひょう) is voting: at election time, schools and community halls become 投票所 (とうひょうじょ, polling stations).",
      "The right side 殳 is the same as in 役 and 殺."
    ],
    lookalikes: ["役"],
    examples: [
      { w: "投げる", r: "なげる", m: "to throw" },
      { w: "投手", r: "とうしゅ", m: "pitcher" },
      { w: "投票", r: "とうひょう", m: "voting" }
    ]
  },
  {
    k: "球", meaning: "ball, sphere", on: ["キュウ"], kun: ["たま"], group: "nw-sport", strokes: 11, radical: "王",
    mnemonic: "A jewel 王 polished again and again because everyone wants 求 it perfectly round: a ball.",
    notes: [
      "野球 (やきゅう) is baseball, Japan's biggest team sport; 地球 (ちきゅう) is the Earth.",
      "電球 (でんきゅう) is a light bulb; 球 (たま) is a ball, as in a pitch in baseball.",
      "Compare 救 (rescue), as in 救急: the same 求, with a striking hand on the right instead of a jewel on the left."
    ],
    lookalikes: ["救"],
    examples: [
      { w: "野球", r: "やきゅう", m: "baseball" },
      { w: "地球", r: "ちきゅう", m: "the Earth" },
      { w: "電球", r: "でんきゅう", m: "light bulb" }
    ]
  },
  {
    k: "塁", meaning: "base (baseball)", on: ["ルイ"], kun: [], group: "nw-sport", strokes: 12, radical: "土",
    mnemonic: "A field 田 of dirt heaped up on earth 土: a raised mound, the old fort wall that became a baseball base.",
    notes: [
      "Almost only in baseball: 一塁 (いちるい) first base, 本塁 (ほんるい) home plate, 走塁 (そうるい) base running.",
      "本塁打 (ほんるいだ) is the newspaper word for a home run; on TV it's ホームラン.",
      "Field 田 on top, earth 土 at the bottom, two short marks in between."
    ],
    lookalikes: [],
    examples: [
      { w: "一塁", r: "いちるい", m: "first base" },
      { w: "本塁打", r: "ほんるいだ", m: "home run" },
      { w: "走塁", r: "そうるい", m: "base running" }
    ]
  },
  {
    k: "輪", meaning: "wheel, ring", on: ["リン"], kun: ["わ"], group: "nw-sport", strokes: 15, radical: "車",
    mnemonic: "A cart 車 next to 侖, neatly ordered slats under a roof: the spokes of a wheel in perfect order.",
    notes: [
      "五輪 (ごりん), the five rings, is the headline word for the Olympics.",
      "輪 (わ) is a ring or circle; 指輪 (ゆびわ) is a finger ring, and 一輪車 (いちりんしゃ) a unicycle or wheelbarrow.",
      "Compare 論 (argument): the same right side, with 言 instead of 車."
    ],
    lookalikes: ["論"],
    examples: [
      { w: "五輪", r: "ごりん", m: "the Olympics" },
      { w: "指輪", r: "ゆびわ", m: "(finger) ring" },
      { w: "車輪", r: "しゃりん", m: "wheel" }
    ]
  },
  {
    k: "競", meaning: "compete, race", on: ["キョウ", "ケイ"], kun: ["きそ.う"], group: "nw-sport", strokes: 20, radical: "立",
    mnemonic: "Two older brothers 兄, each standing 立 shoulder to shoulder, racing to beat each other.",
    notes: [
      "競技 (きょうぎ) is a sporting event; 競う (きそう) is to compete.",
      "Read けい in 競馬 (けいば, horse racing); betting shops and race tracks show it in big letters.",
      "20 strokes: two copies of 立 over 兄, the left one slightly narrower."
    ],
    lookalikes: [],
    examples: [
      { w: "競技", r: "きょうぎ", m: "sporting event, competition" },
      { w: "競馬", r: "けいば", m: "horse racing" },
      { w: "競う", r: "きそう", m: "to compete" }
    ]
  },
  {
    k: "技", meaning: "skill, technique", on: ["ギ"], kun: ["わざ"], group: "nw-sport", strokes: 7, radical: "扌",
    mnemonic: "A hand 扌 holding a branch 支 and carving it with practised skill.",
    notes: [
      "競技 (きょうぎ) is a sporting event; 演技 (えんぎ) is acting, or a routine in figure skating and gymnastics.",
      "特技 (とくぎ) is a special skill, asked for in self-introductions and on CVs; in judo and sumo a technique is a 技 (わざ).",
      "The right side 支 (support) is the same as in 支払い (しはらい, payment)."
    ],
    lookalikes: [],
    examples: [
      { w: "競技", r: "きょうぎ", m: "sporting event" },
      { w: "演技", r: "えんぎ", m: "acting, performance" },
      { w: "特技", r: "とくぎ", m: "special skill" }
    ]
  },
  {
    k: "賞", meaning: "prize, award", on: ["ショウ"], kun: [], group: "nw-sport", strokes: 15, radical: "貝",
    mnemonic: "Under a sparkling roof 尚 sits a precious shell 貝: the prize on display.",
    notes: [
      "On every food label, 賞味期限 (しょうみきげん) is the best-before date.",
      "In the news: ノーベル賞 (ノーベルしょう, Nobel Prize), 賞金 (しょうきん, prize money), 入賞 (にゅうしょう, finishing among the prizewinners).",
      "常 (usual) and 堂 (hall) share the same top; 賞 has 貝 underneath."
    ],
    lookalikes: ["常", "堂"],
    examples: [
      { w: "賞味期限", r: "しょうみきげん", m: "best-before date" },
      { w: "賞金", r: "しょうきん", m: "prize money" },
      { w: "入賞", r: "にゅうしょう", m: "winning a prize" }
    ]
  },
  {
    k: "督", meaning: "supervise, direct", on: ["トク"], kun: [], group: "nw-sport", strokes: 13, radical: "目",
    mnemonic: "An uncle 叔 keeping his eye 目 on everyone below: the coach watching his team.",
    notes: [
      "Almost always in 監督 (かんとく): a film director, or the manager of a sports team. Baseball news calls the manager just 監督.",
      "Read とく; it rarely appears outside 監督.",
      "The bottom is 目 (eye), with three inner lines, not 日."
    ],
    lookalikes: [],
    examples: [
      { w: "監督", r: "かんとく", m: "director, team manager" },
      { w: "映画監督", r: "えいがかんとく", m: "film director" },
      { w: "総監督", r: "そうかんとく", m: "general manager, chief director" }
    ]
  },
  {
    k: "点", meaning: "point, dot, mark", on: ["テン"], kun: [], group: "nw-sport", strokes: 9, radical: "灬",
    mnemonic: "A fortune-teller 占 crouched over a fire 灬: the sparks leave little dots, and every dot scores a point.",
    notes: [
      "交差点 (こうさてん) is an intersection, said in every set of directions; 100点 (ひゃくてん) is full marks on a test.",
      "In sport 得点 (とくてん) is points scored and 同点 (どうてん) a tie; 点数 (てんすう) is a score.",
      "Compare 店 (shop): 占 under a roof, with no fire dots below."
    ],
    lookalikes: ["店", "黒"],
    examples: [
      { w: "交差点", r: "こうさてん", m: "intersection" },
      { w: "得点", r: "とくてん", m: "points scored" },
      { w: "点数", r: "てんすう", m: "score, marks" }
    ]
  },
  {
    k: "位", meaning: "rank, place", on: ["イ"], kun: ["くらい"], group: "nw-sport", strokes: 7, radical: "亻",
    mnemonic: "A person 亻 standing 立 on the podium in their place: first, second or third.",
    notes: [
      "Rankings and league tables: 1位 (いちい) first place, 2位 (にい) second; 上位 (じょうい) the top ranks.",
      "くらい (about) after a number is usually written in kana, くらい or ぐらい: 10分ぐらい. 位置 (いち) is a position.",
      "倍 (double) is the same with 口 added underneath on the right."
    ],
    lookalikes: ["倍"],
    examples: [
      { w: "一位", r: "いちい", m: "first place" },
      { w: "上位", r: "じょうい", m: "high rank, top places" },
      { w: "位置", r: "いち", m: "position, location" }
    ]
  },
  {
    k: "負", meaning: "lose, bear", on: ["フ"], kun: ["ま.ける", "お.う"], group: "nw-sport", strokes: 9, radical: "貝",
    mnemonic: "A person crouched over a pile of money 貝, the debt heavy on their back: they've lost.",
    notes: [
      "負ける (まける) is to lose; 勝ち負け (かちまけ) is winning and losing. In markets, まけて means 'give me a discount'.",
      "勝負 (しょうぶ) is a contest or match; 負担 (ふたん) is a burden, as in the share of a bill you pay.",
      "The top is a small bent person, two strokes; the bottom is 貝 (shell, money)."
    ],
    lookalikes: [],
    examples: [
      { w: "負ける", r: "まける", m: "to lose" },
      { w: "勝負", r: "しょうぶ", m: "match, contest" },
      { w: "負担", r: "ふたん", m: "burden, cost borne" }
    ]
  },
  {
    k: "県", meaning: "prefecture", on: ["ケン"], kun: [], group: "nw-places", strokes: 9, radical: "目",
    mnemonic: "A big eye hanging on a hook keeps watch over 小, the small towns below: the prefecture office watching over its patch.",
    notes: [
      "Japan has 47 prefectures: 1 都 (Tokyo), 1 道 (Hokkaido), 2 府 (Osaka, Kyoto) and 43 県. Addresses start with them: 福岡県, 長崎県.",
      "In headlines 県警 (けんけい) is the prefectural police and 県知事 (けんちじ) the governor.",
      "Always read けん; the kun reading is never used."
    ],
    lookalikes: [],
    examples: [
      { w: "県庁", r: "けんちょう", m: "prefectural office" },
      { w: "県立", r: "けんりつ", m: "prefectural (school, hospital)" },
      { w: "都道府県", r: "とどうふけん", m: "Japan's prefectures (all 47)" }
    ]
  },
  {
    k: "阪", meaning: "slope (Osaka)", on: ["ハン"], kun: ["さか"], group: "nw-places", strokes: 7, radical: "阝",
    mnemonic: "Hill-steps 阝 beside 反, to turn back: a slope so steep that people turn back halfway up. Osaka was the town at the foot of the slope.",
    notes: [
      "You meet it almost only in 大阪 (おおさか) and in railway names: 阪急 (はんきゅう), 阪神 (はんしん), 京阪 (けいはん).",
      "Headlines use 阪 as short for Osaka: 京阪神 (けいはんしん) is the Kyoto-Osaka-Kobe area.",
      "An ordinary slope in a street name is usually written with the earth radical instead, not with this hill radical."
    ],
    lookalikes: [],
    examples: [
      { w: "大阪", r: "おおさか", m: "Osaka" },
      { w: "大阪府", r: "おおさかふ", m: "Osaka Prefecture" },
      { w: "阪神", r: "はんしん", m: "Osaka-Kobe (area, railway, baseball team)" }
    ]
  },
  {
    k: "岡", meaning: "hill", on: ["コウ"], kun: ["おか"], group: "nw-places", strokes: 8, radical: "山",
    mnemonic: "A wide frame 冂 with a little mountain 山 inside: a low hill seen through a window, like the おか in Fukuoka.",
    notes: [
      "Mostly seen in place names: 福岡 (ふくおか), 岡山 (おかやま), 盛岡 (もりおか), and in family names like 岡田 (おかだ).",
      "Read おか in nearly every name; the on reading こう is rare.",
      "The mountain inside sits under two short slanting strokes; don't leave them out."
    ],
    lookalikes: ["同"],
    examples: [
      { w: "福岡", r: "ふくおか", m: "Fukuoka" },
      { w: "岡山", r: "おかやま", m: "Okayama" },
      { w: "盛岡", r: "もりおか", m: "Morioka" }
    ]
  },
  {
    k: "福", meaning: "good fortune, luck", on: ["フク"], kun: [], group: "nw-places", strokes: 13, radical: "礻",
    mnemonic: "An altar 礻 beside 畐, a jar filled to the brim: offerings piled high at the altar bring good fortune.",
    notes: [
      "In the news mostly in place names: 福岡 (ふくおか), 福島 (ふくしま), 福井 (ふくい).",
      "New Year sales sell lucky bags called ふくぶくろ, and at the bean-throwing festival people shout ふくはうち, 'luck, come in!'.",
      "Always read ふく. 福 alone appears on New Year decorations and charms as a wish for good luck."
    ],
    lookalikes: [],
    examples: [
      { w: "福岡", r: "ふくおか", m: "Fukuoka" },
      { w: "福島", r: "ふくしま", m: "Fukushima" },
      { w: "福引き", r: "ふくびき", m: "prize lottery (at shops)" }
    ]
  },
  {
    k: "宮", meaning: "shrine, palace", on: ["キュウ", "グウ"], kun: ["みや"], group: "nw-places", strokes: 10, radical: "宀",
    mnemonic: "A roof 宀 over 呂, two rooms joined by a passage: a palace or great shrine with room after room under one roof.",
    notes: [
      "Big shrines are 〜神宮 (じんぐう), like 明治神宮 in Tokyo. A baby's first shrine visit is お宮参り (おみやまいり).",
      "In names: 宮城 (みやぎ), 宮崎 (みやざき), 宮本 (みやもと). In imperial news 宮内庁 (くないちょう) reads it く.",
      "Don't confuse it with 官 (official) or 営 (run a business), which have similar bottoms."
    ],
    lookalikes: ["官", "営"],
    examples: [
      { w: "宮城県", r: "みやぎけん", m: "Miyagi Prefecture" },
      { w: "宮崎", r: "みやざき", m: "Miyazaki" },
      { w: "神宮", r: "じんぐう", m: "grand Shinto shrine" }
    ]
  },
  {
    k: "藤", meaning: "wisteria", on: ["トウ"], kun: ["ふじ"], group: "nw-places", strokes: 18, radical: "艹",
    mnemonic: "Grass 艹 over 滕, a moon and water dripping below: purple wisteria vines hanging over a pond in the moonlight.",
    notes: [
      "A star of family names, read とう: 佐藤 (さとう) is the most common surname in Japan, and いとう and 加藤 (かとう) are also in the top ten.",
      "As a plant it is ふじ: wisteria tunnels bloom in late April and May. Not the ふじ of Mount Fuji, which is written differently.",
      "18 strokes: the right side packs a moon, a cross-piece and a water shape; take it slowly."
    ],
    lookalikes: [],
    examples: [
      { w: "佐藤", r: "さとう", m: "Satō (surname)" },
      { w: "加藤", r: "かとう", m: "Katō (surname)" },
      { w: "藤色", r: "ふじいろ", m: "light purple, wisteria colour" }
    ]
  },
  {
    k: "井", meaning: "well", on: ["ショウ"], kun: ["い"], group: "nw-places", strokes: 4, radical: "二",
    mnemonic: "Two lines 二 crossed by two more: the wooden frame around the top of a village well, seen from above.",
    notes: [
      "Very common in names: 井上 (いのうえ), 石井 (いしい), 松井 (まつい), and 福井 (ふくい) prefecture.",
      "天井 (てんじょう, ceiling) is the everyday word with an on reading; the well itself is 井戸 (いど).",
      "Add a dot in the middle and you get 丼 (どんぶり), a rice bowl."
    ],
    lookalikes: ["丼"],
    examples: [
      { w: "井戸", r: "いど", m: "well (for water)" },
      { w: "天井", r: "てんじょう", m: "ceiling" },
      { w: "井上", r: "いのうえ", m: "Inoue (surname)" }
    ]
  },
  {
    k: "崎", meaning: "cape, headland", on: ["キ"], kun: ["さき"], group: "nw-places", strokes: 11, radical: "山",
    mnemonic: "A mountain 山 beside 奇, strange: a strangely shaped mountain that juts out into the sea, a cape.",
    notes: [
      "Read さき or ざき in names: 長崎 (ながさき), 宮崎 (みやざき), 川崎 (かわさき), and family names like 山崎 (やまざき).",
      "Some families write a variant with a different top right; on most signs and in news you see this standard form.",
      "The on reading き is almost never needed."
    ],
    lookalikes: [],
    examples: [
      { w: "長崎", r: "ながさき", m: "Nagasaki" },
      { w: "宮崎", r: "みやざき", m: "Miyazaki" },
      { w: "川崎", r: "かわさき", m: "Kawasaki" }
    ]
  },
  {
    k: "松", meaning: "pine tree", on: ["ショウ"], kun: ["まつ"], group: "nw-places", strokes: 8, radical: "木",
    mnemonic: "A tree 木 beside 公, public: the tree you find in every public garden, shrine and castle park in Japan, the pine.",
    notes: [
      "On restaurant menus 松, 竹, 梅 (しょうちくばい) grade set meals: 松 is the top course, 梅 the simplest.",
      "門松 (かどまつ) are the pine and bamboo decorations put by doors at New Year.",
      "Common in names, read まつ: 松本 (まつもと), 松田 (まつだ), 松山 (まつやま)."
    ],
    lookalikes: [],
    examples: [
      { w: "松山", r: "まつやま", m: "Matsuyama" },
      { w: "門松", r: "かどまつ", m: "New Year pine decoration" },
      { w: "松竹梅", r: "しょうちくばい", m: "pine-bamboo-plum (top, middle, basic grades)" }
    ]
  },
  {
    k: "谷", meaning: "valley", on: ["コク"], kun: ["たに"], group: "nw-places", strokes: 7, radical: "谷",
    mnemonic: "Two strokes splitting apart, then two wider ones, then a mouth 口 at the bottom: hillsides opening out into the mouth of a valley.",
    notes: [
      "In Tokyo place names it is often や or がや: しぶや, 世田谷 (せたがや), 四谷 (よつや).",
      "Elsewhere it is たに: 谷 (たに, valley), and family names like 谷口 (たにぐち). The on reading こく is rare.",
      "It sits under a roof in 容 (contents), which is a different kanji."
    ],
    lookalikes: ["容"],
    examples: [
      { w: "谷", r: "たに", m: "valley" },
      { w: "谷間", r: "たにま", m: "ravine, valley" },
      { w: "世田谷", r: "せたがや", m: "Setagaya (Tokyo ward)" }
    ]
  },
  {
    k: "沖", meaning: "offshore, open sea", on: ["チュウ"], kun: ["おき"], group: "nw-places", strokes: 7, radical: "氵",
    mnemonic: "Water 氵 and middle 中: out in the middle of the water, far from the shore.",
    notes: [
      "Earthquake reports name the epicentre as 〜沖 (おき): 千葉県沖 means 'off the coast of Chiba'.",
      "It is the first kanji of おきなわ (Okinawa), the island prefecture.",
      "Don't mix it up with 油 (oil), which has a closed box on the right."
    ],
    lookalikes: ["油"],
    examples: [
      { w: "沖", r: "おき", m: "offshore, the open sea" },
      { w: "沖合", r: "おきあい", m: "offshore waters" },
      { w: "千葉県沖", r: "ちばけんおき", m: "off the coast of Chiba" }
    ]
  },
  {
    k: "韓", meaning: "Korea (South)", on: ["カン"], kun: [], group: "nw-places", strokes: 18, radical: "韋",
    mnemonic: "The left half of 朝, the morning sun rising through grass, beside 韋, a tanned hide: the land of the morning, just across the sea.",
    notes: [
      "韓国 (かんこく) is South Korea; alone in headlines 韓 stands for it, and 日韓 (にっかん) means Japan-South Korea.",
      "North Korea is called きたちょうせん, without this kanji.",
      "The left side is the same as in 幹 and 朝; the right side 韋 makes it 18 strokes."
    ],
    lookalikes: ["幹", "朝"],
    examples: [
      { w: "韓国", r: "かんこく", m: "South Korea" },
      { w: "韓国語", r: "かんこくご", m: "Korean (language)" },
      { w: "日韓", r: "にっかん", m: "Japan-South Korea" }
    ]
  },
  {
    k: "州", meaning: "state, province", on: ["シュウ"], kun: [], group: "nw-places", strokes: 6, radical: "川",
    mnemonic: "A river 川 with three dots 丶 of sand between its streams: islands of land between the waters, a province.",
    notes: [
      "Two of Japan's main islands: 本州 (ほんしゅう) and 九州 (きゅうしゅう). The other two are 北海道 and 四国.",
      "In world news it means a state: カリフォルニア州 (California), and おうしゅう is Europe.",
      "Read しゅう in the words you meet; the kun reading す (sandbank) survives mainly in place names."
    ],
    lookalikes: ["川"],
    examples: [
      { w: "九州", r: "きゅうしゅう", m: "Kyūshū" },
      { w: "本州", r: "ほんしゅう", m: "Honshū (main island)" },
      { w: "州立", r: "しゅうりつ", m: "state-run (as in a US state university)" }
    ]
  },
  {
    k: "城", meaning: "castle", on: ["ジョウ"], kun: ["しろ"], group: "nw-places", strokes: 9, radical: "土",
    mnemonic: "Earth 土 heaped up beside 成, to complete: once the great earth walls are complete, you have a castle.",
    notes: [
      "Named castles take じょう: 大阪城 (おおさかじょう), 名古屋城 (なごやじょう). Alone it is しろ.",
      "In place names the reading shifts: 宮城 (みやぎ) and いばらき both use it as ぎ or き.",
      "Don't confuse it with 域 (area), which also has 土 on the left."
    ],
    lookalikes: ["域"],
    examples: [
      { w: "城", r: "しろ", m: "castle" },
      { w: "大阪城", r: "おおさかじょう", m: "Osaka Castle" },
      { w: "城下町", r: "じょうかまち", m: "castle town" }
    ]
  },
  {
    k: "港", meaning: "harbour, port", on: ["コウ"], kun: ["みなと"], group: "nw-places", strokes: 12, radical: "氵",
    mnemonic: "Water 氵 beside 巷, a town's narrow lanes: where the sea runs right up into the streets of the town, the harbour.",
    notes: [
      "空港 (くうこう), 'sky harbour', is airport: 成田空港, 関西空港 on every train sign to the airport.",
      "Alone it is みなと; Tokyo's 港区 (みなとく) is Minato Ward. Hong Kong is ほんこん.",
      "Read こう in compounds: fishing ports are ぎょこう, and the word for port city is 港町 (みなとまち)."
    ],
    lookalikes: [],
    examples: [
      { w: "空港", r: "くうこう", m: "airport" },
      { w: "港", r: "みなと", m: "harbour, port" },
      { w: "港区", r: "みなとく", m: "Minato Ward (Tokyo)" }
    ]
  },
  {
    k: "橋", meaning: "bridge", on: ["キョウ"], kun: ["はし"], group: "nw-places", strokes: 16, radical: "木",
    mnemonic: "A tree 木 beside 喬, tall: tall timbers stretched high above the river, a bridge.",
    notes: [
      "At the end of names it becomes ばし: 日本橋 (にほんばし), 新橋 (しんばし). 高橋 (たかはし) is a top-five surname.",
      "はし also means chopsticks (箸) and edge; the kanji and the pitch tell them apart.",
      "Read きょう in compounds: 歩道橋 (ほどうきょう) is the footbridge over a big road."
    ],
    lookalikes: [],
    examples: [
      { w: "橋", r: "はし", m: "bridge" },
      { w: "日本橋", r: "にほんばし", m: "Nihonbashi (Tokyo)" },
      { w: "歩道橋", r: "ほどうきょう", m: "pedestrian footbridge" }
    ]
  },
  {
    k: "陸", meaning: "land", on: ["リク"], kun: [], group: "nw-places", strokes: 11, radical: "阝",
    mnemonic: "Hill-steps 阝 beside 坴, clods of earth piled high: hills and heaped earth as far as you can see, dry land.",
    notes: [
      "Typhoon news says 台風が上陸 (じょうりく): the typhoon has made landfall.",
      "陸上 (りくじょう) is track and field; 陸上自衛隊 (りくじょうじえいたい), shortened to 陸自, is the Ground Self-Defence Force.",
      "Opposite of 海 (sea) and 空 (sky): 陸海空 (りくかいくう), land, sea and air."
    ],
    lookalikes: [],
    examples: [
      { w: "大陸", r: "たいりく", m: "continent" },
      { w: "着陸", r: "ちゃくりく", m: "landing (of a plane)" },
      { w: "上陸", r: "じょうりく", m: "landfall, coming ashore" }
    ]
  },
  {
    k: "佐", meaning: "assist, help", on: ["サ"], kun: [], group: "nw-places", strokes: 7, radical: "亻",
    mnemonic: "A person 亻 standing at your left 左 hand: your right-hand man, but on the left, the assistant.",
    notes: [
      "Most often seen in 佐藤 (さとう), Japan's commonest surname, and in さが prefecture in Kyushu.",
      "In news, 補佐 (ほさ) is an aide or assistant, as in 首相補佐官 (しゅしょうほさかん).",
      "It is 左 (left) with a person in front; don't drop the 亻."
    ],
    lookalikes: ["左"],
    examples: [
      { w: "佐藤", r: "さとう", m: "Satō (surname)" },
      { w: "補佐", r: "ほさ", m: "assistance, aide" },
      { w: "大佐", r: "たいさ", m: "colonel" }
    ]
  },
  {
    k: "太", meaning: "thick, fat", on: ["タイ", "タ"], kun: ["ふと.い", "ふと.る"], group: "nw-places", strokes: 4, radical: "大",
    mnemonic: "Big 大 with an extra dot 丶 tucked between its legs: bigger than big, thick and plump.",
    notes: [
      "太平洋 (たいへいよう) is the Pacific Ocean; 太字 (ふとじ) is bold type.",
      "Often ends boys' names, read た: けんた, しょうた.",
      "Mind the dot: 大 has none, 太 has it low in the middle, 犬 has it at the top right."
    ],
    lookalikes: ["大", "犬"],
    examples: [
      { w: "太い", r: "ふとい", m: "thick, fat" },
      { w: "太る", r: "ふとる", m: "to put on weight" },
      { w: "太平洋", r: "たいへいよう", m: "the Pacific Ocean" }
    ]
  },
  {
    k: "園", meaning: "garden, park", on: ["エン"], kun: ["その"], group: "nw-places", strokes: 13, radical: "囗",
    mnemonic: "A fence 囗 around 袁, a figure in a long trailing robe: a walled garden where people stroll in long robes.",
    notes: [
      "Everyday places: 公園 (こうえん, park), 動物園 (どうぶつえん, zoo), 保育園 (ほいくえん, day nursery).",
      "In the news: shortages of 保育園 places, and summer's high-school baseball at こうしえん.",
      "Read えん almost everywhere; その is a literary word for garden."
    ],
    lookalikes: [],
    examples: [
      { w: "公園", r: "こうえん", m: "park" },
      { w: "動物園", r: "どうぶつえん", m: "zoo" },
      { w: "保育園", r: "ほいくえん", m: "day nursery" }
    ]
  },
  {
    k: "組", meaning: "group, assemble", on: ["ソ"], kun: ["く.む", "くみ"], group: "nw-org", strokes: 11, radical: "糸",
    mnemonic: "Threads 糸 wound round and round a stack 且: braided together into one set.",
    notes: [
      "番組 (ばんぐみ) is a TV or radio programme; くみ often becomes ぐみ after another kanji.",
      "School classes are numbered with it: 3年2組 (さんねんにくみ). 組合 (くみあい) is a union or co-op.",
      "組織 (そしき), organisation, is the main on'yomi word, common in the news."
    ],
    lookalikes: [],
    examples: [
      { w: "番組", r: "ばんぐみ", m: "programme (TV, radio)" },
      { w: "組織", r: "そしき", m: "organisation" },
      { w: "組む", r: "くむ", m: "to put together, team up" }
    ]
  },
  {
    k: "団", meaning: "group, body", on: ["ダン", "トン"], kun: [], group: "nw-org", strokes: 6, radical: "囗",
    mnemonic: "An inch 寸 of space inside a fence 囗: everyone huddled together in a tight group.",
    notes: [
      "団体 (だんたい) is a group; museums and buses list a cheaper 団体料金 for groups.",
      "団地 (だんち) is a big public housing estate. 団子 (だんご) are sweet rice dumplings on a stick.",
      "トン is the second half of ふとん (futon), which is written with this kanji. Compare 図 (map), also boxed in."
    ],
    lookalikes: ["図"],
    examples: [
      { w: "団体", r: "だんたい", m: "group, organisation" },
      { w: "団地", r: "だんち", m: "housing estate" },
      { w: "団子", r: "だんご", m: "rice dumplings" }
    ]
  },
  {
    k: "協", meaning: "cooperate", on: ["キョウ"], kun: [], group: "nw-org", strokes: 8, radical: "十",
    mnemonic: "Ten 十 people pulling with three times the strength 劦: working together.",
    notes: [
      "Signs end politely with ご協力をお願いします (ごきょうりょくを...), 'thank you for your cooperation'.",
      "協会 (きょうかい) is an association, as in many organisation names; 生協 (せいきょう) is the consumers' co-op that runs shops and deliveries.",
      "協議 (きょうぎ), talks or negotiations, is a common headline word."
    ],
    lookalikes: [],
    examples: [
      { w: "協力", r: "きょうりょく", m: "cooperation" },
      { w: "協会", r: "きょうかい", m: "association" },
      { w: "生協", r: "せいきょう", m: "co-op" }
    ]
  },
  {
    k: "機", meaning: "machine, opportunity", on: ["キ"], kun: [], group: "nw-org", strokes: 16, radical: "木",
    mnemonic: "A wooden 木 frame with fine threads and a spindle 幾: an old loom, the first machine.",
    notes: [
      "As a suffix it names machines: 券売機 (けんばいき, ticket machine) and じはんき (vending machine). On a plane, 機内 (きない) means on board.",
      "機会 (きかい, opportunity) sounds the same as きかい (machine), which uses a kanji not in this app.",
      "飛行機 (ひこうき) is an aeroplane; 機 is also a counter for aircraft in the news."
    ],
    lookalikes: [],
    examples: [
      { w: "飛行機", r: "ひこうき", m: "aeroplane" },
      { w: "券売機", r: "けんばいき", m: "ticket machine" },
      { w: "機会", r: "きかい", m: "opportunity, chance" }
    ]
  },
  {
    k: "関", meaning: "connection, barrier", on: ["カン"], kun: ["せき", "かか.わる"], group: "nw-org", strokes: 14, radical: "門",
    mnemonic: "A gate 門 with a bar 关 across it: a checkpoint everyone connected has to pass through.",
    notes: [
      "関東 (かんとう) and 関西 (かんさい) are named after old checkpoints: the regions east and west of the barrier.",
      "関係 (かんけい) is a connection; 関係者以外立入禁止 on doors means staff only. News uses に関する (にかんする), 'about'.",
      "Inside the gate is 关; 開 (open) and 閉 (shut) have different shapes inside."
    ],
    lookalikes: ["開", "閉"],
    examples: [
      { w: "関係", r: "かんけい", m: "relation, connection" },
      { w: "関東", r: "かんとう", m: "the Kanto region" },
      { w: "関西", r: "かんさい", m: "the Kansai region" }
    ]
  },
  {
    k: "設", meaning: "set up, establish", on: ["セツ"], kun: ["もう.ける"], group: "nw-org", strokes: 11, radical: "言",
    mnemonic: "Words 言 giving the orders and a hand swinging a tool 殳: and the thing gets set up.",
    notes: [
      "設定 (せってい), settings, is the menu on every phone, app and ATM.",
      "Signs say AED設置 (せっち): an AED is installed here. 施設 (しせつ) is a facility; 建設 (けんせつ) is construction.",
      "The right side 殳 also appears in 役 (role) and 投 (throw) has a similar hand."
    ],
    lookalikes: ["役", "投"],
    examples: [
      { w: "設定", r: "せってい", m: "settings" },
      { w: "施設", r: "しせつ", m: "facility" },
      { w: "建設", r: "けんせつ", m: "construction" }
    ]
  },
  {
    k: "施", meaning: "carry out, give", on: ["シ", "セ"], kun: ["ほどこ.す"], group: "nw-org", strokes: 9, radical: "方",
    mnemonic: "A banner on a pole 方 with a long streamer unfurled: the flag goes up and the plan is carried out.",
    notes: [
      "実施 (じっし), carried out or in force, is a news and poster word: キャンペーン実施中.",
      "施設 (しせつ) is a facility: sports, care or public buildings. セ appears in 施工 (せこう), construction work, on building-site boards.",
      "The left side is the same as in 旅 (travel) and 族 (family)."
    ],
    lookalikes: ["旅", "族"],
    examples: [
      { w: "施設", r: "しせつ", m: "facility" },
      { w: "実施", r: "じっし", m: "carrying out, implementation" },
      { w: "施す", r: "ほどこす", m: "to give, to apply" }
    ]
  },
  {
    k: "構", meaning: "structure, frame", on: ["コウ"], kun: ["かま.える", "かま.う"], group: "nw-org", strokes: 14, radical: "木",
    mnemonic: "Wooden 木 beams fitted crosswise 冓: a frame that holds the whole building up.",
    notes: [
      "結構 (けっこう) is everyday: 結構です means 'no thanks' or 'that's fine', and 結構おいしい means 'pretty good'.",
      "Station signs say 駅構内 (えきこうない): inside the station.",
      "構わない (かまわない) means 'I don't mind'."
    ],
    lookalikes: [],
    examples: [
      { w: "結構", r: "けっこう", m: "fine; no thank you; quite" },
      { w: "構内", r: "こうない", m: "premises, inside (a station)" },
      { w: "構う", r: "かまう", m: "to mind, care about" }
    ]
  },
  {
    k: "織", meaning: "weave", on: ["ショク", "シキ"], kun: ["お.る"], group: "nw-org", strokes: 18, radical: "糸",
    mnemonic: "Thread 糸 on the left, a loom with its tools 戠 on the right: weaving cloth.",
    notes: [
      "組織 (そしき), organisation, is where you'll meet it in the news; シキ is used only here and in a few rare words.",
      "織物 (おりもの) is woven cloth, and 織る (おる) is to weave.",
      "Don't confuse it with 職 (job), which has an ear 耳 on the left."
    ],
    lookalikes: ["職"],
    examples: [
      { w: "組織", r: "そしき", m: "organisation" },
      { w: "織物", r: "おりもの", m: "textile, woven cloth" },
      { w: "織る", r: "おる", m: "to weave" }
    ]
  },
  {
    k: "式", meaning: "ceremony, style", on: ["シキ"], kun: [], group: "nw-org", strokes: 6, radical: "弋",
    mnemonic: "A stake 弋 driven in beside a carpenter's square 工: done by the rules, in proper form.",
    notes: [
      "Ceremonies end in 式: 入学式 (にゅうがくしき, school entrance ceremony) in April, 成人式 (せいじんしき) for twenty-year-olds in January.",
      "Toilet doors say 洋式 (ようしき, Western style) or 和式 (わしき, Japanese squat style).",
      "株式 (かぶしき) is shares, as in 株式会社. Compare 試 (test) and 武 (military)."
    ],
    lookalikes: ["試", "武"],
    examples: [
      { w: "入学式", r: "にゅうがくしき", m: "school entrance ceremony" },
      { w: "洋式", r: "ようしき", m: "Western style (toilet)" },
      { w: "株式会社", r: "かぶしきがいしゃ", m: "company (Ltd.)" }
    ]
  },
  {
    k: "催", meaning: "hold (an event)", on: ["サイ"], kun: ["もよお.す"], group: "nw-org", strokes: 13, radical: "亻",
    mnemonic: "A person 亻 at the foot of a craggy peak 崔, calling everyone together: holding an event.",
    notes: [
      "Posters say 開催中 (かいさいちゅう), now on, and give the dates as 開催日.",
      "主催 (しゅさい) is the organiser, printed at the bottom of event flyers.",
      "催し (もよおし) is an event; department stores have a 催し物 (もよおしもの) floor. Compare 推 (push), with the same bird on the right."
    ],
    lookalikes: ["推"],
    examples: [
      { w: "開催", r: "かいさい", m: "holding (an event)" },
      { w: "主催", r: "しゅさい", m: "organiser, sponsorship" },
      { w: "催し", r: "もよおし", m: "event" }
    ]
  },
  {
    k: "演", meaning: "perform", on: ["エン"], kun: [], group: "nw-org", strokes: 14, radical: "氵",
    mnemonic: "Water 氵 beside the zodiac tiger 寅: a tiger dance on a rain-soaked stage, put on for the crowd.",
    notes: [
      "出演 (しゅつえん), appearing in a show, lists the cast on posters and TV pages.",
      "公演 (こうえん, performance) sounds exactly like 公園 (park); context tells them apart.",
      "演説 (えんぜつ) is a speech, especially by politicians at election time. 演技 (えんぎ) is acting."
    ],
    lookalikes: [],
    examples: [
      { w: "出演", r: "しゅつえん", m: "appearance (in a show)" },
      { w: "公演", r: "こうえん", m: "performance, show" },
      { w: "演技", r: "えんぎ", m: "acting" }
    ]
  },
  {
    k: "幕", meaning: "curtain", on: ["マク", "バク"], kun: [], group: "nw-org", strokes: 13, radical: "巾",
    mnemonic: "The sun setting 莫 behind a hanging cloth 巾: the curtain comes down.",
    notes: [
      "字幕 (じまく) is subtitles; cinemas show foreign films either with 字幕 or dubbed.",
      "Sports news uses 開幕 (かいまく), the start of the season, and 閉幕 (へいまく) for the close.",
      "バク is for the shogun's government: 幕府 (ばくふ). The packed lunch まくのうち bento also uses this kanji."
    ],
    lookalikes: [],
    examples: [
      { w: "字幕", r: "じまく", m: "subtitles" },
      { w: "開幕", r: "かいまく", m: "opening, start (of a season)" },
      { w: "幕府", r: "ばくふ", m: "shogunate" }
    ]
  },
  {
    k: "録", meaning: "record", on: ["ロク"], kun: [], group: "nw-org", strokes: 16, radical: "金",
    mnemonic: "Metal 金 plates scratched with notches 彔: a record that will last for ever.",
    notes: [
      "登録 (とうろく), registration, is on every sign-up form: 会員登録 (membership), 新規登録 (new account).",
      "録画 (ろくが) is recording video, the button on a TV recorder.",
      "Sports news loves 新記録 (しんきろく), a new record."
    ],
    lookalikes: [],
    examples: [
      { w: "登録", r: "とうろく", m: "registration, sign-up" },
      { w: "録画", r: "ろくが", m: "video recording" },
      { w: "記録", r: "きろく", m: "record" }
    ]
  },
  {
    k: "型", meaning: "type, model, mould", on: ["ケイ"], kun: ["かた"], group: "nw-org", strokes: 9, radical: "土",
    mnemonic: "A mould cut with a knife 刑 and packed in earth 土: pour in the metal and out comes the shape.",
    notes: [
      "As a suffix かた becomes がた: 大型 (おおがた, large size, on vehicle and shop signs), 新型 (しんがた, new model).",
      "血液型 (けつえきがた), blood type, is a popular small-talk question in Japan.",
      "News uses 新型 for new models and new strains, and 大型 for big storms and big shops."
    ],
    lookalikes: [],
    examples: [
      { w: "血液型", r: "けつえきがた", m: "blood type" },
      { w: "新型", r: "しんがた", m: "new model, new type" },
      { w: "大型", r: "おおがた", m: "large, large-size" }
    ]
  },
  {
    k: "種", meaning: "kind, seed", on: ["シュ"], kun: ["たね"], group: "nw-org", strokes: 14, radical: "禾",
    mnemonic: "Grain 禾 so heavy 重 with seed that it bends: next year's seed, sorted by kind.",
    notes: [
      "種類 (しゅるい), kind or type, is on menus and shelves: 3種類から選べる (choose from three kinds).",
      "たね is a seed or pit: 種なし (たねなし) grapes are seedless.",
      "In the news 〜種 counts kinds: 業種 (ぎょうしゅ, industry), 品種 (ひんしゅ, variety of rice or fruit)."
    ],
    lookalikes: [],
    examples: [
      { w: "種類", r: "しゅるい", m: "kind, type" },
      { w: "種", r: "たね", m: "seed" },
      { w: "品種", r: "ひんしゅ", m: "variety, breed" }
    ]
  },
  {
    k: "係", meaning: "person in charge, link", on: ["ケイ"], kun: ["かか.る", "かかり"], group: "nw-org", strokes: 9, radical: "亻",
    mnemonic: "A person 亻 holding the end of a thread 系: the one linked to the job, the person in charge.",
    notes: [
      "係員 (かかりいん) is the staff member on duty; signs say 係員にお申し出ください (please speak to staff).",
      "関係 (かんけい) is a connection: 関係ない means 'it has nothing to do with it'. The door sign 関係者以外立入禁止 means staff only.",
      "At school, 係 are class jobs, like the person in charge of the plants."
    ],
    lookalikes: [],
    examples: [
      { w: "関係", r: "かんけい", m: "relation, connection" },
      { w: "係", r: "かかり", m: "person in charge, duty" },
      { w: "係員", r: "かかりいん", m: "attendant, staff on duty" }
    ]
  },
  {
    k: "述", meaning: "state, mention", on: ["ジュツ"], kun: ["の.べる"], group: "nw-saying", strokes: 8, radical: "辶",
    mnemonic: "Walking along the road 辶 with 朮, a sprig of millet: you lay your words out one by one along the path, like scattered seeds.",
    notes: [
      "News reports quote people with 〜と述べた (とのべた), 'stated that...': more formal than 言った.",
      "In crime news, 供述 (きょうじゅつ) is a suspect's statement to police: 容疑者は〜と供述している.",
      "Read じゅつ in compounds, の.べる as a verb."
    ],
    lookalikes: [],
    examples: [
      { w: "述べる", r: "のべる", m: "to state, to express" },
      { w: "記述", r: "きじゅつ", m: "written description" },
      { w: "供述", r: "きょうじゅつ", m: "statement (to police)" }
    ]
  },
  {
    k: "論", meaning: "argument, theory", on: ["ロン"], kun: [], group: "nw-saying", strokes: 15, radical: "言",
    mnemonic: "Words 言 beside 侖, bamboo slips tied in order: words set out in the right order make a reasoned argument.",
    notes: [
      "世論調査 (よろんちょうさ), the opinion poll, is in the news every month; 世論 can also be said せろん.",
      "議論 (ぎろん) is discussion or debate; 結論 (けつろん) is the conclusion.",
      "The right side matches 輪 (ring, wheel); the left side tells them apart."
    ],
    lookalikes: ["輪"],
    examples: [
      { w: "議論", r: "ぎろん", m: "discussion, debate" },
      { w: "結論", r: "けつろん", m: "conclusion" },
      { w: "世論", r: "よろん", m: "public opinion" }
    ]
  },
  {
    k: "想", meaning: "idea, imagine", on: ["ソウ"], kun: [], group: "nw-saying", strokes: 13, radical: "心",
    mnemonic: "相, an eye 目 looking at a tree 木, sits on a heart 心: you hold the picture of the tree in your heart, imagining it.",
    notes: [
      "予想 (よそう) is a forecast or guess, used for weather, sport and elections; 予想外 (よそうがい) means unexpected.",
      "感想 (かんそう), your impressions, is asked for everywhere: after films, school trips and on survey forms.",
      "The top is 相 (mutual); 思 (think) has a field on top instead."
    ],
    lookalikes: ["相", "思"],
    examples: [
      { w: "感想", r: "かんそう", m: "impressions, thoughts" },
      { w: "予想", r: "よそう", m: "forecast, expectation" },
      { w: "理想", r: "りそう", m: "ideal" }
    ]
  },
  {
    k: "念", meaning: "thought, sense", on: ["ネン"], kun: [], group: "nw-saying", strokes: 8, radical: "心",
    mnemonic: "Now 今 sitting on a heart 心: what is in your heart right now, a thought you hold on to.",
    notes: [
      "残念 (ざんねん), what a pity, is everyday; 念のため (ねんのため) means just in case.",
      "記念 (きねん) is a commemoration: 記念日 (anniversary), 記念写真 (souvenir photo), and memorial ceremonies in the news.",
      "The top is 今 (now); keep the small stroke under its roof."
    ],
    lookalikes: ["今"],
    examples: [
      { w: "残念", r: "ざんねん", m: "too bad, a pity" },
      { w: "記念", r: "きねん", m: "commemoration, memento" },
      { w: "念のため", r: "ねんのため", m: "just in case" }
    ]
  },
  {
    k: "感", meaning: "feeling, sense", on: ["カン"], kun: [], group: "nw-saying", strokes: 13, radical: "心",
    mnemonic: "咸, a weapon held over a mouth that shouts 'all!', sits on a heart 心: something strikes everyone's heart at once.",
    notes: [
      "In health news かんせん (infection) begins with this kanji; at school and work you are asked for your 感想 (かんそう, impressions).",
      "As a suffix 〜感 means a sense of: 安心感 (あんしんかん, sense of security). 感じ (かんじ, feeling) sounds just like 漢字.",
      "Take away the heart and add water 氵 and you get 減 (decrease)."
    ],
    lookalikes: ["減"],
    examples: [
      { w: "感じる", r: "かんじる", m: "to feel" },
      { w: "感動", r: "かんどう", m: "being deeply moved" },
      { w: "同感", r: "どうかん", m: "I feel the same" }
    ]
  },
  {
    k: "解", meaning: "solve, untie", on: ["カイ", "ゲ"], kun: ["と.く", "と.ける"], group: "nw-saying", strokes: 13, radical: "角",
    mnemonic: "A horn 角, a knife and a cow 牛: the butcher cuts the horns from the cow, taking it apart piece by piece; that's how you solve a problem.",
    notes: [
      "TV news has a 解説 (かいせつ), an expert explaining; politics has かいさん, dissolving the lower house before an election.",
      "Read げ in 解熱 (げねつ), bringing down a fever, as on medicine boxes.",
      "理解 (りかい) is understanding; 解決 (かいけつ) is a solution or settlement."
    ],
    lookalikes: [],
    examples: [
      { w: "理解", r: "りかい", m: "understanding" },
      { w: "解決", r: "かいけつ", m: "solution, settlement" },
      { w: "解説", r: "かいせつ", m: "commentary, explanation" }
    ]
  },
  {
    k: "観", meaning: "view, watch", on: ["カン"], kun: [], group: "nw-saying", strokes: 18, radical: "見",
    mnemonic: "A crested heron standing perfectly still on the left, and 見, to see, on the right: watch the view as patiently as a heron.",
    notes: [
      "観光 (かんこう) is sightseeing: 観光案内所 (かんこうあんないしょ) is the tourist information office.",
      "News on tourism talks of 観光客 (かんこうきゃく, tourists); 価値観 (かちかん) means values or outlook.",
      "The left side matches the right of 権 (rights); 視 also ends in 見."
    ],
    lookalikes: ["権", "視"],
    examples: [
      { w: "観光", r: "かんこう", m: "sightseeing, tourism" },
      { w: "観客", r: "かんきゃく", m: "audience, spectators" },
      { w: "観光客", r: "かんこうきゃく", m: "tourist" }
    ]
  },
  {
    k: "視", meaning: "look at, regard", on: ["シ"], kun: [], group: "nw-saying", strokes: 11, radical: "見",
    mnemonic: "An altar 礻 beside 見, to see: the spirit at the altar keeps its eyes on you, watching closely.",
    notes: [
      "視力 (しりょく) is eyesight, as in the 視力検査 at a health check; 無視 (むし) is ignoring someone.",
      "In the news a minister makes a 視察 (しさつ), an inspection visit. 監視カメラ (かんしカメラ) is a security camera.",
      "Same 見 on the right as 観; the left is the altar radical, not clothing."
    ],
    lookalikes: ["観"],
    examples: [
      { w: "視力", r: "しりょく", m: "eyesight" },
      { w: "無視", r: "むし", m: "ignoring" },
      { w: "監視", r: "かんし", m: "surveillance, watching" }
    ]
  },
  {
    k: "調", meaning: "investigate, tune", on: ["チョウ"], kun: ["しら.べる", "ととの.う"], group: "nw-saying", strokes: 15, radical: "言",
    mnemonic: "Words 言 going all the way round 周: checking every word all around, to investigate and to put things in tune.",
    notes: [
      "News: 調査 (ちょうさ) is a survey or investigation, as in 世論調査 (よろんちょうさ, opinion poll).",
      "Everyday: 調子 (ちょうし, condition) and 体調 (たいちょう, how you feel); 体調不良 is the usual reason for missing work.",
      "調べる (しらべる) is to look something up or check; the right side 周 is also in 週 (week)."
    ],
    lookalikes: ["週"],
    examples: [
      { w: "調べる", r: "しらべる", m: "to look up, to check" },
      { w: "調査", r: "ちょうさ", m: "survey, investigation" },
      { w: "体調", r: "たいちょう", m: "physical condition" }
    ]
  },
  {
    k: "情", meaning: "feelings, information", on: ["ジョウ"], kun: ["なさ.け"], group: "nw-saying", strokes: 11, radical: "忄",
    mnemonic: "A heart 忄 beside blue 青: a fresh young heart, brimming with feelings.",
    notes: [
      "情報 (じょうほう), information, is everywhere: 交通情報 on traffic news and 個人情報 (personal data) on every form.",
      "事情 (じじょう) is circumstances: 〜の事情により, 'due to circumstances', on closure notices.",
      "Same right side as 晴 (clear sky) and 精 (spirit); the left side tells heart, sun or rice."
    ],
    lookalikes: ["晴", "精"],
    examples: [
      { w: "情報", r: "じょうほう", m: "information" },
      { w: "事情", r: "じじょう", m: "circumstances" },
      { w: "表情", r: "ひょうじょう", m: "facial expression" }
    ]
  },
  {
    k: "声", meaning: "voice", on: ["セイ"], kun: ["こえ"], group: "nw-saying", strokes: 7, radical: "士",
    mnemonic: "A samurai 士 standing over a doorway: the warrior's shout carries right through the door, a voice.",
    notes: [
      "After another word it often becomes ごえ: 大声 (おおごえ), 歌声 (うたごえ).",
      "Read せい in compounds: 音声 (おんせい) is audio, as in 音声案内 (voice guidance) on machines; 声明 (せいめい) is an official statement in the news.",
      "The top is the same as in 売 (sell); the bottom is different."
    ],
    lookalikes: ["売"],
    examples: [
      { w: "声", r: "こえ", m: "voice" },
      { w: "大声", r: "おおごえ", m: "loud voice" },
      { w: "音声", r: "おんせい", m: "audio, voice (sound)" }
    ]
  },
  {
    k: "伝", meaning: "pass on, convey", on: ["デン"], kun: ["つた.える", "つた.わる", "つだ.う"], group: "nw-saying", strokes: 6, radical: "亻",
    mnemonic: "A person 亻 beside 云, to say: a person passing on what was said, like a message whispered down a line.",
    notes: [
      "手伝う (てつだう), to help, is the everyday word; お手伝い (おてつだい) is help or a helper.",
      "伝える (つたえる) is to tell or pass on: よろしくお伝えください, 'please give them my regards'. 伝統 (でんとう) is tradition.",
      "Don't confuse it with 転 (roll, turn), which has the same right side."
    ],
    lookalikes: ["転"],
    examples: [
      { w: "伝える", r: "つたえる", m: "to tell, to pass on" },
      { w: "手伝う", r: "てつだう", m: "to help" },
      { w: "伝統", r: "でんとう", m: "tradition" }
    ]
  },
  {
    k: "応", meaning: "respond, answer", on: ["オウ"], kun: ["こた.える"], group: "nw-saying", strokes: 7, radical: "心",
    mnemonic: "A roof 广 sheltering a heart 心: when someone calls, you answer by taking them in under your roof.",
    notes: [
      "対応 (たいおう), dealing with or handling, is in every news story and on notices: 英語対応 means English is available.",
      "After ん it can become のう: 反応 (はんのう, reaction). 一応 (いちおう) means 'just in case, more or less'.",
      "応援 (おうえん) is cheering someone on; the roof is the same as in 広 (wide)."
    ],
    lookalikes: ["広"],
    examples: [
      { w: "対応", r: "たいおう", m: "handling, support" },
      { w: "応援", r: "おうえん", m: "cheering, support" },
      { w: "一応", r: "いちおう", m: "for now, just in case" }
    ]
  },
  {
    k: "推", meaning: "push forward, infer", on: ["スイ"], kun: ["お.す"], group: "nw-saying", strokes: 11, radical: "扌",
    mnemonic: "A hand 扌 beside 隹, a little bird: you give the young bird a push off the branch and guess it will fly.",
    notes: [
      "News: 推定 (すいてい) is an estimate, as in 推定死亡時刻; 推進 (すいしん) is promoting a policy.",
      "推し (おし) is your favourite idol or character, and 推し活 (おしかつ) is supporting them.",
      "Not 押す (おす, push a button), which has a different right side; the same bird 隹 is in 進."
    ],
    lookalikes: ["押", "進"],
    examples: [
      { w: "推し", r: "おし", m: "your favourite (idol, character)" },
      { w: "推定", r: "すいてい", m: "estimate" },
      { w: "推進", r: "すいしん", m: "promotion, driving forward" }
    ]
  },
  {
    k: "信", meaning: "trust, believe", on: ["シン"], kun: [], group: "nw-saying", strokes: 9, radical: "亻",
    mnemonic: "A person 亻 standing by their words 言: someone who keeps their word, someone you can trust.",
    notes: [
      "信号 (しんごう) is a traffic light; the green light is called 青 (あお).",
      "On phones and email: 送信 (そうしん, send) and 受信 (じゅしん, receive). 自信 (じしん, confidence) sounds like 地震 (earthquake).",
      "信じる (しんじる) is to believe; it is always read しん."
    ],
    lookalikes: [],
    examples: [
      { w: "信号", r: "しんごう", m: "traffic light" },
      { w: "信じる", r: "しんじる", m: "to believe" },
      { w: "自信", r: "じしん", m: "confidence" }
    ]
  },
  {
    k: "進", meaning: "advance, proceed", on: ["シン"], kun: ["すす.む", "すす.める"], group: "nw-moving", strokes: 11, radical: "辶",
    mnemonic: "A short-tailed bird 隹 hopping along the road 辶: birds can't walk backwards, so it only ever moves forward.",
    notes: [
      "On road signs 進入禁止 (しんにゅうきんし) means no entry; car navigation says 直進 (ちょくしん, go straight on).",
      "In the news, plans are 進める (すすめる, pushed ahead) and the government 推進 (すいしん, promotes) a policy; 進む (すすむ) is to go forward.",
      "The bird 隹 also sits in 集 and 準, but only 進 rides on the road radical."
    ],
    lookalikes: ["準", "集"],
    examples: [
      { w: "進む", r: "すすむ", m: "to advance, go forward" },
      { w: "進学", r: "しんがく", m: "going on to further education" },
      { w: "進入禁止", r: "しんにゅうきんし", m: "no entry" }
    ]
  },
  {
    k: "続", meaning: "continue", on: ["ゾク"], kun: ["つづ.く", "つづ.ける"], group: "nw-moving", strokes: 13, radical: "糸",
    mnemonic: "A thread 糸 tied to a market stall that sells 売 things: one sale follows another and the thread never breaks.",
    notes: [
      "Headlines love 連続 (れんぞく, in a row): 3日連続 means three days running. Serial dramas end with (続く), 'to be continued'.",
      "At city hall you do 手続き (てつづき, paperwork, procedures), the noun form of 続く (つづく).",
      "Shares 売 with 読 (read): 糸 on the left for continue, 言 for read."
    ],
    lookalikes: ["読"],
    examples: [
      { w: "続く", r: "つづく", m: "to continue" },
      { w: "連続", r: "れんぞく", m: "in a row, consecutive" },
      { w: "手続き", r: "てつづき", m: "procedure, paperwork" }
    ]
  },
  {
    k: "加", meaning: "add, join", on: ["カ"], kun: ["くわ.える", "くわ.わる"], group: "nw-moving", strokes: 5, radical: "力",
    mnemonic: "Strength 力 with a mouth 口 cheering beside it: add your voice and the effort grows.",
    notes: [
      "Event posters ask for 参加 (さんか, taking part); restaurant menus offer 追加 (ついか, extra orders).",
      "In headlines 加 alone can stand for Canada, as in 日加 (Japan and Canada).",
      "Draw 力 first, then the box 口 on the right."
    ],
    lookalikes: [],
    examples: [
      { w: "参加", r: "さんか", m: "taking part" },
      { w: "追加", r: "ついか", m: "addition, extra" },
      { w: "加える", r: "くわえる", m: "to add" }
    ]
  },
  {
    k: "交", meaning: "mix, cross, exchange", on: ["コウ"], kun: ["まじ.わる", "か.わす"], group: "nw-moving", strokes: 6, radical: "亠",
    mnemonic: "A father 父 in a pointed hat 亠 with his legs crossed: two paths meeting at a crossroads.",
    notes: [
      "Everywhere in town: 交番 (こうばん, police box) and 交差点 (こうさてん, intersection). The news reports 交通事故 (こうつうじこ, traffic accidents).",
      "Diplomacy is 外交 (がいこう) in headlines; 交代 (こうたい) is a change of leader or shift.",
      "Don't mix it up with 父 (father) or 文 (writing); 交 has the hat and crossed legs."
    ],
    lookalikes: ["父", "文"],
    examples: [
      { w: "交番", r: "こうばん", m: "police box" },
      { w: "交通", r: "こうつう", m: "traffic, transport" },
      { w: "交差点", r: "こうさてん", m: "intersection" }
    ]
  },
  {
    k: "反", meaning: "against, anti-", on: ["ハン"], kun: ["そ.る"], group: "nw-moving", strokes: 4, radical: "又",
    mnemonic: "A hand 又 pushing back against a cliff 厂: shoving the other way, against everything.",
    notes: [
      "In the news: 反対 (はんたい, opposition) and 反発 (はんぱつ, backlash). On parking signs 駐車違反 (ちゅうしゃいはん) is a parking violation.",
      "反応 (reaction) is read はんのう, not はんおう.",
      "The cliff 厂 and the hand 又 overlap; 皮 (skin) looks close but has a hook on top."
    ],
    lookalikes: ["皮"],
    examples: [
      { w: "反対", r: "はんたい", m: "opposition; opposite" },
      { w: "違反", r: "いはん", m: "violation" },
      { w: "反応", r: "はんのう", m: "reaction" }
    ]
  },
  {
    k: "流", meaning: "flow, current", on: ["リュウ"], kun: ["なが.れる", "なが.す"], group: "nw-moving", strokes: 10, radical: "氵",
    mnemonic: "Water 氵 beside a newborn turned head-down with its hair streaming behind: everything here goes with the flow.",
    notes: [
      "Toilet panels in Japan have a 流す (ながす, flush) button. 流れる (ながれる) is to flow by itself.",
      "In the news: 流行 (りゅうこう, a trend, or an outbreak of flu) and 国際交流 (こくさいこうりゅう, international exchange).",
      "Mind the right side: a small hat, a ム, then three short legs."
    ],
    lookalikes: [],
    examples: [
      { w: "流れる", r: "ながれる", m: "to flow" },
      { w: "流行", r: "りゅうこう", m: "trend; outbreak" },
      { w: "交流", r: "こうりゅう", m: "exchange, interaction" }
    ]
  },
  {
    k: "結", meaning: "tie, bind; result", on: ["ケツ"], kun: ["むす.ぶ", "ゆ.う"], group: "nw-moving", strokes: 12, radical: "糸",
    mnemonic: "A thread 糸 knotted around a lucky 吉 fortune slip, like the paper fortunes people tie up at shrines so the luck holds.",
    notes: [
      "結果 (けっか, result) fills election and sports news: 選挙結果 (せんきょけっか, election results).",
      "けつ shortens to けっ before k: 結果 (けっか), 結局 (けっきょく, in the end), 結構 (けっこう), which also means 'no thank you' when you're offered something.",
      "Same thread radical as 給 (pay); the right side 吉 is 'lucky'."
    ],
    lookalikes: ["給"],
    examples: [
      { w: "結果", r: "けっか", m: "result" },
      { w: "結構", r: "けっこう", m: "fine; no thank you" },
      { w: "結ぶ", r: "むすぶ", m: "to tie; to conclude (a deal)" }
    ]
  },
  {
    k: "落", meaning: "fall, drop", on: ["ラク"], kun: ["お.ちる", "お.とす"], group: "nw-moving", strokes: 12, radical: "艹",
    mnemonic: "Leaves 艹 dropping into the river 洛 (water 氵 plus 'each' 各): every single one falls and drifts away.",
    notes: [
      "Station counters handle 落とし物 (おとしもの, lost property); mountain roads warn 落石注意 (らくせきちゅうい, falling rocks).",
      "Market news: prices 下落 (げらく, fall); 落ち着く (おちつく) means to calm down.",
      "Three parts stacked: grass on top, water on the left, 各 on the right."
    ],
    lookalikes: [],
    examples: [
      { w: "落ちる", r: "おちる", m: "to fall, drop" },
      { w: "落とし物", r: "おとしもの", m: "lost property" },
      { w: "下落", r: "げらく", m: "a fall (in prices)" }
    ]
  },
  {
    k: "断", meaning: "cut off, refuse, decide", on: ["ダン"], kun: ["ことわ.る", "た.つ"], group: "nw-moving", strokes: 11, radical: "斤",
    mnemonic: "An axe 斤 chopping through a bundle of rice stalks 米 held in its frame: one clean cut, and the answer is no.",
    notes: [
      "Signs: 横断歩道 (おうだんほどう, pedestrian crossing) and 無断駐車禁止 (むだんちゅうしゃきんし, no parking without permission).",
      "News words: 判断 (はんだん, judgement), 中断 (ちゅうだん, suspension). 断る (ことわる) is the everyday verb, to turn down.",
      "The axe 斤 sits on the right, as in 新 (new); the left side here is 米 in a frame."
    ],
    lookalikes: ["新"],
    examples: [
      { w: "断る", r: "ことわる", m: "to refuse, turn down" },
      { w: "横断歩道", r: "おうだんほどう", m: "pedestrian crossing" },
      { w: "判断", r: "はんだん", m: "judgement, decision" }
    ]
  },
  {
    k: "復", meaning: "return, restore", on: ["フク"], kun: [], group: "nw-moving", strokes: 12, radical: "彳",
    mnemonic: "Footsteps 彳 walking back over the same ground on the right: going back the way you came to put things right.",
    notes: [
      "A round-trip ticket is おうふく, with 復 as its second kanji. The news reports 回復 (かいふく, recovery) of the economy or a patient.",
      "ふく shortens to ふっ in 復活 (ふっかつ, comeback); students do 復習 (ふくしゅう, review).",
      "The step radical 彳 also starts 得 and 後; check the right side."
    ],
    lookalikes: ["得"],
    examples: [
      { w: "回復", r: "かいふく", m: "recovery" },
      { w: "復習", r: "ふくしゅう", m: "review (of lessons)" },
      { w: "復活", r: "ふっかつ", m: "revival, comeback" }
    ]
  },
  {
    k: "援", meaning: "help, aid", on: ["エン"], kun: [], group: "nw-moving", strokes: 12, radical: "扌",
    mnemonic: "A hand 扌 reaching down to pull on a rope 爰 held by other hands: hauling someone up, the way help arrives.",
    notes: [
      "At matches you'll hear 応援 (おうえん, cheering on); 応援しています means 'I'm rooting for you'.",
      "Disaster news: 支援 (しえん, support, aid) and 救援 (きゅうえん, relief). There's no common kun reading.",
      "Same right side as 暖 (warm); 援 has the hand, 暖 the sun."
    ],
    lookalikes: ["暖"],
    examples: [
      { w: "応援", r: "おうえん", m: "cheering on, support" },
      { w: "支援", r: "しえん", m: "support, aid" },
      { w: "救援", r: "きゅうえん", m: "relief, rescue" }
    ]
  },
  {
    k: "変", meaning: "change; strange", on: ["ヘン"], kun: ["か.わる", "か.える"], group: "nw-moving", strokes: 9, radical: "夂",
    mnemonic: "A figure with flailing arms 亦 on top of dragging legs 夂: a strange creature that keeps changing shape as it walks.",
    notes: [
      "Everyday: 大変 (たいへん, terrible; very) and 変な (へんな, strange). In the news: 変化 (へんか, change).",
      "変わる (かわる) is to change and 変える (かえる) to change something; train changes, 乗り換え, use a different kanji.",
      "Draw the top part first, then the dragging legs 夂 below."
    ],
    lookalikes: [],
    examples: [
      { w: "大変", r: "たいへん", m: "terrible; very" },
      { w: "変化", r: "へんか", m: "change" },
      { w: "変わる", r: "かわる", m: "to change" }
    ]
  },
  {
    k: "消", meaning: "erase, put out", on: ["ショウ"], kun: ["き.える", "け.す"], group: "nw-moving", strokes: 10, radical: "氵",
    mnemonic: "Water 氵 poured over a little flame 肖 (a small 小 on top of 月): the fire goes out.",
    notes: [
      "On receipts and in budget news: 消費税 (しょうひぜい, consumption tax). Fire engines are 消防車 (しょうぼうしゃ).",
      "消す (けす) is to turn off or erase; 消える (きえる) to go out or vanish. 取り消し (とりけし) is a cancellation.",
      "Right side 肖: 小 on top of 月."
    ],
    lookalikes: [],
    examples: [
      { w: "消す", r: "けす", m: "to turn off; to erase" },
      { w: "消費税", r: "しょうひぜい", m: "consumption tax" },
      { w: "消防車", r: "しょうぼうしゃ", m: "fire engine" }
    ]
  },
  {
    k: "撮", meaning: "take (a photo), film", on: ["サツ"], kun: ["と.る"], group: "nw-moving", strokes: 15, radical: "扌",
    mnemonic: "A hand 扌 holding up the best 最 shot: press the button and catch the moment.",
    notes: [
      "Temples and museums post 撮影禁止 (さつえいきんし, no photography).",
      "撮る (とる) is only for photos and filming: 写真を撮る. For taking things in general, use 取る.",
      "The right side is the whole of 最 (most), with the ear and hand under the sun."
    ],
    lookalikes: ["最"],
    examples: [
      { w: "撮る", r: "とる", m: "to take (a photo)" },
      { w: "撮影", r: "さつえい", m: "photography, filming" },
      { w: "撮影禁止", r: "さつえいきんし", m: "no photography" }
    ]
  },
  {
    k: "補", meaning: "make up for, supplement", on: ["ホ"], kun: ["おぎな.う"], group: "nw-moving", strokes: 12, radical: "衤",
    mnemonic: "A piece of clothing 衤 with a patch 甫 sewn over the hole: making up for what's missing.",
    notes: [
      "Election news is full of 候補 (こうほ, candidates); budget news has 補正予算 (ほせいよさん, a supplementary budget).",
      "補う (おぎなう) is to make up for; 補足 (ほそく) is an extra note or addition.",
      "The clothing radical 衤 has one more dot than the altar radical in 社; 捕 (catch) has a hand 扌 instead."
    ],
    lookalikes: ["捕"],
    examples: [
      { w: "候補", r: "こうほ", m: "candidate" },
      { w: "補う", r: "おぎなう", m: "to make up for" },
      { w: "補足", r: "ほそく", m: "supplement, additional note" }
    ]
  },
  {
    k: "与", meaning: "give", on: ["ヨ"], kun: ["あた.える"], group: "nw-moving", strokes: 3, radical: "一",
    mnemonic: "A hooked ladle above a flat line 一: scooping out a portion and handing it over.",
    notes: [
      "Payslips say 給与 (きゅうよ, salary). Political news: 与党 (よとう, the ruling party) versus 野党 (やとう, the opposition).",
      "影響を与える (えいきょうをあたえる) means to have an effect on; 関与 (かんよ) is involvement.",
      "Only three strokes; the same shape sits under the lid in 写."
    ],
    lookalikes: ["写"],
    examples: [
      { w: "給与", r: "きゅうよ", m: "salary, pay" },
      { w: "与党", r: "よとう", m: "ruling party" },
      { w: "与える", r: "あたえる", m: "to give, award" }
    ]
  },
  {
    k: "登", meaning: "climb", on: ["トウ", "ト"], kun: ["のぼ.る"], group: "nw-moving", strokes: 12, radical: "癶",
    mnemonic: "Two feet planted wide 癶 on top of a tall dish stand 豆: stepping up to climb higher.",
    notes: [
      "Read と in 登山 (とざん, mountain climbing), as on the trails up Mt Fuji; apps ask for 会員登録 (かいいんとうろく, membership registration).",
      "News: a new product or person 登場 (とうじょう, appears). 山に登る (のぼる) is to climb a mountain.",
      "Same feet 癶 on top as 発 (depart)."
    ],
    lookalikes: ["発"],
    examples: [
      { w: "登山", r: "とざん", m: "mountain climbing" },
      { w: "登録", r: "とうろく", m: "registration" },
      { w: "登る", r: "のぼる", m: "to climb" }
    ]
  },
  {
    k: "訪", meaning: "visit", on: ["ホウ"], kun: ["おとず.れる", "たず.ねる"], group: "nw-moving", strokes: 11, radical: "言",
    mnemonic: "Words 言 carried in every direction 方: going from door to door to call on people.",
    notes: [
      "Tourism news counts 訪日外国人 (ほうにちがいこくじん, foreign visitors to Japan); a state visit is a 訪問 (ほうもん).",
      "訪れる (おとずれる) is a written 'to visit'; 訪ねる (たずねる) is to call on someone.",
      "方 on the right also appears in 防 and 放; 訪 has 言 for speech."
    ],
    lookalikes: ["防"],
    examples: [
      { w: "訪問", r: "ほうもん", m: "visit, call" },
      { w: "訪日", r: "ほうにち", m: "visiting Japan" },
      { w: "訪れる", r: "おとずれる", m: "to visit" }
    ]
  },
  {
    k: "追", meaning: "chase, follow; add", on: ["ツイ"], kun: ["お.う"], group: "nw-moving", strokes: 9, radical: "辶",
    mnemonic: "The bumpy left half of 師 (an army) marching down the road 辶: troops chasing the enemy.",
    notes: [
      "Menus and bills: 追加 (ついか, extra) and 追加料金 (ついかりょうきん, extra charge).",
      "News: police 追う (おう, chase) a suspect; 追い付く (おいつく) is to catch up.",
      "Don't confuse it with 退 (retreat), which also rides on the road radical."
    ],
    lookalikes: ["退"],
    examples: [
      { w: "追加", r: "ついか", m: "addition, extra" },
      { w: "追う", r: "おう", m: "to chase" },
      { w: "追加料金", r: "ついかりょうきん", m: "extra charge" }
    ]
  },
  {
    k: "整", meaning: "put in order, arrange", on: ["セイ"], kun: ["ととの.える", "ととの.う"], group: "nw-moving", strokes: 16, radical: "攵",
    mnemonic: "Tie up a bundle and tap it into shape 敕, then set it straight and correct 正: everything neatly in order.",
    notes: [
      "On many buses you take a 整理券 (せいりけん, numbered ticket) when you get on; queues use them too.",
      "News: 調整 (ちょうせい, adjustment) of plans, 整備 (せいび, maintenance) of roads and aircraft.",
      "政 (politics) is 正 plus the tapping hand; 整 adds the bundle on top."
    ],
    lookalikes: ["政"],
    examples: [
      { w: "整理券", r: "せいりけん", m: "numbered ticket" },
      { w: "調整", r: "ちょうせい", m: "adjustment" },
      { w: "整える", r: "ととのえる", m: "to put in order" }
    ]
  },
  {
    k: "導", meaning: "guide, lead", on: ["ドウ"], kun: ["みちび.く"], group: "nw-moving", strokes: 15, radical: "寸",
    mnemonic: "A hand 寸 on your arm walking you down the road 道: being led the right way.",
    notes: [
      "Business news: 導入 (どうにゅう, introduction of a system) and 半導体 (はんどうたい, semiconductors).",
      "A coach or teacher gives 指導 (しどう, guidance); 導く (みちびく) is to lead.",
      "It's simply 道 with 寸 underneath."
    ],
    lookalikes: ["道"],
    examples: [
      { w: "指導", r: "しどう", m: "guidance, coaching" },
      { w: "導入", r: "どうにゅう", m: "introduction (of a system)" },
      { w: "半導体", r: "はんどうたい", m: "semiconductor" }
    ]
  },
  {
    k: "張", meaning: "stretch, spread", on: ["チョウ"], kun: ["は.る"], group: "nw-moving", strokes: 11, radical: "弓",
    mnemonic: "A bow 弓 pulled long 長: the string stretched tight and ready.",
    notes: [
      "At work: 出張 (しゅっちょう, business trip). Push-pull doors marked 引 mean 引っ張る (ひっぱる, pull).",
      "News: politicians 主張 (しゅちょう, assert, claim). がんばる is usually written with 張 as its second kanji.",
      "Bow 弓 on the left, 長 (long) on the right."
    ],
    lookalikes: ["長"],
    examples: [
      { w: "出張", r: "しゅっちょう", m: "business trip" },
      { w: "引っ張る", r: "ひっぱる", m: "to pull" },
      { w: "主張", r: "しゅちょう", m: "claim, assertion" }
    ]
  },
  {
    k: "飛", meaning: "fly", on: ["ヒ"], kun: ["と.ぶ", "と.ばす"], group: "nw-moving", strokes: 9, radical: "飛",
    mnemonic: "Two pairs of wings beating either side of a body 升: a crane lifting off.",
    notes: [
      "Near schools, signs say 飛び出し注意 (とびだしちゅうい, watch for children running out).",
      "Airports and news: 飛行機 (ひこうき, aeroplane) and 飛行 (ひこう, flight). 飛ぶ (とぶ) is to fly.",
      "It's its own radical, with a tricky nine-stroke order: the hooked top stroke comes first."
    ],
    lookalikes: [],
    examples: [
      { w: "飛行機", r: "ひこうき", m: "aeroplane" },
      { w: "飛ぶ", r: "とぶ", m: "to fly" },
      { w: "飛び出す", r: "とびだす", m: "to rush out" }
    ]
  },
  {
    k: "達", meaning: "reach; plural (-tachi)", on: ["タツ"], kun: ["たち"], group: "nw-moving", strokes: 12, radical: "辶",
    mnemonic: "A woolly lamb with a flat earth 土 hat trotting down the road 辶 until it finally reaches the goal.",
    notes: [
      "Delivery vans and the post office: 配達 (はいたつ, delivery) and 速達 (そくたつ, express mail).",
      "As the plural たち it ends 友達 (ともだち, friend); 私たち is usually written in kana. 上達 (じょうたつ) is improving at something.",
      "Same road radical as 違 (differ); the lamb shape on top is 達's own."
    ],
    lookalikes: ["違"],
    examples: [
      { w: "友達", r: "ともだち", m: "friend" },
      { w: "配達", r: "はいたつ", m: "delivery" },
      { w: "速達", r: "そくたつ", m: "express mail" }
    ]
  },
  {
    k: "渡", meaning: "cross; hand over", on: ["ト"], kun: ["わた.る", "わた.す"], group: "nw-moving", strokes: 12, radical: "氵",
    mnemonic: "Water 氵 next to 度 (degree): measure how deep the river is, then wade across.",
    notes: [
      "渡る (わたる) is to cross a road or river; 渡す (わたす) is to hand something over.",
      "Travel news: 渡航 (とこう, travel overseas). Shops have a 受け渡し (うけわたし) counter for handing over goods.",
      "It's 度 with water added on the left."
    ],
    lookalikes: ["度"],
    examples: [
      { w: "渡る", r: "わたる", m: "to cross" },
      { w: "渡す", r: "わたす", m: "to hand over" },
      { w: "渡航", r: "とこう", m: "travelling overseas" }
    ]
  },
  {
    k: "供", meaning: "offer; accompany", on: ["キョウ"], kun: ["そな.える", "とも"], group: "nw-moving", strokes: 8, radical: "亻",
    mnemonic: "A person 亻 standing together 共 with others, holding out an offering in both hands.",
    notes: [
      "子供 (こども, child) reads ども with a kun reading; fare tables and signs often write 子ども instead.",
      "TV credits and news: 提供 (ていきょう, sponsored by; provision). お供え (おそなえ) are offerings at a grave or altar.",
      "It's 共 (together) with a person 亻 added."
    ],
    lookalikes: ["共"],
    examples: [
      { w: "子供", r: "こども", m: "child" },
      { w: "提供", r: "ていきょう", m: "provision; sponsored by" },
      { w: "お供え", r: "おそなえ", m: "offering" }
    ]
  },
  {
    k: "航", meaning: "voyage, flight", on: ["コウ"], kun: [], group: "nw-moving", strokes: 10, radical: "舟",
    mnemonic: "A boat 舟 with its neck held high 亢, cutting straight across the water: sailing on course.",
    notes: [
      "On departure boards a cancelled flight or ferry is けっこう, with 航 as its second kanji (not the 結構 of 'no thanks').",
      "News: 航空 (こうくう, aviation), as in airline names, and 運航 (うんこう, flights or ferries running).",
      "The boat radical 舟 is narrow on the left; no common kun reading."
    ],
    lookalikes: [],
    examples: [
      { w: "航空券", r: "こうくうけん", m: "air ticket" },
      { w: "運航", r: "うんこう", m: "operation (of flights, ferries)" },
      { w: "航空便", r: "こうくうびん", m: "airmail" }
    ]
  },
  {
    k: "取", meaning: "take", on: ["シュ"], kun: ["と.る"], group: "nw-moving", strokes: 8, radical: "又",
    mnemonic: "A hand 又 grabbing an ear 耳: ancient soldiers took an ear as proof, the original 'take'.",
    notes: [
      "Parcel slips say 受取 (うけとり, receipt); ticket machines have 取り消し (とりけし, cancel).",
      "News: 取材 (しゅざい, reporting, an interview) and 取引 (とりひき, trading). Write 撮る for photos.",
      "最 (most) is the sun 日 sitting on top of this same 取."
    ],
    lookalikes: ["最"],
    examples: [
      { w: "取る", r: "とる", m: "to take" },
      { w: "受け取る", r: "うけとる", m: "to receive" },
      { w: "取材", r: "しゅざい", m: "news reporting, interview" }
    ]
  },
  {
    k: "支", meaning: "support; branch", on: ["シ"], kun: ["ささ.える"], group: "nw-moving", strokes: 4, radical: "支",
    mnemonic: "A hand 又 holding up a branch 十: a stick to lean on for support.",
    notes: [
      "At the till: お支払い (おしはらい, payment) methods; banks list their 支店 (してん, branches).",
      "Political news: 支持率 (しじりつ, approval rating). Disaster news: 支援 (しえん, aid).",
      "With a hand 扌 added it becomes 技 (skill)."
    ],
    lookalikes: ["技"],
    examples: [
      { w: "支払い", r: "しはらい", m: "payment" },
      { w: "支店", r: "してん", m: "branch (office)" },
      { w: "支える", r: "ささえる", m: "to support" }
    ]
  },
  {
    k: "得", meaning: "gain, get; profit", on: ["トク"], kun: ["え.る", "う.る"], group: "nw-moving", strokes: 11, radical: "彳",
    mnemonic: "Stepping out 彳, you spot something shining like the sun 日 and close your hand 寸 on it: a bargain gained.",
    notes: [
      "Shop signs shout お得 (おとく, good value): お得なセット. 得意 (とくい) is being good at something.",
      "News: 取得 (しゅとく, acquiring, e.g. a licence). 得る is える, but あり得ない is ありえない and 〜し得る can be read しうる.",
      "Step radical 彳 like 待 (wait); the right side is 日 over a line and 寸."
    ],
    lookalikes: ["待", "復"],
    examples: [
      { w: "お得", r: "おとく", m: "good value, bargain" },
      { w: "得意", r: "とくい", m: "good at, strong point" },
      { w: "取得", r: "しゅとく", m: "acquisition (of a licence)" }
    ]
  },
  {
    k: "置", meaning: "put, place", on: ["チ"], kun: ["お.く"], group: "nw-moving", strokes: 13, radical: "罒",
    mnemonic: "A net 罒 laid straight 直 over something: it stays right where you put it.",
    notes: [
      "Stations have 自転車置き場 (じてんしゃおきば, bike parking) and warn about 放置自転車 (ほうちじてんしゃ, abandoned bikes).",
      "News: 設置 (せっち, installation) of cameras or committees; 位置 (いち) is a position.",
      "The net 罒 on top also crowns 買 (buy); below it is 直."
    ],
    lookalikes: ["直", "買"],
    examples: [
      { w: "置く", r: "おく", m: "to put, place" },
      { w: "位置", r: "いち", m: "position, location" },
      { w: "置き場", r: "おきば", m: "storage place" }
    ]
  },
  {
    k: "過", meaning: "pass, exceed; past", on: ["カ"], kun: ["す.ぎる", "す.ごす"], group: "nw-moving", strokes: 12, radical: "辶",
    mnemonic: "A twisted mouth-shaped frame 咼 rushing down the road 辶: it hurries past and goes too far.",
    notes: [
      "〜過ぎ means 'just after' or 'too much': 3時過ぎ (さんじすぎ), 食べ過ぎ (たべすぎ, eating too much).",
      "Headlines: 過去最高 (かこさいこう, a record high) and 過去最多 (かこさいた, the most ever). 過ごす (すごす) is to spend time.",
      "Twelve strokes: write the right-hand shape in full first, and the road 辶 last."
    ],
    lookalikes: [],
    examples: [
      { w: "過ぎる", r: "すぎる", m: "to pass; to be too much" },
      { w: "過去", r: "かこ", m: "the past" },
      { w: "過ごす", r: "すごす", m: "to spend (time)" }
    ]
  },
  {
    k: "配", meaning: "distribute, deliver", on: ["ハイ"], kun: ["くば.る"], group: "nw-moving", strokes: 10, radical: "酉",
    mnemonic: "A wine jar 酉 with someone kneeling 己 beside it: pouring a cup for each guest, a share for everyone.",
    notes: [
      "Daily life: 心配 (しんぱい, worry) and 宅配便 (たくはいびん, parcel delivery). Live streams say 配信中 (はいしんちゅう).",
      "News: 配信 (はいしん, distribution of news or video) and 配置 (はいち, deployment of staff or troops).",
      "The jar 酉 also sits in 酒 (sake); 配 has 己 on the right."
    ],
    lookalikes: ["酒"],
    examples: [
      { w: "心配", r: "しんぱい", m: "worry" },
      { w: "宅配便", r: "たくはいびん", m: "parcel delivery" },
      { w: "配る", r: "くばる", m: "to hand out" }
    ]
  },
  {
    k: "回", meaning: "times, turn, go round", on: ["カイ"], kun: ["まわ.る", "まわ.す"], group: "nw-time", strokes: 6, radical: "囗",
    mnemonic: "A small mouth 口 inside a big enclosure 囗: ripples spreading round and round.",
    notes: [
      "Counter for times: 一回 (いっかい), 二回 (にかい). 今回 (こんかい) is this time and 次回 (じかい) next time.",
      "回る (まわる) is to turn or go round; 回転寿司 (かいてんずし) is conveyor-belt sushi.",
      "Write the outer box first but close it last, after the small box inside."
    ],
    lookalikes: [],
    examples: [
      { w: "今回", r: "こんかい", m: "this time" },
      { w: "回る", r: "まわる", m: "to turn, go round" },
      { w: "回転寿司", r: "かいてんずし", m: "conveyor-belt sushi" }
    ]
  },
  {
    k: "第", meaning: "ordinal prefix (number ...)", on: ["ダイ"], kun: [], group: "nw-time", strokes: 11, radical: "竹",
    mnemonic: "Bamboo 竹 strips bound in order with a cord: number one, number two, lined up in sequence.",
    notes: [
      "Put before a number to make an ordinal: 第一 (だいいち), first; 第2回 (だいにかい), the second session or round.",
      "次第 (しだい), depending on: 天気次第 (てんきしだい), depending on the weather.",
      "Lookalike 弟 (younger brother) is the same shape without the bamboo on top."
    ],
    lookalikes: ["弟", "策"],
    examples: [
      { w: "第一", r: "だいいち", m: "first, number one" },
      { w: "次第", r: "しだい", m: "depending on" },
      { w: "第一印象", r: "だいいちいんしょう", m: "first impression" }
    ]
  },
  {
    k: "数", meaning: "number, count", on: ["スウ"], kun: ["かず", "かぞ.える"], group: "nw-time", strokes: 13, radical: "攵",
    mnemonic: "A woman 女 by a pile of rice 米 tapping each sack with a stick 攵 as she counts them off.",
    notes: [
      "数字 (すうじ) are numerals and 数学 (すうがく) is maths. As a prefix 数 means 'a few': 数日 (すうじつ), a few days.",
      "数える (かぞえる) is to count. 人数 (にんずう), the number of people, voices す to ず.",
      "News reports love 数: 人数, 件数 (けんすう, number of cases), 数千人 (すうせんにん, several thousand people)."
    ],
    lookalikes: [],
    examples: [
      { w: "数字", r: "すうじ", m: "number, numeral" },
      { w: "数える", r: "かぞえる", m: "to count" },
      { w: "人数", r: "にんずう", m: "number of people" }
    ]
  },
  {
    k: "昨", meaning: "yesterday, previous", on: ["サク"], kun: [], group: "nw-time", strokes: 9, radical: "日",
    mnemonic: "A sun 日 beside something just finished 乍: a day already done, yesterday.",
    notes: [
      "昨日 is usually read きのう, a special reading; さくじつ is the formal version heard in news and business.",
      "昨年 (さくねん), last year, is the formal word for 去年 (きょねん); news uses 昨年 and 昨夜 (さくや), last night.",
      "Lookalike 作 (make) has the same right side with a person on the left."
    ],
    lookalikes: ["作"],
    examples: [
      { w: "昨日", r: "きのう", m: "yesterday" },
      { w: "昨年", r: "さくねん", m: "last year" },
      { w: "昨夜", r: "さくや", m: "last night" }
    ]
  },
  {
    k: "歳", meaning: "years old, age", on: ["サイ"], kun: [], group: "nw-time", strokes: 13, radical: "止",
    mnemonic: "Footsteps 止 on top, a halberd 戌 cutting through the middle and something small 小 tucked inside: notches cut for each year of a life.",
    notes: [
      "The counter for age: 30歳 (さんじゅっさい); 何歳 (なんさい) asks how old. News stories put the age in brackets after a name.",
      "二十歳 (はたち), age twenty, has a special reading.",
      "万歳 (ばんざい), hurray, is shouted with both arms up when a candidate wins an election."
    ],
    lookalikes: [],
    examples: [
      { w: "何歳", r: "なんさい", m: "how old" },
      { w: "二十歳", r: "はたち", m: "twenty years old" },
      { w: "万歳", r: "ばんざい", m: "hurray, banzai" }
    ]
  },
  {
    k: "平", meaning: "flat, peace, even", on: ["ヘイ", "ビョウ"], kun: ["たい.ら", "ひら"], group: "nw-time", strokes: 5, radical: "干",
    mnemonic: "A level beam 干 with two little sparks balanced on either side: flat, even, at peace.",
    notes: [
      "平日 (へいじつ), weekdays: timetables and opening hours are split into 平日 and 土日 (weekends).",
      "平和 (へいわ) is peace, and 平成 (へいせい) is the era from 1989 to 2019.",
      "平等 (びょうどう), equality, uses the rarer びょう reading. Lookalike 半 (half) has its dots above the top line."
    ],
    lookalikes: ["半"],
    examples: [
      { w: "平日", r: "へいじつ", m: "weekday" },
      { w: "平和", r: "へいわ", m: "peace" },
      { w: "平気", r: "へいき", m: "fine, no problem" }
    ]
  },
  {
    k: "成", meaning: "become, achieve", on: ["セイ"], kun: ["な.る"], group: "nw-time", strokes: 6, radical: "戈",
    mnemonic: "A halberd 戈 with an extra hooked blade at its side: a warrior who trained until he became what he set out to be.",
    notes: [
      "成人 (せいじん) is an adult; 成人の日 (Coming of Age Day) is the second Monday of January.",
      "成長 (せいちょう), growth, is in every economy story; 平成 (へいせい) is the era before the current one.",
      "The airport 成田 (なりた) uses the kun reading なり."
    ],
    lookalikes: [],
    examples: [
      { w: "成人", r: "せいじん", m: "adult" },
      { w: "成長", r: "せいちょう", m: "growth" },
      { w: "平成", r: "へいせい", m: "Heisei era" }
    ]
  },
  {
    k: "際", meaning: "occasion, edge, inter-", on: ["サイ"], kun: ["きわ"], group: "nw-time", strokes: 14, radical: "阝",
    mnemonic: "A festival 祭 held on a hillside ⻖ right at the border: the meeting place at the edge, where nations come together.",
    notes: [
      "国際 (こくさい), international: 国際線 (こくさいせん) is the international flights or terminal at airports.",
      "実際 (じっさい) means actually, in reality.",
      "Formal 'when, on the occasion of': ご利用の際は (when using) is on notices and in announcements."
    ],
    lookalikes: ["察"],
    examples: [
      { w: "国際", r: "こくさい", m: "international" },
      { w: "実際", r: "じっさい", m: "actually, in reality" },
      { w: "国際線", r: "こくさいせん", m: "international flights" }
    ]
  },
  {
    k: "在", meaning: "exist, be located", on: ["ザイ"], kun: [], group: "nw-time", strokes: 6, radical: "土",
    mnemonic: "A slanting roof line and a post planted firmly in the earth 土: something that is there and stays there.",
    notes: [
      "現在 (げんざい), now or at present: 現在地 (げんざいち) is the 'You are here' dot on maps in stations and parks.",
      "不在票 (ふざいひょう) is the missed-delivery slip in your postbox; 東京在住 (とうきょうざいじゅう) means 'living in Tokyo'.",
      "The kun reading ある is normally written in kana. The top is like 左 (left)."
    ],
    lookalikes: ["左"],
    examples: [
      { w: "現在", r: "げんざい", m: "now, at present" },
      { w: "現在地", r: "げんざいち", m: "you are here (on maps)" },
      { w: "不在票", r: "ふざいひょう", m: "missed-delivery slip" }
    ]
  },
  {
    k: "末", meaning: "end, tip", on: ["マツ"], kun: ["すえ"], group: "nw-time", strokes: 5, radical: "木",
    mnemonic: "A tree 木 whose top branch reaches out longer than the one below it: the very tip, the end.",
    notes: [
      "週末 (しゅうまつ) is the weekend, 月末 (げつまつ) the end of the month, when bills are due, and 年末 (ねんまつ) the year end.",
      "As すえ: 末っ子 (すえっこ), the youngest child.",
      "The top line is the longer one. Don't confuse it with 本 (book), which has a short line across the bottom."
    ],
    lookalikes: ["本", "木"],
    examples: [
      { w: "週末", r: "しゅうまつ", m: "weekend" },
      { w: "年末", r: "ねんまつ", m: "end of the year" },
      { w: "月末", r: "げつまつ", m: "end of the month" }
    ]
  },
  {
    k: "周", meaning: "around, lap", on: ["シュウ"], kun: ["まわ.り"], group: "nw-time", strokes: 8, radical: "口",
    mnemonic: "A wall 冂 around a lucky 吉 village: the boundary you walk all the way round.",
    notes: [
      "周り (まわり), surroundings: 駅の周り, around the station. 周辺 (しゅうへん) is the formal word in news.",
      "一周 (いっしゅう) is one lap or a full circle; 10周年 (じっしゅうねん), tenth anniversary, is on shop banners.",
      "Don't confuse it with 週 (week), which adds the road radical."
    ],
    lookalikes: ["週"],
    examples: [
      { w: "周り", r: "まわり", m: "surroundings, around" },
      { w: "一周", r: "いっしゅう", m: "one lap, full circle" },
      { w: "周辺", r: "しゅうへん", m: "surrounding area" }
    ]
  },
  {
    k: "限", meaning: "limit", on: ["ゲン"], kun: ["かぎ.る", "かぎ.り"], group: "nw-time", strokes: 9, radical: "阝",
    mnemonic: "A hillside ⻖ and a stubborn figure 艮 who stops and stares: this far and no further, the limit.",
    notes: [
      "期限 (きげん) is a deadline or expiry date; 賞味期限 (しょうみきげん) is the best-before date on food.",
      "限定 (げんてい), limited: 期間限定 (きかんげんてい), limited time only, is on menus and konbini snacks everywhere.",
      "限り (かぎり) is 'only, as long as': 本日限り, today only. 眼 (eye) shares the right side."
    ],
    lookalikes: ["眼"],
    examples: [
      { w: "期限", r: "きげん", m: "deadline, expiry" },
      { w: "限定", r: "げんてい", m: "limited (edition)" },
      { w: "賞味期限", r: "しょうみきげん", m: "best-before date" }
    ]
  },
  {
    k: "表", meaning: "surface, table, express", on: ["ヒョウ"], kun: ["おもて", "あらわ.す", "あらわ.れる"], group: "nw-ideas", strokes: 8, radical: "衣",
    mnemonic: "A garment 衣 with extra lines of embroidery stitched across the top: the fancy outer side of the clothes you show the world.",
    notes: [
      "News staples: 発表 (はっぴょう, announcement) and 代表 (だいひょう, representative). On its own, 表 (ひょう) is a table or chart.",
      "As おもて it is the front or outside: 表に出る (おもてにでる) is to step outside. 表す (あらわす) means to express or show.",
      "The bottom half is the lower part of 衣 (clothing), split open to make room for the lines above."
    ],
    lookalikes: [],
    examples: [
      { w: "発表", r: "はっぴょう", m: "announcement" },
      { w: "代表", r: "だいひょう", m: "representative" },
      { w: "時刻表", r: "じこくひょう", m: "timetable" }
    ]
  },
  {
    k: "対", meaning: "opposite, versus", on: ["タイ", "ツイ"], kun: [], group: "nw-ideas", strokes: 7, radical: "寸",
    mnemonic: "Writing 文 on the left faces a measuring hand 寸 on the right: two sides squaring up to each other.",
    notes: [
      "Sports headlines use 対 for 'versus': 日本対韓国 (にほん たい かんこく). Scores are written 3対1 (さん たい いち).",
      "反対 (はんたい, opposition) and 対策 (たいさく, countermeasures) appear daily. 対応 (たいおう) is dealing with something: 対応中 means staff are on it.",
      "ツイ is rare: mainly 一対 (いっつい, a pair)."
    ],
    lookalikes: ["村"],
    examples: [
      { w: "反対", r: "はんたい", m: "opposition, against" },
      { w: "対策", r: "たいさく", m: "countermeasure" },
      { w: "対応", r: "たいおう", m: "response, handling" }
    ]
  },
  {
    k: "全", meaning: "whole, all", on: ["ゼン"], kun: ["まった.く", "すべ.て"], group: "nw-ideas", strokes: 6, radical: "入",
    mnemonic: "A roof 人 sheltering a king 王: everything under it, the whole kingdom, safe and complete.",
    notes: [
      "全国 (ぜんこく, nationwide) leads countless headlines; 全員 (ぜんいん) is everyone in a group, and 全席禁煙 (ぜんせききんえん) means no smoking at any seat.",
      "全く (まったく) means 'completely' and, with a negative, 'not at all'. 全て (すべて) is 'all of it'.",
      "Don't confuse it with 金 (gold, money), which has two dots and a different roof."
    ],
    lookalikes: ["金"],
    examples: [
      { w: "全国", r: "ぜんこく", m: "nationwide" },
      { w: "全部", r: "ぜんぶ", m: "all, everything" },
      { w: "安全", r: "あんぜん", m: "safety, safe" }
    ]
  },
  {
    k: "共", meaning: "together, both", on: ["キョウ"], kun: ["とも", "とも.に"], group: "nw-ideas", strokes: 6, radical: "八",
    mnemonic: "Two legs 八 under a frame held up by two posts: a heavy table that everyone lifts together.",
    notes: [
      "共同通信 (きょうどうつうしん) is a big news agency whose name appears under many articles; 公共 (こうきょう) means public, as in public facilities.",
      "共に (ともに) is a formal 'together with', common in speeches and writing. 共働き (ともばたらき) is a two-income couple.",
      "Add a person 亻 on the left and you get 供 (offer, child)."
    ],
    lookalikes: ["供"],
    examples: [
      { w: "公共", r: "こうきょう", m: "public" },
      { w: "共通", r: "きょうつう", m: "common, shared" },
      { w: "共同", r: "きょうどう", m: "joint, cooperative" }
    ]
  },
  {
    k: "氏", meaning: "Mr/Ms, family name", on: ["シ"], kun: ["うじ"], group: "nw-ideas", strokes: 4, radical: "氏",
    mnemonic: "A hook hanging at the doorway with a little foot stroke under it: the family crest that stands for the whole clan's name.",
    notes: [
      "Newspapers refer to public figures as 山田氏 (やまだし): a neutral, formal 'Mr' or 'Ms'.",
      "On forms, 氏名 (しめい) means full name: write your surname first.",
      "民 (people) has a box on top; 紙 (paper) has 氏 on its right side."
    ],
    lookalikes: ["民", "紙"],
    examples: [
      { w: "氏名", r: "しめい", m: "full name" },
      { w: "両氏", r: "りょうし", m: "both (people)" },
      { w: "同氏", r: "どうし", m: "the said person, he/she" }
    ]
  },
  {
    k: "的", meaning: "target, -ic, -al", on: ["テキ"], kun: ["まと"], group: "nw-ideas", strokes: 8, radical: "白",
    mnemonic: "A white 白 target beside a ladle 勺 scooping the arrow out of the centre: bullseye.",
    notes: [
      "After a noun, 的 (てき) works like English '-ic' or '-al': 経済的 (けいざいてき, economic), 国際的 (こくさいてき, international).",
      "目的 (もくてき) is a purpose; immigration forms ask for your 訪問目的 (ほうもんもくてき, purpose of visit).",
      "On its own, まと is a target, as in archery. The right side matches the right side of 約."
    ],
    lookalikes: ["約"],
    examples: [
      { w: "目的", r: "もくてき", m: "purpose, aim" },
      { w: "個人的", r: "こじんてき", m: "personal" },
      { w: "経済的", r: "けいざいてき", m: "economic; economical" }
    ]
  },
  {
    k: "原", meaning: "original, field", on: ["ゲン"], kun: ["はら"], group: "nw-ideas", strokes: 10, radical: "厂",
    mnemonic: "Under a cliff 厂, a spring of clear white water bubbles up: the source where everything originates.",
    notes: [
      "原発 (げんぱつ) is short for 原子力発電所 (げんしりょくはつでんしょ), a nuclear power plant: a constant topic in the news.",
      "As はら it is a field or plain and appears in many names: 原田 (はらだ), 野原 (のはら). 川原 is read かわら.",
      "Add water 氵 on the left and you get 源 (source)."
    ],
    lookalikes: ["源"],
    examples: [
      { w: "原料", r: "げんりょう", m: "raw materials" },
      { w: "原子力", r: "げんしりょく", m: "nuclear power" },
      { w: "野原", r: "のはら", m: "field, meadow" }
    ]
  },
  {
    k: "実", meaning: "real, fruit", on: ["ジツ"], kun: ["み", "みの.る"], group: "nw-ideas", strokes: 8, radical: "宀",
    mnemonic: "Under a roof 宀 stands a sturdy plant with three crossbars, so heavy with fruit it spreads its legs: real, solid results.",
    notes: [
      "News words: 事実 (じじつ, fact) and 実施 (じっし, carrying out): 実施中 means 'now in effect'.",
      "Before k, s or t it shortens to じっ: 実家 (じっか, your parents' home), 実際 (じっさい, actually).",
      "み is a fruit or nut; 実る (みのる) is to bear fruit, and 実 is also the boy's name みのる."
    ],
    lookalikes: [],
    examples: [
      { w: "実際", r: "じっさい", m: "actually, in reality" },
      { w: "事実", r: "じじつ", m: "fact" },
      { w: "実家", r: "じっか", m: "parents' home" }
    ]
  },
  {
    k: "向", meaning: "face, towards", on: ["コウ"], kun: ["む.く", "む.かう", "む.こう"], group: "nw-ideas", strokes: 6, radical: "口",
    mnemonic: "A house front with a window 口 in the middle and a little chimney on top: it faces the street.",
    notes: [
      "〜に向けて (むけて) means 'towards, aimed at': 選挙に向けて (せんきょにむけて, ahead of the election). 方向 (ほうこう) is direction.",
      "向こう (むこう) is 'over there, the other side'; 向かい (むかい) is 'opposite', like the shop across the road.",
      "同 (same) has a short line inside instead of the tick on top."
    ],
    lookalikes: ["同"],
    examples: [
      { w: "方向", r: "ほうこう", m: "direction" },
      { w: "向こう", r: "むこう", m: "over there, the other side" },
      { w: "向かい", r: "むかい", m: "opposite, across the way" }
    ]
  },
  {
    k: "要", meaning: "need, essential", on: ["ヨウ"], kun: ["い.る", "かなめ"], group: "nw-ideas", strokes: 9, radical: "覀",
    mnemonic: "A woman 女 balancing a heavy lid 覀 on her head: the key thing she must not drop.",
    notes: [
      "必要 (ひつよう, necessary) and 重要 (じゅうよう, important) are everywhere. 要注意 (ようちゅうい) on a sign means 'watch out'.",
      "要予約 (ようよやく) on a menu or tour flyer means 'booking required'.",
      "要る (いる) means 'to need', but is usually written in kana. The top looks like 西 (west)."
    ],
    lookalikes: ["西"],
    examples: [
      { w: "必要", r: "ひつよう", m: "necessary" },
      { w: "重要", r: "じゅうよう", m: "important" },
      { w: "主要", r: "しゅよう", m: "main, major" }
    ]
  },
  {
    k: "和", meaning: "harmony, Japanese", on: ["ワ"], kun: ["やわ.らぐ", "なご.やか"], group: "nw-ideas", strokes: 8, radical: "口",
    mnemonic: "Grain 禾 beside a mouth 口: everyone fed and eating rice together, in peace and harmony.",
    notes: [
      "和 means 'Japanese style': 和食 (わしょく, Japanese food), 和室 (わしつ, tatami room), 和風 (わふう) on menus and hotel signs.",
      "In the news, 平和 (へいわ) is peace. The current era name, れいわ, is written with 和 too.",
      "私 (I) and 利 (profit) have the same grain 禾 on the left."
    ],
    lookalikes: ["私", "利"],
    examples: [
      { w: "平和", r: "へいわ", m: "peace" },
      { w: "和食", r: "わしょく", m: "Japanese food" },
      { w: "和室", r: "わしつ", m: "Japanese-style room" }
    ]
  },
  {
    k: "活", meaning: "lively, activity", on: ["カツ"], kun: ["い.かす"], group: "nw-ideas", strokes: 9, radical: "氵",
    mnemonic: "Water 氵 beside a tongue 舌: a wet, wagging tongue that keeps you talking, eating and full of life.",
    notes: [
      "生活 (せいかつ, daily life) and 活動 (かつどう, activity) are core news words; 部活 (ぶかつ) is a school club.",
      "活かす (いかす) is to make good use of something; it is also written 生かす.",
      "話 (talk) has the same 舌 on the right, with 言 instead of water."
    ],
    lookalikes: ["話"],
    examples: [
      { w: "生活", r: "せいかつ", m: "daily life" },
      { w: "活動", r: "かつどう", m: "activity" },
      { w: "部活", r: "ぶかつ", m: "school club" }
    ]
  },
  {
    k: "規", meaning: "rule, standard", on: ["キ"], kun: [], group: "nw-ideas", strokes: 11, radical: "見",
    mnemonic: "A grown man 夫 who looks 見 at everything with a measuring eye: the one who sets the rules.",
    notes: [
      "規制 (きせい, regulation) is a news word; 交通規制 (こうつうきせい) means traffic restrictions.",
      "新規 (しんき, new): shop staff ask if you are a 新規 customer, and 新規会員 is a new member.",
      "大規模 (だいきぼ) means large-scale, as in disaster and event reports. 親 also ends in 見."
    ],
    lookalikes: ["見", "親"],
    examples: [
      { w: "規制", r: "きせい", m: "regulation, restriction" },
      { w: "新規", r: "しんき", m: "new (customer, account)" },
      { w: "規模", r: "きぼ", m: "scale, size" }
    ]
  },
  {
    k: "神", meaning: "god, spirit", on: ["シン", "ジン"], kun: ["かみ"], group: "nw-ideas", strokes: 9, radical: "礻",
    mnemonic: "At the altar 礻 a bolt of lightning 申 strikes down: a sign from the gods.",
    notes: [
      "神社 (じんじゃ) is a Shinto shrine, the one with a torii gate; 神 is read じん here.",
      "Special reading in the city name 神戸 (こうべ, Kobe). 神経 (しんけい) is nerves.",
      "社 (company, shrine) has the same altar radical 礻 on the left."
    ],
    lookalikes: ["社"],
    examples: [
      { w: "神社", r: "じんじゃ", m: "Shinto shrine" },
      { w: "神様", r: "かみさま", m: "god" },
      { w: "神戸", r: "こうべ", m: "Kobe" }
    ]
  },
  {
    k: "能", meaning: "ability, Noh", on: ["ノウ"], kun: [], group: "nw-ideas", strokes: 10, radical: "月",
    mnemonic: "A bear with a big head ム over its body 月 and two sets of claws ヒ on the right: a strong, able creature.",
    notes: [
      "可能 (かのう, possible), 能力 (のうりょく, ability) and 機能 (きのう, function) are common in the news and on product labels.",
      "能 (のう) alone is Noh, the classical masked theatre.",
      "Put a heart 心 underneath and you get 態 (state, attitude)."
    ],
    lookalikes: ["態"],
    examples: [
      { w: "可能", r: "かのう", m: "possible" },
      { w: "能力", r: "のうりょく", m: "ability" },
      { w: "機能", r: "きのう", m: "function, feature" }
    ]
  },
  {
    k: "勢", meaning: "force, momentum", on: ["セイ", "ゼイ"], kun: ["いきお.い"], group: "nw-ideas", strokes: 13, radical: "力",
    mnemonic: "A gardener kneeling to plant a sapling, with power 力 underneath: strength that keeps on growing.",
    notes: [
      "情勢 (じょうせい, the situation) is a news word: 国際情勢 (こくさいじょうせい) is the world situation.",
      "大勢 (おおぜい, lots of people) uses ぜい. 勢い (いきおい) is momentum or force.",
      "熱 (heat) has the same top with fire dots 灬 instead of 力."
    ],
    lookalikes: ["熱"],
    examples: [
      { w: "大勢", r: "おおぜい", m: "many people, a crowd" },
      { w: "情勢", r: "じょうせい", m: "situation, state of affairs" },
      { w: "勢い", r: "いきおい", m: "momentum, force" }
    ]
  },
  {
    k: "可", meaning: "possible, allowed", on: ["カ"], kun: [], group: "nw-ideas", strokes: 5, radical: "口",
    mnemonic: "A mouth 口 tucked under a nail-shaped hook 丁: it nods yes, you may.",
    notes: [
      "On signs 可 means 'OK, allowed': カード可 (cards accepted), 駐車可 (parking OK). The opposite is 不可 (ふか).",
      "可能 (かのう, possible) is common; 可決 (かけつ) is a bill being passed in parliament.",
      "何 (what) hides 可 on its right side."
    ],
    lookalikes: ["何"],
    examples: [
      { w: "可能", r: "かのう", m: "possible" },
      { w: "不可", r: "ふか", m: "not allowed; fail" },
      { w: "可決", r: "かけつ", m: "approval (of a bill)" }
    ]
  },
  {
    k: "域", meaning: "area, region", on: ["イキ"], kun: [], group: "nw-ideas", strokes: 11, radical: "土",
    mnemonic: "Earth 土 beside 或, a patch of land walled in and guarded by a spear: a marked-off region.",
    notes: [
      "地域 (ちいき) is the local area or region: city hall notices and the news talk about 地域の人 (local residents).",
      "区域 (くいき) is a zone: 禁煙区域 (no-smoking zone) or 立入禁止区域 (keep-out zone).",
      "全域 (ぜんいき) is the whole area, as in weather warnings for an entire region."
    ],
    lookalikes: [],
    examples: [
      { w: "地域", r: "ちいき", m: "region, local area" },
      { w: "区域", r: "くいき", m: "zone, area" },
      { w: "全域", r: "ぜんいき", m: "the whole area" }
    ]
  },
  {
    k: "状", meaning: "condition, letter", on: ["ジョウ"], kun: [], group: "nw-ideas", strokes: 7, radical: "犬",
    mnemonic: "A dog 犬 lying beside a bed frame: you can read its condition from how it lies.",
    notes: [
      "状態 (じょうたい, condition) and 現状 (げんじょう, the current state) are news words; 症状 (しょうじょう) are symptoms at the clinic.",
      "At the end of a word it can also mean a letter or written document: 委任状 (いにんじょう) is a letter of proxy.",
      "The dog 犬 on the right keeps its dot; don't drop it."
    ],
    lookalikes: [],
    examples: [
      { w: "状態", r: "じょうたい", m: "condition, state" },
      { w: "現状", r: "げんじょう", m: "present situation" },
      { w: "症状", r: "しょうじょう", m: "symptoms" }
    ]
  },
  {
    k: "直", meaning: "straight, fix", on: ["チョク", "ジキ"], kun: ["なお.す", "なお.る", "ただ.ちに"], group: "nw-ideas", strokes: 8, radical: "目",
    mnemonic: "Ten 十 eyes 目 tucked in a corner, all staring straight ahead: nothing crooked gets past them.",
    notes: [
      "直す (なおす) is to fix or correct; after a verb it means 'redo': 書き直す (かきなおす, rewrite).",
      "News says 直後 (ちょくご, right after) and 直前 (ちょくぜん, just before). 正直 (しょうじき, honest) uses じき.",
      "真 (true) looks similar but has legs 八 at the bottom."
    ],
    lookalikes: ["真"],
    examples: [
      { w: "直す", r: "なおす", m: "to fix, to correct" },
      { w: "正直", r: "しょうじき", m: "honest" },
      { w: "直後", r: "ちょくご", m: "right after" }
    ]
  },
  {
    k: "模", meaning: "model, pattern", on: ["モ", "ボ"], kun: [], group: "nw-ideas", strokes: 14, radical: "木",
    mnemonic: "Wood 木 beside a sun setting into the grass 莫: a carver making a wooden copy of the sunset, a model.",
    notes: [
      "規模 (きぼ, scale) uses ぼ: 大規模 (だいきぼ, large-scale) is common in the news.",
      "模様 (もよう) is a pattern, and also 'looks like': weather reports say 雨模様 (あまもよう, looks like rain).",
      "模型 (もけい) is a scale model, like a train or a plastic kit."
    ],
    lookalikes: [],
    examples: [
      { w: "規模", r: "きぼ", m: "scale, size" },
      { w: "模様", r: "もよう", m: "pattern; signs of" },
      { w: "模型", r: "もけい", m: "model, scale model" }
    ]
  },
  {
    k: "亡", meaning: "deceased, perish", on: ["ボウ"], kun: ["な.い"], group: "nw-ideas", strokes: 3, radical: "亠",
    mnemonic: "A head 亠 ducking into a hidden corner 匸: gone, no longer here.",
    notes: [
      "The news reports deaths with 亡くなる (なくなる, to pass away), the polite word, and 死亡 (しぼう, death).",
      "死亡事故 (しぼうじこ) is a fatal accident, often on road-safety signs.",
      "Only three strokes: the top dot, then the long line, then the bent corner stroke."
    ],
    lookalikes: [],
    examples: [
      { w: "死亡", r: "しぼう", m: "death" },
      { w: "亡くなる", r: "なくなる", m: "to pass away" },
      { w: "死亡事故", r: "しぼうじこ", m: "fatal accident" }
    ]
  },
  {
    k: "美", meaning: "beauty, beautiful", on: ["ビ", "ミ"], kun: ["うつく.しい"], group: "nw-ideas", strokes: 9, radical: "羊",
    mnemonic: "A big 大 sheep with curly horns on top: in old times a fine, fat sheep was the very picture of beauty.",
    notes: [
      "美容院 (びよういん) is a hair salon: don't mix it up with 病院 (びょういん, hospital).",
      "A favourite in girls' names, read み in 由美 (ゆみ) and よし in 美子 (よしこ).",
      "美しい (うつくしい) is a written, slightly formal 'beautiful'; in speech people often say きれい."
    ],
    lookalikes: [],
    examples: [
      { w: "美しい", r: "うつくしい", m: "beautiful" },
      { w: "美容院", r: "びよういん", m: "hair salon" },
      { w: "美人", r: "びじん", m: "beautiful woman" }
    ]
  },
  {
    k: "遺", meaning: "leave behind", on: ["イ", "ユイ"], kun: [], group: "nw-ideas", strokes: 15, radical: "辶",
    mnemonic: "Precious goods 貴 carried along the road 辶 and left behind: what someone leaves for those who come after.",
    notes: [
      "世界遺産 (せかいいさん) is a World Heritage site, proudly printed on tourist signs.",
      "遺族 (いぞく, bereaved family) is a news word after accidents. 遺言 (ゆいごん, a will) uses ゆい.",
      "違 (differ) also runs along the road 辶, with a different load on top."
    ],
    lookalikes: ["違"],
    examples: [
      { w: "世界遺産", r: "せかいいさん", m: "World Heritage site" },
      { w: "遺族", r: "いぞく", m: "bereaved family" },
      { w: "遺言", r: "ゆいごん", m: "will (testament)" }
    ]
  },
  {
    k: "辺", meaning: "area, vicinity", on: ["ヘン"], kun: ["あた.り"], group: "nw-ideas", strokes: 5, radical: "辶",
    mnemonic: "A sword 刀 left by the side of the road 辶: it's somewhere around here.",
    notes: [
      "周辺 (しゅうへん, the surrounding area) is a news and map word: 駅周辺 (えきしゅうへん, around the station).",
      "この辺 (このへん) is 'around here'; 辺り (あたり) means the same. 海辺 (うみべ, seaside) uses べ.",
      "渡辺 (わたなべ) is one of Japan's commonest surnames. 込 also sits on the road 辶."
    ],
    lookalikes: ["込"],
    examples: [
      { w: "周辺", r: "しゅうへん", m: "surrounding area" },
      { w: "辺り", r: "あたり", m: "around, vicinity" },
      { w: "海辺", r: "うみべ", m: "seaside, beach" }
    ]
  },
  {
    k: "育", meaning: "raise, bring up", on: ["イク"], kun: ["そだ.つ", "そだ.てる"], group: "nw-ideas", strokes: 8, radical: "月",
    mnemonic: "A newborn turned head-down on top of a body 月: a baby arriving and then being raised until it grows.",
    notes: [
      "教育 (きょういく, education) and 育児 (いくじ, childcare) are news words; 体育 (たいいく) is PE at school.",
      "育つ (そだつ) is to grow up; 育てる (そだてる) is to raise.",
      "The school 体育館 (たいいくかん, gym) is often an evacuation site in disasters."
    ],
    lookalikes: [],
    examples: [
      { w: "教育", r: "きょういく", m: "education" },
      { w: "育てる", r: "そだてる", m: "to raise, to bring up" },
      { w: "体育", r: "たいいく", m: "PE, physical education" }
    ]
  },
  {
    k: "良", meaning: "good", on: ["リョウ"], kun: ["よ.い", "い.い"], group: "nw-ideas", strokes: 7, radical: "艮",
    mnemonic: "A bowl piled high with good food and a dot of garnish on top: good, nice.",
    notes: [
      "良い can be read よい or いい; いい is usual in speech and normally written in kana.",
      "不良 (ふりょう) means defective, or a delinquent youth; 改良 (かいりょう) is an improvement, as on product packaging.",
      "The right side of 食 (eat) looks very similar."
    ],
    lookalikes: ["食"],
    examples: [
      { w: "良い", r: "よい", m: "good" },
      { w: "不良", r: "ふりょう", m: "defective; delinquent" },
      { w: "改良", r: "かいりょう", m: "improvement" }
    ]
  },
  {
    k: "横", meaning: "side, horizontal", on: ["オウ"], kun: ["よこ"], group: "nw-ideas", strokes: 15, radical: "木",
    mnemonic: "A tree 木 next to yellow 黄: a yellow branch lying sideways.",
    notes: [
      "横 (よこ) is 'beside, next to' in directions: 駅の横 (えきのよこ, beside the station).",
      "横断歩道 (おうだんほどう) is a pedestrian crossing; 横断禁止 means don't cross here.",
      "横書き (よこがき) is horizontal writing, used on most signs, websites and forms."
    ],
    lookalikes: [],
    examples: [
      { w: "横", r: "よこ", m: "side, beside" },
      { w: "横断歩道", r: "おうだんほどう", m: "pedestrian crossing" },
      { w: "横書き", r: "よこがき", m: "horizontal writing" }
    ]
  },
  {
    k: "針", meaning: "needle, policy", on: ["シン"], kun: ["はり"], group: "nw-ideas", strokes: 10, radical: "金",
    mnemonic: "Metal 金 ground down to a single sharp cross-shaped point 十: a needle.",
    notes: [
      "方針 (ほうしん, policy) is everywhere in the news: the government's 方針 is its course of action.",
      "針 (はり) is a needle, a pin, or a clock hand. 針金 (はりがね) is wire.",
      "計 (measure) also ends in 十, with 言 on the left instead of metal."
    ],
    lookalikes: ["計"],
    examples: [
      { w: "方針", r: "ほうしん", m: "policy, course" },
      { w: "針", r: "はり", m: "needle; clock hand" },
      { w: "針金", r: "はりがね", m: "wire" }
    ]
  },
  {
    k: "宅", meaning: "home, house", on: ["タク"], kun: [], group: "nw-ideas", strokes: 6, radical: "宀",
    mnemonic: "A roof 宀 over a plant 乇 that has put down roots: the house where you settle.",
    notes: [
      "宅配便 (たくはいびん) is home delivery; 宅配ボックス is the parcel locker in apartment blocks.",
      "自宅 (じたく, one's home) and 住宅 (じゅうたく, housing) are news words; 帰宅 (きたく) is going home.",
      "お宅 (おたく) is a polite 'your home'."
    ],
    lookalikes: [],
    examples: [
      { w: "自宅", r: "じたく", m: "one's home" },
      { w: "住宅", r: "じゅうたく", m: "housing, residence" },
      { w: "宅配便", r: "たくはいびん", m: "home delivery" }
    ]
  },
  {
    k: "深", meaning: "deep", on: ["シン"], kun: ["ふか.い", "ふか.まる"], group: "nw-ideas", strokes: 11, radical: "氵",
    mnemonic: "Water 氵 beside a tree 木 under a cave roof: water deep enough to swallow a whole tree.",
    notes: [
      "深夜 (しんや) is late at night: 深夜料金 (しんやりょうきん) is the late-night rate on taxis and parking.",
      "深刻 (しんこく, serious) is a news word, as in a serious shortage.",
      "深い (ふかい) is deep; the opposite, shallow, is あさい."
    ],
    lookalikes: [],
    examples: [
      { w: "深い", r: "ふかい", m: "deep" },
      { w: "深夜", r: "しんや", m: "late at night" },
      { w: "深刻", r: "しんこく", m: "serious, grave" }
    ]
  },
  {
    k: "響", meaning: "echo, resound", on: ["キョウ"], kun: ["ひび.く"], group: "nw-ideas", strokes: 20, radical: "音",
    mnemonic: "Sound 音 rising from the village 郷 below: the temple bell echoes across the valley.",
    notes: [
      "影響 (えいきょう, effect, influence) is the big one: 台風の影響で (たいふうのえいきょうで, due to the typhoon) is a stock phrase in train announcements.",
      "響く (ひびく) is to echo or resound. 音響 (おんきょう) is acoustics or sound equipment.",
      "Twenty strokes: write the village 郷 on top first, then the sound 音 underneath."
    ],
    lookalikes: [],
    examples: [
      { w: "影響", r: "えいきょう", m: "influence, effect" },
      { w: "響く", r: "ひびく", m: "to echo, to resound" },
      { w: "音響", r: "おんきょう", m: "acoustics, sound" }
    ]
  },
  {
    k: "幹", meaning: "trunk, main part", on: ["カン"], kun: ["みき"], group: "nw-ideas", strokes: 13, radical: "干",
    mnemonic: "The sun 日 rising between branches on the left and a dry pole 干 on the right: the tall trunk that holds the tree up.",
    notes: [
      "新幹線 (しんかんせん, bullet train) is where most people meet this kanji first: the 'new trunk line'.",
      "幹事 (かんじ) is the organiser of a party; 幹事長 (かんじちょう) is a party secretary-general in political news.",
      "As みき it is the trunk of a tree."
    ],
    lookalikes: [],
    examples: [
      { w: "新幹線", r: "しんかんせん", m: "bullet train" },
      { w: "幹事", r: "かんじ", m: "organiser (of a party)" },
      { w: "幹", r: "みき", m: "tree trunk" }
    ]
  },
  {
    k: "態", meaning: "state, attitude", on: ["タイ"], kun: [], group: "nw-ideas", strokes: 14, radical: "心",
    mnemonic: "Ability 能 resting on a heart 心: how your heart carries your abilities shows your state and attitude.",
    notes: [
      "状態 (じょうたい, condition) and 事態 (じたい, situation) are news words: 事態 is used for serious developments.",
      "態度 (たいど) is someone's attitude or manner.",
      "Without the 心 underneath it is 能 (ability)."
    ],
    lookalikes: ["能"],
    examples: [
      { w: "状態", r: "じょうたい", m: "condition, state" },
      { w: "態度", r: "たいど", m: "attitude, manner" },
      { w: "事態", r: "じたい", m: "situation, development" }
    ]
  },
  {
    k: "頭", meaning: "head", on: ["トウ", "ズ"], kun: ["あたま"], group: "nw-ideas", strokes: 16, radical: "頁",
    mnemonic: "A round bean 豆 next to a head 頁: a bean-shaped head on a body.",
    notes: [
      "頭痛 (ずつう, headache) uses ず, as on painkiller boxes.",
      "先頭 (せんとう) is the front of a line or train; 店頭 (てんとう) is the shop front. 頭 (とう) also counts large animals.",
      "題 (topic) has the same 頁 on the right."
    ],
    lookalikes: ["題"],
    examples: [
      { w: "頭", r: "あたま", m: "head" },
      { w: "頭痛", r: "ずつう", m: "headache" },
      { w: "先頭", r: "せんとう", m: "front, head (of a line)" }
    ]
  },
  {
    k: "影", meaning: "shadow, influence", on: ["エイ"], kun: ["かげ"], group: "nw-ideas", strokes: 15, radical: "彡",
    mnemonic: "A scene 景 with three slanting rays 彡 of light across it: the sun casting long shadows over the view.",
    notes: [
      "影響 (えいきょう) is how the news says 'effect': 影響が出ています means there are disruptions.",
      "撮影 (さつえい) is photography or filming: 撮影禁止 (no photography) signs are common in museums and shops.",
      "影 (かげ) is a shadow or silhouette."
    ],
    lookalikes: [],
    examples: [
      { w: "影", r: "かげ", m: "shadow" },
      { w: "影響", r: "えいきょう", m: "influence, effect" },
      { w: "撮影", r: "さつえい", m: "photography, filming" }
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
  "氺": "water, at the bottom (したみず)",
  // more everyday, stations & trains, shops & offices
  "化": "change (か)",
  "毎": "every (まい)",
  "穴": "hole (あなかんむり)",
  "工": "craft (こう)",
  "早": "early (はやい)",
  "雨": "rain (あめかんむり)",
  "兀": "stool, legs",
  "𡗗": "spring top (three lines and a person)",
  "冫": "ice (にすい)",
  "⺨": "animal, left side (けものへん)",
  "苗": "seedling (なえ)",
  "鳥": "bird (とり)",
  "也": "also (なり)",
  "枼": "leaves on a tree",
  "勿": "do not (なかれ)",
  "豕": "pig (いのこ)",
  "酉": "sake jar (とりへん)",
  "氏": "clan (うじ)",
  "相": "mutual (そう)",
  "龰": "foot, at the bottom",
  "冖": "cover (わかんむり)",
  "与": "give (よ)",
  "具": "tool (ぐ)",
  "会": "meet (かい)",
  "由": "reason (ゆう)",
  "立": "stand (たつ)",
  "尺": "measure (しゃく)",
  "泉": "spring water (いずみ)",
  "足": "foot (あしへん)",
  "各": "each (かく)",
  "金": "metal, gold (かねへん)",
  "失": "lose (しつ)",
  "首": "neck, head (くび)",
  "冬": "winter (ふゆ)",
  "女": "woman (おんなへん)",
  "台": "stand (だい)",
  "七": "seven (しち)",
  "己": "self (おのれ)",
  "疋": "bolt of cloth (ひき)",
  "其": "that (そ)",
  "月": "moon, flesh (つき)",
  "旨": "tasty, gist (し)",
  "憂": "grief (ゆう)",
  "束": "bundle (たば)",
  "亭": "pavilion (てい)",
  "並": "line up (なみ)",
  "夅": "coming down (right of 降)",
  "奐": "bright, change (right of 換)",
  "則": "rule (そく)",
  "开": "two posts (in 開)",
  "才": "talent (さい)",
  "甲": "shell, first (こう)",
  "占": "occupy, divine (せん)",
  "罒": "net (あみがしら)",
  "貝": "shell, money (かい)",
  "害": "harm (がい)",
  "弓": "bow (ゆみ)",
  "兌": "exchange (right of 税)",
  "入": "enter (いる)",
  "直": "straight (ちょく)",
  "客": "guest (きゃく)",
  "見": "see (みる)",
  "予": "beforehand (よ)",
  "垂": "hang down (すい)",
  "更": "again, renew (こう)",
  "关": "pair of hands, opening (in 送)",
  "何": "what (なに)",
  "殳": "weapon (るまた)",
  "戸": "door (と)",
  "斤": "axe (おのづくり)",
  "巾": "cloth (はば)",
  "丁": "block, nail (ちょう)",
  "牛": "cow (うしへん)",
  // restaurants & food
  "井": "well (い)",
  "麦": "wheat (むぎ)",
  "面": "face, surface (めん)",
  "三": "three (さん)",
  "朿": "thorn (in 刺)",
  "⻞": "food, left side (しょくへん)",
  "咼": "twisted mouth (in 鍋)",
  "府": "office, prefecture (ふ)",
  "肉": "meat (にく)",
  "卯": "rabbit, the fourth zodiac sign (う)",
  "果": "fruit (か)",
  "反": "against (はん)",
  "采": "pick, gather (in 菜)",
  "尭": "high (in 焼)",
  "未": "not yet (み)",
  "曽": "formerly (in 噌)",
  "令": "order, command (れい)",
  "水": "water (みず)",
  "不": "not (ふ)",
  "契": "pledge (in 喫)",
  "固": "hard (こ)",
  "成": "become (せい)",
  "皿": "dish (さら)",
  "方": "direction (ほう)",
  "帚": "broom (in 帰)",
  // weather & news, work & office
  "雲": "cloud (くも)",
  "取": "take (とる)",
  "石": "stone (いしへん)",
  "寉": "crane (in 確)",
  "玄": "dark, mysterious (げん)",
  "務": "duty (む)",
  "爰": "pull (in 暖)",
  "京": "capital (きょう)",
  "子": "child (こ)",
  "即": "at once (in 節)",
  "此": "this (in 紫)",
  "分": "divide (ぶん)",
  "敬": "respect (けい)",
  "辰": "dragon, the fifth zodiac sign (たつ)",
  "巛": "river (かわ)",
  "辟": "avoid (in 避)",
  "皮": "skin (ひ)",
  "士": "samurai, gentleman (し)",
  "亅": "hook (はねぼう)",
  "礻": "altar, left side (しめすへん)",
  "動": "move (どう)",
  "菫": "clay (in 勤)",
  "咅": "spit (in 部)",
  "合": "fit together (ごう)",
  "歹": "bones (がつへん)",
  "戋": "small (in 残)",
  "義": "righteousness (ぎ)",
  "次": "next (じ)",
  "忍": "endure (にん)",
  "帝": "emperor (てい)",
  "旦": "dawn (たん)",
  "炎": "flame (えん)",
  "亥": "boar, the last zodiac sign (い)",
  "翟": "pheasant (in 曜)",
  "周": "around (しゅう)",
  "夫": "husband, man (おっと)",
  // core essentials, reading the news
  "乍": "suddenly (in 作)",
  "隹": "short-tailed bird (ふるとり)",
  "軍": "army (ぐん)",
  "孝": "filial piety (こう)",
  "吏": "official (in 使)",
  "式": "ceremony (しき)",
  "丂": "breath (in 考)",
  "走": "run (そうにょう)",
  "廴": "stretch (えんにょう)",
  "央": "centre (おう)",
  "羽": "feather (はね)",
  "止": "stop (とめる)",
  "少": "few (しょう)",
  "昔": "long ago (むかし)",
  "代": "generation (だい)",
  "免": "exempt (in 勉)",
  "小": "small (ちいさい)",
  "龶": "growing plant (top of 青)",
  "巴": "coil (in 色)",
  "亜": "second, Asia (あ)",
  "市": "market, city (いち)",
  "九": "nine (きゅう)",
  "⺍": "three dots, on top",
  "弋": "stake, arrow (しきがまえ)",
  "介": "between (かい)",
  "𠦝": "sunrise through trees (in 朝)",
  "羊": "sheep (ひつじ)",
  "巽": "southeast (in 選)",
  "兄": "older brother (あに)",
  "去": "leave (きょ)",
  "忩": "hurry (in 総)",
  "充": "fill (じゅう)",
  "𠂢": "branching stream (in 派)",
  "壬": "load (in 任)",
  "安": "cheap, calm (あん)",
  "覀": "cover, west (にし)",
  "半": "half (はん)",
  "𢦏": "cut (in 裁)",
  "衣": "clothing (ころも)",
  "番": "number (ばん)",
  "斥": "reject (in 訴)",
  "谷": "valley (たに)",
  "叟": "old man (in 捜)",
  "甫": "first, seedling (in 捕)",
  "古": "old (ふるい)",
  "韋": "leather (なめしがわ)",
  "行": "go (ぎょうがまえ)",
  "圣": "warp threads (in 経)",
  "斉": "equal (せい)",
  "朱": "vermilion (しゅ)",
  "意": "mind (い)",
  "弗": "not (in 費)",
  "咸": "all (in 減)",
  "匀": "even out (in 均)",
  "戠": "mark (in 職)",
  "劵": "weary (in 勝)",
  "単": "single (たん)",
  "戈": "halberd (ほこづくり)",
  "侖": "in order (in 論)",
  "支": "branch (しにょう)",
  "叔": "uncle (in 督)",
  "畐": "full (in 福)",
  "呂": "backbone (ろ)",
  "滕": "rise (in 藤)",
  "廾": "two hands (にじゅうあし)",
  "奇": "odd, strange (き)",
  "公": "public (こう)",
  "中": "middle (なか)",
  "川": "river (かわ)",
  "巷": "street (in 港)",
  "喬": "tall (in 橋)",
  "坴": "mound (in 陸)",
  "左": "left (ひだり)",
  "袁": "long robe (in 園)",
  "劦": "three powers (in 協)",
  "幾": "how many (いく)",
  "冓": "framework (in 構)",
  "崔": "lofty (in 催)",
  "寅": "tiger, the third zodiac sign (とら)",
  "莫": "not, dusk (in 幕)",
  "彔": "carve (in 録)",
  "刑": "punishment (けい)",
  "系": "lineage (けい)",
  "朮": "glutinous millet (in 述)",
  "今": "now (いま)",
  "父": "father (ちち)",
  "厂": "cliff (がんだれ)",
  "㐬": "flowing (in 流)",
  "吉": "good luck (きち)",
  "洛": "the capital (in 落)",
  "复": "return (in 復)",
  "亦": "also (in 変)",
  "肖": "resemble (in 消)",
  "最": "most (さい)",
  "癶": "footsteps (はつがしら)",
  "豆": "bean (まめ)",
  "𠂤": "heap (in 追)",
  "敕": "order (in 整)",
  "道": "road, way (みち)",
  "長": "long (ながい)",
  "度": "degree (ど)",
  "共": "together (きょう)",
  "舟": "boat (ふねへん)",
  "亢": "neck (in 航)",
  "㝵": "obtain (in 得)",
  "娄": "pile up (in 数)",
  "戌": "dog, the eleventh zodiac sign (いぬ)",
  "文": "writing (ぶん)",
  "申": "say (しん)",
  "或": "some (in 域)",
  "⺦": "bed, left side (in 状)",
  "犬": "dog (いぬ)",
  "⺷": "sheep, on top (in 美)",
  "貴": "precious (き)",
  "黄": "yellow (き)",
  "乇": "blade of grass (in 宅)",
  "郷": "home town (きょう)",
  "能": "ability (のう)",
  "景": "scenery (けい)",
  "彡": "hair, stripes (さんづくり)"
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
  { id: "kw-hokenshou-onegai", text: "保険証をお願いします", kana: "ほけんしょうをおねがいします", romaji: "hokenshō o onegai shimasu", meaning: "your insurance card, please", level: 3, pack: "clinic", scene: ["clinic"], note: "What reception says to you. を is said お." },

  // ---- More everyday: nature and things ----
  { id: "kw-umi", text: "海", kana: "うみ", romaji: "umi", meaning: "sea", level: 1, scene: ["sea"], note: "Alone it is うみ, but in compounds かい: 海外 (かいがい, overseas)." },
  { id: "kw-hoshi", text: "星", kana: "ほし", romaji: "hoshi", meaning: "star", level: 1, scene: ["star", "moon"] },
  { id: "kw-neko", text: "猫", kana: "ねこ", romaji: "neko", meaning: "cat", level: 1, scene: ["cat"], note: "Look for 猫カフェ (ねこカフェ) signs, and the waving まねきねこ in shop windows." },
  { id: "kw-inu", text: "犬", kana: "いぬ", romaji: "inu", meaning: "dog", level: 1, scene: ["dog"] },
  { id: "kw-hanami", text: "花見", kana: "はなみ", romaji: "hanami", meaning: "cherry-blossom viewing", level: 2, scene: ["sakura", "flower"], note: "In late March and April people picnic under the cherry trees, often booking a spot early in the morning." },
  { id: "kw-hare", text: "晴れ", kana: "はれ", romaji: "hare", meaning: "sunny, fine weather", level: 2, scene: ["sun"], note: "The sunny symbol on forecasts. 晴れのち雨 means sunny, then rain later." },
  { id: "kw-taifuu", text: "台風", kana: "たいふう", romaji: "taifū", meaning: "typhoon", level: 2, scene: ["rain", "sea"], note: "Typhoon season peaks in August and September, when trains may stop; check the news." },
  { id: "kw-shinrin", text: "森林", kana: "しんりん", romaji: "shinrin", meaning: "forest", level: 2, scene: ["tree", "mountain"] },
  { id: "kw-happa", text: "葉っぱ", kana: "はっぱ", romaji: "happa", meaning: "leaf", level: 2, scene: ["leaf", "tree"] },
  { id: "kw-kingyo", text: "金魚", kana: "きんぎょ", romaji: "kingyo", meaning: "goldfish", level: 2, scene: ["fish"] },
  { id: "kw-shunkashuutou", text: "春夏秋冬", kana: "しゅんかしゅうとう", romaji: "shunkashūtō", meaning: "the four seasons", level: 3, scene: ["sakura", "snow"], note: "Read with on'yomi; on their own the seasons are はる, なつ, あき, ふゆ." },
  { id: "kw-isseki-nichou", text: "一石二鳥", kana: "いっせきにちょう", romaji: "isseki nichō", meaning: "two birds with one stone", level: 3, scene: ["bird"], note: "Literally 'one stone, two birds': the same idea as the English saying." },
  { id: "kw-amagumo", text: "雨雲", kana: "あまぐも", romaji: "amagumo", meaning: "rain cloud", level: 3, scene: ["rain"], note: "雨 becomes あま and 雲 becomes ぐも when joined. Weather apps show 雨雲 radar maps." },
  { id: "kw-ichibanboshi", text: "一番星", kana: "いちばんぼし", romaji: "ichibanboshi", meaning: "the first star of the evening", level: 3, scene: ["star", "moon"] },
  { id: "kw-ocha", text: "お茶", kana: "おちゃ", romaji: "ocha", meaning: "tea, green tea", level: 1, scene: ["tea", "vending"], note: "In vending machines and konbini, お茶 means unsweetened green tea; it is also a casual 'let's grab a drink'." },
  { id: "kw-kasa", text: "傘", kana: "かさ", romaji: "kasa", meaning: "umbrella", level: 1, scene: ["umbrella", "rain"] },
  { id: "kw-mado", text: "窓", kana: "まど", romaji: "mado", meaning: "window", level: 1, scene: ["house"] },
  { id: "kw-niku", text: "肉", kana: "にく", romaji: "niku", meaning: "meat", level: 1, scene: ["food"], note: "Don't mix it up with 内 (inside), which has one 人 in the frame, not two." },
  { id: "kw-shashin", text: "写真", kana: "しゃしん", romaji: "shashin", meaning: "photo", level: 2, scene: ["fuji", "sakura"], note: "写真禁止 on a sign at a temple or museum means no photos." },
  { id: "kw-tegami", text: "手紙", kana: "てがみ", romaji: "tegami", meaning: "letter", level: 2, scene: ["book", "heart"], note: "紙 becomes がみ here: 'hand paper' is a letter, not toilet paper." },
  { id: "kw-kaimono", text: "買い物", kana: "かいもの", romaji: "kaimono", meaning: "shopping", level: 2, scene: ["konbini", "city"] },
  { id: "kw-nomimono", text: "飲み物", kana: "のみもの", romaji: "nomimono", meaning: "drink", level: 2, scene: ["vending", "coffee"], note: "Menus list 飲み物 as a separate section; at a set meal the server may ask which drink you want." },
  { id: "kw-madoguchi", text: "窓口", kana: "まどぐち", romaji: "madoguchi", meaning: "service counter", level: 2, scene: ["city", "train"], note: "The staffed counter at a bank, post office, city hall or station; numbered ones read 1番窓口." },
  { id: "kw-gamen", text: "画面", kana: "がめん", romaji: "gamen", meaning: "screen", level: 2, scene: ["vending", "iccard"] },
  { id: "kw-jouzu", text: "上手", kana: "じょうず", romaji: "jōzu", meaning: "good at, skilful", level: 3, scene: ["heart"], note: "Irregular reading. Expect 日本語が上手ですね after your first few words; a modest いいえ is the usual reply." },
  { id: "kw-nihonshu", text: "日本酒", kana: "にほんしゅ", romaji: "nihonshu", meaning: "sake (rice wine)", level: 3, scene: ["lantern", "food"] },
  { id: "kw-hyakuendama", text: "百円玉", kana: "ひゃくえんだま", romaji: "hyakuendama", meaning: "100-yen coin", level: 3, scene: ["vending", "konbini"] },
  { id: "kw-ooya-san", text: "大家さん", kana: "おおやさん", romaji: "ōya-san", meaning: "landlord", level: 3, scene: ["house"] },

  // ---- Stations & trains (pack: "station") ----
  { id: "kw-eki", text: "駅", kana: "えき", romaji: "eki", meaning: "station", level: 1, pack: "station", scene: ["train", "city"], note: "Station names are said with 駅 after them: 東京駅 (とうきょうえき)." },
  { id: "kw-tsugi", text: "次", kana: "つぎ", romaji: "tsugi", meaning: "next", level: 1, pack: "station", scene: ["train"] },
  { id: "kw-seki", text: "席", kana: "せき", romaji: "seki", meaning: "seat", level: 1, pack: "station", scene: ["train"] },
  { id: "kw-michi", text: "道", kana: "みち", romaji: "michi", meaning: "road, way", level: 1, pack: "station", scene: ["city"], note: "道を聞く (みちをきく) is to ask the way; station staff are used to it." },
  { id: "kw-chika", text: "地下", kana: "ちか", romaji: "chika", meaning: "underground, basement", level: 1, pack: "station", scene: ["city", "train"] },
  { id: "kw-ekimae", text: "駅前", kana: "えきまえ", romaji: "ekimae", meaning: "in front of the station", level: 1, pack: "station", scene: ["city"], note: "The busy area outside the station: bus stops, taxis and shops." },
  { id: "kw-kaisatsu", text: "改札", kana: "かいさつ", romaji: "kaisatsu", meaning: "ticket gate", level: 2, pack: "station", scene: ["iccard", "train"], note: "Touch your IC card on the reader; big stations have several, like 北改札 and 南改札." },
  { id: "kw-kippu", text: "切符", kana: "きっぷ", romaji: "kippu", meaning: "ticket", level: 2, pack: "station", scene: ["train"], note: "Sound change: きる + ふ becomes きっぷ." },
  { id: "kw-kaisoku", text: "快速", kana: "かいそく", romaji: "kaisoku", meaning: "rapid train", level: 2, pack: "station", scene: ["train"], note: "Skips small stations, usually without an extra fare." },
  { id: "kw-tokkyuu", text: "特急", kana: "とっきゅう", romaji: "tokkyū", meaning: "limited express", level: 2, pack: "station", scene: ["train"] },
  { id: "kw-shuuden", text: "終電", kana: "しゅうでん", romaji: "shūden", meaning: "last train", level: 2, pack: "station", scene: ["train", "moon"], note: "Check the time before a night out: missing it means a taxi or waiting for 始発 (しはつ)." },
  { id: "kw-kaidan", text: "階段", kana: "かいだん", romaji: "kaidan", meaning: "stairs", level: 2, pack: "station", scene: ["train", "city"] },
  { id: "kw-norikae", text: "乗り換え", kana: "のりかえ", romaji: "norikae", meaning: "transfer, changing trains", level: 2, pack: "station", scene: ["train"], note: "Signs often write it 乗換 without kana; it is the same word." },
  { id: "kw-tsugi-no-eki", text: "次の駅", kana: "つぎのえき", romaji: "tsugi no eki", meaning: "the next station", level: 2, pack: "station", scene: ["train"] },
  { id: "kw-oriru", text: "降りる", kana: "おりる", romaji: "oriru", meaning: "to get off", level: 2, pack: "station", scene: ["train"], note: "Takes を: 電車を降りる. 'Get on' is 乗る (のる), which takes に." },
  { id: "kw-kakueki-teisha", text: "各駅停車", kana: "かくえきていしゃ", romaji: "kakueki teisha", meaning: "local train (all stops)", level: 3, pack: "station", scene: ["train"], note: "Boards shorten it to 各停 (かくてい); some lines call it 普通 (ふつう)." },
  { id: "kw-chikatetsu", text: "地下鉄", kana: "ちかてつ", romaji: "chikatetsu", meaning: "subway, underground", level: 3, pack: "station", scene: ["train", "city"] },
  { id: "kw-yuusenseki", text: "優先席", kana: "ゆうせんせき", romaji: "yūsenseki", meaning: "priority seat", level: 3, pack: "station", scene: ["train"], note: "Offer it to older people, pregnant women and anyone who needs it." },
  { id: "kw-teikiken", text: "定期券", kana: "ていきけん", romaji: "teikiken", meaning: "commuter pass", level: 3, pack: "station", scene: ["iccard"] },
  { id: "kw-shiteiseki", text: "指定席", kana: "していせき", romaji: "shiteiseki", meaning: "reserved seat", level: 3, pack: "station", scene: ["train"] },

  // ---- Shops & offices (pack: "town") ----
  { id: "kw-mise", text: "店", kana: "みせ", romaji: "mise", meaning: "shop, store", level: 1, pack: "town", scene: ["konbini", "city"], note: "In compounds it is てん: 店員 (てんいん, shop staff)." },
  { id: "kw-machi", text: "町", kana: "まち", romaji: "machi", meaning: "town", level: 1, pack: "town", scene: ["city", "house"] },
  { id: "kw-mura", text: "村", kana: "むら", romaji: "mura", meaning: "village", level: 1, pack: "town", scene: ["house", "tree"] },
  { id: "kw-ku", text: "区", kana: "く", romaji: "ku", meaning: "ward (of a city)", level: 1, pack: "town", scene: ["city"], note: "Tokyo is split into 23 wards; addresses there end in 区, not 市." },
  { id: "kw-shinbun", text: "新聞", kana: "しんぶん", romaji: "shinbun", meaning: "newspaper", level: 1, pack: "town", scene: ["book", "konbini"] },
  { id: "kw-yasui", text: "安い", kana: "やすい", romaji: "yasui", meaning: "cheap", level: 2, pack: "town", scene: ["konbini", "vending"], note: "The opposite is 高い (たかい, expensive)." },
  { id: "kw-urikire", text: "売り切れ", kana: "うりきれ", romaji: "urikire", meaning: "sold out", level: 2, pack: "town", scene: ["vending"], note: "Vending machines light up a red 売切 under any drink that has run out." },
  { id: "kw-zeikomi", text: "税込", kana: "ぜいこみ", romaji: "zeikomi", meaning: "tax included", level: 2, pack: "town", scene: ["konbini"], note: "Price tags often show this price next to a smaller one without tax." },
  { id: "kw-waribiki", text: "割引", kana: "わりびき", romaji: "waribiki", meaning: "discount", level: 2, pack: "town", scene: ["konbini"], note: "割 counts tenths: 3割引 is 30% off." },
  { id: "kw-hangaku", text: "半額", kana: "はんがく", romaji: "hangaku", meaning: "half price", level: 2, pack: "town", scene: ["konbini", "food"], note: "Look for 半額 stickers on supermarket food late in the evening." },
  { id: "kw-ten-in", text: "店員", kana: "てんいん", romaji: "ten'in", meaning: "shop assistant", level: 2, pack: "town", scene: ["konbini"] },
  { id: "kw-genkin", text: "現金", kana: "げんきん", romaji: "genkin", meaning: "cash", level: 2, pack: "town", scene: ["konbini", "vending"], note: "Some small shops post 現金のみ: cash only." },
  { id: "kw-ginkou", text: "銀行", kana: "ぎんこう", romaji: "ginkō", meaning: "bank", level: 2, pack: "town", scene: ["city"] },
  { id: "kw-juusho", text: "住所", kana: "じゅうしょ", romaji: "jūsho", meaning: "address", level: 2, pack: "town", scene: ["house", "book"] },
  { id: "kw-muryou", text: "無料", kana: "むりょう", romaji: "muryō", meaning: "free (of charge)", level: 2, pack: "town", scene: ["konbini", "city"] },
  { id: "kw-eigyouchuu", text: "営業中", kana: "えいぎょうちゅう", romaji: "eigyōchū", meaning: "open (for business)", level: 3, pack: "town", scene: ["city", "ramen"], note: "Hung on the door when a shop is open; the other side often says 準備中." },
  { id: "kw-junbichuu", text: "準備中", kana: "じゅんびちゅう", romaji: "junbichū", meaning: "getting ready (closed)", level: 3, pack: "town", scene: ["ramen", "city"] },
  { id: "kw-yuubinkyoku", text: "郵便局", kana: "ゆうびんきょく", romaji: "yūbinkyoku", meaning: "post office", level: 3, pack: "town", scene: ["city"], note: "Post offices also have a bank counter and an ATM." },
  { id: "kw-shiyakusho", text: "市役所", kana: "しやくしょ", romaji: "shiyakusho", meaning: "city hall", level: 3, pack: "town", scene: ["city", "book"] },
  { id: "kw-moushikomisho", text: "申込書", kana: "もうしこみしょ", romaji: "mōshikomisho", meaning: "application form", level: 3, pack: "town", scene: ["book"] },

  // ---- Restaurants & food (pack: "food") ----
  { id: "kw-tamago", text: "卵", kana: "たまご", romaji: "tamago", meaning: "egg", level: 1, pack: "food", scene: ["food", "konbini"], note: "Sushi menus and bento labels often write it 玉子 instead; both are たまご." },
  { id: "kw-gohan", text: "ご飯", kana: "ごはん", romaji: "gohan", meaning: "cooked rice; meal", level: 1, pack: "food", scene: ["food"], note: "Means both the rice and the whole meal; at set-meal shops ご飯大盛り is a large portion of rice." },
  { id: "kw-nabe", text: "鍋", kana: "なべ", romaji: "nabe", meaning: "pot; hotpot", level: 1, pack: "food", scene: ["food", "snow"] },
  { id: "kw-sushi", text: "寿司", kana: "すし", romaji: "sushi", meaning: "sushi", level: 2, pack: "food", scene: ["fish", "food"] },
  { id: "kw-sashimi", text: "刺身", kana: "さしみ", romaji: "sashimi", meaning: "sashimi, sliced raw fish", level: 2, pack: "food", scene: ["fish"], note: "刺身定食 on a lunch menu is the set meal: sashimi with rice, miso soup and pickles." },
  { id: "kw-yasai", text: "野菜", kana: "やさい", romaji: "yasai", meaning: "vegetables", level: 2, pack: "food", scene: ["food", "leaf"] },
  { id: "kw-okashi", text: "お菓子", kana: "おかし", romaji: "okashi", meaning: "sweets, snacks", level: 2, pack: "food", scene: ["konbini", "tea"] },
  { id: "kw-gyuudon", text: "牛丼", kana: "ぎゅうどん", romaji: "gyūdon", meaning: "beef bowl", level: 2, pack: "food", scene: ["food"], note: "Bowl chains serve it fast and cheap, often around the clock; 大盛り (おおもり) is the large size." },
  { id: "kw-kudamono", text: "果物", kana: "くだもの", romaji: "kudamono", meaning: "fruit", level: 3, pack: "food", scene: ["food", "konbini"], note: "An irregular reading for the whole word: 果 alone is never くだ." },
  { id: "kw-gyouza", text: "餃子", kana: "ぎょうざ", romaji: "gyōza", meaning: "gyoza, dumplings", level: 3, pack: "food", scene: ["ramen", "food"], note: "子 is read ざ only in this word; 焼き餃子 are pan-fried and 水餃子 boiled." },
  { id: "kw-shio", text: "塩", kana: "しお", romaji: "shio", meaning: "salt", level: 1, pack: "food", scene: ["ramen", "food"], note: "塩ラーメン (しおラーメン) is the clear, light ramen; at yakitori places you choose 塩 or たれ (sauce)." },
  { id: "kw-koori", text: "氷", kana: "こおり", romaji: "kōri", meaning: "ice", level: 1, pack: "food", scene: ["coffee", "tea"], note: "Ask for 氷なし (こおりなし) for a drink with no ice." },
  { id: "kw-ohashi", text: "お箸", kana: "おはし", romaji: "ohashi", meaning: "chopsticks", level: 1, pack: "food", scene: ["food", "ramen"] },
  { id: "kw-chuumon", text: "注文", kana: "ちゅうもん", romaji: "chūmon", meaning: "order", level: 2, pack: "food", scene: ["food", "lantern"], note: "Staff ask ご注文はお決まりですか? when they come to take your order." },
  { id: "kw-oomori", text: "大盛り", kana: "おおもり", romaji: "ōmori", meaning: "large serving", level: 2, pack: "food", scene: ["ramen", "food"], note: "Look for 大盛り無料 (free large size) on ticket machines at ramen and rice-bowl shops." },
  { id: "kw-karaage", text: "唐揚げ", kana: "からあげ", romaji: "karaage", meaning: "Japanese fried chicken", level: 2, pack: "food", scene: ["food", "lantern"] },
  { id: "kw-yakitori", text: "焼き鳥", kana: "やきとり", romaji: "yakitori", meaning: "grilled chicken skewers", level: 2, pack: "food", scene: ["lantern", "food"] },
  { id: "kw-omochikaeri", text: "お持ち帰り", kana: "おもちかえり", romaji: "omochikaeri", meaning: "takeout", level: 2, pack: "food", scene: ["food", "coffee"], note: "Counter staff ask 店内ですか、お持ち帰りですか? (eat in or take away?)." },
  { id: "kw-misoshiru", text: "味噌汁", kana: "みそしる", romaji: "misoshiru", meaning: "miso soup", level: 3, pack: "food", scene: ["food"] },
  { id: "kw-tabehoudai", text: "食べ放題", kana: "たべほうだい", romaji: "tabehōdai", meaning: "all you can eat", level: 3, pack: "food", scene: ["food", "lantern"] },

  // ---- Weather & news (pack: "weather") ----
  { id: "kw-kaminari", text: "雷", kana: "かみなり", romaji: "kaminari", meaning: "thunder, lightning", level: 1, pack: "weather", scene: ["rain"], note: "Summer afternoon storms bring it; get indoors and away from tall trees." },
  { id: "kw-nami", text: "波", kana: "なみ", romaji: "nami", meaning: "wave", level: 1, pack: "weather", scene: ["sea", "boat"] },
  { id: "kw-jishin", text: "地震", kana: "じしん", romaji: "jishin", meaning: "earthquake", level: 1, pack: "weather", scene: ["house", "city"], note: "Phones sound a loud alarm seconds before strong shaking: get under a table and hold on." },
  { id: "kw-kafun", text: "花粉", kana: "かふん", romaji: "kafun", meaning: "pollen", level: 1, pack: "weather", scene: ["sakura", "flower"], note: "Pollen forecasts run from February to April; 花粉症 (かふんしょう) is hay fever." },
  { id: "kw-kisetsu", text: "季節", kana: "きせつ", romaji: "kisetsu", meaning: "season", level: 1, pack: "weather", scene: ["sakura", "leaf"] },
  { id: "kw-kumori", text: "曇り", kana: "くもり", romaji: "kumori", meaning: "cloudy", level: 2, pack: "weather", scene: ["sun", "rain"], note: "The grey cloud on forecasts; 曇りのち雨 means cloudy, rain later." },
  { id: "kw-atsui", text: "暑い", kana: "あつい", romaji: "atsui", meaning: "hot (weather)", level: 2, pack: "weather", scene: ["sun"] },
  { id: "kw-samui", text: "寒い", kana: "さむい", romaji: "samui", meaning: "cold (weather)", level: 2, pack: "weather", scene: ["snow"] },
  { id: "kw-suzushii", text: "涼しい", kana: "すずしい", romaji: "suzushii", meaning: "cool (pleasantly)", level: 2, pack: "weather", scene: ["moon", "leaf"] },
  { id: "kw-atatakai", text: "暖かい", kana: "あたたかい", romaji: "atatakai", meaning: "warm (weather)", level: 2, pack: "weather", scene: ["sun", "sakura"] },
  { id: "kw-shitsudo", text: "湿度", kana: "しつど", romaji: "shitsudo", meaning: "humidity", level: 2, pack: "weather", scene: ["rain"] },
  { id: "kw-keihou", text: "警報", kana: "けいほう", romaji: "keihō", meaning: "warning (weather alert)", level: 2, pack: "weather", scene: ["rain", "city"], note: "A step above 注意報 (ちゅういほう, advisory); a 大雨警報 often closes schools." },
  { id: "kw-hinan", text: "避難", kana: "ひなん", romaji: "hinan", meaning: "evacuation", level: 2, pack: "weather", scene: ["house", "mountain"], note: "Signs show the nearest 避難場所 (ひなんばしょ, evacuation area); check yours before you need it." },
  { id: "kw-tsunami", text: "津波", kana: "つなみ", romaji: "tsunami", meaning: "tsunami", level: 2, pack: "weather", scene: ["sea"], note: "After a strong quake near the coast, go to high ground at once; don't wait to look at the sea." },
  { id: "kw-tenki-yohou", text: "天気予報", kana: "てんきよほう", romaji: "tenki yohō", meaning: "weather forecast", level: 3, pack: "weather", scene: ["sun", "umbrella"] },
  { id: "kw-saikou-kion", text: "最高気温", kana: "さいこうきおん", romaji: "saikō kion", meaning: "highest temperature, the high", level: 3, pack: "weather", scene: ["sun"], note: "Shown in red beside the low in blue on every forecast." },
  { id: "kw-saitei-kion", text: "最低気温", kana: "さいていきおん", romaji: "saitei kion", meaning: "lowest temperature, the low", level: 3, pack: "weather", scene: ["snow", "moon"] },
  { id: "kw-kousui-kakuritsu", text: "降水確率", kana: "こうすいかくりつ", romaji: "kōsui kakuritsu", meaning: "chance of rain", level: 3, pack: "weather", scene: ["rain", "umbrella"], note: "Given in steps of 10%; many people take an umbrella at 50% or more." },
  { id: "kw-tsuyu", text: "梅雨", kana: "つゆ", romaji: "tsuyu", meaning: "the rainy season", level: 3, pack: "weather", scene: ["rain", "umbrella"], note: "An irregular reading for June and early July; forecasters also say ばいう." },
  { id: "kw-netchuushou", text: "熱中症", kana: "ねっちゅうしょう", romaji: "netchūshō", meaning: "heatstroke", level: 3, pack: "weather", scene: ["sun", "vending"], note: "Summer alerts say drink water often and use the air-con, even at night." },

  // ---- Work & office (pack: "work") ----
  { id: "kw-shigoto", text: "仕事", kana: "しごと", romaji: "shigoto", meaning: "work, job", level: 1, pack: "work", scene: ["city", "coffee"] },
  { id: "kw-kaisha", text: "会社", kana: "かいしゃ", romaji: "kaisha", meaning: "company", level: 1, pack: "work", scene: ["city"], note: "People say うちの会社 (our company) when talking about where they work." },
  { id: "kw-maishuu", text: "毎週", kana: "まいしゅう", romaji: "maishū", meaning: "every week", level: 1, pack: "work", scene: ["book"] },
  { id: "kw-hataraku", text: "働く", kana: "はたらく", romaji: "hataraku", meaning: "to work", level: 2, pack: "work", scene: ["city"], note: "会社で働いています is 'I work at a company'; with 勤める the place takes に instead." },
  { id: "kw-zangyou", text: "残業", kana: "ざんぎょう", romaji: "zangyō", meaning: "overtime work", level: 2, pack: "work", scene: ["city", "moon"], note: "Many offices have a ノー残業デー, one day a week when everyone leaves on time." },
  { id: "kw-kyuuryou", text: "給料", kana: "きゅうりょう", romaji: "kyūryō", meaning: "pay, salary", level: 2, pack: "work", scene: ["house"] },
  { id: "kw-chikoku", text: "遅刻", kana: "ちこく", romaji: "chikoku", meaning: "being late", level: 2, pack: "work", scene: ["train"], note: "If a train delay makes you late, station staff can give you a delay certificate to show at work." },
  { id: "kw-kaishain", text: "会社員", kana: "かいしゃいん", romaji: "kaishain", meaning: "office worker, company employee", level: 3, pack: "work", scene: ["city", "train"] },
  { id: "kw-getsuyoubi", text: "月曜日", kana: "げつようび", romaji: "getsuyōbi", meaning: "Monday", level: 3, pack: "work", scene: ["moon", "book"], note: "Calendars and emails often shorten it to 月 in brackets after the date: 11月3日(月)." },
  { id: "kw-shitsurei-shimasu", text: "失礼します", kana: "しつれいします", romaji: "shitsurei shimasu", meaning: "excuse me (entering or leaving)", level: 3, pack: "work", scene: ["house", "city"], note: "Said at the office door, at the end of a call, and as お先に失礼します when leaving before others." },
  { id: "kw-kaigi", text: "会議", kana: "かいぎ", romaji: "kaigi", meaning: "meeting", level: 1, pack: "work", scene: ["book", "coffee"], note: "A door sign reading 会議中 (かいぎちゅう) means a meeting is in progress." },
  { id: "kw-aite", text: "相手", kana: "あいて", romaji: "aite", meaning: "the other person, partner", level: 1, pack: "work", scene: ["coffee"] },
  { id: "kw-shiryou", text: "資料", kana: "しりょう", romaji: "shiryō", meaning: "documents, handouts", level: 2, pack: "work", scene: ["book"], note: "Emails often say 資料を送ります: I'll send the documents." },
  { id: "kw-insatsu", text: "印刷", kana: "いんさつ", romaji: "insatsu", meaning: "printing", level: 2, pack: "work", scene: ["book", "konbini"], note: "Konbini copy machines can print from your phone; look for 印刷 on the screen." },
  { id: "kw-kakunin", text: "確認", kana: "かくにん", romaji: "kakunin", meaning: "checking, confirmation", level: 2, pack: "work", scene: ["book"], note: "ご確認ください (please check) closes countless work emails." },
  { id: "kw-shimekiri", text: "締め切り", kana: "しめきり", romaji: "shimekiri", meaning: "deadline", level: 2, pack: "work", scene: ["book"], note: "On forms it is often shortened to 締切, with no kana." },
  { id: "kw-tanomu", text: "頼む", kana: "たのむ", romaji: "tanomu", meaning: "to ask, request", level: 2, pack: "work", scene: ["coffee"] },
  { id: "kw-renrakusaki", text: "連絡先", kana: "れんらくさき", romaji: "renrakusaki", meaning: "contact details", level: 3, pack: "work", scene: ["book", "house"] },
  { id: "kw-setsumeisho", text: "説明書", kana: "せつめいしょ", romaji: "setsumeisho", meaning: "instruction manual", level: 3, pack: "work", scene: ["book", "house"] },
  { id: "kw-soudan-madoguchi", text: "相談窓口", kana: "そうだんまどぐち", romaji: "sōdan madoguchi", meaning: "help desk, advice counter", level: 3, pack: "work", scene: ["city"], note: "Many city offices have a 外国人相談窓口, a help desk for foreign residents." },

  // ---- Core essentials (pack: "core") ----
  { id: "kw-watashi", text: "私", kana: "わたし", romaji: "watashi", meaning: "I, me", level: 1, pack: "core", scene: ["heart"], note: "In conversation it is often dropped entirely; Japanese leaves out 'I' when it is obvious." },
  { id: "kw-kazoku", text: "家族", kana: "かぞく", romaji: "kazoku", meaning: "family", level: 1, pack: "core", scene: ["house", "heart"], note: "Talking about someone else's family, say ご家族 (ごかぞく)." },
  { id: "kw-eigo", text: "英語", kana: "えいご", romaji: "eigo", meaning: "English (language)", level: 1, pack: "core", scene: ["book"] },
  { id: "kw-iu", text: "言う", kana: "いう", romaji: "iu", meaning: "to say", level: 2, pack: "core", scene: ["tea", "heart"], note: "Written いう but pronounced ゆう: 何と言いましたか asks 'what did you say?'." },
  { id: "kw-shiru", text: "知る", kana: "しる", romaji: "shiru", meaning: "to know", level: 2, pack: "core", scene: ["book"], note: "'I know' is 知っています, but 'I don't know' is 知りません." },
  { id: "kw-tsukau", text: "使う", kana: "つかう", romaji: "tsukau", meaning: "to use", level: 2, pack: "core", scene: ["konbini", "iccard"] },
  { id: "kw-oshieru", text: "教える", kana: "おしえる", romaji: "oshieru", meaning: "to teach, tell", level: 2, pack: "core", scene: ["book"], note: "Also to tell: 道を教えてください, could you tell me the way?" },
  { id: "kw-benkyou", text: "勉強", kana: "べんきょう", romaji: "benkyō", meaning: "study", level: 2, pack: "core", scene: ["book"] },
  { id: "kw-jitensha", text: "自転車", kana: "じてんしゃ", romaji: "jitensha", meaning: "bicycle", level: 3, pack: "core", scene: ["city"], note: "Bikes must be left in a 駐輪場 (bicycle parking); ones left on the street get taken away." },
  { id: "kw-oniisan", text: "お兄さん", kana: "おにいさん", romaji: "onīsan", meaning: "older brother", level: 3, pack: "core", scene: ["house"] },
  { id: "kw-yoru", text: "夜", kana: "よる", romaji: "yoru", meaning: "night", level: 1, pack: "core", scene: ["moon", "star"], note: "'Tonight' is 今夜 (こんや) or simply 今日の夜 (きょうのよる)." },
  { id: "kw-iro", text: "色", kana: "いろ", romaji: "iro", meaning: "colour", level: 1, pack: "core", scene: ["flower"] },
  { id: "kw-uta", text: "歌", kana: "うた", romaji: "uta", meaning: "song", level: 1, pack: "core", scene: ["bird", "heart"] },
  { id: "kw-tsuyoi", text: "強い", kana: "つよい", romaji: "tsuyoi", meaning: "strong", level: 2, pack: "core", scene: ["rain", "umbrella"], note: "Weather warnings talk of 強い雨 and 強い風; 強 also hides in 勉強 (べんきょう), study." },
  { id: "kw-tanoshii", text: "楽しい", kana: "たのしい", romaji: "tanoshii", meaning: "fun, enjoyable", level: 2, pack: "core", scene: ["sakura", "heart"] },
  { id: "kw-kanji", text: "漢字", kana: "かんじ", romaji: "kanji", meaning: "kanji, Chinese characters", level: 2, pack: "core", scene: ["book"], note: "There are about 2,000 kanji for everyday use; children learn about 1,000 of them in primary school." },
  { id: "kw-asagohan", text: "朝ご飯", kana: "あさごはん", romaji: "asa gohan", meaning: "breakfast", level: 2, pack: "core", scene: ["food", "sun"], note: "Hotels write 朝食 (ちょうしょく); 朝食付き means breakfast is included." },
  { id: "kw-ryokou", text: "旅行", kana: "りょこう", romaji: "ryokō", meaning: "trip, travel", level: 2, pack: "core", scene: ["train", "fuji"] },
  { id: "kw-heya", text: "部屋", kana: "へや", romaji: "heya", meaning: "room", level: 3, pack: "core", scene: ["house"], note: "Irregular: neither kanji has its usual reading here." },
  { id: "kw-toshokan", text: "図書館", kana: "としょかん", romaji: "toshokan", meaning: "library", level: 3, pack: "core", scene: ["book", "city"], note: "図 is read と here, not ず. Public libraries are free to join for local residents." },

  // ---- Reading the news (pack: "news") ----
  { id: "kw-konkai", text: "今回", kana: "こんかい", romaji: "konkai", meaning: "this time", level: 1, pack: "news", scene: ["book"], note: "News uses 今回 for 'this' event, election or quake; 前回 (ぜんかい) is the last one." },
  { id: "kw-seiji", text: "政治", kana: "せいじ", romaji: "seiji", meaning: "politics", level: 2, pack: "news", scene: ["city", "book"] },
  { id: "kw-senkyo", text: "選挙", kana: "せんきょ", romaji: "senkyo", meaning: "election", level: 2, pack: "news", scene: ["city"], note: "Before polling day a card arrives by post naming your 投票所 (とうひょうじょ), usually a nearby school." },
  { id: "kw-shushou", text: "首相", kana: "しゅしょう", romaji: "shushō", meaning: "prime minister", level: 2, pack: "news", scene: ["tokyotower", "city"] },
  { id: "kw-daitouryou", text: "大統領", kana: "だいとうりょう", romaji: "daitōryō", meaning: "president (of a country)", level: 3, pack: "news", scene: ["city", "book"], note: "Only for heads of state; a company president is 社長 (しゃちょう)." },
  { id: "kw-hyakuten", text: "百点", kana: "ひゃくてん", romaji: "hyakuten", meaning: "full marks, 100 points", level: 1, pack: "news", scene: ["book"], note: "Japanese tests are marked out of 100; 百点 is a perfect score." },
  { id: "kw-jiken", text: "事件", kana: "じけん", romaji: "jiken", meaning: "incident, criminal case", level: 2, pack: "news", scene: ["city"], note: "Crime headlines name the type first: 殺人事件 (さつじんじけん) is a murder case." },
  { id: "kw-yakyu", text: "野球", kana: "やきゅう", romaji: "yakyū", meaning: "baseball", level: 2, pack: "news", scene: ["sun"] },
  { id: "kw-yusho", text: "優勝", kana: "ゆうしょう", romaji: "yūshō", meaning: "winning the championship", level: 2, pack: "news", scene: ["sun"], note: "Used for winning a whole tournament or league, not a single game." },
  { id: "kw-kotsu-jiko", text: "交通事故", kana: "こうつうじこ", romaji: "kōtsū jiko", meaning: "traffic accident", level: 3, pack: "news", scene: ["city"] },
  { id: "kw-kabu-shares", text: "株", kana: "かぶ", romaji: "kabu", meaning: "shares, stock", level: 1, pack: "news", scene: ["book", "city"], note: "Business news ends with 株価 (かぶか), share prices, and the 日経平均 index." },
  { id: "kw-keizai", text: "経済", kana: "けいざい", romaji: "keizai", meaning: "economy", level: 2, pack: "news", scene: ["book"] },
  { id: "kw-kakaku-price", text: "価格", kana: "かかく", romaji: "kakaku", meaning: "price", level: 2, pack: "news", scene: ["konbini"] },
  { id: "kw-kakariin", text: "係員", kana: "かかりいん", romaji: "kakariin", meaning: "attendant, staff on duty", level: 3, pack: "news", scene: ["city"], note: "Signs at stations and events say 係員にお申し出ください: please speak to a staff member." },
  { id: "kw-hyakkin", text: "百均", kana: "ひゃっきん", romaji: "hyakkin", meaning: "hundred-yen shop", level: 3, pack: "news", scene: ["konbini", "city"], note: "Short for 百円均一 (ひゃくえんきんいつ); the sound change makes ひゃっきん." },
  { id: "kw-minato", text: "港", kana: "みなと", romaji: "minato", meaning: "harbour, port", level: 1, pack: "news", scene: ["sea"], note: "In compounds it is こう: 空港 (くうこう) is airport." },
  { id: "kw-oosaka", text: "大阪", kana: "おおさか", romaji: "Ōsaka", meaning: "Osaka", level: 2, pack: "news", scene: ["city"], note: "Headlines shorten it to 阪, as in 京阪神 (けいはんしん), the Kyoto-Osaka-Kobe area." },
  { id: "kw-jouhou", text: "情報", kana: "じょうほう", romaji: "jōhō", meaning: "information", level: 2, pack: "news", scene: ["book"], note: "On forms, 個人情報 (こじんじょうほう) is your personal data." },
  { id: "kw-kansou", text: "感想", kana: "かんそう", romaji: "kansō", meaning: "impressions, thoughts", level: 2, pack: "news", scene: ["book"] },
  { id: "kw-yoron-chousa", text: "世論調査", kana: "よろんちょうさ", romaji: "yoron chōsa", meaning: "opinion poll", level: 3, pack: "news", scene: ["city", "book"] },
  { id: "kw-kouban", text: "交番", kana: "こうばん", romaji: "kōban", meaning: "police box", level: 1, pack: "news", scene: ["city"], note: "Local news often ends with a lost wallet handed in at the nearest 交番." },
  { id: "kw-kekka", text: "結果", kana: "けっか", romaji: "kekka", meaning: "result", level: 2, pack: "news", scene: ["book"], note: "Election night is all 選挙結果 (せんきょけっか, election results); けつ shortens to けっ here." },
  { id: "kw-henka", text: "変化", kana: "へんか", romaji: "henka", meaning: "change", level: 2, pack: "news", scene: ["book", "city"] },
  { id: "kw-shuzai", text: "取材", kana: "しゅざい", romaji: "shuzai", meaning: "news reporting, interview", level: 2, pack: "news", scene: ["book"], note: "取 is read しゅ here, not とる; 取材中 means a reporter is on the story." },
  { id: "kw-zenkoku", text: "全国", kana: "ぜんこく", romaji: "zenkoku", meaning: "nationwide, the whole country", level: 2, pack: "news", scene: ["city"], note: "Weather reports say 全国各地 (ぜんこくかくち): all over the country." },
  { id: "kw-juuyou", text: "重要", kana: "じゅうよう", romaji: "jūyō", meaning: "important", level: 2, pack: "news", scene: ["book"], note: "重要なお知らせ (important notice) heads letters from city hall and the bank: read those ones." },
  { id: "kw-eikyou", text: "影響", kana: "えいきょう", romaji: "eikyō", meaning: "influence, effect", level: 2, pack: "news", scene: ["city"], note: "Train announcements: 台風の影響で (たいふうのえいきょうで), due to the typhoon." },
  { id: "kw-atama", text: "頭", kana: "あたま", romaji: "atama", meaning: "head", level: 1, pack: "news", scene: ["heart"] },
  { id: "kw-shinkansen", text: "新幹線", kana: "しんかんせん", romaji: "shinkansen", meaning: "bullet train", level: 3, pack: "news", scene: ["city"] }
];
