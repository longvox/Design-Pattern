const Server = require("./server");
const { RawDataTest, UserExistsTest, RoleTest } = require("./middlewares");

(function main() {
  const server = new Server();
  server.register("admin@example.com", "admin_pass");
  server.register("phuc@xample.com", "user_pass");

  const test = new RawDataTest();
  test.linkWith(new UserExistsTest(server)).linkWith(new RoleTest());

  server.setTest(test);

  server.logIn("phuc@xample.com", "user_pass");
  console.log();
  server.logIn("phucxample.com", "user_pass");
  console.log();
  server.logIn("admin@example.com", "admin_pass");
})();
