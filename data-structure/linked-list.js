class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // linked list er sesh e node add korar jonno
  append(value) {
    const newNode = new Node(value);
    // if linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if linked list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // linked list er shuru te node add korar jonno
  prepend(value) {
    const newNode = new Node(value);
    // if linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if linked list is not empty
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // specific position e node add korar jonno
  insert(index, value) {
    // index validity check
    if (index < 0 || index > this.length) {
      console.log("Index out of bounds");
      return;
    }

    // if we want to insert at the beginning
    if (index === 0) {
      this.prepend(value);
      return;
    }

    // if we want to insert at the end
    if (index === this.length) {
      this.append(value);
      return;
    }

    // if we want to insert in the middle
    // find the previous node of the position where we want to insert
    const leadingNode = this._traverseToIndex(index - 1);
    const holdingNode = leadingNode.next;

    const newNode = new Node(value);
    leadingNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
  }

  // specific position theke node remove korar jonno
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }

    const leadingNode = this._traverseToIndex(index - 1);
    const holdingNode = leadingNode.next;
    leadingNode.next = holdingNode.next;

    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }
  }

  // specific index e jawar jonno private helper method
  _traverseToIndex(index) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  // linked list er shob node gula print korar jonno
  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let linkedList = new LinkedList();
linkedList.append(10);

linkedList.remove(1);
linkedList.print();
