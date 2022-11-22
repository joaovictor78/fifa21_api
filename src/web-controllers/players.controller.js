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
var missing_parameter_error_1 = require("./errors/missing-parameter.error");
var http_helper_1 = require("./utils/http.helper");
var PlayersController = /** @class */ (function () {
    function PlayersController(playersRepository) {
        this.playersRepository = playersRepository;
    }
    PlayersController.prototype.findAllPlayers = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var players, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.playersRepository.findAllPlayers(request.body)];
                    case 1:
                        players = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.ok)(players)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.serverError)(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersController.prototype.findPlayersByName = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var players, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!request.body.player_name) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('player_name').message)];
                        }
                        return [4 /*yield*/, this.playersRepository.findPlayersByName(request.body)];
                    case 1:
                        players = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.ok)(players)];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.serverError)(error_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersController.prototype.findPlayersByTeam = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var players, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!request.body.team_id) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('team_id').message)];
                        }
                        return [4 /*yield*/, this.playersRepository.findPlayersByTeam(request.body)];
                    case 1:
                        players = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.ok)(players)];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.serverError)(error_3)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersController.prototype.findPlayersByLeague = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var players, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!request.body.league_id) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('league_id').message)];
                        }
                        return [4 /*yield*/, this.playersRepository.findPlayersByLeague(request.body)];
                    case 1:
                        players = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.ok)(players)];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.serverError)(error_4)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersController.prototype.findPlayersByNationality = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var players, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!request.body.nationality_id) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('nationality_id').message)];
                        }
                        return [4 /*yield*/, this.playersRepository.findPlayersByNationality(request.body)];
                    case 1:
                        players = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.ok)(players)];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.serverError)(error_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersController.prototype.findPlayersByPosition = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var players, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!request.body.position_id) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('position_id').message)];
                        }
                        return [4 /*yield*/, this.playersRepository.findPlayersByPosition(request.body)];
                    case 1:
                        players = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.ok)(players)];
                    case 2:
                        error_6 = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.serverError)(error_6)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersController.prototype.findPlayerById = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var players, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!request.body.player_id) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('player_id').message)];
                        }
                        return [4 /*yield*/, this.playersRepository.findPlayerById(request.body)];
                    case 1:
                        players = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.ok)(players)];
                    case 2:
                        error_7 = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.serverError)(error_7)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersController.prototype.findBestPlayers = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var top_players_number, players, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        top_players_number = request.body.top_players_number;
                        if (!top_players_number) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('top_players_number').message)];
                        }
                        return [4 /*yield*/, this.playersRepository.findBestPlayers(request.body)];
                    case 1:
                        players = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.ok)(players)];
                    case 2:
                        error_8 = _a.sent();
                        return [2 /*return*/, (0, http_helper_1.serverError)(error_8)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersController.prototype.findBestPlayersByPosition = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, top_players_number, position_id, players, error_9;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.body, top_players_number = _a.top_players_number, position_id = _a.position_id;
                        if (!top_players_number) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('top_players_number').message)];
                        }
                        if (!position_id) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('position_id').message)];
                        }
                        return [4 /*yield*/, this.playersRepository.findBestPlayersByPosition(request.body)];
                    case 1:
                        players = _b.sent();
                        return [2 /*return*/, (0, http_helper_1.ok)(players)];
                    case 2:
                        error_9 = _b.sent();
                        return [2 /*return*/, (0, http_helper_1.serverError)(error_9)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersController.prototype.findBestPlayersByNationality = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, top_players_number, nationality_id, players, error_10;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.body, top_players_number = _a.top_players_number, nationality_id = _a.nationality_id;
                        if (!top_players_number) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('top_players_number').message)];
                        }
                        if (!nationality_id) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('nationality_id').message)];
                        }
                        return [4 /*yield*/, this.playersRepository.findBestPlayersByNationality(request.body)];
                    case 1:
                        players = _b.sent();
                        return [2 /*return*/, (0, http_helper_1.ok)(players)];
                    case 2:
                        error_10 = _b.sent();
                        return [2 /*return*/, (0, http_helper_1.serverError)(error_10)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlayersController.prototype.findBestPlayersByLeague = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, top_players_number, league_id, players, error_11;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = request.body, top_players_number = _a.top_players_number, league_id = _a.league_id;
                        if (!top_players_number) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('top_players_number').message)];
                        }
                        if (!league_id) {
                            return [2 /*return*/, (0, http_helper_1.badRequest)(new missing_parameter_error_1.MissingParamError('league_id').message)];
                        }
                        return [4 /*yield*/, this.playersRepository.findBestPlayersByNationality(request.body)];
                    case 1:
                        players = _b.sent();
                        return [2 /*return*/, (0, http_helper_1.ok)(players)];
                    case 2:
                        error_11 = _b.sent();
                        return [2 /*return*/, (0, http_helper_1.serverError)(error_11)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PlayersController;
}());
exports["default"] = PlayersController;
