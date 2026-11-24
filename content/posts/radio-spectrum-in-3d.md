---
title: Radio spectrum in 3D
date: 2026-11-24
tags:
  - semiconductor
  - tech
  - interactive
description: "Eight 3D scenes on why fitting more signals into the same spectrum had to wait for chips."
---

I was reading how Qualcomm got started and stalled on one paragraph. It says a station at 99.5 MHz needs 99.7 MHz left empty, that echoes off buildings eat the margin for error, and that a decoding algorithm from 1967 had to wait for chips to catch up. I could follow each sentence, but I had no picture of a frequency, an echo or a decoding error.

So I built the picture. The first four scenes cover what I was missing: what a radio wave is, how sound rides on it, why faster data takes more bandwidth, and how noise flips bits. The other four follow the paragraph: two stations jamming each other, echoes in a city, the Viterbi algorithm picking the most likely path, and chips growing until that decoding fit on one of them.

Each scene gives you one thing to try, and tells you what you found once you have done it.

<div class="x-cards">
  <a href="/static/radio-3d.html" data-router-ignore class="x-card xc-blue">
    <strong>Open the 3D page</strong><br><span class="x-desc">Eight short scenes, from a single radio wave to the chip that made the decoding practical.</span>
  </a>
</div>

<figure style="max-width:880px;margin:1.75rem 0;background:var(--color-surface);border:1px solid var(--color-border);border-radius:12px;padding:12px;">
  <a href="/static/radio-3d.html" data-router-ignore><img src="/static/radio/modulation.jpg" alt="The modulation scene: an orange sound wave, a grey carrier and a blue transmitted signal in 3D, with slices marking where the sound is highest and lowest, beside the scene's explanation and task" style="width:100%;border-radius:8px;box-shadow:0 6px 24px rgba(0,0,0,0.35);display:block;"></a>
  <figcaption style="font-size:0.82rem;color:var(--color-text-faint);text-align:center;margin:0.6rem 0.4rem 0.2rem;line-height:1.4;">Sound and carrier go in, the signal on air comes out; switch between AM and FM to see what changes.</figcaption>
</figure>
