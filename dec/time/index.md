# Dec Time
Martin Laptev
2024+249

My website provides many examples of the [Quarto](https://quarto.org)
publishing and the [Dec](../../dec) measurement systems in action. I
leverage Quarto support for the [Observable](https://observablehq.com/)
data analysis and visualization system to display animated or
interactive plots like the bar chart, clocks, solar terminator map, and
line chart below.

<div class="column-page-right">

``` {ojs}
//| echo: false
viewof location = worldMapCoordinates([162, 0], [width * 2 / 3, width / 2.5])
```

</div>

<div class="column-page-right">

``` {ojs}
//| echo: false
app = {
  const svg = d3.select(DOM.svg(width / 1.5, height / 1.03));
  svg.style("user-select", "none")
     .style("-webkit-user-select", "none");
  const margin = {top: 0, left: 10, right: 6, bottom: 0, inner: 3};
  const contentWidth = width - margin.left - margin.right - margin.inner;
  const columnWidth = contentWidth / 2;
  let selection = {
    date: new Date(),
    hour: new Date().getHours()
  }
  const renderPlot = () => {
    svg.selectAll("#plot *").remove();
    svg.select("#plot").call(daylightPlot, {
      width: columnWidth / 1.8,
      height: (height - margin.top - margin.bottom) / 1.69,
      year: new Date().getFullYear(),
      latitude: location[1],
      defaultDate: selection.date,
      defaultHour: selection.hour
    })
  }
  const renderGlobe = () => {
    svg.selectAll("#globe *").remove();
    svg.selectAll("#globe").call(globe, { width: columnWidth / 1.3, location, ...selection });
  }
  const renderSolarSystem = () => {
    svg.selectAll("#solar-system *").remove();
    svg.selectAll("#solar-system").call(solarSystem,
                                        columnWidth * 1.3,
                                        location,
                                        selection.date,
                                        selection.hour);
  }
  const setSelection = (newSelection, forceRender = false) => {
    const prev = {...selection};
    selection = newSelection;
    svg.node().value = selection;
    if (forceRender) {
      renderPlot();
      renderSolarSystem();
      renderGlobe();
    } else if (prev.hour !== selection.hour || prev.date !== selection.date) {
      renderSolarSystem();
      renderGlobe();
    }
  }
  const plot = svg.append("g")
    .attr("id", "plot")
    .attr("transform", `translate(${margin.left})`);
  svg.append("g")
    .attr("id", "globe")
    .attr("transform", `translate(${margin.left + margin.inner + columnWidth / 1.78}, ${margin.top + height / 98.85 + Number(columnWidth < 300) * 16})`);
  svg.append("g")
    .attr("id", "solar-system")
    .attr("transform", `translate(${margin.left + margin.inner + columnWidth / 98.8}, ${margin.top + height / 1.28})`);
  setSelection(selection, true);
  const handleDateHourChange = ({ target, detail: { date, hour }}) => {
    if (date != null && hour != null) setSelection({...selection, date, hour});
  }
  svg.node().addEventListener(EventType.DateHourChange, handleDateHourChange, false);
  return svg.node();
}
```

</div>

``` {ojs}
//| echo: false
//| output: false
function lati2turn1(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return (degrees %= 360) / (360 / 10**e) % 10**e;
}
function dote2deco(dote = 719468, zone = 0, lead = "0", emoji = false, minus = false) {
let [year, doty] = dote2date(dote);
  if (minus) {
    doty = Math.abs(doty - (365 + Number(year2leap(year + 1))));
    if (zone != null) {
      zone = (10 - zone) % 10;
    }
  }
return `${
    (year + minus).toString().padStart(4, lead)}${minus ? "-" : "+"}${
    Math.floor(doty).toString().padStart(3, lead)}${emoji ? "🗓️" : ""}${(doty % 1 * 10).toFixed(4)}${
    zone != null ? (minus ? "+" : "-") + String(zone) : ""}${emoji ? "🕰️" : ""}`
}
graticule = d3.geoGraticule().stepMinor([36,36]).stepMajor([36,36])()
graticule.coordinates = graticule.coordinates.map(
  i => i.map(j => j.map((k, index, arr) => i.length === 3 && index === 0 ? k - 18 : k))
)
function long2turn(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return (((degrees %= 360) < 0 ? degrees + 360 : degrees) + 18) / (360 / 10**e) % 10**e;
}
// https://github.com/topojson/world-atlas
world = d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")

countries = topojson.feature(world, world.objects.countries)

topojson = require("topojson-client@3")
function long2zone(degrees = -180) {
  return Math.floor(long2turn(degrees, 1));
}
function year2leap(year = 1970) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}
// https://observablehq.com/@dbridges/visualizing-seasonal-daylight
solarSystem = (root, width, location, date, hour) => {
  const earthRadius = 0.04 * width;
  const sunRadius = 0.08 * width;
  const solarSystemRadius = width / 2 - 20;
  const stretch = 0.3;

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

  const solarSystem = root
    .append("g")
    .attr("transform", `translate(${width / 2})`);

  solarSystem.append("circle").attr("r", sunRadius).attr("fill", colors.sun);

  /* Draw orbit */
  solarSystem
    .append("ellipse")
    .attr("rx", solarSystemRadius)
    .attr("ry", stretch * solarSystemRadius)
    .attr("fill", "none")
    .attr("stroke", "black");

  /* Draw month ticks */
  d3.range(12).map((m) => {
    const d = new Date(date.getFullYear(), m, 1);
    const angle = getSolarAngle(d);

    solarSystem
      .append("line")
      .attr("x1", (solarSystemRadius + 6) * Math.sin(angle))
      .attr("y1", (solarSystemRadius + 6) * stretch * Math.cos(angle))
      .attr("x2", (solarSystemRadius - 6) * Math.sin(angle))
      .attr("y2", (solarSystemRadius - 6) * stretch * Math.cos(angle))
      .attr("stroke", "black");

    const startMonthAngle = getSolarAngle(new Date(date.getFullYear(), m, 1));

    solarSystem
      .append("text")
      .text(date2doty(d))
      .attr("x", (solarSystemRadius + 18) * Math.sin(startMonthAngle))
      .attr(
        "y",
        (solarSystemRadius + 18) * 1.18 * stretch * Math.cos(startMonthAngle)
      )
      .attr("text-anchor", "middle")
      .attr("font-size", fontSize)
      .attr("dominant-baseline", "middle")
      .attr("font-size", fontSize * 1.08)
      .attr("font-family", "sans-serif")
      .attr("fill", "black");
  });

  const earth = solarSystem
    .append("g")
    .attr("transform", `translate(${x}, ${y})`);

  earth
    .append("line")
    .attr("y1", -1.5 * earthRadius)
    .attr("y2", 1.5 * earthRadius)
    .attr("stroke", "blue")
    .attr("transform", `rotate(-23.5)`);
  earth.append("path").attr("d", path(earthGeo)).attr("fill", colors.ocean);
  earth.append("path").attr("d", path(land)).attr("fill", colors.land);
  earth.append("path")
  .attr("d", path(countries))
  .attr("stroke-width", ".075")
  .attr("fill", "none")
  .attr("stroke", "#555");
  const shadowPolygon = [
    [0, -90],
    [0, 0],
    [0, 90],
    [180, 0],
    [0, -90]
  ];
  earth
    .append("path")
    .attr("d", staticPath({ type: "Polygon", coordinates: [shadowPolygon] }))
    .attr("fill", "rgba(0, 0, 0, 0.5)");
  earth
    .append("path")
    .attr("d", path({ type: "Point", coordinates: location }))
    .attr("r", 18)
    .attr("stroke-width", .3)
    .attr("stroke", "black")
    .attr("fill", "red");
}

function greg2doty(month = 1, day = 1) {
    return Math.floor(
        (153 * (month > 2 ? month - 3 : month + 9) + 2) / 5 + day - 1
)}

function date2doty(date) {
  return greg2doty(date.getMonth() + 1, date.getDate())
}

function date2doty1(date) {
  const doty = greg2doty(date.getMonth() + 1, date.getDate())
  return doty === 31 ? "Day " + String(doty) : doty
}

// https://observablehq.com/@dbridges/visualizing-seasonal-daylight
globe = (root, { width, location, date, hour }) => {
  const solarAngle = getSolarAngle(date);
  const solarAngleDeg = toDegrees(solarAngle);
  const hourSpin = 360 * ((hour + 12) / 24);
  const spin = (180 + -location[0] + solarAngleDeg + hourSpin);
  const tilt = -15;
  const projection = d3.geoOrthographic()
                       .fitWidth(width, graticule)
                       .rotate([spin, tilt, 23.5]);
  const path = d3.geoPath(projection);
  const unClippedProjection = d3.geoOrthographic()
                                .clipAngle(null)
                                .fitWidth(width, graticule)
                                .rotate([spin, tilt, 23.5]);
  const unClippedPath = d3.geoPath(unClippedProjection);
  const staticProjection = d3.geoOrthographic()
                             .fitWidth(width, graticule)
                             .rotate([solarAngleDeg - 90, tilt]);
  const staticPath = d3.geoPath(staticProjection);
  const background = root.append("g");
  const earth = root.append("g").style("opacity", 0.75);
  const foreground = root.append("g");
  earth.append("path")
    .attr("d", path({type: "Sphere"}))
    .attr("fill", colors.ocean)
    .attr("stroke", "#9ecbda");
  earth.append("path")
    .attr("d", path(land))
    .attr("fill", colors.land);
  earth.append("path")
    .attr("d", path(countries))
    .attr("stroke-width", "1")
    .attr("fill", "none")
    .attr("stroke", "#000");
  root
    .append("text")
    .text(`${dote2deco(date.setUTCHours(0, 0, 0, 0) / 86400000 + 719468 + hour / 24, null, "0", true)}`)
    .attr("x", width / 2)
    .attr("y", -24 + (width < 400) * 4)
    .attr("text-anchor", "middle")
    .attr("font-size", fontSize * (width < 400 ? .8 : width < 500 ? 1 : 1.2))
    .attr("font-family", "monospace")
    .attr("fill", "black");
  root
    .append("text")
    .text(`${dote2deco(date.setUTCHours(0, 0, 0, 0) / 86400000 + 719468 + hour / 24, null, "0", true, true)}`)
    .attr("x", width / 2)
    .attr("y", -4 + (width < 400) * 1)
    .attr("text-anchor", "middle")
    .attr("font-size", fontSize * (width < 400 ? .8 : width < 500 ? 1 : 1.2))
    .attr("font-family", "monospace")
    .attr("fill", "black");
  background.append("path")
    .attr("d", unClippedPath({type: "Point", coordinates: location}))
    .attr("fill", "red");
  const latitudeCoords = (latitude, start, end) => {
    const longitudes = d3.range(start, end, 2).concat(end);
    return longitudes.map(d => [d, latitude]);
  }
  const correctSpin = d3.geoRotation([-hourSpin, 0]);
  const correctTilt = d3.geoRotation([6, 0, 0]);
  /* total angular extent of day/night */
  const dayExtent = 360 * dayLength(date, location[1]) / 24;
  const nightExtent = 360 - dayExtent;
  const dayLine = {
    type: "LineString",
    coordinates: latitudeCoords(location[1],
                                location[0] - dayExtent / 2,
                                location[0] + dayExtent / 2).map(d => correctSpin(d))
  };
  const nightLine = {
    type: "LineString",
    coordinates: latitudeCoords(location[1],
                                location[0] - dayExtent / 2 - nightExtent,
                                location[0] - dayExtent / 2).map(d => correctSpin(d))
  };
  background.append("path")
    .attr("d", unClippedPath(dayLine))
    .attr("fill", "none")
    .attr("stroke", colors.day)
    .attr("stroke-width", 3);
  background.append("path")
    .attr("d", unClippedPath(nightLine))
    .attr("fill", "none")
    .attr("stroke", colors.night)
    .attr("stroke-width", 3);
  foreground.append("path")
    .attr("d", path(dayLine))
    .attr("fill", "none")
    .attr("stroke", colors.day)
    .attr("stroke-width", 3);
  foreground.append("path")
    .attr("d", path(nightLine))
    .attr("fill", "none")
    .attr("stroke", colors.night)
    .attr("stroke-width", 3);
  foreground.append("path")
    .attr("d", path({type: "Point", coordinates: location}))
    .attr("stroke-width", .5)
    .attr("stroke", "black")
    .attr("fill", "red");
  const shadowPolygon = [[0, -90], [0, 0], [0, 90], [180, 0], [0, -90]].map(d => correctTilt(d));
  foreground.append("path")
    .attr("d", staticPath({type: "Polygon", coordinates: [shadowPolygon]}))
    .attr("fill", "rgba(0, 0, 0, 0.25)");
}

dayOfYear = (date) => {
  const yearStart = new Date(date.getFullYear(), 0, 1+60);
  return Math.floor((date.getTime() - yearStart.getTime())/86400000) + 1
}

// https://observablehq.com/@dbridges/visualizing-seasonal-daylight
daylightPlot = (
  root,
  { width, height, year, latitude, defaultDate, defaultHour }
) => {
  const margin = { top: 24, bottom: 32, left: 48, right: 0 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const xTickValues =
    width > 380 ? [3, 6, 9, 12, 15, 18, 21] : width > 240 ? [6, 12, 18] : [12];

  const xScale = d3
    .scaleLinear()
    .domain([0, 24])
    .range([margin.left, margin.left + chartWidth])
    .clamp(true);

  // y-axis scale
  const yScale = d3
    .scaleTime()
    .domain([new Date(year, 0, 1+60), new Date(year, 11, 31+60)])
    .range([margin.top, margin.top + chartHeight])
    .clamp(true);

  // y-axis labels
  const yAxis = d3
    .axisLeft(yScale)
    .tickValues(d3.timeMonth.range(new Date(year, 1, 1+60), new Date(year, 12, 1+57)))
    .tickSize(chartWidth)
    .tickFormat(date2doty1);

  const xAxis = d3
    .axisBottom(xScale)
    .tickValues(xTickValues)
    .tickSize(chartHeight)
    .tickFormat((d) => {
      return `${d / .024}`;
    });


  let date = defaultDate || new Date();
  let hour = defaultHour != null ? defaultHour : date.getHours();

  const handleMouseMove = (e) => {};

  root
    .append("rect")
    .attr("x", margin.left)
    .attr("y", margin.top)
    .attr("width", chartWidth)
    .attr("height", chartHeight)
    .attr("rx", 0.05 * width)
    .attr("fill", colors.night);

  root
    .append("g")
    .attr("transform", `translate(${margin.left + chartWidth}, 0)`)
    .call(yAxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick").attr("color", colors.grid))
    .call((g) => g.selectAll(".tick text").attr("font-size", 1.1 * fontSize))
    .call((g) => g.selectAll(".tick text").attr("color", "black"))
    .call((g) => g.selectAll(".tick line").attr("stroke-dasharray", "5 3"));

  root
    .append("g")
    .attr("transform", `translate(0, ${margin.top})`)
    .call(xAxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick").attr("color", colors.grid))
    .call((g) => g.selectAll(".tick text").attr("font-size", 1.1 * fontSize))
    .call((g) => g.selectAll(".tick text").attr("color", "black"))
    .call((g) => g.selectAll(".tick line").attr("stroke-dasharray", "5 3"));

  root
    .append("text")
    .text("Local Solar Time")
    .attr("x", margin.left + chartWidth / 2)
    .attr("y", margin.top + chartHeight + margin.bottom - 2)
    .attr("text-anchor", "middle")
    .attr("font-size", fontSize * 1.2)
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
      ...p.map(([d, l]) => `${xScale(12 - l / 2)},${yScale(d)}`),
      ...p.reverse().map(([d, l]) => `${xScale(12 + l / 2)},${yScale(d)}`)
    ].join(" ");

    root.append("polygon").attr("points", points).attr("fill", colors.day);
  });

  /* Legend */
  const legend = root
    .append("g")
    .attr("transform", `translate(${margin.left + chartWidth / 2 - 64})`);

  legend
    .append("rect")
    .attr("rx", 5)
    .attr("width", 1.4 * fontSize)
    .attr("height", 1.4 * fontSize)
    .attr("fill", colors.day);

  legend
    .append("text")
    .attr("x", 24)
    .attr("y", 17)
    .attr("font-size", 1.4 * fontSize)
    .attr("font-family", "sans-serif")
    .text("Day");

  legend
    .append("rect")
    .attr("x", 72)
    .attr("rx", 5)
    .attr("width", 1.4 * fontSize)
    .attr("height", 1.4 * fontSize)
    .attr("fill", colors.night);

  legend
    .append("text")
    .attr("x", 96)
    .attr("y", 17)
    .attr("font-size", 1.4 * fontSize)
    .attr("font-family", "sans-serif")
    .text("Night");

  /* Time and date controls */

  const dateLine = root.append("g");

  const updateControlPositions = () => {
    dateLine
      .select("line")
      .attr("x1", xScale(0))
      .attr("y1", yScale(date))
      .attr("x2", xScale(24))
      .attr("y2", yScale(date));

    dateLine
      .select("rect")
      .attr("x", xScale(0))
      .attr("y", yScale(date) - 4);

    root
      .select("#time-control")
      .attr("cx", xScale(hour))
      .attr("cy", yScale(date));
  };

  const dispatchDateHourChange = () => {
    const detail = { date, hour };
    const changeEvent = new CustomEvent(EventType.DateHourChange, {
      detail,
      bubbles: true
    });
    root.node().dispatchEvent(changeEvent);
  };

  const handleDateLineDrag = ({ y }) => {
    date = yScale.invert(y);
    updateControlPositions();
    dispatchDateHourChange();
  };

  const handleTimeCircleDrag = ({ x }) => {
    hour = xScale.invert(x);
    updateControlPositions();
    dispatchDateHourChange();
  };

  dateLine.append("line").attr("stroke-width", 4).attr("stroke", "red");

  dateLine
    .append("rect")
    .attr("width", chartWidth)
    .attr("height", 8)
    .attr("fill", "rgba(0, 0, 0, 0)")
    .style("cursor", "row-resize")
    .call(d3.drag().on("drag", handleDateLineDrag));

  root
    .append("circle")
    .attr("id", "time-control")
    .attr("r", 12)
    .attr("fill", "red")
    .attr("stroke-width", .6)
    .attr("stroke", "black")
    .style("cursor", "pointer")
    .call(d3.drag().on("drag", handleTimeCircleDrag));

  updateControlPositions();
}

fontSize = 15;

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

height = 0.65 * width;

EventType = ({
  LocationChange: "LOCATION_CHANGE",
  DateHourChange: "DATE_HOUR_CHANGE"
})

colors = ({
  night: "#719fb6",
  day: "#ffe438",
  grid: "#4b6a79",
  ocean: "#adeeff",
  land: "#f5f1dc",
  sun: "#ffe438"
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
  } = Array.isArray(config) ? {value: config} : config;
  const height = dimensions[1];
  let [lon, lat] = value;
  lon = lon != null ? lon : null;
  lat = lat != null ? lat : null;
  const formEl = html`<form style="width: ${width}px;"></form>`;
  const context = DOM.context2d(width, height-width/8.2);
  const canvas = context.canvas;
  canvas.style.margin = `-40px 2px -26px 2px`;
  const projection = d3
    .geoEquirectangular()
    .precision(0.1)
    .fitSize([width, height], { type: "Sphere" }).rotate([-153, 0]);
  const path = d3.geoPath(projection, context).pointRadius(2.5);
  formEl.append(canvas);
  function draw() {
    context.fillStyle = "#fff";
    context.fillRect(0, 0, width, height);
    context.beginPath(); path({type: "Sphere"});
    context.fillStyle = colors.ocean; context.fill();
    context.beginPath();
    path(graticule);
    context.lineWidth = 0.95;
    context.strokeStyle = `#aaa`;
    context.stroke();
    context.beginPath();
    path(land);
    context.fillStyle = colors.land;
    context.fill();
    context.beginPath();
    path(countries);
    context.lineWidth = .95;
    context.strokeStyle = `#000`;
    context.stroke();
    context.fillStyle = `#000`;
    context.font = width < 760 ? "14px serif" : width < 990 ? "17px serif" : "23px serif";
    d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, 82.5 - (width < 400) * 3.6])));
    d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, -62])));
    context.beginPath(), path(night), context.fillStyle = "rgba(0,0,255,0.1)", context.fill();
    context.beginPath(); path.pointRadius(17); path({type: "Point", coordinates: sun}); context.strokeStyle = "#0008"; context.fillStyle = "#ff08"; context.lineWidth = 1; context.stroke(); context.fill();
    if (lon != null && lat != null) {
      path.pointRadius(17); context.strokeStyle = "black";
      context.beginPath(); path({type: "Point", coordinates: [lon, lat]}); context.lineWidth = 1; context.stroke();
      context.lineWidth = 6;
      path.pointRadius(14); context.strokeStyle = "red";
      context.beginPath(); path({type: "Point", coordinates: [lon, lat]}); context.stroke();
    }
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
  const form = input({
    type: "worldMapCoordinates",
    title,
    description,
    display: v => (width > 400) ? html`<div style="width: ${width}px; white-space: nowrap; color: #444; text-align: center; font: ${width / 50}px monospace; position: relative; top: -${width / 36}px;  margin-bottom: -.4em;">
            <span style="color: #000;">Zone:</span> ${lon != null ? long2zone(lon) : ""}
            &nbsp; &nbsp;
            <span style="color: #000;">Longitude:</span> ${lon != null ? (long2turn(lon)).toFixed(0) : ""}
            &nbsp; &nbsp;
            <span style="color: #000;">Latitude:</span> ${lat != null ? ((lati2turn1(lat))).toFixed(0) : ""}
          </div>` : '',
    getValue: () => [lon != null ? lon : null, lat != null ? lat : null],
    form: formEl
  });
  return form;
}

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
```
