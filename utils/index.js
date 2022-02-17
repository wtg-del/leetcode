function ListNode(value) {
  this.value = value;
  this.next = null;
}

function arrayToListNode(arr) {
  const head = new ListNode(arr[0]);
  let currnt = head;
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    currnt.next = new ListNode(num);
    currnt = currnt.next;
  }
  return head;
}

function listNodToArray(head) {
  if (!head) {
    return [];
  }

  const result = [];
  let p = head;

  while (p) {
    result.push(p.value);
    p = p.next;
  }
  return result;
}

module.exports = {
  arrayToListNode,
  listNodToArray,
}

