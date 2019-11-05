const draw = () => {
  let width = 300,
    height = 300;
  let svg = d3
    .select("body")
    .append("svg")
    .attr("viewBox", [-width / 2, -height / 2, width, height]);

};
