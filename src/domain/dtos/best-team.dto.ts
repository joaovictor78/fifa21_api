import { PlayerDTO } from './player.dto';

export default class BestTeamDTO {
    gk: PlayerDTO;
    cb: PlayerDTO[];
    lb: PlayerDTO;
    rb: PlayerDTO;
    cm: PlayerDTO[];
    lm: PlayerDTO;
    rm: PlayerDTO;
    sf: PlayerDTO[];
}
