import { HttpRequest } from '../../web-controllers/ports/http-request';
import { Request, Response } from 'express';
import PlayersController from '../../web-controllers/players.controller';

export const adapterFindAllPlayersRoute = (controller: PlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findAllPlayers(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindPlayersByNameRoute = (controller: PlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findPlayersByName(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindPlayersByTeamRoute = (controller: PlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findPlayersByTeam(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindPlayersByLeagueRoute = (controller: PlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findPlayersByLeague(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindPlayersByNationalityRoute = (controller: PlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findPlayersByNationality(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindPlayersByPositionRoute = (controller: PlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findPlayersByPosition(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindPlayerByIdRoute = (controller: PlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findPlayerById(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindBestPlayersRoute = (controller: PlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findBestPlayersByPosition(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindBestPlayersByPositionRoute = (controller: PlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findBestPlayersByPosition(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindBestPlayersByNationalityRoute = (controller: PlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findBestPlayersByPosition(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindBestPlayersByLeagueRoute = (controller: PlayersController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findBestPlayersByPosition(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};