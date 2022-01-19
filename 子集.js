// 力扣 78
var subsets = function (nums) {
  const path = [], result = [];
  function backtracking(startIndex) {
    result.push(Array.from(path));
    for (let index = startIndex; index < nums.length; index++) {
      path.push(nums[index]);
      backtracking(index + 1);
      path.pop();
    }
  }
  backtracking(0);
  return result;
};

console.log(JSON.stringify(subsets([1, 2, 3])));