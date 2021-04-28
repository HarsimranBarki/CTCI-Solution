class DinnerPlates {
  constructor(capacity) {
    this.capacity = capacity;
    this.storage = [[]];
    this.lastStack = this.storage[this.storage.length - 1];
  }

  push(value) {
    let currentStack = this.lastStack;

    if (currentStack.length == this.capacity) {
      this.storage.push([]);
      this.lastStack = this.storage[this.storage.length - 1];
    }
    this.lastStack.push(value);
  }

  pop() {
    this.lastStack.pop();
    if (this.lastStack.length == 0) {
      this.storage.pop();
      this.lastStack = this.storage[this.storage.length - 1];
    }
  }

  popAt(index) {
    let currIndex = this.storage[index];
    currIndex.pop();
  }
}

let stack = new DinnerPlates(3);

stack.push(1);
stack.push(2);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.pop();
stack.pop();
stack.popAt(1);

console.log(stack);
