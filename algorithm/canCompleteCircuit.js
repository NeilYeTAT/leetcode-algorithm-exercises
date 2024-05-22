const canCompleteCircuit = function (gas, cost) {
  const n = gas.length
  for (let l = 0, r = 0, len = 0, sum = 0; l < gas.length; l++) {
    while(sum >= 0) {
      if (len === n){
        return l
      }
      r = (l + (len++)) % n
      sum += gas[r] - cost[r]
    }
    len--
    sum -= gas[l] - cost[l]
  }
  return -1
}
// const gas = [2,3,4], cost = [3,4,3]
const gas = [1,2,3,4,5], cost = [3,4,5,1,2]
console.log(canCompleteCircuit(gas, cost));
