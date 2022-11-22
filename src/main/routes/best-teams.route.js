"use strict";
exports.__esModule = true;
var express_route_best_team_adapter_1 = require("../adapters/express-route-best-team.adapter");
var best_teams_factory_1 = require("../factories/best-teams.factory");
exports["default"] = (function (router) {
    router.get('/best-teams', (0, express_route_best_team_adapter_1.adapterFindBestTeamWithPlayersRoute)((0, best_teams_factory_1.bestTeamsWithPlayersControllerFactory)()));
    router.get('/best-teams-by-league', (0, express_route_best_team_adapter_1.adapterFindBestTeamWithPlayersByLeagueRoute)((0, best_teams_factory_1.bestTeamsWithPlayersControllerFactory)()));
    router.get('/best-teams-by-nationality', (0, express_route_best_team_adapter_1.adapterFindBestTeamWithPlayersByNationalityRoute)((0, best_teams_factory_1.bestTeamsWithPlayersControllerFactory)()));
});
