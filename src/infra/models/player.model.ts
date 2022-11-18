import {
    Column,
    Entity,
    PrimaryColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
    ManyToOne
} from 'typeorm';
import LeagueModel from './league.model';
import NationalityModel from './nationality.model';
import PositionModel from './position.model';
import TeamModel from './team.model';

@Entity('player')
export default class PlayerModel {
    @PrimaryColumn()
    sofifa_id: number;
    @Column()
    player_url: string;
    @Column()
    short_name: string;
    @Column()
    long_name: string;
    @Column()
    age: number;
    @Column()
    height_cm: number;
    @Column()
    weight_kg: number;
    @Column()
    dob: string;
    @Column()
    body_type: string;
    @Column()
    real_face: boolean;
    @Column()
    value_eur: number;
    @Column()
    wage_eur: number;
    @Column()
    release_clause_eur: number;
    @ManyToOne(() => NationalityModel, () => PlayerModel)
    nationality: NationalityModel;
    @ManyToOne(() => TeamModel, () => PlayerModel)
    club_name: string;
    @ManyToOne(() => LeagueModel, () => PlayerModel)
    league: LeagueModel;
    @Column()
    league_rank: number;
    @ManyToMany(() => PositionModel, position => position.players)
    @JoinTable({
        name: 'players_positions',
        joinColumn: {
            name: 'player_id',
            referencedColumnName: 'sofifa_id'
        },
        inverseJoinColumn: {
            name: 'position_id',
            referencedColumnName: 'position_id'
        }
    })
    player_positions: PositionModel;
    @Column()
    overall: number;
    @Column()
    potential: number;
    @Column()
    preferred_foot: string;
    @Column()
    international_reputation: number;
    @Column()
    weak_foot: number;
    @Column()
    skill_moves: number;
    @Column()
    work_rate: string;
    @Column()
    player_tags: string;
    @Column()
    team_position: string;
    @Column()
    team_jersey_number: number;
    @Column()
    loaned_from: string;
    @Column()
    joined: string;
    @Column()
    contract_valid_until: number;
    @Column()
    nation_position: string;
    @Column()
    nation_jersey_number: number;
    @Column()
    pace: number;
    @Column()
    shooting: number;
    @Column()
    passing: number;
    @Column()
    dribbling: number;
    @Column()
    defending: number;
    @Column()
    physic: number;
    @Column()
    gk_diving: number;
    @Column()
    gk_handling: number;
    @Column()
    gk_kicking: number;
    @Column()
    gk_reflexes: number;
    @Column()
    gk_speed: number;
    @Column()
    gk_positioning: number;
    @Column()
    player_traits: string;
    @Column()
    attacking_crossing: number;
    @Column()
    attacking_finishing: number;
    @Column()
    attacking_heading_accuracy: number;
    @Column()
    attacking_short_passing: number;
    @Column()
    attacking_volleys: number;
    @Column()
    skill_dribbling: number;
    @Column()
    skill_curve: number;
    @Column()
    skill_fk_accuracy: number;
    @Column()
    skill_long_passing: number;
    @Column()
    skill_ball_control: number;
    @Column()
    movement_acceleration: number;
    @Column()
    movement_sprint_speed: number;
    @Column()
    movement_agility: number;
    @Column()
    movement_reactions: number;
    @Column()
    movement_balance: number;
    @Column()
    power_shot_power: number;
    @Column()
    power_jumping: number;
    @Column()
    power_stamina: number;
    @Column()
    power_strength: number;
    @Column()
    power_long_shots: number;
    @Column()
    mentality_aggression: number;
    @Column()
    mentality_interceptions: number;
    @Column()
    mentality_positioning: number;
    @Column()
    mentality_vision: number;
    @Column()
    mentality_penalties: number;
    @Column()
    mentality_composure: number;
    @Column()
    defending_marking: number;
    @Column()
    defending_standing_tackle: number;
    @Column()
    defending_sliding_tackle: number;
    @Column()
    goalkeeping_diving: number;
    @Column()
    goalkeeping_handling: number;
    @Column()
    goalkeeping_kicking: number;
    @Column()
    goalkeeping_positioning: number;
    @Column()
    goalkeeping_reflexes: number;
    @Column()
    ls: string;
    @Column()
    st: string;
    @Column()
    rs: string;
    @Column()
    lw: string;
    @Column()
    lf: string;
    @Column()
    cf: string;
    @Column()
    rf: string;
    @Column()
    rw: string;
    @Column()
    lam: string;
    @Column()
    cam: string;
    @Column()
    ram: string;
    @Column()
    lm: string;
    @Column()
    lcm: string;
    @Column()
    cm: string;
    @Column()
    rcm: string;
    @Column()
    rm: string;
    @Column()
    lwb: string;
    @Column()
    ldm: string;
    @Column()
    cdm: string;
    @Column()
    rdm: string;
    @Column()
    rwb: string;
    @Column()
    lb: string;
    @Column()
    lcb: string;
    @Column()
    cb: string;
    @Column()
    rcb: string;
    @Column()
    rb: string;
    @Column()
    ls_whitout_ir: number;
    @Column()
    st_whitout_ir: number;
    @Column()
    rs_whitout_ir: number;
    @Column()
    lw_whitout_ir: number;
    @Column()
    lf_whitout_ir: number;
    @Column()
    cf_whitout_ir: number;
    @Column()
    rf_whitout_ir: number;
    @Column()
    rw_whitout_ir: number;
    @Column()
    lam_whitout_ir: number;
    @Column()
    cam_whitout_ir: number;
    @Column()
    ram_whitout_ir: number;
    @Column()
    lm_whitout_ir: number;
    @Column()
    lcm_whitout_ir: number;
    @Column()
    cm_whitout_ir: number;
    @Column()
    rcm_whitout_ir: number;
    @Column()
    rm_whitout_ir: number;
    @Column()
    lwb_whitout_ir: number;
    @Column()
    ldm_whitout_ir: number;
    @Column()
    cdm_whitout_ir: number;
    @Column()
    rdm_whitout_ir: number;
    @Column()
    rwb_whitout_ir: number;
    @Column()
    lb_whitout_ir: number;
    @Column()
    lcb_whitout_ir: number;
    @Column()
    cb_whitout_ir: number;
    @Column()
    rcb_whitout_ir: number;
    @Column()
    rb_whitout_ir: number;
}
