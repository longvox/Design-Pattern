const ItemIterator = require("./itemIterator");

class IterableCollection {
  constructor() {
    this.menuItem = [];
  }

  addItem(temp) {
    this.menuItem.push(temp);
  }

  iterator() {
    return new ItemIterator(this.menuItem);
  }
}

module.exports = IterableCollection;
