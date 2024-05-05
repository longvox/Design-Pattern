class ShoppingCart {
  constructor() {
    this.items = [];
    this.paymentStrategy = null;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  calculateTotal() {
    let sum = 0;
    for (let item of this.items) {
      sum += item.getPrice();
    }
    return sum;
  }

  setPaymentStrategy(strategy) {
    this.paymentStrategy = strategy;
  }

  checkout() {
    const amount = this.calculateTotal();
    this.paymentStrategy.pay(amount);
  }
}

module.exports = ShoppingCart;
