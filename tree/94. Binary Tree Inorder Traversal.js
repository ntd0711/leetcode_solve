const inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) return;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};

const inorderTraversal2 = (root) => {
  const res = [];
  const stack = [];
  let curr = root;
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr);
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
console.log(inorderTraversal2(tree));
