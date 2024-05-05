const { Lion, Tiger, Elephant } = require("./animal");
const { FeedingVisitor, ExercisingVisitor } = require("./visitor");


class ZooVisitorDemo {
  static main() {
    const animals = [new Lion(), new Tiger(), new Elephant()];

    const feedingVisitor = new FeedingVisitor();
    const exercisingVisitor = new ExercisingVisitor();

    console.log("Zoo Feeding Time:");
    for (let animal of animals) {
      animal.accept(feedingVisitor);
    }

    console.log("\nZoo Exercise Time:");
    for (let animal of animals) {
      animal.accept(exercisingVisitor);
    }
  }
}

ZooVisitorDemo.main();
