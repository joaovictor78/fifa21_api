"use strict";
exports.__esModule = true;
var express_route_positions_adapter_1 = require("../adapters/express-route-positions.adapter");
var positions_factory_1 = require("../factories/positions.factory");
exports["default"] = (function (router) {
    router.get('/positions', (0, express_route_positions_adapter_1.adapterFindAllPositionsRoute)((0, positions_factory_1.positionsControllerFactory)()));
    router.get('/positions-by-name', (0, express_route_positions_adapter_1.adapterFindAllPositionsByNameRoute)((0, positions_factory_1.positionsControllerFactory)()));
});
