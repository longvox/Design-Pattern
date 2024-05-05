const GameMemento = require('./gameMemento');

class Game {
  constructor() {
    this.items = [];
  }

  setPosition(position) {
    this.position = position;
  }

  setScore(score) {
    this.score = score;
  }

  addItem(item) {
    this.items.push(item);
  }

  save() {
    return new GameMemento(this.position, this.score, this.items);
  }

  restore(memento) {
    this.position = memento.getPosition();
    this.score = memento.getScore();
    this.items = [...memento.getItems()];
  }
}

module.exports = Game;
