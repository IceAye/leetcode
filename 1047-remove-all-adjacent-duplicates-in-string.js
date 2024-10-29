// ❓ DESCRIPTION:
// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can.
// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
//
// ✅ SOLUTION:
let removeDuplicates = function(s) {
    let stack = [];
    for (const char of s) {
        (stack.at(-1) !== char) ? stack.push(char) : stack.pop();
    }
    return stack.join("");
};

// 📌 TESTCASE:
console.log(removeDuplicates("abbaca")) // "ca"
console.log(removeDuplicates("azxxzy")) // "ay"
console.log(removeDuplicates("abbbabaaa")) // "ababa"
console.log(removeDuplicates("aaaaaaaa")) // ""