"use strict";
exports.__esModule = true;
var express_1 = require("express");
var middleware_1 = require("./middleware");
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
(0, middleware_1["default"])(app);
(0, routes_1["default"])(app);
exports["default"] = app;
