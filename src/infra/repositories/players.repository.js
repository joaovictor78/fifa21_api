"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var either_1 = require("../../shared/either/either");
var player_model_1 = require("../models/player.model");
var database_config_1 = require("../db/database.config");
var typeorm_1 = require("typeorm");
var player_dto_1 = require("../../domain/dtos/player.dto");
var PlayersRepository = /** @class */ (function () {
    function PlayersRepository() {
        this.dataSource = database_config_1.AppDataSource.getRepository(player_model_1["default"]);
    }
    PlayersRepository.prototype.registerPlayer = function (player) {
        return __awaiter(this, void 0, void 0, function () {
            var converted_player, player_model, player_entity, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        converted_player = player_model_1["default"].convertToModel(player);
                        return [4 /*yield*/, this.dataSource.save(converted_player)];
                    case 1:
                        player_model = _a.sent();
                        player_entity = player_model_1["default"].convertToEntity(player_model);
                        return [2 /*return*/, (0, either_1.right)(player_entity)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, (0, either_1.left)(Error(error_1))];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersRepository.prototype.findAllPlayers = function (_a) {
        var _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c;
        return __awaiter(this, void 0, void 0, function () {
            var _d, players_model, total, playersDTO, error_2;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.findAndCount({
                                order: {
                                    long_name: "ASC"
                                },
                                take: limit,
                                skip: limit * page - limit
                            })];
                    case 1:
                        _d = _e.sent(), players_model = _d[0], total = _d[1];
                        playersDTO = Object.values(players_model)
                            .map(function (value) { return player_dto_1.PlayerDTO.convertFromModel(value); });
                        return [2 /*return*/, (0, either_1.right)({ total: total, players: playersDTO })];
                    case 2:
                        error_2 = _e.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersRepository.prototype.findPlayersByName = function (_a) {
        var _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, player_name = _a.player_name;
        return __awaiter(this, void 0, void 0, function () {
            var _d, players_model, total, playersDTO, error_3;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.findAndCount({
                                where: {
                                    long_name: (0, typeorm_1.Like)("%".concat(player_name, "%"))
                                },
                                take: limit,
                                skip: limit * page - limit
                            })];
                    case 1:
                        _d = _e.sent(), players_model = _d[0], total = _d[1];
                        playersDTO = Object.values(players_model)
                            .map(function (value) { return player_dto_1.PlayerDTO.convertFromModel(value); });
                        return [2 /*return*/, (0, either_1.right)({ total: total, players: playersDTO })];
                    case 2:
                        error_3 = _e.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersRepository.prototype.findPlayersByTeam = function (_a) {
        var _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, team_id = _a.team_id;
        return __awaiter(this, void 0, void 0, function () {
            var _d, players_model, total, playersDTO, error_4;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.findAndCount({
                                where: {
                                    team: {
                                        team_id: team_id
                                    }
                                },
                                take: limit,
                                skip: limit * page - limit
                            })];
                    case 1:
                        _d = _e.sent(), players_model = _d[0], total = _d[1];
                        playersDTO = Object.values(players_model)
                            .map(function (value) { return player_dto_1.PlayerDTO.convertFromModel(value); });
                        return [2 /*return*/, (0, either_1.right)({ total: total, players: playersDTO })];
                    case 2:
                        error_4 = _e.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersRepository.prototype.findPlayersByLeague = function (_a) {
        var _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, league_id = _a.league_id;
        return __awaiter(this, void 0, void 0, function () {
            var _d, players_model, total, playersDTO, error_5;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.findAndCount({
                                where: {
                                    league: {
                                        league_id: league_id
                                    }
                                },
                                take: limit,
                                skip: limit * page - limit
                            })];
                    case 1:
                        _d = _e.sent(), players_model = _d[0], total = _d[1];
                        playersDTO = Object.values(players_model)
                            .map(function (value) { return player_dto_1.PlayerDTO.convertFromModel(value); });
                        return [2 /*return*/, (0, either_1.right)({ total: total, players: playersDTO })];
                    case 2:
                        error_5 = _e.sent();
                        throw error_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersRepository.prototype.findPlayersByNationality = function (_a) {
        var _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, nationality_id = _a.nationality_id;
        return __awaiter(this, void 0, void 0, function () {
            var _d, players_model, total, playersDTO, error_6;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.findAndCount({
                                where: {
                                    nationality: {
                                        nationality_id: nationality_id
                                    }
                                },
                                take: limit,
                                skip: limit * page - limit
                            })];
                    case 1:
                        _d = _e.sent(), players_model = _d[0], total = _d[1];
                        playersDTO = Object.values(players_model)
                            .map(function (value) { return player_dto_1.PlayerDTO.convertFromModel(value); });
                        return [2 /*return*/, (0, either_1.right)({ total: total, players: playersDTO })];
                    case 2:
                        error_6 = _e.sent();
                        throw error_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersRepository.prototype.findPlayersByPosition = function (_a) {
        var _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, position_id = _a.position_id;
        return __awaiter(this, void 0, void 0, function () {
            var _d, players_model, total, playersDTO, error_7;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.findAndCount({
                                where: {
                                    player_positions: {
                                        position_id: position_id
                                    }
                                },
                                take: limit,
                                skip: limit * page - limit
                            })];
                    case 1:
                        _d = _e.sent(), players_model = _d[0], total = _d[1];
                        playersDTO = Object.values(players_model)
                            .map(function (value) { return player_dto_1.PlayerDTO.convertFromModel(value); });
                        return [2 /*return*/, (0, either_1.right)({ total: total, players: playersDTO })];
                    case 2:
                        error_7 = _e.sent();
                        throw error_7;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersRepository.prototype.findPlayerById = function (_a) {
        var _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, player_id = _a.player_id;
        return __awaiter(this, void 0, void 0, function () {
            var _d, players_model, total, playersDTO, error_8;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.findAndCount({
                                where: {
                                    sofifa_id: player_id
                                },
                                take: limit,
                                skip: limit * page - limit
                            })];
                    case 1:
                        _d = _e.sent(), players_model = _d[0], total = _d[1];
                        playersDTO = Object.values(players_model)
                            .map(function (value) { return player_dto_1.PlayerDTO.convertFromModel(value); });
                        return [2 /*return*/, (0, either_1.right)({ total: total, players: playersDTO })];
                    case 2:
                        error_8 = _e.sent();
                        throw error_8;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersRepository.prototype.findBestPlayers = function (_a) {
        var page = _a.page, skip = _a.skip, top_players_number = _a.top_players_number;
        return __awaiter(this, void 0, void 0, function () {
            var _b, players_model, total, playersDTO, error_9;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.findAndCount({
                                order: {
                                    overall: "DESC"
                                },
                                take: top_players_number
                            })];
                    case 1:
                        _b = _c.sent(), players_model = _b[0], total = _b[1];
                        playersDTO = Object.values(players_model)
                            .map(function (value) { return player_dto_1.PlayerDTO.convertFromModel(value); });
                        return [2 /*return*/, (0, either_1.right)({ total: total, players: playersDTO })];
                    case 2:
                        error_9 = _c.sent();
                        throw error_9;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersRepository.prototype.findBestPlayersByPosition = function (_a) {
        var page = _a.page, skip = _a.skip, top_players_number = _a.top_players_number, position_id = _a.position_id;
        return __awaiter(this, void 0, void 0, function () {
            var players_model, playersDTO, error_10;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.query("\n            select p.*, t.\"name\"as club_name, l.\"name\"  as league_name, n.\"name\"  as nationality\n            FROM player  p \n            INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id\n            INNER JOIN \"position\" p2  on p2.position_id  = pp.position_id \n            INNER JOIN nationality n on n.nationality_id  = p.\"nationalityNationalityId\"\n            INNER JOIN team t on t.team_id  = p.\"teamTeamId\"  \n            INNER JOIN league l on l.league_id  = p.\"leagueLeagueId\"\n            where pp.position_id = ".concat(position_id, "\n            order by p.overall desc limit ").concat(top_players_number))];
                    case 1:
                        players_model = _b.sent();
                        playersDTO = players_model;
                        return [2 /*return*/, (0, either_1.right)({ total: playersDTO.length, players: playersDTO })];
                    case 2:
                        error_10 = _b.sent();
                        console.log(error_10);
                        throw error_10;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersRepository.prototype.findBestPlayersByNationality = function (_a) {
        var page = _a.page, skip = _a.skip, top_players_number = _a.top_players_number, nationality_id = _a.nationality_id;
        return __awaiter(this, void 0, void 0, function () {
            var players_model, playersDTO, error_11;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.query("\n            select p.*, t.\"name\"as club_name, l.\"name\"  as league_name, n.\"name\"  as nationality\n            FROM player  p \n            INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id\n            INNER JOIN \"position\" p2  on p2.position_id  = pp.position_id \n            INNER JOIN nationality n on n.nationality_id  = p.\"nationalityNationalityId\"\n            INNER JOIN team t on t.team_id  = p.\"teamTeamId\"  \n            INNER JOIN league l on l.league_id  = p.\"leagueLeagueId\"\n            where n.nationality_id  = ".concat(nationality_id, "\n            order by p.overall desc limit ").concat(top_players_number))];
                    case 1:
                        players_model = _b.sent();
                        playersDTO = players_model;
                        return [2 /*return*/, (0, either_1.right)({ total: playersDTO.length, players: playersDTO })];
                    case 2:
                        error_11 = _b.sent();
                        console.log(error_11);
                        throw error_11;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersRepository.prototype.findBestPlayersByLeague = function (_a) {
        var page = _a.page, skip = _a.skip, top_players_number = _a.top_players_number, league_id = _a.league_id;
        return __awaiter(this, void 0, void 0, function () {
            var players_model, playersDTO, error_12;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.query("\n            select p.*, t.\"name\"as club_name, l.\"name\"  as league_name, n.\"name\"  as nationality\n            FROM player  p \n            INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id\n            INNER JOIN \"position\" p2  on p2.position_id  = pp.position_id \n            INNER JOIN nationality n on n.nationality_id  = p.\"nationalityNationalityId\"\n            INNER JOIN team t on t.team_id  = p.\"teamTeamId\"  \n            INNER JOIN league l on l.league_id  = p.\"leagueLeagueId\"\n            where l.league_id  = ".concat(league_id, "\n            order by p.overall desc limit ").concat(top_players_number))];
                    case 1:
                        players_model = _b.sent();
                        playersDTO = players_model;
                        return [2 /*return*/, (0, either_1.right)({ total: playersDTO.length, players: playersDTO })];
                    case 2:
                        error_12 = _b.sent();
                        console.log(error_12);
                        throw error_12;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PlayersRepository;
}());
exports["default"] = PlayersRepository;
