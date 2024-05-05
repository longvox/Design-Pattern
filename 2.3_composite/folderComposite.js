const FileComponent = require("./fileComponent.interface");

class FolderComposite extends FileComponent {
  constructor(files) {
    super();
    this.files = files;
  }

  showProperty() {
    for (let file of this.files) {
      file.showProperty();
    }
  }

  size() {
    let total = 0;
    for (let file of this.files) {
      total += file.size();
    }
    return total;
  }
}

module.exports = FolderComposite;
