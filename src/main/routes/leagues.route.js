"use strict";
exports.__esModule = true;
var express_route_leagues_adapter_1 = require("../adapters/express-route-leagues.adapter");
var leagues_factory_1 = require("../factories/leagues.factory");
exports["default"] = (function (router) {
    router.get('/leagues', (0, express_route_leagues_adapter_1.adapterFindAllLeaguesRoute)((0, leagues_factory_1.leaguesControllerFactory)()));
    router.get('/leagues-by-name', (0, express_route_leagues_adapter_1.adapterFindAllLeaguesByNameRoute)((0, leagues_factory_1.leaguesControllerFactory)()));
});
