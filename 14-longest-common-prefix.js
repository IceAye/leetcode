// ❓ DESCRIPTION:
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
//
// ✅ SOLUTION (100% runtime, 75.17% memory):
const longestCommonPrefix = function (strs) {
    let result = "";

    let i = 0;
    while (i < strs[0].length) {
        let char = strs[0][i];
        if (strs.every((item) => item[i] === char)) {
            result += char;
            i++;
        } else break;
    }

    return result;
};

// 📌 DESCRIPTION:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""