/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (!t1 && !t2) return null;
    var t3 = new TreeNode((t1 && t1.val ? t1.val : 0) + (t2 && t2.val ? t2.val : 0))
    loop(t1, t2, t3)
    return t3;

    function loop(t1, t2, t3) {
      if((t1 && t1.left) || (t2 && t2.left)) {
        let v1 = t1 && t1.left ? t1.left.val : 0
        let v2 = t2 && t2.left ? t2.left.val : 0
        loop((t1 && t1.left ? t1.left : null), (t2 && t2.left ? t2.left : null
        ), t3.left = new TreeNode(v1 + v2))
      }
      if((t1 && t1.right) || (t2 && t2.right)) {
        let v1 = t1 && t1.right ? t1.right.val : 0
        let v2 = t2 && t2.right ? t2.right.val : 0
        loop((t1 && t1.right ? t1.right : null), (t2 && t2.right ? t2.right : null
        ), t3.right = new TreeNode(v1 + v2))
      }
    }
};

function TreeNode(val) {
  this.val = val;;
  this.left = this.right = null;
}

// test data
  var t1 = new TreeNode(1);
  var t1_2 = new TreeNode(3);
  var t1_3 = new TreeNode(2);
  var t1_4 = new TreeNode(5);
  t1.left = t1_2;
  t1.right = t1_3;
  t1_2.left = t1_4
  var t2 = new TreeNode(2);
  var t2_2 = new TreeNode(1);
  var t2_3 = new TreeNode(3);
  var t2_4 = new TreeNode(4);
  var t2_5 = new TreeNode(7);
  t2.left = t2_2;
  t2.right = t2_3;
  t2_2.right = t2_4;
  t2_3.right = t2_5;

  mergeTrees(t1, t2)
  