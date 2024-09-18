let countBalls = function(lowLimit, highLimit) {
    let map = new Map();
    let numberOfBalls = highLimit - lowLimit + 1;


    for (let i = 0; i < numberOfBalls; i++) {
        let digit = Array.from((lowLimit + i).toString(), Number)
        let currentSum = digit.reduce((sum, current) => sum + current)
        map.set(currentSum, (map.get(currentSum) + 1) || 1)
    }

    return Math.max(...map.values());
};

console.log(countBalls(1, 10))
console.log(countBalls(5, 15))
console.log(countBalls(19, 28))
