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

const minRemoveToMakeValid = function(s) {
    const toRemove = new Set();
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') {
            stack.push(i);
        } else if (char === ')') {
            if (stack.length) {
                stack.pop();
            } else {
                toRemove.add(i);
            }
        }
    }

    for (const item of stack) toRemove.add(item);

    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!toRemove.has(i)) result += s[i];
    }

    return result;
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)")) // "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d")) // "ab(c)d"
console.log(minRemoveToMakeValid("))((")) // ""