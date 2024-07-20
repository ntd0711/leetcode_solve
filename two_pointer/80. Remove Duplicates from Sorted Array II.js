var removeDuplicates = function (nums) {
  let l = 0,
    r = 0;

  while (r < nums.length) {
    let count = 1;
    while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
      count++;
      r++;
    }
    for (let i = 0; i < Math.min(count, 2); i++) {
      nums[l] = nums[r];
      l++;
    }
    r++;
  }
  // return l;
  return nums;
};
const arr = [1, 1, 1, 2, 2, 3];
// const arr2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
const arr3 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(arr3));
