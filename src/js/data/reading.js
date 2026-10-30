/* Things to read: signs, menus and short sentences you'll meet in Japan.
   `kana` is hiragana and katakana (items with katakana show on the katakana
   line); sentences put a space between words, the way
   children's books do (分かち書き). `look` picks how the sign is drawn.
   level: 1 = basic kana only, 2 = dakuten or ー, 3 = yōon or any small kana. */
window.NH = window.NH || {};

window.NH.READING = [
  // ---- Stations: JR-style name boards with the stops either side ----
  { id: "ueno", kind: "station", look: "station", kana: "うえの", kanji: "上野", romaji: "ueno", meaning: "Ueno (station)", level: 1, prev: "おかちまち", next: "うぐいすだに", line: "#7ac143", where: "Yamanote Line platform", note: "Ueno is the gateway to northern Japan: Shinkansen to Tōhoku leave from here." },
  { id: "kamakura", kind: "station", look: "station", kana: "かまくら", kanji: "鎌倉", romaji: "kamakura", meaning: "Kamakura (station)", level: 1, prev: "きたかまくら", next: "ずし", line: "#0067c0", lineInk: "#fff", where: "Yokosuka Line platform", note: "The old samurai capital by the sea, an hour from Tokyo, with the Great Buddha." },
  { id: "shibuya", kind: "station", look: "station", kana: "しぶや", kanji: "渋谷", romaji: "shibuya", meaning: "Shibuya (station)", level: 2, prev: "えびす", next: "はらじゅく", line: "#7ac143", where: "Yamanote Line platform", note: "Older JR boards print the hiragana biggest; newer ones put the kanji 渋谷 first. The hiragana is always there." },
  { id: "akihabara", kind: "station", look: "station", kana: "あきはばら", kanji: "秋葉原", romaji: "akihabara", meaning: "Akihabara (station)", level: 2, prev: "かんだ", next: "おかちまち", line: "#7ac143", where: "Yamanote Line platform", note: "Everyone shortens it to あきば (Akiba)." },
  { id: "ikebukuro", kind: "station", look: "station", kana: "いけぶくろ", kanji: "池袋", romaji: "ikebukuro", meaning: "Ikebukuro (station)", level: 2, prev: "おおつか", next: "めじろ", line: "#7ac143", where: "Yamanote Line platform", note: "ぶくろ is ふくろ (bag) with dakuten: sounds often turn voiced in the middle of a word." },
  { id: "shinagawa", kind: "station", look: "station", kana: "しながわ", kanji: "品川", romaji: "shinagawa", meaning: "Shinagawa (station)", level: 2, prev: "たまち", next: "おおさき", line: "#7ac143", where: "Yamanote Line platform", note: "がわ is かわ (river) with dakuten, as in many place names." },
  { id: "shinjuku", kind: "station", look: "station", kana: "しんじゅく", kanji: "新宿", romaji: "shinjuku", meaning: "Shinjuku (station)", level: 3, prev: "よよぎ", next: "しんおおくぼ", line: "#7ac143", where: "Yamanote Line platform", note: "じゅ is one beat: shin-ju-ku, not shin-ji-yu-ku. The busiest station in the world." },

  // ---- Signs around town ----
  { id: "yu", kind: "sign", look: "noren", kana: "ゆ", kanji: "湯", romaji: "yu", meaning: "hot water (bathhouse)", level: 1, where: "Curtain over the door of a public bath (せんとう) or hot spring", note: "A ゆ curtain means the bath is open. Inside, men's and women's sides are often marked 男 and 女." },
  { id: "tomare", kind: "sign", look: "road", kana: "とまれ", kanji: "止まれ", romaji: "tomare", meaning: "stop", level: 1, where: "Painted on the road before a crossing", note: "The official marking is 止まれ; side streets and school routes often spell it all in hiragana. Painted tall and thin so drivers can read it at an angle." },
  { id: "oshirase", kind: "sign", look: "notice", kana: "おしらせ", kanji: "お知らせ", romaji: "oshirase", meaning: "notice, announcement", level: 1, where: "Top of a notice on a shop door or apartment board", note: "Read the line below it for what's changed: holidays, closures, works." },
  { id: "abunai", kind: "sign", look: "warning", kana: "あぶない", kanji: "危ない", romaji: "abunai", meaning: "danger!", level: 2, where: "Yellow signs by rivers, building sites and level crossings", note: "Written in hiragana so that young children can read it too." },
  { id: "noriba", kind: "sign", look: "notice", kana: "のりば", kanji: "乗り場", romaji: "noriba", meaning: "boarding area (taxi, bus)", level: 2, where: "Taxi ranks and bus stops: タクシーのりば, バスのりば", note: "のり comes from のる (to ride); ば (場) means place." },
  { id: "moerugomi", kind: "sign", look: "notice", kana: "もえる ごみ", kanji: "燃えるごみ", romaji: "moeru gomi", meaning: "burnable rubbish", level: 2, where: "Bins and rubbish collection points", note: "Each area collects burnable rubbish on fixed days; check your ward's calendar." },
  { id: "irasshaimase", kind: "sign", look: "notice", kana: "いらっしゃいませ", romaji: "irasshaimase", meaning: "welcome (to the shop)", level: 3, where: "Door mats and shop entrances; you'll also hear it shouted as you walk in", note: "Small っ is a short pause: i-ras-shai-ma-se. No need to reply; a nod is fine." },

  // ---- Food: menus, stalls and labels ----
  { id: "ika", kind: "menu", look: "tag", kana: "いか", kanji: "烏賊", romaji: "ika", meaning: "squid", level: 1, where: "Sushi menu", note: "Traditional sushi bars write fish names in kanji; conveyor-belt menus usually use hiragana." },
  { id: "tako", kind: "menu", look: "tag", kana: "たこ", kanji: "蛸", romaji: "tako", meaning: "octopus", level: 1, where: "Sushi menu, and たこやき stalls", note: "たこやき are octopus balls; やき means grilled." },
  { id: "uni", kind: "menu", look: "tag", kana: "うに", kanji: "雲丹", romaji: "uni", meaning: "sea urchin", level: 1, where: "Sushi menu", note: "Often one of the most expensive plates." },
  { id: "taiyaki", kind: "menu", look: "shop", kana: "たいやき", kanji: "鯛焼き", romaji: "taiyaki", meaning: "fish-shaped cake", level: 1, where: "Street stalls", note: "Shaped like a たい (sea bream), usually filled with sweet red bean paste." },
  { id: "maguro", kind: "menu", look: "tag", kana: "まぐろ", kanji: "鮪", romaji: "maguro", meaning: "tuna", level: 2, where: "Sushi menu", note: "Fattier cuts are ちゅうとろ and おおとろ." },
  { id: "ebi", kind: "menu", look: "tag", kana: "えび", kanji: "海老", romaji: "ebi", meaning: "shrimp, prawn", level: 2, where: "Sushi menu, tempura shops" },
  { id: "tamago", kind: "menu", look: "tag", kana: "たまご", kanji: "玉子", romaji: "tamago", meaning: "egg (omelette sushi)", level: 2, where: "Sushi menu", note: "On sushi menus it's sweet rolled omelette; in shops 卵 (also たまご) is a raw egg." },
  { id: "udon", kind: "menu", look: "shop", kana: "うどん", romaji: "udon", meaning: "udon noodles", level: 2, where: "Noodle shop sign or curtain" },
  { id: "soba", kind: "menu", look: "shop", kana: "そば", kanji: "蕎麦", romaji: "soba", meaning: "buckwheat noodles", level: 2, where: "Noodle shop sign or curtain", note: "Old shops sometimes write そば in old cursive kana (変体仮名) that looks nothing like this. Station platforms often have a stand-up soba counter." },
  { id: "dango", kind: "menu", look: "shop", kana: "だんご", kanji: "団子", romaji: "dango", meaning: "rice dumplings on a stick", level: 2, where: "Stalls at shrines and festivals" },
  { id: "onigiri", kind: "menu", look: "label", kana: "おにぎり", romaji: "onigiri", meaning: "rice ball", level: 2, where: "Convenience store shelf", note: "The label below names the filling: しゃけ (salmon), うめ (pickled plum), こんぶ (kelp)." },
  { id: "oden", kind: "menu", look: "label", kana: "おでん", romaji: "oden", meaning: "oden (simmered hotpot)", level: 2, where: "Convenience store counter in autumn and winter", note: "Pick pieces from the pot by the till: だいこん (radish), たまご (egg), ちくわ." },

  // ---- Sentences, with spaces between words ----
  { id: "neko-ga-imasu", kind: "sentence", look: "book", kana: "ねこが います。", romaji: "neko ga imasu.", meaning: "There's a cat.", level: 2, note: "が marks who or what: ねこが (a cat) います (is there)." },
  { id: "eki-wa-doko", kind: "sentence", look: "book", kana: "えきは どこですか。", romaji: "eki wa doko desu ka?", meaning: "Where is the station?", level: 2, note: "は as a particle is read wa, not ha. か at the end makes it a question; Japanese uses 。 rather than ?." },
  { id: "kore-o-kudasai", kind: "sentence", look: "book", kana: "これを ください。", romaji: "kore o kudasai.", meaning: "This one, please.", level: 2, note: "を is read o. Point at what you want and say it: it works in any shop." },
  { id: "omizu-o-kudasai", kind: "sentence", look: "book", kana: "おみずを ください。", romaji: "omizu o kudasai.", meaning: "Water, please.", level: 2 },
  { id: "sakura-ga-kirei", kind: "sentence", look: "book", kana: "さくらが きれいですね。", romaji: "sakura ga kirei desu ne.", meaning: "The cherry blossoms are beautiful, aren't they?", level: 2, note: "ね at the end invites the other person to agree." },
  { id: "nihon-ni-sunde", kind: "sentence", look: "book", kana: "わたしは にほんに すんで います。", romaji: "watashi wa nihon ni sunde imasu.", meaning: "I live in Japan.", level: 2, note: "は is read wa again. に marks the place where you live." },
  { id: "ame-ga-futte", kind: "sentence", look: "book", kana: "あめが ふって います。", romaji: "ame ga futte imasu.", meaning: "It's raining.", level: 3, note: "Small っ doubles the t: fut-te." },
  { id: "mamonaku-densha", kind: "sentence", look: "book", kana: "まもなく でんしゃが まいります。", romaji: "mamonaku densha ga mairimasu.", meaning: "The train will arrive shortly.", level: 3, where: "Platform displays and announcements", note: "まいります is the polite form of きます (comes). Stand behind the yellow line!" },

  // ---- Vending machines: the labels under each drink ----
  { id: "tsumetai", kind: "sign", look: "vend", tone: "cold", kana: "つめた〜い", kanji: "冷たい", romaji: "tsumetai", meaning: "cold (drinks)", level: 1, where: "Blue label under a drink in a vending machine", note: "The 〜 stretches the sound, like a friendly 'co-o-old'. In winter some rows switch to hot." },
  { id: "attakai", kind: "sign", look: "vend", tone: "hot", kana: "あったか〜い", kanji: "温かい", romaji: "attakai", meaning: "hot (drinks)", level: 3, where: "Red label under a drink in a vending machine", note: "A casual form of あたたかい (warm). Hot cans of tea, coffee and soup appear from autumn." },

  // ---- Katakana around town ----
  { id: "toire", kind: "sign", look: "notice", kana: "トイレ", romaji: "toire", meaning: "toilets", level: 1, where: "Station, shop and park signs, usually with pictograms", note: "Polite signs also say お手洗い (otearai). Many toilets have a panel of buttons: 止 (stop) ends the bidet." },
  { id: "reji", kind: "sign", look: "label", kana: "レジ", romaji: "reji", meaning: "checkout, till", level: 2, where: "Hanging over the tills in shops and supermarkets", note: "From 'register'. The staff will ask if you need a bag: ふくろ いりますか?" },
  { id: "seru", kind: "sign", look: "sale", kana: "セール", romaji: "sēru", meaning: "sale", level: 2, where: "Shop windows and posters", note: "Often next to a percentage: 30% OFF. Big seasonal sales are in January and July." },
  { id: "erebeta", kind: "sign", look: "notice", kana: "エレベーター", romaji: "erebētā", meaning: "lift, elevator", level: 2, where: "Station and department store signs", note: "Escalators are エスカレーター. In Tokyo people stand on the left; in Osaka, on the right." },
  { id: "takushi-noriba", kind: "sign", look: "notice", kana: "タクシー のりば", kanji: "タクシー乗り場", romaji: "takushī noriba", meaning: "taxi rank", level: 2, where: "Outside stations", note: "Katakana and hiragana side by side: タクシー is the loanword, のりば the Japanese word for a boarding place." },
  { id: "koinrokka", kind: "sign", look: "notice", kana: "コインロッカー", romaji: "koin rokkā", meaning: "coin lockers", level: 3, where: "Stations, for leaving luggage", note: "Many now take a Suica or similar card as well as coins." },

  // ---- Katakana food ----
  { id: "ramen-shop", kind: "menu", look: "shop", kana: "ラーメン", romaji: "rāmen", meaning: "ramen (shop sign)", level: 2, where: "Shop signs, curtains and red lanterns", note: "If there's a ticket machine by the door, pay there first and hand the ticket over at the counter." },
  { id: "kohi-label", kind: "menu", look: "label", kana: "コーヒー", romaji: "kōhī", meaning: "coffee (label)", level: 2, where: "Cafe menus, cans in vending machines", note: "ホット is hot and アイス is iced. ブラック means black, no sugar." },
  { id: "karerais", kind: "menu", look: "tag", kana: "カレーライス", romaji: "karē raisu", meaning: "curry and rice", level: 2, where: "Cafeteria and family restaurant menus" },
  { id: "menyu-board", kind: "menu", look: "book", kana: "メニュー", romaji: "menyū", meaning: "the menu", level: 3, where: "Restaurant doors and tables", note: "Ask メニューを ください for the menu. Many places have an English one too." },

  // ---- Sentences with katakana ----
  { id: "kohi-o-kudasai", kind: "sentence", look: "book", kana: "コーヒーを ください。", romaji: "kōhī o kudasai.", meaning: "A coffee, please.", level: 2, note: "Katakana for the loanword, hiragana for the grammar: that's how most Japanese text mixes them." },
  { id: "toire-wa-doko", kind: "sentence", look: "book", kana: "トイレは どこですか。", romaji: "toire wa doko desu ka?", meaning: "Where is the toilet?", level: 2, note: "Swap in any place: えきは どこですか, コンビニは どこですか." },
  { id: "ramen-ga-suki", kind: "sentence", look: "book", kana: "ラーメンが すきです。", romaji: "rāmen ga suki desu.", meaning: "I like ramen.", level: 2, note: "すき (like) takes が: what you like comes before it." }
];
