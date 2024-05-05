const { TPBank, MMBank } = require("./bank");
const { TutorialAccount, CheckingAccount } = require("./account");

(function main() {
  let tpBank = new TPBank(new TutorialAccount());
  tpBank.openAccount();

  console.log();

  let mmBank = new MMBank(new CheckingAccount());
  mmBank.openAccount();
})();
