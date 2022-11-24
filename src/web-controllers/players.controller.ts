import PlayersRepository from '../infra/repositories/players.repository';
import { MissingParamError } from './errors/missing-parameter.error';
import { HttpRequest } from './ports/http-request';
import { HttpResponse } from './ports/http-response';
import { badRequest, ok, serverError } from './utils/http.helper';

export default class PlayersController {
    private readonly playersRepository: PlayersRepository;

    constructor(playersRepository: PlayersRepository) {
        this.playersRepository = playersRepository;
    }
    public async findAllPlayers(request: HttpRequest): Promise<HttpResponse> {
        try {
            const players = await this.playersRepository.findAllPlayers(
                request.query_parameters
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }
    public async findPlayersByName(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.query_parameters.player_name) {
                return badRequest(new MissingParamError('player_name').message);
            }
            const players = await this.playersRepository.findPlayersByName(
                request.query_parameters
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }
    public async findPlayersByTeam(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.query_parameters.team_id) {
                return badRequest(new MissingParamError('team_id').message);
            }
            const players = await this.playersRepository.findPlayersByTeam(
                request.query_parameters
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findPlayersByLeague(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.query_parameters.league_id) {
                return badRequest(new MissingParamError('league_id').message);
            }
            const players = await this.playersRepository.findPlayersByLeague(
                request.query_parameters
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findPlayersByNationality(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.query_parameters.nationality_id) {
                return badRequest(new MissingParamError('nationality_id').message);
            }
            const players = await this.playersRepository.findPlayersByNationality(
                request.query_parameters
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findPlayersByPosition(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.query_parameters.position_id) {
                return badRequest(new MissingParamError('position_id').message);
            }
            const players = await this.playersRepository.findPlayersByPosition(
                request.query_parameters
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findPlayerById(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.query_parameters.player_id) {
                return badRequest(new MissingParamError('player_id').message);
            }
            const players = await this.playersRepository.findPlayerById(
                request.query_parameters
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findBestPlayers(request: HttpRequest): Promise<HttpResponse> {
        try {
            const {top_players_number } = request.query_parameters;
            if (!top_players_number) {
                return badRequest(new MissingParamError('top_players_number').message);
            }
            const players = await this.playersRepository.findBestPlayers(
                request.query_parameters
            );
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findBestPlayersByPosition(request: HttpRequest): Promise<HttpResponse> {
        try {
            const {top_players_number, position_id } = request.query_parameters;
            if (!top_players_number) {
                return badRequest(new MissingParamError('top_players_number').message);
            }
            if(!position_id){
                return badRequest(new MissingParamError('position_id').message);
            }
            const players = await this.playersRepository.findBestPlayersByPosition(
                request.query_parameters
            );
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findBestPlayersByNationality(request: HttpRequest): Promise<HttpResponse> {
        try {
            const {top_players_number, nationality_id } = request.query_parameters;
            if (!top_players_number) {
                return badRequest(new MissingParamError('top_players_number').message);
            }
            if(!nationality_id){
                return badRequest(new MissingParamError('nationality_id').message);
            }
            const players = await this.playersRepository.findBestPlayersByNationality(
                request.query_parameters
            );
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findBestPlayersByLeague(request: HttpRequest): Promise<HttpResponse> {
        try {
            const {top_players_number, league_id } = request.query_parameters;
            if (!top_players_number) {
                return badRequest(new MissingParamError('top_players_number').message);
            }
            if(!league_id){
                return badRequest(new MissingParamError('league_id').message);
            }
            const players = await this.playersRepository.findBestPlayersByLeague(
                request.query_parameters
            );
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }
}
