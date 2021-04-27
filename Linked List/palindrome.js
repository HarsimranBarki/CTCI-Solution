// Singly linked list

class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  // add it to the end of list
  append(value) {
    const node = new Node(value);

    if (!this.tail) {
      this.tail = this.head = node;
    } else {
      let oldTail = this.tail;
      this.tail = node;
      oldTail.next = this.tail;
    }

    return node;
  }

  // add it to the start of list
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }

    return node;
  }

  // Palidrom
  isPalindrom() {
    let curr = this.head;
    let stack = new Set();
    while (curr != null) {
      if (stack.has(curr.data)) {
        stack.delete(curr.data);
      } else {
        stack.add(curr.data);
      }
      curr = curr.next;
    }

    if (stack.size <= 1) {
      return console.log("It is a plaindrome");
    } else {
      return console.log("It' not");
    }
  }

  show() {
    let curr = this.head;
    while (curr.next != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

class Node {
  constructor(value, next) {
    this.data = value;
    this.next = next || null;
  }
}

// Intializing Chars
let str = new LinkedList();
for (let char of "racecar") {
  str.append(char);
}

str.isPalindrom();
