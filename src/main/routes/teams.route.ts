import { Router } from 'express';
import { adapterFindAllTeamsRoute, adapterFindAllTeamsByNameRoute } from '../adapters/express-route-teams.adapter';
import { teamsControllerFactory } from '../factories/teams.factory';

export default (router: Router): void => {
    router.get(
        '/teams',
        adapterFindAllTeamsRoute(teamsControllerFactory())
    );

    router.get(
        '/teams-by-name',
        adapterFindAllTeamsByNameRoute(teamsControllerFactory())
    );
};