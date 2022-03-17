var intersection = function (nums1, nums2) {
  return Array.from(new Set(nums1.filter(n => nums2.includes(n))))
};

console.log(intersection([1, 2, 2, 1], [2, 2]))