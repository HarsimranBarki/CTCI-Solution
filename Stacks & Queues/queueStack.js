// Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.

class Queue {
  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }

  enqueue(value) {
    if (this.stackOne.length == 0) {
      this.stackOne.push(value);
    } else {
      this.stackTwo = this.stackOne;
      this.stackOne = [];
      this.stackOne.push(value);
      this.stackTwo.map((data) => {
        this.stackOne.push(data);
      });
    }
  }

  dequeue() {
    this.stackOne.pop();
  }
}

let twoQ = new Queue();

twoQ.enqueue(1);
twoQ.enqueue(2);
twoQ.enqueue(3);
twoQ.dequeue();
twoQ.enqueue(4);
twoQ.enqueue(5);
twoQ.dequeue();

console.log(twoQ);
