var subsets = function (nums) {
  const n = nums.length;
  const res = [];
  const sub = [];

  const dfs = (i) => {
    if (i === n) {
      res.push([...sub]);
      return;
    }

    sub.push(nums[i]);
    dfs(i + 1);
    sub.pop();

    dfs(i + 1);
  };
  dfs(0);

  return res;
};
