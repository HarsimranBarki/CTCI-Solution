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

  //   Remove Duplicate

  removeDuplicate() {
    if (!this.head || !this.tail) return null;
    if (this.head == this.tail) return null;

    let pointerOne = this.head;

    while (pointerOne.next != null) {
      let pointerTwo = pointerOne;

      while (pointerTwo.next != null) {
        if (pointerOne.data == pointerTwo.next.data) {
          pointerTwo.next = pointerTwo.next.next;
        }

        pointerTwo = pointerTwo.next;
      }

      pointerOne = pointerOne.next;
    }
  }

  kthToLast(pos) {
    //assuming we don't have a size
    let size = 0;
    let curr = this.head;
    while (curr.next != null) {
      size++;
      curr = curr.next;
    }

    if (pos > size) return console.log("Position Doesn't Exist");

    let elePos = size - pos;
    let counterTwo = 0;

    let currTwo = this.head;
    while (currTwo.next != null) {
      if (counterTwo == elePos) return console.log(currTwo.data);
      counterTwo++;
      currTwo = currTwo.next;
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
UnsortedNums.kthToLast(2);
UnsortedNums.show();
