// Flyweight
class TreeType {
  constructor(name, color, texture) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  draw(canvas, x, y) {
    console.log(`Drawing ${this.name} tree at (${x}, ${y}) on ${canvas}`);
  }
}

module.exports = TreeType;
