const IterableCollection = require("./iterableCollection");

class MenuCollection extends IterableCollection {
  constructor(menuItem) {
    super();
    this.menuItem = menuItem;
  }
}

module.exports = MenuCollection;
