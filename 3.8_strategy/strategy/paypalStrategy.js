const PaymentStrategy = require("./paymentStrategy.interface");

class PaypalStrategy extends PaymentStrategy {
  constructor(email, password) {
    super();
    this.emailId = email;
    this.password = password;
  }

  pay(amount) {
    console.log(amount + " paid using Paypal.");
  }
}

module.exports = PaypalStrategy;
