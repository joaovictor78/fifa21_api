"use strict";
exports.__esModule = true;
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: "postgres://aljwwvhk:ZWc91SZOXM2CfKNL3TinLltUrte0RfJT@babar.db.elephantsql.com/aljwwvhk",
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    entities: [__dirname + '/../**/*.model{.ts,.js}'],
    synchronize: true,
    migrationsRun: true
});
