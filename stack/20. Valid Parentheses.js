const isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const mark = s[i];

    if (i === 0 && ")]}".includes(mark)) return false;
    if ("([{".includes(mark)) stack.push(mark);
    if (!"([{".includes(mark)) {
      const lastMark = stack.pop();
      if (!lastMark) return false;
      if (lastMark === "[") {
        if (mark !== "]") return false;
      }
      if (lastMark === "{") {
        if (mark !== "}") return false;
      }
      if (lastMark === "(") {
        if (mark !== ")") return false;
      }
    }
  }
  if (stack.length > 0) return false;

  return true;
};

const isValid2 = (s) => {
  if (s.length % 2 !== 0) return false;
  const closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const mark = s[i];
    if (mark in closeToOpen) {
      if (stack.length > 0 && stack.at(-1) === closeToOpen[mark]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(mark);
    }
  }
  return stack.length === 0;
};

const isValid3 = (s) => {
  const stack = [];
  const closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < s.length; i++) {
    const mark = s[i];
    if (mark in closeToOpen) {
      if (stack.length && stack.at(-1) === closeToOpen[mark]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(mark);
    }
  }
  return stack.length === 0;
};

// console.log("]" === "]");
// console.log(isValid2("()"));
// console.log(isValid2("(("));
// console.log(isValid2("))"));
// console.log(isValid2("()))"));
console.log(isValid2("{[]}"));
// switch (mark) {
//   case "(": {
//     console.log(i);
//     console.log("ahihi");
//     if (nextMark !== ")") return false;
//   }
//   case "[": {
//     console.log(i);
//     console.log("ahihi");
//     if (nextMark !== "]") return false;
//   }
//   case "{": {
//     console.log("ahihi");
//     if (nextMark !== "}") return false;
//   }
// }
