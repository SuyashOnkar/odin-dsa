class Node {
  constructor(data, left, right) {
    this.data = data || null;
    this.left = left || null;
    this.right = right || null;
  }
}

class Tree {
  constructor(arr) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    const uniqSortedArr = [...new Set(arr)].sort((a, b) => a - b);
    console.log(uniqSortedArr);
    if (uniqSortedArr.length === 0) {
      return null;
    }
    const mid = Math.floor(uniqSortedArr.length / 2);
    const root = new Node(
      uniqSortedArr[mid],
      this.buildTree(arr.slice(0, mid)),
      this.buildTree(arr.slice(mid + 1))
    );
    return root;
  }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
tree;
prettyPrint(tree.root);
