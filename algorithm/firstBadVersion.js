




var solution = function (isBadVersion) {
  return function (n) {
    let left = 1, right = n, mid = 0, result = null
    while (left <= right) {
      // mid = parseInt((left + right) / 2)
      mid = Math.floor(((right - left) >> 1) + left)
      // 如果这个版本是错误的版本
      if (isBadVersion(mid)) {
        right = mid - 1
      } else {
        // 如果这个版本不是错误的版本, 还在后面
        left = mid + 1
      }
    }
    return left
  };
};