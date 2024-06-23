const longestSubstringLength = (s) => {
  const map = new Map();
  let longestSubstringLength = 0;
  for (let left = 0, right = 0; right < s.length; right++) {
    const charCodeRight = s[right].charCodeAt(0);
    if (map.has(charCodeRight)) {
      console.log(map.get(charCodeRight));
      left = Math.max(left, map.get(charCodeRight));
    }
    map.set(charCodeRight, right + 1);
    longestSubstringLength = Math.max(longestSubstringLength, right - left + 1);
  }
  console.log(map);

  return longestSubstringLength;
};

const longestSubstringLength1 = (s) => {
  const map = new Map();
  let longest = 0;
  for (let r = 0, l = 0; r < s.length; r++) {
    const charCode = s[r].charCodeAt(0);
    if (map.has(charCode)) {
      l = Math.max(l, map.get(charCode) + 1);
    }
    longest = Math.max(longest, r - l + 1);
    map.set(charCode, r);
  }
  return longest;
};

// console.log(longestSubstringLength1("abcabcde"));
// console.log(longestSubstringLength1("abcdefghdjkl"));
// console.log(longestSubstringLength1("abba"));
// console.log(longestSubstringLength1("au"));
