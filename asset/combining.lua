-- Adds the Unicode combining mark that matches each CSS-drawn accent class, so
-- copied text and CSS-free views (reader mode, text browsers, crawlers, .md
-- output) still show the accent: [5]{.acutegrave} copies as 5̽. In HTML each
-- mark sits in a span.cm that asset/style.css makes transparent, so only the
-- CSS strokes are visible.

local marks = {
  overline = "\u{0305}",
  grave = "\u{0300}",
  acute = "\u{0301}",
  acutegrave = "\u{033D}",
  doublegrave = "\u{030F}",
  doubleacute = "\u{030B}",
}

local function mark_inline(mark)
  if quarto.doc.is_format("html") then
    return pandoc.Span(pandoc.Str(mark), { class = "cm" })
  end
  return pandoc.Str(mark)
end

-- Splits a Str into one Str per character, each followed by the mark.
local function mark_every_char(str, mark)
  local out = {}
  for _, code in utf8.codes(str.text) do
    table.insert(out, pandoc.Str(utf8.char(code)))
    table.insert(out, mark_inline(mark))
  end
  return out
end

-- Text with OJS ${...} interpolation is filled in at runtime, so splitting
-- it would break the expression.
local function has_ojs(span)
  return pandoc.utils.stringify(span):find("${", 1, true) ~= nil
end

function Span(span)
  local mark
  for _, class in ipairs(span.classes) do
    mark = mark or marks[class]
  end
  if not mark or has_ojs(span) then
    return nil
  end

  if span.classes:includes("overline") then
    -- A vinculum covers every digit under it.
    span.content = span.content:walk({
      Str = function(str) return mark_every_char(str, mark) end,
    })
  else
    -- An accent sits on a single character.
    span.content:insert(mark_inline(mark))
  end
  return span
end
