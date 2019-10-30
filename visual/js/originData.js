const top_10_2007 = [
  "200003",
  "201320",
  "201347",
  "201421",
  "201345",
  "201403",
  "200033",
  "200748",
  "201290",
  "201294"
];
const top_10_2015 = [
  "201594",
  "201493",
  "201520",
  "202469",
  "201355",
  "201474",
  "201425",
  "201345",
  "200033",
  "200748"
];
const head2head2007 = [
  [0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 5],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 1, 0, 0, 1, 1, 1, 1, 0]
];
const head2head2015 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2],
  [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]
];
const tourney_level_map_circle_radius = {
  G: 20,
  T1: 10,
  T2: 9,
  T3: 4.7,
  T4: 2.8,
  p: 4.7,
  PM: 10,
  W: 12,
  I: 2.8
};
const winner_map_index_2007 = {
  200003: 0,
  200033: 6,
  200748: 7,
  201290: 8,
  201294: 9,
  201320: 1,
  201345: 4,
  201347: 2,
  201403: 5,
  201421: 3
};
const winner_map_index_2015 = {
  200033: 8,
  200748: 9,
  201345: 7,
  201355: 4,
  201425: 6,
  201474: 5,
  201493: 1,
  201520: 2,
  201594: 0,
  202469: 3
};
const top10_final_list_2015_data = [
  {
    tourney_id: "2015-W-INT-CHN-01A-2015",
    winner_id: 201594,
    winner_name: "Simona Halep",
    winner_rank: 3.0,
    loser_id: 201490,
    loser_name: "Timea Bacsinszky",
    loser_rank: 47.0,
    tourney_level: "I"
  },
  {
    tourney_id: "2015-W-PR-UAE-01A-2015",
    winner_id: 201594,
    winner_name: "Simona Halep",
    winner_rank: 4.0,
    loser_id: 201662,
    loser_name: "Karolina Pliskova",
    loser_rank: 18.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-PM-USA-01A-2015",
    winner_id: 201594,
    winner_name: "Simona Halep",
    winner_rank: 3.0,
    loser_id: 201347,
    loser_name: "Jelena Jankovic",
    loser_rank: 21.0,
    tourney_level: "PM"
  },
  {
    tourney_id: "2015-W-P5-CAN-01A-2015",
    winner_id: 202505,
    winner_name: "Belinda Bencic",
    winner_rank: 20.0,
    loser_id: 201594,
    loser_name: "Simona Halep",
    loser_rank: 3.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-P5-USA-01A-2015",
    winner_id: 200033,
    winner_name: "Serena Williams",
    winner_rank: 1.0,
    loser_id: 201594,
    loser_name: "Simona Halep",
    loser_rank: 3.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-P700-USA-01A-2015",
    winner_id: 201493,
    winner_name: "Angelique Kerber",
    winner_rank: 16.0,
    loser_id: 201619,
    loser_name: "Madison Keys",
    loser_rank: 20.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-P700-GER-01A-2015",
    winner_id: 201493,
    winner_name: "Angelique Kerber",
    winner_rank: 14.0,
    loser_id: 201496,
    loser_name: "Caroline Wozniacki",
    loser_rank: 5.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-P700-GBR-01A-2015",
    winner_id: 201493,
    winner_name: "Angelique Kerber",
    winner_rank: 10.0,
    loser_id: 201662,
    loser_name: "Karolina Pliskova",
    loser_rank: 12.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-P700-USA-03A-2015",
    winner_id: 201493,
    winner_name: "Angelique Kerber",
    winner_rank: 14.0,
    loser_id: 201662,
    loser_name: "Karolina Pliskova",
    loser_rank: 11.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-INT-HKG-01A-2015",
    winner_id: 201347,
    winner_name: "Jelena Jankovic",
    winner_rank: 24.0,
    loser_id: 201493,
    loser_name: "Angelique Kerber",
    loser_rank: 9.0,
    tourney_level: "I"
  },
  {
    tourney_id: "2015-W-PR-AUS-02A-2015",
    winner_id: 201520,
    winner_name: "Petra Kvitova",
    winner_rank: 4.0,
    loser_id: 201662,
    loser_name: "Karolina Pliskova",
    loser_rank: 22.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-PM-ESP-01A-2015",
    winner_id: 201520,
    winner_name: "Petra Kvitova",
    winner_rank: 4.0,
    loser_id: 201320,
    loser_name: "Svetlana Kuznetsova",
    loser_rank: 29.0,
    tourney_level: "PM"
  },
  {
    tourney_id: "2015-W-P700-USA-02A-2015",
    winner_id: 201520,
    winner_name: "Petra Kvitova",
    winner_rank: 5.0,
    loser_id: 201425,
    loser_name: "Lucie Safarova",
    loser_rank: 6.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-WT-SIN-01A-2015",
    winner_id: 201474,
    winner_name: "Agnieszka Radwanska",
    winner_rank: 6.0,
    loser_id: 201520,
    loser_name: "Petra Kvitova",
    loser_rank: 5.0,
    tourney_level: "W"
  },
  {
    tourney_id: "2015-W-SL-GBR-01A-2015",
    winner_id: 200033,
    winner_name: "Serena Williams",
    winner_rank: 1.0,
    loser_id: 202469,
    loser_name: "Garbine Muguruza",
    loser_rank: 20.0,
    tourney_level: "G"
  },
  {
    tourney_id: "2015-W-P5-CHN-01A-2015",
    winner_id: 200748,
    winner_name: "Venus Williams",
    winner_rank: 24.0,
    loser_id: 202469,
    loser_name: "Garbine Muguruza",
    loser_rank: 8.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-PM-CHN-01A-2015",
    winner_id: 202469,
    winner_name: "Garbine Muguruza",
    winner_rank: 5.0,
    loser_id: 201490,
    loser_name: "Timea Bacsinszky",
    loser_rank: 17.0,
    tourney_level: "PM"
  },
  {
    tourney_id: "2015-W-SL-USA-01A-2015",
    winner_id: 201355,
    winner_name: "Flavia Pennetta",
    winner_rank: 26.0,
    loser_id: 201311,
    loser_name: "Roberta Vinci",
    loser_rank: 43.0,
    tourney_level: "G"
  },
  {
    tourney_id: "2015-W-P700-GBR-02A-2015",
    winner_id: 202505,
    winner_name: "Belinda Bencic",
    winner_rank: 31.0,
    loser_id: 201474,
    loser_name: "Agnieszka Radwanska",
    loser_rank: 13.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-P700-JPN-01A-2015",
    winner_id: 201474,
    winner_name: "Agnieszka Radwanska",
    winner_rank: 13.0,
    loser_id: 202505,
    loser_name: "Belinda Bencic",
    loser_rank: 15.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-INT-CHN-03A-2015",
    winner_id: 201474,
    winner_name: "Agnieszka Radwanska",
    winner_rank: 6.0,
    loser_id: 203575,
    loser_name: "Danka Kovinic",
    loser_rank: 75.0,
    tourney_level: "I"
  },
  {
    tourney_id: "2015-W-PR-QAT-01A-2015",
    winner_id: 201425,
    winner_name: "Lucie Safarova",
    winner_rank: 15.0,
    loser_id: 201458,
    loser_name: "Victoria Azarenka",
    loser_rank: 48.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-SL-FRA-01A-2015",
    winner_id: 200033,
    winner_name: "Serena Williams",
    winner_rank: 1.0,
    loser_id: 201425,
    loser_name: "Lucie Safarova",
    loser_rank: 13.0,
    tourney_level: "G"
  },
  {
    tourney_id: "2015-W-PR-AUS-01A-2015",
    winner_id: 201345,
    winner_name: "Maria Sharapova",
    winner_rank: 2.0,
    loser_id: 201421,
    loser_name: "Ana Ivanovic",
    loser_rank: 7.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-SL-AUS-01A-2015",
    winner_id: 200033,
    winner_name: "Serena Williams",
    winner_rank: 1.0,
    loser_id: 201345,
    loser_name: "Maria Sharapova",
    loser_rank: 2.0,
    tourney_level: "G"
  },
  {
    tourney_id: "2015-W-P5-ITA-01A-2015",
    winner_id: 201345,
    winner_name: "Maria Sharapova",
    winner_rank: 3.0,
    loser_id: 201521,
    loser_name: "Carla Suarez Navarro",
    loser_rank: 10.0,
    tourney_level: "P"
  },
  {
    tourney_id: "2015-W-PM-USA-02A-2015",
    winner_id: 200033,
    winner_name: "Serena Williams",
    winner_rank: 1.0,
    loser_id: 201521,
    loser_name: "Carla Suarez Navarro",
    loser_rank: 12.0,
    tourney_level: "PM"
  },
  {
    tourney_id: "2015-W-INT-NZL-01A-2015",
    winner_id: 200748,
    winner_name: "Venus Williams",
    winner_rank: 19.0,
    loser_id: 201496,
    loser_name: "Caroline Wozniacki",
    loser_rank: 8.0,
    tourney_level: "I"
  },
  {
    tourney_id: "2015-W-WET-CHN-01A-2015",
    winner_id: 200748,
    winner_name: "Venus Williams",
    winner_rank: 11.0,
    loser_id: 201662,
    loser_name: "Karolina Pliskova",
    loser_rank: 13.0,
    tourney_level: "P"
  }
];
const top10_final_list_data = [
  {
    tourney_id: "2007-W-T2-UAE-01A-2007",
    winner_id: 200003,
    winner_name: "Justine Henin",
    winner_rank: 2.0,
    loser_id: 200065,
    loser_name: "Amelie Mauresmo",
    loser_rank: 3.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-T2-QAT-01A-2007",
    winner_id: 200003,
    winner_name: "Justine Henin",
    winner_rank: 2.0,
    loser_id: 201320,
    loser_name: "Svetlana Kuznetsova",
    loser_rank: 5.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-T1-USA-02A-2007",
    winner_id: 200033,
    winner_name: "Serena Williams",
    winner_rank: 18.0,
    loser_id: 200003,
    loser_name: "Justine Henin",
    loser_rank: 1.0,
    tourney_level: "T1"
  },
  {
    tourney_id: "2007-W-T2-POL-01A-2007",
    winner_id: 200003,
    winner_name: "Justine Henin",
    winner_rank: 1.0,
    loser_id: 201416,
    loser_name: "Alona Bondarenko",
    loser_rank: 40.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-SL-FRA-01A-2007",
    winner_id: 200003,
    winner_name: "Justine Henin",
    winner_rank: 1.0,
    loser_id: 201421,
    loser_name: "Ana Ivanovic",
    loser_rank: 7.0,
    tourney_level: "G"
  },
  {
    tourney_id: "2007-W-SL-USA-01A-2007",
    winner_id: 200003,
    winner_name: "Justine Henin",
    winner_rank: 1.0,
    loser_id: 201320,
    loser_name: "Svetlana Kuznetsova",
    loser_rank: 4.0,
    tourney_level: "G"
  },
  {
    tourney_id: "2007-W-T2-GBR-01A-2007",
    winner_id: 200003,
    winner_name: "Justine Henin",
    winner_rank: 1.0,
    loser_id: 200065,
    loser_name: "Amelie Mauresmo",
    loser_rank: 4.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-T1-CAN-01A-2007",
    winner_id: 200003,
    winner_name: "Justine Henin",
    winner_rank: 1.0,
    loser_id: 201347,
    loser_name: "Jelena Jankovic",
    loser_rank: 3.0,
    tourney_level: "T1"
  },
  {
    tourney_id: "2007-W-T2-GER-01A-2007",
    winner_id: 200003,
    winner_name: "Justine Henin",
    winner_rank: 1.0,
    loser_id: 201364,
    loser_name: "Tatiana Golovin",
    loser_rank: 19.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-T1-SUI-01A-2007",
    winner_id: 200003,
    winner_name: "Justine Henin",
    winner_rank: 1.0,
    loser_id: 201364,
    loser_name: "Tatiana Golovin",
    loser_rank: 18.0,
    tourney_level: "T1"
  },
  {
    tourney_id: "2007-W-WT-ESP-01A-2007",
    winner_id: 200003,
    winner_name: "Justine Henin",
    winner_rank: 1.0,
    loser_id: 201345,
    loser_name: "Maria Sharapova",
    loser_rank: 6.0,
    tourney_level: "W"
  },
  {
    tourney_id: "2007-W-T1-USA-01A-2007",
    winner_id: 201290,
    winner_name: "Daniela Hantuchova",
    winner_rank: 18.0,
    loser_id: 201320,
    loser_name: "Svetlana Kuznetsova",
    loser_rank: 4.0,
    tourney_level: "T1"
  },
  {
    tourney_id: "2007-W-T1-ITA-01A-2007",
    winner_id: 201347,
    winner_name: "Jelena Jankovic",
    winner_rank: 5.0,
    loser_id: 201320,
    loser_name: "Svetlana Kuznetsova",
    loser_rank: 3.0,
    tourney_level: "T1"
  },
  {
    tourney_id: "2007-W-T1-GER-01A-2007",
    winner_id: 201421,
    winner_name: "Ana Ivanovic",
    winner_rank: 16.0,
    loser_id: 201320,
    loser_name: "Svetlana Kuznetsova",
    loser_rank: 4.0,
    tourney_level: "T1"
  },
  {
    tourney_id: "2007-W-T2-USA-04A-2007",
    winner_id: 201320,
    winner_name: "Svetlana Kuznetsova",
    winner_rank: 4.0,
    loser_id: 201497,
    loser_name: "Agnes Szavay",
    loser_rank: 41.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-T4-NZL-01A-2007",
    winner_id: 201347,
    winner_name: "Jelena Jankovic",
    winner_rank: 12.0,
    loser_id: 201329,
    loser_name: "Vera Zvonareva",
    loser_rank: 24.0,
    tourney_level: "T4"
  },
  {
    tourney_id: "2007-W-T2-AUS-01A-2007",
    winner_id: 200079,
    winner_name: "Kim Clijsters",
    winner_rank: 5.0,
    loser_id: 201347,
    loser_name: "Jelena Jankovic",
    loser_rank: 12.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-T1-USA-03A-2007",
    winner_id: 201347,
    winner_name: "Jelena Jankovic",
    winner_rank: 9.0,
    loser_id: 201336,
    loser_name: "Dinara Safina",
    loser_rank: 12.0,
    tourney_level: "T1"
  },
  {
    tourney_id: "2007-W-T3-GBR-01A-2007",
    winner_id: 201347,
    winner_name: "Jelena Jankovic",
    winner_rank: 3.0,
    loser_id: 201345,
    loser_name: "Maria Sharapova",
    loser_rank: 2.0,
    tourney_level: "T3"
  },
  {
    tourney_id: "2007-W-T3-NED-01A-2007",
    winner_id: 201403,
    winner_name: "Anna Chakvetadze",
    winner_rank: 8.0,
    loser_id: 201347,
    loser_name: "Jelena Jankovic",
    loser_rank: 3.0,
    tourney_level: "T3"
  },
  {
    tourney_id: "2007-W-T2-CHN-01A-2007",
    winner_id: 201497,
    winner_name: "Agnes Szavay",
    winner_rank: 23.0,
    loser_id: 201347,
    loser_name: "Jelena Jankovic",
    loser_rank: 3.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-T1-JPN-01A-2007",
    winner_id: 200001,
    winner_name: "Martina Hingis",
    winner_rank: 6.0,
    loser_id: 201421,
    loser_name: "Ana Ivanovic",
    loser_rank: 16.0,
    tourney_level: "T1"
  },
  {
    tourney_id: "2007-W-T2-USA-03A-2007",
    winner_id: 201421,
    winner_name: "Ana Ivanovic",
    winner_rank: 5.0,
    loser_id: 200069,
    loser_name: "Nadia Petrova",
    loser_rank: 9.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-T2-LUX-01A-2007",
    winner_id: 201421,
    winner_name: "Ana Ivanovic",
    winner_rank: 6.0,
    loser_id: 201290,
    loser_name: "Daniela Hantuchova",
    loser_rank: 10.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-SL-AUS-01A-2007",
    winner_id: 200033,
    winner_name: "Serena Williams",
    winner_rank: 81.0,
    loser_id: 201345,
    loser_name: "Maria Sharapova",
    loser_rank: 2.0,
    tourney_level: "G"
  },
  {
    tourney_id: "2007-W-T1-USA-04A-2007",
    winner_id: 201345,
    winner_name: "Maria Sharapova",
    winner_rank: 2.0,
    loser_id: 200067,
    loser_name: "Patty Schnyder",
    loser_rank: 17.0,
    tourney_level: "T1"
  },
  {
    tourney_id: "2007-W-T4-AUS-01A-2007",
    winner_id: 201403,
    winner_name: "Anna Chakvetadze",
    winner_rank: 13.0,
    loser_id: 201473,
    loser_name: "Vasilisa Bardina",
    loser_rank: 70.0,
    tourney_level: "T4"
  },
  {
    tourney_id: "2007-W-T3-USA-02A-2007",
    winner_id: 201403,
    winner_name: "Anna Chakvetadze",
    winner_rank: 8.0,
    loser_id: 201352,
    loser_name: "Akiko Morigami",
    loser_rank: 61.0,
    tourney_level: "T3"
  },
  {
    tourney_id: "2007-W-T2-USA-02A-2007",
    winner_id: 201403,
    winner_name: "Anna Chakvetadze",
    winner_rank: 7.0,
    loser_id: 201420,
    loser_name: "Sania Mirza",
    loser_rank: 35.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-T1-RUS-01A-2007",
    winner_id: 200108,
    winner_name: "Elena Dementieva",
    winner_rank: 14.0,
    loser_id: 200033,
    loser_name: "Serena Williams",
    loser_rank: 7.0,
    tourney_level: "T1"
  },
  {
    tourney_id: "2007-W-T3-USA-01A-2007",
    winner_id: 200748,
    winner_name: "Venus Williams",
    winner_rank: 54.0,
    loser_id: 201424,
    loser_name: "Shahar Peer",
    loser_rank: 17.0,
    tourney_level: "T3"
  },
  {
    tourney_id: "2007-W-SL-GBR-01A-2007",
    winner_id: 200748,
    winner_name: "Venus Williams",
    winner_rank: 31.0,
    loser_id: 201294,
    loser_name: "Marion Bartoli",
    loser_rank: 19.0,
    tourney_level: "G"
  },
  {
    tourney_id: "2007-W-T4-KOR-01A-2007",
    winner_id: 200748,
    winner_name: "Venus Williams",
    winner_rank: 9.0,
    loser_id: 201373,
    loser_name: "Maria Kirilenko",
    loser_rank: 29.0,
    tourney_level: "T4"
  },
  {
    tourney_id: "2007-W-T3-JPN-01A-2007",
    winner_id: 200043,
    winner_name: "Virginie Razzano",
    winner_rank: 33.0,
    loser_id: 200748,
    loser_name: "Venus Williams",
    loser_rank: 8.0,
    tourney_level: "T3"
  },
  {
    tourney_id: "2007-W-T3-INA-01A-2007",
    winner_id: 200128,
    winner_name: "Lindsay Davenport",
    winner_rank: 234.0,
    loser_id: 201290,
    loser_name: "Daniela Hantuchova",
    loser_rank: 12.0,
    tourney_level: "T3"
  },
  {
    tourney_id: "2007-W-T2-AUT-01A-2007",
    winner_id: 201290,
    winner_name: "Daniela Hantuchova",
    winner_rank: 10.0,
    loser_id: 200067,
    loser_name: "Patty Schnyder",
    loser_rank: 17.0,
    tourney_level: "T2"
  },
  {
    tourney_id: "2007-W-T4-CZE-01A-2007",
    winner_id: 201352,
    winner_name: "Akiko Morigami",
    winner_rank: 60.0,
    loser_id: 201294,
    loser_name: "Marion Bartoli",
    loser_rank: 24.0,
    tourney_level: "T4"
  }
];
