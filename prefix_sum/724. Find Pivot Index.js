const pivotIndex = function (nums) {
  const prefixSum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }
  for (let i = 0; i < prefixSum.length; i++) {
    const lastIndex = prefixSum.length - 1;
    const preLeft = i === 0 ? 0 : prefixSum[i - 1];
    const preRight = i === lastIndex ? 0 : prefixSum[lastIndex] - prefixSum[i];
    if (preLeft === preRight) return i;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
