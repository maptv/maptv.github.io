quarto render index.qmd --profile javascript --cache-refresh --metadata engine:jupyter --to ipynb --output - > index.js.ipynb

jupytext index.js.ipynb --to js --output index.js --set-kernel deno

jupytext index.js.ipynb --to qmd --output index.js.qmd --set-kernel deno

jupytext index.js --output index.js.ipynb --execute --set-kernel deno
