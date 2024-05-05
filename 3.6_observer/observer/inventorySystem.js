const Observer = require("./observer.interface");
const { Order } = require("../service");

// Inventory System
class InventorySystem extends Observer {
  update(subject) {
    if (subject instanceof Order && subject.getStatus() === "shipped") {
      console.log("Inventory System: Order shipped, updating inventory.");
    }
  }
}

module.exports = InventorySystem;
