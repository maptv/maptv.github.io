---
name: mathjax-numbering
description: Why asset/math.js decrements MathJax's 1-based mjx-eqn glyph IDs to match this Quarto site's 0-based crossref numbering, and why the fix must hook MathJax.startup.promise instead of DOMContentLoaded. Load before editing asset/math.js, asset/crossref.js, the number-offset config, or equation-numbering behavior.
---

## Math (MathJax equation numbers)

- Our crossref numbering (`asset/crossref.js`, driven by `number-offset: -1`) is 0-based,
  but MathJax's own equation-number glyphs (`mjx-mtd[id^="mjx-eqn:"]`) are always 1-based
  with no config knob to change the starting point. `asset/math.js` decrements each glyph
  to match.
- That decrement can't run on `DOMContentLoaded`: MathJax's combined-component script is
  loaded `defer`, and `math.js` itself is a plain synchronous `<script src>` sitting earlier
  in the body, so it always executes before MathJax's own script has even run, let alone
  finished asynchronously typesetting the page and creating the `mjx-eqn:` elements —
  querying for them at that point finds nothing and silently no-ops (this shipped broken
  for a while with nobody noticing because the in-text crossref numbers, which *are*
  0-based, looked correct on their own). Fixed by polling for `window.MathJax.startup` to
  exist and hooking the fix onto `MathJax.startup.promise.then(...)`, which resolves once
  the initial page typeset is actually done.
