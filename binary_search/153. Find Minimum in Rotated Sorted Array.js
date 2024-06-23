const findMin = function (nums) {
  if (nums[0] < nums[nums.length - 1]) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  let min = nums[0];
  while (left <= right) {
    if (nums[left] < nums[right]) {
      min = Math.min(min, nums[left]);
      break;
    }
    let mid = left + Math.floor((right - left) / 2);
    min = Math.min(min, nums[mid]);
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return min;
};

const findMin1 = (nums) => {
  let res = nums[0];
  let l = 0;
  let r = nums.length - 1;
  if (nums[0] < nums.at(-1)) return nums[0];
  while (l <= r) {
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l]);
    }
    const mid = l + Math.floor((r - l) / 2);
    res = Math.min(res, nums[mid]);
    if (nums[mid] >= nums[l]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return res;
};

// const nums = [3, 4, 5, 1, 2];
// const nums = [4, 5, 6, 7, 0, 1, 2];
const nums = [11, 13, 15, 17];
// const nums = [4, 5, 1, 2, 3];
console.log(findMin1(nums));
