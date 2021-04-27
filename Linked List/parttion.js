/** Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions */

class Node {
  constructor(value, next) {
    this.data = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

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

  partition(pos) {
    let beforeHead = new Node(0);
    let before = beforeHead;
    let afterHead = new Node(0);
    let after = afterHead;
    let curr = this.head;
    while (curr !== null) {
      if (curr.data < pos) {
        before.next = curr;

        before = before.next;
      } else {
        after.next = curr;
        after = after.next;
      }

      curr = curr.next;
    }

    after.next = null;
    before.next = afterHead.next;

    while (beforeHead != null) {
      console.log(beforeHead.data);
      beforeHead = beforeHead.next;
    }

    console.log(before);
  }

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

  show() {
    let curr = this.head;

    while (curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

let numList = new LinkedList();
numList.prepend(3);
numList.prepend(5);
numList.prepend(8);
numList.prepend(5);
numList.prepend(10);
numList.prepend(2);
numList.prepend(1);
numList.partition(5);
numList.show();
