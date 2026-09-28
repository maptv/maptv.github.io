---
name: mermaid-diagrams
description: Gotchas and fixes for mermaid SVG diagrams on this Quarto site (maptv.github.io) — link underlining, node font sizing, per-diagram style scoping, foreignObject recentering, missing <desc> crashes, and the fixed-viewBox aspect-ratio bug. Load before editing mermaid diagrams (nav-breadcrumb or content diagrams), asset/mermaid-fix.js, asset/mermaid-desc-guard.js, asset/mermaid-viewbox.lua, or wrap_hrefs.py.
---

## Diagrams (mermaid SVGs)

- Never underline node/link text inside diagram SVGs, including nav-breadcrumb diagrams
  and content diagrams with clickable jump-link nodes. `svg.flowchart a { text-decoration:
  none; }` in `asset/style.css` covers this for any current or future diagram link class.
- Diagram text should be as large as possible without causing the text to overflow its
  node box. Don't default to a small/conservative font size — push it up and verify
  precisely (compare each node's `foreignObject div.scrollWidth` vs `.clientWidth`, not
  just a screenshot) before settling on a value.
- Each pre-rendered diagram SVG (`mermaid-format: svg`) embeds its own `<style>` block
  that re-declares rules like `.decnav-svg{font-size:...}`. If two diagrams on the same
  page share that scoping class, whichever one's `<style>` tag comes later in the DOM wins
  the cascade for *both* — silently overriding the other's font-size. Give each
  independently-styled diagram its own unique scoping class (see `wrap_hrefs.py`'s
  `rescope_id_to_class`) rather than reusing one across unrelated diagrams.
- Quarto's bundled `site_libs/quarto-diagram/mermaid-postprocess-shim.js` recenters a
  flowchart node's foreignObject using its real rendered height, but only for svgs inside
  `div.cell-output-display` (so it never reaches `{{< include >}}`-embedded diagrams) and
  it throws if any matching svg lacks a `<desc>` (aborting the whole loop). Our own
  `asset/mermaid-fix.js` redoes this generically against every `svg.flowchart` on the
  page — keep it in `include-after-body` for any page that ships mermaid diagrams.
- `mermaid-fix.js`'s recentering must stay scoped to `g.node foreignObject` only.
  Subgraph/cluster titles (`g.cluster-label`) and edge labels (`g.edgeLabels`) are
  positioned by mermaid with a fixed positive offset from the top of their box, not
  centered like a node label — applying the same correction to them shifts a cluster
  title up and out of its box instead of leaving mermaid's own placement alone.
- A cluster/subgraph title's max-width is fixed at 200px by mermaid and is NOT affected
  by `flowchart.wrappingWidth`. If a title wraps to two lines at a given font-size, the
  diagram's layout (computed for one line) doesn't reserve room for the second line and
  the wrapped text renders hidden behind the first node in the cluster. When increasing a
  diagram's font-size, check every cluster title's rendered height against
  `font-size × 1.5` (one line) — if it doesn't match, drop the font-size until it does,
  even if that's smaller than what plain nodes alone would tolerate.
- Mermaid diagrams rendered live from a code chunk, and any Observable JS cell that draws
  its own svg (`decplot`, `greplot`, `calsliders`, etc.), come out of quarto with no
  `<desc>` element at all, which is exactly the case that makes the bundled
  `mermaid-postprocess-shim.js` throw (`el.querySelector("desc").id` on a null `desc`). We
  don't control that generated file to fix it there, so `asset/mermaid-desc-guard.js` adds
  an empty `<desc>` to any `div.cell-output-display svg` missing one. This can't run on
  `DOMContentLoaded`: OJS cells render well after that (some render only in response to a
  slider drag, arbitrarily late), so a `DOMContentLoaded`-timed guard only ever catches
  diagrams that were already static HTML at parse time and still lets the shim crash on
  OJS output — tried that first, looked fixed against the static-only case, still crashed
  live. Both this guard and the shim listen for `load` instead (the same event, so
  whatever exists for one exists for the other), and this guard's script tag must be
  earlier in the generated `<head>` than quarto's own dependency scripts — same-event
  listeners fire in registration order, so being first in the document is what makes this
  one run before the shim's. It's in `include-in-header`, not `include-after-body`, for
  that reason; keep it there if `_quarto.yml`'s include order ever gets reshuffled.
- Every `mermaid-format: svg` diagram gets a fixed `width="672" height="480"` on its root
  `<svg>`, unrelated to its own content. `max-width:100%; height:auto` alone does NOT fix
  this: browsers take the intrinsic aspect ratio from an SVG's width/height *attributes*
  when both are present, not from viewBox, so every diagram scales to a 672:480 box
  regardless of its real shape, leaving large empty margins above/below (mermaid's default
  centering splits the leftover space evenly, which is also why a diagram can look
  vertically adrift/"not centered" with no horizontal asymmetry to point to).
  `asset/mermaid-viewbox.lua` (a pandoc filter, in `_quarto.yml`'s `filters:`) rewrites
  every `svg.flowchart`'s width/height to match its own viewBox right after mermaid
  generates it — for both `{{< include >}}`-embedded diagrams and ones rendered directly
  from a chunk — which is what actually makes `height:auto` behave correctly.
