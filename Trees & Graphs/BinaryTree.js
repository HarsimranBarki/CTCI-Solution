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

  average() {
    let res = this.root.getAverage(this.root);
    console.log(res);
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

  getAverage(root) {
    const queue = [];
    const averagePerLevel = [];
    queue.push(root);
    while (queue.length) {
      let sum = 0;
      // Save the length value to calculate the average after getting the sum of all values in at that level
      let levelLength = queue.length;
      for (let i = 0; i < levelLength; i++) {
        let node = queue.shift();
        sum += node.val;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      averagePerLevel.push(sum / levelLength);
    }
    return averagePerLevel;
  }
}

let tree = new Tree();

tree.addValue(3);

tree.average();
