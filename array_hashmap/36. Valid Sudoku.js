const isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set();
    const columnSet = new Set();
    const squareset = new Set();
    for (let j = 0; j < 9; j++) {
      const rowCell = board[i][j];
      const columnCell = board[j][i];
      const boardCell =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (rowCell !== ".") {
        if (rowSet.has(rowCell)) return false;
        rowSet.add(rowCell);
      }
      if (columnCell !== ".") {
        if (columnSet.has(columnCell)) return false;
        columnSet.add(columnCell);
      }
      if (boardCell !== ".") {
        if (boardSet.has(boardCell)) return false;
        boardSet.add(boardCell);
      }
    }
  }
  return true;
};

const isValidSudoku1 = (board) => {
  // const rows = new Map();
  // const cols = new Map();
  // const boards = new Map();
  const rows = [];
  const cols = [];
  const squares = new Map();
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") {
        continue;
      }
      if (!Array.isArray(rows[r])) {
        rows[r] = [];
      }
      if (!Array.isArray(cols[c])) {
        cols[c] = [];
      }
      if (!squares.has(`${[Math.trunc(r / 3), Math.trunc(c / 3)]}`)) {
        squares.set(`${[Math.trunc(r / 3), Math.trunc(c / 3)]}`, []);
      }
      if (
        rows[r].includes(board[r][c]) ||
        cols[c].includes(board[r][c]) ||
        squares
          .get(`${[Math.trunc(r / 3), Math.trunc(c / 3)]}`)
          .includes(board[r][c])
      ) {
        return false;
      }

      rows[r].push(board[r][c]);
      cols[c].push(board[r][c]);
      squares
        .get(`${[Math.trunc(r / 3), Math.trunc(c / 3)]}`)
        .push(board[r][c]);
    }
  }
  return true;
};

const isValidSudoku2 = (board) => {
  const rowSet = [];
  const colSet = [];
  const boardSet = new Map();
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = board[r][c];
      if (num === ".") continue;
      if (!rowSet[r]) {
        rowSet[r] = [];
      }
      if (!colSet[c]) {
        colSet[c] = [];
      }
      if (!boardSet.has(`${Math.trunc(r / 3)},${Math.trunc(c / 3)}`)) {
        boardSet.set(`${Math.trunc(r / 3)},${Math.trunc(c / 3)}`, new Set());
      }
      if (rowSet[r].includes(num)) {
        return false;
      }
      if (colSet[c].includes(num)) {
        return false;
      }
      if (boardSet.get(`${Math.trunc(r / 3)},${Math.trunc(c / 3)}`).has(num)) {
        return false;
      }
      rowSet[r].push(num);
      colSet[c].push(num);
      boardSet.get(`${Math.trunc(r / 3)},${Math.trunc(c / 3)}`).add(num);
    }
  }
  console.log(boardSet);
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku2(board));
