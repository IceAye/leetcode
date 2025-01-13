const averageValue = function (nums) {
    let array = [];
    for (const num of nums) {
        if (num % 2 === 0 && num % 3 === 0) {
            array.push(num);
        }
    }
    let n = array.length;
    if (n) {
        let sum = array.reduce((acc, curr) => acc + curr, 0);
        return Math.floor(sum / n);
    }
    return 0;
};

console.log(averageValue([1, 3, 6, 10, 12, 15])); // 9
console.log(averageValue([1, 2, 4, 7, 10])); // 0
console.log(averageValue([43,9,75,76,25,96,46,85,19,29,88,2,5,24,60,26,76,24,96,82,97,97,72,35,21,77,82,30,94,55,76,94,51])); // 57