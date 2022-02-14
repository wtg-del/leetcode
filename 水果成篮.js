var totalFruit = function (fruits) {
  let left = 0;
  let n = 0;
  let arr = [fruits[0]];
  let res = 0;
  let itemLastIndex = [`${fruits[0]} -  0`];
  for (let rigth = 0; rigth < fruits.length; rigth++) {
    if (!arr.includes(fruits[rigth])) {
      if (arr.length <= 1) {
        arr[1] = fruits[rigth]
      } else {
        left = n;
        arr[0] = fruits[rigth - 1];
        arr[1] = fruits[rigth];
      }
    }

    if (fruits[n] !== fruits[rigth]) {
      itemLastIndex.push(`${fruits[rigth]} -  ${rigth}`);
      n = rigth;
    }
    res = Math.max(res, (rigth - left) + 1);
  }
  return res;
};

console.log(totalFruit([0, 6, 0, 6, 1, 4, 4, 6]));