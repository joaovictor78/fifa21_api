import NationalitiesRepository from '../infra/repositories/nationalities.repository';
import { MissingParamError } from './errors/missing-parameter.error';
import { HttpRequest } from './ports/http-request';
import { HttpResponse } from './ports/http-response';
import { badRequest, ok, serverError } from './utils/http.helper';

export default class NationalitiesController {
    private readonly nationalitiesRepository: NationalitiesRepository;

    constructor(nationalitiesRepository: NationalitiesRepository) {
        this.nationalitiesRepository = nationalitiesRepository;
    }

    public async findAllNationalities(request: HttpRequest): Promise<HttpResponse> {
        try {
            const Nationalities = await this.nationalitiesRepository.findAllNationalities(
                request.query_parameters
            );
            return ok(Nationalities);
        } catch (error) {
            return serverError(error);
        }
    }
    public async findAllNationalitiesByName(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.query_parameters.team_name) {
                return badRequest(new MissingParamError('nationality_name').message);
            }
            const Nationalities = await this.nationalitiesRepository.findNationalitiesByName(
                request.query_parameters
            );
            return ok(Nationalities);
        } catch (error) {
            return serverError(error);
        }
    }
}
