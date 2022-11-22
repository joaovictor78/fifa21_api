export default class TeamEntity {
    team_id: number;
    name: string;
    constructor({ team_id, name }: { team_id: number; name: string }) {
        this.team_id = team_id;
        this.name = name;
    }
}
