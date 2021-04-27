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

  // Delete Head Of Node
  deleteHead() {
    if (!this.head) {
      this.head = this.tail = null;
    } else {
      let oldHead = this.head;
      this.head = oldHead.next;
    }
  }

  // Delete Tail Of Node
  deleteTail() {
    if (!this.tail) {
      this.head = this.tail = null;
    } else {
      let curr = this.head;

      while (curr.next != this.tail) {
        curr = curr.next;
      }
      this.tail = curr;
      this.tail.next = null;
      return curr;
    }
  }

  show() {
    return console.log(this.head);
  }
}

class Node {
  constructor(value, next) {
    this.data = value;
    this.next = next || null;
  }
}

let Book = new LinkedList();

Book.append("Harry Potter");
Book.append("Red Card");
Book.append("Galaxy Guide");
Book.show();
