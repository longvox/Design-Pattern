class GameMemento {
  constructor(position, score, items) {
    this.position = position;
    this.score = score;
    this.items = [...items];
  }

  // Getters
  getPosition() {
    return this.position;
  }

  getScore() {
    return this.score;
  }

  getItems() {
    return [...this.items];
  }
}

module.exports = GameMemento;
