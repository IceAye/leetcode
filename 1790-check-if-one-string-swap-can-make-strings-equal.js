// ❓ DESCRIPTION:
// You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.
//
// ✅ SOLUTION (100% runtime):

const areAlmostEqual = function (s1, s2) {
    let indexes = [];
    if (s1 === s2) return true;
    if (s1.length !== s2.length) return false;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            indexes.push(i);
        }
    }
    let temp = [...s1];
    if (indexes.length === 2) {
        [temp[indexes[0]], temp[indexes[1]]] = [temp[indexes[1]], temp[indexes[0]]];
        return temp.join("") === s2;
    }
    return false;
};

// 📌 TESTCASE:
console.log(areAlmostEqual("bank", "kanb")); // true
console.log(areAlmostEqual("attack", "defend")); // false
console.log(areAlmostEqual("kelb", "kelb")); // true
console.log(areAlmostEqual("caa", "aaz")); // false