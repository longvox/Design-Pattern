const { LauFactory } = require("./factory");

(function main() {
  const factory = new LauFactory();
  const protein = factory.createProtein();
  const carb = factory.createCarbohydrate();

  protein.prepare();
  carb.prepare();
})();
