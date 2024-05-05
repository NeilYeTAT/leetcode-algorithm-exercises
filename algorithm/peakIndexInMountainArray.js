

const peakIndexInMountainArray = function(arr) {
  let l = 0, r = arr.length -1
  let mid = 0

  while(l < r) {
    mid = Math.floor((r - l) / 2 + l)
    if (arr[mid] > arr[mid] - 1) {
      r = mid - 1
    } else if (arr[mid] < arr[mid] - 1) {
      l = mid + 1
    } else {
      return mid
    }
  }
}
