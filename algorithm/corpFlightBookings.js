
const corpFlightBookings = function(bookings, n) {
  const ans = new Array(n).fill(0)
  const table = new Array(n + 1).fill(0)
  for (let item of bookings) {
    table[item[0] - 1] += item[2]
    table[item[1]]  -= item[2]
  }
  const preSum = new Array(n)
  preSum[0] = 0
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + table[i]
  }
  for (let i = 0; i < n; i++) {
    ans[i] += preSum[i + 1]
  }
  return ans
}

// const bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
const bookings = [[1,2,10],[2,2,15]], n = 2
console.log(corpFlightBookings(bookings, n))