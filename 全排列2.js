
// 力扣47
var permuteUnique = function (nums) {
  const path = [], result = [];
  nums.sort();
  function backtracking(used) {
    if (path.length === nums.length) {
      result.push(Array.from(path));
      return;
    }
    for (let index = 0; index < nums.length; index++) {
      if ((index > 0 && nums[index] === nums[index - 1] && !used[index - 1]) || used[index]) {
        continue;
      }
      used[index] = true;
      path.push(nums[index]);
      backtracking(used);
      used[index] = false;
      path.pop();
    }
  }
  backtracking([]);
  return result;
};

console.log(JSON.stringify(permuteUnique([1, 1, 2])))
// permuteUnique([1, 1, 2])