const AnimalVisitor = require("./animalVisitor.interface");

class FeedingVisitor extends AnimalVisitor {
  visitLion() {
    console.log("Feeding the lion with some meat.");
  }

  visitTiger() {
    console.log("Feeding the tiger with chicken.");
  }

  visitElephant() {
    console.log("Feeding the elephant with fruits and vegetables.");
  }
}

module.exports = FeedingVisitor;
