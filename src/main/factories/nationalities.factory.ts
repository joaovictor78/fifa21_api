import NationalitiesRepository from '../../infra/repositories/nationalities.repository';
import NationalitiesController from '../../web-controllers/nationalities.controller';

export const nationalitiesControllerFactory = (): NationalitiesController => {
    const nationalitiesRepository = new NationalitiesRepository();
    const nationalitiesController = new NationalitiesController(nationalitiesRepository);
    return nationalitiesController;
};