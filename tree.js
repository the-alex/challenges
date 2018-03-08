var treeMaker = function(value) {
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function(value) {
  var node = treeMaker(value);
  this.children.push(node);
};

treeMaker.methods.contains = function(value) {
  if (this.value === value) {
    return true;
  }

  for (const node of this.children) {
    if (node.contains(value)) {
      return true
    }
  }
  return false;
};

let tree = treeMaker();
tree.addChild(2);
console.log(tree);
