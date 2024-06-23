const hasCycle = (head) => {
  let curr = head;
  const map = new Map();
  while (curr) {
    // const node = map.get
    const node = map.get(curr.next);
    if (node) {
      return true;
    }
    map.set(curr, true);
    curr = curr.next;
  }
  return false;
};
