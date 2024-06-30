const goodNodes = function (root) {
  const dfs = (root, maxVal) => {
    if (!root) return 0;
    let count = root.val >= maxVal ? 1 : 0;
    maxVal = Math.max(maxVal, root.val);
    count += dfs(root.left, maxVal);
    count += dfs(root.right, maxVal);
    return count;
  };
  return dfs(root, root.val);
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

console.log(goodNodes(tree2));
