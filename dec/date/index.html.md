---
title: Ordinal date
image: /asset/deidek.svg
citation:
  url: https://maptv.github.io/dec/date
format:
  html:
    keep-md: true
    include-after-body:
      - ../../asset/cite.html
      - ../../asset/style.html
      - ../../asset/stamp.html
      - ../../asset/tooltip.html
  commonmark: default
format-links:
  - text: Jupyter (js)
    href: date.js.ipynb
    icon: journal-code
  - text: Jupyter (py)
    href: date.py.ipynb
    icon: journal-code
  - text: Jupyter (lua)
    href: date.lua.ipynb
    icon: journal-code
  - text: Script (js)
    href: date.js
    icon: filetype-js
  - text: Script (py)
    href: date.py
    icon: filetype-py
  - text: Script (lua)
    href: date.lua
    icon: moon
notebook-view:
  - notebook: date.py.ipynb
    title: Python
    url: date.py.ipynb
  - notebook: date.js.ipynb
    title: JavaScript
    url: date.js.ipynb
  - notebook: date.lua.ipynb
    title: Lua
    url: date.lua.ipynb
filters:
  - ../../asset/date.lua
  - include-code-files
---





My blog is full of dates in the `year+day` format. The major advantage of this format is that the `day` component can unequivocally identify any date and time in a given year and thus can replace months, days of the month, hours, minutes, and seconds. In essence, the `day` number can  To create all of the dates, I use three different programming languages: Python for the [listing page](/list), Lua for the Published date at the top of each article, and JavaScript for the citation information at the bottom of each article.

To test the code, I will create a separate Quarto markdown (`qmd`) file for each of these 3 programming languages and [embed](https://quarto.org/docs/authoring/notebook-embed.html#overview) them into this `qmd` file.

# Javascript




<!-- 12A0366C|/Users/martinlaptev/maptv/maptv.github.io/dec/date/index.qmd|:date.js.ipynb |  | echo:true,warning:false,asis:true,eval:false -->







# Lua




<!-- 12A0366C|/Users/martinlaptev/maptv/maptv.github.io/dec/date/index.qmd|:date.lua.ipynb |  | echo:true,warning:false,asis:true,eval:false -->







# Python




<!-- 12A0366C|/Users/martinlaptev/maptv/maptv.github.io/dec/date/index.qmd|:date.py.ipynb |  | echo:true,warning:false,asis:true,eval:false -->