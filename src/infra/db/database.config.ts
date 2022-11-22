import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'babar.db.elephantsql.com',
    port: 5432,
    username: 'aljwwvhk',
    password: 'ZWc91SZOXM2CfKNL3TinLltUrte0RfJT',
    database: 'aljwwvhk',
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    entities: [__dirname + '/../**/*.model{.ts,.js}'],
    synchronize: true,
    migrationsRun: true
});
