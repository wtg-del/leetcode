var generateParenthesis = function (n) {
  const result = [];
  function backtracking(str, left, right) {
    // if (left > n || right > left) return;
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }
    if (left < n) {
      backtracking(str + '(', left + 1, right);
    }
    if (right < left) {
      backtracking(str + ')', left, right + 1);
    }
  }
  backtracking('', 0, 0);
  return result;
};

console.log(JSON.stringify(generateParenthesis(2)))