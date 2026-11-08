# Audit — aper-bikes.com (8 Nov 2026)

Tone for sharing with APER: constructive. Their developer built a working shop; the issues are mostly structure and content, not code. Don't present this as "your site is bad".

## Summary

The site sells two bikes and spares from one WordPress/Elementor + WooCommerce install. The **Dryad page (Sep 2026) is clearly the best page** — it has a hero, real specs, full prices and geometry. The homepage and the rest of the site lag behind: they still present APER as a one-product enduro brand from 2023.

## What works
- Prices, full component specs and geometry are public (rare and valuable).
- Dryad page has a sensible order: hero → story → pre-order → builds → specs → construction → geometry.
- Strong real photo: gold Dryad in front of the machining centre.
- Warranty (5 yrs) and crash replacement exist.

## Problems, by severity

### 1. Homepage doesn't say what APER is today
- Homepage copy still frames APER as an enduro / Rising Pivot brand; the Dryad (the product currently on pre-order) only appears as gallery images, with no section or call to action. [observed via page text, verify visually]
- Stale promotion "until October 5 2024" still visible alongside a Black Friday banner with no year.
- "Watch our official launch video" repeated three times, no thumbnail.
- ~27-photo gallery with no captions; filenames as labels.

### 2. Navigation mixes products, technologies and shop
`Home · KOMPace · Rising Pivot · Dryad · Shop(14 items with thumbnails) · About · FAQ · Contact`. A visitor can't tell which are bikes. The shop dropdown puts a €12,969 bike next to a €15 mud cover.

### 3. Trust information is buried
Warranty, crash replacement, "made in Patras", no-returns policy and shipping live in FAQ/footer. For a €1–6k direct purchase from an unknown brand, these are primary content.

### 4. Engineering is described, not shown
RibLogic and the monolithic fork are explained in text; the only RibLogic image is an 840×260 crop. No diagram of the load path, no process sequence, no cross-section.

### 5. Information gaps on Dryad
Weight (press says ~1,700 g frame, 740 g fork — not on site), tyre clearance, finish options, lead time per build, test-ride options, how the bushing is serviced.

### 6. Pre-order flow friction
"Reserve" goes to a €400 product; build choice happens later "in the shop". The visitor can't see in one place: chosen size + build + total + deposit + what happens next.

### 7. Design & typography
Mixed type (serif display, tracked caps, condensed nav), centered body text, many tiny uppercase labels, inconsistent brand casing (APER / Aper). Mobile hero text wraps awkwardly; header takes ~15% of mobile viewport.

### 8. Technical / accessibility
- Third-party overlay widget (UserWay) + cookie plugin + Elementor = heavy page.
- `/el/` path with English-only content.
- Images lack descriptive alt text; geometry diagram alt is "bike-measurements".
- Duplicate header/cart elements in DOM.

## Quick wins (no redesign needed — good opener for the relationship)
1. Put the Dryad on the homepage; remove the 2024 promo.
2. Move warranty + crash replacement + "machined in Patras" next to every price.
3. Publish weight and tyre clearance.
4. Caption the gallery; real alt text.
5. Rename nav: Bikes (Dryad, KOMPace) · Engineering · About · Contact; Spares under the shop.
