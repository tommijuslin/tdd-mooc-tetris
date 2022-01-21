export class RotatingShape {
    shape;

    constructor(shape) {
        this.shape = shape;
    }

    toString() {
        let trimmed = this.shape.replace(/^\s+|\s+$/gm,'') + "\n";
        return trimmed;
    }
}