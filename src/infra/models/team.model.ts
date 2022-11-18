import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import PlayerModel from './player.model';

@Entity('team')
export default class TeamModel {
    @PrimaryGeneratedColumn()
    team_id: number;
    @Column()
    name: string;
    @OneToMany(type => PlayerModel, team => TeamModel)
    players: PlayerModel[];
}
