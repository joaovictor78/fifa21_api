"use strict";
exports.__esModule = true;
exports.leaguesControllerFactory = void 0;
var leagues_repository_1 = require("../../infra/repositories/leagues.repository");
var leagues_controller_1 = require("../../web-controllers/leagues.controller");
var leaguesControllerFactory = function () {
    var leaguesRepository = new leagues_repository_1["default"]();
    var leaguesController = new leagues_controller_1["default"](leaguesRepository);
    return leaguesController;
};
exports.leaguesControllerFactory = leaguesControllerFactory;
