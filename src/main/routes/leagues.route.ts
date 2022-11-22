import { Router } from 'express';
import { adapterFindAllLeaguesRoute, adapterFindAllLeaguesByNameRoute } from '../adapters/express-route-leagues.adapter';
import { leaguesControllerFactory } from '../factories/leagues.factory';

export default (router: Router): void => {
    router.get(
        '/leagues',
        adapterFindAllLeaguesRoute(leaguesControllerFactory())
    );

    router.get(
        '/leagues-by-name',
        adapterFindAllLeaguesByNameRoute(leaguesControllerFactory())
    );
};