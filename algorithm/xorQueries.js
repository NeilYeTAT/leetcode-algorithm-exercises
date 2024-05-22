const xorQueries = function (arr, queries) {
  const xorSum = Array(arr.length + 1)
  xorSum[0] = 0
  for (let i = 0; i < arr.length; i++) {
    xorSum[i + 1] = xorSum[i] ^ arr[i]
  }
  const ans = Array(queries.length)
  for (let i = 0; i < queries.length; i++) {
    ans[i] = xorSum[queries[i][1] + 1] ^ xorSum[queries[i][0]]
  }
  return ans
}

// const arr = [1, 3, 4, 8],
//   queries = [
//     [0, 1],
//     [1, 2],
//     [0, 3],
//     [3, 3],
//   ]
const arr = [4, 8, 2, 10], queries = [[2, 3], [1, 3], [0, 0], [0, 3]]
console.log(xorQueries(arr, queries))
