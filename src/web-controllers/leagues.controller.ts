import LeaguesRepository from '../infra/repositories/leagues.repository';
import { MissingParamError } from './errors/missing-parameter.error';
import { HttpRequest } from './ports/http-request';
import { HttpResponse } from './ports/http-response';
import { badRequest, ok, serverError } from './utils/http.helper';

export default class LeaguesController {
    private readonly leaguesRepository: LeaguesRepository;

    constructor(LeaguesRepository: LeaguesRepository) {
        this.leaguesRepository = LeaguesRepository;
    }

    public async findAllLeagues(request: HttpRequest): Promise<HttpResponse> {
        try {
            const leagues = await this.leaguesRepository.findAllLeagues(
                request.body
            );
            return ok(leagues);
        } catch (error) {
            return serverError(error);
        }
    }
    public async findAllLeaguesByName(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.body.team_name) {
                return badRequest(new MissingParamError('league_name').message);
            }
            const leagues = await this.leaguesRepository.findLeaguesByName(
                request.body
            );
            return ok(leagues);
        } catch (error) {
            return serverError(error);
        }
    }
}
