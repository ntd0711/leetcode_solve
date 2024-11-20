const combinationSum = function (candidates, target) {
  const n = candidates.length;
  const res = [];

  const dfs = (i, cur, total) => {
    if (total === target) {
      res.push([...cur]);
      return;
    }
    if (i === n || total > target) return;

    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);

    cur.pop();
    dfs(i + 1, cur, total);
  };

  dfs(0, [], 0);
  return res;
};
const combinationSum2 = (candidates, target) => {
  const n = candidates.length;
  const res = [];
  const dfs = (i, sub, total) => {
    if (total === target) {
      res.push([...res]);
      return;
    }
    if (i === n || total > target) return;

    sub.push(candidates[i]);
    dfs(i, sub, total + candidates[i]);
    sub.pop();

    dfs(i + 1, sub, total);
  };

  dfs(0, [], 0);
  return res;
};
