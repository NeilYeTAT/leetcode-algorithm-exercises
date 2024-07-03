const widthOfBinaryTree = function (root) {
  let res = 0
  const queue = Array(3001)
  const hashMap = Array(3001)
  let l = 0,
    r = 0
  if (root) {
    queue[r] = root
    hashMap[r++] = 1
  }
  while (l < r) {
    let size = r - l
    res = Math.max(res, hashMap[r - 1] - hashMap[l] + 1)
    while (size) {
      let temp = queue[l]
      let id = hashMap[l++]
      if (temp.left) {
        queue[r] = temp.left
        hashMap[r++] = id * 2
      }
      if (temp.right) {
        queue[r] = temp.right
        hashMap[r++] = id * 2 + 1
      }
      size--
    }
  }
  return res
}

/**
 * const widthOfBinaryTree = function (root) {
  let res = 0n; // 使用 BigInt 类型的结果
  const queue = Array(3001);
  const hashMap = Array(3001);
  let l = 0, r = 0;
  if (root) {
    queue[r] = root;
    hashMap[r++] = 1n; // 初始化为 BigInt
  }
  while (l < r) {
    let size = r - l;
    res = res > (hashMap[r - 1] - hashMap[l] + 1n) ? res : (hashMap[r - 1] - hashMap[l] + 1n); // 使用 BigInt 进行计算
    while (size) {
      let temp = queue[l];
      let id = hashMap[l++];
      if (temp.left) {
        queue[r] = temp.left;
        hashMap[r++] = id * 2n; // 使用 BigInt 进行乘法
      }
      if (temp.right) {
        queue[r] = temp.right;
        hashMap[r++] = id * 2n + 1n; // 使用 BigInt 进行乘法和加法
      }
      size--;
    }
  }
  return Number(res); // 将结果转换为普通数字输出
}
 */
