const Command = require("./command.interface");

class OpenAccount extends Command {
  constructor(account) {
    super();
    this.account = account;
  }

  execute() {
    this.account.open();
  }
}

module.exports = OpenAccount;
