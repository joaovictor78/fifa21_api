"use strict";
exports.__esModule = true;
exports.bestTeamsWithPlayersControllerFactory = void 0;
var best_team_repository_1 = require("../../infra/repositories/best-team.repository");
var best_team_with_players_controller_1 = require("../../web-controllers/best-team-with-players.controller");
var bestTeamsWithPlayersControllerFactory = function () {
    var bestTeamsRepository = new best_team_repository_1["default"]();
    var bestTeamsController = new best_team_with_players_controller_1["default"](bestTeamsRepository);
    return bestTeamsController;
};
exports.bestTeamsWithPlayersControllerFactory = bestTeamsWithPlayersControllerFactory;
