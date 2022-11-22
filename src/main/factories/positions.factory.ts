import PositionsRepository from '../../infra/repositories/positions.repository';
import PositionsController from '../../web-controllers/positions.controller';

export const positionsControllerFactory = (): PositionsController => {
    const positionsRepository = new PositionsRepository();
    const positionsController = new PositionsController(positionsRepository);
    return positionsController;
};