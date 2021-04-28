class Stack {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  push(value) {
    this.storage.push(value);
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return console.log("Empty");
    this.storage.pop();
    this.size--;
  }

  peek() {
    if (this.isEmpty()) return console.log("Empty");
    let strg = this.storage;
    return console.log(strg[strg.length - 1]);
  }

  isEmpty() {
    return this.size == 0 ? true : false;
  }

  print() {
    this.storage.forEach((data) => {
      console.log(data);
    });
  }
}

let Basket = new Stack();

Basket.push("Ice Cream");
Basket.push("Sunglasses");
Basket.push("Chocolate");
Basket.push("Olive Oil");

Basket.print();
Basket.pop();
Basket.peek();
console.log(Basket);
