# ---
# jupyter:
#   jupytext:
#     text_representation:
#       extension: .r
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.16.4
#   kernelspec:
#     display_name: R
#     language: R
#     name: ir
# ---

# %% [markdown]
# # Ordinal date
#
# \| [Martin Laptev]()  
# 2024+192
#
# My site is full of dates in the `year+day` format. The major advantage
# of this format is that the `day` component can unequivocally identify
# any date and time in a given year and thus can replace months, days of
# the month, hours, minutes, and seconds. In essence, the `day` number can
# To create all of the dates, I use three different programming languages:
# Python for the [listing page](../../list), Lua for the Published date at
# the top of each article, and JavaScript for the citation information at
# the bottom of each article.
#
# To test the code, I will create a separate Quarto markdown (`qmd`) file
# for each of these 3 programming languages and
# [embed](https://quarto.org/docs/authoring/notebook-embed.html#overview)
# them into this `qmd` file.
#
# # R

# %% tags=["r", "func"]
unix2doty <- function(unix) {
  dote = unix / 86400 + 719468
  cykl = ifelse(
    dote >= 0, dote,
    dote - 146096
  ) %/% 146097
  dotc = dote - cykl * 146097
  yotc = (
    dotc - dotc %/% 1460
    + dotc %/% 36524
    - dotc %/% 146096
  ) %/% 365
  c(
    yotc + cykl * 400,
    dotc - (yotc * 365
      + yotc %/% 4
      - yotc %/% 100
))}

# %% tags=["r", "out0"]
unix2doty(1728000000)

# %% tags=["r", "out1"]
unix2doty(1890000000)
