const Node = (value) => {
  let data = value || null;
  let next = null;

  return { data, next };
};

const LinkedList = () => {
  let _head = null;
  let _length = null;

  const append = (value) => {
    const newNode = Node(value);
    if (!_head) {
      _head = newNode;
    } else {
      let node = _head;
      while (node.next != null) {
        node = node.next;
      }
      node.next = newNode;
    }
    _length += 1;
  };

  const prepend = (value) => {
    const newNode = Node(value);
    if (!_head) {
      _head = newNode;
    } else {
      let node = _head;
      _head = newNode;
      newNode.next = node;
    }
    _length += 1;
  };

  const size = () => {
    return _length;
  };

  const head = () => {
    return _head;
  };

  const tail = () => {
    if (!_head) {
      return null;
    }
    let node = _head;
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  };

  const at = (index) => {
    if (!_head) {
      return null;
    }
    let node = _head;
    if (index === 0) {
      return node;
    }
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  };

  const pop = () => {
    if (!_head) {
      return null;
    }
    const lastNodeValue = at(_length - 1);
    const secondLastNode = at(_length - 2);
    secondLastNode.next = null;
    _length -= 1;
    return lastNodeValue;
  };

  const contains = (value) => {
    if (!_head) {
      return null;
    }
    let node = _head;
    if (node.data === value) return true;
    while (node.next !== null) {
      node = node.next;
      if (node.data === value) {
        return true;
      }
    }
    return false;
  };

  const find = (value) => {
    if (!_head) {
      return null;
    }
    let node = _head;
    for (let i = 0; i < _length; i++) {
      if (node.data === value) {
        return i;
      }
      node = node.next;
    }
    return null;
  };

  const toString = () => {
    let string = '';
    if (!_head) {
      return null;
    }
    let node = _head;
    for (let i = 0; i < _length; i++) {
      string = string.concat(`(${node.data}) -> `);
      node = node.next;
    }
    string = string.concat(`(null)`);
    return string;
  };

  const insertAt = (value, index) => {
    if (value) {
      let newNode = Node(value);
      if (!_head && index !== 0) {
        return null;
      } else if (!_head && index === 0) {
        _head = newNode;
      } else if (index === 0) {
        let node = _head;
        _head = newNode;
        newNode.next = node;
      } else {
        const nodeBeforeIndex = at(index - 1);
        const nodeAtIndex = at(index);
        nodeBeforeIndex.next = newNode;
        newNode.next = nodeAtIndex;
      }
      _length += 1;
    }
  };

  const removeAt = (index) => {
    if (index !== undefined) {
      if (!_head) {
        return null;
      } else if (index === 0) {
        _head = _head.next;
      } else {
        const nodeBeforeIndex = at(index - 1);
        const nodeAfterIndex = at(index + 1);
        nodeBeforeIndex.next = nodeAfterIndex;
      }
      _length -= 1;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const node1 = Node();
node1;
const linkedlist = LinkedList();

linkedlist.append(23);
linkedlist.find(0);
linkedlist.prepend(42);
linkedlist.append(98);
console.log(linkedlist.at(0));
console.log(linkedlist.head());
console.log(linkedlist.at(1));
console.log(linkedlist.pop());
console.log(linkedlist.contains(98));
console.log(linkedlist.find(23));
linkedlist.append(65);
linkedlist.append(43);
linkedlist.prepend(1);
console.log(linkedlist.head());
linkedlist.insertAt(69, 3);
linkedlist.insertAt(44, 0);
linkedlist.insertAt();
console.log(linkedlist.toString());
console.log(linkedlist.head());
linkedlist.removeAt();
console.log(linkedlist.toString());
