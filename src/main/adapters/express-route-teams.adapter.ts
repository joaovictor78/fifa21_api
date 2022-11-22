import { HttpRequest } from '../../web-controllers/ports/http-request';
import { Request, Response } from 'express';
import TeamsController from '../../web-controllers/teams.controller';

export const adapterFindAllTeamsRoute = (controller: TeamsController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findAllTeams(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindAllTeamsByNameRoute = (controller: TeamsController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findAllTeamsByName(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};