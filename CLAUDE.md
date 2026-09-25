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

## Content edits

- Don't touch prose in `*.qmd` files unless the change actually requires it. CSS/JS/config
  fixes are strongly preferred over rewriting article text.
- When a request quotes broken markdown syntax verbatim (e.g. a link written as
  `"text" (url)` instead of `[text](url)`), fix the escaped/underlying issue in the source
  qmd rather than treating the quote as literal prose to preserve.
