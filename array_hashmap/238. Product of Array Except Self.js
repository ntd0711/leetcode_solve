const productExceptSelf1 = function (nums) {
  if (nums.length < 2 || nums.length > 10 ** 5) return;
  const result = [];
  for (
    let leftIndex = 0, rightIndex = 0;
    rightIndex < nums.length;
    rightIndex++
  ) {
    const productNumber = nums.reduce((prdNum, number, currentIndex) => {
      if (number < -30 || number > 30) return;
      if (leftIndex === currentIndex) {
        return prdNum;
      }
      return prdNum * number;
    }, 1);
    result.push(productNumber);
    leftIndex++;
  }

  return result;
};
// i - 1 = 0, 1, 2, 3
// length = 4

const productExceptSelf2 = (nums) => {
  if (nums.length < 2 || nums.length > 10 ** 5) return;
  const numsLength = nums.length;
  const pre = Array.from({ length: numsLength }, (v, i) => {
    return i === 0 ? 1 : v;
  });
  const suff = Array.from({ length: numsLength }, (v, i) => {
    return i === numsLength - 1 ? 1 : v;
  });

  let leftProduct = 1;
  for (let index = 1; index < numsLength; index++) {
    leftProduct *= nums[index - 1];
    pre[index] = leftProduct;
  }
  let rightProduct = 1;
  for (let index = numsLength - 2; index >= 0; index--) {
    rightProduct *= nums[index + 1];
    suff[index] = rightProduct;
  }
  const result = [];
  for (let index = 0; index < numsLength; index++) {
    result.push(pre[index] * suff[index]);
  }
  return result;
};

const productExceptSelf = (nums) => {
  const result = [];
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * suffix;
    suffix *= nums[i];
  }
  return result;
};

const pre = [1, 2, 3, 4];
const suff = [24, 12, 4, 1];
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf(suff));
// Input: nums = [1, 2, 3, 4];
// Output: [24, 12, 8, 6];

const productExceptSelf4 = (nums) => {
  const result = [1];
  let prefix = 1;
  for (let i = 1; i < nums.length; i++) {
    prefix *= nums[i - 1];
    result[i] = prefix;
  }
  let postfix = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
  }
  return result;
};

const productExceptSelf5 = (nums) => {
  const result = [1];
  let prefix = 1;
  for (let i = 1; i < nums.length; i++) {
    prefix = nums[i - 1] * prefix;
    result[i] = prefix;
  }
  let postfix = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix = nums[i + 1] * postfix;
    result[i] *= postfix;
  }
  return result;
};

console.log(productExceptSelf5(pre));
// console.log(productExceptSelf5(suff));

// ========================================================================================================================

function preprocess(arr) {
  let prefixSum = new Array(arr.length);
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  return prefixSum;
}

function querySum(prefixSum, L, R) {
  if (L === 0) {
    return prefixSum[R];
  } else {
    return prefixSum[R] - prefixSum[L - 1];
  }
}

// Prefix sum
// Example and intuitive process behind the formula: https://chat.openai.com/c/aebba46f-1514-4170-bfae-e633f84de601
let arr = [1, 2, 3, 4, 5];
let queries = [
  [1, 3],
  [2, 4],
];
let prefixSum = preprocess(arr);
console.log(prefixSum);
queries.forEach(([L, R]) => {
  console.log(`Sum from index ${L} to ${R} is: ${querySum(prefixSum, L, R)}`);
});

function findMaxAfterAdds(n, operations) {
  // Initialize the array with 0s
  let arr = new Array(n + 1).fill(0); // Using n+1 for easier handling of the b+1 case

  // Apply each operation
  operations.forEach((operation) => {
    const [a, b] = operation;
    arr[a] += 100; // Add 100 at index a
    if (b + 1 <= n) {
      arr[b + 1] -= 100;
    } // Subtract 100 at index b+1, if within bounds
    console.log(arr);
  });
  console.log(arr);

  // Compute prefix sums and find the maximum element

  const pre = [arr[0]];
  for (let index = 1; index < arr.length; index++) {
    pre[index] = arr[index] + pre[index - 1];
  }
  console.log(pre);
  let max = arr[0],
    currentSum = 0;
  for (let i = 0; i < n; i++) {
    currentSum += arr[i];
    max = Math.max(max, currentSum);
  }

  return max;
}

// Example usage:
const n = 5,
  operations = [
    [2, 4],
    [1, 3],
    [1, 2],
  ];
console.log(findMaxAfterAdds(n, operations)); // O
