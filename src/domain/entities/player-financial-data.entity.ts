export default class PlayerFinancialDataEntity {
    public readonly value_eur: number;
    public readonly wage_eur: number;
    public readonly release_clause_eur: number;

    constructor({
        value_eur,
        wage_eur,
        release_clause_eur,
    }: {
        value_eur: number;
        wage_eur: number;
        release_clause_eur: number;
    }) {
        this.value_eur = value_eur;
        this.wage_eur = wage_eur;
        this.release_clause_eur = release_clause_eur;
    }
}
