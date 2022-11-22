"use strict";
exports.__esModule = true;
var express_route_teams_adapter_1 = require("../adapters/express-route-teams.adapter");
var teams_factory_1 = require("../factories/teams.factory");
exports["default"] = (function (router) {
    router.get('/teams', (0, express_route_teams_adapter_1.adapterFindAllTeamsRoute)((0, teams_factory_1.teamsControllerFactory)()));
    router.get('/teams-by-name', (0, express_route_teams_adapter_1.adapterFindAllTeamsByNameRoute)((0, teams_factory_1.teamsControllerFactory)()));
});
