// last that came in is first coming out

// there is quicker and simpler implementation with arrays,
// however if we care about efficiency we should use this linked list implementation
// since we don't need dozen+ methods nor indexes that come with arrays

// insertion O(1)
// removal O(1)
// searching, access not used

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(value) {
        // adds to beginning
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.length++;
        return this.length;
    }
    pop() {
        // removes from beginning
        if (!this.first) return undefined;
        const node = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.length--;
        node.next = null;
        return node;
    }
}
