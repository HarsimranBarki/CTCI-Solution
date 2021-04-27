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

  // m*n
  intersectionSlow(other) {
    let p1 = this.head;
    let p2 = other.head;
    let store = new Set();
    while (p2.next != null) {
      store.add(p2.next);
      p2 = p2.next;
    }

    while (p1.next != null) {
      if (store.has(p1.next)) {
        return console.log(p1.next.data);
      }
      p1 = p1.next;
    }
  }

  // Intersection (m*n)
  intersectionSlowest(other) {
    let p1 = this.head;
    let p2 = other.head;
    while (p2.next != null) {
      while (p1.next != null) {
        if (p1.next == p2.next) {
          return console.log(p1.next.data);
        }

        p1 = p1.next;
      }
      p1 = this.head;
      p2 = p2.next;
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

let first = new LinkedList();
first.append("f1");
first.append("f2");
first.append("f3");
let second = new LinkedList();
second.append("g1");
second.append("g2");

first.tail.next = second.tail;

second.append("g4");
second.append("g5");
first.show();

first.intersectionSlow(second);
