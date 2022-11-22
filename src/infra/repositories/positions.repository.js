"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var either_1 = require("../../shared/either/either");
var typeorm_1 = require("typeorm");
var database_config_1 = require("../db/database.config");
var position_entity_1 = require("../../domain/entities/position.entity");
var position_model_1 = require("../models/position.model");
var position_alread_exists_error_1 = require("../errors/position_alread_exists.error");
var PositionsRepository = /** @class */ (function () {
    function PositionsRepository() {
        this.dataSource = database_config_1.AppDataSource.getRepository(position_model_1["default"]);
    }
    PositionsRepository.prototype.registerPosition = function (position) {
        return __awaiter(this, void 0, void 0, function () {
            var positionModel, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        positionModel = position_model_1["default"].convertToModel(position);
                        return [4 /*yield*/, this.dataSource.save(positionModel)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, (0, either_1.right)(new position_entity_1["default"](result))];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1 instanceof typeorm_1.QueryFailedError) {
                            if (error_1.driverError.code == 23505) {
                                error_1.message = error_1.driverError.detail;
                                return [2 /*return*/, (0, either_1.left)(new position_alread_exists_error_1["default"](error_1))];
                            }
                            else {
                                throw error_1;
                            }
                        }
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PositionsRepository.prototype.findAllPositions = function (_a) {
        var _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c;
        return __awaiter(this, void 0, void 0, function () {
            var _d, positions_model, total, error_2;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.findAndCount({
                                order: {
                                    name: "ASC"
                                },
                                take: limit,
                                skip: limit * page - limit
                            })];
                    case 1:
                        _d = _e.sent(), positions_model = _d[0], total = _d[1];
                        return [2 /*return*/, (0, either_1.right)({ total: total, positions_model: positions_model })];
                    case 2:
                        error_2 = _e.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PositionsRepository.prototype.findPositionsByName = function (_a) {
        var _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, position_name = _a.position_name;
        return __awaiter(this, void 0, void 0, function () {
            var _d, positions_model, total, error_3;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.dataSource.findAndCount({
                                where: {
                                    name: (0, typeorm_1.Like)("%".concat(position_name, "%"))
                                },
                                take: limit,
                                skip: limit * page - limit
                            })];
                    case 1:
                        _d = _e.sent(), positions_model = _d[0], total = _d[1];
                        return [2 /*return*/, (0, either_1.right)({ total: total, positions_model: positions_model })];
                    case 2:
                        error_3 = _e.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PositionsRepository;
}());
exports["default"] = PositionsRepository;
