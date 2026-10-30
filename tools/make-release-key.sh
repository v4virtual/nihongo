#!/usr/bin/env bash
# Creates the Android release signing key for Kaku and (optionally) stores it
# as GitHub secrets so CI can sign every APK with it.
#
# Run this ONCE, on your own computer (needs Java's keytool; `gh` is optional):
#   tools/make-release-key.sh
#
# Keep the two files it writes somewhere safe (a password manager). Android only
# installs an update over an app signed with the same key: lose the key and you
# can't update installed copies any more; users would have to uninstall (and
# lose their progress) to move to a new key.
set -euo pipefail

repo="${REPO:-v4virtual/nihongo}"
keystore="${1:-kaku-release.jks}"
passfile="${keystore%.jks}.password"
alias="kaku"

if [[ -e "$keystore" ]]; then
  echo "$keystore already exists. Not overwriting a signing key." >&2
  exit 1
fi
command -v keytool >/dev/null || { echo "keytool not found: install a Java JDK (17+) first." >&2; exit 1; }

# head closes the pipe early; that SIGPIPE is expected, so no pipefail here.
pass="$(set +o pipefail; LC_ALL=C tr -dc 'A-Za-z0-9' </dev/urandom | head -c 32)"
umask 077
printf '%s' "$pass" >"$passfile"  # no newline: gh secret set stores the file as-is
keytool -genkeypair -keystore "$keystore" -alias "$alias" -keyalg RSA -keysize 4096 -validity 10000 \
  -storepass "$pass" -keypass "$pass" -dname "CN=Kaku, O=v4virtual" >/dev/null 2>&1
echo "Created $keystore (key alias \"$alias\") and $passfile. Back both up now."
echo

secret_cmds() {
  echo "  base64 < $keystore | tr -d '\\n' | gh secret set ANDROID_KEYSTORE_BASE64 -R $repo"
  echo "  gh secret set ANDROID_KEYSTORE_PASSWORD -R $repo < $passfile"
  echo "  gh secret set ANDROID_KEY_PASSWORD -R $repo < $passfile"
  echo "  printf $alias | gh secret set ANDROID_KEY_ALIAS -R $repo"
}

if command -v gh >/dev/null && gh auth status >/dev/null 2>&1; then
  read -r -p "Store the 4 signing secrets in $repo now with gh? [y/N] " yes
  if [[ "$yes" =~ ^[Yy]$ ]]; then
    base64 <"$keystore" | tr -d '\n' | gh secret set ANDROID_KEYSTORE_BASE64 -R "$repo"
    gh secret set ANDROID_KEYSTORE_PASSWORD -R "$repo" <"$passfile"
    gh secret set ANDROID_KEY_PASSWORD -R "$repo" <"$passfile"
    printf '%s' "$alias" | gh secret set ANDROID_KEY_ALIAS -R "$repo"
    echo "Done. The next CI run signs the APK with this key."
    exit 0
  fi
fi

echo "To let CI sign the APK, add these repository secrets (Settings → Secrets and"
echo "variables → Actions), or run these commands with the GitHub CLI:"
secret_cmds
echo
echo "ANDROID_KEYSTORE_BASE64 is the base64 of $keystore; both passwords are the"
echo "contents of $passfile; ANDROID_KEY_ALIAS is \"$alias\"."
