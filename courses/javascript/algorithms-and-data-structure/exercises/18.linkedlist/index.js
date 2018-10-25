// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    getFirst() {
        return this.head;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    getLast() {
        let node = this.head;
        let result = null;
        while(node) {
            if (!node.next) {
                result = node;
            }
            node = node.next;
        }
        return result; 
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }

        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }

    }

    size() {
        let counter = 0;
        let node = this.head;
        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    clear() {
        this.head = null;
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }
        
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index-1);

        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index -1);
        if (!previous) {
            this.insertLast(data);
            return;
        }

        const node = new Node(data, previous.next);
        previous.next = node;
    }
}

module.exports = { Node, LinkedList };
