/**
                                          ,-------------------------.
                                          |Client                   |
                                          |-------------------------|
                                          |-treeFactory: TreeFactory|
                                          |+operation()             |
                                          `-------------------------'
                                                        |
                                                      (uses)
          ,-------------------.                         |
          |Tree               |  ,--------------------------------------------.
          |-------------------|  |TreeFactory                                 |
          |-x: int            |  |--------------------------------------------|
          |-y: int            |  |-treeTypes: Map                             |
          |-treeType: TreeType|  |+getTreeType(name, color, texture): TreeType|
          |+draw(canvas)      |  `--------------------------------------------'
          `-------------------'                         |
                    |                                   |
                    |       ,-------------------.       |
                    |       |TreeType           |       |
    (creates and manages)___|-------------------|_____(uses)
                            |+draw(canvas, x, y)|
                            `-------------------'
**/

const TreeFactory = require("./treeFactory");
const Tree = require("./tree");

(function main() {
  const treeFactory = new TreeFactory();
  const mapleTreeType = treeFactory.getTreeType("Maple", "Green", "Smooth");

  const tree1 = new Tree(1, 2, mapleTreeType);
  const tree2 = new Tree(5, 3, mapleTreeType);

  tree1.draw("Canvas1");
  tree2.draw("Canvas2");
  tree2.draw("Canvas3");
})();
