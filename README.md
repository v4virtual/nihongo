# Kaku 書く

Learn Japanese by writing it. Kaku covers **hiragana**, **katakana**, the
first **80 kanji** (JLPT N5) and a **clinic & hospital** set of 92 more, with
real signs to read: every character has an explain page and a writing
practice where each stroke is checked for shape, direction and order. What's
next is on the [roadmap](ROADMAP.md).

## What's inside

- **Today**: a short daily queue scheduled with
  [FSRS](https://github.com/open-spaced-repetition/fsrs4anki) (the scheduler
  behind Anki's FSRS option) so each kana, word and sign comes back just before
  you'd forget it. New kana arrive a few a day (3, 5 or 10) in chart order;
  dakuten kana, combos, words and signs open up once their kana are learned.
  Reviews rotate through writing from memory, reading and writing from sound.
  No streaks, points or hearts. A progress view colours each kana in the chart
  rows by how well it's held.
- **Hear it, write it**: ten kana read aloud with no picture; write each one.
- **Katakana** has its own line from the home screen, with everything below:
  the chart plus loanword sounds (ファ, ティ, ウィ, ヴ) and the long-vowel mark
  ー; explain pages showing the piece of kanji each katakana was cut from (ア
  from the 阝 of 阿) and its hiragana twin; 45 loanwords from カメラ to
  チョコレート with their own scenes (a ramen bowl, a konbini, a Suica card, a
  vending machine); katakana signs and menus; and a Katakana → hiragana quiz.
  Today teaches hiragana first by default; Today → Learn switches to katakana
  first or both together.
- **Kanji**: the 80 kanji of JLPT N5, grouped by theme (numbers, days and
  time, people, places…) with a stroke-count filter. Each has its meaning,
  on and kun readings, radical, a memory hook and example words. Its parts are
  coloured in the stroke-order diagram (休 = 亻 person + 木 tree), and each
  stroke's ending is marked and listed: a sweep (harai), a hook (hane) or a stop
  (tome), from KanjiVG's stroke types; while you
  write, Kaku says when a part is done and names the parts in stroke-order
  mistakes ("That's part of 木. Finish 亻 first"). Words that mix kanji and
  kana (日本, 食べる, 今日) have furigana you can turn off. Kanji join Today two
  a day once all 46 basic hiragana are started (Today → New kanji: off, 2, 3 or
  5).
- **Clinic & hospital**: 92 more kanji for getting through a Japanese clinic:
  departments and staff, reception and paying, symptoms and tests, signs and
  notices, and the car park. Today can start with them instead of the
  everyday set. The Signs tab has real clinic signs (a car park notice, a
  floor guide, the pharmacy window, visiting hours…): tap any word for its
  reading, meaning and kanji, hear the sign read aloud, turn furigana off, and
  reveal the translation.
- **Lessons**: every kana and kanji page has a short narrated lesson that plays
  like a video: what it is and how it sounds, where it came from (the kanji
  behind a kana, the parts of a kanji), a memory hook, each stroke drawn and
  described in turn, and an example word, with captions. The narration is in
  English with the Japanese spoken by a Japanese voice, using the device's
  built-in speech. On the writing screen, **Explain** opens the same lesson for
  the character you're on, in a sheet; nothing is spoken unless you ask.
- **Symbols**: gojūon, dakuten/handakuten and yōon charts. Each kana has an
  animated stroke order, the kanji it came from, a memory hook, quirks,
  lookalikes and example words.
- **Write**, in three styles:
  - *Accuracy*: notebook paper, pencil, per-stroke accuracy and the teacher's
    red-pen marks (花丸 hanamaru, ◎, ○, △).
  - *Neon*: Tokyo at night; unlit glass tubes light up as you write them.
  - *Calligraphy*: washi with sumi-e drawings; a speed-sensitive brush, koto
    notes, a temple bell and a hanko seal grade (秀 優 良 可).
  - Help levels: **Trace** (full guide with animated stroke), **Guide** (faint
    guide, start points) and **Memory** (blank square).
- **Words & phrases** at three levels. Backgrounds follow the word: waves for
  うみ, Mount Fuji for ふじさん, Skytree for おしあげ.
- **Read**: station boards, bathhouse curtains, road markings, sushi menus,
  shop signs and short sentences (spaced between words, as in children's
  books). Tap any kana to hear it; the reading stays hidden until you ask.
- **Say it**: a pronunciation check for words, phrases and signs, using the
  browser's speech recognition (Chrome, Edge, Safari) or Android's in the app.
  It accepts the answer in kanji too (駅はどこですか for えきは どこですか).
- **Quiz**: multiple choice, weighted toward the kana you miss.
- **Voice**: the device's built-in Japanese text-to-speech (offline on
  Android and iOS). If no voice plays, install a Japanese TTS voice; Settings in
  the app explains how.

The web app has no build step, no dependencies and makes no network calls of
its own; the fonts are bundled. The one exception is speech recognition when
you use **Say it**: the browser's
provider turns your voice into text (Chrome and Edge send the audio to Google
or Microsoft, Safari to Apple; in the Android app it's the phone's speech
service, often Google's). Kaku asks before the first use and doesn't record or
keep anything itself. Progress stays on the device; Settings → Progress →
**Back up…** saves it as a file or copies it as text, and restores it on another
device (merging, so the most recent review of each item wins, or replacing).
The Android app wraps the same files with Capacitor.

## Run it

```bash
python3 -m http.server 8000 -d src
```

Then open http://localhost:8000.

## Deploy (GitHub Pages)

Every push to `main` runs the tests, and if they pass, publishes `src/` to
GitHub Pages at `https://<owner>.github.io/<repo>/`. One-time setup in the
repository settings:

1. **Settings → General → Default branch**: set it to `main`. The Pages
   environment only accepts deploys from the default branch.
2. **Settings → Pages → Build and deployment → Source**: choose
   **GitHub Actions**.
3. The repository must be public for Pages on GitHub's free plan (private
   repositories need a paid plan, and the site is public either way).

Then re-run the latest **Tests** workflow on `main` (Actions tab → Tests →
Run workflow), or push to `main`.

### Install on Android

Open the Pages URL in Chrome, tap the ⋮ menu, then **Add to Home screen** (or
**Install app**). Kaku then opens full screen and works offline. Progress is
stored on the device and survives updates. Each new deploy is picked up the
next time the app opens with a connection: app files are fetched network-first
and the cache is renamed per deploy.

On iPhone, open the URL in Safari and use **Share → Add to Home Screen**.

## Android app (APK)

The same app is packaged with [Capacitor](https://capacitorjs.com) in
`android/`. It bundles every file, so it works offline from the first launch,
speaks through Android's own text-to-speech engine, listens through its speech
recogniser (the microphone permission is asked for on first use) and vibrates
through the native haptics engine. Every green push to `main` builds the APK and publishes
it as a GitHub Release: download it on your phone from
[releases/latest](https://github.com/v4virtual/nihongo/releases/latest) and
open it to install (Android asks you to allow installs from your browser).
Pull requests build the APK too, as a check, and attach it to the workflow run.

### Signing (one-time)

Android only installs an update over an app signed with the same key. Run this
once on your computer (needs a Java JDK; the GitHub CLI is optional):

```bash
tools/make-release-key.sh
```

It writes `kaku-release.jks` and `kaku-release.password`, and stores four
repository secrets (`ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`,
`ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`) with `gh`, or prints how to add
them by hand. Back up both files: without the key, installed copies can't be
updated. Until the secrets exist, CI publishes debug-signed APKs, which have to
be uninstalled (losing progress) before installing a newer one.

### Build locally

Needs Node 22, JDK 21 and the Android SDK (`ANDROID_HOME`):

```bash
npm ci
npx cap sync android
cd android && ./gradlew assembleDebug
```

The APK lands in `android/app/build/outputs/apk/debug/`. Run
`node tools/build-icons.mjs` after changing `src/icon.svg` to regenerate the
launcher icons and splash screens.

## iPhone and iPad app

The same app is packaged for iOS with Capacitor in `ios/` (one universal app for
iPhone and iPad, iOS 15 or later), with native text-to-speech, haptics and
speech recognition for **Say it**. Every CI run builds it for the simulator, so
a change that breaks the iOS build shows up on the pull request; the built
simulator app is attached to the run.

Installing it on a real iPhone or iPad needs a Mac with Xcode:

```bash
npm ci
npx cap sync ios
npx cap open ios
```

In Xcode, pick your Apple ID under **Signing & Capabilities → Team**, plug in
the device and press Run. With a free Apple ID the app runs for 7 days before
it needs re-installing; with the Apple Developer Program ($99 a year) you can
send it to testers through TestFlight and publish it on the App Store. Signing
for TestFlight from CI can be added once there's a developer account (it needs
a distribution certificate, a provisioning profile and an App Store Connect API
key as repository secrets).

## Tests

```bash
npm test
```

- `npm run test:unit` runs in plain Node (no browser), in under a second. It
  covers the stroke grader (path parsing, resampling, accuracy, reversed
  strokes, stroke order, all 84 kana) and data integrity (charts, readings,
  kana info, words, phrases, reading items, scene art, saved progress), the
  FSRS scheduler and daily queue, and the pronunciation matcher.
- `npm run test:e2e` drives the real app in headless Chromium with a simulated
  pen, and runs an [axe-core](https://github.com/dequelabs/axe-core)
  accessibility audit of every screen and style (any violation fails). It covers every screen, writing in all three styles and help levels,
  stroke-order and direction feedback, words, the quiz, the Today queue and its
  sessions, dictation, reading mode, the pronunciation check (with a fake
  recogniser), settings, layouts at phone and desktop widths, and the
  single-file build.
- GitHub Actions runs both on every pull request
  (`.github/workflows/test.yml`).

The e2e tests need Playwright with Chromium. If it isn't installed globally:

```bash
npm install --no-save playwright@1.63.0
npx playwright install chromium
```

`npm run screenshots` saves screenshots of the main screens to a folder you pass
as the second argument, for a quick visual check.

## Project layout

```
src/
  index.html            page shell
  css/app.css           all styles (app chrome + the three writing worlds)
  css/fonts.css         the bundled fonts (generated)
  fonts/                font subsets and their licence (OFL.txt)
  js/util.js            DOM helpers, settings/progress storage
  js/geometry.js        path parsing, resampling, stroke grading
  js/srs.js             FSRS-4.5 scheduler, grades and the daily queue
  js/ink.js             pencil, brush and neon renderers
  js/writer.js          the writing engine (guides, input, grading, marks, particles)
  js/backdrops.js       notebook, neon city and washi backgrounds
  js/audio.js           synthesized sound effects (Web Audio)
  js/tts.js             Japanese speech (Web Speech API)
  js/today.js           Today tab, sessions, dictation, progress by row
  js/read.js            reading mode: signs, sentences, tap-a-kana
  js/speak.js           pronunciation check (speech recognition + matching)
  js/kanji-line.js      kanji chart, explain pages, furigana, kanji words and quiz
  js/signs.js           real signs with kanji: tap a word for reading, meaning and kanji
  js/backup.js          back up and restore progress (file or text)
  js/lesson.js          narrated lessons: script from the data, player, writing narration
  js/app.js             screens and hash routing
  js/data/              strokes and kanji parts (KanjiVG), kana info (hiragana, katakana), kanji,
                        tables, words, reading, signs, scene art
ios/                    the iPhone/iPad app (Capacitor, CocoaPods)
tools/
  build-strokes.mjs     regenerates js/data/strokes.js (and kanji parts) from KanjiVG
  build-fonts.mjs       bundles the fonts, cut down to the characters the app uses
  build-artifact.mjs    bundles everything into dist/kaku.html (single file)
  build-icons.mjs       renders the web and Android icons from src/icon.svg
  make-release-key.sh   creates the Android signing key and GitHub secrets
  smoke.mjs             screenshots of the main screens (Playwright)
tests/
  unit/                 Node tests for grading logic and data
  e2e/                  browser tests of the whole app
  helpers/              VM loader, static server, simulated pen
```

## Credits

Stroke order data comes from [KanjiVG](https://kanjivg.tagaini.net) by Ulrich
Apel, licensed [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/);
`src/js/data/strokes.js` is distributed under the same license. Fonts: Klee One,
Yuji Syuku, M PLUS Rounded 1c and Zen Kaku Gothic New (SIL Open Font License
1.1, see `src/fonts/OFL.txt`), bundled as subsets of the characters the app
uses. `node tools/build-fonts.mjs` rebuilds them after adding text with new
characters; a unit test says when that's needed. The single-file artifact build
loads them from Google Fonts instead.
