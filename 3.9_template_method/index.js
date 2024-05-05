const Cricket = require("./cricket");
const Football = require("./football");

(function main() {
  let game = new Cricket();
  game.play();
  console.log();

  game = new Football();
  game.play();
})();
