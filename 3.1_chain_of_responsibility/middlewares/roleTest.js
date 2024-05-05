const Test = require('./test');

class RoleTest extends Test {
  check(email, password) {
    console.log("Role Data");
    if (email === "admin@example.com") {
      console.log("Hello, admin!");
      return true;
    }
    console.log("Hello, user!");
    return this.checkNext(email, password);
  }
}


module.exports = RoleTest;
