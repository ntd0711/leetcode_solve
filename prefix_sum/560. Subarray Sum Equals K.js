var subarraySum = function (nums, k) {
  let sum = 0;
  let res = 0;
  const map = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const remain = sum - k;
    res += map[remain] ? map[remain] : 0;
    map[sum] = map[sum] ? map[sum] + 1 : 1;
  }
  return res;
};

const nums = [1, 7, 3, 5, 3, 8];
// const nums = [1, -1, 1, 1, 1, 1];
// const nums = [1];
console.log(subarraySum(nums, 8));
// const aee = [1, 8, 11, 16, 19, 27];
