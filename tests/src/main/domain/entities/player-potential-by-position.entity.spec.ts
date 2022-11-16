import PlayerPotentialByPositionEntity from '../../../../../src/domain/entities/player-potential-by-position.entity';

describe('Player Potential By Position Entity', () => {
    test('should return 0 if overall is empty', () => {
        const playerPontential = new PlayerPotentialByPositionEntity({
            ls: '',
            st: '',
            rs: '',
            lw: '',
            lf: '',
            cf: '',
            rf: '',
            rw: '',
            lam: '',
            cam: '',
            ram: '',
            lm: '',
            lcm: '',
            cm: '',
            rcm: '',
            rm: '',
            lwb: '',
            ldm: '',
            cdm: '',
            rdm: '',
            rwb: '',
            lb: '',
            lcb: '',
            cb: '',
            rcb: '',
            rb: '',
        });
        expect(playerPontential.ls_whitout_ir).toBe(0);
    });
    test('should return weighted average of player attributes if overall is valid', () => {
        const playerPontential = new PlayerPotentialByPositionEntity({
            ls: '10+20',
            st: '',
            rs: '',
            lw: '',
            lf: '',
            cf: '',
            rf: '',
            rw: '',
            lam: '',
            cam: '',
            ram: '',
            lm: '',
            lcm: '',
            cm: '',
            rcm: '',
            rm: '',
            lwb: '',
            ldm: '',
            cdm: '',
            rdm: '',
            rwb: '',
            lb: '',
            lcb: '',
            cb: '',
            rcb: '',
            rb: '',
        });
        expect(playerPontential.ls_whitout_ir).toBe(10);
    });
});
