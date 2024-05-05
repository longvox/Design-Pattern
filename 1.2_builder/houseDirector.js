class HouseDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructHouse() {
    this.builder.buildFoundation();
    this.builder.buildWalls();
    this.builder.buildRoof();
    this.builder.buildInterior();
  }
}

module.exports = HouseDirector;
