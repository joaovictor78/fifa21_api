import { Router } from 'express';
import { adapterFindBestTeamWithPlayersByLeagueRoute, adapterFindBestTeamWithPlayersByNationalityRoute, adapterFindBestTeamWithPlayersRoute } from '../adapters/express-route-best-team.adapter';
import { bestTeamsWithPlayersControllerFactory } from '../factories/best-teams.factory';

export default (router: Router): void => {
    router.get(
        '/best-teams',
        adapterFindBestTeamWithPlayersRoute(bestTeamsWithPlayersControllerFactory())
    );
    router.get(
        '/best-teams-by-league',
        adapterFindBestTeamWithPlayersByLeagueRoute(bestTeamsWithPlayersControllerFactory())
    );
    router.get(
        '/best-teams-by-nationality',
        adapterFindBestTeamWithPlayersByNationalityRoute(bestTeamsWithPlayersControllerFactory())
    );
};
