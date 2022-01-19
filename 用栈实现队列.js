var MyQueue = function () {
  this.stackIn = [];
  this.stackOut = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const size = this.stackOut.length;
  if (size) {
    return this.stackOut.pop();
  }
  while (this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop());
  }
  return this.stackOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const x = this.pop();
  this.stackOut.push(x);
  return x;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stackIn.length && !this.stackOut.length;
}

var queue = new MyQueue()
queue.push(1);
queue.push(2);
// console.log(queue.pop())
queue.push(3);
console.log(queue.peek())
// console.log(queue.pop())
// console.log(queue.pop())
console.log(JSON.stringify(queue))