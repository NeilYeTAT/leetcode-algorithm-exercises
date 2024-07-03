var convertInteger = function(A, B) {
  let res = 0
  let diff = A ^ B

  while (diff) {
    if (diff & 1) {
      res++
    }
    diff >>>= 1
  }
  return res
};