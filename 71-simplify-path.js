/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
    const stack = [];

    const array = path.match(/[^\/]+/g) || '';

    for (const item of array) {
        if (item === '.') continue;
        if (item === '..') {
            stack.pop();
        } else {
            stack.push(item);
        }
    }
    return '/' + stack.join('/');
};

console.log(simplifyPath("/home/")) // "/home"
console.log(simplifyPath("/home//foo/")) // "/home/foo"
console.log(simplifyPath("/home/user/Documents/../Pictures")) // "/home/user/Pictures"
console.log(simplifyPath("/../")) // "/"
console.log(simplifyPath("/.../a/../b/c/../d/./")) // "/.../b/d"
console.log(simplifyPath("///")) // "/"