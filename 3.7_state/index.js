const Order = require("./order");
const {
  InventorySystem,
  ShippingSystem,
  BillingSystem,
} = require("./observer");
const {NewState} = require('./orderState');

(function main() {
  const order = new Order(new NewState());

  const inventorySystem = new InventorySystem();
  const shippingSystem = new ShippingSystem();
  const billingSystem = new BillingSystem();

  order.registerObserver(inventorySystem);
  order.registerObserver(shippingSystem);
  order.registerObserver(billingSystem);

  // Simulate order updates
  order.proceed(); // New to Shipped
  order.proceed(); // Shipped to Completed
})();
