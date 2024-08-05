let countCompleteDayPairs = function (hours) {
    let result = 0;
    for (let i = 0; i < hours.length - 1; i++) {
        for (let j = 1; j < hours.length; j++) {
            if ((hours[i] + hours[j]) % 24 === 0 && i < j) result++;
        }
    }
    return result;
};

console.log(countCompleteDayPairs([12, 12, 30, 24, 24]));
console.log(countCompleteDayPairs([72, 48, 24, 3]));