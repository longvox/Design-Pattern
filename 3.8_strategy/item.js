class Item {
  constructor(upc, cost) {
    this.upcCode = upc;
    this.price = cost;
  }

  getPrice() {
    return this.price;
  }
}

module.exports = Item;
