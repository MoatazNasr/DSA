import LinkedList from "../Singly LinkedList/LinkedList";
// array-based imp
// pros -- easy to be imp and 
// cons -- The total size of the stack must be defined beforehand and not dynamically shrinks or grows but 
// arrays in JS are dynamic so that Cons may get removed 
// export default class Stack {
//     #array;
//     constructor () {
//       this.#array = [];
//     }
//     push (value) {
//       this.#array.push(value);
//     }
//     pop () {
//       if (this.#array.length > 0) return this.#array.pop();
//     }
//     peek  () {
//       let stackSize = this.#array.length ;
//       if (stackSize > 0) return this.#array[stackSize - 1];
//     }
//     isEmpty () {
//       return !this.#array.length;
//     }
//     size () {
//       return this.#array.length;
//     }
//     elements () {
//       return this.#array;
//     }
// }

// linkedlist-based imp 
// pros -- The linked list implementation of a stack can grow and shrink according to the needs at runtime.
// cons -Requires extra memory due to the involvement of pointers and Random accessing is not possible in stack 
export default class Stack {
  #linkedList;
  constructor() {
    this.#linkedList = new LinkedList();
  }
  push(value) {
    this.#linkedList.preapend(value);
  }
  pop() {
    if (this.#linkedList.getSize() > 0) return this.#linkedList.deleteHead();
  }
  peek() {
    return this.#linkedList.head.value;
  }
  isEmpty() {
    return !this.#linkedList.getSize();
  }
  size() {
    return this.#linkedList.getSize();
  }
  elements() {
    let stackArray = Array(this.size());
    let linkedListElements = this.#linkedList.toArray();
    for (let i = stackArray.length - 1, j = 0; i > -1; i--, j++) {
      stackArray[i] = linkedListElements[j];
    }
    return stackArray;
  }
}
