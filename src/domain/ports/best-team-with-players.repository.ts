import { Either } from '../../shared/either/either';
import BestTeamDTO from '../dtos/best-team.dto';

export default interface IBestTeamWithPlayersRepository {
    findBestTeamWithPlayers():Promise<Either<Error, BestTeamDTO>>;
    findBestTeamWithPlayersByLeague(league_id: number):Promise<Either<Error, BestTeamDTO>>;
    findBestTeamWithPlayersByNationality(nationality_id: number):Promise<Either<Error, BestTeamDTO>>;

}
