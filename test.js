"use strict"
// exporting TreeNode class
const TreeNode = require("./tree_node.js");
//console.log(TreeNode);

// creating an instance of the tree node
var root = new TreeNode(80);
root.right = new TreeNode(95);
root.left = new TreeNode(59);
root.left.right = new TreeNode(78);
root.left.left = new TreeNode(19);

// printing each tree node
console.log("printing nodes")
root.print();
root.right.print();
root.left.print();
root.left.right.print();
root.left.left.print();

console.log("inOrderTraversal");
root.inOrderTraversal();

console.log("preOrderTraversal");
root.preOrderTraversal();

console.log("postOrderTraversal");
root.postOrderTraversal();

// inOrder traversal stand alone function
function inorder(node){
	if(node){
		inorder(node.left);
		node.print();
		inorder(node.right);
	}
}
console.log("inOrderTraversal stand alone function");
inorder(root);