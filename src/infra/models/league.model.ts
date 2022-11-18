import PlayersController from '@/web-controllers/players-controller';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import PlayerModel from './player.model';

@Entity('league')
export default class LeagueModel {
    @PrimaryGeneratedColumn()
    league_id: number;
    @Column()
    name: string;
    @OneToMany(type => PlayerModel, league => LeagueModel)
    players: PlayerModel[];
}
