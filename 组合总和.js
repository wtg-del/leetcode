var combinationSum = function (candidates, target) {
  const result = [], path = [];
  function backtracking(startIndex, sum) {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push(Array.from(path));
      return;
    }
    for (let index = startIndex; index < candidates.length; index++) {
      sum += candidates[index];
      path.push(candidates[index]);
      backtracking(index, sum);
      sum -= candidates[index];
      path.pop();
    }
  }
  backtracking(0, 0);
  return result;
}
console.log(JSON.stringify(combinationSum([2, 5, 3], 4)))