const PaymentStrategy = require("./paymentStrategy.interface");
// Concrete Strategies
class CreditCardStrategy extends PaymentStrategy {
  constructor(name, cardNumber) {
    super();
    this.name = name;
    this.cardNumber = cardNumber;
  }

  pay(amount) {
    console.log(amount + " paid with credit/debit card.");
  }
}

module.exports = CreditCardStrategy;
