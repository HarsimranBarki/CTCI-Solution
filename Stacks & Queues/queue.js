class Queue {
  constructor() {
    this.storage = {};

    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    delete this.storage[this.head];
    this.head++;
    this.tail--;
  }
  peek() {
    return console.log(this.storage[this.head]);
  }
}

let Line = new Queue();
Line.enqueue("John Smith");
Line.enqueue("Ronny F");
Line.enqueue("Lauren Smith");
Line.dequeue();
Line.peek();
