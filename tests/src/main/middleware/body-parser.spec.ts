import request from 'supertest';
import app from '../../../../src/main/configs/app';
describe('Body parser middleware', () => {
    test('should parser body as json', async () => {
        app.post('/test', (req, res) => {
            res.send(req.body);
        });
        await request(app)
            .post('/test')
            .send({ name: 'user' })
            .expect({ name: 'user' });
    });
});
