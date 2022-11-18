import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import PlayerModel from './player.model';

@Entity('nationality')
export default class NationalityModel {
    @PrimaryGeneratedColumn()
    nationality_id: number;
    @Column()
    name: string;
    @OneToMany(type => PlayerModel, nationality => NationalityModel)
    players: PlayerModel[];
}
