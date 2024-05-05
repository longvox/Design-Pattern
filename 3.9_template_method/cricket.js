const Game = require("./game");

class Cricket extends Game {
  initialize() {
    console.log("Cricket Game Initialized! Start playing.");
  }

  startPlay() {
    console.log("Cricket Game Started. Enjoy the game!");
  }

  endPlay() {
    console.log("Cricket Game Finished!");
  }
}

module.exports = Cricket;
