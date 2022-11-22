"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TeamAlreadyExistsFailure = /** @class */ (function (_super) {
    __extends(TeamAlreadyExistsFailure, _super);
    function TeamAlreadyExistsFailure(_a) {
        var name = _a.name, message = _a.message, stack = _a.stack;
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.message = message;
        _this.stack = stack;
        return _this;
    }
    return TeamAlreadyExistsFailure;
}(Error));
exports["default"] = TeamAlreadyExistsFailure;
