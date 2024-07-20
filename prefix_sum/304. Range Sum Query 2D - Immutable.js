var NumMatrix = function (matrix) {
  this.sumMatrix = [Array.from({ length: matrix[0].length + 1 }).fill(0)];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const newRow = [0, ...row];
    this.sumMatrix.push(newRow);
  }

  for (let r = 1; r < this.sumMatrix.length; r++) {
    let prefix = 0;
    for (let c = 1; c < this.sumMatrix[0].length; c++) {
      prefix += this.sumMatrix[r][c];
      const above = this.sumMatrix[ropen - 1][c];
      // console.log(this.sumMatrix[r][c]);
      this.sumMatrix[r][c] = prefix + above;
    }
  }
  console.log(this.sumMatrix);
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {};
// Array(6) [
//   Array(6) [ 0, 0, 0, 0, 0, 0 ],
//   Array(6) [ 0, 3, 0, 1, 4, 2 ],
//   Array(6) [ 0, 5, 6, 3, 2, 1 ],
//   Array(6) [ 0, 1, 2, 0, 1, 5 ],
//   Array(6) [ 0, 4, 1, 0, 1, 7 ],
//   Array(6) [ 0, 1, 0, 3, 0, 5 ]
// ]
const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];

NumMatrix.prototype.sumRegion = function (lRow, lCol, rRow, rCol) {
  lRow = lRow + 1;
  lCol = lCol + 1;
  rRow = rRow + 1;
  rCol = rCol + 1;
  const commonArea = this.sumMatrix[lRow - 1][lCol - 1];
  return (
    this.sumMatrix[rRow][rCol] -
    this.sumMatrix[lRow - 1][rCol] -
    this.sumMatrix[rRow][lCol - 1] +
    commonArea
  );
};

const obj = new NumMatrix(matrix);
const param_1 = obj.sumRegion(1, 1, 2, 2);
const param_2 = obj.sumRegion(1, 2, 2, 4);
console.log({ param_1, param_2 });
// Lrow, Lcol, Rrow, Rcol

// (Rrow, Rcol) - (Lrow - 1, Rcol) - (Rrow, Lcol - 1) + (Lrow - 1, Lcol - 1)
