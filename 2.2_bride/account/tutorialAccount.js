const Account = require("./account");

class TutorialAccount extends Account {
  openAccount() {
    console.log("Please select your language");
  }
}

module.exports = TutorialAccount;
