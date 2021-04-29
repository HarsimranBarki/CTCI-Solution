class Tree {
  constructor() {
    this.root = null;
  }

  // add value
  addValue(value) {
    let node = new Node(value);

    if (this.root == null) return (this.root = node);

    this.root.addNode(node);
  }

  traverse() {
    if (this.root != null) {
      this.root.visit();
    }
  }

  find(value) {
    this.root.search(value);
  }
}

class Node {
  constructor(value) {
    this.left = this.right = null;
    this.value = value;
  }

  addNode(node) {
    if (node.value < this.value) {
      if (this.left != null) {
        this.left.addNode(node);
      } else {
        this.left = node;
      }
    } else if (node.value > this.value) {
      if (this.right != null) {
        this.right.addNode(node);
      } else {
        this.right = node;
      }
    }
  }

  search(value) {
    if (this.value !== null && this.value == value) {
      return console.log("found", value);
    }

    if (this.value > value) {
      if (this.left != null) {
        this.left.search(value);
      }
    } else if (this.value < value) {
      if (this.right != null) {
        this.right.search(value);
      }
    }
  }

  visit() {
    if (this.left != null) {
      this.left.visit();
    }
    console.log("|");
    console.log(this.value);

    if (this.right != null) {
      this.right.visit();
    }
  }
}

let tree = new Tree();

tree.addValue(10);
tree.addValue(3);
tree.addValue(5);
tree.addValue(16);
tree.addValue(20);
tree.traverse();
tree.find(3);
