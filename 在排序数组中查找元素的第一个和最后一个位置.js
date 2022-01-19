var searchRange = function (nums, target) {
  if (!nums.length || target < 0) return [-1, -1];

  return [searchRes(nums, target, true), searchRes(nums, target, false)];
};

const searchRes = (nums, target, isLeft) => {
  let res = -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      res = mid;
      if (isLeft) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return res;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));