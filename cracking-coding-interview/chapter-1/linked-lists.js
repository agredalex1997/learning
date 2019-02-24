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

    *[Symbol.iterator]() {
        let node = this.head;

        while (node !== null) {
            yield node;

            node = node.next;
        }
    }
}

function linkedListToReversedNumber(linkedList) {
    if (linkedList === null) {
        return;
    }

    let strNumber = "";

    for (let digit of linkedList) {
        strNumber += digit.data;
    }

    strNumber = strNumber.split("").reverse().join("");
    return parseInt(strNumber);
}

function sumLinkedLists(linkedList1, linkedList2) {
    if (linkedList1 === null || linkedList2 === null) {
        throw new Exception("One of the parameters is null");
    }

    if (linkedList1.length !== linkedList2.length) {
        throw new Error("Both linked lists must have the same length");
    }

    return linkedListToReversedNumber(linkedList1) + linkedListToReversedNumber(linkedList2);
}

let number1 = new LinkedList(3);
number1.appendToTail(1);
number1.appendToTail(5);

let number2 = new LinkedList(5);
number2.appendToTail(9);
number2.appendToTail(2);

console.log(sumLinkedLists(number1, number2));