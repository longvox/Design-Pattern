const Command = require("./command.interface");

class CloseAccount extends Command {
  constructor(account) {
    super();
    this.account = account;
  }

  execute() {
    this.account.close();
  }
}

module.exports = CloseAccount;
