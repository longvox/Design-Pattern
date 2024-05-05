const Bank = require("./bank");

class MMBank extends Bank {
  constructor(account) {
    super(account);
  }

  openAccount() {
    console.log("Welcome to MMBank");
    this.account.openAccount();
  }
}

module.exports = MMBank;
