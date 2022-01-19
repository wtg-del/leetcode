var combinationSum2 = function (candidates, target) {
  const path = [], result = [];
  candidates.sort();
  function backtracking(startIndex, sum) {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push(Array.from(path));
      return;
    }
    const used = []
    for (let index = startIndex; index < candidates.length; index++) {
      const x = candidates[index];
      if (used[x] || x > target - sum) {
        continue;
      }
      used[x] = true;
      sum += x;
      path.push(x);
      backtracking(index + 1, sum, used);
      sum -= x;
      path.pop();
    }
  }
  backtracking(0, 0);
  return result;
};

console.log(JSON.stringify(combinationSum2([2, 5, 2, 1, 2], 5)))