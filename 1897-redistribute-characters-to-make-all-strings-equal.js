const makeEqual = function (words) {
    let map = new Map();
    [...words.join("")].map((item) => map.set(item, map.get(item) + 1 || 1));
    return [...map.values()].every((item) => item % words.length === 0);
};

console.log(makeEqual(["abc", "aabc", "bc"])); // true
console.log(makeEqual(["ab", "a"])); // false
