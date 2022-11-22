import { Router } from 'express';
import { adapterFindAllPositionsRoute, adapterFindAllPositionsByNameRoute } from '../adapters/express-route-positions.adapter';
import { positionsControllerFactory } from '../factories/positions.factory';

export default (router: Router): void => {
    router.get(
        '/positions',
        adapterFindAllPositionsRoute(positionsControllerFactory())
    );

    router.get(
        '/positions-by-name',
        adapterFindAllPositionsByNameRoute(positionsControllerFactory())
    );
};