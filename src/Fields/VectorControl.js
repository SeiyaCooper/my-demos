import { Vector } from "mraph";

export default class VectorControl {
    startPos = [];
    slideVec = [];
    endPos = [];
    isMouseDown = false;

    afterMouseDown = () => {};
    afterMouseUp = () => {};
    duringMouseMove = () => {};

    constructor(element) {
        this.element = element;
    }

    handleMouseDown(e) {
        e.preventDefault();
        const pos = getPos(e);
        this.startPos = [new Vector(pos.x, pos.y)];
        this.isMouseDown = true;
        this.afterMouseDown();
    }

    handleMouseMove(e) {
        if (!this.isMouseDown) return;
        e.preventDefault();
        const start = this.startPos[0];
        const endPos = getPos(e);

        this.endPos = [new Vector(endPos.x, endPos.y)];
        this.slideVec = [this.endPos[0].reduce(start)];
        this.duringMouseMove();
    }

    handleMouseUp() {
        if (!this.isMouseDown) return;

        this.isMouseDown = false;
        this.startPos = [];
        this.endPos = [];
        this.slideVec = [];
        this.afterMouseUp();
    }

    set element(val) {
        this._element = val;

        val.addEventListener("mousedown", (e) => {
            this.handleMouseDown(e);
        });
        val.addEventListener("mousemove", (e) => {
            this.handleMouseMove(e);
        });
        val.addEventListener("mouseup", (e) => {
            this.handleMouseUp(e);
        });
        val.addEventListener("mouseleave", (e) => {
            this.handleMouseUp(e);
        });
    }

    get element() {
        return this._element;
    }
}

function getPos(obj) {
    return {
        id: obj.identifier ?? 1,
        x: obj.clientX,
        y: obj.clientY,
    };
}

function findPosById(id, array) {
    let pos;
    for (pos of array) {
        if ((pos.id = id)) break;
    }
    return pos;
}
