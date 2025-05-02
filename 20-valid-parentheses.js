const isValid = function(s) {
    let stack = [s.at(-1)];
    for (let i = s.length - 2; i >= 0; i--) {
        let curr = s[i]
        if ((stack.at(-1) === ')' && curr === '(') || (stack.at(-1) === ']' && curr === '[') || (stack.at(-1) === '}' && curr === '{')) {
            stack.pop();
        } else stack.push(curr);
    }
    return stack.length === 0;
};

console.log(isValid('()')) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false
console.log(isValid("([])")) // true
console.log(isValid("([)]")) // false