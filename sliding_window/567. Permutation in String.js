// const checkInclusion = function (s1, s2) {
//   if (s1 === s2) return true;
//   console.log(s1);
//   const s1Length = s1.length;
//   const cache = s1.split("").reduce((obj, char) => {
//     obj[char] = obj[char] + 1 || 1;
//     return obj;
//   }, {});

//   console.log(cache);

//   const checkPermutation = (subString) => {
//     const cacheClone = { ...cache };
//     for (let i = 0; i < subString.length; i++) {
//       const char = subString[i];
//       cacheClone[char]--;
//     }

//     return Object.values(cacheClone).every((v) => v === 0);
//   };

//   for (let left = 0, right = s1Length - 1; right < s2.length; right++) {
//     const subString = s2.slice(left, right + 1);
//     console.log(subString);
//     const isPermutation = checkPermutation(subString);
//     if (isPermutation) return true;
//     left++;
//   }

//   return false;
// };

// const s1 = "abc";
// const s2 = "bbbca";
// const s1 = "abcdxabcde";
// const s2 = "abcdeabcdx";

// const s1 = "ab";
// const s2 = "eidboaoo";
// const s1 = "ab";
// const s2 = "ab";

const checkInclusion2 = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Count = Array(26).fill(0);
  const s2Count = Array(26).fill(0);

  for (let index = 0; index < s1.length; index++) {
    s1Count[s1[index].charCodeAt(0) - 97]++;
    s2Count[s2[index].charCodeAt(0) - 97]++;
  }

  console.log(s1Count);
  console.log(s2Count);
  let matches = 0;
  for (let index = 0; index < 26; index++) {
    s1Count[index] === s2Count[index] ? matches++ : null;
  }
  console.log(matches);
  for (let left = 0, right = s1.length; right < s2.length; right++) {
    console.log(matches);
    console.log(s2[right]);
    if (matches === 26) return true;
    console.log(right);
    let index = s2[right].charCodeAt(0) - 97;
    s2Count[index]++;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      console.log(right);
      console.log(s2[right]);
      matches--;
    }

    index = s2[left].charCodeAt(0) - 97;
    s2Count[index]--;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] - 1 === s2Count[index]) {
      console.log(left, right);
      console.log(s2[right]);
      console.log(index);
      matches--;
    }

    left++;
  }
  if (matches === 26) return true;
  return false;
};

const checkInclusion3 = (s1, s2) => {
  let l = 0;
  const cache = Array.from({ length: 26 }).fill(0);
  for (let i = 0; i < s1.length; i++) {
    const charCode = s1[i].charCodeAt(0);
    cache[charCode - 97]++;
  }
  for (let r = s1.length - 1; r < s2.length; r++) {
    let curr = l;
    const count = [...cache];
    while (curr <= r) {
      const charCodeAtCurr = s2[curr].charCodeAt(0);
      count[charCodeAtCurr - 97]--;
      curr++;
    }
    if (count.every((val) => val === 0)) {
      return true;
    }
    l++;
  }
  return false;
};

const checkInclusion4 = (s1, s2) => {
  if (s1.length > s2.length) return false;

  const s1Count = Array(26).fill(0);
  const s2Count = Array(26).fill(0);

  for (let index = 0; index < s1.length; index++) {
    s1Count[s1[index].charCodeAt(0) - 97]++;
    s2Count[s2[index].charCodeAt(0) - 97]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    s1Count[i] === s2Count[i] ? matches++ : null;
  }
  console.log(matches);
  if (matches === 26) return true;

  console.log(s1Count);
  console.log(s2Count);
  let l = 0;
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) return true;
    let index = s2[r].charCodeAt(0) - 97;
    console.log([s2[r], r]);
    console.log(index);
    s2Count[index]++;
    if (s1Count[index] === s2Count[index]) {
      console.log(s2[r]);
      matches++;
      console.log(matches);
      // } else if (s1Count[index] !== s2Count[index]) {
    } else if (s1Count[index] + 1 === s2Count[index]) {
      console.log([r, s2[r]]);
      matches--;
    }

    console.log(s2[l]);
    index = s2[l].charCodeAt(0) - 97;
    s2Count[index]--;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] - 1 === s2Count[index]) {
      console.log(s2[l]);
      matches--;
      console.log(matches);
    }
    // console.log(matches);
    l++;
  }
  console.log(matches);
  if (matches === 26) return true;
  return false;
};

// const s1 = "ab";
// const s2 = "eidbbaboo";
// const s1 = "ab";
// const s2 = "eidbaooo";
// const s1 = "adc";
// const s2 = "dcda";
const s1 = "abc";
const s2 = "cccccbabbbaaaa";
// const s2 = "bbbca";

// const s1 = "ab";
// const s2 = "eidbaooo";
// const s1 = "hello";
// const s2 = "ooolleoooleh";

console.log(checkInclusion4(s1, s2));
