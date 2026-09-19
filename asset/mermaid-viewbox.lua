-- Mermaid's pre-rendered (mermaid-format: svg) diagrams always emit a fixed
-- width="672" height="480" on the root <svg>, unrelated to the diagram's own
-- viewBox. Browsers use those attributes (not the viewBox) as the element's
-- intrinsic aspect ratio, so `height: auto` scales every diagram to a 672:480
-- box instead of its own shape, leaving large empty margins above/below
-- (or, for very wide diagrams, cropping). Rewriting width/height to match
-- the diagram's own viewBox makes the intrinsic ratio correct so CSS
-- (`svg.flowchart { max-width: 100%; height: auto; }`) scales it exactly to
-- its real content, with no dead space.
local function fix_svg_dims(text)
  return (text:gsub("<svg%f[%s][^>]->", function(tag)
    if not tag:find('class="flowchart') then
      return tag
    end
    local vbw, vbh = tag:match('[Vv]iew[Bb]ox="%s*[%-%d%.]+%s+[%-%d%.]+%s+([%d%.]+)%s+([%d%.]+)"')
    if not vbw then
      return tag
    end
    tag = tag:gsub('width="[%d%.]+"', 'width="' .. vbw .. '"', 1)
    tag = tag:gsub('height="[%d%.]+"', 'height="' .. vbh .. '"', 1)
    return tag
  end))
end

function RawBlock(el)
  if el.format == "html" then
    el.text = fix_svg_dims(el.text)
  end
  return el
end

function RawInline(el)
  if el.format == "html" then
    el.text = fix_svg_dims(el.text)
  end
  return el
end
