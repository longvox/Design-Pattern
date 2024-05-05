const Bank = require("./bank");

class TPBank extends Bank {
  constructor(account) {
    super(account);
  }

  openAccount() {
    console.log("Welcome to TPBank");
    this.account.openAccount();
  }
}

module.exports = TPBank;
