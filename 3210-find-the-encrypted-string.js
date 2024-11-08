// ❓ DESCRIPTION:
// You are given a string s and an integer k. Encrypt the string using the following algorithm:
// For each character c in s, replace c with the kth character after c in the string (in a cyclic manner).
// Return the encrypted string.
//
// ✅ SOLUTION:

const getEncryptedString = function(s, k) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        result += s.at((i + k) % s.length);
    }
    return result;
};

// 📌 TESTCASE:
console.log(getEncryptedString("dart", 3)) // "tdar"
console.log(getEncryptedString("aaa", 1)) // "aaa"