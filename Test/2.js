
// 给你一个字符串 word。如果 word 中同时出现某个字母 c 的小写形式和大写形式，并且 每个 小写形式的 c 都出现在第一个大写形式的 c 之前，则称字母 c 是一个 特殊字母 。
// 返回 word 中 特殊字母 的数量。

// var numberOfSpecialChars = function (word) {
//   const hashMap = new Map()
//   const fake = new Map()
//   const arr = []
//   let count = 0
//   for (let item of word) {
//     // 小写进入
//     if (item.charCodeAt() >= 97) {
//       if (arr.includes(item.toUpperCase())) {
//         if (fake.has(item.toLowerCase())) {

//         } else {
//           fake.set(item.toLowerCase(), 1)
//           count--
//         }
//       }
//     } else {
//       // 大写进入
//       if (arr.includes(item.toLowerCase())) {

//         if (hashMap.has(item.toLowerCase())) {

//         } else {
//           hashMap.set(item.toLowerCase(), 1)
//           count++
//         }
//       }
//     }
//     arr.push(item)
//   }
//   return (count < 0 ? 0 : count)
// };

// var numberOfSpecialChars = function (word) {
//   const hashMap = new Map();
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     const char = word[i];

//     if (char === char.toLowerCase()) {
//       // 当前字符为小写形式
//       if (hashMap.has(char.toUpperCase())) {
//         // 如果大写形式已经出现过，则符合条件，特殊字母数量加一
//         count++;
//       } else {
//         // 否则将小写形式字符存入 map
//         hashMap.set(char, i);
//       }
//     } else {
//       // 当前字符为大写形式，检查对应的小写形式是否出现在之前
//       if (hashMap.has(char.toLowerCase())) {
//         // 如果出现在之前，则符合条件，特殊字母数量加一
//         count++;
//       }
//     }
//   }

//   return count;
// };

// var numberOfSpecialChars = function (word) {
//   const hashMap = new Map();
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     const char = word[i];
//     if (char === char.toLowerCase()) {
//       if (hashMap.has(char.toUpperCase())) {
//         count++;
//       } else {
//         hashMap.set(char, i);
//       }
//     } else {
//       if (hashMap.has(char.toLowerCase())) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
// var numberOfSpecialChars = function (word) {
//   const seen = new Set();
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     const char = word[i];
//     const lowerCaseChar = char.toLowerCase();
//     const upperCaseChar = char.toUpperCase();

//     if (lowerCaseChar === char) {
//       // 当前字符为小写形式
//       if (seen.has(upperCaseChar)) {
//         // 如果对应的大写形式已经出现过，则符合条件，特殊字母数量加一
//         count++;
//       } else {
//         // 否则将小写形式字符存入 seen
//         seen.add(lowerCaseChar);
//       }
//     } else {
//       // 当前字符为大写形式，将其加入 seen
//       seen.add(upperCaseChar);
//     }
//   }
//   return count;
// };

// var numberOfSpecialChars = function (word) {
//   const seen = new Set();
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     const char = word[i];
//     const lowerCaseChar = char.toLowerCase();
//     const upperCaseChar = char.toUpperCase();
//     if (seen.has(lowerCaseChar) && !seen.has(upperCaseChar)) {
//       count++;
//     }
//     seen.add(char);
//   }
//   return count;
// };
var numberOfSpecialChars = function (word) {
  let count = 0
  let set = new Set(word.toLowerCase())
  for (let item of set) {
    if (word.indexOf(item.toUpperCase()) === -1) {
      continue
    }

    if (word.indexOf(item.toUpperCase()) > word.lastIndexOf(item.toLowerCase())) {
      if (word.lastIndexOf(item.toLowerCase()) === -1) {
        continue
      }
      count++
    }
  }
  return count
}

console.log(numberOfSpecialChars("AbBCab"))
console.log(numberOfSpecialChars("AbBCab"))
console.log(numberOfSpecialChars("EAdEecD"))
console.log(numberOfSpecialChars("AbcbDBdD"))
console.log(numberOfSpecialChars('asbASBDdD'))
console.log(numberOfSpecialChars("aaAbcBC"))
console.log(numberOfSpecialChars("AbBcCab"))
console.log(numberOfSpecialChars("dcbCC"))
console.log(numberOfSpecialChars("abDBAbb"))

