---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.16.4
kernelspec:
  display_name: Deno
  language: typescript
  name: deno
  path: /Users/martinlaptev/Library/Jupyter/kernels/deno
---

# Ordinal date

\| [Martin Laptev]()  
2024+189

My site is full of dates in the `year+day` format. The major advantage
of this format is that the `day` component can unequivocally identify
any date and time in a given year and thus can replace months, days of
the month, hours, minutes, and seconds. In essence, the `day` number can
To create all of the dates, I use three different programming languages:
Python for the [listing page](../../list), Lua for the Published date at
the top of each article, and JavaScript for the citation information at
the bottom of each article.

To test the code, I will create a separate Quarto markdown (`qmd`) file
for each of these 3 programming languages and
[embed](https://quarto.org/docs/authoring/notebook-embed.html#overview)
them into this `qmd` file.

# JavaScript

```{code-cell}
:tags: [func]

function unix2doty(unix) {
  const dote = unix / 86400 + 719468,
    cykl = Math.floor((
      dote >= 0 ? dote
      : dote - 146096
    ) / 146097),
  dotc = dote - cykl * 146097,
  yotc = Math.floor((dotc
    - Math.floor(dotc / 1460)
    + Math.floor(dotc / 36524)
    - Math.floor(dotc / 146096)
  ) / 365);
  return [
    yotc + cykl * 400,
    dotc - (yotc * 365
      + Math.floor(yotc / 4)
      - Math.floor(yotc / 100)
  )]}
```

```{code-cell}
:tags: [out0]

unix2doty(1728000000)
```

```{code-cell}
:tags: [out1]

unix2doty(1890000000)
```