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
- When suggesting that a citation is missing, supply the citation itself as a ready-to-paste
  entry in the format of `asset/ref.yml` (the site bibliography; `issued` uses Dec
  `literal: year+day` dates), not just "add a citation".
- Citation style is intentional: narrative `-@key` when the author is named in the sentence,
  parenthetical `[@key]` when not. Don't flag the mix as inconsistent; do flag a sentence that
  breaks this rule.
- Dec and ISO 8601 both use astronomical year numbering (1 BC = year 0000, earlier years
  negative). Treat ISO 8601 as the reference for Gregorian dates.
- Dec articles deliberately coin or repurpose terms (e.g. "ISO month date" as the counterpart
  of "ISO week date", "half domino" for the 0–6 dow glyphs). Flag a term only if it is wrong
  or ambiguous in context, not merely nonstandard.
- Acronyms in Dec articles are explained by tooltips and links to the glossary at the end
  (`asset/_glossary.qmd`), so don't suggest per-section "terms introduced" recaps. Do check
  that every `[abbr](#id)` link actually has a glossary target.
- Day/year units in Dec articles: write "d" (linked like `[d](#d){.tool …}`) for a measured
  amount or duration after a numeral ("59 d long", "shifts by 1 to 6 d"); spell out "days"
  in relative-time phrases ("N days ago", "in N days", "days since/until", "N days before")
  and when counting specific days as items ("the first 4 days of the year"); always "1 day"
  and spelled-out numbers ("a day or two"). Never use "y" as a unit symbol, since `y` is the
  Year variable ("Year y", "y+1"); always spell out "years" (and "weeks", "sols").
- When a review comment argues about science (cosmology, astronomy, climate), base it on
  current evidence and on what the sentence actually claims, and say why.
- When a request quotes broken markdown syntax verbatim (e.g. a link written as
  `"text" (url)` instead of `[text](url)`), fix the escaped/underlying issue in the source
  qmd rather than treating the quote as literal prose to preserve.
