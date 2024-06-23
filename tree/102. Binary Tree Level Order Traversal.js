const levelOrder = function (root) {
  let curr = root;
  const queue = [curr];
  const res = [];
  while (queue.length > 0) {
    const node = queue.pop();
    res.push(node.val);
    if (node.right) queue.unshift(node.right);
    if (node.left) queue.unshift(node.left);
  }
  return res;
};

const levelOrder2 = function (root) {
  if (!root) return [];
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    const subArray = [];
    const count = queue.length;
    for (let i = 0; i < count; i++) {
      const node = queue.shift();
      subArray.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(subArray);
  }
  return res;
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
console.log(levelOrder2(tree2));
