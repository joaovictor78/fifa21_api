import PlayerEntity from '../entities/player.entity';

export default interface IPlayersRepository {
    registerPlayer(player: PlayerEntity): Promise<boolean>;
    findAllPlayers({
        page,
        skip,
        filter_by
    }: {
        page: number;
        skip: number;
        filter_by: FilterStudentBy;
    }): Promise<PlayerEntity[]>;
    findBestPlayers({
        page,
        skip,
        top_players_number,
        filter_by
    }: {
        page: number;
        skip: number;
        top_players_number: number;
        filter_by: FilterStudentBy;
    }): Promise<PlayerEntity>;
}
