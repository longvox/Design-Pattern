class Server {
  constructor() {
    this.users = new Map();
  }

  setTest(test) {
    this.test = test;
  }

  hasEmail(email) {
    return this.users.has(email);
  }

  register(email, password) {
    this.users.set(email, password);
  }

  logIn(email, password) {
    if (this.test.check(email, password)) {
      console.log("Authorization have been successful!");

      // Do something useful here for authorized users.

      return true;
    }
    console.log("Authorization have been fail!");
    return false;
  }
}

module.exports = Server;
