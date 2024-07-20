const main = (array) => {
  let l = 0;
  let length = 1;
  let curr = 1;
  for (let r = 1; r < array.length; r++) {
    if (array[r] !== array[l]) {
      l = r;
      curr = 1;
    } else {
      curr++;
      length = Math.max(curr, length);
    }
  }
  return length;
};

const longestSameValueSubarray = (array) => {
  // let maxLength = 1;
  // let currLength = 1;

  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] !== arr[i - 1]) {
  //     currLength = 1;
  //   } else {
  //     currLength++;
  //     maxLength = Math.max(currLength, maxLength);
  //   }
  // }
  // return maxLength;
  if (array.length === 0) return 0;

  let maxLength = 1;
  let left = 0;

  for (let right = 1; right < array.length; right++) {
    if (array[right] !== array[left]) {
      maxLength = Math.max(maxLength, right - left);
      left = right;
    }
    // console.log([left, right], [array[left], array[right]]);
  }

  // Check the last subarray
  maxLength = Math.max(maxLength, array.length - left);
  console.log(array.length - left);

  return maxLength;
};

const arr1 = [1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4];
console.log(longestSameValueSubarray(arr1)); //

// console.log(longestSameValueSubarray([4, 2, 2, 3, 3, 2, 2, 2, 2, 2]));
