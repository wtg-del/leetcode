var solveNQueens = function (n) {
  const result = [];
  function backtracking(row, chessBoard) {
    if (row === n) {
      result.push(Array.from(chessBoard.map(row => row.join(''))));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!isVaild(row, col, n, chessBoard)) continue;
      chessBoard[row][col] = 'Q';
      backtracking(row + 1, chessBoard);
      chessBoard[row][col] = '.';
    }
  }
  const chessBoard = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));
  backtracking(0, chessBoard);
  return result;
};

function isVaild(row, col, n, chessBoard) {
  // 检查列
  for (let i = 0; i < row; i++) {
    if (chessBoard[i][col] === 'Q') return false;
  }

  // 检查 45 度角是否有皇后(往前)
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chessBoard[i][j] === 'Q') return false;
  }

  // 检查 135 度角是否有皇后(往后)
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (chessBoard[i][j] === 'Q') return false;
  }

  return true;
}

console.log(JSON.stringify(solveNQueens(4)), '===')