class House {
  constructor() {
    this.foundation = "";
    this.walls = "";
    this.roof = "";
    this.interior = "";
  }

  setFoundation(foundation) {
    this.foundation = foundation;
  }

  setWalls(walls) {
    this.walls = walls;
  }

  setRoof(roof) {
    this.roof = roof;
  }

  setInterior(interior) {
    this.interior = interior;
  }

  showHouseDetails() {
    console.log("House Details:");
    console.log("Foundation: " + this.foundation);
    console.log("Walls: " + this.walls);
    console.log("Roof: " + this.roof);
    console.log("Interior: " + this.interior);
  }
}

module.exports = House;
