const { Order } = require("./service");
const {
  InventorySystem,
  ShippingSystem,
  BillingSystem,
} = require("./observer");

(function main() {
  const order = new Order("new");

  const inventorySystem = new InventorySystem();
  const shippingSystem = new ShippingSystem();
  const billingSystem = new BillingSystem();

  order.registerObserver(inventorySystem);
  order.registerObserver(shippingSystem);
  order.registerObserver(billingSystem);

  // Simulate order updates
  order.setStatus("new");
  order.setStatus("shipped");
  order.setStatus("completed");
})();
