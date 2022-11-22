"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var position_entity_1 = require("../../domain/entities/position.entity");
var typeorm_1 = require("typeorm");
var player_model_1 = require("./player.model");
var PositionModel = /** @class */ (function () {
    function PositionModel() {
    }
    PositionModel_1 = PositionModel;
    PositionModel.convertToModel = function (league) {
        var position_model = new PositionModel_1();
        position_model.name = league;
        return position_model;
    };
    PositionModel.prototype.convertToEntity = function () {
        var position_entity = new position_entity_1["default"](this);
        return position_entity;
    };
    var PositionModel_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PositionModel.prototype, "position_id");
    __decorate([
        (0, typeorm_1.Column)({ unique: true })
    ], PositionModel.prototype, "name");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return player_model_1["default"]; }, function (player) { return player.player_positions; })
    ], PositionModel.prototype, "players");
    PositionModel = PositionModel_1 = __decorate([
        (0, typeorm_1.Entity)('position')
    ], PositionModel);
    return PositionModel;
}());
exports["default"] = PositionModel;
