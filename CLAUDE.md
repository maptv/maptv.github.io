# Project preferences

Durable preferences for working on this Quarto site (maptv.github.io). Keep this file
updated as new preferences come up; don't let it grow into a changelog.

## Mobile layout

- The page body must never be horizontally scrollable on mobile devices. This is a hard
  requirement, not a nice-to-have — verify with `document.body.scrollWidth` vs
  `window.innerWidth` at a narrow viewport (~380–430px), not just a visual glance.
- Other individual elements (equations, wide tables, code blocks) are allowed to scroll
  horizontally *within themselves* (e.g. via `overflow-x: auto` on their own wrapper) when
  their content is genuinely wider than the page. That's fine — it's only page-level side
  scrolling that must never happen.
- `overflow-x: hidden` on `<html>` alone is not sufficient to guarantee this — `<body>`
  needs it too, since a descendant's escaped overflow can inflate `body`'s scrollable area
  independently of `html`'s clipping. Both are set in `asset/style.css`.

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

## Content edits

- Don't touch prose in `*.qmd` files unless the change actually requires it. CSS/JS/config
  fixes are strongly preferred over rewriting article text.
- When a request quotes broken markdown syntax verbatim (e.g. a link written as
  `"text" (url)` instead of `[text](url)`), fix the escaped/underlying issue in the source
  qmd rather than treating the quote as literal prose to preserve.

## Git / render hygiene

- `quarto render`/`quarto publish` on this repo routinely produces spurious "deleted"
  changes to unrelated tracked `*_files/` image assets as a side effect of the local
  render environment. Restore only those specific known paths with a targeted
  `git checkout -- <path> ...` — never a blanket `git checkout -- .`, which would also
  discard real uncommitted work.
- If `quarto publish` errors with `NotFound: readfile '<page>/index.html'` (or a similar
  rename/readfile error) partway through, it's stale `_freeze`/`.quarto` cache state, not
  a real content problem — delete `_freeze`, `.quarto`, and any `*/index_cache` or
  `*/.jupyter_cache` directories (all gitignored, safe to remove) and retry.
- A full-project `quarto render`/`publish` deterministically drops any file it can't prove
  is referenced from a rendered page — this is not cache-clear-specific, it reproduced on
  every single full render tried in one session, dropping the same ~70 files every time:
  `asset/cite.html` (included by 4 pages' citations), several tracked images/fonts/data
  files, and (transiently, since our own mermaid changes made these legitimately
  unreferenced too) some old commonmark-format PNGs. **Fixed**: `project.resources` in
  `_quarto.yml` now force-includes `asset/**` and the couple of stray top-level files this
  actually bit, so quarto always copies them regardless of reference detection. If a
  *new* file outside `asset/` goes missing from a future deploy the same way, add its path
  (or its directory, as a glob) to that `resources:` list rather than special-casing it —
  don't rely on quarto's own detection ever catching it.
- Before trusting any full-project publish, it's still worth a spot check:
  `diff <(git ls-tree -r --name-only <last-good-gh-pages-commit>) <(git ls-tree -r
  --name-only <new-commit>)`, and for anything removed, confirm it either (a) has no
  corresponding source file on `main` (genuinely stale, fine to lose) or (b) is truly
  unreferenced by any current page — otherwise add it to `project.resources` and
  republish, don't just manually patch the one deploy.
- If `quarto publish` errors with `NotFound: readfile '<page>/index.html'` (or a similar
  rename/readfile error) partway through, it's stale `_freeze`/`.quarto` cache state, not
  a real content problem — delete `_freeze`, `.quarto`, and any `*/index_cache` or
  `*/.jupyter_cache` directories (all gitignored, safe to remove) and retry. A `quarto`
  publish/render invocation can also fail transiently with an unrelated headless-Chrome
  error (`Could not find node with given id`) — just retry, no cache clear needed for that
  one.
