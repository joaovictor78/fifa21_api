import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgres://saaffwsr:3w9NvQ4PyaWXDnpVgx6BDjGDi2oTqsq4@babar.db.elephantsql.com/saaffwsr",
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    entities: [__dirname + '/../**/*.model{.ts,.js}'],
    synchronize: true,
    migrationsRun: true,
    extra: {
        max: 1
    }
});
