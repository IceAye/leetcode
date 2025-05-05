const countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);

    return words.reduce((acc, word) => {
        for (const char of word) {
            if (!allowedSet.has(char)) {
                return acc;
            }
        }
        return acc + 1;
    }, 0);
};

console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"])) // 2
console.log(countConsistentStrings("abc",["a","b","c","ab","ac","bc","abc"])) // 7
console.log(countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"])) // 4