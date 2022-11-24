import TeamEntity from '../../domain/entities/team.entity';
import ITeamsRepository from '../../domain/ports/teams.repository';
import { Either, left, right } from '../../shared/either/either';
import { Like, QueryFailedError, Repository } from 'typeorm';
import { AppDataSource } from '../db/database.config';
import TeamModel from '../models/team.model';
import TeamAlreadyExistsFailure from '../errors/team_already_exists.error';

export default class TeamsRepository implements ITeamsRepository {
    private readonly dataSource: Repository<TeamModel> =
        AppDataSource.getRepository(TeamModel);
    async registerTeam(team: string): Promise<Either<Error, TeamEntity>> {
        try {
            const teamModel = TeamModel.convertToModel(team);
            const result: TeamModel = await this.dataSource.save(teamModel);
            return right(new TeamEntity(result));
        } catch (error) {
            if (error instanceof QueryFailedError) {
                if (error.driverError.code == 23505) {
                    error.message = error.driverError.detail;
                    return left(new TeamAlreadyExistsFailure(error));
                } else {
                    throw error;
                }
            }
            throw error;
        }
    }

    async findAllTeams({ page = 1, limit = 10 }: { page: number; limit: number }) {
        try{
            const [teams_model, total] = await this.dataSource.findAndCount({
                order: {
                    name: "ASC"
                },
                take: limit,
                skip: limit * page - limit
            });
            return right({ total, teams: teams_model });
        }
        catch (error) {
            throw error;
        }
    }

    async findTeamsByName({
        page = 1,
        limit = 10,
        team_name
    }: {
        page: number;
        limit: number,
        team_name: string
    }) {
        try{
            const [teams_model, total] = await this.dataSource.findAndCount({
                where: {
                    name: Like(`%${team_name}%`)
                },
                take: limit,
                skip: limit * page - limit
            });
            return right({ total, teams: teams_model });
        }
        catch (error) {
            throw error;
        }
    }
}
