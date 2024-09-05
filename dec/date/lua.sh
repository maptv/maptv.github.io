quarto render index.qmd --profile lua --cache-refresh --metadata engine:jupyter --to ipynb --output - > index.lua.ipynb

jupytext index.lua.ipynb --to lua --output index.lua --set-kernel xlua

jupytext index.lua.ipynb --to qmd --output index.lua.qmd --set-kernel xlua

jupytext index.lua --output index.lua.ipynb --execute --set-kernel xlua
