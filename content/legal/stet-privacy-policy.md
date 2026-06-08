---
title: "Stet — Privacy Policy"
date: 2026-05-28
noGraph: true
tags:
  - legal
  - stet
---

**Effective date:** 2026-05-27
**Last updated:** 2026-05-28

This privacy policy describes how the **Stet** iOS app ("the app," "we," "our") handles your information. Stet is built by an individual developer and is currently a single-person project. We collect as little as possible and store almost everything on your device.

If you have a question that isn't answered here, write to **xuezh2008@gmail.com**.

---

## 1 · What Stet does

Stet is a personal financial reflection app. You add receipts (camera, screenshot, voice, or by hand), Stet reads them with on-cloud OCR, and the app shows you patterns, an "archetype" personality summary, and short observations about your spending. There is no advisor, no budget enforcement, and no goal tracking.

Stet does not have a backend server of its own. Your data lives on your device.

---

## 2 · What we collect — and where it goes

### 2.1 · Things that stay on your device

These never leave your iPhone unless you back up the device through iCloud or iTunes — and in those cases the backup is encrypted by Apple, not by us.

- **Sign-in identity** from "Sign in with Apple" or email/password. We store your Apple user ID and (if you share it) your email. We never send this to any third party.
- **Your receipts.** Photos, screenshots, voice transcripts, hand-typed entries — including merchant names, items, amounts, dates, categories, currencies, and notes.
- **Your archetype results.** Your quiz answers, computed trait scores (Posture / Structure / Horizon / Substance), and assigned archetype.
- **App preferences.** Monthly income (if you choose to enter it), display toggles, debug flags.

### 2.2 · Things that leave your device

Three third-party services receive data from Stet. None of them ever receive your Apple ID, email, name, or device identifier. They only see an anonymous installation UUID that Stet generates the first time you open the app.

**A. Google Gemini API** — receives receipt images and voice transcripts for OCR/parsing.

The request contains:
- The image (resized to roughly 1000–1600 pixels on the long edge, JPEG-compressed) **or** the voice transcript text.
- A fixed text prompt that tells Gemini to extract structured receipt fields.

The request does **not** contain your name, email, Apple user ID, device identifier, location, or any past receipt history.

Gemini returns the parsed fields. Stet saves them locally and discards the round-trip. Governed by Google's [Generative AI APIs Additional Terms of Service](https://ai.google.dev/terms) and [Privacy Policy](https://policies.google.com/privacy).

**B. Sentry** (crash reporting) — receives a payload when the app crashes or encounters an error we want to know about.

The payload contains:
- Stack trace, file/line of the crash, OS version, app version.
- Breadcrumbs (short list of in-app navigation events leading up to the crash).
- Our anonymous installation UUID.

It does **not** contain your IP address (we disable Sentry's default PII collection), your Apple ID, your email, your name, your photos, your receipts, your archetype, your spending totals, or any user content.

Governed by Sentry's [Privacy Policy](https://sentry.io/privacy/).

**C. PostHog** (product analytics) — receives a small set of events so we can measure retention and figure out which features work.

The events are:
- `app_open` / `app_background` (automatic)
- `quiz_completed` (with: archetype id, your four trait scores, whether it's your first quiz)
- `archetype_shifted` (with: previous and new archetype id)
- `receipt_saved` (with: item count, total, currency code, whether it had a photo, edit mode)
- `dashboard_viewed` / `patterns_viewed`
- `paywall_viewed`, `subscription_purchased`, `subscription_restored`

Each event is tied only to your anonymous installation UUID. PostHog does **not** receive your Apple ID, email, name, photos, receipts, merchant names, individual item descriptions, or anything user-typed.

Governed by PostHog's [Privacy Policy](https://posthog.com/privacy).

**D. Google AdMob** (banner ads on the Spending list) — receives a banner ad request and serves a contextually-targeted ad.

The request contains:
- Generic device class (iPhone vs iPad), iOS major version, app version.
- Up to five short keywords drawn from the merchant names visible on the current Spending list (e.g. "Trader Joe's, Starbucks, Groceries"). These keywords influence which ad gets shown.
- Our anonymous installation UUID — **not** Apple's IDFA. We do not ask for App Tracking Transparency permission, and we do not use IDFA for cross-app or cross-site identification.

AdMob does **not** receive your Apple ID, email, name, photos, receipt totals, archetype, or any user-typed content. The keywords are derived only from merchant names already on screen.

Governed by Google's [AdMob Policy](https://support.google.com/admob/answer/6128543) and [Privacy & Terms](https://policies.google.com/privacy).

You can remove ads entirely by subscribing to Stet Pro from inside the app.

### 2.3 · Things we do not collect

We don't collect or send: tracking identifiers across apps or sites (IDFA), advertising data tied to your identity, push tokens, location, contacts, calendar, photo library metadata beyond the image you choose, browsing history, search history, on-device app inventory, network identifiers, or biometric data.

Our analytics, crash reporting, and ad serving (described above) use only an anonymous installation UUID. They do not use IDFA, Apple's Advertising Identifier, or any device fingerprint.

---

## 3 · Permissions the app asks for

| Permission | When asked | Why |
|---|---|---|
| Camera | First time you tap the camera in Add | Take receipt photos |
| Photo library | First time you import a screenshot or pick an existing photo | Read the image you select |
| Microphone | First time you tap the voice input button | Record the voice note for transcription |
| Speech recognition | Same as microphone | Convert your voice note to text |

We never ask for: App Tracking Transparency, contacts, location, calendar, reminders, health, or motion.

---

## 4 · Subscriptions and payments

Stet offers an optional auto-renewing subscription called **Stet Pro** that removes ads. Pricing is shown inside the app and varies by country.

- Payment is processed by Apple via the App Store, not by us.
- Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period.
- You can manage and cancel subscriptions in your iOS Settings → [Your Name] → Subscriptions, or via [Apple's subscription management page](https://apps.apple.com/account/subscriptions).
- We receive a confirmation from Apple that you are a subscriber. We do not receive your credit card details or billing address.
- If you cancel, your subscription stays active until the end of the current period, after which ads return.

---

## 5 · How long we keep your data

Forever, or until you delete it. Receipts and archetype data stay on your device until:

- You delete an individual receipt or refund inside the app, or
- You uninstall Stet (everything is wiped along with the app's local storage), or
- You reset your iPhone.

Image files for deleted receipts are removed from disk automatically.

We have no copies of your data on any server, because there is no server.

---

## 6 · Your rights

Because your data lives only on your device, you already control all of it. You can:

- View it (inside the app)
- Edit it (every receipt is editable)
- Delete it (per-item or by uninstalling)
- Export it — we are planning a CSV/PDF export feature; it's not in the current release.

If you want a copy of your data and the in-app tools aren't enough yet, write to **xuezh2008@gmail.com** and we'll figure something out.

---

## 7 · Children

Stet is not designed for or directed at children under 13. We do not knowingly collect data from children. If you're a parent and your child has used the app, uninstall it to wipe the data; there's nothing for us to delete on a server.

---

## 8 · Security

We use Apple's standard on-device security: Keychain for credentials, Core Data + the iOS sandbox for receipts, HTTPS-only for the Gemini / Sentry / PostHog / AdMob calls (enforced by Apple's ATS). We do not use any custom encryption layer beyond what iOS provides.

If your device is compromised, your local Stet data could be exposed. Use a passcode, enable Face ID / Touch ID, and keep iOS up to date.

---

## 9 · Changes to this policy

If we change anything material — adding analytics, adding a new third party, changing how ads target, changing what subscriptions include — we will update this page and bump the "Last updated" date at the top before the change ships in the app. For non-material changes (typo fixes, clarifications) we will update silently.

---

## 10 · Contact

Stet is built by Xinhong Zeng. For anything privacy-related (questions, requests, complaints, corrections), email **xuezh2008@gmail.com**.

---

*This policy was written in plain English on purpose. If anything in it is unclear, that's our bug — please tell us.*
