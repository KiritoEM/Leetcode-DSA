/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let inorderRes = [];

    const inorder = (node) => {
        if (!node) return;

        inorder(node.left);
        inorderRes.push(node);
        inorder(node.right);
    }

    inorder(root);

    for (let i = 0; i < inorderRes.length; i++) {
        inorderRes[i].left = null;
        inorderRes[i].right = inorderRes[i + 1] || null;
    }

    return inorderRes[0];
};