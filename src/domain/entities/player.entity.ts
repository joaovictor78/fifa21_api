import PlayerFinancialDataEntity from './player-financial-data.entity';
import PlayerPhysicalCharacteristicsEntity from './player-physical-characteristics.entity';
import PlayerPotentialByPositionEntity from './player-potential-by-position.entity';
import PlayerSkillsEntity from './player-skills.entity';

export default class PlayerEntity {
    public readonly sofifa_id: number;
    public readonly player_url: string;
    public readonly short_name: string;
    public readonly long_name: string;
    public readonly nationality: string;
    public readonly club_name: string;
    public readonly league_name: string;
    public readonly league_rank: number;
    public readonly overall: number;
    public readonly potential: number;
    public readonly player_positions: string[];
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
    public readonly physical_caracteristics: PlayerPhysicalCharacteristicsEntity;
    public readonly financial_data: PlayerFinancialDataEntity;
    public readonly skills: PlayerSkillsEntity;
    public readonly potential_by_position: PlayerPotentialByPositionEntity;

    constructor({
        sofifa_id,
        player_url,
        short_name,
        long_name,
        nationality,
        club_name,
        league_name,
        league_rank,
        overall,
        potential,
        player_positions,
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
        physical_caracteristics,
        financial_data,
        skills,
        potential_by_position,
    }: {
        sofifa_id: number;
        player_url: string;
        short_name: string;
        long_name: string;
        age: number;
        nationality: string;
        club_name: string;
        league_name: string;
        league_rank: number;
        overall: number;
        potential: number;
        player_positions: string[];
        preferred_foot: string;
        international_reputation: number;
        weak_foot: number;
        skill_moves: number;
        work_rate: string;
        player_tags: string;
        team_position: string;
        team_jersey_number: number;
        loaned_from: string;
        joined: string;
        contract_valid_until: number;
        nation_position: string;
        nation_jersey_number: number;
        pace: number;
        shooting: number;
        passing: number;
        dribbling: number;
        defending: number;
        physic: number;
        physical_caracteristics: PlayerPhysicalCharacteristicsEntity;
        financial_data: PlayerFinancialDataEntity;
        skills: PlayerSkillsEntity;
        potential_by_position: PlayerPotentialByPositionEntity;
    }) {
        this.sofifa_id = sofifa_id;
        this.player_url = player_url;
        this.short_name = short_name;
        this.long_name = long_name;
        this.nationality = nationality;
        this.club_name = club_name;
        this.league_name = league_name;
        this.league_rank = league_rank;
        this.overall = overall;
        this.potential = potential;
        this.player_positions = player_positions;
        this.preferred_foot = preferred_foot;
        this.international_reputation = international_reputation;
        this.weak_foot = weak_foot;
        this.skill_moves = skill_moves;
        this.work_rate = work_rate;
        this.player_tags = player_tags;
        this.team_position = team_position;
        this.team_jersey_number = team_jersey_number;
        this.loaned_from = loaned_from;
        this.joined = joined;
        this.contract_valid_until = contract_valid_until;
        this.nation_position = nation_position;
        this.nation_jersey_number = nation_jersey_number;
        this.pace = pace;
        this.shooting = shooting;
        this.passing = passing;
        this.dribbling = dribbling;
        this.defending = defending;
        this.physic = physic;
        this.physical_caracteristics = physical_caracteristics;
        this.financial_data = financial_data;
        this.skills = skills;
        this.potential_by_position = potential_by_position;
    }
}
