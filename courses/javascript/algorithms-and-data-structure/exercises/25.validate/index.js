// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    
    if (!max) {
        max = node.data;
        return validate(node.left, min, max);
    }

    if (node.data > max || node.left > node.data) {
        return false;
    }

    if (node.left) {
        return validate(node.left, min, max);
    } else {
        
    }


}

module.exports = validate;
