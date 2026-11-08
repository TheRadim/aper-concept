# Interaction guidelines

Principles taken from the apple-design and design-taste skills: respond on press, keep motion interruptible, animate transform/opacity, one signature move, everything readable with motion off.

## Feedback
- **Buttons:** scale 0.97 on `:active` (110 ms), lighter fill on hover, arrow nudges 4 px. The machined angle stays put.
- **Links:** underline colour shifts to gold on hover.
- **Focus:** 2 px gold outline, 4 px offset, everywhere.
- **Inputs:** fill steps lighter on hover; labels are real (visually hidden), placeholders describe content.

## Signature move: build index with preview
Pointing at a build name previews its card instantly (260 ms fade/rise); leaving the list returns to the committed build. Click or tap commits. On touch there is no hover state, so a tap both previews and commits. Gold pocket marker scales in on the committed item.

## The live thing: size finder
- Range input (native, keyboard and screen-reader accessible), thumb 30×26 px, track touch-friendly at 44 px tall.
- Every input event retargets a critically damped approach (no overshoot) from the drawing's *current* values, so dragging fast never queues or jumps.
- Size letter, explanation, table column, stack/reach labels and the SVG `aria-label` update together.
- Between two sizes, the copy says so and points to the founders rather than pretending precision.

## Entrances
Children of `[data-reveal]` rise 22 px and fade in, staggered 75 ms, once, when 12 % into view. Content is only hidden when JS has marked the document (`.js`).

## Header
Hides on scroll-down after 400 px, returns on any scroll-up. Mobile menu drops from the bar it belongs to, closes on link, on Escape (focus returns to the button).

## Accordion
Flex-basis transition 480 ms ease-in-out; text fades in after the panel has mostly opened (200 ms delay) and out first when closing, so text never reflows visibly.

## Reduced motion
`prefers-reduced-motion: reduce` removes travel (entrances become 200 ms opacity), the size finder snaps instead of morphing, and the accordion switches without animating width.

## Not done (deliberately)
No scroll-jacking, no parallax, no cursor effects, no autoplaying video in the concept. One video loop per page is planned once real footage exists (hero on Engineering).
