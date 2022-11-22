"use strict";
exports.__esModule = true;
var express_route_players_adapter_1 = require("../adapters/express-route-players.adapter");
var players_factory_1 = require("../factories/players.factory");
exports["default"] = (function (router) {
    router.get('/players', (0, express_route_players_adapter_1.adapterFindAllPlayersRoute)((0, players_factory_1.playersControllerFactory)()));
    router.get('/players-by-name', (0, express_route_players_adapter_1.adapterFindPlayersByNameRoute)((0, players_factory_1.playersControllerFactory)()));
    router.get('/players-by-team', (0, express_route_players_adapter_1.adapterFindPlayersByTeamRoute)((0, players_factory_1.playersControllerFactory)()));
    router.get('/players-by-nationality', (0, express_route_players_adapter_1.adapterFindPlayersByNationalityRoute)((0, players_factory_1.playersControllerFactory)()));
    router.get('/players-by-position', (0, express_route_players_adapter_1.adapterFindPlayersByPositionRoute)((0, players_factory_1.playersControllerFactory)()));
    router.get('/players-by-league', (0, express_route_players_adapter_1.adapterFindPlayersByPositionRoute)((0, players_factory_1.playersControllerFactory)()));
    router.get('/best-players', (0, express_route_players_adapter_1.adapterFindBestPlayersRoute)((0, players_factory_1.playersControllerFactory)()));
    router.get('/best-players-by-position', (0, express_route_players_adapter_1.adapterFindBestPlayersByPositionRoute)((0, players_factory_1.playersControllerFactory)()));
    router.get('/best-players-by-nationality', (0, express_route_players_adapter_1.adapterFindBestPlayersByNationalityRoute)((0, players_factory_1.playersControllerFactory)()));
    router.get('/best-players-by-league', (0, express_route_players_adapter_1.adapterFindBestPlayersByNationalityRoute)((0, players_factory_1.playersControllerFactory)()));
    router.get('/player-details', (0, express_route_players_adapter_1.adapterFindPlayerByIdRoute)((0, players_factory_1.playersControllerFactory)()));
});
