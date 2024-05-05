const IProtein = require('./interface/iProtein');

class Beef extends IProtein {
  prepare() {
    console.log("Preparing beef");
  }
}

module.exports = Beef;
