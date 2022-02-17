var reverseWords = function (s) {
  const strArr = s.split('');
  // 移除多余空格
  removeExtraSpaces(strArr);
  // 翻转
  reverse(strArr, 0, strArr.length - 1);

  let start = 0;
  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === ' ' || i === strArr.length) {
      // 翻转单词
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }
  return strArr.join('');
};

function removeExtraSpaces(strArr) {
  let slowIndex = 0;
  let fastIndex = 0;
  while (fastIndex < strArr.length) {
    if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
      fastIndex++
    } else {
      strArr[slowIndex] = strArr[fastIndex];
      fastIndex++;
      slowIndex++;
    }
  }
  strArr.length = strArr[slowIndex - 1] === ' ' ? slowIndex - 1 : slowIndex;
}

function reverse(strArr, start, end) {
  for (let i = start, j = end; i < j; i++, j--) {
    [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
  }
}

console.log(reverseWords("  hello world  "))