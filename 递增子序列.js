// 力扣
var findSubsequences = function (nums) {
  const path = [], result = [];
  function backtracking(startIndex) {
    if (path.length > 1) {
      result.push(Array.from(path));
    }
    if (startIndex === nums.length) return;
    const uset = [];
    for (let index = startIndex; index < nums.length; index++) {
      if (path.length > 0 && (nums[index] < path[path.length - 1] || uset[nums[index] + 100])) {
        continue;
      }
      uset[nums[index] + 100] = true;
      path.push(nums[index]);
      backtracking(index + 1);
      path.pop();
    }
  }
  backtracking(0);
  return result;
};


console.log(findSubsequences([4, 7, 6, 7]))