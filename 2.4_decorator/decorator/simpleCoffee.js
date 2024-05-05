const Coffee = require("./coffee.interface");

class SimpleCoffee extends Coffee {
  getDescription() {
    return "Simple Coffee";
  }

  getCost() {
    return 2.0;
  }
}

module.exports = SimpleCoffee;
