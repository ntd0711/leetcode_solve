const rightSideView = function (root) {
  const res = [];
  const queue = [];
  if (root) queue.push(root);
  while (queue.length) {
    let rightSide;
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();
      rightSide = node;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(rightSide.val);
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
    // right: null,
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
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
    // {
    //   val: 7,
    //   left: null,
    //   right: null,
    // },
  },
};
console.log(rightSideView(tree));
// const rightSideView2 = (root) => {
//   const res = [];
//   const queue = [];
//   if (root) {
//     res.push(root.val);
//     queue.push(root);
//   }

//   while (queue.length > 0) {
//     const node = queue.pop();
//     const count = queue.length;
//     for (let i = 0; i < count; i++) {
//       if (node.left) queue.shift(node.left);
//       if (node.right) {
//         queue.shift(node.right);
//       }
//     }
//   }
// };
