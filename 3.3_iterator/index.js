const MenuCollection = require("./menuCollection");
const Item = require("./item");

(function main() {
  const list = [
    new Item("Phuc", 18),
    new Item("An", 19),
    new Item("Nam", 20),
    new Item("Bang", 21),
  ];

  const collection = new MenuCollection(list);
  collection.addItem(new Item("Nick", 10));
  collection.addItem(new Item("Tick", 20));

  const itemIterator = collection.iterator();

  while (itemIterator.hasNext()) {
    const item = itemIterator.next();
    console.log(item.toString());
  }
})();
