const IVegetable = require('./interface/iVegetable');

class Cabbage extends IVegetable {
  prepare() {
    console.log("Preparing cabbage");
  }
}

module.exports = Cabbage;
