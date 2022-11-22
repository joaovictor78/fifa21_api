import { HttpRequest } from '../../web-controllers/ports/http-request';
import { Request, Response } from 'express';
import NationalitiesController from '../../web-controllers/nationalities.controller';

export const adapterFindAllNationalitiesRoute = (controller: NationalitiesController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findAllNationalities(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};

export const adapterFindAllNationalitiesByNameRoute = (controller: NationalitiesController) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            parameters: req.params,
            query_parameters: req.query,
            body: req.body
        };
        const httpResponse = await controller.findAllNationalitiesByName(httpRequest);
        res.status(httpResponse.statusCode).json(httpResponse.body);
    };
};