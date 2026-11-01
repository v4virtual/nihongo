# Kaku roadmap

Kaku teaches Japanese one script at a time, with handwriting at the centre.
This file tracks what's shipped and what we might add. Items are grouped by
release; order within a group is a rough priority.

## v0.1 — Hiragana

- [x] Home with the three scripts as station signs; katakana and kanji marked "coming soon"
- [x] Hiragana chart: gojūon (46), dakuten/handakuten (25), small kana and yōon combos (33)
- [x] **Explain mode** per kana: animated stroke order, romaji, source kanji (man'yōgana), memory hook, quirks, lookalikes, example words, dakuten/handakuten equations (か + ゛ = が)
- [x] **Write mode** with stroke-by-stroke grading (shape, direction, order) on KanjiVG reference strokes
  - [x] Help levels: Trace (full guide + animated stroke), Guide (faint guide + start points), Memory (blank)
  - [x] Accuracy style: notebook page, pencil, per-stroke %, teacher's red-pen marks (花丸 / ◎ / ○ / △)
  - [x] Neon style: Tokyo night skyline, unlit tubes that light up as you write, sparks, synth sounds
  - [x] Calligraphy style: washi with sumi-e (pagoda, torii, Fuji, sakura, seigaiha, ginkgo), speed-sensitive brush with dry-brush streaks, koto plucks, temple bell, hanko seal grades (秀 優 良 可)
  - [x] "Watch" demo that plays the stroke order in the current style
- [x] **Words and phrases** in three difficulty levels; backgrounds follow the word (waves for うみ, Skytree for おしあげ…)
- [x] **Quiz**: kana→romaji, romaji→kana, listen→kana, word→meaning; weighted toward kana you miss
- [x] Japanese speech with the device's built-in TTS (offline on Android/iOS), voice and speed settings
- [x] Installable PWA (offline cache) when served over HTTPS; also runs as a Claude artifact

## v0.2 — Polish and feel

- [ ] Real-device tuning of grading tolerances and brush dynamics (Android phones, iPad + Pencil, S Pen)
- [x] Faster neon rendering while writing (no canvas blur on the live stroke or sparks; about 3× faster in tests)
- [x] Word and phrase cards fit long phrases at phone widths
- [x] Haptics on stroke accept/reject/complete (`navigator.vibrate`) on Android, with a setting
- [x] Writing hand setting: on wide screens the controls sit on the side the writing hand doesn't cover
- [x] Tablet layouts: landscape two-column writing screen (square up to 760px), larger square in portrait, two-column kana chart on wide screens
- [x] Hints above the square on phones, where the writing hand doesn't cover them
- [x] Palm rejection for stylus users (iPad + Pencil, S Pen): touches are ignored while a pen is in use
- [x] Stroke-ending feedback for **hane** (flicks): detected from the stroke data, checked on every stroke, shown on the explain page and played in the demo
- [x] Stroke endings for kanji (**tome / harai / hane**) from KanjiVG's stroke types: sweeps and hooks marked in the stroke order, listed on each kanji's page, described in hints and lessons
- [ ] Checking the learner's tome vs. harai as they write (pen speed at the lift): needs tuning on real devices before it can judge without nagging
- [ ] Tome / harai for kana: KanjiVG has no stroke types for kana, so they need hand-checked labels
- [x] Effects volume control
- [ ] Sound packs per style
- [x] Light and dark themes for the app around the writing area (Auto follows the phone; Settings → Theme overrides), with the browser bar and Android status bar matched to what's on screen
- [x] Accessibility pass: Text size setting (Normal / Large / Extra large); Japanese text tagged `lang="ja"` so screen readers pronounce it; every stroke described in words (writing area, explain page, next-stroke hints); quiz results announced; settings sheet keeps and returns keyboard focus; contrast fixes; headings and landmarks
- [x] axe-core accessibility audit of every screen and style in CI

## v0.3 — Learning loop

- [x] Spaced repetition (FSRS-4.5) across writing, quiz and reading, with a gentle Today queue (no streaks or hearts); new kana a few a day in chart order, voiced kana, combos, words and signs once their kana are learned
- [x] Reading mode: station boards, shop curtains, road markings, menus and labels, and short spaced sentences; tap a kana to hear it, reading hidden until asked
- [x] Pronunciation check for words, phrases and signs (Web Speech recognition in the browser, Android's recogniser in the app), asking before first use and accepting kanji answers
- [ ] Pronunciation check for single kana: needs an on-device model, since cloud recognisers turn one syllable into a random word
- [x] Mixed "write what you hear" drill: audio only, write the kana
- [x] Progress view per row (あ-row, か-row…) without gamification

## v0.4 — Katakana

- [x] Katakana chart, explain mode (with the kanji fragments they came from and the hiragana twin), writing in all three styles
- [x] Loanword practice (ラーメン, コンビニ, スイカ) with matching scenes: 45 words in three levels, new ramen, konbini, IC card, coffee and vending-machine art
- [x] Long-vowel mark ー and small ァ ィ ゥ ェ ォ combos (ファ, ティ), plus ヴ
- [x] Katakana in Today (hiragana first, katakana first or both together), reading (signs, menus, mixed sentences, vending-machine labels) and the quiz (Katakana → hiragana)

## v0.5 — Kanji, first steps

- [x] JLPT N5 kanji (80) with KanjiVG stroke data, radicals, on/kun readings, memory hooks and example words
- [x] Component-aware writing: parts from KanjiVG coloured in the stroke order, "亻 done" as each part is finished, and stroke-order mistakes named by part
- [x] Stroke-count search in the kanji chart
- [x] Words mixing kanji and kana (furigana toggle), kanji in Today (after the basic hiragana) and a kanji quiz
- [x] Hane checks on kanji hooks from KanjiVG's stroke types: 九's hook is now checked, and 七 (which doesn't flick in Japanese) isn't
- [x] Hane checks for hooks that turn sideways or down, in the model hook's own direction (the hook under 冖 in 学, and in 飲 and 読): 89 of the 101 kanji hooks are now checked
- [ ] The last 12 kanji hooks (子's first stroke, 長, 四, 西, 学's 6th, 食, 飲's 7th, and in the clinic pack 眼, 膚, 階, 遊, 館): KanjiVG draws them as a broad curve rather than a distinct hook, so a check can't tell them from the same stroke without one; they're taught but not checked

## v0.6 — Narrated lessons (from early users' feedback)

- [x] A narrated, animated lesson on every explain page: origin, memory hook, each stroke drawn and described, an example word; captions, play/pause and step-by-step seeking
- [x] Explain on the writing screen: the character's lesson in a sheet, on request (replaces the first try, narration that talked during writing, after early users' feedback)
- [ ] Recorded narration by a native speaker, for a consistent voice on every device

## v0.7 — Kanji sets for real life: clinic, stations, shops (from a learner's visit to a Japanese clinic)

- [x] A second kanji set of 92 for reading your way through a clinic: departments and staff (病院, 内科, 薬局, 看護師), reception and paying (受付, 予約, 保険証, 会計), symptoms and tests (熱, 痛い, 血液検査), signs and notices (注意, 危険, 非常口, 化粧室) and parking (駐車場, 駐車券, 料金), each with strokes, readings, parts, a memory hook and a narrated lesson
- [x] Pick which set Today introduces first: Everyday kanji or Clinic & hospital
- [x] 53 clinic words and phrases with furigana (診察券, 耳鼻科, 予約しています, ここが痛いです)
- [x] Signs tab: eight real clinic signs (the car park notice and the request to parents that started this, reception, a floor guide, the pharmacy window, wall signs, visiting hours, a fever notice). Tap any word for its reading, meaning and kanji, hear it read by its readings, turn furigana off, and reveal the translation with a note on how things work
- [x] More sets built the same way: Stations & trains (41 kanji: 駅 線 改札 切符 快速 各停 乗り換え…) and Shops & offices (40: 店 売 買 割引 税込 営業中 郵便 銀行 役所 届…), each with 20 words and seven or six real signs (a platform board, the on-train screen, ticket gates, changing trains, priority seats, doors closing, last trains; opening hours, door signs, a supermarket sale, the till, the post office, city hall)
- [x] More everyday kanji: 29 for nature (花 海 空 森 雪 星 春夏秋冬 犬 猫 鳥 魚…) and 24 for things (物 家 茶 米 肉 紙 服 傘 箱 窓 門 手 足 目 写真…), with 28 words
- [x] Groups fold: the kanji chart, Today's progress and the Signs tab open and close by group or set, remember how you left them, and show a peek of each group's kanji when folded; a stroke-count filter opens every match
- [x] Restaurants & food (40 kanji: 丼 麺 寿司 刺身 餃 鍋 豆腐 卵 野菜 果; 焼 揚 唐 煮 汁 味噌 辛 甘 塩 油 冷 氷; 文 杯 箸 喫 個 盛 放題 別 持 帰), 20 words (注文, 大盛り, 食べ放題, お持ち帰り, 味噌汁, 唐揚げ…) and six signs (a lunch board, a ramen ticket machine, all-you-can-eat rules, signs at the door, takeaway and tax, a curry spice scale); 346 kanji in all
- [x] Weather & news (30 kanji: 曇 度 最 低 報 確 率 湿 霧 雷 象; 暑 寒 暖 涼 季 節 候 梅 紫 粉 症; 警 震 災 害 避 難 津 波), 20 words (天気予報, 降水確率, 梅雨, 熱中症, 花粉, 地震, 津波, 避難…) and five signs (today's forecast, a heatstroke poster, a tsunami warning, an evacuation-area sign, seasonal news)
- [x] Work & office (30 kanji: 仕 事 社 働 勤 務 課 部 給 残 退; 議 資 刷 連 絡 認 締 担 説 相 談 頼; 遅 刻 曜 週 礼 失 同), 20 words (仕事, 会社員, 残業, 給料, 会議, 資料, 締め切り, 確認, 月曜日, 失礼します…) and five signs (office doors, a no-overtime day, the team whiteboard, the time clock, office phrases)
- [x] Past the 80/20 point by frequency: Core essentials (77 kanji: every first-grade and JLPT N4 kanji that was still missing, e.g. 言 思 知 使 強 多 教 心 力 立) and Reading the news (216: the rest of the 500 most frequent kanji in newspapers, in ten themed groups: politics, police and courts, economy, sport, places, organisations…), with 49 words and eight signs (a library, park rules, a cinema; headlines on an election, business, local news, sport and national news). 699 kanji in nine sets, covering about 84% of the kanji in news text, 78% on Wikipedia and 69% in literature; a unit test checks every one of the news top 500 is taught
- [x] Signs in Today's review: each line of a sign (or lines that only make sense together) is a card, "what does this sign say?", once you've started its kanji and kana; other lines of the same sign make the wrong answers. Also as "Practice reading" on the Signs tab

## Platform

- [x] Deploy to GitHub Pages on every green push to `main`; installable on Android/iOS, offline, auto-updating
- [x] Android app (APK) with Capacitor: offline, native text-to-speech and haptics, built and published as a GitHub Release on every green push to `main`
- [x] iPhone/iPad app with Capacitor: universal iOS project with native speech, haptics and speech recognition, built for the simulator on every CI run
- [ ] TestFlight and App Store: needs an Apple Developer account, then signing from CI (certificate, provisioning profile, App Store Connect key as secrets)
- [ ] Play Store listing (needs an .aab, store assets and a privacy note covering the microphone)
- [x] Bundle the fonts in the app and the APK: subsets of the four fonts with just the characters Kaku uses (about 2.1 MB), so even a first launch offline looks right
- [x] Account-free backup: save progress as a file or copy it as text, restore it on another device by merging (the most recent review of each item wins) or replacing
- [ ] Optional automatic sync across devices
- [ ] Offline neural TTS for consistent voices across devices. Candidates to evaluate:
  - VOICEVOX (free, high-quality Japanese voices; check each voice's credit terms)
  - Kokoro-82M (Apache-2.0) Japanese voices via ONNX in the browser
  - Pre-rendered audio clips for all kana and word-list items (smallest and most reliable)
- [ ] Recorded native-speaker audio for the kana chart

## Ideas parking lot

- Calligraphy "free brush" canvas with export of your best character
- Seasonal backdrops (sakura in spring, fireworks in summer, momiji in autumn, snow in winter)
- Station-name challenge: write the next stop on the Yamanote line
- Neon sign builder: write a word and see it as a shop sign on the skyline
