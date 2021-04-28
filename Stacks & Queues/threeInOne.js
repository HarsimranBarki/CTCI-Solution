/**  Three in One: Describe how you could use a single array to implement three stacks. */

class MultiStack {
  constructor(noOfStacks, stackSize) {
    this.capacity = stackSize;
    this.sizes = new Array(noOfStacks).fill(0);
    this.storage = [];
  }

  isFull(stackNo) {
    return this.sizes[stackNo] == this.capacity ? true : false;
  }

  isEmpty(stackNo) {
    return this.sizes[stackNo] == 0 ? true : false;
  }

  push(stackNo, value) {
    if (this.isFull(stackNo)) return console.log("Stack Overflow");
    this.sizes[stackNo]++;
    this.storage[this.indexOfTop(stackNo)] = value;
  }

  pop(stackNo) {
    if (this.isEmpty(stackNo)) return console.log("Stack is Empty");
    this.storage[this.indexOfTop(stackNo)] = 0;
    this.sizes[stackNo]--;
  }

  indexOfTop(stackNo) {
    let offset = stackNo * this.capacity;
    let size = this.sizes[stackNo];
    return offset + size - 1;
  }
}

let stack = new MultiStack(3, 3);

stack.push(0, 1);
stack.push(0, 2);
stack.push(0, 3);

stack.push(2, 7);
stack.push(2, 8);

stack.pop(2);
stack.push(2, 9);
console.log(stack);
