const Item = require("./item");
const ShoppingCart = require("./shoppingCart");
const { PaypalStrategy, CreditCardStrategy } = require("./strategy");

(function main() {
  const cart = new ShoppingCart();

  const item1 = new Item("1234", 10);
  const item2 = new Item("5678", 40);

  cart.addItem(item1);
  cart.addItem(item2);

  // Pay by PayPal
  cart.setPaymentStrategy(new PaypalStrategy("myemail@example.com", "mypwd"));
  cart.checkout();

  // Pay by Credit Card
  cart.setPaymentStrategy(
    new CreditCardStrategy("John Doe", "1234567890123456"),
  );
  cart.checkout();
})();
