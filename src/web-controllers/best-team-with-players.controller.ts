import IBestTeamWithPlayersRepository from "../domain/ports/best-team-with-players.repository";
import { MissingParamError } from "./errors/missing-parameter.error";
import { HttpRequest } from "./ports/http-request";
import { HttpResponse } from "./ports/http-response";
import { badRequest, ok, serverError } from "./utils/http.helper";

export default class BestTeamWithPlayersController{
    private readonly bestTeamRepository: IBestTeamWithPlayersRepository;

    constructor(bestTeamRepository: IBestTeamWithPlayersRepository){
        this.bestTeamRepository = bestTeamRepository;
    }

    public async findBestTeamWithPlayers(request: HttpRequest): Promise<HttpResponse> {
        try {
            const time = await this.bestTeamRepository.findBestTeamWithPlayers();
            return ok(time);
        } catch(error){
            return serverError(error);
        }
    }
    public async findBestTeamWithPlayersByLeague(request: HttpRequest): Promise<HttpResponse> {
        try {
            const league_id = request.query_parameters.league_id;
            if (!league_id) {
                return badRequest(new MissingParamError('league_id').message);
            }
            const time = await this.bestTeamRepository.findBestTeamWithPlayersByLeague(league_id);
            return ok(time);
        } catch(error){
            return serverError(error);
        }
    }

    public async findBestTeamWithPlayersByNationality(request: HttpRequest): Promise<HttpResponse> {
        try {
            const nationality_id = request.query_parameters.nationality_id;

            if (!request.query_parameters.nationality_id) {
                return badRequest(new MissingParamError('nationality_id').message);
            }
            const time = await this.bestTeamRepository.findBestTeamWithPlayersByNationality(nationality_id);
            return ok(time);
        } catch(error){
            return serverError(error);
        }
    }

}