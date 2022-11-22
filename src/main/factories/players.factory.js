"use strict";
exports.__esModule = true;
exports.playersControllerFactory = void 0;
var players_repository_1 = require("../../infra/repositories/players.repository");
var players_controller_1 = require("../../web-controllers/players.controller");
var playersControllerFactory = function () {
    var playersRepository = new players_repository_1["default"]();
    var playersController = new players_controller_1["default"](playersRepository);
    return playersController;
};
exports.playersControllerFactory = playersControllerFactory;
