const evalRPN = function (tokens) {
  const operator = "+-*/";
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (!operator.includes(token)) {
      stack.push(token);
      continue;
    }
    if (operator.includes(token)) {
      const operands = stack.splice(-2, 2);
      let result;
      switch (token) {
        case "+":
          result = +operands[1] + +operands[0];
          break;
        case "-":
          result = +operands[0] - +operands[1];
          break;
        case "*":
          result = +operands[1] * +operands[0];
          break;
        case "/":
          const quotient = +operands[0] / +operands[1];
          result = quotient < 0 ? Math.ceil(quotient) : Math.floor(quotient);
          break;
        default:
          break;
      }
      stack.push(result);
    }
  }
  return stack[0];
};

// console.log(evalRPN(["2", "1", "+", "3", "*"]));
// console.log(evalRPN(["4", "13", "5", "/", "+"]));
// console.log(
//   evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
// );
const evalRPN2 = function (tokens) {
  const stack = [];
  for (const token of tokens) {
    if (!"+-*/".includes(token)) {
      stack.push(token);
      continue;
    }
    let result;
    const operands = stack.splice(-2, 2);
    if ("+-*/".includes(token)) {
      switch (token) {
        case "+": {
          result = +operands[0] + +operands[1];
          break;
        }
        case "-": {
          result = +operands[0] - +operands[1];
          break;
        }
        case "*": {
          result = +operands[1] * +operands[0];
          break;
        }
        case "/": {
          result = Math.trunc(+operands[0] / +operands[1]);
          break;
        }
        default: {
          break;
        }
      }
    }
    stack.push(result);
  }
  return stack[0];
};
console.log(evalRPN2(["4", "13", "5", "/", "+"]));
console.log(evalRPN2(["2", "1", "+", "3", "*"]));
// console.log(
//   evalRPN2([
//     "10",
//     "6",
//     "9",
//     "3",
//     "+",
//     "-11",
//     "*",
//     "/",
//     "*",
//     "17",
//     "+",
//     "5",
//     "+",
//   ])
// );
