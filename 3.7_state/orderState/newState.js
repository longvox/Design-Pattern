const OrderState = require("./orderState.interface");
const  ShippedState  = require("./shippedState");

class NewState extends OrderState {
  proceed(order) {
    console.log("Order is in new state, preparing for shipment.");
    order.setState(new ShippedState());
  }
}

module.exports = NewState;
