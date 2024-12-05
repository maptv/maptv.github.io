# Dec Time
Martin Laptev
2024+279

- [Time](#time)
- [Zone](#zone)
- [Unit](#unit)
- [Next](#next)

# Time

My website provides many examples of the [Quarto](https://quarto.org)
publishing and the [Dec](../../dec) measurement systems in action. I
leverage Quarto support for the [Observable](https://observablehq.com/)
data analysis and visualization system to create animated and
interactive graphics like the clocks🕓and bar📊charts below, which
display a Dec time like the one on the left side of the [navigation
bar](https://en.wikipedia.org/wiki/Navigation_bar#:~:text=a%20section%20of%20a%20graphical%20user%20interface%20intended%20to%20aid%20visitors%20in%20accessing%20information)
(navbar) above.

Dec times are measured in [fractional
days](https://en.wikipedia.org/wiki/Decimal_time#Fractional_days:~:text=a%20decimal%20fraction%20of%20a%20day).
The shortest, longest, and thinnest clock🕓hands and the top, middle,
and bottom bars📊indicate the <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="under tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</a>, <span class="under tool"
data-bs-toggle="tooltip"
data-bs-title="thousandths of a day">millidays</span>, and
<span class="under tool" data-bs-toggle="tooltip"
data-bs-title="hundred thousandths of a day">centimillidays</span>,
respectively, of the time since the start,
<span class="cyan">+${decTime}</span>, or until the end,
<span class="pink">-${decTimeN}</span>, of the day in the Dec time zone,
<span class="lime">${selectedZone}</span>, selected by the red⭕️circle
on the
[solar☀️terminator](https://en.wikipedia.org/wiki/Terminator_%28solar%29#:~:text=a%20moving%20line%20that%20divides%20the%20daylit%20side%20and%20the%20dark%20night%20side%20of%20a%20planetary%20body)
map🗺️beneath the bars📊.

<div class="clocks">

${clock}${clock1}

</div>

``` {ojs}
//| echo: false
// https://observablehq.com/@fheyen/barchart-clock
barChart = {
const W = width;
  const H = 88;
  const barX = 1;
  const firstBarY = 1;
  const svg = d3
    .create("svg")
    .attr("width", W)
    .attr("viewBox", [0, 0, W * .87, H]);
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
    .text(d=>d)
    .style("font-size", `{width < 350 ? 12 : 20}px`)
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
    .text(d=>d);
  svg.attr("id", "barClock");
  return svg.node();
}
barChart1 = {
const W = width;
  const H = 88;
  const barX = 1;
  const firstBarY = 1;
  const svg = d3
    .create("svg")
    .attr("width", W)
    .attr("viewBox", [0, 0, W * .87, H]);
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
    .text(d=>d);
  svg.attr("id", "barClock");
  return svg.node();
}
viewof location = worldMapCoordinates([162, 0], [width * .998, Math.round((21 / 40) * width)])
// https://observablehq.com/@dbridges/visualizing-seasonal-daylight
app = {
  const svg = d3.select(DOM.svg(width, height));
  svg.style("user-select", "none")
     .style("-webkit-user-select", "none");
  const margin = {top: 0, left: 10, right: 10, bottom: 0, inner: 3};
  const contentWidth = width - margin.left - margin.right - margin.inner;
  const columnWidth = contentWidth / 2;
  let selection = {
    date: new Date(),
    hour: new Date().getHours()
  }
  const renderPlot = () => {
    svg.selectAll("#daylightplot *").remove();
    svg.select("#daylightplot").call(daylightPlot, {
      width: columnWidth / 1.28,
      height: height / 1.51 - margin.top - margin.bottom,
      year: new Date().getFullYear(),
      latitude: location[1],
      defaultDate: selection.date,
      defaultHour: selection.hour
    })
  }
  const renderGlobe = () => {
    svg.selectAll("#globe *").remove();
    svg.selectAll("#globe").call(globe, { width: columnWidth * 1.22, location, ...selection });
  }
  const renderSolarSystem = () => {
    svg.selectAll("#solar-system *").remove();
    svg.selectAll("#solar-system").call(solarSystem,
                                        columnWidth / 1.08,
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
  svg.append("g")
    .attr("id", "solar-system")
    .attr("transform", `translate(${margin.left}, ${margin.top + height / 7.6})`);
  const plot = svg.append("g")
    .attr("id", "daylightplot")
    .attr("transform", `translate(${margin.left}, ${margin.top + height / 4})`);
  svg.append("g")
    .attr("id", "globe")
    .attr("transform", `translate(${margin.left + margin.inner + columnWidth / 1.25}, ${margin.top + Number(columnWidth < 300) * 16})`);
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
    .style("max-width", "350px")
    .attr("class", "clock-top")
    .attr("id", "clock");
  svg
    .append("text")
    .text(`+${decTime}-${selectedZone}`)
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
    handData[0].value = !fancySecondsOFF ? Math.floor(selectedExactN * 10) : decTimeN[0];
    handData[1].value = !fancySecondsOFF ? Math.floor(selectedExactN * 10 % 1 * 100) : decTimeN.slice(2, 4);
    handData[2].value = !fancySecondsOFF ? selectedExactN * 10 % 1 * 100 % 1 * 100 : decTimeN.slice(4, 6);
  }
  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, w, h])
    .style("max-width", "350px")
    .attr("class", "clock-btm")
    .attr("id", "clock");
  svg
    .append("text")
    .text(`-${decTimeN}-${selectedZone}`)
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
```

``` {ojs}
//| output: true
width
```

The plot to the lower left of the map🗺️visualizes the nighttime (blue)
and daytime (yellow) time of day (x-axis) throughout every day of the
year (y-axis) at the latitude of the red⭕️circle on the map🗺️.
The↕vertical position of the red<font color=red>—</font>line (time of
day) and the↔️horizontal position of the red🔴dot (day of the year) on
the plot control the🌐globes above and to the right of the plot.

# Zone

Drag the red⭕️circle across the
[meridians](https://en.wikipedia.org/wiki/Meridian_%28geography%29#:~:text=words%2C%20it%20is-,a%20line%20of%20longitude,-.%20The%20position%20of)
(vertical↕gray lines) on the map🗺️to see how changing time zones affects
the time. Only the first digit of the Dec times shown above, the
<span class="under tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</span>, varies across time
zones, because the 10 Dec time zones, numbered 0 through 9 on the map🗺️,
are each 1 <span class="under tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a turn">deci[turn](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=a%20unit%20of%20plane%20angle%20measurement%20equal%20to%202%CF%80%C2%A0radians%2C%20360%C2%A0degrees)</span>
(d[*τ*](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=the%20Greek%20letter,to%20one%20turn))
wide. Simply put, a <span class="under tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a turn">deciturn</span> of longitude
translates into a <span class="under tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</span> of time.

The leftmost vertical↕line on the map🗺️is [Meridian
0](https://en.wikipedia.org/wiki/126th_meridian_west#:~:text=a%20line%20of%20longitude%20that%20extends%20from%20the%20North%20Pole%20across%20the%20Arctic%20Ocean%2C%20North%20America%2C%20the%20Pacific%20Ocean%2C%20the%20Southern%20Ocean%2C%20and%20Antarctica%20to%20the%20South%20Pole),
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
dates](../../dec/date)🗓️ that are 1 day apart. Negative time zone
numbers can be useful for getting [Dec dates](../../dec/date)🗓️to match
[Gregorian
calendar](https://en.wikipedia.org/wiki/Gregorian_calendar#:~:text=the%20calendar%20used%20in%20most%20parts%20of%20the%20world)🗓️dates
with negative [UTC
offsets](https://en.wikipedia.org/wiki/UTC_offset#:~:text=the%20difference%20in%20hours%20and%20minutes%20between%20Coordinated%20Universal%20Time%20(UTC)%20and%20local%20solar%20time).

There are [37 UTC
offsets](https://en.wikipedia.org/wiki/List_of_UTC_offsets), but only 10
Dec time zones. Conversion between Dec time zones and UTC offsets is not
straightforward, because UTC offsets are influenced by geographic and
political boundaries, whereas Dec time zones are determined solely by
longitude. If you know your longitude in degrees (°) or
<span class="under tool" data-bs-toggle="tooltip"
data-bs-title="hundredths of a turn">centi[turns](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=a%20unit%20of%20plane%20angle%20measurement%20equal%20to%202%CF%80%C2%A0radians%2C%20360%C2%A0degrees)</span>
([*c**τ*](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=the%20Greek%20letter,to%20one%20turn)),
you can look up your Dec time zone in the table below.

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
<tr class="header">
<th style="text-align: center;">TZ<br>+</th>
<th style="text-align: center;">TZ<br>-</th>
<th style="text-align: center;">Start<br>°</th>
<th style="text-align: center;">Mid<br>°</th>
<th style="text-align: center;">End<br>°</th>
<th style="text-align: center;">Start<br><span
class="math inline"><em>c</em><em>τ</em></span></th>
<th style="text-align: center;">Mid<br><span
class="math inline"><em>c</em><em>τ</em></span></th>
<th style="text-align: center;">End<br><span
class="math inline"><em>c</em><em>τ</em></span></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: center;">9</td>
<td style="text-align: center;">-1</td>
<td style="text-align: center;">-54</td>
<td style="text-align: center;">-36</td>
<td style="text-align: center;">-18</td>
<td style="text-align: center;">90</td>
<td style="text-align: center;">95</td>
<td style="text-align: center;">100</td>
</tr>
<tr class="even">
<td style="text-align: center;">8</td>
<td style="text-align: center;">-2</td>
<td style="text-align: center;">-90</td>
<td style="text-align: center;">-72</td>
<td style="text-align: center;">-54</td>
<td style="text-align: center;">80</td>
<td style="text-align: center;">85</td>
<td style="text-align: center;">90</td>
</tr>
<tr class="odd">
<td style="text-align: center;">7</td>
<td style="text-align: center;">-3</td>
<td style="text-align: center;">-126</td>
<td style="text-align: center;">-108</td>
<td style="text-align: center;">-90</td>
<td style="text-align: center;">70</td>
<td style="text-align: center;">75</td>
<td style="text-align: center;">80</td>
</tr>
<tr class="even">
<td style="text-align: center;">6</td>
<td style="text-align: center;">-4</td>
<td style="text-align: center;">-162</td>
<td style="text-align: center;">-144</td>
<td style="text-align: center;">-126</td>
<td style="text-align: center;">60</td>
<td style="text-align: center;">65</td>
<td style="text-align: center;">70</td>
</tr>
<tr class="odd">
<td style="text-align: center;">5</td>
<td style="text-align: center;">-5</td>
<td style="text-align: center;">162</td>
<td style="text-align: center;">180</td>
<td style="text-align: center;">-162</td>
<td style="text-align: center;">50</td>
<td style="text-align: center;">55</td>
<td style="text-align: center;">60</td>
</tr>
<tr class="even">
<td style="text-align: center;">4</td>
<td style="text-align: center;">-6</td>
<td style="text-align: center;">126</td>
<td style="text-align: center;">144</td>
<td style="text-align: center;">162</td>
<td style="text-align: center;">40</td>
<td style="text-align: center;">45</td>
<td style="text-align: center;">50</td>
</tr>
<tr class="odd">
<td style="text-align: center;">3</td>
<td style="text-align: center;">-7</td>
<td style="text-align: center;">90</td>
<td style="text-align: center;">108</td>
<td style="text-align: center;">126</td>
<td style="text-align: center;">30</td>
<td style="text-align: center;">35</td>
<td style="text-align: center;">40</td>
</tr>
<tr class="even">
<td style="text-align: center;">2</td>
<td style="text-align: center;">-8</td>
<td style="text-align: center;">54</td>
<td style="text-align: center;">72</td>
<td style="text-align: center;">90</td>
<td style="text-align: center;">20</td>
<td style="text-align: center;">25</td>
<td style="text-align: center;">30</td>
</tr>
<tr class="odd">
<td style="text-align: center;">1</td>
<td style="text-align: center;">-9</td>
<td style="text-align: center;">18</td>
<td style="text-align: center;">36</td>
<td style="text-align: center;">54</td>
<td style="text-align: center;">10</td>
<td style="text-align: center;">15</td>
<td style="text-align: center;">20</td>
</tr>
<tr class="even">
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
times with an offset of 0 and 12 hours, respectively. The other Dec time
zones will differ from the closest UTC time by
8.<span class="over">3</span>, 16.<span class="over">6</span>, 25,
33.<span class="over">3</span>, 41.<span class="over">6</span> or 50
<span class="under tool" data-bs-toggle="tooltip"
data-bs-title="thousands of a day">millidays</span>. To find the
difference δ, convert the UTC offset hours
<span class="cyan">o<sub>h</sub></span> and minutes
<span class="cyan">o<sub>m</sub></span> into <span class="under tool"
data-bs-toggle="tooltip"
data-bs-title="tenths of a turn">deci[turns](https://en.wikipedia.org/wiki/Turn_%28angle%29#:~:text=a%20unit%20of%20plane%20angle%20measurement%20equal%20to%202%CF%80%C2%A0radians%2C%20360%C2%A0degrees)</span>
of the longitude λ and then subtract the Dec zone number
<span class="lime">z</span>:

*λ* = *o*<sub>*h*</sub> ÷ 2.4 + *o*<sub>*m*</sub> ÷ 144

*z* = ⌊*λ* + 1 ÷ 2⌋

*δ* = *λ* − *z*

We can avoid dealing with the time zone difference by shifting the time
zone so that we always convert between Zone 0 and
[UTC+00:00](https://en.wikipedia.org/wiki/List_of_UTC_offsets#UTC+00:00,_Z)
or Zone 5 and
[UTC+12:00](https://en.wikipedia.org/wiki/List_of_UTC_offsets#UTC+12:00,_M).
To obtain the Zone 0 time, we evaluate a Dec time as a math expression,
add 10, and get the remainder after dividing by 10 to make sure the
result is less than 10 <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="under tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</a>:
(<span class="cyan">${browserTime.toFixed(4)}</span> ${browserSign}
<span class="lime">${Math.abs(browserZone)}</span> + 10)
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
10 = <span class="cyan">${zone0time.toFixed(4)}</span>.

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
In contrast, times in hours, minutes, and seconds are typically
expressed as
[mixed-radix](https://en.wikipedia.org/wiki/Mixed_radix#:~:text=non%2Dstandard%20positional%20numeral%20systems%20in%20which%20the%20numerical%20base%20varies%20from%20position%20to%20position)
`hh:mm:ss` number instead of a decimal number.

<table>
<thead>
<tr class="header">
<th>Prefix</th>
<th>Power</th>
<th>hh:mm:ss.sss</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td></td>
<td>0</td>
<td>24:00:00.000</td>
</tr>
<tr class="even">
<td>deci</td>
<td>-1</td>
<td>02:24:00.000</td>
</tr>
<tr class="odd">
<td>centi</td>
<td>-2</td>
<td>00:14:24.000</td>
</tr>
<tr class="even">
<td>milli</td>
<td>-3</td>
<td>00:01:26.400</td>
</tr>
<tr class="odd">
<td>decimilli</td>
<td>-4</td>
<td>00:00:08.640</td>
</tr>
<tr class="even">
<td>centimilli</td>
<td>-5</td>
<td>00:00:00.864</td>
</tr>
</tbody>
</table>

To convert the hour <span class="orangered">h</span>, minute
<span class="maroon">m</span>, and second
<span class="seagreen">s</span> into the <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="under tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</a>
<span class="cyan">d</span>, Dec uses the following equation:
<span class="cyan">d</span> = <span class="orangered">h</span> ÷ 2.4 +
<span class="maroon">m</span> ÷ 144 + <span class="seagreen">s</span> ÷
8640. The current equation values in Zone
<span class="lime">${browserZone}</span> are:
<span class="cyan">${browserTime.toFixed(4)}</span> =
<span class="orangered">${Math.floor(hours).toString().padStart(2,
“0”)}</span> ÷ 2.4 +
<span class="maroon">${Math.floor(minutes).toString().padStart(2,
“0”)}</span> ÷ 144 +
<span class="seagreen">${Math.floor(seconds).toString().padStart(2,
“0”)}</span> ÷ 8640. Inversely, we can convert <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="under tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</a> into hours:
<span class="orangered">h</span> = <span class="cyan">d</span> × 2.4,
minutes: <span class="maroon">m</span> =
<span class="orangered">h</span>
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
1 × 60, and seconds: <span class="seagreen">s</span> =
<span class="maroon">m</span>
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
1 × 60.

Obtain Dec time from [UNIX
time](https://en.wikipedia.org/wiki/Unix_time#:~:text=the%20number%20of%20non%2Dleap%20seconds%20that%20have%20elapsed%20since%2000%3A00%3A00%20UTC%20on%201%C2%A0January%201970)
is better than dealing with hours, minutes, and seconds. To obtain the
Dec time <span class="cyan">d</span>+<span class="lime">0</span> from
the UNIX timestamp <span class="ultramarine">u</span>, we divide
<span class="ultramarine">u</span> by 86400 to convert seconds to days,
isolate the decimal part of the quotient, and then multiply by 10:
<span class="cyan">d</span> + <span class="lime">0</span> =
<span class="ultramarine">u</span> ÷ 86400
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
1 × 10. The current values in this equation are
<span class="cyan">${browserTime.toFixed(4)}</span> +
<span class="lime">0</span> = <span class="ultramarine">${(unix /
1000).toFixed(0)}</span> ÷ 86400
[mod](https://en.wikipedia.org/wiki/Modulo#:~:text=returns%20the%20remainder)
1 × 10.

The concept of measuring time in decimal days is not novel. In the late
1700s, the [French Republican
calendar](https://en.wikipedia.org/wiki/French_Republican_calendar#:~:text=a%20calendar%20created%20and%20implemented%20during%20the%20French%20Revolution)
time system referred to <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="under tool" data-bs-toggle="tooltip"
data-bs-title="tenths of a day">decidays</a> as decimal hours,
<span class="under tool" data-bs-toggle="tooltip"
data-bs-title="hundredths of a day">centidays</span> as
[décimes](https://en.wikipedia.org/wiki/Decimal_time#:~:text=into%20tenths%2C%20or-,d%C3%A9cimes,-%2C%20instead%20of%20minutes),
<span class="under tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a day">millidays</span> as decimal
minutes, and <span class="under tool" data-bs-toggle="tooltip"
data-bs-title="hundred thousandths of a day">centimillidays</span> as
decimal seconds. Similarly, [Swatch Internet
Time](https://en.wikipedia.org/wiki/Swatch_Internet_Time#:~:text=a%20decimal%20time%20system%20introduced%20in%201998%20by%20the%20Swatch%20corporation),
a [decimal
time](https://en.wikipedia.org/wiki/Decimal_time#:~:text=the%20representation%20of%20the%20time%20of%20day%20using%20units%20which%20are%20decimally%20related)
system introduced in 1998, uses the term “.beats” for
<span class="under tool" data-bs-toggle="tooltip"
data-bs-title="thousandths of a day">millidays</span>.

Swatch Internet Time differs from Dec in that it [has no time
zones](https://en.wikipedia.org/wiki/Swatch_Internet_Time#Calculation_from_UTC+1:~:text=There%20are%20no%20time%20zones%20in%20Swatch%20Internet%20Time)
and is obtained from
[UTC+01:00](https://en.wikipedia.org/wiki/UTC%2B01:00#:~:text=a%20time%20offset%20from%20UTC%20of%20%2B01%3A00)
[hours, minutes, and
seconds](https://en.wikipedia.org/wiki/Swatch_Internet_Time#Calculation_from_UTC+1:~:text=The%20formula%20for%20calculating%20the%20time%20in%20.beats%20from%20UTC%2B1).
The major innovations described in this article are the Dec time zone
system and the simple equation for obtaining Zone 0 Dec time from UNIX
time, but Dec has much more to offer than <a
href="https://en.wikipedia.org/wiki/Decimal_time#:~:text=dividing%20the%20day%20into%2010%20decidays"
class="under tool" data-bs-toggle="tooltip"
data-bs-title="a tenth of a day">deciday</a> times and zones.

# Next

The next article in the [Dec section](../../dec) compares Dec to the
[ISO
8601](https://en.wikipedia.org/wiki/ISO_8601#:~:text=an%20international%20standard%20covering%20the%20worldwide%20exchange%20and%20communication%20of%20date%20and%20time%2Drelated%20data)
international standard for dates and times. Like ISO 8601, Dec allows
for [combined date and time
representations](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations)
that can be paired up to express [time
intervals](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals:~:text=the%20intervening%20time%20between%20two%20time%20points).
In Dec, the combination of a date and time is called a snap and a time
interval expressed as a pair of snaps is called a span.

My [ISO 8601 article](../../dec/iso) is unique because it avoids the use
of Observable in favor of leveraging [Jupyter](https://jupyter.org)
support in Quarto to make the code underlying Dec available in multiple
programming languages. Observable is a great visualization tool but does
not translate well into Jupyter notebooks. After my ISO article, I
return to the use of Observable in my Dec [snap](../../dec/span) and
[span](../../dec/span) articles.

``` {ojs}
//| echo: false
//| output: false
unix = {
  while(true) {
    yield Date.now();
  }
}
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
browserDote = unix2dote(unix)
browserTime = browserDote[0] % 1 * 10
browserZone = browserDote[1]
browserSign = browserZone > 0 ? "-" : "+"
zone0time = (browserTime - browserZone + 10) % 10
hours = browserTime * 2.4
minutes = hours % 1 * 60
seconds = minutes % 1 * 60
selectedDote = unix2dote(unix, long2zone(location[0]))
selectedExact = selectedDote[0] % 1
selectedExactN = (1 - selectedExact) % 1
selectedZone = selectedDote[1]
decTime = (selectedExact * 10).toFixed(4)
decTimeN = (selectedExactN * 10).toFixed(4)
barDD = decTime[0]
barDDN = decTimeN[0]
barMils = decTime.slice(2, 4)
barMilsN = decTimeN.slice(2, 4)
barBeats = decTime.slice(4, 6)
barBeatsN = decTimeN.slice(4, 6)
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
      .attr("font-size", fontSize * (width < 265 ? 1 : 1.2))
      .attr("dominant-baseline", "middle")
      .attr("font-size", fontSize * (width < 265 ? 1 : 1.2))
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
    .attr("d", path(graticule))
    .attr("stroke-width", "1")
    .attr("fill", "none")
    .attr("stroke", "#888");
  earth.append("path")
    .attr("d", path(land))
    .attr("fill", colors.land);
  earth.append("path")
    .attr("d", path(countries))
    .attr("stroke-width", "1")
    .attr("fill", "none")
    .attr("stroke", "#000");
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
    //.call((g) => g.selectAll(".tick text").attr("font-size", fontSize * (width < 265 ? 1 : 1.2)))
    .call((g) => g.selectAll(".tick text").attr("color", "black"))
    .call((g) => g.selectAll(".tick line").attr("stroke-dasharray", "5 3"));
  root
    .append("g")
    .attr("transform", `translate(0, ${margin.top})`)
    .call(xAxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick").attr("color", colors.grid))
    //.call((g) => g.selectAll(".tick text").attr("font-size", fontSize * (width < 265 ? 1 : 1.2)))
    .call((g) => g.selectAll(".tick text").attr("color", "black"))
    .call((g) => g.selectAll(".tick line").attr("stroke-dasharray", "5 3"));
  root
    .append("text")
    .text("Time of day (millidays)")
    .attr("x", margin.left + chartWidth / 2)
    .attr("y", margin.top + chartHeight + margin.bottom - 2)
    .attr("text-anchor", "middle")
    .attr("font-size", fontSize * (width < 265 ? 1 : 1.2))
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
    .attr("x", -25)
    .attr("y", 6)
    .attr("width", fontSize * (width < 265 ? 1 : 1.2))
    .attr("height", fontSize * (width < 265 ? 1 : 1.2))
    .attr("fill", colors.night);
  legend
    .append("text")
    .attr("x", -8)
    .attr("y", 19)
    .attr("font-size", fontSize * (width < 265 ? 1 : 1.2))
    .attr("font-family", "sans-serif")
    .text("Nighttime");
  legend
    .append("rect")
    .attr("x", 58)
    .attr("rx", 5)
    .attr("y", 6)
    .attr("width", fontSize * (width < 265 ? 1 : 1.2))
    .attr("height", fontSize * (width < 265 ? 1 : 1.2))
    .attr("fill", colors.day);
  legend
    .append("text")
    .attr("x", 75)
    .attr("y", 19)
    .attr("font-size", fontSize * (width < 265 ? 1 : 1.2))
    .attr("font-family", "sans-serif")
    .text("Daytime");
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
fontSize = 12;
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
  const context = DOM.context2d(width, height-width/13.2);
  const canvas = context.canvas;
  canvas.style.margin = `-10px 0px -26px 0px`;
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
    d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, 84 - (width < 400) * 3.6])));
    d3.range(-1.5, 342 + 1, 36).map(x =>  context.fillText(long2zone(x), ...projection([x, -66])));
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
styledZone = setStyle(selectedZone, d3.color("chartreuse").formatHex())
styledTime = setStyle(`+${decTime}`, d3.color("cyan").formatHex())
styledTimeN = setStyle(`-${decTimeN}`, d3.color("pink").formatHex())
```

<style>
svg g g.tick text {
  font-size: 1.5em !important;
}
  .tickLabel, .tickLabel1, .tickLabel2, .timeLabel {
    fill: #000;
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
  .timeBar {
    fill: #e8e8e8;
  }
  .timeBarFull {
    fill: #ccffff;
  }
  .timeBarFullN {
    fill: #ffcccc;
  }
  .background {
    fill: white;
  }
  .tickDek, .tickDotd, .tickDotd1, .tickC, .tickC1, .tickM, .tickM1, .tickB, .tickB1 {
    stroke: none;
    fill: #666;
    width: 1px;
  }
#clock {
  stroke: #000;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
}
#clock #rim {
  fill: none;
  stroke: #999;
  stroke-width: 3px;
}
#clock .second-hand {
  stroke-width:3;
}
#clock .minute-hand {
  stroke-width:8;
  stroke-linecap:round;
}
#clock .hour-hand {
  stroke-width:12;
  stroke-linecap:round;
}
#clock .hands-cover {
  stroke-width:3;
  fill:#fff;
}
#clock .second-tick {
  stroke-width:3;
  fill:#000;
}
#clock .hour-tick {
  stroke-width:8; // same as the minute hand
}
#clock .second-label {
  font-size: 18px;
}
#clock .hour-label {
  font-size: 32px
}
.clocks * {
  margin: -10px 0px 10px 0px;
  padding: 0px;
}
</style>
