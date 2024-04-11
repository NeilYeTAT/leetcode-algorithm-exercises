// 左, 右, 中

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const postorderTraversal = function(root) {
  let result = []
  function gcd(root) {
    if(root === null) {
      return 
    }
    gcd(root.left)
    gcd(root.right)
    result.push(root.val)
  }
  gcd(root)
  return result
}