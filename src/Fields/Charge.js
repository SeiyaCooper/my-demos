import { Point, COLORS, Arrow } from "mraph";

export default class Charge extends Point {
    charge = 0;
    survive = 3000;
    last = 0;

    constructor(charge, x, y) {
        super([x, y, 0]);
        this.charge = charge;
        this.setColor(charge > 0 ? COLORS.RED : COLORS.BLUE);

        const velo = new Arrow(this, this.v);
        velo.strokeWidth = 0.02;
        velo.tipWidth = 0.06;
        this.velo = velo;
        this.addChild(velo);

        const acce = new Arrow(this, this.a);
        acce.strokeWidth = 0.02;
        acce.tipWidth = 0.06;
        acce.setColor(COLORS.BLUE_E);
        this.acce = acce;
        this.addChild(acce);
    }
}
