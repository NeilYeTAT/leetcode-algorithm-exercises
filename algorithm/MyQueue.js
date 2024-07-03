/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack1 = []
  this.stack2 = []
  this.forX = 0
  this.forY = 0
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
  this.stack2.push(x)
  this.forX++
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack2[this.forY++]
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack2[this.forY]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack2.length === this.forY
}
