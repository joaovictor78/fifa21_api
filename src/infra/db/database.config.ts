import { DataSource } from 'typeorm';

export const typeOrmConfig = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'postgres',
    migrations: [__dirname + '/migration/*{.ts,.js}'],
    entities: [__dirname + '/../**/*.model{.ts,.js}'],
    synchronize: true
});
