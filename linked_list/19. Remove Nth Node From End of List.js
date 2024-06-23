const removeNthFromEnd = (head, n) => {
  const dummyNode = { val: null, next: head };
  // console.log(dummyNode);
  let left = dummyNode;
  let right = dummyNode;
  let count = n;
  while (count >= 0 && right) {
    right = right.next;
    count--;
  }
  console.log(left);
  console.log(right);
  while (right) {
    right = right.next;
    left = left.next;
  }
  console.log(left);
  console.log(right);
  left.next = left.next.next;

  return dummyNode.next;
};

const l2 = {
  val: 1,
  next:
    //  null,
    {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next:
            // null,
            { val: 5, next: null },
        },
      },
    },
};
console.log(removeNthFromEnd(l2, 2));
