const sumOddLengthSubarrays = function(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);

    let i = 3;
    while (i <= arr.length) {
        for (let j = 0; j < arr.length - i + 1; j++) {
            let subArray = arr.slice(j, j + i);
            sum += subArray.reduce((acc, curr) => acc + curr, 0);
        }
        i += 2;
    }

    return sum;
};

console.log(sumOddLengthSubarrays([1,4,2,5,3])) // 58
console.log(sumOddLengthSubarrays([1,2])) // 3
console.log(sumOddLengthSubarrays([10,11,12])) // 66