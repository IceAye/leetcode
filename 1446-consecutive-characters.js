const maxPower = function (s) {
    let count = 1;

    let temp = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            temp++;
            count = Math.max(count, temp);
        } else {
            temp = 1;
        }
    }
    return count;
};

console.log(maxPower("leetcode")); // 2
console.log(maxPower("abbcccddddeeeeedcba")); // 5