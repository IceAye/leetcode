// ❓ DESCRIPTION:
// You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.
// The rules of a Unix-style file system are as follows:
// A single period '.' represents the current directory.
// A double period '..' represents the previous/parent directory.
// Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
// Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.
// The simplified canonical path should follow these rules:
// The path must start with a single slash '/'.
// Directories within the path must be separated by exactly one slash '/'.
// The path must not end with a slash '/', unless it is the root directory.
// The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
// Return the simplified canonical path.

// ❗ ONSTRAINTS:
// 1 <= path.length <= 3000
// path consists of English letters, digits, period '.', slash '/' or '_'.
// path is a valid absolute Unix path.

// ✅ SOLUTION (100% runtime, 12.10% memory):
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

// 📌 TESTCASE:
console.log(simplifyPath("/home/")) // "/home"
console.log(simplifyPath("/home//foo/")) // "/home/foo"
console.log(simplifyPath("/home/user/Documents/../Pictures")) // "/home/user/Pictures"
console.log(simplifyPath("/../")) // "/"
console.log(simplifyPath("/.../a/../b/c/../d/./")) // "/.../b/d"
console.log(simplifyPath("///")) // "/"