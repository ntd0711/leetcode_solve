var subsetsWithDup = function (nums) {
  nums.sort();
  const subsets = [];
  const cur = [];
  const n = nums.length;

  const helper = (i) => {
    if (i === n) {
      console.log(cur);
      subsets.push([...cur]);
      return;
    }

    cur.push(nums[i]);
    helper(i + 1);
    cur.pop();

    while (i + 1 < n && nums[i] === nums[i + 1]) {
      i += 1;
    }
    helper(i + 1);
  };
  helper(0);
  return subsets;
};

console.log(subsetsWithDup([1, 2, 2, 3]));
