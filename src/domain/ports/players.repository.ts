import { Either } from '../../shared/either/either';
import { PlayersDTO } from '../dtos/players.dto';
import PlayerEntity from '../entities/player.entity';
import PlayerParameters from './query-parameters/player-parameters';

export default interface IPlayersRepository {
    registerPlayer(
        player: PlayerParameters
    ): Promise<Either<Error, PlayerEntity>>;

    findPlayersByName({
        page = 1,
        limit = 10,
        player_name
    }: {
        page: number;
        limit: number;
        player_name: string;
    }): Promise<Either<Error, PlayersDTO>>;

    findPlayersByTeam({
        page = 1,
        limit = 10,
        team_id
    }: {
        page: number;
        limit: number;
        team_id: number;
    }): Promise<Either<Error, PlayersDTO>>;

    findPlayersByLeague({
        page = 1,
        limit = 10,
        league_id
    }: {
        page: number;
        limit: number;
        league_id: number;
    }): Promise<Either<Error, PlayersDTO>>;

    findPlayersByNationality({
        page = 1,
        limit = 10,
        nationality_id
    }: {
        page: number;
        limit: number;
        nationality_id: number;
    }): Promise<Either<Error, PlayersDTO>>;

    findPlayersByPosition({
        page = 1,
        limit = 10,
        position_id
    }: {
        page: number;
        limit: number;
        position_id: number;
    }): Promise<Either<Error, PlayersDTO>>;

    findPlayerById({
        page = 1,
        limit = 10,
        player_id
    }: {
        page: number;
        limit: number;
        player_id: number;
    }): Promise<Either<Error, PlayersDTO>>;

    findBestPlayers({
        page,
        skip,
        top_players_number,
    }: {
        page: number;
        skip: number;
        top_players_number: number;
    }): Promise<Either<Error, PlayersDTO>>;

    findBestPlayersByPosition({
        page,
        skip,
        top_players_number,
        position_id,
    }: {
        page: number;
        skip: number;
        top_players_number: number;
        position_id: number;
    }): Promise<Either<Error, PlayersDTO>>;

    findBestPlayersByNationality({
        page,
        skip,
        top_players_number,
        nationality_id,
    }: {
        page: number;
        skip: number;
        top_players_number: number;
        nationality_id: number;
    }): Promise<Either<Error, PlayersDTO>>;

    findBestPlayersByLeague({
        page,
        skip,
        top_players_number,
        league_id,
    }: {
        page: number;
        skip: number;
        league_id: number;
        top_players_number: number;
    }): Promise<Either<Error, PlayersDTO>>;
}
