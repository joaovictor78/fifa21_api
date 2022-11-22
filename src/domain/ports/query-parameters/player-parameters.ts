import convertToNumber from '../../../shared/utils/convert_to_number';

export default class PlayerParameters {
    public readonly sofifa_id: number;
    public readonly player_url: string;
    public readonly short_name: string;
    public readonly long_name: string;
    public readonly nationality_id: number;
    public readonly team_id: number;
    public readonly league_id: number;
    public readonly league_rank: number;
    public readonly overall: number;
    public readonly potential: number;
    public readonly player_positions_id: number[];
    public readonly preferred_foot: string;
    public readonly international_reputation: number;
    public readonly weak_foot: number;
    public readonly skill_moves: number;
    public readonly work_rate: string;
    public readonly player_tags: string;
    public readonly team_position: string;
    public readonly team_jersey_number: number;
    public readonly loaned_from: string;
    public readonly joined: string;
    public readonly contract_valid_until: number;
    public readonly nation_position: string;
    public readonly nation_jersey_number: number;
    public readonly pace: number;
    public readonly shooting: number;
    public readonly passing: number;
    public readonly dribbling: number;
    public readonly defending: number;
    public readonly physic: number;
    public readonly age: number;
    public readonly height_cm: number;
    public readonly weight_kg: number;
    public readonly dob: string;
    public readonly body_type: string;
    public readonly real_face: boolean;
    public readonly value_eur: number;
    public readonly wage_eur: number;
    public readonly release_clause_eur: number;
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
    public readonly goalkeeping_reflexes: number;
    public readonly goalkeeping_handling: number;
    public readonly goalkeeping_kicking: number;
    public readonly goalkeeping_positioning: number;
    public readonly ls: string;
    public readonly st: string;
    public readonly rs: string;
    public readonly lw: string;
    public readonly lf: string;
    public readonly cf: string;
    public readonly rf: string;
    public readonly rw: string;
    public readonly lam: string;
    public readonly cam: string;
    public readonly ram: string;
    public readonly lm: string;
    public readonly lcm: string;
    public readonly cm: string;
    public readonly rcm: string;
    public readonly rm: string;
    public readonly lwb: string;
    public readonly ldm: string;
    public readonly cdm: string;
    public readonly rdm: string;
    public readonly rwb: string;
    public readonly lb: string;
    public readonly lcb: string;
    public readonly cb: string;
    public readonly rcb: string;
    public readonly rb: string;
    constructor({
        sofifa_id,
        player_url,
        short_name,
        long_name,
        nationality_id,
        team_id,
        league_id,
        league_rank,
        overall,
        potential,
        player_positions_id,
        preferred_foot,
        international_reputation,
        weak_foot,
        skill_moves,
        work_rate,
        player_tags,
        team_position,
        team_jersey_number,
        loaned_from,
        joined,
        contract_valid_until,
        nation_position,
        nation_jersey_number,
        pace,
        shooting,
        passing,
        dribbling,
        defending,
        physic,
        age,
        height_cm,
        weight_kg,
        dob,
        body_type,
        real_face,
        value_eur,
        wage_eur,
        release_clause_eur,
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
        goalkeeping_reflexes,
        ls,
        st,
        rs,
        lw,
        lf,
        cf,
        rf,
        rw,
        lam,
        cam,
        ram,
        lm,
        lcm,
        cm,
        rcm,
        rm,
        lwb,
        ldm,
        cdm,
        rdm,
        rwb,
        lb,
        lcb,
        cb,
        rcb,
        rb
    }: {
        sofifa_id: number | string;
        player_url: string;
        short_name: string;
        long_name: string;
        nationality_id: number;
        team_id: number | string;
        league_id: number | string;
        league_rank: number | string;
        overall: number | string;
        potential: number | string;
        player_positions_id: number[];
        preferred_foot: string;
        international_reputation: number | string;
        weak_foot: number | string;
        skill_moves: number | string;
        work_rate: string;
        player_tags: string;
        team_position: string;
        team_jersey_number: number | string;
        loaned_from: string;
        joined: string;
        contract_valid_until: number | string;
        nation_position: string;
        nation_jersey_number: number | string;
        pace: number | string;
        shooting: number | string;
        passing: number | string;
        dribbling: number | string;
        defending: number | string;
        physic: number | string;
        age: number | string;
        height_cm: number | string;
        weight_kg: number | string;
        dob: string;
        body_type: string;
        real_face: boolean;
        value_eur: number | string;
        wage_eur: number | string;
        release_clause_eur: number | string;
        gk_diving: number | string;
        gk_handling: number | string;
        gk_kicking: number | string;
        gk_reflexes: number | string;
        gk_speed: number | string;
        gk_positioning: number | string;
        player_traits: string;
        attacking_crossing: number | string;
        attacking_finishing: number | string;
        attacking_heading_accuracy: number | string;
        attacking_short_passing: number | string;
        attacking_volleys: number | string;
        skill_dribbling: number | string;
        skill_curve: number | string;
        skill_fk_accuracy: number | string;
        skill_long_passing: number | string;
        skill_ball_control: number | string;
        movement_acceleration: number | string;
        movement_sprint_speed: number | string;
        movement_agility: number | string;
        movement_reactions: number | string;
        movement_balance: number | string;
        power_shot_power: number | string;
        power_jumping: number | string;
        power_stamina: number | string;
        power_strength: number | string;
        power_long_shots: number | string;
        mentality_aggression: number | string;
        mentality_interceptions: number | string;
        mentality_positioning: number | string;
        mentality_vision: number | string;
        mentality_penalties: number | string;
        mentality_composure: number | string;
        defending_marking: number | string;
        defending_standing_tackle: number | string;
        defending_sliding_tackle: number | string;
        goalkeeping_diving: number | string;
        goalkeeping_handling: number | string;
        goalkeeping_kicking: number | string;
        goalkeeping_positioning: number | string;
        goalkeeping_reflexes: number | string;
        ls: string;
        st: string;
        rs: string;
        lw: string;
        lf: string;
        cf: string;
        rf: string;
        rw: string;
        lam: string;
        cam: string;
        ram: string;
        lm: string;
        lcm: string;
        cm: string;
        rcm: string;
        rm: string;
        lwb: string;
        ldm: string;
        cdm: string;
        rdm: string;
        rwb: string;
        lb: string;
        lcb: string;
        cb: string;
        rcb: string;
        rb: string;
    }) {
        this.sofifa_id = convertToNumber(sofifa_id);
        this.player_url = player_url;
        this.short_name = short_name;
        this.long_name = long_name;
        this.nationality_id = convertToNumber(nationality_id);
        this.team_id = convertToNumber(team_id);
        this.league_id = convertToNumber(league_id);
        this.league_rank = convertToNumber(league_rank);
        this.overall = convertToNumber(overall);
        this.potential = convertToNumber(potential);
        this.player_positions_id = player_positions_id;
        this.preferred_foot = preferred_foot;
        this.international_reputation = convertToNumber(
            international_reputation
        );
        this.weak_foot = convertToNumber(weak_foot);
        this.skill_moves = convertToNumber(skill_moves);
        this.work_rate = work_rate;
        this.player_tags = player_tags;
        this.team_position = team_position;
        this.team_jersey_number = convertToNumber(team_jersey_number);
        this.loaned_from = loaned_from;
        this.joined = joined;
        this.contract_valid_until = convertToNumber(contract_valid_until);
        this.nation_position = nation_position;
        this.nation_jersey_number = convertToNumber(nation_jersey_number);
        this.pace = convertToNumber(pace);
        this.shooting = convertToNumber(shooting);
        this.passing = convertToNumber(passing);
        this.dribbling = convertToNumber(dribbling);
        this.defending = convertToNumber(defending);
        this.physic = convertToNumber(physic);
        this.value_eur = convertToNumber(value_eur);
        this.wage_eur = convertToNumber(wage_eur);
        this.release_clause_eur = convertToNumber(release_clause_eur);
        this.age = convertToNumber(age);
        this.height_cm = convertToNumber(height_cm);
        this.weight_kg = convertToNumber(weight_kg);
        this.dob = dob;
        this.body_type = body_type;
        this.real_face = real_face;
        this.gk_diving = convertToNumber(gk_diving);
        this.gk_handling = convertToNumber(gk_handling);
        this.gk_kicking = convertToNumber(gk_kicking);
        this.gk_reflexes = convertToNumber(gk_reflexes);
        this.gk_speed = convertToNumber(gk_speed);
        this.gk_positioning = convertToNumber(gk_positioning);
        this.player_traits = player_traits;
        this.attacking_crossing = convertToNumber(attacking_crossing);
        this.attacking_finishing = convertToNumber(attacking_finishing);
        this.attacking_heading_accuracy = convertToNumber(
            attacking_heading_accuracy
        );
        this.attacking_short_passing = convertToNumber(attacking_short_passing);
        this.attacking_volleys = convertToNumber(attacking_volleys);
        this.skill_dribbling = convertToNumber(skill_dribbling);
        this.skill_curve = convertToNumber(skill_curve);
        this.skill_fk_accuracy = convertToNumber(skill_fk_accuracy);
        this.skill_long_passing = convertToNumber(skill_long_passing);
        this.skill_ball_control = convertToNumber(skill_ball_control);
        this.movement_acceleration = convertToNumber(movement_acceleration);
        this.movement_sprint_speed = convertToNumber(movement_sprint_speed);
        this.movement_agility = convertToNumber(movement_agility);
        this.movement_reactions = convertToNumber(movement_reactions);
        this.movement_balance = convertToNumber(movement_balance);
        this.power_shot_power = convertToNumber(power_shot_power);
        this.power_jumping = convertToNumber(power_jumping);
        this.power_stamina = convertToNumber(power_stamina);
        this.power_strength = convertToNumber(power_strength);
        this.power_long_shots = convertToNumber(power_long_shots);
        this.mentality_aggression = convertToNumber(mentality_aggression);
        this.mentality_interceptions = convertToNumber(mentality_interceptions);
        this.mentality_positioning = convertToNumber(mentality_positioning);
        this.mentality_vision = convertToNumber(mentality_vision);
        this.mentality_penalties = convertToNumber(mentality_penalties);
        this.mentality_composure = convertToNumber(mentality_composure);
        this.defending_marking = convertToNumber(defending_marking);
        this.defending_standing_tackle = convertToNumber(
            defending_standing_tackle
        );
        this.defending_sliding_tackle = convertToNumber(
            defending_sliding_tackle
        );
        this.goalkeeping_diving = convertToNumber(goalkeeping_diving);
        this.goalkeeping_handling = convertToNumber(goalkeeping_handling);
        this.goalkeeping_kicking = convertToNumber(goalkeeping_kicking);
        this.goalkeeping_positioning = convertToNumber(goalkeeping_positioning);
        this.goalkeeping_reflexes = convertToNumber(goalkeeping_reflexes);
        this.ls = ls;
        this.st = st;
        this.rs = rs;
        this.lw = lw;
        this.lf = lf;
        this.cf = cf;
        this.rf = rf;
        this.rw = rw;
        this.lam = lam;
        this.cam = cam;
        this.ram = ram;
        this.lm = lm;
        this.lcm = lcm;
        this.cm = cm;
        this.rcm = rcm;
        this.rm = rm;
        this.lwb = lwb;
        this.ldm = ldm;
        this.cdm = cdm;
        this.rdm = rdm;
        this.rwb = rwb;
        this.lb = lb;
        this.lcb = lcb;
        this.cb = cb;
        this.rcb = rcb;
        this.rb = rb;
    }
}
