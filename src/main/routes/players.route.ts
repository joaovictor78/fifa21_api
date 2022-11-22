import { Router } from 'express';
import { adapterFindAllPlayersRoute, adapterFindBestPlayersByNationalityRoute, adapterFindBestPlayersByPositionRoute, adapterFindBestPlayersRoute, adapterFindPlayerByIdRoute, adapterFindPlayersByLeagueRoute, adapterFindPlayersByNameRoute, adapterFindPlayersByNationalityRoute, adapterFindPlayersByPositionRoute, adapterFindPlayersByTeamRoute } from '../adapters/express-route-players.adapter';
import { playersControllerFactory } from '../factories/players.factory';

export default (router: Router): void => {
    router.get(
        '/players',
        adapterFindAllPlayersRoute(playersControllerFactory())
    );

    router.get(
        '/players-by-name',
        adapterFindPlayersByNameRoute(playersControllerFactory())
    );

    router.get(
        '/players-by-team',
        adapterFindPlayersByTeamRoute(playersControllerFactory())
    );

    router.get(
        '/players-by-nationality',
        adapterFindPlayersByNationalityRoute(playersControllerFactory())
    );

    router.get(
        '/players-by-position',
        adapterFindPlayersByPositionRoute(playersControllerFactory())
    );

    router.get(
        '/players-by-league',
        adapterFindPlayersByPositionRoute(playersControllerFactory())
    );

    router.get(
        '/best-players',
        adapterFindBestPlayersRoute(playersControllerFactory())
    );

    router.get(
        '/best-players-by-position',
        adapterFindBestPlayersByPositionRoute(playersControllerFactory())
    );

    router.get(
        '/best-players-by-nationality',
        adapterFindBestPlayersByNationalityRoute(playersControllerFactory())
    );
    
    router.get(
        '/best-players-by-league',
        adapterFindBestPlayersByNationalityRoute(playersControllerFactory())
    );

    router.get(
        '/player-details',
        adapterFindPlayerByIdRoute(playersControllerFactory())
    );
};
