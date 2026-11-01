#!/usr/bin/env bash
set -euo pipefail
# Python 3.16 (math.sinpi/cospi) built from source; enable Codespaces
# prebuilds so this runs once, not on every start.
sudo apt-get update
sudo apt-get install -y build-essential libssl-dev zlib1g-dev \
  libbz2-dev libreadline-dev libsqlite3-dev libffi-dev liblzma-dev
curl -fsSL https://pyenv.run | bash
export PYENV_ROOT="$HOME/.pyenv" PATH="$HOME/.pyenv/bin:$PATH"
V=$(pyenv install --list | grep -E '^\s*3\.16' | tail -1 | tr -d ' ')
pyenv install "$V"
sudo ln -sf "$PYENV_ROOT/versions/$V/bin/python3.16" /usr/local/bin/python3.16
python3.16 -m pip install -r requirements.txt
Rscript -e 'install.packages(c("knitr","rmarkdown","reticulate"), repos="https://cloud.r-project.org")'
npm ci
