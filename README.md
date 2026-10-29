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

Then open http://localhost:8000. On Android, open it in Chrome over HTTPS and
choose "Add to Home screen" to install it as an offline app.

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
