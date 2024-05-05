const FileLeaf = require("./fileLeaf");
const FolderComposite = require("./folderComposite");

(function main() {
  let file1 = new FileLeaf("file 1", 10);
  let file2 = new FileLeaf("file 2", 5);
  let file3 = new FileLeaf("file 3", 12);

  let files = [file1, file2, file3];
  let folder = new FolderComposite(files);
  folder.showProperty();
  console.log("Total Size: " + folder.size());

  let file4 = new FileLeaf("file 4", 7);
  let file5 = new FileLeaf("file 5", 3);
  let files2 = [file4, file5, folder];
  let folder2 = new FolderComposite(files2);
  folder2.showProperty();
  console.log("Total Size: " + folder2.size());
})();
