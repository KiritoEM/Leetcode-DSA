var increasingBST = function (root) {
    let nodes = [];

    const inorder = (node) => {
        if (!node) return;
        inorder(node.left);
        nodes.push(node);
        inorder(node.right);
    };

    inorder(root);

    for (let i = 0; i < nodes.length; i++) {
        nodes[i].left = null;
        nodes[i].right = nodes[i + 1] || null;
    }

    return nodes[0];
};
