import { DataSource } from 'typeorm';
import { AppDataSource } from './database.config';

export const TypeOrmPgHelper = {
    client: DataSource,
    async connect(): Promise<void> {
        this.client = await AppDataSource.initialize();
    },
    async disconnect(): Promise<void> {
        this.client.close();
    }
};
