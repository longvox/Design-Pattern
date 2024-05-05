const Observer = require("./observer.interface");
const { CompletedState } = require("../orderState");

class BillingSystem extends Observer {
  update(order) {
    if (order.getState() instanceof CompletedState) {
      console.log("Billing System: Order completed, generating invoice.");
    }
  }
}

module.exports = BillingSystem;
