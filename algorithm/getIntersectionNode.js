// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

// const getIntersectionNode = function (headA, headB) {
//   const hashMap = new Map()
//   let cur = headA
//   while (cur) {
//     hashMap.set(cur, 1)
//     cur = cur.next
//   }
//   cur = headB
//   while (cur) {
//     if (hashMap.has(cur)) {
//       return cur
//     }
//     cur = cur.next
//   }
//   return null
// }

const getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let hA = headA,
    hB = headB
  let diff = 0
  while (hA) {
    diff++
    hA = hA.next
  }
  while (hB) {
    diff--
    hB = hB.next
  }
  if (hA !== hB) {
    return null
  }
  if (diff >= 0) {
    hA = headA
    hB = headB
  } else {
    hA = headB
    hB = headA
  }
  diff = Math.abs(diff)
  while(diff > 0) {
    hA = hA.next
    diff--
  }
  while (hA !== null && hB !== null){
    if (hA === hB) {
      return hA
    }
    hA = hA.next
    hB = hB.next
  }
  return null
}
