const reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const nextNode = curr.next;
    curr.next = prev; // on the first iteration, the next of node (head) is set to "prev" (which is initially "null") (both curr and head point to one reference)
    prev = curr;
    curr = nextNode;
  }
  console.log(head); // head log
  // after reversal process end, because it has become the last node
  // of the reversed list
  return prev;
};

const reverseList1 = (head) => {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    const nextNode = curr.next;
    console.log(head);
    curr.next = prev;
    console.log(curr, ",");
    prev = curr;
    console.log(prev);
    curr = nextNode;
  }
  // console.log()
  return prev;
};

const l2 = {
  val: 1,
  next: {
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

console.log(reverseList1(l2));
