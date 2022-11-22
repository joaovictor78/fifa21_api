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
var fs_1 = require("fs");
var csv = require("fast-csv");
var leagues_repository_1 = require("../../infra/repositories/leagues.repository");
var teams_repository_1 = require("../../infra/repositories/teams.repository");
var typeorm_pg_helper_1 = require("../../infra/db/typeorm-pg-helper");
var nationalities_repository_1 = require("../../infra/repositories/nationalities.repository");
var positions_repository_1 = require("../../infra/repositories/positions.repository");
var players_repository_1 = require("../../infra/repositories/players.repository");
var position_model_1 = require("../../infra/models/position.model");
var database_config_1 = require("../../infra/db/database.config");
var player_parameters_1 = require("../../domain/ports/query-parameters/player-parameters");
var league_model_1 = require("../../infra/models/league.model");
var team_model_1 = require("../../infra/models/team.model");
var nationality_model_1 = require("../../infra/models/nationality.model");
var leaguesRepository = new leagues_repository_1["default"]();
var teamsRepository = new teams_repository_1["default"]();
var nationalitiesRepository = new nationalities_repository_1["default"]();
var positionsRepository = new positions_repository_1["default"]();
var playersRepository = new players_repository_1["default"]();
function saveCsvInDatabase(fileName, callBack, delimiter) {
    if (delimiter === void 0) { delimiter = '\n'; }
    return __awaiter(this, void 0, void 0, function () {
        var fileStream, csvFile;
        var _this = this;
        return __generator(this, function (_a) {
            fileStream = fs_1["default"].createReadStream("data_in_csv/".concat(fileName));
            csvFile = csv
                .parse({
                headers: true,
                delimiter: delimiter,
                quote: '"'
            })
                .on('data', function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    callBack(data);
                    return [2 /*return*/];
                });
            }); });
            fileStream.pipe(csvFile);
            return [2 /*return*/];
        });
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, typeorm_pg_helper_1.TypeOrmPgHelper.connect()];
                case 1:
                    _a.sent();
                    saveCsvInDatabase('leagues.csv', function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var leagueOrFailure;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, leaguesRepository.registerLeague(data.league)];
                                case 1:
                                    leagueOrFailure = _a.sent();
                                    if (leagueOrFailure.isLeft()) {
                                        console.log('Error:', leagueOrFailure.value.message);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    saveCsvInDatabase('teams.csv', function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var teamsOrFailure;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, teamsRepository.registerTeam(data.team)];
                                case 1:
                                    teamsOrFailure = _a.sent();
                                    if (teamsOrFailure.isLeft()) {
                                        console.log('Error:', teamsOrFailure.value.message);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    saveCsvInDatabase('nationalities.csv', function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var nationalitiesOrFailure;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, nationalitiesRepository.registerNationality(data.nationality)];
                                case 1:
                                    nationalitiesOrFailure = _a.sent();
                                    if (nationalitiesOrFailure.isLeft()) {
                                        console.log('Error:', nationalitiesOrFailure.value.message);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    saveCsvInDatabase('player_positions.csv', function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            data.player_positions.split(',').map(function (position) { return __awaiter(_this, void 0, void 0, function () {
                                var positionsOrFailure;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, positionsRepository.registerPosition(position)];
                                        case 1:
                                            positionsOrFailure = _a.sent();
                                            if (positionsOrFailure.isLeft()) {
                                                console.log('Error:', positionsOrFailure.value.message);
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    }); });
                    saveCsvInDatabase('players_21.csv', function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, leagueRepository, league_id, teamRepository, team_id, nationalityRepository, nationality_id, playerOrFailure;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    data.player_positions_id = [];
                                    if (!(data.player_positions.length != 0)) return [3 /*break*/, 2];
                                    _a = data;
                                    return [4 /*yield*/, Promise.all(data.player_positions
                                            .split(',')
                                            .map(function (value) { return __awaiter(_this, void 0, void 0, function () {
                                            var repository, position_id;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        repository = database_config_1.AppDataSource.getRepository(position_model_1["default"]);
                                                        return [4 /*yield*/, repository.findOne({
                                                                where: {
                                                                    name: value
                                                                }
                                                            })];
                                                    case 1:
                                                        position_id = (_a.sent()).position_id;
                                                        return [2 /*return*/, position_id];
                                                }
                                            });
                                        }); }))];
                                case 1:
                                    _a.player_positions_id = _b.sent();
                                    _b.label = 2;
                                case 2:
                                    leagueRepository = database_config_1.AppDataSource.getRepository(league_model_1["default"]);
                                    return [4 /*yield*/, leagueRepository.findOne({
                                            where: {
                                                name: data.league_name
                                            }
                                        })];
                                case 3:
                                    league_id = (_b.sent()).league_id;
                                    teamRepository = database_config_1.AppDataSource.getRepository(team_model_1["default"]);
                                    return [4 /*yield*/, teamRepository.findOne({
                                            where: {
                                                name: data.team_id
                                            }
                                        })];
                                case 4:
                                    team_id = (_b.sent()).team_id;
                                    nationalityRepository = database_config_1.AppDataSource.getRepository(nationality_model_1["default"]);
                                    return [4 /*yield*/, nationalityRepository.findOne({
                                            where: {
                                                name: data.nationality
                                            }
                                        })];
                                case 5:
                                    nationality_id = (_b.sent()).nationality_id;
                                    data.league_id = league_id;
                                    data.team_id = team_id;
                                    data.nationality_id = nationality_id;
                                    return [4 /*yield*/, playersRepository.registerPlayer(new player_parameters_1["default"](data))];
                                case 6:
                                    playerOrFailure = _b.sent();
                                    if (playerOrFailure.isLeft()) {
                                        console.log('Error:', playerOrFailure.value.message);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); }, ',');
                    return [2 /*return*/];
            }
        });
    });
}
start();
