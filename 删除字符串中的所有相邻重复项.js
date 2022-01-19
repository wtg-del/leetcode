var removeDuplicates = function (s) {
  // const stack = [];
  // for (c of s) {
  //   if (stack.length && stack[stack.length - 1] === c) {
  //     stack.pop();
  //   } else {
  //     stack.push(c);
  //   }
  // }
  // return stack.join('')
  let str = s;
  let prev = s;
  function replaceStr(s) {
    str = s.replace(/([a-z]{1})\1/g, '');
  }
  replaceStr(str);
  while (prev !== str) {
    prev = str;
    replaceStr(str);
  }
  return str;
};

console.log(removeDuplicates('abbaca'));