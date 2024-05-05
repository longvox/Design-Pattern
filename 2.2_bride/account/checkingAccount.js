const Account = require("./account");

class CheckingAccount extends Account {
  openAccount() {
    console.log("Opening a Checking Account!");
  }
}

module.exports = CheckingAccount;
