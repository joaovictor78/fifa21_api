"use strict";
exports.__esModule = true;
var typeorm_pg_helper_1 = require("../infra/db/typeorm-pg-helper");
var app_1 = require("./configs/app");
typeorm_pg_helper_1.TypeOrmPgHelper.connect()
    .then(function () {
    app_1["default"].listen(3000, function () {
        console.log('rodando server');
    });
})["catch"](function (error) {
    return console.error('An error occurred while starting the database: ', error);
});
