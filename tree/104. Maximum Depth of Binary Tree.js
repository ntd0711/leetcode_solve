var maxDepth = function (root) {
  let curr = root;
  let max = 0;
  const dfs = (root) => {
    if (!root) return 0;
    const count = 1 + Math.max(dfs(root.left), dfs(root.right));
    return count;
  };
};

const dfs = (root) => {
  if (!root) return 0;
  const count = 1 + Math.max(dfs(root.left), dfs(root.right));
  return count;
};

const tree2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null,
    },
    // left: {
    //   val: 7,
    //   left: null,
    //   right: null,
    // },
  },
};

console.log(dfs(tree2));
