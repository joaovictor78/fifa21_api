import { DataSource } from 'typeorm';
import { typeOrmConfig } from './database.config';

export const TypeOrmPgHelper = {
    client: DataSource,
    async connect(): Promise<void> {
        this.client = await typeOrmConfig.initialize();
    },
    async disconnect(): Promise<void> {
        this.client.close();
    },
};
