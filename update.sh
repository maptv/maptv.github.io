#!/bin/bash
git add . && \
git commit --reuse-message --reset-author && \
git push origin main
