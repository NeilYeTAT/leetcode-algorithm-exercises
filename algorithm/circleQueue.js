/**
 * MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。
 */


var MyCircularQueue = function (k) {
  this.rear = 0
  this.limit = k
  this.front = 0
  this.size = 0
  this.queue = new Array(k).fill(0)
};

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false
  }
  if (this.rear === this.limit) {
    this.rear = 0
  }
  this.queue[this.rear] = value
  this.rear++
  this.size++
  return true
};

MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false
  }
  if (this.front === this.limit - 1) {
    this.front = 0
    this.size--
    return true
  }
  this.front++
  this.size--
  return true
};

MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1
  }
  return this.queue[this.front]
};

MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return - 1
  }
  return this.rear === 0 ? this.queue[this.limit - 1] : this.queue[this.rear - 1]
};

MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0
};

MyCircularQueue.prototype.isFull = function () {
  return this.size === this.limit
};
