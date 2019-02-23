class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(data) {
        this.head = new Node(data);
        this.length = 1;
    }

    /**
     * Delete all the nodes with a specified data
     */
    deleteNodes(data) {
        let n = this.head;

        if (n.data === data) {
            this.head = n.next;

            this.length--;

            return;
        }

        while (n !== null && n.next !== null) {
            if (n.next.data === data) {
                n.next = n.next.next;

                this.length--;
            }

            n = n.next;
        }
    }

    /**
     * Leave only the first appearance of all the nodes with the same data
     */
    removeDuplicates() {
        let uniques = [this.head.data];

        let node = this.head;

        while (node !== null && node.next !== null) {
            if (uniques.indexOf(node.next.data) === -1) {
                uniques.push(node.next.data);
            } else {
                node.next = node.next.next;
                this.length--;
            }

            node = node.next;
        }
    }

    /**
     * Append a new Node width the specified data to the end of the LinkedList
     *
     */
    appendToTail(data) {
        let end = new Node(data);
        let n = this.head;

        while (n.next !== null) {
            n = n.next;
        }

        n.next = end;

        this.length++;
    }
}


linkedList = new LinkedList(1);
linkedList.appendToTail(2);
linkedList.appendToTail(3);
linkedList.appendToTail(4);
linkedList.appendToTail(3);
linkedList.deleteNode(3);

console.log(linkedList);