const minmumCardPickup = function (cards) {
  if (cards.length === 1) return -1
  const hashMap = new Map()
  let ans = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < cards.length; i++) {
    if (hashMap.has(cards[i])) {
      ans = Math.min(ans, i - hashMap.get(cards[i]) + 1)
      if (ans === 2) return 2 
    }
    hashMap.set(cards[i])
    hashMap.set(cards[i], i)
  }
  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans
}
