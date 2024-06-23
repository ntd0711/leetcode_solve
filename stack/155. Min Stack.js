const MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function (val) {
  const stackLength = this.stack.length;
  this.stack.push(val);
  let minValue;
  if (stackLength === 0) {
    console.log(val);
    minValue = val;
  } else {
    const topElement = this.minStack.slice(-1)[0];
    minValue = Math.min(topElement, val);
  }

  this.minStack.push(minValue);
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = function () {
  return this.stack.slice(-1)[0];
};

MinStack.prototype.getMin = function () {
  return this.minStack.slice(-1)[0];
};

const obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.stack);
console.log(obj.minStack);
// console.log(obj.stack);
// console.log(obj.minStack);
const min = obj.getMin();
obj.pop();
const top = obj.top();
const min2 = obj.getMin();

console.log({ min, top, min2 });

const MinStack2 = function () {
  this.stack = [];
  this.minStack = [];
};

MinStack2.prototype.push = function (val) {
  const topMinStack = this.minStack.at(-1);
  const minVal =
    topMinStack != undefined ? Math.min(this.minStack.at(-1), val) : val;
  this.stack.push(val);
  this.minStack.push(minVal);
};
MinStack2.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};
MinStack2.prototype.top = function () {
  return this.stack.at(-1);
};
MinStack2.prototype.getMin = function () {
  return this.minStack.at(-1);
};

const obj2 = new MinStack2();
obj2.push(1);
obj2.push(2);
// obj2.push(0);
// obj2.push(3);
// obj2.push(0);
console.log(obj2.stack);
console.log(obj2.minStack);
// console.log(obj2.stack);
// console.log(obj2.minStack);
// const min22 = obj2.getMin();
// obj2.pop();
const top2 = obj2.top();

console.log(top2);
console.log(obj2.getMin());
console.log(obj2.stack);
console.log(obj2.stack);
// console.log({ top2, min22, min23 });
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// const MinStack = function () {
//   const stack = [];
//   const minStack = [];
//   console.log(stack);
//   console.log(minStack);

//   const push = (val) => {
//     const stackLength = stack.length;
//     stack.push(val);

//     let minValue;
//     if (stackLength === 0) {
//       minValue = val;
//     } else {
//       const topElement = minStack.slice(-1)[0];
//       minValue = Math.min(topElement, val);
//     }

//     minStack.push(minValue);
//   };
//   const pop = () => {
//     stack.pop();
//     minStack.pop();
//   };
//   const top = () => {
//     return stack.slice(-1)[0];
//   };
//   const getMin = () => {
//     return minStack.slice(-1)[0];
//   };

//   return {
//     // stack,
//     // minStack,
//     push,
//     pop,
//     top,
//     getMin,
//   };
// };
