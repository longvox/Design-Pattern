const Observer = require("./observer.interface");
const { ShippedState } = require("../orderState");

class InventorySystem extends Observer {
  update(order) {
    if (order.getState() instanceof ShippedState) {
      console.log("Inventory System: Order shipped, updating inventory.");
    }
  }
}

module.exports = InventorySystem;
