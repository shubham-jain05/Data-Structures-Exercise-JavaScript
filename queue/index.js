// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples

class Queue {
  constructor() {
    this.data = [];
  }

  add(n) {
    this.data.unshift(n);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const q = new Queue();
q.add(1);
q.remove(); // returns 1;

module.exports = Queue;
