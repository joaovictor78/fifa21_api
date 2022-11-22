import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URI || "postgres://aljwwvhk:ZWc91SZOXM2CfKNL3TinLltUrte0RfJT@babar.db.elephantsql.com/aljwwvhk",
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    entities: [__dirname + '/../**/*.model{.ts,.js}'],
    synchronize: true,
    migrationsRun: true
});
