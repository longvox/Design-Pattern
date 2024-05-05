const Game = require("./game");
const GameCaretaker = require("./gameCaretaker");

(function main() {
  const game = new Game();
  const caretaker = new GameCaretaker();

  game.setPosition("Start");
  game.setScore(10);
  game.addItem("Sword");
  caretaker.add(game.save());

  game.setPosition("Castle");
  game.setScore(50);
  game.addItem("Shield");

  // Restore to previous saved state
  game.restore(caretaker.get(0));
  console.log("Current Position: " + game.save().getPosition());
  console.log("Current Score: " + game.save().getScore());
})();
