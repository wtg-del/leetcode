var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  let left = 0;
  let rigth = 0;
  let sum = 0;
  let res = len + 1;

  while (rigth < len) {
    sum += nums[rigth++];
    while (sum >= target) {
      const subLen = rigth - left;
      if (subLen < res) res = subLen;
      sum -= nums[left++];
    }
  }

  return res > len ? 0 : res;
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);