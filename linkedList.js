class Node {
  constructor(data) {
    this.data = data || null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this._head === null) {
      this._head = newNode;
    } else {
      let pointer = this._head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
    }
    this._size += 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this._head === null) {
      this._head = newNode;
    } else {
      let temp = this._head;
      this._head = newNode;
      newNode.next = temp;
    }
    this._size += 1;
  }

  get size() {
    return this._size;
  }

  get head() {
    return this._head;
  }

  get tail() {
    if (!this._head) {
      return null;
    }
    let pointer = this.head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  }

  at(index) {
    if (!this._head) {
      return null;
    }
    if (index > this._size) {
      return undefined;
    }
    let pointer = this._head;
    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }
    return pointer;
  }

  pop() {
    if (!this._head) {
      return null;
    }
    if (this._head.next === null) {
      this._head = null;
    }
    const secondLastNode = this.at(this._size - 2);
    const value = secondLastNode.next.data;
    secondLastNode.next = null;
    this._size -= 1;
    return value;
  }

  contains(value) {
    if (!this._head) {
      return null;
    }
    let pointer = this._head;
    if (pointer.data === value) {
      return true;
    }
    while (pointer.next !== null) {
      pointer = pointer.next;
      if (pointer.data === value) {
        return true;
      }
    }
    return false;
  }

  find(value) {
    if (!this._head) {
      return null;
    }
    let pointer = this._head;
    for (let i = 0; i < this._size; i++) {
      if (pointer.data === value) {
        return i;
      }
      pointer = pointer.next;
    }
    return null;
  }

  toString() {
    let stringList = '';
    if (!this._head) {
      return null;
    }
    let pointer = this.head;
    for (let i = 0; i < this._size; i++) {
      stringList = stringList.concat(`(${pointer.data}) -> `);
      pointer = pointer.next;
    }
    stringList = stringList.concat(`(null)`);
    return stringList;
  }

  insertAt(value, index) {
    if (value) {
      const newNode = new Node(value);
      if (!this._head) {
        return null;
      }
      if (index === 0) {
        let tempNode = this._head;
        this._head = newNode;
        newNode.next = tempNode;
      } else {
        let nodeBeforeIndex = this.at(index - 1);
        let nodeAtIndex = this.at(index);
        nodeBeforeIndex.next = newNode;
        newNode.next = nodeAtIndex;
      }
      this._size += 1;
    }
  }

  removeAt(index) {
    if (!this._head) {
      return null;
    }
    const nodeBeforeIndex = this.at(index - 1);
    const nodeAfterIndex = this.at(index + 1);
    nodeBeforeIndex.next = nodeAfterIndex;
    this._size -= 1;
  }
}

const list = new LinkedList();

list.append(23);
list;
list.append(42);
list;
list.prepend(18);
list;
console.log(list.size);
console.log(list.head);
console.log(list.tail);
console.log(list.at(2));
console.log(list.at(0));
console.log(list.size);
list;
console.log(list.contains(42));
console.log(list.find(18));
list.prepend(2);
list.append(43);
console.log(list.head);
console.log(list.toString());
list.insertAt(144, 1);
console.log(list.toString());
console.log(list.head.data);
list.removeAt(2);
console.log(list.toString());
