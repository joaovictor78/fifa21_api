import { Either } from '../../shared/either/either';
import NationalityEntity from '../entities/nationality.entity';

export default interface INationalitiesRepository {
    registerNationality(
        league: string
    ): Promise<Either<Error, NationalityEntity>>;
    findAllNationalities({ page, limit }: { page: number; limit: number });
    findNationalitiesByName({ page, limit, nationality_name }: { page: number; limit: number, nationality_name: string });
}
