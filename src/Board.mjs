export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let string = ""
    
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        string += ".";
      }
      string += "\n";
    }
    return string;
  }
}
