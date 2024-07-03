var myPow = function (x, n) {
  let N = n
  return N >= 0 ? quickMul(x, N) : 1.0 / quickMul(x, -N)
}

var quickMul = function (x, N) {
  if (N === 0) {
    return 1.0
  }
  let y = quickMul(x, Math.floor(N / 2))
  return N % 2 === 0 ? y * y : y * y * x
}
