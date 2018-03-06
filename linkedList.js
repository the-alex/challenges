// contains
// add to tail
// remove head

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.node = value ? new Node(value) : null;
    this.head = this.node;
    this.tail = this.node;
  }

  contains(value) {
    let toInspect = this.head;
    while (toInspect) {
      if (toInspect.value === value) {
        return true;
      }
      toInspect = toInspect.next;
    }
    return false;
  }

  addToTail(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  getAll() {
    let res = [];
    let toInspect = this.head;
    while (toInspect) {
      res.push(toInspect.value);
      toInspect = toInspect.next;
    }
    return res;
  }

  removeHead() {
    const numElts = this.getAll().length;
    // length > 1
    if (numElts > 1) {
      this.head = this.head.next;
    } else if (numElts === 1) {
      this.node = null;
      this.head = null;
      this.tail = null;
    }
  }
}

let ll = new LinkedList(4);
ll.addToTail(5);
console.log(ll.contains(4));
console.log(ll.contains(5));
console.log(ll.contains(6));
