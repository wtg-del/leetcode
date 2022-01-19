var combinationSum3 = function (k, n) {
  const path = [], result = [];
  function backtracking(startIndex, sum) {
    if (sum > n) return; // 剪枝操作
    if (path.length === k) {
      if (sum === n) {
        result.push(Array.from(path));
      }
      return;
    }
    const len = 9 - (k - path.length) + 1;
    for (let index = startIndex; index <= len; index++) { // 剪枝
      if (index > n - sum) continue;
      sum += index;
      path.push(index);
      backtracking(index + 1, sum)
      sum -= index;
      path.pop();
    }
  }
  backtracking(1, 0);
  return result;
};


console.log(JSON.stringify(combinationSum3(3, 7)))