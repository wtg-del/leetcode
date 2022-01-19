var isValid = function (s) {
  const stack = [];
  for (let index = 0; index < s.length; index++) {
    const x = s[index];
    switch (x) {
      case '(':
        stack.push(')');
        break;
      case '[':
        stack.push(']');
        break;
      case '{':
        stack.push('}');
        break;
      default:
        if (x !== stack.pop()) {
          return false;
        }
    }
  }
  return !stack.length;
};

console.log(isValid('(]'))