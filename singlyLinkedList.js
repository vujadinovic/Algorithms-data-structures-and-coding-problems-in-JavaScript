// Insertion to the beginning or end is O(1) otherwise O(n)
// Removal from the beginning O(1) otherwise O(n)
// Searching is O(n)
// Access is O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let currentNode = this.head;
        let newTail = currentNode;
        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }
    shift() {
        // removes from beginning
        if (this.length === 0) return undefined;
        const oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }
    unshift(value) {
        // adds to beginning
        const newHead = new Node(value);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, value) {
        const foundNode = this.get(index);
        if (!foundNode) return false;
        foundNode.val = value;
        return true;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value); // !! - converting return value to boolean to be consistent
        if (index === 0) return !!this.unshift(value); // !! - converting return value to boolean to be consistent
        let pre = this.get(index - 1);
        let insertedNode = new Node(value);
        insertedNode.next = this.get(index);
        pre.next = insertedNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        const removed = this.get(index);
        const pre = this.get(index - 1);
        pre.next = removed.next;
        return removed;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let pre = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
        return this;
    }
}

let sll = new singlyLinkedList();
sll.push("1");
sll.push("2");
sll.push("3");
sll.push("4");
sll.push("5");
