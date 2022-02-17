var replaceSpace = function (s) {
  const strArr = s.split('');
  let count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ' ') count++;
  }
  // 旧数组的末尾
  let left = strArr.length - 1;
  // 提前把数组的最大长度算出来，然后指向新数组的末尾
  let right = (strArr.length + count * 2) - 1;
  // 然后把旧数组的末尾开始向新数组的末尾依次添加，遇到空格就移动新数组末尾指针添加‘02%’
  while (left >= 0) {
    if (strArr[left] === ' ') {
      strArr[right--] = '0';
      strArr[right--] = '2';
      strArr[right--] = '%';
      left--;
    } else {
      strArr[right--] = strArr[left--];
    }
  }
  return strArr.join('');
};

console.log(replaceSpace('We are happy.'));