class HashTable {
  table = new Array(2);
  item = 0;

  set(key, value) {
    this.item++;

    const laodBalancer = this.item / this.table.length;

    if (laodBalancer > 0.8) this.resize();
    const id = this.hash(key, this.table.length);

    if (this.table[id]) {
      this.table[id].push([key, value]);
    } else {
      this.table[id] = [[key, value]];
    }
  }

  get(key) {
    const id = this.hash(key, this.table.length);

    let store = this.table[id].find((x) => x[0] === key)[1];

    return console.log(`${key}: =>`, store);
  }

  getAll() {
    this.table;
  }

  getSize() {
    console.log("");
    console.log("size => ", this.table.length);
    console.log("");
  }

  hash(key, size) {
    let hash = 17;
    for (let i = 0; i < key.length; i++) {
      hash = (13 * hash * key.charCodeAt(i)) % size;
    }
    return hash;
  }

  resize() {
    const resizeArray = new Array(this.table.length * 2);

    this.table.forEach((element) => {
      if (element) {
        element.forEach(([key, value]) => {
          const id = this.hash(key, resizeArray.length);

          if (resizeArray[id]) {
            resizeArray[id].push([key, value]);
          } else {
            resizeArray[id] = [[key, value]];
          }
        });
      }
    });

    this.table = resizeArray;
  }
}

let data = new HashTable();

data.getSize();
data.set("name", "Harsimran");
data.set("age", 24);
data.get("name");
data.get("age");
data.getSize();
