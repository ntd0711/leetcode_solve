const containsDuplicate = function (nums) {
  const cache = new Map();
  for (const number of nums) {
    if (cache.has(number)) return true;
    cache.set(number, true);
  }
  return false;
};
