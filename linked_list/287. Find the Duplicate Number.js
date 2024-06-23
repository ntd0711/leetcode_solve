const findDuplicate = (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.get(num)) return num;
    map.set(num, true);
  }

  return -1;
};
const nums1 = [1, 3, 4, 2, 2];
const nums2 = [3, 1, 3, 4, 2];
const nums3 = [3, 3, 3, 3, 3];

console.log(findDuplicate(nums3));
