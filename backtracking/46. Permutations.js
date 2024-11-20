var permute = function (nums) {
  const helper = (i, num) => {
    if (i === nums.length) {
      return [[]];
    }

    const permsRes = [];
    const perms = helper(i + 1, nums[i + 1]);
    for (const p of perms) {
      for (let i = 0; i <= p.length; i++) {
        const pcopy = [...p];
        pcopy.splice(i, 0, num);
        permsRes.push(pcopy);
      }
    }

    return permsRes;
  };

  return helper(0, nums[0]);
};

const arr = [1, 2, 3, 4];

console.log(permute(arr));
