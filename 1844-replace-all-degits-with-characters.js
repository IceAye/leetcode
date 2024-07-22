// ❓ DESCRIPTION:
// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
//
// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.
//
// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).
//
// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.
//
// ✅ SOLUTION:

let replaceDigits = function ( s ) {
    let word = ""
    for (let i = 0; i < s.length; i++) {
        if (i % 2 !== 0) {
            word += String.fromCharCode(s.charCodeAt(i - 1) + +s.at(i))
        } else {
            word += s.at(i)
        }
    }
    return word
}

console.log(replaceDigits("a1c1e1"))
console.log(replaceDigits("a1b2c3d4e"))