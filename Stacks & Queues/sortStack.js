/** Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
an additional temporary stack, but you may not copy the elements into any other data structure
(such as an array). The stack supports the following operations: push, pop, peek, and is Empty.  */

class Stack {
  constructor() {
    this.stkOne = [];
  }

  push(value) {
    this.stkOne.push(value);
  }

  sort() {
    // Initialize Stack One
    let s1 = this.stkOne;
    // Asigned temp_stack
    let TEMP_STACK = new Array();
    TEMP_STACK.push(this.top(s1));

    s1.pop();

    while (s1.length !== 0) {
      let temp = this.top(s1);
      s1.pop();

      while (TEMP_STACK.length !== 0 && temp < this.top(TEMP_STACK)) {
        s1.push(this.top(TEMP_STACK));
        TEMP_STACK.pop();
      }

      TEMP_STACK.push(temp);
    }
    return TEMP_STACK;
  }

  top(stack) {
    return stack[stack.length - 1];
  }
}

let stack = new Stack();

stack.push(5);
stack.push(2);
stack.push(8);
stack.push(1);
stack.push(3);

stack.sort();

console.log(stack);
