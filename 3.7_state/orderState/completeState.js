const OrderState = require("./orderState.interface");

class CompletedState extends OrderState {
  proceed(order) {
    console.log("Order is completed, generating invoice.");
    // Order completion logic here
  }
}

module.exports = CompletedState;
