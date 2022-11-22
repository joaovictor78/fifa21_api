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
var database_config_1 = require("../db/database.config");
var player_model_1 = require("../models/player.model");
var BestTeamWithPlayersRepository = /** @class */ (function () {
    function BestTeamWithPlayersRepository() {
        this.dataSource = database_config_1.AppDataSource.getRepository(player_model_1["default"]);
    }
    BestTeamWithPlayersRepository.prototype.findBestTeamWithPlayers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gk, cb, lb, rb, cm, lm, rm, sf, teamDTO, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, this.dataSource.query("\n           select p.*, t.\"name\"as club_name, l.\"name\"  as league_name, n.\"name\"  as nationality\n           FROM player  p \n           INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id\n           INNER JOIN \"position\" p2  on p2.position_id  = pp.position_id \n           INNER JOIN nationality n on n.nationality_id  = p.\"nationalityNationalityId\"\n           INNER JOIN team t on t.team_id  = p.\"teamTeamId\"  \n           INNER JOIN league l on l.league_id  = p.\"leagueLeagueId\"\n           where p2.\"name\" = 'GK' \n           order by p.potential  desc limit 1")];
                    case 1:
                        gk = _a.sent();
                        return [4 /*yield*/, this.findBestPlayer('cb', 2)];
                    case 2:
                        cb = _a.sent();
                        return [4 /*yield*/, this.findBestPlayer('lb', 1)];
                    case 3:
                        lb = _a.sent();
                        return [4 /*yield*/, this.findBestPlayer('rb', 1)];
                    case 4:
                        rb = _a.sent();
                        return [4 /*yield*/, this.findBestPlayer('cm', 2)];
                    case 5:
                        cm = _a.sent();
                        return [4 /*yield*/, this.findBestPlayer('lm', 1)];
                    case 6:
                        lm = _a.sent();
                        return [4 /*yield*/, this.findBestPlayer('rm', 1)];
                    case 7:
                        rm = _a.sent();
                        return [4 /*yield*/, this.findBestPlayer('sf', 2)];
                    case 8:
                        sf = _a.sent();
                        teamDTO = { gk: gk, cb: cb, lb: lb, rb: rb, cm: cm, lm: lm, rm: rm, sf: sf };
                        return [2 /*return*/, (0, either_1.right)(teamDTO)];
                    case 9:
                        error_1 = _a.sent();
                        throw error_1;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    BestTeamWithPlayersRepository.prototype.findBestTeamWithPlayersByLeague = function (league_id) {
        return __awaiter(this, void 0, void 0, function () {
            var gk, cb, lb, rb, cm, lm, rm, sf, teamDTO, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, this.dataSource.query("\n            select p.*, t.\"name\"as club_name, l.\"name\"  as league_name, n.\"name\"  as nationality\n            FROM player  p \n            INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id\n            INNER JOIN \"position\" p2  on p2.position_id  = pp.position_id \n            INNER JOIN nationality n on n.nationality_id  = p.\"nationalityNationalityId\"\n            INNER JOIN team t on t.team_id  = p.\"teamTeamId\"  \n            INNER JOIN league l on l.league_id  = p.\"leagueLeagueId\"\n            where p2.\"name\" = 'GK' and  l.\"league_id\"  = ".concat(league_id, "\n            order by p.potential  desc limit 1"))];
                    case 1:
                        gk = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('cb', 2, league_id)];
                    case 2:
                        cb = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('lb', 1, league_id)];
                    case 3:
                        lb = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('rb', 1, league_id)];
                    case 4:
                        rb = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('cm', 2, league_id)];
                    case 5:
                        cm = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('lm', 1, league_id)];
                    case 6:
                        lm = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('rm', 1, league_id)];
                    case 7:
                        rm = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('sf', 2, league_id)];
                    case 8:
                        sf = _a.sent();
                        teamDTO = { gk: gk, cb: cb, lb: lb, rb: rb, cm: cm, lm: lm, rm: rm, sf: sf };
                        return [2 /*return*/, (0, either_1.right)(teamDTO)];
                    case 9:
                        error_2 = _a.sent();
                        throw error_2;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    BestTeamWithPlayersRepository.prototype.findBestTeamWithPlayersByNationality = function (nationality_id) {
        return __awaiter(this, void 0, void 0, function () {
            var gk, cb, lb, rb, cm, lm, rm, sf, teamDTO, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, this.dataSource.query("\n            select p.*, t.\"name\"as club_name, l.\"name\"  as league_name, n.\"name\"  as nationality\n            FROM player  p \n            INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id\n            INNER JOIN \"position\" p2  on p2.position_id  = pp.position_id \n            INNER JOIN nationality n on n.nationality_id  = p.\"nationalityNationalityId\"\n            INNER JOIN team t on t.team_id  = p.\"teamTeamId\"  \n            INNER JOIN league l on l.league_id  = p.\"leagueLeagueId\"\n            where p2.\"name\" = 'GK' and  l.\"league_id\"  = ".concat(nationality_id, "\n            order by p.potential  desc limit 1"))];
                    case 1:
                        gk = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('cb', 2, nationality_id)];
                    case 2:
                        cb = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('lb', 1, nationality_id)];
                    case 3:
                        lb = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('rb', 1, nationality_id)];
                    case 4:
                        rb = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('cm', 2, nationality_id)];
                    case 5:
                        cm = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('lm', 1, nationality_id)];
                    case 6:
                        lm = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('rm', 1, nationality_id)];
                    case 7:
                        rm = _a.sent();
                        return [4 /*yield*/, this.findBestPlayerByLeague('sf', 2, nationality_id)];
                    case 8:
                        sf = _a.sent();
                        teamDTO = { gk: gk, cb: cb, lb: lb, rb: rb, cm: cm, lm: lm, rm: rm, sf: sf };
                        return [2 /*return*/, (0, either_1.right)(teamDTO)];
                    case 9:
                        error_3 = _a.sent();
                        throw error_3;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    BestTeamWithPlayersRepository.prototype.findBestPlayer = function (position, limit) {
        if (limit === void 0) { limit = 1; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataSource.query("\n           select  p.*, t.\"name\"as club_name, l.\"name\"  as league_name, n.\"name\"  as nationality \n           FROM player p\n           INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id\n           INNER JOIN position p2  on p2.position_id  = pp.position_id \n           INNER JOIN nationality n on n.nationality_id  = p.\"nationalityNationalityId\"\n           INNER JOIN team t on t.team_id  = p.\"teamTeamId\"  \n           INNER JOIN league l on l.league_id  = p.\"leagueLeagueId\"\n           order by substring('".concat(position, "', 1, 2) desc limit ").concat(limit))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BestTeamWithPlayersRepository.prototype.findBestPlayerByLeague = function (position, limit, league_id) {
        if (limit === void 0) { limit = 1; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataSource.query("\n           select  p.*, t.\"name\"as club_name, l.\"name\"  as league_name, n.\"name\"  as nationality \n           FROM player p\n           INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id\n           INNER JOIN position p2  on p2.position_id  = pp.position_id \n           INNER JOIN nationality n on n.nationality_id  = p.\"nationalityNationalityId\"\n           INNER JOIN team t on t.team_id  = p.\"teamTeamId\"  \n           INNER JOIN league l on l.league_id  = p.\"leagueLeagueId\"\n           where  l.\"league_id\"  = ".concat(league_id, "\n           order by substring('").concat(position, "', 1, 2) desc limit ").concat(limit))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BestTeamWithPlayersRepository.prototype.findBestPlayerByNationality = function (position, limit, nationality_id) {
        if (limit === void 0) { limit = 1; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataSource.query("\n           select  p.*, t.\"name\"as club_name, l.\"name\"  as league_name, n.\"name\"  as nationality \n           FROM player p\n           INNER JOIN players_positions pp  on p.sofifa_id  = pp.player_id\n           INNER JOIN position p2  on p2.position_id  = pp.position_id \n           INNER JOIN nationality n on n.nationality_id  = p.\"nationalityNationalityId\"\n           INNER JOIN team t on t.team_id  = p.\"teamTeamId\"  \n           INNER JOIN league l on l.league_id  = p.\"leagueLeagueId\"\n           where n.\"nationality_id\" = ".concat(nationality_id, "\n           order by substring('").concat(position, "', 1, 2) desc limit ").concat(limit))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return BestTeamWithPlayersRepository;
}());
exports["default"] = BestTeamWithPlayersRepository;
