class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(value) {
    this.size++;
    this.storage[this.size] = value;
    return console.log(this.storage);
  }

  pop(value) {
    if (this.size == 0) return;
    delete this.storage[this.size];
    this.size--;
    return console.log(this.storage);
  }

  peek() {
    return console.log(this.storage[this.size]);
  }
}

let Basket = new Stack();

Basket.push("Chocolate");
Basket.push("Icecream");
Basket.push("Orange");
Basket.push("Papapaya");

Basket.peek();
