import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgres://acsigkix:pkAjUAM-FkMIroJqOA3inpSrRRq7lbIG@babar.db.elephantsql.com/acsigkix",
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    entities: [__dirname + '/../**/*.model{.ts,.js}'],
    synchronize: true,
    migrationsRun: true,
    extra: {
        max: 1
    }
});
