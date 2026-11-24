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

## Remote and mobile sessions

- If `CLAUDE_CODE_REMOTE` is set, the session runs in a claude.ai cloud container, usually
  started from the Claude app on a phone. Edit files only when the user asks for a change
  (a question gets an answer in chat, with proposed prose, tables, LaTeX, and code output
  shown there). Once a requested change is made, commit and push it to the session's
  `claude/*` branch without waiting to be told, and add it to that branch's open PR, or
  open one if there is none (the Claude GitHub app is installed). Never push to `main` or
  `gh-pages`. The user reviews and merges the PR, and a push to `main` publishes the site
  via `.github/workflows/gh-pages.yml`.
- The cloud container has no Quarto, R, or `_freeze` cache, so it can't render the site.
  Don't offer a full render there; check math and run small snippets instead.
- In a Remote Control session on the user's computer, work in the working tree as usual,
  but leave staging, committing, and pushing to the user, who reviews changes in
  `quarto preview` first. Nothing goes to `main` unread.
- On a phone, keep replies readable on a small screen: short paragraphs, plain text,
  small tables, and LaTeX. Show proposed text before writing it to a file.
- In a terminal session on the user's computer (neither `CLAUDE_CODE_REMOTE`
  nor `CODESPACES` set, and not Remote Control), edit the working tree only.
  The user handles rendering, staging, committing, pushing, and publishing:
  `quarto preview` is already running (port 4200) and re-renders on save,
  and a zsh alias does the publish together with the git work. Don't run
  `quarto render`, `quarto preview`, or `quarto publish`, and don't run
  `git add`, `commit`, or `push`, unless asked in that turn. Reading the
  running preview (e.g. with Playwright for the mobile-layout check) and
  running small code snippets are fine.

## Codespaces

- If `CODESPACES=true`, the session runs in a GitHub codespace, usually opened
  in a browser on a public computer. The Build environment paths above don't
  apply: the shell is `/bin/bash`, and Python 3.16 is `/usr/local/bin/python3.16`
  (set as `RETICULATE_PYTHON` by the devcontainer).
- Work on a branch, never `main`. Commit and push to that branch only when
  asked in that turn; the user reviews the PR from their phone before merging.
- The user previews via the forwarded port 4200, which must stay Private.
  Don't change port visibility.
- Never print tokens or secrets in output; the screen may be visible to others.

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
- Every display equation gets an `{#eq-…}` label.
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
  A term that is useful in the text but isn't part of Dec (e.g. "days in month", dim)
  gets a tooltip, not a glossary entry.
- Day/year units in Dec articles: write "d" (linked like `[d](#d){.tool …}`) for a measured
  amount or duration after a numeral ("59 d long", "shifts by 1 to 6 d"); spell out "days"
  in relative-time phrases ("N days ago", "in N days", "days since/until", "N days before")
  and when counting specific days as items ("the first 4 days of the year"); always "1 day"
  and spelled-out numbers ("a day or two"). Years follow the same rule: "y" (linked like
  `[y](#y){.tool …}`) after a numeral ("25 to 45 y"), "years" in relative-time phrases.
  Always spell out "weeks" and "sols".
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
  a musical note); the inverse of a beat is perbeat (`þ`), not `iob`; the 400-year period
  is a quadricentennial (`qoe`, `yoq`, `doq`), not a cycle (`coe`, `yoc`, `doc`), because
  Hinnant calls it an era; the 467-day Decyther period is a hexadecimester (`doh♀`, `qoh`,
  `moh♀`, `boh`), not a cycle. A Venusian term whose acronym clashes with an Earth one
  (doh, doq, moh) is written with a ♀ subscript (`doh~♀~`) and links to a `…venus`
  glossary id (`#dohvenus`).
- The hectoday (100 days) is `ﾲ` (U+FFB2, halfwidth Hangul pieup, from 백일 and 百日宴),
  with `piﾲ`, `niﾲ`, `doﾲ` (ids `#baekil`, `#pibaekil`, `#nibaekil`, `#dobaekil`), not
  `h`, `pih`, `nih`, `doh`. `h` is the Dec hour (1/25 d) and `m` the Dec minute (1/1500 d);
  the 24-per-day hour, minute, and second are `heh` (Hipparchian equinoctial hour), `bem`
  (Birunian equinoctial minute), and `sis` (SI second, 1/86400 d); `s` (or sec) is the Dec
  second (1/90000 d). Don't use `bes`, and don't distinguish seconds with and without leap
  seconds: Dec handles leap seconds with offsets. `hms`, `hod`, `moh` still mean the
  conventional triplet.
- Symbols: the turn is `T` (its inverse is `ꓕ`, an upside-down T). The turn submultiples
  are dime `⅒`, cent `¢`, and mil `₥` (never "mill"); `₥` always gets `.mono`, and `⅒`
  gets `.iosevka` (also monospaced, and it has the glyph); `₥` is the milliturn
  everywhere, never `mt`. `m` is the Dec minute, so it is never the meter: the SI meter is
  `sim`, with prefixes and powers built on it (`ksim`, `dsim²`, `csim³`, `ksim/h` for
  kilometers per Dec hour). The micro prefix is the micro sign `µ` (U+00B5, `&micro;`);
  the Greek letter `μ` (U+03BC) is reserved for the base24 digit 11.
- Prefixes: Dec doesn't use every metric prefix or use them exactly as SI does. `k` is
  kilo (a thousand turns), never keg (the keg is z³). Tera is not used; a teraturn would
  be a "ter" with a lowercase `t`. Letters that SI uses for small prefixes keep their Dec
  meanings: `p` pent, `f` foot, `a` arcbeat, `z` zem, `y` year, `r` rose, `q` quotidie,
  not pico, femto, atto, zepto, yocto, ronto, quecto. `n` is the note for now and may
  become the nanoturn.
- The mod operator is written as a minus joined to a left floor (x − y⌊x/y⌋): in LaTeX
  `\mathbin{-\mkern-3.5mu\raise{0.073em}{\scriptstyle\lfloor}}` (binary spacing on both
  sides; a shorter floor than a real `\lfloor`, raised so the stroke meets the middle of
  its stem at minus height), never `\bmod` or `\text{ mod }`; in markdown
  `[&LeftFloor;]{.hyphen}` (drawn by `.hyphen` in `asset/style.css`), not the word "mod",
  which is freed up for other uses. Code keeps its language's own `mod`/`%`.
- Parentheses: use them in equations and prose only where they are required. Extra
  parentheses imply that they are needed, which misleads when they aren't, so don't add
  or suggest them just for clarity. The usual precedence applies (3 + 5/4 = 4.25),
  and operators of the same priority apply left to right, so `o ⌊- 1 × 10` (eq-note)
  takes the mod first.
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

- Glyphs: digits 0–9 (radix 10), ☉☿♀♁♂♃♄♅♆ = 0–8 (b9), α–ω = 0–23 (b24, so β = 1,
  δ = 3, ζ = 5, η = 6, μ = 11, ν = 12). Every glyph fills one slot, whatever its radix.
- More glyph sets: Ogham letters = 0–24 (b25, Dec hours): zero-based from the Ogham space
  mark U+1680 (written `&#x1680;` in qmd) through ᚁ = 1 to ᚘ = 24, or one-based with
  ᚙ = 25 in place of 0. Counting rods 𝍠𝍮𝍯𝍰𝍱𝍭 = 0–5 (b6, tens of Dec minutes/seconds;
  the number of horizontal strokes is the value). Zodiac signs ♈︎…♓︎⛎︎ = 0–12 (b13, woy
  ranks in dec/date), each followed by VS15 (U+FE0E) for text presentation.
- Dec hour minute second follows the same value rule: one b25, one b6, one b10, one b6,
  one b10 glyph (+ a b24 sid glyph): 1 h = 1/25 d = 40 md, 1 m = 60 s = 1/1500 d,
  1 md = 90 s.
- Value rule (applies everywhere): reading left to right, a glyph's place value is the
  place value of the glyph to its left divided by its own radix; the first slot after the
  point divides 1 d. So β in the first slot = 1/24 d, and 0000☿ = 1/9 dmd = 1 Dec s.
- Ticking tod (a live clock) uses the fixed sequence 10, 10, 10, 9, 10, 24: dd, cd, md, a
  b9 digit (tens of Dec s), a Dec-second digit, and a sid digit (1/24 Dec s). Durations,
  offsets, and static tod may put b9, b10, or b24 glyphs in any slot; the fixed sequence
  is one case of the same value rule. In these, β dd (1 heh), β00 md, and similar are fine.
- Units: a numeral is in the unit of its last glyph's slot, and dots are optional (the user
  prefers none). Slots step by 10: 1 dd, 2 cd, 3 md, 4 decimilliday (dmd), 5 cmd = beat,
  6 µd. An offset starts in the dd slot, so its glyph count sets its unit, and leading
  zeros matter: tod−δ = tod−125 (3 heh); a 1-bem offset is tod−000♄η (5 glyphs, cmd).
  The kind of glyph shows the radix, so a doy plus a tom needs only one dot:
  227.375♀7 = 227.37530. This convention is intentional; don't push back on it.
- Examples: 1 heh = β dd = 41♄ dmd = 41.♄ md; 3 heh = δ dd = 125 md; 1 bem = ♄η cmd
  (as a fixed tod: 000♄2ν); 1 Dec s = ☿ cmd; 1 SI s = ☿β µd.
- Shortcut: a glyph right after a decimal digit is worth glyph × 10 / radix of its slot's
  unit (19υ ds = 190 + 19 ÷ 2.4 = 19 SI s; 41♄ dmd = 410 + 6 × 10/9). After another
  non-decimal glyph, use the value rule instead: ♄η cmd = 6/9 + 6/216 md, not
  66.67 + 2.5 cmd. Check with nonzero letters, since α and ☉ hide errors.
- After the first non-decimal glyph, digits don't convert one for one: β00 md = 41.67 md,
  and 375♀7 = 37530 cmd only because 27 Dec s = 30 beats (375♀8 = 37531.1 cmd). A numeral
  that contains a letter isn't a whole number of its unit.
- sid digit = (s − sis) × 24 mod 24 = sis mod 24 (round down for a fraction of an SI
  second). s = sis / 0.96 = ds / 10, and sis = 0.96 s = 0.096 ds.
- Offsets are submultiples of a day: 0 ≤ offset < 1 d. An offset starts in
  the dd slot, so by the value rule every glyph is a fraction of 1 d, and
  even all-maximal glyphs (ω♆…, 99…) only approach 1 d. Whole-day shifts go
  in the doy, never the offset (hence no negative offsets: UTC−5 → +19 h).
- To convert an offset to days, divide its value in its unit by 10^L, where
  L is its glyph count. Read δ / 10 as δ dd (= 1.25 dd) ÷ 10 = 0.125 d, not
  as the glyph's face value 3 ÷ 10. So δ dd = 3/24 d = 125 md: δ / 10 =
  125 / 1000. This is the only consistent reading; don't flag it as
  ambiguous or wrong.
