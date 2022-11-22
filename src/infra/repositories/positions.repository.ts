import { Either, left, right } from '../../shared/either/either';
import { Like, QueryFailedError, Repository } from 'typeorm';
import { AppDataSource } from '../db/database.config';
import IPositionsRepository from '../../domain/ports/positions.repository';
import PositionEntity from '../../domain/entities/position.entity';
import PositionModel from '../models/position.model';
import PositionAlreadyExistsFailure from '../errors/position_alread_exists.error';

export default class PositionsRepository implements IPositionsRepository {
    private readonly dataSource: Repository<PositionModel> =
        AppDataSource.getRepository(PositionModel);

    async registerPosition(
        position: string
    ): Promise<Either<Error, PositionEntity>> {
        try {
            const positionModel = PositionModel.convertToModel(position);
            const result: PositionModel = await this.dataSource.save(
                positionModel
            );
            return right(new PositionEntity(result));
        } catch (error) {
            if (error instanceof QueryFailedError) {
                if (error.driverError.code == 23505) {
                    error.message = error.driverError.detail;
                    return left(new PositionAlreadyExistsFailure(error));
                } else {
                    throw error;
                }
            }
            throw error;
        }
    }
    async findAllPositions({ page = 1, limit = 10 }: { page: number; limit: number }) {
        try{
            const [positions_model, total] = await this.dataSource.findAndCount({
                order: {
                    name: "ASC"
                },
                take: limit,
                skip: limit * page - limit
            });
            return right({ total, positions_model });
        }
        catch (error) {
            throw error;
        }
    }

    async findPositionsByName({
        page = 1,
        limit = 10,
        position_name
    }: {
        page: number;
        limit: number,
        position_name: string
    }) {
        try{
            const [positions_model, total] = await this.dataSource.findAndCount({
                where: {
                    name: Like(`%${position_name}%`)
                },
                take: limit,
                skip: limit * page - limit
            });
            return right({ total, positions_model });
        }
        catch (error) {
            throw error;
        }
    }
}
