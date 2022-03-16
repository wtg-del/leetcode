var fourSum = function (nums, target) {
  // debugger
  if (nums.length < 3) return [];
  const len = nums.length;
  const res = [];
  nums.sort((a, b) => a - b);
  // 因为是四数之和，所以少于三个三个数的变量没有意义
  for (let i = 0; i < len - 3; i++) {
    // 忽略后面与前面重复的元素
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < len - 2; j++) {
      // 忽略后面与前面重复的元素
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let L = j + 1;
      let R = len - 1;
      while (L < R) {
        const sum = nums[i] + nums[j] + nums[L] + nums[R];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[L], nums[R]]);
          /*
          下面的代码相当于：
          while (left < right) {
              // 不管前后相不相等，left 都要往前走
              left++;
              if (nums[left - 1] != nums[left]) break;
          }
          while (left < right) {
              // 不管前后相不相等，right 都要往后走
              right--;
              if (nums[right + 1] != nums[right]) break;
          }
          */
          // 去重
          while (L < R && nums[L] === nums[++L]);
          while (L < R && nums[R] === nums[--R]);
        } else if (sum > target) {
          R--;
        } else if (sum < target) {
          L++;
        }
      }
    }
  }
  return res;
};

console.log(JSON.stringify(fourSum([1, 0, -1, 0, -2, 2], target = 0)));