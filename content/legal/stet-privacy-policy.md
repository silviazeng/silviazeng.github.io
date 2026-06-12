---
title: "Stet — Privacy Policy"
date: 2026-06-09
noGraph: true
tags:
  - legal
  - stet
---

**Effective date:** 2026-05-27
**Last updated:** 2026-06-09

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

Five third-party services receive data from Stet. None of them ever receives your Apple ID, email, name, or sign-in identity. The two AI parsing services (Gemini and DeepSeek) receive only the receipt or voice content they need to read. The two diagnostics services (Sentry and PostHog) receive only an anonymous installation UUID that Stet generates the first time you open the app. The advertising service (Google AdMob — section E) receives ad-request data and, **only if you grant App Tracking Transparency**, your device's advertising identifier (IDFA). Pro subscribers see no ads and trigger no ad requests at all.

**A. Google Gemini API** — receives receipts for OCR (reading the text off a photo or screenshot, and parsing it into fields).

The request contains:
- The receipt image (resized to roughly 1000–1600 pixels on the long edge, JPEG-compressed) for screenshots and photos. For printed paper receipts, the text is first read on your device by Apple's Vision framework, and only that extracted text — not the image — is sent.
- A fixed text prompt that tells Gemini to extract structured receipt fields.

The request does **not** contain your name, email, Apple user ID, device identifier, location, or any past receipt history.

Gemini returns the parsed fields. Stet saves them locally and discards the round-trip. Governed by Google's [Generative AI APIs Additional Terms of Service](https://ai.google.dev/terms) and [Privacy Policy](https://policies.google.com/privacy).

**B. DeepSeek API** — receives **text** (never images) for Stet's non-receipt language tasks: turning a **voice** note into a transaction, writing the one-line remark ("quip") shown after you save a receipt, and an occasional one-time clean-up of item-category labels.

The request contains:
- For voice: the transcript of what you said (e.g. "lunch with Sam, 32 dollars").
- For the quip: the just-saved receipt's merchant name, total, category, and up to five item names.
- For label clean-up: a list of item names.
- A fixed text prompt. **No image is ever sent to DeepSeek** — all receipt image OCR stays with Gemini.

The request does **not** contain your name, email, Apple user ID, device identifier, location, receipt images, or your past receipt history.

**One difference worth calling out:** unlike Gemini's paid tier (which does not use the data we send to train its models), DeepSeek's API terms allow the inputs we send to be used to improve their models, and DeepSeek processes and stores data on servers in the People's Republic of China. What we send is limited to the short text described above — no images, no identity, no spending history. Governed by DeepSeek's [Terms of Service](https://cdn.deepseek.com/policies/en-US/deepseek-open-platform-terms-of-service.html) and [Privacy Policy](https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html).

**C. Sentry** (crash reporting) — receives a payload when the app crashes or encounters an error we want to know about.

The payload contains:
- Stack trace, file/line of the crash, OS version, app version.
- Breadcrumbs (short list of in-app navigation events leading up to the crash).
- Our anonymous installation UUID.

It does **not** contain your IP address (we disable Sentry's default PII collection), your Apple ID, your email, your name, your photos, your receipts, your archetype, your spending totals, or any user content.

Governed by Sentry's [Privacy Policy](https://sentry.io/privacy/).

**D. PostHog** (product analytics) — receives a small set of events so we can measure retention and figure out which features work.

The events are:
- `app_open` / `app_background` (automatic)
- `quiz_completed` (with: archetype id, your four trait scores, whether it's your first quiz)
- `archetype_shifted` (with: previous and new archetype id)
- `receipt_saved` (with: item count, total, currency code, whether it had a photo, edit mode)
- `dashboard_viewed` / `patterns_viewed`

Each event is tied only to your anonymous installation UUID. PostHog does **not** receive your Apple ID, email, name, photos, receipts, merchant names, individual item descriptions, or anything user-typed.

Governed by PostHog's [Privacy Policy](https://posthog.com/privacy).

**E. Google AdMob** (advertising) — Stet shows a single banner ad at the bottom of the Spending list, filled by Google AdMob.

- The first time you reach the main app, iOS asks whether to allow tracking (**App Tracking Transparency**). **If you allow it,** AdMob may use your device's advertising identifier (IDFA) to show more relevant, personalized ads. **If you decline,** AdMob serves non-personalized ads instead — you still see a banner, just not tailored to you.
- Either way, AdMob receives standard ad-request data (device type, OS version, coarse region) plus the contextual keywords Stet sends: the **merchant names currently visible in your Spending list** (used only to make the ad less random). It does **not** receive your name, email, Apple ID, receipt images, amounts, dates, or spending history.
- **Pro subscribers see no ads** and trigger no ad requests.

Governed by Google's [advertising terms](https://policies.google.com/technologies/ads) and [Privacy Policy](https://policies.google.com/privacy).

### 2.3 · Things we do not collect

Beyond what's described in 2.2, we don't collect or send: push tokens, precise location, contacts, calendar, photo-library metadata beyond the image you choose, browsing history, search history, on-device app inventory, network identifiers, or biometric data.

Our analytics and crash reporting (PostHog + Sentry) use only an anonymous installation UUID — no IDFA, no Apple Advertising Identifier, no device fingerprint. The **only** component that may use the IDFA is AdMob, and only if you grant App Tracking Transparency (section 2.2 E).

Stet shows one banner ad at the bottom of the Spending list. You can remove ads permanently with the in-app **Remove ads** purchase (Stet Pro).

---

## 3 · Permissions the app asks for

| Permission | When asked | Why |
|---|---|---|
| Camera | First time you tap the camera in Add | Take receipt photos |
| Photo library | First time you import a screenshot or pick an existing photo | Read the image you select |
| Microphone | First time you tap the voice input button | Record the voice note for transcription |
| Speech recognition | Same as microphone | Convert your voice note to text |
| Tracking (App Tracking Transparency) | First time you reach the main app | Show personalized ads via the advertising identifier. Decline and ads stay non-personalized; either way the app is free |

We never ask for: contacts, location, calendar, reminders, health, or motion.

---

## 4 · How long we keep your data

Forever, or until you delete it. Receipts and archetype data stay on your device until:

- You delete an individual receipt or refund inside the app, or
- You uninstall Stet (everything is wiped along with the app's local storage), or
- You reset your iPhone.

Image files for deleted receipts are removed from disk automatically.

We have no copies of your data on any server, because there is no server.

---

## 5 · Your rights

Because your data lives only on your device, you already control all of it. You can:

- View it (inside the app)
- Edit it (every receipt is editable)
- Delete it (per-item or by uninstalling)
- Export it — we are planning a CSV/PDF export feature; it's not in the current release.

If you want a copy of your data and the in-app tools aren't enough yet, write to **xuezh2008@gmail.com** and we'll figure something out.

---

## 6 · Children

Stet is not designed for or directed at children under 13. We do not knowingly collect data from children. If you're a parent and your child has used the app, uninstall it to wipe the data; there's nothing for us to delete on a server.

---

## 7 · Security

We use Apple's standard on-device security: Keychain for credentials, Core Data + the iOS sandbox for receipts, HTTPS-only for the Gemini and DeepSeek API calls (enforced by Apple's ATS). We do not use any custom encryption layer beyond what iOS provides.

If your device is compromised, your local Stet data could be exposed. Use a passcode, enable Face ID / Touch ID, and keep iOS up to date.

---

## 8 · Changes to this policy

If we change anything material — adding ads, adding analytics, adding a backend, changing third parties — we will update this page and bump the "Last updated" date at the top before the change ships in the app. For non-material changes (typo fixes, clarifications) we will update silently.

---

## 9 · Contact

Stet is built by Xinhong Zeng. For anything privacy-related (questions, requests, complaints, corrections), email **xuezh2008@gmail.com**.

---

*This policy was written in plain English on purpose. If anything in it is unclear, that's our bug — please tell us.*
