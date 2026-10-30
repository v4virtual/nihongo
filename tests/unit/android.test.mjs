import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";

const read = (p) => readFileSync(new URL(`../../${p}`, import.meta.url), "utf8");

test("the Android app wraps src/ under Kaku's app id", () => {
  const cap = JSON.parse(read("capacitor.config.json"));
  assert.equal(cap.webDir, "src");
  assert.equal(cap.appId, "io.github.v4virtual.kaku");
  assert.match(read("android/app/build.gradle"), /applicationId "io\.github\.v4virtual\.kaku"/);
});

test("signing material comes only from the environment and is never committed", () => {
  const gradle = read("android/app/build.gradle");
  for (const v of ["KAKU_KEYSTORE_PATH", "KAKU_KEYSTORE_PASSWORD", "KAKU_KEY_ALIAS", "KAKU_KEY_PASSWORD"]) {
    assert.match(gradle, new RegExp(`System\\.getenv\\("${v}"\\)`), v);
  }
  assert.doesNotMatch(gradle, /storePassword\s+["']/, "no literal store password");
  const ignore = read(".gitignore");
  for (const pat of ["*.jks", "*.keystore", "*.password"]) assert.ok(ignore.includes(pat), `.gitignore covers ${pat}`);
  const tracked = execSync("git ls-files", { cwd: new URL("../../", import.meta.url) }).toString();
  assert.doesNotMatch(tracked, /\.(jks|keystore|password)$/m, "a key file is tracked by git");
});

test("the APK version comes from CI so each build can update the last", () => {
  const gradle = read("android/app/build.gradle");
  assert.match(gradle, /KAKU_VERSION_CODE/);
  assert.match(gradle, /KAKU_VERSION_NAME/);
});

test("Android launcher icons exist at every density", () => {
  for (const d of ["mdpi", "hdpi", "xhdpi", "xxhdpi", "xxxhdpi"]) {
    for (const f of ["ic_launcher.png", "ic_launcher_round.png", "ic_launcher_foreground.png"]) {
      assert.ok(existsSync(new URL(`../../android/app/src/main/res/mipmap-${d}/${f}`, import.meta.url)), `${d}/${f}`);
    }
  }
});
