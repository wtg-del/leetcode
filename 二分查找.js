var search = function (nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  // return -1;

  // let left = 0, right = nums.length - 1;
  // while (left <= right) {
  //   const mid = Math.floor((left + right) / 2);
  //   if (nums[mid] > target) {
  //     right = mid - 1;
  //   } else if (nums[mid] < target) {
  //     left = mid + 1;
  //   } else {
  //     return mid;
  //   }
  // }


  return -1;
};

for (let i = 0; i < [1, 2, 3].length; i++) {
  console.log(i)
}