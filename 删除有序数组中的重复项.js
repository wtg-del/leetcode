var removeDuplicates = function (nums) {
  const len = nums.length;
  let slowIndex = 0;
  for (let fastIndex = 1; fastIndex < len; fastIndex++) {
    if (nums[fastIndex] !== nums[slowIndex]) {
      nums[++slowIndex] = nums[fastIndex];
    }
  }
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))