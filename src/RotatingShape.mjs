export class RotatingShape {
    constructor(shape) {
        if (typeof shape == "string") {
            let rows = shape.replace(/^\s+|\s+$/gm,"").split("\n");
            this.blocks = [];
    
            for (let i = 0; i < rows.length; i++) {
                this.blocks[i] = rows[i].split('');
            }
        } else {
            this.blocks = shape;
        }
    }

    rotateRight() {
        let rotated = new Array(this.blocks.length);

        for (var i = 0; i < rotated.length; i++) {
            rotated[i] = new Array(this.blocks.length);
        }

        for (let row = 0; row < this.blocks.length; row++) {
            for (let col = 0; col < this.blocks.length; col++) {
                rotated[col][2 - row] = this.blocks[row][col];
            }
        }

        return new RotatingShape(rotated);
    }

    toString() {
        let str = "";

        for (let i = 0; i < this.blocks.length; i++) {
            str += this.blocks[i].join("") + "\n";
        }

        return str;
    }
}
