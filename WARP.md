# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview
This repo is a **Quarto website**. The primary configuration is `_quarto.yml`.

Key behaviors from `_quarto.yml`:
- The project is `type: website`.
- Rendering is restricted to `"**/index.qmd"` (`project.render`), so most pages live in a directory as `index.qmd`.
- Site-wide caching/freezing is enabled (`execute.freeze: true`, `cache: true`), so Quarto may reuse `_freeze/` artifacts.
- A post-render hook runs `asset/date.py`.

Generated output:
- `_site/` is the rendered website output (not tracked).

Node artifacts:
- `package.json` and the checked-in `node_modules/` are only used to vendor `@github/copilot-language-server` (there are no npm build scripts for the site itself).

## Common commands

### Quarto
Run these from the repo root.

- Verify tooling:
  - `quarto check`

- Local dev server (live reload):
  - `quarto preview`

- Full site build:
  - `quarto render`

- Render a single page:
  - `quarto render path/to/index.qmd`

- Clean build artifacts (useful if freeze/cache causes stale output):
  - `rm -rf _site _freeze`

### Tests / linting
There is no dedicated test or lint runner configured in this repo; the primary validation step is a successful render:
- `quarto render`
- For quicker feedback, render just the page you changed: `quarto render path/to/index.qmd`

### Python (for render scripts / notebooks)
CI installs Jupyter and `requirements.txt`.

- Install deps:
  - `python3 -m pip install -r requirements.txt`
  - `python3 -m pip install jupyter`

Notes:
- `asset/date.py` imports `bs4` (BeautifulSoup). If you run `quarto render` locally and hit an import error, install:
  - `python3 -m pip install beautifulsoup4`

### R (knitr / renv)
CI sets up R and uses `renv.lock`.

- Restore the R environment:
  - `R -q -e 'renv::restore()'`

## High-level architecture

### Content vs. site plumbing
- Content pages are mostly `*/index.qmd` and are wired into nav via `_quarto.yml` (`website.sidebar.contents`).
- `asset/` contains site-wide assets:
  - SCSS/theme overrides (`asset/light.scss`, `asset/dark.scss`)
  - small HTML includes injected via `include-after-body` (e.g. `asset/stamp.html`, `asset/cite.html`, `asset/tooltip.html`)
  - JS utilities (`asset/stamp.js`, `asset/cite.js`) and other static assets (images, SVGs)

### “Dec date/time” pipeline (cross-cutting logic)
Several parts of the site rewrite dates/times into the project’s custom `year+day` / decimal-time formats:
- **Per-page published date**: `asset/date.lua` is a Quarto Lua filter that rewrites the document `Meta.date`.
- **Navbar live timestamp**: `asset/stamp.js` (loaded via `asset/stamp.html`) injects/updates the date/time elements in the navbar.
- **Citation block tweaks**: `asset/cite.js` (loaded via `asset/cite.html`) post-processes rendered citation text.
- **Listing page post-processing**: `asset/date.py` runs as a Quarto `post-render` script and edits `_site/list/index.html` to rewrite listing metadata (e.g. file-modified timestamps, reading time).

When changing date/time formatting, you often need to coordinate edits across multiple files above.

### Quarto extensions
Vendored extensions live in `_extensions/quarto-ext/` (tracked in git):
- `fontawesome/`: adds an `fa` shortcode (Lua) for HTML/PDF.
- `include-code-files/`: a Pandoc Lua filter that allows code blocks to include external files via an `include` attribute.

### Multi-language notebook profiles
The repo includes Quarto profile files like `_quarto-python.yml`, `_quarto-julia.yml`, `_quarto-lua.yml`, etc. These set up Jupyter kernels/engines for notebook-style outputs.

## CI / deployment

- GitHub Pages build/publish: `.github/workflows/gh-pages.yml`
  - Sets up Quarto, installs R (with renv), installs Python deps, then publishes to the `gh-pages` branch.
  - Also pushes the `gh-pages` branch to a GitLab remote.

- Quarto Pub publish: `.github/workflows/quarto-pub.yml`
  - Runs after GitHub Pages deployment completes, checks out `gh-pages` into `_site/`, and publishes to Quarto Pub without re-rendering.

Publishing targets are defined in `_publish.yml` (Netlify + Quarto Pub).