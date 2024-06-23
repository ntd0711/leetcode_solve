const maxProfit = function (prices) {
  let res = 0;
  for (let left = 0, right = left + 1; right < prices.length; right++) {
    const priceBuy = prices[left];
    const priceSell = prices[right];
    if (priceSell < priceBuy) {
      left = right;
      continue;
    }

    const profit = priceSell - priceBuy;
    res = Math.max(res, profit);
  }

  return res;
};

const maxProfit1 = (prices) => {
  let l = 0;
  let max = 0;
  for (let r = 1; r < prices.length; r++) {
    if (prices[l] > prices[r]) {
      l = r;
      continue;
    }
    max = Math.max(prices[r] - prices[l], max);
  }
  return max;
};

// const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7, 6, 4, 3, 1];
const prices = [2, 1, 2, 1, 0, 1, 2];
console.log(maxProfit1(prices));
