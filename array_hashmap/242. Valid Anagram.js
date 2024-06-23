var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const cache = s.split("").reduce((cache, char) => {
    const code = char.charCodeAt(0);
    cache.set(code, (cache.get(code) || 0) + 1);
    return cache;
  }, new Map());

  for (const char of t.split("")) {
    const code = char.charCodeAt(0);
    if (cache.get(code)) {
      cache.set(code, cache.get(code) - 1);
    } else {
      return false;
    }
  }
  // return cache;
  return cache;

  // return Object.entries(cache).length === 0;
};

const isAnagram2 = (s, t) => {
  const cache = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (cache[letter]) {
      cache[letter]++;
    } else {
      cache[letter] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    const letter = t[i];
    if (!cache[letter]) return false;
    if (cache[letter] === 1) {
      delete cache[letter];
    }
    if (cache[letter]) {
      cache[letter]--;
    }
  }
  return cache;
  // return Object.entries(cache).length === 0;
};

const isAnagram3 = (s, t) => {
  const cache = new Map();

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    const value = cache.has(c) ? cache.get(c) + 1 : 1;
    cache.set(c, value);
  }

  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    const value = cache.has(c) ? cache.get(c) - 1 : null;
    cache.set(c, value);
  }
  return Array.from(cache.values()).every((v) => v === 0);
};

const isAnagram4 = (s, t) => {
  // if (s.length !== t.length) return false;
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const frequent = map[char] ? map[char] + 1 : 1;
    map[char] = frequent;
  }
  console.log(map);
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    // console.log(char);
    if (!map[char] || map[char] === 0) {
      return false;
    }
    map[char]--;
  }
  console.log(map);
  return Object.values(map).every((v) => v === 0);
};

// const s = "anagram",
//   t = "nagaram";
const s = "a",
  t = "ab";

console.log(isAnagram4(s, t));
