const Animal = require("./animal.interface");

class Lion extends Animal {
  accept(visitor) {
    visitor.visitLion(this);
  }
}

module.exports = Lion;
