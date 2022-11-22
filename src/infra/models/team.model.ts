import TeamEntity from '../../domain/entities/team.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import PlayerModel from './player.model';

@Entity('team')
export default class TeamModel {
    @PrimaryGeneratedColumn()
    team_id: number;
    @Column({ unique: true })
    name: string;
    @OneToMany(type => PlayerModel, team => TeamModel)
    players: PlayerModel[];
    static convertToModel(league: string): TeamModel {
        const league_model = new TeamModel();
        league_model.name = league;
        return league_model;
    }
    convertToEntity(): TeamEntity {
        const league_entity = new TeamEntity(this);
        return league_entity;
    }
}
