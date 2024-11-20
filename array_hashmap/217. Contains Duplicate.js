var containsDuplicate = function (nums) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]]) return true;
    cache[nums[i]] = true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3]));
