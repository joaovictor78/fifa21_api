import { Either, right } from '../../shared/either/either';
import { Repository } from 'typeorm';
import IBestTeamWithPlayersRepository from '../../domain/ports/best-team-with-players.repository';
import { AppDataSource } from '../db/database.config';
import PlayerModel from '../models/player.model';
import BestTeamDTO from '../../domain/dtos/best-team.dto';
import { PlayerDTO } from '../../domain/dtos/player.dto';

export default class BestTeamWithPlayersRepository
    implements IBestTeamWithPlayersRepository
{
    private readonly dataSource: Repository<PlayerModel> =
    AppDataSource.getRepository(PlayerModel);

    async findBestTeamWithPlayers(): Promise<Either<Error, BestTeamDTO>> {
        try {
           const gk: PlayerDTO = await this.dataSource.query(`
           select p.*, t."name"as club_name, l."name"  as league_name, n."name"  as nationality
           FROM player  p 
           INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id
           INNER JOIN "position" p2  on p2.position_id  = pp.position_id 
           INNER JOIN nationality n on n.nationality_id  = p."nationalityNationalityId"
           INNER JOIN team t on t.team_id  = p."teamTeamId"  
           INNER JOIN league l on l.league_id  = p."leagueLeagueId"
           where p2."name" = 'GK' 
           order by p.potential  desc limit 1`);
           const cb: PlayerDTO[] = await this.findBestPlayer('cb', 2) as PlayerDTO[];
           const lb: PlayerDTO  = await this.findBestPlayer('lb', 1) as PlayerDTO;
           const rb: PlayerDTO = await this.findBestPlayer('rb', 1) as PlayerDTO;
           const cm: PlayerDTO[] = await this.findBestPlayer('cm', 2) as PlayerDTO[];
           const lm: PlayerDTO = await this.findBestPlayer('lm', 1) as PlayerDTO;
           const rm: PlayerDTO = await this.findBestPlayer('rm', 1) as PlayerDTO;
           const sf: PlayerDTO[] = await this.findBestPlayer('sf', 2) as PlayerDTO[];
           const teamDTO: BestTeamDTO ={gk, cb, lb, rb, cm: cm, lm, rm, sf};
          return right(teamDTO);
        
        } catch (error) {
            throw error;
        }
    }
    
    async findBestTeamWithPlayersByLeague(league_id: number): Promise<Either<Error, BestTeamDTO>> {
        try{
            const gk: PlayerDTO = await this.dataSource.query(`
            select p.*, t."name"as club_name, l."name"  as league_name, n."name"  as nationality
            FROM player  p 
            INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id
            INNER JOIN "position" p2  on p2.position_id  = pp.position_id 
            INNER JOIN nationality n on n.nationality_id  = p."nationalityNationalityId"
            INNER JOIN team t on t.team_id  = p."teamTeamId"  
            INNER JOIN league l on l.league_id  = p."leagueLeagueId"
            where p2."name" = 'GK' and  l."league_id"  = ${league_id}
            order by p.potential  desc limit 1`);
            const cb: PlayerDTO[] = await this.findBestPlayerByLeague('cb', 2, league_id) as PlayerDTO[];
            const lb: PlayerDTO  = await this.findBestPlayerByLeague('lb', 1, league_id) as PlayerDTO;
            const rb: PlayerDTO = await this.findBestPlayerByLeague('rb', 1, league_id) as PlayerDTO;
            const cm: PlayerDTO[] = await this.findBestPlayerByLeague('cm', 2, league_id) as PlayerDTO[];
            const lm: PlayerDTO = await this.findBestPlayerByLeague('lm', 1, league_id) as PlayerDTO;
            const rm: PlayerDTO = await this.findBestPlayerByLeague('rm', 1, league_id) as PlayerDTO;
            const sf: PlayerDTO[] = await this.findBestPlayerByLeague('sf', 2, league_id) as PlayerDTO[];
            const teamDTO: BestTeamDTO ={gk, cb, lb, rb, cm: cm, lm, rm, sf};
           return right(teamDTO);
        } catch(error){
            throw error;
        }
    }
    
    async findBestTeamWithPlayersByNationality(nationality_id: number): Promise<Either<Error, BestTeamDTO>> {
        try{
            const gk: PlayerDTO = await this.dataSource.query(`
            select p.*, t."name"as club_name, l."name"  as league_name, n."name"  as nationality
            FROM player  p 
            INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id
            INNER JOIN "position" p2  on p2.position_id  = pp.position_id 
            INNER JOIN nationality n on n.nationality_id  = p."nationalityNationalityId"
            INNER JOIN team t on t.team_id  = p."teamTeamId"  
            INNER JOIN league l on l.league_id  = p."leagueLeagueId"
            where p2."name" = 'GK' and  l."nationality_id"  = ${nationality_id}
            order by p.potential  desc limit 1`);
            const cb: PlayerDTO[] = await this.findBestPlayerByLeague('cb', 2, nationality_id) as PlayerDTO[];
            const lb: PlayerDTO  = await this.findBestPlayerByLeague('lb', 1, nationality_id) as PlayerDTO;
            const rb: PlayerDTO = await this.findBestPlayerByLeague('rb', 1, nationality_id) as PlayerDTO;
            const cm: PlayerDTO[] = await this.findBestPlayerByLeague('cm', 2, nationality_id) as PlayerDTO[];
            const lm: PlayerDTO = await this.findBestPlayerByLeague('lm', 1, nationality_id) as PlayerDTO;
            const rm: PlayerDTO = await this.findBestPlayerByLeague('rm', 1, nationality_id) as PlayerDTO;
            const sf: PlayerDTO[] = await this.findBestPlayerByLeague('sf', 2, nationality_id) as PlayerDTO[];
            const teamDTO: BestTeamDTO ={gk, cb, lb, rb, cm: cm, lm, rm, sf};
           return right(teamDTO);
        } catch(error){
            throw error;
        }
    }

    private  async findBestPlayer(position: string, limit=1): Promise<PlayerDTO | PlayerDTO[]>{
        return await this.dataSource.query(`
           select  p.*, t."name"as club_name, l."name"  as league_name, n."name"  as nationality 
           FROM player p
           INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id
           INNER JOIN position p2  on p2.position_id  = pp.position_id 
           INNER JOIN nationality n on n.nationality_id  = p."nationalityNationalityId"
           INNER JOIN team t on t.team_id  = p."teamTeamId"  
           INNER JOIN league l on l.league_id  = p."leagueLeagueId"
           order by substring('${position}', 1, 2) desc limit ${limit}`);
    }
    private  async findBestPlayerByLeague(position: string, limit=1, league_id: number): Promise<PlayerDTO | PlayerDTO[]>{
        return await this.dataSource.query(`
           select  p.*, t."name"as club_name, l."name"  as league_name, n."name"  as nationality 
           FROM player p
           INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id
           INNER JOIN position p2  on p2.position_id  = pp.position_id 
           INNER JOIN nationality n on n.nationality_id  = p."nationalityNationalityId"
           INNER JOIN team t on t.team_id  = p."teamTeamId"  
           INNER JOIN league l on l.league_id  = p."leagueLeagueId"
           where  l."league_id"  = ${league_id}
           order by substring('${position}', 1, 2) desc limit ${limit}`);
    }
    private  async findBestPlayerByNationality(position: string, limit=1, nationality_id: number): Promise<PlayerDTO | PlayerDTO[]>{
        return await this.dataSource.query(`
           select  p.*, t."name"as club_name, l."name"  as league_name, n."name"  as nationality 
           FROM player p
           INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id
           INNER JOIN position p2  on p2.position_id  = pp.position_id 
           INNER JOIN nationality n on n.nationality_id  = p."nationalityNationalityId"
           INNER JOIN team t on t.team_id  = p."teamTeamId"  
           INNER JOIN league l on l.league_id  = p."leagueLeagueId"
           where n."nationality_id" = ${nationality_id}
           order by substring('${position}', 1, 2) desc limit ${limit}`);
    }
}

