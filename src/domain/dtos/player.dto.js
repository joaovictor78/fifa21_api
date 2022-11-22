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
exports.__esModule = true;
exports.PlayerDTO = void 0;
var PlayerDTO = /** @class */ (function () {
    function PlayerDTO() {
    }
    PlayerDTO.convertFromModel = function (value) {
        var _a = __assign(__assign({}, value), { club_name: value.team.name, league_name: value.league.name, nationality: value.nationality.name }), sofifa_id = _a.sofifa_id, player_url = _a.player_url, short_name = _a.short_name, long_name = _a.long_name, nationality = _a.nationality, age = _a.age, height_cm = _a.height_cm, weight_kg = _a.weight_kg, club_name = _a.club_name, league_name = _a.league_name, overall = _a.overall, preferred_foot = _a.preferred_foot, pace = _a.pace, shooting = _a.shooting, passing = _a.passing, dribbling = _a.dribbling, defending = _a.defending, physic = _a.physic;
        return {
            sofifa_id: sofifa_id,
            player_url: player_url,
            short_name: short_name,
            long_name: long_name,
            nationality: nationality,
            age: age,
            height_cm: height_cm,
            weight_kg: weight_kg,
            club_name: club_name,
            league_name: league_name,
            overall: overall,
            preferred_foot: preferred_foot,
            pace: pace,
            shooting: shooting,
            passing: passing,
            dribbling: dribbling,
            defending: defending,
            physic: physic
        };
    };
    return PlayerDTO;
}());
exports.PlayerDTO = PlayerDTO;
