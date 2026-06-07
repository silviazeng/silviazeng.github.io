---
title: "A Map of Italian Politics, 1300–1600"
date: 2026-05-11
tags:
  - history
  - renaissance-history
  - maps
  - italy
  - interactive
---

The Italian peninsula between 1300 and 1600 wasn't really one country. It was a shifting patchwork of duchies, republics, papal states and kingdoms — each with its own currency, army, dialect, and grudges. In any given decade, a handful of dynasties were maneuvering for advantage: the Visconti and later Sforza in Milan, the Medici in Florence, the Doges in Venice, the Popes in Rome, the Aragonese (later Spanish Habsburgs) in the south.

I built this antique-style interactive map to make that fragmentation legible. Drag the slider — or tap any of the seven snapshot years (1300, 1380, 1454, 1494, 1527, 1559, 1600) — to watch:

- **Visconti Milan** swallow most of Lombardy by the 1380s
- **Aragon** consolidate Sicily after the Vespers (1282) and pick up Sardinia
- **The French invasion of 1494** kick off the Italian Wars and shatter the Peace of Lodi
- **The Sack of Rome (1527)** mark the start of Habsburg ascendancy across the peninsula
- **The Medici** climb from a Republic of Florence to the Grand Duchy of Tuscany (1569), absorbing Siena along the way
- **Spanish dominions** — Milan, Naples, Sicily, Sardinia — emerge as a single bloc under one crown by 1559

Hover any region for the controlling entity, polity type, and a short historical note. The pattern overlays distinguish Kingdoms (crosshatch), Duchies (stipple), Republics (diagonal lines), Papal lands (cross), and free Communes (dots). Black borders fade automatically wherever two adjacent zones share the same ruler — so you can see clusters merge as dynasties consolidate.

<iframe id="italia-map-frame" src="/static/italia-politica.html" width="100%" scrolling="no" style="border:none;border-radius:8px;display:block;width:100%;max-width:68ch;height:900px;margin:1rem 0;"></iframe>
<script src="/static/italia-map-resize.js"></script>

<style>
  article p, article ul, article ol, #italia-map-frame {
    box-sizing: border-box;
    max-width: 68ch;
  }
</style>

A note on simplification: a thin band labeled "Ferrara" stands in for the entire Este territory (which historically also included Modena and Reggio); "Communes" is a catch-all for the patchwork of Bolognese signoria, Romagnol vicariates, and other small powers that defy easy single-color treatment. The Italy outline itself is hand-drawn rather than topojson-precise. It's a *cartographer's reconstruction*, not a survey — closer in spirit to a 16th-century Ortelius plate than a modern atlas.
