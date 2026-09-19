-- https://howardhinnant.github.io/date_algorithms.html#days_from_civil
function unix2deco(ms)
  ms = tonumber(ms)
  if not ms then
    return ""
  end

  local dote = ms / 86400 + 719468

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
    "%d+%03d",
    math.floor(yotc + cykl * 400),
    math.floor(
      dotc - (
        yotc * 365
        + yotc // 4
        - yotc // 100
      )
    )
  )
end

local function to_decalendar(date_meta)
  if not date_meta then
    return date_meta
  end

  local date = pandoc.utils.stringify(date_meta)
  local unix = date:match("(%d+)")

  if not unix then
    return date_meta
  end

  local converted = date:gsub(unix, unix2deco(unix))

  return pandoc.MetaString(converted)
end

function Meta(m)
  if m.date and m.decdate then
    m.date = m.decdate
  end
  if m['date-modified'] then
    m['date-modified'] = to_decalendar(m['date-modified'])
  end
  return m
end
