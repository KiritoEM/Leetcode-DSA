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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let nodesList = [];

    const preOrder = (node, list) => {
        if (!node) return;

        list.push(node);

        //left
        preOrder(node.left, list);

        //right
        preOrder(node.right, list);
    }

    preOrder(root, nodesList);

    for (let i = 0; i < nodesList.length - 1; i++) {
        nodesList[i].left = null;
        nodesList[i].right = nodesList[i + 1];
    }
};