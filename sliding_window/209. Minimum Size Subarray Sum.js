const minSubArrayLen = function (target, nums) {
  let sum = 0;
  let length = nums.length;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    console.log(sum);
    while (sum >= target) {
      length = Math.min(length, right - left + 1);
      sum -= nums[left];
      left++;
    }
    sum += nums[right];
  }
  return length;
};
const target = 6;
const array = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, array));
