const maxSubarraySumCircular = function (nums) {
  let curMax = 0;
  let max = nums[0];
  let curMin = 0;
  let min = nums[0];
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    curMax = curMax < 0 ? 0 : curMax;
    curMax += num;
    max = Math.max(max, curMax);
    curMin = curMin > 0 ? 0 : curMin;
    curMin += num;
    min = Math.min(curMin, min);
    total += num;
  }
  if (max < 0) return max;
  return Math.max(total - min, max);
};

const nums = [5, -3, 5];
const nums2 = [-5, -3, -5];
const nums3 = [1, -2, 3, -2];
console.log(maxSubarraySumCircular(nums3));
// [5, -3, 5]
// [-5, -3, -5]
