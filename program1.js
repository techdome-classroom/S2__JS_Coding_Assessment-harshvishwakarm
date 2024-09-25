/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to keep track of opening brackets
    let stack = [];
    // Mapping of closing brackets to their corresponding opening brackets
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate through each character in the string
    for (let char of s) {
        // If the character is a closing bracket
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
