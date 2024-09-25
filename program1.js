/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];
   
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (mapping[char]) {
            // Pop the topmost element from the stack if it's not empty, else assign a dummy value
            let topElement = stack.length === 0 ? '#' : stack.pop();
            // If the mapping for the closing bracket doesn't match the popped element, return false
            if (topElement !== mapping[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all the brackets were matched correctly
    return stack.length === 0;
};

module.exports = { isValid };
