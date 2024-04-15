
Array.prototype.last = function () {
  if (this[this.length - 1] === undefined) {
    return -1
  } else {
    return this[this.length - 1]
  }
}
const arr = [1, 2, 3]
console.log(arr.last())