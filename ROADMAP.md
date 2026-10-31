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
- [ ] Stroke-ending feedback for **tome / harai** (stop vs. sweep): needs hand-checked labels per stroke, since KanjiVG doesn't record them
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
- [ ] Hane checks on every kanji hook: the detector finds most (水, 月, 子) but misses a few upward ones (九, 七)

## Platform

- [x] Deploy to GitHub Pages on every green push to `main`; installable on Android/iOS, offline, auto-updating
- [x] Android app (APK) with Capacitor: offline, native text-to-speech and haptics, built and published as a GitHub Release on every green push to `main`
- [ ] Play Store listing (needs an .aab, store assets and a privacy note covering the microphone)
- [x] Bundle the fonts in the app and the APK: subsets of the four fonts with just the characters Kaku uses (about 0.9 MB), so even a first launch offline looks right
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
