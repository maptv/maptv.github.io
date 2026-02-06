# Dec Time
Martin Laptev
2025+342

- [Fractional day time](#fdt)
  - [Ticking analog clocks](#tac)
  - [Bar chart clocks](#bcc)
  - [Longitude latitude map](#llm)
  - [Daylight area chart](#dac)
  - [Yearly day aggregate (yda)](#yda)
  - [Epochal day aggregate (eda)](#eda)
  - [UNIX time equation](#ute)
  - [Julian time equation](#jte)
  - [Hour minute second](#hms)
  - [Time zone offset](#tzo)
  - [Repeating decimal numbers](#rdn)
- [Coordinated Universal Time (UTC)](#utc)
- [Unit](#unit)
- [Next](#next)
- [Cite](#cite)

<div id="timenav">

<div>

<figure class=''>

<div>

<img src="index_files/figure-commonmark/mermaid-figure-1.png"
style="width:8.64in;height:0.98in" />

</div>

</figure>

</div>

</div>

My website provides many examples of the [Quarto](https://quarto.org)
publishing and the [Dec](../../dec) measurement systems in action. I
leverage Quarto support for the [Observable](https://observablehq.com/)
data analysis and visualization system to create animated and
interactive graphics like the [analog
clocks](https://en.wikipedia.org/wiki/Clock#:~:text=indicate%20time%20with%20a%20traditional%20clock%20face%20and%20moving%20hands)🕓,
[bar📊charts](https://en.wikipedia.org/wiki/Bar_chart),
[solar☀️terminator](https://en.wikipedia.org/wiki/Terminator_%28solar%29#:~:text=a%20moving%20line%20that%20divides%20the%20daylit%20side%20and%20the%20dark%20night%20side%20of%20a%20planetary%20body)
map, [Earth🌍orbit](https://en.wikipedia.org/wiki/Earth%27s_orbit)
diagram, and
[daylight](https://en.wikipedia.org/wiki/Daylight#:~:text=the%20combination%20of%20all%20direct%20and%20indirect%20sunlight%20during%20the%20daytime)
[area chart](https://en.wikipedia.org/wiki/Area_chart) below.

# Fractional day time

Dec times are measured in [fractional
days](https://en.wikipedia.org/wiki/Decimal_time#Fractional_days:~:text=a%20decimal%20fraction%20of%20a%20day).
The shortest, longest, and thinnest clock🕓hands and the top, middle,
and bottom bars📊indicate the <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</a>, <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="thousandths of a day">millidays</span>, and
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hundred thousandths of a day">centimillidays</span>,
respectively, of the time since the start,
<span class="point1">+${decTime}</span>, or until the end,
<span class="point0">-${decTimeN}</span>, of the day in the Dec [time
zone](https://en.wikipedia.org/wiki/Time_zone#:~:text=an%20area%20which%20observes%20a%20uniform%20standard%20time),
${decZoneHsl}, at the location of the red⭕️circle on the map🗺️beneath
the bars📊.

## Ticking analog clocks

<div class="clocks">

${clock}${clock1}

</div>

## Bar chart clocks

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

## Longitude latitude map

``` {ojs}
//| echo: false
viewof location = worldMapCoordinates([162, 0], [width * .998, ((21 / 40) * width)])
```

## Daylight area chart

``` {ojs}
//| echo: false
// https://observablehq.com/@dbridges/visualizing-seasonal-daylight
app = {
  const svg = d3.select(DOM.svg(width, height * (width < 300 ? .97 : width < 350 ? .96 : width < 400 ? .95 : width < 450 ? .94 : width < 500 ? .93 : width < 550 ? .92 : width < 600 ? .9 : width < 650 ? .86 : width < 700 ? .82 : .78)));
  svg.style("user-select", "none").style("-webkit-user-select", "none").attr("id", "daylightapp");
  const margin = {top: 20, left: 16, right: 16, bottom: 0, inner: 32};
  const contentWidth = width - margin.left - margin.right - margin.inner;
  const columnWidth = contentWidth / 2;
  let selection = {
    date: date2022,
    hour: date2022.getHours()
  }
  const renderPlot = () => {
    svg.selectAll("#plot *").remove();
    svg.select("#plot").call(daylightPlot, {
    vizwidth: columnWidth / (width < 300 ? 1 : width < 400 ? 1.05 : width < 450 ? 1.1 : width < 500 ? 1.15 : width < 550 ? 1.2 : width < 600 ? 1.25 : width < 650 ? 1.3 : width < 700 ? 1.4 : 1.48),
      height: height * (width < 400 ? 1.62 : width < 500 ? 1.6 : width < 700 ? 1.58 : 1.56),
      year: 2022,
      latitude: location[1],
      defaultDate: selection.date,
      defaultHour: selection.hour
    })
  }
  const renderSolarSystem = () => {
    svg.selectAll("#solar-system *").remove();
    svg.selectAll("#solar-system").call(solarSystem,
                                        columnWidth * 2.02,
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
    .attr("transform", `translate(${margin.left + 0}, ${height / 5 + (width < 600 ? 12 : 5)})`);
  svg.append("g")
    .attr("id", "solar-system")
    .attr("transform", `translate(${margin.left + 12}, ${margin.top + width / 22 - 6 - 5 * (width < 400)})`);
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
    handData[0].value = !fancySecondsOFF ? Math.floor(selectedExactN * 10) : decTimeN[0];
    handData[1].value = !fancySecondsOFF ? Math.floor(selectedExactN * 10 % 1 * 100) : decTimeN.slice(2, 4);
    handData[2].value = !fancySecondsOFF ? selectedExactN * 10 % 1 * 100 % 1 * 100 : decTimeN.slice(4, 6);
  }
  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, w, h])
    .style("max-width", `${width / 2.1}px`)
    .attr("class", "analogclock")
    .attr("id", "btmclock");
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

To rotate the globe🌐in the Earth🌏orbit diagram, drag the red⭕️circle
horizontally↔️or slide the red🔴dot on the daylight area chart
vertically↕. The red⭕️circle’s vertical↕position determines the yearly
daylight pattern visualized by the area chart. Shift the
red<font color=red>—</font>line on the area chart horizontally↔️to move
the globe🌐along the ellipse of the Earth🌎orbit.

## Yearly day aggregate (yda)

The red<font color=red>—</font>line indicates a “day of year”
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</span>), ${selDateHsl}, and the red🔴dot
denotes a “time of day” (<span class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</span>): ${selTimeDay}. A
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</span> identifies a day in a year like a
[Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
month and “day of month” (<span class="tool" data-bs-toggle="tooltip"
data-bs-title="day of month">dom</span>). A <span class="tool"
data-bs-toggle="tooltip" data-bs-title="time of day">tod</span>
specifies a point in a day like an “hour minute second”
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span>) triplet. Together, a
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="day of year">doy</span> and <span class="tool"
data-bs-toggle="tooltip" data-bs-title="time of day">tod</span> can form
a “yearly day aggregate” (<span class="tool" data-bs-toggle="tooltip"
data-bs-title="yearly day aggregate">yda</span>): ${selSnapDay}.

yda = doy + tod

As their names suggest, <span class="tool" data-bs-toggle="tooltip"
data-bs-title="days of year">doys</span> and <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="yearly day aggregates">ydas</span> are measured in days.
In addition to days, the units of <span class="tool"
data-bs-toggle="tooltip" data-bs-title="times of day">tods</span> can
also be
[submultiples](https://en.wikipedia.org/wiki/Multiple_%28mathematics%29#Submultiple:~:text=of%20%22a%20being-,a%20unit%20fraction,-of%20b%22%20)
of days with [metric
prefixes](https://en.wikipedia.org/wiki/Metric_prefix#:~:text=a%20unit%20prefix%20that%20precedes%20a%20basic%20unit%20of%20measure%20to%20indicate%20a%20multiple%20or%20submultiple%20of%20the%20unit).
Whereas the <span class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tods</span> beneath the analog
clocks🕓above are five-digit <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</a> numbers with a [decimal
separator](https://en.wikipedia.org/wiki/Decimal_separator#:~:text=a%20symbol%20that%20separates%20the%20integer%20part%20from%20the%20fractional%20part%20of%20a%20number)
after the first digit, the <span class="tool" data-bs-toggle="tooltip"
data-bs-title="times of day">tods</span> along the y-axis of the area
chart are three-digit <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a thousandth of a day">milliday</span> integers.

## Epochal day aggregate (eda)

We can turn an <span class="tool" data-bs-toggle="tooltip"
data-bs-title="yearly day aggregate">yda</span> into a
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</span> by [keeping the remainder after
dividing](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
by one to isolate the [decimal
part](https://en.wikipedia.org/wiki/Fractional_part#:~:text=the%20excess%20beyond%20that%20number%27s%20integer%20part)
of the
[quotient](https://en.wikipedia.org/wiki/Quotient#:~:text=a%20quantity%20produced%20by%20the%20division%20of%20two%20numbers):
${zeroYdaHsl} mod 1 = ${zeroTimeHsl0}. We can use this same approach to
obtain a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</span> from an “epochal day aggregate”
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregate">eda</span>): ${zeroDoteHsl} mod 1
= ${zeroTimeHsl1}. The current <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="epochal day aggregate">eda</span> tells us how many days
have passed since the Dec
[epoch](https://en.wikipedia.org/wiki/Epoch#:~:text=an%20instant%20in%20time%20chosen%20as%20the%20origin%20of%20a%20particular%20calendar%20era).

tod = yda mod 1 = eda mod 1

## UNIX time equation

Similarly, [UNIX
time](https://en.wikipedia.org/wiki/Unix_time#:~:text=the%20number%20of%20non%2Dleap%20seconds%20that%20have%20elapsed%20since%2000%3A00%3A00%20UTC%20on%201%C2%A0January%201970%2C%20the%20Unix%20epoch)
counts the seconds since the [UNIX
epoch](https://en.wikipedia.org/wiki/Unix_time#:~:text=00%3A00%3A00%20UTC%20on%201%C2%A0January%201970),
which is exactly 719468 days after the Dec epoch. To get the
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</span> in Zone
<span class="color0">0</span>, the Dec time zone that is in between the
two leftmost vertical lines on the map🗺️above, we can divide UNIX time
by the [number of seconds in a
day](https://en.wikipedia.org/wiki/Day#:~:text=average%2C%20this%20is-,24%20hours%20(86%2C400%20seconds),-.%20As%20a%20day)
and then keep the remainder after dividing the resulting days by one.

tod = unix ÷ 86400 mod 1

## Julian time equation

[Julian
dates](https://en.wikipedia.org/wiki/Julian_day#:~:text=the%20Julian%20day%20number%20plus%20the%20fraction%20of%20a%20day%20since%20the%20preceding%20noon)
tally the days since the beginning of the [Julian
period](https://en.wikipedia.org/wiki/Julian_day#:~:text=a%20chronological%20interval%20of%207980%C2%A0years%2C%20derived%20from%20three%20multi%2Dyear%20cycles:%20the%20Indiction%2C%20Solar%2C%20and%20Lunar%20cycles)
and thus are akin to <span class="tool" data-bs-toggle="tooltip"
data-bs-title="epochal day aggregates">edas</span>. We can produce a
Zone <span class="color5">5</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="time of day">tod</span> from a
[Julian
date](https://en.wikipedia.org/wiki/Julian_day#:~:text=the%20Julian%20day%20number%20plus%20the%20fraction%20of%20a%20day%20since%20the%20preceding%20noon)
simply by keeping the remainder after dividing by one. If we want a Zone
<span class="color0">0</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="time of day">tod</span> instead,
we should add <span class="color5">5</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="tenths of a day">decidays</span>
to the Julian date before converting it to a <span class="tool"
data-bs-toggle="tooltip" data-bs-title="time of day">tod</span> to
ensure that the final result is less than one day:

tod = (julian + 0.5) mod 1

## Hour minute second

We can also obtain a Zone <span class="color0">0</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</span> from a [Coordinated Universal
Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#:~:text=the%20primary%20time%20standard%20globally%20used%20to%20regulate%20clocks%20and%20time)
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>)
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet by summing its
components after converting them to fractional days, as shown in the
equation below. The [computer
programming](https://en.wikipedia.org/wiki/Computer_programming#:~:text=the%20composition%20of%20sequences%20of%20instructions%2C%20called%20programs%2C%20that%20computers%20can%20follow%20to%20perform%20tasks)
code in the [tabset
panel](https://quarto.org/docs/interactive/layout.html#tabset-panel)
beneath the equation compares <span class="tool"
data-bs-toggle="tooltip" data-bs-title="times of day">tods</span>
derived from <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> and UNIX time as
Quarto was
[rendering](https://quarto.org/docs/get-started/hello/rstudio.html#rendering:~:text=When%20rendering%2C%20Quarto%20generates%20a%20new%20file%20that%20contains%20selected%20text%2C%20code%2C%20and%20results)
this webpage.

$$\text{tod} = \frac{\text{hour}}{24} + \frac{\text{minute}}{1440} + \frac{\text{second}}{86400}$$

<div class="panel-tabset" group="language">

### Julia

``` julia
using Dates
hms = now(UTC)
```

    2025-07-17T18:16:47.670

``` julia
hour(hms) / 24 +
minute(hms) / 1440 +
second(hms) / 86400 +
millisecond(hms) / 864e5
```

    0.7616628472222222

``` julia
datetime2unix(hms) / 86400 % 1
```

    0.7616628472242155

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

    0.7616777381828703

``` python
hms.timestamp() / 86400 % 1
```

    0.7616777381808788

### R

``` r
hms <- as.POSIXlt(Sys.time(), tz = "UTC")
hms$hour / 24 +
hms$min / 1440 +
hms$sec / 86400
```

    [1] 0.7616779

``` r
(as.numeric(as.POSIXct(hms)) / 86400) %% 1
```

    [1] 0.7616779

</div>

In Dec, the components of an <span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet are called the
“hour of day” (<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour of day">hod</span>), “minute of hour”
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="minute of hour">moh</span>), and “second of minute”
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="second of minute">som</span>).

Dec handles differences from Zone <span class="color0">0</span> with
time zone offsets. There is no time difference between Zone
<span class="color0">0</span> and UNIX time. Dec applies a time zone
offset <span class="color5">5</span> <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</a> to Julian dates because the
Dec epoch occurred at midnight (<span class="color0">0</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span>) and the [Julian
period](https://en.wikipedia.org/wiki/Julian_day#:~:text=a%20chronological%20interval%20of%207980%C2%A0years%2C%20derived%20from%20three%20multi%2Dyear%20cycles:%20the%20Indiction%2C%20Solar%2C%20and%20Lunar%20cycles)
started at noon (<span class="color5">5</span> <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span>).

To convert days to <span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span>, we multiply the
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</span> by ten.

In Dec, days start at midnight, instead of noon, but have the same
duration as Julian days: 86400 [International System of
Units](https://en.wikipedia.org/wiki/International_System_of_Units#:~:text=the%20world%27s%20most%20widely%20used%20system%20of%20measurement)
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="International System of Units">SI</span>) seconds or
100000 Dec <span class="tool" data-bs-toggle="tooltip"
data-bs-title="centimillidays">beats</span>.

The duration of days in Dec and Julian dates The difference between the
Dec epoch and the beginning of the Julian period is the only thing that
distinguishes Julian date and a <span class="tool"
data-bs-toggle="tooltip" data-bs-title="times-of-day">doe</span> is its
epoch.

In [Coordinated Universal
Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#:~:text=the%20primary%20time%20standard%20globally%20used%20to%20regulate%20clocks%20and%20time)
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>), days start at
midnight, but the length of a day can vary due to [leap
seconds](https://en.wikipedia.org/wiki/Leap_second#:~:text=one%2Dsecond%20adjustment).
In Dec, a day always has the same duration as a

When matching <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> is required, Dec
avoids day length changes by adding leap seconds to a <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone
[offset](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place).
According to Dec, the [<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span><span class="color0">+00:00</span>](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)
time zone does not have any leap seconds because its offset is
<span class="color0">0</span>. To indicate that a <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone includes
the [27 leap
seconds](https://en.wikipedia.org/wiki/Leap_second#Procedure:~:text=16-,27,-Current%20TAI%20%E2%88%92%20UTC)
that have been inserted into <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> so far, Dec
appends <span class="color1by320">:27</span> to its offset.

The Dec equivalent of the [<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span><span class="color1by320">+00:00:27</span>](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)
time zone is Zone <span class="color1by320">1/320</span>.

In <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>, the length of Day
<span class="colorD121" data-bs-toggle="tooltip"
data-bs-title="June 30">121</span> or Day <span class="colorD305"
data-bs-toggle="tooltip" data-bs-title="December 31">305</span> can vary
due to [leap
seconds](https://en.wikipedia.org/wiki/Leap_second#:~:text=one%2Dsecond%20adjustment).
T this offset as T To represent the 27 leap seconds that have been added
to <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> so far, Dec uses
an offset of <span class="color1by320">1/320</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="decidays">dd</span>. Dec refers
to the <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone that has
this offset as [<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span><span class="color1by320">+00:00:32</span>](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time).

either or secon Since 1972+121, 27 positive leap seconds have been added
to UTC, and 0 negative leap seconds have been whave been in a Julian
date or a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="times-of-day">doe</span> i Dec does not allow The time in
the ten Dec time zones never include

o depending on whether the leap second is p. Dec uses to represent [leap
seconds](https://en.wikipedia.org/wiki/Leap_second#:~:text=one%2Dsecond%20adjustment)
without changing the length of a day in the same way as leap days
changes the length of a year. Instead of allowing the length of a day
included, some <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> days will be 86401
or 86399 seconds long. So far, 27 positive leap seconds have been added,
some <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> days will differ
in length. includes of seconds, Dec uses beats. 100000 The programming
languages that the [Quarto FAQ](https://quarto.org/docs/faq) refers to
as [principal languages supported by
Quarto](https://quarto.org/docs/faq/#:~:text=The%20principal%20languages%20supported%20by%20Quarto%20are%20Python%2C%20R%2C%20Julia%2C%20and%20Observable%20JavaScript),
[Python](https://en.wikipedia.org/wiki/Python_(programming_language)#:~:text=a%20high%2Dlevel%2C%20general%2Dpurpose%20programming%20language)
(Quarto principal languages),
[R](https://en.wikipedia.org/wiki/R_(programming_language)#:~:text=a%20programming%20language%20for%20statistical%20computing%20and%20data%20visualization),
[Julia](https://en.wikipedia.org/wiki/Julia_(programming_language)#:~:text=a%20high%2Dlevel%2C%20general%2Dpurpose%5B17%5D%20dynamic%20programming%20language),
and [Observable](http://observablehq.com)
[JavaScript](https://en.wikipedia.org/wiki/JavaScript#:~:text=a%20programming%20language%20and%20core%20technology%20of%20the%20World%20Wide%20Web),
do not include [leap
seconds](https://en.wikipedia.org/wiki/Leap_second#:~:text=one%2Dsecond%20adjustment)
in <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time. Therefore, a
day in Even though the Dec, UNIX, and <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> epochs all
occurred at midnight, <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time may be
shifted in relation to Dec or UNIX time because of [leap
seconds](https://en.wikipedia.org/wiki/Leap_second#:~:text=one%2Dsecond%20adjustment).
Since 1972+121, 27

<div class="panel-tabset" group="language">

### Julia

``` julia
using Dates
sod = datetime2unix(now(UTC)) / 86400 % 1 * 86400
```

    65809.0369998361

``` julia
soh = sod % 3600
```

    1009.0369998360984

``` julia
(Int(floor(sod / 3600)), Int(floor(soh / 60)), soh % 60)
```

    (18, 16, 49.0369998360984)

### Observable JavaScript

``` {ojs}
sod = now / 864e5 % 1 * 86400;
soh = sod % 3600;
[Math.floor(sod / 3600), Math.floor(soh / 60), soh % 60]
```

### Python

``` python
from datetime import datetime, timezone
sod = datetime.now(timezone.utc).timestamp() / 86400 % 1 * 86400
soh = sod % 3600
sod // 3600, soh // 60, soh % 60
```

    (18.0, 16.0, 49.14835698204115)

### R

``` r
sod <- (as.numeric(as.POSIXct(Sys.time())) / 86400) %% 1 * 86400
soh <- sod %% 3600
c(sod %/% 3600, soh %/% 60, soh %% 60)
```

    [1] 18.00000 16.00000 49.15825

</div>

We can make the time in any Dec time zone match UNIX by subtracting its
time zone
[offset](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place).
The time in the Zone <span class="color0">0</span> Dec time zone always
matches UNIX time. because neither includes [leap
seconds](https://en.wikipedia.org/wiki/Leap_second#:~:text=one%2Dsecond%20adjustment).
Dec considers [Coordinated Universal
Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#:~:text=the%20primary%20time%20standard%20globally%20used%20to%20regulate%20clocks%20and%20time)
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>)
<span class="color0">[+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
[time
zone](https://en.wikipedia.org/wiki/Time_zone#:~:text=an%20area%20which%20observes%20a%20uniform%20standard%20time)
to also match UNIX time. If there is a [leap
seconds](https://en.wikipedia.org/wiki/Leap_second#:~:text=one%2Dsecond%20adjustment)
are not included. Dec handles leap seconds like an additional time zone
[offset](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place).
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color0">[+00:00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
with 27 leap seconds is referred to as Zone 1/320 in Dec and . which

[<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span><span class="color0">+00:00</span>](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)

To produce a Zone <span class="color0">0</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="time of day">tod</span> from an
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet, we get the
difference between the <span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet and its
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone
[offset](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place),
convert its components to either days or <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span>, and sum the converted
components.

and

$$\text{deciday} = \frac{\text{hour}}{2.4} + \frac{\text{minute}}{144} + \frac{\text{second}}{8640}$$

$$\text{day} = \frac{\text{hour}}{24} + \frac{\text{minute}}{1440} + \frac{\text{second}}{86400}$$

does not include [leap
seconds](https://en.wikipedia.org/wiki/Leap_second#:~:text=one%2Dsecond%20adjustment)
or a [Coordinated Universal
Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#:~:text=the%20primary%20time%20standard%20globally%20used%20to%20regulate%20clocks%20and%20time)
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>) [time
zone](https://en.wikipedia.org/wiki/Time_zone#:~:text=an%20area%20which%20observes%20a%20uniform%20standard%20time)
[offset](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place)
and

than
<span class="color0">[+00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
and
<span class="color5">[+12](https://en.wikipedia.org/wiki/UTC%2B12:00)</span>
will not match the time in any of the ten Dec time zones. We can create
a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="time of day">tod</span> by summing the components of an
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet after

that were added a [Coordinated Universal
Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#:~:text=the%20primary%20time%20standard%20globally%20used%20to%20regulate%20clocks%20and%20time)
(<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>)
<span class="color0">[+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
time zone. A <span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet that includes
[leap
seconds](https://en.wikipedia.org/wiki/Leap_second#:~:text=one%2Dsecond%20adjustment)
or a

## Time zone offset

To be compatible with Dec, a time zone offset must be equivalent to one
of the ten positive single-digit integer <span class="tool"
data-bs-toggle="tooltip" data-bs-title="a tenth of a day">deciday</span>
Dec offsets. The Zone <span class="color5">5</span> Dec time zone and
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color5">[+12:00](https://en.wikipedia.org/wiki/UTC%2B12:00)</span>
time zone have equivalent offsets: <span class="color5">5</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span> =
<span class="color5">12</span> hours. Likewise, the Zone
<span class="color0">0</span> Dec time zone, UNIX time, and the
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color0">[+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
time zone all have an offset of <span class="color0">0</span>.

Apart from <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color0">[+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
and
<span class="color5">[+12:00](https://en.wikipedia.org/wiki/UTC%2B12:00)</span>,
all of the other <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zones are
incompatible with Dec. To find the <span class="tool"
data-bs-toggle="tooltip" data-bs-title="a tenth of a day">deciday</span>
time difference *Δ* between a <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone and its
closest Dec time zone, convert the offset of the <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone to
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span> and then calculate how
much the converted offset changes after rounding it to the nearest
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</span>.

*Δ* = offset − ⌊offset + 0.5⌋

## Repeating decimal numbers

Dec expresses incompatible offsets as positive or negative fractions or
multi-digit integers. <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> offsets are either
[repeating](https://en.wikipedia.org/wiki/Repeating_decimal) or
terminating decimal numbers. Dec displays repeating decimal offsets as
fractions and terminating decimal offsets as integers.
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color333">[+08:00](https://en.wikipedia.org/wiki/UTC%2B08:00)</span>,
the most populous <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone, has an
offset of <span class="color333">.</span><span class="vinculum">3</span>
days and is called Zone <span class="color333">1/3</span> in Dec. In
contrast, <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color125">[+03:00](https://en.wikipedia.org/wiki/UTC%2B03:00)</span>
has an offset of <span class="color125">.125</span> days and is called
Zone <span class="color125">125</span> in Dec.

Terminating decimal number offsets can be displayed by Dec provided
there is enough space for the additional digits. Dec displays repeating
decimal number offsets as fractions. The second most populous
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone,
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color333">[+05:30](https://en.wikipedia.org/wiki/UTC%2B05:30)</span>,
translates to Zone <span class="color55by24">55/24</span> or Zone
<span class="color55by24">2.291</span><span class="vinculum">6</span> in
Dec. The top six most populous <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zones all
have positive offsets.

When it is midnight (tod=<span class="color0">0</span>) in Zone
<span class="color0">0</span>, it is noon
(tod=<span class="color5">5</span>) in Zone
<span class="color5">5</span> and the time in every other time zone is
equal to it it is ~<span class="color533">5.33</span> in Zone
<span class="color333">10/3</span>, ~<span class="color429">4.29</span>
in Zone <span class="color55by24">55/24</span>, and

To obtain the Zone <span class="color0">0</span> time, we evaluate any
Dec time as a math expression, add 10, and then get the remainder after
dividing by 10 to make sure the result is less than 10
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</span>.

The use of incompatible offsets makes mental calculations involving time
zones much harder. Also, incompatible offsets are more difficult to
display and read in the format of Dec times. Despite these clear
disadvantages, Dec will attempt to parse, process, and display any time
zone offset that is provided. Incompatible offset that are repeating
decimal numbers can be displayed as fractions, truncated numbers

noon in <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color333">[+08:00](https://en.wikipedia.org/wiki/UTC%2B08:00)</span>
could be written as
<span class="color5">5.00</span><span style="font-family:monospace;">-</span><span class="color333">10/3</span>
or
<span class="color5">5.00</span><span style="font-family:monospace;">-</span><span class="color333">3.</span><span class="vinculum">3</span>.

Dec does not set a hard limit on the number of time zones, but negative
time zones offsets to improve its compability with <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>.

<div>

> **Bad Pun Alert**
>
> Sorry if reading this takes a long ***time***; I hope you don’t
> ***zone*** out!

</div>

If a Dec time zone offset is not specified, we can detected a time zone
using Whether or not negative time zones offsets are worth the trouble
is a matter of that the offer little to no benefit. The
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color5">[-12:00](https://en.wikipedia.org/wiki/UTC%E2%88%9212:00#:~:text=a%20nautical%20time%20zone%20comprising%20the%20high%20seas%20between%20180%C2%B0%20and%20172%C2%B030%E2%80%B2W%20longitude)</span>
and
<span class="color5">[+12:00](https://en.wikipedia.org/wiki/UTC%2B12:00)</span>
time zones and the Zone <span class="color5">5</span> and
<span class="color5">-5</span> Dec time zones all have the same time,
but their dates do not match, because <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color5">[-12:00](https://en.wikipedia.org/wiki/UTC%E2%88%9212:00#:~:text=a%20nautical%20time%20zone%20comprising%20the%20high%20seas%20between%20180%C2%B0%20and%20172%C2%B030%E2%80%B2W%20longitude)</span>
and Zone <span class="color5">-5</span> are one day behind
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color5">[+12:00](https://en.wikipedia.org/wiki/UTC%2B12:00)</span>
and Zone <span class="color5">5</span>. Dec discourages the use of time
zones with negative offsets.

``` {ojs}
//| echo: false
//| label: timezonepoptoggles
//| class: /togs
// https://observablehq.com/@mattdzugan/population-by-time-zone-creating-a-dataset
viewof sortParams = Inputs.form([
  Inputs.toggle({ label: "Sort ascending" }),
  Inputs.toggle({ label: "Sort by offset" }),
  ])
```

``` {ojs}
//| echo: false
//| label: timezonepopstackedbar
//| class: stackedBar
// https://observablehq.com/@mattdzugan/population-by-time-zone-creating-a-dataset
Plot.plot({
  width: width,
  marginBottom: 50,
  style: `overflow: visible;font-size:16px;`,
  color: {scheme: "RdBu", className: "barPlotLegend"},
  marginLeft: 75,
  y: { label: null },
  x: { grid: true, label: "Population (billions)", labelOffset: 38, transform: d => d / 1e9 },
  marks: [
    Plot.barX(sortedPop, {x: "pop", y: "Sign", fill: "Offset", stroke: "black", tip: true }),
  ]
})
```

# Coordinated Universal Time (UTC)

The <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
<span class="color5">[-12:00](https://en.wikipedia.org/wiki/UTC%E2%88%9212:00#:~:text=a%20nautical%20time%20zone%20comprising%20the%20high%20seas%20between%20180%C2%B0%20and%20172%C2%B030%E2%80%B2W%20longitude)</span>
time zone contains only [strict nature
reserves](https://en.wikipedia.org/wiki/Strict_nature_reserve#:~:text=the%20highest%20category%20of%20protected%20area%20recognised%20by%20the%20World%20Commission%20on%20Protected%20Areas)
and thus does not have any inhabited territory.

The remaining UTC time zones with negative offsets

If we disregard leap seconds, the
<span class="color0">[+00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone is
synchronized with UNIX time and the Zone <span class="color0">0</span>
Dec time zone. The
<span class="color5">[+12](https://en.wikipedia.org/wiki/UTC%2B12:00)</span>
and
<span class="color5">[-12](https://en.wikipedia.org/wiki/UTC%E2%88%9212:00)</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> offsets have the
same time but their dates are one day apart.

We can honor this difference by translating
<span class="color5">[+12](https://en.wikipedia.org/wiki/UTC%2B12:00)</span>
compatible [37 <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>
offsets](https://en.wikipedia.org/wiki/List_of_UTC_offsets), only 3 are
integers after they are converted to time zones. Conversion between Dec
time zones and UTC offsets is inexact, because UTC offsets depend on
geographic and political boundaries, whereas Dec time zones are
determined solely by longitude.

because UNIX time, <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">[UTC](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span><span class="color0">[+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>,
and Zone <span class="color0">0</span> are all synchronized.

Similarly, a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">[UTC](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span><span class="color0">[+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet yields a Zone
<span class="color5">5</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="time of day">tod</span>.

<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span>

Instead of passing an <span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet and its
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone
[offset](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place)
to the <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="time of day">tod</span> equation
separately, we can subtract the offset from the triplet to produce a
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">[UTC](https://en.wikipedia.org/wiki/List_of_UTC_offsets#UTC+00:00,_Z)</span><span class="color0">[+00:00](https://en.wikipedia.org/wiki/List_of_UTC_offsets#UTC+00:00,_Z)</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet. In other words,
we can avoid converting time zone offsets if we always first shift the
input <span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet to
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">[UTC](https://en.wikipedia.org/wiki/List_of_UTC_offsets#UTC+00:00,_Z)</span><span class="color0">[+00:00](https://en.wikipedia.org/wiki/List_of_UTC_offsets#UTC+00:00,_Z)</span>.

To obtain the Zone 0 time, we evaluate a Dec time as a math expression,
add 10, and get the remainder after dividing by 10 to make sure the
result is less than 10 <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</a>:
(<span class="cyan">${browserTime.toFixed(4)}</span> ${browserSign}
<span class="lime">${Math.abs(browserZone)}</span> + 10)
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
10 = <span class="cyan">${zone0time.toFixed(4)}</span>.

Instead of passing both a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="hour minute second">hms</span>
triplets and its <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone
[offset](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place)
to the <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="time of day">tod</span>
equation.

Instead of performing this calculation on both a <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="hour minute second">hms</span>
triplet and its <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone
[offset](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place),
we should subtract the offset from the triplet.

equation should be a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">[UTC](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span><span class="color0">[+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet so that we do not
have to convert a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zone
[offset](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place)
to <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</a>.

When we add a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> offset to a
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="hour minute second">hms</span>
triplet, with the resulting <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">[UTC](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span><span class="color0">[+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
time.

The time in Zone <span class="color0">0</span> matches UTC time with the
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">[UTC](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span><span class="color0">[+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
offset. UNIX time and three <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> offsets are called
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">[UTC](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span><span class="color0">[+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>,
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">[UTC](https://en.wikipedia.org/wiki/UTC%2B12:00)</span><span class="color5">[+12:00](https://en.wikipedia.org/wiki/UTC%2B12:00)</span>,
and <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">[UTC](https://en.wikipedia.org/wiki/UTC%E2%88%9212:00)</span><span class="color5">[-12:00](https://en.wikipedia.org/wiki/UTC%E2%88%9212:00)</span>.
Starting with a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">[UTC](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span><span class="color0">[+00:00](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time)</span>
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet results in Zone
<span class="color0">0</span> <span class="tool"
data-bs-toggle="tooltip" data-bs-title="time of day">tod</span>.

only three out of the <span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zones are
synchronized with a Dec time zone it will most likely be easier to shift
the <span class="tool" data-bs-toggle="tooltip"
data-bs-title="hour minute second">hms</span> triplet to will result in
days instead of decidays if we divide by the most Dec and
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="Coordinated Universal Time">UTC</span> time zones are not
aligned. Whereas UNIX time is always synchronized with Zone
<span class="color0">0</span> and
[UTC<span class="color0">+00:00</span>](https://en.wikipedia.org/wiki/UTC%2B00:00#:~:text=the%20basis%20of%20Coordinated%20Universal%20Time),
This method ensure that the result matches

[UTC time zone
offsets](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place)

Drag the red⭕️circle across the
[meridians](https://en.wikipedia.org/wiki/Meridian_%28geography%29#:~:text=words%2C%20it%20is-,a%20line%20of%20longitude,-.%20The%20position%20of)
(vertical↕gray lines) on the map🗺️to see how changing time zones affects
the time. Only the first digit of the Dec times shown above, the
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</span>, varies across time
zones, because the 10 Dec time zones, numbered 0 through 9 on the map🗺️,
are each 1 <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a turn">deci[turn](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=a%20unit%20of%20plane%20angle%20measurement%20equal%20to%202%CF%80%C2%A0radians%2C%20360%C2%A0degrees)</span>
([dt](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=the%20Greek%20letter,to%20one%20turn))
wide. Simply put, a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a turn">deciturn</span> of longitude
translates into a <span class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</span> of time.

The leftmost vertical↕line on the map🗺️is [Meridian
0](https://en.wikipedia.org/wiki/18th_meridian_west#:~:text=a%20line%20of%20longitude%20that%20extends%20from%20the%20North%20Pole%20across%20the%20Arctic%20Ocean%2C%20Greenland%2C%20Iceland%2C%20the%20Atlantic%20Ocean%2C%20the%20Canary%20Islands%2C%20the%20Southern%20Ocean%2C%20and%20Antarctica%20to%20the%20South%20Pole),
the Dec [International Date
Line](https://en.wikipedia.org/wiki/International_Date_Line#:~:text=the%20line%20between%20the%20South%20and%20North%20Poles%20that%20is%20the%20boundary%20between%20one%20calendar%20day%20and%20the%20next)
and [prime
meridian](https://en.wikipedia.org/wiki/Prime_meridian#:~:text=an%20arbitrarily%2Dchosen%20meridian%20%28a%20line%20of%20longitude%29%20in%20a%20geographic%20coordinate%20system%20at%20which%20longitude%20is%20defined%20to%20be%200%C2%B0),
which cuts across the Atlantic Ocean through Iceland🇮🇸just West of
Africa🌍and is the boundary between Zone 9 and Zone 0, the rightmost and
leftmost Dec time zones on the map🗺️, respectively. Arranging Dec time
zones from 0 to 9 yields a
[Pacific-centric](https://en.wikipedia.org/wiki/World_map#:~:text=south%2Dup%20map-,Pacific%2Dcentric%20map,-(more%20commonly%20used))
map🗺️.

While only positive Dec time zones are shown on the map🗺️, every Dec
time zone can also be expressed as a negative number. Each pair of time
zone numbers produces the same Dec time, but result in [Dec
dates](../../dec/date)🗓️that are 1 day apart. Negative time zone numbers
can be useful for getting [Dec dates](../../dec/date)🗓️to match
[Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)
dates🗓️with negative [UTC
offsets](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20the%20standard%20time%20at%20a%20particular%20place).

If you know your longitude in degrees (°) or <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="hundredths of a turn">centi[turns](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=a%20unit%20of%20plane%20angle%20measurement%20equal%20to%202%CF%80%C2%A0radians%2C%20360%C2%A0degrees)</span>
([ct](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=the%20Greek%20letter,to%20one%20turn)),
you can look up your Dec time zone (TZ) in the table below.

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">TZ<br>+</th>
<th style="text-align: center;">TZ<br>-</th>
<th style="text-align: center;">Start<br>°</th>
<th style="text-align: center;">Mid<br>°</th>
<th style="text-align: center;">End<br>°</th>
<th style="text-align: center;">Start<br><span
class="math inline"><em>c</em><em>t</em></span></th>
<th style="text-align: center;">Mid<br><span
class="math inline"><em>c</em><em>t</em></span></th>
<th style="text-align: center;">End<br><span
class="math inline"><em>c</em><em>t</em></span></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">9</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">-54</td>
<td style="text-align: center;">-36</td>
<td style="text-align: center;">-18</td>
<td style="text-align: center;">90</td>
<td style="text-align: center;">95</td>
<td style="text-align: center;">100</td>
</tr>
<tr>
<td style="text-align: center;">8</td>
<td style="text-align: center;">-2</td>
<td style="text-align: center;">-90</td>
<td style="text-align: center;">-72</td>
<td style="text-align: center;">-54</td>
<td style="text-align: center;">80</td>
<td style="text-align: center;">85</td>
<td style="text-align: center;">90</td>
</tr>
<tr>
<td style="text-align: center;">7</td>
<td style="text-align: center;">-3</td>
<td style="text-align: center;">-126</td>
<td style="text-align: center;">-108</td>
<td style="text-align: center;">-90</td>
<td style="text-align: center;">70</td>
<td style="text-align: center;">75</td>
<td style="text-align: center;">80</td>
</tr>
<tr>
<td style="text-align: center;">6</td>
<td style="text-align: center;">-4</td>
<td style="text-align: center;">-162</td>
<td style="text-align: center;">-144</td>
<td style="text-align: center;">-126</td>
<td style="text-align: center;">60</td>
<td style="text-align: center;">65</td>
<td style="text-align: center;">70</td>
</tr>
<tr>
<td style="text-align: center;">5</td>
<td style="text-align: center;">-5</td>
<td style="text-align: center;">162</td>
<td style="text-align: center;">180</td>
<td style="text-align: center;">-162</td>
<td style="text-align: center;">50</td>
<td style="text-align: center;">55</td>
<td style="text-align: center;">60</td>
</tr>
<tr>
<td style="text-align: center;">4</td>
<td style="text-align: center;">-6</td>
<td style="text-align: center;">126</td>
<td style="text-align: center;">144</td>
<td style="text-align: center;">162</td>
<td style="text-align: center;">40</td>
<td style="text-align: center;">45</td>
<td style="text-align: center;">50</td>
</tr>
<tr>
<td style="text-align: center;">3</td>
<td style="text-align: center;">-7</td>
<td style="text-align: center;">90</td>
<td style="text-align: center;">108</td>
<td style="text-align: center;">126</td>
<td style="text-align: center;">30</td>
<td style="text-align: center;">35</td>
<td style="text-align: center;">40</td>
</tr>
<tr>
<td style="text-align: center;">2</td>
<td style="text-align: center;">-8</td>
<td style="text-align: center;">54</td>
<td style="text-align: center;">72</td>
<td style="text-align: center;">90</td>
<td style="text-align: center;">20</td>
<td style="text-align: center;">25</td>
<td style="text-align: center;">30</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">-9</td>
<td style="text-align: center;">18</td>
<td style="text-align: center;">36</td>
<td style="text-align: center;">54</td>
<td style="text-align: center;">10</td>
<td style="text-align: center;">15</td>
<td style="text-align: center;">20</td>
</tr>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">-10</td>
<td style="text-align: center;">-18</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">18</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">10</td>
</tr>
</tbody>
</table>

Dec times in Zone 0 and 5 can be directly converted to and from UTC
times with an offset of 0 and 12 <span class="teal">hours</span>,
respectively. The other Dec time zones

# Unit

Dec uses [metric
prefixes](https://en.wikipedia.org/wiki/Metric_prefix#:~:text=a%20unit%20prefix%20that%20precedes%20a%20basic%20unit%20of%20measure%20to%20indicate%20a%20multiple%20or%20submultiple%20of%20the%20unit)
to create
[submultiples](https://en.wikipedia.org/wiki/Multiple_%28mathematics%29#Submultiple:~:text=of%20%22a%20being-,a%20unit%20fraction,-of%20b%22%20)
of a day that can naturally be combined together into a single
[decimal](https://en.wikipedia.org/wiki/Decimal#:~:text=system%20for%20denoting%20integer%20and%20non%2Dinteger%20numbers)
number. Conversion between decimal units is as simple as moving↔︎️or
removing❌the [decimal
separator](https://en.wikipedia.org/wiki/Decimal_separator#:~:text=a%20symbol%20that%20separates%20the%20integer%20part%20from%20the%20fractional%20part%20of%20a%20number).
In contrast, an
<span class="teal">hh</span>:<span class="olive">mm</span>:<span class="purple">ss</span>
time is a
[mixed-radix](https://en.wikipedia.org/wiki/Mixed_radix#:~:text=non%2Dstandard%20positional%20numeral%20systems%20in%20which%20the%20numerical%20base%20varies%20from%20position%20to%20position)
number, where <span class="teal">hh</span> is the
[base-12](https://en.wikipedia.org/wiki/List_of_numeral_systems#:~:text=12-,Duodecimal,-%2C%20dozenal)
or
[base-24](https://en.wikipedia.org/wiki/List_of_numeral_systems#:~:text=24-,Quadravigesimal,-%5B48%5D)
<span class="teal">hour</span>, <span class="olive">mm</span> is the
[base-60](https://en.wikipedia.org/wiki/List_of_numeral_systems#:~:text=60-,Sexagesimal,-Babylonian%20numerals%20and)
<span class="olive">minute</span>, and <span class="purple">ss</span> is
the base-60 <span class="purple">second</span>.

<table>
<colgroup>
<col style="width: 26%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 31%" />
</colgroup>
<thead>
<tr>
<th>Prefix</th>
<th>Power</th>
<th>Day</th>
<th><span class="teal">hh</span>:<span class="olive">mm</span>:<span
class="purple">ss</span>.<span class="purple">sss</span></th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>0</td>
<td>1</td>
<td>24:00:00.000</td>
</tr>
<tr>
<td>deci</td>
<td>-1</td>
<td>.1</td>
<td>02:24:00.000</td>
</tr>
<tr>
<td>centi</td>
<td>-2</td>
<td>.01</td>
<td>00:14:24.000</td>
</tr>
<tr>
<td>milli</td>
<td>-3</td>
<td>.001</td>
<td>00:01:26.400</td>
</tr>
<tr>
<td>decimilli</td>
<td>-4</td>
<td>.0001</td>
<td>00:00:08.640</td>
</tr>
<tr>
<td>centimilli</td>
<td>-5</td>
<td>.00001</td>
<td>00:00:00.864</td>
</tr>
</tbody>
</table>

To convert the <span class="teal">hour</span>
<span class="teal">h</span>, <span class="olive">minute</span>
<span class="olive">m</span>, and <span class="purple">second</span>
<span class="purple">s</span> into the <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</a>
<span class="cyan">d</span>, Dec uses the following equation:
<span class="cyan">d</span> = <span class="teal">h</span> ÷ 2.4 +
<span class="olive">m</span> ÷ 144 + <span class="purple">s</span> ÷
8640. The current equation values in Zone
<span class="lime">${browserZone}</span> are:
<span class="cyan">${browserTime.toFixed(4)}</span> =
<span class="teal">${Math.floor(hours).toString().padStart(2,
“0”)}</span> ÷ 2.4 +
<span class="olive">${Math.floor(minutes).toString().padStart(2,
“0”)}</span> ÷ 144 +
<span class="purple">${Math.floor(seconds).toString().padStart(2,
“0”)}</span> ÷ 8640. Inversely, we can convert <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</a> into
<span class="teal">hours</span>: <span class="teal">h</span> =
<span class="cyan">d</span> × 2.4, <span class="olive">minutes</span>:
<span class="olive">m</span> = <span class="teal">h</span>
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
1 × 60, and <span class="purple">seconds</span>:
<span class="purple">s</span> = <span class="olive">m</span>
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
1 × 60.

Instead of dealing with <span class="teal">hours</span>,
<span class="olive">minutes</span>, and
<span class="purple">seconds</span>, we can convert the [UNIX
timestamp](https://en.wikipedia.org/wiki/Unix_time#:~:text=the%20number%20of%20non%2Dleap%20seconds%20that%20have%20elapsed%20since%2000%3A00%3A00%20UTC%20on%201%C2%A0January%201970)
<span class="purple">u</span> into the Dec time
<span class="cyan">d</span>+<span class="lime">0</span>. First, we
divide <span class="purple">u</span> by 86400 to convert seconds to
days, then isolate the [decimal
part](https://en.wikipedia.org/wiki/Fractional_part#:~:text=the%20excess%20beyond%20that%20number%27s%20integer%20part)
of the
[quotient](https://en.wikipedia.org/wiki/Quotient#:~:text=a%20quantity%20produced%20by%20the%20division%20of%20two%20numbers),
and finally multiply by 10: <span class="cyan">d</span> +
<span class="lime">0</span> = <span class="purple">u</span> ÷ 86400
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
1 × 10. The current values in this equation are
<span class="cyan">${browserTime.toFixed(4)}</span> +
<span class="lime">0</span> = <span class="purple">${Math.floor(now /
1000)}</span> ÷ 86400
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
1 × 10.

The concept of measuring time in decimal days is not novel. In the late
1700s, the [French Republican
calendar](https://en.wikipedia.org/wiki/French_Republican_calendar#:~:text=a%20calendar%20created%20and%20implemented%20during%20the%20French%20Revolution)
time system referred to <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</a> as decimal
<span class="teal">hours</span>, <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="hundredths of a day">centidays</span> as
[décimes](https://en.wikipedia.org/wiki/Decimal_time#:~:text=into%20tenths%2C%20or-,d%C3%A9cimes,-%2C%20instead%20of%20minutes),
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a day">millidays</span> as decimal
<span class="olive">minutes</span>, and <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="hundred thousandths of a day">centimillidays</span> as
decimal <span class="purple">seconds</span>. Similarly, [Swatch Internet
Time](https://en.wikipedia.org/wiki/Swatch_Internet_Time#:~:text=a%20decimal%20time%20system%20introduced%20in%201998%20by%20the%20Swatch%20corporation),
a [decimal
time](https://en.wikipedia.org/wiki/Decimal_time#:~:text=the%20representation%20of%20the%20time%20of%20day%20using%20units%20which%20are%20decimally%20related)
system introduced in 1998, uses the term “.beats” for <span class="tool"
data-bs-toggle="tooltip"
data-bs-title="thousandths of a day">millidays</span>.

Swatch Internet Time differs from Dec in that it [has no time
zones](https://en.wikipedia.org/wiki/Swatch_Internet_Time#Calculation_from_UTC+1:~:text=There%20are%20no%20time%20zones%20in%20Swatch%20Internet%20Time)
and is obtained from the
<span class="teal">[hours](https://en.wikipedia.org/wiki/Swatch_Internet_Time#Calculation_from_UTC+1:~:text=The%20formula%20for%20calculating%20the%20time%20in%20.beats%20from%20UTC%2B1)</span>[,
<span class="olive">minutes</span>, and
<span class="purple">seconds</span>](https://en.wikipedia.org/wiki/Swatch_Internet_Time#Calculation_from_UTC+1:~:text=The%20formula%20for%20calculating%20the%20time%20in%20.beats%20from%20UTC%2B1)
of
[UTC+01:00](https://en.wikipedia.org/wiki/UTC%2B01:00#:~:text=a%20time%20offset%20from%20UTC%20of%20%2B01%3A00).
In contrast, the major innovations described in this article are the Dec
time zone system and the simple equation for obtaining the Dec time in
Zone 0 from a UNIX timestamp, but Dec has much more to offer than <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</a> times and zones.

# Next

The next article in the [Dec section](../../dec) of my site compares Dec
to the [ISO
8601](https://en.wikipedia.org/wiki/ISO_8601#:~:text=an%20international%20standard%20covering%20the%20worldwide%20exchange%20and%20communication%20of%20date%20and%20time%2Drelated%20data)
international standard for dates and times. Like ISO 8601, Dec allows
for [combined date and time
representations](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations)
that can be paired up to express [time
intervals](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals:~:text=the%20intervening%20time%20between%20two%20time%20points).
In Dec, the combination of a date and time is called a snap🫰and a time
interval expressed as a pair of snaps is called a span🌈.

My [ISO 8601 article](../../dec/iso) is unique because it avoids the use
of Observable in favor of leveraging [Jupyter](https://jupyter.org)
support in Quarto to make the code underlying Dec available in multiple
programming languages. Observable is a great visualization tool but does
not translate well into Jupyter notebooks. After the next article, I
return to the use of Observable in my Dec [snap](../../dec/span)🫰and
[span](../../dec/span)🌈articles.

<div id="timenav">

<div>

<figure class=''>

<div>

<img src="index_files/figure-commonmark/mermaid-figure-2.png"
style="width:8.64in;height:0.98in" />

</div>

</figure>

</div>

</div>

# Cite

Please spread the good word about Dec using the citation information at
the bottom of this article. You may also want to cite the Observable
notebooks that I adapted into the clock🕓, bar📊chart, map🗺️, and
daylight☀️plot visualizations in this article or the 2014 blog post
which proposed a system of 20 decimal time zones, each 5
<span class="tool" data-bs-toggle="tooltip"
data-bs-title="hundredths of a day">centidays</span> wide, based on the
[Greenwich
Meridian](https://en.wikipedia.org/wiki/Prime_meridian_(Greenwich)#:~:text=a%20geographical%20reference%20line%20that%20passes%20through%20the%20Royal%20Observatory%2C%20Greenwich%2C%20in%20London%2C%20England):

- [Pearson, Tom](https://www.2x2.graphics).
  <span class="yellow"><u>2013</u></span><u>+<span class="cyan">124</span></u>.
  “Simple D3 clock.”
  <span class="yellow">${decYear}</span>+<span class="cyan">${decDate}</span>.
  <https://observablehq.com/@d3/simple-clock>.
- [Heyen, Frank](https://fheyen.github.io).
  <span class="yellow"><u>2021</u></span><u>+<span class="cyan">246</span></u>.
  “BarChart Clock.”
  <span class="yellow">${decYear}</span>+<span class="cyan">${decDate}</span>.
  <https://observablehq.com/@fheyen/barchart-clock>.
- [Johnson, Ian](https://enjalot.github.io).
  <span class="yellow"><u>2021</u></span><u>+<span class="cyan">090</span></u>.
  “Draggable World Map Coordinates Input.”
  <span class="yellow">${decYear}</span>+<span class="cyan">${decDate}</span>.
  <https://observablehq.com/@enjalot/draggable-world-map-coordinates-input>.
- [Bridges, Dan](https://www.danbridges.org).
  <span class="yellow"><u>2021</u></span><u>+<span class="cyan">311</span></u>.
  “Visualizing Seasonal Daylight.”
  <span class="yellow">${decYear}</span>+<span class="cyan">${decDate}</span>.
  <https://observablehq.com/@dbridges/visualizing-seasonal-daylight>.
- [Clements, John](https://www.brinckerhoff.org).
  <span class="yellow"><u>2014</u></span><u>+<span class="cyan">091</span></u>,
  “Decimal Time Zones.”
  <span class="yellow">${decYear}</span>+<span class="cyan">${decDate}</span>.
  <https://www.brinckerhoff.org/blog/2014/05/31/decimal-time-zones>.

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
dz = unix2dote(now)
decYear = ydz[0].toString().padStart(4, "0")
zeroDote = unix2dote(now, 0)[0]
zeroTime = zeroDote % 1
zeroDate = dote2date(zeroDote)
zeroYear = zeroDate[0]
zeroYda = zeroDate[1]
zeroDoy = Math.floor(zeroYda)
zeroYdaHsl = textcolor(zeroYda.toFixed(5), d3.color(piecewiseColor(zeroYda / (365 + zeroIsLeap))).formatHex())
zeroTimeHsl0 = textcolor(zeroTime.toFixed(5).slice(1), d3.color(piecewiseColor(zeroTime)).formatHex())
zeroTimeHsl1 = textcolor(zeroTime.toFixed(5).slice(1), d3.color(piecewiseColor(zeroTime)).formatHex())
zeroTimeHsl2 = textcolor((zeroTime * 10).toFixed(4), d3.color(piecewiseColor(zeroTime)).formatHex())
zeroTimeHsl3 = textcolor(zeroTime.toFixed(5).slice(2), d3.color(piecewiseColor(zeroTime)).formatHex())
zeroDotyHsl = textcolor(zeroDoy.toString().padStart(3, "0"), d3.color(piecewiseColor(zeroDoy / (365 + zeroIsLeap))).formatHex())
zeroDoteHsl = textcolor(zeroDote.toFixed(5), d3.color(piecewiseColor(zeroDote % 1)).formatHex())
zeroYearHsl = textcolor(zeroYear, d3.color(piecewiseColor(zeroYear % 1000 / 1000)).formatHex())
zeroIsLeap = zeroYear % 4 == 0 && zeroYear % 100 != 0 || zeroYear % 400 == 0;
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
decDate = Math.floor(ydz[1])
decTime = (selectedExact * 10).toFixed(4)
decTimeN = (selectedExactN * 10).toFixed(4)
barDD = decTime[0]
barDDN = decTimeN[0]
barMils = decTime.slice(2, 4)
barMilsN = decTimeN.slice(2, 4)
barBeats = decTime.slice(4, 6)
barBeatsN = decTimeN.slice(4, 6)
function lati2turn(degrees = -180, e = 3) {
  // turns: e=0, deciturns: e=1, etc.
  return (degrees %= 360) / (360 / 10**e) % 10**e;
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
      .attr("stroke-width", "1.25")
      .attr("stroke", "black");
    /* Draw month ticks */
    d3.range(12).map((m) => {
      const d = new Date(date.getFullYear(), m, 1);
      const angle = getSolarAngle(d);
      solarSystem
        .append("line")
        .attr("x1", (solarSystemRadius + 9) * Math.sin(angle))
        .attr("y1", (solarSystemRadius + 9) * stretch * Math.cos(angle))
        .attr("x2", (solarSystemRadius - 9) * Math.sin(angle))
        .attr("y2", (solarSystemRadius - 9) * stretch * Math.cos(angle))
        .attr("stroke-width", "1.75")
        .attr("stroke", "black");
      const startMonthAngle = getSolarAngle(new Date(date.getFullYear(), m, 1));
      solarSystem
        .append("text")
        .text(date2doty(d))
        .attr("x", (solarSystemRadius + 18 - width / 50) * Math.sin(startMonthAngle) * 1.1)
        .attr(
          "y",
          (solarSystemRadius + 2 - width / 3) * 6.2 * stretch * Math.cos(startMonthAngle) + Math.sign(Math.cos(startMonthAngle)) * 12
        )
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-size", fontSize * (width < 300 ? .9 : width < 400 ? .95 : width < 500 ? 1 : width < 600 ? 1.05 : width < 700 ? 1.1 : 1.2) + width / 100)
        .attr("font-family", "sans-serif")
        .attr("fill", "black");
    });
    const earth = solarSystem
      .append("g")
      .attr("transform", `translate(${x}, ${y})`);
    function drawEarth() {
      earth.append("line").attr("y1", -1.5 * earthRadius).attr("y2", 1.5 * earthRadius).attr("stroke", "blue").attr("transform", `rotate(-23.5)`);
      earth.append("path").attr("d", path(earthGeo)).attr("fill", darkmode ? "#007FFF" : mapcolors.ocean).attr("id", "globeOcean");
      earth.append("path").attr("d", path(land)).attr("fill", darkmode ? "#0808" : mapcolors.land).attr("id", "globeLand");
      earth.append("path").attr("d", path(countries)).attr("stroke-width", ".08").attr("fill", "none").attr("stroke", darkmode ? "#eee" : "#333").attr("id", "globeBorders");
      path.pointRadius(5.5);
      earth.append("path").attr("d", path({ type: "Point", coordinates: location })).attr("fill", "none").attr("stroke-width", .6).attr("stroke", "black");
      path.pointRadius(4.5);
      earth.append("path").attr("d", path({ type: "Point", coordinates: location })).attr("fill", "none").attr("stroke-width", 2.25).attr("stroke", "red");
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
    width > 380 ? [3, 6, 9, 12, 15, 18, 21] : width > 90 ? [6, 12, 18] : [12];
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
    .call((g) => g.selectAll(".tick text").attr("font-size", (width < 300 ? .7 : width < 325 ? .725 : width < 350 ? .75 : width < 375 ? .8 : width < 400 ? .9 : width < 450 ? .95 : width < 500 ? 1 : width < 600 ? 1.2 : width < 700 ? 1.3 : 1.4) * fontSize))
    .call((g) => g.selectAll(".tick text").attr("color", "black"))
    .call((g) => g.selectAll(".tick line").attr("stroke-dasharray", "5 3"));
  root
    .append("g")
    .attr("transform", `translate(${margin.left + chartHeight}, 0)`)
    .call(yAxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick").attr("color", mapcolors.grid))
    .call((g) => g.selectAll(".tick text").attr("font-size", (width < 400 ? .9 : width < 500 ? 1 : width < 600 ? 1.1 : width < 700 ? 1.2 : 1.3) * fontSize))
    .call((g) => g.selectAll(".tick text").attr("color", "black"))
    .call((g) => g.selectAll(".tick line").attr("stroke-dasharray", "5 3"));
  root
    .append("text")
    .text("Time of day")
    .attr("x", margin.bottom + (width < 275 ? -102 : width < 300 ? -106 : width < 325 ? -108 : width < 350 ? -115 : width < 375 ? -120 : width < 400 ? -128 : width < 425 ? -130 : width < 450 ? -132 : width < 475 ? -136 : width < 500 ? -141 : width < 525 ? -142 : width < 550 ? -148 : width < 575 ? -149 : width < 600 ? -154 : width < 650 ? -157 : width < 675 ? -157 : width < 700 ? -161 : width < 725 ? -160 : width < 750 ? -165 : width < 775 ? -169 : -173))
    .attr("y", margin.top - (width < 400 ? 33 : width < 500 ? 35 : width < 600 ? 37 : width < 700 ? 40 : 42))
    .attr("text-anchor", "middle")
    .attr("font-size", fontSize * (width < 300 ? .8 : width < 400 ? .9 : width < 500 ? 1 : width < 600 ? 1.1 : width < 700 ? 1.2 : 1.25) + width / 100)
    .attr("font-family", "sans-serif")
    .attr("transform", "rotate(-90)")
    .attr("fill", "black");
  root
    .append("text")
    .text("Day of year")
    .attr("x", margin.left + width / 2 - (width < 500 ? 30 : width < 600 ? 28 : width < 700 ? 24 : 22))
    .attr("y", margin.top + chartHeight / 4 + margin.bottom + (width < 275 ? 10 : width < 300 ? 18 : width < 325 ? 19 : width < 350 ? 22 : width < 375 ? 30 : width < 400 ? 37 : width < 450 ? 39 : width < 475 ? 40 : width < 500 ? 44 : width < 550 ? 50 : width < 600 ? 51 : width < 650 ? 50 : width < 700 ? 44 : width < 750 ? 40 : 43))
    .attr("text-anchor", "middle")
    .attr("font-size", fontSize * (width < 300 ? .95 : width < 400 ? 1 : width < 500 ? 1.05 : width < 600 ? 1.15 : width < 700 ? 1.2 : 1.25) + width / 100)
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
    .attr("x", width < 300 ? 63 : width < 500 ? 62 : width < 600 ? 61 : 60)
    .attr("y", width < 450 ? 8 : 1)
    .attr("rx", 5)
    .attr("width", fontSize * (width < 300 ? .95 : width < 400 ? 1 : width < 500 ? 1.05 : width < 600 ? 1.15 : width < 700 ? 1.2 : 1.25) + width / 100)
    .attr("height", fontSize * (width < 300 ? .95 : width < 400 ? 1 : width < 500 ? 1.05 : width < 600 ? 1.15 : width < 700 ? 1.2 : 1.25) + width / 100)
    .attr("fill", mapcolors.day);
  legend
    .append("text")
    .attr("x", width < 400 ? 82 : width < 500 ? 85 : width < 600 ? 87 : 90)
    .attr("y", width < 300 ? 22 : width < 400 ? 23 : width < 450 ? 24 : width < 500 ? 18 : width < 600 ? 20 : width < 700 ? 21 : 23)
    .attr("font-size", fontSize * (width < 300 ? .95 : width < 400 ? 1 : width < 500 ? 1.05 : width < 600 ? 1.15 : width < 700 ? 1.2 : 1.25) + width / 100)
    .attr("font-family", "sans-serif")
    .text("Day");
  legend
    .append("rect")
    .attr("x", width < 400 ? -10 : width < 500 ? -20 : width < 600 ? -40 : -39)
    .attr("y", width < 450 ? 8 : 1)
    .attr("rx", 5)
    .attr("width", fontSize * (width < 300 ? .95 : width < 400 ? 1 : width < 500 ? 1.05 : width < 600 ? 1.15 : width < 700 ? 1.2 : 1.25) + width / 100)
    .attr("height", fontSize * (width < 300 ? .95 : width < 400 ? 1 : width < 500 ? 1.05 : width < 600 ? 1.15 : width < 700 ? 1.2 : 1.25) + width / 100)
    .attr("fill", mapcolors.night);
  legend
    .append("text")
    .attr("x", width < 400 ? 11 : width < 500 ? 4 : width < 600 ? -12 : -9)
    .attr("y", width < 300 ? 22 : width < 400 ? 23 : width < 450 ? 24 : width < 500 ? 18 : width < 600 ? 19 : width < 700 ? 21 : 23)
    .attr("font-size", fontSize * (width < 300 ? .95 : width < 400 ? 1 : width < 500 ? 1.05 : width < 600 ? 1.15 : width < 700 ? 1.2 : 1.25) + width / 100)
    .attr("font-family", "sans-serif")
    .text("Night");
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
      .attr("x", xScale(date) - 4);
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
  dateLine.append("line").attr("stroke-width", 4).attr("stroke", "red");
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
    .attr("r", 12)
    .attr("fill", "red")
    .attr("stroke-width", .6)
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
height = 0.65 * width;
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
  } = Array.isArray(config) ? {value: config} : config;
  const height = dimensions[1];
  let [lon, lat] = value;
  lon = lon != null ? lon : null;
  lat = lat != null ? lat : null;
  const formEl = html`<form id="formEl" style="width: ${width}px;"></form>`;
  const context = DOM.context2d(width, height-width/14);
  const canvas = context.canvas;
  canvas.style.margin = `0px 0px -26px 0px`;
  const projection = d3
    .geoEquirectangular()
    .precision(0.1)
    .fitSize([width, height], { type: "Sphere" }).rotate([-153, 0]);
  const path = d3.geoPath(projection, context).pointRadius(2.5);
  formEl.append(canvas);
  function draw() {
    context.fillStyle = window.darkmode ? "black" : "white";
    context.fillRect(0, 0, width, height);
    context.beginPath(); path({type: "Sphere"});
    context.fillStyle = window.darkmode ? "#007FFF" : mapcolors.ocean;
    context.fill();
    context.beginPath();
    path(graticule);
    context.lineWidth = 0.95;
    context.strokeStyle = `#aaa`;
    context.stroke();
    context.beginPath();
    path(land);
    context.fillStyle = window.darkmode ? "#0808" : mapcolors.land;
    context.fill();
    context.beginPath();
    path(countries);
    context.lineWidth = .95;
    context.strokeStyle = window.darkmode ? "#aaa" : "#333";
    context.stroke();
    context.fillStyle = window.darkmode ? "#fff" : "#000";
    context.font = width < 760 ? "14px serif" : width < 990 ? "17px serif" : "23px serif";
    d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, 82 - (width < 500) * 8.8])));
    d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, -66 + (width < 500) * 1.1])));
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
    display: v => (width > 300) ? html`<div style="width: ${width}px; white-space: nowrap; color: window.darkmode ? #fff : #000; text-align: center; font: ${width / 40}px monospace; position: relative; top: ${-16 - width / 50}px;  margin-bottom: -.4em;">
            <span style="color: window.darkmode ? #fff : #000;">Zone:</span> ${lon != null ? long2zone(lon) : ""}
            &nbsp; &nbsp;
            <span style="color: window.darkmode ? #fff : #000;">Longitude:</span> ${lon != null ? (long2turn(lon)).toFixed(0) : ""}
            &nbsp; &nbsp;
            <span style="color: window.darkmode ? #fff : #000;">Latitude:</span> ${lat != null ? (lati2turn(lat)).toFixed(0) : ""}
          </div>` : '',
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
    color = yiq(background) > 0.51 ? "#000" : "white",
    padding = "0 5px",
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
selSnap = selDate + selTime
selLati = lati2turn(location[1])
decDodHsl = textcolor(decDod, d3.color(piecewiseColor(decDod / 10)).formatHex())
decDateHsl = textcolor(decDate.toString().padStart(3, "0"), d3.color(piecewiseColor(decDate / (365 + isLeapYear))).formatHex())
decTimeHsl = textcolor(decTime, d3.color(piecewiseColor(decTime / 10)).formatHex())
selDateHsl = textcolor(selDate.toString().padStart(3, "0"), d3.color(piecewiseColor(selDate / 365)).formatHex())
selLatiHsl = textcolor(selLati.toFixed(0), d3.color(piecewiseColor((selLati + 250) % 250 / 250)).formatHex())
selTimeDay = textcolor(selTimeOne.toFixed(5).slice(1), d3.color(piecewiseColor(selTime)).formatHex())
selTimeHsl0 = textcolor(selTimeTen.toFixed(4), d3.color(piecewiseColor(selTime)).formatHex())
selTimeHsl1 = textcolor(selTimeTen.toFixed(4), d3.color(piecewiseColor(selTime)).formatHex())
selZoneHsl = textcolor(selectedZone, d3.color(piecewiseColor(selectedZone / 10)).formatHex())
selSnapDay = textcolor(selSnap.toFixed(5).padStart(9, "0"), d3.color(piecewiseColor(selSnap / 365)).formatHex())
selSnapDec = textcolor((selSnap * 10).toFixed(4).padStart(9, "0"), d3.color(piecewiseColor(selSnap / 365)).formatHex())
decZoneHsl = textcolor(selectedZone, d3.color(piecewiseColor(selectedZone / 10)).formatHex())
isLeapYear = decYear % 4 == 0 && decYear % 100 != 0 || decYear % 400 == 0;
viewof selectedDate = Inputs.input(date2022)
viewof selectedHour = Inputs.input(date2022.getHours())
date2022 = new Date(2022, new Date().getMonth(), new Date().getDate(), new Date().getHours())
function set(input, value) {
  input.value = value;
  input.dispatchEvent(new Event("input", {bubbles: true}));
}
hD121 = d3.hsl(piecewiseColor(121 / 365)).h
hD268 = d3.hsl(piecewiseColor(268 / 365)).h
hD305 = d3.hsl(piecewiseColor(305 / 365)).h
hD306 = d3.hsl(piecewiseColor(306 / 365)).h
h1by320 = d3.hsl(piecewiseColor(1 / 320)).h
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
sortedPop = populationByTimeZone.sort(
  (a, b) => sortParams[1] ? sortFunc(a.number, b.number) : sortFunc(a.pop, b.pop)
)
sortFunc = sortParams[0] ? d3.ascending : d3.descending
popBySign = d3.rollup(sortedPop, v => d3.sum(v, d => d.pop / 1e9), d => d.Sign)
totalPop = d3.sum(sortedPop, d => d.pop / 1e9)
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
  font-weight: 400;
  font-family: monospace;
}
.colorDay {
  background: #ffe438;
  color: black;
  padding: 0px 3px 0px 4px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorBkg {
  background: ${window.darkmode ? "black" : "white"};
  color: ${window.darkmode ? "white" : "black"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color0 {
  background: hsl(0 100% 50%);
  color: ${yiq(`hsl(0, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color1 {
  background: hsl(300 100% 50%);
  color: ${yiq(`hsl(300, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color2 {
  background: hsl(280 100% 50%);
  color: ${yiq(`hsl(280, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color3 {
  background: hsl(240 100% 50%);
  color: ${yiq(`hsl(240, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color4 {
  background: hsl(200 100% 50%);
  color: ${yiq(`hsl(200, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color5 {
  background: hsl(180 100% 50%);
  color: ${yiq(`hsl(180, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color6 {
  background: hsl(120 100% 50%);
  color: ${yiq(`hsl(120, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color7 {
  background: hsl(80 100% 50%);
  color: ${yiq(`hsl(80, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color8 {
  background: hsl(60 100% 50%);
  color: ${yiq(`hsl(60, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color9 {
  background: hsl(40 100% 50%);
  color: ${yiq(`hsl(40, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color375 {
  background: hsl(${hues[0.375]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.375]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color0083 {
  background: hsl(${hues[0.0083]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.0083]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color0166 {
  background: hsl(${hues[0.0166]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.0166]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color55by24 {
  background: hsl(${hues[.0229]} 100% 50%);
  color: ${yiq(`hsl(${hues[.0229]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color125 {
  background: hsl(${hues[.125]} 100% 50%);
  color: ${yiq(`hsl(${hues[.125]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color025 {
  background: hsl(${hues[0.025]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.025]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color287 {
  background: hsl(${hues[0.287]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.287]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color333 {
  background: hsl(${hues[0.333]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.333]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color0333 {
  background: hsl(${hues[0.0333]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.0333]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color0416 {
  background: hsl(${hues[0.0416]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.0416]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color429 {
  background: hsl(${hues[0.429]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.429]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color05 {
  background: hsl(${hues[0.05]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.05]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color533 {
  background: hsl(${hues[0.533]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.533]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color969 {
  background: hsl(${hues[0.969]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.969]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color999 {
  background: hsl(${hues[0.999]} 100% 50%);
  color: ${yiq(`hsl(${hues[0.999]}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.color1by320 {
  background: hsl(${h1by320} 100% 50%);
  color: ${yiq(`hsl(${h1by320}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorD121 {
  background: hsl(${hD121} 100% 50%);
  color: ${yiq(`hsl(${hD121}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorD268 {
  background: hsl(${hD268} 100% 50%);
  color: ${yiq(`hsl(${hD268}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorD305 {
  background: hsl(${hD305} 100% 50%);
  color: ${yiq(`hsl(${hD305}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
.colorD306 {
  background: hsl(${hD306} 100% 50%);
  color: ${yiq(`hsl(${hD306}, 100%, 50%)`) > 0.51 ? "black" : "white"};
  padding: 0px 5px;
  border-radius: 4px;
  font-weight: 400;
  font-family: monospace;
}
</style>
`
```

<style>
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
  font-size: 18px;
}
.analogclock .hour-label {
  font-size: 32px
}
.clocks * {
  margin: -10px 0px 10px 0px;
  padding: 0px;
}
#title-block-header > div:nth-child(2) {
  display: none;
}
h4.hiddenheading, h5.hiddenheading {
  display: none;
}
div.cell-output:has(#daylightapp) {
  overflow: visible;
}
div.cell-output:has(#formEl) {
  overflow: visible;
}
#daylightapp {
  overflow: visible;
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
#timezonepoptoggles div {
  display: flex;
}
#timezonepoptoggles div form {
  max-width: 180px;
}
#timezonepoptoggles div form label {
  max-width: 120px;
}
#timezonepoptoggles div form:nth-child(1) {
  margin-right: 8px;
}
#timezonepoptoggles div form:nth-child(2) label {
  max-width: 110px;
}
#timezonepoptoggles input[type=checkbox] {
  margin-top: 8px;
}
</style>
