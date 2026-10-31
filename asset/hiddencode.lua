-- Drop the source of code cells with `echo: false`. Quarto still writes a
-- hidden, syntax-highlighted copy of every OJS cell into the page (over 1 MB
-- on dec/time), but the OJS runtime runs its own encoded copy of the source.
function CodeBlock(el)
  if el.classes:includes("cell-code") and el.classes:includes("hidden") then
    return {}
  end
end
