const ConcreteHouseBuilder = require('./concreteHouseBuilder');
const HouseDirector = require('./houseDirector');

(function main() {
  // Create a ConcreteHouseBuilder object
  const builder = new ConcreteHouseBuilder();

  // Create a HouseDirector object and connect it with the builder
  const director = new HouseDirector(builder);

  // Construct the house
  director.constructHouse();

  // Get the result
  const house = builder.getResult();

  // Display information about the house
  house.showHouseDetails();
})();
