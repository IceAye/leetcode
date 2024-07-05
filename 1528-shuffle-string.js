// ❓ DESCRIPTION:
// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.
//
// 📌 EXAMPLES:
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3] --> Output: "leetcode"
// Input: s = "abc", indices = [0,1,2] --> Output: "abc"
//
// ✅ SOLUTION:
let restoreString = function (s, indices) {
    let result = []
    for (let i = 0; i < indices.length; i++) {
        result[indices[i]] = s[i]
    }
    return result.join('')
}
console.log('Output: ' , restoreString("codeleet", [4,5,6,7,0,2,1,3]))
console.log('Output: ' , restoreString("abc", [0,1,2]))
