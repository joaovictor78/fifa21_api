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
                request.body
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }
    public async findPlayersByName(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.body.player_name) {
                return badRequest(new MissingParamError('player_name').message);
            }
            const players = await this.playersRepository.findPlayersByName(
                request.body
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }
    public async findPlayersByTeam(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.body.team_id) {
                return badRequest(new MissingParamError('team_id').message);
            }
            const players = await this.playersRepository.findPlayersByTeam(
                request.body
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findPlayersByLeague(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.body.league_id) {
                return badRequest(new MissingParamError('league_id').message);
            }
            const players = await this.playersRepository.findPlayersByLeague(
                request.body
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findPlayersByNationality(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.body.nationality_id) {
                return badRequest(new MissingParamError('nationality_id').message);
            }
            const players = await this.playersRepository.findPlayersByNationality(
                request.body
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findPlayersByPosition(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.body.position_id) {
                return badRequest(new MissingParamError('position_id').message);
            }
            const players = await this.playersRepository.findPlayersByPosition(
                request.body
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findPlayerById(request: HttpRequest): Promise<HttpResponse> {
        try {
            if (!request.body.player_id) {
                return badRequest(new MissingParamError('player_id').message);
            }
            const players = await this.playersRepository.findPlayerById(
                request.body
            );
            
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findBestPlayers(request: HttpRequest): Promise<HttpResponse> {
        try {
            const {top_players_number } = request.body;
            if (!top_players_number) {
                return badRequest(new MissingParamError('top_players_number').message);
            }
            const players = await this.playersRepository.findBestPlayers(
                request.body
            );
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findBestPlayersByPosition(request: HttpRequest): Promise<HttpResponse> {
        try {
            const {top_players_number, position_id } = request.body;
            if (!top_players_number) {
                return badRequest(new MissingParamError('top_players_number').message);
            }
            if(!position_id){
                return badRequest(new MissingParamError('position_id').message);
            }
            const players = await this.playersRepository.findBestPlayersByPosition(
                request.body
            );
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findBestPlayersByNationality(request: HttpRequest): Promise<HttpResponse> {
        try {
            const {top_players_number, nationality_id } = request.body;
            if (!top_players_number) {
                return badRequest(new MissingParamError('top_players_number').message);
            }
            if(!nationality_id){
                return badRequest(new MissingParamError('nationality_id').message);
            }
            const players = await this.playersRepository.findBestPlayersByNationality(
                request.body
            );
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }

    public async findBestPlayersByLeague(request: HttpRequest): Promise<HttpResponse> {
        try {
            const {top_players_number, league_id } = request.body;
            if (!top_players_number) {
                return badRequest(new MissingParamError('top_players_number').message);
            }
            if(!league_id){
                return badRequest(new MissingParamError('league_id').message);
            }
            const players = await this.playersRepository.findBestPlayersByNationality(
                request.body
            );
            return ok(players);
        } catch (error) {
            return serverError(error);
        }
    }
}
