// ❓ DESCRIPTION:
// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.
// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.
//
// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].
//
// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!
//
// ✅ SOLUTION:
const decrypt = function(code, k) {
    let result = new Array(code.length).fill(0);
    if (k === 0) return result

    if (k > 0) {
        for (let i = 0; i < code.length; i++) {
            for (let j = i + 1; j <= k + i; j++) {
                result[i] += code[j % code.length]
            }
        }
    } else {
        for (let i = 0; i < code.length; i++) {
            for (let j = k + i; j <= i - 1; j++) {
                result[i] += code[(j + code.length) % code.length]
            }
        }
    }
    return result
};

// 📌 TESTCASE:
console.log(decrypt([5,7,1,4], 3)) // [12,10,16,13]
console.log(decrypt([1,2,3,4],  0)) // [0,0,0,0]
console.log(decrypt([2,4,9,3], -2)) // [12,5,6,13]
console.log(decrypt([10,5,7,7,3,2,10,3,6,9,1,6], -4)) // [22,26,22,28,29,22,19,22,18,21,28,19]