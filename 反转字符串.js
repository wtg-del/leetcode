var reverseString = function (s) {
  for (let i = 0, j = s.length - 1; i < s.length / 2 && j > 0; i++, j--) {
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"]));