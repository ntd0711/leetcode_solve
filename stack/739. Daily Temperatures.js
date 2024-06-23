// const dailyTemperatures1 = function (temperatures) {
//   const tempLength = temperatures.length;
//   const result = [];
//   for (let i = 0; i < tempLength; i++) {
//     const temperature = temperatures[i];

//     let n = i + 1;
//     let count = 0;
//     while (n < tempLength) {
//       const nextTemperature = temperatures[n];
//       if (nextTemperature <= temperature && n === tempLength - 1) {
//         console.log([nextTemperature, temperature]);
//         count = 0;
//         break;
//       }
//       if (nextTemperature > temperature && n !== tempLength - 1) {
//         count++;
//         break;
//       }
//       count++;
//       n++;
//     }

//     result.push(count);
//   }

//   return result;
// };

const dailyTemperatures1 = (temperatures) => {
  // const stack = Array.from({ length: temperatures.length });
  const stack = [];
  const output = Array.from({ length: temperatures.length }).fill(0);
  // [ 3, 2, 1, 1, 0, 1, 1, 0 ]
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];
    // const topStack = stack[stack.length - 1]?.[0];
    while (stack.length !== 0 && temperature > stack[stack.length - 1]?.[0]) {
      const [stackT, stackInd] = stack.pop();
      output[stackInd] = i - stackInd;
    }
    stack.push([temperature, i]);
  }
  return output;
};

const dailyTemperatures = (temperatures) => {
  const stack = [];
  const output = Array.from({ length: temperatures.length }).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];
    while (stack.length !== 0 && temperature > stack[stack.length - 1]) {
      const topStackInd = stack.lastIndexOf(stack[stack.length - 1]);
      stack.pop();
      output[topStackInd] = i - topStackInd;
    }
    stack[i] = temperature;
  }
  return output;
};

const dailyTemperatures2 = (temperatures) => {
  const result = Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    const tem = temperatures[i];
    while (stack.length && tem > stack.at(-1)[1]) {
      const [topIdx, topVal] = stack.pop();
      const days = i - topIdx;
      result[topIdx] = days;
    }
    stack.push([i, tem]);
  }
  return result;
};
console.log(dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73]));
// console.log(dailyTemperatures2([30, 40, 50, 60]));
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// console.log(dailyTemperatures([30, 40, 50, 60]));
// console.log(dailyTemperatures([30, 60, 90]));
// console.log(dailyTemperatures1([12, 11, 10, 34, 53, 22, 33, 44]));
// const a = Array.from({ length: 8 });
