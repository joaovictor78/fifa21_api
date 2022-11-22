import NationalityEntity from '../../domain/entities/nationality.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import PlayerModel from './player.model';

@Entity('nationality')
export default class NationalityModel {
    @PrimaryGeneratedColumn()
    nationality_id: number;
    @Column({ unique: true })
    name: string;
    @OneToMany(type => PlayerModel, nationality => NationalityModel)
    players: PlayerModel[];
    static convertToModel(league: string): NationalityModel {
        const league_model = new NationalityModel();
        league_model.name = league;
        return league_model;
    }
    convertToEntity(): NationalityEntity {
        const league_entity = new NationalityEntity(this);
        return league_entity;
    }
}
