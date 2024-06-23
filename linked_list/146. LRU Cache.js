function Node(val, next) {
  this.key = key === undefined ? 0 : key;
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.prev = prev === undefined ? null : prev;
}

const LRUCache = function (capacity) {
  this.size = capacity;
  this.cache = new Map();

  this.left = new Node();
  this.right = new Node();
  this.left.next = this.right;
  this.right.prev = this.left;
};

LRUCache.prototype.remove = function (node) {
  const prevNode = node.prev;
  const nextNode = node.next;
  nextNode.prev = prevNode;
  prevNode.next = nextNode;
};
LRUCache.prototype.insert = function (node) {
  const prevNode = this.right.prev;
  const nextNode = this.right;

  prevNode.next = node;
  nextNode.prev = node;
  node.next = nextNode;
  node.prev = prevNode;
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    this.remove(node);
    this.insert(node);
    return this.cache.get(key).val;
  }
  return -1;
};
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
  }
  this.cache.set(key, new Node(key, value));
  this.insert(this.cache.get(key));

  if (this.cache.size > this.size) {
    const lru = this.left.next;
    this.remove(lru);
    this.cache.delete(lur.key);
  }
};
