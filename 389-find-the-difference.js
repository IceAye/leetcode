const findTheDifference = function (s, t) {
    let s1 = [...s].sort();
    let t1 = [...t].sort();
    for (let i = 0; i < t1.length; i++) {
        if (s1[i] !== t1[i]) return t1[i];
    }
};

console.log(findTheDifference("abcd", "abcde")); // e
console.log(findTheDifference("", "y")); // y