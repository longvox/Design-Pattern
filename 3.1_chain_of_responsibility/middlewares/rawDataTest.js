const Test = require("./test");

class RawDataTest extends Test {
  check(email, password) {
    console.log("Raw Data");
    if (!email.includes("@")) {
      console.log("Email Valid");
      return false;
    }
    return this.checkNext(email, password);
  }
}

module.exports = RawDataTest;
