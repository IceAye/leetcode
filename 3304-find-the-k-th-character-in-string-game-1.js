// ❓ DESCRIPTION:
// Alice and Bob are playing a game. Initially, Alice has a string word = "a".
// You are given a positive integer k.
// Now Bob will ask Alice to perform the following operation forever:
// Generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word.
// For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".
// Return the value of the kth character in word, after enough operations have been done for word to have at least k characters.
// Note that the character 'z' can be changed to 'a' in the operation.
//
// ✅ SOLUTION (runtime 98.51%):
let kthCharacter = function(k) {
    let a = "a";
    while (a.length - 1 < k) {
        let generated = a.replace(/./gi, c => c === "z" ? "a" : String.fromCharCode(c.charCodeAt(0) + 1))
        a += generated.toLowerCase()
    }
    return a.at(k - 1)
};

// 📌 TESTCASE:
console.log(kthCharacter(5))
console.log(kthCharacter(10))