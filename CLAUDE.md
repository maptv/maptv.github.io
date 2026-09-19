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
