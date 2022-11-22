export default class PlayerPhysicalCharacteristicsEntity {
    public readonly age: number;
    public readonly height_cm: number;
    public readonly weight_kg: number;
    public readonly dob: string;
    public readonly body_type: string;
    public readonly real_face: boolean;

    constructor({
        age,
        height_cm,
        weight_kg,
        dob,
        body_type,
        real_face
    }: {
        age: number;
        height_cm: number;
        weight_kg: number;
        dob: string;
        body_type: string;
        real_face: boolean;
    }) {
        this.age = age;
        this.height_cm = height_cm;
        this.weight_kg = weight_kg;
        this.dob = dob;
        this.body_type = body_type;
        this.real_face = real_face;
    }
}
