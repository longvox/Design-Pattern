const CoffeeDecorator = require("./coffeeDecorator");

class SugarDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  getDescription() {
    return super.getDescription() + ", Sugar";
  }

  getCost() {
    return super.getCost() + 0.2;
  }
}

module.exports = SugarDecorator;
