const longestCommonPrefix = function (strs) {
    let result = "";
    let maxLength = strs.reduce((acc, curr) => (curr.length > acc ? curr.length : acc), 0);

    let i = 0;
    while (i < maxLength) {
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