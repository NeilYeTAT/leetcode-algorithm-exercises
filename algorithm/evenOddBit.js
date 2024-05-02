

const evenOddBit = function(n) {
  let binary = n.toString(2).split('').reverse().join('')
  let even = 0, odd = 0
  for (let i = binary.length - 1; i >= 0; i--){
    if (i % 2 === 0 && binary[i] === '1') {
      even ++
    } else if (i % 2 !== 0 &&  binary[i] === '1') {
      odd++
    }
  }
  return [even, odd]
}

console.log(evenOddBit(2));
// console.log(evenOddBit(17));