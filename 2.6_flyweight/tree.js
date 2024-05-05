// Client code
class Tree {
  constructor(x, y, treeType) {
    this.x = x;
    this.y = y;
    this.treeType = treeType;
  }

  draw(canvas) {
    this.treeType.draw(canvas, this.x, this.y);
  }
}

module.exports = Tree;
