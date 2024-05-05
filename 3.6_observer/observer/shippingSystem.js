const Observer = require("./observer.interface");
const { Order } = require("../service");

// Shipping System
class ShippingSystem extends Observer {
  update(subject) {
    if (subject instanceof Order && subject.getStatus() === "new") {
      console.log(
        "Shipping System: New order received, preparing for shipment.",
      );
    }
  }
}

module.exports = ShippingSystem;
