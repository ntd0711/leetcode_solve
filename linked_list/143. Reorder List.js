// var reorderList = function (head) {
//   // find middle
//   // by moving "fast" twice, we'll have "slow" in the middle
//   let slow = head;
//   let fast = head;
//   // console.log(fast);
//   while (fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     console.log(slow, "|||");
//     console.log(fast, "|||");
//   }
//   // console.log(slow);
//   // reverse second half
//   // with reverse linked list solution
//   let prev = null;
//   let cur = slow.next;
//   // console.log(head === cur.next);

//   while (cur) {
//     let temp = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = temp;
//   }
//   slow.next = null;

//   // combine two halves
//   let h1 = head;
//   let h2 = prev;
//   console.log(h1);
//   console.log(h2);
//   // if even, second half will be smaller
//   while (h2) {
//     let temp = h1.next;
//     h1.next = h2;
//     h1 = h2;
//     h2 = temp;
//   }
// };

// const l1 = {
//   val: 1,
//   next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
// };
// head = { val: 2, next: { val: 3, next: { val: 4, next: null } } },
const reorderList = (head) => {
  // find middle
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(slow);
  console.log(head); // log head 1

  // reverse second list
  let secondList = slow.next;
  let prev = null;
  while (secondList) {
    const nextNode = secondList.next;
    secondList.next = prev;
    prev = secondList;
    secondList = nextNode;
  }
  console.log(head);

  console.log(prev);

  //log head 2
  console.log(head);

  let first = head;
  second = prev;
  console.log(first);
  console.log(second);
  while (second) {
    const temp1 = first.next;
    const temp2 = second.next;
    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
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
// 1, 2, 3, 4, 5;
reorderList(l2);
console.log(l2);
