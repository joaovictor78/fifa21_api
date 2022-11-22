export default class NationalityEntity {
    nationality_id: number;
    name: string;
    constructor({
        nationality_id,
        name
    }: {
        nationality_id: number;
        name: string;
    }) {
        this.nationality_id = nationality_id;
        this.name = name;
    }
}
