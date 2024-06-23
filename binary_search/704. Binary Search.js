const search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  console.log(low, high);
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      low = mid + 1;
      continue;
    }
    if (nums[mid] > target) {
      high = mid - 1;
      continue;
    }
  }
  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
// const nums = [5];
// const target = 5;
// const nums = [-1, 0, 3, 5, 9, 12];
// const target = 2;
console.log(search(nums, target));
