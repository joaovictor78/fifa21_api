import PlayersRepository from '../../infra/repositories/players.repository';
import PlayersController from '../../web-controllers/players.controller';

export const playersControllerFactory = (): PlayersController => {
    const playersRepository = new PlayersRepository();
    const playersController = new PlayersController(playersRepository);
    return playersController;
};
