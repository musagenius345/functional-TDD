import { TreeNode } from "./TreeNode";

export class BinarySearchTree<T extends number | string> {
  root: TreeNode<T> | null = null;

  constructor(initial: T | T[] = []) {
    if (!Array.isArray(initial)) {
      initial = [initial];
    }

    initial.forEach((el) => this.insert(el));
  }

  insert(el: T): void {
    this.root = this.insertNode(el, this.root);
  }

  private insertNode(el: T, node: TreeNode<T> | null): TreeNode<T> {
    if (!node) {
      return new TreeNode(el);
    }

    if (el < node.val) {
      node.left = this.insertNode(el, node.left);
    } else if (el > node.val) {
      node.right = this.insertNode(el, node.right);
    }

    return node;
  }

  traverse(
    callback: (el: T) => void,
    node: TreeNode<T> | null = this.root,
  ): void {
    if (node) {
      this.traverse(callback, node.left);
      callback(node.val);
      this.traverse(callback, node.right);
    }
  }

  delete(el: T): void {
    this.root = this.deleteNode(el, this.root);
  }

  private deleteNode(el: T, node: TreeNode<T> | null): TreeNode<T> | null {
    if (!node) {
      return null;
    }

    if (el < node.val) {
      node.left = this.deleteNode(el, node.left);
    } else if (el > node.val) {
      node.right = this.deleteNode(el, node.right);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      node.val = this.findMin(node.right);
      node.right = this.deleteNode(node.val, node.right);
    }

    return node;
  }

  search(searchValue: T): TreeNode<T> | null {
    return this.searchNode(searchValue, this.root);
  }

  private searchNode(
    searchValue: T,
    node: TreeNode<T> | null,
  ): TreeNode<T> | null {
    if (!node || node.val === searchValue) {
      return node;
    }

    if (searchValue < node.val) {
      return this.searchNode(searchValue, node.left);
    } else {
      return this.searchNode(searchValue, node.right);
    }
  }

  toArray(): T[] {
    const result: T[] = [];
    for (const value of this) {
      result.push(value);
    }
    return result;
  }

  findMin(node: TreeNode<T> | null = this.root): T | null {
    if (!node) {
      return null;
    }

    while (node.left) {
      node = node.left;
    }

    return node.val;
  }

  findMax(node: TreeNode<T> | null = this.root): T | null {
    if (!node) {
      return null;
    }

    while (node.right) {
      node = node.right;
    }

    return node.val;
  }

  getHeight(node: TreeNode<T> | null = this.root): number {
    if (!node) {
      return 0;
    }

    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Add other common BST methods here

  // Iterator support
  *[Symbol.iterator](): Generator<T> {
    const stack: TreeNode<T>[] = [];
    let current: TreeNode<T> | null = this.root;

    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop()!;
      yield current.val;
      current = current.right;
    }
  }
}

const bst = new BinarySearchTree<number>([
  5, 3, 7, 2, 4, 6, 8, 20, 1, 12, 88, 33, 17, 9, 23,
]);

console.log("In-order traversal:");
bst.traverse((el) => console.log(el));

console.log("BST toArray:", bst.toArray());

console.log("Searching for 6:", bst.search(6));

console.log("Deleting 3:");
bst.delete(3);
bst.traverse((el) => console.log(el));
console.log("Min value:", bst.findMin());
console.log("Max value:", bst.findMax());
console.log("Tree height:", bst.getHeight());

console.log("Iterator:");
for (const value of bst) {
  console.log(value);
}
