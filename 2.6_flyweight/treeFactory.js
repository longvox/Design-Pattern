const TreeType = require("./treeType");

// Flyweight Factory
class TreeFactory {
  constructor() {
    this.treeTypes = new Map();
  }

  getTreeType(name, color, texture) {
    let result = this.treeTypes.get(name);
    if (!result) {
      result = new TreeType(name, color, texture);
      this.treeTypes.set(name, result);
    }
    return result;
  }
}

module.exports = TreeFactory;
