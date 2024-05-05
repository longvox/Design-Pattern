const Animal = require("./animal.interface");

class Tiger extends Animal {
  accept(visitor) {
    visitor.visitTiger(this);
  }
}

module.exports = Tiger;
