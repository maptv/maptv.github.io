# Dec Time
Martin Laptev
2024+251

My website provides many examples of the [Quarto](https://quarto.org)
publishing and the [Dec](../../dec) measurement systems in action. I
leverage Quarto support for the [Observable](https://observablehq.com/)
data analysis and visualization system to display animated or
interactive plots like the bar chart, clocks, solar terminator map, and
line chart below.

``` {ojs}
//| echo: false
unix = {
  while(true) {
    yield Date.now();
  }
}
// https://observablehq.com/@fheyen/barchart-clock
barChart = {
const W = width > 1250 ? width * 2 / 3 : width > 1150 ? width * 3 / 4 : width > 1050 ? width * 4 / 5 : width > 950 ? width * 5 / 6 : width > 850 ? width : width > 750 ? width * 1.02 : width > 650 ? width * 1.06 : width > 550 ? width * 1.1 : width > 450 ? width * 1.14 : width * 1.18;
  const H = 88;
  const barX = 1;
  const firstBarY = 1;
  const svg = d3
    .create("svg")
    .attr("width", W)
    .attr("viewBox", [0, 0, W, H]);
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
  // // Dek/Dotd
  // svg
  //   .append('rect')
  //   .attr('class', 'timeBar')
  //   .attr('y', firstBarY)
  //   .attr('width', d => scaleDek(Number(dotyDek)+Number(dotyDotd)/10+Number(barCents)/1000))
  // svg
  //   .append('rect')
  //   .attr('class', 'timeBarFull')
  //   .attr('y', firstBarY)
  //   .attr('width', d => scaleDek(dotyDek))
  // svg
  //   .append('rect')
  //   .attr('class', 'timeBar')
  //   .attr('y', firstBarY+30)
  //   .attr('width', d => scaleM(Number(dotyDotd)+Number(barCents)/100+Number(barMils)/1000))
  // svg
  //   .append('rect')
  //   .attr('class', 'timeBarFull')
  //   .attr('y', firstBarY+30)
  //   .attr('width', d => scaleM(dotyDotd))
  // svg.selectAll('.tickDek')
  //   .data(d3.range(width > 500 ? 4: 6, 37))
  //   .enter()
  //   .append('rect')
  //   .attr('class', 'tickDek')
  //   .attr('x', d=>scaleDek(d)+barX)
  //   .attr('y', firstBarY)
  //   .attr('height', d=>d%(width > 500 ? 2 : 3)===0? 6:4)
  // Cent ticks
  // svg.selectAll('.tickDotd')
  //   .data(d3.range(width > 500 ? 1: 2, 10))
  //   .enter()
  //   .append('rect')
  //   .attr('class', 'tickDotd')
  //   .attr('x', d=>scaleM(d)+barX)
  //   .attr('y', firstBarY+49)
  //   .attr('height', 6)
  // svg.selectAll('.tickLabel')
  //   .data(d3.range(width > 500 ? 4: 6, width > 500 ? 37: 35, width > 500 ? 2: 3))
  //   .enter()
  //   .append('text')
  //   .attr('class', 'tickLabel')
  //   .attr('x', d=>scaleDek(d)+barX+.5)
  //   .attr('y', firstBarY+22)
  //   .text(d=>d)
  // Beats
  svg
    .append('rect')
    .attr('class', 'timeBar')
    .attr('y', firstBarY+60)
    .attr('width', d => scaleMandB(Number(barBeats)+Number(barMb)/1000))
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
    .attr('width', d => scaleDD(Number(barDD)+Number(barMils)/100+Number(barBeats)/10000+Number(barMb)/10000000))
  svg
    .append('rect')
    .attr('class', 'timeBarFull')
    .attr('y', firstBarY)
    .attr('width', d => scaleDD(barDD))
  svg
    .append('rect')
    .attr('class', 'timeBar')
    .attr('y', firstBarY+30)
    .attr('width', d => scaleMandB(Number(barMils)/10+Number(barBeats)/1000))
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
  // svg.selectAll('.tickM1')
  //   .data(d3.range(width > 500 ? 1 : 2, 10))
  //   .enter()
  //   .append('rect')
  //   .attr('class', 'tickM1')
  //   .attr('x', d=>scaleM(d)+barX)
  //   .attr('y', firstBarY+32.5)
  //   .attr('height', 2.5)
  svg.selectAll('.tickLabel1')
    .data(d3.range(width > 500 ? 1 : 1, 10))
    .enter()
    .append('text')
    .attr('class', 'tickLabel1')
    .attr('x', d=>scaleDD(d)+barX+.5)
    .attr('y', firstBarY+18)
    .text(d=>d)
  // svg.selectAll('.tickLabel2')
  //   .data(d3.range(width > 500 ? 1 : 2, 10))
  //   .enter()
  //   .append('text')
  //   .attr('class', 'tickLabel2')
  //   .attr('x', d=>scaleM(d)+barX+.5)
  //   .attr('y', firstBarY+112)
  //   .text(d=>d)
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
    .data([
      // `${dotyDek}旬`, `${dotyDotd}日`,
      `${barDD}`, `${barMils}`, `${barBeats}`])
    .enter()
    .append('text')
    .attr('class', 'timeLabel')
    .attr('x', barX+2)
    .attr('y', (d,i)=>i*30+firstBarY+20)
    .text(d=>d);
  svg.attr("id", "barClock");
  return svg.node();
}
// https://observablehq.com/@d3/simple-clock
// https://observablehq.com/@drio/lets-build-an-analog-clock
clock = {
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
    handData[0].value = !fancySecondsOFF ? Math.floor(selectedExact * 10) : declock[0];
    handData[1].value = !fancySecondsOFF ? Math.floor(selectedExact * 10 % 1 * 100) : declock.slice(2, 4);
    handData[2].value = !fancySecondsOFF ? selectedExact * 10 % 1 * 100 % 1 * 100 : declock.slice(4, 6);
  }

  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, w, h])
    .style("max-width", "425px")
    .attr("class", "clock-top")
    .attr("id", "clock");

  svg
    .append("text")
    .text("+" + selected)
    .attr("x", clockRadius + margin)
    .attr("y", clockRadius * 2 + margin * 1.975)
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

clock1 = {
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
    handData[0].value = !fancySecondsOFF ? Math.floor(selectedExactM * 10) : declockM[0];
    handData[1].value = !fancySecondsOFF ? Math.floor(selectedExactM * 10 % 1 * 100) : declockM.slice(2, 4);
    handData[2].value = !fancySecondsOFF ? selectedExactM * 10 % 1 * 100 % 1 * 100 : declockM.slice(4, 6);
  }

  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, w, h])
    .style("max-width", "425px")
    .attr("class", "clock-btm")
    .attr("id", "clock");


  svg
    .append("text")
    .text("-" + selectedM)
    .attr("x", clockRadius + margin)
    .attr("y", clockRadius * 2 + margin * 1.975)
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
viewof coordinates = worldMapCoordinates([162, 0], [width, Math.round((210 / 400) * width)])
plot = Plot.plot({
  marginLeft: 50,
  marginRight: 65,
  marginBottom: 50,
  style: `overflow: visible;font-size:12px;margin-top:${-3 + (width < 400) * 3}px`,
  width: width * .96,
  y: {label: "time of day", domain: [0, .92], grid: false, labelAnchor: "center"},
  x: {label: "day of the year", labelAnchor: "center", labelOffset: 36},
  color: {legend: true, range: ["#ff6c00", "#009cff"], className: "lineplotlegend"},
  style: {fontSize: "16px"},
  marks: [
    Plot.ruleY([0]),
    Plot.lineY(times, {x: "date", y: "rise", stroke: "symbol", strokeWidth: 16, strokeOpacity: .6}),
    Plot.lineY(times, {x: "date", y: "noon", stroke: "symbol", strokeWidth: 16, strokeOpacity: .6}),
    Plot.lineY(times, {x: "date", y: "set", stroke: "symbol", strokeWidth: 16, strokeOpacity: .6}),
    Plot.text(times, Plot.selectLast({x: "date", y: "rise", z: "symbol", text: d => `sunrise`, textAnchor: "start", dx: 9})),
    Plot.text(times, Plot.selectLast({x: "date", y: "noon", z: "symbol", text: d => `noon`, textAnchor: "start", dx: 9})),
    Plot.text(times, Plot.selectLast({x: "date", y: "set", z: "symbol", text: d => `sunset`, textAnchor: "start", dx: 9})),
  ]
})
app = {
  const svg = d3.select(DOM.svg(width, height));

  svg.style("user-select", "none")
     .style("-webkit-user-select", "none");

  const margin = {top: 0, left: 16, right: 16, bottom: 0, inner: 32};
  const contentWidth = width - margin.left - margin.right - margin.inner;
  const columnWidth = contentWidth / 2;

  let selection = {
    date: this != null ? this.value.date : new Date(),
    hour: this != null ? this.value.hour : new Date().getHours()
  }

  const renderPlot = () => {
    svg.selectAll("#plot *").remove();
    svg.select("#plot").call(daylightPlot, {
      width: columnWidth,
      height: height - margin.top - margin.bottom,
      year: new Date().getFullYear(),
      latitude: location[1],
      defaultDate: selection.date,
      defaultHour: selection.hour
    })
  }

  const renderSolarSystem = () => {
    svg.selectAll("#solar-system *").remove();
    svg.selectAll("#solar-system").call(solarSystem,
                                        columnWidth,
                                        location,
                                        selection.date,
                                        selection.hour);
  }

  const renderGlobe = () => {
    svg.selectAll("#globe *").remove();
    svg.selectAll("#globe").call(globe, { width: columnWidth / 1.08, location, ...selection });
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
    .attr("id", "solar-system")
    .attr("transform", `translate(${margin.left + margin.inner + columnWidth}, ${margin.top + height / 7.5})`);

  svg.append("g")
    .attr("id", "globe")
    .attr("transform", `translate(${margin.left + margin.inner + 1.04 * columnWidth}, ${margin.top + height / 3.05 + Number(columnWidth < 300) * 16})`);

  setSelection(selection, true);

  const handleDateHourChange = ({ target, detail: { date, hour }}) => {
    if (date != null && hour != null) setSelection({...selection, date, hour});
  }

  svg.node().addEventListener(EventType.DateHourChange, handleDateHourChange, false);

  return svg.node();
}
```

``` {ojs}
//| echo: false
//| output: false
declock = (selectedExact * 10).toFixed(4);

declockM = (Math.abs(selectedExact - 1) * 10).toFixed(4);

viewof fancySecondsOFF = Toggle({
  label: "Ticking clock",
  value: false
})

import { Toggle } from "@observablehq/inputs"

import { slider } from "@jashkenas/inputs"

selected = `${declock}-${selectedZone}`

selectedM = `${declockM}-${selectedZone}`

selectedDote = unix2dote(unix, long2zone(coordinates[0]))

selectedExactM = Math.abs(selectedExact - 1)

selectedExact = selectedDote[0] % 1

selectedZone = selectedDote[1]

selectedZoneM = (10 - selectedZone) % 10

function long2zone(degrees = -180) {
  return Math.floor(long2turn(degrees, 1));
}

function long2turn(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return (((degrees %= 360) < 0 ? degrees + 360 : degrees) + 18) / (360 / 10**e) % 10**e;
}

function lati2turn(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return ((degrees %= 360) < 0 ? degrees + 360 : degrees) / (360 / 10**e) % 10**e;
}

function lati2turn1(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return (degrees %= 360) / (360 / 10**e) % 10**e;
}

solar1 = (await require("solar-calculator@0.2"))(coordinates)

borders = topojson.mesh(countryBorders, countryBorders.objects.countries, (a, b) => a !== b)

countryBorders = fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then(response => response.json())

boundaries = topojson.mesh(world,world.objects.countries, (a, b) => a !== b);

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

SunCalc = require("suncalc3")

pos = SunCalc.getPosition(Date.now(), coordinates[1], coordinates[0])

pos["azimuth"] * 180 / Math.PI

pos["azimuth"] / (2 * Math.PI)

pos["declination"] * 180 / Math.PI

pos["zenith"] * 180 / Math.PI

dateRange = d3.utcDay.range(new Date("2024-03-02"), new Date("2025-03-02"))

noons = dateRange.map(d => SunCalc.getSunTimes(d, coordinates[1], coordinates[0])["solarNoon"]["value"])

rises = dateRange.map(d => SunCalc.getSunTimes(d, coordinates[1], coordinates[0])["sunriseStart"]["value"])

sets = dateRange.map(d => SunCalc.getSunTimes(d, coordinates[1], coordinates[0])["sunsetEnd"]["value"])

zonalNoons = noons.map(d => d.getTime() / 86400000 - .4 + Math.round((144 + coordinates[0]) / 36) / 10).map(d => d % 1)

zonalRises = rises.map(d => d.getTime() / 86400000 - .4 + Math.round((144 + coordinates[0]) / 36) / 10).map(d => d % 1).map(d => d >= .5 || d <= .05 ? NaN : d)

zonalSets = sets.map(d => d.getTime() / 86400000 - .4 + Math.round((144 + coordinates[0]) / 36) / 10).map(d => d % 1).map(d => d <= .5 || d >= .95 ? NaN : d)

localNoons = noons.map(d => ((d.getTime() / 86400000 - .4 + (144 + coordinates[0]) / 360))).map(d => d % 1)

localRises = rises.map(d => ((d.getTime() / 86400000 - .4 + (144 + coordinates[0]) / 360))).map(d => d % 1).map(d => d >= .5 || d <= 0.05 ? NaN : d)

localSets = sets.map(d => ((d.getTime() / 86400000 - .4 + (144 + coordinates[0]) / 360))).map(d => d % 1).map(d => d <= .5 || d >= .95 ? NaN : d)

zonals = zonalNoons.map((d, i) => ({date: i, rise: zonalRises[i], noon: d, set: zonalSets[i]}))

locals = localNoons.map((d, i) => ({date: i, rise: localRises[i], noon: d, set: localSets[i]}))

times = [
  ["zonal", locals],
  ["local", zonals],
].flatMap(([symbol, values]) => values.map(d => ({symbol, ...d})))

graticule = d3.geoGraticule().stepMinor([36,36]).stepMajor([36,36])()

graticule.coordinates = graticule.coordinates.map(
  i => i.map(j => j.map((k, index, arr) => i.length === 3 && index === 0 ? k - 18 : k))
)

land = topojson.feature(world, world.objects.land)

world = (await fetch("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json")).json()

countries = topojson.feature(world, world.objects.countries)

topojson = require("topojson-client@3")

colors = ({
  night: "#91afd6",
  day: "#ffe438",
  grid: "#4b6a79",
  ocean: "#adeeff",
  land: "#f5f1dc",
  sun: "#ffe438"
})

label_style = `font: 13px/1.2 var(--sans-serif); width: 120px; font-size: ${label_size};`

label_size = '80%'

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

d3format = require("d3-format@1")

// https://talk.observablehq.com/t/legend-placement-options/8407/3
move = {
  d3.select(plot)
    .select("div")
    .raise() // Places swatch below the plot
    .style("float", "right"); // Floats the swatch on the right.
}

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
  const context = DOM.context2d(width, height-width/11.5);
  const canvas = context.canvas;
  canvas.style.margin = `-6px 0 ${width > 400 ? -86 : -24}px`;
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
    context.font = width < 760 ? "12px serif" : width < 990 ? "11.6px serif" : "18px serif";
    d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, 84.5 - (width < 400) * 3.6])));
    d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, -62])));
    context.beginPath(), path(night), context.fillStyle = "rgba(0,0,255,0.1)", context.fill();
    context.beginPath(); path.pointRadius(17); path({type: "Point", coordinates: sun}); context.strokeStyle = "#0008"; context.fillStyle = "#ff0a"; context.lineWidth = 1; context.stroke(); context.fill();
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
    display: v => (width > 400) ? html`<div style="width: ${width}px; white-space: nowrap; color: #444; text-align: center; font: 18px monospace; position: relative; top: 58px; margin-bottom: 48px;">
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

function dote({ year = 0, day = 0, month = 3, dotm = 1, week = 0, dotw = 3,
                hour = 0, minute = 0, second = 0, millisecond = 0,
                zone = 0, utc = -9, degree = -162 } = {}) {
  const cycle = Math.floor((year >= 0 ? year : year - 399) / 400),
    yote = year - cycle * 400;
  return (
    yote * 365 + cycle * 146097 + Math.floor(yote / 4) - Math.floor(yote / 100)
    + day + Math.floor((153 * (month > 2 ? month - 3 : month + 9) + 2) / 5) + dotm - 1
    + week * 7 + dotw - 3 + (hour + minute / 60 + second / 3600 + millisecond / 3600000)
    / 24 - (zone + Math.floor(utc / 2.4) + 4 + Math.floor((degree + 162) / 36)) / 10
  );
}

function doty(args) {
    const days = dote(args),
      cycle = Math.floor((days >= 0 ? days : days - 146096) / 146097),
      dotc = days - cycle * 146097,
      yotc = Math.floor((dotc - Math.floor(dotc / 1460)
        + Math.floor(dotc / 36524) - Math.floor(dotc / 146096)) / 365);
    return [yotc + cycle * 400,
            dotc + Math.floor(yotc / 100) - yotc * 365 - Math.floor(yotc / 4)];
}

function year(args) {
    const days = dote(args),
      cycle = Math.floor((days >= 0 ? days : days - 146096) / 146097),
      dotc = days - cycle * 146097;
    return (
        dotc - Math.floor(dotc / 1460) + Math.floor(dotc / 36524)
        - Math.floor(dotc / 146096)) / 365 + cycle * 400;
}

function leap(year = 1970) {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

function deco(args, {lead = "0", minus = false, emoji = false} = {}) {
  let zone = args.zone, utc = args.utc, degree = args.degree;
  args.zone = 0; args.utc = -9; args.degree = -162;
  zone = zone ?? 0 + Math.floor((utc ?? -9) / 2.4) + 4 + Math.floor(
    ((degree ?? -162) + 162) / 36);
  let [year, days] = doty(args);
  return `${emoji ? "🗓️" : ""}${
  (year + minus).toString().padStart(4, lead)}${minus ? "-" : "+"}${
  Math.abs(Math.floor(days = days - (365 + leap(year + 1)) * minus)
  ).toString().padStart(3, lead)}${emoji ? "🕰️" : ""}️${
  Math.abs(days % 1 * 10).toFixed(4)}${zone ? (minus ? "+" : "-") + String(zone) : ""}`
}

currentDeco = deco({day: 719468, millisecond: unix, zone: long2zone(coordinates[0])})

currentDoty = currentDeco.slice(5)

dotyDate = currentDoty.slice(0, 3)

dotyDek = currentDoty.slice(0, 2)

dotyDotd = currentDoty[2]

barTime = (unix2dote(unix, long2zone(coordinates[0]))[0]).toString().split(".")[1].slice(0, 8)

barCents = barTime.slice(0, 2)

barDD = barTime[0]

barMils = barTime.slice(1, 3)

barBeats = barTime.slice(3, 5)

barMb = barTime.slice(5)
```

<style>
  .tickLabel, .tickLabel1, .tickLabel2, .timeLabel {
    fill: #000;
    font-family: sans-serif;
    font-size: 20px;
    text-anchor: middle;
  }
  .timeLabel {
    text-anchor: start;
  }
  .timeBar, .timeBarFull {
    x: 1px;
    height: 25px;
    rx: 5px;
    stroke: #aaa;
  }
  .timeBar {
    fill: #e8e8e8;
  }
  .timeBarFull {
    fill: #ccffff;
  }
  .background {
    fill: white;
  }
  .tickDek, .tickDotd, .tickDotd1, .tickC, .tickC1, .tickM, .tickM1, .tickB, .tickB1 {
    stroke: none;
    fill: #666;
    width: 1px;
  }
&#10;  div.observablehq:has(> svg#barClock) {
    text-align: center;
    margin-top: -12px;
  }
  div.observablehq:has(> svg#clock) {
    text-align: center;
    margin-top: -46px;
  }
  body > div > div:nth-child(6) > form {
    margin-top: -60px;
  }
&#10;
#clock {
  stroke: #000;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}
&#10;#clock #rim {
  fill: none;
  stroke: #999;
  stroke-width: 3px;
}
&#10;#clock .second-hand {
  stroke-width:3;
}
&#10;#clock .minute-hand {
  stroke-width:8;
  stroke-linecap:round;
}
&#10;#clock .hour-hand {
  stroke-width:12;
  stroke-linecap:round;
}
&#10;#clock .hands-cover {
  stroke-width:3;
  fill:#fff;
}
&#10;#clock .second-tick {
  stroke-width:3;
  fill:#000;
}
&#10;#clock .hour-tick {
  stroke-width:8; // same as the minute hand
}
&#10;#clock .second-label {
  font-size: 12px;
}
&#10;#clock .hour-label {
  font-size: 24px;
}
&#10;svg.clock-btm {
  position: relative;
  left: ${width > 700 ? 198 : 0}px;
  top: ${width > 700 ? -475.5 : 0}px;
  margin-bottom: ${width > 700 ? -479 : 0}px;
}
svg.clock-top {
  position: relative;
  left: ${width > 700 ? -195 : 0}px;
}
body > div > div > form > div > canvas {
  margin-top: ${width > 700 ? -21 : 0}px !important;
}
.lineplotlegend-swatch {
  font-size: 15px;
}
</style>
