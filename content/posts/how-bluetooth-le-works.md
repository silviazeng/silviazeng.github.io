---
title: How Bluetooth LE Works
date: 2026-11-24
tags:
  - semiconductor
  - tech
  - interactive
description: "Take apart a pair of earbuds or a TV remote, then watch one chip advertise, connect and trade data."
---

I read [a Chinese article](https://mp.weixin.qq.com/s/nm93sc7RoyBgJKuI9VXraw) on the Bluetooth LE stack but could not picture where each layer lives in a real device, so I made it a 3D page.

<div class="x-cards">
  <a href="/static/bluetooth-le.html" data-router-ignore class="x-card xc-amber">
    <strong>Open the 3D page</strong><br><span class="x-desc">Five short acts, from taking the earbuds apart to the faster modulation behind HDT.</span>
  </a>
</div>

<figure style="max-width:880px;margin:1.75rem 0;background:var(--color-surface);border:1px solid var(--color-border);border-radius:12px;padding:12px;">
  <a href="/static/bluetooth-le.html" data-router-ignore><img src="/static/ble/take-it-apart.jpg" alt="An earbud taken apart in 3D, with labels on the battery, speaker driver, Bluetooth SoC, crystal, antenna and microphone, above a table of protocol stack layers and a generic chip block diagram" style="width:100%;border-radius:8px;box-shadow:0 6px 24px rgba(0,0,0,0.35);display:block;"></a>
  <figcaption style="font-size:0.82rem;color:var(--color-text-faint);text-align:center;margin:0.6rem 0.4rem 0.2rem;line-height:1.4;">Drag the slider and the earbud comes apart; every part names its job.</figcaption>
</figure>
