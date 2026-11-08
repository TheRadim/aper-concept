# Design system

Everything lives in `src/styles/global.css` as custom properties. Components use tokens only.

## Direction (revised 8 Nov, after review)
Serious, clean bike shop. Photography carries the pages; type and layout stay quiet. Plain rectangular buttons (2 px radius), hairline rules for lists and tables, dark and light sections alternating. Gold only appears in the bike drawings and verification dots. The rib-pocket shape survives only inside the technical schematics, where it belongs. One placeholder photo (APER's DRYAD workshop shot, linked from aper-bikes.com) fills every photo slot until the shoot; each slot's `data-shot`/alt text holds the brief for its real photo.

The token tables below describe the first version; current values live in `src/styles/global.css` (ink #141516, paper #f4f4f2, Archivo at normal width, display 44–92 px).

## Colour
| Token | Value | Role |
|---|---|---|
| `--shop` | #111214 | dark ground, ink on light |
| `--shop-2` / `--shop-3` | #1c1e21 / #26292d | surface steps on dark |
| `--alu` | #e4e5e1 | light ground |
| `--alu-2` / `--alu-3` | #d6d8d3 / #c6c9c3 | surface steps on light |
| `--on-shop` / `--on-shop-muted` | #eceeea / #a7abae | text on dark (16.1:1 / 8.1:1) |
| `--on-alu` / `--on-alu-muted` | #111214 / #50555a | text on light (14.8:1 / 6.0:1) |
| `--gold` | #e2b23a | accent: primary action, active state, frame in drawings |

Rules: one accent. Gold is a fill with dark text (9.5:1), never text on aluminium. Surfaces separate by tone steps, not lines; the only lines are inside tables and technical schematics.

Sections alternate `.on-shop` and `.on-alu`; each class re-binds `--muted`, `--field`, `--field-2`, `--ink`, so components work on either ground.

## Type
Archivo Variable (OFL, self-hosted via @fontsource), weight 100–900 and width 62–125%.

| Step | Size | Setting |
|---|---|---|
| Display (`h1`) | 64–184 px | wdth 78, wght 640, −0.045em, leading 0.88 |
| Head (`h2`) | 40–80 px | wdth 78, −0.03em, leading 0.96 |
| Lead / `h3` | 21–28 px | wdth 90, −0.012em |
| Body | 17–19 px | wdth 100, leading 1.55 |
| Small | 14 px | captions, notes |

Prices and figures use the display setting at head size plus `tabular-nums`.

## Space
`--margin` 20–48 px (one pair of outer margins everywhere); 12-column grid with `--gap` 16–28 px; `--section` 96–200 px between sections.

## Motion tokens
`--ease-out: cubic-bezier(.23,1,.32,1)`, `--ease-in-out: cubic-bezier(.77,0,.175,1)`, press 110 ms, UI 220 ms, swap 260 ms, reveal 700 ms. Transform and opacity only, except the accordion's flex-basis.
