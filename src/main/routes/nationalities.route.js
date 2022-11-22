"use strict";
exports.__esModule = true;
var express_route_nationalities_adapter_1 = require("../adapters/express-route-nationalities.adapter");
var nationalities_factory_1 = require("../factories/nationalities.factory");
exports["default"] = (function (router) {
    router.get('/nationalities', (0, express_route_nationalities_adapter_1.adapterFindAllNationalitiesRoute)((0, nationalities_factory_1.nationalitiesControllerFactory)()));
    router.get('/nationalities-by-name', (0, express_route_nationalities_adapter_1.adapterFindAllNationalitiesByNameRoute)((0, nationalities_factory_1.nationalitiesControllerFactory)()));
});
