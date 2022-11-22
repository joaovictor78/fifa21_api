"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var team_entity_1 = require("../../domain/entities/team.entity");
var typeorm_1 = require("typeorm");
var player_model_1 = require("./player.model");
var TeamModel = /** @class */ (function () {
    function TeamModel() {
    }
    TeamModel_1 = TeamModel;
    TeamModel.convertToModel = function (league) {
        var league_model = new TeamModel_1();
        league_model.name = league;
        return league_model;
    };
    TeamModel.prototype.convertToEntity = function () {
        var league_entity = new team_entity_1["default"](this);
        return league_entity;
    };
    var TeamModel_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TeamModel.prototype, "team_id");
    __decorate([
        (0, typeorm_1.Column)({ unique: true })
    ], TeamModel.prototype, "name");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return player_model_1["default"]; }, function (team) { return TeamModel_1; })
    ], TeamModel.prototype, "players");
    TeamModel = TeamModel_1 = __decorate([
        (0, typeorm_1.Entity)('team')
    ], TeamModel);
    return TeamModel;
}());
exports["default"] = TeamModel;
