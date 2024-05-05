const OrderState = require("./orderState.interface");
const CompletedState = require("./completeState");

class ShippedState extends OrderState {
  proceed(order) {
    console.log("Order is shipped, updating inventory.");
    order.setState(new CompletedState());
  }
}

module.exports = ShippedState;
