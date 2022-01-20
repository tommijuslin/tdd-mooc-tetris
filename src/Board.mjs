const EMPTY = ".";

export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = null;
  }

  drop(block) {
    this.falling = block;
  }

  hasFalling() {
    return this.falling != null;
  }
  
  hasFallingAt(row, col) {
    return this.hasFalling() && row == 0 && col == 1;
  }

  toString() {
    let string = ""
    
    for (let row = 0; row < this.width; row++) {
      for (let col = 0; col < this.height; col++) {
        this.hasFallingAt(row, col) ? string += this.falling.color : string += EMPTY
      }
      string += "\n";
    }

    return string;
  }
}
