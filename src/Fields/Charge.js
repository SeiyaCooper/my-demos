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
        this.velos = [velo];
        this.addChild(velo);

        const acce0 = new Arrow(this, this.a);
        acce0.strokeWidth = 0.02;
        acce0.tipWidth = 0.06;
        acce0.setColor(COLORS.BLUE_E);

        const acce1 = new Arrow(this, this.a);
        acce1.strokeWidth = 0.02;
        acce1.tipWidth = 0.06;
        acce1.setColor(COLORS.BLUE_E);

        const acce2 = new Arrow(this, this.a);
        acce2.strokeWidth = 0.02;
        acce2.tipWidth = 0.06;
        acce2.setColor(COLORS.RED_A);

        this.acces = [acce0, acce1, acce2];
        this.addChild(acce0, acce1, acce2);
    }
}
