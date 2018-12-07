class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(data) {
    this.head = new Node(data, this.head);
  }

  remove(data) {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      if (currentNode.data === data) {
        prevNode.next = currentNode.next;
        currentNode = null;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  iterate() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(`{data: '${currentNode.data}', next: ${currentNode.next ? currentNode.next.data : null}}`);

      currentNode = currentNode.next;
    }
  }

  search(data) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      if (currentNode.data === data) {
        return index;
      }

      index++;
      currentNode = currentNode.next;
    }

    return -1;
  }
}

let family = new LinkedList();

family.insert('david');
family.insert('miracle');
family.insert('alex');
family.insert('vic')
family.insert('mary');
family.insert('joseph');

family.remove('vic') //:(

family.iterate()

console.log(family.search('vic')); //:(