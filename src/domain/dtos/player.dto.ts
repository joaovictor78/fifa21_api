import PlayerModel from '@/infra/models/player.model';
import PlayerEntity from '../entities/player.entity';

export class PlayerDTO {
    sofifa_id: number;
    player_url: string;
    short_name: string;
    long_name: string;
    nationality: string;
    age: number;
    height_cm: number;
    weight_kg: number;
    club_name: string;
    league_name: string;
    overall: number;
    preferred_foot: string;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physic: number;

    static convertFromModel(value: PlayerModel): PlayerDTO {
        const {
            sofifa_id,
            player_url,
            short_name,
            long_name,
            nationality,
            age,
            height_cm,
            weight_kg,
            club_name,
            league_name,
            overall,
            preferred_foot,
            pace,
            shooting,
            passing,
            dribbling,
            defending,
            physic
        } = {...value, club_name: value.team.name, league_name: value.league.name, nationality: value.nationality.name};
        return {
            sofifa_id,
            player_url,
            short_name,
            long_name,
            nationality,
            age,
            height_cm,
            weight_kg,
            club_name,
            league_name,
            overall,
            preferred_foot,
            pace,
            shooting,
            passing,
            dribbling,
            defending,
            physic
        };
    }
    
}
