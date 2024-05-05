const HouseBuilder = require('./houseBuilder');
const House = require('./house');

class ConcreteHouseBuilder extends HouseBuilder {
  constructor() {
    super();
    this.house = new House();
  }

  buildFoundation() {
    this.house.setFoundation("Concrete Foundation");
  }

  buildWalls() {
    this.house.setWalls("Concrete Walls");
  }

  buildRoof() {
    this.house.setRoof("Concrete Roof");
  }

  buildInterior() {
    this.house.setInterior("Modern Interior");
  }

  getResult() {
    return this.house;
  }
}

module.exports = ConcreteHouseBuilder;
