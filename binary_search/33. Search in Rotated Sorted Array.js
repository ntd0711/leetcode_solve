const search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) return mid;
    if (nums[left] < nums[right]) {
      if (target > nums[mid]) {
        left = mid + 1;
        continue;
      }
      if (target < nums[mid]) {
        right = mid - 1;
        continue;
      }
    }

    // if mid >= left value so middle value belong left ascending portion of array. Otherwise its belong right portion
    if (nums[mid] >= nums[left]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
        continue;
      }
      right = mid - 1;
    } else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
        continue;
      }
      left = mid + 1;
    }
  }

  return -1;
};

const search1 = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (target === nums[mid]) return mid;
    if (nums[l] <= nums[r]) {
      if (target > nums[mid]) {
        l = mid + 1;
        continue;
      }
      if (target < nums[mid]) {
        r = mid - 1;
        continue;
      }
    }
    console.log(nums[l], nums[mid], nums[r]);
    if (nums[mid] >= nums[l]) {
      // here at left side
      if (target > nums[mid] || target < nums[l]) {
        // go to right
        l = mid + 1;
      } else {
        // go to left
        r = mid - 1;
      }
      continue;
    } else {
      // here at right side
      if (target < nums[mid] || target > nums[r]) {
        // go to left
        r = mid - 1;
      } else {
        // go to right
        l = mid + 1;
      }
    }
  }
  return -1;
};

// const nums = [1, 2, 3, 5, 6, 7];
// const target = 7

// const nums = [4, 5, 6, 7, 0, 1, 2];
// const target = 0;

const nums = [7, 0, 1, 2, 4, 5, 6];
const target = 0;

// const nums = [3, 4, 5, 1, 2];
// const target = 1;
// const nums = [4, 5, 6, 7, 8, 1, 2, 3];
// const target = 8;

console.log(search1(nums, target));
