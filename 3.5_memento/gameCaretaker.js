class GameCaretaker {
  constructor() {
    this.history = [];
  }

  add(memento) {
    this.history.push(memento);
  }

  get(index) {
    return this.history[index];
  }
}

module.exports = GameCaretaker;
