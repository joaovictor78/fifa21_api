import request from 'supertest';
import app from '../../../../src/main/configs/app';

describe('Content type Middleware', () => {
    test('should return default content type as json', async () => {
        app.get('/test', (req, res) => {
            res.send('');
        });
        await request(app).get('/test').expect('content-type', /json/);
    });
    /*
    test('should return xml content type when forced', async () => {
        app.get('/test', (req, res) => {
            res.type('xml');
            res.send('');
        });
        await request(app).get('/test').expect('content-type', /xml/);
    });
    */
});
