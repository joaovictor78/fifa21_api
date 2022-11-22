"use strict";
exports.__esModule = true;
exports.nationalitiesControllerFactory = void 0;
var nationalities_repository_1 = require("../../infra/repositories/nationalities.repository");
var nationalities_controller_1 = require("../../web-controllers/nationalities.controller");
var nationalitiesControllerFactory = function () {
    var nationalitiesRepository = new nationalities_repository_1["default"]();
    var nationalitiesController = new nationalities_controller_1["default"](nationalitiesRepository);
    return nationalitiesController;
};
exports.nationalitiesControllerFactory = nationalitiesControllerFactory;
