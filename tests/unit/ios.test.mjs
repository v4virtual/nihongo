import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (p) => readFileSync(new URL(`../../${p}`, import.meta.url));
const text = (p) => read(p).toString();

test("the iPhone/iPad app wraps src/ under Kaku's app id, on both device families", () => {
  const cap = JSON.parse(text("capacitor.config.json"));
  const pbx = text("ios/App/App.xcodeproj/project.pbxproj");
  assert.match(pbx, new RegExp(`PRODUCT_BUNDLE_IDENTIFIER = ${cap.appId.replace(/\./g, "\\.")};`));
  assert.match(pbx, /TARGETED_DEVICE_FAMILY = "1,2";/, "iPhone and iPad");
  assert.match(text("ios/App/App/Info.plist"), /<key>CFBundleDisplayName<\/key>\s*<string>Kaku<\/string>/);
});

test("iOS explains the microphone and speech recognition before Say it uses them", () => {
  const plist = text("ios/App/App/Info.plist");
  for (const key of ["NSMicrophoneUsageDescription", "NSSpeechRecognitionUsageDescription"]) {
    assert.match(plist, new RegExp(`<key>${key}</key>\\s*<string>[^<]{20,}</string>`), key);
  }
});

test("the iOS project pulls in every native plugin the app uses", () => {
  const pods = text("ios/App/Podfile");
  const deps = Object.keys(JSON.parse(text("package.json")).dependencies).filter((d) => d !== "@capacitor/core" && !/^@capacitor\/(android|ios)$/.test(d));
  const podName = { "@capacitor-community/text-to-speech": "CapacitorCommunityTextToSpeech", "@capacitor/haptics": "CapacitorHaptics", "@capacitor-community/speech-recognition": "CapacitorCommunitySpeechRecognition" };
  for (const d of deps) assert.ok(pods.includes(`pod '${podName[d]}'`), `${d} missing from the Podfile`);
});

test("the App Store icon is 1024×1024 with no transparency", () => {
  const png = read("ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png");
  assert.equal(png.readUInt32BE(16), 1024);
  assert.equal(png.readUInt32BE(20), 1024);
  assert.equal(png[25], 2, "colour type 2: RGB, no alpha channel");
});
