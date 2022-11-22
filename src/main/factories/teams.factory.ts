import TeamsRepository from '../../infra/repositories/teams.repository';
import TeamsController from '../../web-controllers/teams.controller';

export const teamsControllerFactory = (): TeamsController => {
    const teamsRepository = new TeamsRepository();
    const teamsController = new TeamsController(teamsRepository);
    return teamsController;
};