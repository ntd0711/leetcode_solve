function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var searchBST = function (root, target) {
  console.log(root, "/");
  if (!root) {
    return null;
  }

  if (root.val === target) {
    return root;
  }
  if (target > root.val) {
    return searchBST(root.right, target);
  } else {
    return searchBST(root.left, target);
  }
};
const tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: null,
    right: null,
  },
};
console.log(searchBST(tree, 2));
