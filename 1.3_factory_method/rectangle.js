const Shape = require('./shape');

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a Rectangle");
  }
}

module.exports = Rectangle;
