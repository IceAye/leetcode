// ❓ DESCRIPTION:
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
// Most languages support lowercase conversion for a string data type.
// However, that is certainly not the purpose of the problem.
// Think about how the implementation of the lowercase function call can be done easily.
//
// ✅ SOLUTION:
let toLowerCase = function (s) {
    let str = ''
    for (let char of s) {
        str += (char >= 'A' && char <= 'Z') ? String.fromCharCode(char.charCodeAt(0) + 32) : char
    }
    return str
}

console.log('Output: ' , toLowerCase("Hello"))
console.log('Output: ' , toLowerCase("LOVELY"))