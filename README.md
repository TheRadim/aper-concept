# APER Bikes — website concept

An unofficial, speculative redesign concept for [APER Bikes](https://aper-bikes.com) (Patras, Greece), by Radim Theiner, November 2026. It is not affiliated with APER and is not the APER website. Every page carries `noindex`.

**Preview:** local only for now (see Run it). Built for GitHub Pages at `/aper-concept/` once a repo exists.

## What was researched
- APER's site (home, DRYAD, About, FAQ, shop), BIKE and TOUR coverage of the DRYAD launch at Bespoked 2026, KOMPace coverage (BIKE, Bikerumor), Pole Bicycles' story as the closest machined-frame precedent. See `research/`.
- The Equator Scandinavia prototype (Astro, data-driven geometry, size finder, gh-pages deploy) as a technical reference. Inspected read-only; nothing copied. See `research/equator-reference-analysis.md`.

## Problems identified (short)
1. The homepage still presents APER as a one-bike enduro brand; the DRYAD, now on pre-order, has no homepage section.
2. Navigation mixes bikes, a technology and a 14-item shop dropdown.
3. Trust content (5-year warranty, crash replacement, made in Patras, no-returns policy) is buried in FAQ and footer.
4. Engineering is described in adjectives rather than shown.
5. Missing facts: weight, tyre clearance, lead time, test rides.
6. Stale promotions, uncaptioned gallery, mixed typography.

Full audit: `research/existing-website-audit.md`.

## Design direction
A serious, clean bike-shop site: large photography, quiet Archivo type, charcoal and off-white sections, plain rectangular buttons, spec-sheet lists and tables. The DRYAD page follows a real product-page pattern (photo left, build picker with live price and deposit split right). Interactive extras: a size finder that redraws the bike from APER's geometry table, and technical schematics of the ribs, fork and bushing. A first, more graphic version was replaced after review.

**Placeholder photo:** one APER photo (DRYAD in front of the machining centre), linked from aper-bikes.com, fills every slot. It is for the private preview only; don't publish the concept with it unless APER agrees. Change it in `src/data/media.ts`.

## Run it
```sh
npm install
npm run dev        # http://127.0.0.1:4321/aper-concept/
npm run build      # static output in dist/
```
Deploy (later): create the repo `aper-concept`, push this folder to `main` and `dist/` to a `gh-pages` branch, then set Pages to deploy from `gh-pages`. Change `base` in `astro.config.mjs` if the repo name differs. Swap the placeholder photo first.

## Pages
`/` home · `/dryad/` product page (builds, three engineering stories, size finder, geometry, specs, ordering, FAQ) · `/engineering/` process story · `/kompace/` and `/support/` short outlines so navigation works.

## Unfinished
- No real photography yet: every slot shows the same placeholder photo; each slot's alt text / `data-shot` holds the brief for its real photo (`strategy/asset-requirements.md`).
- KOMPace page is an outline; Journal not built.
- Forms are demos (no sending). Reserve buttons link to APER's existing shop.
- No CMS: production would be a WordPress block theme (recommended) or this Astro site in front of the existing WooCommerce shop.

## Claims needing founder verification (gold dots on the site)
Frame weight about 1,700 g and fork about 740 g (press figures); maximum tyre clearance; reason for no returns; demo/test rides; process step order and in-house simulation; testing standards; how APER wants to talk about tunable flex; team roles; shipping terms. Full list: `strategy/content-strategy.md`.

## Missing assets
DRYAD studio profile, loaded bikepacking hero, five macro details (ribs, fork crown, bushing, M5 mount, tool marks), founders at work, workshop process stills and video, KOMPace riding. Licences for existing Bespoked photos (Adam Gasson) and the launch video.

## Needed for production
Scope and budget agreement; decision on implementation path (design only / WordPress theme / static front); access to WordPress and the current developer; a photo shoot (Copenhagen frames, later Patras); founder review of every marked claim; Greek/English language decision; cookie, privacy and accessibility review (replace the overlay widget with real fixes).

## Sources
- APER: https://aper-bikes.com/dryad/ · https://aper-bikes.com/about-us/ · https://aper-bikes.com/faq
- BIKE: https://www.bike-magazin.de/en/bicycles/gravel-bikes/aper-dryad-gravel-bike-with-flex-rear-triangle-a-milled-sculpture-from-greece-from-1-245-euros/
- TOUR: https://www.tour-magazin.de/en/e-road-bike/gravel-bike/machined-from-solid-blocks-and-surprisingly-affordable-the-aper-dryad-cnc-gravel-bike/
- BIKE (KOMPace): https://www.bike-magazin.de/en/bicycles/mountain-bike/enduro-bikes/aper-kompace-cnc-milling-with-rising-pivot/
- Bikerumor (KOMPace): https://bikerumor.com/aper-kompace-raises-high-pivot-suspension-w-sliding-link
- Pole return: https://www.singletracks.com/mtb-gear/pole-bicycles-returns-leo-kokkonen-on-cncd-bike-frames-bankruptcy-lessons-and-emtb-prototype/

APER, DRYAD, KOMPace, RibLogic and Rising Pivot belong to APER Bikes.
