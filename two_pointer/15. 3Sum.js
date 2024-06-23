const threeSum2 = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (number > 0) {
      console.log(number);
      break;
    }
    // GIẢI THÍCH VÌ SAO left = i + 1 chứ không phải left = 0
    // tôi ko muốn đưa con trỏ left về lại đầu mảng mỗn khi vòng lần lặp qua vòng for bên ngoài (outer loop)
    // để tránh lặp vì tôi đã tính toán rồi
    // vd: khi i = -4 thì j sẽ đi qua -1 và tính toán (-4 + -1), khi lên i = -1 thì tôi sẽ ko muốn
    // left về 0 vì nó sẽ tính lại phép -1 + -4
    let left = i + 1;
    let right = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      console.log(nums[i], nums[i - 1]);
      continue;
    }
    console.log(number);
    while (left < right) {
      console.log([i, left, right]);

      const leftNumber = nums[left];
      const rightNumber = nums[right];
      if (leftNumber + rightNumber + number === 0) {
        console.log([i, left, right]);
        console.log([number, leftNumber, rightNumber]);

        // while (nums[left] === nums[left + 1]) {
        //   console.log(left);
        //   left++;
        // }
        // while (nums[right] === nums[right - 1]) {
        //   console.log(right);
        //   right--;
        // }
        left++;
        right--;
        result.push([number, leftNumber, rightNumber]);

        // if (map.has([number, leftNumber, rightNumber])) continue;
        // map.set([number, leftNumber, rightNumber], true);
        continue;
      }
      if (leftNumber + rightNumber + number < 0) {
        left++;
        continue;
      }
      if (leftNumber + rightNumber + number > 0) {
        right--;
        continue;
      }
    }
  }
  // return Array.from(map.keys());
  return result;
};

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  console.log(nums);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (number >= 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const leftNumber = nums[left];
      const rightNumber = nums[right];

      const threeSum = leftNumber + rightNumber + number;
      if (threeSum === 0) {
        while (leftNumber === nums[left + 1]) left++;
        while (rightNumber === nums[right - 1]) right--;
        console.log([i, left, right]);
        console.log([number, leftNumber, rightNumber]);
        result.push([number, leftNumber, rightNumber]);
        left++;
        right--;
        continue;
      }
      if (threeSum > 0) {
        right--;
        continue;
      }
      if (threeSum < 0) {
        left++;
        continue;
      }
    }
  }

  return result;
};

const threeSum1 = (nums) => {
  nums.sort((a, b) => a - b);
  console.log(nums);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) {
      console.log(num);
      break;
    }
    if (i > 0 && num === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      console.log(i, l, r);
      const sum = nums[l] + nums[r] + nums[i];
      if (sum > 0) {
        r--;
        continue;
      }
      if (sum < 0) {
        l++;
        continue;
      }
      if (sum === 0) {
        console.log([i, l, r]);
        result.push([num, nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1]) {
          console.log(l);
          l++;
        }
      }
    }
  }
  return result;
};

const threeSum3 = (nums) => {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i > 0 && num === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = num + nums[l] + nums[r];
      if (sum === 0) {
        result.push([num, nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) {
          l++;
        }
        while (nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
        continue;
      }
      if (sum < 0) {
        l++;
        continue;
      }
      if (sum > 0) {
        r--;
        continue;
      }
    }
  }
  return result;
};

// console.log(threeSum1([-1, 0, 1, 2, -1, -4]));
console.log(threeSum3([-2, 0, 0, 2, 2]));
