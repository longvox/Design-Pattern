const Subject = require("./subject");

class Order extends Subject {
  constructor(status) {
    super();
    this.status = status;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status) {
    this.status = status;
    this.notifyObservers();
  }
}

module.exports = Order;
