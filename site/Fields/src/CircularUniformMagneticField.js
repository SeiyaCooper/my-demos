import { Point, Vector, COLORS } from "mraph";

export default class CircularUniformMagneticField extends Point {
    strokeWidth = 0.01;
    strength = new Vector(0, 0, 0);

    constructor(strength, x, y, radius) {
        super(x, y);
        this.radius = radius;
        this.strength = strength;
        this.setColor(COLORS.RED_A);
    }

    update() {
        this.clear();
        this.move(this.center);
        this.arc(
            this.radius,
            this.startAng,
            this.endAng,
            this.startAng > this.endAng
        );
        this.stroke();
        return this;
    }

    interact(charge) {
        if (charge.center.reduce(this.center).norm > this.radius) return;

        charge._a = charge._a.add(
            charge._v.mult(charge.charge).cross(this.strength)
        );
    }
}
