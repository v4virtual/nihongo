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

No build step, no dependencies, no network calls except Google Fonts.

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
  build-icons.mjs       renders the PNG app icons from src/icon.svg
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
