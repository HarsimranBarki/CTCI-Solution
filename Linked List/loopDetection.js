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

  loopDetect() {
    let curr = this.head;
    let head = this.head;

    while (curr != null) {
      if (curr.next == head) {
        return console.log(curr.next);
      }
      curr = curr.next;
    }
  }

  show() {
    let curr = this.head;
    while (curr != null) {
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

let circular = new LinkedList();

for (let num of [0, 1, 2, 3, 4]) {
  circular.prepend(num);
}

// adding loop
circular.tail.next = circular.head;
circular.loopDetect();
