// ❓ DESCRIPTION:
// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.
//
// ✅ SOLUTION (runtime 96.99%):
let checkString = function (s) {
    let indexOfFirstB = s.indexOf("b");
    return indexOfFirstB === -1 || !s.slice(indexOfFirstB).includes("a");
};

// 📌 TESTCASE:
console.log(checkString("aaabbb"));
console.log(checkString("abab"));
console.log(checkString("bbb"));
console.log(checkString("a"));