// 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

// 依然是两个栈拼队列的思想

// --------------------------------------内存消耗过大, 不推荐使用
// var MyStack = function () {
//   this.innerQueue = []
//   this.outerQueue = []
// };

// MyStack.prototype.push = function (x) {
//   this.innerQueue.push(x)
// };

// MyStack.prototype.pop = function () {
//   let i = 0
//   let j = 0
//   while (this.innerQueue.length - 1 !== i) {
//     this.outerQueue.push(this.innerQueue[i])
//     i++
//   }
//   while (j < i) {
//     this.innerQueue.shift()
//     j++
//   }
//   return this.innerQueue.pop()
// };

// MyStack.prototype.top = function () {
//   let i = 0
//   let j = 0
//   while (this.innerQueue.length - 1 !== i) {
//     this.outerQueue.push(this.innerQueue[i])
//     i++
//   }
//   while (j < i) {
//     this.innerQueue.shift()
//     j++
//   }
//   return this.innerQueue[0]
// };

// MyStack.prototype.empty = function () {
//   return this.innerQueue.length === 0 && this.outerQueue.length === 0
// };

// 进阶: 仅使用一个队列来表示栈
var MyStack = function () {
    this.queue = []
    this.orign = 0
};

MyStack.prototype.push = function (x) {
    this.queue.push(x)
    for (let i = 0; i < this.queue.length - 1; i++) {
        this.queue.push(this.queue.shift())
    }
};

MyStack.prototype.pop = function () {
    return this.queue.shift()
};

MyStack.prototype.top = function () {
    return this.queue[0]
};

MyStack.prototype.empty = function () {
    return this.queue.length === 0
};

