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
  // ---- Stations & trains ----
  {
    id: "platform", pack: "station", look: "board", title: "Platform board", level: 3,
    where: "Hanging over the platform",
    lines: [
      { head: true, t: [["2番線", "にばんせん", "platform 2"]] },
      { t: [["快速", "かいそく", "rapid"], ["東京", "とうきょう", "Tokyo"], ["行", "ゆき", "bound for"]] },
      { t: [["各駅停車", "かくえきていしゃ", "local (stops at every station)"], ["品川", "しながわ", "Shinagawa"], ["行", "ゆき", "bound for"]] },
      { t: [["次", "つぎ", "next"], "の", ["発車", "はっしゃ", "departure"], "　10:05"] },
    ],
    en: [
      "Platform 2",
      "Rapid service for Tokyo",
      "Local train for Shinagawa, stopping at every station",
      "Next departure 10:05",
    ],
    note: "行 on a destination is read ゆき (or いき): 東京行 is 'for Tokyo'. A 快速 skips small stations; a 各駅停車 (各停) stops at all of them.",
  },
  {
    id: "next-station", pack: "station", look: "board", title: "On the train", level: 3,
    where: "The screen above the train doors",
    lines: [
      { head: true, t: [["次", "つぎ", "next"], "は", ["品川", "しながわ", "Shinagawa"]] },
      { t: [["出口", "でぐち", "exit"], "は", ["右側", "みぎがわ", "right side"], ["です", "", "is"]] },
      { t: [["右側", "みぎがわ", "right side"], "の", ["ドア", "", "door"], "が", ["開きます", "ひらきます", "will open"]] },
    ],
    en: [
      "Next: Shinagawa",
      "The exit is on the right.",
      "The doors on the right will open.",
    ],
    note: "The same lines come over the speaker. 側 is がわ after 右 and 左: 右側 (みぎがわ), 左側 (ひだりがわ).",
  },
  {
    id: "ticket-gates", pack: "station", look: "board", title: "Ticket gates", level: 3,
    where: "Above the row of ticket gates",
    lines: [
      { head: true, t: [["改札口", "かいさつぐち", "ticket gates"]] },
      { t: [["切符", "きっぷ", "tickets"], "・", ["ICカード", "", "IC card"], "・", ["定期券", "ていきけん", "commuter pass"]] },
      { t: [["精算", "せいさん", "fare adjustment"], "は", ["左", "ひだり", "left"], "の", ["窓口", "まどぐち", "window, counter"], "へ"] },
    ],
    en: [
      "Ticket gates",
      "Tickets, IC cards and commuter passes",
      "For fare adjustment, go to the window on the left.",
    ],
    note: "If you've gone past the stop you paid for, pay the difference (精算) at the machine or window before the gates.",
  },
  {
    id: "transfer", pack: "station", look: "notice", title: "Changing trains", level: 3,
    where: "At the bottom of the platform stairs",
    lines: [
      { head: true, t: [["乗り換え", "のりかえ", "changing trains"]] },
      { t: [["地下鉄", "ちかてつ", "subway"], "は", ["階段", "かいだん", "stairs"], "を", ["下りて", "おりて", "going down"], ["右", "みぎ", "right"], "へ"] },
      { t: [["東口", "ひがしぐち", "east exit"], "・", ["西口", "にしぐち", "west exit"], "は", ["こちら", "", "this way"]] },
    ],
    en: [
      "Changing trains",
      "For the subway, go down the stairs and turn right.",
      "East and west exits this way.",
    ],
    note: "Big stations name their exits by direction (東口, 西口, 南口, 北口); meeting someone, always say which one.",
  },
  {
    id: "priority-seat", pack: "station", look: "notice", title: "Priority seat", level: 3,
    where: "On the window above the seats at the end of each car",
    lines: [
      { head: true, t: [["優先席", "ゆうせんせき", "priority seat"]] },
      { t: [["席", "せき", "seat"], "を", ["おゆずりください", "", "please give up (your seat)"], "。"] },
    ],
    en: [
      "Priority seat",
      "Please offer your seat to those who need it.",
    ],
    note: "For older people, pregnant women, people with injuries or disabilities, and small children. Phones on silent here.",
  },
  {
    id: "doors-closing", pack: "station", look: "warning", title: "Doors closing", level: 3, cards: [[0, 1]],
    where: "Sticker on the train door, and the announcement before it shuts",
    lines: [
      { t: [["ドア", "", "door"], "が", ["閉まります", "しまります", "is closing"]] },
      { t: [["ご注意ください", "ごちゅういください", "please be careful"]] },
    ],
    en: [
      "The doors are closing.",
      "Please be careful.",
    ],
    note: "Don't run for it: there's another train in a few minutes on most city lines.",
  },
  {
    id: "last-train", pack: "station", look: "notice", title: "Last and first trains", level: 3,
    where: "Pinned up by the ticket machines",
    lines: [
      { head: true, t: [["終電", "しゅうでん", "last train"]] },
      { t: [["品川", "しながわ", "Shinagawa"], ["行", "ゆき", "bound for"], "　0:15"] },
      { t: [["始発", "しはつ", "first train"], "　4:50"] },
    ],
    en: [
      "Last train",
      "For Shinagawa: 0:15",
      "First train: 4:50",
    ],
    note: "Most city trains stop between about 1 and 5 a.m. Miss the 終電 and it's a taxi or a wait for the 始発.",
  },

  // ---- Shops & offices ----
  {
    id: "shop-hours", pack: "town", look: "notice", title: "Opening hours", level: 3,
    where: "On a shop door",
    lines: [
      { head: true, t: [["営業時間", "えいぎょうじかん", "opening hours"]] },
      { t: [["午前", "ごぜん", "a.m."], ["10時", "じゅうじ", "10 o'clock"], "〜", ["午後", "ごご", "p.m."], ["8時", "はちじ", "8 o'clock"]] },
      { t: [["定休日", "ていきゅうび", "regular day off"], "：", ["水", "すい", "Wednesday (short for 水曜日)"]] },
    ],
    en: [
      "Opening hours",
      "10 a.m. to 8 p.m.",
      "Closed on Wednesdays",
    ],
    note: "Days of the week are often cut to one kanji: 月 火 水 木 金 土 日, Monday to Sunday.",
  },
  {
    id: "door-signs", pack: "town", look: "wall", title: "Signs on the door", level: 3,
    where: "Hanging on shop and restaurant doors",
    lines: [
      { t: [["営業中", "えいぎょうちゅう", "open"]] },
      { t: [["準備中", "じゅんびちゅう", "getting ready (closed)"]] },
      { t: [["本日休業", "ほんじつきゅうぎょう", "closed today"]] },
      { t: [["押", "おす", "push"]] },
      { t: [["引", "ひく", "pull"]] },
    ],
    en: [
      "Open",
      "Getting ready (not open yet)",
      "Closed today",
      "Push",
      "Pull",
    ],
    note: "準備中 often hangs on restaurants between lunch and dinner. 押 and 引 are the verbs 押す and 引く, cut to one kanji.",
  },
  {
    id: "sale", pack: "town", look: "warning", title: "Supermarket sale", level: 3,
    where: "Price cards on the shelves near closing time",
    lines: [
      { head: true, t: [["本日", "ほんじつ", "today"], "の", ["特売", "とくばい", "special sale"]] },
      { t: [["3割引", "さんわりびき", "30% off"]] },
      { t: [["半額", "はんがく", "half price"]] },
      { t: [["税込", "ぜいこみ", "tax included"], ["298円", "にひゃくきゅうじゅうはちえん", "298 yen"]] },
    ],
    en: [
      "Today's special sale",
      "30% off",
      "Half price",
      "298 yen, tax included",
    ],
    note: "割 is a tenth: 3割引 is 30% off. Bentō and side dishes get 割引 and 半額 stickers in the evening.",
  },
  {
    id: "checkout", pack: "town", look: "notice", title: "At the till", level: 3,
    where: "Taped to the counter of a small shop or restaurant",
    lines: [
      { head: true, t: [["お会計", "おかいけい", "checkout"]] },
      { t: [["現金", "げんきん", "cash"], ["のみ", "", "only"]] },
      { t: [["カード", "", "cards"], "は", ["ご利用", "ごりよう", "use (polite)"], ["いただけません", "", "cannot (polite)"]] },
    ],
    en: [
      "Checkout",
      "Cash only",
      "Cards can't be used.",
    ],
    note: "Plenty of small places are still cash only; convenience-store and post-office ATMs take foreign cards.",
  },
  {
    id: "post-office", pack: "town", look: "board", title: "Post office", level: 3,
    where: "The counters inside a post office",
    lines: [
      { head: true, t: [["郵便局", "ゆうびんきょく", "post office"]] },
      { t: [["郵便", "ゆうびん", "mail"], "・", ["お荷物", "おにもつ", "parcels"], "の", ["窓口", "まどぐち", "counter"]] },
      { t: [["現金", "げんきん", "cash"], "の", ["お引き出し", "おひきだし", "withdrawals"], "・", ["お預け入れ", "おあずけいれ", "deposits"]] },
    ],
    en: [
      "Post office",
      "Counter for mail and parcels",
      "Cash withdrawals and deposits",
    ],
    note: "Japan Post is also a bank: the ATM corner (ゆうちょ) handles cash, and the 〒 mark means post office.",
  },
  {
    id: "city-hall", pack: "town", look: "board", title: "City hall", level: 3,
    where: "Just inside the entrance of a city or ward office",
    lines: [
      { head: true, t: [["市役所", "しやくしょ", "city hall"]] },
      { t: [["届出", "とどけで", "notifications (moving in, births…)"], ["窓口", "まどぐち", "counter"], ["1階", "いっかい", "ground floor"]] },
      { t: [["申込書", "もうしこみしょ", "application form"], "に", ["お名前", "おなまえ", "your name"], "と", ["住所", "じゅうしょ", "address"], "を", ["記入して", "きにゅうして", "filling in"], ["ください", "", "please"], "。"] },
    ],
    en: [
      "City hall",
      "Notifications counter: ground floor",
      "Please write your name and address on the application form.",
    ],
    note: "Moving to Japan or within it, you register your address at the 届出 counter within 14 days. In Tokyo's wards it's the 区役所.",
  },

  // ---- Restaurants & food ----
  {
    id: "lunch-menu", pack: "food", look: "board", title: "Lunch menu", level: 3,
    where: "A blackboard outside a set-meal restaurant",
    lines: [
      { head: true, t: [["本日", "ほんじつ", "today's"], "の", ["ランチ", "", "lunch"]] },
      { t: [["焼き魚定食", "やきざかなていしょく", "grilled fish set meal"], "　", ["850円", "はっぴゃくごじゅうえん", "850 yen"]] },
      { t: [["唐揚げ定食", "からあげていしょく", "fried chicken set meal"], "　", ["900円", "きゅうひゃくえん", "900 yen"]] },
      { t: [["ご飯", "ごはん", "rice"], "・", ["味噌汁", "みそしる", "miso soup"], ["付き", "つき", "included"]] },
      { t: [["大盛り", "おおもり", "large portion"], ["無料", "むりょう", "free"]] },
    ],
    en: [
      "Today's lunch",
      "Grilled fish set meal: 850 yen",
      "Fried chicken set meal: 900 yen",
      "Comes with rice and miso soup",
      "Large portions at no extra charge",
    ],
    note: "A 定食 is a set meal: a main dish with rice, miso soup and pickles. 魚 turns into ざかな after 焼き.",
  },
  {
    id: "ticket-machine", pack: "food", look: "notice", title: "Ticket machine", level: 3,
    where: "Next to the ticket machine just inside a ramen shop",
    lines: [
      { head: true, t: [["食券", "しょっけん", "meal ticket"], "を", ["お買い求めください", "おかいもとめください", "please buy"]] },
      { t: [["ラーメン", "", "ramen"], ["800円", "はっぴゃくえん", "800 yen"], "・", ["味噌", "みそ", "miso (ramen)"], ["900円", "きゅうひゃくえん", "900 yen"]] },
      { t: [["大盛り", "おおもり", "large portion"], "・", ["トッピング", "", "toppings"], "は", ["別", "べつ", "separate"], "の", ["ボタン", "", "button"]] },
      { t: [["食券", "しょっけん", "meal ticket"], "は", ["カウンター", "", "counter"], "に", ["お出しください", "おだしください", "please hand over"]] },
    ],
    en: [
      "Please buy a meal ticket.",
      "Ramen 800 yen, miso ramen 900 yen",
      "Large portions and toppings have their own buttons.",
      "Please hand your ticket over at the counter.",
    ],
    note: "Put money in, press the button for your dish, take the ticket and your change, then give the ticket to the staff. The top-left button is usually the house favourite.",
  },
  {
    id: "all-you-can-eat", pack: "food", look: "warning", title: "All you can eat", level: 3,
    where: "On the table of a yakiniku or hot-pot restaurant",
    lines: [
      { head: true, t: [["食べ放題", "たべほうだい", "all you can eat"], "　", ["90分", "きゅうじゅっぷん", "90 minutes"]] },
      { t: [["飲み放題", "のみほうだい", "all you can drink"], ["付き", "つき", "included"], "　", ["3980円", "さんぜんきゅうひゃくはちじゅうえん", "3,980 yen"], "（", ["税込", "ぜいこみ", "tax included"], "）"] },
      { t: [["お料理", "おりょうり", "food"], "の", ["お持ち帰り", "おもちかえり", "taking home"], "は", ["できません", "", "is not allowed"]] },
    ],
    en: [
      "All you can eat: 90 minutes",
      "All you can drink included: 3,980 yen, tax included",
      "Food can't be taken home.",
    ],
    note: "放題 means 'as much as you like': 食べ放題, 飲み放題. There's a time limit, and the last order (ラストオーダー) comes before it.",
  },
  {
    id: "restaurant-wall", pack: "food", look: "wall", title: "Signs at the door", level: 3,
    where: "By the entrance of an izakaya",
    lines: [
      { t: [["店内禁煙", "てんないきんえん", "no smoking inside"]] },
      { t: [["喫煙所", "きつえんじょ", "smoking area"]] },
      { t: [["個室", "こしつ", "private rooms"], ["あります", "", "available"]] },
      { t: [["予約", "よやく", "reservations"], ["受付中", "うけつけちゅう", "being taken"]] },
    ],
    en: [
      "No smoking inside",
      "Smoking area",
      "Private rooms available",
      "Taking reservations",
    ],
    note: "Smoking is banned inside most restaurants now; 喫煙所 points to the one place you may.",
  },
  {
    id: "takeaway", pack: "food", look: "notice", title: "Takeaway", level: 3,
    where: "By the till of a café or bakery",
    lines: [
      { head: true, t: [["お持ち帰り", "おもちかえり", "takeaway"], ["できます", "", "available"]] },
      { t: [["店内", "てんない", "eating in"], ["10%", "", "10% tax"], "・", ["お持ち帰り", "おもちかえり", "takeaway"], ["8%", "", "8% tax"]] },
      { t: [["お箸", "おはし", "chopsticks"], "が", ["ご入用", "ごいりよう", "needed"], "の", ["方", "かた", "people (polite)"], "は", ["お申し付けください", "おもうしつけください", "please tell us"]] },
    ],
    en: [
      "Takeaway available",
      "Tax: 10% eating in, 8% to take away",
      "If you need chopsticks, please ask.",
    ],
    note: "Staff will ask 店内でお召し上がりですか (eating in?). Answer 持ち帰りで (to take away) or 店内で (here).",
  },
  {
    id: "spice-scale", pack: "food", look: "board", title: "How spicy?", level: 3,
    where: "On the menu of a curry shop",
    lines: [
      { head: true, t: [["辛さ", "からさ", "spiciness"]] },
      { t: [["甘口", "あまくち", "mild"], "・", ["中辛", "ちゅうから", "medium hot"], "・", ["辛口", "からくち", "hot"], "・", ["大辛", "おおから", "extra hot"]] },
      { t: [["お冷", "おひや", "cold water"], "は", ["セルフサービス", "", "self-service"]] },
    ],
    en: [
      "Spiciness",
      "Mild, medium, hot, extra hot",
      "Water is self-service.",
    ],
    note: "お冷 is what restaurants call a glass of cold water; it's free. 辛い is spicy, 甘い sweet: 甘口 curry is the mild one.",
  },
];
