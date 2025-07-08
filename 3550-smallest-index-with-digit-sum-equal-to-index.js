const smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        const digits = Array.from(nums[i].toString(), Number);
        const sumOfDigits = digits.reduce((acc, curr) => acc + curr, 0);
        if (i === sumOfDigits) return i;
    }

    return -1;
};

const smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i];
        let sumOfDigits = 0;

        while (number > 0) {
            sumOfDigits += number % 10;
            number = Math.floor(number / 10);
        }

        if (i === sumOfDigits) return i;
    }

    return -1;
};

console.log(smallestIndex([1, 3, 2])); // 2
console.log(smallestIndex([1, 10, 11])); // 1
console.log(smallestIndex([1, 2, 3])); // -1