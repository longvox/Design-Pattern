const CircleFactory = require('./circleFactory');
const RectangleFactory = require('./rectangleFactory');

(function main() {
  const circleFactory = new CircleFactory();
  const circle = circleFactory.createShape();
  circle.draw(); // Output: Drawing a Circle

  const rectangleFactory = new RectangleFactory();
  const rectangle = rectangleFactory.createShape();
  rectangle.draw(); // Output: Drawing a Rectangle
})();
