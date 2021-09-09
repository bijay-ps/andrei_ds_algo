class NewNode  {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = new NewNode(val);
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let ddlArray = [];
        let currentNode = this.head;
        while ( currentNode !== null ) {
            ddlArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log('Doubly linkedlist: ', ddlArray);
    }

    append(val) {
        const newNode = new NewNode(val);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    remove(index) {
        const eltToRemove = this.traverseToIndex(index);
        const leadingNode = this.traverseToIndex(index);
        leadingNode.next = eltToRemove.next;
        eltToRemove.next.prev = leadingNode;
        eltToRemove.prev = null;
        eltToRemove.next = null;
        this.length--;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const aDoublyLinkedList = new DoublyLinkedList(10);
aDoublyLinkedList.append(5);
console.log(aDoublyLinkedList);
aDoublyLinkedList.printList();

