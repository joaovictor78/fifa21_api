"use strict";
exports.__esModule = true;
exports.teamsControllerFactory = void 0;
var teams_repository_1 = require("../../infra/repositories/teams.repository");
var teams_controller_1 = require("../../web-controllers/teams.controller");
var teamsControllerFactory = function () {
    var teamsRepository = new teams_repository_1["default"]();
    var teamsController = new teams_controller_1["default"](teamsRepository);
    return teamsController;
};
exports.teamsControllerFactory = teamsControllerFactory;
