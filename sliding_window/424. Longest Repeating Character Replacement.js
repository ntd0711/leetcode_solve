const characterReplacement = function (s, k) {
  const map = {};
  let length = 0;
  let maxF = 0;
  for (let left = 0, right = 0; right < s.length; right++) {
    const char = s[right];
    map[char] = map[char] >= 0 ? map[char] + 1 : 1;
    maxF = Math.max(map[char], maxF);
    // console.log(maxF);
    const substringLength = right + 1 - left;
    console.log([substringLength, maxF]);
    const valid = substringLength - maxF <= k;

    if (!valid) {
      map[s[left]]--;
      left++;
      continue;
    }
    length = Math.max(substringLength, length);
  }
  console.log(map);
  console.log(maxF);
  return length;
};

// console.log(characterReplacement1("abab", 2));
// console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("aaaabccccc", 1));
// console.log(characterReplacement1("ABABBA", 2));
// console.log(characterReplacement("AAAA", 0));

const characterReplacement1 = (s, k) => {
  const map = new Map();
  let max = 0;
  function findMaxF(map1) {
    return Math.max(...Array.from(map.values()));
  }
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    const value = !map.has(char) ? 1 : map.get(char) + 1;
    map.set(char, value);
    const maxF = findMaxF(map);
    const substringLength = r - l + 1;
    console.log([substringLength, maxF, k]);
    if (substringLength - maxF <= k) {
      console.log([substringLength, maxF, k]);
      max = Math.max(max, substringLength);
    } else {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
  }

  return max;
  // console.log(map);
};
