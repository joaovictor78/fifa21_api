export default class PlayerSkillsEntity {
    public readonly gk_diving: number;
    public readonly gk_handling: number;
    public readonly gk_kicking: number;
    public readonly gk_reflexes: number;
    public readonly gk_speed: number;
    public readonly gk_positioning: number;
    public readonly player_traits: string;
    public readonly attacking_crossing: number;
    public readonly attacking_finishing: number;
    public readonly attacking_heading_accuracy: number;
    public readonly attacking_short_passing: number;
    public readonly attacking_volleys: number;
    public readonly skill_dribbling: number;
    public readonly skill_curve: number;
    public readonly skill_fk_accuracy: number;
    public readonly skill_long_passing: number;
    public readonly skill_ball_control: number;
    public readonly movement_acceleration: number;
    public readonly movement_sprint_speed: number;
    public readonly movement_agility: number;
    public readonly movement_reactions: number;
    public readonly movement_balance: number;
    public readonly power_shot_power: number;
    public readonly power_jumping: number;
    public readonly power_stamina: number;
    public readonly power_strength: number;
    public readonly power_long_shots: number;
    public readonly mentality_aggression: number;
    public readonly mentality_interceptions: number;
    public readonly mentality_positioning: number;
    public readonly mentality_vision: number;
    public readonly mentality_penalties: number;
    public readonly mentality_composure: number;
    public readonly defending_marking: number;
    public readonly defending_standing_tackle: number;
    public readonly defending_sliding_tackle: number;
    public readonly goalkeeping_diving: number;
    public readonly goalkeeping_handling: number;
    public readonly goalkeeping_kicking: number;
    public readonly goalkeeping_positioning: number;
    public readonly goalkeeping_reflexes: number;

    constructor({
        gk_diving,
        gk_handling,
        gk_kicking,
        gk_reflexes,
        gk_speed,
        gk_positioning,
        player_traits,
        attacking_crossing,
        attacking_finishing,
        attacking_heading_accuracy,
        attacking_short_passing,
        attacking_volleys,
        skill_dribbling,
        skill_curve,
        skill_fk_accuracy,
        skill_long_passing,
        skill_ball_control,
        movement_acceleration,
        movement_sprint_speed,
        movement_agility,
        movement_reactions,
        movement_balance,
        power_shot_power,
        power_jumping,
        power_stamina,
        power_strength,
        power_long_shots,
        mentality_aggression,
        mentality_interceptions,
        mentality_positioning,
        mentality_vision,
        mentality_penalties,
        mentality_composure,
        defending_marking,
        defending_standing_tackle,
        defending_sliding_tackle,
        goalkeeping_diving,
        goalkeeping_handling,
        goalkeeping_kicking,
        goalkeeping_positioning,
        goalkeeping_reflexes
    }: {
        gk_diving: number;
        gk_handling: number;
        gk_kicking: number;
        gk_reflexes: number;
        gk_speed: number;
        gk_positioning: number;
        player_traits: string;
        attacking_crossing: number;
        attacking_finishing: number;
        attacking_heading_accuracy: number;
        attacking_short_passing: number;
        attacking_volleys: number;
        skill_dribbling: number;
        skill_curve: number;
        skill_fk_accuracy: number;
        skill_long_passing: number;
        skill_ball_control: number;
        movement_acceleration: number;
        movement_sprint_speed: number;
        movement_agility: number;
        movement_reactions: number;
        movement_balance: number;
        power_shot_power: number;
        power_jumping: number;
        power_stamina: number;
        power_strength: number;
        power_long_shots: number;
        mentality_aggression: number;
        mentality_interceptions: number;
        mentality_positioning: number;
        mentality_vision: number;
        mentality_penalties: number;
        mentality_composure: number;
        defending_marking: number;
        defending_standing_tackle: number;
        defending_sliding_tackle: number;
        goalkeeping_diving: number;
        goalkeeping_handling: number;
        goalkeeping_kicking: number;
        goalkeeping_positioning: number;
        goalkeeping_reflexes: number;
    }) {
        this.gk_diving = gk_diving;
        this.gk_handling = gk_handling;
        this.gk_kicking = gk_kicking;
        this.gk_reflexes = gk_reflexes;
        this.gk_speed = gk_speed;
        this.gk_positioning = gk_positioning;
        this.player_traits = player_traits;
        this.attacking_crossing = attacking_crossing;
        this.attacking_finishing = attacking_finishing;
        this.attacking_heading_accuracy = attacking_heading_accuracy;
        this.attacking_short_passing = attacking_short_passing;
        this.attacking_volleys = attacking_volleys;
        this.skill_dribbling = skill_dribbling;
        this.skill_curve = skill_curve;
        this.skill_fk_accuracy = skill_fk_accuracy;
        this.skill_long_passing = skill_long_passing;
        this.skill_ball_control = skill_ball_control;
        this.movement_acceleration = movement_acceleration;
        this.movement_sprint_speed = movement_sprint_speed;
        this.movement_agility = movement_agility;
        this.movement_reactions = movement_reactions;
        this.movement_balance = movement_balance;
        this.power_shot_power = power_shot_power;
        this.power_jumping = power_jumping;
        this.power_stamina = power_stamina;
        this.power_strength = power_strength;
        this.power_long_shots = power_long_shots;
        this.mentality_aggression = mentality_aggression;
        this.mentality_interceptions = mentality_interceptions;
        this.mentality_positioning = mentality_positioning;
        this.mentality_vision = mentality_vision;
        this.mentality_penalties = mentality_penalties;
        this.mentality_composure = mentality_composure;
        this.defending_marking = defending_marking;
        this.defending_standing_tackle = defending_standing_tackle;
        this.defending_sliding_tackle = defending_sliding_tackle;
        this.goalkeeping_diving = goalkeeping_diving;
        this.goalkeeping_handling = goalkeeping_handling;
        this.goalkeeping_kicking = goalkeeping_kicking;
        this.goalkeeping_positioning = goalkeeping_positioning;
        this.goalkeeping_reflexes = goalkeeping_reflexes;
    }
}
