// 设计实现双端队列。

// 实现 MyCircularDeque 类:

// MyCircularDeque(int k) ：构造函数,双端队列最大为 k 。
// boolean insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false 。
// boolean insertLast() ：将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false 。
// boolean deleteFront() ：从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false 。
// boolean deleteLast() ：从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false 。
// int getFront() )：从双端队列头部获得一个元素。如果双端队列为空，返回 -1 。
// int getRear() ：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 。
// boolean isEmpty() ：若双端队列为空，则返回 true ，否则返回 false  。
// boolean isFull() ：若双端队列满了，则返回 true ，否则返回 false 。
// ["MyCircularDeque","insertLast","insertLast","insertFront","insertFront","getRear","isFull","deleteLast","insertFront","getFront"]
var MyCircularDeque = function (k) {
  this.arr = new Array(k).fill(0)
  this.left = 0
  this.right = 1
  this.limit = k
  this.size = 0
};

MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) {
    return false
  } else {
    if (this.isEmpty()) {
      this.left = 0
      this.right = 0
      this.arr[0] = value
    } else {
      this.left = this.left === 0 ? this.limit - 1 : this.left - 1
      this.arr[this.left] = value
    }
    this.size++
    return true
  }
};

MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) {
    return false
  } else {
    if (this.isEmpty()) {
      this.left = 0
      this.right = 0
      this.arr[0] = value
    } else {
      this.right = this.right === this.limit - 1 ? 0 : this.right + 1
      this.arr[this.right] = value
    }
    this.size++
    return true
  }
};

MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false
  } else {
    this.left = (this.left === this.limit - 1) ? 0 : this.left + 1
    this.size--
    return true
  }
};

MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false
  } else {
    this.right = (this.right === 0) ? this.limit - 1 : this.right - 1
    this.size--
    return true
  }
};

MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return -1
  } else {
    return this.arr[this.left]
  }
};

MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return -1
  } else {
    return this.arr[this.right]
  }
};

MyCircularDeque.prototype.isEmpty = function () {
  return this.size === 0
};

MyCircularDeque.prototype.isFull = function () {
  return this.size === this.limit
};

