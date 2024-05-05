class Game {
  initialize() {}
  startPlay() {}
  endPlay() {}

  // Template method
  play() {
    // Initialize the game
    this.initialize();

    // Start game
    this.startPlay();

    // End game
    this.endPlay();
  }
}


module.exports = Game;
