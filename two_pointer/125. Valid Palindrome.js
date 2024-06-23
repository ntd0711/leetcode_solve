const isPalindrome = function (s) {
  const newString = s.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  const splitStr = newString.split("");
  const strLength = splitStr.length;
  for (let index = 0; index < Math.floor(splitStr.length / 2); index++) {
    const char = splitStr[index];
    const symmetryChar = splitStr[strLength - 1 - index];
    if (char !== symmetryChar) return false;
  }
  console.log("ahih");
  return true;
};

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}
const isPalindrome1 = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftC = s[left];
    const rightC = s[right];

    if (!isAlphaNumeric2(leftC)) {
      left++;
      continue;
    }
    if (!isAlphaNumeric2(rightC)) {
      right--;
      continue;
    }
    if (leftC.toLowerCase() !== rightC.toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }
  return true;
};

function isAlphaNumeric1(char) {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

const isPalindrome2 = (s) => {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    const lChar = s[l];
    const rChar = s[r];
    if (!isAlphaNumeric(lChar)) {
      l++;
      continue;
    }
    if (!isAlphaNumeric(rChar)) {
      r--;
      continue;
    }
    if (rChar.toLowerCase() !== lChar.toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
};

const a = "A man, a plan, a canal: Panama";
const s = "race a car";
console.time();
console.log(isPalindrome2(s));
console.timeEnd();
