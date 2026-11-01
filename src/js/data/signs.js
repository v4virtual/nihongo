/* Real signs to read with kanji, starting with the clinic & hospital pack.
 * Each line is a list of tokens: a plain string (kana, punctuation) or
 * [text, reading, meaning] for a word you can tap. The reading is hiragana and
 * sits over the kanji as furigana; it is "" for words already in kana.
 * `en` holds one translation per line. Each line is a review card in Today
 * ("what does this say?"); `cards` groups lines that only make sense
 * together, by line index. */
window.NH = window.NH || {};

NH.SIGNS = [
  {
    id: "parking-ticket", pack: "clinic", look: "notice", title: "Car park notice", level: 3,
    where: "On the wall by the reception desk of a dental association building in Kyoto",
    lines: [
      { head: true, t: [["駐車場", "ちゅうしゃじょう", "car park"], "を", ["ご利用", "ごりよう", "using (polite)"], "の", ["方", "かた", "people (polite)"], "へ"] },
      { t: ["●", ["会計時", "かいけいじ", "when paying"], "に", ["必ず", "かならず", "be sure to"], ["駐車券", "ちゅうしゃけん", "parking ticket"], "を", ["提示", "ていじ", "showing, presenting"], ["してください", "", "please do"], "。"] },
      { t: ["●", ["駐車券", "ちゅうしゃけん", "parking ticket"], "の", ["処理", "しょり", "processing"], "を", ["受けずに", "うけずに", "without receiving"], ["出庫", "しゅっこ", "taking the car out"], ["しようとすると", "", "if you try to"], ["30分", "さんじゅっぷん", "30 minutes"], ["400円", "よんひゃくえん", "400 yen"], "の", ["料金", "りょうきん", "fee, charge"], "が", ["請求されます", "せいきゅうされます", "will be charged"], "。"] },
      { head: true, warn: true, t: [["注意", "ちゅうい", "caution"]] },
      { t: [["京都府", "きょうとふ", "Kyoto Prefecture"], ["歯科医師会", "しかいしかい", "dental association"], "に", ["駐車されている", "ちゅうしゃされている", "are parked"], ["方", "かた", "people (polite)"], "は、", ["当", "とう", "this"], ["医師会館", "いしかいかん", "medical association building"], "の", ["駐車場", "ちゅうしゃじょう", "car park"], "に", ["移動して下さい", "いどうしてください", "please move"], "。"] },
    ],
    en: [
      "For people using the car park",
      "When you pay, be sure to show your parking ticket.",
      "If you try to drive out without having your ticket processed, you'll be charged 400 yen per 30 minutes.",
      "Caution",
      "If you've parked at the Kyoto Prefectural Dental Association, please move your car to this building's car park.",
    ],
    note: "Hospital and clinic car parks are often free or cheap for patients, but only once the 会計 desk has processed (処理) your ticket. 下さい and ください are the same word; signs use both.",
  },
  {
    id: "questionnaire-desk", pack: "clinic", look: "notice", title: "A request to parents", level: 3, cards: [[0], [1], [2, 3, 4]],
    where: "Taped to the stand where you fill in the first-visit questionnaire",
    lines: [
      { head: true, t: [["保護者", "ほごしゃ", "parents, guardians"], "の", ["みなさま", "", "everyone (polite)"], "へ", ["お願い", "おねがい", "a request"]] },
      { t: [["問診台", "もんしんだい", "questionnaire stand"], "は", ["倒れる", "たおれる", "falling over"], ["危険性", "きけんせい", "risk"], "が", ["あります", "", "there is"]] },
      { t: [["台", "だい", "stand"], "の", ["上", "うえ", "top"], "に", ["お子様", "おこさま", "children (polite)"], "を", ["乗せたり", "のせたり", "putting on (and so on)"]] },
      { t: [["台", "だい", "stand"], "に", ["ぶら下がって", "ぶらさがって", "hanging from"], ["遊ばせたり", "あそばせたり", "letting play (and so on)"], ["等", "など", "and so on"], "は"] },
      { t: [["決して", "けっして", "never (with a negative)"], ["しないよう", "", "so as not to do"], ["注意して下さい", "ちゅういしてください", "please take care"]] },
    ],
    en: [
      "A request to parents and guardians",
      "The questionnaire stand could tip over.",
      "Putting children on top of the stand,",
      "letting them hang from it or play on it, and so on:",
      "please take care never to do this.",
    ],
    note: "問診 (もんしん) is the questions before you see the doctor. On a first visit (初診) you fill in a 問診票 (もんしんひょう) about your symptoms, allergies and medicines.",
  },
  {
    id: "reception", pack: "clinic", look: "board", title: "Reception", level: 3,
    where: "Above the front desk as you walk in",
    lines: [
      { head: true, t: [["受付", "うけつけ", "reception"]] },
      { t: [["初診", "しょしん", "first visit"], "の", ["方", "かた", "people (polite)"], "は", ["保険証", "ほけんしょう", "health insurance card"], "を", ["お出しください", "おだしください", "please hand over"], "。"] },
      { t: [["再診", "さいしん", "follow-up visit"], "の", ["方", "かた", "people (polite)"], "は", ["診察券", "しんさつけん", "patient card"], "を", ["お出しください", "おだしください", "please hand over"], "。"] },
      { t: [["お名前", "おなまえ", "your name"], "を", ["およびする", "", "we call"], "まで、", ["待合室", "まちあいしつ", "waiting room"], "で", ["お待ちください", "おまちください", "please wait"], "。"] },
    ],
    en: [
      "Reception",
      "First visit: please hand over your health insurance card.",
      "Follow-up visit: please hand over your patient card.",
      "Please wait in the waiting room until we call your name.",
    ],
    note: "お + a verb stem + ください is the polite 'please': お出しください, お待ちください. Most clinics want the insurance card again at the start of each month.",
  },
  {
    id: "floor-guide", pack: "clinic", look: "board", title: "Floor guide", level: 3,
    where: "The directory board by the lifts",
    lines: [
      { head: true, t: [["外来", "がいらい", "outpatients"]] },
      { t: [["内科", "ないか", "internal medicine"], "　", ["1階", "いっかい", "ground floor"]] },
      { t: [["外科", "げか", "surgery"], "・", ["小児科", "しょうにか", "paediatrics"], "　", ["2階", "にかい", "second floor"]] },
      { t: [["眼科", "がんか", "eye clinic"], "・", ["耳鼻科", "じびか", "ear, nose and throat"], "　", ["3階", "さんがい", "third floor"]] },
      { t: [["皮膚科", "ひふか", "dermatology"], "・", ["歯科", "しか", "dentistry"], "　", ["4階", "よんかい", "fourth floor"]] },
    ],
    en: [
      "Outpatients",
      "Internal medicine: ground floor",
      "Surgery and paediatrics: second floor",
      "Eye clinic and ENT: third floor",
      "Dermatology and dentistry: fourth floor",
    ],
    note: "Floors count from the ground, so 1階 is the ground floor. 3階 is さんがい, with a voiced が; 1階 shortens to いっかい.",
  },
  {
    id: "pharmacy", pack: "clinic", look: "board", title: "Pharmacy window", level: 3,
    where: "The counter of the pharmacy next to the clinic",
    lines: [
      { head: true, t: [["薬局", "やっきょく", "pharmacy"]] },
      { t: [["処方せん", "しょほうせん", "prescription"], ["受付", "うけつけ", "reception (counter)"]] },
      { t: [["お薬", "おくすり", "your medicine"], "は", ["番号", "ばんごう", "number"], "で", ["およびします", "", "we will call"], "。"] },
    ],
    en: [
      "Pharmacy",
      "Prescriptions handed in here",
      "We'll call you by number when your medicine is ready.",
    ],
    note: "The clinic gives you a prescription (処方せん); you take it to any pharmacy, often the one next door. Keep the number ticket they hand you.",
  },
  {
    id: "wall-signs", pack: "clinic", look: "wall", title: "Signs on the walls", level: 3,
    where: "Doors, corridors and the main entrance",
    lines: [
      { t: [["非常口", "ひじょうぐち", "emergency exit"]] },
      { t: [["化粧室", "けしょうしつ", "restroom"]] },
      { t: [["院内禁煙", "いんないきんえん", "no smoking in the hospital"]] },
      { t: [["救急入口", "きゅうきゅういりぐち", "emergency entrance"]] },
      { t: [["面会受付", "めんかいうけつけ", "visitor reception"]] },
    ],
    en: [
      "Emergency exit",
      "Restroom",
      "No smoking anywhere in the hospital",
      "Emergency entrance",
      "Visitor reception",
    ],
    note: "院内 (いんない) means inside the hospital. 救急 (きゅうきゅう) is emergency care; the ambulance is 救急車.",
  },
  {
    id: "visiting-hours", pack: "clinic", look: "notice", title: "Visiting hours", level: 3,
    where: "By the ward entrance and the lifts",
    lines: [
      { head: true, t: [["面会時間", "めんかいじかん", "visiting hours"]] },
      { t: [["午後", "ごご", "p.m."], ["3時", "さんじ", "3 o'clock"], "〜", ["8時", "はちじ", "8 o'clock"]] },
      { t: [["面会", "めんかい", "visiting"], "の", ["方", "かた", "people (polite)"], "は", ["受付", "うけつけ", "reception"], "で", ["お名前", "おなまえ", "your name"], "を", ["書いてください", "かいてください", "please write"], "。"] },
    ],
    en: [
      "Visiting hours",
      "3 p.m. to 8 p.m.",
      "Visitors, please write your name at reception.",
    ],
    note: "午後 (p.m.) goes before the time and covers both times here. 〜 means 'to' between two times.",
  },
  {
    id: "fever", pack: "clinic", look: "warning", title: "If you have a fever", level: 3, cards: [[0, 1]],
    where: "On the clinic's front door",
    lines: [
      { t: [["熱", "ねつ", "fever"], "が", ["ある", "", "have"], ["方", "かた", "people (polite)"], "は、"] },
      { t: [["受付", "うけつけ", "reception"], "に", ["おしらせください", "", "please let us know"], "。"] },
    ],
    en: [
      "If you have a fever,",
      "please tell reception.",
    ],
    note: "Many clinics see feverish patients in a separate room or at set times, so tell reception (or phone first) before you sit down.",
  },
];
