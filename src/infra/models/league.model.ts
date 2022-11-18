import LeagueEntity from '../../domain/entities/league.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import PlayerModel from './player.model';

@Entity('league')
export default class LeagueModel {
    @PrimaryGeneratedColumn()
    league_id: number;
    @Column({ unique: true })
    name: string;
    @OneToMany(type => PlayerModel, league => LeagueModel)
    players: PlayerModel[];

    static convertToModel(league: string): LeagueModel {
        const league_model = new LeagueModel();
        league_model.name = league;
        return league_model;
    }
    convertToEntity(): LeagueEntity {
        const league_entity = new LeagueEntity(this);
        return league_entity;
    }
}
