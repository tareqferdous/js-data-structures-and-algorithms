class Stack {
  constructor() {
    this.items = []; // array দিয়ে stack রাখা হবে
  }

  // Push: নতুন item যোগ করা
  push(element) {
    this.items.push(element);
  }

  // Pop: শেষ item মুছে ফেলা ও return করা
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.items.pop();
  }

  // Peek: top element দেখা
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty: ফাঁকা কিনা দেখা
  isEmpty() {
    return this.items.length === 0;
  }

  // Size: stack এ কয়টা element আছে
  size() {
    return this.items.length;
  }

  // Print: সব element দেখা
  print() {
    console.log(this.items.join(" <- "));
  }
}

// Usage
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // Output: 10 <- 20 <- 30

console.log("Top:", stack.peek()); // 30
console.log("Popped:", stack.pop()); // 30

stack.print(); // 10 <- 20
