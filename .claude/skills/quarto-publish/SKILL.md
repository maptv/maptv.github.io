---
name: quarto-publish
description: Known quarto render/publish failure modes on this Quarto site (maptv.github.io) and how to fix them — spurious deleted *_files/ assets, stale _freeze/.quarto cache NotFound errors, files a full-project render drops, missing site_libs bundles, and stray index.html/index.md leaking into the source tree. Load before running quarto render or quarto publish, or when a publish fails or leaves the working tree dirty.
---

## Git / render hygiene

- `quarto render`/`quarto publish` on this repo routinely produces spurious "deleted"
  changes to unrelated tracked `*_files/` image assets as a side effect of the local
  render environment. Restore only those specific known paths with a targeted
  `git checkout -- <path> ...` — never a blanket `git checkout -- .`, which would also
  discard real uncommitted work.
- If `quarto publish` errors with `NotFound: readfile '<page>/index.html'` (or a similar
  rename/readfile error) partway through, it's stale `_freeze`/`.quarto` cache state, not
  a real content problem — delete `_freeze`, `.quarto`, and any `*/index_cache` or
  `*/.jupyter_cache` directories (all gitignored, safe to remove) and retry. A `quarto`
  publish/render invocation can also fail transiently with an unrelated headless-Chrome
  error (`Could not find node with given id`) — just retry, no cache clear needed for that
  one.
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
- `project.resources` only helps for loose files under the project tree (like `asset/**`).
  It does NOT cover `site_libs/**`: those are generated per-publish from each page's HTML
  dependencies (mermaid.js/glightbox for whichever pages still need them, a
  content-addressed `bootstrap[-dark]-<hash>.min.css` per distinct compiled theme — this
  site has at least 3 distinct hashes across different pages, not one shared file), and
  that generation step has independently, repeatedly dropped files a full publish's own
  rendered pages still reference — observed on multiple separate publishes, worse right
  after a `_freeze`/`.quarto` clear but not exclusive to it. A `quarto render <single
  file>.qmd` for the specific page that needs a given bundle reliably regenerates it
  (checked into `_site/site_libs/...`) even when the full-project pass won't. To fix a
  broken publish: `grep -rho 'bootstrap-[a-z0-9]*\.min\.css\|bootstrap-dark-[a-z0-9]*\.min
  \.css' _site --include="*.html" | sort -u` to find every hash the current build actually
  needs, render whichever single pages are missing files locally to produce them, then
  `git worktree add` the gh-pages branch and copy the missing site_libs files in directly
  and push — don't just keep re-running the full publish hoping it lands clean.
- Any `quarto render`/`publish` invocation, isolated or full-project, can also leak
  alternate-format companion output (`<page>/index.html`, `<page>/index.md`, and orphaned
  `mermaid-figure-N.svg` under `<page>_files/figure-commonmark/`) directly into the source
  tree next to the `.qmd` instead of only into `_site/`. Check `git status` for stray
  untracked `index.html`/`index.md` files (`git clean -n -- '*/index.html' '*/index.md'`
  to preview, `-f` to remove) before staging anything.
