const ChatServer = require("./chatServer");
const User = require("./user");

// ChatClient
(function main() {
  const mediator = new ChatServer();

  const user1 = new User("Alice", mediator);
  const user2 = new User("Bob", mediator);

  mediator.registerUser(user1);
  mediator.registerUser(user2);

  user1.sendMessage("Hi Bob!");
  user2.sendMessage("Hey Alice!");
})();
