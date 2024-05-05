const FoodFactory = require('./foodFactory');
const {Beef, RiceNoodle, Cabbage} = require('../services');

// Concrete factory
class LauFactory extends FoodFactory {
  createProtein() {
    return new Beef();
  }

  createCarbohydrate() {
    return new RiceNoodle();
  }

  createVegetable() {
    // Assume Cabbage class exists
    return new Cabbage();
  }
}

module.exports = LauFactory;
