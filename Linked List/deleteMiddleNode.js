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

  sizeOfList() {
    let size = 0;
    let curr = this.head;
    while (curr.next != null) {
      size++;
      curr = curr.next;
    }

    return size;
  }

  deleteMiddleNode() {
    let size = this.sizeOfList();
    let middle = Math.floor(size / 2);
    let curr = this.head;
    let index = 0;

    while (curr.next != null) {
      if (index == middle - 1) {
        curr.next = curr.next.next;
        return;
      }
      index++;
      curr = curr.next;
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

let UnsortedNums = new LinkedList();

UnsortedNums.append(5);
UnsortedNums.append(8);
UnsortedNums.append(3);
UnsortedNums.append(1);
UnsortedNums.append(9);
UnsortedNums.append(3);
UnsortedNums.append(2);
UnsortedNums.append(6);
UnsortedNums.append(7);
UnsortedNums.deleteMiddleNode(2);
UnsortedNums.show();
