let countOperations = function (num1, num2) {
    let count = 0;

    while (num1 > 0 && num2 > 0) {
        if (num1 >= num2) {
            count++;
            num1 -= num2;
        } else {
            count++;
            num2 -= num1;
        }
    }
    return count;
};

console.log(countOperations(2, 3));
console.log(countOperations(10, 10));
