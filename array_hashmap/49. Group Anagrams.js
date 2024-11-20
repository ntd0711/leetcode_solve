// const groupAnagram = (strs) => {
//   // const map = strs.reduce((map, str) => {
//   //   const sortedStr = str.split("").sort().join("");
//   //   if (map.has(sortedStr)) {
//   //     map.set(sortedStr, [...map.get(sortedStr), str]);
//   //   } else {
//   //     map.set(sortedStr, [str]);
//   //   }

//   //   return map;
//   // }, new Map());

//   // // return map;
//   // return Array.from(map.values());

//   const hashMap = {};

//   for (let i = 0; i < strs.length; i++) {
//     const sortedStr = strs[i].split("").sort().join();
//     if (!hashMap[sortedStr]) {
//       hashMap[sortedStr] = [strs[i]];
//     } else {
//       hashMap[sortedStr].push(strs[i]);
//     }
//   }
//   // return hashMap;

//   return Object.values(hashMap);
// };

const groupAnagram = (strs) => {
  const map = new Map();

  strs.forEach((word) => {
    const count = Array(26).fill(0);
    for (const char of word) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = count.join(",");
    console.log(key);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  });
  return Array.from(map.values());
  let ans = new Map();
  for (let s of strs) {
    let count = Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    let key = count.join(",");
    if (!ans.has(key)) {
      ans.set(key, []);
    }
    ans.get(key).push(s);
  }
  return Array.from(ans.values());
};

const groupAnagrams2 = (strs) => {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const count = Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      const c = str[j];
      code = c.charCodeAt(0);
      count[code - 97] += 1;
    }
    const key = count.join(".");
    console.log(count);
    console.log(key);
    const value = !map.has(key) ? [str] : [...map.get(key), str];
    map.set(key, value);
  }
  return Array.from(map.values());
};

// console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams2(["bdddddddddd", "bbbbbbbbbbc"]));

// const topKFrequent = (nums, k) => {
//   const map = nums.reduce((map, number) => {
//     map.set(number, (map.get(number) || 0) + 1);
//     return map;
//   }, new Map());

//   const bucket = [];
//   const result = [];
//   for (const [number, freq] of map) {
//     bucket[freq] = (bucket[freq] || new Set()).add(number);
//   }

//   for (let i = bucket.length - 1; i >= 0; i--) {
//     result.push(...bucket[i]);
//     if (result.length === k) break;
//   }

//   return result;
// };

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

const groupAnagram3 = (strs) => {
  const obj = {};
  for (let i = 0; i < strs.length; i++) {
    const arr = Array.from({ length: 26 }, () => 0);
    const word = strs[i];
    for (let j = 0; j < word.length; j++) {
      const charCode = word[j].charCodeAt(0);
      arr[charCode - 97]++;
    }
    const key = arr.join(".");
    if (!obj[key]) obj[key] = [];
    obj[key].push(word);
  }
  return Array.from(Object.values(obj));
};
strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagram3(strs));
