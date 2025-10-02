/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function(s) {
    let array = [...s];
    const stack = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '(') {
            stack.push(i)
        } else if (array[i] === ')') {
            if (stack.length) {
                stack.pop();
            } else {
                array[i] = i;
            }
        }
    }
    return array.filter((item, index) => typeof item !== 'number' && !stack.includes(index)).join('');
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)")) // "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d")) // "ab(c)d"
console.log(minRemoveToMakeValid("))((")) // ""