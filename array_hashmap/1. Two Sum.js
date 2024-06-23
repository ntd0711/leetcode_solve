// const twoSum = function (nums, target) {
//   const cache = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const number = nums[i];
//     const remain = target - number;
//     console.log(number, remain);
//     for (let j = 0; j < nums.length; j++) {
//       if (j === i) continue;
//       const number = nums[j];
//       if (number === remain) return [i, j];
//     }
//   }
//   return [0, 0];
// };

const twoSum = (nums, target) => {
  const cache = new Map();

  for (let index = 0; index < nums.length; index++) {
    const number = nums[index];
    const remain = target - number;

    if (cache.has(remain)) {
      return [index, cache.get(remain)];
    }

    cache.set(number, index);
  }

  return [0, 0];
};

const twoSum2 = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remain = target - num;
    if (map.has(remain)) {
      return [map.get(remain), i];
    }
    map.set(num, i);
  }
  return [0, 0];
};

const twoSum3 = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remain = target - num;
    if (map.has(remain)) {
      return [i, map.get(remain)];
    }
    map.set(num, i);
  }
  return [0, 0];
};

console.log(twoSum2([2, 11, 15, 7], 9));
console.log(twoSum2([2, 7, 11, 15], 9));
