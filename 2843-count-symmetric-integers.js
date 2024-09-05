let countSymmetricIntegers = function (low, high) {
    let count = 0;

    for (let i = low; i <= high; i++) {
        let number = i.toString();

        if (number.length % 2 === 0) {
            let leftSum = 0;
            let rightSum = 0;
            let halfLength = number.length / 2;

            for (let j = 0; j < halfLength; j++) {
                leftSum += +number[j];
            }
            for (let k = halfLength; k < number.length; k++) {
                rightSum += +number[k];
            }

            if (leftSum === rightSum) count++;
        }
    }
    return count;
};

console.log(countSymmetricIntegers(1, 100));
console.log(countSymmetricIntegers(1200, 1230));
console.log(countSymmetricIntegers(1, 10000));