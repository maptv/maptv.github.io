quarto render index.qmd --profile bash --cache-refresh --metadata engine:jupyter --to ipynb --output - > temp.sh.ipynb

jupytext temp.sh.ipynb --to sh:percent --output index.sh --set-kernel bash

jupytext index.sh --to qmd --output index.sh.qmd --set-kernel bash

jupytext index.sh --to md:myst --output index.sh.md --set-kernel bash

jupytext index.sh --output index.sh.ipynb --execute --update --set-kernel bash


quarto render index.qmd --profile javascript --cache-refresh --metadata engine:jupyter --to ipynb --output - > temp.js.ipynb

jupytext temp.js.ipynb --to js:percent --output index.js --set-kernel deno

jupytext index.js --to qmd --output index.js.qmd --set-kernel deno

jupytext index.js --to md:myst --output index.js.md --set-kernel deno

jupytext index.js --output index.js.ipynb --execute --update --set-kernel deno


quarto render index.qmd --profile lua --cache-refresh --metadata engine:jupyter --to ipynb --output - > temp.lua.ipynb

jupytext temp.lua.ipynb --to lua:percent --output index.lua --set-kernel xlua

jupytext index.lua --to qmd --output index.lua.qmd --set-kernel xlua

jupytext index.lua --to md:myst --output index.lua.md --set-kernel xlua

jupytext index.lua --output index.lua.ipynb --execute --update --set-kernel xlua


quarto render index.qmd --profile python --cache-refresh --metadata engine:jupyter --to ipynb --output - > temp.py.ipynb

jupytext temp.py.ipynb --to py:percent --output index.py --set-kernel python3

jupytext index.py --to qmd --output index.py.qmd --set-kernel python3

jupytext index.py --to md:myst --output index.py.md --set-kernel python3

jupytext index.py --output index.py.ipynb --execute --update --set-kernel python3


quarto render index.qmd --profile r --cache-refresh --metadata engine:jupyter --to ipynb --output - > temp.r.ipynb

jupytext temp.r.ipynb --to r:percent --output index.r --set-kernel ir

jupytext index.r --to qmd --output index.r.qmd --set-kernel ir

jupytext index.r --to md:myst --output index.r.md --set-kernel ir

jupytext index.r --output index.r.ipynb --execute --update --set-kernel ir
