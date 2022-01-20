export class Block {
  color;
  x;
  y;

  constructor(color, x = 0, y = 1) {
    this.color = color;
    this.x = x;
    this.y = y;
  }
}
