# Dec time
Martin Laptev
2026+222

- [Declock](#declock)
- [Annual day aggregate (ada)](#sec-ada)
- [Epochal day aggregate (eda)](#sec-eda)
  - [UNIX time equation](#sec-ute)
  - [Julian date equation](#sec-jde)
- [Hour minute second](#sec-hms)
- [Universal time offset](#sec-uto)
- [Rounded offset decimal](#sec-rod)
- [Time zone offset](#sec-tzo)
  - [Coordinated Universal Time (UTC)](#sec-utc)
- [Day of week](#sec-dow)

<div class="timenav">

<svg width="829.6875" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" class="flowchart decnav-svg" viewbox="0 0 829.6875 94" role="graphics-document document" aria-roledescription="flowchart-v2" height="94">

<style>.decnav-svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:32px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}.decnav-svg .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}.decnav-svg .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}.decnav-svg .error-icon{fill:#552222;}.decnav-svg .error-text{fill:#552222;stroke:#552222;}.decnav-svg .edge-thickness-normal{stroke-width:1px;}.decnav-svg .edge-thickness-thick{stroke-width:3.5px;}.decnav-svg .edge-pattern-solid{stroke-dasharray:0;}.decnav-svg .edge-thickness-invisible{stroke-width:0;fill:none;}.decnav-svg .edge-pattern-dashed{stroke-dasharray:3;}.decnav-svg .edge-pattern-dotted{stroke-dasharray:2;}.decnav-svg .marker{fill:#333333;stroke:#333333;}.decnav-svg .marker.cross{stroke:#333333;}.decnav-svg svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:32px;}.decnav-svg p{margin:0;}.decnav-svg .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#333;}.decnav-svg .cluster-label text{fill:#333;}.decnav-svg .cluster-label span{color:#333;}.decnav-svg .cluster-label span p{background-color:transparent;}.decnav-svg .label text,.decnav-svg span{fill:#333;color:#333;}.decnav-svg .node rect,.decnav-svg .node circle,.decnav-svg .node ellipse,.decnav-svg .node polygon,.decnav-svg .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}.decnav-svg .rough-node .label text,.decnav-svg .node .label text,.decnav-svg .image-shape .label,.decnav-svg .icon-shape .label{text-anchor:middle;}.decnav-svg .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}.decnav-svg .rough-node .label,.decnav-svg .node .label,.decnav-svg .image-shape .label,.decnav-svg .icon-shape .label{text-align:center;}.decnav-svg .node.clickable{cursor:pointer;}.decnav-svg .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}.decnav-svg .arrowheadPath{fill:#333333;}.decnav-svg .edgePath .path{stroke:#333333;stroke-width:2.0px;}.decnav-svg .flowchart-link{stroke:#333333;fill:none;}.decnav-svg .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}.decnav-svg .edgeLabel p{background-color:rgba(232,232,232, 0.8);}.decnav-svg .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}.decnav-svg .labelBkg{background-color:rgba(232, 232, 232, 0.5);}.decnav-svg .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}.decnav-svg .cluster text{fill:#333;}.decnav-svg .cluster span{color:#333;}.decnav-svg div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}.decnav-svg .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}.decnav-svg rect.text{fill:none;stroke-width:0;}.decnav-svg .icon-shape,.decnav-svg .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}.decnav-svg .icon-shape p,.decnav-svg .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}.decnav-svg .icon-shape rect,.decnav-svg .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}.decnav-svg .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}.decnav-svg .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}.decnav-svg :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style>

<g><marker id="mermaid-1789795887597_flowchart-v2-pointEnd" class="marker flowchart-v2" viewbox="0 0 10 10" refx="5" refy="5" markerunits="userSpaceOnUse" markerwidth="8" markerheight="8" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker><marker id="mermaid-1789795887597_flowchart-v2-pointStart" class="marker flowchart-v2" viewbox="0 0 10 10" refx="4.5" refy="5" markerunits="userSpaceOnUse" markerwidth="8" markerheight="8" orient="auto"><path d="M 0 5 L 10 10 L 10 0 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker><marker id="mermaid-1789795887597_flowchart-v2-circleEnd" class="marker flowchart-v2" viewbox="0 0 10 10" refx="11" refy="5" markerunits="userSpaceOnUse" markerwidth="11" markerheight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></circle></marker><marker id="mermaid-1789795887597_flowchart-v2-circleStart" class="marker flowchart-v2" viewbox="0 0 10 10" refx="-1" refy="5" markerunits="userSpaceOnUse" markerwidth="11" markerheight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></circle></marker><marker id="mermaid-1789795887597_flowchart-v2-crossEnd" class="marker cross flowchart-v2" viewbox="0 0 11 11" refx="12" refy="5.2" markerunits="userSpaceOnUse" markerwidth="11" markerheight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1, 0;"></path></marker><marker id="mermaid-1789795887597_flowchart-v2-crossStart" class="marker cross flowchart-v2" viewbox="0 0 11 11" refx="-1" refy="5.2" markerunits="userSpaceOnUse" markerwidth="11" markerheight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1, 0;"></path></marker><g class="root"><g class="clusters"></g><g class="edgePaths"><path d="M120.922,47L125.089,47C129.255,47,137.589,47,145.255,47C152.922,47,159.922,47,163.422,47L166.922,47" id="L_A_B_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_A_B_0" data-points="W3sieCI6MTIwLjkyMTg3NSwieSI6NDd9LHsieCI6MTQ1LjkyMTg3NSwieSI6NDd9LHsieCI6MTcwLjkyMTg3NSwieSI6NDd9XQ==" marker-end="url(#mermaid-1789795887597_flowchart-v2-pointEnd)"></path><path d="M295.703,47L299.87,47C304.036,47,312.37,47,320.036,47C327.703,47,334.703,47,338.203,47L341.703,47" id="L_B_C_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_B_C_0" data-points="W3sieCI6Mjk1LjcwMzEyNSwieSI6NDd9LHsieCI6MzIwLjcwMzEyNSwieSI6NDd9LHsieCI6MzQ1LjcwMzEyNSwieSI6NDd9XQ==" marker-end="url(#mermaid-1789795887597_flowchart-v2-pointEnd)"></path><path d="M471.531,47L475.698,47C479.865,47,488.198,47,495.865,47C503.531,47,510.531,47,514.031,47L517.531,47" id="L_C_D_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_C_D_0" data-points="W3sieCI6NDcxLjUzMTI1LCJ5Ijo0N30seyJ4Ijo0OTYuNTMxMjUsInkiOjQ3fSx7IngiOjUyMS41MzEyNSwieSI6NDd9XQ==" marker-end="url(#mermaid-1789795887597_flowchart-v2-pointEnd)"></path><path d="M646.609,47L650.776,47C654.943,47,663.276,47,670.943,47C678.609,47,685.609,47,689.109,47L692.609,47" id="L_D_E_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_D_E_0" data-points="W3sieCI6NjQ2LjYwOTM3NSwieSI6NDd9LHsieCI6NjcxLjYwOTM3NSwieSI6NDd9LHsieCI6Njk2LjYwOTM3NSwieSI6NDd9XQ==" marker-end="url(#mermaid-1789795887597_flowchart-v2-pointEnd)"></path></g><g class="edgeLabels"><g class="edgeLabel"><g class="label" data-id="L_A_B_0" transform="translate(0, 0)"><foreignobject width="0" height="0">

<div class="labelBkg" data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="edgeLabel"></span>

</div>

</foreignobject></g></g><g class="edgeLabel"><g class="label" data-id="L_B_C_0" transform="translate(0, 0)"><foreignobject width="0" height="0">

<div class="labelBkg" data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="edgeLabel"></span>

</div>

</foreignobject></g></g><g class="edgeLabel"><g class="label" data-id="L_C_D_0" transform="translate(0, 0)"><foreignobject width="0" height="0">

<div class="labelBkg" data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="edgeLabel"></span>

</div>

</foreignobject></g></g><g class="edgeLabel"><g class="label" data-id="L_D_E_0" transform="translate(0, 0)"><foreignobject width="0" height="0">

<div class="labelBkg" data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="edgeLabel"></span>

</div>

</foreignobject></g></g></g><g class="nodes"><a href="/dec" class="decnav-link no-external"><g class="node default" id="flowchart-A-0" transform="translate(64.4609375, 47)"><rect class="basic label-container" style="" x="-56.4609375" y="-39" width="112.921875" height="78"></rect><g class="label" style="" transform="translate(-26.4609375, -24)"><rect></rect><foreignobject width="52.921875" height="48">

<div data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="nodeLabel">
<p>

Dec
</p>

</span>

</div>

</foreignobject></g></g></a><a href="/dec/date" class="decnav-link no-external"><g class="node default" id="flowchart-B-1" transform="translate(233.3125, 47)"><rect class="basic label-container" style="" x="-62.390625" y="-39" width="124.78125" height="78"></rect><g class="label" style="" transform="translate(-32.390625, -24)"><rect></rect><foreignobject width="64.78125" height="48">

<div data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="nodeLabel">
<p>

date
</p>

</span>

</div>

</foreignobject></g></g></a><a href="/dec/time" class="decnav-link no-external"><g class="node default" id="flowchart-C-2" transform="translate(408.6171875, 47)"><rect class="basic label-container" style="" x="-62.9140625" y="-39" width="125.828125" height="78"></rect><g class="label" style="" transform="translate(-32.9140625, -24)"><rect></rect><foreignobject width="65.828125" height="48">

<div data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="nodeLabel">
<p>

time
</p>

</span>

</div>

</foreignobject></g></g></a><a href="/dec/snap" class="decnav-link no-external"><g class="node default" id="flowchart-D-3" transform="translate(584.0703125, 47)"><rect class="basic label-container" style="" x="-62.5390625" y="-39" width="125.078125" height="78"></rect><g class="label" style="" transform="translate(-32.5390625, -24)"><rect></rect><foreignobject width="65.078125" height="48">

<div data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="nodeLabel">
<p>

snap
</p>

</span>

</div>

</foreignobject></g></g></a><a href="/dec/span" class="decnav-link no-external"><g class="node default" id="flowchart-E-4" transform="translate(759.1484375, 47)"><rect class="basic label-container" style="" x="-62.5390625" y="-39" width="125.078125" height="78"></rect><g class="label" style="" transform="translate(-32.5390625, -24)"><rect></rect><foreignobject width="65.078125" height="48">

<div data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="nodeLabel">
<p>

span
</p>

</span>

</div>

</foreignobject></g></g></a></g></g></g>
</svg>

</div>

# Declock

My website provides many examples of the [Quarto](https://quarto.org)
publishing and the [Dec](../../dec) measurement systems in action. I
leverage Quarto support for the [Observable](https://observablehq.com/)
data analysis and visualization system to create animated and
interactive graphics like the
[bar📊charts](https://en.wikipedia.org/wiki/Bar_chart) clocks🕓,
[solar☀️terminator](https://en.wikipedia.org/wiki/Terminator_%28solar%29#:~:text=a%20moving%20line%20that%20divides%20the%20daylit%20side%20and%20the%20dark%20night%20side%20of%20a%20planetary%20body)
map🗺, [Earth🌍orbit](https://en.wikipedia.org/wiki/Earth%27s_orbit)
diagram, and
[daylight](https://en.wikipedia.org/wiki/Daylight#:~:text=the%20combination%20of%20all%20direct%20and%20indirect%20sunlight%20during%20the%20daytime)
[area
chart](https://en.wikipedia.org/wiki/Area_chart#:~:text=The%20area%20between%20axis%20and%20line%20are%20commonly%20emphasized%20with%20colors)
below.

<div id="onlymargin" class="column-margin clocks posneg">

${posclock}${negclock}

</div>

Dec times are measured in [fractional
days](https://en.wikipedia.org/wiki/Decimal_time#Fractional_days:~:text=a%20decimal%20fraction%20of%20a%20day),
often using [metric
prefixes](https://en.wikipedia.org/wiki/Metric_prefix#:~:text=a%20unit%20prefix%20that%20precedes%20a%20basic%20unit%20of%20measure%20to%20indicate%20a%20multiple%20or%20submultiple%20of%20the%20unit)
like
[deci](https://en.wikipedia.org/wiki/Deci-#:~:text=a%20decimal%20unit%20prefix%20in%20the%20metric%20system%20denoting%20a%20factor%20of%20one%20tenth),
[centi](https://en.wikipedia.org/wiki/Centi-#:~:text=a%20unit%20prefix%20in%20the%20metric%20system%20denoting%20a%20factor%20of%20one%20hundredth),
or
[milli](https://en.wikipedia.org/wiki/Milli-#:~:text=a%20unit%20prefix%20in%20the%20metric%20system%20denoting%20a%20factor%20of%20one%20thousandth).
The top, middle, and bottom bars📊indicate the <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</a>, <a
href="https://en.wikipedia.org/wiki/Unit_of_time#:~:text=1.44%20minutes%2C%20or%2086.4%20seconds"
class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a day">millidays</a>, and <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=which%20would%20be-,1/100%2C000%20day,-%2C%20or%20864%20milliseconds"
class="tool" data-bs-toggle="tooltip"
data-bs-title="hundred thousandths of a day">centimillidays</a>,
respectively, of the time since the start,
<span class="point1">+${decTime}</span>, or until the end,
<span class="point0">-${decTimeN}</span>, of the day in the Dec [time
zone](https://en.wikipedia.org/wiki/Time_zone#:~:text=an%20area%20which%20observes%20a%20uniform%20standard%20time),
${decZoneHsl}, at the location of the red⭕️circle on the map🗺️beneath
the bars📊.

To rotate the globe🌐in the Earth🌏orbit diagram, drag the red⭕️circle
horizontally↔️or slide the red🔴dot on the daylight area chart
vertically↕. The red⭕️circle’s vertical↕position determines the yearly
daylight pattern visualized by the area chart. Shift the
red<font color=red>—</font>line on the area chart horizontally↔️to move
the globe🌐along the ellipse of the Earth🌎orbit.

``` {ojs}
//| echo: false
//| label: toggles
viewof bordertoggle = labelToggle(Inputs.toggle, "Border", false, "bordertoggle")
viewof gridtoggle = labelToggle(Inputs.toggle, "Grid", false, "gridtoggle")
viewof utctoggle = labelToggle(Inputs.toggle, "UTC", false, "utctoggle")
viewof suntoggle = labelToggle(Inputs.toggle, "Sun", false, "suntoggle")
rstbtn.node();
```

#### Bar chart clocks

``` {ojs}
//| echo: false
// https://observablehq.com/@fheyen/barchart-clock
barChart = {
  const W = 800;
  const H = 88;
  const barX = 1;
  const firstBarY = 1;
  const svg = d3
    .create("svg")
    .attr("width", W)
    .attr("viewBox", [0, 0, W / 1.14, H]);
  const xRange = [0, W - 100];
  const scaleDD = d3.scaleLinear()
    .domain([0, 10])
    .range(xRange);
  const scaleMandB = d3.scaleLinear()
    .domain([0, 100])
    .range(xRange);
  // Background bars to show where 100% lies
  svg.selectAll('.background')
    .data([
      'dd', "mils", 'beats'])
    .enter()
    .append('rect')
    .attr('class', 'background timeBar')
    .attr('width', W-100)
    .attr('y', (d,i)=>i*30+firstBarY)
  // Beats
  svg
    .append('rect')
    .attr('class', 'timeBar')
    .attr('y', firstBarY+60)
    .attr('width', d => scaleMandB(Number(barBeats)))
  svg
    .append('rect')
    .attr('class', 'timeBarFull')
    .attr('y', firstBarY+60)
    .attr('width', d => scaleMandB(barBeats))
  // Cents/Mils
  svg
    .append('rect')
    .attr('class', 'timeBar')
    .attr('y', firstBarY)
    .attr('width', d => scaleDD(Number(barDD)+Number(barMils)/100+Number(barBeats)/10000))
  svg
    .append('rect')
    .attr('class', 'timeBarFull')
    .attr('y', firstBarY)
    .attr('width', d => scaleDD(barDD))
  svg
    .append('rect')
    .attr('class', 'timeBar')
    .attr('y', firstBarY+30)
    .attr('width', d => scaleMandB(Number(barMils)+Number(barBeats)/100))
  svg
    .append('rect')
    .attr('class', 'timeBarFull')
    .attr('y', firstBarY+30)
    .attr('width', d => scaleMandB(barMils))
  // Cent ticks
  svg.selectAll('.tickC')
    .data(d3.range(width > 500 ? 10 : 10, 100))
    .enter()
    .append('rect')
    .attr('class', 'tickC')
    .attr('x', d=>scaleDD(d/10)+barX)
    .attr('y', firstBarY+30)
    .attr('height', d=>d%2===0? 8:5)
  svg.selectAll('.tickB1')
    .data(d3.range(width > 500 ? 10 : 10, 100))
    .enter()
    .append('rect')
    .attr('class', 'tickB1')
    .attr('x', d=>scaleDD(d/10)+barX)
    .attr('y', d=>d%2===0? firstBarY+77:firstBarY+80)
    .attr('height', d=>d%2===0? 8:5)
  svg.selectAll('.tickC1')
    .data(d3.range(width > 500 ? 10 : 10, 100))
    .enter()
    .append('rect')
    .attr('class', 'tickC1')
    .attr('x', d=>scaleDD(d/10)+barX)
    .attr('y', d=>d%2===0? firstBarY+47:firstBarY+50)
    .attr('height', d=>d%2===0? 8:5)
  // Mil ticks
  svg.selectAll('.tickM')
    .data(d3.range(width > 500 ? 1 : 1, 10))
    .enter()
    .append('rect')
    .attr('class', 'tickM')
    .attr('x', d=>scaleDD(d)+barX)
    .attr('y', firstBarY+20)
    .attr('height', 6)
  svg.selectAll('.tickLabel1')
    .data(d3.range(width > 500 ? 1 : 1, 10))
    .enter()
    .append('text')
    .attr('class', 'tickLabel1')
    .attr('x', d=>scaleDD(d)+barX+.5)
    .attr('y', firstBarY+18)
    //.style("font-size", `{W < 550 ? 12 : W < 650 ? 14 : W < 750 ? 16 : W < 850 ? 18 : 20}px`)
    .text(d=>d)
  // Cent ticks
  svg.selectAll('.tickC2')
    .data(d3.range(width > 500 ? 10 : 10, 100))
    .enter()
    .append('rect')
    .attr('class', 'tickC2')
    .attr('x', d=>scaleDD(d/10)+barX)
    .attr('y', firstBarY+10)
    .attr('height', d=>d%2===0? 9:6)
  // Beat ticks
  svg.selectAll('.tickB')
    .data(d3.range(width > 500 ? 10 : 10, 100))
    .enter()
    .append('rect')
    .attr('class', 'tickB')
    .attr('x', d=>scaleDD(d/10)+barX)
    .attr('y', firstBarY+60)
    .attr('height', d=>d%2===0? 9:6)
  // Labels
  svg.selectAll('.timeLabel')
    .data([`+${barDD}`, `${barMils}`, `${barBeats}`])
    .enter()
    .append('text')
    .attr('class', 'timeLabel')
    .attr('x', barX+2)
    .attr('y', (d,i)=>i*30+firstBarY+20)
    .style("font-size", `${W < 300 ? 14 : W < 400 ? 16 : W < 500 ? 18 : W < 600 ? 20 : 22}px`)
    .text(d=>d);
  svg.attr("id", "topbar");
  svg.attr('class', 'barclock')
  return svg.node();
}
barChart1 = {
  const W = 800;
  const H = 88;
  const barX = 1;
  const firstBarY = 1;
  const svg = d3
    .create("svg")
    .attr("width", W)
    .attr("viewBox", [0, 0, W / 1.14, H]);
  const xRange = [0, W - 100];
  const scaleDD = d3.scaleLinear()
    .domain([0, 10])
    .range(xRange);
  const scaleMandB = d3.scaleLinear()
    .domain([0, 100])
    .range(xRange);
  // const scaleDek = d3.scaleLinear()
  //  .domain([0, 37])
  //  .range(xRange);
  // Background bars to show where 100% lies
  svg.selectAll('.background')
    .data([
      // 'dek', 'dotd',
      'dd', "mils", 'beats'])
    .enter()
    .append('rect')
    .attr('class', 'background timeBar')
    .attr('width', W-100)
    .attr('y', (d,i)=>i*30+firstBarY)
  // Beats
  svg
    .append('rect')
    .attr('class', 'timeBar')
    .attr('y', firstBarY+60)
    .attr('width', d => scaleMandB(Number(barBeatsN)))
  svg
    .append('rect')
    .attr('class', 'timeBarFullN')
    .attr('y', firstBarY+60)
    .attr('width', d => scaleMandB(barBeatsN))
  // Cents/Mils
  svg
    .append('rect')
    .attr('class', 'timeBar')
    .attr('y', firstBarY)
    .attr('width', d => scaleDD(Number(barDDN)+Number(barMilsN)/100+Number(barBeatsN)/10000))
  svg
    .append('rect')
    .attr('class', 'timeBarFullN')
    .attr('y', firstBarY)
    .attr('width', d => scaleDD(barDDN))
  svg
    .append('rect')
    .attr('class', 'timeBar')
    .attr('y', firstBarY+30)
    .attr('width', d => scaleMandB(Number(barMilsN)+Number(barBeatsN)/100))
  svg
    .append('rect')
    .attr('class', 'timeBarFullN')
    .attr('y', firstBarY+30)
    .attr('width', d => scaleMandB(barMilsN))
  // Cent ticks
  svg.selectAll('.tickC')
    .data(d3.range(width > 500 ? 10 : 10, 100))
    .enter()
    .append('rect')
    .attr('class', 'tickC')
    .attr('x', d=>scaleDD(d/10)+barX)
    .attr('y', firstBarY+30)
    .attr('height', d=>d%2===0? 8:5)
  svg.selectAll('.tickB1')
    .data(d3.range(width > 500 ? 10 : 10, 100))
    .enter()
    .append('rect')
    .attr('class', 'tickB1')
    .attr('x', d=>scaleDD(d/10)+barX)
    .attr('y', d=>d%2===0? firstBarY+77:firstBarY+80)
    .attr('height', d=>d%2===0? 8:5)
  svg.selectAll('.tickC1')
    .data(d3.range(width > 500 ? 10 : 10, 100))
    .enter()
    .append('rect')
    .attr('class', 'tickC1')
    .attr('x', d=>scaleDD(d/10)+barX)
    .attr('y', d=>d%2===0? firstBarY+47:firstBarY+50)
    .attr('height', d=>d%2===0? 8:5)
  // Mil ticks
  svg.selectAll('.tickM')
    .data(d3.range(width > 500 ? 1 : 1, 10))
    .enter()
    .append('rect')
    .attr('class', 'tickM')
    .attr('x', d=>scaleDD(d)+barX)
    .attr('y', firstBarY+20)
    .attr('height', 6)
  svg.selectAll('.tickLabel1')
    .data(d3.range(width > 500 ? 1 : 1, 10))
    .enter()
    .append('text')
    .attr('class', 'tickLabel1')
    .attr('x', d=>scaleDD(d)+barX+.5)
    .attr('y', firstBarY+18)
    //.style("font-size", `{W < 350 ? 12 : W < 450 ? 14 : W < 550 ? 16 : W < 650 ? 18 : 20}px`)
    .text(d=>d)
  // Cent ticks
  svg.selectAll('.tickC2')
    .data(d3.range(width > 500 ? 10 : 10, 100))
    .enter()
    .append('rect')
    .attr('class', 'tickC2')
    .attr('x', d=>scaleDD(d/10)+barX)
    .attr('y', firstBarY+10)
    .attr('height', d=>d%2===0? 9:6)
  // Beat ticks
  svg.selectAll('.tickB')
    .data(d3.range(width > 500 ? 10 : 10, 100))
    .enter()
    .append('rect')
    .attr('class', 'tickB')
    .attr('x', d=>scaleDD(d/10)+barX)
    .attr('y', firstBarY+60)
    .attr('height', d=>d%2===0? 9:6)
  // Labels
  svg.selectAll('.timeLabel')
    .data([`-${barDDN}`, `${barMilsN}`, `${barBeatsN}`])
    .enter()
    .append('text')
    .attr('class', 'timeLabel')
    .attr('x', barX+2)
    .attr('y', (d,i)=>i*30+firstBarY+20)
    .style("font-size", `${W < 300 ? 14 : W < 400 ? 16 : W < 500 ? 18 : W < 600 ? 20 : 22}px`)
    .text(d=>d);
  svg.attr("id", "btmbar");
  svg.attr('class', 'barclock')
  return svg.node();
}
```

<div class="marginInputs">

``` {ojs}
//| echo: false
//| label: yawinput
//| column: margin
viewof yaw = Inputs.range([0, 1000], {label: "Yaw", value: 500, step: 1})
```

``` {ojs}
//| echo: false
//| label: pitchinput
//| column: margin
viewof pitch = Inputs.range([-500, 500], {label: "Pitch", value: 0, step: 1})
```

``` {ojs}
//| echo: false
//| label: rollinput
//| column: margin
viewof roll = Inputs.range([-500, 500], {label: "Roll", value: 0, step: 1})
```

``` {ojs}
//| echo: false
//| label: sizeinput
//| column: margin
viewof mapsize = Inputs.range([0, 100], {label: "Size", value: 100, step: 1})
```

``` {ojs}
//| echo: false
//| label: projselect
//| column: margin
viewof select = Inputs.select(
  projections, {format: x => x.name, value: projections.find(t => t.name === "Equirectangular (plate carrée)")})
```

``` {ojs}
//| echo: false
//| label: lonlatable
//| column: margin
table = createTable([
  { Milliparallel: 500, Millimeridian: 0 },
], { headerEditable: false, appendRows: false })
//   {Point: 0, Milliparallel: `${Math.floor(long2turn(Place_A[0], 3))}`, Millimeridian: `${Math.floor(lati2turn(Place_A[1], 3))}`, Milliwindrose: `${Math.floor(lati2turn(coor2bear(Place_A, Place_B)))}`},
//   {Point: 1, Milliparallel: `${Math.floor(long2turn(Place_B[0], 3))}`, Millimeridian: `${Math.floor(lati2turn(Place_B[1], 3))}`, Milliwindrose: `${Math.floor(lati2turn(coor2bear(Place_B, Place_A)))}`},
// ], {headerEditable: false, appendRows: false})
```

</div>

#### Longitude latitude map

<div class="column-screen">

``` {ojs}
//| echo: false
//| label: distmap
viewof location = worldMapCoordinates([[turn2long(table.rows[1].cells[0].childNodes[0].innerText), turn2lati(table.rows[1].cells[1].childNodes[0].innerText)], projection], [width, height * mapsize / 100])
```

</div>

<div id="onlymargin" class="column-margin clocks sundot">

${sunclock}${dotclock}

</div>

#### Daylight area chart

<div class="column-page-left">

``` {ojs}
//| echo: false
// https://observablehq.com/@dbridges/visualizing-seasonal-daylight
app = {
  const svg = d3.select(DOM.svg(majwid, majwid / 1000 * (width < 300 ? 286 : width < 310 ? 292 : width < 320 ? 298 : width < 330 ? 304 : width < 340 ? 310 : width < 350 ? 316 : width < 360 ? 322 : width < 370 ? 328 : width < 380 ? 334 : width < 390 ? 340 : width < 400 ? 346 : width < 410 ? 362 : width < 420 ? 374 : width < 430 ? 382 : width < 440 ? 386 : width < 450 ? 390 : width < 460 ? 394 : width < 470 ? 398 : width < 480 ? 402 : width < 490 ? 406 : width < 500 ? 418 : width < 510 ? 422 : width < 520 ? 426 : width < 530 ? 430 : width < 540 ? 434 : width < 550 ? 438 : width < 560 ? 442 : width < 570 ? 446 : width < 580 ? 456 : width < 590 ? 460 : width < 600 ? 470 : width < 610 ? 480 : width < 650 ? 490 : width < 700 ? 490 : width < 734 ? 490 : width < 768 ? 490 : width < 769 ? 320 : width < 800 ? 340 : width < 900 ? 350 : width < 1000 ? 360 : width < 1050 ? 420 : width < 1100 ? 415 : width < 1150 ? 413 : width < 1200 ? 410 : width < 1300 ? 380 : width < 1400 ? 360 : width < 1450 ? 340 : width < 1500 ? 320 : width < 1550 ? 300 : width < 1575 ? 290 : width < 1600 ? 280 : width < 1650 ? 270 : width < 1700 ? 260 : width < 1750 ? 258 : width < 1800 ? 254 : width < 1850 ? 250 : width < 1800 ? 248 : width < 1900 ? 246 : width < 1950 ? 244 : width < 2000 ? 242 : width < 2050 ? 240 : width < 2100 ? 230 : width < 2150 ? 225 : width < 2200 ? 220 : width < 2250 ? 215 : width < 2300 ? 210 : width < 2350 ? 205 : width < 2400 ? 200 : width < 2450 ? 195 : width < 2500 ? 189 : width < 2550 ? 190 : width < 2600 ? 186 : width < 2650 ? 184 : width < 2700 ? 182 : width < 2750 ? 180 : width < 2800 ? 178 : width < 2850 ? 174 : width < 2900 ? 170 : width < 3000 ? 166 : width < 3100 ? 162 : width < 3200 ? 156 : width < 3300 ? 152 : width < 3400 ? 146 : width < 3500 ? 140 : width < 3600 ? 134 : width < 3700 ? 130 : width < 3800 ? 126 : width < 3800 ? 122 : width < 3900 ? 118 : width < 4000 ? 114 : width < 4100 ? 110 : width < 4200 ? 106 : width < 4300 ? 104 : width < 4400 ? 102 : width < 4500 ? 100 : width < 4600 ? 98 : width < 4700 ? 96 : width < 4800 ? 94 : width < 4800 ? 92 : width < 4900 ? 90 : width < 5100 ? 88 : width < 5200 ? 86 : width < 5300 ? 84 : width < 5450 ? 82 : 84)));
  svg.style("user-select", "none").style("-webkit-user-select", "none").attr("id", "daylightapp");
  const margin = {top: 0, left: 16, right: 16, bottom: 0, inner: 32};
  const contentWidth = majwid - margin.left - margin.right - margin.inner;
  const columnWidth = contentWidth / 2;
  let selection = {
    date: this.value != null ? this.value.date : new Date(2022, new Date().getMonth(), new Date().getDate(), new Date().getHours()),
    hour: this.value != null ? this.value.hour : new Date(2022, new Date().getMonth(), new Date().getDate(), new Date().getHours()).getHours()
  }
  const renderPlot = () => {
    svg.selectAll("#plot *").remove();
    svg.select("#plot").call(daylightPlot, {
    vizwidth: columnWidth / (width < 300 ? 1.07 : width < 325 ? 1.08 : width < 350 ? 1.09 : width < 400 ? 1.1 : width < 450 ? 1.09 : width < 500 ? 1.08 : width < 540 ? 1.07 : width < 550 ? 1.06 : width < 560 ? 1.05 : width < 580 ? 1.04 : width < 590 ? 1.03 : width < 600 ? 1.02 : width < 610 ? 1.01 : width < 625 ? 1 : width < 650 ? 1 : width < 675 ? 1 : width < 700 ? 1 : width < 725 ? 1 : width < 750 ? 1 : width < 768 ? 1 : width < 769 ? 1 : width < 800 ? .96 : width < 825 ? .96 : width < 850 ? .94 : width < 875 ? .96 : width < 900 ? .98 : width < 925 ? 1 : width < 950 ? 1.02 : width < 975 ? 1.04 : width < 1000 ? 1.06 : width < 1025 ? .95 : width < 1050 ? .95 : width < 1100 ? .975 : width < 1150 ? 1 : width < 1200 ? 1.05 : width < 1225 ? 1.1 : width < 1250 ? 1.15 : width < 1275 ? 1.2 : width < 1300 ? 1.25 : width < 1350 ? 1.3 : width < 1400 ? 1.35 : width < 1450 ? 1.4 : width < 1500 ? 1.45 : width < 1600 ? 1.5 : width < 1650 ? 1.55 : width < 1700 ? 1.5 : width < 1800 ? 1.5 : width < 1900 ? 1.45 : width < 2000 ? 1.45 : width < 2200 ? 1.45 : width < 2400 ? 1.45 : width < 2600 ? 1.45 : width < 2800 ? 1.45 : width < 3000 ? 1.45 : width < 3200 ? 1.45 : width < 3400 ? 1.45 : width < 3600 ? 1.5 : width < 3800 ? 1.55 : width < 4000 ? 1.6 : width < 4700 ? 1.6 : width < 4800 ? 1.6 : width < 4900 ? 1.6 : width < 5000 ? 1.6 : width < 5600 ? 1.6 : 1.6),
    height: majwid * (width < 300 ? 1.12 : width < 340 ? 1.11 : width < 350 ? 1.1 : width < 360 ? 1.09 : width < 370 ? 1.08 : width < 380 ? 1.07 : width < 390 ? 1.06 : width < 400 ? 1.05 : width < 425 ? 1.04 : width < 450 ? 1.03 : width < 475 ? 1.02 : width < 500 ? 1.01 : width < 550 ? 1 : width < 600 ? 1 : width < 650 ? 1 : width < 700 ? 1 : width < 750 ? 1 : width < 769 ? 1 : width < 800 ? .93 : width < 850 ? .91 : width < 900 ? .92 : width < 950 ? .9 : width < 1000 ? .9 : width < 1050 ? .9 : width < 1100 ? .9 : width < 1200 ? 0.91 : width < 1300 ? 0.92 : width < 1400 ? .93 : width < 1500 ? .95 : width < 1600 ? .97 : width < 1700 ? .98 : width < 1800 ? .99 : width < 4800 ? 1 : width < 5600 ? 1 : 1),
      year: 2022,
      latitude: location[1],
      defaultDate: selection.date,
      defaultHour: selection.hour
    })
  }
  const renderSolarSystem = () => {
    svg.selectAll("#solar-system *").remove();
    svg.selectAll("#solar-system").call(solarSystem,
                                        majwid * (width < 350 ? .922 : width < 350 ? .92 : width < 450 ? .89 : width < 532 ? .89 : width < 769 ? .94 : width < 1000 ? .9 : width < 1100 ? .91 : width < 1200 ? .92 : width < 1300 ? .92 : width < 1400 ? .92 : width < 1500 ? .93 : width < 1600 ? .94 : .96),
                                        location,
                                        selection.date,
                                        selection.hour,
                                        window.darkmode);
  }
  // const renderGlobe = () => {
  //   svg.selectAll("#globe *").remove();
  //   svg.selectAll("#globe").call(globe, { vizwidth: columnWidth / 1.28, location, ...selection });
  // }
  const setSelection = (newSelection, forceRender = false) => {
    const prev = {...selection};
    selection = newSelection;
    svg.node().value = selection;
    this.value = selection;
    set(viewof selectedDate, selection.date);
    set(viewof selectedHour, selection.hour);
    if (forceRender) {
      renderPlot();
      renderSolarSystem();
  //    renderGlobe();
    } else if (prev.hour !== selection.hour || prev.date !== selection.date) {
      renderSolarSystem();
  //    renderGlobe();
}
  }
  const plot = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(
    ${margin.left + (width < 275 ? -16 : width < 300 ? -14 : width < 325 ? -12 : width < 350 ? -9 : width < 375 ? -8 : width < 400 ? -4 : width < 425 ? 2 : width < 450 ? 4 : width < 475 ? 6 : width < 500 ? 11 : width < 550 ? 16 : width < 600 ? 18 : width < 650 ? 20 : width < 700 ? 20 : width < 769 ? 21 : width < 800 ? 63 : width < 900 ? 83 : width < 1000 ? 100 : width < 1100 ? 140 : width < 1200 ? 135 : width < 1300 ? 130 : width < 1400 ? 124 : width < 1500 ? 112 : width < 1600 ? 90 : width < 1700 ? 80 : width < 1800 ? 30 : width < 1900 ? 20 : width < 2000 ? 10 : width < 2100 ? 5 : 0)},
    ${width < 300 ? -90 : width < 325 ? -90 : width < 350 ? -90 : width < 375 ? -90 : width < 400 ? -90 : width < 425 ? -90 : width < 450 ? -90 : width < 500 ? -91 : width < 550 ? -92 : width < 600 ? -92 : width < 650 ? -91 : width < 675 ? -91 : width < 700 ? -91 : width < 750 ? -91 : width < 760 ? -91 : width < 768 ? -91 : width < 769 ? -170 : width < 780 ? -170 : width < 790 ? -170 : width < 800 ? -174 : width < 825 ? -178 : width < 850 ? -184 : width < 900 ? -186 : width < 950 ? -186 : width < 975 ? -186 : width < 992 ? -186 : width < 1000 ? -180 : width < 1025 ? -190 : width < 1050 ? -192 : width < 1075 ? -196 : width < 1100 ? -200 : width < 1150 ? -200 : width < 1200 ? -200 : width < 1250 ? -190 : width < 1300 ? -190 : width < 1320 ? -180 : width < 1340 ? -180 : width < 1360 ? -180 : width < 1380 ? -185 : width < 1400 ? -185 : width < 1420 ? -185 : width < 1450 ? -200 : width < 1480 ? -205 : width < 1500 ? -210 : width < 1520 ? -210 : width < 1540 ? -220 : width < 1560 ? -224 : width < 1580 ? -228 : width < 1600 ? -235 : width < 1620 ? -235 : width < 1640 ? -235 : width < 1660 ? -245 : width < 1680 ? -250 : width < 1700 ? -255 : width < 1720 ? -265 : width < 1740 ? -270 : width < 1760 ? -280 : width < 1780 ? -285 : width < 1800 ? -290 : width < 1820 ? -295 : width < 1840 ? -305 : width < 1860 ? -310 : width < 1880 ? -315 : width < 1900 ? -320 : width < 1925 ? -330 : width < 1950 ? -335 : width < 1975 ? -340 : width < 2000 ? -350 : width < 2025 ? -360 : width < 2050 ? -365 : width < 2075 ? -370 : width < 2100 ? -380 : width < 2125 ? -380 : width < 2150 ? -385 : width < 2175 ? -395 : width < 2200 ? -410 : width < 2225 ? -400 : width < 2250 ? -415 : width < 2275 ? -420 : width < 2300 ? -430 : width < 2325 ? -430 : width < 2350 ? -440 : width < 2375 ? -450 : width < 2400 ? -460 : width < 2425 ? -450 : width < 2450 ? -465 : width < 2475 ? -470 : width < 2500 ? -482 : width < 2525 ? -485 : width < 2550 ? -500 : width < 2575 ? -510 : width < 2600 ? -520 : width < 2625 ? -520 : width < 2650 ? -530 : width < 2675 ? -545 : width < 2700 ? -555 : width < 2725 ? -555 : width < 2750 ? -565 : width < 2775 ? -575 : width < 2800 ? -585 : width < 2825 ? -590 : width < 2850 ? -595 : width < 2875 ? -600 : width < 2900 ? -610 : width < 2925 ? -610 : width < 2950 ? -620 : width < 2975 ? -630 : width < 3000 ? -645 : width < 3025 ? -640 : width < 3050 ? -660 : width < 3075 ? -670 : width < 3100 ? -680 : width < 3125 ? -670 : width < 3150 ? -685 : width < 3175 ? -695 : width < 3200 ? -705 : width < 3225 ? -705 : width < 3250 ? -720 : width < 3275 ? -730 : width < 3300 ? -740 : width < 3325 ? -730 : width < 3350 ? -740 : width < 3375 ? -750 : width < 3400 ? -760 : width < 3425 ? -750 : width < 3450 ? -760 : width < 3475 ? -770 : width < 3500 ? -780 : width < 3525 ? -770 : width < 3550 ? -780 : width < 3575 ? -790 : width < 3600 ? -800 : width < 3625 ? -800 : width < 3650 ? -810 : width < 3675 ? -815 : width < 3700 ? -825 : width < 3725 ? -825 : width < 3750 ? -840 : width < 3775 ? -850 : width < 3800 ? -860 : width < 3825 ? -830 : width < 3850 ? -840 : width < 3875 ? -850 : width < 3900 ? -855 : width < 3925 ? -850 : width < 3950 ? -860 : width < 3975 ? -870 : width < 4000 ? -875 : width < 4025 ? -865 : width < 4050 ? -875 : width < 4075 ? -890 : width < 4100 ? -900 : width < 4125 ? -880 : width < 4150 ? -890 : width < 4175 ? -895 : width < 4200 ? -905 : width < 4225 ? -910 : width < 4250 ? -920 : width < 4275 ? -930 : width < 4300 ? -940 : width < 4325 ? -950 : width < 4350 ? -960 : width < 4400 ? -970 : width < 4425 ? -975 : width < 4450 ? -980 : width < 4475 ? -985 : width < 4500 ? -990 : width < 4525 ? -1000 : width < 4550 ? -1005 : width < 4575 ? -1020 : width < 4600 ? -1030 : width < 4650 ? -1030 : width < 4700 ? -1055 : width < 4750 ? -1060 : width < 4800 ? -1080 : width < 4850 ? -1070 : width < 4900 ? -1085 : width < 4950 ? -1095 : width < 5000 ? -1115 : width < 5025 ? -1130 : width < 5050 ? -1140 : width < 5075 ? -1150 : width < 5100 ? -1160 : width < 5125 ? -1155 : width < 5150 ? -1160 : width < 5200 ? -1180 : width < 5225 ? -1175 : width < 5250 ? -1185 : width < 5275 ? -1195 : width < 5300 ? -1210 : width < 5325 ? -1205 : width < 5350 ? -1210 : width < 5375 ? -1220 : width < 5400 ? -1235 : width < 5420 ? -1245 : width < 5440 ? -1255 : width < 5450 ? -1265 : width < 5460 ? -1280 : width < 5480 ? -1295 : width < 5500 ? -1310 : width < 5525 ? -1315 : width < 5550 ? -1325 : width < 5575 ? -1335 : width < 5600 ? -1345 : width < 5625 ? -1360 : width < 5650 ? -1370 : width < 5675 ? -1380 : width < 5700 ? -1390 : width < 5720 ? -1400 : width < 5740 ? -1410 : width < 5760 ? -1415 : width < 5780 ? -1430 : width < 5800 ? -1440 : width < 5825 ? -1460 : width < 5850 ? -1470 : width < 5875 ? -1480 : -1495})`);
  svg.append("g")
    .attr("id", "solar-system")
    .attr("transform", `translate(
    ${margin.left + (width < 300 ? -1 : width < 350 ? 0 : width < 400 ? 3 : width < 425 ? 4 : width < 450 ? 5 : width < 475 ? 6 : width < 500 ? 7 : width < 516 ? 8 : width < 532 ? 9 : width < 600 ? -3 : width < 650 ? -2 : width < 700 ? -1 : width < 750 ? 0 : width < 769 ? 0 : width < 800 ? 30 : width < 900 ? 32 : width < 1000 ? 36 : width < 1100 ? 80 : width < 1200 ? 74 : width < 1225 ? 74 : width < 1250 ? 72 : width < 1275 ? 68 : width < 1300 ? 66 : width < 1400 ? 58 : width < 1450 ? 40 : width < 1500 ? 45 : width < 1600 ? 25 : width < 1700 ? 0 : width < 1750 ? -54 : width < 1800 ? -52 : width < 1900 ? -60 : width < 2000 ? -70 : width < 2100 ? -75 : width < 2200 ? -80 : width < 2300 ? -84 : width < 2400 ? -88 : width < 2500 ? -98 : width < 2600 ? -108 : width < 2700 ? -118 : width < 2800 ? -120 : width < 2900 ? -122 : width < 3000 ? -124 : width < 3100 ? -126 : width < 3200 ? -128 : width < 3300 ? -130 : width < 3400 ? -132 : width < 3500 ? -134 : width < 3600 ? -136 : width < 3700 ? -138 : width < 3800 ? -140 : width < 3900 ? -142 : width < 4000 ? -144 : width < 4100 ? -146 : width < 4200 ? -148 : width < 4300 ? -150 : width < 4400 ? -155 : width < 4500 ? -160 : width < 4600 ? -165 : width < 4700 ? -170 : width < 4800 ? -175 : width < 4900 ? -180 : width < 5000 ? -185 : width < 5200 ? -190 : width < 5400 ? -190 : width < 5600 ? -190 : width < 5800 ? -190 : -200)},
    ${width < 280 ? 66 : width < 290 ? 70 : width < 300 ? 74 : width < 310 ? 80 : width < 320 ? 86 : width < 330 ? 92 : width < 340 ? 98 : width < 350 ? 104 : width < 360 ? 110 : width < 370 ? 114 : width < 380 ? 118 : width < 390 ? 122 : width < 400 ? 126 : width < 410 ? 134 : width < 420 ? 142 : width < 425 ? 146 : width < 430 ? 150 : width < 440 ? 158 : width < 450 ? 162 : width < 460 ? 164 : width < 470 ? 170 : width < 480 ? 176 : width < 490 ? 180 : width < 500 ? 192 : width < 510 ? 200 : width < 520 ? 206 : width < 530 ? 212 : width < 540 ? 218 : width < 550 ? 224 : width < 560 ? 230 : width < 570 ? 236 : width < 580 ? 240 : width < 590 ? 250 : width < 600 ? 260 : width < 610 ? 265 : width < 620 ? 270 : width < 630 ? 275 : width < 640 ? 280 : width < 650 ? 290 : width < 660 ? 295 : width < 670 ? 300 : width < 680 ? 305 : width < 690 ? 310 : width < 700 ? 315 : width < 710 ? 320 : width < 720 ? 325 : width < 730 ? 330 : width < 740 ? 335 : width < 760 ? 340 : width < 768 ? 350 : width < 769 ? 270 : width < 770 ? 290 : width < 780 ? 290 : width < 800 ? 290 : width < 825 ? 310 : width < 850 ? 325 : width < 875 ? 335 : width < 900 ? 340 : width < 950 ? 360 : width < 975 ? 370 : width < 1000 ? 380 : width < 1050 ? 450 : width < 1100 ? 470 : width < 1150 ? 485 : width < 1200 ? 490 : width < 1250 ? 470 : width < 1300 ? 480 : width < 1350 ? 475 : width < 1400 ? 480 : width < 1440 ? 470 : width < 1450 ? 470 : width < 1480 ? 470 : width < 1500 ? 470 : width < 1520 ? 470 : width < 1540 ? 475 : width < 1550 ? 470 : width < 1560 ? 465 : width < 1600 ? 460 : width < 1620 ? 450 : width < 1640 ? 460 : width < 1660 ? 460 : width < 1680 ? 460 : width < 1700 ? 470 : width < 1720 ? 480 : width < 1780 ? 490 : width < 1800 ? 500 : width < 1820 ? 520 : width < 1880 ? 530 : width < 1920 ? 550 : width < 1970 ? 560 : width < 2000 ? 570 : width < 2100 ? 580 : width < 2200 ? 590 : width < 2300 ? 600 : width < 2400 ? 610 : width < 2500 ? 635 : width < 2600 ? 670 : width < 2700 ? 690 : width < 2800 ? 710 : width < 2900 ? 720 : width < 2950 ? 730 : width < 3000 ? 750 : width < 3100 ? 775 : width < 3200 ? 790 : width < 3250 ? 790 : width < 3300 ? 805 : width < 3400 ? 810 : width < 3450 ? 815 : width < 3500 ? 820 : width < 3550 ? 815 : width < 3600 ? 825 : width < 3700 ? 835 : width < 3750 ? 830 : width < 3800 ? 835 : width < 3850 ? 830 : width < 3900 ? 840 : width < 4000 ? 840 : width < 4100 ? 850 : width < 4200 ? 860 : width < 4250 ? 870 : width < 4300 ? 880 : width < 4325 ? 890 : width < 4350 ? 900 : width < 4400 ? 905 : width < 4500 ? 910 : width < 4550 ? 925 : width < 4600 ? 930 : width < 4650 ? 935 : width < 4700 ? 940 : width < 4800 ? 950 : width < 4850 ? 950 : width < 4900 ? 960 : width < 4950 ? 970 : width < 5000 ? 980 : width < 5050 ? 985 : width < 5100 ? 990 : width < 5150 ? 1005 : width < 5250 ? 1035 : width < 5300 ? 1010 : width < 5325 ? 1035 : width < 5350 ? 1060 : width < 5450 ? 1075 : width < 5500 ? 1080 : width < 5550 ? 1095 : width < 5600 ? 1110 : 1200})`);
  // svg.append("g")
  //   .attr("id", "globe")
  //   .attr("transform", `translate(${margin.left + margin.inner + columnWidth / 2 + 20}, ${margin.top + height / 1.2 + 4})`);
  setSelection(selection, true);
  const handleDateHourChange = ({ target, detail: { date, hour }}) => {
    if (date != null && hour != null) setSelection({...selection, date, hour});
  }
  svg.node().addEventListener(EventType.DateHourChange, handleDateHourChange, false);
  return svg.node();
}
```

</div>

# Annual day aggregate (ada)

The red<font color=red>—</font>line indicates a “day of year”
(<a href="#doy" id="dayofyear" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a>), ${selDateHsl}, and the red🔴dot
denotes a “time of day”
(<a href="#tod" id="timeofday" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>): ${selTimeDay}. A
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a> identifies a day in a year like a
[Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
month and “day of month”
(<a href="#dom" id="dayofmonth" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of month">dom</a>). A
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> specifies a point in a day like an
“hour minute second” (<a href="#hms" id="hourminutesecond" class="tool"
data-bs-toggle="tooltip" data-bs-title="hour minute second">hms</a>)
triplet. Together, a
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a> and
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> can form a “annual day aggregate”
(<a href="#ada" id="annualdayaggregate" class="tool"
data-bs-toggle="tooltip" data-bs-title="annual day aggregate">ada</a>):
${selAdaDay}.

<div id="equationgroup00" class="equationgroup">

<span id="eq-ada">
$$\begin{split}
\text{ada\\\\} & = \text{doy} + \text{tod} \\
\lfloor\text{ada}\rfloor & = \text{doy} \\
\end{split} \qquad(1)$$
</span>

</div>

As their names suggest,
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="days of year">doy</a> and
<a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregates">ada</a> are measured in days. The
[measurement
unit](https://en.wikipedia.org/wiki/Unit_of_measurement#:~:text=a%20definite%20magnitude%20of%20a%20quantity)
of a <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> can be a day or a
[submultiple](https://en.wikipedia.org/wiki/Multiple_%28mathematics%29#Submultiple:~:text=of%20%22a%20being-,a%20unit%20fraction,-of%20b%22%20)
of a day. By changing how a decimal
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> is measured, we can shift its
[decimal
separator](https://en.wikipedia.org/wiki/Decimal_separator#:~:text=a%20symbol%20that%20separates%20the%20integer%20part%20from%20the%20fractional%20part%20of%20a%20number)
or turn it into an integer. The
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tod</a> along the y-axis of the area chart
are integers because they have three digits and are measured in
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a day">millidays</span>.

# Epochal day aggregate (eda)

To obtain a <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> from a
<a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregate">ada</a>, we can [keep the remainder
after
dividing](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
by one to isolate the [decimal
part](https://en.wikipedia.org/wiki/Fractional_part#:~:text=the%20excess%20beyond%20that%20number%27s%20integer%20part)
of the
[quotient](https://en.wikipedia.org/wiki/Quotient#:~:text=a%20quantity%20produced%20by%20the%20division%20of%20two%20numbers):
${zeroAdaHsl}
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
1 = ${zeroTimeHsl0}. We can use this same approach to separate a
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> from an “epochal day aggregate”
(<a href="#eda" id="epochaldayaggregate" class="tool"
data-bs-toggle="tooltip" data-bs-title="epochal day aggregate">eda</a>):
${zeroDoteHsl} mod 1 = ${zeroTimeHsl1}. The current
<a href="#eda" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregate">eda</a> tells us how many days
have passed since the Dec
[epoch](https://en.wikipedia.org/wiki/Epoch#:~:text=an%20instant%20in%20time%20chosen%20as%20the%20origin%20of%20a%20particular%20calendar%20era).

<div id="equationgroup01" class="equationgroup">

<span id="eq-todmod">
$$\begin{split}
\text{tod} &= \text{ada} \bmod  1 &&= \text{eda} \bmod  1 \\
\text{tod} &= \text{ada} - \text{doy} &&= \text{eda} - \lfloor\text{eda}\rfloor
\end{split} \qquad(2)$$
</span>

</div>

When provided with an
<a href="#eda" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregate">eda</a> instead of a
<a href="#doe" id="dayofera" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of era">doe</a>, the Dec date equations return an
<a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregate">ada</a> instead of a
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a>. While
<a href="#doe" class="tool" data-bs-toggle="tooltip"
data-bs-title="days of era">doe</a> and
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="days of year">doy</a> are integers,
<a href="#eda" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregates">eda</a> and
<a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregates">ada</a> each have a decimal part
called a “time of day”
(<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>). We can obtain an
<a href="#eda" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregate">eda</a> by passing a
<a href="#yoe" id="yearofera" class="tool" data-bs-toggle="tooltip"
data-bs-title="year of era">yoe</a> and
<a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregate">ada</a> to the Dec eda equations or
by summing a <a href="#doe" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of era">doe</a> and a
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>.

<div id="equationgroup02" class="equationgroup">

<span id="eq-eda">
$$\text{eda} = \text{coe}\times146097 + \text{yoc}\times365 + \lfloor\frac{\text{yoc}}{4}\rfloor - \lfloor\frac{\text{yoc}}{100}\rfloor + \text{ada} \qquad(3)$$
</span>

<span id="eq-tod">
tod = eda mod  1 = ada mod  1   (4)
</span>

<span id="eq-doe">
doe = ⌊eda⌋ = eda − tod   (5)
</span>

<span id="eq-doy">
doy = ⌊ada⌋ = ada − tod   (6)
</span>

<span id="eq-edasum">
eda = doe + tod   (7)
</span>

<span id="eq-adasum">
ada = doy + tod   (8)
</span>

</div>

## UNIX time equation

Similarly, [UNIX
time](https://en.wikipedia.org/wiki/Unix_time#:~:text=the%20number%20of%20non%2Dleap%20seconds%20that%20have%20elapsed%20since%2000%3A00%3A00%20UTC%20on%201%C2%A0January%201970%2C%20the%20Unix%20epoch)
tallies the seconds since the [UNIX
epoch](https://en.wikipedia.org/wiki/Unix_time#:~:text=00%3A00%3A00%20UTC%20on%201%C2%A0January%201970),
which is exactly 719468 days after the Dec epoch. To get the
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> in Zone
<span class="color0">0</span>, the Dec time zone that is in between the
two leftmost vertical lines on the map🗺️, we can divide UNIX time by the
[number of seconds in a
day](https://en.wikipedia.org/wiki/Day#:~:text=average%2C%20this%20is-,24%20hours%20(86%2C400%20seconds),-.%20As%20a%20day)
and then keep the remainder after dividing the resulting days by one:

<div id="equationgroup03" class="equationgroup">

<span id="eq-unixtod">
tod = unix ÷ 86400 mod  1   (9)
</span>

</div>

## Julian date equation

[Julian
dates](https://en.wikipedia.org/wiki/Julian_day#:~:text=the%20Julian%20day%20number%20plus%20the%20fraction%20of%20a%20day%20since%20the%20preceding%20noon)
track the days since the beginning of the [Julian
period](https://en.wikipedia.org/wiki/Julian_day#:~:text=a%20chronological%20interval%20of%207980%C2%A0years%2C%20derived%20from%20three%20multi%2Dyear%20cycles:%20the%20Indiction%2C%20Solar%2C%20and%20Lunar%20cycles)
and thus are akin to
<a href="#eda" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregates">eda</a>. We can produce a Zone
<span class="color5">5</span>
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> from a [Julian
date](https://en.wikipedia.org/wiki/Julian_day#:~:text=the%20Julian%20day%20number%20plus%20the%20fraction%20of%20a%20day%20since%20the%20preceding%20noon)
simply by keeping the remainder after dividing by one. If we want a Zone
<span class="color0">0</span>
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> instead, we should add
<span class="color5">5</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="tenths of a day">decidays</span>
to the Julian date before converting it to a
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> to ensure that the final result is
less than one day:

<div id="equationgroup04" class="equationgroup">

<span id="eq-juliantod">
tod = (julian + 0.5) mod  1   (10)
</span>

</div>

# Hour minute second

We can also obtain a Zone <span class="color0">0</span>
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> from a [Coordinated Universal
Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#:~:text=the%20primary%20time%20standard%20globally%20used%20to%20regulate%20clocks%20and%20time)
(<a href="#utc" id="coordinateduniversaltime" class="tool"
data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</a>)
<a href="#hms" class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</a> triplet by summing its
components after converting them to fractional days, as shown in the
equation below. The [computer
programming](https://en.wikipedia.org/wiki/Computer_programming#:~:text=the%20composition%20of%20sequences%20of%20instructions%2C%20called%20programs%2C%20that%20computers%20can%20follow%20to%20perform%20tasks)
code in the [tabset
panel](https://quarto.org/docs/interactive/layout.html#tabset-panel)
beneath the equation compares
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tod</a> derived from
<a href="#utc" class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</a> and UNIX time as
Quarto was
[rendering](https://quarto.org/docs/get-started/hello/rstudio.html#rendering:~:text=When%20rendering%2C%20Quarto%20generates%20a%20new%20file%20that%20contains%20selected%20text%2C%20code%2C%20and%20results)
this webpage.

<div id="equationgroup05" class="equationgroup">

<span id="eq-hmstod">
$$\text{tod} = \frac{\text{hour}}{24} + \frac{\text{minute}}{1440} + \frac{\text{second}}{86400} \qquad(11)$$
</span>

</div>

<div class="panel-tabset" data-group="language">

### Julia

``` julia
using Dates
hms = now(UTC)
```

    2026-09-24T04:34:55.992

``` julia
hour(hms) / 24 +
minute(hms) / 1440 +
second(hms) / 86400 +
millisecond(hms) / 864e5
```

    0.19092583333333332

``` julia
datetime2unix(hms) / 86400 % 1
```

    0.19092583333622315

### Observable JavaScript

``` {ojs}
hms = new Date();
hms.getUTCHours() / 24 +
hms.getUTCMinutes() / 1440 +
hms.getUTCSeconds() / 86400 +
hms.getUTCMilliseconds() / 864e5;
hms.getTime() / 864e5 % 1;
```

### Python

``` python
from datetime import datetime, timezone
hms = datetime.now(timezone.utc)
hms.hour / 24 + \
hms.minute / 1440 + \
hms.second / 86400 + \
hms.microsecond / 864e8
```

    0.19093379358796295

``` python
hms.timestamp() / 86400 % 1
```

    0.190933793586737

### R

``` r
hms <- as.POSIXlt(Sys.time(), tz = "UTC")
hms$hour / 24 +
hms$min / 1440 +
hms$sec / 86400
```

    [1] 0.190934

``` r
(as.numeric(as.POSIXct(hms)) / 86400) %% 1
```

    [1] 0.190934

</div>

The equations below convert UNIX time or a Zone
<span class="color0">0</span>
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> into the three components of an
<a href="#hms" class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</a> triplet: the “hour of day”
(<a href="#hod" id="hourofday" class="tool" data-bs-toggle="tooltip"
data-bs-title="hour of day">hod</a>), “minute of hour”
(<a href="#moh" id="minuteofhour" class="tool" data-bs-toggle="tooltip"
data-bs-title="minute of hour">moh</a>), and “second of minute”
(<a href="#som" id="secondofminute" class="tool" data-bs-toggle="tooltip"
data-bs-title="second of minute">som</a>), using a “daily second
aggregate” (<a href="#dsa" id="dailysecondaggregate" class="tool"
data-bs-toggle="tooltip" data-bs-title="daily second aggregate">dsa</a>)
and “hourly second aggregate”
(<a href="#hsa" id="hourlysecondaggregate" class="tool"
data-bs-toggle="tooltip" data-bs-title="hourly second aggregate">hsa</a>).
While both count seconds,
<a href="#dsa" class="tool" data-bs-toggle="tooltip"
data-bs-title="daily second aggregates">dsa</a> start at midnight and
<a href="#hsa" class="tool" data-bs-toggle="tooltip"
data-bs-title="hourly second aggregates">hsa</a> begin at the [top of
the hour](https://en.wiktionary.org/wiki/top_of_the_hour).

<div id="equationgroup06" class="equationgroup">

<span id="eq-hms">
$$\begin{split}
\text{dsa} & = \text{tod} \times 86400 = \text{unix} \bmod  86400 \\
\text{hsa} & = \text{dsa} \bmod  3600 \\
\text{hod} & = \lfloor \text{dsa} \div 3600 \rfloor \\
\text{moh} & = \lfloor \text{hsa} \div 60 \rfloor \\
\text{som} & = \lfloor \text{hsa} \bmod  60 \rfloor
\end{split} \qquad(12)$$
</span>

</div>

<div class="panel-tabset" data-group="language">

### Julia

``` julia
using Dates
dsa = datetime2unix(now(UTC)) / 86400 % 1 * 86400
```

    16496.744999836665

``` julia
hsa = dsa % 3600
```

    2096.7449998366646

``` julia
map(x -> floor(Int, x), (dsa / 3600, hsa / 60, hsa % 60))
```

    (4, 34, 56)

### Observable JavaScript

``` {ojs}
dsa = Date.now() / 864e5 % 1 * 86400;
hsa = dsa % 3600;
[dsa / 3600, hsa / 60, hsa % 60].map(Math.floor)
```

### Python

``` python
from datetime import datetime, timezone
dsa = datetime.now(timezone.utc).timestamp() / 86400 % 1 * 86400
hsa = dsa % 3600
tuple(map(int, [dsa // 3600, hsa // 60, hsa % 60 // 1]))
```

    (4, 34, 56)

### R

``` r
dsa <- (as.numeric(as.POSIXct(Sys.time())) / 86400) %% 1 * 86400
hsa <- dsa %% 3600
sapply(c(dsa %/% 3600, hsa %/% 60, hsa %% 60), as.integer)
```

    [1]  4 34 56

</div>

# Universal time offset

The [Global Positioning
System](https://en.wikipedia.org/wiki/Global_Positioning_System#:~:text=a%20satellite%2Dbased%20hyperbolic%20navigation%20system),
[BeiDou](https://en.wikipedia.org/wiki/BeiDou#:~:text=a%20satellite%2Dbased%20radio%20navigation%20system),
and
[Galileo](https://en.wikipedia.org/wiki/Galileo_(satellite_navigation)#:~:text=a%20global%20navigation%20satellite%20system%20(GNSS)%20created%20by%20the%20European%20Union)
[global navigation satellite
systems](https://en.wikipedia.org/wiki/Satellite_navigation#:~:text=a%20satellite%20navigation%20system%20with%20global%20coverage)
along with most — if not all — [programming
languages](https://en.wikipedia.org/wiki/Programming_language#:~:text=a%20system%20of%20notation%20for%20writing%20source%20code%20such%20as%20used%20to%20produce%20a%20computer%20program)
do not account for [leap
seconds](https://en.wikipedia.org/wiki/Leap_second#:~:text=one%2Dsecond%20adjustment),
which appears to be for the best given that leap seconds will be
[abolished by
2035](https://en.wikipedia.org/wiki/Leap_second#:~:text=at%20the%2027th%20General%20Conference%20on%20Weights%20and%20Measures%2C%20it%20was%20decided%20to%20abandon%20the%20leap%20second%20by%20or%20before%202035).
The goal of leap seconds is to keep
<a href="#utc" class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</a> within
[25/24](https://en.wikipedia.org/wiki/Leap_second#:~:text=to%20ensure%20that%20the%20difference%20between%20the%20UTC%20and%20UT1%20readings%20will%20never%20exceed%200.9%20seconds)
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hundred thousands of a day">centimillidays</span>
(<a href="#cmd" id="centimilliday" class="tool" data-bs-toggle="tooltip"
data-bs-title="centimillidays">cmd</a>) of [Universal
Time](https://en.wikipedia.org/wiki/Universal_Time#Versions:~:text=a%20time%20standard%20based%20on%20Earth%27s%20rotation)
(<a href="#ut" id="universaltime" class="tool" data-bs-toggle="tooltip"
data-bs-title="Universal Time">UT</a>).

Instead of leap seconds, Dec matches
<a href="#ut" class="tool" data-bs-toggle="tooltip"
data-bs-title="Universal Time">UT</a> using a “[universal
time](https://en.wikipedia.org/wiki/Universal_Time#:~:text=a%20time%20standard%20based%20on%20Earth%27s%20rotation)
[offset](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place)”
(<a href="#uto" id="universaltimeoffset" class="tool"
data-bs-toggle="tooltip" data-bs-title="universal time offset">uto</a>).
With the [leap second insertion
dates](https://en.wikipedia.org/wiki/Leap_second#:~:text=Announced%20leap%20seconds%20to%20date)
provided by the [International Earth Rotation and Reference Systems
Service](https://en.wikipedia.org/wiki/International_Earth_Rotation_and_Reference_Systems_Service#:~:text=the%20body%20responsible%20for%20maintaining%20global%20time%20and%20reference%20frame%20standards),
we can approximate the
<a href="#uto" class="tool" data-bs-toggle="tooltip"
data-bs-title="universal time offset">uto</a> that yields
<a href="#ut" class="tool" data-bs-toggle="tooltip"
data-bs-title="Universal Time">UT</a> when added to the Zone
<span class="color0">0</span>
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> on the [Dec date](../../dec/date)
chosen by the
[range](https://observablehq.com/framework/inputs/range)🎚️inputs below:
${leapCountHsl} ÷ 8640 = ${leapTzoHsl0}.

``` {ojs}
//| echo: false
//| label: dateinput
//| class: slider
viewof leapSecondYear = Inputs.range([1970, 2020], {label: "Year", value: 1995, step: 1})
viewof leapSecondDate = Inputs.range([0, 365], {label: "Day", value: 182, step: 1})
```

# Rounded offset decimal

Of the twenty eight <a href="#uto" class="tool" data-bs-toggle="tooltip"
data-bs-title="universal time offsets">uto</a> that can be shown in the
equation above, one is an integer, one is a [terminating
decimal](https://en.wikipedia.org/wiki/Repeating_decimal#:~:text=a%20finite%20number%20of%20nonzero%20digits),
and the rest are [repeating
decimals](https://en.wikipedia.org/wiki/Repeating_decimal#:~:text=the%20same%20sequence%20of%20digits%20is%20repeated%20forever).
To express a repeating decimal
<a href="#uto" class="tool" data-bs-toggle="tooltip"
data-bs-title="universal time offset">uto</a>, Dec uses an [irreducible
fraction](https://en.wikipedia.org/wiki/Irreducible_fraction#:~:text=a%20fraction%20in%20which%20the%20numerator%20and%20denominator%20are%20integers%20that%20have%20no%20other%20common%20divisors%20than%201)
that is called an “exact offset fraction”
(<a href="#eof" id="exactoffsetfraction" class="tool"
data-bs-toggle="tooltip" data-bs-title="exact offset fraction">eof</a>)
when by itself or a “[rounding
error](https://en.wikipedia.org/wiki/Round-off_error#:~:text=the%20difference%20between%20the%20result%20produced%20by%20a%20given%20algorithm%20using%20exact%20arithmetic%20and%20the%20result%20produced%20by%20the%20same%20algorithm%20using%20finite%2Dprecision%2C%20rounded%20arithmetic)
fraction” (<a href="#ref" id="roundofferrorfraction" class="tool"
data-bs-toggle="tooltip" data-bs-title="roundoff error fraction">ref</a>)
if it follows a “rounded offset decimal”
(<a href="#rod" id="roundedoffsetdecimal" class="tool"
data-bs-toggle="tooltip" data-bs-title="rounded offset decimal">rod</a>).

In the equation below, the
<a href="#uto" class="tool" data-bs-toggle="tooltip"
data-bs-title="universal time offset">uto</a> is the minuend, the
<a href="#rod" class="tool" data-bs-toggle="tooltip"
data-bs-title="rounded offset decimal">rod</a> is the subtrahend, and
the <a href="#ref" class="tool" data-bs-toggle="tooltip"
data-bs-title="roundoff error fraction">ref</a> is the difference. Dec
uses the term minuend expansion to describe the replacement of a minuend
with a subtrahend and a difference. By replacing a repeating decimal
<a href="#uto" class="tool" data-bs-toggle="tooltip"
data-bs-title="universal time offset">uto</a> with a
<a href="#rod" class="tool" data-bs-toggle="tooltip"
data-bs-title="rounded offset decimal">rod</a> and a
<a href="#ref" class="tool" data-bs-toggle="tooltip"
data-bs-title="roundoff error fraction">ref</a>, we can show the initial
digits of the <a href="#uto" class="tool" data-bs-toggle="tooltip"
data-bs-title="universal time offset">uto</a> as a decimal and the rest
as a fraction.

<div id="equationgroup07" class="equationgroup">

<span id="eq-ref">
uto − rod = ref   (13)
</span>

</div>

Use the first three range🎚️inputs below to select an
<a href="#hms" class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</a> triplet to be converted to
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span>, plugged into the
equation above as the
<a href="#uto" class="tool" data-bs-toggle="tooltip"
data-bs-title="universal time offset">uto</a>, rounded to the number of
digits chosen by the fourth range🎚️input, and inserted into the equation
as the <a href="#rod" class="tool" data-bs-toggle="tooltip"
data-bs-title="rounded offset decimal">rod</a>. Once the left-hand side
of the equation is complete, we can solve it to get the
<a href="#ref" class="tool" data-bs-toggle="tooltip"
data-bs-title="roundoff error fraction">ref</a>: ${hmsTzoHsl} –
${hmsRodHsl} = ${hmsRefHsl}.

``` {ojs}
//| echo: false
//| label: hmsinput
//| class: slider
viewof hmsinput = Inputs.form([
  Inputs.range([0, 23], {label: "Hour", value: 11, step: 1}),
  Inputs.range([0, 59], {label: "Minute", value: 0, step: 1}),
  Inputs.range([0, 59], {label: "Second", value: 0, step: 1}),
])
```

``` {ojs}
//| echo: false
//| label: diginput
//| class: slider
viewof digits = Inputs.range([1, 9], {label: "Digits", value: 3, step: 1})
```

# Time zone offset

In Dec, a <a href="#uto" class="tool" data-bs-toggle="tooltip"
data-bs-title="universal time offset">uto</a> can be any type of number,
a “time zone offset”
(<a href="#tzo" id="timezoneoffset" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offset">tzo</a>) is an integer, a “solar time
offset” (<a href="#sto" id="solartimeoffset" class="tool"
data-bs-toggle="tooltip" data-bs-title="solar time offset">sto</a>) is a
terminating decimal, and an
<a href="#eof" class="tool" data-bs-toggle="tooltip"
data-bs-title="exact offset fraction">eof</a> is a repeating decimal. If
we derived <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</span> offsets from all 86400
of the <a href="#hms" class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</a> triplets that can be selected
by the range🎚️inputs above, we would have 10
<a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offsets">tzo</a>, 3190
<a href="#sto" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar time offsets">sto</a>, and 83200
<a href="#eof" class="tool" data-bs-toggle="tooltip"
data-bs-title="exact offset fractions">eof</a> or
<a href="#rod" class="tool" data-bs-toggle="tooltip"
data-bs-title="rounded offset decimal">rod</a> and
<a href="#ref" class="tool" data-bs-toggle="tooltip"
data-bs-title="roundoff error fraction">ref</a> pairs.

## Coordinated Universal Time (UTC)

When we do the same to the
[38](https://en.wikipedia.org/wiki/List_of_UTC_offsets)
<a href="#utc" class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</a> offsets, we get only
<a href="#eof" class="tool" data-bs-toggle="tooltip"
data-bs-title="exact offset fractions">eof</a> or
<a href="#rod" class="tool" data-bs-toggle="tooltip"
data-bs-title="rounded offset decimal">rod</a> and
<a href="#ref" class="tool" data-bs-toggle="tooltip"
data-bs-title="roundoff error fraction">ref</a> pairs unless the number
of leaps seconds included is zero or a multiple of 27. If the leap
second count is zero or a multiple of 8640, we will get 3
<a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offsets">tzo</a>, 9
<a href="#sto" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar time offsets">sto</a>, and 26
<a href="#eof" class="tool" data-bs-toggle="tooltip"
data-bs-title="exact offset fractions">eof</a> or
<a href="#rod" class="tool" data-bs-toggle="tooltip"
data-bs-title="rounded offset decimal">rod</a> and
<a href="#ref" class="tool" data-bs-toggle="tooltip"
data-bs-title="roundoff error fraction">ref</a> pairs. The 3
<a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offsets">tzo</a> will be
<a href="#sto" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar time offsets">sto</a> if the number of leap seconds
is a multiple of 27 but not 8640.

There are 14 negative and 24 positive
<a href="#utc" class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</a> offsets. The
<a href="#utc" class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</a> time zone with [the
most negative
offset](https://en.wikipedia.org/wiki/UTC%E2%88%9212:00#:~:text=a%20nautical%20time%20zone%20comprising%20the%20high%20seas%20between%20180%C2%B0%20and%20172%C2%B030%E2%80%B2W%20longitude)
is completely uninhabited. The bar📊chart below visualizes
[Socioeconomic Data and Applications
Center](https://www.earthdata.nasa.gov/centers/sedac-daac) data from
2020 regarding the population of each
<a href="#utc" class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</a> time zone. The vast
majority of all people live in
<a href="#utc" class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</a> time zones with
positive offsets.

``` {ojs}
//| echo: false
//| label: timezonepoptoggles
//| class: togs
// https://observablehq.com/@mattdzugan/population-by-time-zone-creating-a-dataset
viewof sortParams = Inputs.form([
  Inputs.toggle({ label: "Sort ascending" }),
  Inputs.toggle({ label: "Sort by offset" }),
  ])
```

``` {ojs}
//| echo: false
//| label: timezonepopstackedbar
//| class: stackedbar
// https://observablehq.com/@mattdzugan/population-by-time-zone-creating-a-dataset
Plot.plot({
  width: Math.min(width, 1000),
  height: 100 + Math.min(width / 25, 20),
  marginBottom: 50,
  style: `overflow: visible;font-size:${15 + Math.min(width / 90, 11)}px;`,
  color: {scheme: "RdBu", className: "barPlotLegend"},
  marginLeft: 80 + Math.min(width / 100, 20),
  y: { label: null },
  x: { grid: true, label: "Population (billions)", labelOffset: 45 + Math.min(width / 90, 22), transform: d => d / 1e9 },
  marks: [
    Plot.barX(sortedPop, {x: "pop", y: "Sign", fill: "Offset", stroke: "black", tip: true }),
  ]
})
```

Negative <a href="#utc" class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</a> offsets only exist in
[the
Americas](https://en.wikipedia.org/wiki/Americas#:~:text=a%20landmass%20comprising%20the%20totality%20of%20North%20America%20and%20South%20America)
and islands in the
[Atlantic](https://en.wikipedia.org/wiki/List_of_islands_in_the_Atlantic_Ocean)
and
[Pacific](https://en.wikipedia.org/wiki/List_of_islands_in_the_Pacific_Ocean)
Oceans. Therefore, the bar📊chart above is essentially comparing the
Americas to the rest of the world. According to 2021 [United Nations
Department of Economic and Social
Affairs](https://en.wikipedia.org/wiki/United_Nations_Department_of_Economic_and_Social_Affairs#:~:text=part%20of%20the%20United%20Nations%20Secretariat)
data, about one billion out of a total of almost eight billion people
live in the Americas.

Whenever a negative offset is associated with a Dec date, a
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>, or both a date and a
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>, Dec will add one day to the date
and ten <span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span> to the offset without
modifying the <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>. This typically occurs after the
conversion of an <a href="#hms" class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</a> triplet to a
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> or a “year month day”
(<a href="#ymd" id="yearmonthday" class="tool" data-bs-toggle="tooltip"
data-bs-title="year month day">ymd</a>) triplet to a Dec date. As a
result, all Dec dates and
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tod</a> have positive offsets.

Dec will not change a negative offset or its associated
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a> if the result of adding one day to
the <a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a> is uncertain. This uncertainly can
only exist if we do not know whether a
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a> that is equal to 364 belongs to a
common or leap year. The day after Day <span class="tool"
data-bs-toggle="tooltip" data-bs-title="February 28">364</span> of a
common year is Day <span class="tool" data-bs-toggle="tooltip"
data-bs-title="March 1">0</span> of the subsequent year. In a leap year,
Day <span class="tool" data-bs-toggle="tooltip"
data-bs-title="February 28">364</span> precedes Day <span class="tool"
data-bs-toggle="tooltip" data-bs-title="February 29">365</span>.

# Day of week

Even though it has no effect on the
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>, adding one day to the
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a> also increments the “day of month”
(<a href="#dom" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of month">dom</a>) and “day of week”
(<a href="#dow" id="dayofweek" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of week">dow</a>) shown by Dec. The table below shows
how someone accustomed to a negative offset could intrepret Dec
<a href="#dow" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of week">dow</a> numbers. From the perspective of a
negative offset user, the
<a href="#dom" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of month">dom</a> and
<a href="#dow" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of week">dow</a> in Dec will be one day ahead.

<div class="overflowtable">

<table>
<thead>
<tr>
<th>Saturday</th>
<th>Sunday</th>
<th>Monday</th>
<th>Tuesday</th>
<th>Wednesday</th>
<th>Thursday</th>
<th>Friday</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>5</td>
<td>6</td>
</tr>
<tr>
<td>-7</td>
<td>-6</td>
<td>-5</td>
<td>-4</td>
<td>-3</td>
<td>-2</td>
<td>-1</td>
</tr>
</tbody>
</table>

The one day difference between positive and negative offsets may make
Dec <a href="#dow" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of week">dow</a> numbers more intuitive than
[POSIX](https://pubs.opengroup.org/onlinepubs/007904875/utilities/date.html#:~:text=weekday%20as%20a%20decimal%20number%20%5B0%2C6%5D%20(0%3Dsunday))
<a href="#dow" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of week">dow</a> numbers for people who consider
[Sunday to be the first \[dow\](#dow){.tool data-bs-toggle=“tooltip”
data-bs-title=“day of
week”}](https://en.wikipedia.org/wiki/Names_of_the_days_of_the_week#:~:text=Sunday%20comes%20first,-in%20order%20in).
According to the [Common Locale Data
Repository](https://en.wikipedia.org/wiki/Week#:~:text=World%20map%20showing%20the%20first%20day%20of%20the%20week%20used%20in%20different%20countries)
and a [2023 population
ranking](https://en.wikipedia.org/w/index.php?title=List_of_countries_in_the_Americas_by_population&oldid=1310903194#Table),
over 89% of people in the Americas live in a country that starts the
week on Sunday.

# Longitude and offsets

In Dec, offsets are closely related to
[longitude](https://en.wikipedia.org/wiki/Longitude#:~:text=denoted%20by%20the%20Greek%20letter%20lambda).
Dec measures longitude in
[parallels](https://en.wikipedia.org/wiki/Circle_of_latitude#:~:text=an%20abstract%20east%E2%80%93west%20small%20circle%20connecting%20all%20locations%20around%20Earth%20(ignoring%20elevation)%20at%20a%20given%20latitude%20coordinate%20line)
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="parallel">λ</span>) or submultiples of <span class="tool"
data-bs-toggle="tooltip" data-bs-title="parallels">λ</span> like
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a parallel">deci[parallels](https://en.wikipedia.org/wiki/Circle_of_latitude#:~:text=an%20abstract%20east%E2%80%93west%20small%20circle%20connecting%20all%20locations%20around%20Earth%20(ignoring%20elevation)%20at%20a%20given%20latitude%20coordinate%20line)</span>
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="deciparallels">dλ</span>). A
<a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offset">tzo</a> is essentially a
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="deciparallel">dλ</span> longitude that had its decimal
part removed via
[rounding](https://en.wikipedia.org/wiki/Rounding#:~:text=the%20process%20of%20adjusting%20a%20number%20to%20an%20approximate%2C%20more%20convenient%20value),
[flooring](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions#:~:text=takes%20as%20input%20a%20real%20number%20x%2C%20and%20gives%20as%20output%20the%20greatest%20integer%20less%20than%20or%20equal%20to%20x),
[truncation](https://en.wikipedia.org/wiki/Truncation#Truncation_and_floor_function:~:text=truncation%20is%20limiting%20the%20number%20of%20digits%20right%20of%20the%20decimal%20point),
or
[ceiling](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions#:~:text=maps%20x%20to%20the%20least%20integer%20greater%20than%20or%20equal%20to%20x).
Whereas <a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offsets">tzo</a> have one digit,
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</span>
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tod</a> and
<a href="#sto" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar time offsets">sto</a> typically have up to four
digits after the [decimal
separator](https://en.wikipedia.org/wiki/Decimal_separator#:~:text=a%20symbol%20that%20separates%20the%20integer%20part%20from%20the%20fractional%20part%20of%20a%20number).

The fourth digit in the decimal part of any current deciday
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> increments <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="a hundred thousand">10<sup>5</sup></span> times per day,
100 times per <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a thousandth of a day">milliday</span>, or once per
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="a hundred thousandth of a day">beat</span>
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="inverse of beat">iob</span>), which is the [lower
bound](https://en.wikipedia.org/wiki/Upper_and_lower_bounds#:~:text=an%20element%20of%20K%20that%20is%20less%20than%20or%20equal%20to%20every%20element%20of%20S)
of the [normal resting heart
rate](https://en.wikipedia.org/wiki/Heart_rate#:~:text=normal%20resting%20adult%20human%20heart%20rate%20is%2060–100%20bpm)
of an adult. For [everyday
life](https://en.wikipedia.org/wiki/Everyday_life), we should limit the
length of <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tod</a> to the three digits needed to show
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a day">millidays</span>
(<a href="#md" id="milliday" class="tool" data-bs-toggle="tooltip"
data-bs-title="millidays">md</a>) or the five digits required to display
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hundred thousandths of a day">beats</span>
(<a href="#b" id="beat" class="tool" data-bs-toggle="tooltip"
data-bs-title="beats">b</a>).

When the current <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> has seven digits, the sixth digit
changes too quickly to be read out loud and the seventh changes so fast
that it appears as a blur. Near the Equator, a longitude that has seven
digits is accurate to within about ten <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="zone equatorial meters">zem</span> (z) or four
[meters](https://en.wikipedia.org/wiki/Metre#:~:text=the%20base%20unit%20of%20length%20in%20the%20International%20System%20of%20Units),
which is roughly the length of a [subcompact
car](https://www.dimensions.com/collection/subcompact-cars-b-segment) or
the width of a [U-shaped living room
layout](https://www.dimensions.com/collection/living-room-layouts).

The Equator is approximately (<span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>)
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="one thousand">10<sup>3</sup></span> <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="thousandths of a taur">millitaurs</span>
(<a href="#mc" id="millitaur" class="tool" data-bs-toggle="tooltip"
data-bs-title="millitaurs">mc</a>), <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>4 ×
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="ten thousand">10<sup>4</sup></span> <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="thousands of meters">kilometers</span>
(<a href="#km" id="kilometer" class="tool" data-bs-toggle="tooltip"
data-bs-title="kilometers">km</a>), or <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="approximately">~</span><span class="tool"
data-bs-toggle="tooltip"
data-bs-title="a hundred thousand">10<sup>5</sup></span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousands of zone equatorial meters">kilozem</span>
(<a href="#kz" id="kilozem" class="tool" data-bs-toggle="tooltip"
data-bs-title="kilozems">kz</a>) long. If we move 1
<a href="#mc" class="tool" data-bs-toggle="tooltip"
data-bs-title="millitaurs">mc</a>, 40
<a href="#km" class="tool" data-bs-toggle="tooltip"
data-bs-title="kilometers">km</a>, or 100
<a href="#kz" class="tool" data-bs-toggle="tooltip"
data-bs-title="kilozems">kz</a> to the East or West on or near the
Equator, our <a href="#sto" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar time offset">sto</a> will change by
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span>1
<a href="#md" class="tool" data-bs-toggle="tooltip"
data-bs-title="millidays">md</a>, <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>1.44
minutes, or <span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span>100
<a href="#b" class="tool" data-bs-toggle="tooltip"
data-bs-title="beat">b</a> and our longitude will shift by
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span>0.36 degrees, <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>1
milliparallel (<span class="tool" data-bs-toggle="tooltip"
data-bs-title="milliparallel">mλ</span>), <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>21.6
<a href="https://en.wikipedia.org/wiki/Minute_and_second_of_arc"
class="tool" data-bs-toggle="tooltip"
data-bs-title="a sixtieth of a degree">arcminutes</a>, or
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span>100 arcbeats
(<a href="#ab" id="arcbeat" class="tool" data-bs-toggle="tooltip"
data-bs-title="arcbeats">ab</a>).

For precise
[geopositioning](https://en.wikipedia.org/wiki/Geopositioning#:~:text=estimating%20the%20geographic%20position%20of%20an%20object%20or%20a%20person),
it may be helpful to show [geographic
coordinates](https://en.wikipedia.org/wiki/Geographic_coordinate_system#:~:text=for%20measuring%20and%20communicating%20positions%20directly%20on%20Earth%20as%20latitude%20and%20longitude)
in submultiples of <a href="#ab" class="tool" data-bs-toggle="tooltip"
data-bs-title="arcbeats">ab</a>, but we are unlikely to benefit from
units smaller than <a href="#md" class="tool" data-bs-toggle="tooltip"
data-bs-title="millidays">md</a> when displaying the [solar
time](https://en.wikipedia.org/wiki/Solar_time#:~:text=a%20calculation%20of%20the%20passage%20of%20time%20based%20on%20the%20position%20of%20the%20Sun%20in%20the%20sky)
or estimates of what the
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> will be when the Sun rises, reaches
its
[zenith](https://en.m.wikipedia.org/wiki/Noon#:~:text=highest%20position%20above%20the%20horizon),
or sets on a given day. By default, Dec uses three digits to show each
solar time and <a href="#sto" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar time offset">sto</a>.

# Equation of time

The two types of [solar
time](https://en.wikipedia.org/wiki/Solar_time#:~:text=a%20calculation%20of%20the%20passage%20of%20time%20based%20on%20the%20position%20of%20the%20Sun%20in%20the%20sky)
are [“mean solar
time”](https://en.wikipedia.org/wiki/Solar_time#Mean_solar_time:~:text=it%20follows%20an%20imaginary%20%22mean%20Sun%22%20that%20moves%20along%20the%20celestial%20equator%20at%20a%20constant%20rate%20that%20matches%20the%20real%20Sun%27s%20average%20rate%20over%20the%20year)
(<a href="#mst" id="meansolartime" class="tool" data-bs-toggle="tooltip"
data-bs-title="mean solar time">mst</a>) and [“apparent solar
time”](https://en.wikipedia.org/wiki/Solar_time#Mean_solar_time:~:text=it%20follows%20an%20imaginary%20%22mean%20Sun%22%20that%20moves%20along%20the%20celestial%20equator%20at%20a%20constant%20rate%20that%20matches%20the%20real%20Sun%27s%20average%20rate%20over%20the%20year)
(<a href="#ast" id="apparentsolartime" class="tool"
data-bs-toggle="tooltip" data-bs-title="apparent solar time">ast</a>).
To calculate <a href="#mst" class="tool" data-bs-toggle="tooltip"
data-bs-title="mean solar time">mst</a>, we keep only the decimal part
of the sum of 0.95, the Zone <span class="color0">0</span>
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> measured in days, and our longitude
measured in <span class="tool" data-bs-toggle="tooltip"
data-bs-title="parallel">λ</span>. If we want
<a href="#ast" class="tool" data-bs-toggle="tooltip"
data-bs-title="apparent solar time">ast</a> instead of
<a href="#mst" class="tool" data-bs-toggle="tooltip"
data-bs-title="mean solar time">mst</a>, the sum needs to include the
result of plugging the “time of year”
(<a href="#toy" id="timeofyear" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of year">toy</a>) into the [“equation of
time”](https://en.wikipedia.org/wiki/Equation_of_time#:~:text=the%20discrepancy%20between%20two%20kinds%20of%20solar%20time)
(<a href="#eot" id="equationoftime" class="tool" data-bs-toggle="tooltip"
data-bs-title="equation of time">eot</a>).

<div id="equationgroup08" class="equationgroup">

<span id="eq-toy">
toy = ada ÷ n   (14)
</span>

<span id="eq-mst">
mst = (0.95 + tod + *λ*) mod  1   (15)
</span>

<span id="eq-ast">
ast = (0.95 + tod + *λ* + eot(toy)) mod  1   (16)
</span>

</div>

To obtain the <a href="#toy" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of year">toy</a>, we divide the
<a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregate">ada</a> by the number of days in
the year (<span class="tool" data-bs-toggle="tooltip"
data-bs-title="the number of days in the year">n</span>). If we use
[trigonometric
functions](https://en.wikipedia.org/wiki/Trigonometric_functions#:~:text=functions%20which%20relate%20an%20angle%20of%20a%20right%2Dangled%20triangle%20to%20ratios%20of%20two%20side%20lengths)
that are designed to work with
[radians](https://en.wikipedia.org/wiki/Radian#:~:text=the%20unit%20of%20angle%20in%20the%20International%20System%20of%20Units),
we will have to multiply the
<a href="#toy" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of year">toy</a> by 2*π* or *τ*. We do not need to
modify the <a href="#toy" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of year">toy</a> before passing it to the
<a href="#eot" class="tool" data-bs-toggle="tooltip"
data-bs-title="equation of time">eot</a>() function defined below
because its trigonometric functions expect
[turns](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=a%20unit%20of%20plane%20angle%20measurement%20equal%20to%202%CF%80%C2%A0radians%2C%20360%C2%A0degrees)
instead of radians.

<div id="equationgroup09" class="equationgroup">

<span id="eq-eot">
$$\begin{split}
\text{eot(toy)} & = \beta_0 \\
& + \beta_1 \times \text{costau(toy)} \\
& + \beta_2 \times \text{costau(2} \times \text{toy)} \\
& + \beta_3 \times \text{sintau(toy)} \\
& + \beta_4 \times \text{sintau(2} \times \text{toy)}
\end{split} \qquad(17)$$
</span>

</div>

<div class="panel-tabset" data-group="language">

### Julia

``` julia
sincostau(x) = sincospi(2 * x)
```

    sincostau (generic function with 1 method)

``` julia
sincostau(0.25)
```

    (1.0, 0.0)

``` julia
sincostau(0.5)
```

    (0.0, -1.0)

``` julia
sincos(0.25 * 2 * pi)
```

    (1.0, 6.123233995736766e-17)

``` julia
sincos(0.5 * 2 * pi)
```

    (1.2246467991473532e-16, -1.0)

### Observable JavaScript

``` {ojs}
sincospi = require(
  'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincospi@umd/browser.js'
  )
function sincostau(x) {
  return sincospi(2 * x);
}
function sincos(x) {
  x *= 2 * Math.PI
  return [Math.sin(x), Math.cos(x)]
}
sincostau(0.25)
sincostau(0.5)
sincos(0.25)
sincos(0.5)
```

### Python

``` python
from math import cos, sin, pi
from mpmath import cospi, sinpi

def sincostau(x):
    x *= 2
    return sinpi(x), cospi(x)

def sincos(x):
    x *= 2 * pi
    return sin(x), cos(x)

sincostau(0.25)
```

    (mpf('1.0'), mpf('0.0'))

``` python
sincostau(0.5)
```

    (mpf('0.0'), mpf('-1.0'))

``` python
sincos(0.25)
```

    (1.0, 6.123233995736766e-17)

``` python
sincos(0.5)
```

    (1.2246467991473532e-16, -1.0)

### R

``` r
sincostau <- function(x) {
  x <- 2 * x
  c(sinpi(x), cospi(x))
}

sincos <- function(x) {
  x <- 2 * x * pi
  c(sin(x), cos(x))
}

sincostau(0.25)
```

    [1] 1 0

``` r
sincostau(0.5)
```

    [1]  0 -1

``` r
sincos(0.25)
```

    [1] 1.000000e+00 6.123234e-17

``` r
sincos(0.5)
```

    [1]  1.224647e-16 -1.000000e+00

</div>

The code above compares two functions which return both the
[sine](https://en.wikipedia.org/wiki/Sine_and_cosine#:~:text=the%20ratio%20of%20the%20length%20of%20the%20side%20opposite%20that%20angle%20to%20the%20length%20of%20the%20longest%20side%20of%20the%20triangle)
and
[cosine](https://en.wikipedia.org/wiki/Sine_and_cosine#:~:text=the%20ratio%20of%20the%20length%20of%20the%20adjacent%20leg%20to%20that%20of%20the%20hypotenuse)
of their input. The sincos() function assumes it will receive radians
and the sincostau() works with turns. In general, working with turns is
more convenient and intuitive. The examples above demonstrate that using
turns instead of radians can [yield more accurate
results](https://en.wikipedia.org/wiki/Sine_and_cosine#:~:text=Representing%20angles%20in%20turns%20or%20half%2Dturns%20has%20accuracy%20advantages).

The values below are the coefficients of a model adapted from the
[National Oceanic and Atmospheric Administration](https://www.noaa.gov)
(<a href="#noaa" id="nationaloceanicandatmosphericadministration"
class="tool" data-bs-toggle="tooltip"
data-bs-title="National Oceanic and Atmospheric Administration">NOAA</a>)
[General Solar Position
Calculations](https://gml.noaa.gov/grad/solcalc/solareqns.PDF). Before
[fitting](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.curve_fit.html)
the model to <a href="#noaa" class="tool" data-bs-toggle="tooltip"
data-bs-title="National Oceanic and Atmospheric Administration">NOAA</a>
[yearly solar data](https://gml.noaa.gov/grad/solcalc/calcdetails.html),
we need to convert
eot(<a href="#toy" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of year">toy</a>) values from minutes to <a
href="https://en.wikipedia.org/wiki/Unit_of_time#:~:text=14.4%20minutes%2C%20or%20864%20seconds"
class="tool" data-bs-toggle="tooltip"
data-bs-title="hundredths of a day">centidays</a>, combine
<a href="#ymd" class="tool" data-bs-toggle="tooltip"
data-bs-title="year month day">ymd</a> triplet dates and
<a href="#hms" class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</a> triplet times into
<a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregates">ada</a>, and sort by
<a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregate">ada</a>.

<div class="quarto-embed-nb-cell"
data-notebook="/Users/martinlaptev/maptv/maptv.github.io/dec/time/eot.ipynb"
data-notebook-title="Bonus examples"
data-notebook-cellId="cell-eotcoef">

    {0: 0.0011114386869002235,
     1: -4.155124400404918,
     2: -2.9710873225303756,
     3: -4.635570414590801,
     4: 5.116176940364264}

</div>

``` {ojs}
//| echo: false
//| label: eotplot
// https://observablehq.com/@mcmcclur/plot-for-mathematicians
{
  let w = 800;
  let h = 0.625 * w;
  let samples = build_samples(
    getEot, -366, 365, { N: 150 }
  );
  let plot = Plot.plot({
    marginLeft: 60,
    width: w,
    height: h,
    style: "font-size:19;",
    y: {label: "milliday eot(toy)"},
    x: {label: "day of year"},
    marks: [
      Plot.line(samples, {
        strokeWidth: 4,
        stroke: "steelblue",
        tip: true
      }),
      Plot.ruleX([-366]),
      Plot.ruleY([0]),
      Plot.axisX({ y: 0 }),
      Plot.axisY({ x: -366 })
    ]
  });
  return plot;
}
```

The
[line📈chart](https://en.wikipedia.org/wiki/Line_chart#:~:text=a%20type%20of%20chart%20that%20displays%20information%20as%20a%20series%20of%20data%20points%20called%20%27markers%27%20connected%20by%20straight%20line%20segments)
above uses <a href="#md" class="tool" data-bs-toggle="tooltip"
data-bs-title="millidays">md</a> to display
<a href="#eot" class="tool" data-bs-toggle="tooltip"
data-bs-title="equation of time">eot</a>(<a href="#toy" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of year">toy</a>) values as integers. There is
little difference between
<a href="#mst" class="tool" data-bs-toggle="tooltip"
data-bs-title="mean solar time">mst</a> and
<a href="#ast" class="tool" data-bs-toggle="tooltip"
data-bs-title="apparent solar time">ast</a> around Days
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="April 15">45</span>, <span class="tool"
data-bs-toggle="tooltip" data-bs-title="June 12">103</span>,
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="September 1">184</span>, and <span class="tool"
data-bs-toggle="tooltip" data-bs-title="December 25">299</span>. The
difference ranges from about -9.8 on <span class="tool"
data-bs-toggle="tooltip" data-bs-title="October 31">Day 244</span> to
around 11.4 <a href="#md" class="tool" data-bs-toggle="tooltip"
data-bs-title="millidays">md</a> on <span class="tool"
data-bs-toggle="tooltip" data-bs-title="February 14">Day 350</span>. We
can calculate <a href="#mst" class="tool" data-bs-toggle="tooltip"
data-bs-title="mean solar time">mst</a> with just a
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> and a longitude and we will be off
by at most about a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a hundredth of a day">centiday</span> compared to
<a href="#ast" class="tool" data-bs-toggle="tooltip"
data-bs-title="apparent solar time">ast</a>.

Apart from turning a
<a href="#mst" class="tool" data-bs-toggle="tooltip"
data-bs-title="mean solar time">mst</a> into an
<a href="#ast" class="tool" data-bs-toggle="tooltip"
data-bs-title="apparent solar time">ast</a>, we can also use
<a href="#eot" class="tool" data-bs-toggle="tooltip"
data-bs-title="equation of time">eot</a> to more accurately estimate the
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tod</a> of [solar
noon](https://en.wikipedia.org/wiki/Noon#:~:text=reaching%20its%20highest%20position%20above%20the%20horizon%20on%20that%20day%20and%20casting%20the%20shortest%20shadow),
sunrise, and sunset. The equation below creates a [solar
noon](https://en.wikipedia.org/wiki/Noon#:~:text=reaching%20its%20highest%20position%20above%20the%20horizon%20on%20that%20day%20and%20casting%20the%20shortest%20shadow)
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> measured in days by adding 9.55 to a
longitude measured in <span class="tool" data-bs-toggle="tooltip"
data-bs-title="parallel">λ</span>, subtracting a
<a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offset">tzo</a> and a
<a href="#eot" class="tool" data-bs-toggle="tooltip"
data-bs-title="equation of time">eot</a>(<a href="#toy" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of year">toy</a>) value that are both measured in
days, and keeping only the decimal part of the result.

<div id="equationgroup10" class="equationgroup">

<span id="eq-solarnoon">
solarnoon = (9.55 + tzo − *λ* − eot(toy)) mod  1   (18)
</span>

</div>

# Cambridge and Cambridge

To compare the solar noon
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> in two cities, we can plug in the
longitude of each city into the equation above. If all the variables in
the equation other than longitude are set to zero, the result is almost
five <span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span> for [Cambridge,
England](https://en.wikipedia.org/wiki/Cambridge#:~:text=a%20city%20and%20non%2Dmetropolitan%20district%20in%20the%20county%20of%20Cambridgeshire%2C%20England)
in the [United
Kingdom](https://en.wikipedia.org/wiki/United_Kingdom#:~:text=a%20country%20in%20Northwestern%20Europe)
and nearly seven <span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span> for [Cambridge,
Massachusetts](https://en.wikipedia.org/wiki/Cambridge,_Massachusetts#:~:text=a%20city%20in%20Middlesex%20County%2C%20Massachusetts%2C%20United%20States)
in the [United
States](https://en.wikipedia.org/wiki/United_States#:~:text=a%20country%20primarily%20located%20in%20North%20America).

<div id="equationgroup11" class="equationgroup">

<span id="eq-cambridgeuk">
4.99635 = (9.55 − 0.050365) mod  1 × 10   (19)
</span>

<span id="eq-cambridgema">
6.97516 = (9.55 − 0.852484) mod  1 × 10   (20)
</span>

</div>

The two homonymous cities are about two <span class="tool"
data-bs-toggle="tooltip" data-bs-title="deciparallels">dλ</span> apart
and thus will always differ by around two <span class="tool"
data-bs-toggle="tooltip" data-bs-title="tenths of a day">decidays</span>
in solar time, regardless of what time zone we use as our frame of
reference. England is in Zone <span class="color0">0</span> and
Massachusetts is in Zone <span class="color8">8</span>. If we change the
<a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offset">tzo</a> from zero to eight
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span>, the solar noon
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> for each city will be two
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span> earlier.

<div id="equationgroup12" class="equationgroup">

<span id="eq-cambridgeuk8">
2.99635 = (9.55 + 0.8 − 0.050365) mod  1 × 10   (21)
</span>

<span id="eq-cambridgema8">
4.97516 = (9.55 + 0.8 − 0.852484) mod  1 × 10   (22)
</span>

</div>

# Full day arc

The path in the sky that the Sun appears to follow from a sunrise to a
sunset is a “[day
arc](https://en.wikipedia.org/wiki/Sun_path#:~:text=arc%2Dlike%20path%20that%20the%20Sun%20appears%20to%20follow%20across%20the%20sky)”
(<a href="#da" id="dayarc" class="tool" data-bs-toggle="tooltip"
data-bs-title="full day arc">da</a>). Solar noon, the midpoint of a
<a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a>, is halfway between sunrise and sunset.
On each side of solar noon is a “half day arc”
(<a href="#da2" id="halfdayarc" class="tool" data-bs-toggle="tooltip"
data-bs-title="half day arc">da/2</a>). The sum of a solar noon
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> and a
<a href="#da2" class="tool" data-bs-toggle="tooltip"
data-bs-title="half day arc">da/2</a> is a sunset
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> and the difference between a solar
noon <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> and a
<a href="#da2" class="tool" data-bs-toggle="tooltip"
data-bs-title="half day arc">da/2</a> is a sunrise
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>.

<div id="equationgroup13" class="equationgroup">

<span id="eq-sunsetsunrise">
$$\begin{split}
\text{sunset} & = \text{solarnoon} + \frac{\text{da}}{2} && = \text{sunrise} + \text{da} \\
\text{sunrise} & = \text{solarnoon} - \frac{\text{da}}{2} && = \text{sunset} - \text{da}
\end{split} \qquad(23)$$
</span>

</div>

## Full night arc

The Sun continues its path after it disappears below the horizon, moving
from sunset to sunrise along a “night arc”
(<a href="#na" id="nightarc" class="tool" data-bs-toggle="tooltip"
data-bs-title="night arc">na</a>). Like [conjugate
angles](https://en.wikipedia.org/wiki/Angle#:~:text=conjugate%20angles%20sum%20to%20a%20full%20angle),
a <a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> and a
<a href="#na" class="tool" data-bs-toggle="tooltip"
data-bs-title="night arc">na</a> form a full circle that represents one
day. Likewise, a <a href="#da2" class="tool" data-bs-toggle="tooltip"
data-bs-title="half day arc">da/2</a> and a “half night arc”
(<a href="#na2" id="halfnightarc" class="tool" data-bs-toggle="tooltip"
data-bs-title="half night arc">na/2</a>) are like two [supplementary
angles](https://en.wikipedia.org/wiki/Angle#:~:text=sum%20to%20a%20straight%20angle)
that form a semicircle from solar noon to the
<a href="#na" class="tool" data-bs-toggle="tooltip"
data-bs-title="night arc">na</a> midpoint: [solar
midnight](https://en.wikipedia.org/wiki/Midnight#:~:text=the%20time%20opposite%20to%20solar%20noon%2C%20when%20the%20Sun%20is%20closest%20to%20the%20nadir%2C%20and%20the%20night%20is%20equidistant%20from%20dusk%20and%20dawn).

<div id="equationgroup14" class="equationgroup">

<span id="eq-solarmidnight">
$$\text{solarmidnight} = \text{solarnoon} + \frac{\text{da}}{2} + \frac{\text{na}}{2} = \text{sunset} + \frac{\text{na}}{2} \qquad(24)$$
</span>

</div>

The range input below controls the yellow
<a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> and the blue
<a href="#na" class="tool" data-bs-toggle="tooltip"
data-bs-title="night arc">na</a> in the diagram beneath it. At the
Equator, the sunrise always rises about a quarter turn from North and
sets around three quarter turns from North, resulting in a
<a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> of approximately half a day: 75% – 25% =
50%. If <a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> is zero, a [polar
night](https://en.wikipedia.org/wiki/Polar_night#:~:text=the%20Sun%20remains%20below%20the%20horizon%20for%20more%20than%2024%C2%A0hours)
occurs. A day without a
<a href="#na" class="tool" data-bs-toggle="tooltip"
data-bs-title="night arc">na</a> is called a [polar
day](https://en.wikipedia.org/wiki/Midnight_sun#:~:text=the%20Sun%20remains%20visible%20at%20the%20local%20midnight).

``` {ojs}
//| echo: false
//| label: dayarcinput
//| class: slider
viewof dayArcInput = Inputs.range([0, 1000], {label: "Day arc", value: 375, step: 1})
```

``` {ojs}
//| echo: false
//| label: dayarcdiagram
{
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", daheight);
  svg.append("circle")
      .attr("stroke", window.darkmode ? "white" : "black")
      .attr("fill", "none")
      .attr("r", daradius)
      .attr("transform", `translate(${dacenter})`);
  const tick = svg.selectAll(".tick")
      .data([0, 45].map(n => d3.range(n, 360, 90)).flat().sort((a, b) => a - b))
    .enter().append("g")
      .attr("class", "tick");
  tick.append("polyline")
      .attr("points", d => [-3, 3].map(n => geometric.pointTranslate(dacenter, -d, daradius + n)))
      .attr("stroke", window.darkmode ? "white" : "black");
  tick.append("text")
      .attr("dy", d => d === 0 || d === 180 ? 4 : d > 0 && d < 180 ? 0 : 8)
      .attr("text-anchor", d => d < 90 || d > 270 ? "start" : d > 90 && d < 270 ? "end" : "middle")
      .attr("transform", d => `translate(${geometric.pointTranslate(dacenter, -d, daradius + (d === 270 ? 15 : d === 315 ? 14 : d === 225 ? 13 : 12))})`)
      .attr("font-family", "sans-serif")
      .attr("font-size", 16)
      .attr("fill", window.darkmode ? "white" : "black")
      .text(d => `${(1000-((d+270)%360)/.36)%1000}`);
  svg.append("polyline")
      .attr("stroke-width", 2)
      .attr("stroke", window.darkmode ? "violet" : "darkviolet")
      .attr("points", [dacenter, [daend[0], dacenter[1]]]);
  svg.append("polyline")
      .attr("stroke-width", 2)
      .attr("stroke", window.darkmode ? "red" : "darkred")
      .attr("points", [[daend[0], dacenter[1]], daend]);
  svg.append("polyline")
      .attr("stroke-width", 2)
      .attr("stroke", window.darkmode ? "slateblue" : "darkslateblue")
      .attr("points", [[dacenter, daend]]);
  svg.append("polyline")
      .attr("stroke-width", 2)
      .attr("stroke", window.darkmode ? "violet" : "darkviolet")
      .attr("points", [dacenter, [daend1[0], dacenter[1]]]);
  svg.append("polyline")
      .attr("stroke-width", 2)
      .attr("stroke", window.darkmode ? "red" : "darkred")
      .attr("points", [[daend1[0], dacenter[1]], [daend1[0], daend1[1]]]);
  svg.append("polyline")
      .attr("stroke-width", 2)
      .attr("stroke", window.darkmode ? "slateblue" : "darkslateblue")
      .attr("points", [[dacenter, [daend1[0], daend1[1]]]]);
  svg.append("path")
    .attr("transform", `translate(${dacenter})`)
    .attr("d", d3.arc()({
      innerRadius: 105,
      outerRadius: 110,
      startAngle: Math.PI - dayArcInput / 1000 * Math.PI,
      endAngle: Math.PI + dayArcInput / 1000 * Math.PI
    }))
    .attr("stroke", window.darkmode ? "white" : "black")
    .attr("fill", "gold");
  svg.append("path")
    .attr("transform", `translate(${dacenter})`)
    .attr("d", d3.arc()({
      innerRadius: 105,
      outerRadius: 110,
      startAngle: Math.PI - dayArcInput / 1000 * Math.PI,
      endAngle: dayArcInput / 1000 * Math.PI  - Math.PI
    }))
    .attr("stroke", window.darkmode ? "white" : "black")
    .attr("fill", "blue");
  return svg.node();
}
```

The diagram above can represent both a clock and a compass. In the
[Northern
Hemisphere](https://en.wikipedia.org/wiki/Northern_Hemisphere#:~:text=the%20half%20of%20Earth%20that%20is%20north%20of%20the%20equator),
solar time is essentially the same as the [“solar azimuth
angle”](https://en.wikipedia.org/wiki/Solar_azimuth_angle#:~:text=horizontal%20angle%20with%20respect%20to%20north)
(<a href="#saa" id="solarazimuthangle" class="tool"
data-bs-toggle="tooltip" data-bs-title="solar azimuth angle">saa</a>).
In the [Southern
Hemisphere](https://en.wikipedia.org/wiki/Southern_Hemisphere#:~:text=the%20half%20(hemisphere)%20of%20Earth%20that%20is%20south%20of%20the%20equator),
we would need to flip the diagram upside down for it to match the
<a href="#saa" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar azimuth angle">saa</a>. The bar chart below
compares the populations of the Northern and Southern Hemispheres.

``` {ojs}
//| echo: false
//| label: hemipoptoggles
//| class: togs
// https://observablehq.com/@mattdzugan/population-by-time-zone-creating-a-dataset
viewof sortParamsHemi = Inputs.form([
  Inputs.toggle({ label: "Sort ascending" }),
  Inputs.toggle({ label: "Sort by offset" }),
  ])
```

``` {ojs}
//| echo: false
//| label: hemipopstackedbar
//| class: stackedbar
Plot.plot({
  width: Math.min(width, 1000),
  height: 100 + Math.min(width / 25, 20),
  marginBottom: 50,
  style: `overflow: visible;font-size:${15 + Math.min(width / 90, 11)}px;`,
  color: {scheme: "RdBu", className: "barPlotLegend"},
  marginLeft: 90 + Math.min(width / 100, 20),
  y: { label: null },
  x: { grid: true, label: "Population (billions)", labelOffset: 40 + Math.min(width / 90, 22), transform: d => d},
  marks: [
    Plot.barX(sortedPopHemi, {x: "Population", y: "Hemisphere", fill: "Offset", stroke: "black", tip: true }),
  ]
})
```

Anyone can measure the
<a href="#saa" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar azimuth angle">saa</a> during the daytime by
pointing a compass at the point on the horizon below the Sun. In the
Northern Hemisphere, we can use this method to approximate solar time.
In the Southern Hemisphere, we can obtain solar time by measuring the
<a href="#saa" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar azimuth angle">saa</a> in turns and then
subtracting our measurement from one and a half turns:

<div id="equationgroup15" class="equationgroup">

<span id="eq-solartime">
$$\text{solartime} \approx \begin{cases}\text{saa}&{\text{if } \phi \geq 0;}\\(1.5 - \text{saa}) \bmod 1&{\text{otherwise.}}\end{cases} \qquad(25)$$
</span>

</div>

The clockwise path that the Sun follows in the Northern Hemisphere is
ingrained in the Belarussian, Polish, or Ukrainian languages. These
three Slavic languages each have one word for north or midnight and
another word for south or noon. In Dec, zero represents both north and
midnight, while both south and noon can be expressed as a half turn.

<div class="overflowtable">

<table>
<thead>
<tr>
<th>Turns</th>
<th>Direction</th>
<th>Time</th>
<th>Belarussian</th>
<th>Polish</th>
<th>Ukrainian</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>north</td>
<td>midnight</td>
<td>поўнач</td>
<td>północ</td>
<td>північ</td>
</tr>
<tr>
<td>0.5</td>
<td>south</td>
<td>noon</td>
<td>поўдзень</td>
<td>południe</td>
<td>південь</td>
</tr>
</tbody>
</table>

If we only want to know how long the Sun will shine on a given day, we
can use the top equation below to obtain a
<a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a>. Alternatively, if we are interested in
finding out when the Sun will rise or set on a given day, we will need
to calculate a <a href="#da2" class="tool" data-bs-toggle="tooltip"
data-bs-title="half day arc">da/2</a> using the bottom equation below
and then combine it with a solar noon
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> to get a sunrise or sunset
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>.

<div id="equationgroup16" class="equationgroup">

<span id="eq-da">
$$\text{da} = \frac{\arccos\left({\Large\frac{\text{costau(0.252314)} - \text{sintau($\phi$)} \times \text{sintau(sda)}}{\text{costau($\phi$)} \times \text{costau(sda)}}}\right)}{\pi} \qquad(26)$$
</span>

<span id="eq-halfda">
$$\frac{\text{da}}{2} = \frac{\arccos\left({\Large\frac{\text{costau(0.252314)} - \text{sintau($\phi$)} \times \text{sintau(sda)}}{\text{costau($\phi$)} \times \text{costau(sda)}}}\right)}{\tau} \qquad(27)$$
</span>

</div>

## Solar declination angle

The <a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> and
<a href="#da2" class="tool" data-bs-toggle="tooltip"
data-bs-title="half day arc">da/2</a> equations above require a latitude
and a “solar
[declination](https://en.wikipedia.org/wiki/Declination#:~:text=one%20of%20the%20two%20angles%20that%20locate%20a%20point%20on%20the%20celestial%20sphere%20in%20the%20equatorial%20coordinate%20system)
angle” (<a href="#sda" id="solardeclinationangle" class="tool"
data-bs-toggle="tooltip" data-bs-title="solar declination angle">sda</a>).
Dec measures latitude in turns called meridians (<span class="tool"
data-bs-toggle="tooltip" data-bs-title="meridians">φ</span>) or turn
submultiples such as millimeridians (<span class="tool"
data-bs-toggle="tooltip" data-bs-title="millimeridians">mφ</span>). For
simplicity, we can fit our
<a href="#eot" class="tool" data-bs-toggle="tooltip"
data-bs-title="equation of time">eot</a> model to
<a href="#sda" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar declination angle">sda</a> data instead of fitting
the needlessly complex
<a href="#sda" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar declination angle">sda</a> model provided by the
NOAA General Solar Position Calculations:

<div id="equationgroup17" class="equationgroup">

<span id="eq-sda">
$$\begin{split}
\text{sda(toy)} & = \beta_0 \\
& + \beta_1 \times \text{costau(toy)} \\
& + \beta_2 \times \text{sintau(toy)} \\
& + \beta_3 \times \text{costau(2} \times \text{toy)} \\
& + \beta_4 \times \text{sintau(2} \times \text{toy)} \\
& + \beta_5 \times \text{costau(3} \times \text{toy)} \\
& + \beta_6 \times \text{sintau(3} \times \text{toy)} \\
\end{split} \qquad(28)$$
</span>

</div>

The top range input below picks the
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a> that will become the
<a href="#toy" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of year">toy</a> in our fitted
<a href="#sda" class="tool" data-bs-toggle="tooltip"
data-bs-title="solar declination angle">sda</a> model. The other two
range inputs below chose the geographic coordinates that we need to find
the sunrise and sunset
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tod</a>. While the sunrise and sunset
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tod</a> depend on both geographic
coordinates, the <a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> varies only by latitude and not by
longitude: ${selectedSunset.toFixed(3)} – ${selectedSunrise.toFixed(3)}
= ${parseFloat(daytimeDuration.toFixed(3))}.

``` {ojs}
//| echo: false
//| label: doyinput
//| class: slider
viewof doyInput = Inputs.range([0, 365], {label: "Day of year", value: 183, step: 1})
```

``` {ojs}
//| echo: false
//| label: latinput
//| class: slider
viewof latInput = Inputs.range([-250, 250], {label: "Latitude", value: 0, step: 1})
```

``` {ojs}
//| echo: false
//| label: loninput
//| class: slider
viewof lonInput = Inputs.range([0, 1000], {label: "Longitude", value: 500, step: 1})
```

The equation controlled by range inputs above can be summarized as
sunset – sunrise = <a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> and can be rearranged into the sunrise
equation: sunrise = sunset –
<a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a>. If we plug the current
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> in place of the sunrise
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> in the sunrise equation without
changing the sunset <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>, the
<a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> will be replaced with the time until or
since sunset: ${selectedCurrent.toFixed(3)} =
${selectedSunset.toFixed(3)} ${selectedDifference \< 0 ? “–” : “+”}
${parseFloat(Math.abs(selectedDifference).toFixed(3))}.

The latest equation above is an example of a Dec span. From left to
right, this span consists of a
[minuend](https://en.wiktionary.org/wiki/minuend#:~:text=A%20number%20or%20quantity%20from%20which%20another%20is%20to%20be%20subtracted),
an equals sign (=),
[subtrahend](https://en.wikipedia.org/wiki/Subtraction#:~:text=number%20being%20subtracted),
a plus (+) or a minus (–) sign, and a
[difference](https://en.wikipedia.org/wiki/Subtraction#Notation_and_terminology:~:text=The%20result%20is%20the%20difference).
A minus sign indicates the difference is the time remaining **until**
sunset, whereas a plus sign means that the difference is the time that
has passed **since** sunset.

The difference shows the [remaining
time](https://en.wikipedia.org/wiki/Countdown#:~:text=the%20time%20remaining%20before%20an%20event)
as a negative number if the minuend is less than the substrahend or
displays the [elapsed
time](https://en.wikipedia.org/wiki/Mission_Elapsed_Time) as a positive
number if the minuend is greater than the subtrahend. In this way, the
difference can act like a [“T minus
countdown”](https://en.wikipedia.org/wiki/Countdown#:~:text=a%20sequence%20of%20backward%20counting%20to%20indicate%20the%20time%20remaining)
that becomes a [“T plus
countup”](https://en.wikipedia.org/wiki/Countdown#:~:text=After%20a%20launch%2C%20most%20countdown%20clocks%20begin%20to%20show%20Mission%20Elapsed%20Time) after
an event like a rocket🚀launch.

<div id="equationgroup18" class="equationgroup">

<span id="eq-difference">
$$\begin{cases}\text{difference}\<0&{\text{if } \text{minuend} \< \text{subtrahend};}\\\text{difference}=0&{\text{if minuend} = \text{subtrahend};}\\\text{difference}\>0&{\text{if minuend}\>\text{subtrahend.}}\end{cases} \qquad(29)$$
</span>

</div>

When the minuend is the current time and the subtrahend is the
[timestamp](https://en.wikipedia.org/wiki/Timestamp#:~:text=a%20sequence%20of%20characters%20or%20encoded%20information%20identifying%20when%20a%20certain%20event%20occurred)
of an event which occurred in the past, the difference is the time
elapsed since that event. A Dec timestamp consists of a year, a day, .
can be an <a href="#eda" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregate">eda</a>, a “epochal year
aggregate” (<a href="#eya" id="epochalyearaggregate" class="tool"
data-bs-toggle="tooltip" data-bs-title="epochal year aggregate">eya</a>),
or a snap🫰. Eda and eya are the time The typical snap format is
year<span class="mono">+</span><a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregate">ada</a><span class="mono">-</span><a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offset">tzo</a>. The snap
${loadYearHsl}<span class="mono">+</span>${loadAdaHsl}<span class="mono">-</span><span class="color0">0</span>
represents the <a href="#b" class="tool" data-bs-toggle="tooltip"
data-bs-title="beat">b</a> when this webpage loaded ${elaTimeHsl}
<a href="#b" class="tool" data-bs-toggle="tooltip"
data-bs-title="beats">b</a> ago.

# Epochal year aggregate (eya)

A <a href="#doe" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of era">doe</a> is essentially a Dec date with a
<a href="#yoe" class="tool" data-bs-toggle="tooltip"
data-bs-title="year of era">yoe</a> that is always equal to 0 and a
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a> that is [not
restricted](https://en.wikipedia.org/wiki/Bounded_set#:~:text=a%20set%20which%20is%20not%20bounded)
to 0 ≤ <a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a> ≤ 365. Similarly, a Dec “epochal
year aggregate” (<a href="#eya" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal year aggregate">eya</a>) is basically a Dec date
with a non-integer year and a day permanently set to
<span class="color0">0</span>. We can obtain a Dec date by passing a doe
Both <a href="#doe" class="tool" data-bs-toggle="tooltip"
data-bs-title="days of era">doe</a> and
<a href="#eya" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal year aggregates">eya</a> allow us to represent a
date as a single number and obtain the difference between two dates.

<div id="equationgroup19" class="equationgroup">

<span id="eq-cda">
cda = de − coe × 146097   (30)
</span>

<span id="eq-yocdoc">
$$\text{yoc} = \biggl \lfloor \frac{\text{doc} - \lfloor \frac{\text{doc}}{1460} \rfloor + \lfloor \frac{\text{doc}}{36524} \rfloor - \lfloor \frac{\text{doc}}{146096} \rfloor}{365} \biggr \rfloor \qquad(31)$$
</span>

<span id="eq-yoe">
yoe = yoc + coe × 400   (32)
</span>

<span id="eq-doydoc">
$$\text{doy} = \biggl \lfloor \text{doc} - \text{yoc} \times 365 - \lfloor \frac{\text{yoc}}{4} \rfloor + \lfloor \frac{\text{yoc}}{100} \rfloor \biggr \rfloor \qquad(33)$$
</span>

</div>

Compared to a <a href="#doe" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of era">doe</a>, it is much easier to convert between
an <a href="#eya" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal year aggregate">eya</a> and a to turn into Dec
dates. The decimal part of an
<a href="#eya" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal year aggregate">eya</a> is a called a
<a href="#toy" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of year">toy</a>. We can convert between dates to
<a href="#eya" class="tool" data-bs-toggle="tooltip"
data-bs-title="times of year">eya</a> with the equations below. We can
obtain a <a href="#yoe" class="tool" data-bs-toggle="tooltip"
data-bs-title="year of era">yoe</a> by flooring an
<a href="#eya" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal year aggregate">eya</a>. Likewise, we can obtain
a <span class="cyan under tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</span> by flooring the product of
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="number of days in the year">n</span> and the decimal part
of an <a href="#eya" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal year aggregate">eya</a>, which is called a
<a href="#toy" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of year">toy</a>. The current
<a href="#eya" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal year aggregate">eya</a> equation values are
${fullfracYear} = ${decYear} + ${decDoty} ÷ ${nDaysInYear}. We can floor
an <a href="#eya" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal year aggregate">eya</a> to get a yoe or divide
its , we can obtain a

<div id="equationgroup20" class="equationgroup">

<span id="eq-eya">
eya = yoe + toy = yoe + doy ÷ n   (34)
</span>

<span id="eq-toyeya">
toy = eya mod  1 = doy ÷ n   (35)
</span>

<span id="eq-doytoy">
doy = ⌊toy × n⌋   (36)
</span>

<span id="eq-eyadoy">
eya = yoe + doy × n   (37)
</span>

<span id="eq-eyacoe">
eya = yoe + coe × 400   (38)
</span>

</div>

<a href="#eya" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal year aggregate">eya</a> =
<a href="#yoe" class="tool" data-bs-toggle="tooltip"
data-bs-title="year of era">yoe</a> +
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a> ÷ <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="number of days in the year">n</span>.

We can omit the year from a snap if we replace the
<a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregate">ada</a> with a subtrahend and a
difference or just a difference. If needed, we can obtain a snap from a
difference using the equations below. First, we subtract the difference
from the current <a href="#eda" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregate">eda</a> to obtain the
“<a href="#eda" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregate">eda</a> difference difference”
(<a href="#edd" id="edadifferencedifference" class="tool"
data-bs-toggle="tooltip"
data-bs-title="eda difference difference">edd</a>). Then, we use the
<a href="#edd" class="tool" data-bs-toggle="tooltip"
data-bs-title="eda difference difference">edd</a> to get the “cycle of
era”
(<a href="#coe" id="cycleofera" class="tool" data-bs-toggle="tooltip"
data-bs-title="cycle of era">coe</a>), “day of cycle”
(<a href="#doc" id="dayofcycle" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of cycle">doc</a>), “year of cycle”
(<a href="#yoc" id="yearofcycle" class="tool" data-bs-toggle="tooltip"
data-bs-title="year of cycle">yoc</a>), and then finally the year and
<a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregate">ada</a>.

<div id="equationgroup21" class="equationgroup">

<span id="eq-edd">
edd = eda − difference   (39)
</span>

<span id="eq-coe">
$$\text{coe} = \Biggl \lfloor \frac{\begin{cases}\text{edd}&{\text{if } \text{edd} \geq 0;}\\\text{edd}-146096&{\text{otherwise.}}\end{cases}}{146097} \Biggr \rfloor \qquad(40)$$
</span>

<span id="eq-doc">
doc = edd − coe × 146097   (41)
</span>

<span id="eq-yocedd">
$$\text{yoc} = \biggl \lfloor \frac{\text{doc} - \lfloor \frac{\text{doc}}{1460} \rfloor + \lfloor \frac{\text{doc}}{36524} \rfloor - \lfloor \frac{\text{doc}}{146096} \rfloor}{365} \biggr \rfloor \qquad(42)$$
</span>

<span id="eq-year">
year = yoc + coe × 400   (43)
</span>

<span id="eq-adadoc">
$$\text{ada} = \text{doc} - \text{yoc} \times 365 - \lfloor \frac{\text{yoc}}{4} \rfloor + \lfloor \frac{\text{yoc}}{100} \rfloor \qquad(44)$$
</span>

</div>

In the equations above,
<a href="#eda" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregate">eda</a> is “epochal day
aggregate”, <a href="#coe" class="tool" data-bs-toggle="tooltip"
data-bs-title="cycle of era">coe</a> is “cycle of era”,
<a href="#doc" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of cycle">doc</a> is “day of cycle”, and
<a href="#yoc" class="tool" data-bs-toggle="tooltip"
data-bs-title="year of cycle">yoc</a> is “year of cycle”.

is “epochal day aggregate”
(<a href="#eda" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregate">eda</a>), If a subtrahend does not
include a and a difference We do not need to include a with , because
can also omit the . The current Zone <span class="color0">0</span>
<a href="#yoe" class="tool" data-bs-toggle="tooltip"
data-bs-title="year of era">yoe</a>+<a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregate">ada</a> timestamp is
${zeroYearHsl}+${zeroAdaHsl1}.

omit the <a href="#yoe" class="tool" data-bs-toggle="tooltip"
data-bs-title="year of era">yoe</a> by passing the subtrahend,
difference, and current “epochal day aggregate”
(<a href="#eda" class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregate">eda</a>) to the

We can omit the <a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offset">tzo</a> if the timestamp is based on
Zone <span class="color0">0</span>. The time since this webpage was
loaded is current - load = diff. If needed, calculate the year by
subtracting the <a href="#ada" class="tool" data-bs-toggle="tooltip"
data-bs-title="annual day aggregate">ada</a> and Δ from the current eda
and passing the result to the equations below.

To make it easier to compare timestamps, we should agree to always set
the <a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offset">tzo</a> to zero. If we use a non-zero
<a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offset">tzo</a>, we should include it in
between the event time and the elapsed time.

Let’s say that you live in Zone <span class="color0">0</span> and there
are four <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tod</a> that are vital to your typical
daily rhythm: you start work at <span class="color375">375</span> md,
take a lunch break from <span class="color525">525</span> to
<span class="color575">575</span> md, and finish work at
<span class="color725">725</span> md. After one event passes, you can
begin tracking the time until the next one and thus cycle through all
four over the course of each day: current =
<span class="color375">375</span> diff =
<span class="color525">525</span> diff =
<span class="color575">575</span> diff =
<span class="color725">725</span> diff.

Tzo range input (include tzo only if not zero)

Another use case for minuend expansion is travel. If the current
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> is the minuend and your estimated
arrival time is the subtrahend, then travel time remaining will be the
difference. When traveling, we can replace time with distance so that
distance traveled so far is the minuend, the total distance is the
subtrahend, and the distance remaining is the difference. Apart from
travel, measuring distance in addition to time can be useful for
tracking exercise such as running, bicycling, or swimming.

To measure distances, Dec uses taurs
(<a href="#c" id="taur" class="tool" data-bs-toggle="tooltip"
data-bs-title="taurs">c</a>) or zems
(<a href="#z" id="zoneequatorialmeter" class="tool"
data-bs-toggle="tooltip" data-bs-title="zems">z</a>), with or without
metric prefixes, depending on the order of magnitude of the distance
being measured. One <a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taurs">c</a> is close to the circumference of the earth
and is equal to 10<sup>5</sup> kilozem
(<a href="#kz" class="tool" data-bs-toggle="tooltip"
data-bs-title="kilozems">kz</a>) or 4 &times 10<sup>5</sup> kilometers
(<a href="#km" class="tool" data-bs-toggle="tooltip"
data-bs-title="kilometers">km</a>). The distance between the Earth and
the Moon ranges from 9.065 to 10.135 c. For larger distances, we can use
astronomical units (au), light years (ly), or multiples of
<a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taurs">c</a> such as kilotaurs
(<a href="#kc" id="kilotaur" class="tool" data-bs-toggle="tooltip"
data-bs-title="kilotaurs">kc</a>) and gigataurs
(<a href="#gc" id="gigataur" class="tool" data-bs-toggle="tooltip"
data-bs-title="gigataurs">gc</a>).

au = 3740 c = 3.74 kc ly ‎ =  236525000 c = 236525 kc = 2.36525 gc

Speed is distance over time. Dec measures speed in omegar (v). The speed
of the rotation of the Earth is close to one v and is equal to one c per
day or one kz per b. The average speed of the orbit of the Moon around
the Earth is about 2.2 v and the mean speed of the Earth orbit around
the Sun is approximately 64 v. For higher speeds, we can use percent (%)
or permille (‰) light speed (ls) and multiples of v like kv.

%ls ‎ =  10‰ls ‎ =  647552 v = 647.552 kv

For distances that we can measure on Earth, we may want to use
submultiples of c such as mc or nc. One mc is 100 kz or 40 km and one nc
is 1 decizem (dz) or 4 centimeters (cm). Similarly, we can use
submultiples of v for speeds on Earth. One milliomegar (mv) is one mc
per day, one kz per centiday (cd), or one z per b and is very close to
one mile per hour. An airplane flying at an average speed of 500 mv will
travel the 12500 kz from Cambridge MA to Cambridge UK in a quarter day:
12500 kz / 500 mv = 25 cd.

Around the world in 80 days is a book published by Jules Verne in 1872.
The average speed of a trip around the circumference of the earth in 80
days would be about 1 / 80 v or 12.5 mv, which is a typical speed for a
bicycle. If we flew in a “[pedal powered
airship](https://en.wikipedia.org/wiki/Airship#:~:text=pedal%20powered%20airship)”
from Cambridge MA to Cambridge UK at an average speed of 12.5 mv, we
could complete the journey in ten days: 12500 kz / 12.5 mv = 1000 cd.

At sunrise, the <a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> is the amount of time until sunset. At
solar noon, the time remaining before sunset will be
<a href="#da2" class="tool" data-bs-toggle="tooltip"
data-bs-title="half day arc">da/2</a>. Throughout the day, the current
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> is equal to the sum of sunset
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> and the difference between the
current and sunset <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tod</a>: ${selectedSunset.toFixed(3)} –
${selectedSunrise.toFixed(3)} =
${parseFloat(daytimeDuration.toFixed(3))}.

Like a countdown sequence, we can keep track of the time relative to
sunset throughout the day. Instead of the current
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>, we can display the , the and the
current <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> is equal to the difference between
the sunset <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> and the
<a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> and the current
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> is equal to the difference between
the sunset <a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> and the
<a href="#da2" class="tool" data-bs-toggle="tooltip"
data-bs-title="half day arc">da/2</a>. The Given a sunset
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> of We can replace the current
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> with an expression that provides the
time relative to a given tod.

can keep track of the remaining time until sunset by minuend The
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> of sunrise is found by subtracting
half the <a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> from solar noon
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>. The
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a> of sunset is found by adding half
the <a href="#da" class="tool" data-bs-toggle="tooltip"
data-bs-title="day arc">da</a> to solar noon
<a href="#tod" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>.

# Sunrise and sunset

## Solar hour angle

To find the UTC <a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offset">tzo</a> of a given longitude and
latitude, we could use an [application programming
interface](https://en.wikipedia.org/wiki/API#:~:text=a%20type%20of%20software%20interface%2C%20offering%20a%20service%20to%20other%20pieces%20of%20software)
(API) or a
[database](https://observablehq.com/@jcolot/time-zone-service). If we
only have longitude, we need to first round degrees to zero or the
nearest multiple of fifteen for whole hour
<a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offsets">tzo</a>, 7.5 for half hour
<a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offsets">tzo</a>, or 3.75 for quarter hour
<a href="#tzo" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offsets">tzo</a> and then divide by fifteen to
convert degrees to hours.

# Next

The next article in the [Dec section](../../dec) of my [site](../..)
shows how we can combine [Dec dates](../../dec/date) and times into [Dec
snaps](../../dec/snap)🫰, which are analogous to the [combined date and
time
representations](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations)
in the [ISO
8601](https://en.wikipedia.org/wiki/ISO_8601#:~:text=an%20international%20standard%20covering%20the%20worldwide%20exchange%20and%20communication%20of%20date%20and%20time%2Drelated%20data)
international standard for dates and times. The final article in the Dec
section demonstrates how Dec dates, times, and snaps🫰can be paired up
to express [time
intervals](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals:~:text=the%20intervening%20time%20between%20two%20time%20points)
called Dec [spans](../../dec/span)🌈.

<div class="timenav">

<svg width="829.6875" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" class="flowchart decnav-svg" viewbox="0 0 829.6875 94" role="graphics-document document" aria-roledescription="flowchart-v2" height="94">

<style>.decnav-svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:32px;fill:#333;}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}.decnav-svg .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}.decnav-svg .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}.decnav-svg .error-icon{fill:#552222;}.decnav-svg .error-text{fill:#552222;stroke:#552222;}.decnav-svg .edge-thickness-normal{stroke-width:1px;}.decnav-svg .edge-thickness-thick{stroke-width:3.5px;}.decnav-svg .edge-pattern-solid{stroke-dasharray:0;}.decnav-svg .edge-thickness-invisible{stroke-width:0;fill:none;}.decnav-svg .edge-pattern-dashed{stroke-dasharray:3;}.decnav-svg .edge-pattern-dotted{stroke-dasharray:2;}.decnav-svg .marker{fill:#333333;stroke:#333333;}.decnav-svg .marker.cross{stroke:#333333;}.decnav-svg svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:32px;}.decnav-svg p{margin:0;}.decnav-svg .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#333;}.decnav-svg .cluster-label text{fill:#333;}.decnav-svg .cluster-label span{color:#333;}.decnav-svg .cluster-label span p{background-color:transparent;}.decnav-svg .label text,.decnav-svg span{fill:#333;color:#333;}.decnav-svg .node rect,.decnav-svg .node circle,.decnav-svg .node ellipse,.decnav-svg .node polygon,.decnav-svg .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}.decnav-svg .rough-node .label text,.decnav-svg .node .label text,.decnav-svg .image-shape .label,.decnav-svg .icon-shape .label{text-anchor:middle;}.decnav-svg .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}.decnav-svg .rough-node .label,.decnav-svg .node .label,.decnav-svg .image-shape .label,.decnav-svg .icon-shape .label{text-align:center;}.decnav-svg .node.clickable{cursor:pointer;}.decnav-svg .root .anchor path{fill:#333333!important;stroke-width:0;stroke:#333333;}.decnav-svg .arrowheadPath{fill:#333333;}.decnav-svg .edgePath .path{stroke:#333333;stroke-width:2.0px;}.decnav-svg .flowchart-link{stroke:#333333;fill:none;}.decnav-svg .edgeLabel{background-color:rgba(232,232,232, 0.8);text-align:center;}.decnav-svg .edgeLabel p{background-color:rgba(232,232,232, 0.8);}.decnav-svg .edgeLabel rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}.decnav-svg .labelBkg{background-color:rgba(232, 232, 232, 0.5);}.decnav-svg .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}.decnav-svg .cluster text{fill:#333;}.decnav-svg .cluster span{color:#333;}.decnav-svg div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}.decnav-svg .flowchartTitleText{text-anchor:middle;font-size:18px;fill:#333;}.decnav-svg rect.text{fill:none;stroke-width:0;}.decnav-svg .icon-shape,.decnav-svg .image-shape{background-color:rgba(232,232,232, 0.8);text-align:center;}.decnav-svg .icon-shape p,.decnav-svg .image-shape p{background-color:rgba(232,232,232, 0.8);padding:2px;}.decnav-svg .icon-shape rect,.decnav-svg .image-shape rect{opacity:0.5;background-color:rgba(232,232,232, 0.8);fill:rgba(232,232,232, 0.8);}.decnav-svg .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}.decnav-svg .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}.decnav-svg :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}</style>

<g><marker id="mermaid-1789795887597_flowchart-v2-pointEnd" class="marker flowchart-v2" viewbox="0 0 10 10" refx="5" refy="5" markerunits="userSpaceOnUse" markerwidth="8" markerheight="8" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker><marker id="mermaid-1789795887597_flowchart-v2-pointStart" class="marker flowchart-v2" viewbox="0 0 10 10" refx="4.5" refy="5" markerunits="userSpaceOnUse" markerwidth="8" markerheight="8" orient="auto"><path d="M 0 5 L 10 10 L 10 0 z" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path></marker><marker id="mermaid-1789795887597_flowchart-v2-circleEnd" class="marker flowchart-v2" viewbox="0 0 10 10" refx="11" refy="5" markerunits="userSpaceOnUse" markerwidth="11" markerheight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></circle></marker><marker id="mermaid-1789795887597_flowchart-v2-circleStart" class="marker flowchart-v2" viewbox="0 0 10 10" refx="-1" refy="5" markerunits="userSpaceOnUse" markerwidth="11" markerheight="11" orient="auto"><circle cx="5" cy="5" r="5" class="arrowMarkerPath" style="stroke-width: 1; stroke-dasharray: 1, 0;"></circle></marker><marker id="mermaid-1789795887597_flowchart-v2-crossEnd" class="marker cross flowchart-v2" viewbox="0 0 11 11" refx="12" refy="5.2" markerunits="userSpaceOnUse" markerwidth="11" markerheight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1, 0;"></path></marker><marker id="mermaid-1789795887597_flowchart-v2-crossStart" class="marker cross flowchart-v2" viewbox="0 0 11 11" refx="-1" refy="5.2" markerunits="userSpaceOnUse" markerwidth="11" markerheight="11" orient="auto"><path d="M 1,1 l 9,9 M 10,1 l -9,9" class="arrowMarkerPath" style="stroke-width: 2; stroke-dasharray: 1, 0;"></path></marker><g class="root"><g class="clusters"></g><g class="edgePaths"><path d="M120.922,47L125.089,47C129.255,47,137.589,47,145.255,47C152.922,47,159.922,47,163.422,47L166.922,47" id="L_A_B_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_A_B_0" data-points="W3sieCI6MTIwLjkyMTg3NSwieSI6NDd9LHsieCI6MTQ1LjkyMTg3NSwieSI6NDd9LHsieCI6MTcwLjkyMTg3NSwieSI6NDd9XQ==" marker-end="url(#mermaid-1789795887597_flowchart-v2-pointEnd)"></path><path d="M295.703,47L299.87,47C304.036,47,312.37,47,320.036,47C327.703,47,334.703,47,338.203,47L341.703,47" id="L_B_C_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_B_C_0" data-points="W3sieCI6Mjk1LjcwMzEyNSwieSI6NDd9LHsieCI6MzIwLjcwMzEyNSwieSI6NDd9LHsieCI6MzQ1LjcwMzEyNSwieSI6NDd9XQ==" marker-end="url(#mermaid-1789795887597_flowchart-v2-pointEnd)"></path><path d="M471.531,47L475.698,47C479.865,47,488.198,47,495.865,47C503.531,47,510.531,47,514.031,47L517.531,47" id="L_C_D_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_C_D_0" data-points="W3sieCI6NDcxLjUzMTI1LCJ5Ijo0N30seyJ4Ijo0OTYuNTMxMjUsInkiOjQ3fSx7IngiOjUyMS41MzEyNSwieSI6NDd9XQ==" marker-end="url(#mermaid-1789795887597_flowchart-v2-pointEnd)"></path><path d="M646.609,47L650.776,47C654.943,47,663.276,47,670.943,47C678.609,47,685.609,47,689.109,47L692.609,47" id="L_D_E_0" class="edge-thickness-normal edge-pattern-solid edge-thickness-normal edge-pattern-solid flowchart-link" style=";" data-edge="true" data-et="edge" data-id="L_D_E_0" data-points="W3sieCI6NjQ2LjYwOTM3NSwieSI6NDd9LHsieCI6NjcxLjYwOTM3NSwieSI6NDd9LHsieCI6Njk2LjYwOTM3NSwieSI6NDd9XQ==" marker-end="url(#mermaid-1789795887597_flowchart-v2-pointEnd)"></path></g><g class="edgeLabels"><g class="edgeLabel"><g class="label" data-id="L_A_B_0" transform="translate(0, 0)"><foreignobject width="0" height="0">

<div class="labelBkg" data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="edgeLabel"></span>

</div>

</foreignobject></g></g><g class="edgeLabel"><g class="label" data-id="L_B_C_0" transform="translate(0, 0)"><foreignobject width="0" height="0">

<div class="labelBkg" data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="edgeLabel"></span>

</div>

</foreignobject></g></g><g class="edgeLabel"><g class="label" data-id="L_C_D_0" transform="translate(0, 0)"><foreignobject width="0" height="0">

<div class="labelBkg" data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="edgeLabel"></span>

</div>

</foreignobject></g></g><g class="edgeLabel"><g class="label" data-id="L_D_E_0" transform="translate(0, 0)"><foreignobject width="0" height="0">

<div class="labelBkg" data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="edgeLabel"></span>

</div>

</foreignobject></g></g></g><g class="nodes"><a href="/dec" class="decnav-link no-external"><g class="node default" id="flowchart-A-0" transform="translate(64.4609375, 47)"><rect class="basic label-container" style="" x="-56.4609375" y="-39" width="112.921875" height="78"></rect><g class="label" style="" transform="translate(-26.4609375, -24)"><rect></rect><foreignobject width="52.921875" height="48">

<div data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="nodeLabel">
<p>

Dec
</p>

</span>

</div>

</foreignobject></g></g></a><a href="/dec/date" class="decnav-link no-external"><g class="node default" id="flowchart-B-1" transform="translate(233.3125, 47)"><rect class="basic label-container" style="" x="-62.390625" y="-39" width="124.78125" height="78"></rect><g class="label" style="" transform="translate(-32.390625, -24)"><rect></rect><foreignobject width="64.78125" height="48">

<div data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="nodeLabel">
<p>

date
</p>

</span>

</div>

</foreignobject></g></g></a><a href="/dec/time" class="decnav-link no-external"><g class="node default" id="flowchart-C-2" transform="translate(408.6171875, 47)"><rect class="basic label-container" style="" x="-62.9140625" y="-39" width="125.828125" height="78"></rect><g class="label" style="" transform="translate(-32.9140625, -24)"><rect></rect><foreignobject width="65.828125" height="48">

<div data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="nodeLabel">
<p>

time
</p>

</span>

</div>

</foreignobject></g></g></a><a href="/dec/snap" class="decnav-link no-external"><g class="node default" id="flowchart-D-3" transform="translate(584.0703125, 47)"><rect class="basic label-container" style="" x="-62.5390625" y="-39" width="125.078125" height="78"></rect><g class="label" style="" transform="translate(-32.5390625, -24)"><rect></rect><foreignobject width="65.078125" height="48">

<div data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="nodeLabel">
<p>

snap
</p>

</span>

</div>

</foreignobject></g></g></a><a href="/dec/span" class="decnav-link no-external"><g class="node default" id="flowchart-E-4" transform="translate(759.1484375, 47)"><rect class="basic label-container" style="" x="-62.5390625" y="-39" width="125.078125" height="78"></rect><g class="label" style="" transform="translate(-32.5390625, -24)"><rect></rect><foreignobject width="65.078125" height="48">

<div data-xmlns="http://www.w3.org/1999/xhtml"
style="display: table-cell; white-space: nowrap; line-height: 1.5; max-width: 200px; text-align: center;">

<span class="nodeLabel">
<p>

span
</p>

</span>

</div>

</foreignobject></g></g></a></g></g></g>
</svg>

</div>

Please spread the good word about Dec using the citation information at
the bottom of this article. You may also want to cite the Observable
notebooks that I adapted into the clock🕓, bar📊chart, map🗺️, and
daylight☀️plot visualizations in this article or the 2014 blog post
which proposed a system of 20 decimal time zones, each 5
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hundredths of a day">centidays</span> wide, based on the
[Greenwich
Meridian](https://en.wikipedia.org/wiki/Prime_meridian_(Greenwich)#:~:text=a%20geographical%20reference%20line%20that%20passes%20through%20the%20Royal%20Observatory%2C%20Greenwich%2C%20in%20London%2C%20England):

- [Pearson, Tom](https://www.2x2.graphics). <u>2013</u><u>+124</u>.
  “Simple D3 clock.” ${decYear}+${decDate}.
  <https://observablehq.com/@d3/simple-clock>.
- [Heyen, Frank](https://fheyen.github.io). <u>2021</u><u>+246</u>.
  “BarChart Clock.” ${decYear}+${decDate}.
  <https://observablehq.com/@fheyen/barchart-clock>.
- [Johnson, Ian](https://enjalot.github.io). <u>2021</u><u>+090</u>.
  “Draggable World Map Coordinates Input.” ${decYear}+${decDate}.
  <https://observablehq.com/@enjalot/draggable-world-map-coordinates-input>.
- [Bridges, Dan](https://www.danbridges.org). <u>2021</u><u>+311</u>.
  “Visualizing Seasonal Daylight.” ${decYear}+${decDate}.
  <https://observablehq.com/@dbridges/visualizing-seasonal-daylight>.
- [Clements, John](https://www.brinckerhoff.org).
  <u>2014</u><u>+091</u>, “Decimal Time Zones.” ${decYear}+${decDate}.
  <https://www.brinckerhoff.org/blog/2014/05/31/decimal-time-zones>.

# Cite

Of the [bibliography
file](https://quarto.org/docs/authoring/citations#bibliography-files)
[formats](https://pandoc.org/MANUAL.html#specifying-bibliographic-data)
supported by [Quarto](https://quarto.org), I recommend
[yaml](https://en.wikipedia.org/wiki/YAML#:~:text=a%20human%2Dreadable%20data%20serialization%20language).
The yaml bibliography file shown below contains [bibliographic
records](https://en.wikipedia.org/wiki/Bibliographic_record#:~:text=contains%20the%20data%20elements%20necessary%20to%20help%20users%20identify%20and%20retrieve%20that%20resource)
([metadata](https://en.wikipedia.org/wiki/Metadata#:~:text=the%20title%2C%20author%2C%20and%20publication%20date%20of%20a%20book%20are%20metadata%20about%20the%20book))
about the article you are currently reading and the article entitled
[<span class="mono under">`chrono`</span>-Compatible Low-Level Date
Algorithms](https://howardhinnant.github.io/date_algorithms) in which
[Howard Hinnant](https://howardhinnant.github.io) (2021+185) describes
the algorithms underlying Dec dates.

<div class="code-with-filename">

**ref.yml**

``` yml
references:
- id: hinnant2021date
  author:
    - family: Hinnant
      given: Howard
  title: [<code>chrono</code>]{.nocase}-Compatible Low-Level Date Algorithms
  url: https://howardhinnant.github.io/date_algorithms
  issued:
    literal: 2021+185
- id: laptev2026time
  author:
    - family: Laptev
      given: Martin
  title: Dec time
  url: https://maptv.github.io/dec/time
  issued:
    literal: 2026+222
```

</div>

Quarto configuration files, such as `_quarto.yml` and `_metadata.yml`,
are written in yaml. Quarto input files, including Quarto markdown,
[Jupyter](https://jupyter.org) notebook,
[markdown](https://quarto.org/docs/authoring/markdown-basics), and
specially formatted [script
files](https://quarto.org/docs/computations/render-scripts), can start
with a [yaml
header](https://quarto.org/docs/authoring/front-matter.html). Therefore,
we could put the metadata above directly into a Quarto configuration or
input file rather than into a bibliography file.

As an alternative to yaml, I suggest the
[BibTeX](https://en.wikipedia.org/wiki/BibTeX#:~:text=a%20bibliographic%20flat%2Dfile%20database%20file%20format)
format. The BibTeX bibliography file below can be used by Quarto equally
as well as the yaml bibliography file above. Regardless of the
bibliography file format we choose, Quarto configuration and input files
require that we store the
[path](https://en.wikipedia.org/wiki/Path_(computing)#:~:text=a%20string%20that%20uniquely%20identifies%20an%20item%20in%20a%20hierarchical%20file%20system)
to our bibliography file, or our list of bibliography file paths, in
yaml format.

<div class="code-with-filename">

**ref.bib**

``` bib
@misc{hinnant2021date,
  author = "Howard Hinnant",
  title = "\texttt{chrono}-Compatible Low-Level Date Algorithms",
  url = "https://howardhinnant.github.io/date_algorithms",
  year = 2021+185
}
@misc{laptev2026time,
  author = "Martin Laptev",
  title = "Dec time",
  url = "https://maptv.github.io?meta:path",
  year = 2026+222
}
```

</div>

In addition to storing metadata in a bibliography file, we can keep
instructions regarding how to style citations and references in a
[Citation Style
Language](https://quarto.org/docs/authoring/citations#sec-citations-style)
(csl) file. If we do not provide a csl file, Quarto will follow the
[Chicago Manual of Style](https://chicagomanualofstyle.org) when
processing parenthetical citations: (Hinnant 2021+185), narrative
citations: (2021+185), and references:

[Hinnant, Howard](https://howardhinnant.github.io). <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="September 1, 2021">2021+185</span>. *`chrono`-Compatible
Low-Level Date Algorithms*.
<https://howardhinnant.github.io/date_algorithms.html>.

When provided with
[`nature.csl`](https://github.com/citation-style-language/styles/blob/master/nature.csl),
[`american-medical-association.csl`](https://github.com/citation-style-language/styles/blob/master/american-medical-association.csl),
or a similar csl file, Quarto will produce superscript numeric
citations, which look just like Quarto
[footnotes](https://quarto.org/docs/authoring/markdown-basics#footnotes):
[1]. Unlike Quarto citations, Quarto footnotes do not require any
additional files or configuration. A Quarto output file can have both a
[Footnotes](#footnotes) and [References](#refs) section.

# Glossary

<div id="gloslist" class="column-page-right">

- <a href="#arcbeat" id="ab">a</a>: arcbeat, a hundred thousandth of a
  circle, 0.0036 degrees, 0.216 arcminutes, 12.96 arcseconds
- <a href="#beat" id="b">b</a>: beat, centimilliday, a hundred
  thousandth of a day, 864 milliseconds
  - <a href="#millibeat" id="mb">mb</a>: millibeat, centimicroday, a
    thousandth of a beat, a hundred millionth of a day, 864 microseconds
- <a href="#beatpercentiday" id="bpc">bpc</a>: a musical or heart beat
  per centiday, a tenth of a beat per milliday,
  0.069<span class="vinculum">4</span> beats per minute, 100 beats per
  day
- <a href="#beatpermilliday" id="bpm">bpm</a>: a musical or heart beat
  per milliday, ten beats per centiday,
  0.69<span class="vinculum">4</span> beats per minute, 1000 beats per
  day
- <a href="#bodymassindex" id="bmi">bmi</a>: body mass index, kilograins
  of body mass divided by height in zem squared (kg/z²)
- <a href="#taur" id="c">c</a>: taur, 𝜏*r*, 100000 kilozem, 40000
  kilometers, nearly the circumference of the Earth, roughly the product
  of 𝜏 and the radius of the Earth, approximately the dividend of the
  surface area and the diameter of the Earth
  - <a href="#gigataur" id="gc">gc</a>: gigataur, a billion taurs
  - <a href="#kilotaur" id="kc">kc</a>: kilotaur, a thousand taurs,
    10<sup>8</sup> kilozem
  - <a href="#millitaur" id="mc">mc</a>: millitaur, *m*𝜏*r*, a
    thousandth of a taur, 100 kilozem, 40 kilometers
  - <a href="#nanotaur" id="nc">nc</a>: nanotaur, *n*𝜏*r*, a billionth
    of a taur, 100 millizem, 1 decizem, 4 centimeters
  - <a href="#cubicnanotaur" id="nc3">nc³</a>: cubic nanotaur, *n*𝜏*r*³,
    1 cubic decizem
- <a href="#day" id="d">d</a>: day, a tenth of a decaday, a seventh of a
  week, a fifth of a pentaday, 10 decidays, 24 hours, 100 centidays,
  1000 millidays, 1440 minutes, 86400 seconds, 100000 beats, the inverse
  of a quotidie
  - <a href="#dayofxun" id="dox">dox</a>: day of xún
  - <a href="#dayofpentaday" id="dop">dop</a>: day of pentaday
  - <a href="#dayofmonth" id="dom">dom</a>: day of month
  - dom<sub>♀</sub>: Decyther day of month, 0 to 28 in Venusian short
    months or 0 to 29 in Venusian long months
  - <a href="#dayofweek" id="dow">dow</a>: day of week
  - <a href="#dayofyear" id="doy">doy</a>: day of year, xún \* 10 + dox
  - <a href="#positiveintegerdoy" id="pid">pid</a>: positive integer day
    of year, days elapsed since the beginning of the year, 0 to 364 or
    365
  - <a href="#negativeintegerdoy" id="nid">nid</a>: negative integer day
    of year, pid - syl, -365 or -366 to -1, the negative of the days
    left in the year
  - <a href="#mixedintegerdoy" id="mid">mid</a>: mixed integer day of
    year, an nid rewritten with negative leading digits (marked by a
    vinculum) and a positive last digit or two
  - <a href="#dayofera" id="doe">doe</a>: day of era, days since the Dec
    epoch
  - <a href="#epochaldayaggregate" id="eda">eda</a>: epochal day
    aggregate, doe + tod, days since the Dec epoch including the time of
    day
  - <a href="#edadifferencedifference" id="edd">edd</a>: eda difference
    difference, an eda minus a difference, used to recover the year and
    ada of a past event
  - <a href="#annualdayaggregate" id="ada">ada</a>: annual day
    aggregate, doy + tod
  - <a href="#dayofcycle" id="doc">doc</a>: day of cycle, days since the
    start of the current 400-year Gregorian cycle, 0 to 146096
  - doc<sub>♀</sub>: Decyther day of cycle, days since the start of the
    current 467-day Venusian cycle, doe mod 467, 0 to 466
  - <a href="#dayofhectoday" id="doh">doh</a>: day of hectoday, doy mod
    100, the percent of a hectoday that has elapsed
  - <a href="#dayofbimester" id="dob">dob</a>: day of bimester, 0 to 58
    in common bimesters or 0 to 59 in leap bimesters
  - dob<sub>♀</sub>: Decyther day of bimester, 0 to 57 in antes and the
    post of Qoc 2 or 0 to 58 in the other posts
  - <a href="#dayoftricennium" id="dot">dot</a>: day of tricennium, days
    since the start of the current 30-year lunar cycle, 0 to 10630
  - <a href="#dayofquadrimester" id="doq">doq</a>: day of quadrimester,
    days since the beginning of a Decyther quadrimester, 0 to 115 or 116
  - <a href="#beginningofquadrimester" id="boq">boq</a>: beginning of
    quadrimester, the pid of Doq 0, pid - doq
  - <a href="#quadrimesterofcycle" id="qoc">qoc</a>: quadrimester of
    cycle, zero-based index of a Decyther quadrimester, 0 to 3
  - <a href="#beginningofbimester" id="bob">bob</a>: beginning of
    bimester, the pid of Dob 0, pid - dob
  - <a href="#beginningofmonth" id="bom">bom</a>: beginning of month,
    the pid of the day before the first day of the month, pid - dom
  - <a href="#monthofcycle" id="moc">moc</a>: month of cycle, zero-based
    index of a Venusian month, 0 to 15
  - <a href="#beginningofweek" id="bow">bow</a>: beginning of week, the
    pid of Dow 0, pid - dow
  - <a href="#beginningofyear" id="boy">boy</a>: beginning of year,
    midnight at the start of Day 0
  - <a href="#beginningofera" id="boe">boe</a>: beginning of era,
    midnight at the start of Day 0 of Year 0
  - <a href="#beginningofcycle" id="boc">boc</a>: beginning of cycle,
    the start of Doc<sub>♀</sub> 0 and of the first ante in a Decyther
    cycle
  - <a href="#endofyear" id="eoy">eoy</a>: end of year, midnight at the
    end of Day 364 or 365
  - <a href="#Juliandaynumber" id="jdn">jdn</a>: Julian day number, days
    since the start of the Julian period; increments at noon UTC
  - <a href="#lunarintercalationdifference" id="lid">lid</a>: lunar
    intercalation difference, a lunar nid that only resets after lunar
    leap years, -1063 to -1
  - <a href="#venusianextracalationdifference" id="ved">ved</a>:
    Venusian extracalation difference, days until the end of
    Doc<sub>♀</sub> 349, the last day of the one-day-shorter Qoc 2,
    Bimester 5, and Moc 11, (doc<sub>♀</sub> + 117) mod 467 - 467, -467
    to -1
  - <a href="#misalignedunitdifference" id="mud">mud</a>: misaligned
    unit difference, pid - dom - dow
  - <a href="#deciday" id="dd">dd</a>: deciday, a tenth of a day, 2.4
    hours, 144 minutes
  - <a href="#centiday" id="cd">cd</a>: centiday, a hundredth of a day,
    0.24 hours, 14.4 minutes
  - <a href="#milliday" id="md">md</a>: milliday, a thousandth of a day,
    1.44 minutes
  - <a href="#centimilliday" id="cmd">cmd</a>: centimilliday, a hundred
    thousandth of a day, 1 beat, 864 milliseconds
  - <a href="#microday" id="ud">µd</a>: microday, a millionth of a day,
    86.4 milliseconds
  - <a href="#nanoday" id="nd">nd</a>: nanoday, a billionth of a day,
    86.4 microseconds
- <a href="#degree" id="deg">°</a>: degree, 1/360 turns, 180/𝜋 or 360/𝜏
  radians
  - <a href="#compassdegree" id="cdeg">c°</a>: compass degree
  - <a href="#huedegree" id="hdeg">h°</a>: hue degree
- <a href="#egg" id="e">e</a>: egg, 1000 grains, 2 ounces, 64 grams
- <a href="#equationoftime" id="eot">eot</a>: equation of time, ast -
  mst as a function of toy, about -9.8 to 11.4 millidays
- <a href="#cubit" id="ell">ℓ</a>: ell, cubit, 10/9 zem
- <a href="#foot" id="f">f</a>: foot, 0.75 zem, 75 millimeters
- <a href="#gutta" id="g">g</a>: drop (gutta in Latin) or grain (granum
  in Latin), 64 microliters or 64 milligrams
  - <a href="#kilograin" id="kg">kg</a>: kilograin or kilodrop, 64 grams
    or 64 milliliters
  - <a href="#megagrain" id="Mg">Mg</a>: megagrain or megadrop, 64
    kilograms or 64 liters
- <a href="#hectoday" id="h">h</a>: a Dec season, 1 ***h***ectoday, 10
  decadays, or one ***h***undred days
  - <a href="#positiveintegerhectoday" id="pih">pih</a>: positive
    integer hectoday, ⌊pid ÷ 100⌋, 0 to 3
  - <a href="#negativeintegerhectoday" id="nih">nih</a>: negative
    integer hectoday, ⌊nid ÷ 100⌋, -4 to -1
- <a href="#hexadecimal" id="hex">hex</a>: hexadecimal, base 16
- <a href="#huesaturationlightness" id="hsl">hsl</a>: hue saturation
  lightness
- <a href="#huesaturationvalue" id="hsv">hsv</a>: hue saturation value
- <a href="#inch" id="i">i</a>: inch, a sixteenth of a zem, 25
  millimeters
- <a href="#internationalorganizationforstandardization" id="iso">iso</a>:
  [International Organization for
  Standardization](https://en.wikipedia.org/wiki/International_Organization_for_Standardization),
  the body behind ISO 8601 dates such as 1970-01-01 (ISO month date) and
  1970-W01-4 (ISO week date)
- <a href="#keg" id="k">k</a>: keg, cubic zem, 64 liters, 1000 wine
  glasses, a million drops, half a barrel
- <a href="#kilometer" id="km">km</a>: kilometer, 1000 meters, 2500 zem,
  2.5 kilozem
- <a href="#kilometersperhour" id="kmph">kmph</a>: kilometers per hour,
  thousands of meters per hour, 1 kmph = 0.6 mv
- <a href="#liter" id="L">L</a>: liter, 15625 drops, a cubic decimeter
  - <a href="#milliliter" id="mL">mL</a>: milliliter, a cubic
    centimeter, a thousandth of a liter, 15.625 drops
  - <a href="#microliter" id="uL">µL</a>: microliter, a cubic
    millimeter, a millionth of a liter, 0.015625 drops
- <a href="#meridian" id="m">m</a>: meridian, a full circle around the
  Earth moving North or South; used in the abbreviations a.m.
  (antemeridian) and p.m. (postmeridian); the letter “m” in meridian can
  be vertically flipped to get the letter “w” in wěi
  - <a href="#decimeridian" id="dm">dm</a>: decimeridian, a tenth of a
    meridian
  - <a href="#millimeridian" id="mm">mm</a>: millimeridian, a thousandth
    of a meridian
- <a href="#squaremeter" id="m2">m²</a>: square meter, 6.25 square zem
  - <a href="#squarecentimeter" id="cm2">cm²</a>: square centimeter,
    6.25 square centizem
  - <a href="#squaredecimeter" id="dm2">dm²</a>: square decimeter, 6.25
    square decizem
  - <a href="#squarekilometer" id="km2">km²</a>: square kilometer, 6.25
    square kilozem
  - <a href="#cubiccentimeter" id="cm3">cm³</a>: cubic centimeter, 1
    milliliter, a thousandth of a liter, 15.625 drops
- <a href="#pentaday" id="p">p</a>: pentaday, a group of five days, half
  a decaday
  - <a href="#pentadayofxun" id="pox">pox</a>: pentaday of xún, 0 for
    Dox 0 to 4 and 1 for Dox 5 to 9
  - <a href="#pentadayofbimester" id="pob">pob</a>: pentaday of
    bimester, ⌊dob ÷ 5⌋, 0 to 11
  - <a href="#pentadayinterquintilerange" id="pir">pir</a>: pentaday
    interquintile range, Dop 1 to 3, the three days between two lim
  - <a href="#liminalinterconnectingmargin" id="lim">lim</a>: liminal
    interconnecting margin, the pair of days between two pir, Dop 4 and
    the following Dop 0
- <a href="#note" id="n">n</a>: note, a specific frequency within an
  octave
- <a href="#nationaloceanicandatmosphericadministration"
  id="noaa">NOAA</a>: [National Oceanic and Atmospheric
  Administration](https://www.noaa.gov), source of the General Solar
  Position Calculations used to fit the eot and sda models
- <a href="#octave" id="o">o</a>: octave, a two fold change in frequency
  - <a href="#decioctave" id="do">do</a>: decioctave, a tenth of a two
    fold change in frequency
- <a href="#perbeat" id="per">þ</a>: perbeat, the inverse of a beat,
  1/beat, once per beat, every beat, 100000 q; symbolized by thorn (þ),
  which looks like a combination of the letters “p” and “b”; not to be
  confused with a picobeat (pb)
  - <a href="#teraperbeat" id="Tpb">Tþ</a>: teraperbeat, 10<sup>12</sup>
    perbeat, the inverse of a picobeat, 1/picobeat, once per picobeat,
    every picobeat
- <a href="#quotidie" id="q">q</a>: quotidie, the inverse of a day, a
  hundred thousandth of a perbeat; the letter “q” in quotidie can be
  flipped vertically to produce the letter “d” in day
- <a href="#rose" id="r">r</a>: compass rose, a full circle along the
  horizon, 360 compass degrees
  - <a href="#solarazimuthangle" id="saa">saa</a>: solar azimuth angle,
    the direction of the Sun along the horizon measured clockwise from
    North
  - <a href="#millirose" id="mr">mr</a>: compass millirose, a thousandth
    of a circle along the horizon, .36 compass degrees
- <a href="#radian" id="rad">rad</a>: radian, $1\over\tau$ turns,
  $360\over\tau$ degrees, $1\over 2\pi$ turns, $180\over\pi$ degrees
- <a href="#redgreenblue" id="rgb">rgb</a>: red green blue
- <a href="#second" id="s">s</a>: second, 1/90 millidays, 0.9 beats, 1
  Dec second = 0.96 SI seconds
- <a href="#spinorbitinterval" id="soi">soi</a>: spin orbit interval, a
  lunar day, 1.03505 days
  - <a href="#soiofyear" id="soy">soy</a>: soi of year
  - <a href="#soiofbimester" id="sob">sob</a>: soi of bimester
- <a href="#internationalsystemofunits" id="si">SI</a>: [International
  System of
  Units](https://en.wikipedia.org/wiki/International_System_of_Units#:~:text=the%20world%27s%20most%20widely%20used%20system%20of%20measurement)
- <a href="#speedoflight" id="sol">sol</a>: speed of light, 647.55170928
  kiloomegars, 299792458 meters per second
- <a href="#speedofsound" id="sos">sos</a>: speed of sound, 735.048
  milliomegars, 340.3 meters per second
- <a href="#solardeclinationangle" id="sda">sda</a>: solar declination
  angle, the latitude at which the Sun is directly overhead
- <a href="#tau" id="2pi">𝜏</a>: 2𝜋 or approximately 6.2831853
- <a href="#tenequaltemperament" id="tenet">Tenet</a>: ten equal
  temperament
  - <a href="#10et" id="xet">Xet</a>: Tenet
  - <a href="#twelveequaltemperament" id="12et">12et</a>: twelve equal
    temperament
- <a href="#timeofday" id="tod">tod</a>: time of day
  - <a href="#hourminutesecond" id="hms">hms</a>: hour minute second, a
    tod written as an hod, moh, and som triplet
  - <a href="#dailysecondaggregate" id="dsa">dsa</a>: daily second
    aggregate, seconds since midnight, tod × 86400
  - <a href="#hourlysecondaggregate" id="hsa">hsa</a>: hourly second
    aggregate, seconds since the top of the hour, dsa mod 3600
  - <a href="#hourofday" id="hod">hod</a>: hour of day, ⌊dsa ÷ 3600⌋, 0
    to 23
  - <a href="#minuteofhour" id="moh">moh</a>: minute of hour, ⌊hsa ÷
    60⌋, 0 to 59
  - <a href="#secondofminute" id="som">som</a>: second of minute, ⌊hsa
    mod 60⌋, 0 to 59
  - <a href="#meansolartime" id="mst">mst</a>: mean solar time, solar
    time based only on longitude and the Zone 0 tod
  - <a href="#apparentsolartime" id="ast">ast</a>: apparent solar time,
    mst + eot(toy), solar time based on the actual position of the Sun
  - <a href="#dayarc" id="da">da</a>: day arc, the time from sunrise to
    sunset, sunset - sunrise
  - <a href="#halfdayarc" id="da2">da/2</a>: half day arc, the time from
    sunrise to solar noon or from solar noon to sunset
  - <a href="#nightarc" id="na">na</a>: night arc, the time from sunset
    to sunrise, 1 - da
  - <a href="#halfnightarc" id="na2">na/2</a>: half night arc, the time
    from sunset to solar midnight or from solar midnight to sunrise
- <a href="#turn" id="t">t</a>: turn, 360 degrees, 𝜏 or 2𝜋 radians
  - <a href="#centiturn" id="ct">ct</a>: centiturn, a hundredth of a
    turn, 3.6 degrees, 𝜏/100 or 𝜋/50 radians
  - <a href="#deciturn" id="dt">dt</a>: deciturn, a tenth of a turn, 36
    degrees, 𝜏/10 or 𝜋/5 radians
  - <a href="#milliturn" id="mt">mt</a>: milliturn, a thousandth of a
    turn, .36 degrees, 𝜏/1000 or 𝜋/500 radians
- <a href="#timezoneoffset" id="tzo">tzo</a>: time zone offset
- <a href="#ounce" id="u">u</a>: ounce (uncia in Latin), 500 grains, 32
  grams, 500 drops, 32 milliliters
- <a href="#universaltimeoffset" id="uto">uto</a>: universal time
  offset, the offset in decidays that turns a Zone 0 tod into Universal
  Time; a tzo is an integer uto
  - <a href="#solartimeoffset" id="sto">sto</a>: solar time offset, a
    uto that is a terminating decimal
  - <a href="#exactoffsetfraction" id="eof">eof</a>: exact offset
    fraction, an irreducible fraction that expresses a repeating decimal
    uto exactly
  - <a href="#roundedoffsetdecimal" id="rod">rod</a>: rounded offset
    decimal, a repeating decimal uto rounded to a few digits
  - <a href="#roundofferrorfraction" id="ref">ref</a>: roundoff error
    fraction, uto - rod
- <a href="#coordinateduniversaltime" id="utc">utc</a>: [Coordinated
  Universal
  Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#:~:text=the%20primary%20time%20standard%20globally%20used%20to%20regulate%20clocks%20and%20time)
- <a href="#unitedstates" id="us">US</a>: [United
  States](https://en.wikipedia.org/wiki/Imperial_and_US_customary_measurement_systems)
- <a href="#universaltime" id="ut">UT</a>: [Universal
  Time](https://en.wikipedia.org/wiki/Universal_Time#:~:text=a%20time%20standard%20based%20on%20Earth%27s%20rotation),
  a time standard based on the rotation of the Earth
- <a href="#omegar" id="v">v</a>: omegar, ωr,
  1041.<span class="vinculum">6</span> miles per hour,
  1.<span class="vinculum">6</span> megameters per hour,
  0.4<span class="vinculum">629</span> kilometers per second, roughly
  1.36 times the speed of sound
  - <a href="#kiloomegar" id="kv">kv</a>: kiloomegar, kωr,
    1.<span class="vinculum">6</span> gigameters per hour,
    0.4<span class="vinculum">629</span> megameters per second,
    approximately 0.1544% of the speed of light
  - <a href="#milliomegar" id="mv">mv</a>: milliomegar, mωr,
    1.041<span class="vinculum">6</span> miles per hour,
    1.<span class="vinculum">6</span> kilometers per hour,
    0.4<span class="vinculum">629</span> meters per second,
    approximately 0.136% of the speed of sound
- <a href="#wei" id="w">w</a>: wěi (纬), parallel, a measure of
  longitude; can be thought of as a measure of the **w**idth of a
  meridian on **E**arth; the letter “w” in wěi can be vertically flipped
  to get the letter “m” in meridian
  - <a href="#deciwei" id="dw">dw</a>: deciwěi, a tenth of a wěi (纬), a
    tenth of a parallel
  - <a href="#milliwei" id="mw">mw</a>: milliwěi, a thousandth of a wěi
    (纬), a thousandth of a parallel
- <a href="#xun" id="x">x</a>: xún (旬), decaday, a group of ten days, 2
  pentadays, represented by x like the Roman numeral X
  - <a href="#positiveintegerxun" id="pix">pix</a>: positive integer
    xún, ⌊pid ÷ 10⌋, 0 to 36
  - <a href="#negativeintegerxun" id="nix">nix</a>: negative integer
    xún, ⌊nid ÷ 10⌋, -37 to -1
  - <a href="#mixedintegerxun" id="mix">mix</a>: mixed integer xún, the
    first two digits of an nih mid
  - <a href="#xuninterdecilerange" id="xir">xir</a>: xún interdecile
    range, Dox 1 to 8, the days between Dox 0 and 9
- <a href="#year" id="y">y</a>: year
  - <a href="#milliyear" id="my">my</a>: milliyear, a thousandth of a
    year
  - <a href="#yearofera" id="yoe">yoe</a>: year of era, integer years
    since the Dec epoch
  - <a href="#epochalyearaggregate" id="eya">eya</a>: epochal year
    aggregate, yoe + toy, years since the Dec epoch including the
    fraction of the current year
  - <a href="#timeofyear" id="toy">toy</a>: time of year, the fraction
    of the year that has elapsed, eya mod 1, ada ÷ syl
  - <a href="#yearmonthday" id="ymd">ymd</a>: year month day, a
    Gregorian calendar date triplet
  - <a href="#solaryearlength" id="syl">syl</a>: solar year length, 365
    or 366 days, pid - nid
  - <a href="#lunaryearlength" id="lyl">lyl</a>: lunar year length, 354
    or 355 days
  - <a href="#commonerayear" id="cey">cey</a>: common era year, an ISO
    8601 (Gregorian calendar) year number
  - <a href="#cycleofera" id="coe">coe</a>: cycle of era, 400-year
    cycles since the Dec epoch
  - <a href="#yearofcycle" id="yoc">yoc</a>: year of cycle, years since
    the start of the current 400-year cycle, 0 to 399
  - <a href="#yearoftricennium" id="yot">yot</a>: year of tricennium,
    lunar years since the start of the current 30-year lunar cycle, 0 to
    29
  - <a href="#monthofyear" id="moy">moy</a>: month of year, zero-based,
    Moy 0 is March
  - <a href="#weekofyear" id="woy">woy</a>: week of year, (boydow + bow)
    ÷ 7, 0 to 53
  - <a href="#weekofmonth" id="wom">wom</a>: week of month
- <a href="#zoneequatorialmeter" id="z">z</a>: zem, zone equatorial
  meter, 4 decimeters, 16 inches
  - <a href="#squarekilozem" id="kz2">kz²</a>: square kilozem, a million
    square zem, megahexamilliare, Mx, hexakilare, 16 hectares, 1600
    ares, 40 acres, 0.16 square kilometers, 0.0625 square miles
  - <a href="#kilozem" id="kz">kz</a>: kilozem, 1000 zem, 400 meters, a
    quarter mile
  - <a href="#squarezem" id="z2">z²</a>: square zem, hexamilliare, 16
    square decimeters, 1.<span class="vinculum">7</span> square feet,
    256 square inches
  - <a href="#squaredecazem" id="Dz2">Dz²</a>: square decazem, 1
    hexadeciare, 16 square meters, 19.75 square yards, 100 square zem
  - <a href="#cubiczem" id="z3">z³</a>: cubic zem, 1 keg, 64 liters,
    1000 wine glasses, a million drops, half a barrel
  - <a href="#cubicdecizem" id="dz3">dz³</a>: cubic decizem, 1000 drops,
    64 milliliters, 2 ounces, 1 wine glass
  - <a href="#cubiccentizem" id="cz3">cz³</a>: cubic centizem, 1 drop,
    64 microliters
  - <a href="#decizem" id="dz">dz</a>: decizem, a tenth of a zem, 4
    centimeters
  - <a href="#centizem" id="cz">cz</a>: centizem, a hundredth of a zem,
    4 millimeters
  - <a href="#millizem" id="mz">mz</a>: millizem, a thousandth of a zem,
    0.4 millimeters

</div>

``` {ojs}
//| echo: false
//| output: false
function unix2dote(unix, zone, offset = 719468) {
  return [(unix ?? Date.now()) / 86400000 + (
    zone = zone ?? -Math.round(
      (new Date).getTimezoneOffset() / 144)
    ) / 10 + offset, zone]
}
function unix2dote1(unix, zone, offset = 719468) {
  return [
    (unix ?? Date.now()) / 86400000
    + (zone = zone ?? (10 - Math.round(
        (new Date).getTimezoneOffset() / 144)) % 10
      ) / 10 + offset, zone]
}
function dote2date(dote, zone = 0) {
  const cote = Math.floor((
      dote >= 0 ? dote
      : dote - 146096
    ) / 146097),
  dotc = dote - cote * 146097,
  yotc = Math.floor((dotc
    - Math.floor(dotc / 1460)
    + Math.floor(dotc / 36524)
    - Math.floor(dotc / 146096)
  ) / 365);
  return [
    yotc + cote * 400,
    dotc - (yotc * 365
      + Math.floor(yotc / 4)
      - Math.floor(yotc / 100)
  ), zone]}
function getEot(day) {
  const gamma = 2 * Math.PI * day / 365
    return (
      0.0011114386869002235 +
      -4.155124400404918    * Math.cos(gamma) +
      -2.9710873225303756   * Math.sin(gamma) +
      -4.635570414590801    * Math.cos(2 * gamma) +
      5.116176940364264     * Math.sin(2 * gamma)
    )
}
function getSda(day) {
  const gamma = 2 * Math.PI * day / 365
    return (
      0.001091553079960761  +
      -0.023117708562197206 * Math.cos(gamma) +
      0.060320423699681706  * Math.sin(gamma) +
      0.0006152631125526081 * Math.cos(2 * gamma) +
      0.0008981745798778195 * Math.sin(2 * gamma)
    )
}
function getSha(latitude, solarDeclinationAngle, solarZenithAngle = 0.252314) {
  const ratio = (
    costau(.252314) - sintau(latitude) * sintau(solarDeclinationAngle)) / (
    costau(latitude) * costau(solarDeclinationAngle))
  return ratio >= 1 ? 0 : ratio <= -1 ? Math.PI : Math.acos(ratio)
}
cospi = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cospi@umd/browser.js' )
sinpi = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinpi@umd/browser.js' )
function sintau(x) {
  return sinpi(2 * x);
}
function costau(x) {
  return cospi(2 * x);
}
shaRadiMapPlot = getSha(latTurnMapPlot, getSda(selAda))
shaHalfMapPlot = shaRadiMapPlot / Math.PI
shaTurnMapPlot = shaHalfMapPlot / 2
shaDegrMapPlot = shaHalfMapPlot * 180
eotTurnMapPlot = getEot(selAda) / 1000
lonTurnMapPlot = long2turn(location[0], 0)
latTurnMapPlot = lati2turn(location[1], 0)
astDecMapPlot = (0.95 + zeroTime + lonTurnMapPlot + eotTurnMapPlot) % 1 * 10
astDegMapPlot = astDecMapPlot * 36
astDegMapHalf = (astDecMapPlot * 36 + 180) % 360
shaDoyInput = getSha(latInput / 1000, getSda(doyInput))
daytimeDuration = shaDoyInput / Math.PI
noonDiff = daytimeDuration / 2
selectedSolarNoon = (9.55 - lonInput / 100 % 1 / 10 - getEot(doyInput) / 1000) % 1
selectedTimeZone = Math.floor(lonInput / 100)
selectedCurrent = (zeroTime + selectedTimeZone / 10) % 1
selectedSunrise = parseFloat((selectedSolarNoon - noonDiff).toFixed(5))
selectedSunset = selectedSolarNoon + noonDiff
selectedDifference = selectedCurrent - selectedSunset
selectedDuration = parseFloat((selectedSunset - selectedSunrise).toFixed(5))
dz = unix2dote(now)
decYear = ydz[0].toString().padStart(4, "0")
nDaysInYear = 365 + year2leap(decYear + 1)
fullfracYear = decYear + ydz[1] / nDaysInYear
decDoty = Math.floor(ydz[1])
zeroDote = unix2dote(now, 0)[0]
zeroTime = zeroDote % 1
zeroDate = dote2date(zeroDote)
zeroYear = zeroDate[0]
zeroAda = zeroDate[1]
zeroDoy = Math.floor(zeroAda)
zeroIsLeap = isLeapYear(zeroYear)
zeroAdaHsl = textcolor(zeroAda.toFixed(5), d3.color(piecewiseColor(zeroAda / (365 + zeroIsLeap))).formatHex())
zeroAdaHsl1 = textcolor(zeroAda.toFixed(5), d3.color(piecewiseColor(zeroAda / (365 + zeroIsLeap))).formatHex())
zeroTimeHsl0 = textcolor(zeroTime.toFixed(5).slice(1), d3.color(piecewiseColor(zeroTime)).formatHex())
zeroTimeHsl1 = textcolor(zeroTime.toFixed(5).slice(1), d3.color(piecewiseColor(zeroTime)).formatHex())
zeroTimeHsl2 = textcolor((zeroTime * 10).toFixed(4), d3.color(piecewiseColor(zeroTime)).formatHex())
zeroTimeHsl3 = textcolor((zeroTime * 10).toFixed(4), d3.color(piecewiseColor(zeroTime)).formatHex())
zeroTimeHsl4 = textcolor((zeroTime * 10).toFixed(4), d3.color(piecewiseColor(zeroTime)).formatHex())
zeroTimeHsl5 = textcolor((zeroTime * 10).toFixed(5), d3.color(piecewiseColor(zeroTime)).formatHex())
zeroDotyHsl = textcolor(zeroDoy.toString().padStart(3, "0"), d3.color(piecewiseColor(zeroDoy / (365 + zeroIsLeap))).formatHex())
zeroDoteHsl = textcolor(zeroDote.toFixed(5), d3.color(piecewiseColor(zeroDote % 1)).formatHex())
zeroYearHsl = textcolor(zeroYear, d3.color(piecewiseColor(zeroYear % 1000 / 1000)).formatHex())
browserDote = unix2dote(now)
browserTime = browserDote[0] % 1 * 10
browserZone = browserDote[1]
browserSign = browserZone > 0 ? "-" : "+"
zone0time = (browserTime - browserZone + 10) % 10
hours = browserTime * 2.4
minutes = hours % 1 * 60
seconds = minutes % 1 * 60
selectedDote = unix2dote(now, long2zone(location[0]))
selectedExact = selectedDote[0] % 1
selectedExactN = (1 - selectedExact) % 1
selectedZone = selectedDote[1]
ydz = dote2date(...selectedDote)
decTime = (selectedExact * 10).toFixed(4)
decTimeN = (selectedExactN * 10).toFixed(4)
barDD = decTime[0]
barDDN = decTimeN[0]
barMils = decTime.slice(2, 4)
barMilsN = decTimeN.slice(2, 4)
barBeats = decTime.slice(4, 6)
barBeatsN = decTimeN.slice(4, 6)
function lati2turn(degrees = -180, e = 3) {
  const base = 10 ** e, limit = base / 4;
  return Math.max(-limit, Math.min(limit, (degrees / 360) * base));
}
function turn2lati(turns = -500, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return Math.max(-90, Math.min(90, turns * 360 / 10**e))
}
graticule = d3.geoGraticule().stepMinor([36,36]).stepMajor([36,36])()
graticule.coordinates = graticule.coordinates.map(
  i => i.map(j => j.map((k, index, arr) => i.length === 3 && index === 0 ? k - 18 : k))
)
function turn2degr(turns = -500, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return turns % 10**e * 360 / 10**e
}
function turn2long(turns = -500, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return turns % 10**e * (360 / 10**e) - 18
}
function long2turn(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return (((degrees %= 360) < 0 ? degrees + 360 : degrees) + 18) / (360 / 10**e) % 10**e;
}
// https://github.com/topojson/world-atlas
world = d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
// countries = topojson.feature(world, world.objects.countries)
topojson = require("topojson-client@3")
function long2zone(degrees = -180) {
  return Math.floor(long2turn(degrees, 1));
}
function year2leap(year = 1970) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}
// https://observablehq.com/@dbridges/visualizing-seasonal-daylight
solarSystem = (root, vizwidth, location, date, hour, darkmode) => {
  const earthRadius = 0.065 * vizwidth;
  // const sunRadius = 0.015 * vizwidth;
  const solarSystemRadius = vizwidth / 2 - (vizwidth < 500 ? 4 : 20);
  const stretch = 0.06;
  const solarAngle = getSolarAngle(date);
  const solarAngleDeg = (solarAngle * 180) / Math.PI;
  const x = solarSystemRadius * Math.sin(solarAngle);
  const y = stretch * solarSystemRadius * Math.cos(solarAngle);
  const spin = 180 + -location[0] + solarAngleDeg + 360 * ((hour + 12) / 24);
  const earthGeo = { type: "Sphere" };
  const projection = d3
    .geoOrthographic()
    .fitWidth(earthRadius * 2, earthGeo)
    .rotate([spin, 0, 23.5])
    .translate([0, 0]);
  const staticProjection = d3
    .geoOrthographic()
    .fitWidth(earthRadius * 2, earthGeo)
    .rotate([solarAngleDeg - 90, 0])
    .translate([0, 0]);
  const path = d3.geoPath(projection).pointRadius(1.5);
  const staticPath = d3.geoPath(staticProjection);
  const oceanColor = darkmode ? "#007FFF" : mapcolors.ocean;
  const landColor = darkmode ? "#0808" : mapcolors.land;
  const borderColor = darkmode ? "#eee" : "#333";
  const solarSystem = root
    .append("g")
    .attr("transform", `translate(${vizwidth / 2})`);
  // solarSystem.append("circle").attr("r", sunRadius).attr("fill", colors.sun);
  /* Draw orbit */
    solarSystem
      .append("ellipse")
      .attr("rx", solarSystemRadius)
      .attr("ry", stretch * solarSystemRadius)
      .attr("fill", "none")
      .attr("stroke-width", `${width < 300 ? .3 : width < 400 ? .4 : width < 500 ? .5 : width < 600 ? .6 : width < 700 ? .7 : width < 800 ? .8 : width < 900 ? .9 : width < 1000 ? 1 : width < 1100 ? 1.1 : width < 1200 ? 1.2 : width < 1300 ? 1.3 : width < 1400 ? 1.4 : width < 1500 ? 1.5 : width < 1600 ? 1.6 : width < 1700 ? 1.7 : width < 1750 ? 1.75 : width < 1800 ? 1.8 : width < 1900 ? 1.9 : width < 2000 ? 2 : width < 2100 ? 2.1 : width < 2200 ? 2.2 : width < 2300 ? 2.3 : width < 2400 ? 2.4 : width < 2500 ? 2.5 : width < 2600 ? 2.6 : width < 2700 ? 2.7 : width < 2800 ? 2.8 : width < 2900 ? 2.9 : width < 3000 ? 3 : width < 3100 ? 3.1 : width < 3200 ? 3.2 : width < 3300 ? 3.3 : width < 3400 ? 3.4 : width < 3500 ? 3.5 : width < 3600 ? 3.6 : width < 3700 ? 3.7 : width < 3800 ? 3.8 : width < 3900 ? 3.9 : width < 4000 ? 4 : width < 4100 ? 4.1 : width < 4200 ? 4.2 : width < 4300 ? 4.3 : width < 4400 ? 4.4 : width < 4500 ? 4.5 : width < 4600 ? 4.6 : width < 4700 ? 4.7 : width < 4800 ? 4.8 : width < 4900 ? 4.9 : width < 5000 ? 5 : width < 5100 ? 5.1 : width < 5200 ? 5.2 : width < 5300 ? 5.3 : width < 5400 ? 5.4 : width < 5500 ? 5.5 : width < 5600 ? 5.6 : width < 5700 ? 5.7 : width < 5800 ? 5.8 : majwid / 1000}`)
      .attr("stroke", "black");
    /* Draw month ticks */
    d3.range(12).map((m) => {
      const d = new Date(date.getFullYear(), m, 1);
      const angle = getSolarAngle(d);
      const llmultiplier =  [5, 11].includes(m) ? 3 : [4, 10].includes(m) ? 1.75 : [0, 6].includes(m) ? 1.5 : [3, 9].includes(m) ? 1.25 : 1;
      const linelength = llmultiplier * (width < 300 ? 13 : width < 400 ? 14 : width < 500 ? 15 : width < 600 ? 16 : width < 700 ? 17 : width < 800 ? 18 : width < 900 ? 19 : width < 1000 ? 20 : width < 1100 ? 21 : width < 1200 ? 22 : width < 1300 ? 23 : width < 1400 ? 24 : width < 1500 ? 25 : width < 1600 ? 26 : width < 1700 ? 27 : width < 1750 ? 27.5 : width < 1800 ? 28 : width < 1900 ? 39 : width < 2000 ? 50 : width < 2100 ? 61 : width < 2200 ? 62 : width < 2300 ? 63 : width < 2400 ? 64 : width < 2500 ? 65 : width < 2600 ? 66 : width < 2700 ? 67 : width < 2800 ? 68 : width < 2900 ? 69 : width < 3000 ? 70 : width < 3100 ? 71 : width < 3200 ? 72 : width < 3300 ? 73 : width < 3400 ? 74 : width < 3500 ? 75 : width < 3600 ? 76 : width < 3700 ? 77 : width < 3800 ? 78 : width < 3900 ? 79 : width < 4000 ? 80 : width < 4100 ? 81 : width < 4200 ? 82 : width < 4300 ? 83 : width < 4400 ? 84 : width < 4500 ? 85 : width < 4600 ? 86 : width < 4700 ? 87 : width < 4800 ? 88 : width < 4900 ? 89 : width < 5000 ? 90 : width < 5100 ? 91 : width < 5200 ? 92 : width < 5300 ? 93 : width < 5400 ? 94 : width < 5500 ? 95 : width < 5600 ? 96 : width < 5700 ? 97 : width < 5800 ? 98 : majwid / 59);
      solarSystem
        .append("line")
        .attr("x1", (solarSystemRadius + linelength) * Math.sin(angle))
        .attr("y1", (solarSystemRadius + linelength) * stretch * Math.cos(angle))
        .attr("x2", (solarSystemRadius - linelength) * Math.sin(angle))
        .attr("y2", (solarSystemRadius - linelength) * stretch * Math.cos(angle))
        .attr("stroke-width", `${width < 300 ? .6 : width < 400 ? .8 : width < 500 ? 1 : width < 600 ? 1.2 : width < 700 ? 1.4 : width < 800 ? 1.6 : width < 900 ? 1.8 : width < 1000 ? 2 : width < 1100 ? 2.2 : width < 1200 ? 2.4 : width < 1300 ? 2.6 : width < 1400 ? 2.8 : width < 1500 ? 3 : width < 1600 ? 3.2 : width < 1700 ? 3.2 : width < 1750 ? 3.3 : width < 1800 ? 3.4 : width < 1900 ? 3.6 : width < 2000 ? 4 : width < 2100 ? 4.2 : width < 2200 ? 4.4 : width < 2300 ? 4.6 : width < 2400 ? 4.8 : width < 2500 ? 5 : width < 2600 ? 5.2 : width < 2700 ? 5.4 : width < 2800 ? 5.6 : width < 2900 ? 5.8 : width < 3000 ? 6 : width < 3100 ? 6.2 : width < 3200 ? 6.4 : width < 3300 ? 6.6 : width < 3400 ? 6.8 : width < 3500 ? 7 : width < 3600 ? 7.2 : width < 3700 ? 7.4 : width < 3800 ? 7.6 : width < 3900 ? 7.8 : width < 4000 ? 8 : width < 4100 ? 8.2 : width < 4200 ? 8.4 : width < 4300 ? 8.6 : width < 4400 ? 8.8 : width < 4500 ? 9 : width < 4600 ? 9.2 : width < 4700 ? 9.4 : width < 4800 ? 9.6 : width < 4900 ? 9.8 : width < 5000 ? 9 : width < 5100 ? 9.2 : width < 5200 ? 9.4 : width < 5300 ? 9.6 : width < 5400 ? 9.8 : width < 5500 ? 10 : width < 5600 ? 10.2 : width < 5700 ? 10.4 : width < 5800 ? 10.6 : majwid / 547}`)
        .attr("stroke", "black");
      const startMonthAngle = getSolarAngle(new Date(date.getFullYear(), m, 1));
      solarSystem
        .append("text")
        .text(date2doty(d))
        .attr("x", (solarSystemRadius + 18 - majwid / 50) * Math.sin(startMonthAngle) * (width < 350 ? 1.05 : width < 600 ? 1.08 : width < 700 ? 1.1 : width < 769 ? 1.11 : width < 1000 ? 1.1 : width < 1700 ? 1.12 : width < 1800 ? 1.12 : width < 1900 ? 1.13 : width < 2000 ? 1.142 : width < 3000 ? 1.15 : width < 4000 ? 1.16 : width < 5000 ? 1.16 : 1.16))
        .attr(
          "y",
          (solarSystemRadius + 2 - majwid / 2.8) * 7 * stretch * Math.cos(startMonthAngle) + Math.sign(Math.cos(startMonthAngle)) * (width < 300 ? 8 : width < 400 ? 8 : width < 450 ? 8 : width < 500 ? 7 : width < 600 ? 8 : width < 700 ? 8 : width < 769 ? 8 : width < 800 ? 13.5 : width < 850 ? 13.75 : width < 900 ? 14 : width < 950 ? 15 : width < 1000 ? 16 : width < 1100 ? 20 : width < 1200 ? 20 : width < 1300 ? 20 : width < 1400 ? 20 : 12)
        )
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-size", majwid / 1000 * (width < 350 ? 30 : width < 400 ? 30 : width < 450 ? 30 : width < 500 ? 30 : width < 550 ? 30 : width < 600 ? 30 : width < 650 ? 30 : width < 675 ? 30 : width < 700 ? 30 : width < 750 ? 30 : width < 760 ? 30 : width < 769 ? 30 : width < 770 ? 30 : width < 780 ? 30 : width < 800 ? 30 : width < 900 ? 30 : width < 950 ? 30 : width < 975 ? 30 : width < 1000 ? 30 : width < 1100 ? 30 : width < 1200 ? 30 : width < 1250 ? 30 : width < 1300 ? 30 : width < 1400 ? 30 : width < 1440 ? 30 : width < 1450 ? 30 : width < 1480 ? 30 : width < 1500 ? 30 : width < 1520 ? 30 : width < 1540 ? 30 : width < 1560 ? 30 : width < 1600 ? 30 : width < 1620 ? 30 : width < 1640 ? 30 : width < 1660 ? 30 : width < 1680 ? 30 : width < 1700 ? 30 : width < 1720 ? 30 : width < 1780 ? 30 : width < 1820 ? 30 : width < 1880 ? 30 : width < 1920 ? 30 : width < 1970 ? 30 : width < 2000 ? 30 : width < 2100 ? 30 : width < 2200 ? 30 : width < 2300 ? 30 : width < 2400 ? 30 : width < 2500 ? 30 : width < 2600 ? 30 : width < 2700 ? 30 : width < 2800 ? 30 : width < 2900 ? 27 : width < 2950 ? 30 : width < 3000 ? 30 : width < 3100 ? 30 : width < 3200 ? 30 : width < 3250 ? 30 : width < 3300 ? 30 : width < 3400 ? 30 : width < 3450 ? 30 : width < 3500 ? 30 : width < 3550 ? 30 : width < 3600 ? 30 : width < 3700 ? 30 : width < 3750 ? 30 : width < 3800 ? 30 : width < 3850 ? 30 : width < 3900 ? 30 : width < 4000 ? 30 : width < 4100 ? 30 : width < 4200 ? 30 : width < 4250 ? 27 : width < 4300 ? 27 : width < 4325 ? 27 : width < 4350 ? 27 : width < 4400 ? 27 : width < 4500 ? 27 : width < 4550 ? 27 : width < 4600 ? 27 : width < 4650 ? 27 : width < 4700 ? 27 : width < 4800 ? 27 : width < 4850 ? 27 : width < 4900 ? 27 : width < 4950 ? 27 : width < 5000 ? 27 : width < 5050 ? 27 : width < 5100 ? 27 : width < 5150 ? 28 : width < 5250 ? 28 : width < 5300 ? 28 : width < 5325 ? 28 : width < 5325 ? 28 : width < 5350 ? 28 : width < 5450 ? 28 : width < 5500 ? 28 : width < 5550 ? 29 : width < 5600 ? 29 : 30))
        .attr("font-family", "sans-serif")
        .attr("fill", "black");
    });
    const earth = solarSystem
      .append("g")
      .attr("transform", `translate(${x}, ${y})`);
    function drawEarth() {
      earth.append("line").attr("y1", -1.5 * earthRadius).attr("y2", 1.5 * earthRadius).attr("stroke", "blue").attr("transform", `rotate(-23.5)`).attr("stroke-width", `${width < 500 ? .25 : width < 1000 ? .5 : width < 1500 ? 1 : width < 2000 ? 1.5 : width < 2500 ? 2 : width < 3000 ? 2.2 : width < 3500 ? 2.4 : width < 4000 ? 2.6 : width < 4500 ? 2.8 : width < 5000 ? 3 : width < 5500 ? 3.5 : 4}`);
      earth.append("path").attr("d", path(earthGeo)).attr("fill", darkmode ? "#007FFF" : mapcolors.ocean).attr("id", "globeOcean");
      earth.append("path").attr("d", path(land)).attr("fill", darkmode ? "#0808" : mapcolors.land).attr("id", "globeLand");
      earth.append("path").attr("d", path(countries)).attr("stroke-width", `${width < 500 ? .1 : width < 1000 ? .2 : width < 1500 ? .3 : width < 2000 ? .4 : width < 2500 ? .5 : width < 3000 ? .6 : width < 3500 ? .7 : width < 4000 ? .8 : width < 4500 ? .9 : width < 5000 ? 1 : width < 5500 ? 1.1 : 1.2}`).attr("fill", "none").attr("stroke", darkmode ? "#eee" : "#333").attr("id", "globeBorders");
      path.pointRadius(width < 500 ? 2.75 : width < 1000 ? 5.5 : width < 2000 ? 11 : width < 3000 ? 16.5 : width < 4000 ? 22 : width < 5000 ? 27.5 : 33);
      earth.append("path").attr("d", path({ type: "Point", coordinates: location })).attr("fill", "none").attr("stroke-width", width < 500 ? .3 : width < 1000 ? .6 : width < 2000 ? 1.2 : width < 3000 ? 1.8 : width < 4000 ? 2.4 : width < 5000 ? 3 : 3.6).attr("stroke", "black");
      path.pointRadius(width < 500 ? 2.25 : width < 1000 ? 4.5 : width < 2000 ? 9 : width < 3000 ? 13.5 : width < 4000 ? 18 : width < 5000 ? 22.5 : 27);
      earth.append("path").attr("d", path({ type: "Point", coordinates: location })).attr("fill", "none").attr("stroke-width", width < 500 ? 1.125 : width < 1000 ? 2.25 : width < 2000 ? 4.5 : width < 3000 ? 6.75 : width < 4000 ? 9 : width < 5000 ? 11.25 : 13.5).attr("stroke", "red");
  }
  drawEarth();
}
function greg2doty(month = 1, day = 1) {
    return Math.floor(
        (153 * (month > 2 ? month - 3 : month + 9) + 2) / 5 + day - 1
)}
function date2doty(date) {
  return greg2doty(date.getMonth() + 1, date.getDate())
}
function date2doty1(date) {
  return greg2doty(date.getMonth() + 1, date.getDate())
}
// https://observablehq.com/@dbridges/visualizing-seasonal-daylight
// globe = (root, { vizwidth, location, date, hour }) => {
//   const solarAngle = getSolarAngle(date);
//   const solarAngleDeg = toDegrees(solarAngle);
//   const hourSpin = 360 * ((hour + 12) / 24);
//   const spin = (180 + -location[0] + solarAngleDeg + hourSpin);
//   const tilt = -15;
//   const projection = d3.geoOrthographic()
//                        .fitWidth(vizwidth, graticule)
//                        .rotate([spin, tilt, 23.5]);
//   const path = d3.geoPath(projection);
//   const unClippedProjection = d3.geoOrthographic()
//                                 .clipAngle(null)
//                                 .fitWidth(vizwidth, graticule)
//                                 .rotate([spin, tilt, 23.5]);
//   const unClippedPath = d3.geoPath(unClippedProjection);
//   const staticProjection = d3.geoOrthographic()
//                              .fitWidth(vizwidth, graticule)
//                              .rotate([solarAngleDeg - 90, tilt]);
//   const staticPath = d3.geoPath(staticProjection);
//   const background = root.append("g");
//   const earth = root.append("g").style("opacity", 0.75);
//   const foreground = root.append("g");
//   earth.append("path")
//     .attr("d", path({type: "Sphere"}))
//     .attr("fill", mapcolors.ocean)
//     .attr("stroke", "#9ecbda");
//   earth.append("path")
//     .attr("d", path(land))
//     .attr("fill", mapcolors.land);
//   earth.append("path")
//     .attr("d", path(countries))
//     .attr("stroke-width", "1")
//     .attr("fill", "none")
//     .attr("stroke", "#000");
//   background.append("path")
//     .attr("d", unClippedPath({type: "Point", coordinates: location}))
//     .attr("fill", "red");
//   const latitudeCoords = (latitude, start, end) => {
//     const longitudes = d3.range(start, end, 2).concat(end);
//     return longitudes.map(d => [d, latitude]);
//   }
//   const correctSpin = d3.geoRotation([-hourSpin, 0]);
//   const correctTilt = d3.geoRotation([6, 0, 0]);
//   /* total angular extent of day/night */
//   const dayExtent = 360 * dayLength(date, location[1]) / 24;
//   const nightExtent = 360 - dayExtent;
//   const dayLine = {
//     type: "LineString",
//     coordinates: latitudeCoords(location[1],
//                                 location[0] - dayExtent / 2,
//                                 location[0] + dayExtent / 2).map(d => correctSpin(d))
//   };
//   const nightLine = {
//     type: "LineString",
//     coordinates: latitudeCoords(location[1],
//                                 location[0] - dayExtent / 2 - nightExtent,
//                                 location[0] - dayExtent / 2).map(d => correctSpin(d))
//   };
//   background.append("path")
//     .attr("d", unClippedPath(dayLine))
//     .attr("fill", "none")
//     .attr("stroke", mapcolors.day)
//     .attr("stroke-width", 3);
//   background.append("path")
//     .attr("d", unClippedPath(nightLine))
//     .attr("fill", "none")
//     .attr("stroke", mapcolors.night)
//     .attr("stroke-width", 3);
//   foreground.append("path")
//     .attr("d", path(dayLine))
//     .attr("fill", "none")
//     .attr("stroke", mapcolors.day)
//     .attr("stroke-width", 3);
//   foreground.append("path")
//     .attr("d", path(nightLine))
//     .attr("fill", "none")
//     .attr("stroke", mapcolors.night)
//     .attr("stroke-width", 3);
//   foreground.append("path")
//     .attr("d", path({type: "Point", coordinates: location}))
//     .attr("stroke-width", .5)
//     .attr("stroke", "black")
//     .attr("fill", "red");
//   const shadowPolygon = [[0, -90], [0, 0], [0, 90], [180, 0], [0, -90]].map(d => correctTilt(d));
//   foreground.append("path")
//     .attr("d", staticPath({type: "Polygon", coordinates: [shadowPolygon]}))
//     .attr("fill", "rgba(0, 0, 0, 0.25)");
// }
dayOfYear = (date) => {
  const yearStart = new Date(date.getFullYear(), 0, 1+60);
  return Math.floor((date.getTime() - yearStart.getTime())/86400000) + 1
}
// https://observablehq.com/@dbridges/visualizing-seasonal-daylight
daylightPlot = (
  root,
  { vizwidth, height, year, latitude, defaultDate, defaultHour }
) => {
  const margin = { top: 32, bottom: 32, left: 32, right: 0 };
  const chartWidth = vizwidth - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const yTickValues =
    width > 250 ? [3, 6, 9, 12, 15, 18, 21] : width > 100 ? [6, 12, 18] : [12];
  const yScale = d3
    .scaleLinear()
    .domain([0, 24])
    .range([margin.left, margin.left + chartWidth])
    .clamp(true);
  // y-axis scale
  const xScale = d3
    .scaleTime()
    .domain([new Date(year, 0, 61), new Date(year, 11, 91)])
    .range([margin.top, margin.top + chartHeight])
    .clamp(true);
  // y-axis labels
  const xAxis = d3
    .axisBottom(xScale)
    .tickValues(d3.timeMonth.range(new Date(year, 0, 60), new Date(year, 12, 57)))
    .tickSize(chartWidth)
    .tickFormat(date2doty1);
  const yAxis = d3
    .axisLeft(yScale)
    .tickValues(yTickValues)
    .tickSize(chartHeight)
    .tickFormat((d) => { return `${d / .024}` });
  let date = defaultDate || new Date();
  let hour = defaultHour != null ? defaultHour : date.getHours();
  const handleMouseMove = (e) => {};
  root
    .append("rect")
    .attr("y", margin.left)
    .attr("x", margin.top)
    .attr("height", chartWidth)
    .attr("width", chartHeight)
    .attr("ry", 0.05 * vizwidth)
    .attr("fill", mapcolors.night);
  root
    .append("g")
    .attr("transform", `translate(0, ${margin.top})`)
    .call(xAxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick").attr("color", mapcolors.grid))
    .call((g) => g.selectAll(".tick text").attr("font-size", (width < 200 ? .3 : width < 210 ? .34 : width < 220 ? .38 : width < 230 ? .42 : width < 240 ? .46 : width < 250 ? .50 : width < 260 ? .54 : width < 270 ? .58 : width < 280 ? .62 : width < 290 ? .66 : width < 300 ? .70 : width < 310 ? .74 : width < 320 ? .78 : width < 330 ? .82 : width < 340 ? .86 : width < 350 ? .9 : width < 360 ? .92 : width < 370 ? .94 : width < 380 ? .96 : width < 390 ? .98 : width < 400 ? 1 : width < 410 ? 1.02 : width < 420 ? 1.04 : width < 430 ? 1.06 : width < 440 ? 1.08 : width < 450 ? 1.1 : width < 460 ? 1.12 : width < 470 ? 1.14 : width < 480 ? 1.16 : width < 490 ? 1.18 : width < 500 ? 1.2 : width < 550 ? 1.3 : width < 600 ? 1.4 : width < 650 ? 1.6 : width < 700 ? 1.8 : width < 769 ? 1.8 : width < 800 ? 1.9 : width < 850 ? 1.95 : width < 900 ? 2 : width < 950 ? 2.1 : width < 1000 ? 2.2 : width < 1050 ? 2.3 : width < 1100 ? 2.4 : width < 1150 ? 2.5 : width < 1200 ? 2.6 : width < 1250 ? 2.8 : width < 1300 ? 3 : width < 1400 ? 3.25 : width < 1500 ? 3.5 : width < 1600 ? 3.75 : width < 1800 ? 4 : width < 1900 ? 4.5 : width < 2000 ? 4.75 : width < 2100 ? 5 : width < 2200 ? 5.5 : width < 2400 ? 6 : width < 2600 ? 7 : width < 2800 ? 7.5 : width < 3000 ? 8 : width < 3200 ? 8.5 : width < 3400 ? 9 : width < 3600 ? 9.5 : width < 3800 ? 10 : width < 4000 ? 10.5 : width < 4200 ? 11 : width < 4400 ? 11.5 : width < 4600 ? 12 : width < 4800 ? 12.5 : width < 5000 ? 13 : width < 5200 ? 13.5 : width < 5400 ? 14 : width < 5500 ? 14 : width < 5600 ? 14.5 : 15) * fontSize))
    .call((g) => g.selectAll(".tick line").attr("stroke-width", (width < 500 ? .0125 : width < 1000 ? .025 : width < 2000 ? .05 : width < 3000 ? .1 : width < 4000 ? .2 : width < 5000 ? .3 : .4) * fontSize))
    .call((g) => g.selectAll(".tick text").attr("color", "black"))
    .call((g) => g.selectAll(".tick line").attr("stroke-dasharray", "5 3"));
  root
    .append("g")
    .attr("transform", `translate(${margin.left + chartHeight}, 0)`)
    .call(yAxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick").attr("color", mapcolors.grid))
    .call((g) => g.selectAll(".tick text").attr("font-size", (width < 300 ? .6 : width < 325 ? .7 : width < 350 ? .8 : width < 375 ? .9 : width < 400 ? 1 : width < 450 ? 1.2 : width < 500 ? 1.3 : width < 525 ? 1.4 : width < 550 ? 1.5 : width < 600 ? 1.8 : width < 700 ? 1.8 : width < 769 ? 1.8 : width < 800 ? 1.8 : width < 900 ? 2.5 : width < 1000 ? 3 : width < 1050 ? 3 : width < 1100 ? 3 : width < 1150 ? 3 : width < 1200 ? 3 : width < 1300 ? 3 : width < 1400 ? 3.2 : width < 1500 ? 3.4 : width < 1600 ? 3.6 : width < 1700 ? 3.8 : width < 1800 ? 4 : width < 1900 ? 4.2 : width < 2000 ? 4.5 : width < 2400 ? 5 : width < 2500 ? 5.5 : width < 2600 ? 6 : width < 2700 ? 6 : width < 2800 ? 6.5 : width < 3000 ? 7 : width < 3200 ? 7 : width < 3400 ? 8 : width < 3600 ? 9 : width < 4400 ? 9.5 : width < 4500 ? 10 : width < 4600 ? 10.5 : width < 4700 ? 11 : width < 4800 ? 11.5 : width < 4900 ? 12 : width < 5000 ? 12.5 : width < 5100 ? 13 : width < 5200 ? 13.5 : width < 5400 ? 14 : width < 5600 ? 14 : width < 5800 ? 15 : 14) * fontSize))
    .call((g) => g.selectAll(".tick line").attr("stroke-width", (width < 500 ? .0125 : width < 1000 ? .025 : width < 2000 ? .05 : width < 3000 ? .1 : width < 4000 ? .2 : width < 5000 ? .3 : .4) * fontSize))
    .call((g) => g.selectAll(".tick text").attr("color", "black"))
    .call((g) => g.selectAll(".tick line").attr("stroke-dasharray", "5 3"));
  root
    .append("text")
    .text("Time of day")
    .attr("x", -chartHeight / 5 + (width < 275 ? -16 : width < 300 ? -16 : width < 325 ? -16 : width < 350 ? -17 : width < 360 ? -18 : width < 375 ? -20 : width < 400 ? -21 : width < 425 ? -24 : width < 450 ? -25 : width < 475 ? -26 : width < 500 ? -28 : width < 525 ? -31 : width < 550 ? -33 : width < 575 ? -35 : width < 600 ? -38.5 : width < 625 ? -42 : width < 650 ? -45 : width < 675 ? -46 : width < 700 ? -47 : width < 725 ? -48 : width < 740 ? -49 : width < 750 ? -50 : width < 768 ? -51 : width < 769 ? -50 : width < 800 ? -70 : width < 850 ? -78 : width < 900 ? -76 : width < 1000 ? -74 : width < 1025 ? -96 : width < 1050 ? -96 : width < 1075 ? -98 : width < 1100 ? -98 : width < 1125 ? -89 : width < 1150 ? -89 : width < 1175 ? -80 : width < 1200 ? -80 : width < 1225 ? -68 : width < 1250 ? -56 : width < 1275 ? -44 : width < 1300 ? -36 : width < 1350 ? -24 : width < 1400 ? -16 : width < 1450 ? 2 : width < 1500 ? 8 : width < 1600 ? 24 : width < 1650 ? 36 : width < 1700 ? 30 : width < 1750 ? 33 : width < 1800 ? 36 : width < 1900 ? 30 : width < 2000 ? 35 : width < 2200 ? 40 : width < 2300 ? 45 : width < 2400 ? 50 : width < 2500 ? 55 : width < 2600 ? 60 : width < 2800 ? 60 : width < 3000 ? 64 : width < 3100 ? 60 : width < 3200 ? 60 : width < 3300 ? 60 : width < 3400 ? 70 : width < 3500 ? 90 : width < 3600 ? 100 : width < 3700 ? 130 : width < 3800 ? 135 : width < 3900 ? 155 : width < 4000 ? 155 : width < 4200 ? 162 : width < 4300 ? 172 : width < 4400 ? 174 : width < 4500 ? 176 : width < 4600 ? 178 : width < 4700 ? 180 : width < 4800 ? 185 : width < 4900 ? 190 : width < 5000 ? 195 : width < 5200 ? 195 : width < 5400 ? 215 : width < 5600 ? 230 : width < 5800 ? 235 : 250))
    .attr("y", margin.left - (width < 275 ? 20 : width < 300 ? 22 : width < 325 ? 26 : width < 350 ? 28 : width < 375 ? 30 : width < 400 ? 32 : width < 425 ? 38 : width < 450 ? 40 : width < 475 ? 42 : width < 500 ? 44 : width < 525 ? 46 : width < 550 ? 48 : width < 575 ? 54 : width < 600 ? 54 : width < 650 ? 54 : width < 675 ? 54 : width < 700 ? 54 : width < 720 ? 54 : width < 740 ? 54 : width < 760 ? 54 : width < 769 ? 54 : width < 800 ? 58 : width < 850 ? 75 : width < 900 ? 75 : width < 1000 ? 90 : width < 1100 ? 92 : width < 1200 ? 94 : width < 1300 ? 96 : width < 1400 ? 98 : width < 1500 ? 105 : width < 1600 ? 110 : width < 1700 ? 120 : width < 1800 ? 125 : width < 1900 ? 130 : width < 2000 ? 145 : width < 2100 ? 150 : width < 2200 ? 155 : width < 2400 ? 160 : width < 2500 ? 170 : width < 2600 ? 180 : width < 2700 ? 190 : width < 2800 ? 200 : width < 3000 ? 210 : width < 3200 ? 220 : width < 3400 ? 250 : width < 3600 ? 260 : width < 3800 ? 270 : width < 4000 ? 280 : width < 4200 ? 290 : width < 4400 ? 300 : width < 4600 ? 320 : width < 4800 ? 340 : width < 4900 ? 360 : width < 5000 ? 380 : width < 5100 ? 390 : width < 5200 ? 390 : width < 5300 ? 395 : width < 5400 ? 395 : width < 5500 ? 395 : width < 5600 ? 395 : 425))
    .attr("text-anchor", "middle")
    .attr("font-size", fontSize * (width < 275 ? .6 : width < 300 ? .7 : width < 325 ? .8 : width < 350 ? .9 : width < 375 ? 1 : width < 400 ? 1.1 : width < 450 ? 1.2 : width < 500 ? 1.3 : width < 550 ? 1.4 : width < 600 ? 1.5 : width < 650 ? 1.7 : width < 769 ? 1.8 : width < 800 ? 2 : width < 900 ? 2.25 : width < 1000 ? 2.5 : width < 1000 ? 2.75 : width < 1200 ? 3 : width < 1500 ? 3.5 : width < 1600 ? 4 : width < 1700 ? 4.5 : width < 1800 ? 5 : width < 1900 ? 5.5 : width < 2200 ? 6 : width < 2300 ? 6.5 : width < 2400 ? 7 : width < 2500 ? 7.5 : width < 2600 ? 8 : width < 2800 ? 8.5 : width < 3200 ? 9 : width < 3600 ? 9.5 : width < 3900 ? 9.5 : width < 4000 ? 10 : width < 4100 ? 10.5 : width < 4200 ? 11 : width < 4300 ? 11.5 : width < 4400 ? 12 : width < 4500 ? 12.5 : width < 4600 ? 13 : width < 4700 ? 13.5 : width < 4800 ? 14 : width < 4900 ? 14.5 : width < 5000 ? 15 : width < 5200 ? 15 : width < 5400 ? 15 : width < 5600 ? 15 : width < 5800 ? 15 : 16))
    .attr("font-family", "sans-serif")
    .attr("transform", "rotate(-90)")
    .attr("fill", "black");
  root
    .append("text")
    .text("Day of year")
    .attr("x", margin.left + majwid / 2 + (width < 275 ? -18 : width < 300 ? -19 : width < 325 ? -21 : width < 350 ? -24 : width < 375 ? -27.5 : width < 400 ? -33 : width < 425 ? -38 : width < 450 ? -39 : width < 475 ? -41 : width < 500 ? -46 : width < 520 ? -50 : width < 540 ? -49 : width < 550 ? -48 : width < 580 ? -50 : width < 600 ? -50 : width < 620 ? -49.5 : width < 640 ? -49 : width < 650 ? -49 : width < 660 ? -49 : width < 680 ? -49 : width < 700 ? -49 : width < 734 ? -49 : width < 769 ? -49 : width < 800 ? -79 : width < 850 ? -97 : width < 900 ? -97 : width < 950 ? -112 : width < 1000 ? -112 : width < 1100 ? -102 : width < 1200 ? -96 : width < 1225 ? -96 : width < 1250 ? -96 : width < 1275 ? -102 : width < 1300 ? -104 : width < 1350 ? -106 : width < 1400 ? -104 : width < 1450 ? -104 : width < 1500 ? -98 : width < 1550 ? -90 : width < 1600 ? -90 : width < 1700 ? -87 : width < 1800 ? -88 : width < 1900 ? -84 : width < 1925 ? -80 : width < 1950 ? -79 : width < 1975 ? -78 : width < 2000 ? -77 : width < 2100 ? -77 : width < 2200 ? -78 : width < 2300 ? -79 : width < 2400 ? -80 : width < 2500 ? -90 : width < 2600 ? -95 : width < 2700 ? -104 : width < 2800 ? -105 : width < 2900 ? -106 : width < 3000 ? -107 : width < 3100 ? -108 : width < 3200 ? -106 : width < 3300 ? -110 : width < 3400 ? -105 : width < 3500 ? -106 : width < 3600 ? -107 : width < 3700 ? -108 : width < 3800 ? -109 : width < 3800 ? -110 : width < 4000 ? -105 : width < 4100 ? -106 : width < 4200 ? -107 : width < 4300 ? -108 : width < 4400 ? -109 : width < 4450 ? -110 : width < 4500 ? -112 : width < 4550 ? -114 : width < 4600 ? -116 : width < 4650 ? -118 : width < 4700 ? -122 : width < 4800 ? -126 : width < 5000 ? -130 : width < 5200 ? -125 : width < 5400 ? -130 : width < 5600 ? -135 : width < 5800 ? -140 : -145))
    .attr("y", margin.bottom + (width < 280 ? 92 : width < 290 ? 96 : width < 300 ? 102 : width < 310 ? 106 : width < 320 ? 110 : width < 330 ? 114 : width < 340 ? 120 : width < 350 ? 126 : width < 360 ? 132 : width < 370 ? 136 : width < 380 ? 140 : width < 390 ? 144 : width < 400 ? 150 : width < 410 ? 158 : width < 420 ? 162 : width < 425 ? 164 : width < 430 ? 168 : width < 440 ? 174 : width < 450 ? 180 : width < 460 ? 184 : width < 470 ? 190 : width < 480 ? 194 : width < 490 ? 198 : width < 500 ? 206 : width < 510 ? 214 : width < 520 ? 220 : width < 530 ? 224 : width < 540 ? 228 : width < 550 ? 236 : width < 560 ? 246 : width < 570 ? 252 : width < 580 ? 256 : width < 590 ? 264 : width < 600 ? 272 : width < 610 ? 280 : width < 620 ? 288 : width < 630 ? 294 : width < 640 ? 300 : width < 650 ? 306 : width < 660 ? 312 : width < 670 ? 314 : width < 680 ? 320 : width < 690 ? 326 : width < 700 ? 332 : width < 710 ? 334 : width < 720 ? 340 : width < 730 ? 346 : width < 740 ? 352 : width < 750 ? 356 : width < 760 ? 362 : width < 769 ? 366 : width < 780 ? 385 : width < 790 ? 390 : width < 800 ? 394 : width < 812.5 ? 404 : width < 825 ? 413 : width < 830 ? 424 : width < 840 ? 429 : width < 850 ? 434 : width < 875 ? 438 : width < 900 ? 444 : width < 950 ? 458 : width < 1000 ? 465 : width < 1025 ? 535 : width < 1050 ? 550 : width < 1075 ? 555 : width < 1100 ? 560 : width < 1125 ? 575 : width < 1150 ? 575 : width < 1175 ? 575 : width < 1200 ? 575 : width < 1225 ? 565 : width < 1250 ? 555 : width < 1275 ? 550 : width < 1300 ? 538 : width < 1325 ? 542 : width < 1350 ? 544 : width < 1375 ? 540 : width < 1400 ? 542 : width < 1425 ? 544 : width < 1450 ? 555 : width < 1500 ? 555 : width < 1525 ? 555 : width < 1550 ? 560 : width < 1575 ? 565 : width < 1600 ? 575 : width < 1620 ? 570 : width < 1640 ? 575 : width < 1650 ? 575 : width < 1660 ? 595 : width < 1680 ? 602 : width < 1700 ? 610 : width < 1720 ? 620 : width < 1750 ? 630 : width < 1800 ? 650 : width < 1820 ? 690 : width < 1850 ? 700 : width < 1900 ? 715 : width < 1950 ? 740 : width < 2000 ? 760 : width < 2050 ? 785 : width < 2100 ? 800 : width < 2150 ? 820 : width < 2200 ? 840 : width < 2250 ? 860 : width < 2300 ? 880 : width < 2350 ? 900 : width < 2400 ? 920 : width < 2425 ? 935 : width < 2450 ? 950 : width < 2475 ? 958 : width < 2500 ? 965 : width < 2550 ? 990 : width < 2600 ? 1010 : width < 2650 ? 1040 : width < 2700 ? 1050 : width < 2750 ? 1070 : width < 2800 ? 1090 : width < 2850 ? 1130 : width < 2900 ? 1140 : width < 2950 ? 1150 : width < 3000 ? 1170 : width < 3050 ? 1200 : width < 3100 ? 1220 : width < 3150 ? 1240 : width < 3200 ? 1260 : width < 3250 ? 1280 : width < 3300 ? 1310 : width < 3400 ? 1330 : width < 3450 ? 1320 : width < 3500 ? 1340 : width < 3550 ? 1360 : width < 3600 ? 1380 : width < 3650 ? 1400 : width < 3700 ? 1410 : width < 3800 ? 1415 : width < 3900 ? 1420 : width < 4000 ? 1460 : width < 4050 ? 1480 : width < 4100 ? 1500 : width < 4150 ? 1515 : width < 4200 ? 1530 : width < 4250 ? 1555 : width < 4300 ? 1575 : width < 4400 ? 1600 : width < 4500 ? 1640 : width < 4600 ? 1680 : width < 4700 ? 1720 : width < 4750 ? 1720 : width < 4800 ? 1740 : width < 4850 ? 1760 : width < 4900 ? 1780 : width < 4950 ? 1800 : width < 5000 ? 1820 : width < 5050 ? 1840 : width < 5100 ? 1880 : width < 5150 ? 1890 : width < 5200 ? 1900 : width < 5250 ? 1920 : width < 5300 ? 1940 : width < 5350 ? 1960 : width < 5400 ? 1980 : width < 5450 ? 2000 : width < 5500 ? 2010 : width < 5520 ? 2020 : width < 5540 ? 2020 : width < 5560 ? 2020 : width < 5580 ? 2040 : width < 5600 ? 2060 : width < 5620 ? 2090 : width < 5640 ? 2100 : width < 5660 ? 2110 : width < 5680 ? 2110 : width < 5700 ? 2120 : width < 5750 ? 2130 : width < 5800 ? 2150 : 2150))
    .attr("text-anchor", "middle")
    .attr("font-size", fontSize * (width < 250 ? .6 : width < 275 ? .7 : width < 300 ? .8 : width < 325 ? .9 : width < 350 ? 1 : width < 375 ? 1.1 : width < 400 ? 1.2 : width < 425 ? 1.3 : width < 490 ? 1.4 : width < 500 ? 1.5 : width < 550 ? 1.6 : width < 769 ? 1.7 : width < 800 ? 1.8 : width < 900 ? 2 : width < 1000 ? 2.25 : width < 1100 ? 2.5 : width < 1200 ? 2.75 : width < 1300 ? 3 : width < 1400 ? 3 : width < 1500 ? 3.5 : width < 1600 ? 4 : width < 1700 ? 4 : width < 1800 ? 4.5 : width < 1900 ? 5 : width < 2000 ? 5.5 : width < 2100 ? 5.5 : width < 2200 ? 6 : width < 2300 ? 6 : width < 2400 ? 6.5 : width < 2500 ? 6.5 : width < 2600 ? 7 : width < 2700 ? 7.5 : width < 2800 ? 7.5 : width < 2900 ? 8 : width < 3000 ? 8.5 : width < 3000 ? 8.5 : width < 3200 ? 8.5 : width < 3300 ? 9 : width < 3400 ? 9.5 : width < 3500 ? 9.5 : width < 3600 ? 9.5 : width < 3700 ? 9.5 : width < 3800 ? 10 : width < 3900 ? 10.5 : width < 4000 ? 11 : width < 4200 ? 11.5 : width < 4400 ? 12 : width < 4600 ? 12.5 : width < 4800 ? 13 : width < 5000 ? 13.5 : width < 5200 ? 14 : width < 5400 ? 14.5 : width < 5600 ? 15 : width < 5800 ? 15.5 : 16))
    .attr("font-family", "sans-serif")
    .attr("fill", "black");
  const data = yearDates(year)
    .map((d) => [d, dayLength(d, latitude)])
    .filter(([_, d]) => d > 0);
  /* Render separate polygons for each continuous sequence of
   * days with more than 0 hours of day light
   */
  const polys = [];
  let currentPoly = [];
  for (let i = 0; i < data.length; i++) {
    const currentDate = data[i][0];
    const prevDate = (data[i - 1] || [])[0];
    if (
      i === 0 ||
      currentDate.getTime() - prevDate.getTime() < 3600 * 24 * 1000 * 1.5
    ) {
      currentPoly.push(data[i]);
    } else {
      polys.push(currentPoly);
      currentPoly = [data[i]];
    }
  }
  polys.push(currentPoly);
  polys.forEach((p) => {
    const points = [
      ...p.map(([d, l]) => `${xScale(d)},${yScale(12 - l / 2)}`),
      ...p.reverse().map(([d, l]) => `${xScale(d)},${yScale(12 + l / 2)}`)
    ].join(" ");
    root.append("polygon").attr("points", points).attr("fill", mapcolors.day);
  });
  /* Legend */
  const legend = root
    .append("g")
    .attr("transform", `translate(${margin.left + chartWidth / 2 - 64})`);
  legend
    .append("rect")
    .attr("x", (width < 300 ? -19 : width < 310 ? -21 : width < 320 ? -23 : width < 330 ? -25 : width < 340 ? -27 : width < 350 ? -29 : width < 360 ? -31 : width < 370 ? -33 : width < 380 ? -35 : width < 390 ? -37 : width < 400 ? -41 : width < 410 ? -49 : width < 420 ? -55 : width < 430 ? -57 : width < 440 ? -60 : width < 450 ? -62 : width < 460 ? -64 : width < 470 ? -66 : width < 480 ? -68 : width < 490 ? -70 : width < 500 ? -72 : width < 510 ? -77 : width < 520 ? -81 : width < 530 ? -85 : width < 540 ? -92 : width < 550 ? -98 : width < 560 ? -105 : width < 570 ? -109 : width < 580 ? -113 : width < 590 ? -117 : width < 600 ? -121 : width < 610 ? -125 : width < 620 ? -129 : width < 630 ? -133 : width < 640 ? -137 : width < 650 ? -141 : width < 660 ? -144 : width < 670 ? -148 : width < 680 ? -151 : width < 690 ? -155 : width < 700 ? -157 : width < 710 ? -162 : width < 720 ? -164 : width < 730 ? -167 : width < 740 ? -169 : width < 750 ? -171 : width < 760 ? -174 : width < 769 ? -176 : width < 800 ? -210 : width < 825 ? -225 : width < 850 ? -245 : width < 875 ? -244 : width < 900 ? -250 : width < 1000 ? -260 : width < 1100 ? -306 : width < 1200 ? -312 : width < 1225 ? -318 : width < 1250 ? -314 : width < 1275 ? -310 : width < 1300 ? -306 : width < 1350 ? -312 : width < 1400 ? -310 : width < 1450 ? -315 : width < 1500 ? -326 : width < 1550 ? -338 : width < 1600 ? -350 : width < 1650 ? -365 : width < 1700 ? -375 : width < 1800 ? -400 : width < 1850 ? -450 : width < 1900 ? -470 : width < 2000 ? -480 : width < 2100 ? -520 : width < 2200 ? -550 : width < 2300 ? -590 : width < 2400 ? -620 : width < 2500 ? -650 : width < 2600 ? -680 : width < 2700 ? -710 : width < 2800 ? -740 : width < 2900 ? -770 : width < 3000 ? -800 : width < 3100 ? -850 : width < 3200 ? -860 : width < 3300 ? -900 : width < 3400 ? -910 : width < 3500 ? -920 : width < 3600 ? -930 : width < 3800 ? -950 : width < 4000 ? -980 : width < 4200 ? -1020 : width < 4400 ? -1060 : width < 4600 ? -1120 : width < 4800 ? -1160 : width < 5000 ? -1200 : width < 5200 ? -1276 : width < 5500 ? -1320 : width < 5600 ? -1350 : width < 5800 ? -1400 : -1500))
    .attr("y", (width < 300 ? 109 : width < 310 ? 113 : width < 320 ? 117 : width < 330 ? 121 : width < 340 ? 125 : width < 350 ? 129 : width < 360 ? 133 : width < 370 ? 137 : width < 380 ? 141 : width < 390 ? 145 : width < 400 ? 151 : width < 410 ? 160 : width < 420 ? 166 : width < 430 ? 170 : width < 440 ? 174 : width < 450 ? 178 : width < 460 ? 182 : width < 470 ? 186 : width < 480 ? 188 : width < 490 ? 191 : width < 500 ? 194 : width < 510 ? 198 : width < 520 ? 204 : width < 530 ? 210 : width < 540 ? 216.5 : width < 550 ? 221 : width < 560 ? 227 : width < 570 ? 233 : width < 580 ? 239 : width < 590 ? 247 : width < 600 ? 254 : width < 610 ? 259 : width < 620 ? 267 : width < 630 ? 271 : width < 640 ? 275 : width < 650 ? 279 : width < 660 ? 284 : width < 670 ? 288 : width < 680 ? 292 : width < 690 ? 296 : width < 700 ? 300 : width < 710 ? 305 : width < 720 ? 309 : width < 730 ? 311 : width < 740 ? 316 : width < 750 ? 320 : width < 760 ? 323 : width < 769 ? 327 : width < 800 ? 360 : width < 825 ? 379 : width < 850 ? 399 : width < 875 ? 404 : width < 900 ? 410 : width < 950 ? 416 : width < 1000 ? 420 : width < 1050 ? 500 : width < 1100 ? 504 : width < 1200 ? 512 : width < 1225 ? 497 : width < 1250 ? 488 : width < 1275 ? 478 : width < 1300 ? 472 : width < 1350 ? 479 : width < 1400 ? 478 : width < 1450 ? 477 : width < 1500 ? 482 : width < 1550 ? 491 : width < 1600 ? 500 : width < 1650 ? 500 : width < 1700 ? 522 : width < 1800 ? 564 : width < 1850 ? 590 : width < 1900 ? 624 : width < 2000 ? 640 : width < 2100 ? 680 : width < 2200 ? 718 : width < 2300 ? 744 : width < 2400 ? 784 : width < 2500 ? 800 : width < 2600 ? 840 : width < 2700 ? 884 : width < 2800 ? 914 : width < 2900 ? 952 : width < 3000 ? 984 : width < 3100 ? 1022 : width < 3200 ? 1052 : width < 3300 ? 1102 : width < 3400 ? 1142 : width < 3500 ? 1152 : width < 3600 ? 1160 : width < 3800 ? 1180 : width < 4000 ? 1200 : width < 4200 ? 1255 : width < 4400 ? 1306 : width < 4600 ? 1370 : width < 4800 ? 1430 : width < 5000 ? 1500 : width < 5200 ? 1580 : width < 5500 ? 1658 : width < 5600 ? 1690 : width < 5800 ? 1760 : 1800))
    .attr("rx", 5)
    .attr("width", fontSize * (width < 300 ? .3 : width < 400 ? .32 : width < 490 ? .36 : width < 500 ? .4 : width < 540 ? .4 : width < 550 ? .61 : width < 600 ? .62 : width < 660 ? .63 : width < 680 ? .64 : width < 720 ? .7 : width < 750 ? .75 : width < 1200 ? .8 : width < 1600 ? .98 : width < 1800 ? 1.2 : width < 2000 ? 1.4 : width < 2200 ? 1.6 : width < 2400 ? 1.8 : width < 5600 ? 1.9 : width < 5800 ? 1.9 : 2) + majwid / 100)
    .attr("height", fontSize * (width < 300 ? .3 : width < 400 ? .32 : width < 490 ? .36 : width < 500 ? .4 : width < 540 ? .4 : width < 550 ? .61 : width < 600 ? .62 : width < 660 ? .63 : width < 680 ? .64 : width < 720 ? .7 : width < 750 ? .75 : width < 1200 ? .8 : width < 1600 ? .98 : width < 1800 ? 1.2 : width < 2000 ? 1.4 : width < 2200 ? 1.6 : width < 2400 ? 1.8 : width < 5600 ? 1.9 : width < 5800 ? 1.9 : 2) + majwid / 100)
    .attr("fill", mapcolors.night);
  legend
    .append("text")
    .attr("x", (width < 300 ? -10 : width < 310 ? -12 : width < 320 ? -14 : width < 330 ? -16 : width < 340 ? -18 : width < 350 ? -20 : width < 360 ? -22 : width < 370 ? -24 : width < 380 ? -26 : width < 390 ? -28 : width < 400 ? -32 : width < 410 ? -39 : width < 420 ? -45 : width < 430 ? -47 : width < 440 ? -49 : width < 450 ? -51 : width < 460 ? -53 : width < 470 ? -55 : width < 480 ? -57 : width < 490 ? -59 : width < 500 ? -60 : width < 510 ? -64 : width < 520 ? -68 : width < 530 ? -72 : width < 540 ? -79 : width < 550 ? -83 : width < 560 ? -88 : width < 570 ? -92 : width < 580 ? -96 : width < 590 ? -100 : width < 600 ? -104 : width < 610 ? -108 : width < 620 ? -112 : width < 630 ? -116 : width < 640 ? -120 : width < 650 ? -124 : width < 660 ? -127 : width < 670 ? -130 : width < 680 ? -133 : width < 690 ? -137 : width < 700 ? -139 : width < 710 ? -144 : width < 720 ? -146 : width < 730 ? -148 : width < 740 ? -150 : width < 750 ? -152 : width < 760 ? -154 : width < 769 ? -156 : width < 800 ? -188 : width < 825 ? -203 : width < 850 ? -223 : width < 875 ? -222 : width < 900 ? -228 : width < 1000 ? -236 : width < 1100 ? -282 : width < 1200 ? -288 : width < 1225 ? -290 : width < 1250 ? -286 : width < 1275 ? -282 : width < 1300 ? -278 : width < 1350 ? -282 : width < 1400 ? -281 : width < 1450 ? -286 : width < 1500 ? -296 : width < 1550 ? -307 : width < 1600 ? -318 : width < 1650 ? -328 : width < 1700 ? -338 : width < 1800 ? -360 : width < 1850 ? -410 : width < 1900 ? -425 : width < 2000 ? -435 : width < 2100 ? -470 : width < 2200 ? -500 : width < 2300 ? -535 : width < 2400 ? -560 : width < 2500 ? -590 : width < 2600 ? -620 : width < 2700 ? -650 : width < 2800 ? -680 : width < 2900 ? -710 : width < 3000 ? -740 : width < 3100 ? -785 : width < 3200 ? -795 : width < 3300 ? -830 : width < 3400 ? -840 : width < 3500 ? -850 : width < 3600 ? -860 : width < 3800 ? -880 : width < 4000 ? -900 : width < 4200 ? -940 : width < 4400 ? -980 : width < 4600 ? -1040 : width < 4800 ? -1075 : width < 5000 ? -1115 : width < 5200 ? -1184 : width < 5500 ? -1224 : width < 5600 ? -1252 : width < 5800 ? -1300 : -1400))
    .attr("y", (width < 300 ? 116 : width < 310 ? 120.4 : width < 320 ? 124.5 : width < 330 ? 128.6 : width < 340 ? 132.8 : width < 350 ? 136.6 : width < 360 ? 140.5 : width < 370 ? 145 : width < 380 ? 149 : width < 390 ? 153 : width < 400 ? 159 : width < 410 ? 168.5 : width < 420 ? 174.5 : width < 430 ? 178.5 : width < 440 ? 182.5 : width < 450 ? 187 : width < 460 ? 191 : width < 470 ? 195 : width < 480 ? 197 : width < 490 ? 200.5 : width < 500 ? 204 : width < 510 ? 208 : width < 520 ? 214 : width < 530 ? 220 : width < 540 ? 227 : width < 550 ? 233 : width < 560 ? 240 : width < 570 ? 246 : width < 580 ? 252 : width < 590 ? 260 : width < 600 ? 267 : width < 610 ? 272.5 : width < 620 ? 281 : width < 630 ? 285 : width < 640 ? 289 : width < 650 ? 293.5 : width < 660 ? 298.5 : width < 670 ? 303 : width < 680 ? 307 : width < 690 ? 312 : width < 700 ? 316 : width < 710 ? 321 : width < 720 ? 325 : width < 730 ? 328 : width < 740 ? 333 : width < 750 ? 337 : width < 760 ? 341 : width < 769 ? 345 : width < 800 ? 379 : width < 825 ? 399 : width < 850 ? 419 : width < 875 ? 425 : width < 900 ? 431 : width < 950 ? 437 : width < 1000 ? 442 : width < 1050 ? 522 : width < 1100 ? 526 : width < 1125 ? 534.5 : width < 1200 ? 535 : width < 1225 ? 523 : width < 1250 ? 514 : width < 1275 ? 504 : width < 1300 ? 498 : width < 1350 ? 505 : width < 1400 ? 505 : width < 1450 ? 506 : width < 1500 ? 511 : width < 1550 ? 521 : width < 1600 ? 530 : width < 1650 ? 531 : width < 1700 ? 554 : width < 1800 ? 598 : width < 1825 ? 628 : width < 1850 ? 629 : width < 1900 ? 663 : width < 2000 ? 680 : width < 2100 ? 725 : width < 2150 ? 763 : width < 2200 ? 764 : width < 2300 ? 794 : width < 2400 ? 835 : width < 2500 ? 855 : width < 2600 ? 896 : width < 2700 ? 943 : width < 2800 ? 975 : width < 2900 ? 1014 : width < 3000 ? 1047 : width < 3100 ? 1088 : width < 3200 ? 1120 : width < 3300 ? 1170 : width < 3400 ? 1210 : width < 3500 ? 1220 : width < 3600 ? 1230 : width < 3800 ? 1250 : width < 4000 ? 1273 : width < 4200 ? 1330 : width < 4400 ? 1386 : width < 4600 ? 1453 : width < 4800 ? 1515 : width < 5000 ? 1585 : width < 5200 ? 1668 : width < 5300 ? 1746 : width < 5500 ? 1750 : width < 5600 ? 1783 : width < 5800 ? 1854 : 1908))
    .attr("font-size", fontSize * (width < 480 ? .46 : width < 490 ? .48 : width < 500 ? .50 : width < 510 ? .52 : width < 520 ? .54 : width < 530 ? .56 : width < 540 ? .58 : width < 550 ? .60 : width < 560 ? .62 : width < 570 ? .64 : width < 580 ? .66 : width < 590 ? .68 : width < 600 ? .70 : width < 610 ? .72 : width < 620 ? .74 : width < 630 ? .76 : width < 640 ? .78 : width < 650 ? .80 : width < 660 ? .82 : width < 670 ? .89 : width < 680 ? .9 : width < 690 ? .91 : width < 700 ? .92 : width < 710 ? .94 : width < 720 ? .96 : width < 730 ? .98 : width < 740 ? 1 : width < 750 ? 1.02 : width < 760 ? 1.04 : width < 769 ? 1.05 : width < 800 ? 1.2 : width < 1200 ? 1.4 : width < 1400 ? 1.5 : width < 1600 ? 1.75 : width < 1800 ? 2 : width < 2000 ? 2.5 : width < 2200 ? 3 : width < 2400 ? 3.5 : width < 2600 ? 4 : width < 3000 ? 4.5 : width < 4200 ? 5 : width < 4400 ? 5.5 : width < 5800 ? 6 : 8) + majwid / 100)
    .attr("font-family", "sans-serif")
    .text("Night");
  legend
    .append("rect")
    .attr("x", (width < 300 ? -19 : width < 310 ? -21 : width < 320 ? -23 : width < 330 ? -25 : width < 340 ? -27 : width < 350 ? -29 : width < 360 ? -31 : width < 370 ? -33 : width < 380 ? -35 : width < 390 ? -37 : width < 400 ? -41 : width < 410 ? -49 : width < 420 ? -55 : width < 430 ? -57 : width < 440 ? -60 : width < 450 ? -62 : width < 460 ? -64 : width < 470 ? -66 : width < 480 ? -68 : width < 490 ? -70 : width < 500 ? -72 : width < 510 ? -77 : width < 520 ? -81 : width < 530 ? -85 : width < 540 ? -92 : width < 550 ? -98 : width < 560 ? -105 : width < 570 ? -109 : width < 580 ? -113 : width < 590 ? -117 : width < 600 ? -121 : width < 610 ? -125 : width < 620 ? -129 : width < 630 ? -133 : width < 640 ? -137 : width < 650 ? -141 : width < 660 ? -144 : width < 670 ? -148 : width < 680 ? -151 : width < 690 ? -155 : width < 700 ? -157 : width < 710 ? -162 : width < 720 ? -164 : width < 730 ? -167 : width < 740 ? -169 : width < 750 ? -171 : width < 760 ? -174 : width < 769 ? -176 : width < 800 ? -210 : width < 825 ? -225 : width < 850 ? -245 : width < 875 ? -244 : width < 900 ? -250 : width < 1000 ? -260 : width < 1100 ? -306 : width < 1200 ? -312 : width < 1225 ? -318 : width < 1250 ? -314 : width < 1275 ? -310 : width < 1300 ? -306 : width < 1350 ? -312 : width < 1400 ? -310 : width < 1450 ? -315 : width < 1500 ? -326 : width < 1550 ? -338 : width < 1600 ? -350 : width < 1650 ? -365 : width < 1700 ? -375 : width < 1800 ? -400 : width < 1850 ? -450 : width < 1900 ? -470 : width < 2000 ? -480 : width < 2100 ? -520 : width < 2200 ? -550 : width < 2300 ? -590 : width < 2400 ? -620 : width < 2500 ? -650 : width < 2600 ? -680 : width < 2700 ? -710 : width < 2800 ? -740 : width < 2900 ? -770 : width < 3000 ? -800 : width < 3100 ? -850 : width < 3200 ? -860 : width < 3300 ? -900 : width < 3400 ? -910 : width < 3500 ? -920 : width < 3600 ? -930 : width < 3800 ? -950 : width < 4000 ? -980 : width < 4200 ? -1020 : width < 4400 ? -1060 : width < 4600 ? -1120 : width < 4800 ? -1160 : width < 5000 ? -1200 : width < 5200 ? -1276 : width < 5500 ? -1320 : width < 5600 ? -1350 : width < 5800 ? -1400 : -1500))
    .attr("y", (width < 300 ? 120 : width < 310 ? 124 : width < 320 ? 128 : width < 330 ? 132 : width < 340 ? 136 : width < 350 ? 140 : width < 360 ? 144 : width < 370 ? 148 : width < 380 ? 152 : width < 390 ? 156 : width < 400 ? 162 : width < 410 ? 173 : width < 420 ? 179 : width < 430 ? 183 : width < 440 ? 187 : width < 450 ? 191 : width < 460 ? 195 : width < 470 ? 199 : width < 480 ? 201 : width < 490 ? 204 : width < 500 ? 207 : width < 510 ? 213 : width < 520 ? 219 : width < 530 ? 225 : width < 540 ? 231.5 : width < 550 ? 239 : width < 560 ? 245 : width < 570 ? 251 : width < 580 ? 257 : width < 590 ? 265 : width < 600 ? 272 : width < 610 ? 281 : width < 620 ? 289 : width < 630 ? 293 : width < 640 ? 297 : width < 650 ? 301 : width < 660 ? 306 : width < 670 ? 310 : width < 680 ? 314 : width < 690 ? 318 : width < 700 ? 322 : width < 710 ? 327 : width < 720 ? 331 : width < 730 ? 334 : width < 740 ? 339 : width < 750 ? 343 : width < 760 ? 346 : width < 769 ? 350 : width < 800 ? 386 : width < 825 ? 405 : width < 850 ? 425 : width < 875 ? 432 : width < 900 ? 438 : width < 950 ? 446 : width < 1000 ? 450 : width < 1050 ? 530 : width < 1100 ? 538 : width < 1200 ? 545 : width < 1225 ? 532 : width < 1250 ? 527 : width < 1275 ? 513 : width < 1300 ? 512 : width < 1350 ? 519 : width < 1400 ? 512 : width < 1450 ? 517 : width < 1500 ? 526 : width < 1550 ? 536 : width < 1600 ? 545 : width < 1650 ? 545 : width < 1700 ? 568 : width < 1800 ? 610 : width < 1850 ? 645 : width < 1900 ? 680 : width < 2000 ? 700 : width < 2100 ? 746 : width < 2200 ? 782 : width < 2300 ? 812 : width < 2400 ? 852 : width < 2500 ? 885 : width < 2600 ? 925 : width < 2700 ? 980 : width < 2800 ? 1010 : width < 2900 ? 1052 : width < 3000 ? 1080 : width < 3100 ? 1114 : width < 3200 ? 1164 : width < 3300 ? 1212 : width < 3400 ? 1252 : width < 3500 ? 1262 : width < 3600 ? 1280 : width < 3800 ? 1299 : width < 4000 ? 1330 : width < 4200 ? 1385 : width < 4400 ? 1440 : width < 4600 ? 1510 : width < 4800 ? 1580 : width < 5000 ? 1650 : width < 5200 ? 1725 : width < 5500 ? 1808 : width < 5600 ? 1840 : width < 5800 ? 1910 : 1982))
    .attr("rx", 5)
    .attr("width", fontSize * (width < 300 ? .3 : width < 400 ? .32 : width < 490 ? .36 : width < 500 ? .4 : width < 540 ? .4 : width < 550 ? .61 : width < 600 ? .62 : width < 660 ? .63 : width < 680 ? .64 : width < 720 ? .7 : width < 750 ? .75 : width < 1200 ? .8 : width < 1600 ? .98 : width < 1800 ? 1.2 : width < 2000 ? 1.4 : width < 2200 ? 1.6 : width < 2400 ? 1.8 : width < 5600 ? 1.9 : width < 5800 ? 1.9 : 2) + majwid / 100)
    .attr("height", fontSize * (width < 300 ? .3 : width < 400 ? .32 : width < 490 ? .36 : width < 500 ? .4 : width < 540 ? .4 : width < 550 ? .61 : width < 600 ? .62 : width < 660 ? .63 : width < 680 ? .64 : width < 720 ? .7 : width < 750 ? .75 : width < 1200 ? .8 : width < 1600 ? .98 : width < 1800 ? 1.2 : width < 2000 ? 1.4 : width < 2200 ? 1.6 : width < 2400 ? 1.8 : width < 5600 ? 1.9 : width < 5800 ? 1.9 : 2) + majwid / 100)
    .attr("fill", mapcolors.day);
  legend
    .append("text")
    .attr("x", (width < 300 ? -10 : width < 310 ? -12 : width < 320 ? -14 : width < 330 ? -16 : width < 340 ? -18 : width < 350 ? -20 : width < 360 ? -22 : width < 370 ? -24 : width < 380 ? -26 : width < 390 ? -28 : width < 400 ? -32 : width < 410 ? -39 : width < 420 ? -45 : width < 430 ? -47 : width < 440 ? -49 : width < 450 ? -51 : width < 460 ? -53 : width < 470 ? -55 : width < 480 ? -57 : width < 490 ? -59 : width < 500 ? -60 : width < 510 ? -64 : width < 520 ? -68 : width < 530 ? -72 : width < 540 ? -79 : width < 550 ? -83 : width < 560 ? -88 : width < 570 ? -92 : width < 580 ? -96 : width < 590 ? -100 : width < 600 ? -104 : width < 610 ? -108 : width < 620 ? -112 : width < 630 ? -116 : width < 640 ? -120 : width < 650 ? -124 : width < 660 ? -127 : width < 670 ? -130 : width < 680 ? -133 : width < 690 ? -137 : width < 700 ? -139 : width < 710 ? -144 : width < 720 ? -146 : width < 730 ? -148 : width < 740 ? -150 : width < 750 ? -152 : width < 760 ? -154 : width < 769 ? -156 : width < 800 ? -188 : width < 825 ? -203 : width < 850 ? -223 : width < 875 ? -222 : width < 900 ? -228 : width < 1000 ? -236 : width < 1100 ? -282 : width < 1200 ? -288 : width < 1225 ? -290 : width < 1250 ? -286 : width < 1275 ? -282 : width < 1300 ? -278 : width < 1350 ? -282 : width < 1400 ? -281 : width < 1450 ? -286 : width < 1500 ? -296 : width < 1550 ? -307 : width < 1600 ? -318 : width < 1650 ? -328 : width < 1700 ? -338 : width < 1800 ? -360 : width < 1850 ? -410 : width < 1900 ? -425 : width < 2000 ? -435 : width < 2100 ? -470 : width < 2200 ? -500 : width < 2300 ? -535 : width < 2400 ? -560 : width < 2500 ? -590 : width < 2600 ? -620 : width < 2700 ? -650 : width < 2800 ? -680 : width < 2900 ? -710 : width < 3000 ? -740 : width < 3100 ? -785 : width < 3200 ? -795 : width < 3300 ? -830 : width < 3400 ? -840 : width < 3500 ? -850 : width < 3600 ? -860 : width < 3800 ? -880 : width < 4000 ? -900 : width < 4200 ? -940 : width < 4400 ? -980 : width < 4600 ? -1040 : width < 4800 ? -1075 : width < 5000 ? -1115 : width < 5200 ? -1184 : width < 5500 ? -1224 : width < 5600 ? -1252 : width < 5800 ? -1300 : -1400))
    .attr("y", (width < 300 ? 127 : width < 310 ? 131.4 : width < 320 ? 135.5 : width < 330 ? 139.6 : width < 340 ? 143.8 : width < 350 ? 147.6 : width < 360 ? 151.5 : width < 370 ? 156 : width < 380 ? 160 : width < 390 ? 164 : width < 400 ? 170 : width < 410 ? 181.5 : width < 420 ? 187.5 : width < 430 ? 191.5 : width < 440 ? 195.5 : width < 450 ? 200 : width < 460 ? 204 : width < 470 ? 208 : width < 480 ? 210 : width < 490 ? 213.5 : width < 500 ? 217 : width < 510 ? 223 : width < 520 ? 229 : width < 530 ? 235 : width < 540 ? 242 : width < 550 ? 251 : width < 560 ? 258 : width < 570 ? 264 : width < 580 ? 270 : width < 590 ? 278 : width < 600 ? 285 : width < 610 ? 294.5 : width < 620 ? 303 : width < 630 ? 307 : width < 640 ? 311 : width < 650 ? 315.5 : width < 660 ? 320.5 : width < 670 ? 325 : width < 680 ? 329 : width < 690 ? 334 : width < 700 ? 338 : width < 710 ? 343 : width < 720 ? 347 : width < 730 ? 351 : width < 740 ? 356 : width < 750 ? 360 : width < 760 ? 364 : width < 769 ? 368 : width < 800 ? 405 : width < 825 ? 425 : width < 850 ? 445 : width < 875 ? 453 : width < 900 ? 459 : width < 950 ? 467 : width < 1000 ? 471 : width < 1050 ? 552 : width < 1100 ? 560 : width < 1125 ? 567.5 : width < 1200 ? 568 : width < 1225 ? 557 : width < 1250 ? 552 : width < 1275 ? 539 : width < 1300 ? 538 : width < 1350 ? 545 : width < 1400 ? 539 : width < 1450 ? 545 : width < 1500 ? 555 : width < 1550 ? 565 : width < 1600 ? 574 : width < 1650 ? 578 : width < 1700 ? 602 : width < 1750 ? 644 : width < 1800 ? 644 : width < 1825 ? 683 : width < 1850 ? 684 : width < 1900 ? 719 : width < 2000 ? 739 : width < 2100 ? 791 : width < 2150 ? 827 : width < 2200 ? 828 : width < 2300 ? 862 : width < 2400 ? 903 : width < 2500 ? 940 : width < 2600 ? 980 : width < 2700 ? 1039 : width < 2800 ? 1070 : width < 2900 ? 1112 : width < 3000 ? 1141 : width < 3100 ? 1180 : width < 3200 ? 1230 : width < 3300 ? 1279 : width < 3400 ? 1320 : width < 3500 ? 1330 : width < 3600 ? 1350 : width < 3800 ? 1372 : width < 4000 ? 1402 : width < 4200 ? 1460 : width < 4400 ? 1519 : width < 4600 ? 1591 : width < 4800 ? 1664 : width < 5000 ? 1735 : width < 5200 ? 1812 : width < 5300 ? 1894 : width < 5500 ? 1900 : width < 5600 ? 1932 : width < 5800 ? 2004 : 2090))
    .attr("font-size", fontSize * (width < 480 ? .46 : width < 490 ? .48 : width < 500 ? .50 : width < 510 ? .52 : width < 520 ? .54 : width < 530 ? .56 : width < 540 ? .58 : width < 550 ? .60 : width < 560 ? .62 : width < 570 ? .64 : width < 580 ? .66 : width < 590 ? .68 : width < 600 ? .70 : width < 610 ? .72 : width < 620 ? .74 : width < 630 ? .76 : width < 640 ? .78 : width < 650 ? .80 : width < 660 ? .82 : width < 670 ? .89 : width < 680 ? .9 : width < 690 ? .91 : width < 700 ? .92 : width < 710 ? .94 : width < 720 ? .96 : width < 730 ? .98 : width < 740 ? 1 : width < 750 ? 1.02 : width < 760 ? 1.04 : width < 769 ? 1.05 : width < 800 ? 1.2 : width < 1200 ? 1.4 : width < 1400 ? 1.5 : width < 1600 ? 1.75 : width < 1800 ? 2 : width < 2000 ? 2.5 : width < 2200 ? 3 : width < 2400 ? 3.5 : width < 2600 ? 4 : width < 3000 ? 4.5 : width < 4200 ? 5 : width < 4400 ? 5.5 : width < 5800 ? 6 : 8) + majwid / 100)
    .attr("font-family", "sans-serif")
    .text("Day");
  /* Time and date controls */
  const dateLine = root.append("g");
  const updateControlPositions = () => {
    dateLine
      .select("line")
      .attr("y1", yScale(0))
      .attr("x1", xScale(date))
      .attr("y2", yScale(24))
      .attr("x2", xScale(date));
    dateLine
      .select("rect")
      .attr("y", yScale(0))
      .attr("width", width < 500 ? 10 : width < 1000 ? 20 : width < 2000 ? 40 : width < 3000 ? 60 : width < 4000 ? 80 : width < 5500 ? 110 : 120)
      .attr("x", xScale(date) - (width < 500 ? 2.5 : width < 1000 ? 5 : width < 2000 ? 10 : width < 3000 ? 15 : width < 4000 ? 20 : width < 5000 ? 25 : 30));
    root
      .select("#time-control")
      .attr("cy", yScale(hour))
      .attr("cx", xScale(date));
  };
  const dispatchDateHourChange = () => {
    const detail = { date, hour };
    const changeEvent = new CustomEvent(EventType.DateHourChange, {
      detail,
      bubbles: true
    });
    root.node().dispatchEvent(changeEvent);
  };
  const handleDateLineDrag = ({ x }) => {
    date = xScale.invert(x);
    updateControlPositions();
    dispatchDateHourChange();
  };
  const handleTimeCircleDrag = ({ y }) => {
    hour = yScale.invert(y);
    updateControlPositions();
    dispatchDateHourChange();
  };
  dateLine.append("line").attr("stroke-width", (width < 400 ? 3 : width < 500 ? 4 : width < 600 ? 5 : width < 700 ? 6 : width < 800 ? 7 : width < 900 ? 8 : width < 1000 ? 9 : width < 1100 ? 10 : width < 1200 ? 11 : width < 1300 ? 12 : width < 1400 ? 14 : width < 1500 ? 16 : width < 1600 ? 18 : width < 1700 ? 20 : width < 1800 ? 22 : width < 1900 ? 24 : width < 2000 ? 28 : width < 2300 ? 32 : width < 2600 ? 36 : width < 3200 ? 40 : width < 3600 ? 44 : width < 3800 ? 48 : width < 4400 ? 50 : width < 4400 ? 54 : width < 5000 ? 58 : width < 5600 ? 60 : majwid / 88)).attr("stroke", "red");
  dateLine
    .append("rect")
    .attr("height", chartWidth)
    .attr("width", 8)
    .attr("fill", "rgba(0, 0, 0, 0)")
    .style("cursor", "row-resize")
    .call(d3.drag().on("drag", handleDateLineDrag));
  root
    .append("circle")
    .attr("id", "time-control")
    .attr("r", (width < 300 ? 5 : width < 400 ? 6 : width < 500 ? 7 : width < 600 ? 8 : width < 700 ? 10 : width < 800 ? 12 : width < 900 ? 14 : width < 1000 ? 16 : width < 1100 ? 18 : width < 1200 ? 20 : width < 1300 ? 22 : width < 1400 ? 24 : width < 1500 ? 26 : width < 1600 ? 28 : width < 1700 ? 30 : width < 1800 ? 32 : width < 1800 ? 34 : width < 1900 ? 36 : width < 2000 ? 38 : width < 2300 ? 42 : width < 2600 ? 46 : width < 3200 ? 50 : width < 3600 ? 54 : width < 3800 ? 60 : width < 4000 ? 66 : width < 4200 ? 72 : width < 4400 ? 78 : width < 5000 ? 84 : width < 5600 ? 90 : majwid / 59))
    .attr("fill", "red")
    .attr("stroke-width", width < 300 ? .3 : width < 400 ? .4 : width < 500 ? .5 : width < 600 ? .6 : width < 700 ? .7 : width < 800 ? .8 : width < 900 ? .9 : width < 1000 ? 1 : width < 1100 ? 1.1 : width < 1200 ? 1.2 : width < 1300 ? 1.3 : width < 1400 ? 1.4 : width < 1500 ? 1.5 : width < 1600 ? 1.6 : width < 1700 ? 1.7 : width < 1800 ? 1.8 : width < 1900 ? 1.9 : width < 2000 ? 2.0 : width < 2100 ? 2.1 : width < 2200 ? 2.2 : width < 2300 ? 2.3 : width < 2400 ? 2.4 : width < 2500 ? 2.5 : width < 2600 ? 2.6 : width < 2700 ? 2.7 : width < 2800 ? 2.8 : width < 2900 ? 2.9 : width < 3000 ? 3.0 : width < 3100 ? 3.1 : width < 3200 ? 3.2 : width < 3300 ? 3.3 : width < 3400 ? 3.4 : width < 3500 ? 3.5 : width < 3600 ? 3.6 : width < 3700 ? 3.7 : width < 3800 ? 3.8 : width < 3900 ? 3.9 : width < 4000 ? 4.0 : width < 4100 ? 4.1 : width < 4200 ? 4.2 : width < 4300 ? 4.3 : width < 4400 ? 4.4 : width < 4500 ? 4.5 : width < 4600 ? 4.6 : width < 4700 ? 4.7 : width < 4800 ? 4.8 : width < 4900 ? 4.9 : width < 5000 ? 5.0 : width < 5100 ? 5.1 : width < 5200 ? 5.2 : width < 5300 ? 5.3 : width < 5400 ? 5.4 : width < 5500 ? 5.5 : width < 5600 ? 5.6 : majwid / 1116)
    .attr("stroke", "black")
    .style("cursor", "pointer")
    .call(d3.drag().on("drag", handleTimeCircleDrag));
  updateControlPositions();
}
fontSize = 14;
getSolarAngle = (date) => (dayOfYear(date) + 10) / 365 * Math.PI * 2 - Math.PI / 2;
/*
 * Formulas uses the CBM model as reviewed here:
 * https://www.ikhebeenvraag.be/mediastorage/FSDocument/171/Forsythe+-+A+model+comparison+for+daylength+as+a+function+of+latitude+and+day+of+year+-+1995.pdf
 */
dayLength = (date, latitude) => {
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((date.getTime() - yearStart.getTime())/86400000) + 1;
  const revAngle = 0.2163108 + 2 * Math.atan(0.9671396 * Math.tan(0.00860 * (dayOfYear - 186)));
  const decAngle = Math.asin(0.39795 * Math.cos(revAngle));
  /* daylight coefficient selected for apparent sunrise/sunset */
  const p = 0.8333
  const intResult =
    (Math.sin((p * Math.PI) / 180) +
      Math.sin((latitude * Math.PI) / 180) * Math.sin(decAngle)) /
    (Math.cos((latitude * Math.PI) / 180) * Math.cos(decAngle));
  if (intResult >= 1) return 24;
  if (intResult <= -1) return 0;
  return 24 - 24 * Math.acos(intResult) / Math.PI;
}
yearDates = (year) => {
  const startDate = new Date(year, 0, 1+60);
  const endDate = new Date(year + 1, 0, 1+60);
  return d3.timeDay.range(startDate, endDate);
}
height = {
  const [[x0, y0], [x1, y1]] = d3.geoPath(projection.fitWidth(width, sphere)).bounds(sphere);
  const dy = Math.ceil(y1 - y0), l = Math.min(Math.ceil(x1 - x0), dy);
  projection.scale(projection.scale() * (l - 1) / l).precision(0.2);
  return dy;
}
sphere = ({type: "Sphere"})
selectedProjection = select ? select.value() : d3.geoEquirectangular()
projection = {
  let proj = selectedProjection;
  if (proj.rotate) proj.rotate([-turn2long(yaw), -turn2degr(pitch), turn2degr(roll)]);
  return proj;
}
// https://observablehq.com/@fil/d3-projections
projections = [
  { name: "Airocean", value: d3.geoAirocean },
  { name: "Airy’s minimum error", value: d3.geoAiry },
  { name: "Aitoff", value: d3.geoAitoff },
  { name: "American polyconic", value: d3.geoPolyconic },
  { name: "Armadillo", value: d3.geoArmadillo, options: { clip: { type: "Sphere" } } },
  { name: "August", value: d3.geoAugust },
  { name: "azimuthal equal-area", value: d3.geoAzimuthalEqualArea },
  { name: "azimuthal equidistant", value: d3.geoAzimuthalEquidistant },
  { name: "Baker dinomic", value: d3.geoBaker },
  { name: "Berghaus’ star", value: d3.geoBerghaus, options: { clip: { type: "Sphere" } } },
  { name: "Bertin’s 1953", value: d3.geoBertin1953 },
  { name: "Boggs’ eumorphic", value: d3.geoBoggs },
  { name: "Boggs’ eumorphic (interrupted)", value: d3.geoInterruptedBoggs, options: { clip: { type: "Sphere" } } },
  { name: "Bonne", value: d3.geoBonne },
  { name: "Bottomley", value: d3.geoBottomley },
  { name: "Bromley", value: d3.geoBromley },
  { name: "Butterfly (gnomonic)", value: d3.geoPolyhedralButterfly },
  { name: "Butterfly (Collignon)", value: d3.geoPolyhedralCollignon },
  { name: "Butterfly (Waterman)", value: d3.geoPolyhedralWaterman },
  { name: "Cahill-Keyes", value: d3.geoCahillKeyes },
  { name: "Collignon", value: d3.geoCollignon },
  { name: "conic equal-area", value: d3.geoConicEqualArea },
  { name: "conic equidistant", value: d3.geoConicEquidistant },
  { name: "Craig retroazimuthal", value: d3.geoCraig },
  { name: "Craster parabolic", value: d3.geoCraster },
  { name: "Cox", value: d3.geoCox },
  { name: "cubic", value: d3.geoCubic },
  { name: "cylindrical equal-area", value: d3.geoCylindricalEqualArea },
  { name: "cylindrical stereographic", value: d3.geoCylindricalStereographic },
  { name: "dodecahedral", value: d3.geoDodecahedral },
  { name: "Eckert I", value: d3.geoEckert1 },
  { name: "Eckert II", value: d3.geoEckert2 },
  { name: "Eckert III", value: d3.geoEckert3 },
  { name: "Eckert IV", value: d3.geoEckert4 },
  { name: "Eckert V", value: d3.geoEckert5 },
  { name: "Eckert VI", value: d3.geoEckert6 },
  { name: "Eisenlohr conformal", value: d3.geoEisenlohr },
  { name: "Equal Earth", value: d3.geoEqualEarth },
  { name: "Equirectangular (plate carrée)", value: d3.geoEquirectangular },
  { name: "Fahey pseudocylindrical", value: d3.geoFahey },
  { name: "flat-polar parabolic", value: d3.geoMtFlatPolarParabolic },
  { name: "flat-polar quartic", value: d3.geoMtFlatPolarQuartic },
  { name: "flat-polar sinusoidal", value: d3.geoMtFlatPolarSinusoidal },
  { name: "Foucaut’s stereographic equivalent", value: d3.geoFoucaut },
  { name: "Foucaut’s sinusoidal", value: d3.geoFoucautSinusoidal },
  { name: "general perspective", value: d3.geoSatellite },
  { name: "Gingery", value: d3.geoGingery, options: { clip: { type: "Sphere" } } },
  { name: "Ginzburg V", value: d3.geoGinzburg5 },
  { name: "Ginzburg VI", value: d3.geoGinzburg6 },
  { name: "Ginzburg VIII", value: d3.geoGinzburg8 },
  { name: "Ginzburg IX", value: d3.geoGinzburg9 },
  { name: "Goode’s homolosine", value: d3.geoHomolosine},
  { name: "Goode’s homolosine (interrupted)", value: d3.geoInterruptedHomolosine, options: { clip: { type: "Sphere" } }  },
  { name: "gnomonic", value: d3.geoGnomonic },
  { name: "Gringorten square", value: d3.geoGringorten },
  { name: "Gringorten quincuncial", value: d3.geoGringortenQuincuncial },
  { name: "Guyou square", value: d3.geoGuyou },
  { name: "Hammer", value: d3.geoHammer },
  { name: "Hammer retroazimuthal", value: d3.geoHammerRetroazimuthal, options: { clip: { type: "Sphere" } } },
  { name: "HEALPix", value: d3.geoHealpix, options: { clip: { type: "Sphere" } } },
  { name: "Hill eucyclic", value: d3.geoHill },
  { name: "Hufnagel pseudocylindrical", value: d3.geoHufnagel },
  { name: "icosahedral", value: d3.geoIcosahedral },
  { name: "Imago", value: d3.geoImago },
  { name: "Kavrayskiy VII", value: d3.geoKavrayskiy7 },
  { name: "Lagrange conformal", value: d3.geoLagrange },
  { name: "Larrivée", value: d3.geoLarrivee },
  { name: "Laskowski tri-optimal", value: d3.geoLaskowski },
  { name: "Loximuthal", value: d3.geoLoximuthal },
  { name: "Mercator", value: d3.geoMercator },
  { name: "Miller cylindrical", value: d3.geoMiller },
  { name: "Mollweide", value: d3.geoMollweide },
  { name: "Mollweide (Goode’s interrupted)", value: d3.geoInterruptedMollweide, options: { clip: { type: "Sphere" } } },
  { name: "Mollweide (interrupted hemispheres)", value: d3.geoInterruptedMollweideHemispheres, options: { clip: { type: "Sphere" } } },
  { name: "Natural Earth", value: d3.geoNaturalEarth1 },
  { name: "Natural Earth II", value: d3.geoNaturalEarth2 },
  { name: "Nell–Hammer", value: d3.geoNellHammer },
  { name: "Nicolosi globular", value: d3.geoNicolosi },
  { name: "orthographic", value: d3.geoOrthographic },
  { name: "Patterson cylindrical", value: d3.geoPatterson },
  { name: "Peirce quincuncial", value: d3.geoPeirceQuincuncial },
  { name: "rectangular polyconic", value: d3.geoRectangularPolyconic },
  { name: "Robinson", value: d3.geoRobinson },
  { name: "sinusoidal", value: d3.geoSinusoidal },
  { name: "sinusoidal (interrupted)", value: d3.geoInterruptedSinusoidal, options: { clip: { type: "Sphere" } } },
  { name: "sinu-Mollweide", value: d3.geoSinuMollweide },
  { name: "sinu-Mollweide (interrupted)", value: d3.geoInterruptedSinuMollweide, options: { clip: { type: "Sphere" } } },
  { name: "stereographic", value: d3.geoStereographic },
  { name: "Lee’s tetrahedal", value: d3.geoTetrahedralLee },
  { name: "Times", value: d3.geoTimes },
  { name: "Tobler hyperelliptical", value: d3.geoHyperelliptical },
  { name: "transverse Mercator", value: d3.geoTransverseMercator },
  { name: "Van der Grinten", value: d3.geoVanDerGrinten },
  { name: "Van der Grinten II", value: d3.geoVanDerGrinten2 },
  { name: "Van der Grinten III", value: d3.geoVanDerGrinten3 },
  { name: "Van der Grinten IV", value: d3.geoVanDerGrinten4 },
  { name: "Wagner IV", value: d3.geoWagner4 },
  { name: "Wagner VI", value: d3.geoWagner6 },
  { name: "Wagner VII", value: d3.geoWagner7 },
  { name: "Werner", value: d3.geoBonne ? () => d3.geoBonne().parallel(90) : null },
  { name: "Wiechel", value: d3.geoWiechel },
  { name: "Winkel tripel", value: d3.geoWinkel3 }
]
EventType = ({
  LocationChange: "LOCATION_CHANGE",
  DateHourChange: "DATE_HOUR_CHANGE"
})
mapcolors = ({
  night: "#719fb6",
  day: "#ffe438",
  grid: "#4b6a79",
  ocean: "#adeeff",
  land: "#90ff7888",
  sun: "#ffb438"
})
toRadians = (val) => val * Math.PI / 180
toDegrees = (val) => val * 180 / Math.PI;
land = topojson.feature(world, world.objects.land);
d3 = require("d3@7", "d3-geo-projection@3")
function input(config) {
  let {
    form,
    type = "text",
    attributes = {},
    action,
    getValue,
    title,
    description,
    format,
    display,
    submit,
    options
  } = config;
  const wrapper = html`<div></div>`;
  if (!form)
    form = html`<form>
  <input name=input type=${type} />
  </form>`;
  Object.keys(attributes).forEach(key => {
    const val = attributes[key];
    if (val != null) form.input.setAttribute(key, val);
  });
  if (submit)
    form.append(
      html`<input name=submit type=submit style="margin: 0 0.75em" value="${
        typeof submit == "string" ? submit : "Submit"
      }" />`
    );
  form.append(
    html`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.1em; text-align:center;"></output>`
  );
  if (title)
    form.prepend(
      html`<div style="font: 700 0.9rem sans-serif; margin-bottom: 3px;">${title}</div>`
    );
  if (description)
    form.append(
      html`<div style="font-size: 0.85rem; font-style: italic; margin-top: 3px;">${description}</div>`
    );
  if (format)
    format = typeof format === "function" ? format : d3format.format(format);
  if (action) {
    action(form);
  } else {
    const verb = submit
      ? "onsubmit"
      : type == "button"
      ? "onclick"
      : type == "checkbox" || type == "radio"
      ? "onchange"
      : "oninput";
    form[verb] = e => {
      e && e.preventDefault();
      const value = getValue ? getValue(form.input) : form.input.value;
      if (form.output) {
        const out = display ? display(value) : format ? format(value) : value;
        if (out instanceof window.Element) {
          while (form.output.hasChildNodes()) {
            form.output.removeChild(form.output.lastChild);
          }
          form.output.append(out);
        } else {
          form.output.value = out;
        }
      }
      form.value = value;
      if (verb !== "oninput")
        form.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    };
    if (verb !== "oninput")
      wrapper.oninput = e => e && e.stopPropagation() && e.preventDefault();
    if (verb !== "onsubmit") form.onsubmit = e => e && e.preventDefault();
    form[verb]();
  }
  while (form.childNodes.length) {
    wrapper.appendChild(form.childNodes[0]);
  }
  form.append(wrapper);
  return form;
}
d3format = require("d3-format@1")
// https://observablehq.com/@enjalot/draggable-world-map-coordinates-input
function worldMapCoordinates(config = {}, dimensions) {
  const {
    value = [], title, description, width = dimensions[0]
  } = Array.isArray(config) ? {value: config[0]} : config;
  const height = dimensions[1];
  let [lon, lat] = value;
  lon = lon != null ? lon : null;
  lat = lat != null ? lat : null;
  const formEl = html`<form id="formEl" style="width: ${width}px;"></form>`;
  const context = DOM.context2d(width, height);
  const canvas = context.canvas;
  canvas.style.margin = `10px 0px 0px 0px`;
  const projection = config[1]
    .precision(0.1)
    .fitSize([width, height], { type: "Sphere" });
  const path = d3.geoPath(projection, context).pointRadius(2.5);
  formEl.append(canvas);
  function fillMesh(f) {
    context.beginPath();
    path(f);
    context.fillStyle = zonecolor(f.properties.zone);
    context.fill();
    context.innerHTML = `<title>${f.properties.places} ${f.properties.time_zone}</title>`;
  }
  function draw() {
    if (!utctoggle) {
      context.beginPath(); path({type: "Sphere"});
      context.fillStyle = window.darkmode ? "#007FFF" : mapcolors.ocean;
      context.fill();
      if (gridtoggle) {
        deczones.map((f, i) =>  {
          context.beginPath();
          path(f);
          context.fillStyle = hsla10[i];
          context.fill();
        })
      }
    }
    if (utctoggle) {
      zones.map(f => fillMesh(f))
    }
    context.beginPath();
    path(land);
    if (!utctoggle) {
      context.fillStyle = window.darkmode ? "#0808" : mapcolors.land;
      context.fill();
    }
    context.strokeStyle = `#000`;
    context.stroke();
    if (bordertoggle) {
      context.beginPath();
      path(borders);
      context.lineWidth = 1.25;
      context.strokeStyle = window.darkmode ? "#aaa" : "#333";
      context.stroke();
    }
    if (utctoggle) {
      context.beginPath();
      path(mesh);
      context.lineWidth = 1.25;
      context.strokeStyle = `#999`;
      context.stroke();
    }
    if (gridtoggle) {
      context.beginPath();
      path(graticule);
      context.lineWidth = 1.25;
      context.strokeStyle = utctoggle || !window.darkmode ? "#000" : "#fff";
      context.stroke();
      context.fillStyle = "#000";
      context.font = `${width < 769 ? 14 : width < 1000 ? 16 : width < 1500 ? 18 : width < 2000 ? 20 : width < 3000 ? 30 : width < 4000 ? 40 : width < 5000 ? 50 : width < 6000 ? 60 : 80}px serif`;
      d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, 54.7])));
      d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, -59.7])));
      // context.font = width < 760 ? "12px serif" : "21px serif";
      // context.fillStyle = `#000`;
      // d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, 27.5])));
      // d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, -48])));
      // d3.range(-18, 336 + 1, 36).map(x => context.fillText(formatLongitude(x), ...projection([x, 90])));
      // d3.range(-18, 336 + 1, 36).map(x => context.fillText(formatLongitude(x), ...projection([x, -90])));
    }
    if (suntoggle) {
      context.beginPath();
      path(night);
      context.fillStyle = "rgba(0,0,255,0.3)";
      context.fill();
      context.beginPath();
      path.pointRadius(width / 84 + 5);
      path({type: "Point", coordinates: sun});
      context.strokeStyle = "#0009";
      context.fillStyle = "#ff0b";
      context.lineWidth = 1;
      context.stroke();
      context.fill();
    }
    if (lon != null && lat != null) {
      path.pointRadius(width < 2000 ? 17 : width < 3000 ? 34 : width < 4000 ? 51 : width < 5000 ? 68 : 85); context.strokeStyle = "black";
      context.beginPath(); path({type: "Point", coordinates: [lon, lat]}); context.lineWidth = 1; context.stroke();
      context.lineWidth = width < 2000 ? 6 : width < 3000 ? 12 : width < 4000 ? 18 : width < 5000 ? 24 : 30;
      path.pointRadius(width < 2000 ? 14 : width < 3000 ? 28 : width < 4000 ? 42 : width < 5000 ? 56 : 70); context.strokeStyle = "red";
      context.beginPath(); path({type: "Point", coordinates: [lon, lat]}); context.stroke();
      context.lineWidth = width < 1000 ? 1 : width < 2000 ? 2 : width < 3000 ? 3 : width < 4000 ? 4 : width < 5000 ? 5 : 6;
    }
    table.rows[1].cells[0].innerHTML = createCellDiv(long2turn(lon), 10, "positive")
    table.rows[1].cells[1].innerHTML = createCellDiv(lati2turn(lat), 2.5, lat < 0 ? "negative" : "positive")
    context.lineWidth = 1;
  }
  let drag = d3.drag()
    .on("drag", (event) => {
      let coords = projection.invert([event.x, event.y]);
      lon = +coords[0].toFixed(2);
      lat = +coords[1].toFixed(2);
      draw();
      canvas.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    })
  d3.select(canvas).call(drag)
  canvas.onclick = function(ev) {
    const { offsetX, offsetY } = ev;
    let coords = projection.invert([offsetX, offsetY]);
    lon = +coords[0].toFixed(2);
    lat = +coords[1].toFixed(2);
    draw();
    canvas.dispatchEvent(new CustomEvent("input", { bubbles: true }));
  };
  draw();
  function resetlatlon() {
    lon = 162;
    lat = 0;
    set(viewof bordertoggle, false);
    set(viewof gridtoggle, false);
    set(viewof suntoggle, false);
    set(viewof utctoggle, false);
    set(viewof yaw, 500);
    set(viewof pitch, 0);
    set(viewof roll, 0);
    set(viewof select, projections.find(t => t.name === "Equirectangular (plate carrée)"));
    draw();
    canvas.dispatchEvent(new CustomEvent("input", { bubbles: true }));
  }
  table.onkeyup = function(ev) {
   if ([
    // https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes#heading-a-full-list-of-key-event-values
      8, 9, 13, 27, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 109, 189
    ].includes(ev.which)) {
      const newLon = parseInt(liveTable[0].Milliparallel)
      const newLat = parseInt(liveTable[0].Millimeridian)
      lon = newLon != null || !isNaN(newLon) ? turn2long(newLon) : lon;
      lat = newLat != null || !isNaN(newLat) ? turn2lati(newLat) : lat;
      table.rows[1].cells[0].innerHTML = createCellDiv(long2turn(lon), 10, "positive")
      table.rows[1].cells[1].innerHTML = createCellDiv(lati2turn(lat), 2.5, lat < 0 ? "negative" : "positive")
      draw();
      canvas.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    }
  }
  rstbtn.on('click', resetlatlon);
  const form = input({
    type: "worldMapCoordinates",
    title,
    description,
    display: v => "",
    // display: v => (width > 300) ? html`<div style="width: ${width}px; pointer-events: none; white-space: nowrap; color: window.darkmode ? #fff : #000; text-align: center; font: ${width > 1000 ? width / 50 : width / 40}px monospace; position: relative; top: ${-28 - width / 25}px;  margin-bottom: -.4em;">
    //        <span style="color: window.darkmode ? #fff : #000;">Zone:</span> ${lon != null ? long2zone(lon) : ""}
    //        &nbsp; &nbsp;
    //        <span style="color: window.darkmode ? #fff : #000;">Longitude:</span> ${lon != null ? (long2turn(lon)).toFixed(0) : ""}
    //        &nbsp; &nbsp;
    //        <span style="color: window.darkmode ? #fff : #000;">Latitude:</span> ${lat != null ? (lati2turn(lat)).toFixed(0) : ""}
    //      </div>` : '',
    getValue: () => [lon != null ? lon : null, lat != null ? lat : null],
    form: formEl
  });
  return form;
}
window.darkmode = document.getElementsByTagName("body")[0].className.match(/quarto-dark/) ? true : false;
document.getElementsByClassName("quarto-color-scheme-toggle")[0].onclick = function (e) {
  window.quartoToggleColorScheme();
  window.darkmode = document.getElementsByTagName("body")[0].className.match(/quarto-dark/) ? true : false;
  worldMapCoordinates.draw();
  app.drawEarth();
  return false;
};
sun = {
  const now = new Date;
  const day = new Date(+now).setUTCHours(0, 0, 0, 0);
  const t = solar.century(now);
  const longitude = (day - now) / 864e5 * 360 - 180;
  return [longitude - solar.equationOfTime(t) / 4, solar.declination(t)];
}
night = d3.geoCircle()
    .radius(90)
    .center(antipode(sun))
  ()
antipode = ([longitude, latitude]) => [longitude + 180, -latitude]
solar = require("solar-calculator@0.3/dist/solar-calculator.min.js")
viewof fancySecondsOFF = Inputs.toggle({
  label: "Ticking clock",
  value: true,
})
function setStyle(content, style = {}) {
  function yiq(color) {
    const {r, g, b} = d3.rgb(color);
    return (r * 299 + g * 587 + b * 114) / 1000 / 255; // returns values between 0 and 1
  }
  const {
    background,
    color = yiq(background) >= 0.6 ? "#111" : "white",
    padding = "0 1px",
    borderRadius = "4px",
    fontWeight = 900,
    fontSize = "1em",
    ...rest
  } = typeof style === "string" ? {background: style} : style;
  return htl.html`<span style=${{
    background,
    color,
    padding,
    borderRadius,
    fontWeight,
    ...rest
  }}>${content}</span>`;
}
function yiq(color) {
  const {r, g, b} = d3.rgb(color);
  return (r * 299 + g * 587 + b * 114) / 1000 / 255; // returns values between 0 and 1
}
function textcolor(content, style = {}) {
  const {
    background,
    color = yiq(background) > 0.5 ? "black" : "white",
    padding = "0.5px 0.75px 0.5px 0.75px",
    borderRadius = "4px",
    fontFamily = "inherit",
    ...rest
  } = typeof style === "string" ? {background: style} : style;
  return htl.html`<span style=${{
    background,
    color,
    padding,
    borderRadius,
    fontFamily,
    ...rest
  }}>${content}</span>`;
}
function isLeapYear(y) {
  y += 1;
  return y % 4 == 0 && y % 100 != 0 || y % 400 == 0;
}
elapsed = {
  let i = 0;
  while (true) {
    yield Promises.tick(864, ++i);
  }
}
piecewiseColor = d3.piecewise(d3.interpolateRgb, [
  "#f00",    //  0   0 red
  "#f50",    //  0.25  20 yr
  "#f60",    //  0.5   24 yr orangered
  "#f70",    //  0.75  28 yr
  "#f90",    //  1     36 yr orange
  "#fb0",    //  1.25  44 yr
  "#fc0",    //  1.5   48 yr yelloworange
  "#fd0",    //  1.75  52 yr
  "#ff0",    //  2     60 yellow
  "#ef0",    //  2.25  64 gy
  "#df0",    //  2.5   68 gy limeyellow
  "#cf0",    //  2.75  72 gy
  "#af0",    //  3     80 gy lime
  "#8f0",    //  3.25  88 gy
  "#7f0",    //  3.5   92 gy greenlime
  "#6f0",    //  3.75  96 gy
  "#0f0",    //  4    120 green
  "#0f7",    //  4.25 148 cg
  "#0f9",    //  4.5  156 cg cyangreen
  "#0fb",    //  4.75 164 cg
  "#0ff",    //  5    180 cyan
  "#0cf",    //  5.25 192 bc
  "#0bf",    //  5.5  196 bc azurecyan
  "#0af",    //  5.75 200 bc
  "#08f",    //  6    208 bc azure
  "#06f",    //  6.25 216 bc
  "#05f",    //  6.5  220 bc blueazure
  "#04f",    //  6.75 224 bc
  "#00f",    //  7    240 blue
  "#50f",    //  7.25 260 mb
  "#60f",    //  7.5  264 mb purpleblue
  "#70f",    //  7.75 268 mb
  "#90f",    //  8    276 mb purple
  "#b0f",    //  8.25 284 mb
  "#c0f",    //  8.5  288 mb violetpurple
  "#d0f",    //  8.75 292 mb
  "#f0f",    //  9    300 magenta
  "#f0a",    //  9.25 320 rm
  "#f08",    //  9.5  328 rm
  "#f06",    //  9.75 336 rm
  "#f00",    //  0        0 red
])
slStr = `, 100%, 50%)`
elaTime = elapsed % 1e5
elaTimeHsl = textcolor(elaTime, `hsl(${d3.hsl(piecewiseColor(elaTime % 1000 / 1000)).h}` + slStr)
loadDote = unix2dote(Date.now(), 0)
loadydz = dote2date(...loadDote)
loadYear = loadydz[0]
loadYearHsl = textcolor(loadYear, d3.color(piecewiseColor(loadYear % 1000 / 1000)).formatHex())
loadAda = loadydz[1]
loadIsLeap = isLeapYear(loadYear)
loadAdaHsl = textcolor(loadAda.toFixed(5).padStart(9, "0"), d3.color(piecewiseColor(loadAda / (365 + loadIsLeap))).formatHex())
decDate = Math.floor(ydz[1])
decMoty = Math.floor((5 * decDate + 2) / 153)
isoYear = decYear + (decMoty > 9)
month = decMoty < 10 ? decMoty + 3 : decMoty - 9
decHour = decTime * 24
decMinute = (decHour % 1) * 60
decSecond = (decMinute % 1) * 60
isoHour = Math.floor(decHour)
isoMinute = Math.floor(decMinute)
isoSecond = Math.floor(decSecond)
decDek = Math.floor(decDate / 10)
decDod = decDate % 10
decDotm = Math.floor(decDate - (153 * decMoty + 2) / 5 + 1)
selDote = unix2dote(selectedDate.getTime() - 86400000, 0)
selDate = Math.floor(dote2date(...selDote)[1])
selTime = selectedHour / 24
selTimeOne = selTime % 1
selTimeTen = selTime * 10 % 10
selTimeMil = selTimeOne.toFixed(3).slice(2)
selTimeCmd = selTimeOne.toFixed(5).slice(2)
selAda = selDate + selTime
selLati = lati2turn(location[1])
decDodHsl = textcolor(decDod, d3.color(piecewiseColor(decDod / 10)).formatHex())
decDateHsl = textcolor(decDate.toString().padStart(3, "0"), d3.color(piecewiseColor(decDate / (365 + isLeapYear(decYear)))).formatHex())
decTimeHsl = textcolor(decTime, d3.color(piecewiseColor(decTime / 10)).formatHex())
selDateHsl = textcolor(selDate.toString().padStart(3, "0"), d3.color(piecewiseColor(selDate / 365)).formatHex())
selLatiHsl = textcolor(selLati.toFixed(0), d3.color(piecewiseColor((selLati + 250) % 250 / 250)).formatHex())
selTimeDay = textcolor(selTimeMil, d3.color(piecewiseColor(selTime)).formatHex())
selTimeHsl0 = textcolor(selTimeTen.toFixed(4), d3.color(piecewiseColor(selTime)).formatHex())
selTimeHsl1 = textcolor(selTimeTen.toFixed(4), d3.color(piecewiseColor(selTime)).formatHex())
selZoneHsl = textcolor(selectedZone, d3.color(piecewiseColor(selectedZone / 10)).formatHex())
selAdaDay = textcolor(selAda.toFixed(3).padStart(6, "0"), d3.color(piecewiseColor(selAda / 365)).formatHex())
selAdaDec = textcolor((selAda * 10).toFixed(4).padStart(9, "0"), d3.color(piecewiseColor(selAda / 365)).formatHex())
decZoneHsl = textcolor(selectedZone, d3.color(piecewiseColor(selectedZone / 10)).formatHex())
viewof selectedDate = Inputs.input(new Date(2022, new Date().getMonth(), new Date().getDate(), new Date().getHours()))
viewof selectedHour = Inputs.input(new Date(2022, new Date().getMonth(), new Date().getDate(), new Date().getHours()).getHours())
function set(input, value) {
  input.value = value;
  input.dispatchEvent(new Event("input", {bubbles: true}));
}
hD121 = d3.hsl(piecewiseColor(121 / 365)).h
hD268 = d3.hsl(piecewiseColor(268 / 365)).h
hD305 = d3.hsl(piecewiseColor(305 / 365)).h
hD306 = d3.hsl(piecewiseColor(306 / 365)).h
h1by320 = d3.hsl(piecewiseColor(1 / 320)).h
h1by8640 = d3.hsl(piecewiseColor(1 / 8640)).h
hues = Object.fromEntries([
  .0083,
  .0166,
  .0229,
  .025,
  .287,
  .0333,
  .0416,
  .05,
  .125,
  .333,
  .375,
  .429,
  .533,
  .969,
  .999,
  ].map(i => [i, d3.hsl(piecewiseColor(i)).h])
);
// https://observablehq.com/@mattdzugan/population-by-time-zone-creating-a-dataset
populationByTimeZone = FileAttachment("../../asset/populationByTimeZone.json").json();
populationHemisphere = FileAttachment("../../asset/populationByHemisphere.json").json();
sortedPop = populationByTimeZone.sort(
  (a, b) => sortParams[1] ? sortFunc(a.number, b.number) : sortFunc(a.pop, b.pop)
)
sortFunc = sortParams[0] ? d3.ascending : d3.descending
sortedPopHemi = populationHemisphere.sort(
  (a, b) => sortParamsHemi[1] ? sortFuncHemi(a.Offset, b.Offset) : sortFuncHemi(a.Population, b.Population)
)
sortFuncHemi = sortParamsHemi[0] ? d3.ascending : d3.descending
popBySign = d3.rollup(sortedPop, v => d3.sum(v, d => d.pop / 1e9), d => d.Sign)
totalPop = d3.sum(sortedPop, d => d.pop / 1e9)
utcOffsetM = -(new Date).getTimezoneOffset()
utcOffsetD = utcOffsetM / 144
utcOffsetP = (utcOffsetD + 10) % 10
decZone = ydz[2]
decZonePos = (decZone + 10) % 10
utcOffDiff = parseFloat((Math.round(utcOffsetD) - utcOffsetD).toFixed(2))
utcOffHslM = textcolor(utcOffsetM, `hsl(${d3.hsl(piecewiseColor(utcOffsetP / 10)).h}` + slStr)
utcOffHslD = textcolor(parseFloat(utcOffsetD.toFixed(2)), `hsl(${d3.hsl(piecewiseColor(utcOffsetP / 10)).h}` + slStr)
decZonHslP = textcolor(decZonePos, `hsl(${d3.hsl(piecewiseColor(decZonePos / 10)).h}` + slStr)
utcOffsetMdiffHsl = textcolor(parseFloat((utcOffDiff * 144).toFixed(2)), `hsl(${d3.hsl(piecewiseColor(utcOffDiff / 10)).h}` + slStr)
utcOffDiffHsl = textcolor(utcOffDiff, `hsl(${d3.hsl(piecewiseColor(utcOffDiff / 10)).h}` + slStr)
function date2dote(year = 1969, doty = 306, zone = 0) {
    const cote = Math.floor((year >= 0 ? year : year - 399) / 400), yote = year - cote * 400;
    return [cote * 146097 + yote * 365 + Math.floor(yote / 4) - Math.floor(yote / 100) + doty, zone]
}
leapSecondDotes = [
  [1972, 121],
  [1972, 305],
  [1973, 305],
  [1974, 305],
  [1975, 305],
  [1976, 305],
  [1977, 305],
  [1978, 305],
  [1979, 305],
  [1981, 121],
  [1982, 121],
  [1983, 121],
  [1985, 121],
  [1987, 305],
  [1989, 305],
  [1990, 305],
  [1992, 121],
  [1993, 121],
  [1994, 121],
  [1995, 305],
  [1997, 121],
  [1998, 305],
  [2005, 305],
  [2008, 305],
  [2012, 121],
  [2015, 121],
  [2016, 305],
].map(x => date2dote(...x)[0])
leapSecondDote = date2dote(leapSecondYear, leapSecondDate)[0]
leapCount = leapSecondDotes.filter(dote => leapSecondDote > dote).length;
leapColor = d3.color(piecewiseColor(leapCount / 86400)).formatHex()
leapCountHsl = textcolor(leapCount, leapColor)
frac = require("fraction.js")
leapFrac = frac(leapCount).div(8640).toFraction()
leapTzoHsl0 = textcolor(leapFrac, leapColor)
leapTzoHsl1 = textcolor(leapFrac, leapColor)
leapTzoHsl2 = textcolor(leapFrac, leapColor)
hmsTzo = frac(hmsinput[0]).div(24).add(hmsinput[1], 1440).add(hmsinput[2], 86400).mod(1)
hmsTzox10 = hmsTzo.mul(10)
pluralx10 = hmsTzox10.equals(1) ? "" : "s"
hmsRounded = hmsTzox10.round(digits - 1)
hmsRef = hmsRounded.sub(hmsTzox10)
hmsRefHsl = textcolor(hmsRef.abs().toFraction(), d3.color(piecewiseColor(Number(hmsRef.div(10)))).formatHex())
hmsRefSign = hmsRef.lt(0) ? "-" : "+"
hmsTzoHsl = textcolor(hmsTzox10.toFraction(), d3.color(piecewiseColor(Number(hmsTzo))).formatHex())
hmsRodHsl = textcolor(hmsRounded, d3.color(piecewiseColor(Number(hmsRounded.div(10)))).formatHex())
hmsTod = (zeroTime + hmsTzo) % 1
hmsTodHsl = textcolor((hmsTod * 10).toFixed(4), d3.color(piecewiseColor(hmsTod)).formatHex())
leapTod = (zeroTime + leapCount / 86400) % 1
leapDecidayTod = (leapTod * 10).toFixed(4)
leapTodHsl0 = textcolor(leapDecidayTod, d3.color(piecewiseColor(leapTod)).formatHex())
leapTodHsl1 = textcolor(leapDecidayTod, d3.color(piecewiseColor(leapTod)).formatHex())
longInputHsl = textcolor(lonInput, d3.color(piecewiseColor(lonInput / 10)).formatHex())
eot = getEot(leapSecondDate)
astTzo = eot + lonInput
astTzoHsl = textcolor(astTzo.toFixed(4), d3.color(piecewiseColor(astTzo / 10)).formatHex())
eotHsl = textcolor(eot.toFixed(4), d3.color(piecewiseColor(eot / 10)).formatHex())
eotSum = (zeroTime + astTzo + 10) % 10
eotSumHsl = textcolor(eotSum.toFixed(4), d3.color(piecewiseColor(eotSum / 10)).formatHex())
// https://observablehq.com/@mcmcclur/adaptive-plotter
function build_samples(f, a, b, opts = {}) {
  let { N = 9, max_depth = 6 } = opts;
  let dx = (b - a) / N;
  let root_intervals = Array.from({ length: N }).map(
    (_, i) => new Interval(a + i * dx, a + (i + 1) * dx, 0)
  );
  root_intervals.forEach((I) => {
    I.fa = f(I.a);
    I.fb = f(I.b);
  });
  root_intervals.reverse();
  let stack = root_intervals;
  let cnt = 0;
  let pts = [];
  let nodeRight, nodeLeft;
  while (stack.length > 0 && cnt++ < 100000) {
    let node = stack.pop();
    if (test(f, node, opts)) {
      let midpoint = node.midpoint;
      let new_depth = node.depth + 1;
      if (new_depth <= max_depth) {
        let a_left = node.a;
        let b_left = midpoint;
        nodeLeft = new Interval(a_left, b_left, new_depth);
        nodeLeft.fa = f(a_left);
        nodeLeft.fb = f(b_left);
        node.left = nodeLeft;
        let a_right = midpoint;
        let b_right = node.b;
        nodeRight = new Interval(a_right, b_right, new_depth);
        nodeRight.fa = f(a_left);
        nodeRight.fb = f(b_left);
        node.right = nodeRight;
        stack.push(nodeRight);
        stack.push(nodeLeft);
      } else {
        pts.push(node.a);
      }
    } else {
      pts.push(node.a);
    }
  }
  pts.push(b);
  //  pts = pts.map(x => ({ x: x, y: f(x) }));
  pts = pts.map((x) => [x, f(x)]);
  if (opts.show_roots) {
    let function_roots = [];
    pts.forEach(function (o, i) {
      if (i < pts.length - 1 && Math.sign(o.y) != Math.sign(pts[i + 1].y)) {
        function_roots.push((o.x + pts[i + 1].x) / 2);
      }
    });
    pts.function_roots = function_roots;
  }
  return pts;
}
function test(f, I, opts = {}) {
  let { angle_tolerance = 0.01, check_roots = false } = opts;
  let a = I.a;
  let b = I.b;
  let dx2 = (b - a) / 2;
  let m = (a + b) / 2;
  let fm = f(m);
  I.midpoint = m;
  I.f_mid = fm;
  if (check_roots && Math.sign(I.fa) != Math.sign(I.fb)) {
    return true;
  }
  let alpha = Math.atan((I.f_mid - I.fa) / dx2);
  let beta = Math.atan((I.fb - I.f_mid) / dx2);
  return Math.abs(alpha - beta) > angle_tolerance;
}
class Interval {
  constructor(a, b, depth) {
    this.a = a;
    this.b = b;
    this.depth = depth;
  }
}
colors = ({
  night: "#719fb6",
  day: "#ffe438",
  grid: "#4b6a79",
  ocean: "lightblue",
  land: "#f5f1dc",
  sun: "#ffe438"
})
// https://observablehq.com/@parlant/editable-table
function createTable(data, options) {
  let table = html`<table class="editable-table"></table>`;
  table.innerHTML = xss.filterXSS(tableify.default(data));
  makeTableEditable(table, options);
  return table;
}
table.setAttribute("class", "table")
tableify = import("https://cdn.skypack.dev/tableify@1.1.1?min")
xss = import("https://cdn.skypack.dev/xss@1.0.14?min")
function createCellDiv(value, max, posorneg) {
  return `<div class="${posorneg}" style="
    width: ${Math.abs(value) / max}%;
    float: left;
    padding: 0px 0px 0px 2px;
    text-indent: 2px;
    box-sizing: border-box;
    overflow: visible;
    white-space: nowrap;
    display: flex;
    justify-content: start;">${Math.round(value)}</div>`
}
liveTable = observeTable(table)
function makeTableEditable(table, options) {
  const defaults = {headerEditable: false, appendRows: true};
  options = options === undefined ? {} : options;
  for (let key in defaults) {
    options[key] = options[key] === undefined ? defaults[key] : options[key];
  }
  return Generators.observe((_notify) => {
    const navigate = (event) => {
      const cell = event.target;
      const row = cell.closest('tr');
      const table = row.closest('table');
      const isBody = row.parentNode.tagName === 'TBODY';
      const isHeader = row.parentNode.tagName === 'THEAD';
      const colIndex = cell.cellIndex;
      const colCount = row.cells.length;
      const rowIndex = row.rowIndex;
      const rowCount = table.rows.length;
      const headStop = options.headerEditable ? 0 : 1;
      let direction = null;
      let x = colIndex;
      let y = rowIndex;
      if (![
      // https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes#heading-a-full-list-of-key-event-values
        8, 9, 13, 16, 17, 18, 27, 33, 34, 35, 36, 37, 38, 39, 40, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 109, 189
      ].includes(event.which)) {
        event.preventDefault();
      }
      else {
      switch(event.code) {
        // Tab cycles through the table, adding new rows as needed.
        case 'Tab':
          event.preventDefault();
          if (event.altKey || event.shiftKey) {
            direction = -1;
            if (x - 1 < 0) {
              if (y - 1 < headStop) break;
              x = colCount - 1;
              y = y - 1;
            } else {
              x = x - 1;
            }
          } else {
            direction = 1;
            if (x + 1 === colCount) {
              x = 0;
              y = y + 1;
            } else {
              x = x + 1;
            }
          }
          break;
        // Plain Enter navigates downwards.
        // Shift + Enter or Alt + Enter goes up to the cell above.
        case 'Enter':
          event.preventDefault();
          if (event.altKey || event.shiftKey) {
            direction = -1;
            x = x;
            y = y - 1;
          }
          else {
            direction = 1;
            x = x;
            y = y + 1;
          }
          break;
        // The arrow keys allow you to navigate through cells.
        // No new rows are added.
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'Enter':
          if (!event.altKey) break;
          event.preventDefault();
          switch(event.code) {
            case 'ArrowUp':
              direction = -1;
              y = Math.max(y - 1, headStop);
              break;
            case 'ArrowDown':
              direction = 1;
              y = Math.min(y + 1, rowCount - 1);
              break;
            case 'ArrowLeft':
              direction = -1;
              x = Math.max(x - 1, 0);
              break;
            case 'ArrowRight':
              direction = 1;
              x = Math.min(x + 1, colCount - 1);
              break;
          }
          break;
      }
      if (direction !== null) {
        let nextRow;
        if (y === rowCount) {
          nextRow = options.appendRows ? addRowRelativeTo(row, direction) : row;
        } else {
          nextRow = table.rows[y];
        }
        let nextCell = nextRow.cells[x];
        focusCell(nextCell);
      }
    };
    }
    table.addEventListener("keydown", navigate, false);
    if (table.rows.length > 0) {
      for (let row of table.rows) {
        if (!options.headerEditable && row.rowIndex === 0) continue;
        for (let cell of row.cells) {
          let cellValue = cell.innerText
          cell.innerHTML = `<div style="
            width: ${Math.abs(cellValue) / (cell.cellIndex === 2 ? 2.5 : 10)}%;
            float: left;
            padding: 0px 0px 0px 2px;
            text-indent: 2px;
            box-sizing: border-box;
            overflow: visible;
            white-space: nowrap;
            display: flex;
            justify-content: start;">${cellValue}</div>`
        if (cell.cellIndex === 3) continue;
          cell.contentEditable = true;
        }
      }
    }
    return () => table.removeEventListener("keydown", navigate);
  });
}
function observeTable(table) {
  return Generators.observe((notify) => {
    const keyinput = (event) => notify(parseTableData(table));
    table.addEventListener("input", keyinput, false);
    notify(parseTableData(table));
    return () => window.removeEventListener("input", keyinput);
  });
}
function parseTableData(table) {
  const header = [];
  const data = [];
  for (let row of table.rows) {
    const rowIndex = row.rowIndex;
    const isHeader = row.parentNode.tagName === 'THEAD' && rowIndex === 0;
    let obj = {};
    for (let cell of row.cells) {
      const head = header[cell.cellIndex];
      if (isHeader) {
        header.push(cell.innerText);
      } else {
        obj[head] = cell.innerText;
      }
    }
    if (!isHeader) data.push(obj);
  }
  return JSON.parse(JSON.stringify(data));
}
function focusCell(td) {
  const s = window.getSelection();
  const r = document.createRange();
  let textNode = td.childNodes[0];
  const i = td.innerText.length;
  td.focus();
  if (textNode) {
    r.setStart(textNode, i);
    r.setEnd(textNode, i);
  } else {
    r.selectNode(td);
  }
  s.removeAllRanges();
  s.addRange(r);
}
function addRowRelativeTo(tr, direction) {
  const newTr = document.createElement('tr');
  const insertPosition = direction == 1 ? 'afterend' : 'beforebegin';
  tr.insertAdjacentElement(insertPosition, newTr);
  for (let _td of Array.from(tr.children)) {
    const newTd = document.createElement('td');
    newTd.appendChild(document.createTextNode(''));
    newTd.contentEditable = true;
    newTr.appendChild(newTd);
  }
  return newTr;
}
// https://observablehq.com/@observablehq/text-color-annotations-in-markdown
rstbtn = d3.create('button').html('Reset').attr("id", "rstbtn").attr("class", "btn btn-quarto");
// https://observablehq.com/@recifs/add-a-class-to-an-observable-input--support
function labelToggle(inputType, inputLabel, inputValue, inputId) {
  const input = inputType({label: inputLabel, value: inputValue});
  input.setAttribute("id", inputId);
  return input;
}
timezones = FileAttachment("../../asset/timezones.json").json()
zones = topojson.feature(timezones, timezones.objects.timezones).features
mesh = topojson.mesh(timezones, timezones.objects.timezones)
zonecolor = d3.scaleSequential(d3.interpolateRdBu).domain([-12, 14])
coor = [[[-18, -89.98], [-18, 89.98], [18, 89.98], [18, -89.98], [-18, -89.98], ]]
deczones = [...Array(10).keys()].map(
  i => ({
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [coor[0].map(t => [t[0]+36*i, t[1]])]
      },
    "properties": []
  })
)
hsla10 = [
  `hsla(0,   100%, 50%, 100%)`, // red
  `hsla(36,  100%, 50%, 100%)`, // orange
  `hsla(60,  100%, 50%, 100%)`, // yellow
  `hsla(80,  100%, 50%, 100%)`, // lime
  `hsla(120, 100%, 50%, 100%)`, // green
  `hsla(180, 100%, 50%, 100%)`, // cyan
  `hsla(208, 100%, 50%, 100%)`, // azure
  `hsla(240, 100%, 50%, 100%)`, // blue
  `hsla(276, 100%, 50%, 100%)`, // violet
  `hsla(300, 100%, 50%, 100%)`, // magenta
  `hsla(0,   100%, 50%, 100%)`, // red
]
borders = topojson.mesh(countries, countries.objects.countries, (a, b) => a !== b)
countries = fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then(response => response.json())
```

``` {ojs}
//| echo: false
//| output: false
//| class: clock
//| label: posclock
// https://observablehq.com/@d3/simple-clock
// https://observablehq.com/@drio/lets-build-an-analog-clock
posclock = {
  const clockRadius = 200,
    margin = 50,
    w = (clockRadius + margin) * 2,
    h = (clockRadius + margin) * 2,
    hourHandLength = (2 * clockRadius) / 3,
    minuteHandLength = clockRadius,
    secondHandLength = clockRadius - 12,
    secondHandBalance = 30,
    secondTickStart = clockRadius,
    secondTickLength = -10,
    hourTickStart = clockRadius,
    hourTickLength = -18,
    secondLabelRadius = clockRadius + 16,
    secondLabelYOffset = 5,
    hourLabelRadius = clockRadius - 40,
    hourLabelYOffset = 7,
    radians = Math.PI / 180;
  const ten = d3
    .scaleLinear()
    .range([0, 360])
    .domain([0, 10]);
  const sto = d3
    .scaleLinear()
    .range([0, 360])
    .domain([0, 100]);
  const handData = [
    {
      type: "hour",
      value: 0,
      length: -hourHandLength,
      scale: ten
    },
    {
      type: "minute",
      value: 0,
      length: -minuteHandLength,
      scale: sto
    },
    {
      type: "second",
      value: 0,
      length: -secondHandLength,
      scale: sto,
      balance: secondHandBalance
    }
  ];
  function drawClock() {
    // create all the clock elements
    updateData(); //draw them in the correct starting position
    const face = svg
      .append("g")
      .attr("id", "clock-face")
      .attr("transform", `translate(${[w / 2, h / 2]})`);
    // add marks for seconds
    face
      .selectAll(".second-tick")
      .data(d3.range(0, 100))
      .enter()
      .append("line")
      .attr("class", "second-tick")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", secondTickStart)
      .attr("y2", secondTickStart + secondTickLength)
      .attr("transform", d => `rotate(${sto(d)})`);
    // and labels...
    face
      .selectAll(".second-label")
      .data(d3.range(0, 100, 5))
      .enter()
      .append("text")
      .attr("class", "second-label")
      .attr("text-anchor", "middle")
      .attr("x", d => secondLabelRadius * Math.sin(sto(d) * radians))
      .attr(
        "y",
        d =>
          -secondLabelRadius * Math.cos(sto(d) * radians) + secondLabelYOffset
      )
      .text(d => d);
    // ... and hours
    face
      .selectAll(".hour-tick")
      .data(d3.range(0, 10, 1))
      .enter()
      .append("line")
      .attr("class", "hour-tick")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", hourTickStart)
      .attr("y2", hourTickStart + hourTickLength)
      .attr("transform", d => `rotate(${ten(d)})`);
    face
      .selectAll(".hour-label")
      .data(d3.range(0, 10, 1))
      .enter()
      .append("text")
      .attr("class", "hour-label")
      .attr("text-anchor", "middle")
      .attr("x", d => hourLabelRadius * Math.sin(ten(d) * radians))
      .attr(
        "y",
        d => -hourLabelRadius * Math.cos(ten(d) * radians) + hourLabelYOffset
      )
      .text(d => d);
    const hands = face.append("g").attr("id", "clock-hands");
    hands
      .selectAll("line")
      .data(handData)
      .enter()
      .append("line")
      .attr("class", d => d.type + "-hand")
      .attr("x1", 0)
      .attr("y1", d => d.balance || 0)
      .attr("x2", 0)
      .attr("y2", d => d.length)
      .attr("transform", d => `rotate(${d.scale(d.value)})`);
    face
      .append("g")
      .attr("id", "face-overlay")
      .append("circle")
      .attr("class", "hands-cover")
      .attr("x", 0)
      .attr("y", 0)
      .attr("r", clockRadius / 20);
  }
  function moveHands() {
    const sel = d3
      .select("#clock-hands-final")
      .selectAll("line")
      .data(handData)
      .transition();
    if (fancySecondsOFF) sel.ease(d3.easeElastic.period(0.5));
    sel.attr("transform", d => `rotate(${d.scale(d.value)})`);
  }
  function updateData() {
    handData[0].value = !fancySecondsOFF ? Math.floor(selectedExact * 10) : decTime[0];
    handData[1].value = !fancySecondsOFF ? Math.floor(selectedExact * 10 % 1 * 100) : decTime.slice(2, 4);
    handData[2].value = !fancySecondsOFF ? selectedExact * 10 % 1 * 100 % 1 * 100 : decTime.slice(4, 6);
  }
  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, w, h])
    .style("max-width", `${width / 2.1}px`)
    .attr("class", "analogclock")
    .attr("id", "topclock");
  svg
    .append("text")
    .text(`+${decTime}-${selectedZone}`)
    .attr("x", clockRadius + margin)
    .attr("y", clockRadius * 2 + margin * 2.1)
    .attr("text-anchor", "middle")
    .attr("font-size", 32)
    .attr("font-family", "monospace");
  drawClock();
  // Animation
  const interval = setInterval(
    () => {
      updateData();
      moveHands();
    },
    !fancySecondsOFF ? 10 : 864
  );
  invalidation.then(() => clearInterval(interval));
  return svg.node();
}
```

``` {ojs}
//| echo: false
//| output: false
//| class: clock
//| label: negclock
// https://observablehq.com/@d3/simple-clock
// https://observablehq.com/@drio/lets-build-an-analog-clock
negclock = {
  const clockRadius = 200,
    margin = 50,
    w = (clockRadius + margin) * 2,
    h = (clockRadius + margin) * 2,
    hourHandLength = (2 * clockRadius) / 3,
    minuteHandLength = clockRadius,
    secondHandLength = clockRadius - 12,
    secondHandBalance = 30,
    secondTickStart = clockRadius,
    secondTickLength = -10,
    hourTickStart = clockRadius,
    hourTickLength = -18,
    secondLabelRadius = clockRadius + 16,
    secondLabelYOffset = 5,
    hourLabelRadius = clockRadius - 40,
    hourLabelYOffset = 7,
    radians = Math.PI / 180;
  const ten = d3
    .scaleLinear()
    .range([0, 360])
    .domain([0, 10]);
  const sto = d3
    .scaleLinear()
    .range([0, 360])
    .domain([0, 100]);
  const handData = [
    {
      type: "hour",
      value: 0,
      length: -hourHandLength,
      scale: ten
    },
    {
      type: "minute",
      value: 0,
      length: -minuteHandLength,
      scale: sto
    },
    {
      type: "second",
      value: 0,
      length: -secondHandLength,
      scale: sto,
      balance: secondHandBalance
    }
  ];
  function drawClock() {
    // create all the clock elements
    updateData(); //draw them in the correct starting position
    const face = svg
      .append("g")
      .attr("id", "clock-face")
      .attr("transform", `translate(${[w / 2, h / 2]})`);
    // add marks for seconds
    face
      .selectAll(".second-tick")
      .data(d3.range(0, 100))
      .enter()
      .append("line")
      .attr("class", "second-tick")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", secondTickStart)
      .attr("y2", secondTickStart + secondTickLength)
      .attr("transform", d => `rotate(${sto(d)})`);
    // and labels...
    face
      .selectAll(".second-label")
      .data(d3.range(0, 100, 5))
      .enter()
      .append("text")
      .attr("class", "second-label")
      .attr("text-anchor", "middle")
      .attr("x", d => secondLabelRadius * Math.sin(sto(d) * radians))
      .attr(
        "y",
        d =>
          -secondLabelRadius * Math.cos(sto(d) * radians) + secondLabelYOffset
      )
      .text(d => d);
    // ... and hours
    face
      .selectAll(".hour-tick")
      .data(d3.range(0, 10, 1))
      .enter()
      .append("line")
      .attr("class", "hour-tick")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", hourTickStart)
      .attr("y2", hourTickStart + hourTickLength)
      .attr("transform", d => `rotate(${ten(d)})`);
    face
      .selectAll(".hour-label")
      .data(d3.range(0, 10, 1))
      .enter()
      .append("text")
      .attr("class", "hour-label")
      .attr("text-anchor", "middle")
      .attr("x", d => hourLabelRadius * Math.sin(ten(d) * radians))
      .attr(
        "y",
        d => -hourLabelRadius * Math.cos(ten(d) * radians) + hourLabelYOffset
      )
      .text(d => d);
    const hands = face.append("g").attr("id", "clock-hands");
    hands
      .selectAll("line")
      .data(handData)
      .enter()
      .append("line")
      .attr("class", d => d.type + "-hand")
      .attr("x1", 0)
      .attr("y1", d => d.balance || 0)
      .attr("x2", 0)
      .attr("y2", d => d.length)
      .attr("transform", d => `rotate(${d.scale(d.value)})`);
    face
      .append("g")
      .attr("id", "face-overlay")
      .append("circle")
      .attr("class", "hands-cover")
      .attr("x", 0)
      .attr("y", 0)
      .attr("r", clockRadius / 20);
  }
  function moveHands() {
    const sel = d3
      .select("#clock-hands-final")
      .selectAll("line")
      .data(handData)
      .transition();
    if (fancySecondsOFF) sel.ease(d3.easeElastic.period(0.5));
    sel.attr("transform", d => `rotate(${d.scale(d.value)})`);
  }
  function updateData() {
    handData[0].value = !fancySecondsOFF ? Math.floor(selectedExactN * 10) : decTimeN[0];
    handData[1].value = !fancySecondsOFF ? Math.floor(selectedExactN * 10 % 1 * 100) : decTimeN.slice(2, 4);
    handData[2].value = !fancySecondsOFF ? selectedExactN * 10 % 1 * 100 % 1 * 100 : decTimeN.slice(4, 6);
  }
  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, w, h])
    .style("max-width", `${width / 2.1}px`)
    .attr("class", "analogclock")
    .attr("id", "midclock");
  svg
    .append("text")
    .text(`-${decTimeN}-${selectedZone}`)
    .attr("x", clockRadius + margin)
    .attr("y", clockRadius * 2 + margin * 2.1)
    .attr("text-anchor", "middle")
    .attr("font-size", 32)
    .attr("font-family", "monospace");
  drawClock();
  // Animation
  const interval = setInterval(
    () => {
      updateData();
      moveHands();
    },
    !fancySecondsOFF ? 10 : 864
  );
  invalidation.then(() => clearInterval(interval));
  return svg.node();
}
```

``` {ojs}
//| echo: false
//| output: false
//| class: clock
//| label: dotclock
// https://observablehq.com/@d3/simple-clock
// https://observablehq.com/@drio/lets-build-an-analog-clock
dotclock = {
  const clockRadius = 200,
    margin = 50,
    w = (clockRadius + margin) * 2,
    h = (clockRadius + margin) * 2,
    hourHandLength = (2 * clockRadius) / 3,
    minuteHandLength = clockRadius,
    secondHandLength = clockRadius - 12,
    secondHandBalance = 30,
    secondTickStart = clockRadius,
    secondTickLength = -10,
    hourTickStart = clockRadius,
    hourTickLength = -18,
    secondLabelRadius = clockRadius + 16,
    secondLabelYOffset = 5,
    hourLabelRadius = clockRadius - 40,
    hourLabelYOffset = 7,
    radians = Math.PI / 180;
  const ten = d3
    .scaleLinear()
    .range([0, 360])
    .domain([0, 10]);
  const sto = d3
    .scaleLinear()
    .range([0, 360])
    .domain([0, 100]);
  const handData = [
    {
      type: "hour",
      value: 0,
      length: -hourHandLength,
      scale: ten
    },
    {
      type: "minute",
      value: 0,
      length: -minuteHandLength,
      scale: sto
    },
    {
      type: "second",
      value: 0,
      length: -secondHandLength,
      scale: sto,
      balance: secondHandBalance
    }
  ];
  function drawClock() {
    // create all the clock elements
    updateData(); //draw them in the correct starting position
    const face = svg
      .append("g")
      .attr("id", "clock-face")
      .attr("transform", `translate(${[w / 2, h / 2]})`);
    // add marks for seconds
    face
      .selectAll(".second-tick")
      .data(d3.range(0, 100))
      .enter()
      .append("line")
      .attr("class", "second-tick")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", secondTickStart)
      .attr("y2", secondTickStart + secondTickLength)
      .attr("transform", d => `rotate(${sto(d)})`);
    // and labels...
    face
      .selectAll(".second-label")
      .data(d3.range(0, 100, 5))
      .enter()
      .append("text")
      .attr("class", "second-label")
      .attr("text-anchor", "middle")
      .attr("x", d => secondLabelRadius * Math.sin(sto(d) * radians))
      .attr(
        "y",
        d =>
          -secondLabelRadius * Math.cos(sto(d) * radians) + secondLabelYOffset
      )
      .text(d => d);
    // ... and hours
    face
      .selectAll(".hour-tick")
      .data(d3.range(0, 10, 1))
      .enter()
      .append("line")
      .attr("class", "hour-tick")
      .attr("x1", 0)
      .attr("x2", 0)
      .attr("y1", hourTickStart)
      .attr("y2", hourTickStart + hourTickLength)
      .attr("transform", d => `rotate(${ten(d)})`);
    face
      .selectAll(".hour-label")
      .data(d3.range(0, 10, 1))
      .enter()
      .append("text")
      .attr("class", "hour-label")
      .attr("text-anchor", "middle")
      .attr("x", d => hourLabelRadius * Math.sin(ten(d) * radians))
      .attr(
        "y",
        d => -hourLabelRadius * Math.cos(ten(d) * radians) + hourLabelYOffset
      )
      .text(d => d);
    const hands = face.append("g").attr("id", "clock-hands");
    hands
      .selectAll("line")
      .data(handData)
      .enter()
      .append("line")
      .attr("class", d => d.type + "-hand")
      .attr("x1", 0)
      .attr("y1", d => d.balance || 0)
      .attr("x2", 0)
      .attr("y2", d => d.length)
      .attr("transform", d => `rotate(${d.scale(d.value)})`);
    face
      .append("g")
      .attr("id", "face-overlay")
      .append("circle")
      .attr("class", "hands-cover")
      .attr("x", 0)
      .attr("y", 0)
      .attr("r", clockRadius / 20);
  }
  function moveHands() {
    const sel = d3
      .select("#clock-hands-final")
      .selectAll("line")
      .data(handData)
      .transition();
    if (fancySecondsOFF) sel.ease(d3.easeElastic.period(0.5));
    sel.attr("transform", d => `rotate(${d.scale(d.value)})`);
  }
  function updateData() {
    handData[0].value = selTimeCmd[0];
    handData[1].value = selTimeCmd.slice(1, 3);
    handData[2].value = selTimeCmd.slice(3, 5);
  }
  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, w, h])
    .style("max-width", `${width / 2.1}px`)
    .attr("class", "analogclock")
    .attr("id", "topclock");
  svg
    .append("text")
    .text(`+${selTimeTen.toFixed(4)}`)
    .attr("x", clockRadius + margin)
    .attr("y", clockRadius * 2 + margin * 2.1)
    .attr("text-anchor", "middle")
    .attr("font-size", 32)
    .attr("font-family", "monospace");
  drawClock();
  // Animation
  const interval = setInterval(
    () => {
      updateData();
      moveHands();
    },
    !fancySecondsOFF ? 10 : 864
  );
  invalidation.then(() => clearInterval(interval));
  return svg.node();
}
```

``` {ojs}
//| echo: false
//| output: false
//| class: clock
//| label: sunclock
// https://observablehq.com/@ldgrp/apple-watch-solar-dial-simulation
sunclock = {
  const radius = 200;
  const width = radius * 2;
  const height = radius * 2;
  //let _minutes = 0;
  const svg = d3
    .create("svg")
    .attr("id", "btmclock")
    .attr("viewBox", [0, 0, width, height])
    .style("margin-top", "1px")
    .style("max-width", "200px");
  const face = svg
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);
  for (const angle of angles) {
    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius)
      .startAngle(angle.start)
      .endAngle(angle.end);
    face.append("path").attr("d", arc).attr("fill", angle.color);
  }
  const sun = face
    .append("circle")
    .attr("r", 15)
    .attr("cx", 125 * -sin(astDegMapHalf))
    .attr("cy", 125 * cos(astDegMapHalf))
    .style("fill", "white");
  const ringContainer = svg
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);
  const ring = ringContainer
    .append("circle")
    .attr("r", 125)
    .style("opacity", 0.2)
    .style("fill", "transparent")
    .style("stroke", "white")
    .style("stroke-width", 3);
  const events = [
    data.astronomicalSunrise,
    data.astronomicalSunset,
    data.nauticalSunrise,
    data.nauticalSunset,
    data.civilSunrise,
    data.civilSunset,
    data.sunrise,
    data.sunset,
    data.solarNoon
  ];
  for (const e of events) {
    ringContainer
      .append("circle")
      .attr("r", 5)
      .attr("cx", 125 * Math.sin(e))
      .attr("cy", 125 * -Math.cos(e))
      .style("opacity", 0.4)
      .style("fill", "white");
  }
  const digitalClock = svg
    .append("g")
    .attr(
      "transform",
      `translate(${width / 2 + 45 * sin(astDegMapHalf)}, ${
        height / 2 + 45 * -cos(astDegMapHalf)
      })`
    );
  const digitalClockBase = digitalClock
    .append("circle")
    .attr("r", 100)
    .style("opacity", 0.21)
    .style("fill", "white");
//  const digitalClockTicks = digitalClock
//    .selectAll(".digital-clock-tick")
//    .data(d3.range(0, 60))
//    .enter()
//    .append("line")
//    .attr("class", "digital-clock-tick")
//    .attr("x1", 0)
//    .attr("x2", 0)
//    .attr("y1", 100 - 5)
//    .attr("y2", 100 - 10)
//    .attr("stroke", (d) => (d > seconds ? "black" : "white"))
//    .attr("stroke-width", "3")
//    .attr("stroke-linecap", "round")
//    .style("mix-blend-mode", "luminance")
//    .style("opacity", 0.6)
//    .attr("transform", (d) => `rotate(${180 + d * 6})`);
  const clockText = digitalClock
    .append("text")
    .attr("y", 25)
    .attr("fill", "white")
    .attr("text-anchor", "middle")
    .attr("font-family", "Helvetica, Arial, sans-serif")
    .style("opacity", 1)
    .attr("font-weight", 600)
    .attr("font-size", "75px")
    .text(astDecMapPlot.toFixed(2));
  const ticks = face
    .selectAll(".tick")
    .data(d3.range(0, 20))
    .enter()
    .append("line")
    .attr("class", "tick")
    .attr("x1", 0)
    .attr("x2", 0)
    .attr("y1", radius - 5)
    .attr("y2", radius - 20)
    .attr("stroke", "white")
    .attr("stroke-width", "3")
    .attr("stroke-linecap", "round")
    .style("mix-blend-mode", "screen")
    .style("opacity", 1)
    .attr("transform", (d) => `rotate(${d * 18})`);
  const minuteTicks = face
    .selectAll(".tick")
    .data(d3.range(0, 200))
    .enter()
    .append("line")
    .attr("class", "tick")
    .attr("x1", 0)
    .attr("x2", 0)
    .attr("y1", radius - 5)
    .attr("y2", radius - 15)
    .attr("stroke", "white")
    .attr("stroke-width", "2")
    .attr("stroke-linecap", "round")
    .style("mix-blend-mode", "screen")
    .style("opacity", 0.6)
    .attr("transform", (d) => `rotate(${d * 2})`);
  const hourLabels = face
    .selectAll(".hour-label")
    .data(d3.range(0, 10))
    .enter()
    .append("text")
    .attr("class", "hour-label")
    .attr("x", (d) => 160 * -Math.sin(toRadians((d / 10) * 360)))
    .attr("y", (d) => 160 * Math.cos(toRadians((d / 10) * 360)) + 12)
    .attr("fill", "white")
    .attr("text-anchor", "middle")
    .attr("font-family", "Helvetica, Arial, sans-serif")
    .attr("font-weight", 600)
    .attr("font-size", "38px")
    .style("opacity", 0.7)
    .text((d) => (String((d + 5) % 10)));
  return svg.node();
}
minutesAndSeconds = {
  while (true) {
    await Promises.delay(1000);
    const date = new Date();
    yield {
      minutes: date.getHours() * 60 + date.getMinutes(),
      seconds: date.getSeconds()
    };
  }
}
function minutesTo12HourTime(minutes) {
  const decidays = minutes / 144 % 10
  return decidays.toFixed(2);
}
viewof date = Inputs.date({ label: "Date", value: Date.now() })
JD = getJulianDate(date)
T = (JD - 2451545.0) / 36525
sun_geometric_mean_longitude = 280.46646 + 36000.76983 * T + 0.0003032 * T ** 2
sun_mean_anomaly = 357.52911 + 35999.05029 * T - 0.0001537 * T ** 2
earth_eccentricity_orbit = 0.016708634 - 0.000042037 * T - 0.0000001267 * T ** 2
sun_equation_of_the_center = (1.914602 - 0.004817 * T - 0.000014 * T ** 2) * sin(sun_mean_anomaly) + (0.019993 - 0.000101 * T) * sin(2 * sun_mean_anomaly) + 0.000289 * sin(3 * sun_mean_anomaly)
sun_true_longitude = sun_geometric_mean_longitude + sun_equation_of_the_center
sun_true_anomaly = sun_mean_anomaly + sun_equation_of_the_center
omega = 125.04 - 1934.136 * T
sun_aparrent_longitude = sun_true_longitude - 0.00569 - 0.00478 * sin(omega)
sun_ecliptic_obliquity = 23 + (26 + (21.448 - 46.815 * T - 0.00059 * T ** 2 + 0.001813 * T ** 3) / 60) / 60
sun_ecliptic_obliquity_corrected = sun_ecliptic_obliquity + 0.00256 * cos(omega)
sun_right_ascension = Math.atan2(
  cos(sun_ecliptic_obliquity_corrected) * sin(sun_aparrent_longitude),
  cos(sun_aparrent_longitude)
)
sun_declination = Math.asin(
  sin(sun_ecliptic_obliquity_corrected) * sin(sun_aparrent_longitude)
)
y = Math.tan(toRadians(sun_ecliptic_obliquity_corrected) / 2) ** 2
equation_of_time = toDegrees(
  y * sin(2 * (sun_geometric_mean_longitude)) -
    2 * earth_eccentricity_orbit * sin((sun_mean_anomaly)) +
    4 * earth_eccentricity_orbit * y * sin((sun_mean_anomaly)) * cos(2 * (sun_geometric_mean_longitude)) -
    (1 / 2) * y ** 2 * sin(4 * (sun_geometric_mean_longitude)) -
    (5 / 4) * earth_eccentricity_orbit ** 2 * sin(2 * (sun_mean_anomaly))
) * 4
hour_angle = shaDegrMapPlot
sun_transit = solarNoonMinu
sun_rise = sun_transit - hour_angle * 4
sun_set = sun_transit + hour_angle * 4
sun_duration = sun_set - sun_rise
sun_civil_rise = sun_transit - (hour_angle + 6) * 4
sun_nautical_rise = sun_transit - (hour_angle + 12) * 4
sun_astronomical_rise = sun_transit - (hour_angle + 18) * 4
sun_civil_set = sun_transit + (hour_angle + 6) * 4
sun_nautical_set = sun_transit + (hour_angle + 12) * 4
sun_astronomical_set = sun_transit + (hour_angle + 18) * 4
data = ({
  astronomicalSunrise:
    toRadians((sun_astronomical_rise / 1440) * 360) + Math.PI,
  nauticalSunrise: toRadians((sun_nautical_rise / 1440) * 360) + Math.PI,
  civilSunrise: toRadians((sun_civil_rise / 1440) * 360) + Math.PI,
  sunrise: toRadians((sun_rise / 1440) * 360) + Math.PI,
  sunset: toRadians((sun_set / 1440) * 360) + Math.PI,
  civilSunset: toRadians((sun_civil_set / 1440) * 360) + Math.PI,
  nauticalSunset: toRadians((sun_nautical_set / 1440) * 360) + Math.PI,
  astronomicalSunset: toRadians((sun_astronomical_set / 1440) * 360) + Math.PI,
  solarNoon: toRadians((sun_transit / 1440) * 360) + Math.PI,
  dayLength: sun_duration
})
angles = [
  {
    start: data.astronomicalSunrise,
    end: data.nauticalSunrise,
    color: "rgb(17,49,86)"
  },
  {
    start: data.nauticalSunrise,
    end: data.civilSunrise,
    color: "rgb(23,61,112)"
  },
  { start: data.civilSunrise, end: data.sunrise, color: "rgb(35,85,155)" },
  { start: data.sunrise, end: data.sunset, color: "rgb(70,155,245)" },
  { start: data.sunset, end: data.civilSunset, color: "rgb(35,85,155)" },
  {
    start: data.civilSunset,
    end: data.nauticalSunset,
    color: "rgb(23,61,112)"
  },
  {
    start: data.nauticalSunset,
    end: data.astronomicalSunset,
    color: "rgb(17,49,86)"
  },
  {
    start: data.astronomicalSunset,
    end: data.astronomicalSunrise + Math.PI * 2,
    color: "rgb(10,34,58)"
  }
]
getJulianDate = (timestamp) => {
  return new Date(timestamp) / 86400000 + 2440587.5;
}
sin = (x) => Math.sin(toRadians(x))
cos = (x) => Math.cos(toRadians(x))
solarNoonTurn = (9.55 + selectedZone / 10 - lonTurnMapPlot - eotTurnMapPlot + .5) % 1
solarNoonMinu = solarNoonTurn * 1440
majwid = Math.min(5879, width) // majorized width
// https://observablehq.com/@harrystevens/circles-angles-and-right-triangles
daradius = 100
daheight = 250
dacenter = [ daradius + 38, daheight / 2 ]
geometric = require("geometric@2")
daangle = dayArcInput * .36 / 2
daend = geometric.pointTranslate(dacenter, -daangle + 90, daradius)
daend1 = geometric.pointTranslate(dacenter, daangle + 90, daradius)
// https://observablehq.com/@mattdzugan/population-by-time-zone-creating-a-dataset
```

``` {ojs}
//| echo: false
//| output: false
html`
<style>
.colorNight {
  background: #416f86;
  color: white;
  padding: 0px 2px 0px 4px;
  border-radius: 4px;
}
.colorDay {
  background: #ffe438;
  color: black;
  padding: 0px 3px 0px 4px;
  border-radius: 4px;
}
.colorBkg {
  background: ${window.darkmode ? "black" : "white"};
  color: ${window.darkmode ? "white" : "black"};
  padding: 0px 5px;
  border-radius: 4px;
}
.color0 {
  background: #ff0000;
  color: white;
  padding: 0px .5px;
  border-radius: 4px;
}
.color1by8640 {
  background: hsl(${h1by8640} 100% 50%);
  color: ${yiq(`hsl(${h1by8640}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color1 {
  background: hsl(300 100% 50%);
  color: ${yiq(`hsl(300, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color2 {
  background: hsl(280 100% 50%);
  color: ${yiq(`hsl(280, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color3 {
  background: hsl(240 100% 50%);
  color: ${yiq(`hsl(240, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color4 {
  background: hsl(200 100% 50%);
  color: ${yiq(`hsl(200, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color5 {
  background: hsl(180 100% 50%);
  color: ${yiq(`hsl(180, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color583 {
  background: hsl(129.88235294117646 100% 50%);
  color: ${yiq(`hsl(129.88235294117646, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color6 {
  background: hsl(120 100% 50%);
  color: ${yiq(`hsl(120, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color7 {
  background: hsl(80 100% 50%);
  color: ${yiq(`hsl(80, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color8 {
  background: hsl(60 100% 50%);
  color: ${yiq(`hsl(60, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color9 {
  background: hsl(40 100% 50%);
  color: ${yiq(`hsl(40, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color375 {
  background: hsl(${hues[0.375]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.375]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color0083 {
  background: hsl(${hues[0.0083]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.0083]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color0166 {
  background: hsl(${hues[0.0166]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.0166]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color55by24 {
  background: hsl(${hues[.0229]} 100% 50%);
  color: ${yiq(`hsl(${hues[.0229]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color125 {
  background: hsl(${hues[.125]} 100% 50%);
  color: ${yiq(`hsl(${hues[.125]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color025 {
  background: hsl(${hues[0.025]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.025]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color287 {
  background: hsl(${hues[0.287]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.287]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color333 {
  background: hsl(${hues[0.333]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.333]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color0333 {
  background: hsl(${hues[0.0333]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.0333]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color0416 {
  background: hsl(${hues[0.0416]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.0416]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color429 {
  background: hsl(${hues[0.429]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.429]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color05 {
  background: hsl(${hues[0.05]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.05]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color533 {
  background: hsl(${hues[0.533]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.533]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color969 {
  background: hsl(${hues[0.969]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.969]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color999 {
  background: hsl(${hues[0.999]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.999]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.color1by320 {
  background: hsl(${h1by320} 100% 50%);
  color: ${yiq(`hsl(${h1by320}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.colorD121 {
  background: hsl(${hD121} 100% 50%);
  color: ${yiq(`hsl(${hD121}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.colorD268 {
  background: hsl(${hD268} 100% 50%);
  color: ${yiq(`hsl(${hD268}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.colorD305 {
  background: hsl(${hD305} 100% 50%);
  color: ${yiq(`hsl(${hD305}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.colorD306 {
  background: hsl(${hD306} 100% 50%);
  color: ${yiq(`hsl(${hD306}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px .5px;
  border-radius: 4px;
}
.posneg {
  position: relative;
  top: ${width < 770 ? 274 : width < 780 ? 264 : width < 790 ? 254 : width < 800 ? 244 : width < 810 ? 234 : width < 816 ? 228 : width < 819 ? 218 : width < 823 ? 188 : width < 825 ? 168 : width < 830 ? 162 : width < 840 ? 154 : width < 848 ? 134 : width < 850 ? 124 : width < 851 ? 114 : width < 852 ? 112 : width < 854 ? 110 : width < 856 ? 108 : width < 858 ? 106 : width < 860 ? 104 : width < 862 ? 102 : width < 864 ? 100 : width < 865 ? 84 : width < 866 ? 72 : width < 872 ? 70 : width < 874 ? 68 : width < 876 ? 66 : width < 878 ? 64 : width < 888 ? 62 : width < 890 ? 60 : width < 892 ? 58 : width < 894 ? 56 : width < 896 ? 54 : width < 898 ? 52 : width < 900 ? 46 : width < 907 ? 52 : width < 913 ? 56 : width < 918 ? 58 : width < 923 ? 60 : width < 933 ? 68 : width < 943 ? 78 : width < 973 ? 88 : width < 978 ? 68 : width < 985 ? 44 : width < 988 ? 42 : width < 992 ? 40 : width < 993 ? 148 : width < 1005 ? 154 : width < 1020 ? 148 : width < 1045 ? 142 : width < 1070 ? 124 : width < 1075 ? 112 : width < 1080 ? 108 : width < 1086 ? 96 : width < 1088 ? 87 : width < 1090 ? 78 : width < 1093 ? 64 : width < 1095 ? 38 : width < 1100 ? 36 : width < 1110 ? 22 : width < 1120 ? 18 : width < 1130 ? 12 : width < 1140 ? 14 : width < 1150 ? 16 : width < 1160 ? 18 : width < 1170 ? 20 : width < 1180 ? 24 : width < 1185 ? 26 : width < 1190 ? 28 : width < 1195 ? 30 : width < 1200 ? 32 : width < 1221 ? 28 : width < 1224 ? 10 : width < 1226 ? -26 : width < 1231 ? -24 : width < 1234 ? -31 : width < 1237 ? -37 : width < 1239 ? -40 : width < 1241 ? -42 : width < 1243 ? -40 : width < 1245 ? -38 : width < 1246 ? -46 : width < 1247 ? -48 : width < 1250 ? -50 : width < 1300 ? -52 : width < 5600 ? -54 : -width / 104}px;
}
</style>
`
```

<style>
html, body {
    max-width: 100%;
}
div.cell:has(svg.barclock) {
  margin-top: -28px;
}
div.cell:has(form#formEl) {
  max-width: 100%;
  margin-top: -8px;
}
form#formEl * {
  max-width: 100%;
}
svg.barclock {
  width: 100%;
  overflow: visible;
}
.tickLabel, .tickLabel1, .tickLabel2, .timeLabel {
  font-family: monospace;
  text-anchor: middle;
}
.timeLabel {
  text-anchor: start;
}
.timeBar, .timeBarFull, .timeBarFullN {
  x: 1px;
  height: 25px;
  rx: 5px;
  stroke: #aaa;
}
.tickDek, .tickDotd, .tickDotd1, .tickC, .tickC1, .tickM, .tickM1, .tickB, .tickB1 {
  stroke: none;
  fill: #666;
  width: 1px;
}
.analogclock {
  stroke: #000;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  overflow: visible;
}
.analogclock #rim {
  fill: none;
  stroke: #999;
  stroke-width: 3px;
}
.analogclock .second-hand {
  stroke-width: 3;
}
.analogclock .minute-hand {
  stroke-width: 8;
  stroke-linecap: round;
}
.analogclock .hour-hand {
  stroke-width: 12;
  stroke-linecap: round;
}
.analogclock .hands-cover {
  stroke-width: 3;
  fill: #fff;
}
.analogclock .second-tick {
  stroke-width: 3;
  fill: #000;
}
.analogclock .hour-tick {
  stroke-width: 8; // same as the minute hand
}
.analogclock .second-label {
  font-size: 22px;
}
.analogclock .hour-label {
  font-size: 32px
}
.clocks * {
  overflow: visible;
  margin: -10px 0px 10px 0px;
  padding: 0px;
  text-align: center;
}
#title-block-header > div:nth-child(2) {
  display: none;
}
div.cell-output:has(#daylightapp) {
  overflow: visible;
}
#daylightapp {
  overflow: visible;
  max-width: 100%;
}
#daylightapp * {
  overflow: visible;
}
#solar-system * {
  overflow: visible;
}
#timezonepopstackedbar {
  overflow: visible;
}
.togs div {
  display: flex;
}
.togs div form {
  max-width: 180px;
}
.togs div form label {
  max-width: 120px;
}
.togs div form:nth-child(1) {
  margin-right: 8px;
}
.togs div form:nth-child(2) label {
  max-width: 110px;
}
.togs input[type=checkbox] {
  margin-top: 8px;
}
div:has(form#formEl) {
  overflow: visible;
  position: relative;
  z-index: 1;
}
form#formEl div {
  max-width: 100%;
  position: relative;
  z-index: 1;
}
div.cell-output:has(#formEl) {
  margin-top: 0px;
  overflow: visible;
}
#daylightapp, #btmclock, #btmbar  {
  overflow: visible;
  position: relative;
  z-index: 99;
}
@media (max-width: 767.98px) {
  #onlymargin, #lonlatable {
    display: none;
  }
}
div#distmap {
  display: flex;
  justify-content: center;
  overflow-x: visible;
}
.marginInputs {
  position: relative;
  top: -220px;
  z-index: 99;
  line-height: 1;
}
#lonlatable {
  overflow: visible;
  display: flex;
  justify-content: center;
  line-height: 1.5;
}
#projselect > div {
  margin-top: -4px;
}
#lonlatable > div {
  margin-top: -14px;
}
#lonlatable table * {
  font-size: 21px;
  padding: 0px 5px 0px 5px;
}
div#lonlatable form {
  padding: 0px;
}
#projselect {
  overflow: visible;
}
div#projselect > div, div#sizeinput > div, div#speedinput > div,  div#yawinput > div, div#pitchinput > div, div#rollinput > div {
  overflow-x: clip;
}
div#sizeinput label, div#speedinput label, div#yawinput label, div#pitchinput label, div#rollinput label {
  width: 35px;
}
button#rstbtn:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, .08);
  text-decoration: none;
  transform: translateY(-1px);
}
#sizeinput #yawinput #pitchinput #rollinput {
  display: flex;
  align-items: center;
  justify-content: center;
}
#sizeinput input[type="number"], #yawinput input[type="number"], #pitchinput input[type="number"], #rollinput input[type="number"] {
  width: 58px;
}
#sizeinput input[type="range"], #yawinput input[type="range"], #pitchinput input[type="range"], #rollinput input[type="range"]  {
  width: 72%;
}
div#toggles {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin-top: -20px;
  margin-bottom: 9px;
}
div#toggles * {
  overflow: visible;
}
div#toggles form.oi-3a86ea-toggle#bordertoggle {
  width: 85px;
}
div#toggles form.oi-3a86ea-toggle#bordertoggle > label {
  width: 48px;
}
div#toggles form.oi-3a86ea-toggle#gridtoggle {
  width: 65px;
}
div#toggles form.oi-3a86ea-toggle#gridtoggle > label {
  width: 29px;
}
div#toggles form.oi-3a86ea-toggle#suntoggle {
  width: 60px;
}
div#toggles form.oi-3a86ea-toggle#suntoggle > label {
  width: 26px;
}
div#toggles form.oi-3a86ea-toggle#utctoggle {
  width: 65px;
}
div#toggles form.oi-3a86ea-toggle#utctoggle > label {
  width: 30px;
}
div#toggles form.oi-3a86ea-toggle > label {
  margin-top: -4px;
}
div#toggles input.oi-3a86ea-input[type="checkbox"] {
  margin-top: 1px;
}
div#toggles button#rstbtn {
  overflow: visible;
  margin-top: -6px;
}
div#lonlatable form {
  padding: 0px;
}
#lonlatable table * {
  font-size: 15px;
  padding: 0px 4px 0px 4px;
}
div.cell:has(.barclock) * {
  pointer-events: none;
}
.sundot {
  position: relative;
  z-index: 99;
  margin-top: -42px !important;
}
div#eotplot div div svg g g text{
  color: black;
}
mjx-container[jax="CHTML"][display="true"] {
  margin-top: 0px;
  }
#dayarcdiagram, #hemipopstackedbar {
  overflow: visible;
}
/* The day arc svg is `width` wide but only draws within ~260px of its
   left edge; capping it keeps it from widening the page on phones. */
#dayarcdiagram svg {
  max-width: 100%;
}
.stackedbar g[aria-label="tip"] text {
  color: black;
}
.overflowtable {
  overflow-x: auto !important;
  overflow-y: hidden;
  margin-bottom: 10px;
}
div.equationgroup {
  margin-top: -9px;
  margin-bottom: -8px;
  overflow: visible;
}
/* Range inputs (class: slider): same layout as the sliders on /dec —
   a fixed 100px label column, a number box, and a track that fills the
   rest of a form capped at 500px, all on one row at every width. The
   label never shrinks or wraps, so "Day of year" stays on one line and
   lines up with the rows next to it on phones. */
div.slider {
  max-width: 100%;
  overflow-x: visible;
}
div.slider form.oi-3a86ea {
  width: 100%;
  max-width: 500px;
  flex-wrap: nowrap;
  overflow-x: visible;
}
div.slider form.oi-3a86ea > label {
  width: 100px;
  flex-shrink: 0;
  white-space: nowrap;
}
div.slider input[type="number"] {
  width: 110px;
  margin-left: 2px;
}
div.slider input[type="range"] {
  width: 100%;
}
</style>

</div>

</div>

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-hinnant2021date" class="csl-entry">

Hinnant, Howard. 2021+185.
*<span class="nocase"><code>chrono</code></span>-Compatible Low-Level
Date Algorithms*. <https://howardhinnant.github.io/date_algorithms>.

</div>

</div>

[1] [Hinnant, Howard](https://howardhinnant.github.io).
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="September 1, 2021">2021+185</span>. *`chrono`-Compatible
Low-Level Date Algorithms*.
<https://howardhinnant.github.io/date_algorithms.html>.
