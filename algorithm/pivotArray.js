const pivotArray = function (nums, pivot) {
  let minQueue = []
  let maxQueue = []
  let pivotArr = []
  for (let item of nums) {
    if (item < pivot) {
      minQueue.push(item)
    } else if (item > pivot) {
      maxQueue.push(item)
    } else if (item === pivot) {
      pivotArr.push(item)
    }
  }
  return [...minQueue, ...pivotArr, ...maxQueue]
}
