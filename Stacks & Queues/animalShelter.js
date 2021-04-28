class AnimalShelter {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(animal, category) {
    let node = new Node(animal, category);

    if (this.tail != null) {
      node.prev = this.tail;
      node.prev.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }
    this.size++;
  }

  dequeueAny() {
    let animal = this.tail.data;
    let prev = this.tail.prev;
    this.tail = prev;
    prev.next = null;

    return console.log(animal);
  }

  dequeueDog() {
    let curr = this.head;
    let currDog = null;
    while (curr != null) {
      if (curr.category == "Dog") {
        currDog = curr;
      }

      curr = curr.next;
    }

    if (currDog != null) {
      if (this.tail == currDog) {
        let prev = this.tail.prev;
        this.tail = prev;
        prev.next = null;

        return console.log(currDog.data);
      } else {
        currDog.prev.next = currDog.next;
        return console.log(currDog.data);
      }
    } else {
      return console.log("No Dogs Availaible");
    }
  }

  dequeueCat() {
    let curr = this.head;
    let currCat = null;
    while (curr != null) {
      if (curr.category == "Cat") {
        currCat = curr;
      }

      curr = curr.next;
    }

    if (currCat != null) {
      if (this.tail == currCat) {
        let prev = this.tail.prev;
        this.tail = prev;
        prev.next = null;

        return console.log(currCat.data);
      } else {
        currCat.prev.next = currCat.next;
        return console.log(currCat.data);
      }
    } else {
      return console.log("No Dogs Availaible");
    }
  }
}

class Node {
  constructor(data, category, prev, next) {
    this.category = category;
    this.data = data;
    this.prev = prev || null;
    this.next = next || null;
  }
}

let shelter = new AnimalShelter();
shelter.enqueue("D1", "Dog");
shelter.enqueue("D2", "Dog");

shelter.enqueue("C1", "Cat");
shelter.enqueue("C2", "Cat");
shelter.enqueue("C3", "Cat");

shelter.dequeueDog();
