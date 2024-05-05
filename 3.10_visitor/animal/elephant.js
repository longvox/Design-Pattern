const Animal = require("./animal.interface.js");
class Elephant extends Animal {
  accept(visitor) {
    visitor.visitElephant(this);
  }
}

module.exports = Elephant;
