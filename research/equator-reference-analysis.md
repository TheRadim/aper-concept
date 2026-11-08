# Equator reference analysis

Repo: `TheRadim/equator-scandinavia`, branch `codex/website-prototype`, folder `website/` (deployed to gh-pages). Inspected read-only in a temporary clone; nothing modified. APER lives in its own separate repository — architectural ideas are reused, files are not copied.

## Stack
- **Astro 7**, `output: "static"`, `base` path for GitHub Pages, `build.assets: "assets"`.
- Tailwind v4 via Vite plugin (but most styling is a hand-written 1,000-line `global.css` with tokens).
- Inter Variable via @fontsource. TypeScript. Prettier.
- Data-driven: `src/data/bikes/catalog.ts`, `details.ts` (geometry), `site.ts`; pages generated from data (`bikes/[slug].astro`).
- Components: `GeometryTable`, `SizeFinder`, `Configurator`, `InquiryForm`, `Gallery`, `Photo`, `Price`, `StatusBadge`…
- Ops: GitHub Actions build → push `dist/` to `gh-pages`; `PUBLIC_ALLOW_INDEXING` env toggles `noindex`; OG image generation; sitemap/robots routes.

## Patterns worth reusing (as ideas)
| Pattern | In Equator | For APER |
|---|---|---|
| Geometry as typed data | `details.ts` drives table + finder | Same, with APER's published table |
| Size finder from rider-height ranges | height + inseam | Height only (APER publishes height ranges, no inseam data) and it *redraws the bike* |
| Motion tokens | `--ease-out cubic-bezier(.23,1,.32,1)`, durations 120–700 ms | Same discipline, own values |
| Fixed small type scale | 12/14/16/18 | Own scale, ≥13 px |
| noindex until approved | env flag | Hard-coded `noindex` — it's a concept |
| Static build → gh-pages | Actions workflow | Same, simpler (no stock scraping) |

## Deliberately different
- **Light, retail-catalogue Equator vs dark/aluminium APER.** Equator = white, Inter, product grid, cart. APER = charcoal + machined aluminium + anodised gold, Archivo (variable width) with condensed display.
- **No cart / multi-currency / stock.** APER sells two bikes; the conversion is "reserve" or "ask the founders".
- **No Tailwind.** Plain CSS with tokens — one less dependency for whoever maintains it (possibly the current WordPress developer).
- Equator's components are catalogue components; APER's are story components (process sequence, load-path diagrams, generated bike drawing).
