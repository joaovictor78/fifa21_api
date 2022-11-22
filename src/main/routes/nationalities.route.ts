import { Router } from 'express';
import { adapterFindAllNationalitiesRoute, adapterFindAllNationalitiesByNameRoute } from '../adapters/express-route-nationalities.adapter';
import { nationalitiesControllerFactory } from '../factories/nationalities.factory';

export default (router: Router): void => {
    router.get(
        '/nationalities',
        adapterFindAllNationalitiesRoute(nationalitiesControllerFactory())
    );

    router.get(
        '/nationalities-by-name',
        adapterFindAllNationalitiesByNameRoute(nationalitiesControllerFactory())
    );
};