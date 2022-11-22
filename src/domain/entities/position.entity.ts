export default class PositionEntity {
    position_id: number;
    name: string;
    constructor({ position_id, name }: { position_id: number; name: string }) {
        this.position_id = position_id;
        this.name = name;
    }
}
