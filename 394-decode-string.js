/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
    const stack = [];
    let i = 0;
    while (i < s.length) {
        if (s[i] !== ']') {
            stack.push(s[i]);
            i++;
        } else {
            let content = '';
            let number = '';

            while (stack[stack.length - 1] !== '[') {
                content = stack.pop() + content;
            }
            stack.pop();

            while (/\d/.test(stack[stack.length - 1])) {
                number = stack.pop() + number;
            }

            stack.push(content.repeat(+number));
            i++;
        }
    }
    return stack.join('');
};

console.log(decodeString('3[a]2[bc]')); // "aaabcbc"
console.log(decodeString('3[a2[c]]')); // "accaccacc"
console.log(decodeString('2[abc]3[cd]ef')); // "abcabccdcdcdef"