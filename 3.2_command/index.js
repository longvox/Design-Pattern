const { Account, BankApp } = require("./service");
const { OpenAccount, CloseAccount } = require("./command");

(function main() {
  const account = new Account("NickSeven");

  const openAccount = new OpenAccount(account);
  const closeAccount = new CloseAccount(account);

  const bankApp = new BankApp(openAccount, closeAccount);

  bankApp.clickOpenAccount();
  bankApp.clickCloseAccount();
})();
