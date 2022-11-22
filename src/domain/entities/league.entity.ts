export default class LeagueEntity {
    league_id: number;
    name: string;
    constructor({ league_id, name }: { league_id: number; name: string }) {
        this.league_id = league_id;
        this.name = name;
    }
}
