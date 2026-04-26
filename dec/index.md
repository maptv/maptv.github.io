# Dec
Martin Laptev
2026+056

- [<span class="toc-section-number">0</span> Dec measurement
  system](#sec-dec)
- [<span class="toc-section-number">1</span> Longitude latitude
  course](#sec-llc)
- [<span class="toc-section-number">2</span> Distance speed
  duration](#sec-dsd)
  - [Interactive world map](#map)
  - [Color wheel compass](#cwc)
  - [<span class="toc-section-number">3.1</span> Hue saturation
    lightness (hsl)](#hsl)
  - [<span class="toc-section-number">3.2</span> Course color
    table](#cct)
- [<span class="toc-section-number">3</span> Red green blue
  (rgb)](#sec-rgb)
- [<span class="toc-section-number">4</span> Dec time zones](#sec-dtz)
- [<span class="toc-section-number">5</span> Dates and times](#sec-dat)
- [<span class="toc-section-number">6</span> Millenium Year
  Day](#sec-myd)
- [<span class="toc-section-number">7</span> Day of dek (dod)](#sec-dod)
- [<span class="toc-section-number">8</span> Zone equatorial meter
  (zem)](#sec-zem)
- [<span class="toc-section-number">9</span> Length area
  volume](#sec-lav)
- [<span class="toc-section-number">10</span> Typical seat
  height](#sec-tsh)
- [<span class="toc-section-number">11</span> Perpetually setting
  sun](#sec-pss)
- [<span class="toc-section-number">12</span> Airplane cruising
  speed](#sec-acs)
- [<span class="toc-section-number">13</span> Centimilliday
  (cmd)](#sec-cmd)
- [<span class="toc-section-number">14</span> heart rate
  tempo](#sec-hrt)
- [<span class="toc-section-number">15</span> Frequency period
  wavelength](#sec-fpw)
- [<span class="toc-section-number">16</span> Octave equals
  decastep](#sec-oed)
- [<span class="toc-section-number">17</span> Color and sound](#sec-cas)
- [<span class="toc-section-number">18</span> Système international
  d’unités](#sec-sid)
- [<span class="toc-section-number">19</span> US customary
  units](#sec-ucu)
  - [Unit conversion tables](#unit-conversion-tables)
- [<span class="toc-section-number">20</span> Are hectare
  acre](#sec-aha)
- [<span class="toc-section-number">21</span> Drop wineglass
  keg](#sec-dwk)
- [<span class="toc-section-number">22</span> Body mass index
  (bmi)](#sec-bmi)
- [<span class="toc-section-number">23</span> Centizem centimeter
  inch](#sec-cci)
- [<span class="toc-section-number">24</span> Claude Boniface
  Collignon](#sec-cbc)
- [Summary](#tldr)
- [Next](#next)
- [Cite](#cite)
- [Appendix](#last)
- [Observable notebooks](#note)
- [Glossary](#glos)

<div id="firstnav">

<div>

<figure class=''>

<div>

<img src="index_files/figure-commonmark/mermaid-figure-1.png"
style="width:8.64in;height:0.98in" />

</div>

</figure>

</div>

</div>

# Dec measurement system

This part of my website focuses on Dec, a [measurement
system](https://en.wikipedia.org/wiki/System_of_units_of_measurement#:~:text=a%20collection%20of%20units%20of%20measurement%20and%20rules%20relating%20them%20to%20each%20other)
that [I](https://maptv.github.io) created. All Dec measurements are
based on
[turns](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=a%20unit%20of%20plane%20angle%20measurement%20equal%20to%202%CF%80%C2%A0radians%2C%20360%C2%A0degrees).
When measuring
[angles](https://en.wikipedia.org/wiki/Angle#:~:text=the%20figure%20formed%20by%20two%20rays)📐,
a
[turn](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=the%20Greek%20letter,to%20one%20turn)
(<a href="#t" id="turn" class="tool" data-bs-toggle="tooltip"
data-bs-title="turn">t</a>) represents a full⭕️circle and equals 360
[degrees](https://en.wikipedia.org/wiki/Degree_(angle)#:~:text=a%20measurement%20of%20a%20plane%20angle%20in%20which%20one%20full%20rotation%20is%20360%20degrees)
(<a href="#deg" id="degree" class="tool" data-bs-toggle="tooltip"
data-bs-title="degrees">°</a>) or
<a href="#2pi" id="tau" class="tool" data-bs-toggle="tooltip"
data-bs-title="tau"><span
class="math inline">$\underline\tau$</span></a>,
2<a href="#pi" id="taudividedby2" class="tool" data-bs-toggle="tooltip"
data-bs-title="tau">𝜋</a>, or
900<a href="#sampi" id="taudividedby900" class="tool"
data-bs-toggle="tooltip" data-bs-title="sampi">ϡ</a>
[radians](https://en.wikipedia.org/wiki/Radian#:~:text=the%20unit%20of%20angle%20in%20the%20International%20System%20of%20Units)
(<a href="#rad" id="radian" class="tool" data-bs-toggle="tooltip"
data-bs-title="radians">rad</a>). [Geographic
coordinates](https://en.wikipedia.org/wiki/Geographic_coordinate_system#:~:text=positions%20directly%20on%20Earth%20as%20latitude%20and%20longitude)
and
[compass](https://en.wikipedia.org/wiki/Compass#:~:text=a%20device%20that%20shows%20the%20cardinal%20directions%20used%20for%20navigation%20and%20geographic%20orientation)🧭directions
are angles and thus can — and should — be measured in turns instead of
<a href="#rad" class="tool" data-bs-toggle="tooltip"
data-bs-title="radians">rad</a> or
<a href="#deg" class="tool" data-bs-toggle="tooltip"
data-bs-title="degrees">°</a>.

# Longitude latitude course

Dec measures
[longitude](https://en.wikipedia.org/wiki/Longitude#:~:text=denoted%20by%20the%20Greek%20letter%20lambda)
in
[parallels](https://en.wikipedia.org/wiki/Circle_of_latitude#:~:text=an%20abstract%20east%E2%80%93west%20small%20circle%20connecting%20all%20locations%20around%20Earth%20(ignoring%20elevation)%20at%20a%20given%20latitude%20coordinate%20line)
(<a href="#lambda" id="parallel" class="tool" data-bs-toggle="tooltip"
data-bs-title="parallels">λ</a>),
[latitude](https://en.wikipedia.org/wiki/Latitude#:~:text=denoted%20by%20the%20Greek%20lower%2Dcase%20letter%20phi)
in
[meridians](https://en.wikipedia.org/wiki/Meridian_arc#Full_meridian_(polar_perimeter):~:text=The%20polar%20Earth%27s%20circumference%20is%20simply%20four%20times%20quarter%20meridian)
(<a href="#m" id="meridian" class="tool" data-bs-toggle="tooltip"
data-bs-title="meridians">m</a>), and compass directions in
[roses](https://en.wikipedia.org/wiki/Compass_rose#:~:text=a%20polar%20diagram%20displaying%20the%20orientation%20of%20the%20cardinal%20directions)🌹(<a href="#r" id="rose" class="tool" data-bs-toggle="tooltip"
data-bs-title="roses">r</a>). To measure certain kinds of angles, Dec
uses specific types of turns with distinct names like
<a href="#lambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="parallel">λ</a>,
<a href="#m" class="tool" data-bs-toggle="tooltip"
data-bs-title="meridian">m</a>, or
<a href="#r" class="tool" data-bs-toggle="tooltip"
data-bs-title="rose">r</a>. All turn types can be combined with [metric
prefixes](https://en.wikipedia.org/wiki/Metric_prefix#:~:text=a%20unit%20prefix%20that%20precedes%20a%20basic%20unit%20of%20measure%20to%20indicate%20a%20multiple%20or%20submultiple%20of%20the%20unit),
like
[deci](https://en.wikipedia.org/wiki/Deci-#:~:text=a%20decimal%20unit%20prefix%20in%20the%20metric%20system%20denoting%20a%20factor%20of%20one%20tenth),
[centi](https://en.wikipedia.org/wiki/Centi-#:~:text=a%20unit%20prefix%20in%20the%20metric%20system%20denoting%20a%20factor%20of%20one%20hundredth),
or
[milli](https://en.wikipedia.org/wiki/Milli-#:~:text=a%20unit%20prefix%20in%20the%20metric%20system%20denoting%20a%20factor%20of%20one%20thousandth),
to create turn
[submultiples](https://en.wikipedia.org/wiki/Multiple_%28mathematics%29#:~:text=of%20%22a%20being-,a%20unit%20fraction,-of%20b%22%20%28a),
such as <span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a turn">deciturns</span>
(<a href="#dt" id="deciturn" class="tool" data-bs-toggle="tooltip"
data-bs-title="deciturns">dt</a>), <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="hundredths of a turn">centiturns</span>
(<a href="#ct" id="centiturn" class="tool" data-bs-toggle="tooltip"
data-bs-title="centiturns">ct</a>), or <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="thousandths of a turn">milliturns</span>
(<a href="#mt" id="milliturn" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliturns">mt</a>).

The table below provides the current longitude in <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="thousandths of a parallel">milliparallels</span>
(<a href="#mlambda" id="milliparallel" class="tool"
data-bs-toggle="tooltip" data-bs-title="milliparallels">mλ</a>) and
latitude in <span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a meridian">millimeridians</span>
(<a href="#mm" id="millimeridian" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>) of Points
<span class="point0">0</span> and <span class="point1">1</span> on the
map🗺️beneath the table. By default, Point <span class="point0">0</span>
is at <span class="color8">800</span>
<a href="#mlambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliparallels">mλ</a> and <span class="color0">0</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>, near the
[Galápagos🏝️archipelago](https://en.wikipedia.org/wiki/Gal%C3%A1pagos_Islands#:~:text=an%20archipelago%20of%20volcanic%20islands%20in%20the%20Eastern%20Pacific)
of Ecuador🇪🇨, and Point <span class="point1">1</span> is at
<span class="color8">800</span>
<a href="#mlambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliparallels">mλ</a> and
<span class="color1">100</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>, near the bottom of the [Missouri
bootheel](https://en.wikipedia.org/wiki/Missouri_Bootheel#:~:text=a%20salient%20(protrusion)%20located%20in%20the%20southeasternmost%20part%20of%20the%20U.S.%20state%20of%20Missouri)
in the United States🇺🇸.

To move the points, click the map ️or edit their coordinates in the
table. The
[toggle](https://observablehq.com/framework/inputs/toggle)✅inputs above
the table add layers to the map️: country borders, a rainbow🌈colored
grid of Dec
[graticules](https://en.wikipedia.org/wiki/Graticule_(cartography)#:~:text=a%20graphical%20depiction%20of%20a%20coordinate%20system%20as%20a%20grid%20of%20lines),
a
[choropleth](https://en.wikipedia.org/wiki/Choropleth_map#:~:text=a%20type%20of%20statistical%20thematic%20map%20that%20uses%20pseudocolor)
of [Coordinated Universal
Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#:~:text=the%20primary%20time%20standard%20globally%20used%20to%20regulate%20clocks%20and%20time)
(<a href="#utc" id="coordinateduniversaltime" class="tool"
data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">utc</a>) time zones, and
[solar
terminator](https://en.wikipedia.org/wiki/Terminator_(solar)#:~:text=a%20moving%20line%20that%20divides%20the%20daylit%20side%20and%20the%20dark%20night%20side%20of%20a%20planetary%20body)
shading with a yellow🟡dot denoting the
[point](https://en.wikipedia.org/wiki/Subsolar_point#:~:text=the%20point%20at%20which%20its%20Sun%20is%20perceived%20to%20be%20directly%20overhead)
where the Sun☀️is [directly
overhead](https://en.wikipedia.org/wiki/Zenith#:~:text=the%20imaginary%20point%20on%20the%20celestial%20sphere%20directly%20%22above%22%20a%20particular%20location):
${sunLonHsl} <a href="#mlambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliparallels">mλ</a> and ${sunLatHsl}
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>.

Alongside the geographic coordinates of a point, each row of the table
contains the
[course](https://en.wikipedia.org/wiki/Azimuth#:~:text=%20azimuth%20is%20usually%20denoted%20alpha)
in <span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a compass rose">milliroses</span>
(<a href="#mr" id="millirose" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliroses">mr</a>) we would need to maintain to
travel🧳the shortest distance to the other point. The shortest distance
is shown as orange🟠dots on the map️. The default courses in
<a href="#mr" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliroses">mr</a> are <span class="color0">0</span>
(North) from Point <span class="point0">0</span> to
<span class="point1">1</span> and <span class="color5">500</span>
(South) from Point <span class="point1">1</span> to
<span class="point0">0</span>.

# Distance speed duration

Dec measures distance in
[taurs](https://en.wikipedia.org/wiki/Turn_(angle)#Tau_proposals:~:text=%E2%81%A0%20turn-,Circumference%20of%20a%20circle,-%F0%9D%90%B6)
(<a href="#c" id="taur" class="tool" data-bs-toggle="tooltip"
data-bs-title="taurs">c</a>), speed in
[omegars](https://en.wikipedia.org/wiki/Angular_velocity#:~:text=linear%20velocity%20is%20the%20radius%20times%20the%20angular%20velocity)
(<a href="#v" id="omegar" class="tool" data-bs-toggle="tooltip"
data-bs-title="omegars">v</a>), and time in years
(<a href="#y" id="year" class="tool" data-bs-toggle="tooltip"
data-bs-title="years">y</a>) and days
(<a href="#d" id="day" class="tool" data-bs-toggle="tooltip"
data-bs-title="days">d</a>). Each of these four turn types approximates
(≈) a physical property of the Earth🌍:
<a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taur">c</a> =
<a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taur"><span class="math inline">$\underline{\tau
r}$</span></a> ≈ its
[circumference](https://en.wikipedia.org/wiki/Earth%27s_circumference#:~:text=the%20distance%20around%20Earth),
<a href="#y" class="tool" data-bs-toggle="tooltip"
data-bs-title="year">y</a> ≈ the duration of its
[orbit](https://en.wikipedia.org/wiki/Earth%27s_orbit#:~:text=From%20a%20vantage%20point%20above%20the%20north%20pole%20of%20either%20the%20Sun%20or%20Earth%2C%20Earth%20would%20appear%20to%20revolve%20in%20a%20counterclockwise%20direction%20around%20the%20Sun)
around the Sun️, <a href="#d" class="tool" data-bs-toggle="tooltip"
data-bs-title="day">d</a> ≈ the duration of its
[rotation](https://en.wikipedia.org/wiki/Earth%27s_rotation#:~:text=the%20rotation%20of%20planet%20Earth%20around%20its%20own%20axis)
on its
[axis](https://en.wikipedia.org/wiki/Axial_tilt#:~:text=the%20imaginary%20line%20that%20passes%20through%20both%20the%20north%20pole%20and%20south%20pole),
and $\text c\over\text d$ =
<a href="#v" class="tool" data-bs-toggle="tooltip"
data-bs-title="omegar">v</a> =
<a href="#v" class="tool" data-bs-toggle="tooltip"
data-bs-title="omegar"><span class="math inline">$\underline{\omega
r}$</span></a> ≈ the speed of its rotation at the
[Equator](https://en.wikipedia.org/wiki/Equator#:~:text=the%20circle%20of%20latitude%20that%20divides%20Earth%20into%20the%20Northern%20and%20Southern%20hemispheres).

At a speed of <span class="color5">0.5</span>
<a href="#v" class="tool" data-bs-toggle="tooltip"
data-bs-title="omegars">v</a> or <span class="color5">500</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of an omegar">milliomegars</span>
(<a href="#mv" id="milliomegar" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliomegars">mv</a>), we could travel the
<span class="color1">0.1</span>
<a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taurs">c</a> or <span class="color1">100</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a taur">millitaurs</span>
(<a href="#mc" id="millitaur" class="tool" data-bs-toggle="tooltip"
data-bs-title="millitaurs">mc</a>) between the default positions📍of
Points <span class="point0">0</span> and <span class="point1">1</span>
in <span class="color2">0.2</span>
<a href="#d" class="tool" data-bs-toggle="tooltip"
data-bs-title="days">d</a> or <span class="color2">200</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a day">millidays</span>
(<a href="#md" id="milliday" class="tool" data-bs-toggle="tooltip"
data-bs-title="millidays">md</a>). The time required to travel between
two points is the distance divided by the speed: ${distance_mcHsl0}
<a href="#mc" class="tool" data-bs-toggle="tooltip"
data-bs-title="millitaurs">mc</a> ÷ ${velocity_vHsl0}
<a href="#v" class="tool" data-bs-toggle="tooltip"
data-bs-title="omegars">v</a> = ${traveltimeHsl0}
<a href="#md" class="tool" data-bs-toggle="tooltip"
data-bs-title="millidays">md</a> = ${distance_cHsl}
<a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taurs">c</a> ÷ ${velocity_vHsl1}
<a href="#v" class="tool" data-bs-toggle="tooltip"
data-bs-title="omegars">v</a> = ${distance_mcHsl1}
<a href="#mc" class="tool" data-bs-toggle="tooltip"
data-bs-title="millitaurs">mc</a> ÷ ${velocity_mvHsl}
<a href="#mv" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliomegars">mv</a> = ${traveltimeHsl1}
<a href="#d" class="tool" data-bs-toggle="tooltip"
data-bs-title="days">d</a>.

## Interactive world map

<div class="marginInputs">

``` {ojs}
//| echo: false
//| label: speedinput
//| column: margin
viewof travelspeed = Inputs.range([0, 1000], {label: "Speed", value: 500, step: 1})
```

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

</div>

``` {ojs}
//| echo: false
//| label: toggles
viewof bordertoggle = labelToggle(Inputs.toggle, "Border", false, "bordertoggle")
viewof gridtoggle = labelToggle(Inputs.toggle, "Grid", false, "gridtoggle")
viewof utctoggle = labelToggle(Inputs.toggle, "UTC", false, "utctoggle")
viewof suntoggle = labelToggle(Inputs.toggle, "Sun", false, "suntoggle")
rstbtn.node();
```

``` {ojs}
//| echo: false
//| label: maptable
table = createTable([
  { Point: 0, Milliparallel: 800, Millimeridian: 0, Milliwindrose: 0 },
  { Point: 1, Milliparallel: 800, Millimeridian: 100, Milliwindrose: 500 },
], { headerEditable: false, appendRows: false })
//   {Point: 0, Milliparallel: `${Math.floor(long2turn(Place_A[0], 3))}`, Millimeridian: `${Math.floor(lati2turn(Place_A[1], 3))}`, Milliwindrose: `${Math.floor(lati2turn(coor2bear(Place_A, Place_B)))}`},
//   {Point: 1, Milliparallel: `${Math.floor(long2turn(Place_B[0], 3))}`, Millimeridian: `${Math.floor(lati2turn(Place_B[1], 3))}`, Milliwindrose: `${Math.floor(lati2turn(coor2bear(Place_B, Place_A)))}`},
// ], {headerEditable: false, appendRows: false})
```

<div class="column-page">

``` {ojs}
//| echo: false
//| label: fig-distmap
// https://observablehq.com/@d3/solar-terminator
// https://observablehq.com/@mbostock/time-zones
viewof coordinates = worldMapCoordinates([[turn2long(table.rows[1].cells[1].childNodes[0].innerText), turn2degr(table.rows[1].cells[2].childNodes[0].innerText % 250)], [turn2long(table.rows[2].cells[1].childNodes[0].innerText), turn2degr(table.rows[2].cells[2].childNodes[0].innerText % 250)], projection], [width, height * mapsize / 100])
//viewof coordinates = worldMapCoordinates([
//  [turn2long(table.rows[1].cells[1].childNodes[0].innerText), turn2degr(table.rows[1].cells[2].childNodes[0].innerText % 250)],
//  [turn2long(table.rows[2].cells[1].childNodes[0].innerText), turn2degr(table.rows[2].cells[2].childNodes[0].innerText % 250)],
//  projection], [width, height])
```

</div>

## Color wheel compass

``` {ojs}
//| echo: false
//| label: colorpreview
//| column: margin
//| class: colorcomponent
preview()
```

``` {ojs}
//| echo: false
//| label: coloropposites8
//| column: margin
//| class: coloropp
// https://observablehq.com/@maddievision/enneagram
quickRender(326, 326, context => {
  const center = 163
  const ringRadius = 140
  const ringLineWidth = 4
  // Ring
  context.beginPath();
  context.lineWidth = ringLineWidth
  context.strokeStyle = "#ddd"
  context.arc(center, center, ringRadius, 0, 2 * Math.PI);
  context.stroke();
  context.font = "Bold 16px Arial"
  context.textAlign = 'center'
  let octPoints = []
  for (let i = 0; i < 8; i++) {
    const xPhase = Math.sin(i / 8 * 2 * Math.PI)
    const yPhase = Math.cos(i / 8 * 2 * Math.PI)
    const x = center + ringRadius * xPhase
    const y = center - ringRadius * yPhase
    octPoints.push([x, y])
  }
  // Lines
  octConnections.forEach(([a, b], i ) => {
    const [x1, y1] = octPoints[a]
    const [x2, y2] = octPoints[b]
    const lineAngle = Math.atan2(y2 - y1, x2 - x1)
    // Draw just short of the label circumference
    const x2a = x2 - 28 * Math.cos(lineAngle)
    const y2a = y2 - 28 * Math.sin(lineAngle)
    const x1a = x1 + 28 * Math.cos(lineAngle)
    const y1a = y1 + 28 * Math.sin(lineAngle)
    context.lineWidth = ringLineWidth
    context.strokeStyle = "#ddd"
    context.beginPath();
    context.moveTo(x2a, y2a);
    context.lineTo(x1a, y1a);
    context.stroke();
  })
  // Arrow Heads
  octConnections.forEach(([a, b], i ) => {
    const [x1, y1] = octPoints[a]
    const [x2, y2] = octPoints[b]
    const lineAngle = Math.atan2(y2 - y1, x2 - x1)
    const xl = x2 - 88 * Math.cos(lineAngle - (15 / 360) * 2 * Math.PI)
    const yl = y2 - 88 * Math.sin(lineAngle - (15 / 360) * 2 * Math.PI)
    const xr = x2 - 88 * Math.cos(lineAngle + (15 / 360) * 2 * Math.PI)
    const yr = y2 - 88 * Math.sin(lineAngle + (15 / 360) * 2 * Math.PI)
    const x2a = x2 - 22 * Math.cos(lineAngle)
    const y2a = y2 - 22 * Math.sin(lineAngle)
    const x = x2 - 69 * Math.cos(lineAngle)
    const y = y2 - 69 * Math.sin(lineAngle)
    context.fillStyle = hsl8[i]
    context.strokeStyle = window.darkmode ? "#aaa" : "#333";
    context.lineWidth = 1
    context.beginPath();
    context.moveTo(x2a, y2a);
    context.lineTo(xl, yl);
    context.lineTo(xr, yr);
    context.lineTo(x2a, y2a);
    context.fill();
    context.stroke();
    context.fillStyle = yiq(hsl8[i]) > 0.51 ? "#000" : "white"
    context.fillText(["N", "NE", "E", "SE", "S", "SW", "W", "NW"][i], x, y + 6)
  })
  // Labels
  octPoints.forEach(([x, y], i) => {
    context.lineWidth = 1
    context.fillStyle = hsl8[i]
    context.strokeStyle = window.darkmode ? "#aaa" : "#333";
    context.beginPath();
    context.arc(x, y, 22, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
    context.fillStyle = yiq(hsl8[i]) > 0.51 ? "#000" : "white";
    context.fillText(["N", "NE", "E", "SE", "S", "SW", "W", "NW"][i], x, y + 6)
  })
})
```

``` {ojs}
//| echo: false
//| label: colorcomparer8
//| column: margin
//| class: colorcomparer
// https://observablehq.com/@observablehq/categorical-palette-tool
displayPalette(hsl8, {darkMode: true})
```

``` {ojs}
//| echo: false
//| label: coloropposites10
//| column: margin
//| class: coloropp
// https://observablehq.com/@maddievision/enneagram
quickRender(326, 326, context => {
  const center = 163
  const ringRadius = 140
  const ringLineWidth = 4
  // Ring
  context.beginPath();
  context.lineWidth = ringLineWidth
  context.strokeStyle = "#ddd"
  context.arc(center, center, ringRadius, 0, 2 * Math.PI);
  context.stroke();
  context.font = "Bold 24px Arial"
  context.textAlign = 'center'
  let decPoints = []
  for (let i = 0; i < 10; i++) {
    const xPhase = Math.sin(i / 10 * 2 * Math.PI)
    const yPhase = Math.cos(i / 10 * 2 * Math.PI)
    const x = center + ringRadius * xPhase
    const y = center - ringRadius * yPhase
    decPoints.push([x, y])
  }
  // Lines
  decConnections.forEach(([a, b], i ) => {
    const [x1, y1] = decPoints[a]
    const [x2, y2] = decPoints[b]
    const lineAngle = Math.atan2(y2 - y1, x2 - x1)
    // Draw just short of the label circumference
    const x2a = x2 - 28 * Math.cos(lineAngle)
    const y2a = y2 - 28 * Math.sin(lineAngle)
    const x1a = x1 + 28 * Math.cos(lineAngle)
    const y1a = y1 + 28 * Math.sin(lineAngle)
    context.lineWidth = ringLineWidth
    context.strokeStyle = "#ddd"
    context.beginPath();
    context.moveTo(x2a, y2a);
    context.lineTo(x1a, y1a);
    context.stroke();
  })
  // Arrow Heads
  decConnections.forEach(([a, b], i ) => {
    const [x1, y1] = decPoints[a]
    const [x2, y2] = decPoints[b]
    const lineAngle = Math.atan2(y2 - y1, x2 - x1)
    const xl = x2 - 79 * Math.cos(lineAngle - (15 / 360) * 2 * Math.PI)
    const yl = y2 - 79 * Math.sin(lineAngle - (15 / 360) * 2 * Math.PI)
    const xr = x2 - 79 * Math.cos(lineAngle + (15 / 360) * 2 * Math.PI)
    const yr = y2 - 79 * Math.sin(lineAngle + (15 / 360) * 2 * Math.PI)
    const x2a = x2 - 22 * Math.cos(lineAngle)
    const y2a = y2 - 22 * Math.sin(lineAngle)
    const x = x2 - 60 * Math.cos(lineAngle)
    const y = y2 - 60 * Math.sin(lineAngle)
    context.fillStyle = hsl10[i]
    context.strokeStyle = window.darkmode ? "#aaa" : "#333";
    context.lineWidth = 1
    context.beginPath();
    context.moveTo(x2a, y2a);
    context.lineTo(xl, yl);
    context.lineTo(xr, yr);
    context.lineTo(x2a, y2a);
    context.fill();
    context.stroke();
    context.fillStyle = yiq(hsl10[i]) > 0.51 ? "#000" : "white"
    context.fillText(i, x, y + 8)
  })
  // Labels
  decPoints.forEach(([x, y], i) => {
    context.lineWidth = 1
    context.fillStyle = hsl10[i]
    context.strokeStyle = window.darkmode ? "#aaa" : "#333";
    context.beginPath();
    context.arc(x, y, 22, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
    context.fillStyle = yiq(hsl10[i]) > 0.51 ? "#000" : "white";
    context.fillText(i, x, y + 8)
  })
})
```

``` {ojs}
//| echo: false
//| label: colorcomparer10
//| column: margin
//| class: colorcomparer
// https://observablehq.com/@observablehq/categorical-palette-tool
displayPalette(hsl10.slice(0, 10), {darkMode: true})
```

``` {ojs}
//| echo: false
//| label: fig-colorwheelcompass
//| class: colorcomponent
// https://observablehq.com/@pjedwards/compass-rose-as-legend-with-colors
svg`<svg width="${size}" height="${size}" viewBox="${-size/2} ${-size/2} ${size} ${size}">
  <g transform='rotate(${Math.round(-colorD * .36)})'>
  ${repeat(tick(radius, 5, '#434343'), 5 * 4 * 10)}
  ${repeat(tick(radius, 8), 10 * 4)}
  ${repeat(`<path d="M 0,-${radius+12} l 3,10 l -6,0 z" fill="black" stroke="black" stroke-width="1"/>`, 4, 0)}
  ${repeat(`<path d="M 0,-${radius+12} l 3,10 l -6,0 z" fill="white" stroke="black" stroke-width="1"/>`, 4, 45)}
  <circle r="${radius}" fill="#d3d3d3" stroke="#434343" stroke-width="3" />
  ${repeat(directionMarker(radius+14, 24), 4, 0)}
  ${repeat(directionMarker(radius+12, 24), 4, 45)}
  ${repeat(turnMarker(radius+14, 32), 4, 0)}
  ${repeat(turnMarker(radius+12, 32), 4, 45)}
  ${repeat(pie(radius-margin/2, 2 * Math.PI * (radius-margin/2) / deccolors.length / 2, 1, deccolors), deccolors.length, 360/deccolors.length)}
</svg>
`
```

``` {ojs}
//| echo: false
//| label: colorbar
//| class: colorcomponent
// https://observablehq.com/@paavanb/progressive-color-picker
decBar = colorbar({
  colorFn: t => hslToRgb(dec2hue(t) / 1000, colorS / 1000, colorL / 1000),
  onSelect: t => {
    set(viewof colorD, t * 1000)
    onUpdateHSL(dec2hue(t), colorS / 1000, colorL / 1000)
  }
})
```

## Hue saturation lightness (hsl)

``` {ojs}
//| echo: false
//| label: hueslider
//| class: colorslider
// https://observablehq.com/@paavanb/progressive-color-picker
{ const input = Inputs.range([0, 1000], { label: "Hue", value: 0, step: 1 })
  input.value = initialHSL[0]
  input.oninput = (evt) => onUpdateHSL(dec2hue(evt.currentTarget.value / 1000), colorS / 1000, colorL / 1000)
  return Inputs.bind(input, viewof colorD)
}
```

``` {ojs}
//| echo: false
//| label: satslider
//| class: colorslider
// https://observablehq.com/@paavanb/progressive-color-picker
{ const input = Inputs.range([0, 1000], { label: "Saturation", value: 1000, step: 1, })
  input.oninput = (evt) => onUpdateHSL(colorD, evt.currentTarget.value / 1000, colorL / 1000)
  return Inputs.bind(input, viewof colorS)
}
```

``` {ojs}
//| echo: false
//| label: litslider
//| class: colorslider
// https://observablehq.com/@paavanb/progressive-color-picker
{ const input = Inputs.range([0, 1000], { label: "Lightness", value: 500, step: 1, })
  input.oninput = (evt) => onUpdateHSL(colorD, colorS / 1000, evt.currentTarget.value / 1000)
  return Inputs.bind(input, viewof colorL)
}
```

## Course color table

<div id="colortable">

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 18%" />
<col style="width: 21%" />
<col style="width: 21%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th></th>
<th><strong><span class="tool" data-bs-toggle="tooltip"
data-bs-title="milliroses">mr</span></strong>🧭</th>
<th><strong><span class="tool" data-bs-toggle="tooltip"
data-bs-title="compass degrees">c°</span></strong>🧭</th>
<th><strong><span class="tool" data-bs-toggle="tooltip"
data-bs-title="HSL or HSV degrees">h°</span></strong>🎨</th>
<th><strong><span class="tool" data-bs-toggle="tooltip"
data-bs-title="hexadecimal">hex</span></strong>🎨</th>
</tr>
</thead>
<tbody>
<tr>
<td>${rainbowDir}</td>
<td>${rainbowMtr}</td>
<td>${rainbowDegC}</td>
<td>${rainbowDegH}</td>
<td>${rainbowHex}</td>
</tr>
<tr>
<td><span class="color125">NE</span></td>
<td><span class="color125">125</span></td>
<td><span class="color125">45</span></td>
<td><span class="color125">44</span></td>
<td><span class="color125">fb0</span></td>
</tr>
<tr>
<td><span class="color250">E</span></td>
<td><span class="color250">250</span></td>
<td><span class="color250">90</span></td>
<td><span class="color250">68</span></td>
<td><span class="color250">df0</span></td>
</tr>
<tr>
<td><span class="color375">SE</span></td>
<td><span class="color375">375</span></td>
<td><span class="color375">135</span></td>
<td><span class="color375">96</span></td>
<td><span class="color375">6f0</span></td>
</tr>
<tr>
<td><span class="color5">S</span></td>
<td><span class="color5">500</span></td>
<td><span class="color5">180</span></td>
<td><span class="color5">180</span></td>
<td><span class="color5">0ff</span></td>
</tr>
<tr>
<td><span class="color625">SW</span></td>
<td><span class="color625">625</span></td>
<td><span class="color625">225</span></td>
<td><span class="color625">216</span></td>
<td><span class="color625">06f</span></td>
</tr>
<tr>
<td><span class="color750">W</span></td>
<td><span class="color750">750</span></td>
<td><span class="color750">270</span></td>
<td><span class="color750">264</span></td>
<td><span class="color750">60f</span></td>
</tr>
<tr>
<td><span class="color875">NW</span></td>
<td><span class="color875">875</span></td>
<td><span class="color875">315</span></td>
<td><span class="color875">292</span></td>
<td><span class="color875">d0f</span></td>
</tr>
<tr>
<td><span class="color0">N</span></td>
<td><span class="color0">0</span></td>
<td><span class="color0">0</span></td>
<td><span class="color0">0</span></td>
<td><span class="color0">f00</span></td>
</tr>
</tbody>
</table>

</div>

The
[color🎨wheel](https://en.wikipedia.org/wiki/Color_wheel#:~:text=an%20abstract%20illustrative%20organization%20of%20color%20hues%20around%20a%20circle)
compass above indicates both a
[hue](https://en.wikipedia.org/wiki/Hue#:~:text=an%20angular%20position%20around%20a%20central%20or%20neutral%20point%20or%20axis%20on%20a%20color%20space%20coordinate%20diagram)
in <a href="#mt" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliturns">mt</a> and a course in
<a href="#mr" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliroses">mr</a>. We can convert the hue to [HSL and
HSV](https://en.wikipedia.org/wiki/HSL_and_HSV#:~:text=the%20two%20most%20common%20cylindrical%2Dcoordinate%20representations%20of%20points%20in%20an%20RGB%20color%20model)
degrees
(<a href="#hdeg" id="huedegree" class="tool" data-bs-toggle="tooltip"
data-bs-title="HSL or HSV degrees">h°</a>) and the course to compass
degrees
(<a href="#cdeg" id="compassdegree" class="tool" data-bs-toggle="tooltip"
data-bs-title="compass degrees">c°</a>): 25
<a href="#mr" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliroses">mr</a> = 9
<a href="#cdeg" class="tool" data-bs-toggle="tooltip"
data-bs-title="compass degrees">c°</a>. To rotate🔄the color wheel
compass, use the “Hue”
[range](https://observablehq.com/framework/inputs/range)🎚️and [hue
bar](https://observablehq.com/@paavanb/progressive-color-picker) inputs
beneath it or change the course from Point <span class="point0">0</span>
to <span class="point1">1</span> by interacting with the table or map️
above.

# Red green blue (rgb)

The table beneath the hue bar compares the current Point
<span class="point0">0</span> to <span class="point1">1</span> course in
its top row with the
[cardinal](https://en.wikipedia.org/wiki/Cardinal_direction#:~:text=north%2C%20south%2C%20east%2C%20and%20west)
and
[intercardinal](https://en.wikipedia.org/wiki/Cardinal_direction#:~:text=northeast%20(NE)%2C%20southeast%20(SE)%2C%20southwest%20(SW)%2C%20and%20northwest%20(NW))
directions. Together, the range ️inputs underneath the hue bar form a
“hue saturation lightness”
(<a href="#hsl" id="huesaturationlightness" class="tool"
data-bs-toggle="tooltip"
data-bs-title="hue saturation lightness">hsl</a>) triplet. Like
“[<span class="color0">red</span> <span class="color4">green</span>
<span class="color7">blue</span>](https://en.wikipedia.org/wiki/RGB_color_model#:~:text=an%20additive%20color%20model)”
(<a href="#rgb" id="redgreenblue" class="tool" data-bs-toggle="tooltip"
data-bs-title="red green blue">rgb</a>) or
[hexadecimal](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet:~:text=hexadecimal%20number%20used%20in%20HTML%2C%20CSS%2C%20SVG%2C%20and%20other%20computing%20applications%20to%20represent%20colors)
(<a href="#hex" id="hexadecimal" class="tool" data-bs-toggle="tooltip"
data-bs-title="hexadecimal">hex</a>) triplets,
<a href="#hsl" id="huesaturationlightness" class="tool"
data-bs-toggle="tooltip"
data-bs-title="hue saturation lightness">hsl</a> triplets specify a
full-fledged color instead of just a hue.

Color labels🏷️provide a general idea of angular
[measure](https://en.wikipedia.org/wiki/Angle#:~:text=The%20magnitude%20of%20an%20angle),
regardless of the metric prefixes or
[units](https://en.wikipedia.org/wiki/Angle#Units) we use. Therefore, we
can reuse♻️colors across many different contexts. Most often,
<span class="color0">red</span> designates starting points, like North
(<span class="color0">0</span>
<a href="#mr" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliroses">mr</a>) and [Longitude
0](https://en.wikipedia.org/wiki/18th_meridian_west#:~:text=a%20line%20of%20longitude%20that%20extends%20from%20the%20North%20Pole%20across%20the%20Arctic%20Ocean%2C%20Greenland%2C%20Iceland%2C%20the%20Atlantic%20Ocean%2C%20the%20Canary%20Islands%2C%20the%20Southern%20Ocean%2C%20and%20Antarctica%20to%20the%20South%20Pole)
(<span class="color0">0</span>
<a href="#mlambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliparallels">mλ</a>), and
<span class="color5">cyan</span> denotes midpoints, such as South
(<span class="color5">500</span>
<a href="#mr" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliroses">mr</a>) and [Longitude
5](https://en.wikipedia.org/wiki/162nd_meridian_east#:~:text=a%20line%20of%20longitude%20that%20extends%20from%20the%20North%20Pole%20across%20the%20Arctic%20Ocean%2C%20Asia%2C%20the%20Pacific%20Ocean%2C%20the%20Southern%20Ocean%2C%20and%20Antarctica%20to%20the%20South%20Pole)
(<span class="color5">500</span>
<a href="#mlambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliparallels">mλ</a>).

<div>

> **Bad Pun Alert**
>
> Feeling ***disoriented***😵‍💫? Of
> [***course***](https://en.wikipedia.org/wiki/Course_(navigation)#:~:text=the%20cardinal%20direction%20in%20which%20the%20craft%20is%20to%20be%20steered)
> you are! Color labels ️can help you find your
> [***bearings***](https://en.wikipedia.org/wiki/Bearing_(navigation)#:~:text=the%20horizontal%20angle%20between%20the%20direction%20of%20an%20object%20and%20north%20or%20another%20object),
> stay on
> [***track***](https://en.wikipedia.org/wiki/Course_(navigation)#:~:text=The%20path%20that%20a%20vessel%20follows),
> and avoid
> [***heading***](https://en.wikipedia.org/wiki/Course_(navigation)#:~:text=the%20direction%20where%20the%20watercraft's%20bow%20or%20the%20aircraft's%20nose%20is%20pointed)
> aches🤕. <span class="orange">Orange</span> you glad I couldn’t think
> of a color pun?

</div>

The Equator (<span class="color0">0</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>) is the [major
latitude](https://en.wikipedia.org/wiki/Circle_of_latitude#:~:text=mark%20the%20divisions%20between%20the%20five%20principal%20geographical%20zones)
midway between the South (<span class="color750">-250</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>) and North
(<span class="color250">250</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>) Poles. Unlike the Equator, the
Tropics of
[Cancer](https://en.wikipedia.org/wiki/Tropic_of_Cancer#:~:text=northernmost%20circle%20of%20latitude%20where%20the%20Sun%20can%20be%20seen%20directly%20overhead)♋(<span class="color065">65</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>) and
[Capricorn](https://en.wikipedia.org/wiki/Tropic_of_Capricorn#:~:text=the%20southernmost%20latitude%20where%20the%20Sun%20can%20be%20seen%20directly%20overhead)♑️(<span class="color935">-65</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>) and the
[Arctic](https://en.wikipedia.org/wiki/Arctic_Circle#:~:text=the%20southernmost%20latitude%20at%20which%2C%20on%20the%20winter%20solstice%20in%20the%20Northern%20Hemisphere%2C%20the%20Sun%20does%20not%20rise%20all%20day%2C%20and%20on%20the%20Northern%20Hemisphere%27s%20summer%20solstice%2C%20the%20Sun%20does%20not%20set)
(<span class="color250">250</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a> – <span class="color065">65</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a> =
<span class="color185">185</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>) and
[Antarctic](https://en.wikipedia.org/wiki/Antarctic_Circle#:~:text=the%20Sun%20is%20above%20the%20horizon%20for%2024%20continuous%20hours%20at%20least%20once%20per%20year%20(and%20therefore%20visible%20at%20solar%20midnight)%20and%20the%20centre%20of%20the%20Sun%20(ignoring%20refraction)%20is%20below%20the%20horizon%20for%2024%20continuous%20hours%20at%20least%20once%20per%20year%20(and%20therefore%20not%20visible%20at%20solar%20noon))
(<span class="color065">65</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a> –
<span class="color250">250</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a> =
<span class="color815">-185</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>) Circles are defined by the [axial
tilt](https://en.wikipedia.org/wiki/Axial_tilt#Earth:~:text=the%20angle%20between%20the%20ecliptic%20and%20the%20celestial%20equator%20on%20the%20celestial%20sphere)
of the Earth🌏: <span class="color065">65</span>
<a href="#mt" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliturns">mt</a>.

# Dec time zones

Enable the “Grid” toggle input to see Latitudes
[-2](https://en.wikipedia.org/wiki/72nd_parallel_south#:~:text=a%20circle%20of%20latitude%20that%20is%2072%20degrees%20south%20of%20the%20Earth's%20equatorial%20plane%20in%20the%20Antarctic)
(<span class="color8">-200</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="millimeridians">mm</span>),
[-1](https://en.wikipedia.org/wiki/36th_parallel_south#:~:text=a%20circle%20of%20latitude%20that%20is%2036%20degrees%20south%20of%20the%20Earth's%20equatorial%20plane)
(<span class="color9">-100</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>),
[0](https://en.wikipedia.org/wiki/Equator#:~:text=the%20circle%20of%20latitude%20that%20divides%20Earth%20into%20the%20Northern%20and%20Southern%20hemispheres)
(<span class="color0">0</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>),
[1](https://en.wikipedia.org/wiki/36th_parallel_north#:~:text=a%20circle%20of%20latitude%20that%20is%2036%20degrees%20north%20of%20the%20Earth's%20equatorial%20plane)
(<span class="color1">100</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>), and
[2](https://en.wikipedia.org/wiki/72nd_parallel_north#:~:text=a%20circle%20of%20latitude%20that%20is%2072%20degrees%20north%20of%20the%20Earth's%20equatorial%20plane%2C%20in%20the%20Arctic)
(<span class="color2">200</span>
<a href="#mm" class="tool" data-bs-toggle="tooltip"
data-bs-title="millimeridians">mm</a>) on the map ️above along with the
ten major longitudes that divide the Earth🌎into the ten Dec time zones.
Notably, Longitude <span class="color0">0</span> is the major longitude
that functions as both the [Prime
Meridian](https://en.wikipedia.org/wiki/Prime_meridian#:~:text=an%20arbitrarily%2Dchosen%20meridian%20%28a%20line%20of%20longitude%29%20in%20a%20geographic%20coordinate%20system%20at%20which%20longitude%20is%20defined%20to%20be%200%C2%B0)
and [International Date
Line](https://en.wikipedia.org/wiki/International_Date_Line#:~:text=the%20line%20between%20the%20South%20and%20North%20Poles%20that%20is%20the%20boundary%20between%20one%20calendar%20day%20and%20the%20next)
in Dec.

Like the ten major longitudes that separate them, Dec time zones are
numbered <span class="color0">0</span> to <span class="color9">9</span>.
Based on its current <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a parallel">deciparallel</span>
(<a href="#dlambda" id="deciparallel" class="tool"
data-bs-toggle="tooltip" data-bs-title="deciparallel">dλ</a>) longitude,
${point0lHsl}, Point <span class="point0">0</span> on the map ️above is
in Zone ${point0zHsl}. The number assigned to each time zone is its
offset from Zone <span class="color0">0</span> in <span class="tool"
data-bs-toggle="tooltip" data-bs-title="tenths of a day">decidays</span>
(<a href="#dd" id="deciday" class="tool" data-bs-toggle="tooltip"
data-bs-title="decidays">dd</a>). To obtain the
<a href="#dd" class="tool" data-bs-toggle="tooltip"
data-bs-title="deciday">dd</a> offset at a location, we
[floor](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions#:~:text=the%20greatest%20integer%20less%20than%20or%20equal%20to%20x)
its <a href="#dlambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="deciparallel">dλ</a> longitude: ⌊${decLonHsl}⌋ =
${decZonHsl}.

``` {ojs}
//| echo: false
//| label: loninput
viewof longitude = Inputs.range([0, 10], {label: "Longitude", value: .5, step: .01})
```

Each Dec time zone is 1
<a href="#dlambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="deciparallel">dλ</a> wide and 0.5
<a href="#m" class="tool" data-bs-toggle="tooltip"
data-bs-title="meridians">m</a> long. While 1
<a href="#m" class="tool" data-bs-toggle="tooltip"
data-bs-title="meridian">m</a> is always <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>1
<a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taur">c</a> long, the length of a
<a href="#lambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="parallel">λ</a> [varies by
latitude](https://en.wikipedia.org/wiki/Longitude#Length_of_a_degree_of_longitude:~:text=depends%20only%20on%20the%20radius%20of%20a%20circle%20of%20latitude).
At the Equator, 1
<a href="#lambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="parallel">λ</a> is <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>1
<a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taur">c</a> long. At the
[North](https://en.wikipedia.org/wiki/North_Pole#:~:text=the%20point%20in%20the%20Northern%20Hemisphere%20where%20the%20Earth%27s%20axis%20of%20rotation%20meets%20its%20surface)
or
[South](https://en.wikipedia.org/wiki/South_Pole#:~:text=the%20point%20in%20the%20Southern%20Hemisphere%20where%20the%20Earth%27s%20axis%20of%20rotation%20meets%20its%20surface)
Pole, the length of a
<a href="#lambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="parallel">λ</a> is zero. The approximate
<a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taur">c</a> length of a
<a href="#lambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="parallel">λ</a> is the
[cosine](https://en.wikipedia.org/wiki/Sine_and_cosine#:~:text=the%20ratio%20of%20the%20length%20of%20the%20adjacent%20leg%20to%20that%20of%20the%20hypotenuse)
of its latitude in <a href="#m" class="tool" data-bs-toggle="tooltip"
data-bs-title="meridians">m</a>,
<a href="#rad" class="tool" data-bs-toggle="tooltip"
data-bs-title="radians">rad</a>, or
<a href="#deg" class="tool" data-bs-toggle="tooltip"
data-bs-title="degrees">°</a>, depending on the input requirement of our
cosine function: cos(${parLat}${conversionFactor}) = ${parLen}.

``` {ojs}
//| echo: false
//| label: latinput
viewof latitude = Inputs.range([-.25, .25], {label: "Latitude", value: 0, step: .001})
```

``` {ojs}
//| echo: false
//| label: costype
viewof costype = Inputs.radio(["turns", "radians", "degrees"], {label: "Cosine input", value: "turns"})
```

# Dates and times

Dec dates consist of a “year of era”
(<a href="#yoe" id="yearofera" class="tool" data-bs-toggle="tooltip"
data-bs-title="year of era">yoe</a>) and a “day of year”
(<a href="#doy" id="dayofyear" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a>), whereas Dec times are composed of
a “time of day”
(<a href="#tod" id="timeofday" class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</a>) and a “time zone offset”
(<a href="#tzo" id="timezoneoffset" class="tool" data-bs-toggle="tooltip"
data-bs-title="time zone offset">tzo</a>). In Zone
<span class="color0">0</span>, the current date is
${decYearP0hsl0}<span class="mono">+</span>${decDateP0hsl0} and the
current time is
${decTimeP0hsl0}<span class="mono">-</span><span class="color0">0</span>.
Color labels ️make it easier to visually
[parse](https://en.wikipedia.org/wiki/Parsing#:~:text=a%20process%20of%20analyzing%20a%20string%20of%20symbols)
the date and time that make up a Dec snap🫰:
${decYearP0hsl1}<span class="mono">+</span>${decDateP0hsl1}${decTimeP0hsl1}<span class="mono">-</span><span class="color0">0</span>.

# Millenium Year Day

<a href="#yoe" class="tool" data-bs-toggle="tooltip"
data-bs-title="year of era">Yoe</a> color labels ️are based on “year of
millenium”
(<a href="#y" id="yearofmillenium" class="tool" data-bs-toggle="tooltip"
data-bs-title="year">yom</a>) values. At the start of every millennium,
the <span class="tool" data-bs-toggle="tooltip"
data-bs-title="year">yom</span> is <span class="color0">0</span>.
Halfway through a millenium, the <span class="tool"
data-bs-toggle="tooltip" data-bs-title="year">yom</span> is
<span class="color5">500</span>
<a href="#y" class="tool" data-bs-toggle="tooltip"
data-bs-title="year">y</a>.
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">Doy</a> color labels ️are measured in
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a year">milliyears</span>
(<a href="#my" id="milliyear" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliyears">my</a>). Every year starts on
<span class="tool" data-bs-toggle="tooltip" data-bs-title="March 1">Day
0</span> (<span class="color0">0</span>
<a href="#my" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliyears">my</a>). The midyear point
(<span class="color5">500</span>
<a href="#my" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliyears">my</a>) is noon
(<span class="color5">500</span>
<a href="#md" class="tool" data-bs-toggle="tooltip"
data-bs-title="millidays">md</a>) on <span class="tool"
data-bs-toggle="tooltip" data-bs-title="August 30">Day 182</span> in
[common
years](https://en.wikipedia.org/wiki/Common_year#:~:text=a%20calendar%20year%20with%20365%20days)
and midnight (<span class="color0">0</span>
<a href="#md" class="tool" data-bs-toggle="tooltip"
data-bs-title="millidays">md</a>) on <span class="tool"
data-bs-toggle="tooltip" data-bs-title="August 31">Day 183</span> in
[leap
years](https://en.wikipedia.org/wiki/Leap_year#:~:text=a%20calendar%20year%20that%20contains%20an%20additional%20day).

# Day of dek (dod)

Each <a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</a> also has two components. The first
two digits of a three-digit
<a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="days of year">doy</a> represent a group of ten days
called a <a href="#doy" class="tool" data-bs-toggle="tooltip"
data-bs-title="group of ten days">decaday</a>
(<a href="#dek" id="decaday" class="tool" data-bs-toggle="tooltip"
data-bs-title="group of ten days">dek</a>). The last digit of a
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="days of year">doy</span> is the “day of dek”
(<a href="#dod" id="dayofdek" class="tool" data-bs-toggle="tooltip"
data-bs-title="day of dek">dod</a>). In Dec,
<a href="#dek" class="tool" data-bs-toggle="tooltip"
data-bs-title="groups of ten days">deks</a> are used instead of months
and weeks. Likewise, Dec uses
<a href="#dod" class="tool" data-bs-toggle="tooltip"
data-bs-title="days of dek">dod</a> in lieu of days of month
(<a href="#dom" id="dayofmonth" class="tool" data-bs-toggle="tooltip"
data-bs-title="days of month">dom</a>) and days of week
(<a href="#dow" id="dayofweek" class="tool" data-bs-toggle="tooltip"
data-bs-title="days of week">dow</a>). In Zone
<span class="color0">0</span>, it is currently
<a href="#dek" class="tool" data-bs-toggle="tooltip"
data-bs-title="group of ten days">Dek</a> ${decDekP0hsl} and
<a href="#dod" class="tool" data-bs-toggle="tooltip"
data-bs-title="Day of dek">Dod</a> ${decDodP0hsl}.

# Zone equatorial meter (zem)

<div id="zemmodulor" class="column-page-right lighthouse"
fig-align="center" style="text-align:center;font-size:.825rem;">

<img src="../asset/Modulor_measurements.svg" id="zModu" />
[Wikimedia](https://commons.m.wikimedia.org/wiki/File:Modulor_measurements.svg#mw-jump-to-license)

</div>

Apart from <a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taur">c</a>, Dec also measures distance using a unit
called the **z**one **e**quatorial **m**eter (zem). The width of a Dec
time zone at the Equator is approximately ten million
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately ten million">~10<sup>7</sup></span>) zem
(<a href="#z" id="zoneequatorialmeter" class="tool"
data-bs-toggle="tooltip" data-bs-title="zem">z</a>). Similarly, the
distance from the Equator to one of the Poles is <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="approximately ten million">~10<sup>7</sup></span>
[meters](https://en.wikipedia.org/wiki/Metre#Definition:~:text=the%20base%20unit%20of%20length%20in%20the%20International%20System%20of%20Units).
In other words, a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a meridian">decimeridian</span>
(<a href="#dm" id="decimeridian" class="tool" data-bs-toggle="tooltip"
data-bs-title="decimeridian">dm</a>) is <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="approximately ten million">~10<sup>7</sup></span>
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a> long and a [quarter
meridian](https://en.wikipedia.org/wiki/Meridian_arc#Full_meridian_(polar_perimeter):~:text=The%20distance%20from%20the%20equator%20to%20the%20pole)
is <span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately ten million">~10<sup>7</sup></span> meters
long.

<div id="zemhands" class="column-margin hand" fig-align="center"
style="text-align:center;">

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   enable-background="new 0 0 838.332 516.951"
   overflow="visible"
   ns3:pageBounds="-124 716 716 124"
   ns3:rulerOrigin="124 -124"
   ns3:viewOrigin="-123.4824 642.7246"
   version="1.1"
   viewBox="0 0 563.14672 234.1945"
   xml:space="preserve"
   id="lefthand"
   sodipodi:docname="hands.svg"
   width="563.14673"
   height="234.1945"
   inkscape:version="1.4 (e7c3feb1, 2024-10-09)"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:x="adobe:ns:meta/"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:pdf="http://ns.adobe.com/pdf/1.3/"
   xmlns:xap="http://ns.adobe.com/xap/1.0/"
   xmlns:xapgimg="http://ns.adobe.com/xap/1.0/g/img/"
   xmlns:xapmm="http://ns.adobe.com/xap/1.0/mm/"
   xmlns:ns3="&amp;#38;#38;ns_ai;"
   xmlns:ns4="&amp;#38;#38;ns_sfw;"
   xmlns:ns5="&amp;#38;#38;ns_vars;"><defs
   id="defs17" /><sodipodi:namedview
   id="namedview17"
   pagecolor="#ffffff"
   bordercolor="#000000"
   borderopacity="0.25"
   inkscape:showpageshadow="2"
   inkscape:pageopacity="0.0"
   inkscape:pagecheckerboard="0"
   inkscape:deskcolor="#d1d1d1"
   inkscape:zoom="2.5207312"
   inkscape:cx="448.08426"
   inkscape:cy="120.40157"
   inkscape:window-width="1472"
   inkscape:window-height="896"
   inkscape:window-x="0"
   inkscape:window-y="32"
   inkscape:window-maximized="0"
   inkscape:current-layer="svg17" />
    <metadata
   id="metadata1">
        <ns4:sfw>
            <ns4:slices />
            <ns4:sliceSourceBounds
   x="-123.482"
   y="125.773"
   width="838.332"
   height="516.951"
   bottomLeftOrigin="true" />
        </ns4:sfw>
        <ns5:variableSets>
            <ns5:variableSet
   locked="none"
   varSetName="binding1">
                <ns5:variables />
                <ns5:sampleDataSets />
            </ns5:variableSet>
        </ns5:variableSets>
<x:xmpmeta
   x:xmptk="XMP toolkit 3.0-29, framework 1.6">
<rdf:RDF>
 <rdf:Description
   rdf:about="uuid:4dd77512-294e-11df-b0f4-001f5b3c2ba8">
  <pdf:Producer>Adobe PDF library 6.66</pdf:Producer>
 </rdf:Description>
 <rdf:Description
   rdf:about="uuid:4dd77512-294e-11df-b0f4-001f5b3c2ba8">
 </rdf:Description>
 <rdf:Description
   rdf:about="uuid:4dd77512-294e-11df-b0f4-001f5b3c2ba8">
 </rdf:Description>
 <rdf:Description
   rdf:about="uuid:4dd77512-294e-11df-b0f4-001f5b3c2ba8">
  <xap:ModifyDate>2010-03-06T19:45:34Z</xap:ModifyDate>
  <xap:CreateDate>2008-03-27T12:07:11+01:00</xap:CreateDate>
  <xap:CreatorTool>Illustrator</xap:CreatorTool>
  <xap:MetadataDate>2008-03-27T16:40:58+01:00</xap:MetadataDate>
  <xap:Thumbnails>
   <rdf:Alt>
    <rdf:li
   rdf:parseType="Resource">
     <xapgimg:format>JPEG</xapgimg:format>
     <xapgimg:width>256</xapgimg:width>
     <xapgimg:height>160</xapgimg:height>
     <xapgimg:image>/9j/4AAQSkZJRgABAgEASABIAAD/7QAsUGhvdG9zaG9wIDMuMAA4QklNA+0AAAAAABAASAAAAAEA
AQBIAAAAAQAB/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoK
DBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8f
Hx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgAoAEAAwER
AAIRAQMRAf/EAaIAAAAHAQEBAQEAAAAAAAAAAAQFAwIGAQAHCAkKCwEAAgIDAQEBAQEAAAAAAAAA
AQACAwQFBgcICQoLEAACAQMDAgQCBgcDBAIGAnMBAgMRBAAFIRIxQVEGE2EicYEUMpGhBxWxQiPB
UtHhMxZi8CRygvElQzRTkqKyY3PCNUQnk6OzNhdUZHTD0uIIJoMJChgZhJRFRqS0VtNVKBry4/PE
1OT0ZXWFlaW1xdXl9WZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3OEhYaHiImKi4yNjo+Ck5SVlpeYmZ
qbnJ2en5KjpKWmp6ipqqusra6voRAAICAQIDBQUEBQYECAMDbQEAAhEDBCESMUEFURNhIgZxgZEy
obHwFMHR4SNCFVJicvEzJDRDghaSUyWiY7LCB3PSNeJEgxdUkwgJChgZJjZFGidkdFU38qOzwygp
0+PzhJSktMTU5PRldYWVpbXF1eX1RlZmdoaWprbG1ub2R1dnd4eXp7fH1+f3OEhYaHiImKi4yNjo
+DlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+v/aAAwDAQACEQMRAD8A9KaVpWlnS7MmzgJMEdT6
afyD2xVFfonSv+WKD/kUn9MVd+idK/5YoP8AkUn9MVd+idK/5YoP+RSf0xV36J0r/lig/wCRSf0x
V36J0r/lig/5FJ/TFXfonSv+WKD/AJFJ/TFXfonSv+WKD/kUn9MVd+idK/5YoP8AkUn9MVd+idK/
5YoP+RSf0xV5L/zjFaWl1+Wjy3MMc8v6Uvl5yqHagl2FWB6Yq9a/ROlf8sUH/IpP6Yq79E6V/wAs
UH/IpP6Yq79E6V/yxQf8ik/pirv0TpX/ACxQf8ik/pirv0TpX/LFB/yKT+mKu/ROlf8ALFB/yKT+
mKu/ROlf8sUH/IpP6Yq79E6V/wAsUH/IpP6Yq79E6V/yxQf8ik/pirv0TpX/ACxQf8ik/pirv0Tp
X/LFB/yKT+mKu/ROlf8ALFB/yKT+mKu/ROlf8sUH/IpP6Yq79E6V/wAsUH/IpP6Yq79E6V/yxQf8
ik/pirv0TpX/ACxQf8ik/pirv0TpX/LFB/yKT+mKu/ROlf8ALFB/yKT+mKu/ROlf8sUH/IpP6Yq7
9E6V/wAsUH/IpP6YqhdV0rSxpd4RZwAiCSh9NP5D7YqitJ/45Vl/xgi/4gMVReKuxV2KuxV2KuxV
2KuxV2KvH/8AnFn/AMlfJ/21b/8A5O4q9gxV2KuxV2KuxV2KuxV2KuxV2KuxV2KuxV2KuxV2KuxV
2KuxV2KoTVv+OVe/8YJf+IHFXaT/AMcqy/4wRf8AEBirzvTrnXNTjaZ75vVC27Su8t4vJ57WG5bg
ltc2kcaL6/BV4k0FSxJzUa3tTwcnBw38XHyZ+E1S367qX6ZOieo31n6uLwX31vU+Hp8zGY/Q+t15
cqHn6vT9nK/5Y/d8fD/FXPy9zH8x6bpdqNxqmmpDJLM12LiZLZI0u9TgIeY8Ucsbyeqh6chx6d8s
0Xanj5RDhq/NY6mzyRBtdbAJF8CewM2qCv0/Xz+rOj/Kea/mPJC6Xd6nq2nw6lbzNaQXI5xW8l1q
c7otSBykF5CGNN/sD+OCOmsXbKWejVK2kvqep6jqGmpO1vLpfpetcm61ORZvrCl14xfXIzHwAoau
/L2yqWGjVsJ6rhA25qt8mp2WradpT3DTy6qJvRuRdanGsJt1V2LR/XJDLyUkCjpQ+OYHaOo/LYjk
ript02bxTVUv1e21LSNOn1O4u2uoLUCSW3juNThd0qAwWQ30oU06VQ5odP7ReJkEeCrPf+xzDhoc
0Wug62VBbUQjEVKCXVHAPhy+vpyp48R8sqPtOf8AU/8AZfsT4Pm8t/5xw03Urv8AL6Zobz6ukep3
iFfUvviIcEtSG7tkH2qfZJ71zN7Q7b/L5BDg4tgedc/gxhjsPQ+Op/p/9A/WG9f6r9e+vfWtT4en
6npel6H1yvLl8XP1fbj3yn/RD+68Tg/iqr8r7k+FvTtXXU9INj6tw13+kLqOxjC3Wpwem8wbhKSb
ybmqld0oK/zDL+ze2vzOXw+Hh277/QwzR4ImSNutG1m3tZrj9Iep6KNJ6fq6onLiCePL6+3GtOtD
8s6Pw3XDW+SWWMuqajZwX8Fw1tBdxrNDA9zqczokg5KGkF7EGbid6KMujpbF23HPR5Kdld6ne3t9
YpK0Mmmukc07XepyLM0qCUFYxeR+mFR1G7tU16ZpO09d+WmIVxbe5EtRVbNXd7qdpqdjpjytNNqf
q+jci71ONYfQXm3KL645k5g0FHSnXfpmHDtm4Slw/TXXv+CBqbBNK97LqOmxJd3Vw9zbiaGOWGK5
1OFys0qxEq7XsoBXnX7O/Tbrjp+2PEmI8NX5/sWGps1S+2h1m4t4rgXfpCZFk9L19Uk48hXjz+vR
8qVpXiK+AyuXblGuD7f2IOq8l5s9bAJF6HI3CGfVEBPhy+vvSvjxPywDt3+h9v7EfmvJkulaRpmo
aXZ36vfxrdwRzrGdRviVEqB6E+t2rnQhzEgstN1e9t/rUd+YYpHf04ml1N2VVcqoZxqCcjQbniPl
nLan2hljySgIDY97eMVhQsLXWrzUtSsfr3pnTXjjaX1tUb1DLGJuQX6+vDirhaVapFdq0G/7M1H5
nCMhFXbg6nN4cq5obWTrem6rpmnC8Ep1MzUm9fVF9L6ugc/B9fbnyrT7S0982McVmmqGpMgdlR11
i3ltWmvPVhlurW3lRJtUjbjcXCQsVY37gEB6j4Tlk9MIi7bIZ7NUynWdJsNO0e+1BWvpWs7eW4WI
6lfKGMSF+PL1WpWnWmYU5UCe5yEq/QGtU/46Yr4epqn/AHkM5T/ROf8AU/8AZfsb/B80DoKajr2k
watb3DWENzy4W0l1qdyy8GKNWUXluDVlJHwdM67EOOIl3h1uXVcMiK5KLyan+lbrSVmZZrJY5Zbs
3epssizg8AsP1tShUo3I+o3bx2vx4OLqmOpsXSjfXmp6fJaRSyNcNqE62sDrd6nCIpGBfmym7l9R
eCN8IK7038KNcPAxGfOmQz7HZWv/ANMWFlcXz3hlS1jaZ40n1KN2WMFiFZ7ydA1BtyjYeIOc/j7b
4pAcHM9/7GA1Nnky60uLqfyrdfWpfXuIFvLaS4KqpkNtJJB6jKoChn9PkQoAqdhTN+5aZaT/AMcq
y/4wRf8AEBirynTdeGmIYfqF5ferBYS87KFplSunWycHb4QH+DlQV+Eg985rtXBxZr4ojYc3Czxu
XNS/TE3+ITrv6Lv/AEfqosfqf1Wb6xX1DKZacfR4dF/vOVf2aZi+FHwuHjjfFf2e5r4Rw1Y5t6j5
kXWre0+pafeiOKeG8W4eB3hcQ/vBGr24n+JiAnT4TXlQgjMjQ4hp84lOUdvNMYcJ3IRR88Q8/SXS
NTNxQn0Db/GAKUZkDF1QlqBuNDvSpU07TBrceUXD1BPB5hBaP5hXRNLtNKubC9lkgpBHPFbusUzF
qIIvrAgkZm5fY4V69QK5YMnCBYKZRsk2Edo+uTaPqWr6xeaVqH1XUhCwRbaQPAtshRmuDII4lU15
ArI232uOUTnZJaskRKgCFa+8wvqWs6PrNtpWo/VdMW4Zka1kLzi5RY1NuYxJGwAqxLOoI6E1zmu2
NZgzYTjjOIlfXyLm6PTzxysr9Z81R69pF5pVppmoxyTj6vLPJbM8cDchyEwhM0iso34ceVKGlCDn
NafRjFkhOU4Vz59Pk7Aysckt8x/nvonl7ULPS77y9rs2qXsbSw2lpZiRmWP7TIJJIWZRQ78fmBgx
dkSyAyjPHwjrZ/Uk5K6MY/IvWb3yl+X0kevaHqdp697dXqu9sY1WKUjh6jTGIKzcfhHeopUmmZva
WmGoz+icD6QOfcwgaG4ZsdduB5o/xB+h9T+rfUvqBtPqk31nl6vrepTj6Xp0+H+85V/ZpvmH+Xj4
HB4kOLivme6u5le/JZq/mQeYI9Mm0/Tb4w2N7Ffmdrd3ilW3DVjie3E4Z2Y8RWi9asKZuux+x82D
MMkq4a6OJqc8DExvdHX/AOYNrNBc2SaRqgumjaMxtbboXX4WlVGd0VuWx470NK0OdeLPIOqjhPOw
kun+Z49K06002fTr+R7SKO2SaO3dUnMYWNTEJvRkYt9rhx5AVPRSctnqI4oXPYByJQsk2Flhrraf
qGp6jPpt96GpSRSgC3kQwCKNYW+sNKIolFED8ldgAfiIpnI9rShqsoOOUeVbsZRugCFl1rrajqmk
6zb6bf8A1bTxMxja2lMk63UYRTBwV4yF+0ebrt0rmBDAIwlEzjZrr3H3KI0CLCvfeZ4NatvqVtYX
0f8ApEHrXD27vHEYZ0kkWT0PWdXCp9jjWtK064cGnGLJGUpRrnz/AGLCHCQSQr2XnCOG1htpdK1A
XESRxmL0lDuSrbxRu6SOv7ttwm3emVnRGVyEoVfex8K97Cu/nIqjEaHq1QCRW1oPwY5EaP8Apw+a
+H5h6H5dtxb+X9MtxKk4htIIxNEeUb8Y1HJD3VqVBzsxydkwjTtY81W9sYLLy+L6zjlmWC8F5FF6
qCVgH9N15LXwOcBrsGE5pXkrf+aXKiTXJCaTq/miPWdZlt9CFzdTyQve2gukj+qusQjRDI68JecS
LJVOnLidxnY9hxEdMBE8Q335dXVa8Az3NILzLqnmSbXdEnudGW1vLc3P1GxNyshuucYWWkqLwi9J
fi+P7XQb5uYE8Q2aMUY0d1b9J+ZJ7vTor3RRZWzahYc7n60kvGl5EVHBF5HkwC/Tl2WR4Ts24wOI
bvRPNo5eVdZHIJWxuRyavEfuW3PEM1PkDmsyC4n3OcGO/wCLLmlf8PatTr/dQf8AVbPNvysf9Uh/
sv8AiXL4vJJfJGuzWHliys49LvdRSIPS8skUwPzdpPgM7QOePLi1UHxA56dp9scR5B0GohczuELJ
rsq+ZtRu/wBF3jvcxwRNZLGv1iEQKSHlBYRBZfWPDjIa8W8DTMwy3OzKEPSNwhta1qS4m02STT7u
0+pXa3SpcIOU5CtF6MAiMvKUiXmFamynwzD7XHHp5Dl5nkzEdjuiNU8zi9027s/0XqNp9ahkhN1d
W5jgi9RSvqSuC3FErVjTYZxmDS+uPrhzHVhHHuNwz2w/5RnUv+M+q/8AUXPnYuxTXSf+OVZf8YIv
+IDFXmmg6tpdlC8V5eQW0jRWLqk0iRsUOm2o5AMRUVUivtnL9r4pSzWATsHB1ESZJmfMvlwCp1Wz
p/zERf8ANWavwMn80/Jo4D3MX8qebvKmieWtPsda1qx0u9VHZrW9uYbeUK8jMpMcrKwqrAjbpmXq
9NklkJEZHl0PcGzJCRPJQX8xPy//AMZ3Fx/ibSvQOnQxib69bcC4nlYqG50qAwNM6X2eiceOQmOH
1ddujIQlw8urvMX5ieQJbjQzF5m0qQRaraySlL62YIiluTtR9lHcnN3mnEjY9V4JUdujJPMv5nfl
rL5d1WKLzZo0kslncLHGmoWrMzGJgAqiSpJPbKDIOPDFKxsVvlz8zfy2h8vaXFL5s0aOWO0gSSN9
QtVZWWJQQQZKgg55hqNDnOSREJ/Uf4T3vRCQrmoeS/PvkafUPMEUPmLTJJJ9TkmhRby3LPH9XgXm
oD1ZaqRUbZPV6TNww9Etodx/nSWMhuxDzn5n8txf85BeR76XVrOOyh0+/Sa6e4iWJGkjkVFZy3EF
mNACd8zNNp8n5LJHhlZlHaixJHEGdfmBruiXnlHULa01C2ubhxGUhhmjkchJVdyFUkniilj4AE5h
9n6fIMwJjLkeh/mllMilef8AN38rreZ4ZfNelrLGeLr9aiNCOoqGIygdnagi+CXyKeMd7HPy+/Nn
8s7PyhYW135n06C4T1ecUlxGrDlM7CoJ8Dnp2A1AA9zoM+KRmSAhj+av5bf4t1e5/wAS6d9Xlgs1
il+sJxYp6vIA13pyFcy8M4i7LKGOXCNlDXfzS/Lia40gxeZNPcQ36SSlbhDxQRSAsd9hVhmD2z+8
05jHcshjlR2Revfmv+Wsuh6jFF5m055ZLWZURbiMlmaMgAAHqc43Bo8wyRJieY6MYY5WNkx8n+cv
KN35a0022tWMvpW0MUoW4iqjpGoZWHKoI8DlWfT5BM+k8+5jKBvkpeU9a0e3/TH1i+t4fX1O5ng9
SVE5xPx4yJyI5I1DRhscs1OGZ4dj9I6JnE7bdERLqumXHmqzmgu4ZYUiMbypIrIHcSFVLA05EISB
7YxxSGCVg/UP0rwnhLKMwWpOvJ//ACiWif8AMBa/8mVzv4cg7YJBpGr2NlYra3TPDcQvKskbRSAg
iRv8n7j3zgNdocxzSIiatzIyFITR9UtLfXNcuZxLFb3ssElpM8MyrKsdusTFCUoaOhH9hGdj2Fjl
j0wjIUbP3up18TKdjuQXme+guvMOgXtss01pYm6+uTpDMyRetEEj5sFoOTCgzd45DiDRixyAOypP
f293LYwWwkllN/YtwWKSvFLuJ3Y/DsFVSSewy7LkiYndtxwPEGaebgT5U1oAEk2FyAAKk/uW6AZq
so9B9znBKv8AFXlilf0xZU61+sxf81Z5n+Vy/wA2XyLmcQSD8v8AXNFsfKNhaXt/b2l1EJPUt55U
ikXnK7ryRyrDkrBhUdDXPUtLtij7g89qYE5DshX1vRl82ardNf24tZ4bSOC4MqCOR4RIZVR68WKC
VOQB25DxzNwyG7KETwjZD6zqmmX1/oUVldw3UkeopLIkMiyFYxDKhdgpNF5Oor4kZgduSB00mVGj
7k58yf8AKO6p/wAwc/8AyabODwf3kfeGqHMMjsP+UZ1L/jPqv/UXPneO1TXSf+OVZf8AGCL/AIgM
Vea6Hpun30BkvraK7eKGxiiadFkKRjTrZ+C8weK83ZqDuSe+cx2vmnHNQJAodXB1EiJc0z/w55e/
6tdp/wAiIv8AmnNX+ZyfzpfMtHHLveX6f5X8t3v59eYLW80q0ubWLRrV4reaCOSJHaQAsqMpUH3A
zYz1GQaWJEjfEercZngG/VkXm/yP5LgGjfV9B06D1dUtopfStYY+cb8uSNxUclbup2y/sTPOeoAl
IkV1KMc5b79Ez1LyB5EGnXRXy5pisIZCrLZwKwPE7ghAQflnbnHGuQUTPemHlP8AL3yFceVtHuLj
y3pc1xPZW8s00llbu7vJErMzMyEkknMMAU0ZMkuI7lC6Z5D/AC+XXfMC3Pl/Svq1tNbrCstpbmON
Xt0chAy8V5O5O2cX7RajLDOIwlIbdCR9zuNFvjBLF/PXlLyfZfmb+Wn6M0bT7aG7u79ZxbW0MaSq
tqGXmEUBwDuK5haPU5Tp8xlKRIEep23ciURYX/8AOSnlPyvH+UWtalFpFnFqFl9V+qXccEaSx+pe
wI/F1AI5KSDg7F1WWWpjEykQb6n+aVyRHC9I0vyx5aOmWhOk2ZPox1Jt4ifsD/JzWZNXm4j65c+8
sxEPNfyB8reSZvye8v32qaTp0tzci5Mt1dQQO7sLqVRV5FJPwqBmz7X1OYaqcYykAK2BPcGGMDhZ
dD5L8nnzvc2h0SwNommwzJbG2iMQlknkRnEfHiGKxqK07Z0Hs1llkwyMyZerrv0Dr+0SY1WyF8++
TvKVpbaQbTRbG2M+q2sE5htoo/UicsWjfgo5I3EVU7HOkjEWHCw5JEnfopeYPJ3lGHQdSmh0Swim
itZniljtoUdWWNirKyqCpB3BGZUsca5NsZm+apoHk7yjPoenTz6JYTTy20MksslrC7u7xhmZmZSS
STUk55tm1OXjl6pcz1LXKcrO7EPy28vaCv5h/mLajTrb6tBeWPoQGJCkfO2LNwUii1PhmTqs+Tws
Z4jZB6+bZkmeGO7Mb/SdLj8x6TZx2kUdncx3UlzaqirDI8IQRM8YHFinqvxJG1cohqMnhS9R5jr7
2AmeE7qHnnRdHtvK97PbWNvBOnphJYokRwHlVGAZQD8SsQfEHJaLPM5QDIke9OKR4huy/Ne0p15P
/wCUS0T/AJgLX/kyud/DkHbBN8kl2KuxV2KpT5uJHlTWiCQRYXJBBoR+5boRleU+g+5ISr/C3ln/
AKtFl/0jxf8ANOeZfmsv86XzLmcISH8v9E0a+8o6fdX1hb3d1IJBJcXESSyNwldF5O4ZjxVQo36C
mep6bfHEnuDz2pkRkO6FfRdHbzXqtm1jbtaW8NpJBbGJDFG8wkEjIlOKl/STkQN6DwzNwxG7KEjw
jdDazpmm2N/ocllaQ2skmopFI0MaxlkMMr8W4gVHJFND3AzA7ciBppMrNH3Jz5k/5R3VP+YOf/k0
2cHg/vI+8NUOYZHYf8ozqX/GfVf+oufO8dqmuk/8cqy/4wRf8QGKvLtLsNTu4+dlqT6akcFhG8cU
UcnqMNPt29RjMJKNRwvwUFFG1anOa7WyxGWjEHbz/QXC1EhxclLzInmbRtFudSTXpZ2gApE9vbAE
uwQbrHXYtX36e+YWnljnPhMB16y7ve1wMSapJ9R/KvzK3mqbzPo/nKfTNUurZLS8kaytrgSRxmq/
A9EWlB0X+OSGuhwcEsYMQb5lfFFUQlGmeTPzL80aLYahefmDKnGU3EMS6XZDhLC7xq3JOFfHfMka
zHpsp4Me468RZGcYmgFceVfzTvdT1PRpfzElEVvDCXkXSrFS63QkBHwgFePp9Qe/amdR2ZrJ6rGZ
H070kSjV0iR5a/NnSBpOm2v5jyi2uLhbKJTpFgfSX03cU5BiQoj4ha/qpmVPEYjmxlwGzw/ara1+
Vf5iQaZrF7c/mEb5JYjc3ltc6Lp80czWyl0qkvqIKUoCF228Bmv1HZ2LLLjkPUOtkfcQyxayqiBs
35c/KPzNfS+WvMGqecpJxpUBuNJsrbTbKzit3uohzosS8GHFqbpnE5e0sceOEcY9R3uUjdfb9ruB
A87R2r+Tdd/MPyvr/l7VPMk0Vqt49iStrbkN9UkSVJGCrG32lFQrDEarHpskJwxi+G+cut+a8JI5
sc0aL8z9A/NfTPI1955m1SxvdJkvRP8AULaJo/SdkVArevX+7+1Xv9OXTlp8mnlmGIAiVfVL9FIF
g1btU/JjzL5a8rJY6f5xE2hWNwosNMvtH0+9EP1u4WM8ZLlZW2MvI0Ar7VxxdpY82W5Y6mQbInIf
SL6e5TAgc2SR/ld+aMWoNqMf5mTLeNELcv8Aoex4+kpBVAleAAIqKDufE4dL2/HBHhx4qH9Y/pDX
l0wn9W6V6X5E/NDzfoOn6lf/AJjTIFmNxBCNJsaJLBKyI3JPT5fZ7jO5xkkA26iU4wkQI/ahJvJ/
5oX2qa1oFx+YcrW9rHFHI40mxUyJdRFmHwgFaDbY5kw45Xu2RnGgac3lP80tMudJ0m3/ADDl9C5L
wRk6TYn01hiMg+0GLbJx65oO0+zsGDGcnDxG+8jn8VJibNJhof5ea15Uj1zXG8z3F/qmot9d1OZr
a3QTfV1PFFQiQR/DVQV2G21BTNGNVDLKEDAcI2G56seMSIFbJ3YaFq2pWtjq82syi9eJZbeURRVh
WZKtGqgCNgQ1GLIa0B2oKVT1EImUBAVfeenxQZgWKRc3ljVLpBFf61JfWtQz2s1vbiNypqvP01jY
gMAaVp45HHq4wlxRhG/fL9aI5ADYCnd+W7iCzmlTUbhmijZlV7i9IJVSQGpcq33Gvvk46uBI/dw+
1IyDuD03SxCNMtBDEIYRDH6UK/ZReA4qPYDbOxdiisVY9eXmsT6xdWtrdJaW9okVB6QkdnkDMxLM
1KUoAAPHfwnCFuLnzmBoLtOvNXi1yGxu7pLqC4tZ5wfSEbq8EkKihVqEMJzWo7DGcaTp85mTaf5B
yUq81sF8rayxRZAtjckxvy4tSFtm4FGofZgffIZT6T7khjQ8oXnGh8y6v0pX1Lb/AKoZ5t+aj/qc
P9l/xTl8Pmk3krQJ9R8tWd7Fq17pkcoYLZWLoIE9NzGSouEuJPjKc2+PqTnp2n3xxPkHQaidTOwQ
r6DMfMuo2f6UvRJbRwStfCRfrEwnUgJKSpiKxeieHGNacm8TXMwx3O7KE/SNgoazor282nRyX91e
C8uktke4f47diDJ68Bh9HjKFiKAsG2Y9qg4fa54NPI/V5HkzjPY7K+q+WFs9Mu7w6pqF0LaF5vqt
zcNJBL6al/TlQBeUb0oy13Gcbh1YMx6Icx0/awjk3GwZ7Yf8ozqX/GfVf+oufOwdimuk/wDHKsv+
MEX/ABAYq8q03UNctVKabpX6ShaCweWX147fhIdOtgY6PyLfCqty2+1TtnNdq44HL6pUa7nCzgcW
5U9efzZrOk3Gmy6C1qk6/wB8l1bzMCh5qAhaEHkygH4thvv0zD04wwnxGf8AsT3NcOEG7TXT9V83
anZpfaZ5fS8spa+hcrepGr8TxaizRxyCjAr8Sjp4UOZo7Dkf4h8mz8qe9A+X4PNekW6eXrfRhe3V
kHaTlcRW78HYSB2X97GATKVAWVj8JJptl2fseU5mXFzZz05Ju0TBpHnyDVbzUx5f5yXyRRvbm7t1
WNbcNwIk5NzLmVqjgvGg6123PZeP8tjMTvun8vtVobUbrX5JNHuX0xPrENxPcxWUU4dzJYv9VmSV
3WGNADMaMheppQUqRsvEOTYBMdIZAgFG6j5m8z6hYXNg/ltoI7uJ4HnW7gkKLIpRnCH0+RUGoXkK
+IxOGfciPZswQbWaX5l81WGmWlgPLRmFpDHAJfrkCc/TQJy4/FxrStKnONyeyOaUieMbl2wEu5D6
Lq/mfSfr3DQGuf0hdy3z1uYIvTealYhRpOYXj9v4a/yjLdR7K5Z8NSHpiB8kASHRgmr+Y9fb/nIP
Qr9tDK3aaHPElj9aiPJPVkJk9WnEdelMsj7O5I4Dg4hxSlxWwN8XJn2t635n1jT3sZPL7WqM8cvq
rdQTHlA6zIvEmLZnjClq7CpoemVaf2Uy458RkOR+0EMyJHojj5z82UNPKxr2rfQf805R/oPzfzwn
1dyB8taxr+h6fZaL+hfUgWcQR381zFCCbmciMvFF9ZZfilC/CW8c7EYpQjuOTqs3Z8iTK1SGy84N
req6vZaKt4t9KIJFW5iijRrEtbng8lHkDMrfajSnbkN8cefhvZiNOQALWajZ+c/rFrq15ogtINJ9
Sd/9KhlUq6em7OyHmixxsz/BG5NKAZidpR/MYuAbJ/L7EWr/APO56zpfFPL/AAsdRhoLpLuB2EEy
/wB4sT+iSeDVCsV96ZosPYsoTEuLkbYx0xBu0PoFz5uaxFlYaALtNKY6fPKbuKI+rbfAQyMDuVCt
8LMu9ORIORydiylIniG57lOmJPNVvNc82WdzHaXHl5Uu5qNDB9djJdaMWYMEKALw35MDuKV3pjaj
srwo8Up7e5rng4RZKheat5ymtJ4V8tUMkbID9dgO7KR0oP15hxxYgfr/ANiWsRj3vTtGlgl0exlt
3MkElvE0MhHEsjICpKnpUds7UG3ZpZF5saZTJb6PfTQ8nVJlNoFcIxXkoe4VqGm1QD7ZqsvbenhI
xJNjybBjJY5L5i1p9f1FtK0OW7YLAl5DPPBbvBKFYqvIPMkgeNlf4TtWh3qBtNHqY5occN4l12sg
OIWaWR+a9TtPMdjLrOiTWkstvc29jbW80Fy07M0MshLl4UjEaw/tH4uW3TfJMTI0GOmMY2bZAPPE
QlgSbSb6BJ5obcSv9UKq08ixIW4XDtTk4rQHBLBICy5YyxJpMvM8cUnlrVo5ZfQiezuFkm4l+CmJ
gW4AqW4jeld8xsguJ9zYGJrr/nYqCfKpBpuPr9v/AEOed/l9N/qp/wBIf1uZZ7kD5ffzdoOkW+lQ
aA99Fbg8bl7m2t2YuxdgYw84FGYgfHuM67F7QaWERGzsO51mXQSlIm+aWtq2tnzBqNzFpJl1KRYY
b/TfWjUWyxJygf1yeEvrCVzRV+Hjvm97P1kc8OPHvH5NUsAxiiVO8vtWutR0hdT006bEl4jwN6sc
4kl4MoQlCCn7tnb7O9Oo709tGR00rDChRosg8yf8o7qn/MHP/wAmmzhcH95H3hphzDI7D/lGdS/4
z6r/ANRc+d47VNdJ/wCOVZf8YIv+IDFXnWgyy2lqPVtLxlnhsZYZIbS5nRk/R1tHUPDG6/bjYUrX
bOb7U0mXJluMSRTh58cjLYJkdUQCv1PUP+4dff8AVHNd/J+f+aWjwZdyI8g340fylYabqNpfQ3lu
JBLGLG7kA5yu4+KOJlPwsOhzs4jYOyCraalHH5svdSe1vhZ3ECwxSfUbwkvHwLAoIuQHxbEih3p0
OSSnf+JtO/3zff8AcPvv+qOKsQvluo30y8NleNA76wfgtZ5JFFzfJNDziRGkTnGpYclHvvmTppiJ
Nt2CQB3a+vn/AJYdR/7h97/1RzN8eHe5Pix73fXz/wAsOo/9w+9/6o4+PDvXxY97vr5/5YdR/wC4
fe/9UcfHh3r4se95nq93X/nIHQZPqt4KaHcD0zZ3QlP719xEY/UI9wtMpOWPiA3tTWZjjBt6Z9fP
/LDqP/cPvf8Aqjl3jw72zxY97vr5/wCWHUf+4fe/9UcfHh3r4se9Y0k93cWMMNjfc/r1nITJZXcS
BIrqOR2Z5IlRQEQnc5XmyxMSAWGTJExO7JtI1e3sbe4trm3vVlW9vW+Gyu5FKyXcroyukTKwZWBB
BzWuGt1/Wra+0LUbK2t757m7tpoIENjeIDJKhRAWaJVUcm6sQB3xVry7rlraeX9Mtbi3vknt7SCK
ZPqF6eLpGqsKiEjYjFUv8oaimn/pr65aX0X1zVbq7t/9BvG5QyFQjfDEaV4nY74qhvMd2115jsdQ
t7O+ktLeJopnFjdghpA5WiGLmR8O5AoNq9Rms7VwzyYqiLNtGeJMdmzqiAEmz1Hbw06+P6oc53+T
8/8ANLh+DLuZX5Ztp7Xy3pVtcIY54LO3jljPVXSJVYH5EZ2ceQdkGPaTqKWVitrcWt8s0LyK4Wxv
HWokb7LpEysPAg0OcJrezNRLNIiBIJcuMxSF0i9Ntret3U1lfpb30sElq/1G7PNY4FhaqrEWWjxn
ZgNtxsQc67sPFLFphGYqVn73Va6BnO47oLzNPPeeYNBvbawv5LWwN19bk+o3YKetEEjorRBmqw/Z
Bp3pm5hMCQacWKQBsKk88t1LZQw2V9z+vWLkvY3cahY7uJ3ZneJVUKqkkk5dlyxMSAW3HjkJDZmv
mW2nuvLuq21uhknns7iOKMdWd4mVQK+JOa2Y9JcwJQNetCARbahQ776dfD9cOedfyTqf5hczxI97
f6dtf+Wa/wD+4fff9Ucf5J1P8wr4ke9i0LXMXmbWtRewvxZ3/wBWFpILK6Yt6EXCSqLGXSjNtzA5
dq53ns7A4dPw5PTKy6/Vgylss1prq7n0t7fT9QdbO9S5uK2N2vGII8ZI5RLyPKRfhWppvSgOZna3
7zTyjDeTijHKjsi9auZLrR761gsb9p7i3liiU2F4oLuhVRyaIAbnqTTOOw9n5xMExPMMI4ZXyZTY
f8ozqX/GfVf+oufOwdimuk/8cqy/4wRf8QGKoC38ttaRLb6fql5Z2ce0Nqn1eRI17IhnhmcKP2V5
UA2FBiqp+htR/wCr9ff8BY/9k2Ku/Q2o/wDV+vv+Asf+ybFWIXPmq+hW5vkudXl8vWUskN1q6DTd
hCxSaeOD6v6jwRMrBmHxGhKqy0JlwmraTniJcLLl0i/ZQy6/fMrCqsEsSCD3H+jZFub/AENqP/V+
vv8AgLH/ALJsVd+htR/6v19/wFj/ANk2Ku/Q2o/9X6+/4Cx/7JsVd+htR/6v19/wFj/2TYq8m1zT
bwf85M+XITqt00jeXrlhclbX1FAmk+EAQCOnzSvvir1n9Daj/wBX6+/4Cx/7JsVd+htR/wCr9ff8
BY/9k2Ku/Q2o/wDV+vv+Asf+ybFXfobUf+r9ff8AAWP/AGTYq79Daj/1fr7/AICx/wCybFWOatqW
vRarLpOjXd9qd5axpNfO76fbQQiSpjjMhs5WaV1UsFC0AoWZaishElqyZow5ppoX1nWdLh1CDWtS
hWQukkEsdgJIpYZGimifjbsvKORGQ8WIqNiRkWwGxaP/AENqP/V+vv8AgLH/ALJsUu/Q2o/9X6+/
4Cx/7JsVd+htR/6v19/wFj/2TYq79Daj/wBX6+/4Cx/7JsVd+htR/wCr9ff8BY/9k2Ku/Q2o/wDV
+vv+Asf+ybFXfobUf+r9ff8AAWP/AGTYq79Daj/1fr7/AICx/wCybFXfobUf+r9ff8BY/wDZNirv
0NqP/V+vv+Asf+ybFXfobUf+r9ff8BY/9k2Ku/Q2o/8AV+vv+Asf+ybFXHRL9gVbXb8qdmAWzUkH
/KW3Vh8wa4qqXFja2Hl6eztU4W8FtIkalmc0CHdnYszMepZiSTud8VV9J/45Vl/xgi/4gMVVbu7t
LO1lu7yaO2tYFMk08zBI0RRUszsQFA8TiqC0XzP5e1wS/ojUYL4wcfXWFwzIHqULL9oBqGhPXCRS
AUzwJYX5MjQ+W/qMihls7i90+RSNmFtdSwVI/wAtU5fTmRHk6jOKmUy/LyV38k6NHIS01pbJZTsx
qTLZ/wCjSknx5xHKC7WJsWmPmLWI9F0HUNWkQyLY28k4iHV2RSVjX/KdqKPc5GRoWyYJe6FLo+nW
OsNeTy+ZlvbEXV/60hFxLdXUUEsBjZinoP6pRI6cU2K0Ycs4zRdp5surG/pkeXk5EoARemZ2jjux
V4/rv/rUfln/AMBy6/5PSYq9gxV2KsK8zWFprHnC20vVoxc6ZFp73UFhLvBLMZhHJI6H4ZDEvALy
+zzr1zm/aDVZcYiIExHl8W7FEFF+TJZbK91Ty5LLJNFp5hutNaZjI62V0GCRGRiWf0poJVFdwnEZ
seyNYc+ASl9Q2P49zDJGiyrNmwYd5WPrvreoH7V7q15WvX/Q2Gnj/hbMZfDk6nUm5o38vwW8vvdE
U+u31/cofGOS8lMLfTFwOUy5uzxiogeSeahqFhp1nLe6hcR2lnAvKa4mdY40XpVmYgDAzQWi+aPL
+tvNHpd7Hcy24Vp4RVZUV68GaNwrhWoeLUoe2EikAprgS7FXYq7FXYq7FXYq7FXYq7FXYqhNW/45
V7/xgl/4gcVdpP8AxyrL/jBF/wAQGKpD+ZFjcXHlv6xDE1z+jLm31Ca0UczNDbSB5VCA/E6JWSNe
7quTxyqQJYzFimM6hJKBY+aNEH1q8sV9aFYiP9Ms5QGmtwa0PqpRo67CQKelcz8sOOLh458JejaZ
qVlqenW2o2Mons7yJJ7eZejRyAMp39jmtc5jOij0Nf8AM1l0Vb6O6hTpSO5tIWY/7KdZTl2Pk6zW
D1IjyKTFFrWnEf7watdAHx+ucNR/7Hcrnzc3Tm4BZ53k+tXOiaEp/wB7rxbu6A6i204i4LfI3Agj
b2fNR21qPD00u+W3z/Y5OMWUPqqfXfMvl7S/2Fmm1S5Xs0VigRR9FzcwP9Gc97OYOLMZ/wA0fe3Z
jszLO2cZ2KvH9d/9aj8s/wDgOXX/ACekxV7BirsVYr5yT6rqvl7WB8Kw3b6fdP4QagnFR/sruK3G
aTt7Dx4Ce78fdbZiO6hfyfo/zZoepVpDdmbSbrbb/SFE1u7H/Jlt/TX3kzU+zWoqcsZ6i/l+PsbM
w2tl000cMMk0rcYolLux7KoqTnYuOSwTy9efor8t7bVblaSR6c2p3a/8WyRm6m/4d2zIGwdNIcU6
82U+VNMfSvK+kaZJ/eWNlb28h8WiiVGP0kZju5Yjr14PMPmj6sp56N5dkBYfsz6nSvyZbRG+XqN2
aPMvTY+pcbPPoq+WozqHniS9gX/RdFtJbO4uB+3c3bQy+gD3EUcQdx4uncHBqpAmk6eO1s+zFch2
KuxV2KuxV2KuxV2KuxV2KuxVCat/xyr3/jBL/wAQOKu0n/jlWX/GCL/iAxVF4q83ex/w55jk0anH
SdSMl3oh6LG9eV1Z/wCxY+rEP5SygUjzN02S/SXFzw6ojyjf/oHzBJoEx46VrDyXWjMfsxXZrJdW
g9pKNcR/89B0CjK9Rjo2zwzsUmkw9D8wbuv2b/SrYoNvtWdxOJD8yLpBv4ZXjaNaORXaGwtvO+sW
v2UvrO0vYx/NLG8tvOR/qosA+nBkG7LRy9NKFrJ+kvN+rajXlb6cqaTZnYjmv7+7dSP5neONveLO
K9pNTc44x/Dufi7TCNrVfLym786a3eEVi0+3tNNiJ/ZmYPd3FP8AWjmt/uzYezmHhwGX84/cwzHd
lmdC1OxV4/rv/rUfln/wHLr/AJPSYq9gxV2Ksf8AP1nPd+TtWW2XleQQG7sh/wAvNoRcW/8AyViX
KNVjE8cgeVJid0u1q3bXPK8h05x688Ud5pcrfZFxEVuLVz7LKiMc860eY6fPGR/hO/3H7HLkLDfm
fXIdW/LK4v7ItH+nLOO1tP545dTK20YanRkknAYdiM9Nju4GQ0CVPzrFGfK1xYKoWK/e20zgNhxv
riO0p22pNl8uTq8AuYTDzz5iudJ0uO204qdd1RzaaUrDkEkKkvcOv++4EBkbx2XqwyrHDiNO1nKh
bEZ0bQ9Hs9J0hfW1O6cWmmJMSxluZeUjzzEbsFo88zdSAx65sJyEIuFGJnJ6B5d0K10LR7fTLZmk
WIFpbiSnqTTSMXlmkI6vJIxZvc5rSbc8BMsCuxV2KuxV2KuxV2KuxV2KuxV2KoTVv+OVe/8AGCX/
AIgcVYzrPmDWLG20LS9I+rxXuoWzzfW7xHmhjjtkiDKIo5IGd3MwoPUWgDHtTMPW6vwIcVXu15cn
CLUrDz5e6fKlt5vhhtI5CFh1u15fUWZjQLOshZ7Uk9CzMh/nBIXKdJ2nDNtykxx5hJO/N3l867ok
ltBIsOoQstzpd0wqIruLeJzTfgfsyAfaQsvfNnGRBsNpFimE8YfMvl9S/OyuuQNVIM1lf2slDQ7j
1Le4jp4EjuDmz2nH3uBvGSiPzA09/NWirrsyWOuWmm6nb31ggZ2klaewZJLaIBpZI5ljZo+IPRlP
xI1MHh4JUW3UAziK70Vr3mLVE1PTtd0DQdU1G5s47u1kt3s57UPDdRq4P+krCwpc20HLavDkQD0M
ckgRsjTYpRO/JOvJkDW2gQWrxXKzw1a8nuoHgae5mYzXE4V/9+TSM3055v2pgzjKZ5BXF8ftdvAi
tkb5CUvp+p3zf3t7qt+ZK7/7yztYpv8A8Y7Rc7TsrGIaaA8r+e7jzO5TrVdY0rSLNr3VLuKztVIU
zTOEUsfsqK/aZuyjc9s2FMGOH8zNHJ5x6dqslp3uhZSqKdz6L8bk/RFXwy3wJ1dNnhS7mCXWp6fq
n/OSnlLUNPnS5srnyzdPDPGaqw9eQfQQdiDuDscqa2f3n5i6ZHeT2unWF7rBtXeK5mskhWFJYzxe
MS3MtukjK2zemWoag7gjLY4ZSFgM445HkjNE87+XtXu/qEMz22qcS/6OvI2t7gqv2mjWQASqvdoy
yjxyEomPNiYkc0/yBF7IYP5JLW/k+zt+DyNpaS2DIgLOTp8j2pAHdj6P055xqsEjqJRAsk/fu5kT
sx1U8yLfQ6ePL2ot5ei1VtZRisHNeSPKbbh6m9L5/XVq9Ph7DO97NjkhijHJ9Udv1OBqYmQIijvN
nnTQorWw/SX1nTI49Rspphf2txbJxhuUk+GR0EchUorcUZjmwlIEOFgwyjOyHaeL3VdWn8zapE0F
xcJ6Gl2Ugo9pY15BGHaWZgJJfD4U34A5mYMXCN+bPLk4imfkSzGq6ndeaJd7aP1NO0RT09JHpdXA
/wCM00fFT/IgI+2cxc+Til5ByMMKCbeY/Olrpdz+jLGA6rr7oHTTYmCCNG2WW6mIZYIz2JBZt+Cs
QRmBqNVDCLkWU5iI3SS18zec7TVdNXV5tOubTUrpbQ2lpbzQyxGRXZWSWSeYS8OPx/u1+EFhSlDh
aPtPxsnDw1s1Y8/Eapn2bVyHYq7FXYq7FXYq7FXYq7FXYqhNW/45V7/xgl/4gcVSq88uWGveXbC3
umkhlgjims7yBuE8Ewi4iSNqEV4sQQwKsCQwINMhkxxnExkLBQQCKLFrqfUdGmGm+aEjktbk+haa
0i0tLgv8KxXCEt6EzV48WPBz9lqngOZ1vZcsXqhvH7Q4OXAY7jk3p41zyuQNDX9IaGux0CVwrwj/
AJcZnNFA7QSHh/K0Y2Nmi7XMfTk3Heyx6itilVrdXnmLzvqun+WfX0+xuoYLzWbu5tpI5LG6IaKS
OJJV9J5po44mT7SCjyHlUBun0+rBhcTYLeYCZt6PoHlXQtBjkGm2qxzz0N1eOTJczsP2pp35SSHw
5HboKDATbaBSbYEuxVguleaLHy95NLzIZr1dRv7K206IqJri7F7OBGgYj7QHqFjsE+M7YYQvYJAJ
KU2um3t1fLrWvyLea0Q3oqtTb2aP1htFbpts8hHOTvQcVXaYcIgPNzceMR966wi1bzTPJDo0v1LR
onaK710AMzuhKvFYqwKsykUaZgUU7AO3LjVm1NbRYZM1bBjx0LTND/5yR8q6bpsZjtY/Lt6/xu8j
tJLcyySSO8hZ2d3YsxJ3JzAJtxCWX6z5Iv8ARDLqPlNDNaEtLd+XGaiMWJZ3sXY0hkJNfTP7tj/I
SWzIw6gx2PJux5SOaXU0XzJpgbeWJXNGHOG4t7iI0ND8MsE0TD2ZTmeRGY8nLoSCfeUfM2oRXy+X
tfm9a7YM2lamVCfW41BLRyhQqLcRruQuzr8agUYLrc2EwPk4WTHwnyTDyCVfy6bhAPRur/U7q3Yd
HhuNRuJopB7PG6sPnlAiBya2R4VWTQwzxPDNGssMilZI3AZWUihDA7EHFXmXnXypf+XNKvLzyzI0
GjSRut9YDlJ9QV9mvbFaOeMIJZrcDjQVQAgq90MxiKapYgTaKTXdQ1DS7XS/KUDaH5dhgjit9VmQ
C4aBFCotnbSA8BwA/eTrUf77P2s0Os7WjC4w3l9jDJqANghY20/RGTRtFs3vtZuyZxZo5eaVmNGu
by4fkVWo+KWUknovJqLmlw4MuqnZ+bjRhLIWT+XPJstreJrOt3Iv9bVWWERgra2ivsyW0Z3JI2aV
6u3bip450+l0cMAqPPvc3HjEeTKcy2x2KuxV2KuxV2KuxV2KuxV2KoTVv+OVe/8AGCX/AIgcVdpP
/HKsv+MEX/EBiqreWdpe2stpeQpcWs6mOeCVQ6OjChVlaoIPvirz/VNLvvJxNxGz3nlGo9QuWkuN
NXpyLGrS2i9yfji6nkn2NHr+yhP1Y9pdzi5cF7hnOlafYWdsTZpGBct680sYH72RlVfUJH2iVVRX
wAza6bAMWMQ7nIhHhFI3L2TsVdirHdT8naPJfza1a2ca6xID6lwB8TgqqsPAFliQEjrxFegpfp8g
jLdtxT4TuxSWxn8wa0vlyF3hs0iW5124QlXFs7MkdtGw3V7lkcFhuqK1KMUOZWpy8Iocy35slCg9
ItbW1tLWK1tYkgtYEWKCCJQiIiCiqqigAAFABmucN5Jrv/rUfln/AMBy6/5PSYq9gxVgHnzSRoty
/m+xHG2HFfMluK8XtwOIvAOgktxQyN+1EDWpVMydPl4TR5N2LJRTGy8s6frEBGq20d1YhgywSqGV
nQ8lah/lYVB8cv1WUAcLbnntTKba2t7W3itraJYbeBFjhhjAVERBxVVUbAACgGa9xFXFXYq0QGBB
FQdiDiQrz+/guzq3+F/K8cUTWscYursp/o2nQMo9NPTWgeYp/dwgii/E1F4hue/kcyzEyPo5+Z/H
e4n5e5b8mV+XPLOmaBZtBZhpJpm9S9vpjzuLmWlDJNJtU+AFFUfCoCgDN9jxxgOGIoBygABQTbJp
dirsVdirsVdirsVdirsVdirsVQmrf8cq9/4wS/8AEDirtJ/45Vl/xgi/4gMVReKtEAih3B6jFWM+
SZPqMd55WlNJtBcR2gPVtOmq1k426IitAT/NG2KsnxV2KuxVokAVOwHU4qxryKi3FpqGvBQo169k
vICB1tUVbe1cf5MsMKy/7M4SbSSybAh4/rv/AK1H5Z/8By6/5PSYq9gxVSura3uraa1uEEtvOjRT
RNuGRxxZT7EHFUh8gzv/AIbg02c1vdEZtKvK1qXtKIshqB/fRcJh7OMSbVkeKuxV2KoPWNVs9I0q
71O9Yra2cTzTFRyYqgrRVG7MeiqOp2xVL/J2m3lloiSaggTVdQke/wBTQHlwuLk8zEGH2hCvGJT3
VRiqeYq7FXYq7FXYq7FXYq7FXYq7FXYq7FUJq3/HKvf+MEv/ABA4q7Sf+OVZf8YIv+IDFUXirsVY
35ssry2mtfM2mRNPf6UrrdWce73djJQzwqO8iFRLD/lLwqA7HFU707UbHUrGC/sJluLO6RZbeeM1
V0YVBGKonFXYqxTzFdSa/dSeVdMkPpNRfMV9GaC2t2FTbKwP+9Fwvw0G8aEuaEx8lWUQwxQxJDCi
xxRqEjjQBVVVFAqgbAAYqvxV4/rv/rUfln/wHLr/AJPSYq9gxV2KsV16O50DV28z2kTz6fOiw+Yb
SJS8npx/3V7Ei1LvCCVkUDk0dKVMaqyrJLO8tL21iu7OeO5tZ1DwzxMHjdTuGVlqCDiqtirsVYlO
480+Y0tIjz8v6BcCW9kG6XOpQmsUA8VtHAkkp/u3iv7DjFWW4q7FXYq7FXYq7FXYq7FXYq7FXYq7
FXYqhNW/45V7/wAYJf8AiBxV2k/8cqy/4wRf8QGKovFXYq7FWOS+WdTs72a68uakmnJdu0t3YXVu
13aNK5LPNHGsts8Ujk1fjJxJ348iSVWm0DzXeP8A7kvMZigG3o6TaJZ8/wDjJJcPfSf8i2Q4qvPk
bSHB9a71WYn7RbVdRUEeBSOdEp/sd++Kpvpul6dplmlnp1tFaWsdSkEKBEBJqTRe5O5PfFUVirsV
YBqfkbWrn869G85xtD+h7DSJ9PnUuRN60kjsvFONCtG68sVZ/irsVdirH5/InlmSeWeG3msJbglr
htOurrT/AFGbcu4s5YAzH+Y74qtbye8BD6TrWp2Mo6iW5fUI39nS/Nyaf8Y2Q++KrJdC84XsZttQ
8wxRWj7SHS7JrO5ZNqr68txd8OXTkiKwr8JU0IVT2wsLOws4bKyhWC1gUJDCgoqqMVRGKuxV2Kux
V2KuxV2KuxV2KuxV2KuxV2KoTVv+OVe/8YJf+IHFVCwnvILG2hewn5xRIjUaAiqqAf8AduKq/wBd
uf8Algn/AOCg/wCquKu+u3P/ACwT/wDBQf8AVXFXfXbn/lgn/wCCg/6q4q767c/8sE//AAUH/VXF
XfXbn/lgn/4KD/qrirvrtz/ywT/8FB/1VxV3125/5YJ/+Cg/6q4q767c/wDLBP8A8FB/1VxV3125
/wCWCf8A4KD/AKq4q767c/8ALBP/AMFB/wBVcVd9duf+WCf/AIKD/qrirvrtz/ywT/8ABQf9VcVd
9duf+WCf/goP+quKu+u3P/LBP/wUH/VXFXfXbn/lgn/4KD/qrirvrtz/AMsE/wDwUH/VXFXfXbn/
AJYJ/wDgoP8Aqrirvrtz/wAsE/8AwUH/AFVxV3125/5YJ/8AgoP+quKu+u3P/LBP/wAFB/1VxV31
25/5YJ/+Cg/6q4q767c/8sE//BQf9VcVd9duf+WCf/goP+quKu+u3P8AywT/APBQf9VcVd9duf8A
lgn/AOCg/wCquKu+u3P/ACwT/wDBQf8AVXFXfXbn/lgn/wCCg/6q4q767c/8sE//AAUH/VXFXfXb
n/lgn/4KD/qrirvrtz/ywT/8FB/1VxVQv57yexuYUsJ+csTotWgAqykD/duKv//Z</xapgimg:image>
    </rdf:li>
   </rdf:Alt>
  </xap:Thumbnails>
 </rdf:Description>
 <rdf:Description
   rdf:about="uuid:4dd77512-294e-11df-b0f4-001f5b3c2ba8">
  <xapmm:DocumentID>uuid:db0c57f4-dad3-11dc-b3c0-003065732f80</xapmm:DocumentID>
 </rdf:Description>
 <rdf:Description
   rdf:about="uuid:4dd77512-294e-11df-b0f4-001f5b3c2ba8">
  <dc:format>image/svg+xml</dc:format>
  <dc:title>
   <rdf:Alt>
    <rdf:li
   xml:lang="x-default">keyboard.ai</rdf:li>
   </rdf:Alt>
  </dc:title>
 </rdf:Description>
</rdf:RDF>
</x:xmpmeta>
            </metadata>
        &#10;    <g
   id="g17"
   transform="translate(-24.999999)"
   style="display:inline"><g
     id="g112"
     transform="translate(11.13165,-250.71061)"><path
       ns3:knockout="Off"
       fill="#ccffff"
       d="m 118.698,365.385 c 6.404,-2.645 -8.252,-81.105 -10.439,-94.6 -3.708,-22.874 20.403,-27.359 24.219,-4.037 2.169,13.249 13.406,91.545 19.883,92.723"
       id="path96"
       style="fill:#aa00ff;fill-opacity:1" /><path
       ns3:knockout="Off"
       fill="#c0dbfc"
       d="M 91.44,387.871 C 97.791,381.328 55.109,314.164 48.389,304.019 37.816,288.062 58.93,277.175 68.274,290.82 c 5.886,8.594 44.021,77.211 50.424,74.564"
       id="path97"
       style="fill:#ff00ff;fill-opacity:1" /><path
       ns3:knockout="Off"
       fill="#befc75"
       d="M 75.156,413.93 C 62.776,401.662 32.995,379.414 24.201,373.606 7.782,362.764 16.05,344.772 33.49,353.815 c 11.855,6.146 51.601,40.602 57.951,34.057"
       id="path98"
       style="fill:#ff0000;fill-opacity:1" /><path
       ns3:knockout="Off"
       fill="#e9befc"
       d="m 218.40579,412.38523 c 2.12949,1.28142 6.71614,0.52489 14.15833,-1.34971 40.05366,-10.08886 65.22363,4.93375 61.60227,22.66937 -20.27926,-1.95775 -56.42484,0.5047 -74.40806,16.0133"
       id="path99"
       style="fill:#00aaff;fill-opacity:1" /><path
       ns3:knockout="Off"
       fill="#ffff66"
       d="m 152.36,359.471 c 6.477,1.178 26.692,-67.762 31.054,-82.859 5.918,-20.479 27.516,-13.883 22.155,6.934 -3.078,11.955 -15.788,56.023 -17.843,84.938"
       id="path100"
       style="fill:#0000ff;fill-opacity:1" /><path
       ns3:knockout="Off"
       fill="none"
       stroke="#000000"
       stroke-width="2.2742"
       stroke-linecap="round"
       stroke-linejoin="bevel"
       d="m 219.277,448.223 c -9.82512,15.73075 -15.369,10.77 -26.92,21.295 -12.778,11.641 -27.906,5.285 -41.088,9.52 -9.404,3.021 -17.9,6.805 -28.715,3.371 C 106.318,477.249 84.4,436.235 80.23,421.286 78.202,414.02 34.818,381.378 23.882,374.155 7.463,363.315 15.731,345.321 33.17,354.364 c 11.856,6.146 51.603,40.602 57.953,34.059 6.351,-6.545 -36.33,-73.709 -43.052,-83.854 -10.573,-15.957 10.54,-26.844 19.885,-13.198 5.885,8.593 44.021,77.212 50.424,74.565 6.404,-2.646 -8.252,-81.106 -10.44,-94.601 -3.708,-22.874 20.403,-27.36 24.22,-4.038 2.168,13.25 13.406,91.547 19.882,92.723 6.477,1.178 26.693,-67.762 31.055,-82.859 5.918,-20.478 27.515,-13.883 22.154,6.934 -3.876,15.059 -23.037,81.07 -16.934,103.568 8.66338,20.04652 13.46168,27.94516 30.37219,26.45191 43.21803,-13.31723 77.7404,-1.91731 75.37635,18.63232 -15.41351,3.04714 -56.4956,-0.13802 -74.78854,15.47577 z"
       id="path103"
       sodipodi:nodetypes="ccccccccsccccccccccc" /></g><g
     id="g23"
     transform="matrix(-1,0,0,1,602.0151,-250.71061)"><path
       ns3:knockout="Off"
       fill="#ccffff"
       d="m 118.698,365.385 c 6.404,-2.645 -8.252,-81.105 -10.439,-94.6 -3.708,-22.874 20.403,-27.359 24.219,-4.037 2.169,13.249 13.406,91.545 19.883,92.723"
       id="path18"
       style="fill:#aaff00;fill-opacity:1" /><path
       ns3:knockout="Off"
       fill="#c0dbfc"
       d="M 91.44,387.871 C 97.791,381.328 55.109,314.164 48.389,304.019 37.816,288.062 58.93,277.175 68.274,290.82 c 5.886,8.594 44.021,77.211 50.424,74.564"
       id="path19"
       style="fill:#ffff00;fill-opacity:1" /><path
       ns3:knockout="Off"
       fill="#befc75"
       d="M 75.156,413.93 C 62.776,401.662 32.995,379.414 24.201,373.606 7.782,362.764 16.05,344.772 33.49,353.815 c 11.855,6.146 51.601,40.602 57.951,34.057"
       id="path20"
       style="fill:#ffaa00;fill-opacity:1" /><path
       ns3:knockout="Off"
       fill="#e9befc"
       d="m 218.40579,412.38523 c 2.12949,1.28142 6.71614,0.52489 14.15833,-1.34971 40.05366,-10.08886 65.22363,4.93375 61.60227,22.66937 -20.27926,-1.95775 -56.42484,0.5047 -74.40806,16.0133"
       id="path21"
       style="fill:#00ffff;fill-opacity:1" /><path
       ns3:knockout="Off"
       fill="#ffff66"
       d="m 152.36,359.471 c 6.477,1.178 26.692,-67.762 31.054,-82.859 5.918,-20.479 27.516,-13.883 22.155,6.934 -3.078,11.955 -15.788,56.023 -17.843,84.938"
       id="path22"
       style="fill:#00ff00;fill-opacity:1" /><path
       ns3:knockout="Off"
       fill="none"
       stroke="#000000"
       stroke-width="2.2742"
       stroke-linecap="round"
       stroke-linejoin="bevel"
       d="m 219.277,448.223 c -9.82512,15.73075 -15.369,10.77 -26.92,21.295 -12.778,11.641 -27.906,5.285 -41.088,9.52 -9.404,3.021 -17.9,6.805 -28.715,3.371 C 106.318,477.249 84.4,436.235 80.23,421.286 78.202,414.02 34.818,381.378 23.882,374.155 7.463,363.315 15.731,345.321 33.17,354.364 c 11.856,6.146 51.603,40.602 57.953,34.059 6.351,-6.545 -36.33,-73.709 -43.052,-83.854 -10.573,-15.957 10.54,-26.844 19.885,-13.198 5.885,8.593 44.021,77.212 50.424,74.565 6.404,-2.646 -8.252,-81.106 -10.44,-94.601 -3.708,-22.874 20.403,-27.36 24.22,-4.038 2.168,13.25 13.406,91.547 19.882,92.723 6.477,1.178 26.693,-67.762 31.055,-82.859 5.918,-20.478 27.515,-13.883 22.154,6.934 -3.876,15.059 -23.037,81.07 -16.934,103.568 8.66338,20.04652 13.46168,27.94516 30.37219,26.45191 43.21803,-13.31723 77.7404,-1.91731 75.37635,18.63232 -15.41351,3.04714 -56.4956,-0.13802 -74.78854,15.47577 z"
       id="path23"
       sodipodi:nodetypes="ccccccccsccccccccccc" /></g></g><g
   id="g18"
   transform="matrix(0.72889931,0,0,0.99998477,90.107994,229.91224)"
   style="display:inline"><path
     style="clip-rule:evenodd;display:inline;fill:#000000;fill-rule:evenodd;stroke:#000000;stroke-width:4.48729;stroke-linejoin:round;stroke-opacity:1;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision"
     d="m 454.74575,-63.865542 v -30.992135 m 0,15.118117 h 192.05281 m 0,0 v 15.874207 m 0,0 -0.002,-30.992135"
     id="use12690"
     sodipodi:nodetypes="cccccccc" /><path
     style="clip-rule:evenodd;display:inline;fill:#000000;fill-rule:evenodd;stroke:#000000;stroke-width:4.48729;stroke-linejoin:round;stroke-opacity:1;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision"
     d="m 262.63617,-63.865542 v -30.992135 m 0,15.118117 h 192.05281 m 0,0 v 15.874207 m 0,0 -0.002,-30.992135"
     id="use12691"
     sodipodi:nodetypes="cccccccc" /><path
     style="clip-rule:evenodd;display:inline;fill:#000000;fill-rule:evenodd;stroke:#000000;stroke-width:4.48729;stroke-linejoin:round;stroke-opacity:1;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision"
     d="m 70.634039,-63.865542 v -30.992135 m 0,15.118117 H 262.68685 m 0,0 v 15.874207 m 0,0 -0.002,-30.992135"
     id="use12692"
     sodipodi:nodetypes="cccccccc" /><path
     style="clip-rule:evenodd;display:inline;fill:#000000;fill-rule:evenodd;stroke:#000000;stroke-width:4.48729;stroke-linejoin:round;stroke-opacity:1;image-rendering:optimizeQuality;shape-rendering:geometricPrecision;text-rendering:geometricPrecision"
     d="m -121.36585,-63.865542 v -30.992135 m 0,15.118117 H 70.686959 m 0,0 v 15.874207 m 0,0 -0.0015,-30.992135"
     id="use12693"
     sodipodi:nodetypes="cccccccc" /></g></svg>

<span class="handlabel">[Wikimedia](https://commons.wikimedia.org/wiki/File:Typing-colour_for-finger-positions.svg)</span>

</div>

# Length area volume

You can approximate a <a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a> using your hands🤲. With your palms flat on a
table in front of you and the tips of your thumbs👍touching, the maximum
distance between the tips of your pinkies is <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>1
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a>. When you spread out the fingers on one
hand✋or do the “[call
me](https://en.wikipedia.org/wiki/Shaka_sign#:~:text=the%20gesture%20is%20commonly%20understood%20to%20mimic%20the%20handset%20of%20a%20traditional%20landline%20telephone)”,
“[drink](https://en.wikipedia.org/wiki/Shaka_sign#:~:text=placing%20the%20thumb%20to%20the%20mouth%20and%20motioning%20the%20little%20finger%20upward%20as%20if%20tipping%20up%20a%20bottle%27s%20bottom%20end)”,
or
“[shaka](https://en.wikipedia.org/wiki/Shaka_sign#:~:text=a%20gesture%20with%20friendly%20intent%20often%20associated%20with%20Hawaii%20and%20surf%20culture)”🤙gesture,
your thumb and pinky tips are <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>0.5
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zems">z</a> apart.

<div id="zemarms" class="column-margin" fig-align="center"
style="text-align:center;">

<img src="../asset/squareZem.svg" id="zArms" />
<a href="https://commons.wikimedia.org/wiki/File:Extended_arm.jpg"
id="armlabel">Wikimedia</a>

</div>

To visualize a square <span class="tool" data-bs-toggle="tooltip"
data-bs-title="zone equatorial meter">zem</span>
(<a href="#z2" id="squarezem" class="tool" data-bs-toggle="tooltip"
data-bs-title="square zem">z²</a>), imagine four people standing in a
circle, facing inward, each with their right hand placed on top of the
elbow of the person to their right. Alternatively, two people can stand
in front of each other and raise their arms💪, placing one hand on the
elbow of the other person and the other hand on their own elbow.

<div id="zemlift" class="column-margin" fig-align="center"
style="text-align:center;">

<img src="../asset/Man_Lifting_Barbell_Cartoon.svg" id="zLift" /> <a
href="https://commons.wikimedia.org/wiki/File:Man_Lifting_Barbell_Cartoon.svg"
id="liftlabel">Wikimedia</a>

</div>

You can approximate a
<a href="#z2" class="tool" data-bs-toggle="tooltip"
data-bs-title="square zem">z²</a> yourself by sitting in a chair🪑or
standing🧍with your knees and feet🦶1
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a>, 4 <span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a meter">decimeters</span>, or 16 inches apart,
which is probably about the width of your hips or shoulders. The
<a href="#z2" class="tool" data-bs-toggle="tooltip"
data-bs-title="square zem">z²</a> will be between your shins, its top
will be below your knees, and its bottom will be either above your
ankles or feet, depending on your height.

<div id="zemcubic" class="column-margin" fig-align="center"
style="text-align:center;">

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
&#10;<svg
   version="1.1"
   x="0px"
   y="0px"
   viewBox="0 0 430.64053 385.96381"
   enable-background="new 0 0 1500 525"
   xml:space="preserve"
   id="cubiczem"
   sodipodi:docname="cubicZem.svg"
   inkscape:version="1.4 (e7c3feb1, 2024-10-09)"
   width="430.64053"
   height="385.96381"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns:ns4="&amp;#38;#38;#38;ns_sfw;"><defs
   id="defs74" /><sodipodi:namedview
   id="namedview74"
   pagecolor="#ffffff"
   bordercolor="#000000"
   borderopacity="0.25"
   inkscape:showpageshadow="2"
   inkscape:pageopacity="0.0"
   inkscape:pagecheckerboard="0"
   inkscape:deskcolor="#d1d1d1"
   inkscape:zoom="0.79270714"
   inkscape:cx="226.43924"
   inkscape:cy="168.41024"
   inkscape:window-width="1256"
   inkscape:window-height="896"
   inkscape:window-x="221"
   inkscape:window-y="32"
   inkscape:window-maximized="0"
   inkscape:current-layer="svg74" />
<metadata
   id="metadata1">
    <ns4:sfw>
        <ns4:slices />
        <ns4:sliceSourceBounds
   bottomLeftOrigin="true"
   height="5750"
   width="6426.366"
   x="-5096.366"
   y="-1000" />
    </ns4:sfw>
</metadata>
&#10;
&#10;
&#10;
&#10;<g
   id="g4"><g
     id="g76"
     transform="translate(-378.42548,-73.387058)"><g
       id="AG-PEOPLE">
    <g
   id="POLYLINE_154_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="2.75"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 398.688,317.013 c 0.916,1.659 1.828,3.356 3.306,4.588 1.43,1.192 3.236,1.824 5.02,2.267 5.828,1.448 12.115,1.492 18.087,1.709 5.74,0.209 11.49,0.345 17.234,0.22 7.312,-0.159 14.626,-0.376 21.939,-0.478 6.134,-0.086 12.242,0.11 18.347,0.725 3.112,0.314 6.216,0.748 9.336,0.969 1.26,0.089 2.558,-0.026 3.807,0.152 0.672,0.096 1.24,0.339 1.55,0.975 0.736,1.508 0.263,3.731 0.059,5.275 -0.414,3.136 -0.175,6.253 -0.599,9.388 -0.732,5.408 0.88,10.86 0.489,16.301 -0.598,8.324 0.89305,24.973 0.89305,24.973 -0.0251,-0.016 1.48225,11.20412 1.98595,17.609 0.21676,2.75625 0.543,6.5555 0.503,8.293 -0.021,1.441 -0.115,3.49 0.936,4.652 1.033,1.143 3.021,1.051 4.412,1.033 2.868,-0.036 5.727,-0.366 8.59,-0.521 3.337,-0.181 6.705,-0.253 10.027,-0.641 1.579,-0.185 3.484,-0.362 4.835,-1.315 0.61359,-1.04401 1.511,-4.069 1.674,-5.988 0.25,-2.946 0.832,-5.86 1.415,-8.754 1.213,-6.02 0.629,-12 2.081,-17.966 1.627,-6.687 -0.666,-13.347 1.062,-20.009 1.543,-5.949 0.24886,-12.74572 0.635,-17.924 0.61843,-6.18086 1.361,-12.143 1.629,-18.257 0.137,-3.115 0.18,-6.239 0.008,-9.353 -0.128,-2.31 -0.284,-4.764 -1.114,-6.949 -1.303,-3.428 -5.188,-5.148 -8.351,-6.435 -2.729,-1.11 -5.58,-1.891 -8.413,-2.681"
   id="path13"
   sodipodi:nodetypes="csccccccccccccscccccccccscccccc" />
    </g>
    <g
   id="POLYLINE_155_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="2.75"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 500.826,431.295 c -0.621,-0.767 -1.377,-1.964 -2.515,-1.846 -0.819,0.085 -1.534,0.723 -2.026,1.343 -1.174,1.48 -1.358,3.461 -1.393,5.282 -0.042,2.192 0.16,4.382 0.203,6.573 0.045,2.254 -0.116,4.502 -0.187,6.754 -0.07,2.255 -0.2,5.174 2.116,6.386 2.539,1.329 5.962,1.231 8.739,1.338 4.767,0.183 9.542,0.193 14.311,0.271 4.456,0.073 8.912,0.153 13.369,0.187 4.341,0.033 8.688,0.028 13.029,-0.086 4.434,-0.117 8.886,-0.28 13.287,-0.859 2.68,-0.353 5.999,-0.732 8.183,-2.511 1.582,-1.288 1.539,-3.159 0.933,-4.947 -0.69,-2.039 -1.864,-4.351 -3.612,-5.705 -2.307,-1.788 -5.545,-2.308 -8.293,-3.033 -2.12,-0.559 -4.289,-1.051 -6.326,-1.874 -1.627,-0.657 -3.065,-1.605 -4.439,-2.686 -3.727,-2.93 -7.389,-5.942 -11.143,-8.838 -2.238,-1.726 -4.69,-3.89 -7.639,-4.15 -2,-0.177 -3.956,0.613 -5.677,1.557 -3.488,1.913 -6.133,4.746 -8.805,7.63 -1.332,1.437 -2.838,3.021 -4.797,3.559 -1.519,0.417 -2.906,-0.062 -4.127,-0.997 -1.227,-0.943 -2.219,-2.155 -3.191,-3.348 z"
   id="path14"
   sodipodi:nodetypes="csccccccssccccccccccccccc" />
    </g>
    <g
   id="POLYLINE_156_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="2.75"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 499.019,429.541 c 1.294,-4.84 2.204,-9.746 2.749,-14.725"
   id="path15"
   sodipodi:nodetypes="cc" />
    </g>
    <g
   id="POLYLINE_157_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="2.75"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 405.614,136.305 c 1.299,4.228 1.258,8.605 0.106,12.864"
   id="path16" />
    </g>
    <g
   id="POLYLINE_158_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="2.75"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 444.254,281.97 c -2.101,2.488 -4.045,5.048 -5.856,7.754 -1.904,2.846 -3.757,5.744 -6.022,8.324 -4.445,5.061 -10.25,9.14 -15.915,12.72 -2.762,1.745 -5.672,3.251 -8.747,4.363 -2.844,1.029 -5.932,1.915 -8.983,1.883 -1.287,-0.013 -2.746,-0.201 -3.722,-1.125 -1.467,-1.388 -1.589,-3.784 -2.208,-5.574 -0.821,-2.373 -2.423,-4.364 -3.44,-6.645 -1.033,-2.315 -1.181,-4.827 -1.164,-7.33 0.023,-3.516 0.232,-7.022 0.091,-10.538 -0.137,-3.402 -0.457,-6.796 -0.801,-10.181 -0.73,-7.18 -1.666,-14.341 -2.101,-21.548 -0.446,-7.372 -0.123,-14.76 0.049,-22.135 0.16,-6.851 -0.272,-13.663 -0.709,-20.496 -0.437,-6.842 -0.766,-13.633 -0.233,-20.483 0.531,-6.826 1.505,-13.659 2.871,-20.367 0.624,-3.063 1.278,-6.231 2.69,-9.045 1.336,-2.663 3.432,-4.847 5.502,-6.953 2.536,-2.581 5.774,-5.607 9.663,-5.459 2.25,0.086 4.37,1.053 6.364,2.015 2.947,1.421 5.891,2.873 9.063,3.729 4.92,1.329 10.183,0.885 14.436,4.082 2.387,1.794 4.198,4.215 5.752,6.736 1.785,2.896 3.415,5.92 4.912,8.975 2.9,5.921 4.954,12.209 5.906,18.741 0.952,6.531 0.511,12.998 -0.262,19.518 -0.847,7.141 -1.645,14.214 -1.382,21.42 0.25,6.847 1.62,13.466 2.816,20.19 0.577,3.244 1.102,6.522 1.193,9.821"
   id="path17" />
    </g>
    <g
   id="POLYLINE_159_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="2.75"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 394.401,198.327 c 0.709,6.497 1.538,12.973 2.453,19.444 0.893,6.316 1.915,12.585 3.504,18.769 1.584,6.163 3.532,12.249 6.027,18.106 1.218,2.859 2.578,5.656 3.95,8.444 1.111,2.258 2.251,4.446 4.114,6.183 4.173,3.891 10.065,6.048 15.329,7.995 6.03,2.23 12.175,4.144 18.397,5.762 6.032,1.568 12.154,2.819 18.339,3.604 3.09,0.392 6.187,0.475 9.284,0.762 2.119,0.196 4.02,0.794 5.89,1.8 2.735,1.471 5.201,3.389 7.727,5.18 1.409,1 2.882,1.903 4.576,2.311 4.758,1.146 9.749,-0.798 14.501,0.33 2.372,0.563 4.416,1.99 6.497,3.194 0.999,0.578 2.959,1.933 4.228,1.402 1.295,-0.542 0.98,-2.678 0.609,-3.699 -0.633,-1.739 -2.094,-3.089 -3.277,-4.449 -2.873,-3.302 -5.694,-7.742 -10.102,-9.115 -2.632,-0.82 -5.504,-0.867 -8.219,-1.268 -3.097,-0.457 -6.181,-1.023 -9.191,-1.893 -5.154,-1.488 -9.932,-3.951 -14.683,-6.392 -7.636,-3.923 -15.272,-7.846 -22.908,-11.769 -4.841,-2.487 -9.754,-4.908 -14.335,-7.857 -3.737,-2.406 -7.817,-5.509 -8.974,-10.03 -0.573,-2.241 -0.707,-4.632 -0.981,-6.92 -0.549,-4.591 -1.098,-9.183 -1.647,-13.774 -0.671,-5.607 -1.44,-11.19 -2.288,-16.773 -0.512,-3.372 -1.024,-6.743 -1.536,-10.115"
   id="path18" />
    </g>
    <g
   id="POLYLINE_160_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="2.75"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 424.452,137.432 c 2.972,2.152 6.491,3.662 10.002,4.679 2.65,0.768 5.506,1.008 8.182,0.199 0.795,-0.24 1.648,-0.593 2.201,-1.237 0.776,-0.904 0.681,-2.192 0.78,-3.301 0.074,-0.831 0.273,-1.571 0.654,-2.32 0.458,-0.901 1.118,-1.746 1.207,-2.784 0.077,-0.889 -0.143,-1.78 -0.126,-2.673 0.022,-1.16 -0.125,-2.993 0.624,-3.996 1.083,-1.45 4.588,-1.83 4.327,-4.071 -0.11,-0.945 -0.676,-1.878 -1.141,-2.676 -0.979,-1.681 -2.069,-3.288 -2.978,-5.011 -0.906,-1.718 -2.298,-3.936 -1.21,-5.852 0.921,-1.622 1.477,-3.194 0.986,-5.088 -0.247,-0.95 -0.755,-1.807 -1.006,-2.758 -0.47,-1.783 -0.596,-3.693 -0.823,-5.518 -0.11,-0.885 -0.206,-1.771 -0.285,-2.66"
   id="path19" />
    </g>
    <g
   id="POLYLINE_161_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="2.75"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 430.534,156.684 c -0.486,-5.168 0.659,-10.294 3.319,-14.753"
   id="path20" />
    </g>
    <g
   id="POLYLINE_162_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="2.75"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 421.089,122.437 c -0.855,0.737 -2.065,1.639 -3.264,1.286 -1.222,-0.359 -2.069,-1.785 -2.663,-2.801 -1.408,-2.41 -2.499,-5.071 -3.237,-7.761 -0.364,-1.326 -0.75,-2.869 -0.233,-4.211 0.49,-1.272 1.825,-2.332 3.205,-2.398 1.057,-0.051 2.018,0.528 2.794,1.193 1.465,1.255 2.308,3.021 3.646,4.382 0.934,0.95 2.472,1.627 3.649,0.631 1.2,-1.015 0.658,-3.38 0.667,-4.693 0.01,-1.464 0.208,-2.996 0.826,-4.34 0.668,-1.453 1.835,-1.849 2.973,-2.826 1.125,-0.966 0.682,-2.571 0.508,-3.846 -0.178,-1.301 -0.359,-2.69 0.611,-3.741 1.16,-1.256 3.11,-1.534 4.692,-1.853 0.807,-0.163 1.616,-0.319 2.389,-0.612 0.611,-0.232 1.209,-0.579 1.868,-0.662 1.548,-0.195 3.027,1.157 4.329,1.753 0.941,0.43 1.984,0.655 2.941,0.126 1.137,-0.629 1.352,-1.86 1.478,-3.038 0.173,-1.617 0.627,-3.362 0.252,-4.986 -0.357,-1.547 -1.454,-3.047 -2.391,-4.278 -0.77,-1.012 -1.713,-1.724 -2.933,-2.089 -2.469,-0.739 -5.243,-0.726 -7.784,-0.983 -3.135,-0.317 -6.264,-0.703 -9.395,-1.058 -2.443,-0.276 -4.89,-0.572 -7.353,-0.485 -4.769,0.168 -9.882,1.503 -13.987,3.979 -4.263,2.571 -7.245,7.064 -9.744,11.254 -0.973,1.631 -1.895,3.376 -2.287,5.251 -0.428,2.042 -0.115,4.142 0.025,6.198 0.317,4.651 -0.332,9.758 2.246,13.904 1.12,1.801 2.652,3.339 3.602,5.246 0.914,1.835 1.094,3.918 1.388,5.916 0.476,3.236 1.606,6.641 4.258,8.774 2.083,1.676 5.48,-0.526 5.637,-2.943 0.101,-1.563 -0.008,-2.657 1.325,-3.689 1.136,-0.88 2.398,-1.531 3.29,-2.684 0.876,-1.133 1.422,-2.5 1.802,-3.87"
   id="path21" />
    </g>
    <g
   id="POLYLINE_163_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="2.75"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 387.872,168.22 c -0.699,6.03 -0.725,11.846 0.287,17.838 0.544,3.22 1.024,6.448 1.553,9.668 0.229,1.392 0.719,2.607 2.285,2.768 2.526,0.26 5.261,-0.793 7.699,-1.276 2.673,-0.53 5.375,-0.703 8.095,-0.565 3.151,0.16 6.255,0.712 9.391,1.026 1.586,0.159 3.542,0.396 5.042,-0.322 1.357,-0.65 1.747,-2.178 2.037,-3.525 0.597,-2.768 1.225,-5.601 1.306,-8.442 0.015,-0.522 0.009,-1.045 -0.024,-1.567"
   id="path22" />
    </g>
    <g
   id="POLYLINE_164_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="2.75"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 527.273,416.056 c -0.312,2.937 -0.546,3.874 -0.764,6.819"
   id="path23"
   sodipodi:nodetypes="cc" />
    </g>
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
    &#10;    
</g><g
       id="AG-OUTLINE">
    <g
   id="POLYLINE_153_">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="3.5"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 445.846,92.366 c 1.128,-0.133 1.917,-0.958 2.21,-2.015 0.421,-1.513 0.567,-3.326 0.591,-4.893 0.014,-0.9 -0.149,-1.739 -0.543,-2.551 -0.663,-1.366 -1.556,-2.835 -2.639,-3.917 -0.723,-0.722 -1.599,-1.149 -2.579,-1.402 -2.308,-0.597 -4.814,-0.633 -7.173,-0.868 -4.85,-0.483 -9.694,-1.308 -14.565,-1.549 -4.294,-0.212 -8.609,0.581 -12.619,2.113 -3.723,1.422 -6.736,3.601 -9.209,6.727 -1.577,1.993 -3.042,4.119 -4.347,6.3 -0.896,1.497 -1.74,3.076 -2.197,4.771 -0.362,1.343 -0.391,2.721 -0.305,4.103 0.155,2.506 0.275,4.993 0.358,7.504 0.071,2.151 0.211,4.36 0.864,6.426 0.496,1.57 1.373,2.933 2.351,4.243 1.024,1.373 2.151,2.714 2.787,4.324 0.661,1.675 0.821,3.503 1.083,5.268 0.455,3.077 1.465,5.998 3.726,8.244 0.283,0.281 0.586,0.56 0.927,0.771 0.354,0.219 0.907,0.26 1.101,0.521 0.287,0.387 0.347,1.254 0.451,1.724 0.114,0.517 0.211,1.039 0.287,1.563 0.134,0.923 0.204,1.855 0.211,2.788 0.009,1.056 -0.061,2.112 -0.199,3.158 -0.072,0.55 -0.163,1.097 -0.271,1.641 -0.087,0.437 -0.118,1.223 -0.37,1.59 -0.182,0.265 -0.21,0.197 -0.569,0.184 -0.19,-0.007 -0.381,-0.008 -0.571,-10e-4 -0.391,0.014 -0.78,0.057 -1.163,0.133 -3.161,0.628 -5.801,3.163 -7.97,5.376 -1.578,1.61 -3.18,3.261 -4.433,5.145 -1.12,1.683 -1.872,3.552 -2.44,5.485 -1.378,4.686 -2.143,9.602 -2.841,14.428 -0.727,5.023 -1.324,10.075 -1.537,15.149 -0.198,4.729 0.012,9.442 0.314,14.161 0.355,5.551 0.776,11.099 0.884,16.662 0.106,5.484 -0.13,10.976 -0.258,16.458 -0.109,4.676 -0.021,9.362 0.324,14.028 0.414,5.604 1.077,11.188 1.677,16.774 0.5,4.657 1.002,9.326 1.128,14.011 0.125,4.654 -0.7,9.531 0.207,14.129 0.682,3.461 3.201,6.068 4.307,9.355 0.806,2.394 0.938,5.545 3.818,6.336 0.532,0.146 1.063,0.16 1.604,0.238 0.57,0.082 0.564,0.267 0.87,0.816 0.254,0.457 0.513,0.911 0.795,1.352 0.653,1.022 1.427,1.965 2.402,2.696 3.042,2.283 7.394,2.646 11.046,3.001 4.93,0.479 9.905,0.69 14.855,0.823 4.585,0.123 9.176,0.219 13.762,0.119 6.621,-0.144 13.243,-0.289 19.864,-0.433 4.4,-0.096 8.8,-0.11 13.198,0.086 5.035,0.224 10.027,0.888 15.037,1.396 1.155,0.117 2.316,0.211 3.478,0.237 0.847,0.019 1.789,-0.076 2.621,0.153 1.062,0.293 1.341,1.236 1.423,2.231 0.143,1.754 -0.165,3.556 -0.425,5.285 -0.421,2.803 -0.284,5.601 -0.659,8.411 l 0.647,14.421 c -0.421,5.612 0.52106,11.226 0.69,16.839 0.22894,4.99578 0.65128,9.42361 1.07,14.302 0.50918,5.93225 0.94021,11.54776 1.501,17.798 0.16062,1.79016 0.106,3.619 0.268,5.414 0.053,0.584 0.135,1.181 0.337,1.735 0.082,0.225 0.18,0.446 0.312,0.648 0.358,0.547 0.397,0.647 0.32,1.365 -0.502,4.678 -1.438,9.306 -2.652,13.848 -1.209,-0.474 -2.426,0.73 -3.027,1.661 -0.733,1.136 -0.966,2.504 -1.057,3.831 -0.225,3.283 0.247,6.578 0.152,9.866 -0.078,2.686 -0.574,5.654 0.032,8.318 0.332,1.462 1.277,2.402 2.659,2.892 2.471,0.878 5.296,0.909 7.886,1.012 7.267,0.288 14.553,0.292 21.824,0.397 6.802,0.099 13.608,0.133 20.409,-0.059 3.299,-0.093 6.603,-0.257 9.887,-0.593 2.802,-0.287 5.767,-0.613 8.385,-1.721 1.292,-0.547 2.637,-1.4 3.015,-2.842 0.376,-1.437 -0.201,-3.029 -0.79,-4.324 -0.705,-1.551 -1.592,-3.214 -2.919,-4.333 -1.326,-1.119 -3.06,-1.67 -4.69,-2.163 -3.246,-0.981 -6.632,-1.572 -9.806,-2.784 -2.642,-1.009 -4.745,-2.794 -6.927,-4.535 -3.062,-2.442 -6.11,-4.9 -9.211,-7.291 -1.826,-1.409 -3.717,-3 -5.961,-3.689 -0.768,-0.236 -1.569,-0.348 -2.372,-0.308 0.16,-2.157 0.307,-4.315 0.517,-6.468 0.064,-0.657 -0.05,-1.4485 0.423,-1.7935 0.292,-0.213 0.895,-0.3585 1.241,-0.5105 2.649,-1.166 2.231,-4.807 2.454,-7.22 0.345,-3.734 1.155,-7.443 1.944,-11.104 l 3.902,-60.358 c -0.007,0.11135 0.84,-8.029 0.989,-12.061 0.145,-3.942 0.195,-7.957 -0.342,-11.873 -0.268,-1.955 -0.684,-4.043 -2.009,-5.582 -1.755,-2.039 -4.598,-3.308 -7.028,-4.306 -1.694,-0.695 -3.44,-1.26 -5.195,-1.778 -0.533,-0.158 -1.067,-0.314 -1.602,-0.467 -0.423,-0.12 -1.415,-0.182 -1.706,-0.475 -0.163,-0.164 -0.219,-0.829 -0.319,-1.086 -0.29,-0.742 -0.746,-1.406 -1.238,-2.028 -1.267,-1.604 -2.684,-3.109 -4.006,-4.669 -1.885,-2.225 -3.846,-4.727 -6.488,-6.093 -2.586,-1.337 -5.676,-1.36 -8.498,-1.737 -3.891,-0.519 -7.781,-1.205 -11.532,-2.384 -3.822,-1.201 -7.456,-2.922 -11.023,-4.728 -3.663,-1.854 -7.305,-3.749 -10.957,-5.623 -2.605,-1.337 -5.21,-2.674 -7.814,-4.01 -0.94,-0.483 -1.881,-0.965 -2.821,-1.448 -0.332,-0.171 -1.091,-0.38 -1.322,-0.679 -0.276,-0.356 -0.137,-1.617 -0.176,-2.103 -0.074,-0.919 -0.177,-1.836 -0.295,-2.751 -0.239,-1.853 -0.546,-3.699 -0.885,-5.537 -0.777,-4.203 -1.645,-8.398 -2.173,-12.643 -0.941,-7.569 -0.728,-15.242 0.169,-22.802 0.978,-8.24 2.138,-16.418 0.993,-24.707 -1.061,-7.681 -3.678,-14.928 -7.288,-21.766 -2.971,-5.626 -6.286,-12.469 -12.586,-14.964 -0.211,-0.084 -0.424,-0.162 -0.639,-0.234 -0.647,-0.218 -0.676,-0.24 -0.722,-0.926 -0.065,-0.965 -0.075,-1.935 -0.029,-2.901 0.091,-1.889 0.401,-3.766 0.945,-5.578 0.522,-1.741 1.212,-3.618 2.222,-5.142 0.327,-0.495 0.436,-0.345 0.977,-0.191 0.426,0.121 0.854,0.233 1.287,0.327 0.683,0.148 1.374,0.256 2.071,0.304 1.985,0.139 4.438,-0.011 6.179,-1.117 1.967,-1.25 1.114,-3.649 1.832,-5.527 0.391,-1.023 1.167,-1.893 1.437,-2.961 0.205,-0.811 0.009,-1.642 -0.034,-2.46 -0.066,-1.256 -0.04,-2.688 0.251,-3.91 0.243,-1.02 1.157,-1.554 2.004,-2.048 0.832,-0.485 2.261,-1.023 2.621,-2.035 0.253,-0.713 -0.087,-1.518 -0.384,-2.168 -1.416,-3.096 -3.695,-5.723 -4.907,-8.94 -0.297,-0.787 -0.565,-1.678 -0.309,-2.512 0.244,-0.796 0.86,-1.422 1.153,-2.202 0.713,-1.897 0.195,-3.593 -0.51,-5.372 -0.415,-1.048 -0.581,-2.157 -0.729,-3.27 -0.261,-1.965 -0.531,-3.925 -0.706,-5.896 z"
   id="path68"
   sodipodi:nodetypes="cccccccccccccccccccsccccccscccsccccccccccccccccccccccssccccccsscsccccccccccsccccccsccccsscscccsccccscccsccccccccscccsccccccccccccsscccccccccc" />
    </g>
    &#10;    
    &#10;    
    &#10;    
</g><g
       id="g75">
    <g
   id="g74">
        &#10;            <path
   fill="none"
   stroke="#ff6b6b"
   stroke-width="3.5"
   stroke-linecap="round"
   stroke-linejoin="round"
   stroke-miterlimit="10"
   d="m 445.846,92.366 c 1.128,-0.133 1.917,-0.958 2.21,-2.015 0.421,-1.513 0.567,-3.326 0.591,-4.893 0.014,-0.9 -0.149,-1.739 -0.543,-2.551 -0.663,-1.366 -1.556,-2.835 -2.639,-3.917 -0.723,-0.722 -1.599,-1.149 -2.579,-1.402 -2.308,-0.597 -4.814,-0.633 -7.173,-0.868 -4.85,-0.483 -9.694,-1.308 -14.565,-1.549 -4.294,-0.212 -8.609,0.581 -12.619,2.113 -3.723,1.422 -6.736,3.601 -9.209,6.727 -1.577,1.993 -3.042,4.119 -4.347,6.3 -0.896,1.497 -1.74,3.076 -2.197,4.771 -0.362,1.343 -0.391,2.721 -0.305,4.103 0.155,2.506 0.275,4.993 0.358,7.504 0.071,2.151 0.211,4.36 0.864,6.426 0.496,1.57 1.373,2.933 2.351,4.243 1.024,1.373 2.151,2.714 2.787,4.324 0.661,1.675 0.821,3.503 1.083,5.268 0.455,3.077 1.465,5.998 3.726,8.244 0.283,0.281 0.586,0.56 0.927,0.771 0.354,0.219 0.907,0.26 1.101,0.521 0.287,0.387 0.347,1.254 0.451,1.724 0.114,0.517 0.211,1.039 0.287,1.563 0.134,0.923 0.204,1.855 0.211,2.788 0.009,1.056 -0.061,2.112 -0.199,3.158 -0.072,0.55 -0.163,1.097 -0.271,1.641 -0.087,0.437 -0.118,1.223 -0.37,1.59 -0.182,0.265 -0.21,0.197 -0.569,0.184 -0.19,-0.007 -0.381,-0.008 -0.571,-10e-4 -0.391,0.014 -0.78,0.057 -1.163,0.133 -3.161,0.628 -5.801,3.163 -7.97,5.376 -1.578,1.61 -3.18,3.261 -4.433,5.145 -1.12,1.683 -1.872,3.552 -2.44,5.485 -1.378,4.686 -2.143,9.602 -2.841,14.428 -0.727,5.023 -1.324,10.075 -1.537,15.149 -0.198,4.729 0.012,9.442 0.314,14.161 0.355,5.551 0.776,11.099 0.884,16.662 0.106,5.484 -0.13,10.976 -0.258,16.458 -0.109,4.676 -0.021,9.362 0.324,14.028 0.414,5.604 1.077,11.188 1.677,16.774 0.5,4.657 1.002,9.326 1.128,14.011 0.125,4.654 -0.7,9.531 0.207,14.129 0.682,3.461 3.201,6.068 4.307,9.355 0.806,2.394 0.938,5.545 3.818,6.336 0.532,0.146 1.063,0.16 1.604,0.238 0.57,0.082 0.564,0.267 0.87,0.816 0.254,0.457 0.513,0.911 0.795,1.352 0.653,1.022 1.427,1.965 2.402,2.696 3.042,2.283 7.394,2.646 11.046,3.001 4.93,0.479 9.905,0.69 14.855,0.823 4.585,0.123 9.176,0.219 13.762,0.119 6.621,-0.144 13.243,-0.289 19.864,-0.433 4.4,-0.096 8.8,-0.11 13.198,0.086 5.035,0.224 10.027,0.888 15.037,1.396 1.155,0.117 2.316,0.211 3.478,0.237 0.847,0.019 1.789,-0.076 2.621,0.153 1.062,0.293 1.341,1.236 1.423,2.231 0.143,1.754 -0.165,3.556 -0.425,5.285 -1.2459,24.0249 2.14115,53.58122 3.517,77.185 0.053,0.584 0.135,1.181 0.337,1.735 0.082,0.225 0.18,0.446 0.312,0.648 0.358,0.547 0.397,0.647 0.32,1.365 -0.502,4.678 -1.438,9.306 -2.652,13.848 -1.209,-0.474 -2.426,0.73 -3.027,1.661 -0.733,1.136 -0.966,2.504 -1.057,3.831 -0.225,3.283 0.247,6.578 0.152,9.866 -0.078,2.686 -0.574,5.654 0.032,8.318 0.332,1.462 1.277,2.402 2.659,2.892 2.471,0.878 5.296,0.909 7.886,1.012 7.267,0.288 14.553,0.292 21.824,0.397 6.802,0.099 13.608,0.133 20.409,-0.059 3.299,-0.093 6.603,-0.257 9.887,-0.593 2.802,-0.287 5.767,-0.613 8.385,-1.721 1.292,-0.547 2.637,-1.4 3.015,-2.842 0.376,-1.437 -0.201,-3.029 -0.79,-4.324 -0.705,-1.551 -1.592,-3.214 -2.919,-4.333 -1.326,-1.119 -3.06,-1.67 -4.69,-2.163 -3.246,-0.981 -6.632,-1.572 -9.806,-2.784 -2.642,-1.009 -4.745,-2.794 -6.927,-4.535 -3.062,-2.442 -6.11,-4.9 -9.211,-7.291 -1.826,-1.409 -3.717,-3 -5.961,-3.689 -0.768,-0.236 -1.569,-0.348 -2.372,-0.308 0.16,-2.157 0.307,-4.315 0.517,-6.468 0.064,-0.657 -0.16228,-1.77941 0.423,-1.7935 0.63788,-0.0154 0.895,-0.40723 1.241,-0.411 4.14869,0.1093 8.22223,-65.25729 9.289,-90.8425 0.145,-3.942 0.195,-7.957 -0.342,-11.873 -0.268,-1.955 -0.684,-4.043 -2.009,-5.582 -1.755,-2.039 -4.598,-3.308 -7.028,-4.306 -1.694,-0.695 -3.44,-1.26 -5.195,-1.778 -0.533,-0.158 -1.067,-0.314 -1.602,-0.467 -0.423,-0.12 -1.415,-0.182 -1.706,-0.475 -0.163,-0.164 -0.219,-0.829 -0.319,-1.086 -0.29,-0.742 -0.746,-1.406 -1.238,-2.028 -1.267,-1.604 -2.684,-3.109 -4.006,-4.669 -1.885,-2.225 -3.846,-4.727 -6.488,-6.093 -2.586,-1.337 -5.676,-1.36 -8.498,-1.737 -3.891,-0.519 -7.781,-1.205 -11.532,-2.384 -3.822,-1.201 -7.456,-2.922 -11.023,-4.728 -3.663,-1.854 -7.305,-3.749 -10.957,-5.623 -2.605,-1.337 -5.21,-2.674 -7.814,-4.01 -0.94,-0.483 -1.881,-0.965 -2.821,-1.448 -0.332,-0.171 -1.091,-0.38 -1.322,-0.679 -0.276,-0.356 -0.137,-1.617 -0.176,-2.103 -0.074,-0.919 -0.177,-1.836 -0.295,-2.751 -0.239,-1.853 -0.546,-3.699 -0.885,-5.537 -0.777,-4.203 -1.645,-8.398 -2.173,-12.643 -0.941,-7.569 -0.728,-15.242 0.169,-22.802 0.978,-8.24 2.138,-16.418 0.993,-24.707 -1.061,-7.681 -3.678,-14.928 -7.288,-21.766 -2.971,-5.626 -6.286,-12.469 -12.586,-14.964 -0.211,-0.084 -0.424,-0.162 -0.639,-0.234 -0.647,-0.218 -0.676,-0.24 -0.722,-0.926 -0.065,-0.965 -0.075,-1.935 -0.029,-2.901 0.091,-1.889 0.401,-3.766 0.945,-5.578 0.522,-1.741 1.212,-3.618 2.222,-5.142 0.327,-0.495 0.436,-0.345 0.977,-0.191 0.426,0.121 0.854,0.233 1.287,0.327 0.683,0.148 1.374,0.256 2.071,0.304 1.985,0.139 4.438,-0.011 6.179,-1.117 1.967,-1.25 1.114,-3.649 1.832,-5.527 0.391,-1.023 1.167,-1.893 1.437,-2.961 0.205,-0.811 0.009,-1.642 -0.034,-2.46 -0.066,-1.256 -0.04,-2.688 0.251,-3.91 0.243,-1.02 1.157,-1.554 2.004,-2.048 0.832,-0.485 2.261,-1.023 2.621,-2.035 0.253,-0.713 -0.087,-1.518 -0.384,-2.168 -1.416,-3.096 -3.695,-5.723 -4.907,-8.94 -0.297,-0.787 -0.565,-1.678 -0.309,-2.512 0.244,-0.796 0.86,-1.422 1.153,-2.202 0.713,-1.897 0.195,-3.593 -0.51,-5.372 -0.415,-1.048 -0.581,-2.157 -0.729,-3.27 -0.261,-1.965 -0.531,-3.925 -0.706,-5.896 z"
   id="path74"
   sodipodi:nodetypes="cccccccccccccccccccsccccccscccsccccccccccccccccccccccssccccsccccccccccsccccccsccccssccsccccscccsccccccccscccsccccccccccccsscccccccccc" />
    </g>
    &#10;    
    &#10;    
    &#10;    
</g></g><use
     x="0"
     y="0"
     xlink:href="#g76"
     id="use1"
     transform="matrix(-1,0,0,1,430.64054,-1.5384192e-7)" /></g><g
   id="g3"
   transform="matrix(0.970299,0,0,0.970299,5.9996868,15.913286)"
   style="stroke-width:5.15305;stroke-dasharray:none"><rect
     style="fill:none;stroke:#e4695e;stroke-width:5.15305;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none"
     id="rect9"
     width="103.20786"
     height="103.20786"
     x="164.27303"
     y="248.98172" /><g
     id="g2"
     transform="translate(-12.872356,-9.2022531)"
     style="stroke-width:5.15305;stroke-dasharray:none"><text
       xml:space="preserve"
       style="font-size:85.3333px;line-height:1;font-family:Tahoma;-inkscape-font-specification:Tahoma;text-align:center;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;direction:ltr;text-anchor:middle;fill:none;stroke:#e4695e;stroke-width:5.15305;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none"
       x="215.10088"
       y="349.57956"
       id="text9"><tspan
         sodipodi:role="line"
         id="tspan9"
         x="215.10088"
         y="349.57956"
         style="font-size:85.3333px;fill:#e4695e;fill-opacity:1;stroke:none;stroke-width:5.15305;stroke-dasharray:none">z<tspan
   style="font-size:85.3333px;baseline-shift:super;fill:#e4695e;fill-opacity:1;stroke:none;stroke-width:5.15305;stroke-dasharray:none"
   id="tspan10" /></tspan></text><text
       xml:space="preserve"
       style="font-size:53.3333px;line-height:1;font-family:Tahoma;-inkscape-font-specification:Tahoma;text-align:center;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;direction:ltr;text-anchor:middle;fill:none;stroke:#e4695e;stroke-width:5.15305;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none"
       x="247.10088"
       y="309.57956"
       id="text2"><tspan
         sodipodi:role="line"
         id="tspan2"
         x="247.10088"
         y="309.57956"
         style="font-size:53.3333px;fill:#e4695e;fill-opacity:1;stroke:none;stroke-width:5.15305;stroke-dasharray:none">3</tspan></text></g></g><use
   x="0"
   y="0"
   xlink:href="#g3"
   id="use3"
   transform="translate(153.10636)" /><use
   x="0"
   y="0"
   xlink:href="#use3"
   id="use4"
   transform="translate(-306)" /></svg>

<a href="https://www.dimensions.com/element/sitting-male-side-1"
id="cubiclabel">Dimensions.com</a>

</div>

# Typical seat height

According to [dimensions.com](https://www.dimensions.com), 115
<a href="#cz" class="tool" data-bs-toggle="tooltip"
data-bs-title="hundredths of a zem">centizem</a>
(<a href="#cz" id="centizem" class="tool" data-bs-toggle="tooltip"
data-bs-title="centizem">cz</a>) is the [typical seat
height](https://www.dimensions.com/element/sitting-female-side-1#:~:text=Seat%20Height%20(Typical)%3A-,18%E2%80%9D%20%7C%2046%20cm,-Style%3A%20Casual)
for both men and women age 25 to 45. A box📦that is the size of a cubic
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="zone equatorial meter">zem</span>
(<a href="#z3" id="cubiczem" class="tool" data-bs-toggle="tooltip"
data-bs-title="cubic zem">z³</a>) would likely fit under a typical chair
or in between the shins of two people sitting in front of each other
with their knees and feet1
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a> apart and their legs🦵bent at 25
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="a hundredth of a turn">centiturn</span> angles.

# Perpetually setting sun

In [Slovak](https://sk.wikipedia.org/wiki/Zem)🇸🇰,
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zone equatorial meter">zem</a> means Earth🌍. This is
fitting because all Dec units are based on physical attributes of the
Earth🌏. At the Equator, the Earth🌎rotates on its axis at a speed of
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span>1.00224
<a href="#v" class="tool" data-bs-toggle="tooltip"
data-bs-title="omegars">v</a>. If we could indefinitely maintain this
speed while flying West in an airplane✈️towards the setting sun️, we
would be able to perpetually fly [into the
sunset](https://tvtropes.org/pmwiki/pmwiki.php/Main/RidingIntoTheSunset)🌅.

# Airplane cruising speed

To travel fast enough for a perpetual sunset, the airplane ️would need to
surpass the [speed of
sound](https://en.wikipedia.org/wiki/Speed_of_sound#:~:text=the%20distance%20travelled%20per%20unit%20of%20time%20by%20a%20sound%20wave)🔊(<a href="#sos" id="speedofsound" class="tool" data-bs-toggle="tooltip"
data-bs-title="speed of sound">sos</a>), which at 15
<a href="#deg" class="tool" data-bs-toggle="tooltip"
data-bs-title="degrees">°</a>
[Celsius](https://en.wikipedia.org/wiki/Celsius#:~:text=the%20unit%20of%20temperature%20on%20the%20Celsius%20temperature%20scale)
and 1 [standard
atmosphere](https://en.wikipedia.org/wiki/Standard_atmosphere_(unit)#:~:text=a%20unit%20of%20pressure%20defined%20as%20101325%20Pa)
is 0.735048 <a href="#v" class="tool" data-bs-toggle="tooltip"
data-bs-title="omegars">v</a> or Mach 1. [Mach
numbers](https://en.wikipedia.org/wiki/Mach_number) are relative to the
<a href="#sos" class="tool" data-bs-toggle="tooltip"
data-bs-title="speed of sound">sos</a>, which varies greatly by air
temperature and pressure. The cruising speed of a [Boeing
747](https://en.wikipedia.org/wiki/Boeing_747#:~:text=sweep%2C%20allowing%20a-,Mach%C2%A00.85,-%28490%C2%A0kn;%20900)
is <span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span>0.54
<a href="#v" class="tool" data-bs-toggle="tooltip"
data-bs-title="omegars">v</a> or Mach <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>0.85.

The highway🛣️speed of a car🚗is roughly tenfold slower than the cruising
speed of an airplane️. If we are driving on a highway ️at a speed of 50
<a href="#mv" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliomegars">mv</a> and our exit is 1000
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zems">z</a> away, we will have 20 <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="hundred thousandths of a day">centimillidays</span>
(<a href="#cmd" id="centimilliday" class="tool" data-bs-toggle="tooltip"
data-bs-title="centimilliday">cmd</a>) until we have to exit the
highway️. To ensure we do not miss our exit, we can periodically check a
countdown of the remaining
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zems">z</a>: ${zLeft}.

# Centimilliday (cmd)

Dec refers to <a href="#cmd" class="tool" data-bs-toggle="tooltip"
data-bs-title="centimillidays">cmd</a> as <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="hundred thousandths of a day">beats</span>
(<a href="#b" id="beat" class="tool" data-bs-toggle="tooltip"
data-bs-title="beats">b</a>) because they are similar in duration to
heart❤️beats or [musical
beats](https://en.wikipedia.org/wiki/Beat_(music)#:~:text=I-,n%20music%20and%20music%20theory%2C%20the%20beat%20is%20the%20basic%20unit%20of%20time,-%2C%20the).
In Dec, 1 <a href="#d" class="tool" data-bs-toggle="tooltip"
data-bs-title="day">d</a> = 100 <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="hundredths of a day">centiday</span>
(<a href="#cd" id="centiday" class="tool" data-bs-toggle="tooltip"
data-bs-title="centidays">cd</a>) = <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="a hundred thousand">10<sup>5</sup></span>
<a href="#b" class="tool" data-bs-toggle="tooltip"
data-bs-title="beats">b</a> = <span class="tool"
data-bs-toggle="tooltip" data-bs-title="a million">10<sup>6</sup></span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="millionths of a day">microdays</span>
(<a href="#ud" id="microday" class="tool" data-bs-toggle="tooltip"
data-bs-title="microdays">µd</a>), 1
<a href="#mc" id="millitaur" class="tool" data-bs-toggle="tooltip"
data-bs-title="millitaur">mc</a> = 100 <span class="tool"
data-bs-toggle="tooltip" data-bs-title="thousands of zem">kilozem</span>
(<a href="#kz" id="kilozem" class="tool" data-bs-toggle="tooltip"
data-bs-title="thousands of zems">kz</a>) = <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="a hundred thousand">10<sup>5</sup></span>
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zems">z</a> = <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a million">10<sup>6</sup></span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="tenths of a zem">decizems</span>
(<a href="#dz" id="decizem" class="tool" data-bs-toggle="tooltip"
data-bs-title="decizems">dz</a>) = <span class="tool"
data-bs-toggle="tooltip" data-bs-title="a million">10<sup>6</sup></span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="millionths of a taur">nanotaurs</span>
(<a href="#nc" id="nanotaur" class="tool" data-bs-toggle="tooltip"
data-bs-title="nanotaurs">nc</a>), and therefore, 1
<a href="#mv" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliomegar">mv</a> = $\text{mc}\over\text d$ =
$\text {kz}\over\text {cd}$ = $\text z\over\text b$ =
$\text {dz}\over\text{µd}$ = $\text {nc}\over\text{µd}$. A
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="centiday">cd</span> is <span class="color960">96%</span>
of a quarter hour and a
<a href="#b" class="tool" data-bs-toggle="tooltip"
data-bs-title="beat">b</a> is <span class="color864">86.4%</span> of a
second.

# heart rate tempo

A [normal resting
heart❤️rate](https://en.wikipedia.org/wiki/Heart_rate#:~:text=heart%20rate%20is-,60–100%20bpm,-.%20An%20ultra%2Dtrained)
is between 100 and 166.<span class="vinculum">6</span>
<a href="#b" class="tool" data-bs-toggle="tooltip"
data-bs-title="beats">b</a> per
<a href="#md" class="tool" data-bs-toggle="tooltip"
data-bs-title="millidays">md</a>
(<a href="#bpm" id="beatpermilliday" class="tool"
data-bs-toggle="tooltip" data-bs-title="beats per milliday">bpm</a>).
The unofficial anthem of the Dec measurement system, “[Turn the beat
around](https://en.wikipedia.org/wiki/Turn_the_Beat_Around#:~:text=a%20disco%20song%20written%20by%20Gerald%20Jackson%20and%20Peter%20Jackson%2C%20and%20performed%20by%20American%20actress%20and%20singer%20Vicki%20Sue%20Robinson%20in%201976)”,
has a
[tempo](https://en.wikipedia.org/wiki/Tempo#:~:text=the%20speed%20or%20pace%20of%20a%20given%20composition)
of 188.64 <a href="#bpm" class="tool" data-bs-toggle="tooltip"
data-bs-title="beats per milliday">bpm</a>, which corresponds to the
*allegro* [tempo
marking](https://en.wikipedia.org/wiki/Tempo#Approximately_from_the_slowest_to_the_fastest).
A Dec clock⏰ticks at a rate of 100
<a href="#bpm" class="tool" data-bs-toggle="tooltip"
data-bs-title="beats per milliday">bpm</a>, $\text b^{-1}$,
$1\over\text b$, 1
[inverse](https://en.wikipedia.org/wiki/Multiplicative_inverse#:~:text=x%2C%20denoted%20by-,1/x%20or%20x%E2%88%921,-%2C%20is%20a%20number)
beat, or 1 perbeat
(<a href="#per" id="perbeat" class="tool" data-bs-toggle="tooltip"
data-bs-title="perbeat">p</a>), which is
<span class="colorIob">1.15<span class="vinculum">740</span></span>
times more frequent than a
[Hertz](https://en.wikipedia.org/wiki/Hertz#:~:text=one%20event%20(or%20cycle)).

# Frequency period wavelength

Dec uses <a href="#per" class="tool" data-bs-toggle="tooltip"
data-bs-title="perbeat">p</a>, <span class="tool"
data-bs-toggle="tooltip" data-bs-title="beats">b</span>, and
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</span>, often with metric prefixes, to measure the
[frequency](https://en.wikipedia.org/wiki/Frequency#:~:text=the%20number%20of%20occurrences%20of%20a%20repeating%20event%20per%20unit%20of%20time),
[period](https://en.wikipedia.org/wiki/Frequency#:~:text=the%20reciprocal%20of%20the%20frequency),
and
[wavelength](https://en.wikipedia.org/wiki/Wavelength#:~:text=the%20distance%20over%20which%20the%20wave%27s%20shape%20repeats),
respectively, of a sound or light wave. The equations below show how
frequency, period, and wavelength are related to each other and to
speed. The speed of light
(<a href="#sol" id="speedoflight" class="tool" data-bs-toggle="tooltip"
data-bs-title="speed of light">sol</a>) is roughly 647.551657
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousands of omegars">kiloomegars</span>
(<a href="#kv" id="kiloomegar" class="tool" data-bs-toggle="tooltip"
data-bs-title="kiloomegars">kv</a>), which is about 881 thousand times
faster than the <a href="#sos" class="tool" data-bs-toggle="tooltip"
data-bs-title="speed of sound">sos</a>.

frequency = speed ÷ wavelength = 1 ÷ period

period = wavelength ÷ speed = 1 ÷ frequency

wavelength = speed × period = speed ÷ frequency

The frequency range of the
[visible](https://en.wikipedia.org/wiki/Visible_spectrum#:~:text=the%20band%20of%20the%20electromagnetic%20spectrum%20that%20is%20visible%20to%20the%20human%20eye)
spectrum of light is <span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span>345.6 to <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>914.4
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="trillions of perbeats">teraperbeats</span>
(<a href="#Tp" id="teraperbeat" class="tool" data-bs-toggle="tooltip"
data-bs-title="teraperbeats">Tp</a>). The range of sound frequencies
which can be
[audible](https://en.wikipedia.org/wiki/Hearing_range#:~:text=the%20frequency%20range%20that%20can%20be%20heard%20by%20humans)👂for
humans is <span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span>[10.368](https://en.wikipedia.org/wiki/Hearing_range#:~:text=humans%20can%20hear%20sound%20as%20low%20as%2012%C2%A0Hz)
to <span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span>[24192](https://en.wikipedia.org/wiki/Hearing_range#:~:text=8%5D%20and-,as%20high%20as%2028%C2%A0kHz,-%2C%20though%20the%20threshold)
<a href="#per" class="tool" data-bs-toggle="tooltip"
data-bs-title="perbeats">p</a>. The period and wavelength that
correspond to the frequency chosen by the range input below are 1000 ÷
${iobs} <a href="#per" class="tool" data-bs-toggle="tooltip"
data-bs-title="perbeats">p</a> = ${parseFloat((1000 / iobs).toFixed(3))}
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a beat">millibeats</span>
(<a href="#mb" id="millibeat" class="tool" data-bs-toggle="tooltip"
data-bs-title="millibeats">mb</a>) and 735.048
<a href="#mv" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliomegars">mv</a> ÷ ${iobs}
<a href="#per" class="tool" data-bs-toggle="tooltip"
data-bs-title="perbeats">p</a> = ${parseFloat((735.048 /
iobs).toFixed(3))} <a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a>.

``` {ojs}
//| echo: false
//| label: iobinput
//| class: freqcomponent
// https://observablehq.com/@freedmand/sounds
viewof iobs = Inputs.range([1, 9999], { step: 1,  value: 380, label: "Frequency" })
```

``` {ojs}
//| echo: false
//| label: beatinput
//| class: freqcomponent
// https://observablehq.com/@freedmand/sounds
viewof beats = Inputs.range([1, 999], { step: 1,  value: 1, label: "Duration" })
```

``` {ojs}
//| echo: false
//| label: iobplayer
//| class: freqcomponent
// https://observablehq.com/@freedmand/sounds
Play((t) => Math.sin(iobs / .864 * t * 2 * Math.PI), beats * .864, iobs)
```

# Octave equals decastep

In addition to <a href="#per" class="tool" data-bs-toggle="tooltip"
data-bs-title="perbeats">p</a>, the limits of human hearing can be
expressed in decioctaves
(<a href="#do" id="decioctave" class="tool" data-bs-toggle="tooltip"
data-bs-title="decioctaves">do</a>). The approximate audible range for
humans is <span class="color3">3</span> to
<span class="color3">103</span>
<a href="#do" class="tool" data-bs-toggle="tooltip"
data-bs-title="decioctaves">do</a>. For comparision, the
[range](https://en.wikipedia.org/wiki/Range_(music)#:~:text=the%20distance%20from%20the%20lowest%20to%20the%20highest%20pitch%20it%20can%20play)
of an 88-key piano is <span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span>23.76 to <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>3616.64
<a href="#per" class="tool" data-bs-toggle="tooltip"
data-bs-title="perbeats">p</a>, which is roughly
<span class="color8">8</span> to <span class="color0">80</span>
<a href="#do" class="tool" data-bs-toggle="tooltip"
data-bs-title="decioctaves">do</a>. The equations below show how a
decimal
[octave](https://en.wikipedia.org/wiki/Octave#:~:text=an%20interval%20between%20two%20notes%2C%20one%20having%20twice%20the%20frequency%20of%20vibration%20of%20the%20other)
(<a href="#o" id="octave" class="tool" data-bs-toggle="tooltip"
data-bs-title="octave">o</a>) can be used to calculate
<a href="#per" class="tool" data-bs-toggle="tooltip"
data-bs-title="perbeat">p</a>,
<a href="#do" class="tool" data-bs-toggle="tooltip"
data-bs-title="decioctave">do</a>, and musical note
(<a href="#n" id="note" class="tool" data-bs-toggle="tooltip"
data-bs-title="musical note">n</a>) values.

$$\text{o} = \log_2\\\left(\frac{\text{p}}{14.1275}\right) = \frac{\text{do}}{10}$$

do = 10 × o = 10 × ⌊o⌋ + n

p = 14.1275 × 2<sup>o</sup>

n = do − 10 × ⌊o⌋ = 10 × (o − ⌊o⌋)

# Color and sound

Each <a href="#do" class="tool" data-bs-toggle="tooltip"
data-bs-title="decioctave">do</a> has a corresponding
<a href="#n" class="tool" data-bs-toggle="tooltip"
data-bs-title="musical note">n</a> that determines its color label. The
idea of linking colors and musical notes dates back the
<span class="color704">1704</span> book by [Isaac
Newton](https://en.wikipedia.org/wiki/Isaac_Newton#:~:text=,an%20English%20polymath,-active%20as%20a)
entitled
[Optiks](https://en.wikipedia.org/wiki/Opticks#:~:text=a%20collection%20of%20three%20books%20by%20Isaac%20Newton)[1].
On <span class="tool" data-bs-toggle="tooltip"
data-bs-title="May 20, 2025"><span class="color025">2025</span><span class="mono">+</span><span class="colorD080">080</span></span>,
I read [The Color of Sound](https://www.flutopedia.com/sound_color.htm)
by [Clint Goss](https://www.clintgoss.com)[2], which presents a
mathematical method of associating musical notes with colors by
transforming sound frequencies into light frequencies.

The x-axis of the lollipop🍭plot below shows the rounded
<a href="#per" class="tool" data-bs-toggle="tooltip"
data-bs-title="perbeat">p</a> values of the ten Dec notes in Octave 4.
The lollipops and the
<a href="#do" class="tool" data-bs-toggle="tooltip"
data-bs-title="decioctaves">do</a> values above them are labeled with
the ten Dec colors. Click and hold each lollipop to hear its note.

``` {ojs}
//| echo: false
//| label: lollipop
//| class: musicchart
// https://observablehq.com/@mcmire/tone-map
{
  const points = origs.map((orig, i) => ({
    origin: orig,
    x: orig,
    ratio: Fraction(1, 1),
    label: labels[i],
    color: colors[i],
    freq: hertz[i],
    alwaysShowLabel: true
  }));
  return renderGraph(points, {
    xAxis: {
      ticks: origs.map(Math.round)
    },
  });
}
```

# Système international d’unités

As a scientist of European origin, I have a strong preference for the
[International System of
Units](https://en.wikipedia.org/wiki/International_System_of_Units#:~:text=the%20world%27s%20most%20widely%20used%20system%20of%20measurement)
(<a href="#si" id="internationalsystemofunits" class="tool"
data-bs-toggle="tooltip"
data-bs-title="International System of Units">SI</a>) over the United
States🇺🇸(<a href="#us" id="unitedstates" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a>) [customary measurement
system](https://en.wikipedia.org/wiki/Imperial_and_US_customary_measurement_systems).
Nevertheless, having grown up in the
<a href="#us" id="unitedstates" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a>, I understand the animosity towards
unfamiliar measurement units expressed by Grandpa Simpson in “A Star Is
Burns”, Season 6 Episode 18 of [the
Simpsons](https://en.wikipedia.org/wiki/The_Simpsons#:~:text=an%20American%20animated%20sitcom).

![](../asset/metric.jpg)

# US customary units

Dec redefines
<a href="#us" id="unitedstates" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> customary units to facilitate
conversion with
<a href="#si" id="internationalsystemofunits" class="tool"
data-bs-toggle="tooltip"
data-bs-title="International System of Units">SI</a> and Dec units. The
values in the first column of [unit
conversion](https://en.wikipedia.org/wiki/Conversion_of_units#:~:text=the%20conversion%20of%20the%20unit%20of%20measurement%20in%20which%20a%20quantity%20is%20expressed)
table below are approximate [fold
changes](https://en.wikipedia.org/wiki/Fold_change#:~:text=measure%20describing%20how%20much%20a%20quantity%20changes%20between%20an%20original%20and%20a%20subsequent%20measurement)
from original to redefined
<a href="#us" id="unitedstates" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> customary units. A fold change of
<span class="color0">1</span> means <span class="color0">0</span>
[change](https://en.wikipedia.org/wiki/Relative_change#:~:text=compare%20two%20quantities%20while%20taking%20into%20account%20the%20%22sizes%22%20of%20the%20things%20being%20compared)
is required for alignment with the
<a href="#si" id="internationalsystemofunits" class="tool"
data-bs-toggle="tooltip"
data-bs-title="International System of Units">SI</a> and Dec units shown
in the second and third column, respectively.

Unlike Dec and <a href="#si" class="tool" data-bs-toggle="tooltip"
data-bs-title="International System of Units">SI</a>, the
<a href="#us" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> customary measurement system does
not use metric prefixes to scale units by [powers of
ten](https://en.wikipedia.org/wiki/Power_of_10#:~:text=any%20of%20the%20integer%20powers%20of%20the%20number%20ten).
Redefined <a href="#us" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> customary units can serve as
convenient reference points and provide intuitive names for certain
fractions and multiples of Dec and
<a href="#si" class="tool" data-bs-toggle="tooltip"
data-bs-title="International System of Units">SI</a> units. For example,
after being redefined, one hand is equal to a decimeter or a quarter
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a>.

## Unit conversion tables

With the exception of a horse🐴length, the units in the table below can
be divided into two groups:
[human-based](https://en.wikipedia.org/wiki/List_of_human-based_units_of_measurement#:~:text=units%20of%20measurement%20based%20on%20human%20body%20parts)
length units and
[surveying](https://en.wikipedia.org/wiki/Surveying#:~:text=determining%20the%20terrestrial%20positions%20of%20points%20based%20on%20the%20distances%20and%20angles%20between%20them)
distance units. A horse length is about as long as a
[cruiser](https://en.wikipedia.org/wiki/Cruiser_(motorcycle)#:~:text=a%20motorcycle%20in%20the%20style%20of%20those%20made%20by%20American%20manufacturers)
or [touring
motorcycle](https://en.wikipedia.org/wiki/Touring_motorcycle#:~:text=a%20type%20of%20motorcycle%20designed%20for%20touring)🏍️,
approximately equivalent to the height of the tallest
basketball🏀players, and roughly half of the length of a
[compact](https://en.wikipedia.org/wiki/Compact_car#:~:text=sits%20between%20subcompact%20cars%20and%20mid%2Dsize%20cars)
to
[mid-size](https://en.wikipedia.org/wiki/Mid-size_car#:~:text=larger%20than%20compact%20cars%20and%20smaller%20than%20full%2Dsize%20cars)
car.

<table style="width:100%;">
<colgroup>
<col style="width: 47%" />
<col style="width: 44%" />
<col style="width: 7%" />
</colgroup>
<thead>
<tr>
<th><a href="#us" class="bold tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> length units</th>
<th><a href="#z" class="bold tool" data-bs-toggle="tooltip"
data-bs-title="zone equatorial meter">zem</a></th>
<th>meter</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="colorInch">0.9843</span> <a
href="https://en.wikipedia.org/wiki/Inch">inches</a></td>
<td><span class="mono">0.0625</span></td>
<td><span class="mono">0.025</span></td>
</tr>
<tr>
<td><span class="colorInch">0.9843</span> <a
href="https://en.wikipedia.org/wiki/Palm_(unit)">palms</a></td>
<td><span class="mono">0.1875</span></td>
<td><span class="mono">0.075</span></td>
</tr>
<tr>
<td><span class="colorInch">0.9843</span> <a
href="https://en.wikipedia.org/wiki/Hand_(unit)">hands</a></td>
<td><span class="mono">0.25</span></td>
<td><span class="mono">0.1</span></td>
</tr>
<tr>
<td><span class="colorInch">0.9843</span> <a
href="https://en.wikipedia.org/wiki/Shaftment">shaftments</a></td>
<td><span class="mono">0.375</span></td>
<td><span class="mono">0.15</span></td>
</tr>
<tr>
<td><span class="colorMile">0.9942</span> <a
href="https://en.wikipedia.org/wiki/Link_(unit)">links</a></td>
<td><span class="mono">0.5</span></td>
<td><span class="mono">0.2</span></td>
</tr>
<tr>
<td><span class="colorInch">0.9843</span> <a
href="https://en.wikipedia.org/wiki/Span_(unit)">spans</a></td>
<td><span class="mono">0.5625</span></td>
<td><span class="mono">0.225</span></td>
</tr>
<tr>
<td><span class="colorInch">0.9843</span> <a
href="https://en.wikipedia.org/wiki/Foot_(unit)">feet</a></td>
<td><span class="mono">0.75</span></td>
<td><span class="mono">0.3</span></td>
</tr>
<tr>
<td><span class="colorInch">0.9843</span> <a
href="https://en.wikipedia.org/wiki/Pace_(unit)">steps</a></td>
<td><span class="mono">1.875</span></td>
<td><span class="mono">0.75</span></td>
</tr>
<tr>
<td><span class="colorInch">0.9843</span> <a
href="https://en.wikipedia.org/wiki/Yard">yards</a></td>
<td><span class="mono">2.25</span></td>
<td><span class="mono">0.9</span></td>
</tr>
<tr>
<td><span class="colorInch">0.9843</span> <a
href="https://en.wikipedia.org/wiki/Fathom">fathoms</a></td>
<td><span class="mono">4.5</span></td>
<td><span class="mono">1.8</span></td>
</tr>
<tr>
<td><span class="color0">1</span> <a
href="https://en.wikipedia.org/wiki/Horse_length">horse length</a></td>
<td><span class="mono">6</span></td>
<td><span class="mono">2.4</span></td>
</tr>
<tr>
<td><span class="colorMile">0.9942</span> <a
href="https://en.wikipedia.org/wiki/Rod_(unit)">rods</a></td>
<td><span class="mono">12.5</span></td>
<td><span class="mono">5</span></td>
</tr>
<tr>
<td><span class="colorMile">0.9942</span> <a
href="https://en.wikipedia.org/wiki/Chain_(unit)">chains</a></td>
<td><span class="mono">50</span></td>
<td><span class="mono">20</span></td>
</tr>
<tr>
<td><span class="colorMile">0.9942</span> <a
href="https://en.wikipedia.org/wiki/Furlong">furlongs</a></td>
<td><span class="mono">500</span></td>
<td><span class="mono">200</span></td>
</tr>
<tr>
<td><span class="colorMile">0.9942</span> <a
href="https://en.wikipedia.org/wiki/Mile">miles</a></td>
<td><span class="mono">4000</span></td>
<td><span class="mono">1600</span></td>
</tr>
<tr>
<td><span class="colorMile">0.9942</span> <a
href="https://en.wikipedia.org/wiki/League_(unit)">leagues</a></td>
<td><span class="mono">12000</span></td>
<td><span class="mono">4800</span></td>
</tr>
</tbody>
</table>

When we divide distance by time, we get speed. Coincidentally, a mile
per hour is very close to a
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a> per
<a href="#b" class="tool" data-bs-toggle="tooltip"
data-bs-title="beats">b</a> and a
[knot](https://en.wikipedia.org/wiki/Knot_(unit)#:~:text=a%20unit%20of%20speed%20equal%20to%20one%20nautical%20mile%20per%20hour)
is almost exactly the same as 10/9
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a> per
<a href="#b" class="tool" data-bs-toggle="tooltip"
data-bs-title="beats">b</a>. Dec refers to 10/9
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a> as a
[cubit](https://en.wikipedia.org/wiki/Cubit#:~:text=an%20ancient%20unit%20of%20length%20based%20on%20the%20distance%20from%20the%20elbow%20to%20the%20tip%20of%20the%20middle%20finger)
or
[ell](https://en.wikipedia.org/wiki/Ell#:~:text=a%20northwestern%20European%20unit%20of%20measurement)
(ℓ). An <a href="#mv" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliomegar">mv</a> can also be expressed as one ℓ per
Dec second
(<a href="#s" id="second" class="tool" data-bs-toggle="tooltip"
data-bs-title="Dec second">s</a>). There are 86400
<a href="#si" class="tool" data-bs-toggle="tooltip"
data-bs-title="International System of Units">SI</a> seconds or 90000
<a href="#s" id="second" class="tool" data-bs-toggle="tooltip"
data-bs-title="Dec second">s</a> in one day.

<table>
<colgroup>
<col style="width: 36%" />
<col style="width: 31%" />
<col style="width: 32%" />
</colgroup>
<thead>
<tr>
<th><a href="#us" class="bold tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> speed units</th>
<th><a href="#mv" class="bold tool" data-bs-toggle="tooltip"
data-bs-title="milliomegars">mv</a></th>
<th><a href="#km" class="bold tool" data-bs-toggle="tooltip"
data-bs-title="kilometers">km</a>/hour</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="colorInch">0.9843</span> <a
href="https://en.wikipedia.org/wiki/Inch_per_second">inches per
second</a></td>
<td><span class="mono">0.054</span></td>
<td><span class="mono">0.09</span></td>
</tr>
<tr>
<td><span class="colorInch">0.9843</span> <a
href="https://en.wikipedia.org/wiki/Foot_per_second">feet per
second</a></td>
<td><span class="mono">0.648</span></td>
<td><span class="mono">1.08</span></td>
</tr>
<tr>
<td><span class="colorMile">0.9942</span> <a
href="https://en.wikipedia.org/wiki/Miles_per_hour">miles per
hour</a></td>
<td><span class="mono">0.96</span></td>
<td><span class="mono">1.6</span></td>
</tr>
</tbody>
</table>

# Are hectare acre

A square <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a thousand zems">kilozem</span>
(<a href="#kz2" id="squarekilozem" class="tool" data-bs-toggle="tooltip"
data-bs-title="square kilozem">kz²</a>) is 1 <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="sixteen hundred ares">hexakilare</span>, 16 <a
href="https://en.wikipedia.org/wiki/Hectare#:~:text=a%20square%20with%20100%2Dmetre%20sides"
class="tool" data-bs-toggle="tooltip"
data-bs-title="hundreds of ares">hectares</a>, 1600
[ares](https://en.wikipedia.org/wiki/Hectare#Are), 40 Dec
[acres](https://en.wikipedia.org/wiki/Acre#:~:text=%20is-,a%20unit%20of%20land%20area,-used%20in%20the),
0.16 square <a
href="https://en.wikipedia.org/wiki/Kilometre#:~:text=a%20unit%20of%20length%20in%20the%20International%20System%20of%20Units"
class="tool" data-bs-toggle="tooltip"
data-bs-title="thousands of meters">kilometers</a>
(<a href="#km2" id="squarekilometer" class="tool"
data-bs-toggle="tooltip" data-bs-title="square kilometers">km²</a>),
0.0625 Dec [square
miles](https://en.wikipedia.org/wiki/Square_mile#:~:text=US%20unit%20of%20measure%20for%20area),
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="a million">10<sup>6</sup></span>
<a href="#z2" class="tool" data-bs-toggle="tooltip"
data-bs-title="square zems">z²</a>, or 1 megahexamilliare
(<a href="#Mx" id="megahexamilliare" class="tool"
data-bs-toggle="tooltip" data-bs-title="megahexamilliare">Mx</a>). A
<a href="#z2" class="tool" data-bs-toggle="tooltip"
data-bs-title="square zem">z²</a> is 1 <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="1.6 thousandths of an are">hexamilliare</span>
(<a href="#x" id="hexamilliare" class="tool" data-bs-toggle="tooltip"
data-bs-title="hexamilliare">x</a>), 16 square <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="tenths of a meter">decimeters</span>
(<a href="#dm2" id="squaredecimeter" class="tool"
data-bs-toggle="tooltip" data-bs-title="square decimeters">dm²</a>),
1.<span class="vinculum">7</span> Dec [square
feet](https://en.wikipedia.org/wiki/Square_foot#:~:text=the%20area%20of%20a%20square%20with%20sides%20of%201%20foot)🦶
(<a href="#f2" id="squarefoot" class="tool" data-bs-toggle="tooltip"
data-bs-title="square feet">f²</a>), or 256 Dec square inches
(<a href="#i2" id="squareinch" class="tool" data-bs-toggle="tooltip"
data-bs-title="square inch">i²</a>). A square <span class="tool"
data-bs-toggle="tooltip" data-bs-title="ten zem">decazem</span>
(<a href="#Dz2" id="squaredecazem" class="tool" data-bs-toggle="tooltip"
data-bs-title="square decazem">Dz²</a>) is 1 <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="sixteen hundredths of an are">hexadeciare</span>, 16
[square
meters](https://en.wikipedia.org/wiki/Square_metre#:~:text=the%20unit%20of%20area%20in%20the%20International%20System%20of%20Units)
(<a href="#m2" id="squaremeter" class="tool" data-bs-toggle="tooltip"
data-bs-title="square meters">m²</a>), <span class="tool"
data-bs-toggle="tooltip" data-bs-title="approximately">~</span>19.75 Dec
[square
yards](https://en.wikipedia.org/wiki/Square_yard#:~:text=U.S.%20customary%20unit%20of%20area),
or 100 <a href="#x" class="tool" data-bs-toggle="tooltip"
data-bs-title="hexamilliares">x</a>.

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 32%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th><a href="#us" class="bold tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> area units</th>
<th><a href="#cz2" class="bold tool" data-bs-toggle="tooltip"
data-bs-title="square centizem">cz²</a></th>
<th><a href="#cm2" class="bold tool" data-bs-toggle="tooltip"
data-bs-title="square centimeter">cm²</a></th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="colorSqIn">0.9688</span> <a
href="https://en.wikipedia.org/wiki/Square_inch">square inches</a></td>
<td><span class="mono">39.0625</span></td>
<td><span class="mono">6.25</span></td>
</tr>
<tr>
<td><span class="colorSqIn">0.9688</span> <a
href="https://en.wikipedia.org/wiki/Square_foot">square feet</a></td>
<td><span class="mono">5625</span></td>
<td><span class="mono">900</span></td>
</tr>
<tr>
<td><span class="colorSqIn">0.9688</span> <a
href="https://en.wikipedia.org/wiki/Square_yard">square yards</a></td>
<td><span class="mono">50625</span></td>
<td><span class="mono">8100</span></td>
</tr>
<tr>
<td><span class="colorSqMi">0.9884</span> <a
href="https://en.wikipedia.org/wiki/Acre">acres</a></td>
<td><span class="mono">25 × 10<sup>7</sup></span></td>
<td><span class="mono">4 × 10<sup>7</sup></span></td>
</tr>
<tr>
<td><span class="colorSqMi">0.9884</span> <a
href="https://en.wikipedia.org/wiki/Square_mile">square miles</a></td>
<td><span class="mono">16 × 10<sup>10</sup></span></td>
<td><span class="mono">256 × 10<sup>8</sup></span></td>
</tr>
</tbody>
</table>

<a href="#us" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> customary volume units have
intuitive names and scale by [powers of
two](https://en.wikipedia.org/wiki/Power_of_two#:~:text=a%20number%20of%20the%20form%202n%20where%20n%20is%20an%20integer).

<table>
<colgroup>
<col style="width: 39%" />
<col style="width: 30%" />
<col style="width: 30%" />
</colgroup>
<thead>
<tr>
<th><span class="bold tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</span> volume units</th>
<th><a href="#cz3" class="bold tool" data-bs-toggle="tooltip"
data-bs-title="cubic centizem">cz³</a></th>
<th><a href="#cm3" class="bold tool" data-bs-toggle="tooltip"
data-bs-title="cubic centimeter">cm³</a></th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="colorDrop">1.2549</span> <a
href="https://en.wikipedia.org/wiki/Drop_(unit)">drops</a></td>
<td><span class="mono">1</span></td>
<td><span class="mono">0.064</span></td>
</tr>
<tr>
<td><span class="colorCuIn">0.9535</span> <a
href="https://en.wikipedia.org/wiki/Cubic_inch">cubic inches</a></td>
<td><span class="mono">244.140625</span></td>
<td><span class="mono">15.625</span></td>
</tr>
<tr>
<td><span class="colorFlOz">1.0821</span> <a
href="https://en.wikipedia.org/wiki/Tablespoon">tablespoons</a></td>
<td><span class="mono">250</span></td>
<td><span class="mono">16</span></td>
</tr>
<tr>
<td><span class="colorFlOz">1.0821</span> <a
href="https://en.wikipedia.org/wiki/Ounce#Fluid_ounce">ounces</a></td>
<td><span class="mono">500</span></td>
<td><span class="mono">32</span></td>
</tr>
<tr>
<td><span class="colorFlOz">1.0821</span> <a
href="https://en.wikipedia.org/wiki/Wine_glass#Capacity_measure">wineglasses</a></td>
<td><span class="mono">1000</span></td>
<td><span class="mono">64</span></td>
</tr>
<tr>
<td><span class="colorGall">0.9468</span> <a
href="https://en.wikipedia.org/wiki/Cup_(unit)">cups</a></td>
<td><span class="mono">3500</span></td>
<td><span class="mono">224</span></td>
</tr>
<tr>
<td><span class="colorGall">0.9468</span> <a
href="https://en.wikipedia.org/wiki/Pint">pints</a></td>
<td><span class="mono">7000</span></td>
<td><span class="mono">448</span></td>
</tr>
<tr>
<td><span class="colorGall">0.9468</span> <a
href="https://en.wikipedia.org/wiki/Quart">quarts</a></td>
<td><span class="mono">14000</span></td>
<td><span class="mono">896</span></td>
</tr>
<tr>
<td><span class="colorGall">0.9468</span> <a
href="https://en.wikipedia.org/wiki/Gallon">gallons</a></td>
<td><span class="mono">56000</span></td>
<td><span class="mono">3584</span></td>
</tr>
<tr>
<td><span class="colorCuIn">0.9535</span> <a
href="https://en.wikipedia.org/wiki/Cubic_foot">cubic feet</a></td>
<td><span class="mono">421875</span></td>
<td><span class="mono">27000</span></td>
</tr>
<tr>
<td><span class="colorBarr">1.0735</span> <a
href="https://en.wikipedia.org/wiki/Keg#Specifications_for_a_U.S._1%E2%81%842_barrel_keg">kegs</a></td>
<td><span class="mono">1000000</span></td>
<td><span class="mono">64000</span></td>
</tr>
<tr>
<td><span class="colorBarr">1.0735</span> <a
href="https://en.wikipedia.org/wiki/Barrel_(unit)">barrels</a></td>
<td><span class="mono">2000000</span></td>
<td><span class="mono">128000</span></td>
</tr>
<tr>
<td><span class="colorCuIn">0.9535</span> <a
href="https://en.wikipedia.org/wiki/Cubic_yard">cubic yards</a></td>
<td><span class="mono">11390625</span></td>
<td><span class="mono">729000</span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 73%" />
<col style="width: 14%" />
<col style="width: 12%" />
</colgroup>
<thead>
<tr>
<th><a href="#us" class="bold tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> mass units</th>
<th>grain</th>
<th>gram</th>
</tr>
</thead>
<tbody>
<tr>
<td><span class="colorMass">0.9877</span> <a
href="https://en.wikipedia.org/wiki/Grain_(unit)">grains</a></td>
<td><span class="mono">1</span></td>
<td><span class="mono">0.064</span></td>
</tr>
<tr>
<td><span class="colorCara">0.96</span> <a
href="https://en.wikipedia.org/wiki/Carat_(mass)">carats</a></td>
<td><span class="mono">3</span></td>
<td><span class="mono">0.192</span></td>
</tr>
<tr>
<td><span class="colorAvOz">1.1288</span> <a
href="https://en.wikipedia.org/wiki/Ounce">ounces</a></td>
<td><span class="mono">500</span></td>
<td><span class="mono">32</span></td>
</tr>
<tr>
<td><span class="colorMass">0.9877</span> <a
href="https://en.wikipedia.org/wiki/Pound_(mass)">pounds</a></td>
<td><span class="mono">7000</span></td>
<td><span class="mono">448</span></td>
</tr>
<tr>
<td><span class="colorMass">0.9877</span> <a
href="https://en.wikipedia.org/wiki/Short_ton">tons</a></td>
<td><span class="mono">14000000</span></td>
<td><span class="mono">896000</span></td>
</tr>
</tbody>
</table>

# Drop wineglass keg

A cubic <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a zone equatorial meter">decizem</span>
(<a href="#dz3" id="cubicdecizem" class="tool" data-bs-toggle="tooltip"
data-bs-title="cubic decizem">dz³</a>) is 1 cubic <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="a millionth of a taur">nanotaur</span>
(<a href="#nc3" id="cubicnanotaur" class="tool" data-bs-toggle="tooltip"
data-bs-title="cubic nanotaur">nc³</a>), 1 Dec wineglass, 2 Dec ounces,
64 <span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a liter">milliliters</span>
(<a href="#mL" id="milliliter" class="tool" data-bs-toggle="tooltip"
data-bs-title="milliliters">mL</a>), 1000 Dec drops
(<a href="#g" id="gutta" class="tool" data-bs-toggle="tooltip"
data-bs-title="drops">g</a>), or 1000 cubic <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="a tenth of a zone equatorial meter">centizems</span>
(<a href="#cz3" id="cubiccentizem" class="tool" data-bs-toggle="tooltip"
data-bs-title="cubic centizem">cz³</a>). A
<a href="#dz3" class="tool" data-bs-toggle="tooltip"
data-bs-title="cubic decizem">dz³</a> of water🌊weighs $1\over7$ Dec
pounds, 64 grams, or 1000 Dec grains
(<a href="#g" class="tool" data-bs-toggle="tooltip"
data-bs-title="grain">g</a>). A Dec ounce
(<a href="#u" id="ounce" class="tool" data-bs-toggle="tooltip"
data-bs-title="ounce">u</a>) of water weighs $1\over14$ Dec pounds, 500
Dec <a href="#g" class="tool" data-bs-toggle="tooltip"
data-bs-title="grains">g</a>, or 32 grams. In Dec, the symbols
<a href="#g" class="tool" data-bs-toggle="tooltip"
data-bs-title="grain">g</a> and
<a href="#u" class="tool" data-bs-toggle="tooltip"
data-bs-title="ounce">u</a> can refer to either volume or mass. Mass
divided by volume is density.

<div class="column-margin" fig-align="center"
style="text-align:center;">

<img src="../asset/vitruvianMan.svg" id="vitruvian" />
[Wikimedia](https://commons.wikimedia.org/wiki/File:Da_Vinci_Vitruve_Luc_Viatour_2.svg)

</div>

A <a href="#z3" class="tool" data-bs-toggle="tooltip"
data-bs-title="cubic zem">z³</a> is 1 keg. A keg of water🌊weighs 64
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousands of grams">kilograms</span>, 128 Dec pounds, or
a 1000 Dec <span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousands of grains">kilograins</span>
(<a href="#kg" id="kilograin" class="tool" data-bs-toggle="tooltip"
data-bs-title="kilograins">kg</a>). If [Leonardo da
Vinci](https://en.wikipedia.org/wiki/Leonardo_da_Vinci#:~:text=an%20Italian%20polymath%20of%20the%20High%20Renaissance)’s
[Vitruvian
Man](https://en.wikipedia.org/wiki/Vitruvian_Man#:~:text=a%20drawing%20by%20the%20Italian%20Renaissance%20artist%20and%20scientist%20Leonardo%20da%20Vinci)
were 4 <a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zems">z</a> tall, we could measure 1
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a> from his knees to his feet🦶or from his
elbows💪to his fingertips. If he also weighed 1000 Dec
<a href="#kg" id="kilograin" class="tool" data-bs-toggle="tooltip"
data-bs-title="kilograins">kg</a>, his [body mass
index](https://en.wikipedia.org/wiki/Body_mass_index#:~:text=the%20body%20mass%20divided%20by%20the%20square%20of%20the%20body%20height)
(<a href="#bmi" id="bodymassindex" class="tool" data-bs-toggle="tooltip"
data-bs-title="body mass index">bmi</a>) would be 62.5
<a href="#kg" id="kilograin" class="tool" data-bs-toggle="tooltip"
data-bs-title="kilograins">kg</a> per
<a href="#x" class="tool" data-bs-toggle="tooltip"
data-bs-title="hexamilliares">x</a> ($\text {kg}\over\text x$) or 25
kilograms per <a href="#m2" class="tool" data-bs-toggle="tooltip"
data-bs-title="square meters">m²</a> ($\text {kilogram}\over\text m^2$).

# Body mass index (bmi)

A normal <a href="#bmi" class="tool" data-bs-toggle="tooltip"
data-bs-title="body mass index">bmi</a> ranges from 46.25 to 62.5
$\text {kg}\over\text x$ or 18.5 to 25 $\text {kg}\over\text m^2$. A
person with a <a href="#bmi" class="tool" data-bs-toggle="tooltip"
data-bs-title="body mass index">bmi</a> above 75
$\text {kg}\over\text x$ or 30 $\text {kg}\over\text m^2$ can be
classified as obese. A
<a href="#bmi" class="tool" data-bs-toggle="tooltip"
data-bs-title="body mass index">bmi</a> of ${kgrains}
<a href="#kg" id="kilograin" class="tool" data-bs-toggle="tooltip"
data-bs-title="kilograins">kg</a> ÷ ${zem2}
<a href="#x" class="tool" data-bs-toggle="tooltip"
data-bs-title="hexamilliares">x</a> = ${bmi} $\text {kg}\over\text x$ =
${kgrams} kilograms ÷ ${meter2}
<a href="#m2" class="tool" data-bs-toggle="tooltip"
data-bs-title="square meters">m²</a> = ${bmim2}
$\text {kilograms}\over\text m^2$ is considered ${bmiStr}.

``` {ojs}
//| echo: false
//| label: kginput
viewof kilograins = Inputs.range([0, 10000], {label: "Kilograins", value: 1000, step: 1})
```

``` {ojs}
//| echo: false
//| label: zinput
viewof zems = Inputs.range([0, 10], {label: "Zems", value: 4, step: 0.01})
```

# Centizem centimeter inch

<div class="column-page-right" fig-align="left"
style="text-align:center;font-size:.825rem;">

<img src="../asset/ruler1dz.svg" id="ruler" />
[Wikimedia](https://commons.wikimedia.org/wiki/File:Ruler_illustration.svg)

</div>

The longest length depicted in the image of a ruler📏above is 1
<a href="#dz" class="tool" data-bs-toggle="tooltip"
data-bs-title="decizem">dz</a>, 1
<a href="#nc" class="tool" data-bs-toggle="tooltip"
data-bs-title="nanotaur">nc</a>, 4 <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="hundredths of a meter">centimeters</span>, or $8\over5$
Dec inches, and the shortest length is $1\over2$
<a href="#mz" class="tool" data-bs-toggle="tooltip"
data-bs-title="millizems">mz</a>, $1\over5$ <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="thousandths of a meter">millimeters</span>, $1\over125$
Dec inches, or $1\over127$
<a href="#us" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> customary inches. A
<a href="#us" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> customary inch is $127\over2$
<a href="#mz" class="tool" data-bs-toggle="tooltip"
data-bs-title="millizems">mz</a>, $127\over5$ millimeters, or
$127\over125$ Dec inches. A Dec inch is $5\over2$ centimeters. A
centimeter is $5\over2$
<a href="#cz" class="tool" data-bs-toggle="tooltip"
data-bs-title="centizems">cz</a>. A
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a> is 4 decimeters. A decimeter is 4 Dec inches.

# Claude Boniface Collignon

In <span class="color788">1788</span>, [Claude Boniface
Collignon](https://en.wikipedia.org/wiki/Claude_Boniface_Collignon#:~:text=a%20French%20attorney%20who%20contributed%20to%20scientific%20and%20social%20reforms%20in%20the%20time%20of%20the%20French%20Revolution)
proposed measuring length in
<a href="#dz" class="tool" data-bs-toggle="tooltip"
data-bs-title="decizems">dz</a> or
<a href="#nc" class="tool" data-bs-toggle="tooltip"
data-bs-title="nanotaurs">nc</a> and tracking time in
<a href="#dek" class="tool" data-bs-toggle="tooltip"
data-bs-title="groups of ten days">deks</a>, <span class="tool"
data-bs-toggle="tooltip" data-bs-title="decidays">dd</span>,
<a href="#md" class="tool" data-bs-toggle="tooltip"
data-bs-title="millidays">md</a>,
<a href="#ud" class="tool" data-bs-toggle="tooltip"
data-bs-title="microdays">µd</a>, and <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="billionths of a day">nanodays</span>
(<a href="#nd" id="nanoday" class="tool" data-bs-toggle="tooltip"
data-bs-title="nanodays">nd</a>)[3]. On <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="April 9, 2025"><span class="color025">2025</span><span class="mono">+</span><span class="colorD039">039</span></span>,
while searching for units similar to <span class="tool"
data-bs-toggle="tooltip" data-bs-title="taur">c</span> and
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</span>, I noticed the definition of a
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="zone equatorial meter">zem</span>, 1
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a> = <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a hundred millionth">10<sup>-8</sup></span>
<a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taur">c</a> = 40 centimeters, in a table of [ten possible
length units](https://www.roma1.infn.it/~dagos/history/sm/node12.html)
from a <span class="color004">2004</span>
[arxiv](https://arxiv.org/abs/physics/0412078)
[article](https://www.roma1.infn.it/~dagos/history/sm/sm.html) entitled
“Why does the meter beat the second?”[4].

# Summary

This article introduces the Dec measurement system and describes how Dec
uses metric prefixes and the properties of the planet Earth🌍to define
units based on turns for geographic coordinates, compass directions,
dates, times, speeds, distances, areas, volumes, and weights. Each unit
has a unique name, such as
<a href="#lambda" class="tool" data-bs-toggle="tooltip"
data-bs-title="parallel">λ</a>,
<a href="#m" class="tool" data-bs-toggle="tooltip"
data-bs-title="meridian">m</a>,
<a href="#r" class="tool" data-bs-toggle="tooltip"
data-bs-title="rose">r</a>,
<a href="#y" class="tool" data-bs-toggle="tooltip"
data-bs-title="year">y</a>,
<a href="#d" class="tool" data-bs-toggle="tooltip"
data-bs-title="day">d</a>,
<a href="#b" class="tool" data-bs-toggle="tooltip"
data-bs-title="beat">b</a>,
<a href="#v" class="tool" data-bs-toggle="tooltip"
data-bs-title="omegar">v</a>,
<a href="#c" class="tool" data-bs-toggle="tooltip"
data-bs-title="taur">c</a>,
<a href="#z" class="tool" data-bs-toggle="tooltip"
data-bs-title="zem">z</a>, or
<a href="#x" class="tool" data-bs-toggle="tooltip"
data-bs-title="hexamilliare">x</a>.

Dec attempts to bridge the gap, improve interoperability, and faciliate
conversion between the
<a href="#us" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> customary and
<a href="#si" class="tool" data-bs-toggle="tooltip"
data-bs-title="International System of Units">SI</a> measurement systems
by redefining <a href="#us" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> customary units. Redefinition of
<a href="#us" class="tool" data-bs-toggle="tooltip"
data-bs-title="United States">US</a> customary units makes inches
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span><span class="color0158">1.58%</span>
shorter, miles <span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span><span class="colorMile">0.58%</span>
shorter, pints <span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span><span class="colorPint">5.67%</span>
larger, ounces <span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span><span class="colorFlOz">8.21%</span>
larger, and pounds <span class="tool" data-bs-toggle="tooltip"
data-bs-title="approximately">~</span><span class="colorMass">1.23%</span>
lighter.

Dec color labels can convey an impression of a value at a glance.
<a href="#xet" class="tool" data-bs-toggle="tooltip"
data-bs-title="Tenet">Xet</a> sound labels allow us to estimate a value
without even having to look at it. Both types of labels can help avoid
confusion when [decimal
separators](https://en.wikipedia.org/wiki/Decimal_separator#:~:text=In%20English%2Dspeaking%20countries%2C%20the%20decimal%20point%20is%20usually%20a%20small%20dot%20%28.%29%20placed%20either%20on%20the%20baseline)
appear, disappear, or move due to a measurement unit change such as the
addition, removal, or replacement of a metric prefix.

# Next

Now that you have had a taste of Dec, I hope that you are hungry for
more! If so, dive🤿deeper into Dec [dates](../dec/date) and
[times](../dec/time) before tackling Dec [snaps](../dec/snap) and
[spans](../dec/span). My [filter](../quarto/filter),
[include](../quarto/include), and [script](../quarto/script) articles
discuss the [Quarto](../quarto) publishing system and how I display Dec
[dates](../dec/date) in the [navigation
bar](https://en.wikipedia.org/wiki/Navigation_bar#:~:text=a%20section%20of%20a%20graphical%20user%20interface%20intended%20to%20aid%20visitors%20in%20accessing%20information),
the [article list](../list), and [title
blocks](https://quarto.org/docs/authoring/title-blocks.html) of my
website.

<div id="firstnav">

<div id="decnav">

<div>

<img src="index_files/figure-commonmark/mermaid-figure-2.png"
style="width:9.64in;height:2.31in" />

</div>

</div>

</div>

# Cite

Of the several different [bibliography file
formats](https://pandoc.org/MANUAL.html#specifying-bibliographic-data)
supported by [Quarto](https://quarto.org), I recommend storing
[citations](https://en.wikipedia.org/wiki/Citation#:~:text=a%20reference%20to%20a%20source)
in
[yaml](https://en.wikipedia.org/wiki/YAML#:~:text=a%20human%2Dreadable%20data%20serialization%20language)
files. With the `bibliography.yml` file shown below, you can cite this
article and the <span class="color021">2021</span> article entitled
[<span class="mono under">`chrono`</span>-Compatible Low-Level Date
Algorithms](https://howardhinnant.github.io/date_algorithms) in which
[Howard Hinnant](https://howardhinnant.github.io) describes the
algorithms that serve as the foundation of Dec dates (Hinnant 2021+185).

<div class="code-with-filename">

**bibliography.yml**

``` yml
---
references:
- id: laptev2025
  author:
    - family: Laptev
      given: Martin
  issued:
    literal: 2026+056

  title: Dec
  type: article
  URL: https://maptv.github.io/dec
- id: hinnant2021
  author:
    - family: Hinnant
      given: Howard
  issued:
    literal: 2021+185
  title: chrono-Compatible Low-Level Date Algorithms
  type: article
  URL: https://howardhinnant.github.io/date_algorithms
...
```

</div>

As demonstrated by the previous sentence above and the
[References](#references) section below, Quarto citations can include
Dec dates. By default, Quarto formats citations according to the
[Chicago Manual of Style](https://chicagomanualofstyle.org/) author-date
format. Per this format, the citation for this article would appear as
[Laptev, Martin](https://maptv.github.io/about). 2026+056. “Dec.”
${decYearP0}+${decDateP0}. <https://maptv.github.io/dec>.

Instead of using Quarto [citation
syntax](https://quarto.org/docs/authoring/citations.html#sec-citations),
you can also prepare a list of references using
[footnotes](https://quarto.org/docs/authoring/markdown-basics.html#footnotes).
As an example, I included citations for the Hinnant date algorithm
article[5] in both the [references](#references) and
[footnotes](#footnotes) sections. In alphabetical order below, you will
find a list of the [Observable](http://observablehq.com) notebooks that
I adapted into many of the visualizations above.

# Appendix

# Observable notebooks

<div id="citelist" class="column-page-right">

0.  [Armstrong, Zan](https://observablehq.com/@zanarmstrong)
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="April 27, 2023">2023+057</span>. “Text color
    annotations in markdown.” ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@observablehq/text-color-annotations-in-markdown>.
1.  [Bostock, Mike](https://observablehq.com/@mbostock)
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="January 30, 2021">2020+335</span>. “Time Zones.”
    ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@mbostock/time-zones>.
2.  [Bostock, Mike](https://observablehq.com/@mbostock)
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="April 7, 2022">2022+037</span>. “Solar Terminator.”
    ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@d3/solar-terminator>.
3.  [Bostock, Mike](https://observablehq.com/@mbostock)
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="January 9, 2024">2023+314</span>. “Input: Table.”
    ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@observablehq/input-table>.
4.  [Edwards, Paul](https://observablehq.com/@pjedwards).
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="August 19, 2022">2022+171</span>. “Compass Rose as
    legend with colors.” ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@pjedwards/compass-rose-as-legend-with-colors>.
5.  [Freedman, Dylan](https://observablehq.com/@freedmand).
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="February 9, 2018">2017+345</span>. “Sounds.”
    ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@freedmand/sounds>.
6.  [Gordon, Marcus A.](https://observablehq.com/@magfoto).
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="December 14, 2018">2018+288</span>. “Wavelengths and
    Spectral Colours.” ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@magfoto/wavelengths-and-spectral-colours>.
7.  [Harmath, Dénes](https://observablehq.com/user/@thsoft).
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="June 13, 2018">2018+104</span>. “ABC.”
    ${decYearP0}+${decDateP0}. <https://observablehq.com/@thsoft/abc>.
8.  [Johnson, Ian](https://observablehq.com/@enjalot) <span class="tool"
    data-bs-toggle="tooltip"
    data-bs-title="June 30, 2021">2021+121</span>. “Draggable World Map
    Coordinates Input.” ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@enjalot/draggable-world-map-coordinates-input>.
9.  [Lim, Maddie](https://observablehq.com/@maddievision)
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="January 25, 2019">2018+330</span>. “Enneagram.”
    ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@maddievision/enneagram>.
10. [Paavanb](https://observablehq.com/@paavanb). <span class="tool"
    data-bs-toggle="tooltip"
    data-bs-title="March 7, 2024">2024+006</span>. “Progressive Color
    Picker.” ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@paavanb/progressive-color-picker>.
11. [Patel, Amit](https://observablehq.com/@redblobgames).
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="December 16, 2021">2021+290</span>. “Compass Rose.”
    ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@paavanb/progressive-color-picker>.
12. [Pettiross, Jeff](https://observablehq.com/@pettiross)
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="July 19, 2024">2024+150</span>. “Categorical color
    scheme test tool.” ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@observablehq/categorical-palette-tool>
13. [Rieder, Lukas](https://observablehq.com/@lukasrieder)
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="April 2, 2023">2023+032</span>. “Editable table.”
    ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@parlant/editable-table>.
14. [Rivière, Philippe](https://observablehq.com/@fil)
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="November 15, 2022">2022+259</span>. “Add a class to
    an observable input.” ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@recifs/add-a-class-to-an-observable-input--support>.
15. [Rivière, Philippe](https://observablehq.com/@fil)
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="January 25, 2024">2023+330</span>. “D3 Projections.”
    ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@fil/d3-projections>.
16. [Yamahata,
    Christophe](https://observablehq.com/@christophe-yamahata)
    <span class="tool" data-bs-toggle="tooltip"
    data-bs-title="June 28, 2022">2021+119</span>. “Great circle:
    shortest distance between two locations on Earth 🌏.”
    ${decYearP0}+${decDateP0}.
    <https://observablehq.com/@christophe-yamahata/great-circle-shortest-distance-between-two-locations-on-ea>.

</div>

# Glossary

<div id="gloslist" class="column-page-right">

- <a href="#arcbeat" id="ab">a</a>: arcbeat, a hundred thousandth of a
  circle, 0.0036 degrees, 0.216 arcminutes, 12.96 arcseconds
- <a href="#beat" id="b">b</a>: beat, centimilliday, a hundred
  thousandth of an day, 864 milliseconds
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
  - <a href="#millitaur" id="mc">mc</a>: millitaur, *m*𝜏*r*, a
    thousandth of a taur, 100 kilozem, 40 kilometers
  - <a href="#nanotaur" id="nc">nc</a>: nanotaur, *n*𝜏*r*, a thousandth
    of a taur, 100 millizem, 1 decizem, 4 centimeters
  - <a href="#cubicnanotaur" id="nc3">nc³</a>: cubic nanotaur, *n*𝜏*r*³,
    1 cubic decizem
- <a href="#day" id="d">d</a>: day, a tenth of a decaday, a seventh of
  week, a fifth of a pentaday, 10 decidays, 24 hours, 100 centidays,
  1000 millidays, 1440 minutes, 86400 seconds, 100000 beats, the inverse
  of a quotidie
  - <a href="#decaday" id="dek">dek</a>: decaday, a group of ten days, 2
    pentadays
  - <a href="#pentaday" id="pent">pent</a>: pentaday, a group of five
    days, half a decaday
  - <a href="#dayofdek" id="dod">dod</a>: day of decaday
  - <a href="#dayofpent" id="dop">dop</a>: day of pentaday
  - <a href="#dayofmonth" id="dom">dom</a>: day of month
  - <a href="#dayofweek" id="dow">dow</a>: day of week
  - <a href="#dayofyear" id="doy">doy</a>: day of year, decaday \* 10 +
    dod
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
- <a href="#foot" id="f">f</a>: Dec foot, 0.75 zem, 75 millimeter
  - <a href="#squarefoot" id="f2">f²</a>: Dec square foot, 5625 square
    centizem, 9 square decimeter
- <a href="#gutta" id="g">g</a>: drop (gutta in Latin) or grain (granum
  in Latin), 64 microliters or 64 milligrams
  - <a href="#kilograin" id="kg">kg</a>: kilograin or kilodrop, 64 grams
    or 64 milliliters
  - <a href="#megagrain" id="Mg">Mg</a>: megagrain or megadrop, 64
    kilograms or 64 liters
- <a href="#hand" id="h">h</a>: hand, 0.25 zem, 1 decimeter
- <a href="#hexadecimal" id="hex">hex</a>: hexadecimal, base 16
- <a href="#huesaturationlightness" id="hsl">hsl</a>: hue saturation
  lightness
- <a href="#huesaturationvalue" id="hsv">hsv</a>: hue saturation value
- <a href="#index" id="i">i</a>: an index that represents either the ten
  musical steps in a musical octave that result in a two-fold increase
  in frequency or the ten days in a decaday; the Greek letter iota
  represents ten in the Greek numeral system
- <a href="#inch" id="i">i</a>: inch, a sixteenth of a zem, 25
  millimeter
  - <a href="#squareinch" id="i2">i²</a>: Dec square inch, 3906.25
    square millizem, 625 square millimeters
- <a href="#keg" id="k">k</a>: keg, cubic zem, 64 liters, 1000 wine
  glasses, a million drops, half a barrel
- <a href="#liter" id="L">L</a>: liter, 15625 drops, a cubic decimeter
  - <a href="#milliliter" id="mL">mL</a>: milliliter, a cubic
    centimeter, a thousandth of a liter, 15.625 drops
  - <a href="#microliter" id="uL">µL</a>: microliter, a cubic
    millimeter, a millionth of a liter, 0.015625 drops
- <a href="#meridian" id="m">m</a>: meridian, a full circle around the
  Earth moving North or South; used in the abbreviations a.m.
  (antemeridian) and p.m. (postmeridian)
  - <a href="#decimeridian" id="dm">dm</a>: decimeridian, a tenth of a
    meridian
  - <a href="#millimeridian" id="mm">mm</a>: millimeridian, a thousandth
    of a meridian
- <a href="#squaremeter" id="m2">m²</a>: square meter, 6.25 square zem
  - <a href="#squarekilometer" id="km2">km²</a>: square kilometer, 6.25
    square kilozem
  - <a href="#squaredecimeter" id="dm2">dm²</a>: square decimeter, 6.25
    square decizem
- <a href="#parallel" id="lambda">λ</a>: parallel, a full circle around
  the Earth moving West or East; the English alphabet equivalent of λ is
  the letter “l”, which occurs three times in the word “parallel” and
  represents a ***l***ine that crosses every possible ***l***ongitude at
  the same ***l***atitude
  - <a href="#deciparallel" id="dlambda">dλ</a>: deciparallel, a tenth
    of a parallel
  - <a href="#milliparallel" id="mlambda">mλ</a>: milliparallel, a
    thousandth of a parallel
- <a href="#note" id="n">n</a>: note, a specific frequency within an
  octave
- <a href="#octave" id="o">o</a>: octave, a two fold change in frequency
  - <a href="#decioctave" id="do">do</a>: decioctave, a tenth of a two
    fold change in frequency
- <a href="#perbeat" id="per">p</a>: perbeat, the inverse of a beat,
  1/beat, once per beat, every beat, 100000 q; the letter “p” can be
  flipped vertically to produce the letter “b”
  - <a href="#teraperbeat" id="Tp">Tp</a>: teraperbeat, 10<sup>12</sup>
    perbeat, the inverse of a picobeat, 1/picobeat, once per picobeat,
    every picobeat
- <a href="#quotidie" id="q">q</a>: quotidie, the inverse of a day, a
  hundred thousandth of a perbeat; the letter “q” can be flipped
  vertically to produce the letter “d”
- <a href="#rose" id="r">r</a>: compass rose, a full circle along the
  horizon, 360 compass degress
  - <a href="#millirose" id="mr">mr</a>: compass millirose, a thousandth
    of a circle along the horizon, .36 compass degress
- <a href="#radian" id="rad">rad</a>: radian, $1\over\tau$ turns,
  $360\over\tau$ degrees, $1\over 2\pi$ turns, $180\over\pi$ degrees
- <a href="#redgreenblue" id="rgb">rgb</a>: red green blue
- <a href="#second" id="s">s</a>: Dec second, 1/90 millidays, 0.9 beats,
  0.96 SI seconds
- <a href="#internationalsystemofunits" id="si">SI</a>: [International
  System of
  Units](https://en.wikipedia.org/wiki/International_System_of_Units#:~:text=the%20world%27s%20most%20widely%20used%20system%20of%20measurement)
- <a href="#speedoflight" id="sol">sol</a>: speed of light, 647.55170928
  kiloomegars, 299792458 meters per second
- <a href="#speedofsound" id="sos">sos</a>: speed of sound, 735.048
  milliomegars, 340.3 meters per second
- <a href="#tau" id="2pi">𝜏</a>: 2𝜋 or approximately 6.2831853
- <a href="#tenequaltemperance" id="tenet">Tenet</a>: ten equal
  temperance
  - <a href="#10et" id="xet">Xet</a>: Tenet
  - <a href="#twelveequaltemperance" id="12et">12et</a>: twelve equal
    temperance
- <a href="#timeofday" id="tod">tod</a>: time of day
- <a href="#turn" id="t">t</a>: turn, 360 degrees, 𝜏 or 2𝜋 radians
  - <a href="#centiturn" id="ct">ct</a>: centiturn, a hundredth of a
    turn, 3.6 degrees, 𝜏/100 or 𝜋/50 radians
  - <a href="#deciturn" id="dt">dt</a>: deciturn, a tenth of a turn, 36
    degrees, 𝜏/10 or 𝜋/5 radians
  - <a href="#milliturn" id="mt">mt</a>: milliturn, a thousandth of a
    turn, .36 degrees, 𝜏/1000 or 𝜋/500 r $\pi\over 500$ radians
- <a href="#timezoneoffset" id="tzo">tzo</a>: time zone offset
- <a href="#ounce" id="u">u</a>: ounce (uncia in Latin), 500 grains, 32
  grams, 500 drops, 32 milliliters
- <a href="#coordinateduniversaltime" id="utc">utc</a>: [Coordinated
  Universal
  Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#:~:text=the%20primary%20time%20standard%20globally%20used%20to%20regulate%20clocks%20and%20time)
- <a href="#unitedstates" id="us">US</a>: [United
  States](https://en.wikipedia.org/wiki/Imperial_and_US_customary_measurement_systems)
- <a href="#omegar" id="v">v</a>: omegar, ωr,
  1041.<span class="vinculum">6</span> Dec miles per hour, approximately
  1035.62 US miles per hour, 1.<span class="vinculum">6</span>
  megameters per hour, 0.4<span class="vinculum">629</span> kilometers
  per second, roughly 1.36 times the speed of sound
  - <a href="#kiloomegar" id="kv">kv</a>: kiloomegar, kωr,
    1.<span class="vinculum">6</span> gigameters per hour,
    0.4<span class="vinculum">629</span> megameters per second,
    approximately 0.1544% of the speed of light
  - <a href="#milliomegar" id="mv">mv</a>: milliomegar, mωr,
    1.041<span class="vinculum">6</span> Dec miles per hour, roughly
    1.03562 US miles per hour, 1.<span class="vinculum">6</span>
    kilometers per hour, 0.4<span class="vinculum">629</span> meters per
    second, approximately 0.136% the speed of sound
- <a href="#wineglass" id="w">w</a>: wineglass, 64 milliters, 2 ounces,
  cubic decizem, 1000 drops
- <a href="#hexamilliare" id="x">x</a>: hexamilliare, square zem, z², 16
  square decimeters, 1.<span class="vinculum">7</span> Dec square feet,
  256 Dec square inches
  - <a href="#megahexamilliare" id="Mx">Mx</a>: megahexamilliare, a
    million square zem, square kilozem, kz², hexakilare, 16 hectares,
    1600 ares, 40 Dec acres, 0.16 square kilometers, 0.0625 Dec square
    miles
- <a href="#year" id="y">y</a>: year
  - <a href="#milliyear" id="my">my</a>: milliyear, a thousandth of a
    year
  - <a href="#yearofera" id="yoe">yoe</a>: year of era, integer years
    since the Dec epoch
- <a href="#zoneequatorialmeter" id="z">z</a>: zem, zone equatorial
  meter, 4 decimeters, 16 Dec inches
  - <a href="#squarekilozem" id="kz2">kz²</a>: square kilozem, a million
    square zem, megahexamilliare, Mx, hexakilare, 16 hectares, 1600
    ares, 40 Dec acres, 0.16 square kilometers, 0.0625 Dec square miles
  - <a href="#kilozem" id="kz">kz</a>: kilozem, 1000 zem, 400 meters, a
    quarter Dec mile
  - <a href="#squarezem" id="z2">z²</a>: square zem, hexamilliare, 16
    square decimeters, 1.<span class="vinculum">7</span> Dec square
    feet, 256 Dec square inches
  - <a href="#squaredecazem" id="Dz2">Dz²</a>: square decazem, 1
    hexadeciare, 16 square meters, 19.75 Dec square yards, 100 square
    zem
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
function createCellDiv(value, max) {
  return `<div style="
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
        if (cell.cellIndex === 0) continue;
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
// https://observablehq.com/@observablehq/synchronized-inputs
function set(input, value) {
  input.value = value;
  input.dispatchEvent(new Event("input", {bubbles: true}));
}
// https://observablehq.com/@observablehq/input-table
// https://stackoverflow.com/a/52079217
// Converts from degrees to radians.
function toRadians(degrees) { return degrees * Math.PI / 180; };
// Converts from radians to degrees.
function toDegrees(radians) { return radians * 180 / Math.PI; }
function coor2bear(strt, dest) {
  const [strtLng, strtLat] = strt.map(toRadians);
  const [destLng, destLat] = dest.map(toRadians);
  return (toDegrees(Math.atan2(
    Math.sin(destLng - strtLng) * Math.cos(destLat),
    Math.cos(strtLat) * Math.sin(destLat) - Math.sin(strtLat) * Math.cos(destLat) * Math.cos(destLng - strtLng)
  )) + 360) % 360;
}
function yiq(color) {
  const {r, g, b} = d3.rgb(color);
  return (r * 299 + g * 587 + b * 114) / 1000 / 255; // returns values between 0 and 1
}
function textcolor(content, style = {}) {
  const {
    background,
    color = yiq(background) > 0.51 ? "#000" : "white",
    padding = "0 2px",
    borderRadius = "4px",
    fontWeight = 400,
    fontFamily = "monospace",
    ...rest
  } = typeof style === "string" ? {background: style} : style;
  return htl.html`<span style=${{
    background,
    color,
    padding,
    borderRadius,
    fontWeight,
    fontFamily,
    ...rest
  }}>${content}</span>`;
}
function turn2comp(turn) {
  return ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.round(turn / 125) % 8]
}
function dec2rgb(d) {
  const color = d3.color(piecewiseColor(d % 1))
  return [color.r, color.g, color.b]
}
function dec2hue(d) {
  return rgbToHsl(...dec2rgb(d))[0] * 1000
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
hueMtr = Math.round(colorD)
hueDeg = dec2hue(colorD / 1000) * .36
hStr = `hsl(${hueDeg}`
slStr = `, ${colorS / 10}%, ${colorL / 10}%)`
hslStr = hStr + slStr
bkgH = ({background: hStr + ", 100%, 50%)"})
bkgHsl = ({background: hslStr})
rainbowMtr = textcolor(hueMtr, bkgHsl)
rainbowDir = textcolor(turn2comp(hueMtr), bkgHsl)
rainbowDegC = textcolor(Math.round(colorD *.36), bkgHsl)
rainbowDegH = textcolor(Math.round(hueDeg), bkgHsl)
rainbowHex = textcolor(shortenHex(d3.color(hslStr).formatHex()).slice(1), bkgHsl)
rainbowN5zn = textcolor('-5', d3.color(`hsl(180${slStr}`).formatHex())
rainbowP583 = textcolor('5.83̅', d3.color(`hsl(129.88235294117646${slStr}`).formatHex())
// Show preview swatches of color
preview = () => {
  const container = DOM.element('div')
  d3.select(container).attr('style', 'display: flex;')
  d3.select(container)
    .append('div')
      .text('Selected')
      .style('font-weight', 'bold')
    .append('div')
      .classed('swatch', true)
      .style('background-color', `hsl(${dec2hue(colorD / 1000) * .36}, ${colorS / 10}%, ${colorL / 10}%`);
  d3.select(container)
    .append('div')
      .text('Preview')
      .style('font-style', 'italic')
    .append('div')
      .classed('swatch', true)
      .style('background-color', `rgb(${hoverRGB[0]}, ${hoverRGB[1]}, ${hoverRGB[2]}`)
  d3.select(container).selectAll('div.swatch')
    .style('width', '100px')
    .style('height', '100px')
    .style('margin-right', '8px')
    .style('padding', '4px')
  return container
}
// The currently hovered color
mutable hoverRGB = [255, 0, 0]
/**
 * Draw an interactive color bar
 * @param colorFn (t: number) => [number, number, number] Given a position on the bar (between 0 and 1), return its RGB
 * @param onSelect (t: number) => void Callback for when a position is selected on the bar
 */
function colorbar({colorFn, onSelect}) {
  const WIDTH = 360
  const HEIGHT = 32
  const container = DOM.element('div')
  function handleSelect(coords) {
    const t = coords[0] / WIDTH
    onSelect(t)
  }
  let isDragging = false
  const canvas = d3.select(container).append('canvas')
    .attr('width', WIDTH)
    .attr('height', HEIGHT)
    .attr('style', 'cursor: crosshair; border: 1px solid black; border-radius: 2px;')
    .on('mousedown', function() {
      isDragging = true
      handleSelect(d3.mouse(this))
    })
    .on('mouseup', () => { isDragging = false; })
    .on('mousemove', function() {
      const coords = d3.mouse(this)
      if (isDragging) {
        handleSelect(coords)
      }
      mutable hoverRGB = colorFn(coords[0] / WIDTH)
    })
  const ctx = canvas.node().getContext('2d')
  const imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT)
  // Possible optimization: cache d3.range so we're not recalculating it a million times
  d3.range(WIDTH).forEach(colIdx => {
    const t = colIdx / WIDTH
    const rgb = colorFn(t)
    d3.range(HEIGHT).forEach(rowIdx => {
      const screenIdx = rowIdx * WIDTH + colIdx
      const imgDataIdx = 4 * screenIdx
      imgData.data[imgDataIdx] = rgb[0]
      imgData.data[imgDataIdx + 1] = rgb[1]
      imgData.data[imgDataIdx + 2] = rgb[2]
      imgData.data[imgDataIdx + 3] = 255
    })
  });
  ctx.putImageData(imgData, 0, 0)
  return container;
}
initialRGB = [255, 0, 0]
initialHSL = rgbToHsl(...initialRGB)
viewof colorR = Inputs.input(initialRGB[0])
viewof colorG = Inputs.input(initialRGB[1])
viewof colorB = Inputs.input(initialRGB[2])
viewof colorD = Inputs.input(dec2hue(initialHSL[0]))
viewof colorS = Inputs.input(1000)
viewof colorL = Inputs.input(500)
viewof colorA = Inputs.input(1000)
/**
 * Update all color values based on current HSL
 */
onUpdateHSL = function(h, s, l) {
  const rgb = hslToRgb(h / 1000, s / 1000, l / 1000)
  console.log(h)
  set(viewof colorR, rgb[0])
  set(viewof colorG, rgb[1])
  set(viewof colorB, rgb[2])
}
/**
 * Credit to github.com/mjackson Source: https://gist.github.com/mjackson/5311256
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSL representation
 */
function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [ h, s, l ];
}
/**
 * Credit to github.com/mjackson Source: https://gist.github.com/mjackson/5311256
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h, s, l){
    let r, g, b;
    if(s == 0){
        r = g = b = l; // achromatic
    } else {
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
/**
 * Credit github.com/mjackson. Source: https://gist.github.com/mjackson/5311256
 */
function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1/6) return p + (q - p) * 6 * t;
  if (t < 1/2) return q;
  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
  return p;
}
// https://observablehq.com/@maddievision/simple-canvas
pixelRatio = window.devicePixelRatio;
createCanvas = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  return canvas
}
renderWithScale = (context, renderFunction) => {
  context.save();
  context.scale(pixelRatio, pixelRatio);
  renderFunction()
  context.restore();
}
quickRender = (width, height, renderer) => {
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')
  renderWithScale(context, () => {
    renderer(context)
  })
  return canvas
}
// http://howardhinnant.github.io/date_algorithms.html#civil_from_days
function unix2dote(unix, zone, offset = 719468) {
  return [(unix ?? Date.now()) / 86400000 + (
    zone = zone ?? -Math.round(
      (new Date).getTimezoneOffset() / 144)
    ) / 10 + offset, zone]
}
function unix2dote1(unix, zone, offset = 719468) {
  return [(unix ?? Date.now()) / 86400000 + (
    zone = zone ?? (-Math.round(
      (new Date).getTimezoneOffset() / 144) + 10) % 10
    ) / 10 + offset, zone]
}
octConnections = [
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
  [4, 0],
  [5, 1],
  [6, 2],
  [7, 3],
]
decConnections = [
  [0, 5],
  [1, 6],
  [2, 7],
  [3, 8],
  [4, 9],
  [5, 0],
  [6, 1],
  [7, 2],
  [8, 3],
  [9, 4]
]
hsl8 = [
  `hsl(0, ${colorS / 10}%, ${colorL / 10}%)`,   // 0
  `hsl(44, ${colorS / 10}%, ${colorL / 10}%)`, // 875
  `hsl(68, ${colorS / 10}%, ${colorL / 10}%)`, // 750
  `hsl(96, ${colorS / 10}%, ${colorL / 10}%)`, // 625
  `hsl(180, ${colorS / 10}%, ${colorL / 10}%)`, // 500
  `hsl(216, ${colorS / 10}%, ${colorL / 10}%)`, // 375
  `hsl(264, ${colorS / 10}%, ${colorL / 10}%)`, // 250
  `hsl(292, ${colorS / 10}%, ${colorL / 10}%)`, // 125
]
hsl10 = [
  `hsl(0, ${colorS / 10}%, ${colorL / 10}%)`, // red
  `hsl(36, ${colorS / 10}%, ${colorL / 10}%)`, // orange
  `hsl(60, ${colorS / 10}%, ${colorL / 10}%)`, // yellow
  `hsl(80, ${colorS / 10}%, ${colorL / 10}%)`, // lime
  `hsl(120, ${colorS / 10}%, ${colorL / 10}%)`, // green
  `hsl(180, ${colorS / 10}%, ${colorL / 10}%)`, // cyan
  `hsl(208, ${colorS / 10}%, ${colorL / 10}%)`, // azure
  `hsl(240, ${colorS / 10}%, ${colorL / 10}%)`, // blue
  `hsl(276, ${colorS / 10}%, ${colorL / 10}%)`, // violet
  `hsl(300, ${colorS / 10}%, ${colorL / 10}%)`, // magenta
  `hsl(0, ${colorS / 10}%, ${colorL / 10}%)`, // red
]
hsla10 = [
  `hsla(0, ${colorS / 10}%, ${colorL / 10}%, ${colorA / 10}%)`, // red
  `hsla(36, ${colorS / 10}%, ${colorL / 10}%, ${colorA / 10}%)`, // orange
  `hsla(60, ${colorS / 10}%, ${colorL / 10}%, ${colorA / 10}%)`, // yellow
  `hsla(80, ${colorS / 10}%, ${colorL / 10}%, ${colorA / 10}%)`, // lime
  `hsla(120, ${colorS / 10}%, ${colorL / 10}%, ${colorA / 10}%)`, // green
  `hsla(180, ${colorS / 10}%, ${colorL / 10}%, ${colorA / 10}%)`, // cyan
  `hsla(208, ${colorS / 10}%, ${colorL / 10}%, ${colorA / 10}%)`, // azure
  `hsla(240, ${colorS / 10}%, ${colorL / 10}%, ${colorA / 10}%)`, // blue
  `hsla(276, ${colorS / 10}%, ${colorL / 10}%, ${colorA / 10}%)`, // violet
  `hsla(300, ${colorS / 10}%, ${colorL / 10}%, ${colorA / 10}%)`, // magenta
  `hsla(0, ${colorS / 10}%, ${colorL / 10}%, ${colorA / 10}%)`, // red
]
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
sunLonHsl = textcolor(sunLon, `hsl(${d3.hsl(piecewiseColor(sunLon % 1000 / 1000)).h}` + slStr)
sunLatHsl = textcolor(sunLat, `hsl(${d3.hsl(piecewiseColor((sunLat + 1000) % 1000 / 1000)).h}` + slStr)
dz = unix2dote(now)
ydz = dote2date(...dz)
decZone = ydz[2]
decZonePos = (decZone + 10) % 10
decSign = decZone < 0 ? "+" : "–"
ydzP0 = dote2date(...unix2dote(now, 0))
decYearP0 = ydzP0[0]
decYdaP0 = ydzP0[1]
decDateP0 = Math.floor(decYdaP0)
decTimeP0 = ydzP0[1] % 1
decDekP0 = Math.floor(decDateP0 / 10)
decDodP0 = decDateP0 % 10
decYearP0hsl0 = textcolor(decYearP0, `hsl(${d3.hsl(piecewiseColor(decYearP0 % 1000 / 1000)).h}` + slStr)
decYearP0hsl1 = textcolor(decYearP0, `hsl(${d3.hsl(piecewiseColor(decYearP0 % 1000 / 1000)).h}` + slStr)
decDateP0hsl0 = textcolor(decDateP0.toString().padStart(3, "0"), `hsl(${d3.hsl(piecewiseColor(decDateP0 / (365 + isLeapP0))).h}` + slStr)
decDateP0hsl1 = textcolor(decDateP0.toString().padStart(3, "0"), `hsl(${d3.hsl(piecewiseColor(decDateP0 / (365 + isLeapP0))).h}` + slStr)
decYdaP0hsl = textcolor(decYdaP0.toFixed(5).padStart(9, "0"), `hsl(${d3.hsl(piecewiseColor(decYdaP0 / (365 + isLeapP0))).h}` + slStr)
decTimeP0hsl0 = textcolor((decTimeP0 * 10).toFixed(4), `hsl(${d3.hsl(piecewiseColor(decTimeP0)).h}` + slStr)
decTimeP0hsl1 = textcolor((decTimeP0 * 10).toFixed(4), `hsl(${d3.hsl(piecewiseColor(decTimeP0)).h}` + slStr)
decDekP0hsl = textcolor(decDekP0, `hsl(${d3.hsl(piecewiseColor(decDekP0 / 37)).h}` + slStr)
decDodP0hsl = textcolor(decDodP0, `hsl(${d3.hsl(piecewiseColor(decDodP0 / 10)).h}` + slStr)
decLon = longitude % 10
decLonHsl = textcolor(parseFloat(decLon.toFixed(2)), `hsl(${d3.hsl(piecewiseColor(decLon / 10)).h}` + slStr)
decZon = Math.floor(decLon)
decZonHsl = textcolor(decZon, `hsl(${d3.hsl(piecewiseColor(decZon / 10)).h}` + slStr)
parLat = textcolor(parseFloat(latitude.toFixed(3)), `hsl(${d3.hsl(piecewiseColor((latitude + 1) % 1)).h}` + slStr)
parCos = Math.cos(latitude * 2 * Math.PI)
parLen = textcolor(parseFloat(parCos.toFixed(3)), `hsl(${d3.hsl(piecewiseColor(parCos)).h}` + slStr)
conversionFactor = costype === "turns" ? "" : costype === "radians" ?  tex`\,\tau\!` : tex`\times360`
zemsLeft = 1000 - 50 * Math.floor(now / 86400000 % 1 * 1000 % 1 * 100 % 21)
zLeft = textcolor(zemsLeft, `hsl(${d3.hsl(piecewiseColor(zemsLeft / 1000)).h}` + slStr)
point0long = long2turn(Place_A[0], 1)
point0zone = Math.floor(point0long)
point0lHsl = textcolor(parseFloat(point0long.toFixed(2)), `hsl(${d3.hsl(piecewiseColor(point0long / 10)).h}` + slStr)
point0zHsl = textcolor(point0zone, `hsl(${d3.hsl(piecewiseColor(point0zone / 10)).h}` + slStr)
isLeapP0 = decYearP0 % 4 == 0 && decYearP0 % 100 != 0 || decYearP0 % 400 == 0;
timezones = FileAttachment("../asset/timezones.json").json()
zones = topojson.feature(timezones, timezones.objects.timezones).features
mesh = topojson.mesh(timezones, timezones.objects.timezones)
color = d3.scaleSequential(d3.interpolateRdBu).domain([-12, 14])
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
// https://observablehq.com/@enjalot/draggable-world-map-coordinates-input
// https://observablehq.com/@christophe-yamahata/great-circle-shortest-distance-between-two-locations-on-ea
function worldMapCoordinates(config = {}, dimensions) {
  var n_point;
  var lonA, lonB, latA, latB;
  const {
    value = [], title, description, width = dimensions[0]
  } = Array.isArray(config) ? {value: config} : config;
  const height = dimensions[1];
  [lonA, latA] = value[0];
  [lonB, latB] = value[1];
  lonA = lonA != null ? lonA : 90;
  latA = latA != null ? latA : 0.025;
  lonB = lonB != null ? lonB : -90;
  latB = latB != null ? latB : 36;
  const formEl = html`<form style="width: ${width}px;"></form>`;
  const context = DOM.context2d(width, height);
  const canvas = context.canvas;
  const projection = config[2]
    .precision(0.1)
    .fitSize([width, height], { type: "Sphere" });
  const path = d3.geoPath(projection, context).pointRadius(2.5);
  formEl.append(canvas);
  function fillMesh(f) {
    context.beginPath();
    path(f);
    context.fillStyle = color(f.properties.zone);
    context.fill();
    context.innerHTML = `<title>${f.properties.places} ${f.properties.time_zone}</title>`;
  }
  function draw(lon0, lat0, lon1, lat1) {
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
      context.font = width < 760 ? "14px serif" : width < 990 ? "17px serif" : "23px serif";
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
    if (lon0 != null && lat0 != null) {
      const pointPath = { type: "MultiPoint", coordinates: [[lon0, lat0]], id: "point0test"};
      context.beginPath();
      path.pointRadius(point_radius_2);
      path(pointPath);
      context.fillStyle = window.darkmode ? "#A24" : "#FDF";
      context.fill();
      context.strokeStyle = window.darkmode ? "white" : "black";
      context.stroke();
    }
    if (lon1 != null && lat1 != null) {
      const pointPath = { type: "MultiPoint", coordinates: [[lon1, lat1]] };
      context.beginPath();
      path.pointRadius(point_radius_2);
      path(pointPath);
      context.fillStyle = window.darkmode ? "#24B" : "#BFF";
      context.fill();
      context.strokeStyle = window.darkmode ? "white" : "black";
      context.stroke();
    }
    // We draw the path between 2 points
    var interpolation = d3.geoInterpolate([lon0,lat0],[lon1,lat1]);
    var nb_points =  d3.geoDistance([lon0,lat0],[lon1,lat1])*20;
    for(let i = 1; i<nb_points; i++) {
      const pointPath = { type: "MultiPoint", coordinates: [interpolation(i/nb_points)] };
      path.pointRadius(point_radius);
      context.beginPath(),
      context.fillStyle = window.darkmode ? "#FF420E" : "orange",
      path(pointPath),
      context.strokeStyle = window.darkmode ? "white" : "black";
      context.fill(),
      context.stroke();
    }
  }
  draw(lonA, latA, lonB, latB);
  canvas.onclick = function(ev) {
    const { offsetX, offsetY } = ev;
    var coords = projection.invert([offsetX, offsetY]);
    if(n_point==0){
    lonA = +coords[0].toFixed(2);
    latA = +coords[1].toFixed(2);
      n_point = 1;
    }else{
    lonB = +coords[0].toFixed(2);
    latB = +coords[1].toFixed(2);
      n_point = 0;
    }
    const point0bear = Math.round(lati2turn(coor2bear([lonA, latA], [lonB, latB])))
    set(viewof colorD, point0bear)
    table.rows[1].cells[1].innerHTML = createCellDiv(long2turn(lonA), 10)
    table.rows[2].cells[1].innerHTML = createCellDiv(long2turn(lonB), 10)
    table.rows[1].cells[2].innerHTML = createCellDiv(lati2turn(latA), 2.5)
    table.rows[2].cells[2].innerHTML = createCellDiv(lati2turn(latB), 2.5)
    table.rows[1].cells[3].innerHTML = createCellDiv(point0bear, 10)
    table.rows[2].cells[3].innerHTML = createCellDiv(lati2turn(coor2bear([lonB, latB], [lonA, latA])), 10)
    draw(lonA, latA, lonB, latB);
    canvas.dispatchEvent(new CustomEvent("input", { bubbles: true }));
  };
  function resetlatlon() {
    lonA = -90;
    latA = 0;
    lonB = -90;
    latB = 36;
    set(viewof bordertoggle, false);
    set(viewof gridtoggle, false);
    set(viewof suntoggle, false);
    set(viewof utctoggle, false);
    set(viewof yaw, 500);
    set(viewof pitch, 0);
    set(viewof roll, 0);
    set(viewof select, projections.find(t => t.name === "Equirectangular (plate carrée)"));
    set(viewof colorD, 0)
    set(viewof colorS, 1000)
    set(viewof colorL, 500)
    table.rows[1].cells[1].innerHTML = createCellDiv(800, 10)
    table.rows[2].cells[1].innerHTML = createCellDiv(800, 10)
    table.rows[1].cells[2].innerHTML = createCellDiv(0, 2.5)
    table.rows[2].cells[2].innerHTML = createCellDiv(100, 2.5)
    table.rows[1].cells[3].innerHTML = createCellDiv(0, 10)
    table.rows[2].cells[3].innerHTML = createCellDiv(500, 10)
    draw(lonA, latA, lonB, latB);
    canvas.dispatchEvent(new CustomEvent("input", { bubbles: true }));
  }
  table.onkeyup = function(ev) {
   if ([
    // https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes#heading-a-full-list-of-key-event-values
      9, 13, 27
    ].includes(ev.which)) {
      lonA = turn2long(liveTable[0].Milliparallel);
      latA = turn2degr(liveTable[0].Millimeridian);
      lonB = turn2long(liveTable[1].Milliparallel);
      latB = turn2degr(liveTable[1].Millimeridian);
      const point0bear = Math.round(lati2turn(coor2bear([lonA, latA], [lonB, latB])))
      set(viewof colorD, point0bear)
      table.rows[1].cells[1].innerHTML = createCellDiv(long2turn(lonA), 10)
      table.rows[2].cells[1].innerHTML = createCellDiv(long2turn(lonB), 10)
      table.rows[1].cells[2].innerHTML = createCellDiv(lati2turn(latA), 2.5)
      table.rows[2].cells[2].innerHTML = createCellDiv(lati2turn(latB), 2.5)
      table.rows[1].cells[3].innerHTML = createCellDiv(point0bear, 10)
      table.rows[2].cells[3].innerHTML = createCellDiv(lati2turn(coor2bear([lonB, latB], [lonA, latA])), 10)
      draw(lonA, latA, lonB, latB);
      canvas.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    } else if ([
    // https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes#heading-a-full-list-of-key-event-values
      8, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 109, 189
    ].includes(ev.which)) {
      lonA = turn2long(liveTable[0].Milliparallel);
      latA = turn2degr(liveTable[0].Millimeridian);
      lonB = turn2long(liveTable[1].Milliparallel);
      latB = turn2degr(liveTable[1].Millimeridian);
      const point0bear = Math.round(lati2turn(coor2bear([lonA, latA], [lonB, latB])))
      set(viewof colorD, point0bear)
      table.rows[1].cells[3].innerHTML = createCellDiv(point0bear, 10)
      table.rows[2].cells[3].innerHTML = createCellDiv(lati2turn(coor2bear([lonB, latB], [lonA, latA])), 10)
      draw(lonA, latA, lonB, latB);
      canvas.dispatchEvent(new CustomEvent("input", { bubbles: true }));
    }
  }
  rstbtn.on('click', resetlatlon);
  document.getElementsByClassName("quarto-color-scheme-toggle")[0].onclick = function (e) {
    window.quartoToggleColorScheme();
    window.darkmode = document.getElementsByTagName("body")[0].className.match(/quarto-dark/) ? true : false;
    draw(lonA, latA, lonB, latB);
    return false;
  };
  const form = input({
    type: "worldMapCoordinates",
    title,
    description,
    display: v => "",
     // html`<div style="width: ${width}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-bottom: 5px;">
     //       <span style="color: ${color_A}">Longitude: ${lonA != null ? lonA.toFixed(2) : ""}</span>
     //       &nbsp; &nbsp;
     //       <span style="color: ${color_A}">Latitude: ${latA != null ? latA.toFixed(2) : ""} </span>
     //     </div>
     //     <div style="width: ${width}px; white-space: nowrap; color: #444; text-align: center; font: 13px sans-serif; margin-bottom: 5px;">
     //       <span style="color: ${color_B}">Longitude: ${lonB != null ? lonB.toFixed(2) : ""}</span>
     //       &nbsp; &nbsp;
     //       <span style="color: ${color_B}">Latitude: ${latB != null ? latB.toFixed(2) : ""}</span>
     //     </div>`,
    getValue: () => [[lonA != null ? lonA : null, latA != null ? latA : null], [lonB != null ? lonB : null, latB != null ? latB : null]],
    form: formEl
  });
  return form;
}
point_radius = width / 900 * mapsize / 100 + 3
point_radius_2 = width / 150 * mapsize / 100 + 3
Place_A = coordinates[0]
Place_B = coordinates[1]
distance_km = (d3.geoDistance(Place_A, Place_B)* 6371).toFixed(0)
distance_mc = distance_km / 40
distance_mcHsl0 = textcolor(parseFloat(distance_mc.toFixed(0)), `hsl(${d3.hsl(piecewiseColor(distance_mc % 1000 / 1000)).h}` + slStr)
distance_mcHsl1 = textcolor(parseFloat(distance_mc.toFixed(0)), `hsl(${d3.hsl(piecewiseColor(distance_mc % 1000 / 1000)).h}` + slStr)
distance_c = distance_mc / 1000
distance_cHsl = textcolor(parseFloat(distance_c.toFixed(3)), `hsl(${d3.hsl(piecewiseColor(distance_c % 1)).h}` + slStr)
velocity_v = travelspeed / 1000
velocity_vHsl0 = textcolor(parseFloat(velocity_v.toFixed(3)), `hsl(${d3.hsl(piecewiseColor(velocity_v)).h}` + slStr)
velocity_vHsl1 = textcolor(parseFloat(velocity_v.toFixed(3)), `hsl(${d3.hsl(piecewiseColor(velocity_v)).h}` + slStr)
velocity_mvHsl = textcolor(parseFloat(travelspeed.toFixed(0)), `hsl(${d3.hsl(piecewiseColor(travelspeed / 1000)).h}` + slStr)
traveltime = Math.round(distance_mc) / Math.round(travelspeed)
traveltimeHsl0 = Number.isFinite(traveltime) ? textcolor(parseFloat(Math.round(traveltime * 1000).toFixed(3)), `hsl(${d3.hsl(piecewiseColor(traveltime % 1)).h}` + slStr) : traveltime
traveltimeHsl1 = Number.isFinite(traveltime) ? textcolor(parseFloat(traveltime.toFixed(3)), `hsl(${d3.hsl(piecewiseColor(traveltime % 1)).h}` + slStr) : traveltime
nb_points = Math.round(distance_km/150)
d3format = require("d3-format@1")
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
    html`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`
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
mapcolors = ({
  night: "#719fb6",
  day: "#ffe438",
  grid: "#4b6a79",
  ocean: "#adeeff",
  land: "#90ff7888",
  sun: "#ffb438"
})
function long2turn(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return (((degrees %= 360) < 0 ? degrees + 360 : degrees) + 18) / (360 / 10**e) % 10**e;
}
function turn2degr(turns = -500, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return turns % 10**e * (360 / 10**e)
}
function turn2long(turns = -500, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return turns % 10**e * (360 / 10**e) - 18
}
function long2zone(degrees = -180) { return Math.floor(long2turn(degrees, 1)); }
function lati2turn(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return (degrees %= 360) / (360 / 10**e) % 10**e;
}
selectedProjection = select ? select.value() : d3.geoEquirectangular()
projection = {
  let proj = selectedProjection;
  if (proj.rotate) proj.rotate([-turn2long(yaw), -turn2degr(pitch), turn2degr(roll)]);
  return proj;
}
sun = {
  const now = new Date;
  const day = new Date(+now).setUTCHours(0, 0, 0, 0);
  const t = solar.century(now);
  const longitude = (day - now) / 864e5 * 360 - 180;
  return [longitude - solar.equationOfTime(t) / 4, solar.declination(t)];
}
sunLon = Math.round(long2turn(sun[0]))
sunLat = Math.round(lati2turn(sun[1]))
night = d3.geoCircle().radius(90).center(antipode(sun))()
antipode = ([longitude, latitude]) => [longitude + 180, -latitude]
height = {
  const [[x0, y0], [x1, y1]] = d3.geoPath(projection.fitWidth(width, sphere)).bounds(sphere);
  const dy = Math.ceil(y1 - y0), l = Math.min(Math.ceil(x1 - x0), dy);
  projection.scale(projection.scale() * (l - 1) / l).precision(0.2);
  return dy;
}
d3 = require("d3@5", "d3-array@3", "d3-geo@3", "d3-geo-projection@4", "d3-geo-polygon@1.8")
sphere = ({type: "Sphere"})
graticule = d3.geoGraticule().stepMinor([36, 36]).stepMajor([36, 36])()
graticule.coordinates = graticule.coordinates.map(
  i => i.map(j => j.map((k, index, arr) => i.length === 3 && index === 0 ? k - 18 : k))
)
land = topojson.feature(world, world.objects.land)
world = fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json").then(response => response.json())
topojson = require("topojson-client@3")
solar = require("solar-calculator@0.3/dist/solar-calculator.min.js")
borders = topojson.mesh(countries, countries.objects.countries, (a, b) => a !== b)
countries = fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then(response => response.json())
deccolors = [
  `hsl(20${slStr}`,
  `hsl(24${slStr}`,
  `hsl(28${slStr}`,
  `hsl(36${slStr}`,
  `hsl(44${slStr}`,
  `hsl(48${slStr}`,
  `hsl(52${slStr}`,
  `hsl(60${slStr}`,
  `hsl(64${slStr}`,
  `hsl(68${slStr}`,
  `hsl(72${slStr}`,
  `hsl(80${slStr}`,
  `hsl(88${slStr}`,
  `hsl(92${slStr}`,
  `hsl(96${slStr}`,
  `hsl(120${slStr}`,
  `hsl(148${slStr}`,
  `hsl(156${slStr}`,
  `hsl(164${slStr}`,
  `hsl(180${slStr}`,
  `hsl(192${slStr}`,
  `hsl(196${slStr}`,
  `hsl(200${slStr}`,
  `hsl(208${slStr}`,
  `hsl(216${slStr}`,
  `hsl(220${slStr}`,
  `hsl(224${slStr}`,
  `hsl(240${slStr}`,
  `hsl(260${slStr}`,
  `hsl(264${slStr}`,
  `hsl(268${slStr}`,
  `hsl(276${slStr}`,
  `hsl(284${slStr}`,
  `hsl(288${slStr}`,
  `hsl(292${slStr}`,
  `hsl(300${slStr}`,
  `hsl(320${slStr}`,
  `hsl(328${slStr}`,
  `hsl(336${slStr}`,
  `hsl(0${slStr}`,
]
viewof size = Inputs.range([50, 700], {
  value: 300,
  step: 20,
  label: 'size'
})
viewof numMajorTicks = Inputs.range([0, 45], {
  value: 6,
  step: 2,
  label: "Major ticks"
})
viewof numMinorTicks = Inputs.range([0, 10], {
  value: 2,
  step: 1,
  label: "Minor ticks"
})
function repeat(component, N, initialAngle=0) {
  // NOTE: if component is a function, it will be called with (angle, i)
  if (N <= 0) return "";
  let result = [];
  for (let i = 0; i < N; i++) {
    let angle = (360 / N) * i + initialAngle;
    let el = typeof component === 'function'? component(angle, i) : component;
    result.push(`<g transform="rotate(${angle})">${el}</g>`);
  }
  return result.join("");
}
function tick(radius, length, color='black') {
  return `<path d="M 0,${-radius} l 0,${-length}" fill="none" stroke="${color}" stroke-width="1" />`;
}
function directionMarker(radius, fontSize) { return (angle, _) => {
  let label = {0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW'}[angle] ?? '??';
  return `<text y="${-radius-(margin/2)}" font-size="${fontSize}" text-anchor="middle" dy=".36em">${label}</text>`;
};
}
function turnMarker(radius, fontSize) { return (angle, _) => {
  let label = {0: '0', 45: '125', 90: '250', 135: '375', 180: '500', 225: '625', 270: '750', 315: '875'}[angle] ?? '??';
  return `<text y="${-radius-(margin/2)}" font-size="${fontSize}" text-anchor="middle" dy="-0.36em">${label}</text>`;
  };
}
function pie(radius, width, narrowness=1.0, piecolors) {
  return (_, i) => `<path id="piepath" d="M 0,0 L ${-width},${-radius} A ${width} ${width/2} 0 0 1 ${width} ${-radius} z" fill="${piecolors[i]}" stroke="black" stroke-width="0.5"/>`;
}
margin = size / 14
padding = 42
radius = size / 2 - margin - padding
window.darkmode = document.getElementsByTagName("body")[0].className.match(/quarto-dark/) ? true : false;
// https://observablehq.com/@observablehq/categorical-palette-tool
function displayPalette(palette, { darkMode = false } = {}) {
  return htl.html`
  <div style="display: flex; flex-direction: column;">
    <div style="margin-bottom:8px;">${cielabScatter(palette, { darkMode: darkMode })}</div>
    <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-evenly;">
      <div style="">${lightnessSpectrum(palette, { darkMode: darkMode })}</div>
      <div>${swatches(palette)}</div>
  </div></div>
</div>`
}
paletteDots = function(palette, { darkMode = false } = {}) {
  return Plot.plot( {
    marks: [
      Plot.dot(palette, {
        x: (d,i) => i * 36,
        r: 16,
        fill: { value: (d) => d, label: "Color" },
        stroke: darkMode ? "white" : "#202020" ,
        tip: {
          format: { x: false },
          fill: darkMode ? "#202020" : "white"
        }
      }),
      Plot.text(palette.map((d,i) => i), {
        x: (d) => d * 36,
        dx: 18,
        dy: 16,
        opacity: 0.8
      }),
    ],
    x: { domain: [ 0, 320 ], ticks: 0 },
    height: 48,
    width: (palette.length) * 40,
    marginTop: 16,
    style: { fontSize: 18, overflow: "visible" }
    })
}
function cielabScatter(palette, { darkMode = false } = {}) {
  let labPalette = palette.map((c,i)=>({...d3.lab(c), i, color: c, ...({})}));
  return Plot.plot({
    width: colorsize,
    height: colorsize,
    style: { fontSize: 12 },
    marks: [
      Plot.frame({rx: size / 2, ry: size / 2, opacity: 0.2}),
      Plot.gridX({ticks: 3, opacity: 0.2}),
      Plot.gridY({ticks: 3, opacity: 0.2}),
      Plot.ruleX([0], {opacity: 0.25}),
      Plot.ruleY([0], {opacity: 0.25}),
      Plot.dot(labPalette, {
        x: "a", y: "b", r: 5,
        fill: { value: (d) => d.color, label: "Color" },
        channels: {
          L: { value: "l", label: "L*" }
        },
        tip: {
          format: { fill: (d,i) => `${i}` },
          fill: "#202020",
        }
      }),
    ],
    x: {
      domain: [-80, 80],
      ticks: 3,
      tickSize: 0,
      labelArrow: null,
      labelAnchor: "center",
      label: "a*"
    },
    y: {
      domain: [-80, 80],
      ticks: 3,
      tickRotate: 0,
      tickSize: 0,
      labelArrow: null,
      labelAnchor: "center",
      label: "b*"
    }
  });
}
function lightnessSpectrum(palette, { darkMode = false } = {}) {
  let labPalette = palette.map((c,i)=>({...d3.lab(c), i, color: c, ...({})}));
  return Plot.plot({
    height: colorsize,
    width: 70,
    style: { fontSize: 12, overflow: "visible" }, // let the tip overflow the rect of the plot
    marks: [
      Plot.tickY( labPalette, {
        y: (d) => d.l,
        stroke: { value: (d) => d.color, label: "Color" },
        strokeWidth: 3,
        tip: {
          anchor: "right",
          frameAnchor: "left",
          format: {
            fontSize: 12,
            stroke: (d,i) => `${i}`,
            a: true, b: true
          },
          fill: "#202020"
        },
        channels: {
          a: { value: "a", label: "a*" },
          b: { value: "b", label: "b*" }
        },
      })
    ],
    y: {
      domain: [30, 100],
      grid: true,
      tickSize: 0,
      labelAnchor: "center",
      label: "L*",
      labelArrow: false
    },
  })
}
function swatches(palette) {
  return Plot.plot({
    height: colorsize,
    width: 50,
    x: {ticks: 0},
    margin: 0,
    marks: [
      Plot.barX(
        palette, {
          y: (d,i) => i,
          fill: (d) => d,
          inset: -1
        }
      )
    ]
})}
colorsize = 210
kilograms = kilograins * 0.064
kgrains = parseFloat(kilograins.toFixed(2))
kgrams = parseFloat(kilograms.toFixed(2))
zem2 = parseFloat((zems**2).toFixed(2))
meter2 = parseFloat(((zems*.4)**2).toFixed(2))
bmi = parseFloat((kilograins / zems**2).toFixed(2))
bmim2 = parseFloat((kilograms / meter2).toFixed(2))
bmiStr = bmi < 46.25 ? "underweight" : bmi < 62.5 ? "normal" : bmi < 75 ? "overweight" : "obese"
// https://observablehq.com/@magfoto/wavelengths-and-spectral-colours
// takes wavelength in nm and returns an rgba value
    function wavelengthToColor(wavelength) {
        let R,
            G,
            B,
            alpha,
            colorSpace,
            wl = wavelength,
            gamma = 1;
        if (wl >= 380 && wl < 440) {
            R = -1 * (wl - 440) / (440 - 380);
            G = 0;
            B = 1;
       } else if (wl >= 440 && wl < 490) {
           R = 0;
           G = (wl - 440) / (490 - 440);
           B = 1;
        } else if (wl >= 490 && wl < 510) {
            R = 0;
            G = 1;
            B = -1 * (wl - 510) / (510 - 490);
        } else if (wl >= 510 && wl < 580) {
            R = (wl - 510) / (580 - 510);
            G = 1;
            B = 0;
        } else if (wl >= 580 && wl < 645) {
            R = 1;
            G = -1 * (wl - 645) / (645 - 580);
            B = 0.0;
        } else if (wl >= 645 && wl <= 780) {
            R = 1;
            G = 0;
            B = 0;
        } else {
            R = 0;
            G = 0;
            B = 0;
        }
        // intensty is lower at the edges of the visible spectrum.
        if (wl > 780 || wl < 380) {
            alpha = 0;
        } else if (wl > 700) {
            alpha = (780 - wl) / (780 - 700);
        } else if (wl < 420) {
            alpha = (wl - 380) / (420 - 380);
        } else {
            alpha = 1;
        }
        colorSpace = ["rgba(" + (R * 100) + "%," + (G * 100) + "%," + (B * 100) + "%, " + alpha + ")", R, G, B, alpha]
        // colorSpace is an array with 5 elements.
        // The first element is the complete code as a string.
        // Use colorSpace[0] as is to display the desired color.
        // Use the last four elements alone or together to access each of the individual r, g, and b channels.
        return colorSpace;
    }
// https://observablehq.com/@freedmand/sounds
function piano(stlibWidth) {
  const width = 960;
  const keyHeight = 450;
  const height = 575;
  const whiteKeys = 11;
  const blackKeys = [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1];
  const whiteOffsets = blackKeys.reduce((x, y) => x.concat([y + x[x.length - 1] + 1]), [0]);
  const svg = html`<svg width="100%" height="auto" viewBox="0 0 ${width} ${height}"
    xmlns="http://www.w3.org/2000/svg"></svg>`;
  function wrap(elem, note) {
    const freq = 440 * Math.pow(2, note / 12);
    // Play a note when clicked.
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    gain.gain.value = 0;
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(freq, ctx.currentTime);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start();
    elem.style.cursor = 'pointer';
    elem.onclick = () => {
      gain.gain.cancelScheduledValues(ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.05);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
    };
    return elem;
  }
  // Draw the white keys.
  for (let i = 0; i <= whiteKeys - 1; i++) {
    svg.appendChild(wrap(html`<svg><rect x="${width * i / whiteKeys}" y="0" width="${width / whiteKeys}" height="${keyHeight}" fill=${whiteKeyColors[i]} stroke="black" stroke-width="2"/></svg>`, whiteOffsets[i] - 4));
    svg.appendChild(html`<svg><text style="user-select: none;" x="${width * (i + 0.5) / whiteKeys}" y="${keyHeight + 42}" font-family="monospace" id="pianotext" font-size="36" text-anchor="middle">${String.fromCharCode('A'.charCodeAt(0) + (i + 5) % 7) + (i < 4 ? "3" : "4")}</text></svg>`);
    svg.appendChild(html`<svg><text style="user-select: none;" x="${width * (i + 0.5) / whiteKeys}" y="${keyHeight + 82}" font-family="monospace" id="pianotext" font-size="36" text-anchor="middle">${Math.round(220 * Math.pow(2, (whiteOffsets[i] - 4) / 12) * .864)}</text></svg>`);
    svg.appendChild(html`<svg><text style="user-select: none;" x="${width * (i + 0.5) / whiteKeys}" y="${keyHeight + 122}" font-family="monospace" id="pianotext" font-size="36" text-anchor="middle">${Math.round(73504.8 / (220 * Math.pow(2, (whiteOffsets[i] - 4) / 12) * .864))}</text></svg>`);
  }
  // Draw the black keys.
  for (let i = 0; i <= whiteKeys - 2; i++) {
    if (blackKeys[i] == 1) {
      svg.appendChild(wrap(html`<svg><rect x="${width * ((i + 0.65) / whiteKeys)}" y="0" width="${width / whiteKeys * 0.7}" height="${keyHeight * 0.55}" fill=${blackKeyColors[i]} stroke="black" stroke-width="2"/></svg>`, whiteOffsets[i] - 4 + blackKeys[i]));
    }
  }
  return svg;
}
whiteKeyColors = [
  "#fff",
  "#fff",
  "#fff",
  xetHex[1],
  xetHex[2],
  xetHex[4],
  xetHex[6],
  xetHex[7],
  xetHex[9],
  xetHex[11],
  "#fff",
  "#fff",
  "#fff",
]
blackKeyColors = [
  "#000",
  "#000",
  xetHex[0],
  "",
  xetHex[3],
  xetHex[5],
  "",
  xetHex[8],
  xetHex[10],
  "#000",
  "#000",
  "#000",
]
// https://observablehq.com/@freedmand/sounds
ctx = new (window.AudioContext || window.webkitAudioContext)()
function Play(genFn, duration, frequency) {
  return new SoundBuffer(genFn, duration, frequency).gui();
}
class SoundBuffer {
  constructor(genFn, duration, frequency) {
    this.duration = duration;
    this.frequency = frequency;
    // Create an audio buffer.
    this.audioBuffer = ctx.createBuffer(1, ctx.sampleRate * this.duration, ctx.sampleRate);
    this.buffer = this.audioBuffer.getChannelData(0);
    let max = 0;
    for (let i = 0; i < this.audioBuffer.length; i++) {
      const value = genFn(i / ctx.sampleRate);
      this.buffer[i] = value;
      if (Math.abs(value) > max) max = Math.abs(value);
    }
    for (let i = 0; i < this.audioBuffer.length; i++) {
      this.buffer[i] = this.buffer[i] / max;
    }
  }
  play(maxVol = 0.3) {
    this.stop();
    this.source = ctx.createBufferSource();
    this.source.buffer = this.audioBuffer;
    const gain = ctx.createGain();
    gain.gain.value = maxVol;
    this.source.connect(gain);
    gain.connect(ctx.destination);
    this.source.start();
  }
  stop() {
    if (this.source) this.source.stop();
  }
  draw(height = 50, width = width, color = 'blue') {
    const drawingCtx = DOM.context2d(width, height);
    // Draw the middle line.
    drawingCtx.strokeStyle = 'gainsboro';
    drawingCtx.beginPath();
    drawingCtx.moveTo(0, height / 2);
    drawingCtx.lineTo(width, height / 2);
    drawingCtx.stroke();
    // Draw the waveform.
    drawingCtx.strokeStyle = color;
    drawingCtx.beginPath();
    for (let i = 0; i < width; i++) {
      const value = this.buffer[Math.floor(i / width * this.audioBuffer.length)];
      const y = height - Math.floor((value / 2 + 0.5) * height * 0.9 + height * 0.05);
      if (i == 0) {
        drawingCtx.moveTo(i, y);
      } else {
        drawingCtx.lineTo(i, y);
      }
    }
    drawingCtx.stroke();
    return drawingCtx.canvas;
  }
  gui() {
    const ui = html`<style>
      .sound-player {
        border: solid 1px gainsboro;
        background: #f5f5f5;
        font-family: sans-serif;
        color: #6f6f6f;
        font-size: 0.8em;
      }
      .sound-pane {
        height: 50px;
        background: white;
        margin: 8px;
        border: solid 1px gainsboro;
        position: relative;
      }
      .icons {
        margin: 0 8px 8px 8px;
      }
      .icons .button {
         cursor: pointer;
         border: solid 1px transparent;
      }
      .icons .button:hover {
         border: solid 1px gainsboro;
      }
      .cursor {
        background: red;
        width: 2px;
        height: 100%;
        position: absolute;
      }
    </style>
    <div class="sound-player">
      <div class="sound-pane">
        <span class="cursor" style="display: none;"></span>
      </div>
      <div class="icons">
        <span class="button play-button" style="font-size:18px;">▶</span>
        <span class="button stop-button" style="font-size:18px;">◼</span>&nbsp;&nbsp;
        <span class="duration">Frequency: ${this.frequency} ib, Duration: ${Math.round(this.duration / .864)} b</span>
      </div>
    </div>`;
    const cursor = ui.querySelector('.cursor');
    let interval = null;
    const resetInterval = () => {
      if (interval != null) {
        clearInterval(interval);
        interval = null;
      }
    };
    const soundPlayer = ui.querySelector('.sound-player');
    ui.querySelector('.sound-pane').appendChild(this.draw(46, width - 20));
    ui.querySelector('.play-button').onclick = () => {
      cursor.style.left = '0';
      this.play();
      cursor.style.display = 'block';
      const playTime = Date.now();
      resetInterval();
      interval = setInterval(() => {
        if (!document.contains(soundPlayer)) {
          resetInterval();
          this.stop();
        }
        let progress = (Date.now() - playTime) / this.duration / 1000;
        if (progress < 0) progress = 0;
        if (progress > 1) {
          progress = 1;
          resetInterval();
          this.stop();
          cursor.style.display = 'none';
        }
        cursor.style.left = `${Math.floor(progress * (width - 20))}px`;
      }, 20);
    };
    ui.querySelector('.stop-button').onclick = () => {
      resetInterval();
      this.stop();
      cursor.style.display = 'none';
    };
    return ui;
  }
}
function shortenHex(hex) {
  if (!/^#([0-9a-f]{3}){1,2}$/i.test(hex)) {
    return hex;
  }
  hex = hex.replace("#", "");
  if (hex.length === 6 && hex[0] === hex[1] && hex[2] === hex[3] && hex[4] === hex[5]) {
    return "#" + hex[0] + hex[2] + hex[4];
  }
  return "#" + hex;
}
piecewiseIob = d3.piecewise(d3.interpolateRound, [
  301.734720,
  319.675162,
  338.684026,
  358.823261,
  380.160000,
  402.765523,
  426.715171,
  452.088950,
  478.971619,
  507.452688,
  537.627456,
  569.596406,
  603.466416,
  639.351360,
])
piecewiseLen = d3.piecewise(d3.interpolateRound, [
  2436.073648,
  2299.359125,
  2170.306080,
  2048.495960,
  1933.522727,
  1825.002285,
  1722.572924,
  1625.892425,
  1534.637900,
  1448.505481,
  1367.206961,
  1290.471625,
  1218.042928,
  1149.677698,
])
class minMax {
  constructor(limits) {
    this.min = Math.min(...limits)
    this.max = Math.max(...limits)
  }
  scale(val) {
    return (val - this.min) / (this.max - this.min)
  }
}
octave4scaler = new minMax([200, 400])
freqs = [
  201.38,
  213.36,
  226.04,
  239.49,
  253.73,
  268.81,
  284.80,
  301.73,
  319.68,
  338.68,
  358.82,
  380.16,
]
notes = [
  "A♯",
  "B",
  "C",
  "C♯",
  "D",
  "D♯",
  "E",
  "F",
  "F#",
  "G",
  "G♯",
  "A",
]
xet = freqs.map(x => octave4scaler.scale(x))
xetFix = xet.map(x => parseFloat((x * 10).toFixed(2)))
xetCol = xet.map(piecewiseColor)
xetHex = xetCol.map(x => d3.color(x).formatHex())
xetHue = xetCol.map(x => Math.round(d3.hsl(x).h))
xetIob = xet.map(piecewiseIob)
xetLen = xet.map(piecewiseLen)
hues = Object.fromEntries([
    0.002,
    0.00390625,
    0.004,
    0.0078125,
    0.008,
    0.014,
    0.015625,
    0.0158,
    0.016,
    0.021,
    0.022,
    0.024,
    0.030,
    0.03125,
    0.040,
    0.039,
    0.0625,
    0.065,
    0.067,
    0.130,
    0.185,
    1/3,
    0.40069,
    0.41302,
    0.413,
    0.4132,
    0.420,
    0.450,
    0.460,
    0.480,
    0.490,
    0.49008,
    0.599,
    0.704,
    0.754,
    0.788,
    0.815,
    0.864,
    0.935,
    0.960,
  ].map(i => [i, d3.hsl(piecewiseColor(i)).h])
);
h26div300 = d3.hsl(piecewiseColor(26 / 300)).h
hD039 = d3.hsl(piecewiseColor(39 / 365)).h
hD080 = d3.hsl(piecewiseColor(80 / 365)).h
hD285 = d3.hsl(piecewiseColor(285 / 365)).h
fMile = 1.6 / 1.609344
fInch = 25 / 25.4
hIob = d3.hsl(piecewiseColor(1 / .864 % 1)).h
hDrop = d3.hsl(piecewiseColor(64 / 51 % 1)).h
hMass = d3.hsl(piecewiseColor(448 / 453.59237 % 1)).h
hGall = d3.hsl(piecewiseColor(3.584 / 3.785411784 % 1)).h
hBarr = d3.hsl(piecewiseColor(128 / 119.24 % 1)).h
hCara = d3.hsl(piecewiseColor(192 / 200 % 1)).h
hAvOz = d3.hsl(piecewiseColor(32 / 28.349523125  % 1)).h
hFlOz = d3.hsl(piecewiseColor(32 / 29.5735295625 % 1)).h
hInch = d3.hsl(piecewiseColor(fInch % 1)).h
hSqIn = d3.hsl(piecewiseColor(fInch**2 % 1)).h
hCuIn = d3.hsl(piecewiseColor(fInch**3 % 1)).h
hMile = d3.hsl(piecewiseColor(fMile % 1)).h
hSqMi = d3.hsl(piecewiseColor(fMile**2 % 1)).h
bcHue = (xetHue[1] + xetHue[2]) / 2
ddsHue = (xetHue[4] + xetHue[5]) / 2
dseHue = (xetHue[5] + xetHue[6]) / 2
// https://observablehq.com/@mcmire/tone-map
GraphableTone = {
  const _assertRequiredKeys = Symbol("assertRequiredKeys");
  class GraphableTone {
    constructor(args) {
      this[_assertRequiredKeys](args);
      const { recognizedProps, unrecognizedProps } = lod.reduce(
        args,
        (results, value, key) => {
          if (this.constructor.knownKeys.indexOf(key) !== -1) {
            results.recognizedProps[key] = value;
          } else {
            results.unrecognizedProps[key] = value;
          }
          return results;
        },
        { recognizedProps: {}, unrecognizedProps: {} }
      );
      this._setProps(recognizedProps, unrecognizedProps);
    }
    get origin() {
      return this._origin;
    }
    set origin(origin) {
      this._origin = Fraction(origin);
    }
    get frequency() {
      return this.origin.mul(this.ratio);
    }
    cloneWith(overrideProps) {
      const recognizedProps = lod.pick(this, this.constructor.knownKeys);
      return new this.constructor({
        ...recognizedProps,
        ...this.unrecognizedProps,
        ...overrideProps
      });
    }
    toPlainObject() {
      const recognizedProps = lod.pick(this, this.constructor.knownKeys);
      return {
        ...recognizedProps,
        ...this.unrecognizedProps
      }; 
    }
    toDebug() {
      return {
        ...this,
        ratio: `${this.ratio.n}/${this.ratio.d}`,
        frequency: this.frequency.valueOf(),
        origin: this.origin.valueOf(),
        seriesIndex: this.seriesIndex,
        colorIndex: this.colorIndex,
        index: this.index,
        alwaysShowLabel: this.alwaysShowLabel
      };
    }
    _setProps(recognizedProps, unrecognizedProps) {
      this.ratio = recognizedProps.ratio;
      this.origin = recognizedProps.origin != null ? recognizedProps.origin : originFrequency;
      this.index = recognizedProps.index;
      this.seriesIndex = recognizedProps.seriesIndex != null ? recognizedProps.seriesIndex : 0;
      this.colorIndex = recognizedProps.colorIndex != null ? recognizedProps.colorIndex : this.seriesIndex;
      this.alwaysShowLabel = recognizedProps.alwaysShowLabel != null ? recognizedProps.alwaysShowLabel : true;
      Object.assign(this, unrecognizedProps);
      this.unrecognizedProps = unrecognizedProps;
    }    
    [_assertRequiredKeys](args) {
      const missingKey = this.constructor.requiredKeys.find(requiredKey => {
        return !args.hasOwnProperty(requiredKey);
      });
      if (missingKey != null) {
        throw new Error(`Missing key: ${missingKey}`);
      }
    }
  }
  GraphableTone.knownKeys = [
    "ratio",
    "origin",
    "index",
    "seriesIndex",
    "colorIndex",
    "alwaysShowLabel"
  ];
  GraphableTone.requiredKeys = ["ratio"];
  GraphableTone.wrap = (value, options = {}) => {
    const defaults = options.defaults || {};
    if (value instanceof GraphableTone) {
      return value;
    } else {
      return new GraphableTone({ ...defaults, ...value });
    }
  }
  return GraphableTone;
}
renderGraph = (possibleTones, config = {}) => {
  const tones = possibleTones.map((possibleTone, index) => {
    return GraphableTone.wrap(possibleTone, { defaults: { index }});
  });
  const mapToY = mapToYFor(tones, config);
  synth.releaseAll();
  const height = graphHeight;
  const svg = d3.select(DOM.svg(width, height))
    .attr("viewBox", `0 -10 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .style("width", "100%")
    .style("height", "auto");
  if (config.drawConnections) {
    addConnectionsTo(svg, tones, config);
  }
  addStiltsTo(svg, tones, config); 
  const circles = addPointsTo(svg, tones, config);
  addPointLabelsTo(svg, tones, config);
  addXAxisTo(svg, tones, config);
  // addYAxisTo(svg, tones, config);
  augmentGraphToPlayTones(svg, circles, {
    getTonesFrom: (tone) => [tone],
    onMouseDown: (circle, tone) => {
      circle.transition("mousedown")
        .duration(transitionDuration)
        .ease(d3.easeLinear)
        .attr("r", pointRadius * 2);
      svg.select(`.point-label--${tone.seriesIndex}--${tone.index}`)
        .transition()
        .attr("opacity", 1)
        .attr("y", t => mapToY(t.label) - (pointRadius * 2) - 10);
    },
    onMouseUp: (circle, tone) => {
      circle.transition("mouseup")
        .duration(transitionDuration)
        .ease(d3.easeLinear)
        .attr("r", pointRadius);
      svg.selectAll(".point-label")
        .transition()
        .attr("opacity", t => (t.alwaysShowLabel && !config.drawConnections) ? 1 : 0)
        .attr("y", t => mapToY(t.label) - (pointRadius * 2));
    }
  });
  return svg.node();
}
graphHeight = 350
augmentGraphToPlayTones = (
  svg,
  elements,
  {
    getTonesFrom,
    getTargetFrom = (element) => element,
    eventSource = "augmentGraphToPlayTones",
    onMouseDown = () => {},
    onMouseUp = () => {}, 
  }
) => {
  const BUFFER_TIME = 250; // ms
  const notesBeingPlayed = [];
  const interruptAllEventsFor = (selection) => {
    selection
      .interrupt("mouseover")
      .interrupt("mouseout")
      .interrupt("mousedown");
  };
  elements.each((datum, i, nodes) => {
    const element = d3.select(nodes[i]);
    const target = getTargetFrom(element);
    target
      .style("cursor", "pointer")
      .on(`mousedown.${eventSource}`, () => {
        interruptAllEventsFor(target);
        getTonesFrom(datum).forEach(tone => {
          synth.triggerAttack((tone.freq ?? tone.frequency.valueOf()));
          notesBeingPlayed.push({
            datum: datum,
            target: target,
            element: element,
            tone: tone,
            time: new Date()
          });
        });
        onMouseDown(target, datum, element);
      });
  });
  svg.on(`mouseup.${eventSource}`, () => {
    const fn = (note) => {
      interruptAllEventsFor(note.target);
      synth.triggerRelease((note.tone.freq ?? note.tone.frequency.valueOf()));
      onMouseUp(note.target, note.datum, note.element);
    };
    notesBeingPlayed.forEach(note => {
      const now = new Date();
      const timeBuffer = BUFFER_TIME - (now - note.time);
      if (timeBuffer > 0) {
        setTimeout(() => fn(note), timeBuffer);
      } else {
        fn(note);
      }
    });
    // clear the whole thing
    notesBeingPlayed.splice(0, notesBeingPlayed.length);
  });
}
reduceFraction = (fraction, { min, max }) => {
  let n = 0;
  while (fraction.valueOf() < min || fraction.valueOf() > max) {
    if (n > 100) {
      throw "Too many iterations";
    }
    if (fraction > max) {
      fraction = fraction.div(2);
    } else if (fraction < min) {
      fraction = fraction.mul(2);
    }
    n++;
  }
  return fraction;
}
primeNumbersUpTo = (limit) => {
  const maxMultiple = Math.sqrt(limit);
  const workingPrimes = lod.range(2, limit + 1).reduce((o, n) => ({ ...o, [n]: true }), {});
  for (let multiple = 2; multiple <= maxMultiple; multiple++) {
    if (workingPrimes[multiple]) {
      for (let nonPrime = multiple * multiple; nonPrime <= limit; nonPrime += multiple) {
        workingPrimes[nonPrime] = false;
      }
    }
  }
  const primes = lod.reduce(workingPrimes, (array, isPrime, n) => {
    if (isPrime) {
      return array.concat([
        parseInt(n, 10)
      ]);
    } else {
      return array;
    }
  }, []);
  return [1].concat(primes);
}
synth = new Tone.PolySynth(16, Tone.Synth, {
  oscillator: {
    type: "sine",
    volume: -20
  },
  envelope: {
    attack: 0.05,
    decay: 0,
    sustain: 1,
    release: 1.2
  }
}).toMaster()
origin = Fraction(originFrequency)
axisColor = d3.hsl(0, 0, 0.5)
lollimargin = ({top: 30, right: 10, bottom: 20, left: 8})
numberOfColors = 10
rowHeight = 60
originFrequency = 440
pointRadius = width < 400 ? 8 :  width < 450 ? 10 : width < 500 ? 12 : width < 550 ? 14 : width < 600 ? 16 : width < 650 ? 18 : width < 700 ? 20 : width < 750 ? 22 : width < 800 ? 24 : width < 850 ? 26 : width < 900 ? 28 : width < 950 ? 30 : 32
transitionDuration = 200
addStiltsTo = (svg, tones, config) => {
  const mapToX = mapToXFor(tones, config);
  const mapToY = mapToYFor(tones, config);
  const height = calculateGraphHeight(tones);
  svg
    .append("g")
    .attr("stroke", axisColor)
    .attr("stroke-dasharray", "2, 3")
    .attr("stroke-width", 1)
    .selectAll("line")
    .data(tones)
    .enter().append("line")
      .attr("x1", tone => mapToX(tone.x ?? tone.frequency))
      .attr("x2", tone => mapToX(tone.x ?? tone.frequency))
      .attr("y1", tone => mapToY(tone.label))
      .attr("y2", height - lollimargin.bottom);
}
addPointsTo = (svg, tones, config) => {
  const mapToX = mapToXFor(tones, config);
  const mapToY = mapToYFor(tones, config);
  const colors = colorsFor(tones);
  const circles = svg
    .append("g")
    .selectAll("circle")
    .data(tones)
    .enter().append("circle")
      .attr("cx", t => mapToX(t.x ?? t.frequency))
      .attr("cy", t => mapToY(t.label))
      .attr("r", pointRadius)
      .attr("fill", t => t.color ?? (t.isColored === false ? "#ccc" : colors[t.colorIndex]))
      .attr("stroke", axisColor)
      .attr("stroke-width", 1);
  return circles;
}
addPointLabelsTo = (svg, tones, config) => {
  const mapToX = mapToXFor(tones, config);
  const mapToY = mapToYFor(tones, config);
  const colors = colorsFor(tones);
  svg
    .append("g")
    .selectAll("text")
      .data(tones)
      .enter().append("text")
        .attr("class", (tone, i) => {
          return `point-label point-label--${tone.seriesIndex}--${tone.index}`;
        })
        .text(tone => {
          if (tone.label != null) return tone.label;
          const ratioAsString = `${tone.ratio.n}/${tone.ratio.d}`;
          if (tone.frequency.equals(tone.origin)) {
            return tone.origin;
          } else {
            return ratioAsString;
          }
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "24px")
        .attr("font-weight", "bold")
        .attr("text-anchor", "middle")
        .attr("fill", t => t.color ?? (t.isColored === false ? "#ccc" : colors[t.colorIndex]))
        .attr("stroke", axisColor)
        .attr("stroke-width", width < 500 ? 1 : width < 750 ? 1.25 : 1.5)
        .attr("paint-order", "stroke")
        .attr("stroke-linejoin", "round")
        .attr("x", t => mapToX(t.x ?? t.frequency))
        .attr("y", t => mapToY(t.label) - (pointRadius * 2))
        .attr("opacity", (t, _) => {
          return (t.alwaysShowLabel && !config.drawConnections) ? 1 : 0;
        });
}
addYAxisTo = (svg, tones, config) => {
  const mapToY = mapToYFor(tones, config);
  const axis = d3.axisLeft(mapToY);
  svg.append("g")
    .attr("transform", `translate(${lollimargin.left * 3},0)`)
    .call(axis)
    .selectAll("text")
      .attr("font-size", config.axisFontSize ?? "16px");
}
addXAxisTo = (svg, tones, config) => {    
  svg.append("g").call(g => {
    const height = calculateGraphHeight(tones);
    const axis = d3.axisBottom(mapToXFor(tones, config)).tickSizeOuter(0);
    if (config.xAxis != null && config.xAxis.ticks) {
      axis.tickValues(config.xAxis.ticks);
    }
    const axisGroup = g
      .attr("transform", `translate(0,${height - lollimargin.bottom})`)
      .call(axis);
    axisGroup.selectAll("text")
      .attr("font-size", width < 400 ? "8px" :  width < 450 ? "10px" : width < 500 ? "12px" : width < 550 ? "14px" : width < 600 ? "16px" : width < 650 ? "18px" : width < 700 ? "20px" : width < 750 ? "22px" : width < 800 ? "24px" : width < 850 ? "26px" : width < 900 ? "28px" : width < 950 ? "30px" : "32px")
      .attr("fill", axisColor.darker(1));
    axisGroup.selectAll("path")
      .attr("stroke", axisColor);
    axisGroup.selectAll("line")
      .attr("stroke", axisColor);
  });
  svg.append("text")
  .attr("x", (width - lollimargin.left - lollimargin.right) / 2 + lollimargin.left)
  .attr("y", calculateGraphHeight(tones) + (width < 400 ? 8 :  width < 450 ? 10 : width < 500 ? 12 : width < 550 ? 14 : width < 600 ? 16 : width < 650 ? 18 : width < 700 ? 20 : width < 750 ? 22 : width < 800 ? 24 : width < 850 ? 26 : width < 900 ? 28 : width < 950 ? 30 : 32))
  .attr("text-anchor", "middle")
  .attr("font-size", config.axisTitleFontSize ?? ("font-size", width < 400 ? "12px" :  width < 450 ? "14px" : width < 500 ? "16px" : width < 550 ? "18px" : width < 600 ? "20px" : width < 650 ? "22px" : width < 700 ? "24px" : width < 750 ? "26px" : width < 800 ? "28px" : width < 850 ? "30px" : width < 900 ? "32px" : width < 950 ? "34px" : "36px"))
  .attr("fill", config.axisTextColor ?? axisColor.darker(1))
  .text(config.xAxisTitle ?? "Perbeat (inverse centimilliday)");
}
addConnectionsTo = (svg, tones, config) => {
  const connections = ToneConnections.generate(tones, config);
  const gradients = Object.values(
    lod.keyBy(
      connections.map(connection => connection.gradient),
      gradient => gradient.id
    )
  );
  const linearGradientGroup = svg.append("defs")
    .selectAll("linearGradient")
    .data(gradients)
    .enter().append("linearGradient")
      .attr("id", gradient => gradient.id);
  linearGradientGroup.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", gradient => gradient.from);
  linearGradientGroup.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", gradient => gradient.to);
  svg.append("g")
    .selectAll("path")
    .data(connections)
    .enter().append("path")
      .attr("d", connection => {
        const curve = connection.curve;
        return [
          `M ${curve.start.x} ${curve.start.y}`,
          /*
          `C ${curve.control1.x} ${curve.control1.y}`,
          `${curve.control2.x} ${curve.control2.y}`,
          */
          `L ${curve.end.x} ${curve.end.y + 0.1}`
        ].join(" ");
      })
      .attr("stroke-width", "1px")
      .attr("stroke", connection => `url(#${connection.gradient.id})`)
      .attr("fill", "none");
  svg.append("g")
    .selectAll("text")
    .data(connections)
    .enter().append("text")
      .text(connection => connection.text.content)
      .attr("font-family", "sans-serif")
      .attr("font-size", "13px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .attr("x", connection => connection.text.x)
      .attr("y", connection => connection.text.y)
      .attr("transform", connection => {
        return `rotate(${connection.text.angle} ${connection.text.x} ${connection.text.y})`
      })
      .attr("fill", connection => connection.gradient.to)
}
ToneConnections = {
  const gradients = {};
  let lastGradientIndex = 0;
  class ToneConnections {
    constructor(tones, config) {
      this.tones = tones;
      this.combinationsOfTones = [...G.clone.combination(tones, 2)];
      this.results = [];
      this.mapToX = mapToXFor(tones, config);
      this.colors = colorsFor(tones);
    }
    generate() {
      this.combinationsOfTones.forEach(([tone1, tone2], index) => {
        const point1 = { x: this.mapToX(tone1.x ?? tone1.frequency), y: mapToY(tone1.label) };
        const point2 = { x: this.mapToX(tone2.x ?? tone2.frequency), y: mapToY(tone2.label) };
        const curveHeight = Math.sqrt(5 * (point2.x - point1.x));
        const controlPosition = (point2.x - point1.x) / 10;
        const curve = {
          start: point1,
          control1: { x: point1.x + controlPosition, y: point1.y - curveHeight },
          control2: { x: point2.x - controlPosition, y: point1.y - curveHeight },
          end: point2
        };
        const xDist = curve.end.x - curve.start.x;
        const yDist = curve.end.y - curve.start.y;
        const ratioDiff = (tone2.ratio > tone1.ratio)
          ? tone2.ratio.div(tone1.ratio)
          : tone1.ratio.div(tone2.ratio);
        const text = {
          x: curve.start.x + (xDist / 2) + 5,
          y: curve.start.y + (yDist / 2) - 5,
          angle: Math.atan(yDist / xDist) * (360 / (2 * Math.PI)),
          content: ratioDiff.toFraction()
        };
        const gradient = this._findOrAddGradientFor(tone1, tone2);
        this.results.push({ curve, gradient, text });
      });
    }
    _findOrAddGradientFor(tone1, tone2) {
      const color1 = this.colors[tone1.colorIndex];
      const color2 = this.colors[tone2.colorIndex];
      const key = [color1.toString(), color2.toString()].join("/");
      if (key in gradients) {
        return gradients[key];
      } else {
        lastGradientIndex++;
        const gradient = {
          from: color1,
          to: color2,
          id: `gradient-${lastGradientIndex}`
        };
        gradients[key] = gradient;
        return gradient;
      }
    }
  }
  ToneConnections.generate = (tones, config) => {
    const connections = new ToneConnections(tones, config);
    connections.generate();
    return connections.results;
  }
  return ToneConnections;
}
mapToXFor = (tones, options = {}) => {
  const xAxis = options.xAxis || {};
  const frequencies = tones.map(t => t.x ?? t.frequency);
  const min = xAxis.min != null ? xAxis.min : d3.min(frequencies);
  const max = xAxis.max != null ? xAxis.max : d3.max(frequencies);
  let scale = d3.scaleLog()
    .base(2)
    .domain([min, max]);
  if (xAxis.nice) {
    scale = scale.nice();
  }
  scale = scale.range([lollimargin.left * 4, width - (lollimargin.right * 2)]);
  return scale;
}
mapToYFor = (tones, options = {}) => {
  const labels = tones.map(t => t.label);
  const height = calculateGraphHeight(tones);
  return d3.scalePoint()
    .domain(labels)
    .range([height - lollimargin.bottom, lollimargin.top])
    .padding(0.5);
}
mapToY = index => {
  return lollimargin.top + (rowHeight * index) + (rowHeight / 2);
}
colorsFor = tones => {
  return lod.range(0, 360, 360 / numberOfColorsAmong(tones)).map(hue => d3.hcl(hue, 70, 80))
}
numberOfColorsAmong = (tones) => lod.uniqBy(tones, t => t.colorIndex).length
calculateGraphHeight = tones => {
  const numberOfSeries = Object.keys(lod.countBy(tones, "seriesIndex")).length;
  return lollimargin.top + (rowHeight * numberOfSeries) + lollimargin.bottom + 200;
}
lod = require("lodash@4.17.0")
G = require("generatorics@1.1.0")
Tone = require("tone@0.12.80")
Fraction = require("fraction.js@4.0.8")
colors = [...Array(10).keys()].map(x => x / 10).map(piecewiseColor).map(d3.color).map(x => x.hex())
hertz = origs.map(x => x / .864)
labels = [...Array(10).keys()].map(x => x + 40)
origs = labels.map(x => 14.1275 * 2 **(x / 10))
```

``` {ojs}
//| echo: false
//| output: false
html`
<style>
.colorAs {
  background: hsl(${xetHue[0]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[0]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorAs3 {
  background: hsl(${hues[0.40069]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.40069]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color0158 {
  background: hsl(${hues[0.0158]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.0158]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorC4 {
  background: hsl(${hues[0.41302]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.41302]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorA4 {
  background: hsl(${hues[0.49008]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.49008]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorB {
  background: hsl(${xetHue[1]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[1]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorBc {
  background: hsl(${bcHue} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${bcHue}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorC {
  background: hsl(${xetHue[2]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[2]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorCs {
  background: hsl(${xetHue[3]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[3]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorD {
  background: hsl(${xetHue[4]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[4]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorDs {
  background: hsl(${xetHue[5]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[5]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorDds {
  background: hsl(${ddsHue} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${ddsHue}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorDsE {
  background: hsl(${dseHue} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${dseHue}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorE {
  background: hsl(${xetHue[6]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[6]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorF {
  background: hsl(${xetHue[7]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[7]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorFs {
  background: hsl(${xetHue[8]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[8]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorG {
  background: hsl(${xetHue[9]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[9]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorGs {
  background: hsl(${xetHue[10]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[10]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorA {
  background: hsl(${xetHue[11]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${xetHue[11]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color0 {
  background: hsl(0 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(0, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color002 {
  background: hsl(${hues[.002]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[.002]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color004 {
  background: hsl(${hues[.004]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[.004]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color00390625 {
  background: hsl(${hues[.00390625]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[.00390625]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color0078125 {
  background: hsl(${hues[.0078125]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[.0078125]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color008 {
  background: hsl(${hues[.008]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[.008]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color014 {
  background: hsl(${hues[.014]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[.014]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color015625 {
  background: hsl(${hues[0.015625]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.015625]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color016 {
  background: hsl(${hues[0.016]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.016]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color021 {
  background: hsl(${hues[0.021]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.021]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color022 {
  background: hsl(${hues[0.022]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.022]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color024 {
  background: hsl(${hues[0.024]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.024]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color025 {
  background: hsl(20 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(20, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color030 {
  background: hsl(${hues[0.030]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.030]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color03125 {
  background: hsl(${hues[0.03125]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.03125]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color039 {
  background: hsl(${hues[0.039]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.039]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color040 {
  background: hsl(${hues[0.040]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.040]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color050 {
  background: hsl(24 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(24, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color0625 {
  background: hsl(${hues[0.0625]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.0625]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color065 {
  background: hsl(${hues[0.065]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.065]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color067 {
  background: hsl(${hues[0.067]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.067]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color26div300 {
  background: hsl(${h26div300} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${h26div300}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color1 {
  background: hsl(36 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(36, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color125 {
  background: hsl(44 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(44, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color130 {
  background: hsl(${hues[0.130]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.130]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color185 {
  background: hsl(${hues[0.185]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.185]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color2 {
  background: hsl(60 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(60, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color250 {
  background: hsl(68 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(68, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color3 {
  background: hsl(80 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(80, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorThird {
  background: hsl(${hues[1/3]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[1/3]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color375 {
  background: hsl(96 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(96, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color4 {
  background: hsl(120 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(120, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color413 {
  background: hsl(${hues[0.413]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.413]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color4132 {
  background: hsl(${hues[0.4132]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.4132]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color420 {
  background: hsl(${hues[0.420]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.420]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color450 {
  background: hsl(${hues[0.450]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.450]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color460 {
  background: hsl(${hues[0.460]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.460]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color480 {
  background: hsl(${hues[0.480]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.480]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color490 {
  background: hsl(${hues[0.490]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.490]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color5 {
  background: hsl(180 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(180, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color599 {
  background: hsl(${hues[0.599]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.599]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color6 {
  background: hsl(208 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(208, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color625 {
  background: hsl(216 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(216, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color7 {
  background: hsl(240 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(240, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color704 {
  background: hsl(${hues[0.704]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.704]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color750 {
  background: hsl(264 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(264, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color754 {
  background: hsl(${hues[0.754]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.754]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color788 {
  background: hsl(${hues[0.788]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.788]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color8 {
  background: hsl(276 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(276, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color815 {
  background: hsl(${hues[0.815]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.815]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color864 {
  background: hsl(${hues[0.864]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.864]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color875 {
  background: hsl(292 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(292, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color9 {
  background: hsl(300 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(300, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color935 {
  background: hsl(${hues[0.935]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.935]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color950 {
  background: hsl(328 ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(328, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color960 {
  background: hsl(${hues[0.960]} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hues[0.960]}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorD039 {
  background: hsl(${hD039} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hD039}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorD080 {
  background: hsl(${hD080} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hD080}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorD285 {
  background: hsl(${hD285} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hD285}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorff6300 {
  background: #ff6300;
  color: black;
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorffec00 {
  background: #ffec00;
  color: black;
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color99ff00 {
  background: #99ff00;
  color: black;
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color28ff00 {
  background: #28ff00;
  color: black;
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color00ffe8 {
  background: #00ffe8;
  color: black;
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color007cff {
  background: #007cff;
  color: white;
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color0800ff {
  background: #0800ff;
  color: white;
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color5e00d6 {
  background: #5e00d6;
  color: white;
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorIob {
  background: hsl(${hIob} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hIob}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorMile {
  background: hsl(${hMile} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hMile}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorInch {
  background: hsl(${hInch} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hInch}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorCuIn {
  background: hsl(${hCuIn} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hCuIn}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorDrop {
  background: hsl(${hDrop} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hDrop}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorMass {
  background: hsl(${hMass} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hMass}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorCara {
  background: hsl(${hCara} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hCara}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorGall {
  background: hsl(${hGall} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hGall}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorBarr {
  background: hsl(${hBarr} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hBarr}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorAvOz {
  background: hsl(${hAvOz} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hAvOz}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorFlOz {
  background: hsl(${hFlOz} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hFlOz}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorSqMi {
  background: hsl(${hSqMi} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hSqMi}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorSqIn {
  background: hsl(${hSqIn} ${colorS / 10}% ${colorL / 10}%);
  color: ${yiq(`hsl(${hSqIn}, ${colorS / 10}%, ${colorL / 10}%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
</style>
`
```

<style>
.text-preview {
  display: flex;
  font-family: sans-serif;
  flex-direction: column;
  margin: 0 32px;
  font-size: 12px;
}
.text-preview div {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  flex: auto;
}
#maptable table * {
  font-size: 18px;
  padding: 0px 5px 0px 5px;
}
div#projselect {
  max-width: 250px;
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
div#fig-distmap {
  margin-bottom: -28px;
}
#sizeinput #speedinput #yawinput #pitchinput #rollinput {
  display: flex;
  align-items: center;
  justify-content: center;
}
#speedinput input[type="number"], #sizeinput input[type="number"], #yawinput input[type="number"], #pitchinput input[type="number"], #rollinput input[type="number"] {
  width: 58px;
}
#speedinput input[type="range"], #sizeinput input[type="range"], #yawinput input[type="range"], #pitchinput input[type="range"], #rollinput input[type="range"]  {
  width: 72%;
}
.colorcomponent {
  display: flex;
  align-items: center;
  justify-content: center;
}
div#colorpreview, div.colorcomparer, div#coloropposites8, div#coloropposites10, div#colorcomparer8, div#colorcomparer10 {
  overflow: visible;
}
div.colorcomparer g[aria-label="y-axis label"] > text {
 transform: translate(40px,100px);
}
div.colorcomparer svg {
  overflow: visible;
  margin-left: 5px;
}
div.coloropp {
  overflow: visible;
}
div.coloropp canvas {
  width: 240px !important;
  height: 240px !important;
  overflow: visible;
}
div#hueslider label, div#satslider label, div#litslider label, div#loninput label, div#latinput label, div#offinput label, div#kginput label, div#zinput label, div#wavinput label, div#iobinput label, div#beatinput label {
  width: 110px;
}
div#hueslider input[type="number"], div#satslider input[type="number"], div#litslider input[type="number"], div#loninput input[type="number"], div#latinput input[type="number"], div#offinput input[type="number"], div#kginput input[type="number"], div#zinput input[type="number"], #wavinput input[type="number"], #iobinput input[type="number"], div#beatinput input[type="number"] {
  width: 100px;
}
div#hueslider input[type="range"], div#satslider input[type="range"], div#litslider input[type="range"], div#loninput input[type="range"], div#latinput input[type="range"], div#offinput input[type="range"], div#kginput input[type="range"], div#zinput input[type="range"], #wavinput input[type="range"], #iobinput input[type="range"] , #beatinput input[type="range"] {
  max-width: 225px;
  min-width: 125px;
}
.colorslider {
  display: flex;
  justify-content: center;
}
div#fig-distmap {
  display: flex;
  justify-content: center;
  overflow-x: visible;
}
div#maptable {
  display: flex;
  justify-content: center;
  overflow-x: visible;
  line-height: 1.5;
}
div#maptable form {
  padding: 0px;
}
div#toggles {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin-top: -16px;
  margin-bottom: -9px;
}
div#toggles * {
  overflow: visible;
}
div#toggles form.oi-3a86ea-toggle#bordertoggle {
  width: 100px;
}
div#toggles form.oi-3a86ea-toggle#bordertoggle > label {
  width: 50px;
}
div#toggles form.oi-3a86ea-toggle#gridtoggle {
  width: 80px;
}
div#toggles form.oi-3a86ea-toggle#gridtoggle > label {
  width: 31px;
}
div#toggles form.oi-3a86ea-toggle#suntoggle {
  width: 75px;
}
div#toggles form.oi-3a86ea-toggle#suntoggle > label {
  width: 28px;
}
div#toggles form.oi-3a86ea-toggle#utctoggle {
  width: 80px;
}
div#toggles form.oi-3a86ea-toggle#utctoggle > label {
  width: 32px;
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
div:has(div.description) {
  display: none;
}
h4.hiddenheading, h5.hiddenheading {
  display: none;
}
h4.anchored {
  margin: 8px 0px 8px 0px;
}
#zemcubic svg {
  max-width: 100%;
  height: 220px;
}
#zemhands svg {
  max-width: 100%;
}
svg#lefthand {
  height: 50%;
}
.marginInputs {
  position: relative;
  top: -120px;
}
#cct table, #zct table {
  line-height: 1.5;
  vertical-align: middle;
}
section#map {
  line-height: 1.5;
}
#ruler {
  margin-top: 25px;
}
form.oi-3a86ea {
  flex-wrap: nowrap;
}
#costype label {
  max-width: 100px;
}
img#ruler, svg#zhands {
  width: 100%;
}
div#iobpiano > div > div > svg {
  max-width: 100%;
  max-height: 100%;
  overflow: visible;
}
.freqcomponent {
  max-width: 100%;
}
#iobpiano {
  overflow: clip;
  max-width: 100%;
  margin-bottom: 8px;
}
img#zModu {
  width: 100%;
}
#iobplayer {
  overflow: clip;
}
#iobplayer canvas {
  height: 100%;
}
@font-face {
  font-family: "Iosevka";
  src: url(../asset/IosevkaNerdFont-Regular.ttf);
}
.iosevka {
  font-family: "Iosevka", sans-serif !important;
}
#chorus svg {
  width: 100%;
}
#chorus > div {
  overflow: clip;
}
#citelist ol li {
  overflow-x: scroll;
  white-space: nowrap;
  padding: 0;
  margin: 0;
}
#gloslist ul li {
  overflow-x: scroll;
  white-space: nowrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
#gloslist div {
  padding: 0;
  margin: 0;
}
#chorus {
  margin-top: -12px;
  margin-bottom: 19px;
}
.fraction {
  display: inline-flex; /* Allows the container to sit inline with text */
  flex-direction: column; /* Stacks the children vertically */
  align-items: center; /* Centers the numbers */
  vertical-align: middle; /* Aligns the fraction with the surrounding text */
  font-size: 60%; /* Makes the numbers smaller for a better look */
}
.numerator {
  position: relative;
  top: .4em;
}
.denominator {
  position: relative;
  bottom: .6em;
}
g#arpeggio.cluster rect {
  height: 156px;
  y: 148;
}
g#arpeggio g.cluster-label {
  transform: translate(148.73508071899414px, 150px);
}
div.cell-output-display:has(svg#csharpchart-mermaid.flowchart.mermaid-js) {
  margin-top: -120px;
  margin-bottom: -100px;
}
div.cell#csharpstaff * {
  overflow: visible;
}
figcaption {
  display: none;
}
.musicchart {
  margin-top: -25px;
}
.musicchart * {
  max-width: 1000px;
  overflow-y: visible;
  overflow-x: hidden;
}
</style>

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-hinnant2021" class="csl-entry">

Hinnant, Howard. 2021+185.
“<span class="nocase"><code>chrono</code></span>-Compatible Low-Level
Date Algorithms.” Preprint, 2021+185.
<https://howardhinnant.github.io/date_algorithms>.

</div>

</div>

[1] [Newton,
Issac](https://en.wikipedia.org/wiki/Isaac_Newton#:~:text=,an%20English%20polymath,-active%20as%20a).
1704. “Opticks.” ${decYearP0}+${decDateP0}.
<https://doi.org/10.5479/sil.302475.39088000644674>.

[2] [Clint Goss](https://www.clintgoss.com). <span class="tool"
data-bs-toggle="tooltip" data-bs-title="June 7, 2022">2022+098</span>.
“Color of Sound.” ${decYearP0}+${decDateP0}.
<https://www.flutopedia.com/sound_color.htm>.

[3] [Collignon, Claude
Boniface](https://en.wikipedia.org/wiki/Claude_Boniface_Collignon#:~:text=a%20French%20attorney%20who%20contributed%20to%20scientific%20and%20social%20reforms%20in%20the%20time%20of%20the%20French%20Revolution).
1788. “Découverte d’étalons justes, naturels, invariables et
universels.” ${decYearP0}+${decDateP0}.
<https://archive.org/details/dcouvertedtalon00collgoog/page/n68/mode/2up>.

[4] [Agnoli, Paolo](http://www.paoloagnoli.it) & [D’Agostini,
Giulio](https://www.roma1.infn.it/~dagos). <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="January 25, 2005">2004+330</span>. “Why does the meter
beat the second?” ${decYearP0}+${decDateP0}.
<https://arxiv.org/abs/physics/0412078>.

[5] [Hinnant, Howard](https://howardhinnant.github.io).
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="September 1, 2021">2021+185</span>. “`chrono`-Compatible
Low-Level Date Algorithms.” ${decYearP0}+${decDateP0}.
<https://howardhinnant.github.io/date_algorithms.html>.
