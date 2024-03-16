import * as mp from "mraph";
import Charge from "./Charge";
import CircularUniformMageneticField from "./CircularUniformMagneticField";
import DirectionalFiled from "./DirectionalField";

const layer = new mp.Layer().appendTo(document.body);

const charges = [new Charge(1, 0, 3)];
layer.add(...charges);
for (let charge of charges) {
    charge.v = new mp.Vector(0, -1, 0);
    charge.a = new mp.Vector(0, 0, 0);
}

const fields = [
    new CircularUniformMageneticField(new mp.Vector(0, 0, 0.5), 0, 0, 2),
    new DirectionalFiled(new mp.Vector(1, 0, 0), new mp.Vector(-5, 0, 0)),
];
layer.add(...fields);

function deleteCharge(charge) {
    const els = layer.elements;
    if (els.indexOf(charge) !== -1) els.splice(els.indexOf(charge), 1);
    if (charges.indexOf(charge) !== -1)
        charges.splice(charges.indexOf(charge), 1);
}

layer.timeline.addInfinity(() => {
    for (let charge of charges) {
        charge.last++;

        if (charge.last > charge.survive) {
            deleteCharge(charge);
            return;
        }

        charge.velo.vector = charge.v.mult(1 / 3);
        charge.velo.update();

        charge.acce.vector = charge.a.mult(1 / 3);
        charge.acce.update();

        charge._a = new mp.Vector(0, 0, 0);
        for (let field of fields) {
            field.interact(charge);
        }
    }
});

layer.enableOrbitControl().enableRotate = false;
layer.play();
