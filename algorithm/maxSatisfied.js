var maxSatisfied = function (customers, grumpy, minutes) {
  let ans = 0
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      ans += customers[i]
      customers[i] = 0
    }
  }
  let left = 0, window = 0, temp = 0
  for (let i = 0; i < customers.length; i++) {
    window += customers[i]
    while (i - left + 1 > minutes) {
      window -= customers[left]
      left++
    }
    temp = Math.max(temp, window)
  }
  return temp + ans
}

const customers = [2, 4, 1, 4, 1],
  grumpy = [1, 0, 1, 0, 1],
  minutes = 2
// const customers = [1, 0, 1, 2, 1, 1, 7, 5],
//   grumpy = [0, 1, 0, 1, 0, 1, 0, 1],
//   minutes = 3
// const customers = [9, 10, 4, 5],
//   grumpy = [1, 0, 1, 1],
//   minutes = 1
console.log(maxSatisfied(customers, grumpy, minutes))
