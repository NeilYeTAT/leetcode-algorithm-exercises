const nextLargerNodes = function (head) {
  const arr = []
  let cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }
  //  push index , not value
  const stack = []
  const res = Array(arr.length).fill(0)
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      res[stack.pop()] = arr[i]
    }
    stack.push(i)
  }
  return res
}

const head = [2, 1, 5]
console.log(nextLargerNodes(head))
