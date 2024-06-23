const carFleet = function (target, position, speed) {
  const pairs = position
    .map((p, i) => {
      return [p, speed[i]];
    })
    .sort((a, b) => {
      return a[0] - b[0];
    });

  const stack = [];
  for (let index = pairs.length - 1; index >= 0; index--) {
    const pair = pairs[index];
    const [p, s] = pair;
    const t = (target - p) / s;
    stack.push(t);
    const top = stack.slice(-1)[0];
    const next = stack.slice(-2)[0];
    if (stack.length >= 2 && stack.slice(-1)[0] <= stack.slice(-2)[0]) {
      stack.pop();
    }
  }
  return stack.length;
};

// const target = 12;
// const position = [10, 8, 0, 5, 3];
// const speed = [2, 4, 1, 1, 3];
// const target = 10;
// const position = [3, 5, 7];
// const speed = [3, 2, 1];

const carFleet1 = (target, position, speed) => {
  const pairs = position
    .map((p, i) => {
      return [p, (target - p) / speed[i]];
    })
    .sort((a, b) => a[0] - b[0]);
  const stack = [];

  for (let i = pairs.length - 1; i >= 0; i--) {
    const time = pairs[i][1];
    console.log(time);
    if (!stack.length) {
      stack.push(time);
      continue;
    }
    if (time > stack.at(-1)) {
      stack.push(time);
    }
  }
  return stack.length;
};

// const target = 12;
// const position = [10, 8, 0, 5, 3];
// const speed = [2, 4, 1, 1, 3];
const target = 10;
const position = [3, 5, 7];
const speed = [3, 2, 1];
// const target = 100;
// const position = [0, 2, 4];
// const speed = [4, 2, 1];
// const target = 10;
// const position = [0, 4, 2];
// const speed = [2, 1, 3];
console.log(carFleet1(target, position, speed));

console.log(carFleet(target, position, speed));
// console.log( [10, 8, 0, 5, 3].slice(-1)[0])
