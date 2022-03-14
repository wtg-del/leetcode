const { arrayToListNode } = require('./utils');

var removeNthFromEnd = function (head, n) {
  debugger
  let fast = head, slow = head;
  while (n--) fast = fast.next;
  // 删除的是头节点
  if (!fast) return head.next;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

removeNthFromEnd(arrayToListNode([1, 2]), 2);