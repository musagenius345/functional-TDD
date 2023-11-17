
export class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(val: T = null, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

//
// const node1 = new TreeNode(25)
// const node2 = new TreeNode(10)
// const node3 = new TreeNode(35)
// const root = new TreeNode(node1, node2, node3)
// console.log(root)

