class ChatMediator {
  constructor() {
    this.users = [];
  }

  sendMessage(msg, user) {
    for (let u of this.users) {
      // message should not be received by the user sending it
      if (u !== user) {
        u.receiveMessage(msg);
      }
    }
  }

  registerUser(user) {
    this.users.push(user);
  }
}

module.exports = ChatMediator;
