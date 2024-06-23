// =====================Solution=========================
const longestConsecutive2 = function (nums) {
  if (nums.length === 0) return 0;
  const numberSet = new Set(nums);
  let longest = 1;
  for (const number of nums) {
    if (!numberSet.has(number - 1)) {
      let x = number;
      let count = 1;
      while (numberSet.has(x + 1)) {
        count++;
        x++;
      }
      longest = Math.max(longest, count);
    }
  }

  return longest;
};
const longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  console.log(nums);
  let longest = 1;
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const prevNumber = nums[i - 1];
    if (currentNumber === prevNumber) continue;
    console.log([prevNumber, currentNumber]);
    if (prevNumber + 1 === currentNumber) {
      count++;
    }
    if (currentNumber - prevNumber !== 1) {
      console.log([prevNumber, currentNumber]);
      count = 1;
    }
    longest = Math.max(longest, count);
  }
  return longest;
};

const longestConsecutive3 = (nums) => {
  const set = new Set(nums);
  let longest = 1;
  for (const num of nums) {
    if (set.has(num - 1)) {
      continue;
    }
    let n = num + 1;
    let newLongest = 1;
    while (set.has(n)) {
      newLongest++;
      n++;
    }
    longest = Math.max(newLongest, longest);
  }
  console.log(longest);
  return longest;
};

const longestConsecutive4 = (nums) => {
  let longest = 1;
  // const cache = new Map();
  // nums.forEach((num) => {
  //   cache.set(num, true);
  // });
  const cache = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (cache.has(num + 1)) {
      continue;
    }
    let curr = num - 1;
    let count = 1;
    while (cache.has(curr)) {
      count++;
      curr--;
    }
    longest = Math.max(count, longest);
  }
  return longest;
};

// console.log(
//   longestConsecutive([
//     0, 0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 21, 22, 23, 24, 25, 26, 27,
//   ])
// );
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([0]));
const nums = [6, 22, 5, 11, 4, 1, 23, 0, 1, 2, 3, 21, 9, 10];
console.time("fn 3");
console.log(longestConsecutive3(nums));
console.timeEnd("fn 3");
// 0, 1, 1, 2

console.time("fn 4");
console.log(longestConsecutive4(nums)); // 0, 1, 1, 2
console.timeEnd("fn 4");
// console.log(longestConsecutive4([100, 4, 200, 1, 3, 2])); // 0, 1, 1, 2
// It handles the base case when the vector is empty (size n is 0), returning 0 because there are no consecutive elements.

// It uses an unordered set s to store unique elements from the input vector, ensuring efficient lookup.

// It iterates through the elements of the unordered set and checks if each element a is the start of a sequence (no a-1 in s).

// If a is the start of a sequence, it resets the counter cnt to 1 and initializes x to a. Then, it iterates to find consecutive elements by incrementing x.

// It updates the longest variable with the maximum of its current value and the cnt counter.

// After processing all elements in the unordered set, it returns longest as the result, representing the length of the longest consecutive sequence.
