const findLHS = function(nums) {
    const freq = new Map();
    let maxLength = 0;

    for (const num of nums) {
        freq.set(num, freq.get(num) + 1 || 1)
    }

    for (const key of freq.keys()) {
        if (freq.get(key + 1)) {
            maxLength = Math.max(maxLength, freq.get(key) + freq.get(key + 1));
        }
    }

    return maxLength;
};

console.log(findLHS([1,3,2,2,5,2,3,7])) // 5
console.log(findLHS([1,2,3,4])) // 2
console.log(findLHS([1,1,1,1])) // 0