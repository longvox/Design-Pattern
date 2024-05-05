const Test = require('./test');

class UserExistsTest extends Test {
  constructor(server) {
    super();
    this.server = server;
  }

  check(email, password) {
    console.log("User Exist");
    if (!this.server.hasEmail(email)) {
      console.log("This email is not registered!");
      return false;
    }

    return this.checkNext(email, password);
  }
}

module.exports = UserExistsTest;
