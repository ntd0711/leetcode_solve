var maxTurbulenceSize = function (arr) {
  let l = 0;
  let r = 1;
  let res = 1;
  let prev = "";

  while (r < arr.length) {
    if (arr[r - 1] > arr[r] && prev != ">") {
      res = Math.max(res, r - l + 1);
      r++;
      prev = ">";
      continue;
    }
    if (arr[r - 1] < arr[r] && prev != "<") {
      res = Math.max(res, r - l + 1);
      r++;
      prev = "<";
      continue;
    }
    r = arr[r - 1] === arr[r] ? r + 1 : r;
    l = r - 1;
    prev = "";
  }
  return res;
};

const arr = [9, 4, 2, 10, 7, 8, 8, 1, 9];

console.log(maxTurbulenceSize(arr));
