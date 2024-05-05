const Coffee = require("./coffee.interface");

class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.decoratedCoffee = coffee;
  }

  getDescription() {
    return this.decoratedCoffee.getDescription();
  }

  getCost() {
    return this.decoratedCoffee.getCost();
  }
}

module.exports = CoffeeDecorator;
