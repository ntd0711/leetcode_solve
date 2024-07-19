var NumArray = function (nums) {
  this.prefixSum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
  }
};

NumArray.prototype.sumRange = function (left, right) {
  const preRight = this.prefixSum[right];
  const preLeft = left === 0 ? 0 : this.prefixSum[left - 1];
  return preRight - preLeft;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const obj = new NumArray([2, -1, 3, -3, 4]);
console.log(obj.sumRange(1, 3));
