let prefixCount = function (words, pref) {
    let sum = 0;
    for (const word of words) {
        sum += word.startsWith(pref);
    }
    return sum;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
console.log(prefixCount(["leet", "win", "locodeops", "success"], "code"));