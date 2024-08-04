let separateDigits = function (nums) {
    return nums
        .join("")
        .split("")
        .map((item) => +item);
};

console.log(separateDigits([13, 25, 83, 77]));
console.log(separateDigits([7, 1, 3, 9]));