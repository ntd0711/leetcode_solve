const maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let result = 0;
  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    result = Math.max(result, area);
    if (height[l] < height[r]) {
      l++;
      continue;
    }
    if (height[l] > height[r]) {
      r--;
      continue;
    }
    if (height[r] === height[l]) {
      l++;
      r--;
    }
  }

  return result;
};

const maxArea1 = (height) => {
  let l = 0;
  let r = height.length - 1;
  let res = 0;
  while (l < r) {
    const lHeight = height[l];
    const rHeight = height[r];
    const area = Math.min(lHeight, rHeight) * (r - l);
    res = Math.max(area, res);
    if (lHeight < rHeight) {
      l++;
      continue;
    }
    if (lHeight > rHeight) {
      r--;
      continue;
    }
    l++;
    r--;
  }
  return res;
};

console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea1([1, 1]));
