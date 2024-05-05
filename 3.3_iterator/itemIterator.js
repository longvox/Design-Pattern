class ItemIterator {
  constructor(menuItem) {
    this.menuItem = menuItem;
    this.currentIndex = 0;
  }

  hasNext() {
    return this.currentIndex < this.menuItem.length;
  }

  next() {
    return this.menuItem[this.currentIndex++];
  }
}

module.exports = ItemIterator;
