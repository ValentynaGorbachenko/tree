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

// creating an instance of the tree node
var root = new TreeNode(80);
root.right = new TreeNode(95);
root.left = new TreeNode(59);
root.left.right = new TreeNode(78);
root.left.left = new TreeNode(19);

// printing each tree node
root.print();
root.right.print();
root.left.print();
root.left.right.print();
root.left.left.print();