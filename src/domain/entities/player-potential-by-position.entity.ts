export default class PlayerPotentialByPositionEntity {
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
    public readonly ls_whitout_ir: number;
    public readonly st_whitout_ir: number;
    public readonly rs_whitout_ir: number;
    public readonly lw_whitout_ir: number;
    public readonly lf_whitout_ir: number;
    public readonly cf_whitout_ir: number;
    public readonly rf_whitout_ir: number;
    public readonly rw_whitout_ir: number;
    public readonly lam_whitout_ir: number;
    public readonly cam_whitout_ir: number;
    public readonly ram_whitout_ir: number;
    public readonly lm_whitout_ir: number;
    public readonly lcm_whitout_ir: number;
    public readonly cm_whitout_ir: number;
    public readonly rcm_whitout_ir: number;
    public readonly rm_whitout_ir: number;
    public readonly lwb_whitout_ir: number;
    public readonly ldm_whitout_ir: number;
    public readonly cdm_whitout_ir: number;
    public readonly rdm_whitout_ir: number;
    public readonly rwb_whitout_ir: number;
    public readonly lb_whitout_ir: number;
    public readonly lcb_whitout_ir: number;
    public readonly cb_whitout_ir: number;
    public readonly rcb_whitout_ir: number;
    public readonly rb_whitout_ir: number;

    constructor({
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
        rb,
    }: {
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
        this.ls_whitout_ir = this.convertOverallWithoutIR(ls);
        this.st_whitout_ir = this.convertOverallWithoutIR(st);
        this.rs_whitout_ir = this.convertOverallWithoutIR(rs);
        this.lw_whitout_ir = this.convertOverallWithoutIR(lw);
        this.lf_whitout_ir = this.convertOverallWithoutIR(lf);
        this.cf_whitout_ir = this.convertOverallWithoutIR(cf);
        this.rf_whitout_ir = this.convertOverallWithoutIR(rf);
        this.rw_whitout_ir = this.convertOverallWithoutIR(rw);
        this.lam_whitout_ir = this.convertOverallWithoutIR(lam);
        this.cam_whitout_ir = this.convertOverallWithoutIR(cam);
        this.ram_whitout_ir = this.convertOverallWithoutIR(ram);
        this.lm_whitout_ir = this.convertOverallWithoutIR(lm);
        this.lcm_whitout_ir = this.convertOverallWithoutIR(lcm);
        this.cm_whitout_ir = this.convertOverallWithoutIR(cm);
        this.rcm_whitout_ir = this.convertOverallWithoutIR(rcm);
        this.rm_whitout_ir = this.convertOverallWithoutIR(rm);
        this.lwb_whitout_ir = this.convertOverallWithoutIR(lwb);
        this.ldm_whitout_ir = this.convertOverallWithoutIR(ldm);
        this.cdm_whitout_ir = this.convertOverallWithoutIR(cdm);
        this.rdm_whitout_ir = this.convertOverallWithoutIR(rdm);
        this.rwb_whitout_ir = this.convertOverallWithoutIR(rwb);
        this.lb_whitout_ir = this.convertOverallWithoutIR(lb);
        this.lcb_whitout_ir = this.convertOverallWithoutIR(lcb);
        this.cb_whitout_ir = this.convertOverallWithoutIR(cb);
        this.rcb_whitout_ir = this.convertOverallWithoutIR(rcb);
        this.rb_whitout_ir = this.convertOverallWithoutIR(rb);
    }

    convertOverallWithoutIR(overall: string): number {
        if (overall.split('+')[0] !== '') {
            return parseInt(overall.split('+')[0]);
        } else {
            return 0;
        }
    }
}
