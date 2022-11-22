import { HttpRequest } from '../../web-controllers/ports/http-request';
import { Request, Response } from 'express';
import PositionsController from '../../web-controllers/positions.controller';

export const adapterFindAllPositionsRoute = (controller: PositionsController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findAllPositions(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindAllPositionsByNameRoute = (controller: PositionsController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findAllPositionsByName(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};