// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// const insertIntoBST = (root, target) => {
//   if (!root) {
//     return new TreeNode(target);
//   }
//   if (target > root.val) {
//     root.right = insertIntoBST(root.right, target);
//   } else {
//     root.left = insertIntoBST(root.left, target);
//   }
//   return root;
// };

// const insertIntoBST2 = (root, target) => {
//   if (!root) return new TreeNode(target);
//   if (target > root.val) {
//     root.right = insertIntoBST2(root.right, target);
//   } else {
//     root.left = insertIntoBST2(root.left, target);
//   }
//   return root;
// };

// const tree = {
//   val: 4,
//   left: {
//     val: 2,
//     left: {
//       val: 1,
//       left: null,
//       right: null,
//     },
//     right: {
//       val: 3,
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     val: 7,
//     left: null,
//     right: null,
//   },
// };
// console.log(insertIntoBST2(tree, 5));

const findMin = (root) => {
  let curr = root;
  while (curr && curr.left) {
    curr = curr.left;
  }
  return curr;
};

const deleteNode = (root, key) => {
  if (!root) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.right) {
      return root.left;
    } else if (!root.left) {
      return root.right;
    } else {
      const minNode = findMin(root.right);
      root.val = minNode.val;
      root.right = deleteNode(root.right, minNode.val);
    }
  }
  return root;
};

const tree2 = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
console.log(deleteNode(tree2, 3));
