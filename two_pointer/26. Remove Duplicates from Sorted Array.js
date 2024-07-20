var removeDuplicates = function (nums) {
  let l = 1,
    r = 1;
  while (r < nums.length) {
    if (nums[r] !== nums[r - 1]) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }
  return l;
  // return nums;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
