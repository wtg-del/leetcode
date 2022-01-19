
class MinHeap {
  constructor(max) {
    this.arr = [];
    this.size = 0;
    this.max = max;
  }

  push(val) {
    this.arr.push(val);
    this.size++;
    if (this.size > 1) {
      let cur = this.size - 1;
      let parent = Math.floor((cur - 1) / 2);
      while (cur > 0 && this.arr[parent].val > this.arr[cur].val) {
        [this.arr[parent], this.arr[cur]] = [this.arr[cur], this.arr[parent]];
        cur = parent;
        parent = Math.floor((cur - 1) / 2);
      }
    }
    while (this.size > this.max) this.pop();
  }

  pop() {
    if (this.empty()) return false;
    const res = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.size--;
    let cur = 0;
    let childl = 1;
    let childr = 2;
    while (
      (childl < this.size && this.arr[childl].val < this.arr[cur].val) ||
      (childr < this.size && this.arr[childr].val < this.arr[cur].val)
    ) {
      if (childr < this.size && this.arr[childr].val < this.arr[childl].val) {
        [this.arr[cur], this.arr[childr]] = [this.arr[childr], this.arr[cur]];
        cur = childr;
      } else {
        [this.arr[cur], this.arr[childl]] = [this.arr[childl], this.arr[cur]];
        cur = childl;
      }
      childl = cur * 2 + 1;
      childr = cur * 2 + 2;
    }
    return res;
  }

  empty() {
    return this.size === 0;
  }

  top() {
    return this.arr[0];
  }
}

var topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const heap = new MinHeap(k);
  map.forEach((val, key) => {
    if (heap.size < k || heap.top().val < val) {
      heap.push({ key, val });
    }
  });

  const ret = [];
  while (!heap.empty()) {
    ret.push(heap.pop().key);
  }
  return ret;
};

console.log(topKFrequent([4, 1, 1, 1, 2, 2, 3], 2))