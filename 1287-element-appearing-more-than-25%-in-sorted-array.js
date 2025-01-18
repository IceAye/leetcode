const findSpecialInteger = function (arr) {
    let maxCount = new Map();
    for (const num of arr) {
        maxCount.set(num, maxCount.get(num) + 1 || 1);
        if (maxCount.get(num) > Math.floor(0.25 * arr.length)) {
            return num;
        }
    }
};

const findSpecialInteger = function (arr) {
    let sliding = Math.floor(0.25 * arr.length);
    for (let i = 0; i < arr.length - sliding; i++) {
        if (arr[i] === arr[i + sliding]) return arr[i];
    }
};

console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10])) // 6
console.log(findSpecialInteger([1, 1])) // 1