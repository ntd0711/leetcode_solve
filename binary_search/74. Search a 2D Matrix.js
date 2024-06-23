const searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let top = 0;
  let bot = rows - 1;
  let row;

  while (top <= bot) {
    row = top + Math.floor((bot - top) / 2);
    if (target < matrix[row][0]) {
      bot = row - 1;
      continue;
    }
    if (target > matrix[row][cols - 1]) {
      top = row + 1;
      continue;
    }
    break;
  }

  if (top > bot) return false;
  let left = 0;
  let right = matrix[row].length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (target === matrix[row][mid]) return true;
    if (target > matrix[row][mid]) {
      left = mid + 1;
      continue;
    }
    if (target < matrix[row][mid]) {
      right = mid - 1;
      continue;
    }
  }

  return false;
};

const searchMatrix1 = (matrix, target) => {
  let low = 0;
  let high = matrix.length - 1;
  let row;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    row = matrix[mid];
    if (row[0] <= target && target <= row[row.length - 1]) {
      break;
    }
    if (target < row[0]) {
      high = mid - 1;
      continue;
    }
    if (target > row[row.length - 1]) {
      low = mid + 1;
      continue;
    }
  }
  if (low > high) return false;
  let low2 = 0;
  let high2 = row.length - 1;
  while (low2 <= high2) {
    const mid = low2 + Math.floor((high2 - low2) / 2);
    if (target === row[mid]) {
      return true;
    }
    if (target > row[mid]) {
      low2 = mid + 1;
      continue;
    }
    if (target < row[mid]) {
      high2 = mid - 1;
      continue;
    }
  }
  return false;
};

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
// const matrix = [[1]];
const target = 61;
console.log(searchMatrix1(matrix, target));
