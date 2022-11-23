import PositionsRepository from '../infra/repositories/positions.repository';
import { MissingParamError } from './errors/missing-parameter.error';
import { HttpRequest } from './ports/http-request';
import { HttpResponse } from './ports/http-response';
import { badRequest, ok, serverError } from './utils/http.helper';

export default class PositionsController {
    private readonly positionsRepository: PositionsRepository;

    constructor(positionsRepository: PositionsRepository) {
        this.positionsRepository = positionsRepository;
    }

    public async findAllPositions(request: HttpRequest): Promise<HttpResponse> {
        try {
            const positions = await this.positionsRepository.findAllPositions(
                request.query_parameters
            );
            return ok(positions);
        } catch (error) {
            return serverError(error);
        }
    }
    public async findAllPositionsByName(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.query_parameters.team_name) {
                return badRequest(new MissingParamError('position_name').message);
            }
            const positions = await this.positionsRepository.findPositionsByName(
                request.query_parameters
            );
            return ok(positions);
        } catch (error) {
            return serverError(error);
        }
    }
}
