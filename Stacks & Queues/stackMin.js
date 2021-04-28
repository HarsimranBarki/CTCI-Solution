/** Stack Min: How would you design a stack which, in addition to push and pop, has a function min
which returns the minimum element? Push, pop and min should all operate in 0(1) time.  */
class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
    this.min = null;
  }

  push(value) {
    this.size++;
    this.storage[this.size] = value;
    if (this.min == null) {
      this.min = value;
    } else {
      if (this.min > value) {
        this.min = value;
      }
    }
    return console.log(this.storage);
  }

  pop(value) {
    if (this.size == 0) return;
    delete this.storage[this.size];
    this.size--;
    return console.log(this.storage);
  }

  peekMin() {
    return console.log(this.min);
  }

  peek() {
    return console.log(this.storage[this.size]);
  }
}

let Basket = new Stack();

Basket.push(5);
Basket.push(9);
Basket.push(3);
Basket.push(7);

Basket.peek();
Basket.peekMin();
