import LeagueEntity from '../../domain/entities/league.entity';
import ILeaguesRepository from '../../domain/ports/leagues.repository';
import { Like, QueryFailedError, Repository, TypeORMError } from 'typeorm';
import LeagueModel from '../models/league.model';
import { AppDataSource } from '../db/database.config';
import { Either, left, right } from '../../shared/either/either';
import LeagueAlreadyExistsFailure from '../errors/league_already_exists.error';

export default class LeaguesRepository implements ILeaguesRepository {
  
    private readonly dataSource: Repository<LeagueModel> =
        AppDataSource.getRepository(LeagueModel);
    async registerLeague(league: string): Promise<Either<Error, LeagueEntity>> {
        try {
            const leagueModel = LeagueModel.convertToModel(league);
            const result: LeagueModel = await this.dataSource.save(leagueModel);
            return right(new LeagueEntity(result));
        } catch (error) {
            if (error instanceof QueryFailedError) {
                if (error.driverError.code == 23505) {
                    error.message = error.driverError.detail;
                    return left(new LeagueAlreadyExistsFailure(error));
                } else {
                    throw error;
                }
            }
            throw error;
        }
    }

    async findAllLeagues({ page = 1, limit = 10 }: { page: number; limit: number }) {
        try{
            const [teams_model, total] = await this.dataSource.findAndCount({
                order: {
                    name: "ASC"
                },
                take: limit,
                skip: limit * page - limit
            });
            return right({ total, teams_model });
        }
        catch (error) {
            throw error;
        }
    }

    async findLeaguesByName({
        page = 1,
        limit = 10,
        league_name
    }: {
        page: number;
        limit: number,
        league_name: string
    }) {
        try{
            const [leagues_model, total] = await this.dataSource.findAndCount({
                where: {
                    name: Like(`%${league_name}%`)
                },
                take: limit,
                skip: limit * page - limit
            });
            return right({ total, leagues_model });
        }
        catch (error) {
            throw error;
        }
    }
}
