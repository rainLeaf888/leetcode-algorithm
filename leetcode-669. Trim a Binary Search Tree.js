//https://leetcode.com/problems/trim-a-binary-search-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
    if (!root) return null;
    else {
        if (root.left) root.left = trimBST(root.left, L, R)
        if (root.right) root.right = trimBST(root.right, L, R)
        return (root.val < L || root.val > R) ? (root.left || root.right) : root;
    }
};

//Depth-first Search with recursion
function traverseDF (node, callback = n => console.log(n.val)) {
    (function visit(n) {
        callback(n);
        if (n.left) visit(n.left);
        if (n.right) visit(n.right);
    })(node)
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var t1 = new TreeNode(3);
var t1_2 = new TreeNode(0);
var t1_3 = new TreeNode(4);
var t1_4 = new TreeNode(2);
var t1_5 = new TreeNode(1);
t1.left = t1_2;
t1.right = t1_3;
t1_2.right = t1_4;
t1_4.left = t1_5;
var t2 = new TreeNode(1);
var t2_1 = new TreeNode(0);
var t2_2 = new TreeNode(2);
t2.left = t2_1;
t2.right = t2_2;
var params = [[t1, 1 ,3],[t2, 1 ,2]];
trimBST.apply(null, params[1])