quarto render index.qmd --profile python --cache-refresh --metadata engine:jupyter --to ipynb --output - > index.py.ipynb

jupytext index.py.ipynb --to py --output index.py --set-kernel python3

jupytext index.py.ipynb --to qmd --output index.py.qmd --set-kernel python3

jupytext index.py --output index.py.ipynb --execute --set-kernel python3
