class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  sendMessage(msg) {
    console.log(this.name + ": Sending Message = " + msg);
    this.mediator.sendMessage(msg, this);
  }

  receiveMessage(msg) {
    console.log(this.name + ": Received Message = " + msg);
  }
}

module.exports = User;
