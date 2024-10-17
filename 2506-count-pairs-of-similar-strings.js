let similarPairs = function (words) {
    let sets = words.map(item => [...new Set([...item].sort())].join(""));
    let count = 0;
    for (let i = 0; i < sets.length - 1; i++) {
        for (let j = i + 1; j < sets.length; j++) {
            if (sets[i] === sets[j]) count++;
        }
    }
    return count;
};

console.log(similarPairs(["aba","aabb","abcd","bac","aabc"]))
console.log(similarPairs(["aabb","ab","ba"]))
console.log(similarPairs(["nba","cba","dba"]))