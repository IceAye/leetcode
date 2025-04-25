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

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""