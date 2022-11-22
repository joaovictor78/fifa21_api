import BestTeamWithPlayersRepository from '../../infra/repositories/best-team.repository';
import BestTeamWithPlayersController from '../../web-controllers/best-team-with-players.controller';

export const bestTeamsWithPlayersControllerFactory = (): BestTeamWithPlayersController => {
    const bestTeamsRepository = new BestTeamWithPlayersRepository();
    const bestTeamsController = new BestTeamWithPlayersController(bestTeamsRepository);
    return bestTeamsController;
};
