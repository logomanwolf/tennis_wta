const loadData = (innerFunc, filename, top_10) => {
  winner_map_index = {};
  top_10.forEach((d, i) => {
    winner_map_index[d] = i;
  });
  d3.json(filename).then(data => {
    winner_list = d3
      .nest()
      .key(d => d.winner_id)
      .rollup(d => d.length)
      .map(data);
    // winner_list=JSON.stringify(winner_list)
    let outer = new Array(top_10.length + 1);
    result = d3
      .nest()
      .key(d => d.winner_id)
      .key(i => i.loser_id)
      .rollup(i => i.length)
      // .sortKeys(d => d3.descending(d.winner_rank))
      .map(data);
    // result.map()

    for (let i = 0; i < top_10.length + 1; i++) {
      //初始化outer数组
      outer[i] = new Array(top_10.length + 1);
      for (let j = 0; j < top_10.length + 1; j++) outer[i][j] = 0;
    }
    result.keys().forEach(winner_key => {
      let des = result.get(winner_key);
      if (top_10.indexOf(winner_key) > -1) {
        des.keys().forEach(loser_key => {
          if (top_10.indexOf(loser_key) > -1)
            outer[winner_map_index[winner_key]][
              winner_map_index[loser_key]
            ] += des.get(loser_key);
          else
            outer[winner_map_index[winner_key]][top_10.length] += des.get(
              loser_key
            );
        });
      } else {
        des.keys().forEach(loser_key => {
          if (top_10.indexOf(loser_key) > -1)
            outer[top_10.length][winner_map_index[loser_key]] += des.get(
              loser_key
            );
          else outer[top_10.length][top_10.length] += des.get(loser_key);
        });
      }
    });
    // }
    innerFunc({ outer, result, top_10, winner_map_index, originData: data });
  });
};
const width = 640;
const height = Math.min(640, width);
const outerRadius = Math.min(width, height) * 0.5 - 30;
const innerRadius = outerRadius - 20;
function groupTicks(d, step) {
  const k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, step).map(value => {
    return { value: value, angle: value * k + d.startAngle };
  });
}
//Comma determines whether to separate groups of 3 digits (before the decimal place) by commas.

const draw = ({ outer, result, top_10, winner_map_index }) => {
  let formatValue = d3.formatPrefix(",.0", 1);
  let chord = d3
    .chord()
    .padAngle(0.05)
    .sortSubgroups(d3.descending);
  let arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
  let ribbon = d3.ribbon().radius(innerRadius);
  let color = d3
    .scaleOrdinal()
    .domain(d3.range(10))
    .range([
      "#e6f7ff",
      "#bae7ff",
      "#91d5ff",
      "#69c0ff",
      "#40a9ff",
      "#1890ff",
      "#096dd9",
      "#0050b3",
      "#003a8c",
      "#002766"
    ]);
  let svg = d3
    .select(".container")
    .append("span")
    .append("svg")
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("font-size", 10)
    .attr("font-family", "sans-serif");
  const chords = chord(outer);
  const group = svg
    .append("g")
    .selectAll("g")
    .data(chords.groups)
    .join("g")
    .on("mouseover", (d, i) => {
      d3.selectAll("path.ribbon").attr("opacity", 0.0);
      d3.selectAll("path.ribbon")
        .filter(data => {
          return (
            data.source.index == i ||
            (data.target.index == i && data.target.value > 0)
          );
        })
        .attr("opacity", 1);
      console.log("moveover");
    })
    .on("mouseleave", (d, i) => {
      d3.selectAll("path.ribbon").attr("opacity", 1);
    });

  group
    .append("path")
    .attr("fill", d => color(d.index))
    .attr("stroke", d => d3.rgb(color(d.index)).darker())
    .attr("d", arc);

  const groupTick = group
    .append("g")
    .selectAll("g")
    .data(d => groupTicks(d, 1))
    .join("g")
    .attr(
      "transform",
      d =>
        `rotate(${(d.angle * 180) / Math.PI - 90}) translate(${outerRadius},0)`
    );

  groupTick
    .append("line")
    .attr("stroke", "#000")
    .attr("x2", 6);

  groupTick
    // .filter(d => d.value % 5e3 === 0)
    .append("text")
    .attr("x", 8)
    .attr("dy", ".35em")
    .attr("transform", d =>
      d.angle > Math.PI ? "rotate(180) translate(-16)" : null
    )
    .attr("text-anchor", d => (d.angle > Math.PI ? "end" : null))
    .text(d => formatValue(d.value));
  svg
    .append("g")
    .attr("class", "outlayer")
    .attr("fill-opacity", 0.67)
    .selectAll("g")
    .append("path")
    .data(chords)
    .join("path")
    .attr("class", "ribbon")
    .attr("d", ribbon)
    .attr("fill", d => color(d.target.index))
    .on("mouseover", d => {
      d3.selectAll("path.ribbon").attr("opacity", 0.0);
      d3.select(d3.event.target)
        .attr(
          "fill",
          d3
            .rgb(color(d.target.index))
            // .darker()
            .formatHex()
        )
        .attr("opacity", 1);
      console.log("moveover");
    })
    .on("mouseleave", d => {
      d3.selectAll("path.ribbon").attr("opacity", 1);
      d3.select(d3.event.target).attr("fill", color(d.target.index));
      console.log("moveleave");
    });
};
const drawPie = () => {
  let innerRadius = 100;
  let outerRadius = 120;
  let svg = d3
    .select(".container")
    .append("span")
    .append("svg")
    .attr("viewBox", [-width / 2, -height / 2, width, height]);
  //[ {tourney_id: "2015-W-PM-ESP-01A-2015",winner_id: 201520,winner_name: "Petra Kvitova",winner_rank: 4.0,loser_id: 201320,loser_name: "Svetlana Kuznetsova",loser_rank: 29.0  }]
  let parseToPieData = () => {
    return d3.pie()([
      top10_final_list_2015_data.length,
      top10_final_list_data.length
    ]);
  };
  let color = d3
    .scaleOrdinal()
    .domain(d3.range(2))
    .range(["#610b00", "#ffbb96"]);
  let arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
  let group = svg
    .append("g")
    .selectAll("g")
    .data(parseToPieData())
    .join("g")
    .append("path")
    .data(parseToPieData())
    .join("path")
    .attr("fill", (d, i) => color(i))
    .attr("stroke", (d, i) => d3.rgb(color(i)).darker())
    .attr("d", arc)
    .on('click',(d)=>{
      // d3.event.target
    });
    // let animation= 
  // group.append("path");
};
