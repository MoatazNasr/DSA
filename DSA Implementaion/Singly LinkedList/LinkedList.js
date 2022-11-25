import linkedListNode from "./LinkedListNode.js";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // pointers/references to nodes
    this.length = 0;
  }
  preapend(value) {
    const newNode = new linkedListNode(value, this.head);
    this.head = newNode;
    if (this.tail === null) this.tail = newNode;
    // if there is not any single element exist
    this.length += 1;
    // preapend to append an element to be the first one in linkedlist
    return this;
    // return this to keep chaining
    // time complexity is O(1)
  }
  append(value) {
    const newNode = new linkedListNode(value);
    this.length += 1;
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    // if there is not any single element exits
    return this;
    // time complexity is O(1)
  }
  insert(value, index) {
    if (index <= 0) this.preapend(value);
    else {
      this.length += 1;
      let counter = 0;
      let currentNode = this.head;
      const newNode = new linkedListNode(value);
      while (counter < index) {
        currentNode = currentNode.next;
        counter += 1;
      }
      // loop through the linkedlist to get the prevNode
      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
      // if we found a valid node
      else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        }
        // if the user wanted to add a node at an index where the length of the linkedlist < that index
        // if tail exists then we add that element at the end of the linked list
        else {
          this.tail = newNode;
          this.head = newNode;
          // if tail does not exist so there are no elements and we add it as the first element
        }
      }
    }
    return this;
    // time complexity is O(n)
  }
  delete(value) {
    if (this.head === null) return null;
    let deletedNode = null;
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.length -= 1;
    }
    // this.head condition is used as if the value is not valid ex : undefined
    // in case we got the same value in consecutive nodes [3,3,3]
    let currentNode = this.head;
    // we use currentNode.next as we assume that we have checked the head value

    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        this.length -= 1;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (this.tail.value === value) this.tail = currentNode;
    return deletedNode;
  }
  findByValue(value = undefined, callback = undefined) {
    if (this.head === null) return null;
    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) return currentNode;
      if (value && currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }
  findByIndex(index = undefined) {
    if (this.head === null) return null;
    let currentNode = this.head;
    let counter = 0;
    if (index === 0) return this.head;
    if (index && this.length >= index) {
      while (currentNode) {
        if (counter === index) return currentNode;
        else {
          currentNode = currentNode.next;
          counter += 1;
        }
      }
    }
    return null;
  }
  getSize() {
    return this.length;
  }
  deleteTail() {
    if (this.tail === null) return null;
    if (this.tail === this.head) return this.head;
    let currentNode = this.head;
    let counter = 0;
    let deletedTail = this.tail;
    while (counter < this.length - 2) {
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    currentNode.next = null;
    return deletedTail;
  }
  deleteHead() {
    if (this.head === null) return null;
    let deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return deletedHead;
  }
  fromArray(values) {
    values.forEach((value) => {
      this.append(value);
    });
  }
  toArray() {
    let nodesValues = [];
    let currentNode = this.head;
    while (currentNode) {
      nodesValues.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return nodesValues;
  }
  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.tail = this.head;
    this.head.next = null;
    this.head = prevNode;
    return this;
  }
}
