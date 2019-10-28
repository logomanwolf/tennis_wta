// data = [
//   { tag: "One", occurences: 1, color: "rgb(110, 64, 170)" },
//   { tag: "Two", occurences: 2, color: "rgb(175, 240, 91)" },
//   { tag: "Three", occurences: 2, color: "rgb(255, 94, 99)" },
//   { tag: "Four", occurences: 4, color: "rgb(26, 199, 194)" }
// ];

let pie = d3
  .pie()
  .sort(null)
  .value(function(d) {
    return d.occurences;
  });
let margin = { top: 20, right: 200, bottom: 20, left: 200 };
let width = 300,
  height = 300,
  radius = 100;

let arc = d3
  .arc()
  .outerRadius(radius - 10)
  .innerRadius(40);

const outArc = d3
  .arc()
  .outerRadius(radius + 40)
  .innerRadius(radius - 10);

const arcTween = function(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return arc(i(t));
  };
};

d3.selectAll(".graphArea")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("class", "graphArea")
  .attr(
    "transform",
    "translate(" +
      (margin.left + width / 2) +
      "," +
      (margin.top + height / 2) +
      ")"
  );

const pieChart = d3.select(".graphArea");
const arcs = pieChart.selectAll(".arc").data(pie(data));

arcs
  .enter()
  .append("g")
  .attr("class", "arc")
  .each(function(d) {
    d3.select(this)
      .append("path")
      .attr("d", arc)
      .style("fill", d.data.color)
      .style("stroke", "white");

    var x =
      outArc.centroid(d)[0] + width / 2 > width / 2 ? width / 2 : -width / 2;

    d3.select(this)
      .append("text")
      .attr("transform", "translate(" + x + "," + outArc.centroid(d)[1] + ")")
      .attr("dy", ".35em")
      .attr("fill", "black");

    d3.select(this)
      .append("line")
      .attr("class", "pend")
      .attr("stroke", "grey")
      .attr("x1", arc.centroid(d)[0])
      .attr("x2", outArc.centroid(d)[0])
      .attr("y1", arc.centroid(d)[1])
      .attr("y2", outArc.centroid(d)[1]);
    d3.select(this)
      .append("line")
      .attr("class", "hor")
      .attr("stroke", "grey")
      .attr("x1", outArc.centroid(d)[0])
      .attr("x2", x)
      .attr("y1", outArc.centroid(d)[1])
      .attr("y2", outArc.centroid(d)[1]);
  })
  .merge(arcs)
  .each(function(d) {
    d3.select(this)
      .select("path")
      .transition()
      .duration(500)
      .attrTween("d", arcTween)
      .style("fill", d.data.color);

    var x =
      outArc.centroid(d)[0] + width / 2 > width / 2 ? width / 2 : -width / 2;
    var anchor =
      outArc.centroid(d)[0] + width / 2 > width / 2 ? "start" : "end";

    d3.select(this)
      .select("text")
      .style("text-anchor", anchor)
      .attr(
        "dx",
        outArc.centroid(d)[0] + width / 2 > width / 2 ? "1em" : "-1em"
      )
      .transition()
      .duration(500)
      .attr("transform", "translate(" + x + "," + outArc.centroid(d)[1] + ")")
      .text(d.data.tag);

    d3.select(this)
      .select(".pend")
      .transition()
      .duration(500)
      .attr("x1", arc.centroid(d)[0])
      .attr("x2", outArc.centroid(d)[0])
      .attr("y1", arc.centroid(d)[1])
      .attr("y2", outArc.centroid(d)[1]);

    d3.select(this)
      .select(".hor")
      .transition()
      .duration(500)
      .attr("x1", outArc.centroid(d)[0])
      .attr("x2", x)
      .attr("y1", outArc.centroid(d)[1])
      .attr("y2", outArc.centroid(d)[1]);
  });
arcs.exit().remove();
