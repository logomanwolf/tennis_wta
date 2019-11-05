const processData = (data, top_10) => {
  let winner_map_index = {};
  top_10.forEach((d, i) => {
    winner_map_index[d] = i;
  });
  let outer = new Array(top_10.length + 1);
  let outerDetail = new Array(top_10.length + 1);
  result = d3
    .nest()
    .key(d => d.winner_id)
    .key(i => i.loser_id)
    .map(data);
  for (let i = 0; i < top_10.length + 1; i++) {
    //初始化outer数组
    outer[i] = new Array(top_10.length + 1);
    outerDetail[i] = new Array(top_10.length + 1);
    for (let j = 0; j < top_10.length + 1; j++) {
      outer[i][j] = 0;
      outerDetail[i][j] = [];
    }
  }
  result.keys().forEach(winner_key => {
    let des = result.get(winner_key);
    let i = top_10.length,
      j = top_10.length;
    if (top_10.indexOf(winner_key) > -1) {
      des.keys().forEach(loser_key => {
        i = winner_map_index[winner_key];
        if (top_10.indexOf(loser_key) > -1) j = winner_map_index[loser_key];
        outer[i][j] += des.get(loser_key).length;
        outerDetail[i][j] = outerDetail[i][j].concat(des.get(loser_key));
      });
    } else {
      des.keys().forEach(loser_key => {
        if (top_10.indexOf(loser_key) > -1) j = winner_map_index[loser_key];
        outer[i][j] += des.get(loser_key).length;
        outerDetail[i][j] = outerDetail[i][j].concat(des.get(loser_key));
      });
    }
  });
  return outerDetail;
};
