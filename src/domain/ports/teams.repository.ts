import { Either } from '../../shared/either/either';
import TeamEntity from '../entities/team.entity';

export default interface ITeamsRepository {
    registerTeam(team: string): Promise<Either<Error, TeamEntity>>;
    findAllTeams({ page, limit }: { page: number; limit: number });
    findTeamsByName({ page, limit, team_name }: { page: number; limit: number, team_name: string });
}
