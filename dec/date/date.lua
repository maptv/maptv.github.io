-- ---
-- jupyter:
--   jupytext:
--     text_representation:
--       extension: .lua
--       format_name: light
--       format_version: '1.5'
--       jupytext_version: 1.16.4
--   kernelspec:
--     display_name: Lua  (XLua)
--     language: lua
--     name: xlua
-- ---

-- + editable=true slideshow={"slide_type": ""}
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

-- + editable=true slideshow={"slide_type": ""}
unix2doty(1728000000)
-- -

unix2doty(1890000000)