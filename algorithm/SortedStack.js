
// 单调栈, 单调递
var SortedStack = function () {
  this.stack = []
  this.assistStack = []
};
// 对栈进行排序使最小元素位于栈顶
/** 
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
  while (this.stack[this.stack.length - 1] < val || this.stack[this.stack.length - 1] === -1) {
    this.assistStack.push(this.stack.pop())
  }
  this.stack.push(val)
  while (this.assistStack.length !== 0) {
    this.stack.push(this.assistStack.pop())
  }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  if (this.isEmpty()) {
    return
  }
  this.stack.pop()
  this.assistStack.pop()
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  if (this.isEmpty()) {
    return -1
  }
  return this.stack[this.stack.length - 1]
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  if (this.stack[this.stack.length - 1] === undefined || this.stack[this.stack.length - 1] === null) {
    return true
  }
  return false
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */