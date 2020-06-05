// insertion O(1)
// removal O(1)
// searching O(n)
// access O(n) *O(n/2) technically*

// probably browser history back and next buttons


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        const oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
    shift() {
        if (!this.head) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let node, i;
        if (index <= this.length / 2) {
            i = 0;
            node = this.head;
            while (i !== index) {
                node = node.next;
                i++;
            }
        } else {
            i = this.length - 1;
            node = this.tail;
            while (i !== index) {
                node = node.prev;
                i--;
            }
        }
        return node;
    }
    set(index, value) {
        let node = this.get(index);
        if (node != null) {
            node.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) return false;
        else if (index === 0) return !!this.unshift(value);
        else if (index === this.length) return !!this.push(value);

        const newNode = new Node(value);
        const prevNode = this.get(index - 1);
        const afterNode = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index >= this.length || index < 0) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }
}
