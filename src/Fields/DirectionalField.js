import { Color, VectorField2D } from "mraph";

export default class DirectionalField extends VectorField2D {
    constructor(strength) {
        super();
        this.strength = strength;
        this.func = () => {
            return this.strength;
        };
        this.colorFunc = () => {
            return new Color(1, 1, 1, 0.3);
        };
    }

    interact(charge) {
        charge._a = charge._a.add(this.strength);
    }
}
