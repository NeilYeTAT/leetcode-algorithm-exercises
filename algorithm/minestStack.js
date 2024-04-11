// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// --------------常数时间获取栈中最小元素...给个指针吗?
// 逆天, 创建两个栈, 一个最小栈, 一个数据栈
// 两边同时压入, 最小栈只压更小的哪个值, 重复也无所谓, 因为在栈底部

var MinStack = function () {
  this.minStack = []
  this.dataStack = []
};

MinStack.prototype.push = function (val) {
  this.dataStack.push(val)
  if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val)
  } else {
    this.minStack.push(this.minStack[this.minStack.length - 1])
  }
};

MinStack.prototype.pop = function () {
  this.dataStack.pop()
  this.minStack.pop()
};

MinStack.prototype.top = function () {
  if (this.minStack.length - 1) {
    return this.dataStack[this.dataStack.length - 1]
  }
  return this.dataStack[0]
};

MinStack.prototype.getMin = function () {
  if (this.minStack.length - 1) {
    return this.minStack[this.minStack.length - 1]
  }
  return this.minStack[0]
};