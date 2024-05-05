class BankApp {
  constructor(openAccount, closeAccount) {
    this.openAccount = openAccount;
    this.closeAccount = closeAccount;
  }

  clickOpenAccount() {
    console.log("User click open an account");
    this.openAccount.execute();
  }

  clickCloseAccount() {
    console.log("User click close an account");
    this.closeAccount.execute();
  }
}

module.exports = BankApp;
