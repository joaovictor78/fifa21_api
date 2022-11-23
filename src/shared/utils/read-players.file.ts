import fs from 'fs';
import * as csv from 'fast-csv';
import LeaguesRepository from '../../infra/repositories/leagues.repository';
import TeamsRepository from '../../infra/repositories/teams.repository';
import { TypeOrmPgHelper } from '../../infra/db/typeorm-pg-helper';
import NationalitiesRepository from '../../infra/repositories/nationalities.repository';
import PositionsRepository from '../../infra/repositories/positions.repository';
import PlayersRepository from '../../infra/repositories/players.repository';
import PositionModel from '../../infra/models/position.model';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../infra/db/database.config';
import PlayerParameters from '../../domain/ports/query-parameters/player-parameters';
import LeagueModel from '../../infra/models/league.model';
import TeamModel from '../../infra/models/team.model';
import NationalityModel from '../../infra/models/nationality.model';

const leaguesRepository = new LeaguesRepository();
const teamsRepository = new TeamsRepository();
const nationalitiesRepository = new NationalitiesRepository();
const positionsRepository = new PositionsRepository();
const playersRepository = new PlayersRepository();

async function saveCsvInDatabase(
    fileName: string,
    callBack: (data) => void,
    delimiter = '\n'
) {
    const fileStream = fs.createReadStream(`data_in_csv/${fileName}`);
    const csvFile = csv
        .parse({
            headers: true,
            delimiter: delimiter,
            quote: '"'
        })
        .on('data', async data => {
            callBack(data);
        });
    fileStream.pipe(csvFile);
}

async function start() {
    await TypeOrmPgHelper.connect();
    saveCsvInDatabase('leagues.csv', async data => {
        const leagueOrFailure = await leaguesRepository.registerLeague(
            data.league
        );
        if (leagueOrFailure.isLeft()) {
            console.log('Error:', leagueOrFailure.value.message);
        }
    });
    saveCsvInDatabase('teams.csv', async data => {
        const teamsOrFailure = await teamsRepository.registerTeam(data.team);
        if (teamsOrFailure.isLeft()) {
            console.log('Error:', teamsOrFailure.value.message);
        }
    });
    saveCsvInDatabase('nationalities.csv', async data => {
        const nationalitiesOrFailure =
            await nationalitiesRepository.registerNationality(data.nationality);
        if (nationalitiesOrFailure.isLeft()) {
            console.log('Error:', nationalitiesOrFailure.value.message);
        }
    });
    saveCsvInDatabase('player_positions.csv', async data => {
        data.player_positions.split(',').map(async position => {
            const positionsOrFailure =
                await positionsRepository.registerPosition(position);
            if (positionsOrFailure.isLeft()) {
                console.log('Error:', positionsOrFailure.value.message);
            }
        });
    });
    saveCsvInDatabase(
        'players_21.csv',
        async data => {
            data.player_positions_id = [];
            if (data.player_positions.length != 0) {
                data.player_positions_id = await Promise.all(
                    data.player_positions
                        .split(',')
                        .map(async (value: string) => {
                            const repository: Repository<PositionModel> =
                                AppDataSource.getRepository(PositionModel);
                            const { position_id } = await repository.findOne({
                                where: {
                                    name: value
                                }
                            });
                            return position_id;
                        })
                );
            }
            const leagueRepository: Repository<LeagueModel> =
                AppDataSource.getRepository(LeagueModel);
            const { league_id } = await leagueRepository.findOne({
                where: {
                    name: data.league_name
                }
            });
            const teamRepository: Repository<TeamModel> =
                AppDataSource.getRepository(TeamModel);
            const { team_id } = await teamRepository.findOne({
                where: {
                    name: data.club_name
                }
            });
            const nationalityRepository: Repository<NationalityModel> =
                AppDataSource.getRepository(NationalityModel);
            const { nationality_id } = await nationalityRepository.findOne({
                where: {
                    name: data.nationality
                }
            });

            data.league_id = league_id;
            data.team_id = team_id;
            data.nationality_id = nationality_id;

            const playerOrFailure = await playersRepository.registerPlayer(
                new PlayerParameters(data)
            );
            if (playerOrFailure.isLeft()) {
                console.log('Error:', playerOrFailure.value.message);
            }
        },
        ','
    );
}

start();
