import { TypeOrmPgHelper } from '../infra/db/typeorm-pg-helper';
import app from './configs/app';

const port = process.env.PORT || 3000;

TypeOrmPgHelper.connect()
    .then(() => {
        app.listen(port, () => {
            console.log('rodando server');
        });
    })
    .catch(error =>
        console.error('An error occurred while starting the database: ', error),
    );
