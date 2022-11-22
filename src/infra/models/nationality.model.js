"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var nationality_entity_1 = require("../../domain/entities/nationality.entity");
var typeorm_1 = require("typeorm");
var player_model_1 = require("./player.model");
var NationalityModel = /** @class */ (function () {
    function NationalityModel() {
    }
    NationalityModel_1 = NationalityModel;
    NationalityModel.convertToModel = function (league) {
        var league_model = new NationalityModel_1();
        league_model.name = league;
        return league_model;
    };
    NationalityModel.prototype.convertToEntity = function () {
        var league_entity = new nationality_entity_1["default"](this);
        return league_entity;
    };
    var NationalityModel_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], NationalityModel.prototype, "nationality_id");
    __decorate([
        (0, typeorm_1.Column)({ unique: true })
    ], NationalityModel.prototype, "name");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return player_model_1["default"]; }, function (nationality) { return NationalityModel_1; })
    ], NationalityModel.prototype, "players");
    NationalityModel = NationalityModel_1 = __decorate([
        (0, typeorm_1.Entity)('nationality')
    ], NationalityModel);
    return NationalityModel;
}());
exports["default"] = NationalityModel;
