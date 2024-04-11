// 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
// 构造函数, 两个for循环, 一个清空 inner, 一个添加清空的元素到outer里面去

var MyQueue = function () {
  this.stackInner = []
  this.stackOuter = []
};

MyQueue.prototype.push = function (x) {
  this.stackInner.push(x)
};

MyQueue.prototype.pop = function () {
  if (this.stackOuter.length === 0) {
    if (this.stackInner.length > 0) {
      for (let i = this.stackInner.length - 1; i >= 0; i--) {
        this.stackOuter.push(this.stackInner[i])
      }
      for (let i = this.stackInner.length - 1; i >= 0; i--) {
        this.stackInner.pop()
      }
    }
  }
  return this.stackOuter.pop()
};

MyQueue.prototype.peek = function () {
  if (this.stackOuter.length === 0) {
    if (this.stackInner.length > 0) {
      for (let i = this.stackInner.length - 1; i >= 0; i--) {
        this.stackOuter.push(this.stackInner[i])
      }
      for (let i = this.stackInner.length - 1; i >= 0; i--) {
        this.stackInner.pop()
      }
    }
  }
  return this.stackOuter[this.stackOuter.length - 1]
};

MyQueue.prototype.empty = function () {
  return this.stackInner.length === 0 && this.stackOuter.length === 0
};
