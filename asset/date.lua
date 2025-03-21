-- https://howardhinnant.github.io/date_algorithms.html#days_from_civil
function unix2deco(ms)
  local dote = ms / 86400000 + 719468
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
  return string.format(
    "%s+%03d",
    math.floor(yotc + cykl * 400),
    math.floor(dotc - (yotc * 365
      + yotc // 4
      - yotc // 100)))
end

local function to_decalendar(date)
  local date = pandoc.utils.stringify(date)
  local unix = date:match("(%d+)")
  return date:gsub(unix, unix2deco(unix))
end

function Meta(m)
  m.date = to_decalendar(m.date)
  return m
end
