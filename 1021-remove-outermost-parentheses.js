const removeOuterParentheses = function (s) {
    const parentheses = {
        '(': 1,
        ')': -1,
    }
    let result = '';
    let count = 0;

    for (const char of s) {
        if (count === 0) {
            count += parentheses[char]
        } else if (count >= 1) {
            count += parentheses[char];
            if (count !== 0) {
                result += char;
            }
        }
    }
    return result;
};

console.log(removeOuterParentheses('(()())(())')) // '()()()'
console.log(removeOuterParentheses('(()())(())(()(()))')) // '()()()()(())'
console.log(removeOuterParentheses('()()')) // ''