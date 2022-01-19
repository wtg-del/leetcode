function isValid(str) {
  if (str.length > 1 && str[0] === '0') return false;

  if (!isNaN(+str)) {
    const number = +str;
    return !(number < 0 || number > 255);
  }

  return false;
}

// 力扣 93
function restoreIpAddresses(s) {
  const result = [], path = [];
  function backtracking(startIndex) {
    if (path.length > 4) return;
    if (path.length === 4 && startIndex === s.length) {
      result.push(path.join('.'));
      return;
    }
    for (let index = startIndex; index < s.length; index++) {
      const str = s.substr(startIndex, index - startIndex + 1);
      if (!isValid(str)) break;
      path.push(str);
      backtracking(index + 1);
      path.pop();
    }
  }
  backtracking(0);
  return result;
}

restoreIpAddresses('010010');