export class Block {
  color;
  row;
  col;

  constructor(color, row = 0, col = 1) {
    this.color = color;
    this.row = row;
    this.col = col;
  }
}
