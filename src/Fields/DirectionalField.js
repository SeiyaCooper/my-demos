import { Color, VectorField2D } from "mraph";

export default class DirectionalField extends VectorField2D {
    constructor(strength, center = [0, 0, 0], width = 4, height = 4) {
        const halfW = width / 2;
        const halfH = height / 2;

        super({
            xRange: [-halfW, +halfW, 1],
            yRange: [-halfH, +halfH, 1],
        });
        this.strength = strength;
        this.center = center;
        this.width = width;
        this.height = height;
        this.func = () => {
            return this.strength;
        };
        this.colorFunc = () => {
            return new Color(1, 1, 1, 0.3);
        };
    }

    interact(charge) {
        const x = charge.center[0];
        const y = charge.center[1];

        if (Math.abs(x - this.center[0]) > this.width / 2) return;
        if (Math.abs(y - this.center[1]) > this.height / 2) return;

        charge._a = charge._a.add(this.strength);
    }
}
