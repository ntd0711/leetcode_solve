// function Node(val, next, random) {
//   this.val = val;
//   this.next = next;
//   // this.random = random;
// }
function Node(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const copyRandomList = (head) => {
  const map = new Map();

  let curr = head;
  while (curr) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  console.log("map", map);

  curr = head;
  while (curr) {
    console.log("l2", map.get(head));
    const copy = map.get(curr) || null;
    copy.next = map.get(curr.next) || null;
    // copy.random = map.get(curr.random);
    curr = curr.next;
  }

  return map.get(head);
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

console.log("result", copyRandomList(l2));
