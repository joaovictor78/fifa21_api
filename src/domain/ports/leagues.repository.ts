import { Either } from '../../shared/either/either';
import LeagueEntity from '../entities/league.entity';

export default interface ILeaguesRepository {
    registerLeague(league: string): Promise<Either<Error, LeagueEntity>>;
    findAllLeagues({ page, limit }: { page: number; limit: number });
    findLeaguesByName({ page, limit, league_name }: { page: number; limit: number, league_name: string });
}
