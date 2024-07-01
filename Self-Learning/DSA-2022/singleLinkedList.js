class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value)  {
        const node = new Node(value);

        if (this.head == null){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
}

const l1 = new List();
l1.add(1);
l1.add(2);