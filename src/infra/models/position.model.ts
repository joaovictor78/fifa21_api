import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import PlayerModel from './player.model';

@Entity('position')
export default class PositionModel {
    @PrimaryGeneratedColumn()
    position_id: number;
    @Column()
    name: string;
    @ManyToMany(() => PlayerModel, player => player.player_positions)
    players: PlayerModel[];
}
