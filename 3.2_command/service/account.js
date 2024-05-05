class Account {
  constructor(name) {
    this.name = name;
  }

  open() {
    console.log(`Account ${this.name} Opened`);
  }

  close() {
    console.log(`Account ${this.name} Closed`);
  }
}

module.exports = Account;
