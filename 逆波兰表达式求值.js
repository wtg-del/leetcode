var evalRPN = function (tokens) {
  const stack = [];
  const map = {
    '+': (a, b) => a + b,
    '-': (a, b) => b - a,
    '*': (a, b) => a * b,
    '/': (a, b) => parseInt(b / a),
  };
  for (const token of tokens) {
    stack.push(
      map[token]
        ? map[token](stack.pop(), stack.pop())
        : Number(token)
    );
  }
  return stack.pop();
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))