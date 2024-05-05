const FileComponent = require("./fileComponent.interface");

class FileLeaf extends FileComponent {
  constructor(name, size) {
    super();
    this.name = name;
    this.sizeVal = size;
  }

  showProperty() {
    console.log(this.name);
  }

  size() {
    return this.sizeVal;
  }
}

module.exports = FileLeaf;
