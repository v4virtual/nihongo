# Kaku 書く

Learn Japanese by writing it. v0.1 covers **hiragana**: every kana has an
explain page and a writing practice where each stroke is checked for shape,
direction and order. Katakana and kanji are on the [roadmap](ROADMAP.md).

## What's inside

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
- **Quiz**: multiple choice, weighted toward the kana you miss.
- **Voice**: the device's built-in Japanese text-to-speech (offline on
  Android and iOS). If no voice plays, install a Japanese TTS voice; Settings in
  the app explains how.

The web app has no build step, no dependencies and no network calls except
Google Fonts. The Android app wraps the same files with Capacitor.

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
speaks through Android's own text-to-speech engine and vibrates through the
native haptics engine. Every green push to `main` builds the APK and publishes
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

## Tests

```bash
npm test
```

- `npm run test:unit` runs in plain Node (no browser), in under a second. It
  covers the stroke grader (path parsing, resampling, accuracy, reversed
  strokes, stroke order, all 84 kana) and data integrity (charts, readings,
  kana info, words, phrases, scene art, saved progress).
- `npm run test:e2e` drives the real app in headless Chromium with a simulated
  pen. It covers every screen, writing in all three styles and help levels,
  stroke-order and direction feedback, words, the quiz, settings, layouts at
  phone and desktop widths, and the single-file build.
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
  js/util.js            DOM helpers, settings/progress storage
  js/geometry.js        path parsing, resampling, stroke grading
  js/ink.js             pencil, brush and neon renderers
  js/writer.js          the writing engine (guides, input, grading, marks, particles)
  js/backdrops.js       notebook, neon city and washi backgrounds
  js/audio.js           synthesized sound effects (Web Audio)
  js/tts.js             Japanese speech (Web Speech API)
  js/app.js             screens and hash routing
  js/data/              strokes (KanjiVG), kana info, tables, words, scene art
tools/
  build-strokes.mjs     regenerates js/data/strokes.js from KanjiVG
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
Yuji Syuku, M PLUS Rounded 1c and Zen Kaku Gothic New (SIL Open Font License),
served by Google Fonts.
