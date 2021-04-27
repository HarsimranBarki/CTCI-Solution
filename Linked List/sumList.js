class Node {
  constructor(value, next) {
    this.data = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
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

  sum(listOne, listTwo) {
    let l1H = listOne.head;
    let l2H = listTwo.head;
    let sumList = new LinkedList();
    let sumTail = sumList;
    let sum = 0;
    let carry = 0;

    while (l1H !== null || l2H !== null || sum > 0) {
      if (l1H) {
        sum += l1H.data;
        l1H = l1H.next;
      }
      if (l2H) {
        sum += l2H.data;
        l2H = l2H.next;
      }

      if (sum > 9) {
        carry = 1;
        sum = sum - 10;
      }
      sumTail.next = new Node(sum);
      sumTail = sumTail.next;

      sum = carry;
      carry = 0;
    }

    return console.log(sumList.next);
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

let numListOne = new LinkedList();
let numListTwo = new LinkedList();
numListOne.prepend(6);
numListOne.prepend(1);
numListOne.prepend(7);
numListTwo.prepend(2);
numListTwo.prepend(9);
numListTwo.prepend(5);

let ll = new LinkedList();
ll.sum(numListOne, numListTwo);
