// ❓ DESCRIPTION:
// Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have written.
// Typing other characters works as expected.
// You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.
// Return the final string that will be present on your laptop screen.
//
// ✅ SOLUTION:
let finalString = function ( s ) {
    let result = []
    for (const char of s) {
        char === 'i' ? result.reverse() : result.push(char)
    }
    return result.join('')
}

console.log('Output: ' , finalString("string"))
console.log('Output: ' , finalString("poiinter"))