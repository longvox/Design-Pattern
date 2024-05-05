const Observer = require("./observer.interface");
const { NewState } = require("../orderState");

class ShippingSystem extends Observer {
  update(order) {
    if (order.getState() instanceof NewState) {
      console.log(
        "Shipping System: New order received, preparing for shipment.",
      );
    }
  }
}

module.exports = ShippingSystem;
