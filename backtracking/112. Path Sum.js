const hasPathSum = (root, targetSum) => {
  // console.log(root)
  if (!root) return false;
  const dfs = (node, currSum) => {
    // if (!node) return false;
    // console.log(node);
    currSum += node.val;
    if (!node.left && !node.right) {
      return currSum === targetSum;
    }
    return dfs(node.right, currSum) || dfs(node.left, currSum);
  };
  return dfs(root, 0);
};
var tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  // left: {
  //   val: 4,
  //   left: {
  //     val: 11,
  //     left: {
  //       val: 7,
  //       left: null,
  //       right: null,
  //     },
  //     right: {
  //       val: 2,
  //       left: null,
  //       right: null,
  //     },
  //   },
  //   right: null,
  // },
  right: null,
  // right: {
  //   val: 8,
  //   left: {
  //     val: 13,
  //     left: null,
  //     right: null,
  //   },
  //   right: {
  //     val: 4,
  //     left: null,
  //     right: {
  //       val: 1,
  //       left: null,
  //       right: null,
  //     },
  //   },
  // },
};

console.log(hasPathSum(tree, 22));
