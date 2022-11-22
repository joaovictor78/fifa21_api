export default class LeagueAlreadyExistsFailure extends Error {
    name: string;
    message: string;
    stack?: string;
    constructor({
        name,
        message,
        stack
    }: {
        name: string;
        message: string;
        stack?: string;
    }) {
        super();
        this.name = name;
        this.message = message;
        this.stack = stack;
    }
}
