

const maxScore = function(cardPoints, k) {
  if (cardPoints.length === k) {
    return cardPoints.reduce((acc, cur) => acc + cur)
  }
  const sum = cardPoints.reduce((acc, cur) => acc + cur)
  let len = cardPoints.length - k
  let l = 0, r = 0
  let tempSum = 0
  while (r < len) {
    tempSum += cardPoints[r]
    r++
  }
  for (; r < cardPoints.length; r++, l++) {
    let temp = tempSum
    tempSum -= cardPoints[l]
    tempSum += cardPoints[r]
    tempSum = Math.min(tempSum, temp)
  }
  return sum - tempSum
}