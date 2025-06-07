const pivotInteger = function(n) {
    const totalSum = n * (n + 1) / 2;

    let leftSum = 0;

    for (let x = 1; x <= n; x++) {
        leftSum += x;
        const rightSum = totalSum - leftSum + x;

        if (leftSum === rightSum) {
            return x;
        }
    }

    return -1;
};

console.log(pivotInteger(8)) // 6
console.log(pivotInteger(1)) // 1
console.log(pivotInteger(4)) // -1