"use strict";
exports.__esModule = true;
exports.positionsControllerFactory = void 0;
var positions_repository_1 = require("../../infra/repositories/positions.repository");
var positions_controller_1 = require("../../web-controllers/positions.controller");
var positionsControllerFactory = function () {
    var positionsRepository = new positions_repository_1["default"]();
    var positionsController = new positions_controller_1["default"](positionsRepository);
    return positionsController;
};
exports.positionsControllerFactory = positionsControllerFactory;
