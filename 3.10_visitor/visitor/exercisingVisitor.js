const AnimalVisitor = require("./animalVisitor.interface");

class ExercisingVisitor extends AnimalVisitor {
  visitLion() {
    console.log("Taking the lion for a run.");
  }

  visitTiger() {
    console.log("Making the tiger jump through hoops.");
  }

  visitElephant() {
    console.log("Walking the elephant around the zoo.");
  }
}

module.exports = ExercisingVisitor;
