// 力扣52
var totalNQueens = function (n) {
  let count = 0;
  function backtracking(row, chessBoard) {
    if (row === n) {
      count++;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!isVaild(row, col, chessBoard)) {
        continue;
      }
      chessBoard[row] = col;
      backtracking(row + 1, chessBoard);
      chessBoard[row] = 0;
    }
  }
  backtracking(0, []);
  return count;
};

function isVaild(currentRow, currentCol, chessBoard) {
  for (let row = 0; row < currentRow; row++) {
    // row行，对于的col
    const col = chessBoard[row];
    // 检查列（第col行上，是不是存在currentCol）
    if (col === currentCol) return false;
    // 检查45度 往前 和相等, 如果相等， 就说明在row行，col列上存在皇后，chessBoard保存在的皇后
    if (row + col === currentRow + currentCol) return false;
    // 135度 往后 差相等
    if (row - col === currentRow - currentCol) return false;
  }
  return true;
}

console.log(totalNQueens(4))