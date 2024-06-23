function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = function (l1, l2) {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;
  console.log(currentNode);

  while (l1 && l2) {
    console.log(currentNode, "|");

    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    console.log(tempNode, "|");
    currentNode = currentNode.next;
    // console.log(currentNode, "|");
  }
  currentNode.next = l1 || l2;

  return tempNode.next;
};

const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

console.log(mergeTwoLists(l1, l2));
