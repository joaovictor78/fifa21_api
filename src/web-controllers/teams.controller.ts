import TeamsRepository from '../infra/repositories/teams.repository';
import { MissingParamError } from './errors/missing-parameter.error';
import { HttpRequest } from './ports/http-request';
import { HttpResponse } from './ports/http-response';
import { badRequest, ok, serverError } from './utils/http.helper';

export default class TeamsController {
    private readonly teamsRepository: TeamsRepository;

    constructor(teamsRepository: TeamsRepository) {
        this.teamsRepository = teamsRepository;
    }

    public async findAllTeams(request: HttpRequest): Promise<HttpResponse> {
        try {
            const teams = await this.teamsRepository.findAllTeams(
                request.body
            );
            return ok(teams);
        } catch (error) {
            return serverError(error);
        }
    }
    public async findAllTeamsByName(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.body.team_name) {
                return badRequest(new MissingParamError('team_name').message);
            }
            const teams = await this.teamsRepository.findTeamsByName(
                request.body
            );
            return ok(teams);
        } catch (error) {
            return serverError(error);
        }
    }
}
