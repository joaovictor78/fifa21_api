import { HttpRequest } from '../../web-controllers/ports/http-request';
import { Request, Response } from 'express';
import BestTeamWithPlayersController from '../../web-controllers/best-team-with-players.controller';

export const adapterFindBestTeamWithPlayersRoute = (controller: BestTeamWithPlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findBestTeamWithPlayers(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindBestTeamWithPlayersByLeagueRoute = (controller: BestTeamWithPlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findBestTeamWithPlayersByLeague(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindBestTeamWithPlayersByNationalityRoute = (controller: BestTeamWithPlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findBestTeamWithPlayersByNationality(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};