var generateParenthesis = function (n) {
  const result = [];
  const backTracking = (current, open, close) => {
    if (open === close && open === n) {
      console.log(current);
      result.push(current);
      return;
    }

    console.log(close);
    if (open < n) {
      console.log(open);
      console.log(current);
      backTracking(current + "(", open + 1, close);
      console.log(current);
    }
    if (close < open) {
      console.log(open);
      console.log(current);
      backTracking(current + ")", open, close + 1);
    }
  };
  backTracking("", 0, 0);
  return result;
};

console.log(generateParenthesis(3));
