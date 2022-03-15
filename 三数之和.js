var threeSum = function (nums) {
  const len = nums.length;
  nums.sort((a, b) => a - b)
  if (nums[0] > 0 || nums[len - 1] < 0) return [];
  const res = [];
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    // 定值去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]]);
        // L去重
        while (L < R && nums[L] === nums[L + 1]) L++;
        // R去重
        while (L < R && nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else if (sum > 0) {
        R--;
      }
    }
  }
  return res;
};

console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])))