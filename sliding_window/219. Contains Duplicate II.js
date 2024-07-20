var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (r - l + 1 > k) {
      set.delete(nums[l]);
      l++;
    }
    if (set.has(nums[r])) return true;
    set.add(nums[r]);
  }
  return false;
};
