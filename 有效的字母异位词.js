var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const strMap = {};
  for (const key of s) {
    if (!strMap[key]) strMap[key] = 0;
    strMap[key]++;
  }
  for (const key of t) {
    if (strMap[key] && strMap[key] > 0) {
      strMap[key]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isAnagram('anagram', 'nagaram'))