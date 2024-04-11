// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
// 中, 左, 右
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const preorderTraversal = function (root) {
  let result = []
  function gcd(root) {
    if (root === null) {
      return
    }
    result.push(root.val)
    gcd(root.left)
    gcd(root.right)
  }
  gcd(root)
  return result
}

