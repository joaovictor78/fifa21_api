import { TypeOrmPgHelper } from '../infra/db/typeorm-pg-helper';
import app from './configs/app';
TypeOrmPgHelper.connect()
    .then(() => {
        app.listen(3000, () => {
            console.log('rodando server');
        });
    })
    .catch(error =>
        console.error('An error occurred while starting the database: ', error),
    );
