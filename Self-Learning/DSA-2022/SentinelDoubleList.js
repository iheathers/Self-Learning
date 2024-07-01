class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class SentinelDoubleList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToBack(value) {
    const newNode = new Node(value);

    newNode.next = this.tail;
    newNode.prev = this.tail.prev;

    newNode.next.prev = newNode;
    newNode.prev.next = newNode;
  }

  addToFront(value) {
    const newNode = new Node(value);

    newNode.prev = this.head;
    newNode.next = this.head.next;

    newNode.prev.next = newNode;
    newNode.next.prev = newNode;
  }

  searchNode(value) {
    for (
      let current = this.head.next;
      current !== this.tail;
      current = current.next
    ) {
      if (current.value === value) {
        return current;
      }
    }

    return null;
  }

  removeNode(value) {
    const deleteNode = this.searchNode(value);

    if (deleteNode) {
      deleteNode.prev.next = deleteNode.next;
      deleteNode.next.prev = deleteNode.prev;

      return true;
    }

    return false;
  }

  insertAfter(searchValue, insertValue) {
    const searchNode = this.searchNode(searchValue);

    if (searchNode) {
      const spot = new Node(insertValue);

      spot.prev = searchNode;
      spot.next = searchNode.next;

      spot.prev.next = spot;
      spot.next.prev = spot;

      return true;
    }

    return false;
  }

  insertBefore(searchValue, insertValue) {
    const searchNode = this.searchNode(searchValue);

    if (searchNode) {
      const spot = new Node(insertValue);

      spot.next = searchNode;
      spot.prev = searchNode.prev;

      spot.next.prev = spot;
      spot.prev.next = spot;

      return true;
    }

    return false;
  }

  printForward() {
    for (
      let current = this.head.next;
      current !== this.tail;
      current = current.next
    ) {
      console.log(current);
    }
  }

  printBackward() {
    for (
      let current = this.tail.prev;
      current !== this.head;
      current = current.prev
    ) {
      console.log(current);
    }
  }
}

const l = new SentinelDoubleList();

l.addToBack(1);
l.addToBack(2);
l.addToBack(3);

// l.insertAfter(1, 10);
// l.insertAfter(10, 100);
// l.insertAfter(3, 33);

// l.insertBefore(1, 0);
// l.insertBefore(2, 22);
// l.insertBefore(3, 33);

l.printForward();
// l.printBackward();

// console.log("******");

// l.addToFront(-1);
// l.addToFront(-2);
// l.addToFront(-3);

// l.printForward();
// console.log("---");
// l.printBackward();
