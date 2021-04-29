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
  invert() {
    let res = this.root.flip(this.root);
    console.log(res);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }

  addNode(node) {
    if ((this.root = null)) {
      return root;
    }
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

  flip(root) {
    if (!root) {
      return null;
    }

    this.flip(root.left);
    this.flip(root.right);

    if (!root.left && !root.right) {
      return root;
    }

    if (root.left || root.right) {
      let temp = root.left;
      root.left = root.right;
      root.right = temp;
    }

    return root;
  }
}

let tree = new Tree();

tree.addValue(4);
tree.addValue(2);
tree.addValue(7);
tree.addValue(1);
tree.addValue(3);
tree.addValue(6);
tree.addValue(9);
// tree.traverse();

console.log(tree.root);
console.log("-----");
tree.invert();
