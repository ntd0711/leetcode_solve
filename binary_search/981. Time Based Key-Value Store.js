// const TimeMap = function () {
//   this.map = {};
// };
// TimeMap.prototype.set = function (key, value, timestamp) {
//   if (!this.map[key]) {
//     this.map[key] = [];
//   }
//   this.map[key].push([value, timestamp]);
// };

// TimeMap.prototype.get = function (key, timestampTarget) {
//   const pairs = this.map[key] || [];

//   let left = 0;
//   let right = pairs.length - 1;
//   let res = [];

//   while (left <= right) {
//     let mid = left + Math.floor((right - left) / 2);
//     const pair = pairs[mid];
//     const [value, timestamp] = pair;

//     if (timestamp === timestampTarget) {
//       return value;
//     }
//     if (timestamp < timestampTarget) {
//       res = pair;
//       left = mid + 1;
//       continue;
//     }
//     if (timestamp > timestampTarget) {
//       right = mid - 1;
//       continue;
//     }
//   }
//   return res?.[0] || "";
// };

const TimeMap = function () {
  this.map = {};
};
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) {
    this.map[key] = [];
  }
  this.map[key].push([value, timestamp]);
};
TimeMap.prototype.get = function (key, targetTimestamp) {
  const values = this.map[key];
  if (!values) return "";
  let l = 0;
  let r = values.length - 1;
  let res = "";
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    const [value, timestamp] = values[mid];
    if (targetTimestamp === timestamp) {
      return value;
    }
    if (targetTimestamp > timestamp) {
      res = value;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return res;
};

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 0); // store the key "foo" and value "bar" along with timestamp = 1.
// console.log(timeMap.get("foo", 1)); // return "bar"
// console.log(timeMap.get("foo", 3)); // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 2); // store the key "foo" and value "bar2" along with timestamp = 4.
// console.log(timeMap.get("foo", 4)); // return "bar2"
// console.log(timeMap.get("foo", 5)); // return "bar2"
timeMap.set("foo", "bar4", 4);
timeMap.set("foo", "bar6", 6);
timeMap.set("foo", "bar8", 8);
console.log(timeMap.get("foo", 3)); // return "bar2"

// timeMap.set("love", "high", 10);
// timeMap.set("love", "low", 20);
// console.log(timeMap.get("love", 5));
// console.log(timeMap.get("love", 10));
// console.log(timeMap.get("love", 15));
// console.log(timeMap.get("love", 20));
// console.log(timeMap.get("love", 25));

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
