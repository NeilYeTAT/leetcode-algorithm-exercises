// 给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。


// 示例 1：

// 输入：words = ["bella","label","roller"]
// 输出：["e","l","l"]
// 示例 2：

// 输入：words = ["cool","lock","cook"]
// 输出：["c","o"]

const commonChars = function (words) {
  const hashMap = new Array(26).fill(0)
  console.log(hashMap)
  for (let k = 0; k < words[0].length; k++) {
    hashMap[words[0][k]]++
  }

  
}

const words = ["bella", "label", "roller"]
console.log(commonChars(words))