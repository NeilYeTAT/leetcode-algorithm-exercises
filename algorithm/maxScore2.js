const maxScore = function (cardPoints, k) {
  const n = cardPoints.length
  let len = n - k
  let window = 0
  for (let i = 0; i < len; i++) {
    window += cardPoints[i]
  }
  let sum = window
  let minSum = window
  for (i = len, j = 0; i < n; i++, j++) {
    window += cardPoints[i]
    window -= cardPoints[j]
    sum += cardPoints[i]
    minSum = Math.min(minSum, window)
  }
  return sum - minSum
}

const cardPoints = [1, 2, 3, 4, 5, 6, 1],
  k = 3
console.log(maxScore(cardPoints, k))
