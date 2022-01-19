// 力扣 90
var subsetsWithDup = function (nums) {
  nums.sort();
  const result = [], path = [];
  function backtracking(startIndex) {
    result.push(Array.from(path));
    if (startIndex === nums.length) return;
    for (let index = startIndex; index < nums.length; index++) {
      if (index > startIndex && nums[index] === nums[index - 1]) continue;
      path.push(nums[index]);
      backtracking(index + 1);
      path.pop();
    }
  }
  backtracking(0);
  return result;
};
console.log(subsetsWithDup([1, 2, 2]));