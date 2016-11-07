"use strict"
// class TreeNode
function TreeNode(val){
	this.val = val;
	this.right = null;
	this.left = null;
}
// prototype function print of TreeNode
TreeNode.prototype.print = function(){
	console.log(this.val);
};
// prototype function debug of TreeNode
// migth not work on the node that doesn't have right o left 
TreeNode.prototype.debug = function(){
	
	console.log(" "+ this.left.val + " " + this.val + " " + this.right.val);
};

// inOrderTraversal prototype function
TreeNode.prototype.inOrderTraversal = function(){
	if (this){
		if (this.left){
			this.left.inOrderTraversal();
		}
		this.print();
		if (this.right){
			this.right.inOrderTraversal();
		}
	}
};

// preOrderTraversal prototype
TreeNode.prototype.preOrderTraversal = function(){
	if (this){
		this.print();
		if (this.left){
			this.left.inOrderTraversal();
		}
		if (this.right){
			this.right.inOrderTraversal();
		}
	}
};

// postOrderTraversal prototype
TreeNode.prototype.postOrderTraversal = function(){
	if (this){
		if (this.left){
			this.left.inOrderTraversal();
		}
		if (this.right){
			this.right.inOrderTraversal();
		}
		this.print();
	}
}

// module.exports = {
// 	tr: TreeNode
// }

// exports TreeNode class
module.exports = TreeNode;