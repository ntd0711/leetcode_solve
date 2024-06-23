const kthSmallest = function (root, k) {
  let count = 1;
  let res;
  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    if (count === k) {
      console.log([count, k, root.val]);
      res = root.val;
    }
    count++;
    inorder(root.right);
  };
  inorder(root);
  return res;
};

const kthSmallest2 = (root, k) => {
  let res;
  const stack = [];
  let curr = root;
  while (curr || stack.length > 0) {
    if (k === 0) return res;
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res = curr.val;
    k--;
    curr = curr.right;
  }
  return res;
};

const tree = {
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
console.log(kthSmallest(tree, 6));
