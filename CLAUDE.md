# Project preferences

Durable preferences for working on this Quarto site (maptv.github.io). Keep this file
updated as new preferences come up; don't let it grow into a changelog.

## Build environment

- Use bash (`/opt/homebrew/bin/bash`, kept current with Homebrew), never zsh, for every
  command, script, and build. The user's `.zshrc` is heavily customized for interactive use.
  `CLAUDE_CODE_SHELL` in `~/.claude/settings.json` sets this; if a session still reports
  zsh, wrap commands in `/opt/homebrew/bin/bash -c '…'`.
- The site is built with Python 3.16 (`/usr/local/bin/python3`). This is a deliberate
  choice: published code such as the dec/time `sincost` example imports `math.sinpi` and
  `math.cospi`, which exist only in Python 3.16+. Don't rewrite that code for older Pythons.
- Python cells in knitr-engine pages run through reticulate. The dec/time Python code needs
  `export RETICULATE_PYTHON=/usr/local/bin/python3` to run (it's in `~/.zshrc`, which bash
  doesn't read, so export it in the bash command that renders). The first `python3` on
  `PATH` is still miniforge's 3.15, so don't call bare `python3` to check build behavior;
  use `/usr/local/bin/python3` or `reticulate::py_config()`.
- The root `_quarto.yml` sets `freeze: true` and `cache: true`, so a project render reuses
  the frozen output and doesn't rerun the code. The variable matters only when that code
  actually reruns, e.g. when dec/time is rendered on its own or its freeze is cleared.

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
  independently of `html`'s clipping. Both are set in `asset/style.css`. On `body` use
  `overflow-x: clip` (with `hidden` only as a fallback line before it), never `hidden`
  alone: `hidden` on both `html` and `body` turns `body` into a scroll container, which
  breaks the sticky margin TOC (it scrolls away with the page instead of staying in view).

## Article structure (dec, dec/date, dec/time)

- `index.qmd` holds only text, tables, tabsets, equations, and small OJS input cells that
  have no plot of their own. Plot cells (plus the inputs that drive them) go in `_*.qmd`
  partials pulled in with `{{< include >}}`; shared OJS definitions and CSS go in the
  article's `_index.qmd`, included at the end of `index.qmd`.
- An OJS name may be defined only once across `index.qmd` and everything it includes;
  a second definition is a runtime error.
- Every display equation gets an `{#eq-…}` label, and consecutive equations are wrapped
  in `::: {.equationgroup #equationgroupNN}`, as in dec/date.
- Single range inputs use `//| class: slider` so they share the /dec slider layout.

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
- Glossary links and backlinks are not prose changes: adding or fixing them (linking a bare
  `[mj]{.tool …}` as `[mj](#mj)`, or putting a backlink id on a term's first use) is fine
  even when told not to alter the text. Glossary work is delegated to Claude. Convention:
  the text links an abbreviation to its glossary entry (`#mj`), the entry links back to
  the term's first use on the page, which carries the long id (`{#millijing .tool …}`),
  and `asset/glossary.js` sends a backlink to another article when the page lacks it.
- Day/year units in Dec articles: write "d" (linked like `[d](#d){.tool …}`) for a measured
  amount or duration after a numeral ("59 d long", "shifts by 1 to 6 d"); spell out "days"
  in relative-time phrases ("N days ago", "in N days", "days since/until", "N days before")
  and when counting specific days as items ("the first 4 days of the year"); always "1 day"
  and spelled-out numbers ("a day or two"). Never use "y" as a unit symbol, since `y` is the
  Year variable ("Year y", "y+1"); always spell out "years" (and "weeks", "sols").
- Plurals in Dec articles: acronyms are never pluralized in the text, but their tooltip
  shows the plural expansion when the context is plural ("3 [tzo](#tzo)" with tooltip
  "time zone offsets", never "tzos"). Zem is itself an acronym (zone equatorial meter), so
  it never takes an "s", prefixed or not: "2 kilozem" means 2 thousand zone equatorial
  meters. Taur (𝜏r) and omegar (ωr) are readings of formulas, so they are invariable too:
  "2 kilotaur" is 2000𝜏r, never "kilotaurs" or "milliomegars". Transliterated foreign
  words are also invariable: jīng, wěi, and xún never take an "s". Naturalized English
  words with Latin or Greek roots (turn, beat, perbeat, degree) pluralize normally.
- Acronym case: acronyms Dec coins are all lowercase (doy, tod, tzo); external acronyms
  keep their standard form (UTC, HSL, HSV, RGB, ISO, JDN, BMI). This applies to link text
  and tooltips, not to anchors like `#utc`. Case can tell them apart: Dec's bpm (beats
  per milliday) vs. the external BPM (beats per minute).
- Minus vs. negative: in prose, the binary minus is `&minus;` (as wide as a plus sign in
  every font) and the unary negative sign is a plain hyphen (`-365`), matching
  `\text{x} - \text{y}` vs. `\text{-y}` in LaTeX. Don't use `[-]{.mono}`.
- Retired names: longitude is in wěi (`w`, `dw`, `mw`), not parallels/λ; latitude is in
  jīng (`j`, `dj`, `mj`), not meridians (`m`, `mm`) or φ, but geographic terms like "prime
  meridian" and "quarter meridian" stay; "parallel" is fine for explaining what a wěi is,
  but avoid "lines of longitude/latitude", since Dec measures longitude with lines of
  latitude and vice versa; days in the year is `syl`, not `n` (the glossary's `n` is
  a musical note); the inverse of a beat is perbeat (`þ`), not `iob`.
- Dec has no negative time zone offsets: the international date line and the prime meridian
  coincide, so a negative UTC offset becomes a positive Dec offset by adding 1 day. A
  holiday tied to a Gregorian dom or dow therefore lands 1 day later in the Americas.
  Christmas is d299 in most of the world but d300 in the Americas, and US Thanksgiving falls
  on d267–d273, not d266–d272. When checking such dates, apply the offset before calling
  them off by one. This mismatch comes from negative UTC offsets, not a weakness in Dec. Dec
  meets people where they are by adjusting dom/dow to their offset, so don't present it as
  a Dec drawback.
- When a review comment argues about science (cosmology, astronomy, climate), base it on
  current evidence and on what the sentence actually claims, and say why.
- When a request quotes broken markdown syntax verbatim (e.g. a link written as
  `"text" (url)` instead of `[text](url)`), fix the escaped/underlying issue in the source
  qmd rather than treating the quote as literal prose to preserve.

## Mixed-radix numerals (dec/time)

- The tom digits after the doy are radix 10, 10, 10, 9, 10, 24: dd, cd, md, a b9 digit
  (☉☿♀♁♂♃♄♅♆ = 0–8, tens of Dec seconds), a Dec-second digit, and a b24 sid digit
  (α–ω = 0–23, 1/24 Dec s). Each glyph fills one decimal slot and is worth the digit to its
  left divided by its own radix.
- The user prefers numerals without a dot, in the unit of the last glyph's slot. Slot names
  step by 10 (d, dd, cd, md, decimilliday, cmd = beat, µd; s, ds), so a dot can go anywhere
  or nowhere: 375♀7 cmd = 3753 decimillidays = 375.3 md = 0.3753 d. The kind of glyph
  shows the radix, so a doy plus a tom needs only one dot: 227.375♀7 = 227.37530. This
  convention is intentional; don't push back on it as nonstandard.
- In its slot's unit a letter is worth letter × 10 / radix: 19υ ds = 190 + 19 ÷ 2.4 =
  197.92 ds = 19 SI s, and 41♄ decimillidays = 410 + 6 × 10/9 = 1 h. Check formulas with a
  nonzero letter, since α and ☉ hide errors (a letter ÷ 24 in ds is off by a factor of 10).
- After the first non-decimal glyph, digits don't convert one for one: 375♀7 = 37530 cmd
  only because 27 Dec s = 30 beats (375♀8 = 37531.1 cmd). A numeral that contains a letter
  isn't a whole number of its unit.
- sid digit = (s − sis) × 24 mod 24 = sis mod 24 (round down for a fraction of an SI
  second). s = sis / 0.96 = ds / 10, and sis = 0.96 s = 0.096 ds.
