import * as mp from "mraph";
import Charge from "./Charge";

const layer = new mp.Layer().appendTo(document.body);

const charge = new Charge();

layer.add(charge);

layer.enableOrbitControl();
layer.play();
