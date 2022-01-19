var maxSlidingWindow = function (nums, k) {
  if (!nums.length || k > nums.length) return [];
  // 队列数组（存放的是元素下标，为了取值方便）
  const q = [];
  // 结果数组
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    // 判断当前最大值（即队首元素）是否在窗口中，若不在便将其出队
    // 左健(i - k 当前元素左键的位置， q[0]上次最大的元素位置)， 如果当前元素左键的位置 >= 上次最大的元素位置
    // 则说明目前q[0]已经超出窗口位置，应删掉
    if (i - k >= q[0]) {
      q.shift();
    }
    // 若队列不为空，且当前元素大于等于队尾所存下标的元素，则弹出队尾
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    // 入队当前元素下标
    q.push(i);
    // 当达到窗口大小时便开始向结果中添加数据
    if (i >= k - 1) ans.push(nums[q[0]]);

  }

  return ans;

  // let left = 0;
  // let right = k - 1;
  // const result = [];
  // while (right < nums.length) {
  //   result.push(callMax(left, right, nums));
  //   right++;
  //   left++;
  // }
  // return result;
};

// function callMax(left, right, nums) {
//   let max = nums[right];
//   while (left <= right) {
//     if (nums[left] > max) max = nums[left];
//     left++;
//   }
//   return max;
// }

// console.log(maxSlidingWindow([1, -1], 1))
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))