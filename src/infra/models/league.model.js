"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var league_entity_1 = require("../../domain/entities/league.entity");
var typeorm_1 = require("typeorm");
var player_model_1 = require("./player.model");
var LeagueModel = /** @class */ (function () {
    function LeagueModel() {
    }
    LeagueModel_1 = LeagueModel;
    LeagueModel.convertToModel = function (league) {
        var league_model = new LeagueModel_1();
        league_model.name = league;
        return league_model;
    };
    LeagueModel.prototype.convertToEntity = function () {
        var league_entity = new league_entity_1["default"](this);
        return league_entity;
    };
    var LeagueModel_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LeagueModel.prototype, "league_id");
    __decorate([
        (0, typeorm_1.Column)({ unique: true })
    ], LeagueModel.prototype, "name");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return player_model_1["default"]; }, function (league) { return LeagueModel_1; })
    ], LeagueModel.prototype, "players");
    LeagueModel = LeagueModel_1 = __decorate([
        (0, typeorm_1.Entity)('league')
    ], LeagueModel);
    return LeagueModel;
}());
exports["default"] = LeagueModel;
