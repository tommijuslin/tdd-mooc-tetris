const EMPTY = ".";

export class Board {
  width;
  height;
  falling;
  landed;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = null;
    this.landed = Array(width).fill().map(() => Array(height).fill(EMPTY))
  }

  drop(block) {
    if (this.hasFalling()) {
      throw("already falling.");
    } else {
      this.falling = block;
    }
  }

  tick() {
    if (this.notSafe()) {
      this.landed[this.falling.row][this.falling.col] = this.falling.color;
      this.falling = null;
    } else {
      this.falling.row += 1;
    }
  }

  notSafe() {
    return this.falling.row == this.height - 1
      || this.landed[this.falling.row+1][this.falling.col] != EMPTY
  }

  hasFalling() {
    return this.falling != null;
  }

  hasFallingAt(row, col) {
    return this.hasFalling() && row == this.falling.row && col == this.falling.col;
  }

  toString() {
    let string = ""

    for (let row = 0; row < this.width; row++) {
      for (let col = 0; col < this.height; col++) {
        string += this.hasFallingAt(row, col) ? this.falling.color : this.landed[row][col]
      }
      string += "\n";
    }

    return string;
  }
}
