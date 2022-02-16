var generateMatrix = function (n) {
  // 定义每循环一个圈的起始位置
  let startX = 0;
  let startY = 0;
  // 每个圈循环几次，例如n为奇数3，那么loop = 1 只是循环一圈，矩阵中间的值需要单独处理
  let loop = Math.floor(n / 2);
  // 矩阵中间的位置，例如：n为3， 中间的位置就是(1，1)，n为5，中间位置为(2, 2)
  let mid = Math.floor(n / 2);
  // 每一圈循环，需要控制每一条边遍历的长度
  let offset = 1;
  // 用来给矩阵中每一个空格赋值
  let count = 1;
  let res = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  while (loop--) {
    let row = startX;
    let column = startY;
    // 上行从左到右（左闭右开）
    for (; column < startY + n - offset; column++) {
      res[row][column] = count++;
    }
    // 右列从上到下（左闭右开）
    for (; row < startX + n - offset; row++) {
      res[row][column] = count++;
    }
    // 下行从右到左（左闭右开）
    for (; column > startX; column--) {
      res[row][column] = count++;
    }
    // 左列做下到上（左闭右开）
    for (; row > startY; row--) {
      res[row][column] = count++;
    }
    // 更新起始位置
    startY++;
    startX++;
    // 更新offset
    offset += 2;
  }
  if (n % 2 === 1) {
    res[mid][mid] = count;
  }
  return res;
};

console.log(JSON.stringify(generateMatrix(6)))