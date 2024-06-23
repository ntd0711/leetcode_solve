// const topKFrequent1 = function (nums, k) {
//   const result = [];
//   const cache = nums.reduce((cache, number) => {
//     cache.set(number, (cache.get(number) || 0) + 1);
//     return cache;
//   }, new Map());
//   console.log(cache);

//   const arraySort = Array.from(cache).sort((a, b) => {
//     return a[1] - b[1];
//   });

//   while (result.length < k) {
//     const number = arraySort.pop()[0];
//     result.push(number);
//   }

//   return result;
// };

const topKFrequent2 = (nums, k) => {
  const count = Array.from({ length: nums.length });
  let result = [];
  const cache = nums.reduce((map, num) => {
    let val = map.has(num) ? map.get(num) + 1 : 1;
    map.set(num, val);
    return map;
  }, new Map());

  for (const [num, frequent] of cache.entries()) {
    // console.log([num, frequent]);
    console.log(num);
    console.log(frequent);
    if (!count[frequent]) {
      count[frequent] = [];
    }
    count[frequent].push(num);
  }

  for (let index = count.length - 1; index >= 0; index--) {
    const frequent = count[index];
    if (!frequent) continue;
    result.push(...frequent);
    if (result.length >= k) break;
  }
  return result;
};

var topKFrequent = function (nums, k) {
  const map = nums.reduce((map, number) => {
    map.set(number, (map.get(number) || 0) + 1);
    return map;
  }, new Map());

  const bucket = [];
  const result = [];
  for (const [number, freq] of map) {
    bucket[freq] = (bucket[freq] || new Set()).add(number);
  }

  console.log(bucket);

  for (let i = bucket.length - 1; i >= 0; i--) {
    const set = bucket[i];
    if (set) result.push(...set);
    if (result.length === k) break;
  }

  return result;
};

const topKFrequent3 = (nums, k) => {
  const count = Array.from(nums.length).fill(0);
  const result = [];
  const map = new Map();
  nums.forEach((num) => {
    const frequent = map.has(num) ? map.get(num) + 1 : 1;
    map.set(num, frequent);
  });
  for (const [num, frequent] of map.entries()) {
    if (!count[frequent]) {
      count[frequent] = [];
    }
    count[frequent].push(num);
  }
  for (let index = count.length - 1; index >= 0; index--) {
    if (!count[index]) continue;
    result.push(...count[index]);
    if (result.length >= k) return result;
  }
  return result;
  // console.log(count);
};

console.log(topKFrequent3([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3], 2));
// console.log(topKFrequent3([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
