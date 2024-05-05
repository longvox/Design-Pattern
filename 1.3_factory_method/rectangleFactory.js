const ShapeFactory = require("./shapeFactory");
const Rectangle = require("./rectangle");

class RectangleFactory extends ShapeFactory {
  // Implement the factory method to create a Rectangle object
  createShape() {
    return new Rectangle();
  }
}

module.exports = RectangleFactory;
