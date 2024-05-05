const Game = require("./game");

class Football extends Game {
  initialize() {
    console.log("Football Game Initialized! Start playing.");
  }

  startPlay() {
    console.log("Football Game Started. Enjoy the game!");
  }

  endPlay() {
    console.log("Football Game Finished!");
  }
}

module.exports = Football;
