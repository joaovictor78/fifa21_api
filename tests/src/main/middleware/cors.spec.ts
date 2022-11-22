import request from 'supertest';
import app from '../../../../src/main/configs/app';

describe('CORS Middleware', () => {
    test('should enable CORS', async () => {
        app.post('/test', (req, res) => {
            res.send();
        });
        await request(app)
            .get('/test')
            .expect('access-control-allow-origin', '*')
            .expect('access-control-allow-headers', '*')
            .expect('access-control-allow-methods', '*');
    });
});
