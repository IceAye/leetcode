
// SOLUTION 1:
const largestCombination = function(candidates) {
    let result = [];
    let binaries = candidates.map(item => item.toString(2));
    for (let i = 1; i <= 24; i++) {
        let count = 0;
        for (let j = 0; j < binaries.length; j++) {
            if (binaries[j].at(-i) === "1") count++;
        }
        result.push(count);
    }
    return Math.max(...result);
};

// SOLUTION 2:
const largestCombination = function(candidates) {
    let result = [];
    for (let i = 1; i <= 24; i++) {
        let count = 0;
        for (let j = 0; j < candidates.length; j++) {
            if (candidates[j] & (1 << i)) count++;
        }
        result.push(count);
    }
    return Math.max(...result);
};


console.log(largestCombination([16,17,71,62,12,24,14])) // 4
console.log(largestCombination([8,8])) // 2
