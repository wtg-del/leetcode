const { arrayToListNode } = require('./utils');

var reverseList = function (head) {
  if (!head || !head.next) return head;
  // 双指针
  // let pre = null, cur = head;
  // while (cur) {
  //   const temp = cur.next;
  //   cur.next = pre;
  //   pre = cur;
  //   cur = temp;
  // }
  // return pre;
  debugger
  // 递归
  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

const list = arrayToListNode([1, 2, 3, 4]);

console.log(JSON.stringify(reverseList(list)))