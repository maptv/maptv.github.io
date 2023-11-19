FROM mambaorg/micromamba
USER root
RUN apt update \
    && apt install -y curl \
    && rm -rf /var/lib/apt/lists/* \
    && curl -L https://quarto.org/download/latest/quarto-linux-amd64.deb -o /tmp/quarto.deb \
    && dpkg -i /tmp/quarto.deb \
    && rm /tmp/quarto.deb

USER $MAMBA_USER
COPY --chown=$MAMBA_USER:$MAMBA_USER env.yml /tmp/env.yml
RUN micromamba install -y -n base -f /tmp/env.yml \
    && micromamba clean --all --yes \
    && rm -rf /opt/conda/conda-meta /tmp/env.yml

LABEL org.opencontainers.image.source https://github.com/maptv/maptv.github.io

