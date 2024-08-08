let maxFrequencyElements = function (nums) {
    let elements = new Map();
    for (const num of nums) {
        elements.set(num, elements.get(num) + 1 || 1);
    }
    let max = Math.max(...elements.values());

    let output = [];

    elements.forEach((value, key, map) => {
        if (value === max) output.push(key);
    });

    return output.length * max || 0;
};

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
console.log(maxFrequencyElements([1, 2, 3, 4, 5]));
console.log(maxFrequencyElements([]));