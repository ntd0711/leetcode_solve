const twoSum1 = function (numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const remain = target - number;

    if (map.has(remain)) {
      return [i + 1, map.get(remain) + 1].sort((a, b) => a - b);
    }

    map.set(number, i);
  }

  return [];
};
const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const leftNumber = numbers[left];
    const rightNumber = numbers[right];

    if (leftNumber + rightNumber < target) {
      left++;
      continue;
    }
    if (leftNumber + rightNumber > target) {
      right--;
      continue;
    }
    if (leftNumber + rightNumber === target) {
      return [left + 1, right + 1];
    }
  }
  return [left, right];
};
const twoSum2 = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const leftNum = numbers[left];
    const rightNum = numbers[right];
    const sum = leftNum + rightNum;
    if (sum === target) {
      console.log(left, right);
      return [left + 1, right + 1];
    }

    if (sum < target) {
      left++;
      continue;
    }
    if (sum > target) {
      right--;
      continue;
    }
  }
  return [left, right];
};

const twoSum3 = (numbers, target) => {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    if (sum > target) r--;
    if (sum < target) l++;
  }
  return [0, 0];
};

console.log(twoSum3([2, 7, 11, 15], 9));
// console.log(twoSum2([-3, -1, 0, 3, 6, 8, 10], 6));
