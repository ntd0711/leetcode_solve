const isValidBST = function (root) {
  const bfs = (root, left, right) => {
    if (!root) return true;

    if (!(root.val > left && root.val < right)) {
      return false;
    }

    return bfs(root.left, left, root.val) && bfs(root.right, root.val, right);
  };
  return bfs(root, -Infinity, +Infinity);
};

const tree2 = {
  val: 3,
  left: {
    val: 1,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};

console.log(isValidBST(tree2));
