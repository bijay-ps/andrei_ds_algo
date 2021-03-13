
class Node {
    constructor(val) {
        return {
            value: val,
            next: null
        }
    }
}

// 10 --> 5--> 16

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(val) {
        if(this.length > 0) {
            const newNode = new Node(val);
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            return new Error('Cannot append to an empty Linkedlist');
        }
    }

    prepend(val) {
        if(this.length > 0) {
            const newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        } else {
            return new Error('Cannot prepend to an empty Linkedlist');
        }
    }

    insert(index, val) {
        if(index <= this.length) {
            let newNode = new Node(val);
            const leadingNode = this.traverseToIndex(index - 1);
            const nextNode = leadingNode.next;
            leadingNode.next = newNode;
            newNode.next = nextNode;
        }
    }

    traverseToIndex(index) {
        let counter = 0;
        let currNode = this.head;
        while(counter !== index) {
            currNode = currNode.next;
            counter++;
        }
        return currNode;
    }

    printList() {
        let arr = [];
        let currNode = this.head;
        while(currNode !== null) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        console.log('Linkedlist: ', arr);
    }

    remove(index) {
        if(index <= this.length) {
            const leadingNode = this.traverseToIndex(index - 1);
            const nextNode = this.traverseToIndex(index + 1);
            leadingNode.next = nextNode;
            this.length--;
        }
    }
}

const newLL = new LinkedList(10);
newLL.append(5);
newLL.append(16);
newLL.prepend(1);
newLL.insert(3,99);
newLL.remove(1);
newLL.printList();