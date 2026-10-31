// The Android app's code paths, run in Chromium with a fake Capacitor bridge:
// speech must go to Android's TTS plugin, vibration to the Haptics plugin, and
// no service worker is registered inside the APK.
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { chromium, serve, settle, writeChar } from "../helpers/browser.mjs";

let browser, server, base;
before(async () => {
  ({ server, base } = await serve());
  browser = await chromium.launch();
});
after(async () => {
  await browser?.close();
  server?.close();
});

async function nativePage(route, { japanese = true } = {}) {
  const context = await browser.newContext({ viewport: { width: 412, height: 860 }, colorScheme: "dark" });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.addInitScript((japanese) => {
    window.__spoken = [];
    window.__haptics = [];
    window.__installs = 0;
    localStorage.setItem("kaku.v1", JSON.stringify({ settings: { sound: false, vibrate: true }, progress: {} }));
    window.Capacitor = {
      isNativePlatform: () => true,
      Plugins: {
        TextToSpeech: {
          isLanguageSupported: async ({ lang }) => ({ supported: japanese && lang === "ja-JP" }),
          getSupportedVoices: async () => ({ voices: japanese ? [{ name: "en-us-x-sfg", lang: "en-US" }, { name: "ja-jp-x-htm-local", lang: "ja-JP" }] : [] }),
          speak: async (o) => { window.__spoken.push(o); },
          stop: async () => {},
          openInstall: async () => { window.__installs++; },
        },
        SystemBars: { setStyle: async (o) => { (window.__bars ||= []).push(o.style); } },
        Haptics: {
          impact: async (o) => { window.__haptics.push(`impact:${o.style}`); },
          notification: async (o) => { window.__haptics.push(`notification:${o.type}`); },
        },
      },
    };
  }, japanese);
  await page.goto(base + "#" + route);
  await settle(page);
  page.errors = errors;
  return page;
}

test("speech goes to Android's text-to-speech with the Japanese voice", { timeout: 60000 }, async () => {
  const page = await nativePage("k-3042");
  await page.waitForFunction(() => NH.TTS.voices.length === 1);
  await page.locator(".so-tools .icon-btn").nth(1).click();
  await page.waitForFunction(() => window.__spoken.length === 1);
  const [call] = await page.evaluate(() => window.__spoken);
  assert.deepEqual({ text: call.text, lang: call.lang, voice: call.voice }, { text: "あ", lang: "ja-JP", voice: 1 });
  assert.equal(await page.evaluate(() => navigator.serviceWorker.getRegistrations().then((r) => r.length)), 0);
  assert.deepEqual(page.errors, []);
  await page.context().close();
});

test("strokes buzz through the native haptics plugin", { timeout: 60000 }, async () => {
  const page = await nativePage("w-304f");
  await writeChar(page);
  await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
  const buzz = await page.evaluate(() => window.__haptics);
  assert.ok(buzz.includes("impact:LIGHT"), JSON.stringify(buzz));
  assert.ok(buzz.includes("notification:SUCCESS"), JSON.stringify(buzz));
  assert.deepEqual(page.errors, []);
  await page.context().close();
});

test("without Japanese voice data, settings offers to install it", { timeout: 60000 }, async () => {
  const page = await nativePage("hiragana", { japanese: false });
  await page.waitForTimeout(200);
  await page.locator(".bar .icon-btn[aria-label=Settings]").click();
  await page.locator(".btn", { hasText: "Install Japanese voice" }).click();
  assert.equal(await page.evaluate(() => window.__installs), 1);
  assert.deepEqual(page.errors, []);
  await page.context().close();
});

test("Android's status bar icons follow what's on screen", { timeout: 60000 }, async () => {
  const page = await nativePage("w-3042");
  await page.locator(".styles .seg-b", { hasText: "Neon" }).click();
  await page.locator(".stage-bar .icon-btn[aria-label=Back]").click();
  await page.waitForURL(/#k-3042$/);
  // The URL changes before the hashchange handler renders and sets the bars.
  await page.locator("main.explain").waitFor();
  const bars = await page.evaluate(() => window.__bars);
  // notebook page: dark icons; neon night: light icons; dark app chrome: light icons
  assert.deepEqual(bars.slice(-3), ["LIGHT", "DARK", "DARK"], JSON.stringify(bars));
  assert.deepEqual(page.errors, []);
  await page.context().close();
});
