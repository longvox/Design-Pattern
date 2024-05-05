const Observer = require("./observer.interface");
const { Order } = require("../service");

class BillingSystem extends Observer {
  update(subject) {
    if (subject instanceof Order && subject.getStatus() === "completed") {
      console.log("Billing System: Order completed, generating invoice.");
    }
  }
}

module.exports = BillingSystem;
