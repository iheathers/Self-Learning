class Entry {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(size = 10) {
    this.size = size;

    this.table = new Array(size);
  }

  getHash(key) {
    return key % this.size;
  }
}
