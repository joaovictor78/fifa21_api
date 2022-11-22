import pandas as pd


df = pd.read_csv("data_in_csv/players_21.csv")

df.to_csv('data_in_csv/players.csv',
    sep='\t', encoding='utf-8',
    index=False)


teams = df['club_name'].unique()
teams_df = pd.DataFrame(teams, columns=["team"])

leagues = df['league_name'].unique()
leagues_df = pd.DataFrame(leagues, columns=["league"])
leagues_df.to_csv(
    'data_in_csv/leagues.csv',
    sep='\t', encoding='utf-8',
    index=False
)

player_positions = df['player_positions'].unique()
player_positions_df = pd.DataFrame(
    player_positions, columns=["player_positions"])

player_positions_df.to_csv(
    'data_in_csv/player_positions.csv',
    sep='\t', encoding='utf-8',
    index=False
)


nationalities = df['nationality'].unique()
nationalities_df = pd.DataFrame(
    nationalities, columns=["nationality"])
nationalities_df.to_csv(
    'data_in_csv/nationalities.csv',
    sep='\t', encoding='utf-8',
    index=False
)
