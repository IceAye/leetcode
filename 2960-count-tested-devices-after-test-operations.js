let countTestedDevices = function (batteryPercentages) {
    let result = 0;
    for (let i = 0; i < batteryPercentages.length; i++) {
        if (batteryPercentages[i] > 0) {
            result += 1;
            batteryPercentages = batteryPercentages.map(item => item -= 1);
        }
    }
    return result;
};

console.log(countTestedDevices([1, 1, 2, 1, 3]));
console.log(countTestedDevices([0, 1, 2]));