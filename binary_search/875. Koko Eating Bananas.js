const minEatingSpeed = function (piles, h) {
  const maxSpeed = Math.max(...piles);
  let left = 1;
  let right = maxSpeed;
  let res = maxSpeed;

  console.log([left, right, res]);
  while (left <= right) {
    const k = Math.floor((right + left) / 2);
    let time = 0;
    for (const pile of piles) {
      const a = Math.ceil(pile / k);
      time += a;
    }
    if (time <= h) {
      console.log(k);
      res = Math.min(res, k);
      right = k - 1;
    } else {
      left = k + 1;
    }
  }
  return res;
};

const minEatingSpeed1 = (piles, h) => {
  const maxSpeed = Math.max(...piles);
  let low = 1;
  let high = maxSpeed;
  let res = maxSpeed;
  function calc(speed) {
    let hours = 0;
    for (const num of piles) {
      hours += Math.ceil(num / speed);
    }
    return hours;
  }
  while (low <= high) {
    const speed = Math.floor((high + low) / 2);
    const hours = calc(speed);
    console.log(speed);
    if (hours <= h) {
      console.log([hours, speed]);
      res = Math.min(res, speed);
      high = speed - 1;
      continue;
    }
    if (hours > h) {
      low = speed + 1;
      continue;
    }
  }
  return res;
};

// const piles = [3, 6, 7, 11];
// const h = 8;

const speeds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

// const piles = [30, 11, 23, 4, 20];
// const h = 5;

const piles = [312884470];
const h = 312884469;

console.log(minEatingSpeed1(piles, h));
// console.log(minEatingSpeed(piles, h));
