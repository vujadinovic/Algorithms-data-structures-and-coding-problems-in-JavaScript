// first to be inputed first to be processed, as opposed to stack where
// first inputed would be processed last
// same as stack, can be implemented with array but if performance is a concern,
// opt for linked lists

// insertion and removal are O(1) which is the point of data structure
// searching and access are O(n) however if you are going to use it you may not want to be using queues

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(value) {
        // same as push in LL
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this.length;
    }
    dequeue() {
        // same as shift in LL
        if (this.length === 0) return undefined;
        const oldFirst = this.first;
        this.first = this.first.next;
        this.length--;
        if (this.length === 0) {
            this.last = null;
        }
        return oldFirst;
    }
}
