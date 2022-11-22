import PositionEntity from '../../domain/entities/position.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import PlayerModel from './player.model';

@Entity('position')
export default class PositionModel {
    @PrimaryGeneratedColumn()
    position_id: number;
    @Column({ unique: true })
    name: string;
    @ManyToMany(() => PlayerModel, player => player.player_positions)
    players: PlayerModel[];
    static convertToModel(league: string): PositionModel {
        const position_model = new PositionModel();
        position_model.name = league;
        return position_model;
    }
    convertToEntity(): PositionEntity {
        const position_entity = new PositionEntity(this);
        return position_entity;
    }
}
