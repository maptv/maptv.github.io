# Ordinal date
Martin Laptev
2024+186

- [Javascript](#javascript)
- [Lua](#lua)
- [Python](#python)

My blog is full of dates in the `year+day` format. The major advantage
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

# Javascript

<div class="quarto-embed-nb-cell"
notebook="/Users/martinlaptev/maptv/maptv.github.io/dec/date/date.js.ipynb"
notebook-cellId="cell-0">

``` typescript
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
unix2doty(1728000000)
```

    [ 2024, 217 ]

``` typescript
unix2doty(1890000000)
```

    [ 2029, 266 ]

</div>

# Lua

<div class="quarto-embed-nb-cell"
notebook="/Users/martinlaptev/maptv/maptv.github.io/dec/date/date.lua.ipynb"
notebook-cellId="cell-0">

``` lua
function unix2doty(unix)
  local dote = unix / 86400 + 719468
  local cykl = (
    dote >= 0 and dote
    or dote - 146096
  ) // 146097
  local dotc = dote - cykl * 146097
  local yotc = (
    dotc - dotc // 1460
    + dotc // 36524
    - dotc // 146096
  ) // 365
  return {
    math.floor(yotc + cykl * 400),
    dotc - (yotc * 365
      + yotc // 4
      - yotc // 100
  )}
end
```

``` lua
unix2doty(1728000000)
```

    { 2024, 217.0 } 

``` lua
unix2doty(1890000000)
```

    { 2029, 266.0 } 

</div>

# Python

<div class="quarto-embed-nb-cell"
notebook="/Users/martinlaptev/maptv/maptv.github.io/dec/date/date.py.ipynb"
notebook-cellId="7e8773bb-2923-4806-b39d-d450eaaee222">

``` python
def unix2doty(unix):
    dote = unix / 86400 + 719468
    cykl = (
        dote if dote >= 0
        else dote - 146096
    ) // 146097
    dotc = dote - cykl * 146097
    yotc = (dotc
        - dotc // 1460
        + dotc // 36524
        - dotc // 146096
    ) // 365
    return [
        int(yotc + cykl * 400),
        dotc - (yotc * 365
            + yotc // 4
            - yotc // 100
    )]
unix2doty(1728000000)
```

    [2024, 217.0]

``` python
unix2doty(1890000000)
```

    [2029, 266.0]

</div>
