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
            if (topElement !== mapping[char]) {     
                 return false;
            }
        } else  
        {

            stack.push(char);
        }
    }
    
    return stack.length === 0;
};

module.exports = { isValid };
