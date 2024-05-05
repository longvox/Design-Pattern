const ShapeFactory = require("./shapeFactory");
const Circle = require("./circle");

class CircleFactory extends ShapeFactory {
  // Implement the factory method to create a Circle object
  createShape() {
    return new Circle();
  }
}

module.exports = CircleFactory;
