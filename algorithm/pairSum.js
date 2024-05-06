const pairSum = function (head) {
  let cur = head
  let arr = []
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  let ans = Number.MIN_SAFE_INTEGER
  for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
    ans = Math.max(ans, arr[l] + arr[r])
  }
  return ans
}

