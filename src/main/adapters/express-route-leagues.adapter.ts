import { HttpRequest } from '../../web-controllers/ports/http-request';
import { Request, Response } from 'express';
import LeaguesController from '../../web-controllers/leagues.controller';

export const adapterFindAllLeaguesRoute = (controller: LeaguesController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findAllLeagues(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindAllLeaguesByNameRoute = (controller: LeaguesController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findAllLeaguesByName(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};