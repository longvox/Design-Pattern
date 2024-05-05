const CoffeeDecorator = require("./coffeeDecorator");

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  getDescription() {
    return super.getDescription() + ", Milk";
  }

  getCost() {
    return super.getCost() + 0.5;
  }
}

module.exports = MilkDecorator;
