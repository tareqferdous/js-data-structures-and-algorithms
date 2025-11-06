class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue: add to the rear
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue: remove from the front
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    return this.items.shift();
  }

  // Peek: see the front element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    return this.items[0];
  }

  // isEmpty: check if empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size: total items
  size() {
    return this.items.length;
  }

  // Print
  print() {
    console.log(this.items.join(" <- "));
  }
}

// Usage
const queue = new Queue();

queue.enqueue("Tareq");
queue.enqueue("Ferdous");
queue.enqueue("Rafi");

queue.print(); // Tareq <- Ferdous <- Rafi

console.log("Front:", queue.peek()); // Tareq
console.log("Dequeued:", queue.dequeue()); // Tareq

queue.print(); // Ferdous <- Rafi
