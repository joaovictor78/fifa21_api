import { PlayerDTO } from './player.dto';

export type PlayersDTO = {
    total: number;
    players: PlayerDTO[];
};
