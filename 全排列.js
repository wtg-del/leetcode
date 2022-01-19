// 力扣46
var permute = function (nums) {
  const result = [], path = [];
  function backtraing(used) {
    if (path.length === nums.length) {
      result.push(Array.from(path));
      return;
    }
    for (let index = 0; index < nums.length; index++) {
      if (used[index]) continue;
      used[index] = true;
      path.push(nums[index]);
      backtraing(used);
      path.pop();
      used[index] = false;
    }
  }
  backtraing([]);
  return result;
};

permute([1, 2, 3]);