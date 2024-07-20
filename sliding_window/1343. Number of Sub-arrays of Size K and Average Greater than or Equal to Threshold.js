var numOfSubarrays = function (arr, k, threshold) {
  let currSum = 0;
  let l = 0;
  let count = 0;
  for (let r = 0; r < arr.length + 1; r++) {
    if (r - l + 1 > k) {
      if (currSum / k >= threshold) count++;
      console.log(currSum);
      currSum = currSum - arr[l];
      l++;
    }
    console.log(arr[r]);
    currSum += arr[r];
    // console.log(currSum);
    // if (currSum / k >= threshold) count++;
  }
  return count;
};

const arr = [2, 2, 2, 2, 5, 5, 5, 8];
const k = 3;
const threshold = 4;

// const arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3];
// const k = 3;
// const threshold = 5;

console.log(numOfSubarrays(arr, k, threshold));
