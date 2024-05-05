class Item {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `Item{name='${this.name}', age=${this.age}}`;
  }
}

module.exports = Item;
