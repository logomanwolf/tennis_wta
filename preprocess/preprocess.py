# %%
import pandas as pd
import numpy as np

matches = pd.read_csv('.\\wta_matches_2015.csv')
rankings_colname = ['date', 'rank', 'player_id', 'score', 'remarks']
rankings = pd.read_csv('.\\wta_rankings_10s.csv', header=None,
                       names=rankings_colname, dtype={'player_id': str})
finals = matches[matches['round'] == 'F']
top10 = rankings[(rankings['date'] == 20151228) & (
    rankings['rank'] > 0) & (rankings['rank'] < 11)]
top10.sort_values(by=["rank"])
top10_player_id = top10['player_id']
# top10 = rankings[(rankings['date']=='20071224')];
# here top10_final_list refers to who entrolls the final top 10 list at the end of the year
top10_final_list = []
for index, value in top10_player_id.iteritems():
    temp_enroll_final = finals[(finals['winner_id'] == int(value)) | (finals['loser_id'] == int(value))][[
        'tourney_id', 'winner_id', 'winner_name', 'winner_rank', 'loser_id', 'loser_name', 'loser_rank', 'tourney_level']]
    # temp_enroll_final2 = finals[(finals['loser_id'] == value) & ((finals['winner_id'] in list(top10_player_id.values)) == False)][[
    #     'tourney_id', 'winner_id', 'winner_name', 'winner_rank', 'loser_id', 'loser_name', 'loser_rank']]
    if temp_enroll_final.empty == False:
        top10_final_list.append(temp_enroll_final)
    # if temp_enroll_final2.empty == False:
    #     top10_final_list.append(temp_enroll_final2)
top10_final_list = pd.concat(top10_final_list).drop_duplicates()
top10_final_list.to_json(
    path_or_buf='.\\top10_final_list_2015.json', orient="records")
# print(rankings)
print(top10_player_id.values.tolist())
# print(top10_final_list)


# %%
