"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var position_entity_1 = require("../..//domain/entities/position.entity");
var typeorm_1 = require("typeorm");
var league_model_1 = require("./league.model");
var nationality_model_1 = require("./nationality.model");
var position_model_1 = require("./position.model");
var team_model_1 = require("./team.model");
var player_physical_characteristics_entity_1 = require("../../domain/entities/player-physical-characteristics.entity");
var player_financial_data_entity_1 = require("../../domain/entities/player-financial-data.entity");
var player_skills_entity_1 = require("../../domain/entities/player-skills.entity");
var player_potential_by_position_entity_1 = require("../../domain/entities/player-potential-by-position.entity");
var PlayerModel = /** @class */ (function () {
    function PlayerModel() {
    }
    PlayerModel_1 = PlayerModel;
    PlayerModel.convertToModel = function (player) {
        var league = new league_model_1["default"]();
        var team = new team_model_1["default"]();
        var nationality = new nationality_model_1["default"]();
        var physical_caracteristics = new player_physical_characteristics_entity_1["default"](player);
        var skills = new player_skills_entity_1["default"](player);
        var potential_by_position = new player_potential_by_position_entity_1["default"](player);
        var financial_data = new player_financial_data_entity_1["default"](player);
        var player_positions = player.player_positions_id.map(function (value) {
            var position = new position_model_1["default"]();
            position.position_id = value;
            return position;
        });
        nationality.nationality_id = player.nationality_id;
        league.league_id = player.league_id;
        team.team_id = player.team_id;
        var player_model = __assign(__assign(__assign(__assign(__assign(__assign({}, player), physical_caracteristics), financial_data), skills), potential_by_position), { league: league, team: team, nationality: nationality, player_positions: player_positions });
        return player_model;
    };
    PlayerModel.convertToEntity = function (player) {
        var league = player.league;
        var nationality = new nationality_model_1["default"]();
        var player_positions = player.player_positions.map(function (value) {
            var position = new position_entity_1["default"](value);
            position.position_id = value.position_id;
            return position;
        });
        nationality.name = player.nationality.name;
        league.name = player.league.name;
        var player_entity = __assign(__assign({}, player), { physical_caracteristics: player, financial_data: player, potential_by_position: player, skills: player, club_name: player.team.name, nationality: nationality.name, player_positions: player_positions, league_name: player.league.name });
        return player_entity;
    };
    var PlayerModel_1;
    __decorate([
        (0, typeorm_1.PrimaryColumn)()
    ], PlayerModel.prototype, "sofifa_id");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "player_url");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "short_name");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "long_name");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "age");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "height_cm");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "weight_kg");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "dob");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "body_type");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "real_face");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "value_eur");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "wage_eur");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "release_clause_eur");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return nationality_model_1["default"]; }, function () { return PlayerModel_1; }, { eager: true })
    ], PlayerModel.prototype, "nationality");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return team_model_1["default"]; }, function () { return PlayerModel_1; }, { eager: true })
    ], PlayerModel.prototype, "team");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return league_model_1["default"]; }, function () { return PlayerModel_1; }, { eager: true })
    ], PlayerModel.prototype, "league");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "league_rank");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return position_model_1["default"]; }, function (position) { return position.players; }, {
            eager: true
        }),
        (0, typeorm_1.JoinTable)({
            name: 'players_positions',
            joinColumn: {
                name: 'player_id',
                referencedColumnName: 'sofifa_id'
            },
            inverseJoinColumn: {
                name: 'position_id',
                referencedColumnName: 'position_id'
            }
        })
    ], PlayerModel.prototype, "player_positions");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "overall");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "potential");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "preferred_foot");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "international_reputation");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "weak_foot");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "skill_moves");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "work_rate");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "player_tags");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "team_position");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "team_jersey_number");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "loaned_from");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "joined");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "contract_valid_until");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "nation_position");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "nation_jersey_number");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "pace");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "shooting");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "passing");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "dribbling");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "defending");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "physic");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "gk_diving");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "gk_handling");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "gk_kicking");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "gk_reflexes");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "gk_speed");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "gk_positioning");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "player_traits");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "attacking_crossing");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "attacking_finishing");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "attacking_heading_accuracy");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "attacking_short_passing");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "attacking_volleys");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "skill_dribbling");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "skill_curve");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "skill_fk_accuracy");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "skill_long_passing");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "skill_ball_control");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "movement_acceleration");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "movement_sprint_speed");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "movement_agility");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "movement_reactions");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "movement_balance");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "power_shot_power");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "power_jumping");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "power_stamina");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "power_strength");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "power_long_shots");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "mentality_aggression");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "mentality_interceptions");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "mentality_positioning");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "mentality_vision");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "mentality_penalties");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "mentality_composure");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "defending_marking");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "defending_standing_tackle");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "defending_sliding_tackle");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "goalkeeping_diving");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "goalkeeping_handling");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "goalkeeping_kicking");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "goalkeeping_positioning");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "goalkeeping_reflexes");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "ls");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "st");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "rs");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "lw");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "lf");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "cf");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "rf");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "rw");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "lam");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "cam");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "ram");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "lm");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "lcm");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "cm");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "rcm");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "rm");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "lwb");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "ldm");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "cdm");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "rdm");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "rwb");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "lb");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "lcb");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "cb");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "rcb");
    __decorate([
        (0, typeorm_1.Column)()
    ], PlayerModel.prototype, "rb");
    PlayerModel = PlayerModel_1 = __decorate([
        (0, typeorm_1.Entity)('player')
    ], PlayerModel);
    return PlayerModel;
}());
exports["default"] = PlayerModel;
