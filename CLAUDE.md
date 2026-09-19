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
- A full-project render right after clearing those caches has, at least once, silently
  dropped ~180 files from the built site with no error: the site-wide mermaid.js/
  glightbox bundles (breaking every *live*-rendered mermaid diagram and image lightbox,
  not just this repo's pre-rendered ones), `asset/cite.html`, several tracked images, and
  a stale-but-still-referenced bootstrap theme CSS hash variant. A second full render
  right after can silently produce the *same* omissions again — this isn't fixed by
  retrying `quarto render`/`quarto publish` alone. After any publish that follows a cache
  clear, verify before trusting it: `diff <(git ls-tree -r --name-only <last-good-gh-pages-
  commit>) <(git ls-tree -r --name-only <new-commit>)` and check every removed path either
  (a) has no corresponding source file on `main` (genuinely stale, fine to lose) or (b)
  is truly unreferenced by any current page. Anything else, restore directly by extracting
  it from the last known-good gh-pages commit or from `main` — don't rely on a re-render
  to bring it back.
