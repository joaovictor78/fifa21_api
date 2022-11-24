import { Either, left, right } from '../../shared/either/either';
import NationalityEntity from '../../domain/entities/nationality.entity';
import INationalitiesRepository from '../../domain/ports/nationalities.repository';
import NationalityModel from '../models/nationality.model';
import NationalityAlreadyExistsFailure from '../errors/nationality_already_exists.error';
import { Like, QueryFailedError, Repository } from 'typeorm';
import { AppDataSource } from '../db/database.config';

export default class NationalitiesRepository
    implements INationalitiesRepository
{
    private readonly dataSource: Repository<NationalityModel> =
        AppDataSource.getRepository(NationalityModel);
    async registerNationality(
        nationality: string
    ): Promise<Either<Error, NationalityEntity>> {
        try {
            const nationalityModel =
                NationalityModel.convertToModel(nationality);
            const result: NationalityModel = await this.dataSource.save(
                nationalityModel
            );
            return right(new NationalityEntity(result));
        } catch (error) {
            if (error instanceof QueryFailedError) {
                if (error.driverError.code == 23505) {
                    error.message = error.driverError.detail;
                    return left(new NationalityAlreadyExistsFailure(error));
                } else {
                    throw error;
                }
            }
            throw error;
        }
    }

    async findAllNationalities({ page = 1, limit = 10 }: { page: number; limit: number }) {
        try{
            const [nationality_model, total] = await this.dataSource.findAndCount({
                order: {
                    name: "ASC"
                },
                take: limit,
                skip: limit * page - limit
            });
            return right({ total, nationalities: nationality_model });
        }
        catch (error) {
            throw error;
        }
    }

    async findNationalitiesByName({
        page = 1,
        limit = 10,
        nationality_name
    }: {
        page: number;
        limit: number,
        nationality_name: string
    }) {
        try{
            const [nationalities_model, total] = await this.dataSource.findAndCount({
                where: {
                    name: Like(`%${nationality_name}%`)
                },
                take: limit,
                skip: limit * page - limit
            });
            return right({ total, nationalities: nationalities_model });
        }
        catch (error) {
            throw error;
        }
    }
}
