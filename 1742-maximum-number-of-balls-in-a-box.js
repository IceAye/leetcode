// ❓ DESCRIPTION:
// You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.
// Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.
// Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.
//
// ✅ SOLUTION:

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
