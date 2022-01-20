var removeElement = function (nums, val) {
  let len = nums.length;
  // // 暴力解法
  // for (let i = 0; i < len; i++) {
  //   if (nums[i] === val) { // 发现需要移除的元素，就将数组集体向前移动一位
  //     for (let j = i + 1; j < len; j++) {
  //       nums[j - 1] = nums[j];
  //     }
  //     i--; // 因为下标i以后的数值都向前移动了一位，所以i也向前移动一位
  //     nums.length = --len; // 此时数组的大小-1
  //   }
  // }
  // return len;

  // 双指针
  // let slowIndex = 0;
  // for (let fastIndex = 0; fastIndex < len; fastIndex++) {
  //   if (val !== nums[fastIndex]) {
  //     nums[slowIndex++] = nums[fastIndex];
  //   }
  // }
  // return slowIndex;
  // 双指针优化
  let right = nums.length;
  for (let left = 0; left < right;) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return right;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(nums, 2));
console.log(nums);