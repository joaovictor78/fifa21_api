import PlayerEntity from '../../domain/entities/player.entity';
import { Either, left, right } from '../../shared/either/either';
import IPlayersRepository from '../../domain/ports/players.repository';
import PlayerModel from '../models/player.model';
import { AppDataSource } from '../db/database.config';
import { Like, Repository } from 'typeorm';
import PlayerParameters from '../../domain/ports/query-parameters/player-parameters';
import { PlayersDTO } from '../../domain/dtos/players.dto';
import { PlayerDTO } from '../../domain/dtos/player.dto';

export default class PlayersRepository implements IPlayersRepository {
    
    private readonly dataSource: Repository<PlayerModel> =
        AppDataSource.getRepository(PlayerModel);

    async registerPlayer(
        player: PlayerParameters
    ): Promise<Either<Error, PlayerEntity>> {
        try {
            const converted_player = PlayerModel.convertToModel(player);
            const player_model = await this.dataSource.save(converted_player);
            const player_entity = PlayerModel.convertToEntity(player_model);
            return right(player_entity);
        } catch (error) {
            return left(Error(error));
        }
    }
    async findAllPlayers({
        page = 1,
        limit = 10
    }: {
        page: number;
        limit: number;
    }): Promise<Either<Error, PlayersDTO>> {
        try {
            const [players_model, total] = await this.dataSource.findAndCount({
                order:{
                    long_name: "ASC"
                },
                take: limit,
                skip: limit * page - limit
            });
            const playersDTO: PlayerDTO[] = Object.values(players_model)
            .map(value => PlayerDTO.convertFromModel(value));
            return right({ total, players: playersDTO });
        } catch (error) {
            throw error;
        }
    }
    async findPlayersByName({
        page = 1,
        limit = 10,
        player_name
    }: {
        page: number;
        limit: number;
        player_name: string;
    }): Promise<Either<Error, PlayersDTO>> {
        try {
            const [players_model, total] = await this.dataSource.findAndCount({
                where: {
                    long_name: Like(`%${player_name}%`)
                },
                take: limit,
                skip: limit * page - limit
            });
            const playersDTO: PlayerDTO[] = Object.values(players_model)
            .map(value => PlayerDTO.convertFromModel(value));
            return right({ total, players: playersDTO });
        } catch (error) {
            throw error;
        }
    }

    async findPlayersByTeam({
        page = 1,
        limit = 10,
        team_id
    }: {
        page: number;
        limit: number;
        team_id: number;
    }): Promise<Either<Error, PlayersDTO>> {
        try {
            const [players_model, total] = await this.dataSource.findAndCount({
                where: {
                    team: {
                        team_id: team_id,
                    }
                },
                take: limit,
                skip: limit * page - limit
            });
            const playersDTO: PlayerDTO[] = Object.values(players_model)
            .map(value => PlayerDTO.convertFromModel(value));
            return right({ total, players: playersDTO });
        } catch (error) {
            throw error;
        }
    }

    async findPlayersByLeague({
        page = 1,
        limit = 10,
        league_id
    }: {
        page: number;
        limit: number;
        league_id: number;
    }): Promise<Either<Error, PlayersDTO>> {
        try {
            const [players_model, total] = await this.dataSource.findAndCount({
                where: {
                    league: {
                        league_id: league_id
                    }
                },
                take: limit,
                skip: limit * page - limit
            });
            const playersDTO: PlayerDTO[] = Object.values(players_model)
            .map(value => PlayerDTO.convertFromModel(value));
            return right({ total, players: playersDTO });
        } catch (error) {
            throw error;
        }
    }

    async findPlayersByNationality({
        page = 1,
        limit = 10,
        nationality_id
    }: {
        page: number;
        limit: number;
        nationality_id: number;
    }): Promise<Either<Error, PlayersDTO>> {
        try {
            const [players_model, total] = await this.dataSource.findAndCount({
                where: {
                    nationality: {
                        nationality_id: nationality_id
                    }
                },
                take: limit,
                skip: limit * page - limit
            });
            const playersDTO: PlayerDTO[] = Object.values(players_model)
            .map(value => PlayerDTO.convertFromModel(value));
            return right({ total, players: playersDTO });
        } catch (error) {
            throw error;
        }
    }

    async findPlayersByPosition({
        page = 1,
        limit = 10,
        position_id
    }: {
        page: number;
        limit: number;
        position_id: number;
    }): Promise<Either<Error, PlayersDTO>> {
        try {
            const [players_model, total] = await this.dataSource.findAndCount({
                where: {
                    player_positions: {
                        position_id: position_id
                    }
                },
                take: limit,
                skip: limit * page - limit
            });
            const playersDTO: PlayerDTO[] = Object.values(players_model)
                .map(value => PlayerDTO.convertFromModel(value));
            return right({ total, players: playersDTO });
        } catch (error) {
            throw error;
        }
    }

    async findPlayerById({
        page = 1,
        limit = 10,
        player_id
    }: {
        page: number;
        limit: number;
        player_id: number;
    }): Promise<Either<Error, PlayersDTO>> {
        try {
            const [players_model, total] = await this.dataSource.findAndCount({
                where: {
                    sofifa_id: player_id
                },
                take: limit,
                skip: limit * page - limit
            });
            const playersDTO: PlayerDTO[] = Object.values(players_model)
                .map(value => PlayerDTO.convertFromModel(value));
            return right({ total, players: playersDTO });
        } catch (error) {
            throw error;
        }
    }
   
   
    async findBestPlayers({
        page,
        skip,
        top_players_number,
    }: {
        page: number;
        skip: number;
        top_players_number: number;
    }): Promise<Either<Error, PlayersDTO>>{
        try {
            const [players_model, total] = await this.dataSource.findAndCount({
                order:{
                    overall: "DESC"
                },
                take: top_players_number,
            });
            const playersDTO: PlayerDTO[] = Object.values(players_model)
                .map(value => PlayerDTO.convertFromModel(value));
            return right({ total, players: playersDTO });
        } catch (error) {
            throw error;
        }
    }

    async findBestPlayersByPosition({
        page,
        skip,
        top_players_number,
        position_id,
    }: {
        page: number;
        skip: number;
        top_players_number: number;
        position_id: number;
    }): Promise<Either<Error, PlayersDTO>>{
        try{
            const players_model = await this.dataSource.query(`
            select p.*, t."name"as club_name, l."name"  as league_name, n."name"  as nationality
            FROM player  p 
            INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id
            INNER JOIN "position" p2  on p2.position_id  = pp.position_id 
            INNER JOIN nationality n on n.nationality_id  = p."nationalityNationalityId"
            INNER JOIN team t on t.team_id  = p."teamTeamId"  
            INNER JOIN league l on l.league_id  = p."leagueLeagueId"
            where pp.position_id = ${position_id}
            order by p.overall desc limit ${top_players_number}`);
            const playersDTO: PlayerDTO[] = players_model;
            return right({ total: playersDTO.length, players: playersDTO });
        } catch(error){
            console.log(error);
            throw error;
        }
       
    }

    async findBestPlayersByNationality({
        page,
        skip,
        top_players_number,
        nationality_id,
    }: {
        page: number;
        skip: number;
        top_players_number: number;
        nationality_id: number;
    }): Promise<Either<Error, PlayersDTO>>{
        try{
            const players_model = await this.dataSource.query(`
            select p.*, t."name"as club_name, l."name"  as league_name, n."name"  as nationality
            FROM player  p 
            INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id
            INNER JOIN "position" p2  on p2.position_id  = pp.position_id 
            INNER JOIN nationality n on n.nationality_id  = p."nationalityNationalityId"
            INNER JOIN team t on t.team_id  = p."teamTeamId"  
            INNER JOIN league l on l.league_id  = p."leagueLeagueId"
            where n.nationality_id  = ${nationality_id}
            order by p.overall desc limit ${top_players_number}`);
            const playersDTO: PlayerDTO[] = players_model;
            return right({ total: playersDTO.length, players: playersDTO });
        } catch(error){
            console.log(error);
            throw error;
        }
    }

    async findBestPlayersByLeague({
        page,
        skip,
        top_players_number,
        league_id,
    }: {
        page: number;
        skip: number;
        league_id: number;
        top_players_number: number;
    }): Promise<Either<Error, PlayersDTO>>{
        try{
            const players_model = await this.dataSource.query(`
            select p.*, t."name"as club_name, l."name"  as league_name, n."name"  as nationality
            FROM player  p 
            INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id
            INNER JOIN "position" p2  on p2.position_id  = pp.position_id 
            INNER JOIN nationality n on n.nationality_id  = p."nationalityNationalityId"
            INNER JOIN team t on t.team_id  = p."teamTeamId"  
            INNER JOIN league l on l.league_id  = p."leagueLeagueId"
            where l.league_id  = ${league_id}
            order by p.overall desc limit ${top_players_number}`);
            const playersDTO: PlayerDTO[] = players_model;
            return right({ total: playersDTO.length, players: playersDTO });
        } catch(error){
            console.log(error);
            throw error;
        }
    }
    
}
