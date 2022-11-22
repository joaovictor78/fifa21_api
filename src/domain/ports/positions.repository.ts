import { Either } from '../../shared/either/either';
import PositionEntity from '../entities/position.entity';

export default interface IPositionsRepository {
    registerPosition(position: string): Promise<Either<Error, PositionEntity>>;
    findAllPositions({ page, limit }: { page: number; limit: number });
    findPositionsByName({ page, limit, position_name }: { page: number; limit: number, position_name: string });
}
