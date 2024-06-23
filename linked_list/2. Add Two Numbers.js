function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  const head = { val: 0, next: null };
  let curr = head;
  // 999
  // 112
  while (l1 || l2 || carry > 0) {
    // const l1Val = l1?.val || 0;
    // const l2Val = l2?.val || 0;
    // const sum = l1Val + l2Val + carry;
    // console.log(sum);
    // console.log(carry);
    // console.log(sum % 10);
    // const val = sum % 10;
    // console.log(val);
    // const newNode = new ListNode(val);
    // carry = Math.trunc(sum / 10);
    // console.log((sum % 10) + carry);
    // curr.next = newNode;

    // curr = curr.next;
    // l1 = l1?.next;
    // l2 = l2?.next;
    const l1Val = l1?.val || 0;
    const l2Val = l2?.val || 0;
    const sum = l1Val + l2Val + carry;
    const newNode = new ListNode(sum % 10);
    carry = Math.trunc(sum / 10);
    curr.next = newNode;

    curr = curr.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return head.next;
};
const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};
// const l1 = {
//   val: 9,
//   next: {
//     val: 9,
//     next: {
//       val: 9,
//       next: null,
//     },
//   },
// };

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

console.log(addTwoNumbers(l1, l2));
