import LeaguesRepository from '../../infra/repositories/leagues.repository';
import LeaguesController from '../../web-controllers/leagues.controller';

export const leaguesControllerFactory = (): LeaguesController => {
    const leaguesRepository = new LeaguesRepository();
    const leaguesController = new LeaguesController(leaguesRepository);
    return leaguesController;
};