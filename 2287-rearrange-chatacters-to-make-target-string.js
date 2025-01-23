const rearrangeCharacters = function(s, target) {
    let count = 0;

    let isInclude = true;

    while (isInclude) {
        for (const char of target) {
            if (s.match(new RegExp(`${char}`))) {
                s = s.replace(new RegExp(`${char}`) , "");
            } else {
                return count;
            }
        }
        count++
    }
};

console.log(rearrangeCharacters("ilovecodingonleetcode", "code")) // 2
console.log(rearrangeCharacters("abcba", "abc")) // 1
console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa")) // 1