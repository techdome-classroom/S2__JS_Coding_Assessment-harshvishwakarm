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
            let topElement = stack.length === 0 ? '#' : stack.pop();
            // If the mapping for the closing bracket doesn't match the popped element, return false
            if (topElement !== mapping[char]) {
                return false;
            }
        } else {
       
            stack.push(char);
        }
    }
    
   
    return stack.length === 0;
};

module.exports = { isValid };
