# Component inventory

| Component | File | Notes for WordPress port |
|---|---|---|
| Layout: concept bar, header, footer | `src/layouts/Layout.astro` | Header hides on scroll-down, returns on scroll-up. Footer wordmark built from four blocks. Remove the concept bar for production. |
| Bike drawing | `src/components/Bike.astro` + `src/lib/bike.ts` | Draws the DRYAD from the geometry table. Same code runs in the browser for the size finder. Becomes a small JS module + shortcode/block. |
| Photo slot | `src/components/Slot.astro` | Placeholder whose caption is the shot brief. Replace with `<img>` / `<picture>`; `shape="pocket"` keeps the triangular mask. |
| Process accordion | `src/components/Accordion.astro` | Horizontal on desktop, stacked on phone. Real buttons with `aria-expanded`. |
| Build index with preview | `dryad.astro` (`[data-builds]`) | Hover previews, click commits; one card visible. Data from `src/data/dryad.ts`. |
| Size finder + geometry table | `dryad.astro` (`[data-sizer]`) | Range input → size → redraw + highlight column. Works without JS as a plain table. |
| Engineering schematic | `dryad.astro`, `engineering.astro` | Inline SVG, labelled; to be replaced or joined by macro photography. |
| Two-field product split | `index.astro` (`.bikes`) | Two flat fields with price and action. |
| Trust tiles | `index.astro` (`.tiles`) | Figure on a colour tile, name and fact beneath. |
| Inset about panel | `index.astro` (`.about`) | Pocket-masked portrait. |
| Coupon form | `index.astro` (`.coupon`) | Demo only; wire to WP form plugin or mailto. |
| Tabbed FAQ cards | `dryad.astro` (`[data-cards]`) | One open at a time, tab steps right per card. |
| Reserve steps | `dryad.astro` (`.steps`) | Order expressed by position and tone, gold field. |
| Verify dot | `.verify` | Gold dot with a tooltip marking claims for founder sign-off. Delete before launch. |

## Data
`src/data/dryad.ts` holds geometry, builds, prices, deposit and press-reported facts. In WordPress this maps to one ACF options group or a JSON file the theme reads, so prices change in one place.
