"use strict";
exports.__esModule = true;
var body_parser_1 = require("../middleware/body-parser");
var cors_1 = require("../middleware/cors");
var content_type_1 = require("../middleware/content-type");
exports["default"] = (function (app) {
    app.use(body_parser_1.bodyParser);
    app.use(cors_1.cors);
    app.use(content_type_1.contentType);
});
